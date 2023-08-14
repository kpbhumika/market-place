import express from "express"
import { Listing } from "../../../models/index.js"

const userListingRouter = new express.Router()

userListingRouter.get("/", async (req, res) => {
    const sellerId = req.user.id
    try {
        const listings = await Listing.query().where('sellerId', sellerId);
        return res.status(200).json({ listings })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

export default userListingRouter
