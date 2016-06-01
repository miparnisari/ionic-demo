angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider 

  
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('sessions', 
    { url: "/sessions", 
      templateUrl: "templates/sessions.html",
       controller: 'SessionsController'
  })

  .state('session', 
    { url: "/session/:id", 
      templateUrl: "templates/session.html", 
      controller: 'SessionController'
  })
  
  .state('contacts', 
    { url: "/contacts", 
      templateUrl: "templates/contacts.html", 
      controller: 'ContactsController'
  });


  $urlRouterProvider.otherwise('/home')

});