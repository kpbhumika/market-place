const Model = require("./Model.js")

class Message extends Model {
    static get tableName() {
        return "messages"
    }
    static get jsonSchema() {
        return {
            type: "object",
            required: ["text", "time"],
            properties: {
                text: { type: "string", minLength: 1 },
                time: { type: "string" },
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
