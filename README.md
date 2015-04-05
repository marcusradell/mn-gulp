MN-Gulp Sample
==============
My personal project for rapid SPA development.

#Setup
##Install
* npm install -g gulp (if needed)
* copy the `sample-project` content to your root directory.

##package.json
* Replace all the `[...]` markers with correct values.

##gulpfile.js
###config

You may replace a key in the config object and send in a partial config to mn-gulp.
`Lodash#assign` is used to override the default config.

* Copy the content of `gulp/config/index.js` into your `gulpfile.js`.
* Remove all config keys you want as default.
* Reformat the config keys you want to change.
* send in your config object as the second parameter into mn-gulp.

##Routing
Uses angular-ui router.

* See `client/config.js` for sample code.
* Add new routes by adding a section in `client/config.js`.
* Add new pages in `ui-views` by copy pasting an existing.
* If you need a controller for your page, then imitate the component controllers.

##Client components
Uses angular and browserify to make a resuable angular directive.

* Copy and paste `client/components/mn-authentication` content into a new folder `shortnamespace-component`.
* Change `index.js` variable `moduleName` to `shortnamespaceComponent`.
* Update `template.html`.
* Update `controller.js`.
* Update `repository.js`.
* Add or remove files from `index.js` if they aren't needed.
* Use components in your `ui-view` `template.html` files.

#Running locally
##Gulp tasks
* Run `gulp build` to build to `dist/`.
* Run `gulp watch` to start the live reload server in `dist/server/`.
* `gulp/subtasks/` and `gulp/bundleHelper/` are used internally by `gulp/tasks/`.
* `gulp/tasks/` lists all callable gulp tasks and should be your reference point. Check the code!


#Hosting on Firebase
* Create a project on firebase.com with static hosting for your client.
* Replace the `[...]` with your project name.
* Globally install the firebase CLI via npm.
* Build the project with gulp.
* `cd dist/`
* `firebase deploy`
* Done! Go to your site.

