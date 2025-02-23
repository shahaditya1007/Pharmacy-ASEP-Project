// Sticky Navbar on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
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

