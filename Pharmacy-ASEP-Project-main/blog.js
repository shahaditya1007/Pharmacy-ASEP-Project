$(document).ready(function() {
    $('.read-more').on('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const $post = $(this).closest('.post');
        const $extraContent = $post.find('.extra-content');

        // Toggle the extra content
        if ($extraContent.hasClass('show')) {
            $extraContent.removeClass('show');
        } else {
            // Hide any other open extra content
            $('.extra-content.show').removeClass('show');
            $extraContent.addClass('show');
        }
    });

    // Close extra content when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.post').length) {
            $('.extra-content.show').removeClass('show');
        }
    });
});
