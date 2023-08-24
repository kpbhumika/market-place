const Model = require("./Model.js")

class Message extends Model {
    static get tableName() {
        return "messages"
    }
    static get jsonSchema() {
        return {
            type: "object",
            required: ["text"],
            properties: {
                text: { type: "string", minLength: 1 },
            }
        }
    }

    static get relationMappings() {
        const { Chat, User} = require("./index.js")
        return {
            chat: {
                relation: Model.BelongsToOneRelation,
                modelClass: Chat,
                join: {
                    from: "messages.id",
                    to: "chats.messageId"
                }
            },
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "messages.userId",
                    to: "users.id"
                }
            }
        }
    }

}

module.exports = Message
