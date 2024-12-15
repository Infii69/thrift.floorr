// Fetch cart data from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Render Cart Items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const itemHTML = `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                    <h3>${item.name}</h3>
                    <p>${item.details}</p>
                    <p>Rs. ${item.price}</p>
                    <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `;
        cartItemsContainer.insertAdjacentHTML('beforeend', itemHTML);
    });

    updateTotal();
}

// Update Total Price
function updateTotal() {
    const subtotal = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
    document.getElementById('subtotal').textContent = `Rs. ${subtotal.toFixed(2)}`;
    document.getElementById('total-amount').textContent = `Rs. ${subtotal.toFixed(2)}`;
}

// Remove Item from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
}

// Initialize Cart on Page Load
document.addEventListener('DOMContentLoaded', renderCartItems);
