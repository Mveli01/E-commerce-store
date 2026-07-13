import renderProducts from './renderProducts.js';
import showModal from './modal.js';
import { clickEvents } from './button.js';
const categorySelect = document.querySelector('select')
const productContainer = document.getElementById('product-container');
const searchInput = document.getElementById('search-input');


let products = [];

function getProducts() {
    fetch('https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json')
        .then(res => res.json())
        .then(data => {
            products = data;

            renderProducts(products, productContainer);

            clickEvents(products, productContainer, searchInput);
        })
        .catch(err => console.log(err));
}

getProducts();


categorySelect.addEventListener('change', function () {

    if (categorySelect.value === 'all') {
        renderProducts(products, productContainer)
        return
    }

    const filteredProducts = products.filter(function(product){
        return product.category === categorySelect.value
    })

    renderProducts(filteredProducts, productContainer)
})
    