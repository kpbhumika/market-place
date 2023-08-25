/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("messages", (table) => {
        table.bigIncrements("id")
        table.string("text").notNullable()
        table.bigInteger("userId").references("users.id").index().unsigned().notNullable()
        table.bigInteger("chatId").references("chats.id").index().unsigned().notNullable()
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("messages");
}
