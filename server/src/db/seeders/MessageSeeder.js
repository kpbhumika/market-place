import { Chat, User, Message } from "../../models/index.js"

class MessageSeeder {
    static async seed() {
        const thomas = await User.query().findOne({ email: "thomas@gmail.com" })
        const jane = await User.query().findOne({ email: "Jane@gmail.com" })
        const bhumika = await User.query().findOne({ email: "bhumika@1995.com" })
        const chat1 = await Chat.query().findOne({id:1})
        const chat2 = await Chat.query().findOne({id:2})
        const chat3 = await Chat.query().findOne({id:3})


        const messageData = [
            {
                text: "Hi from Thomas!",
                userId: thomas.id,
                chatId:chat1.id

            },
            {
                text: "Hi from Bhumika!",
                userId: bhumika.id,
                chatId:chat3.id
            },
            {
                text: "I would like to buy this item.",
                userId: bhumika.id,
                chatId:chat2.id
            }
        ]

        for (const oneMessage of messageData) {
                await Message.query().insert(oneMessage)
        }
    }
}

export default MessageSeeder
