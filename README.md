# Product-Landing-Page-
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
            <li><a href="#contacts">Contact</a></li>
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

<!-- Banner Section -->
<section class="banner">
    <h1>Find Your Perfect Product</h1>
    <p>Exclusive deals just for you</p>
    <button class="cta-btn">Shop Now</button>
</section>

<!-- Featured Products Section -->
<section class="featured-products">
    <div class="product">
        <img src="tools.jpg" alt="Gardening Tool Set">
        <h3>Gardening Tool Set</h3>
        <p>$23.99</p>
        <button>Add to Cart</button>
    </div>
    <div class="product">
        <img src="Soil Cultivator.jpg" alt="Gardening Fork">
        <h3>Gardening Fork</h3>
        <p>$19.99</p>
        <button>Add to Cart</button>
    </div>
    <div class="product">
        <img src="shovel.png" alt="Shovel">
        <h3>Shovel</h3>
        <p>$29.99</p>
        <button>Add to Cart</button>
    </div>
    <div class="product">
        <img src="hoe.jpg" alt="Hoe">
        <h3>Hoe</h3>
        <p>$29.99</p>
        <button>Add to Cart</button>
    </div>
    <div class="product">
        <img src="Sickle.jpg" alt="Sickle">
        <h3>Sickle </h3>
        <p>$29.99</p>
        <button>Add to Cart</button>
    </div>
    <div class="product">
        <img src="pruning shears.jpg" alt="Pruning Shears">
        <h3>Pruning Shears</h3>
        <p>$29.99</p>
        <button>Add to Cart</button>
    </div>
    <div class="product">
        <img src="Hedge Shears.jpg" alt="Hedge Shears">
        <h3>Hedge Shears</h3>
        <p>$29.99</p>
        <button>Add to Cart</button>
    </div>
    <div class="product">
        <img src="gloves.jpg" alt="Gloves">
        <h3>Gloves</h3>
        <p>$29.99</p>
        <button>Add to Cart</button>
    </div>
</section>

<!-- Footer Section -->
<footer>
    <p>Contact us at: support@AgriFarm.com | 123-456-7890</p>
    <p>Follow us:
        <a href="#">FB</a> | <a href="#">IG</a> | <a href="#">TW</a>
    </p>
    <p><a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a></p>
</footer>

</body>
</html>