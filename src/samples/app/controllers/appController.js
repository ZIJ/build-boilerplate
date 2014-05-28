'use strict';

var Marionette = require('backbone.marionette');
var SampleCollection = require('../collections/sampleCollection');
var SampleListView = require('../views/sampleList');
var sampleData = require('../samples');

module.exports = Marionette.Controller.extend({

    showSamples: function() {
        var app = this.options.app;
        app.main.show(new SampleListView({
            collection: new SampleCollection(sampleData)
        }));
    }

});
