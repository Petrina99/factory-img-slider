$(document).ready(() => {

  $('.next').on('click', () => {

    var firstImg = $('.img1');
    var secondImg = $('.img2');
    var thirdImg = $('.img3');
    var fourthImg = $('.img4');

    let width = fourthImg.width();

    console.log(width);

    let positionFirst = firstImg.position();
    let positionSecond = secondImg.position();
    let positionThird = thirdImg.position();
    let positionFourth = fourthImg.position();

    firstImg.animate({
      left: `+=${width}`
    }, 200, "linear", () => {
      firstImg.removeClass('img1').addClass('img2');
    });

    secondImg.animate({
      left: `+=${width}`
    }, 200, "linear", () => {
      secondImg.removeClass('img2').addClass('img3');
    });

    thirdImg.animate({
      left: `+=${width}`
    }, 200, "linear", () => {
      thirdImg.removeClass('img3').addClass('img4');
    });

    fourthImg.animate({
      left: `+=${-width * 3}`
    }, 200, "linear", () => {
      fourthImg.removeClass('img4').addClass('img1');
    });

  });
});

// slide we want to move, coordinates of the slide we want to move (x1, y1) and coordinates where it has to go
/* function moveImage(slide, width, mutliplier) {

  anime({
    targets: slide,
    translateX: width * mutliplier,
    duration: 500,
    easing: "easeOutExpo",
  });

}*/