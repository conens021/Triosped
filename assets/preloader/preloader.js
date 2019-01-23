$(document).ready(function ($) {

    var windowWidth = $(window).width();
    var preloaderLeftPosition = windowWidth / 2;

    $(".preloader-wrapper .preloader").css({
        'left' : preloaderLeftPosition 
    });

    var Body = $('body');
    Body.addClass('preloader-site');
});
$(window).load(function () {
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
});
