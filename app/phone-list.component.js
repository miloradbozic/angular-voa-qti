'use strict';
// Register `phoneList` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('phoneList', {
    template:
        '{{question}} <ul>' +
          '<li ng-repeat="choice in choices">' +
            '<input type="checkbox" value="choice"><span>{{choice}}</span>' +
          '</li>' +
        '</ul>' +
        '<a href="" ng-click="$ctrl.next()">Next</a>',
    controller: function PhoneListController($http, $scope) {

    //init
        $http({
            method: 'GET',
            url: 'https://localhost:9090/api/runner/start'
        }).then(function successCallback(response) {
            console.log(response);
            console.log(response.data);
            $scope.question = response.data.question.questionText;
            $scope.choices =  response.data.question.choices;
          }, function errorCallback(response) {
        });

      this.next = function() {
        $http({
            method: 'GET',
            url: 'https://localhost:9090/api/runner/next'
        }).then(function successCallback(response) {
            console.log(response.data);
            $scope.question = response.data.question.questionText;
            $scope.choices =  response.data.question.choices;
          }, function errorCallback(response) {
        });
      };

//      function previous() {
//        console.log("Halo prev");
//      }
    }
  });
