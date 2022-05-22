"use strict";

$(document).ready(function () {
  //./node_modules/@babel/cli/bin/babel.js js/script.js --out-file dist/script-compiled.js
  // sass --watch styles/scss/style.scss:styles/css/style.css
  var topImages = $('.slide-top').toArray();
  var botImages = $('.slide-bottom').toArray();
  $('.next').on('click', function () {
    // disable clicking while the animation is running
    $('.next').css('pointer-events', 'none');
    $('.prev').css('pointer-events', 'none'); // had to make for both sliders because of the difference in width

    var totalWidthTop = 0;
    var movingWidthTop = $(topImages).last().width();

    for (var i = 0; i < topImages.length - 1; i++) {
      var currentImage = topImages[i];
      totalWidthTop += $(currentImage).width();
      movePicture($(currentImage), movingWidthTop);
    }

    moveLastPicture($(topImages).last(), -totalWidthTop, movingWidthTop);
    topImages = createNewArray(topImages, 1);
    var totalWidthBot = 0;
    var movingWidthBot = $(botImages).last().width();

    for (var _i = 0; _i < botImages.length - 1; _i++) {
      var _currentImage = botImages[_i];
      totalWidthBot += $(_currentImage).width();
      movePicture($(_currentImage), movingWidthBot);
    }

    moveLastPicture($(botImages).last(), -totalWidthBot, movingWidthBot);
    botImages = createNewArray(botImages, 1);
  });
  $('.prev').on('click', function () {
    $('.prev').css('pointer-events', 'none');
    $('.next').css('pointer-events', 'none'); // same as .next but it moves in the other direction and by the width of the first picture not the last

    var totalWidthTop = 0;
    var movingWidthTop = $(topImages).first().width();

    for (var i = 1; i < topImages.length; i++) {
      var currentImage = topImages[i];
      totalWidthTop += $(currentImage).width();
      movePicture($(currentImage), -movingWidthTop);
    } // making it invisible for the animation


    $(topImages).first().addClass('invisible');
    $(topImages).first().css('opacity', '0');
    moveFirstPicture($(topImages).first(), totalWidthTop);
    topImages = createNewArray(topImages, 0);
    var totalWidthBot = 0;
    var movingWidthBot = $(botImages).first().width();

    for (var _i2 = 1; _i2 < botImages.length; _i2++) {
      var _currentImage2 = botImages[_i2];
      totalWidthBot += $(_currentImage2).width();
      movePicture($(_currentImage2), -movingWidthBot);
    }

    $(botImages).first().addClass('invisible');
    $(botImages).first().css('opacity', '0');
    moveFirstPicture($(botImages).first(), totalWidthBot);
    botImages = createNewArray(botImages, 0);
  });
});

function movePicture(img, width) {
  // move image and enable buttons
  img.animate({
    left: "+=".concat(width)
  }, 400, "swing", function () {
    $('.next').css('pointer-events', 'auto');
    $('.prev').css('pointer-events', 'auto');
  });
}

function moveLastPicture(img, moveWidth, widthOfImg) {
  img.animate({
    left: "+=".concat(widthOfImg)
  }, 400, "swing", function () {
    img.css('opacity', '0');
    img.animate({
      left: "+=".concat(moveWidth - widthOfImg)
    }, 1, function () {
      img.css('opacity', '1');
    });
  });
}

function moveFirstPicture(img, moveWidth) {
  img.delay(400).animate({
    left: "+=".concat(moveWidth)
  }, 1, "linear", function () {
    img.animate({
      opacity: 1
    }, 1, "swing", function () {
      img.removeClass('invisible');
    });
  });
}

function createNewArray(currentArray, direction) {
  var newArray = [];
  var i; // 1 is forward, 0 is back

  if (direction == 1) {
    newArray[0] = currentArray.pop();

    for (i = 1; i <= currentArray.length; i++) {
      newArray[i] = currentArray[i - 1];
    }
  } else {
    for (i = 0; i < currentArray.length - 1; i++) {
      newArray[i] = currentArray[i + 1];
    }

    newArray[currentArray.length - 1] = currentArray[0];
  }

  return newArray;
}
