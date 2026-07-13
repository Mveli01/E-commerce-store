const modalWrapper = document.getElementById('modal-wrapper');
const modalContainer = document.getElementById('modal-container');

export default function showModal(product) {
    modalContainer.innerHTML= `<div>
                <img src="${product.image}" width="150">
                <h3>${product.name}</h3>
                <p>R ${(product.priceCents / 100).toFixed(2)}</p>
                <h4>${product.subCategory}</h4>
                <p>Rating: ${product.rating.stars}</p>
                <h5>Description: ${product.description}</h5>
                <p>In Stock: ${product.rating.count} items</p>
                <button id="add-to-cart" data-add="${product.id}">Add to Cart</button>
                <button id="close-modal" data-close="close">Close</button>
                </div>
                `
               
        modalWrapper.style.display = 'flex';
        
}

export function closeModal(){
        modalWrapper.style.display = 'none';
}

            