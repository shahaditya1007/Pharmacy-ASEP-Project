document.addEventListener("DOMContentLoaded", function () {
    const faqButtons = document.querySelectorAll(".accordion-button");

    faqButtons.forEach((button) => {
        button.addEventListener("click", function () {
            setTimeout(() => {
                const targetCollapse = document.querySelector(this.getAttribute("data-bs-target"));

                if (targetCollapse.classList.contains("show")) {
                    targetCollapse.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }, 300); // Delayed scrolling for smooth transition
        });
    });

    // Ensure header and footer are loaded before JS execution
    function waitForElement(selector, callback) {
        const observer = new MutationObserver((mutations, obs) => {
            if (document.querySelector(selector)) {
                obs.disconnect();
                callback();
            }
        });
        observer.observe(document, { childList: true, subtree: true });
    }

    waitForElement("#site-footer", function () {
        console.log("Footer loaded successfully.");
    });

    waitForElement("#site-header", function () {
        console.log("Header loaded successfully.");
    });
});
