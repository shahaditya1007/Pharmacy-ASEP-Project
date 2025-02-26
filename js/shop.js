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

document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const shopItems = document.querySelectorAll('.shop-item');
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            
            shopItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Enhanced search functionality
    const searchInput = document.getElementById('search-input');
    let searchTimeout;

    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchTerm = searchInput.value.toLowerCase();
            
            shopItems.forEach(item => {
                const itemName = item.dataset.name.toLowerCase();
                const itemCategory = item.dataset.category.toLowerCase();
                
                if (itemName.includes(searchTerm) || itemCategory.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }, 300);
    });
});

