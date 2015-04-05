MN-Gulp Sample
==============
My personal project for rapid SPA development.

#Setup
##Install
* npm install -g gulp (if needed)
* copy the `sample-project` content to your root directory.

##package.json
* Replace all the `[...]` markers with correct values.

##Routing
Uses angular-ui router.

* See `client/config.js` for sample code.

##Component


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

