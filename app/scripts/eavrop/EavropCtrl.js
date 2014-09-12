'use strict';

angular.module('fmuClientApp').
    controller('EavropCtrl',['$scope', '$state', function($scope, $state){

    $scope.links = [
        {name: 'Beställning', state: 'order'},
        {name: 'Utredning', state: 'investigation'},
        {name: 'Alla händelser', state: 'allevents'},
        {name: 'Anteckningar', state: 'notes'},
        {name: 'Underlag för ersättning', state: 'compensation'},
    ];

    $scope.clickLink = function(link){
        var url = '^.'+link.state;
        $state.go(url);
    };
}]);
