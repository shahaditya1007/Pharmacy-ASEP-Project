window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    const duration = parseInt(loader.dataset.duration) || 300; 
    
    setTimeout(() => {
        loader.classList.add('fade-out');
    }, duration);
});
    

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
            const productCard = this.closest('.card');

            const product = {
                id: productCard.dataset.id,
                title: productCard.querySelector('h3').textContent,
                price: productCard.querySelector('p').textContent,
                image: productCard.querySelector('img') ? productCard.querySelector('img').src : '',
                isSoldOut: productCard.querySelector('.sold-out') !== null
            };

            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

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
