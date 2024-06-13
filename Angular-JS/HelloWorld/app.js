(function(){
    'use strict';
    var app = angular.module('HelloWorld',[]);
    app.controller('HelloWorldController',function($scope){
        $scope.greeting = "Hello"
        $scope.name = "World";
    })
})();