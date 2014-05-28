'use strict';

var Backbone = require('backbone');
var SampleModel = require('../models/sampleModel');

module.exports = Backbone.Collection.extend({
    model: SampleModel
});