'use strict';

const $width = $(window).width();
const $height = $(window).height();
const hideContent = function(){
  $('#slider').hide();
  $('#sliderTall').hide();
  $('#about').hide();
  $('#gitProjects').hide();
};

hideContent();
if($width<$height){
  $('#sliderTall').show();
} else{
  $('#slider').show();
}
(function handleMainNav(){
  const $menuList = $('.menu li');
  $($menuList).on('click', function() {
    console.log(this);
    hideContent();
    $('#' + this.className).fadeIn(700);
    if($width < 800){
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

  if($width < $height){
    $slider = $('#sliderTall');
    $slideContainer = $slider.find('.slidesTall');
    $slides = $slideContainer.find('.slideTall');
    $slidesImg = $slides.find('img')
  }

  $slideContainer.css('height', $height);
  $slider.css('max-width', $width);
  $slides.css('max-width', $width);
  $slidesImg.css('width', $width);
  setInterval(function(){
    $slideContainer.animate({'margin-left': '-='+$width}, 1500, function(){
      currentSlide++;
      if(currentSlide === $slides.length){
        currentSlide = 1;
        $slideContainer.css('margin-left', 0);
      }
    });
  }, 5000);
});
//----------------------------------------------------------------

$.get('/github/user/repos')
.then(data => data.forEach(repo =>
  $('#project').append(
    `<a href="${repo.html_url}" target="_blank"><li class="repoName">${repo.name}</li></a>`,
    `<li class="repoDescrip">Description: ${repo.description}</li>`,
    `<li class="repoLanguage">Language: ${repo.language}</li>`,
    `<li class="repoCreated">Created: ${repo.created_at}</li>`)),
  err => console.error(err));

// -------------------------------------------------------------
