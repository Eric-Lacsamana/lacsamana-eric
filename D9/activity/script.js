let products = [];
let categories = [
    { value: 'all', displayName: 'All Categories' },
    { value: "men's clothing", displayName: "Men's Clothing" },
    { value: 'jewelery', displayName: 'Jewelry' },
    { value: 'electronics', displayName: 'Electronics' },
    { value: "women's clothing", displayName: "Women's Clothing" }
];

function generateProductCards(productsToDisplay) {
    const container = document.getElementById('product-container');
    const loadingMessage = document.getElementById('loading-message');

    if (loadingMessage) {
        loadingMessage.style.display = 'none';
    }

    container.innerHTML = '';

    productsToDisplay.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'col-sm-6', 'col-12', 'product-card');
        card.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-price"><strong>Price:</strong> $${product.price.toFixed(2)}</p>
                    <p class="card-rating"><strong>Rating:</strong> ${product.rating.rate} (${product.rating.count} reviews)</p>
                    <p class="card-text">${product.description}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function populateCategoryDropdown(categories) {
    const categorySelect = document.getElementById('categorySelect');

    if (categorySelect) {
        categorySelect.innerHTML = '';

        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.value;
            option.textContent = category.displayName;
            categorySelect.appendChild(option);
        });
    }
}

async function fetchProducts() {
    const loadingMessage = document.getElementById('loading-message');
    try {
        if (loadingMessage) {
            loadingMessage.style.display = 'block';
        }

        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("Failed to fetch data from the API.");
        }

        const fetchedProducts = await response.json();
        products = fetchedProducts;
        generateProductCards(products);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

document.getElementById('categorySelect').addEventListener('change', function() {
    const loadingMessage = document.getElementById('loading-message');
    const selectedCategory = this.value;

    if (loadingMessage) {
        loadingMessage.style.display = 'block';
    }

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    generateProductCards(filteredProducts);
});

function initializePage() {
    populateCategoryDropdown(categories);
    fetchProducts();
}

initializePage();
