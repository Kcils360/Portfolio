'use-strict'

var app = app || {};

app.hideContent();
(function(module) {
  const aboutController = {};
  aboutController.init = function() {
    app.hideContent();
    $('#aabout').fadeIn();
  }

  module.aboutController = aboutController;
})(app);
