var burger = document.querySelector('.burger');
var toggleMenu = document.querySelector('.toggle-menu');
var closeButton = document.querySelector('.close-button');

function displayMenu(){
  toggleMenu.style.right = 0;
}

function closeMenu(){
  console.log('ca marche');
  
  toggleMenu.style.display = 'none';
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