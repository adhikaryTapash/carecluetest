(function () {
    'use strict';
    angular.module('careClueApp.patient').service('patientService', function () {
        var mockPatient = null;
        var selctedPatient={};
        return {
            getAlphabet: function () {
                var alphabet =  [
                    { name: "A" },
                    { name: "B" },
                    { name: "C" },
                    { name: "D" },
                    { name: "E" },
                    { name: "F" },
                    { name: "G" },
                    { name: "H" },
                    { name: "I" },
                    { name: "J" },
                    { name: "K" },
                    { name: "L" },
                    { name: "M" },
                    { name: "N" },
                    { name: "O" },
                    { name: "P" },
                    { name: "Q" },
                    { name: "R" },
                    { name: "S" },
                    { name: "T" },
                    { name: "U" },
                    { name: "V" },
                    { name: "W" },
                    { name: "X" },
                    { name: "Y" },
                    { name: "Z" },
                    { name: "ALL" }
                ];
                return alphabet;
            },
            setSelectedPatient: function (patient) {
                selctedPatient = patient;
            },
            getSelectedPatient: function () {
                return selctedPatient;
            },
            setPatient: function (patientArr) {
                mockPatient = patientArr;
            },
            getPatient: function () {
                return mockPatient;
            },
            modifyData: function (patients) {
                for(var i=0; i<patients.length; i++){
                    patients[i].displayName = patients[i].name.first +" "+ patients[i].name.last + patients[i].phone;
                    patients[i].customName = patients[i].name.first +" "+ patients[i].name.last;
                }
                return patients;
            },
            getPatientByName: function (patients, query) {
                var filterPatients = _.filter(patients, function (item) {
                    return _.startsWith(item.name.first.toLowerCase(), query.toLowerCase());
                });
                return filterPatients;
            },
            getPatientByNo: function (patients, noOfRow) {
                var filterPatients = _.take(patients, noOfRow)
                return filterPatients;
            }
        }
    });
})();