

var swiper = new Swiper('.swiper-container', {
    loop: true,
    centeredSlides: true,
    autoplay: {

        delay: 5000,
  
        disableOnInteraction: false,
  
      },

    pagination: {
      el: '.swiper-pagination',
    },
  });

  $(function () {
  $(document).scroll(function () {
    var $nav = $(".main-nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});