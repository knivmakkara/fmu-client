'use strict';

angular.module('fmuClientApp')
.controller('OverviewCtrl', ['$scope', '$state', function($scope, $state){
    $scope.overviews = [
        {name: 'Beställningar', state: '^.orders'},
        {name: 'Pågående utredningar', state: '^.ongoing'},
        {name: 'Genomförda utredningar', state: '^.completed'}
    ];

    $scope.currentOverview = $scope.overviews[0];

    $scope.$watch('currentOverview', function(val){
        $state.go(val.state);
    });
}]);
