const burger = document.querySelector('.burger');
const toggleMenu = document.querySelector('.toggle-menu');
const closeButton = document.querySelector('.close-button');

function displayMenu(){
  toggleMenu.style.right = 0;
}

function closeMenu(){
  toggleMenu.style.right = '100%';
}

burger.addEventListener('click', displayMenu);
closeButton.addEventListener('click', closeMenu);


// Swiper
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 10000,
      },

    pagination: {
      el: '.swiper-pagination',
    },
  });

//   Style au scroll
  $(function () {
  $(document).scroll(function () {
    var $nav = $(".main-nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// Bouton back-to-top

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