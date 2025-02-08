<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AgriFarm - E-commerce Landing Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- Header Section -->
<header>
    <div class="logo">AgriFarm Supplies</div>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <input type="text" id="searchBox" placeholder="Search products..." onkeyup="searchProducts()">
    <ul id="productList">
        <li>Tools</li>
        <li>Seeds</li>
        <li>Fertilizers</li>
        <li>Pots</li>
    </ul>
</header>

<!-- Home Section -->
<section id="home" class="banner">
    <h1>Find Your Perfect Product</h1>
    <p>Exclusive deals just for you</p>
    <button class="cta-btn">Shop Now</button>
</section>

<!-- Products Section -->
<section id="products" class="featured-products">
    <div class="product">
        <img src="tools.jpg" alt="Gardening Tool Set">
        <h3>Gardening Tool Set</h3>
        <p>$23.99</p>
        <button onclick="addToCart('Gardening Tool Set', 23.99)">Add to Cart</button>
    </div>
    <div class="product">
        <img src="Soil Cultivator.jpg" alt="Gardening Fork">
        <h3>Gardening Fork</h3>
        <p>$19.99</p>
        <button onclick="addToCart('Gardening Fork', 19.99)">Add to Cart</button>
    </div>
    <div class="product">
        <img src="shovel.png" alt="Shovel">
        <h3>Shovel</h3>
        <p>$27.99</p>
        <button onclick="addToCart('Shovel', 27.99)">Add to Cart</button>
    </div>
    <div class="product">
        <img src="hoe.jpg" alt="Hoe">
        <h3>Hoe</h3>
        <p>$29.99</p>
        <button onclick="addToCart('Hoe', 29.99)">Add to Cart</button>
    </div>
    <div class="product">
        <img src="Sickle.jpg" alt="Sickle">
        <h3>Sickle</h3>
        <p>$14.99</p>
        <button onclick="addToCart('Sickle', 14.99)">Add to Cart</button>
    </div>
    <div class="product">
        <img src="pruning shears.jpg" alt="Pruning Shears">
        <h3>Pruning Shears</h3>
        <p>$24.99</p>
        <button onclick="addToCart('Pruning Shears', 24.99)">Add to Cart</button>
    </div>
    <div class="product">
        <img src="Hedge Shears.jpg" alt="Hedge Shears">
        <h3>Hedge Shears</h3>
        <p>$32.99</p>
        <button onclick="addToCart('Hedge Shears', 32.99)">Add to Cart</button>
    </div>
    <div class="product">
        <img src="gloves.jpg" alt="Gloves">
        <h3>Gloves</h3>
        <p>$10.99</p>
        <button onclick="addToCart('Gloves', 10.99)">Add to Cart</button>
    </div>
    <div class="product">
        <img src="Seeds.jpg" alt="Seeds">
        <h3>Gloves</h3>
        <p>$15.99</p>
        <button onclick="addToCart('Seeds', 15.99)">Add to Cart</button>
    </div>
    <div class="product">
        <img src="fertilizer.jpg" alt="Fertilizers">
        <h3>Fertilizers</h3>
        <p>$20.99</p>
        <button onclick="addToCart('Fertilizers', 20.99)">Add to Cart</button>
    </div>
    <div class="product">
        <img src="pots.jpg" alt="Pots">
        <h3>Pots</h3>
        <p>$12.99</p>
        <button onclick="addToCart('Seeds', 12.99)">Add to Cart</button>
    </div>
</section>

<!-- About Section -->
<section id="about">
    <h2>About AgriFarm</h2>
    <p>  Welcome to AgriFarm Supplies, your one-stop online store for all agricultural and farming needs. We are dedicated to providing high-quality farming products, tools, and supplies to help farmers, gardeners, and agricultural businesses thrive.  
        At AgriFarm Supplies, we understand the importance of reliable and affordable farming essentials. That’s why we offer a wide range of products, including seeds, fertilizers, pesticides, farming tools, irrigation equipment, and much more—all sourced from trusted suppliers.  
        Our mission is to support the agricultural community by making farm supplies easily accessible through a seamless online shopping experience. With user-friendly navigation, secure payment options, and fast delivery, we ensure that you get what you need, when you need it.  
        Whether you're a small-scale farmer, a large agricultural enterprise, or a gardening enthusiast, AgriFarm Supplies is here to serve you with quality products and exceptional customer service.  
        Grow More. Harvest Better. Shop Smarter—Only at AgriFarm Supplies!</p>
</section>

<!-- Contact Section -->
<section id="contact">
    <h2>Contact Us</h2>
    <p>Contact us at: <a href="mailto:support@AgriFarm.com">support@AgriFarm.com</a> | 123-456-7890 </p>
    <p>Follow us:
        <a href="#">FB</a> | <a href="#">IG</a> | <a href="#">TW</a>
    </p>
</section>

<!-- Footer Section -->
<footer>
    <p><a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a></p>
</footer>

<script src="script.js"></script>
</body>
</html>
