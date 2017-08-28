'use-strict'
var app = app || {};

page('/', app.mainController.init);
page('/about', app.aboutController.init);

page();
