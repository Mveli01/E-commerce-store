const searchInput = document.getElementById('search-input');
import renderProducts from './renderProducts.js';

export default function searchProducts(products, productContainer, searchInput){
    const searchItem = searchInput.value.toLowerCase();
     const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchItem)
    );
     renderProducts(filteredProducts, productContainer);
}

