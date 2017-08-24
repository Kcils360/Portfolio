'use-strict';

const width = $(window).width();
const height = $(window).height();

(function handleMainNav(){
  $('.tab-content').hide();
  var $menuList = $('.menu li');
  $($menuList).on('click', function() {
    console.log(this.className);
    $('#slider').hide();
    $('#about').hide();
    $('#project')
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

  if(width < height){
    $slider = $('#sliderTall');
    $('#sliderTall[img]').css('width', width);
    $slideContainer = $slider.find('.slidesTall');
    $slides = $slideContainer.find('.slideTall');
  }

  $slideContainer.css('height', height);
  $slider.css('max-width', width);
  $slides.css('max-width', width);
  $('#slider[img]').css('width', width);
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
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.body = rawDataObj.body;
  this.publishedOn = rawDataObj.publishedOn;
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
