(function(window, $, undefined) {
  'use strict';

  $(document).ready(function() {

    // Testimonials carousel initialization
    $('.testimonials__slider').slick({
      autoplay: true,
      testimonials__arrows: false,
      slidesToShow: 3,
      testimonials__arrows: true,
      prevArrow: $(".testimonials__arrow__left"),
      nextArrow: $(".testimonials__arrow__left"),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    });
  });

  // Mobile navigation toggle
  $(".nav__toggle").click(function() {
    $(".nav").toggleClass("nav--active");
  });
  // Scroll to link
  $("[data-scroll]").click(function(e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $(e.target.dataset.scroll).offset().top
    }, 500, 'linear');
  })
})(window, jQuery, undefined);