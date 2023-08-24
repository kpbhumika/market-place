const Model = require("./Model.js")

class Chat extends Model {
    static get tableName() {
        return "chats"
    }

    static get relationMappings() {
        const { Message, User} = require("./index.js")
        return {
            messages: {
                relation: Model.HasManyRelation,
                modelClass: Message,
                join: {
                    from: "chats.messageId",
                    to: "messages.id"
                }
            },
            seller: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "chats.sellerId",
                    to: "users.id"
                }
            },
            buyer: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "chats.buyerId",
                    to: "users.id"
                }
            }
        }
    }
}

module.exports = Chat
