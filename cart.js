// Get cart data from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>${item.details}</p>
                <p>Rs. ${item.price}</p>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    updateTotal();
}

// Function to update the total price
function updateTotal() {
    const totalAmount = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

// Function to add item to cart
function addToCart(name, details, price, image) {
    const item = { name, details, price, image };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
}

// Render the cart on page load
renderCartItems();