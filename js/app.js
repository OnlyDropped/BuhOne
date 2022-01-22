$('.slider-wrapper').slick({
  dots: true,
  infinite: false,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/arrow-left.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icon/arrow-right.svg" alt=""></button>',
});

new WOW().init({

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
});