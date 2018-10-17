'use strict';
// Register `phoneList` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('phoneList', {
    template:
        '{{question}} <ul>' +
          '<li ng-repeat="choice in choices">' +
            '<span>{{choice}}</span>' +
          '</li>' +
        '</ul>',
    controller: function PhoneListController($http, $scope) {
        $http({
            method: 'GET',
            url: 'http://localhost:8080/api/runner/start'
        }).then(function successCallback(response) {
            console.log(response.data);
            $scope.question = response.data.question.questionText;
            $scope.choices =  response.data.question.choices;
      }, function errorCallback(response) {
      });
    }
  });
