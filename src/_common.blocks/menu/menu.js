$(function () {
    $('body').on('click', '.toggle-menu', function (e) {
        e.preventDefault();
        $(this).toggleClass('toggle-menu_opened');
        $('.menu').toggleClass('menu_opened').slideToggle(200);
    }).on('click', function (e) {
        if ($(e.target).closest('.menu').length || $(e.target).closest('.toggle-menu').length) return;
        $('.toggle-menu').removeClass('toggle-menu_opened');
        $('.menu').removeClass('menu_opened').slideUp(200);
    });
});