import express from "express"
import { Message } from "../../../models/index.js"
import { ValidationError } from "objection"
import cleanUserInput from "../../../services/cleanUserInput.js"

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


messageRouter.post('/', async (req, res) => {

    try {
        const userId = req.user.id
        const {chatId, text , time } = cleanUserInput(req.body)
        const message = await Message.query().insertAndFetch({ text, time, userId, chatId })
        return res.status(201).json({ message})
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({ errors: error.data })
        }
        return res.status(500).json({ errors: error })
    }
})

export default messageRouter