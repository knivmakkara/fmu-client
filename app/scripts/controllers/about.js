'use strict';

/**
 * @ngdoc function
 * @name fmuClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fmuClientApp
 */
angular.module('fmuClientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
