// scroll up functionality
var _this = this;
$(function () {
    $(window).on("scroll", function () {
        if ($(_this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        }
        else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').on("click", function () {
        $('body,html').animate({
            scrollTop: 0
        }, 100);
        return false;
    });
});
