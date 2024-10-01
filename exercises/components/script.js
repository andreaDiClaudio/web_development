const products = [
    {
        id: 1,
        name: 'Running Shoes',
        price: '€59.99',
        image: 'https://via.placeholder.com/200x150?text=Shoes',
        description: 'Comfortable running shoes'
    },
    {
        id: 2,
        name: 'Leather Jacket',
        price: '€129.99',
        image: 'https://via.placeholder.com/200x150?text=Jacket',
        description: 'Stylish leather jacket'
    },
    {
        id: 3,
        name: 'Summer Dress',
        price: '€39.99',
        image: 'https://via.placeholder.com/200x150?text=Dress',
        description: 'Light summer dress'
    }
];

// Function to generate product card HTML
function generateProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
        </div>
    `;
}

// Populate product grid
const productGrid = document.getElementById('product-grid');
productGrid.innerHTML = products.map(generateProductCard).join('');
