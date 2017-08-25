'use-strict';

const width = $(window).width();
const height = $(window).height();
const hideContent = function(){
  $('#slider').hide();
  $('sliderTall').hide();
  $('#about').hide();
  $('#project').hide();
};
hideContent();
if(width<height){
  $('sliderTall').show();
} else{
  $('#slider').show();
}
(function handleMainNav(){
  const $menuList = $('.menu li');
  $($menuList).on('click', function() {
    console.log(this.className);
    hideContent();
    $('#' + this.className).fadeIn(700);
    if(width < height){
      $('.menu').slideToggle();
    }
  });

  $('#hamburger').click(function(){
    $('.menu').slideToggle();
  });
})()

//--------------------------carousel------------------------------
$(function() {

  let currentSlide = 1;
  let $slider = $('#slider');
  let $slideContainer = $slider.find('.slides');
  let $slides = $slideContainer.find('.slide');
  let $slidesImg = $slides.find('img')

  if(width < height){
    $slider = $('#sliderTall');
    $slideContainer = $slider.find('.slidesTall');
    $slides = $slideContainer.find('.slideTall');
    $slidesImg = $slides.find('img')
  }

  $slideContainer.css('height', height);
  $slider.css('max-width', width);
  $slides.css('max-width', width);
  $slidesImg.css('width', width);
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

function Project (rawDataObj) {
  this.title = rawDataObj.title;
  this.body = rawDataObj.body;
}

Project.prototype.toHtml = function() {
  // DONE: Use handlebars to render your articles.
  //       - Get your template from the DOM.
  //       - Now "compile" your template with Handlebars.
  const projectTemplate = $('#projects-template').html();
  const templateRender = Handlebars.compile(projectTemplate);
  // DONE: Use the function that Handlebars gave you to return your filled-in html template for THIS article.
  return templateRender(this);
};
