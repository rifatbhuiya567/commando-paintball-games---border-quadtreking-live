$(window).scroll(function(){
    let scrolling = $(this).scrollTop();
    if( scrolling > 100){
      $(".Voucher img").fadeIn(500);
    }
    else{
      $(".Voucher img").fadeOut(500);
    }
    // nav-anim
    if( scrolling > 40){
      $("#navbar").addClass("nav-anim");
    }
    else{
      $("#navbar").removeClass("nav-anim");
    }
});

$(".service-menu .service").click(function(){
    $(".drop-menu").toggleClass("menu-visual");
    $(".service i").toggleClass("arrow-move");
});

$('.testimonial-slide').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: '.next',
    prevArrow: '.prev',
    autoplay: true,
    speed: 500,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
});