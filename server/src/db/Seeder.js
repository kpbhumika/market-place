/* eslint-disable no-console */
import { connection } from "../boot.js"
import CategorySeeder from "./seeders/CategoriesSeeder.js"
import ListingSeeder from "./seeders/ListingsSeeder.js"
import UserSeeder from "./seeders/UsersSeeder.js"


class Seeder {
  static async seed() {
    console.log("seeding Categories")
    await CategorySeeder.seed()

    console.log("seeding Users")
    await UserSeeder.seed()

    console.log("seeding Listings")
    await ListingSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder