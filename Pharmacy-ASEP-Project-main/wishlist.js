// Load wishlist items from localStorage
const wishlistContainer = document.getElementById("wishlist-container");
const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

if (wishlist.length === 0) {
    wishlistContainer.innerHTML = "<p>Your wishlist is empty!</p>";
} else {
    wishlist.forEach((item) => {
        // Create a product card for each wishlist item
        const productCard = document.createElement("span");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            ${item.isSoldOut ? '<span class="sold-out">Sold Out</span>' : ''}
            <img src="${item.image}" alt="${item.title}">
            <p>${item.title}</p>
            <p class="price">${item.price}</p>
        `;

        wishlistContainer.appendChild(productCard);
    });
}
