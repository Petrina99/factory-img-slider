"use strict";

$(document).ready(function () {
  var topImages = $('.slide1').toArray();
  var botImages = $('.slide2').toArray();
  $('.next').on('click', function () {
    // disable clicking while the animation is running
    $('.next').css('pointer-events', 'none');
    $('.prev').css('pointer-events', 'none'); // had to make for both sliders because of the difference in width

    var totalWidthTop = 0;
    var movingWidthTop = $(topImages).last().width();

    for (var _i = 0; _i < topImages.length - 1; _i++) {
      var currentImage = topImages[_i];
      totalWidthTop += $(currentImage).width();
      movePicture($(currentImage), movingWidthTop);
    }

    movePicture($(topImages).last(), -totalWidthTop);
    topImages = createNewArray(topImages, 1);
    var totalWidthBot = 0;
    var movingWidthBot = $(botImages).last().width();

    for (var _i2 = 0; _i2 < botImages.length - 1; _i2++) {
      var _currentImage = botImages[_i2];
      totalWidthBot += $(_currentImage).width();
      movePicture($(_currentImage), movingWidthBot);
    }

    movePicture($(botImages).last(), -totalWidthBot);
    botImages = createNewArray(botImages, 1);
  });
  $('.prev').on('click', function () {
    $('.prev').css('pointer-events', 'none');
    $('.next').css('pointer-events', 'none'); // same as .next but it moves in the other direction and by the width of the first picture not the last

    var totalWidthTop = 0;
    var movingWidthTop = $(topImages).first().width();

    for (var _i3 = 1; _i3 < topImages.length; _i3++) {
      var currentImage = topImages[_i3];
      totalWidthTop += $(currentImage).width();
      movePicture($(currentImage), -movingWidthTop);
    }

    movePicture($(topImages).first(), totalWidthTop);
    topImages = createNewArray(topImages, 0);
    var totalWidthBot = 0;
    var movingWidthBot = $(botImages).first().width();

    for (var _i4 = 1; _i4 < botImages.length; _i4++) {
      var _currentImage2 = botImages[_i4];
      totalWidthBot += $(_currentImage2).width();
      movePicture($(_currentImage2), -movingWidthBot);
    }

    movePicture($(botImages).first(), totalWidthBot);
    botImages = createNewArray(botImages, 0);
  });
});

function movePicture(img, width) {
  // move the divs, remove old class and add a new one, enable buttons
  img.animate({
    left: "+=".concat(width)
  }, 350, "swing", function () {
    $('.next').css('pointer-events', 'auto');
    $('.prev').css('pointer-events', 'auto');
  });
}

function createNewArray(currentArray, direction) {
  var newArray = [];

  if (direction == 1) {
    newArray[0] = currentArray.pop();

    for (var i = 1; i <= currentArray.length; i++) {
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
