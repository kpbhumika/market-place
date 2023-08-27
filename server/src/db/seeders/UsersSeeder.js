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
            },
            {
                firstName: "Alice",
                lastName: "Smith",
                email: "alice.smith@example.com",
                password: "SecurePwd123"
            },
            {
                firstName: "David",
                lastName: "Johnson",
                email: "david.johnson@emailprovider.com",
                password: "Secret123!"
            },
            {
                firstName: "Emily",
                lastName: "Williams",
                email: "emily.williams123@example.net",
                password: "Passw0rd!456"
            },
            {
                firstName: "Michael",
                lastName: "Brown",
                email: "michael.brown@email.com",
                password: "StrongPwd789"
            },
            {
                firstName: "Olivia",
                lastName: "Jones",
                email: "olivia.jones456@example.org",
                password: "SecretPass987"
            },
            {
                firstName: "William",
                lastName: "Davis",
                email: "william.davis@example.org",
                password: "SecurePass12!"
            },
            {
                firstName: "Sophia",
                lastName: "Miller",
                email: "sophia.miller@example.net",
                password: "Pa55word!"
            },
            {
                firstName: "James",
                lastName: "Wilson",
                email: "james.wilson@emailprovider.com",
                password: "StrongSecret345"
            },
            {
                firstName: "Ava",
                lastName: "Martinez",
                email: "ava.martinez@example.com",
                password: "Protected123"
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
