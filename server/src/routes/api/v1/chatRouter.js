import express from "express"
import { User, Chat } from "../../../models/index.js"
import { ValidationError } from "objection"
import cleanUserInput from "../../../services/cleanUserInput.js"

const chatRouter = new express.Router()

chatRouter.get("/", async (req, res) => {
    try {
        const currentUserId = req.user.id
        const chats = await Chat.query().where('buyerId', currentUserId).orWhere('sellerId', currentUserId);

        const serializedChats = await Promise.all(chats.map(async chat => {

            const serializedChat = {}
            serializedChat.id = chat.id
            serializedChat.seller = await chat.$relatedQuery("seller")
            serializedChat.buyer = await chat.$relatedQuery("buyer")
            if (currentUserId === serializedChat.seller.id) {
                serializedChat.currentUserIs = "seller"
            } else {
                serializedChat.currentUserIs = "buyer"
            }
            return serializedChat
        }))
        return res.status(200).json({ chats: serializedChats })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ errors: error })
    }
})

chatRouter.post('/', async (req, res) => {
    try {
        const { sellerId, buyerId } = cleanUserInput(req.body);
        const chatPresent1 = await Chat.query().findOne({ sellerId:sellerId, buyerId:buyerId });
        const chatPresent2 = await Chat.query().findOne({ sellerId:buyerId, buyerId:sellerId })

        if (chatPresent1 || chatPresent2) {
            const seller = await User.query().findById(sellerId).select('firstName');
            const chatPresent = chatPresent1 || chatPresent2;
            chatPresent.sellerName = seller ? seller.firstName : '';
            return res.status(201).json({ chat: chatPresent });
        } else {
            const seller = await User.query().findById(sellerId);
            const addedChat = await Chat.query().insertAndFetch({ sellerId, buyerId });
            if (seller) {
                addedChat.sellerName = seller.firstName;
            }
            return res.status(201).json({ chat: addedChat });
        }
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({ errors: error.data });
        }
        return res.status(500).json({ errors: error });
    }
});

export default chatRouter