/* A single place to configure all of the SSFServices
Instructions:
1.  Inject 'SSFConfig' into the app.js file before any of the other SSFServices.
2.  Place '<script src="js/SSFServices/SSFConfig.js"></script>' into the index.html
            file above the app.js.
3.  Check all existing SSFServices for .config blocks of code, comment those out and include
    them in this file (with the exception of language related .config(...)s). If those files
            have a ".constant('SSFConfigConstants'...)" be sure to comment it out.
4.  If you change 'shouldTranslate' to true, tell John to finish the translate listener.
*/


angular.module('SSFConfig', [])
.constant('SSFConfigConstants', {
    //  if translation is a feature of the app, switch from false to true and review step 4.
    'shouldTranslate': false
})


;