import angular from 'angular';
import uiRouter from 'angular-ui-router';
//import ngRoute from 'angular-route';
import userFactory from 'factories/user-factory';
import userController from 'pages/user';

const app = angular.module('app',[uiRouter,userFactory.name]);
app.config(($stateProvider,$urlRouterProvider,$locationProvider) => {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home',{
      url:'/',
      template:require('pages/home.html'),
    })
    .state('list',{
      url:'/list',
      template:require('pages/list.html'),
      controller:userController
    })
    .state('create',{
      url:'/create',
      template:require('pages/create.html'),
      controller:userController
    })
    .state('contactinfo',{
      url:'/contactinfo',
      template:require('pages/contactinfo.html'),
      controller:userController
    })
    .state('newmsg',{
      url:'/newmsg',
      template:require('pages/newmsg.html'),
      controller:userController
    })
    .state('sentmsgs',{
      url:'/sentmsgs',
      template:require('pages/sentmsgs.html'),
      controller:userController
    });
    $locationProvider.html5Mode(true);
});
export default app;
