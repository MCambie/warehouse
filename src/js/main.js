

var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
  loop: true,
    effect: 'fade',

    spaceBetween: 30,

    centeredSlides: true,

    autoplay: {

      delay: 2500,

      disableOnInteraction: false,

    },
    pagination: {
      el: '.swiper-pagination',
    },
  });