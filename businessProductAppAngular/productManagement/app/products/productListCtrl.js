
//productListCtrl
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                    ["productResource",//inject service
                        ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm = this;
//fetch data from the fake web service
        productResource.query(function(data) {
            vm.products = data;
        });

    }
}());
