const pmntModalWrapper = document.getElementById('payment-modal-wrapper');
const pmntModalContainer = document.getElementById('payment-modal-container');
const cartProducts = document.getElementById('cart-products');
import { getCartTotal, clearCart } from './cart.js';

export default function pmntModal(){
    pmntModalContainer.innerHTML =  `<form class='payment-form' id='payment-form'>
        <h1 class='card-details'>Enter card details</h1>
        <input type='text'
         placeholder='Enter your name' 
        name='customer-name'
         id='name-input'
          class='name-input' 
           required>
        <input type='card_number' 
        placeholder='Enter card number'
         name='customer-card'  
         required>
        <input type='text'
         placeholder='Enter CVV'
          name='customer-cvv' 
           required>

        <h3>
           Total: R ${(getCartTotal() / 100).toFixed(2)}
        </h3> 

        <button class='pay-btn' type='submit' data-pay='true'> Pay</button>
        <button class='close-btn' type='button' data-close='true'> Close</button>
    </form>` 

    pmntModalWrapper.style.display = 'flex' 

    const paymentForm = document.getElementById('payment-form');

    paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    closePaymentModal();
    clearCart();
    

    cartProducts.innerHTML = `
        <p class="success-message">
            Payment successful!
        </p>
    `;
    
});
}

export function closePaymentModal() {
    pmntModalWrapper.style.display = 'none';
}