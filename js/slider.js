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

    function addSteps() {

        let steps = $('.steps-swiper-js');

        steps.each(function() {
            let options = $(this).data('options') || {};
            let $parent = $(this).parent().parent();
            let swiperDefaults = {

                slidesPerView: 1,
                spaceBetween: 10,
                speed: 500,
                loop: true,

                pagination: {
                    el: $parent.find('.steps__dotted')[0],
                },

                navigation: {
                    nextEl: $parent.find('.icon_arrow_right')[0],
                    prevEl: $parent.find('.icon_arrow_left')[0],
                },

                breakpoints: {
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 36,
                    },
                }


            };

            let swiperOptions = $.extend(swiperDefaults, options),
            mySwiper = new Swiper(this, swiperOptions);

            // console.log($parent);
            // console.log($parent.find('.steps__dotted')[0]);
            // console.log($parent.closest('.projects__item').find('.projects-swiper-sm-js')[0]);
        });

    }
    addSteps();

});
