import searchProducts from './searchInput.js';
import showModal, { closeModal } from './modal.js';
import { addToCart, removeFromCart } from './cart.js';

export function clickEvents(products, productContainer, searchInput) {
    const searchBtn = document.getElementById('search-btn');
    const cartWrapper = document.getElementById('cart-wrapper');
    const cartContainer = document.getElementById('cart-products-container');

    searchBtn.addEventListener('click', () => {
        searchProducts(products, productContainer, searchInput);
    });

    document.addEventListener('click', (e) => {
        if (e.target.dataset.view) {
            const clickedProduct = products.find(
                product => String(product.id) === e.target.dataset.view
            );
            showModal(clickedProduct);
        }

        if (e.target.dataset.close) {
            closeModal();
        }

        if (e.target.id === 'modal-wrapper') {
            closeModal();
        }

        if (e.target.dataset.add) {
            const clickedProduct = products.find(
                product => String(product.id) === e.target.dataset.add
            );
            addToCart(clickedProduct);
        }

        const removeBtn = e.target.closest('[data-remove]');

        if (removeBtn) {
            removeFromCart(removeBtn.dataset.remove);
        }
    });

    cartWrapper.addEventListener('click', () => {
        cartContainer.classList.toggle('open');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}