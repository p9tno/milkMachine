$(document).ready(function() {


    const single = new Swiper('.swiper_single_js', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 1000,
        loop: true,
        autoplay: {
          delay: 5000,
        },

        navigation: {
            nextEl: '.arrows_preview_js .icon_arrow_right',
            prevEl: '.arrows_preview_js .icon_arrow_left',
        },
        pagination: {
            el: '.swiper__dotted',
            clickable: true,
        },


    });

    const product = new Swiper('.swiper_product_js', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 400,
        loop: true,
        autoplay: {
          delay: 5000,
        },

        navigation: {
            nextEl: '.arrows_product_js .icon_arrow_right',
            prevEl: '.arrows_product_js .icon_arrow_left',
        },
        pagination: {
            el: '.swiper__dotted',
            clickable: true,
        },


    });


    function addSliders() {

        let catalog = $('.swiper_catalog_js');

        catalog.each(function() {
            let options = $(this).data('options') || {};
            let $parent = $(this).parent();
            let swiperDefaults = {

                loop: true,
                slidesPerView: 1,
                spaceBetween: 10,
                speed: 500,
                autoHeight: true,

                autoplay: {
                  delay: 10000,
                },


                navigation: {
                    nextEl: $parent.find('.icon_arrow_right')[0],
                    prevEl: $parent.find('.icon_arrow_left')[0],
                },

                breakpoints: {
                    768: {
                        spaceBetween: 30,
                        slidesPerView: 4,
                    },
                },


            };

            let swiperOptions = $.extend(swiperDefaults, options),
            mySwiper = new Swiper(this, swiperOptions);

            console.log($parent);
            // console.log($parent.find('.projects__dotted')[0]);
            // console.log($parent.closest('.projects__item').find('.projects-swiper-sm-js')[0]);
        });

    }
    addSliders();

    const blog = new Swiper('.swiper_blog_js', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        autoHeight: true,

        autoplay: {
          delay: 5000,
        },


        navigation: {
            nextEl: '.blog .icon_arrow_right',
            prevEl: '.blog .icon_arrow_left',
        },

        breakpoints: {
            768: {
                spaceBetween: 35,
                slidesPerView: 3,
            },
        },

    });

    const team = new Swiper('.swiper_team_js', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        autoHeight: true,

        autoplay: {
          delay: 5000,
        },


        navigation: {
            nextEl: '.arrows_team_js .icon_arrow_right',
            prevEl: '.arrows_team_js .icon_arrow_left',
        },

        breakpoints: {
            768: {
                spaceBetween: 33,
                slidesPerView: 4,
            },
        },

    });


});
