/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
  
  app.import('vendor/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
  destDir: 'fonts'
  });
  app.import('vendor/bootstrap/dist/js/bootstrap.js');
  app.import('vendor/bootstrap/dist/css/bootstrap.css');
  
  return app.toTree();
};
