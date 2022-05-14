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

    // determines how much the last one moves 
    let totalWidthFirst = imgOne.width() + imgTwo.width() + imgThree.width() + imgFour.width() + imgFive.width() + imgSix.width();

    // determines how much all of them move except the last one
    let movingWidthFirst = imgSeven.width();
    
    movePicture(imgOne, movingWidthFirst, 'img1', 'img2');
    movePicture(imgTwo, movingWidthFirst, 'img2', 'img3');
    movePicture(imgThree, movingWidthFirst, 'img3', 'img4');
    movePicture(imgFour, movingWidthFirst, 'img4', 'img5');
    movePicture(imgFive, movingWidthFirst, 'img5', 'img6');
    movePicture(imgSix, movingWidthFirst, 'img6', 'img7');
    movePicture(imgSeven, -totalWidthFirst, 'img7', 'img1');


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

    movePicture(imgOne2, movingWidthSecond, 'img21', 'img22');
    movePicture(imgTwo2, movingWidthSecond, 'img22', 'img23');
    movePicture(imgThree2, movingWidthSecond, 'img23', 'img24');
    movePicture(imgFour2, movingWidthSecond, 'img24', 'img25');
    movePicture(imgFive2, movingWidthSecond, 'img25', 'img26');
    movePicture(imgSix2, movingWidthSecond, 'img26', 'img27');
    movePicture(imgSeven2, -totalWidthSecond, 'img27', 'img21');

  });

  $('.prev').on('click', () => {

    // identical as .next but other direction and it moves by the width of the first picture not the last
    const imgOne = $('.img1');
    const imgTwo = $('.img2');
    const imgThree = $('.img3');
    const imgFour = $('.img4');
    const imgFive = $('.img5');
    const imgSix = $('.img6');
    const imgSeven = $('.img7');
    
    let totalWidthFirst = imgTwo.width() + imgThree.width() + imgFour.width() + imgFive.width() + imgSix.width() + imgSeven.width();

    let movingWidthFirst = imgOne.width();

    movePicture(imgOne, totalWidthFirst, 'img1', 'img7');
    movePicture(imgTwo, -movingWidthFirst, 'img2', 'img1');
    movePicture(imgThree, -movingWidthFirst, 'img3', 'img2');
    movePicture(imgFour, -movingWidthFirst, 'img4', 'img3');
    movePicture(imgFive, -movingWidthFirst, 'img5', 'img4');
    movePicture(imgSix, -movingWidthFirst, 'img6', 'img5');
    movePicture(imgSeven, -movingWidthFirst, 'img7', 'img6');

    const imgOne2 = $('.img21');
    const imgTwo2 = $('.img22');
    const imgThree2 = $('.img23');
    const imgFour2 = $('.img24');
    const imgFive2 = $('.img25');
    const imgSix2 = $('.img26');
    const imgSeven2 = $('.img27');

    let totalWidthSecond = imgTwo2.width() + imgThree2.width() + imgFour2.width() + imgFive2.width() + imgSix2.width() + imgSeven2.width();

    let movingWidthSecond = imgOne2.width();

    movePicture(imgOne2, totalWidthSecond, 'img21', 'img27');
    movePicture(imgTwo2, -movingWidthSecond, 'img22', 'img21');
    movePicture(imgThree2, -movingWidthSecond, 'img23', 'img22');
    movePicture(imgFour2, -movingWidthSecond, 'img24', 'img23');
    movePicture(imgFive2, -movingWidthSecond, 'img25', 'img24');
    movePicture(imgSix2, -movingWidthSecond, 'img26', 'img25');
    movePicture(imgSeven2, -movingWidthSecond, 'img27', 'img26');
  });
});

function movePicture(img, width, prevClass, nextClass) {

  img.animate({
    left: `+=${width}`
  }, 400, "linear", () => {
    img.removeClass(prevClass).addClass(nextClass);
  })
}