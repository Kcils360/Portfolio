'use-strict';


// $('li').on('click', function() {
//   var $aboutShow = $(this).data('content');
//   $('section').hide();
//   $('#' + $aboutShow).fadeIn(500);
// });
//
//

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
    $slideContainer.animate({'margin-left': '-='+width}, 1000, function(){
      currentSlide++;
      if(currentSlide === $slides.length){
        currentSlide = 1;
        $slideContainer.css('margin-left', 0);
      }
    });
  }, 3000);
});
//----------------------------------------------------------------
