(function () {
    'use strict';

    angular.module('careClueApp.patient', ['ngMessages','ui.router', 'ngAnimate', 'infinite-scroll', 'angucomplete']);

    angular.module('careClueApp').config(['$urlRouterProvider', '$stateProvider','$provide', function ($urlRouterProvider, $stateProvider, $provide) {
        // $urlRouterProvider.otherwise('/cms/news');
        //$urlRouterProvider.otherwise('/');

        

       $stateProvider.state('patient', {
            url: '/patient',
            templateUrl: 'app/patient/patient.html',
            controller: 'patientController'
        });
        $stateProvider.state('patientid', {
            url: '/patient/:searchid',
            templateUrl: 'app/patient/patient.html',
            controller: 'patientController'
        });
            
    }]);    
})();

