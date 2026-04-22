import express from "express"
import OpenAI from 'openai';
import { config } from "../../../config.js"

const openai = new OpenAI({
    apiKey: config.openaiApiKey
})

const openaiRouter = new express.Router()

function parseSafetyCheckContent(content) {
    const trimmed = (content || "").trim()
    const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i)
    const candidate = fenced ? fenced[1].trim() : trimmed
    const objectMatch = candidate.match(/\{[\s\S]*\}/)
    return JSON.parse(objectMatch ? objectMatch[0] : candidate)
}

openaiRouter.get("/", async (req, res) => {
    const description = req.query.description
    try {
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                "role": "user",
                "content": `Provide a JSON-formatted response with the following structure?
                {
                    isSafe: true/false,
                    reason: "string"
                }
                Evaluate whether the following description is suitable for a listing on an online marketplace in terms of its safety and legality for both the buyer and seller:
                "${description}"`
            }],
        });
        const raw = chatCompletion.choices[0]?.message?.content
        const safetyCheck = parseSafetyCheckContent(raw)
        return res.status(200).json({ safetyCheck })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

export default openaiRouter
