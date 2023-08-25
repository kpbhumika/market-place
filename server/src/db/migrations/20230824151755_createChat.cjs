/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("chats", (table) => {
        table.bigIncrements("id")
        table.bigInteger("sellerId").references("users.id").index().unsigned().notNullable()
        table.bigInteger("buyerId").references("users.id").index().unsigned().notNullable()
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("chats");
}
