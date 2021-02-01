import $ from 'jquery'
import 'slick-slider'

const $slider = $('.js-gallery-slider');
const $sliderPagination = $('.js-slider-pagination');
const $currentSlide = $sliderPagination.find('.js-current-slide');
const $totalSlides = $sliderPagination.find('.js-total-slides');
const $slideTitle = $('.js-slide-title');
const svgSpritePath = '/img/sprite.svg';

const Icon = (name) => {
  return `
    <svg class="icon ${name} gallery-slider__${name}">
        <use xlink:href="${svgSpritePath}#icon-${name}">
    </svg>
  `;
};

const getPictureTitle = (slick) => {
  return $(slick.$slides[slick.currentSlide])
    .find('.js-slide-picture')
    .attr('alt');
}

const options = {
  slidesToShow: 1,
  prevArrow:
    `<button type="button" class="slick-prev gallery-slider__nav gallery-slider__prev">
      ${Icon('arrow-left')}
    </button>`,
  nextArrow:
    `<button type="button" class="slick-next gallery-slider__nav gallery-slider__next">
      ${Icon('arrow-right')}
    </button>`,
};

const gallerySlider = () => {
  $slider.slick(options);

  $slider.on('afterChange', (event, slick, currentSlide) => {
    $slideTitle.text(getPictureTitle(slick));
    $currentSlide.text(currentSlide + 1);
  });

  const slick = $slider.slick('getSlick');

  $slideTitle.text(getPictureTitle(slick));

  if (slick.slideCount === 1) {
    $sliderPagination.hide();
    return;
  }

  $currentSlide.text(slick.currentSlide + 1);
  $totalSlides.text(slick.slideCount);
}

export default gallerySlider