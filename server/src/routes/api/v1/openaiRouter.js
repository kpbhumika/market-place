import express from "express"
import OpenAI from 'openai';
import { config } from "../../../config.js"

const openai = new OpenAI({
    apiKey: config.openaiApiKey
})

const openaiRouter = new express.Router()

openaiRouter.get("/", async (req, res) => {
    console.log("inside openairouter")
    try {
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                "role": "user",
                "content": `Provide a JSON-formatted response with the following structure?
                {
                    "isSafe": true/false,
                    "reason": "string"
                }
                Evaluate whether the following description is suitable for a listing on an online marketplace in terms of its safety and legality for both the buyer and seller:
                "${title} - ${condition}"`
            }],
        });
        console.log("open ai response", chatCompletion.choices[0].message.content)
        return res.send("success")
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

export default openaiRouter
