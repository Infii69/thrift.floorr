// Smooth scrolling to sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Function to add products to cart
function addToCart(productId, productName, productPrice, productImage) {
    // Create a product object
    const product = {
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage
    };

    // Check if there is already a cart in localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the product to the cart array
    cart.push(product);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} has been added to your cart!`);
}

// Function to show cart contents (for cart page or viewing cart)
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContent = document.getElementById('cart-content');
    if (cart.length === 0) {
        cartContent.innerHTML = "<p>Your cart is empty</p>";
    } else {
        cartContent.innerHTML = "";
        cart.forEach(item => {
            cartContent.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" width="50">
                    <p>${item.name}</p>
                    <p>${item.price}</p>
                </div>
            `;
        });
    }
}

