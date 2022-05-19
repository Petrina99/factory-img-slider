$(document).ready(() => {

  let topImages = $('.slide1').toArray();
  let botImages = $('.slide2').toArray();

  $('.next').on('click', () => {
    
    // disable clicking while the animation is running
    $('.next').css('pointer-events', 'none');
    $('.prev').css('pointer-events', 'none');

    // had to make for both sliders because of the difference in width

    let totalWidthTop = 0;

    let movingWidthTop = $(topImages).last().width();

    for (let i = 0; i < topImages.length - 1; i++) {
      let currentImage = topImages[i];

      totalWidthTop += $(currentImage).width();

      movePicture($(currentImage), movingWidthTop);
    }

    movePicture($(topImages).last(), -totalWidthTop);

    topImages = createNewArray(topImages, 1);

    let totalWidthBot = 0;

    let movingWidthBot = $(botImages).last().width();

    for (let i = 0; i < botImages.length - 1; i++) {
      let currentImage = botImages[i];

      totalWidthBot += $(currentImage).width();

      movePicture($(currentImage), movingWidthBot);
    }

    movePicture($(botImages).last(), -totalWidthBot);

    botImages = createNewArray(botImages, 1);
  });

  $('.prev').on('click', () => {

    $('.prev').css('pointer-events', 'none');
    $('.next').css('pointer-events', 'none');
    // same as .next but it moves in the other direction and by the width of the first picture not the last
    
    let totalWidthTop = 0;

    let movingWidthTop = $(topImages).first().width();

    for (let i = 1; i < topImages.length; i++) {
      let currentImage = topImages[i];

      totalWidthTop += $(currentImage).width();

      movePicture($(currentImage), -movingWidthTop);
    }

    movePicture($(topImages).first(), totalWidthTop);

    topImages = createNewArray(topImages, 0);

    let totalWidthBot = 0;

    let movingWidthBot = $(botImages).first().width();

    for (let i = 1; i < botImages.length; i++) {
      let currentImage = botImages[i];

      totalWidthBot += $(currentImage).width();

      movePicture($(currentImage), -movingWidthBot);
    }

    movePicture($(botImages).first(), totalWidthBot);

    botImages = createNewArray(botImages, 0);
  });
});

function movePicture(img, width) {

  // move the divs, remove old class and add a new one, enable buttons
  img.animate({
    left: `+=${width}`,
  }, 350, "swing", () => {
    $('.next').css('pointer-events', 'auto');
    $('.prev').css('pointer-events', 'auto');
  })
}

function createNewArray(currentArray, direction) {
  let newArray = [];

  if (direction == 1) {
    newArray[0] = currentArray.pop();

    for (i = 1; i <= currentArray.length; i++) {
      newArray[i] = currentArray[i - 1];
    }
  }
  else {
    for (i = 0; i < currentArray.length - 1; i++) {
      newArray[i] = currentArray[i + 1];
    }

    newArray[currentArray.length - 1] = currentArray[0];
  }

  return newArray;
}