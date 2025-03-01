const navbar = document.querySelector('.navbar');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (lastScrollY < window.scrollY) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }

  lastScrollY = window.scrollY;
});

document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const shopItems = document.querySelectorAll('.shop-item');
    
    filterBtns.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            shopItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            
            filterBtns.forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        });
    });

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

