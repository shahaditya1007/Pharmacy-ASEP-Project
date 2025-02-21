// Select the navbar
const navbar = document.querySelector('.navbar');

// Variable to store the last scroll position
let lastScrollY = window.scrollY;

// Function to toggle navbar visibility on scroll
window.addEventListener('scroll', () => {
  if (lastScrollY < window.scrollY) {
    // Hide navbar on scroll down
    navbar.classList.add('hidden');
  } else {
    // Show navbar on scroll up
    navbar.classList.remove('hidden');
  }

  // Update last scroll position
  lastScrollY = window.scrollY;
});
function searchProducts() {
  const input = document.getElementById('search-input').value.toLowerCase();
  const products = document.querySelectorAll('.shop-item');

  products.forEach(product => {
    const name = product.dataset.name.toLowerCase();
    if (name.includes(input)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

