//priceAnalytics controller
(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("PriceAnalyticsCtrl",
                    ["$scope",
                     "$filter",
                     "products",
                     "productService",
                     PriceAnalyticsCtrl]);

    function PriceAnalyticsCtrl($scope,$filter, products, productService){
        $scope.title="Product Price Analytics";

        // Computed property
        for (var i = 0; i < products.length; i++) {
            products[i].marginPercent =
                productService.calculateMarginPercent(products[i].price,
                                                        products[i].cost);
            products[i].marginAmount =
                productService.calculateMarginAmount(products[i].price,
                                                        products[i].cost);
        }
        var orderedProductsAmount = $filter("orderBy")(products, "marginAmount");
        var filteredProductsAmount = $filter("limitTo")(orderedProductsAmount, 10);//get all the 10 products in the database

        var chartDataAmount = [];
        for (var i = 0; i < filteredProductsAmount.length; i++) {
            chartDataAmount.push({
                x: filteredProductsAmount[i].productName,
                y: [filteredProductsAmount[i].cost,
                    filteredProductsAmount[i].price,
                    filteredProductsAmount[i].marginAmount]
            });
        }

        $scope.dataAmount = {
            series: ["Cost", "Price", "Margin Amount"],
            data: chartDataAmount
        };

        $scope.configAmount = {
            title: "Top $ Margin Products",
            tooltips: true,
            labels: false,
            mouseover: function () { },
            mouseout: function () { },
            click: function () { },
            legend: {
                display: true,
                position: "right"
            }
        };

        var orderedProductsPercent = $filter("orderBy")(products, "marginPercent");
        var filteredProductsPercent = $filter("limitTo")(orderedProductsPercent, 10);//get all teh 10 products in the database

        var chartDataPercent = [];
        for (var i = 0; i < filteredProductsPercent.length; i++) {
            chartDataPercent.push({
                x: filteredProductsPercent[i].productName,
                y: [filteredProductsPercent[i].marginPercent]
            });
        }

        $scope.dataPercent = {
            series: ["Margin %"],
            data: chartDataPercent
        };

        $scope.configPercent = {
            title: "Top % Margin Products",
            tooltips: true,
            labels: false,
            mouseover: function () { },
            mouseout: function () { },
            click: function () { },
            legend: {
                display: true,
                position: "right"
            }
        };

    }
}());
