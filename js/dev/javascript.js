$(".goto").click(function() {
    $('html,body').animate({
        scrollTop: $(".main").offset().top},
        350);
});