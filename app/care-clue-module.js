(function () {
    'use strict';

    angular.module('careClueApp', ['ngMessages',  'ngAnimate', 'ngMaterial', 'ui.router', 'careClueApp.patient']);

    angular.module('careClueApp').config(['$urlRouterProvider', '$stateProvider','$provide', function ($urlRouterProvider, $stateProvider, $provide) {
         $urlRouterProvider.otherwise('/patient');
    }]);    
})();