import express from "express"
import { Listing } from "../../../models/index.js"
import { ValidationError } from "objection"
import cleanUserInput from "../../../services/cleanUserInput.js"
import uploadImage from "../../../services/uploadImage.js"
import multer from "multer"

const userListingRouter = new express.Router()
const uploadMiddleware = uploadImage.single("image")

userListingRouter.get("/", async (req, res) => {
    const sellerId = req.user.id
    try {
        const listings = await Listing.query().where('sellerId', sellerId);
        return res.status(200).json({ listings })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

userListingRouter.post("/",uploadImage.single("image"), async (req, res) => {
    const sellerId = req.user.id
    const newListing = cleanUserInput(req.body)
    const image = req.file.location
    const { title, description, price, condition, location, categoryId } = newListing
    try {
        const addedListing = await Listing.query().insertAndFetch({ title, description, price, condition, location, categoryId, sellerId, image })
        return res.status(201).json({ listing: addedListing })
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({ errors: error.data })
        }
        return res.status(500).json({ errors: error })
    }
})

userListingRouter.delete("/:id", async (req, res) => {
    try {
        const listingToDelete = await Listing.query().findById(req.params.id)
        console.log("image",listingToDelete.image)
        if (listingToDelete.sellerId === req.user.id) {
            await listingToDelete.$query().delete()
        } else {
            const errorMessage = `You are not authorized to delete this listing.`
            const error = new Error(errorMessage)
            throw error
        }
        return res.status(200).json({ listing: listingToDelete })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

userListingRouter.patch("/:id", async (req,res) =>{
    const listingId = req.params.id
    try {
        const listing = await Listing.query().patchAndFetchById(listingId,{ sold : true })
        return res.status(201).json({ listing })
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({ errors: error.data })
        }
        return res.status(500).json({ errors: error })
    }
})

export default userListingRouter
