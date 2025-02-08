
// Search Functionality
function searchProducts() {
    const input = document.getElementById('searchBox').value.toUpperCase();
    const productList = document.getElementById('productList');
    const products = productList.getElementsByTagName('li');
    
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.textContent.toUpperCase().indexOf(input) > -1) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    }
}

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Add to Cart Functionality
const cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    
    cart.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.textContent = $(product.name) - $$(product.price);
        cartElement.appendChild(productElement);
    });
}