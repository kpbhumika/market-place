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

listingsRouter.get("/all", async (req, res) => {
    const sellerId = req.user.id
    try {
        const listings = await Listing.query().whereNot('sellerId', sellerId)
        return res.status(200).json({ listings })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

listingsRouter.get("/:id", async (req, res) => {
    const listingId = req.params.id
    try {
        const listing = await Listing.query().findById(listingId)
        return res.status(200).json({ listing })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

export default listingsRouter