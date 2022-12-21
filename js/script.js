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

$('#banner-slide').slick({
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
});

// Hero are slide end

$('.testimonial-slide').slick({
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
