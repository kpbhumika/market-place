/* eslint-disable no-console */
import { connection } from "../boot.js"
import CategorySeeder from "./seeders/CategoriesSeeder.js"
import ChatSeeder from "./seeders/ChatSeeder.js"
import ListingSeeder from "./seeders/ListingsSeeder.js"
import UserSeeder from "./seeders/UsersSeeder.js"
import MessageSeeder from "./seeders/MessageSeeder.js"


class Seeder {
  static async seed() {
    console.log("seeding Categories")
    await CategorySeeder.seed()

    console.log("seeding Users")
    await UserSeeder.seed()

    console.log("seeding Listings")
    await ListingSeeder.seed()

    console.log("seeding Chats")
    await ChatSeeder.seed()

    console.log("seeding Messages")
    await MessageSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder