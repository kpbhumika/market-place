const Model = require("./Model.js")

class Listing extends Model {
    static get tableName() {
        return "listings"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["title, description, price"],
            properties: {
                title: { type: "string", minLength: 2 },
                description: { type: "string", minLength: 2 },
                price: { type: ["string", "integer"] }
            }
        }
    }

    // static get relationMappings() {
    //     const { Category, Review} = require("./index.js")
    //     return {
    //         category: {
    //             relation: Model.BelongsToOneRelation,
    //             modelClass: Category,
    //             join: {
    //                 from: "activities.categoryId",
    //                 to: "categories.id"
    //             }
    //         },
    //         reviews: {
    //             relation: Model.HasManyRelation,
    //             modelClass: Review,
    //             join: {
    //                 from: "activities.id",
    //                 to: "reviews.activityId"
    //             }
    //         }
    //     }
    // }
}

module.exports = Listing
