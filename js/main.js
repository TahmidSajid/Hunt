$(window).scroll(function(){
    var scrolling = $(this).scrollTop()
    if(scrolling > 100){
      $(".navbar").addClass("nav-bg")
    }else{
      $(".navbar").removeClass("nav-bg")
    }
  });
  //////////////////// scroll downs///////////////////////
  $("#about_us").sectionScroller({
    scrollerButton: "#about-us-button",
    scrollType: "swing",
    scrollDuration: 100,
  });
  $("#portfolio").sectionScroller({
    scrollerButton: "#portfolio-button",
    scrollType: "swing",
    scrollDuration: 100,
  });
  $("#feedback").sectionScroller({
    scrollerButton: "#feedback-button",
    scrollType: "swing",
    scrollDuration: 100,
  });
  $("#pricing").sectionScroller({
    scrollerButton: "#pricing-button",
    scrollType: "swing",
    scrollDuration: 100,
  });
  $("#footer").sectionScroller({
    scrollerButton: "#footer-button",
    scrollType: "swing",
    scrollDuration: 100,
  });
  //////////////////// sliders ///////////////////////
  $('.banner_slides').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    nextArrow: '.banner_right',
    prevArrow: '.banner_left',
  });
  $('.service_slider').slick({
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 3,
      slidesToScroll:1,
      arrows: true,
      nextArrow: '.slide_down',
      prevArrow: '.slide_up',
      vertical: true,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: '.slide_down',
          prevArrow: '.slide_up',
          vertical: true,
        }
      }
    ]
    });
    $('.para_txt').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.img_slides',
      vertical: true,
    });
    $('.img_slides').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.para_txt',
      dots: false,
      arrows: true,
      nextArrow: '.feed_up',
      prevArrow: '.feed_down',
      centerMode: true,
      focusOnSelect: true,
      vertical: true,
    });
    $('.counter_tbl h3').counterUp({
      delay: 10,
      time: 1000
  });
  $('.spons_slider').slick({
    centerMode: true,
    centerPadding: '0',
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });