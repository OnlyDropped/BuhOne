$('.slider-wrapper').slick({
  dots: true,
  infinite: false,
  fade: true,
  cssEase: 'linear',
  //autoplay: true,
  //autoplaySpeed: 2000,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/arrow-left.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icon/arrow-right.svg" alt=""></button>',
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



$('.our-clients__wrapper').slick({
  dots: true,
  infinite: false,
  //fade: true,
  cssEase: 'linear',
  //autoplay: true,
  //autoplaySpeed: 2000,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/arrow-left.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icon/arrow-right.svg" alt=""></button>',
    responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

});

$('.reviews__wrapper').slick({
  dots: true,
  infinite: false,
  //fade: true,
  cssEase: 'linear',
  //autoplay: true,
  //autoplaySpeed: 2000,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/arrow-left.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icon/arrow-right.svg" alt=""></button>',
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    /*{
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    } */
  ]

});

$('.header-nav__btn').click(function(){
  $(this).toggleClass('open');
  $('.header-nav__info').toggleClass('active');
});

new WOW().init({

});