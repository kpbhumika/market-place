import express from "express"
import { Category, Listing } from "../../../models/index.js"

const categoryRouter = new express.Router()

categoryRouter.get("/", async (req, res) => {
    try {
        const categories = await Category.query();
        return res.status(200).json({ categories })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

categoryRouter.get("/:category", async (req, res) => {
    const currentUser = req.user.id
    const categoryName = req.params.category
    try {
        const category = await Category.query().where('name', categoryName)
        const categoryId = category[0].id
        const categoryListing = await Listing.query().where('categoryId', categoryId).andWhereNot('sellerId',currentUser).andWhere('sold', false);
        return res.status(200).json({ listings: categoryListing})
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})



export default categoryRouter
