import 'slick-carousel';

export const Slider = () => {
  const $asSeenSlider = $('.as-seen-slider');

  if ($asSeenSlider.length) {
    $asSeenSlider.slick({
      slidesToShow: 5,
      infinite:true,
      slidesToScroll: 3,
      // autoplay: true,
      swipeToSlide: true,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        }
      ]
    });
  }

  const $loungewearYouSlider = $('.loungewear-you-slider');
  const $loungewearYouPreview = $('.loungewear-you-preview');

  if ($loungewearYouSlider.length) {
    $loungewearYouSlider.slick({
      slidesToShow: 1,
      infinite:true,
      slidesToScroll: 1,
      // autoplay: true,
      swipeToSlide: true,
      autoplaySpeed: 2000,
      prevArrow: "<button type='button' class='slick-prev'><svg width='13' height='24' viewBox='0 0 13 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M11.4651 22.3396L1.00009 11.8774L11.4651 1.41412' stroke='#676869' stroke-width='2' stroke-linecap='square' stroke-linejoin='round'/> </svg></button>",
      nextArrow: "<button type='button' class='slick-next'><svg width='13' height='24' viewBox='0 0 13 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M1.41431 22.3396L11.8793 11.8774L1.41431 1.41412' stroke='#676869' stroke-width='2' stroke-linecap='square' stroke-linejoin='round'/> </svg></button>",
      appendArrows: $(".loungewear-you-arrow"),
      asNavFor: '.loungewear-you-preview'
    });

    $loungewearYouPreview.slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      asNavFor: '.loungewear-you-slider',
      focusOnSelect: true,
      arrows: false,
    });
  }

  const $reviewsSlider = $('.reviews-slider');

  if ($reviewsSlider.length) {
    $reviewsSlider.slick({
      slidesToShow: 3,
      infinite:true,
      slidesToScroll: 1,
      // autoplay: true,
      swipeToSlide: true,
      autoplaySpeed: 2000,
      prevArrow: "<button type='button' class='slick-prev'><svg width='13' height='24' viewBox='0 0 13 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M11.4651 22.3396L1.00009 11.8774L11.4651 1.41412' stroke='#676869' stroke-width='2' stroke-linecap='square' stroke-linejoin='round'/> </svg></button>",
      nextArrow: "<button type='button' class='slick-next'><svg width='13' height='24' viewBox='0 0 13 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M1.41431 22.3396L11.8793 11.8774L1.41431 1.41412' stroke='#676869' stroke-width='2' stroke-linecap='square' stroke-linejoin='round'/> </svg></button>",
      appendArrows: $(".reviews-slider-arrow"),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            infinite: true,
            adaptiveHeight: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            adaptiveHeight: true
          }
        }
      ]
    });
  }

  const $howWorksSlider = $('.how-works-slider');
  if ($howWorksSlider.length) {
    $howWorksSlider.slick({
      slidesToShow: 3,
      infinite:true,
      slidesToScroll: 1,
      // autoplay: true,
      swipeToSlide: true,
      autoplaySpeed: 2000,
      prevArrow: "<button type='button' class='slick-prev'><svg width='13' height='24' viewBox='0 0 13 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M11.4651 22.3396L1.00009 11.8774L11.4651 1.41412' stroke='#676869' stroke-width='2' stroke-linecap='square' stroke-linejoin='round'/> </svg></button>",
      nextArrow: "<button type='button' class='slick-next'><svg width='13' height='24' viewBox='0 0 13 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M1.41431 22.3396L11.8793 11.8774L1.41431 1.41412' stroke='#676869' stroke-width='2' stroke-linecap='square' stroke-linejoin='round'/> </svg></button>",
      appendArrows: $(".how-works-arrow"),

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]
    });
  }
}