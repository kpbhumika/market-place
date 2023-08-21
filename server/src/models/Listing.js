const Model = require("./Model.js")

class Listing extends Model {
    static get tableName() {
        return "listings"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["title", "description", "price", "location"],
            properties: {
                title: { type: "string", minLength: 2 },
                description: { type: "string", minLength: 2 },
                price: { type: "string" },
                location: { type: "string" },
                sold: { type: ["boolean", "string"] },
                image: { type: "string" },
            }
        }
    }

    static get relationMappings() {
        const { Category, User} = require("./index.js")
        return {
            category: {
                relation: Model.BelongsToOneRelation,
                modelClass: Category,
                join: {
                    from: "listings.categoryId",
                    to: "categories.id"
                }
            },
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "listings.sellerId",
                    to: "users.id"
                }
            }
        }
    }
}

module.exports = Listing
