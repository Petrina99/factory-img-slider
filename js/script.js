$(document).ready(() => {

  $('.next').on('click', () => {

    // had to make for both sliders because of the difference in width
    // first slider
    const imgOne = $('.img1');
    const imgTwo = $('.img2');
    const imgThree = $('.img3');
    const imgFour = $('.img4');
    const imgFive = $('.img5');
    const imgSix = $('.img6');
    const imgSeven = $('.img7');

    // determines how much the last one moves back
    let totalWidthFirst = imgOne.width() + imgTwo.width() + imgThree.width() + imgFour.width() + imgFive.width() + imgSix.width();

    // how much all of them move forward
    let movingWidthFirst = imgSeven.width();

    imgOne.animate({
      left: `+=${movingWidthFirst}`
    }, 400, "linear", () => {
      imgOne.removeClass('img1').addClass('img2');
    });

    imgTwo.animate({
      left: `+=${movingWidthFirst}`
    }, 400, "linear", () => {
      imgTwo.removeClass('img2').addClass('img3');
    });

    imgThree.animate({
      left: `+=${movingWidthFirst}`
    }, 400, "linear", () => {
      imgThree.removeClass('img3').addClass('img4');
    });

    imgFour.animate({
      left: `+=${movingWidthFirst}`
    }, 400, "linear", () => {
      imgFour.removeClass('img4').addClass('img5');
    });

    imgFive.animate({
      left: `+=${movingWidthFirst}`
    }, 400, "linear", () => {
      imgFive.removeClass('img5').addClass('img6');
    });

    imgSix.animate({
      left: `+=${movingWidthFirst}`
    }, 400, "linear", () => {
      imgSix.removeClass('img6').addClass('img7');
    });

    imgSeven.animate({
      left: `-=${totalWidthFirst}`
    }, 400, "linear", () => {
      imgSeven.removeClass('img7').addClass('img1');
    });

    // second slider
    const imgOne2 = $('.img21');
    const imgTwo2 = $('.img22');
    const imgThree2 = $('.img23');
    const imgFour2 = $('.img24');
    const imgFive2 = $('.img25');
    const imgSix2 = $('.img26');
    const imgSeven2 = $('.img27');

    let totalWidthSecond = imgOne2.width() + imgTwo2.width() + imgThree2.width() + imgFour2.width() + imgFive2.width() + imgSix2.width();

    let movingWidthSecond = imgSeven2.width();

    imgOne2.animate({
      left: `+=${movingWidthSecond}`
    }, 400, "linear", () => {
      imgOne2.removeClass('img21').addClass('img22');
    });

    imgTwo2.animate({
      left: `+=${movingWidthSecond}`
    }, 400, "linear", () => {
      imgTwo2.removeClass('img22').addClass('img23');
    });

    imgThree2.animate({
      left: `+=${movingWidthSecond}`
    }, 400, "linear", () => {
      imgThree2.removeClass('img23').addClass('img24');
    });

    imgFour2.animate({
      left: `+=${movingWidthSecond}`
    }, 400, "linear", () => {
      imgFour2.removeClass('img24').addClass('img25');
    });

    imgFive2.animate({
      left: `+=${movingWidthSecond}`
    }, 400, "linear", () => {
      imgFive2.removeClass('img25').addClass('img26');
    });

    imgSix2.animate({
      left: `+=${movingWidthSecond}`
    }, 400, "linear", () => {
      imgSix2.removeClass('img26').addClass('img27');
    });

    imgSeven2.animate({
      left: `-=${totalWidthSecond}`
    }, 400, "linear", () => {
      imgSeven2.removeClass('img27').addClass('img21');
    });
  });
});