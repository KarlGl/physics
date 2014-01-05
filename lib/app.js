define([
  './core',
  './state',
  './renderer'
], function(core, state, rend) {
  var app = _.merge(core, state, rend);
  return app;
});
