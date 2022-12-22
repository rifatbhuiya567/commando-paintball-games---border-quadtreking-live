$(window).scroll(function(){
    let scrolling = $(this).scrollTop();
    if( scrolling > 100){
      $(".Voucher img").fadeIn(500);
    }
    else{
      $(".Voucher img").fadeOut(500);
    }

    if( scrolling > 40){
      $("#navbar").addClass("nav-anim");
    }
    else{
      $("#navbar").removeClass("nav-anim");
    }

    if (scrolling > 180) {
      $(".megaMenu-prnt").addClass("scroll-menu-show");
    } 
    else {
      $(".megaMenu-prnt").removeClass("scroll-menu-show");
    }
});

// Scroll function end

$('.ser-hidden-menu').click(function(){
  $('.hidden-menu').toggle(500);
  $('.ser-hidden-menu i').toggleClass('.arrow-rotate');
});
// Mobile tab menu 

function mainSlider() {
    var myBannerSlider = $('.banner-slide');
    myBannerSlider.on('init', function (e, slick) {
          var $firstAnimatingElements = $('.banner-content:first-child').find('[data-animation]');
          doAnimations($firstAnimatingElements);
    });

    myBannerSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.banner-content[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });


    myBannerSlider.slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        fade: true,
        prevArrow: '.ban-prev',
        nextArrow: '.ban-next',
    });


    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
              });
            $this.addClass($animationType).one(animationEndEvents, function () {
                $this.removeClass($animationType);
            });
        });
    }
}
mainSlider();
// Hero area slide end


var myTestimonial = $('.testimonial-slide');
myTestimonial.slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: '.next',
    prevArrow: '.prev',
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

// Testimonial slide end