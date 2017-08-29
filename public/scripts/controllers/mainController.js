'use-strict'

var app = app || {};
const width = $(window).width();
const height = $(window).height();

(function(module) {
  const mainController = {};
  mainController.init = function() {
    app.hideContent();
    if(width<height){
      $('#sliderTall').show();
    } else{
      $('#slider').show();
    }
  }

  module.mainController = mainController;
})(app);
