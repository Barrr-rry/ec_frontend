let initFunction = (callback) => {
  //Main js file
  $(document).ready(function () {
    "use strict";

    // 無法解決 詳情請看 https://bitbucket.org/ConquerTW/ezgo/issues/94/ios-safari-chrome-detail
    // // 解決ios 2 次跳轉問題
    // // https://blog.csdn.net/qq_29994361/article/details/83897601
    // document.body.addEventListener('touchstart', function () {
    //   $('a').on('click touchend', function (e) {
    //     let el = $(this)
    //     let link = el.attr('href')
    //     window.location = link
    //   })
    // })
    $(':not(.department-menu_block):not(.department-dropdown-menu li):not(.slick-arrow):not(.department-menu_block span):not(.department-menu_block i)').on('click', function (e) {
      if (e.target !== this) {
        return
      }
      $('header .department-dropdown-menu').slideUp()
    })
    /****************************************************
     Scroll up button
     ****************************************************/
    $.scrollUp({
      scrollName: 'scrollUp',
      scrollDistance: 700,
      scrollFrom: 'top',
      scrollText: '<i class="arrow_carrot-up"></i>',
      easingType: 'easeInOutCirc',
      zIndex: 105,
    });
    /****************************************************
     判斷department 之外的lcick 將它收起來
     ****************************************************/
    $('#__nuxt').on('click', function (e) {
      let $target = $(e.target)
      if ($target.hasClass('slick-arrow') || $target.hasClass('department-menu')) {
        return
      }

    })
    /****************************************************
     Navigation
     ****************************************************/
    // $('header .department-dropdown-menu').slideUp();
    // $('header .department-menu').off()
    let $department = $('header .department-menu'),
      $dropdownMenu = $('header .department-dropdown-menu');
    $department.off('click')
    $department.on('click', function () {
      $dropdownMenu.slideToggle('fast');
      $department.children('span').children().toggleClass('arrow_carrot-down arrow_carrot-up');
    });
    $('#mobile-menu #ogami-mobile-menu .sub-menu').slideUp();
    $('#mobile-menu #ogami-mobile-menu .sub-menu--expander').off()
    $('#mobile-menu #ogami-mobile-menu .sub-menu--expander').on('click', function (event) {
      $(this).next('.sub-menu').slideToggle('100');
      $(this).children().toggleClass('icon_minus-06 icon_plus');
    });
    $('a').on('click',function () {
      $('body').css({
        overflow: 'inherit',
      });

    })
    $('.mobile-menu--control').on('click', function (event) {
      event.preventDefault()
      $('body').css({
        overflow: 'hidden',
      });
      $('#ogami-mobile-menu').css({
        left: '0',
      });
      $('.ogamin-mobile-menu_bg').css({
        display: 'block',
      });
    });
    $('#mobile-menu--closebtn').on('click', closeMenu);
    $('.ogamin-mobile-menu_bg').on('click', closeMenu);

    function closeMenu(event) {
      $('body').css({
        overflow: 'inherit',
      });
      $('#ogami-mobile-menu').css({
        left: '-100%',
      });
      $('.ogamin-mobile-menu_bg').css({
        display: 'none',
      });
    }

    (function ($) {
      // function mediaSize() {
      //   if (window.matchMedia('(min-width: 1200px)').matches) {
      //     $('header .department-dropdown-menu.down').slideDown();
      //     $('header .department-menu_block.down .department-menu span i').removeClass('arrow_carrot-down').addClass('arrow_carrot-up')
      //   } else {
      //     $('header .department-dropdown-menu.down').slideUp();
      //     $('header .department-menu_block.down .department-menu span i').removeClass('arrow_carrot-up').addClass('arrow_carrot-down')
      //   }
      // };
      mediaSize();
      window.addEventListener('resize', mediaSize, false);
    })(jQuery);

    /****************************************************
     Slider
     ****************************************************/
    // $("#slider-range").slider({
    //   range: true,
    //   min: 0,
    //   max: 500,
    //   classes: {
    //     "ui-slider": "slider-bar",
    //     "ui-slider-range": "range-bar",
    //     "ui-slider-handle": "handle"
    //   },
    //   values: [75, 300],
    //   slide: function (event, ui) {
    //     $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    //   }
    // });
    // $("#amount").val("$" + $("#slider-range").slider("values", 0) +
    //   " - $" + $("#slider-range").slider("values", 1));
    // remove to vue slider
    /****************************************************
     Tab
     ****************************************************/
    tabBundle('#tab');
    tabBundle("#tab-so1");
    tabBundle("#tab-so2");

    // Call tab & tab animation for product
    function tabBundle(tab) {
      let tabControl = tab + " " + ".tab-control a";
      let tabProduct = tab + " " + ".product";
      $(tab).tabs();
      $(tabControl).on('click', function (event) {
        $(this).parent().siblings().children().removeClass('active')
        $(this).addClass('active')
        $(tabProduct).addClass('animated zoomIn').one('animationend webkitAnimationEnd oAnimationEnd', function (event) {
          $(this).removeClass('animated zoomIn')
        });
      });
    }

    $('#tab-so3').tabs();
    $('#tab-so3 ul li a').on('click', function (event) {
      $(this).parent().siblings().removeClass('active')
      $(this).parent().addClass('active')
    });

    /****************************************************
     Countdown
     ****************************************************/
    createCountDown('#event-countdown', '2020/10/10');
    createCountDown('#event-countdown-2', '2020/8/10');
    createCountDown('#event-countdown-3', '2020/7/10');
    createCountDown('#event-countdown-4', '2019/7/27');

    // Create new countdown day
    function createCountDown(elem, end) {
      $(elem).countdown(end, function (event) {
        var $this = $(this).html(event.strftime(''
          + '<div class="countdown-number"><span>%d</span><br>days</div> '
          + '<div class="countdown-number"><span>%H</span><br>hr</div> '
          + '<div class="countdown-number"><span>%M</span><br>min</div> '
          + '<div class="countdown-number"><span>%S</span><br>sec</div>'));
      });
    }

    /****************************************************
     Home 1 Slick
     ****************************************************/
    $('.partner_block').slick({
      infinite: true,
      arrows: false,
      autoplay: false,
      swipe: false,
      responsive: [
        {
          breakpoint: 1770,
          settings: {
            autoplay: true,
            slidesToShow: 6,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 996,
          settings: {
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
          }
        }
      ]
    })
    /****************************************************
     Home 3 Slick
     ****************************************************/
    $('.deal-of-week_slide .week-deal_bottom').slick({
      arrows: true,
      slidesToScroll: 1,
      appendArrows: $('.week-deal_top .week-deal_control'),
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      autoplay: true,
      swipe: false,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 996,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    })

    $('.home3-product-block .customer-satisfied .customer-satisfied_wrapper').slick({
      arrows: false,
      slidesToScroll: 1,
      dots: true,
      appendDots: $('.customer-satisfied .customer-satisfied_control'),
      dotsClass: 'dots-wrap',
      autoplay: true,
      swipe: false,
      adaptiveHeight: true,
      customPaging: function (slider, i) {
        return '<div class="dot-control"></div>';
      },
    })
    /****************************************************
     Home 4 Slick
     ****************************************************/
    $('.from-blog .news_wrapper').slick({
      slidesToScroll: 1,
      slidesToShow: 3,
      arrows: false,
      autoplay: false,
      swipe: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 996,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 660,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    })
    /****************************************************
     Home 5 Mini product Slick
     ****************************************************/
    miniProduct('.mini-latest-products')
    miniProduct('.top-rate-products')
    miniProduct('.review-products')

    function miniProduct(target) {
      var $callSlick = target + " " + '.mini-product_bottom';
      var $appendArrows = target + " " + '.mini-product_control';
      $($callSlick).slick({
        appendArrows: $($appendArrows),
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 996,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      })
    }

    /****************************************************
     Shop Price filter
     ****************************************************/


    /****************************************************
     Shop sidebar fixed position
     ****************************************************/
    function mediaSize() {
      if (window.matchMedia('(min-width: 1200px)').matches) {
        $('.shop-layout .shop-sidebar').removeClass('fixed')
        $('.blog-layout .blog-sidebar').removeClass('fixed')
        $('#filter-sidebar--closebtn').hide()
        $('.shop-layout .shop-sidebar').removeAttr("style");
        $('.blog-layout .blog-sidebar').removeAttr("style");
        $('.shop-products_top .col-6.text-right').hide()
        $('#show-filter-sidebar').hide()
        $('.filter-sidebar--background').hide()
      } else {
        $('.shop-layout .shop-sidebar').addClass('fixed')
        $('.blog-layout .blog-sidebar').addClass('fixed')
        $('#filter-sidebar--closebtn').show()
        $('.shop-products_top .col-6.text-right').show()
        $('#show-filter-sidebar').show()
      }
    };
    mediaSize();
    window.addEventListener('resize', mediaSize, false);

    function sidebarControl() {
      $('#show-filter-sidebar').on('click', function (event) {
        event.preventDefault();
        $('.shop-layout .shop-sidebar').css({
          left: '0',
          visibility: 'visible',
        });
        $('.blog-layout .blog-sidebar').css({
          left: '0',
          visibility: 'visible',
        });
        $('.filter-sidebar--background').css({
          display: 'block',
        });
      });

      $('#filter-sidebar--closebtn').on('click', function (event) {
        event.preventDefault();
        $('.shop-layout .shop-sidebar').css({
          left: '-100%',
          visibility: 'hidden',
        });
        $('.blog-layout .blog-sidebar').css({
          left: '-100%',
          visibility: 'hidden',
        });
        $('.filter-sidebar--background').css({
          display: 'none',
        });
      });
    }

    sidebarControl()
    /****************************************************
     Shop detail slider slide
     ****************************************************/
    $('.shop-detail .big-img').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slide-img',
      swipe: false,
      infinite: false,
    });
    $('.shop-detail .slide-img').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      asNavFor: '.big-img',
      focusOnSelect: true,
      appendArrows: $('.slide-img'),
      adaptiveHeight: false,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    });
    /****************************************************
     Shop detail zoom
     ****************************************************/
    let windowWidth = window.innerWidth
    if (windowWidth > 992) {
      $('.shop-detail .big-img_block').zoom({})
    }
    /****************************************************
     About us farmer
     ****************************************************/
    tilt(".our-farmer-block")
    tilt(".our-farmer-block--2")
    tilt(".our-farmer-block--3")
    tilt(".our-farmer-block--4")

    function tilt(selector) {
      VanillaTilt.init(document.querySelector(selector), {
        max: 20,
        glare: true,
        "max-glare": 0.4,
        scale: 1.05,
        perspective: 800,
      });
    }

    /****************************************************
     FAQ question
     ****************************************************/
    $("#accordion").accordion({
      icons: false,
      heightStyle: "content",
      classes: {
        'ui-accordion-header-active': 'question-active'
      }
    });

    /****************************************************
     Quick view
     ****************************************************/

    $(document).on('click', '.quickview', function (event) {
      event.preventDefault();
      //Wirte Quick view block to DOM
      $('body').prepend('<div id="quickview"> <div class="quickview-box"> <button class="round-icon-btn" id="quickview-close-btn"><i class="fas fa-times"></i></button> <div class="row"> <div class="col-12 col-md-6"> <div class="shop-detail_img"> <button class="round-icon-btn" id="zoom-btn"> <i class="icon_zoom-in_alt"></i></button> <div class="big-img big-img_qv"> <div class="big-img_block"><img src="assets/images/shop/zoom_img_1.png" alt="product image"></div><div class="big-img_block"><img src="assets/images/shop/zoom_img_2.png" alt="product image"></div><div class="big-img_block"><img src="assets/images/shop/zoom_img_3.png" alt="product image"></div><div class="big-img_block"><img src="assets/images/shop/zoom_img_2.png" alt="product image"></div></div><div class="slide-img slide-img_qv"> <div class="slide-img_block"><img src="assets/images/shop/zoom_img_1.png" alt="product image"></div><div class="slide-img_block"><img src="assets/images/shop/zoom_img_2.png" alt="product image"></div><div class="slide-img_block"><img src="assets/images/shop/zoom_img_3.png" alt="product image"></div><div class="slide-img_block"><img src="assets/images/shop/zoom_img_2.png" alt="product image"></div></div></div></div><div class="col-12 col-md-6"><div class="shop-detail_info"> <h5 class="product-type color-type">Oranges</h5><a class="product-name" href="shop_detail.html">Pure Pineapple</a> <div class="price-rate"> <h3 class="product-price"> <del>$35.00</del>$14.00 </h3> </div><p class="product-describe"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident vero saepe nihil nisi ipsum officiis, tempora reiciendis, rerum ipsa aliquid, repudiandae expedita placeat, vel quae commodi sequi. Repellat, laudantium voluptas.</p><div class="quantity-select"> <label for="quantity">Quatity:</label> <input class="no-round-input" id="quantity" type="number" min="0" value="1"> </div><div class="product-select"> <button class="add-to-cart normal-btn outline">Add to Cart</button> <button class="add-to-compare normal-btn outline">+ Add to Compare</button> </div><div class="product-share"> <h5>Share link:</h5><a href=""><i class="fab fa-facebook-f"> </i></a><a href=""><i class="fab fa-twitter"></i></a><a href=""><i class="fab fa-invision"> </i></a><a href=""><i class="fab fa-pinterest-p"></i></a> </div></div></div></div></div></div>')
      $('#quickview .big-img_qv').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slide-img_qv',
        swipe: false,
        infinite: false,
      });
      $('#quickview .slide-img_qv').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.big-img',
        focusOnSelect: true,
        appendArrows: $('.slide-img_qv'),
        adaptiveHeight: false,
        infinite: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      });
      $('#quickview-close-btn').on('click', function (event) {
        $('#quickview').remove()
      });
    });
    callback()
  });
}

let preload = () => {
  if (process.client) {
    $('body').prepend('<div id="preload"><div class="preload-box"><div class="line"></div><div class="line"></div><div class="line"></div></div></div>')
  }
}
let loadFadeout = () => {
  //Remove preload from DOM
  if (process.client) {
    $('#preload').fadeOut('400', function () {
      $(this).remove()
    })
  }
}
export {
  initFunction,
  preload,
  loadFadeout
}
