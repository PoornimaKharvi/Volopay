### To run the project first we need to run json-server locally 

To run the json-server , run this in command in cmd , ==>  " json-server --watch db.json --port 3004 "
Later need to run react project by running coomand npm start

Card Management System
This project is a Card Management System that allows users to view and manage their cards. It provides the following features:
Tab Navigation: The user can switch between different tabs to view cards based on their ownership status. The available tabs are "Your", "All", and "Blocked".
Card Types: There are two types of cards in the system - "Burner" and "Subscription". Each card type has different information displayed on the card.
For Burner cards, the card design includes the expiry date.
For Subscription cards, the card design includes the limit.
Card Type Indicator: Each card displays its type on the top right corner, using an icon or any suitable representation.
Ownership Filtering: When the user clicks on the "Your" tab, they will see only the cards that belong to them. The cards are filtered based on the owner_id.
Card Listing Layout: The cards are displayed in a specific layout, as shown in the design provided.
Infinite Scroll: Since the API response is paginated, the system implements an infinite scroll feature. It fetches 10 records per call and dynamically loads more cards as the user scrolls.
Card Name Search: The system allows users to search for cards by their name. Users can enter a search query, and the system filters the cards based on the name.
Card Type Filter: Filtering by card type is mandatory. The system provides a filter dropdown where users can select a card type to view only cards of that type.

Installation
To run this project locally, follow these steps:
Clone the repository: git clone https://github.com/Poornimakharvi/Volopay.git
Navigate to the project directory: cd volopay
Install the dependencies: npm install
Start the development server: npm start

Technologies Used
React.js: Front-end JavaScript library for building user interfaces.
CSS: Styling the components and layout.
Axios: HTTP client for making API requests.

Dependendies
npm install react-bootstrap
npm install bootstrap
npm install react-icons
