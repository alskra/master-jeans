$(function () {
    $('body').on('click', '.toggle-menu', function (e) {
        e.preventDefault();
        $(this).toggleClass('toggle-menu_opened');
        $('.menu').toggleClass('menu_opened').slideToggle(200);
    });
});