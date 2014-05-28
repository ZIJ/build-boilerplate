build-boilerplate
=================
Reusable build architecture on top of Gulp and Browserify

#### Why do I need this? Scaffolding rocks!

[Yeoman](http://yeoman.io/) is awesome, really. However, this project is only about build, not the whole app structure. The sample app provided uses Backbone and Marionette, but all it does is just rendering a list of sample entities, so you can use whatever frameworks you like, no opinions here.

#### Prerequisites

[Install](http://nodejs.org/) Node.js with NPM, then run
```
npm install -g bower
npm install -g gulp
npm install
bower install
```
#### Building for development (uncompressed js and css with source maps)
`gulp`
#### Building for production (minified js and css)
`gulp --type procuction`
