$(document).ready(function () {

    // Smooth scrolling for internal links
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // Sticky navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });

    // Team member hover effect
    $('.team-member').hover(
        function () {
            $(this).find('img').css('transform', 'scale(1.1)');
        },
        function () {
            $(this).find('img').css('transform', 'scale(1)');
        }
    );
});