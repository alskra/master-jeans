$(function () {
    $('body').on('click', '.menu-catalogue__item_submenu>.menu-catalogue__btn>.menu-catalogue__icon', function (e) {
        var item = $(this).closest('.menu-catalogue__item_submenu');
        item.toggleClass('menu-catalogue__item_opened').find('.menu-catalogue__submenu').slideToggle(200);
        return false;
    });

    $('body').on('click', '.toggle-menu-catalogue', function (e) {
        e.preventDefault();
        $(this).toggleClass('toggle-menu-catalogue_opened');
        $('.menu-catalogue').toggleClass('menu-catalogue_opened').slideToggle(200);
    }).on('click', function (e) {
        if ($(e.target).closest('.menu-catalogue').length || $(e.target).closest('.toggle-menu-catalogue').length) return;
        $('.toggle-menu-catalogue').removeClass('toggle-menu-catalogue_opened');
        $('.menu-catalogue').removeClass('menu-catalogue_opened').slideUp(200);
    });
});