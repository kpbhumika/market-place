/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("listings", (table) => {
        table.bigIncrements("id")
        table.string("title").notNullable()
        table.string("description",500).notNullable()
        table.string("price").notNullable()
        table.string("condition")
        table.bigInteger("categoryId").references("categories.id").index().unsigned().notNullable()
        table.bigInteger("sellerId").references("users.id").index().unsigned().notNullable()
        table.timestamp("createdAt").defaultTo(knex.fn.now()).notNullable()
        table.timestamp("updatedAt").defaultTo(knex.fn.now()).notNullable()
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("listings")
}
