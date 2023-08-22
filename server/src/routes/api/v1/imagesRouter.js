import express from "express"
import { Listing } from "../../../models/index.js"

const imagesRouter = new express.Router()

imagesRouter.get("/", async (req, res) => {
    try {
        const sellerId = req.user.id
        const images = await Listing.query().select('image').whereNot('sellerId', sellerId);
        return res.status(200).json({ images })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

export default imagesRouter