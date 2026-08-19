# E-commerce Store

A responsive e-commerce storefront built with vanilla JavaScript, HTML, and CSS. Users can browse products, search for items, filter by category, view product details, add products to a shopping cart, and complete a simulated checkout process.

## Features

* Browse a catalog of products fetched from an external JSON API
* Search products by name
* Filter products by category
* View detailed product information in a modal
* Add and remove items from the shopping cart
* Persistent cart storage using Local Storage
* Dynamic cart item count
* Checkout/payment modal
* Responsive design for different screen sizes

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6 Modules)
* Fetch API
* Local Storage
* Font Awesome

## What I Learned

This project helped me strengthen my understanding of:

* DOM manipulation
* Event handling
* ES6 modules (imports and exports)
* Fetching and working with API data
* Array methods such as `map()`, `filter()`, and `find()`
* Local Storage for persistent data
* Creating reusable JavaScript functions
* Building responsive user interfaces
* Organizing code into multiple files and modules

## Project Structure

* `index.js` – Fetches product data and initializes the application
* `renderProducts.js` – Renders products to the page
* `searchInput.js` – Handles product searching
* `cart.js` – Shopping cart functionality
* `modal.js` – Product detail modal
* `paymentModal.js` – Checkout and payment modal
* `button.js` - Handles different types of click events on the page including keyboard events
* `contact.html` - Takes you to the contact page when the tab is clicked
* `aboutus.html` - Takes you to the "about us" page when the tab is clicked
* `index.html` - Handles the structure of the whole page or how the style of the products appear

## Future Improvements

* User authentication
* Product sorting (price, rating, popularity)
* Quantity controls within the cart
* Backend integration
* Real payment gateway integration
* Wishlist functionality

## Live Demo

[https://mveliecommercestore.netlify.app/]

## Data Source

Product data is provided through [https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json] used for educational and portfolio purposes.
