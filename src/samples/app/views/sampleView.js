'use strict';

var Marionette = require('backbone.marionette');
var template = require('../templates/sample.hbs');

module.exports = Marionette.ItemView.extend({
    template: template,
    tagName: 'li',
    className: 'sample'
});
