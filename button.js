import searchProducts from './searchInput.js';
import showModal, {closeModal} from './modal.js';
import {addToCart, removeFromCart} from './cart.js';


export function clickEvents(products, productContainer, searchInput){
    const searchBtn = document.getElementById('search-btn')

    searchBtn.addEventListener('click', () => {
        searchProducts(products, productContainer, searchInput)
    });
    document.addEventListener('click', (e) => {
        if (e.target.dataset.view) {
            const clickedProductId = products.find(product => String(product.id) === e.target.dataset.view);
            showModal(clickedProductId);

        } if (e.target.dataset.close){
        closeModal();

    } if (e.target.id === 'modal-wrapper') {
        closeModal();
    } 
    if (e.target.dataset.add) {
        const clickedProductId = products.find(product => String(product.id) === e.target.dataset.add);
        addToCart(clickedProductId);
    } if (e.target.dataset.remove) {
        removeFromCart(e.target.dataset.remove);
    }
    
    }); 
        
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
})