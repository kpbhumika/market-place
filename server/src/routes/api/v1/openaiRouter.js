import express from "express"
import OpenAI from 'openai';
import {config}  from "../../../config.js"

const openai = new OpenAI({
    apiKey: config.openaiApiKey
  })

const openaiRouter = new express.Router()

openaiRouter.get("/", async (req, res) => {
    console.log("inside openairouter")
    try {
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": "Hello!"}],
          });
        return res.send("success")
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

export default openaiRouter
