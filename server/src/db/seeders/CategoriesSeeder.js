import { Category } from "../../models/index.js"

class CategorySeeder {
    static async seed() {
        const categoryData = [
            {
                name: "Furniture"
            },
            {
                name: "Clothes"
            },
            {
                name: "Electronics"
            }
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
