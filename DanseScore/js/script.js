$('.param__list').slick({
  mobileFirst: true,
  // autoplay: true,
  // autoplaySpeed: 3000,
  // arrows: false,
  slidesToShow: 3,
  infinite: false,
  // adaptiveHeight: false,
  // adaptiveHeight: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 7
    }
  }]
});
