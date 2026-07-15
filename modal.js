const modalWrapper = document.getElementById('modal-wrapper');
const modalContainer = document.getElementById('modal-container');

export default function showModal(product) {
    modalContainer.innerHTML = `
    <div class="modal-content">
        <img src="${product.image}" class="modal-image">

        <div class="modal-details">
            <h3>${product.name}</h3>
            <p>R ${(product.priceCents / 100).toFixed(2)}</p>
            <h4>${product.subCategory}</h4>
            <p><strong>Rating:</strong> ${product.rating.stars}</p>
            <p><strong>Description:</strong> ${product.description}</p>
            <p><strong>In Stock:</strong> ${product.rating.count} items</p>

            <button id="add-to-cart" data-add="${product.id}">
                Add to Cart
            </button>

            <button id="close-modal" data-close="close">
                Close
            </button>
        </div>
    </div>`
               
        modalWrapper.style.display = 'flex';
        
}

export function closeModal(){
        modalWrapper.style.display = 'none';
}

            