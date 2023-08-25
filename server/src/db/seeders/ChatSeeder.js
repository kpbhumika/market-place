import { Chat, User } from "../../models/index.js"

class ChatSeeder {
    static async seed() {
        const thomas = await User.query().findOne({ email: "thomas@gmail.com" })
        const jane = await User.query().findOne({ email: "Jane@gmail.com" })
        const bhumika = await User.query().findOne({ email: "bhumika@1995.com" })
        const chatData = [
            {
                sellerId: thomas.id,
                buyerId: jane.id,
            },
            {
                sellerId: jane.id,
                buyerId: bhumika.id,
            },
            {
                sellerId: bhumika.id,
                buyerId: thomas.id,
            }
        ]

        for (const oneChat of chatData) {
            const currentChat = await Chat.query().findOne({ sellerId: oneChat.sellerId, buyerId: oneChat.buyerId})

            if (!currentChat) {
                await Chat.query().insert(oneChat)
            }
        }
    }
}

export default ChatSeeder
