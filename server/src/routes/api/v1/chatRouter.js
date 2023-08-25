import express from "express"
import { User,Chat } from "../../../models/index.js"

const chatRouter = new express.Router()

chatRouter.get("/", async (req, res) => {
    try {
        const currentUserId = req.user.id
        const chats = await Chat.query().where('buyerId', currentUserId).orWhere('sellerId', currentUserId);

        const serializedChats= await Promise.all(chats.map(async chat => {

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

export default chatRouter