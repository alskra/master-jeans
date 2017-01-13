$(function () {
    $('body').on('click', '.faq-item__header', function () {
        $(this).closest('.faq-item').toggleClass('faq-item_opened').find('.faq-item__content').slideToggle(200);
    })
});