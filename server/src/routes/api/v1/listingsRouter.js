import express from "express"
import { Listing } from "../../../models/index.js"

const listingsRouter = new express.Router()

listingsRouter.get("/", async (req, res) => {
    const sellerId = req.user.id
    const query = req.query.title
    try {
        const listings = await Listing.query().whereNot('sellerId', sellerId).andWhere('sold', false)
            .andWhere(function () {
                this.where('title', 'ilike', `%${query}%`)
                    .orWhere('location', 'ilike', `%${query}%`);
            });
        return res.status(200).json({ listings })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

export default listingsRouter