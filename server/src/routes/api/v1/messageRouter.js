import express from "express"
import { Message } from "../../../models/index.js"

const messageRouter = new express.Router()

messageRouter.get("/:chatId", async (req, res) => {
    try {
        const { chatId } = req.params
        const messages = await Message.query().where('chatId', chatId)

        const serializedMessages = await Promise.all(messages.map(async message => {

            const serializedMessage = {}
            serializedMessage.id = message.id
            serializedMessage.text = message.text
            serializedMessage.time = message.time
            serializedMessage.chatId = message.chatId
            const author = await message.$relatedQuery("user")
            serializedMessage.author = author.firstName
            return serializedMessage
        }))

        return res.status(200).json({ messages: serializedMessages })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})


export default messageRouter