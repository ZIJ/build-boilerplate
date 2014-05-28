build-boilerplate
=================
Reusable build architecture on top of Gulp and Browserify

#### Why do I need this? Scaffolding rocks!

[Yeoman](http://yeoman.io/) is awesome, really. However, this project is only about build, not the whole app structure. The sample app provided uses Backbone and Marionette, but all it does is just rendering a list of sample entities, so you can use whatever frameworks you like, no opinions here. LESS can also can be easily removed or replaces with SASS or Stylus.

#### Sources structure

```
+vendor (standalone libraries missing in NPM and Bower)
  +rarelib
    rarelib.js
+core
	+app (solution-wide scripts)
	  main.js
	+themes
		+default (solution-wide styles and images)
			main.less
+samples (project root; there can be others alongside)
	+app (project-specific scripts)
		main.js
	+themes
		+default (project-specific styles and images)
			main.less
```

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
`gulp --type production`
