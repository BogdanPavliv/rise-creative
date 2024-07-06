export const sliderReadyToUseSettings = {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
  },
};

export const sliderClientsKindSettings = {
  dots: true,
  arrows: false,
  slidesToScroll: 1.5,
  // lazyLoad: true,
  infinite: true,
  centerPadding: "0px",
  slidesToShow: 2.4,
  speed: 500,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
  ]
};
