let cart = [];

const products = [
    {
        productId: 1,
        name: 'Product 1',
        price: 10,
    },
    {
        productId: 2,
        name: 'Product 2',
        price: 15,
    },
    {
        productId: 3,
        name: 'Product 3',
        price: 20,
    }
]

const cartList = document.getElementById('cart-list');
const productList = document.getElementById('product-list');
const totalText = document.getElementById('total-text');

const renderCart = function() {
    cartList.innerHTML = '';

    for (let i = 0; i < cart.length; i++) {

            const cartItem = document.createElement('li');
            cartItem.textContent = `${cart[i].name} Price: $${cart[i].price}`;

            const addToCartButton = document.createElement('button');
            addToCartButton.addEventListener('click', function() {
                cartItem.remove();
                
                const index = products.findIndex(function(product) {
                    return product.productId === cart[i].productId 
                });
                   
                if (index > -1) {
                    products[index].quantity = 3;
                }

                cart.splice(i, 1);
                renderCart();
                renderTotal();
            });
            addToCartButton.textContent = 'Remove';

            const qtyText = document.createElement('span');
            qtyText.textContent = `${cart[i].quantity}`


            cartItem.appendChild(addToCartButton);
            cartItem.appendChild(qtyText);
            cartList.appendChild(cartItem);
        }
}

const renderProducts = function() {
    productList.innerHTML = '';

    for (let i = 0; i < products.length; i++) {
            const product = document.createElement('li');
            product.textContent = `${products[i].name} Price: $${products[i].price}`;
        
            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = 'Add to Cart';
            addToCartButton.addEventListener('click', function()  {
      
                    const index = cart.findIndex(function(cartItem) {
                        return cartItem.productId === products[i].productId 
                    });
               
                    if (index > -1) {
                        
                       if (index !== -1) {
                           cart[index].quantity += 1;
                       }
                    } 
        
                    if (index === -1) {
                        cart.push({ ...products[i], quantity: 1 })
                    }

                renderCart();
                renderTotal();
            });
        
            product.appendChild(addToCartButton);
            productList.appendChild(product);
        }
}

const renderTotal = function() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity; 
    }
    totalText.textContent = `Total: $${total.toFixed(2)}`;
};

renderTotal();
renderProducts();