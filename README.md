### Beantown Activities
Welcome to the Beantown Activities app – your personal guide to discovering the best businesses and activities in and around Boston. With this app, you can create your account and join our vibrant community of reviewers, sharing your unique experiences and recommendations.

### Getting Started
1. Clone this repository to your local machine using `git clone https://github.com/Gkimbo/bean-town-activities.git`.
2. Install the required dependencies using `yarn install`.
3. Create database with `createdb bean-town-activities_development`.
4. Run migration with `yarn run migrate:latest`.
5. Seed the database with `yarn run db:seed`.
6. Launch the app with `yarn run dev`.
7. Then, navigate to http://localhost:3000 in your browser.

### To Run Cypress Tests
1. Create database with `bean-town-activities_e2e`.
2. Run migration with `yarn run migrate:latest` from server.
3. cd..
4. Run `yarn run dev:cypress`
5. Open new terminal tab and `cd e2e`
6. Run `yarn e2e:run` or `yarn e2e:open`

### List Of Features
1. 'Categories List' - When users visit the home page of the website, they should be able to see the list of categories.
2. 'Sign-Up/Sign-In' - Users can create an account and login to view the activities, activity details, and add personal reviews for activities.
3. 'Activities List' - Users can navigate to different activities lists by choosing a category and clicking on the category name from the 'Categories List'.
4. 'Activity Details' - Users can navigate to view details and reviews of an activity by clicking on the activity name.
5. 'Add Reviews' - Users can leave reviews for the activity via the form on the 'Activity Details' page.
6. 'Voting Button' - Users can up-vote or down-vote other user reviews of an activity.
7. 'Review Rating' - Users can view the review ratings, which is calculated based on the total votes on the reviews.
8. 'User Reviews List' - Users Navigate to a list of their personal activity reviews by clicking on the 'Edit/Delete Reviews' button, after the user has left a review on an activity.
9. 'Edit Review' - Users can edit their previous reviews of an activity.
10. 'Delete Review' - Users can delete their previous reviews of an activity.

### Technologies used
React , Node.js , Express , JavaScript , HTML , CSS , Cypress , PostgreSQL , Knex/Objection , Yarn , Foundation , Font-Awesome

If you would like to contribute to this code base:
1. Follow the 'Getting Started' instructions to clone the repository from GitHub.
2. To prevent unwanted modifications of the application: <br>
Create a new git branch to refactor existing features, or implement any new features.
3. Send pull request for review and consideration of merging the new features into the main application branch.

Stay up-to-date with the latest happenings in the city, from thrilling sports events to cultural festivals to restaurants or shopping.