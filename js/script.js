$(document).ready(() => {

  $('.next').on('click', () => {

    let firstImg = $('.img-one');
    let secondImg = $('.img-two');
    let thirdImg = $('.img-three');
    let lastImg = $('.img-four');

    firstImg.removeClass('img-one').addClass('img-two');
    secondImg.removeClass('img-two').addClass('img-three');
    thirdImg.removeClass('img-three').addClass('img-four');
    lastImg.removeClass('img-four').addClass('img-one');
  });

  $('.prev').on('click', () => {

    var firstImg = $('.img-one');
    var secondImg = $('.img-two');
    var thirdImg = $('.img-three');
    var lastImg = $('.img-four');
    
    firstImg.removeClass('img-one').addClass('img-four');
    secondImg.removeClass('img-two').addClass('img-one');
    thirdImg.removeClass('img-three').addClass('img-two');
    lastImg.removeClass('img-four').addClass('img-three');
  });
});