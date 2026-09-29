import 'slick-carousel';

export const Slider = () => {
  const $asSeenSlider = $('.as-seen-slider');

  if ($asSeenSlider.length) {
    $asSeenSlider.slick({
      slidesToShow: 5,
      infinite:false,
      slidesToScroll: 1,
      // autoplay: true,
      swipeToSlide: true,
      autoplaySpeed: 2000,
    });
  }

  const $loungewearYouSlider = $('.loungewear-you-slider');

  if ($loungewearYouSlider.length) {
    $loungewearYouSlider.slick({
      slidesToShow: 1,
      infinite:false,
      slidesToScroll: 1,
      // autoplay: true,
      swipeToSlide: true,
      autoplaySpeed: 2000,
      prevArrow: "<button type='button' class='slick-prev'><svg width='13' height='24' viewBox='0 0 13 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M11.4651 22.3396L1.00009 11.8774L11.4651 1.41412' stroke='#676869' stroke-width='2' stroke-linecap='square' stroke-linejoin='round'/> </svg></button>",
      nextArrow: "<button type='button' class='slick-next'><svg width='13' height='24' viewBox='0 0 13 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M1.41431 22.3396L11.8793 11.8774L1.41431 1.41412' stroke='#676869' stroke-width='2' stroke-linecap='square' stroke-linejoin='round'/> </svg></button>",
      appendArrows: $(".loungewear-you-arrow"),
    });
  }
}