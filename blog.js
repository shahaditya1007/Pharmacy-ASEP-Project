document.addEventListener('DOMContentLoaded', function() {
    // Set initial state of extra content
    document.querySelectorAll('.extra-content').forEach(content => {
        content.style.display = 'none';
    });

    // Add click handlers for read more buttons
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const extraContent = this.parentElement.querySelector('.extra-content');
            if (extraContent) {
                if (extraContent.style.display === 'none') {
                    extraContent.style.display = 'block';
                    this.textContent = 'Read Less';
                } else {
                    extraContent.style.display = 'none';
                    this.textContent = 'Read More';
                }
            }
        });
    });

    // Set copyright year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
