

export default function renderProducts(products, productContainer){
    let html = ''

    products.forEach(product => {
        html += `
            <div>
                <img src="${product.image}" width="150">
                <h2>${product.name}</h2>
                <p>R ${(product.priceCents / 100).toFixed(2)}</p>
                <button id="view-details" data-view="${product.id}">View details</button>

            </div>
        `
    })
    
    productContainer.innerHTML = html
}
