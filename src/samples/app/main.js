'use strict';

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var AppController = require('./controllers/appController');
var AppRouter = require('./routers/appRouter');

Backbone.$ = Marionette.$ = $;

var app = new Marionette.Application();
var appController = new AppController({
    app: app
});
var router = app.router = new AppRouter({
    controller: appController
});

app.addRegions({
    main: 'main'
});

app.addInitializer(function() {
    console.log('app started');
});

app.on('initialize:after', function () {
    Backbone.history.start();
    app.router.navigate('samples', {
        trigger: true
    });
});

app.start();
