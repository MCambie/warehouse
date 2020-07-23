

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

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});