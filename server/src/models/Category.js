const Model = require("./Model.js");
const uniqueFactory = require("objection-unique");

const unique = uniqueFactory({
    fields: ["name"],
});

class Category extends unique(Model) {
    static get tableName() {
        return "categories";
    }

    static get jsonSchema(){
        return {
            type: "object",
            required: ["name"],
            properties: {
                name: { type: "string", minLength: 2 }
            },
        };
    }

    static get relationMappings() {
        const { Listing } = require("./index.js");
        return {
            listings: {
                relation: Model.HasManyRelation,
                modelClass: Listing,
                join: {
                    from: "categories.id",
                    to: "listings.categoryId",
                },
            },
        };
    }
}

module.exports = Category;
