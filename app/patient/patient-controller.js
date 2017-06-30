(function () {
    'use strict';


    angular.module('careClueApp.patient').controller('patientController', ['$stateParams', '$state', '$scope', '$http', 'patientService', '$mdDialog', function ($stateParams, $state, $scope, $http, patientService, $mdDialog) {
        $scope.vm = {
            patientMock: null,
            patients: null,
            busy: false,
            after: '',
            increment: 20,
            rowCount: 0,
            alphabet: patientService.getAlphabet(),
            selectedPatient: null
        }
        $scope.vm.showDialog = function (ev, patient) {
            patientService.setSelectedPatient(patient);
            $mdDialog.show({
                controller: 'patientDialogController',
                templateUrl: 'app/patient/patient-dialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function (answer) {
                patientService.setSelectedPatient(null);
               
            }, function () {
                
                 patientService.setSelectedPatient(null);
            });
        }



        $scope.vm.makeSearch = function (query) {
            if (query.toLowerCase() == "all") {
                $state.go('patient');
            } else {
                $state.go('patientid', { searchid: query });
            }
        }
        $scope.vm.nextPage = function () {
            if ($scope.vm.busy) return;
            init();
        }
        var init = function () {
            var patientData = patientService.getPatient();
            if (!patientData) {
                $scope.vm.busy = true;
                // $http.get('').success(function (data) {
                //     patientService.setPatient(data);
                //     initData(data);
                //     $scope.vm.busy = false;
                // });
                $http.get('content/patients.json').then(successCallback, errorCallback);
            } else {
                initData(patientData);
            }
        }
        function successCallback(response) {
            var data = patientService.modifyData(response.data);

            patientService.setPatient(data);
            $scope.vm.patientMock = data;
            initData(data);
            $scope.vm.busy = false;
        }
        function errorCallback(error) {
            //error code
        }
        var initData = function (data) {

            if ($scope.vm.rowCount < data.length) {
                $scope.vm.rowCount = $scope.vm.rowCount + $scope.vm.increment;
                $scope.vm.patients = $stateParams && $stateParams.searchid ? patientService.getPatientByName(data, $stateParams.searchid) : patientService.getPatientByNo(data, $scope.vm.rowCount);
                console.log($scope.vm.patients);
            }


        }
        //init();
    }]);
})();