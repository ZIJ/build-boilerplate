'use strict';

var Marionette = require('backbone.marionette');

module.exports = Marionette.AppRouter.extend({

    appRoutes: {
        'samples': 'showSamples'
    },

    onRoute: function(name) {
        console.log('routing to ' + name);
    }

});
