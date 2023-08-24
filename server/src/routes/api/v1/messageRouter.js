import express from "express"
import { User, Chat } from "../../../models/index.js"

const messageRouter = new express.Router()

messageRouter.get("/", async (req, res) => {
    // try {
    //     const sellerId = req.user.id
    //     const images = await Listing.query().select('image').whereNot('sellerId', sellerId);
    //     return res.status(200).json({ images })
    // } catch (error) {
    //     return res.status(500).json({ errors: error })
    // }
})

export default messageRouter