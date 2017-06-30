(function () {
    'use strict';


    angular.module('careClueApp.patient').controller('patientDialogController', ['$stateParams', '$state', '$scope', '$http', 'patientService', '$mdDialog', function ($stateParams, $state, $scope, $http, patientService, $mdDialog) {
        $scope.vm = {
            selectedPatient:patientService.getSelectedPatient()
        }
        //init();
    }]);
})();