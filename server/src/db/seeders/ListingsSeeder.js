import { Category, User , Listing } from "../../models/index.js"

class ListingSeeder {
    static async seed() {
        const thomas = await User.query().findOne({ email: "thomas@gmail.com" })
        const jane = await User.query().findOne({ email: "Jane@gmail.com" })
        const bhumika = await User.query().findOne({ email: "bhumika@1995.com" })
        const furniture = await Category.query().findOne({ name: "Furniture" })
        const clothes = await Category.query().findOne({ name: "Clothes" })
        const electronics = await Category.query().findOne({ name: "Electronics" })
        const listingsData = [
            {
                title: "coffee table",
                description: "Stylish Coffee Table: Elevate your living space with this modern coffee table. Crafted from sleek wood and metal, it seamlessly blends form and function. Its spacious surface offers ample room for beverages, books, or décor. The minimalist design complements various aesthetics. Upgrade your home with this versatile piece.",
                price: "250",
                condition: "used",
                location: "Boston",
                sellerId: thomas.id,
                categoryId: furniture.id
            },
            {
                title: "standind desk",
                description: "Daiah Ergonomic Curved Height Adjustable Standing Desk",
                price: "150",
                condition: "used",
                location: "Boston",
                image: "https://market-place-development.s3.amazonaws.com/1692651324357",
                sellerId: thomas.id,
                categoryId: furniture.id
            },
            {
                title: "women's pant",
                description: "Athleta Women's Size S Gray Leggings Activewear",
                price: "30",
                location: "California",
                sellerId: jane.id,
                categoryId: clothes.id
            },
            {
                title: "earphones",
                description: "Apple Wired EarPods with Lightning Connector",
                price: "20",
                location: "Austin",
                sellerId: bhumika.id,
                categoryId: electronics.id
            },
            {
                title: "monitor",
                description: "27inch 4k LG Monitor",
                price: "100",
                location: "California",
                sellerId: thomas.id,
                categoryId: electronics.id
            }
        ]

        for (const oneListing of listingsData) {
            const currentListing = await Listing.query().findOne({ title: oneListing.title })
            if (!currentListing) {
                await Listing.query().insert(oneListing)
            }
        }
    }
}

export default ListingSeeder
