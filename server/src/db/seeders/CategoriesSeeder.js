import { Category } from "../../models/index.js"

class CategorySeeder {
    static async seed() {
        const categoryData = [
            {name: "Home and Living"},
            {name: "Fashion and Apparel"},
            {name: "Beauty and Cosmetics"},
            {name: "Books and Stationery"},
            {name: "Pet Accessories"},
            {name: "Event Tickets"},
            {name: "Arts and Crafts"},
            {name: "Electronics"},
            {name: "Entertainment"},
            {name: "Health and Wellness"},
            {name: "Antiques and Collectibles"},
            {name: "Other"}
        ]

        for (const category of categoryData) {
            const currentCategory = await Category.query().findOne({ name: category.name })
            if (!currentCategory) {
                await Category.query().insert(category)
            }
        }
    }
}

export default CategorySeeder
