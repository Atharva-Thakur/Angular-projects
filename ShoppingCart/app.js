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
