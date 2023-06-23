var app = {
    pageScroll: '',
    lgWidth: 1200,
    mdWidth: 992,
    smWidth: 768,
    resized: false,
    iOS: function () {
        return navigator.userAgent.match( /iPhone|iPad|iPod/i );
    },
    touchDevice: function () {
        return navigator.userAgent.match( /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i );
    }
};

function isLgWidth() {
    return $( window ).width() >= app.lgWidth;
} // >= 1200
function isMdWidth() {
    return $( window ).width() >= app.mdWidth && $( window ).width() < app.lgWidth;
} //  >= 992 && < 1200
function isSmWidth() {
    return $( window ).width() >= app.smWidth && $( window ).width() < app.mdWidth;
} // >= 768 && < 992
function isXsWidth() {
    return $( window ).width() < app.smWidth;
} // < 768
function isIOS() {
    return app.iOS();
} // for iPhone iPad iPod
function isTouch() {
    return app.touchDevice();
} // for touch device

// console.log('pathname: ', window.location.pathname);
// console.log('url: ', window.location.href);
// console.log('origin: ', window.location.origin);

window.onload = function () {
    function preloader() {
        $(()=>{

            setTimeout( () => {
                let p = $('#preloader');
                p.addClass('hide');

                setTimeout( () => {
                    p.remove()
                },1000);

            },1000);
        });
    }
    preloader();
}

$(document).ready(function() {

    function showModal() {
        $('.show_modal_js').on('click', function (e) {
            e.preventDefault();
            let id  = $(this).attr('href');
            $(id).modal('show');
        });

        $('.modal').on('show.bs.modal', () => {
            let openedModal = $('.modal');
            if (openedModal.length > 0) {
                openedModal.modal('hide');
            }
        });
    }
    showModal();

    function showWaitModal() {
        setTimeout(function () {
            $('#wait').modal('show');
        }, 30000);

        // console.log('wait local: ', localStorage.getItem('wait'));
        //
        // if (localStorage.getItem('wait') == 'disable') {
        //     console.log('test');
        // } else {
        //     setTimeout(function () {
        //         $('#wait').modal('show');
        //     }, 3000);
        //
        //     $('#wait').on('click', function() {
        //         localStorage.setItem('wait', 'disable');
        //     })
        // }
        // localStorage.clear();
    };
    showWaitModal();

    function doCatalogue() {
        $('.catalogue__btn').click(function(event) {
            $(this).find('.catalogue__toggle').toggleClass('active');

            $('.catalogue__list').toggleClass('active');
            $( '#wrapper' ).toggleClass( 'catalogue-open' );
            $( 'body' ).toggleClass( 'nav-open' );
        });

        $('.menu-item-has-children').click(function(event) {
            $(this).toggleClass('active');
            $(this).find('.sub-menu').slideToggle();
        });

        $(document).mouseup(function (e) {
            let div = $(".header");
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                $('.catalogue__toggle').removeClass('active');
                $('.catalogue__list').removeClass('active');
                $('#wrapper').removeClass('catalogue-open');
                $('body').removeClass('nav-open');
            }
        });
    }
    doCatalogue();

    function resetSearch() {
        const search_input = $('.search-form__input');
        const search_reset = $('.search-reset');

        search_input.keyup(function () {
            let search_value = $(this).val();

            if (search_value.length > 2) { // кол-во символов
                search_reset.addClass('active');
            } else {
                search_reset.removeClass('active');
            }
        });

        search_reset.click(function(event) {
            search_input.val('');
            $(this).removeClass('active');
        });
    }
    resetSearch();

    function openMobileNav() {
        $('.header__toggle').click(function(event) {
            console.log('Показ меню');

            $('.header__top').toggleClass('header__top_open');
            $('.header__toggle').toggleClass('header__toggle_open');
            $('.search').slideToggle();
            $( 'body' ).toggleClass( 'nav-open' );
        });
    };
    openMobileNav();

    function changeDelivery() {
        $('.delivery_method_js').on('change', function () {
            let val = $(this).val();

            if (val == 'delivery') {
                $('.delivery_js').fadeIn();
                $('.pickup_js').hide();

                let fields = $('.delivery_js').find('[type="text"]');
                fields.each(function(index, el) {
                    $(this).prop('required',true);
                });


            } else {
                $('.delivery_js').hide();
                $('.pickup_js').fadeIn();

                let fields = $('.delivery_js').find('[type="text"]');
                fields.each(function(index, el) {
                    $(this).prop('required',false);
                });
            }

        });
    }
    changeDelivery()

    function collapsed() {
        let toggle = $('[data-collapse]');

        toggle.on('click', function() {
            let id = $(this).data('collapse'),
            body = $('[data-collapse-body="'+id+'"]'),
            wrap = body.closest('[data-collapse-wrapper]');

            if (!id) {
                body = $(this).parent().find('[data-collapse-body]');
                $(this).toggleClass('open');
                body.toggleClass('active');
                if ($(this).hasClass('open')) {
                    body.slideDown();
                } else {
                    body.slideUp();
                }
            }
        });
    }
    collapsed();

    function doTabs () {
        $('.tabs__wrapper').each(function() {
            let ths = $(this);
            ths.find('.tab__item').not(':first').hide();
            ths.find('.tab').click(function() {
                ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
                ths.find('.tab__item').hide().eq($(this).index()).fadeIn()
            }).eq(0).addClass('active');
        });
    }
    doTabs();

    function initSelect2 () {
        function addIcon(icon) {
            if (!icon.id) {
                return icon.text;
            }
            let $icon = $(
                '<span><span></span><i></i></span>'
            );
            $icon.find("span").text(icon.text);
            $icon.find("i").attr("class", "icon_" + icon.element.value.toLowerCase());
            return $icon;
        }

        $('.select').select2({
            placeholder: $(this).data('placeholder'),
            minimumResultsForSearch: Infinity,
            templateSelection: addIcon,
        });

    }
    initSelect2();

    $(function(){
        $(".tel").mask("+375(999) 999 - 99 - 99");
    });

    function addNameFile() {
        $('input[type="file"]').change(function (e) {
            let text = $(this).closest('label').attr('data-text');
            if (typeof e.target.files[0] == 'undefined') {
                let fileName = text;
                $(this).parent().removeClass('active');
            } else {
                fileName = e.target.files[0].name;
                $(this).parent().addClass('active');
                fileName = fileName.substring(0, 20);
            }
            $(this).parent().find('p').text(fileName);
        });
    }
    addNameFile();


    // --------------------------------------------------------------------
    // Деление чисел на разряды Например из строки 10000 получаем 10 000
    // Использование: thousandSeparator(1000) или используем переменную.
    // function thousandSeparator(str) {
    //     var parts = (str + '').split('.'),
    //         main = parts[0],
    //         len = main.length,
    //         output = '',
    //         i = len - 1;
    //
    //     while(i >= 0) {
    //         output = main.charAt(i) + output;
    //         if ((len - i) % 3 === 0 && i > 0) {
    //             output = ' ' + output;
    //         }
    //         --i;
    //     }
    //
    //     if (parts.length > 1) {
    //         output += '.' + parts[1];
    //     }
    //     return output;
    // };
    //
    // console.log(thousandSeparator(700));
    // --------------------------------------------------------------------


})
