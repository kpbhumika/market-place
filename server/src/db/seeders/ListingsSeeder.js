import { Category, User , Listing } from "../../models/index.js"

class ListingSeeder {
    static async seed() {
        const thomas = await User.query().findOne({ email: "thomas@gmail.com" })
        const bhumika = await User.query().findOne({ email: "bhumika@1995.com" })
        const jane = await User.query().findOne({ email: "Jane@gmail.com" })
        const alice = await User.query().findOne({ email: "alice.smith@example.com" })
        const david = await User.query().findOne({ email: "david.johnson@emailprovider.com" })
        const emily = await User.query().findOne({ email: "emily.williams123@example.net" })
        const michael = await User.query().findOne({ email: "michael.brown@email.com" })
        const olivia = await User.query().findOne({ email: "olivia.jones456@example.org" })
        const william = await User.query().findOne({ email: "william.davis@example.org" })
        const sophia = await User.query().findOne({ email: "sophia.miller@example.net" })
        const james = await User.query().findOne({ email: "james.wilson@emailprovider.com" })
        const ava = await User.query().findOne({ email: "ava.martinez@example.com" })

        const HomeAndLiving = await Category.query().findOne({ name: "Home and Living" })
        const Electronics = await Category.query().findOne({ name: "Electronics" })
        const FashionAndApparel = await Category.query().findOne({ name: "Fashion and Apparel" })
        const BeautyAndCosmetics = await Category.query().findOne({ name: "Beauty and Cosmetics" })
        const BooksAndStationery = await Category.query().findOne({ name: "Books and Stationery" })
        const PetAccessories = await Category.query().findOne({ name: "Pet Accessories" })
        const EventTickets = await Category.query().findOne({ name: "Event Tickets" })
        const ArtsandCrafts = await Category.query().findOne({ name: "Arts and Crafts" })
        const Entertainment = await Category.query().findOne({ name: "Entertainment" })
        const HealthAndWellness = await Category.query().findOne({ name: "Health and Wellness" })
        const AntiquesAndCollectibles = await Category.query().findOne({ name: "Antiques and Collectibles" })
        const Other = await Category.query().findOne({ name: "Other" })

        const listingsData = [
            {
                title: "Standing desk",
                description: "Daiah Ergonomic Curved Height Adjustable Standing Desk",
                price: "150",
                condition: "used",
                location: "Boston",
                image: "https://market-place-development.s3.amazonaws.com/Standing_desk.jpg",
                sellerId: thomas.id,
                categoryId: HomeAndLiving.id
            },
            {
                title: "Refurbished MacBook Pro",
                description: "Powerful MacBook Pro laptop, refurbished and in great condition",
                price: "800",
                condition: "used",
                location: "New York",
                image: "https://market-place-development.s3.amazonaws.com/Refurbished_MacBook_Pro.jpg",
                sellerId: david.id,
                categoryId: Electronics.id,
              },
            {
                title: "Comfy Sectional Couch",
                description: "Spacious and comfortable sectional couch for your living room",
                price: "450",
                condition: "used",
                location: "Los Angeles",
                image: "https://market-place-development.s3.amazonaws.com/Comfy_Sectional_Couch.jpg",
                sellerId: thomas.id,
                categoryId: HomeAndLiving.id,
              },
            {
                title: "Used Coffee Table",
                description: "Elevate your living space with this modern coffee table",
                price: "150",
                condition: "used",
                location: "Boston",
                image: "https://market-place-development.s3.amazonaws.com/Used_Coffee_Table.jpg",
                sellerId: thomas.id,
                categoryId: HomeAndLiving.id,
              },
              {
                title: "Gently Worn Designer Handbag",
                description: "Add a touch of elegance to your outfit with this designer handbag",
                price: "250",
                condition: "used",
                location: "New York",
                image: "https://market-place-development.s3.amazonaws.com/Gently_Worn_Designer_Handbag.jpg",
                sellerId: jane.id,
                categoryId: FashionAndApparel.id,
              },
              {
                title: "Pet Grooming Kit",
                description: "Keep your furry friend looking their best with this comprehensive grooming kit",
                price: "35",
                condition: "Barely Used",
                location: "Los Angeles",
                image: "https://market-place-development.s3.amazonaws.com/Pet_Grooming_Kit.jpg",
                sellerId: bhumika.id,
                categoryId: PetAccessories.id,
              },
              {
                title: "Wireless Bluetooth Headphones",
                description: "Immerse yourself in music with these high-quality wireless headphones",
                price: "70",
                condition: "used",
                location: "San Francisco",
                image: "https://market-place-development.s3.amazonaws.com/Wireless_Bluetooth_Headphones.jpg",
                sellerId: david.id,
                categoryId: Electronics.id,
              },
              {
                title: "Classic Wooden Desk",
                description: "A well-maintained wooden desk with timeless design",
                price: "120",
                condition: "used-Like New",
                location: "Seattle",
                image: "https://market-place-development.s3.amazonaws.com/Classic_Wooden_Desk.jpg.avif",
                sellerId: emily.id,
                categoryId: HomeAndLiving.id,
              },
              {
                title: "Preloved Vintage Dress",
                description: "Elegant vintage dress, worn only a few times",
                price: "45",
                condition: "used",
                location: "New York",
                image: "https://market-place-development.s3.amazonaws.com/Vintage_Dress.jpg",
                sellerId: jane.id,
                categoryId: FashionAndApparel.id,
              },
              {
                title: "Cat Tree - Great for Multiple Cats",
                description: "Sturdy cat tree with scratching posts and cozy spots",
                price: "50",
                condition: "used",
                location: "Los Angeles",
                image: "https://market-place-development.s3.amazonaws.com/Cat_Tree_-_Great_for_Multiple_Cats.jpg",
                sellerId: bhumika.id,
                categoryId: PetAccessories.id,
              },
              {
                title: "Collection of Classic Novels",
                description: "Well-read collection of beloved classic novels",
                price: "75",
                condition: "used",
                location: "Chicago",
                image: "https://market-place-development.s3.amazonaws.com/Well-read_collection_of_beloved_classic_novels.jpg",
                sellerId: alice.id,
                categoryId: BooksAndStationery.id,
              },
              {
                title: "Smartphone - Excellent Condition",
                description: "High-quality smartphone with minimal signs of use",
                price: "180",
                condition: "used",
                location: "San Francisco",
                image: "https://market-place-development.s3.amazonaws.com/High-quality_smartphone_with_minimal_signs_of_use.jpg",
                sellerId: david.id,
                categoryId: Electronics.id,
              },
              {
                title: "Vintage Record Player",
                description: "Classic record player in good working condition",
                price: "90",
                condition: "used",
                location: "Nashville",
                image: "https://market-place-development.s3.amazonaws.com/Classic_record_player_in_good_working_condition.jpg",
                sellerId: william.id,
                categoryId: Electronics.id,
              },
              {
                title: "Cozy Knit Blanket - Well-Loved",
                description: "Warm and cozy knit blanket, perfect for chilly evenings",
                price: "25",
                condition: "used",
                location: "Denver",
                image: "https://market-place-development.s3.amazonaws.com/Cozy_Knit_Blanket_-_Well-Loved.jpg",
                sellerId: sophia.id,
                categoryId: HomeAndLiving.id,
              },
              {
                title: "Assorted Board Games Bundle",
                description: "Collection of classic board games for family fun",
                price: "40",
                condition: "used",
                location: "Seattle",
                image: "https://market-place-development.s3.amazonaws.com/Assorted_Board_Games_Bundle.jpg",
                sellerId: ava.id,
                categoryId: Entertainment.id,
              },
              {
                title: "Yoga Mat - Good Condition",
                description: "High-quality yoga mat for your practice",
                price: "20",
                condition: "used",
                location: "Miami",
                image: "https://market-place-development.s3.amazonaws.com/Yoga_Mat_-_Good_Condition.jpg",
                sellerId: michael.id,
                categoryId: HealthAndWellness.id,
              },
              {
                title: "Vintage Polaroid Camera",
                description: "Capture memories in retro style with this Polaroid camera",
                price: "55",
                condition: "used",
                location: "Austin",
                image: "https://market-place-development.s3.amazonaws.com/Vintage_Polaroid_Camera.jpg",
                sellerId: olivia.id,
                categoryId: Electronics.id,
              },
              {
                title: "Vintage Leather Jacket",
                description: "Timeless leather jacket with character and history",
                price: "75",
                condition: "used",
                location: "New York",
                image: "https://market-place-development.s3.amazonaws.com/Vintage_Leather_Jacket.jpg",
                sellerId: jane.id,
                categoryId: FashionAndApparel.id,
              },
              {
                title: "Classic Novels Bundle",
                description: "A collection of well-preserved classic novels",
                price: "30",
                condition: "used",
                location: "Chicago",
                image: "https://market-place-development.s3.amazonaws.com/Classic_Novels_Bundle.jpg",
                sellerId: alice.id,
                categoryId: BooksAndStationery.id,
              },
              {
                title: "Art Deco Table Lamp",
                description: "Elegant art deco table lamp with vintage charm",
                price: "55",
                condition: "used",
                location: "Los Angeles",
                image: "https://market-place-development.s3.amazonaws.com/Elegant_art_deco_table_lamp_with_vintage_charm.jpg",
                sellerId: bhumika.id,
                categoryId: HomeAndLiving.id,
              },
              {
                title: "Gaming Console Package",
                description: "Complete gaming console package with multiple games",
                price: "200",
                condition: "used",
                location: "Seattle",
                image: "https://market-place-development.s3.amazonaws.com/Gaming_Console_Package.jpg",
                sellerId: ava.id,
                categoryId: Electronics.id,
              },
              {
                title: "Antique Pocket Watch",
                description: "Exquisite antique pocket watch, a collector's dream",
                price: "120",
                condition: "used",
                location: "San Francisco",
                image: "https://market-place-development.s3.amazonaws.com/Exquisite_antique_pocket_watch,_a_collector's_dream.jpg",

                sellerId: william.id,
                categoryId: AntiquesAndCollectibles.id,
              },
              {
                title: "Concert Tickets - Rock Band",
                description: "Tickets for an upcoming rock band concert",
                price: "80",
                condition: "used",
                location: "Seattle",
                image: "https://market-place-development.s3.amazonaws.com/Concert_Tickets_-_Rock_Band.jpg",
                sellerId: ava.id,
                categoryId: EventTickets.id,
              },
              {
                title: "Sports Event Passes",
                description: "Passes for a live sports event",
                price: "60",
                condition: "used",
                location: "Chicago",
                image: "https://market-place-development.s3.amazonaws.com/Passes_for_a_live_sports_event.jpg",
                sellerId: james.id,
                categoryId: EventTickets.id,
              },
              {
                title: "Professional Hair Dryer",
                description: "Powerful hair dryer for quick and efficient drying",
                price: "80",
                condition: "used",
                location: "Los Angeles",
                image: "https://market-place-development.s3.amazonaws.com/Professional_Hair_Dryer.jpg",

                sellerId: olivia.id,
                categoryId: BeautyAndCosmetics.id,
              },
              {
                title: "Ceramic Hair Straightener",
                description: "High-quality ceramic hair straightener for smooth styling",
                price: "65",
                condition: "used",
                location: "New York",
                image: "https://market-place-development.s3.amazonaws.com/Ceramic_Hair_Straightener.jpg",

                sellerId: jane.id,
                categoryId: BeautyAndCosmetics.id,
              },
        ]

        for (const oneListing of listingsData) {
            const currentListing = await Listing.query().findOne({ title: oneListing.title })
            if (!currentListing) {
                await Listing.query().insert(oneListing)
            }
        }
    }
}

export default ListingSeeder
