'use strict';
var streamApp = angular.module('streamApp');
streamApp.config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
        chartColors: ['#c980ff', '#FF8A80', '#80b6ff'],
        responsive: true,
        beginAtZero: true
    });
}]);
streamApp.controller('MainController',['$scope', '$http', MainController]);

function MainController ($scope, $http) {
    // create a message to display in our view
    $scope.home = "Welcome Home!";

    // REQUEST OPTIONS USING GET METHOD.
    var request = {
        method: 'get',
        url: './data/platform.json',
        dataType: 'json',
        contentType: "application/json"
    };

    $scope.arrSeries = new Array;
    $scope.arrLabels = new Array;
    $scope.arrData = new Array;

    $http(request)
        .then(function onSuccess(jsonData) {

            // LOOP THROUGH DATA IN THE JSON FILE.
            angular.forEach(jsonData.data, function (item) {
                //Get platform values in each object
               $scope.arrSeries.push(item.platform);

                //Get all property names in each object
               $scope.labels = Object.keys(item);
               $scope.arrLabels = $scope.labels.slice(1,10);// Get property names between index[1] and index[10]

                //Get values in each object
                $scope._data = jsonData.data.map(function(item) {
                    return Object.keys(item)
                        .filter(function(key){
                            return key !=='live' && key !=='platform' //eliminate values of platform & live properties
                        })
                        .map(function(key) {
                        return item[key]
                    });
                });
                $scope.arrData = $scope._data;

            });

            $scope.series = $scope.arrSeries;
            $scope.labels = $scope.arrLabels;
            $scope.data = $scope.arrData;

            $scope.options = {
                legend: { display: true },
                title: {
                    display: true,
                    text: 'Most used platform distribution in %'
                }
            };
        });
}




