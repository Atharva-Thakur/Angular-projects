(function(){
    'use strict';
    var app = angular.module('ShoppingCart',[]);
    app.controller('ShoppingCartController', ShoppingCart);

    ShoppingCart.$inject = ['$scope'];

    function ShoppingCart($scope){
        $scope.cart = ['Milk', 'Eggs'];
        $scope.errorText=""
        $scope.addToCart = function(){
            var item = $scope.newItem;
            if($scope.cart.indexOf(item)==-1){
                $scope.cart.push(item);
                $scope.errorText=""
            }
            else{
                $scope.errorText="You have already added the item in cart."
            }
            
        };

        $scope.removeFromCart = function(item){
            var index = $scope.cart.indexOf(item);
            $scope.cart.splice(index, 1);
        };
    }
})();


//minification
// !function(){"use strict";function r(r){r.cart=["Milk","Eggs"],r.errorText="",r.addToCart=function(){var t=r.newItem;-1==r.cart.indexOf(t)?(r.cart.push(t),r.errorText=""):r.errorText="You have already added the item in cart."},r.removeFromCart=function(t){var e=r.cart.indexOf(t);r.cart.splice(e,1)}}angular.module("ShoppingCart",[]).controller("ShoppingCartController",r),r.$inject=["$scope"]}();
