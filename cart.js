const cartProducts = document.getElementById('cart-products');
const cartCount = document.getElementById('cart-count');

const cart = [];

/*
    Add Product
*/
export function addToCart(product) {

    const existingItem = cart.find(item =>
        item.id === product.id
    );

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
}

/*
    Remove Product
*/
export function removeFromCart(productId) {

    const existingItem = cart.find(item =>
        String(item.id) === String(productId)
    );

    if (!existingItem) return;

    if (existingItem.quantity > 1) {

        existingItem.quantity--;

    } else {

        const itemIndex = cart.findIndex(item =>
            String(item.id) === String(productId)
        );

        cart.splice(itemIndex, 1);
    }

    updateCart();
}

/*
    Total Item Count
*/
export function getCartCount() {

    return cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

}

/*
    Total Price
*/
export function getCartTotal() {

    return cart.reduce((total, item) => {
        return total + (item.priceCents * item.quantity);
    }, 0);

}

/*
    Return Cart
*/
export function getCart() {
    return cart;
}

/*
    Render Cart
*/
export function showCartProducts() {

    if (cart.length === 0) {

        cartProducts.innerHTML = `
            <p>Your cart is empty</p>
        `;

        return;
    }

    const cartItems = cart.map(product => {

        return `
            <div class="cart-item">

                <h3>${product.name}</h3>

                <p>
                    Price:
                    R ${(product.priceCents / 100).toFixed(2)}
                </p>

                <p>
                    Quantity:
                    ${product.quantity}
                </p>

                <p>
                    Subtotal:
                    R ${((product.priceCents * product.quantity) / 100).toFixed(2)}
                </p>

                <button
                    data-remove="${product.id}">
                    <span class="fas fa-trash"></span>
                    Remove
                </button>

            </div>
        `;

    });

    cartProducts.innerHTML = `

        ${cartItems.join('')}

        <hr>

        <div class="cart-summary">

            <h3>
                Total Items:
                ${getCartCount()}
            </h3>

            <h3>
                Total:
                R ${(getCartTotal() / 100).toFixed(2)}
            </h3>

            <button id="checkout-btn">
                Checkout
            </button>

        </div>

    `;
}

/*
    Refresh Cart UI
*/
function updateCart() {

    cartCount.textContent = getCartCount();

    showCartProducts();

}