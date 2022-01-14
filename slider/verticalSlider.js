const slideContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.button-up');
const downButton = document.querySelector('.button-down');
const slideLength = slideRight.querySelectorAll('div').length;



let activeSLideIndex = 0;

slideLeft.style.top = `-${(slideLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));


const changeSlide = (direction) => {
  const sliderHeight = slideContainer.clientHeight;
  if (direction === 'up') {
    activeSLideIndex++ ;
    if (activeSLideIndex > slideLength - 1) {

      activeSLideIndex = 0

    }
  } else if (direction === 'down') {
    activeSLideIndex--;
    if (activeSLideIndex < 0 ) {

      activeSLideIndex = slideLength - 1;

    }
  }
  slideRight.style.transform = `translateY(-${activeSLideIndex * sliderHeight}px)`
  slideLeft.style.transform = `translateY(${activeSLideIndex * sliderHeight}px)`

  
  
}