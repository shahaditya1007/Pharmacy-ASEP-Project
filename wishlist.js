document.addEventListener('DOMContentLoaded', function () {
    const wishlistContainer = document.getElementById("wishlist-container");

    function displayWishlist() {
        // Load wishlist items from localStorage
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

        // Clear container
        wishlistContainer.innerHTML = '';

        if (wishlist.length === 0) {
            wishlistContainer.innerHTML = "<p>Your wishlist is empty!</p>";
            return;
        }

        wishlist.forEach((item) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.setAttribute('data-id', item.id);

            productCard.innerHTML = `
                ${item.isSoldOut ? '<span class="sold-out">Sold Out</span>' : ''}
                <img src="${item.image}" alt="${item.title}">
                <p>${item.title}</p>
                <p class="price">${item.price}</p>
                <button class="remove-btn" onclick="removeFromWishlist('${item.id}')">Remove from Wishlist</button>
            `;

            wishlistContainer.appendChild(productCard);
        });
    }

    // Function to remove item from wishlist
    window.removeFromWishlist = function (productId) {
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        wishlist = wishlist.filter(item => item.id !== productId);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        displayWishlist();
    };

    // Display wishlist when page loads
    displayWishlist();
});
