'use strict';
/*jshint ignore:start*/
var require = {
  scalejs: {
    extensions: [
      '<%=ext_name%>'
    ]
  },
  map: {
    '*': {
      'scalejs.core': 'empty:'
    }
  },
  paths: {
    requirejs: '../bower_components/requirejs/require',
    'rx.all': '../bower_components/rxjs/dist/rx.all.min',
    'rx.all.compat': '../bower_components/rxjs/dist/rx.all.compat.min',
    rx: '../bower_components/rxjs/dist/rx.min',
    'rx.compat': '../bower_components/rxjs/dist/rx.compat.min',
    'rx.aggregates': '../bower_components/rxjs/dist/rx.aggregates.min',
    'rx.async': '../bower_components/rxjs/dist/rx.async.min',
    'rx.async.compat': '../bower_components/rxjs/dist/rx.async.compat.min',
    'rx.backpressure': '../bower_components/rxjs/dist/rx.backpressure.min',
    'rx.binding': '../bower_components/rxjs/dist/rx.binding.min',
    'rx.coincidence': '../bower_components/rxjs/dist/rx.coincidence.min',
    'rx.experimental': '../bower_components/rxjs/dist/rx.experimental.min',
    'rx.lite': '../bower_components/rxjs/dist/rx.lite.min',
    'rx.lite.compat': '../bower_components/rxjs/dist/rx.lite.compat.min',
    'rx.joinpatterns': '../bower_components/rxjs/dist/rx.joinpatterns.min',
    'rx.testing': '../bower_components/rxjs/dist/rx.testing.min',
    'rx.time': '../bower_components/rxjs/dist/rx.time.min',
    'rx.virtualtime': '../bower_components/rxjs/dist/rx.virtualtime.min',
    scalejs: '../bower_components/scalejs/dist/scalejs',
    'scalejs.core': '../bower_components/scalejs/src/scalejs.core',
    'scalejs.sandbox': '../bower_components/scalejs/src/scalejs.sandbox',
    'scalejs.application': '../bower_components/scalejs/src/scalejs.application'
  },
  packages: [

  ],
  shim: {

  }
};
/*jshint ignore:end*/

