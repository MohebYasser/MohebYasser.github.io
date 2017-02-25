angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.main', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/main.html',
        controller: 'mainCtrl'
      }
    }
  })

  .state('menu.about', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('menu.privacyPolicy', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/privacyPolicy.html',
        controller: 'privacyPolicyCtrl'
      }
    }
  })

  .state('menu.newApps', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/newApps.html',
        controller: 'newAppsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu/page1')

  

});