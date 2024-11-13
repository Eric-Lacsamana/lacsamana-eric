let cart = [];

const products = [
    {
        productId: 1,
        name: 'Product 1',
        price: 10,
        quantity: 3,
    },
    {
        productId: 2,
        name: 'Product 2',
        price: 15,
        quantity: 3,
    },
    {
        productId: 3,
        name: 'Product 3',
        price: 20,
        quantity: 3,
    }
]

const cartList = document.getElementById('cart-list');
const productList = document.getElementById('product-list');
const totalText = document.getElementById('total-text');

const getExistingCartItem = function(productId) {

    return cart.find((cartItem) => cartItem.productId === productId);
}

const updateCartItem = (productId) => {
    const indexToReplace = cart.findIndex((cartItem) => cartItem.productId === productId);

    if (indexToReplace !== -1) {
        cart[indexToReplace].quantity += 1;
    } 
}


const renderCart = function() {
    cartList.innerHTML = '';

    for (let i = 0; i < cart.length; i++) {

            const cartItem = document.createElement('li');
            cartItem.textContent = `${cart[i].name} Price: $${cart[i].price} Qty: ${cart[i].quantity}`;
        
        
            const addToCartButton = document.createElement('button');
            addToCartButton.addEventListener('click', () => {
                cartItem.remove();
                
                const productIndex = products.findIndex((product) => product.productId === cart[i].productId);
                        
                if (productIndex > -1) {
                    products[productIndex].quantity = 3;
                } else {
                    products.push({ ...cart[i], quantity: 3 })
                }

                cart.splice(i, 1);

                renderProducts();
                renderTotal();
            });
            addToCartButton.textContent = 'Remove';
            cartItem.appendChild(addToCartButton);
        
            cartList.appendChild(cartItem);
        }
}

const renderProducts = function() {
    productList.innerHTML = '';

    for (let i = 0; i < products.length; i++) {
        if (products[i].quantity >= 1) {
            const product = document.createElement('li');
    
            product.textContent = `${products[i].name} Price: $${products[i].price} Q: ${products[i].quantity}`;
        
            const addToCartButton = document.createElement('button');
        
            addToCartButton.textContent = 'Add to Cart';
            
            addToCartButton.addEventListener('click', () => {
             
                if (products[i].quantity !== 0) {
     
                    const existingCartItem = getExistingCartItem(products[i].productId);
                    
                    if (existingCartItem) {
                        updateCartItem(products[i].productId);
                    } 
        
                    if (!existingCartItem) {
                           cart.push({ ...products[i], quantity: 1 })
                    }
                }
    
                products[i].quantity -= 1;

                renderProducts();
                renderCart();
                renderTotal();
            });
        
            product.appendChild(addToCartButton);
            productList.appendChild(product);
        }
    }
}

const renderTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity; 
    }
    totalText.innerHTML = `Total: $${total.toFixed(2)}`;
};

renderTotal();
renderProducts();