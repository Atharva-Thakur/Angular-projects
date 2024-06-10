(function (){
    'use strict';
    angular.module('DIApp',[]).controller('DIController',DIController);

    DIController.$inject('$scope','$filter') //This is the minification safe way to inject dependencies
    function DIController($scope,$filter){
        $scope.name = "";
        $scope.upper= function (){
            var upCase = $filter('uppercase'); //Filter is a service that is injected into the controller
            $scope.name = upCase($scope.name);
        };
    }
})();