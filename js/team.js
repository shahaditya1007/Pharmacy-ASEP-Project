$(document).ready(function () {

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });

    $('.team-member').hover(
        function () {
            $(this).find('img').css('transform', 'scale(1.1)');
        },
        function () {
            $(this).find('img').css('transform', 'scale(1)');
        }
    );
});