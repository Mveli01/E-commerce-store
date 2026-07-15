

export default function renderProducts(products, productContainer){
    let html = ''

    products.forEach(product => {
        html += `
            <div class="product-card">
                <img src="${product.image}" class="product-image">
                <h2>${product.name}</h2>
                <p>R ${(product.priceCents / 100).toFixed(2)}</p>
                <button id="view-details" data-view="${product.id}">View details</button>

            </div>
        `
    })
    
    productContainer.innerHTML = html
}
