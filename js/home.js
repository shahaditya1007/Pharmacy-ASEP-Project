// Sticky Navbar on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Loader functionality with customizable duration
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    const duration = parseInt(loader.dataset.duration) || 500; 
    
    setTimeout(() => {
        loader.classList.add('fade-out');
    }, duration);
});
    

// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.getElementById(targetId.substring(1));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Scroll Animation for Features
const features = document.querySelectorAll('.feature');
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    features.forEach(feature => {
        const boxTop = feature.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            feature.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');

    wishlistButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');

            const product = {
                id: productCard.dataset.id,
                title: productCard.querySelector('p').textContent,
                price: productCard.querySelector('.price').textContent,
                image: productCard.querySelector('img').src,
                isSoldOut: productCard.querySelector('.sold-out') !== null
            };

            // Get existing wishlist or initialize empty array
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

            // Check if item already exists in wishlist
            if (!wishlist.some(item => item.id === product.id)) {
                wishlist.push(product);
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
                alert('Item added to wishlist!');
                this.textContent = '❤ Added to Wishlist';
            } else {
                alert('Item is already in your wishlist!');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbarMenu = document.querySelector(".navbar ul");

    menuToggle.addEventListener("click", function () {
        navbarMenu.classList.toggle("active");
    });
});
