$(document).ready(() => {

  //./node_modules/@babel/cli/bin/babel.js js/script.js --out-file dist/script-compiled.js
  // sass --watch styles/scss/style.scss:styles/css/style.css
  
  let topImages = $('.slide-top').toArray();
  let botImages = $('.slide-bottom').toArray();

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

    moveLastPicture($(topImages).last(), -totalWidthTop, movingWidthTop);

    topImages = createNewArray(topImages, 1);

    let totalWidthBot = 0;

    let movingWidthBot = $(botImages).last().width();

    for (let i = 0; i < botImages.length - 1; i++) {
      let currentImage = botImages[i];

      totalWidthBot += $(currentImage).width();

      movePicture($(currentImage), movingWidthBot);
    }

    moveLastPicture($(botImages).last(), -totalWidthBot, movingWidthBot);

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

    moveFirstPicture($(topImages).first(), totalWidthTop);

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
  }, 500, "swing", () => {
    $('.next').css('pointer-events', 'auto');
    $('.prev').css('pointer-events', 'auto');
  })
}

function moveLastPicture(img, moveWidth, widthOfImg) {

  img.animate({
    left: `+=${widthOfImg}`,
  }, 500, "swing", () => {
    img.css('opacity', '0');
    img.animate({
      left: `+=${moveWidth - widthOfImg}`,
    }, 1, () => {
      img.css('opacity', '1');
    })
  });
}

function moveFirstPicture(img, moveWidth) {

  
  img.animate({
    left: `+=${moveWidth}`,
    opacity: 0
  }, 500, "swing", () => {
    img.animate({
      opacity: 1
    }, 500, "swing");
  });

}

function createNewArray(currentArray, direction) {
  let newArray = [];

  let i;
  // direction 1 is forward, 0 is back
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