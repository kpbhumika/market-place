### MarketMingle

MarketMingle is an application that seamlessly connects buyers and sellers, enabling them to effortlessly trade a diverse range of products. The web app utilizes React, the Foundation framework, and custom CSS for a responsive frontend, while Node.js powers the scalable backend with PostgreSQL handling data. Integration of OpenAI's technology enriches user interaction. WebSocket technology is used for real-time messaging, enhancing user engagement. AWS S3 stores assets, optimizing performance. This approach ensures the safety of listed products and enhances the user experience.

### Getting Started
1. Clone this repository to your local machine using `https://github.com/kpbhumika/market-place.git`.
2. Install the required dependencies using `yarn install`.
3. Create database with `createdb market-place_development`.
4. Run migration with `yarn run migrate:latest`.
5. Seed the database with `yarn run db:seed`.
6. Launch the app with `yarn run dev`.
7. Then, navigate to http://localhost:3000 in your browser.

### List Of Features
1. 'Sign-Up/Sign-In' - Users can create an account and login.
2. 'Home Page' - When users visit the home page of the website, they should be able to see top navigation bar, search bar, category drop-down and Listing Images.
3. 'Search Bar' - Positioned prominently on the homepage, the search bar enables users to quickly find specific products or services.
Users can enter keywords, product names, or attributes to initiate a search.
4. 'Category Dropdown' - A dropdown menu prominently displays the available product categories.
Users can select a category of interest from the dropdown to refine their browsing experience.
5. 'Listing Images Linked to Details' - The homepage showcases a grid of images representing various products or services available in the marketplace.
Clicking on an image leads users to the detailed view of the corresponding listing.
6. 'Contact Seller' - User can contact seller from the listing details page, and have the option to initiate communication with the seller.
TOP-BAR :
7. 'My Listings' - User can effortlessly access their listed items, view details, mark items as sold, and easily manage listings through editing or deletion.
9. 'Mark as Sold' - Users can indicate that a listed item has been sold. This functionality helps keep the listing information accurate and up-to-date, preventing further inquiries from potential buyers.
10. 'Edit Listing' - Users are provided with the ability to edit the details of their listed items. Editing may involve updating product information, adjusting pricing, uploading new images, or modifying the description.
11. 'Delete Listing' - Users can choose to remove their listing from the marketplace. This action permanently removes the listing from public view.
12. 'Add Listing' - Users can access the listing submission form from the top bar, allowing them to create new listings. Each listing is pre-screened by OpenAI for safety and legality before being added.
13. 'Chat' - Accessible from the top bar, the chat feature enables users to engage in real-time conversations. Utilizing websocket technology, users can access a list of ongoing conversations and click on any chat to instantly open a live messaging interface, facilitating dynamic and instantaneous communication.

### Technologies used
React , Node.js , Express , JavaScript , HTML , CSS , Cypress , PostgreSQL , Knex/Objection , Yarn , Foundation , Font-Awesome , Third party API's(WebSocket, OpenAI)

If you would like to contribute to this code base:
1. Follow the 'Getting Started' instructions to clone the repository from GitHub.
2. To prevent unwanted modifications of the application: <br>
Create a new git branch to refactor existing features, or implement any new features.
3. Send pull request for review and consideration of merging the new features into the main application branch.

