'use-strict';

var handleMainNav = function(){
  $('.tab-content').hide();
  var $menuList = $('.menu li');
  $($menuList).on('click', function() {
    console.log(this.className);
    $('#slider').hide();
    $('#tab').hide();
    $('#' + this.className).fadeIn(500);
  });


$('#hamburger').click(function(){
  $('.menu').slideToggle();
});
}
handleMainNav();

//--------------------------carousel------------------------------
$(function() {
  var width = $(window).width();
  var height = $(window).height();
  // var animationSpeed = 1000;
  // var pause = 3000;
  var currentSlide = 1;
  var $image = $('img');
  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide')
  $slideContainer.css('height', height);
  $slider.css('max-width', width);
  $slides.css('max-width', width);
  $image.css('width', width);
  setInterval(function(){
    $slideContainer.animate({'margin-left': '-='+width}, 1500, function(){
      currentSlide++;
      if(currentSlide === $slides.length){
        currentSlide = 1;
        $slideContainer.css('margin-left', 0);
      }
    });
  }, 5000);
});
//----------------------------------------------------------------
