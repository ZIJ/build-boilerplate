'use strict';

var Marionette = require('backbone.marionette');
var SampleView = require('./sampleView');
var template = require('../templates/sampleList.hbs');

module.exports = Marionette.CompositeView.extend({
    template: template,
    itemView: SampleView,
    itemViewContainer: 'ul',
    className: 'samples'
});
