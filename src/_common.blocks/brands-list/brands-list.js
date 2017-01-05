$(function () {
    $('.brands-list .slick-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        fade: false,
        cssEase: 'ease',
        slidesToShow: 2,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: '<button type="button" class="slick-prev icon icon-angle-right-2"></button>',
        nextArrow: '<button type="button" class="slick-next icon icon-angle-right-2"></button>',
        autoplay: false,
        autoplaySpeed: 5000,
        zIndex: 1,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: $screenSm - 1,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: $screenMd - 1,
                settings: {
                    slidesToShow: 6
                }
            }
        ]
    });
});