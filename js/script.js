$(document).ready(() => {

  $('.next').on('click', () => {
    
    let sliderRect = document.querySelector('.slider').getBoundingClientRect();

    var firstImg = document.querySelector('.img1');
    var secondImg = document.querySelector('.img2');
    var thirdImg = document.querySelector('.img3');
    var fourthImg = document.querySelector('.img4');

    // coordinates of every image
    let x1 = getX(firstImg, sliderRect);
    let y1 = getY(firstImg, sliderRect);

    let x2 = getX(secondImg, sliderRect);
    let y2 = getY(secondImg, sliderRect);

    let x3 = getX(thirdImg, sliderRect);
    let y3 = getY(thirdImg, sliderRect);

    let x4 = getX(fourthImg, sliderRect);
    let y4 = getY(fourthImg, sliderRect);

    let width = getWidth(fourthImg);
    
    moveImage(firstImg, x1, y1, x2, y2);
    moveImage(secondImg, x2, y2, x3, y3);
    moveImage(thirdImg, x3, y3, x4, y4);
    moveImage(fourthImg, x4, y3, x1, y1);

    firstImg.classList.remove('img1');
    firstImg.classList.add('img2');
    
    secondImg.classList.remove('img2');
    secondImg.classList.add('img3');

    thirdImg.classList.remove('img3');
    thirdImg.classList.add('img4');

    fourthImg.classList.remove('img4');
    fourthImg.classList.add('img1');

    console.log("x1: " + x1 + " x2: " + x2 + " x3: " + x3 + " x4: " + x4);
  });
});

function getX(slide, slider) {
  let slideRect = slide.getBoundingClientRect();

  let offsetX = slideRect.left - slider.left;

  return offsetX;
}

function getY(slide, slider) {
  let slideRect = slide.getBoundingClientRect();

  let offsetY = slideRect.top - slider.top;

  return offsetY;
}

function getWidth(slide) {
  let slideWidth = slide.getBoundingClientRect();

  return slideWidth.width;
}

// slide we want to move, coordinates of the slide we want to move (x1, y1) and coordinates where it has to go
function moveImage(slide, x1, y1, x2, y2) {

  let x = x2 - x1;
  let y = y2 - y1;

  console.log(slide, x , y);
  anime({
    targets: slide,
    translateX: x,
    translateY: y,
    duration: 1500,
    easing: "easeOutExpo"
  });

}