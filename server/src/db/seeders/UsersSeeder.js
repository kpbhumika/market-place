import { User } from "../../models/index.js"

class UserSeeder {
    static async seed() {
        const userData = [
            {
                firstName: "Thomas",
                lastName: "Wilson",
                email: "thomas@gmail.com",
                password: "ThomasBoy123"
            },
            {
                firstName: "Jane",
                lastName: "Anderson",
                email: "Jane@gmail.com",
                password: "abc123"
            },
            {
                firstName: "Bhumika",
                lastName: "KP",
                email: "bhumika@1995.com",
                password: "bhumika1995"
            }
        ]

        for (const oneUser of userData) {
            const currentUser = await User.query().findOne({ email: oneUser.email })

            if (!currentUser) {
                await User.query().insert(oneUser)
            }
        }
    }
}

export default UserSeeder
