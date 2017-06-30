(function () {
    'use strict';


    angular.module('MDMApp.SIS', []).config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

       $stateProvider.state('sis', {
            url: '/sis/:tab',
            templateUrl: 'Scripts/app/sis/sis.html',
            controller: 'sisController'
        });

    }]);

})();