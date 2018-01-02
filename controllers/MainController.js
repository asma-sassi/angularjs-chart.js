'use strict';
var streamApp = angular.module('streamApp');
streamApp.config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    // Import colors into chart
    ChartJsProvider.setOptions({
        chartColors: ['#c980ff', '#FF8A80', '#80b6ff', "#008000"],
        responsive: true,
        beginAtZero: true
    });
}]);
streamApp.controller('MainController',['$scope', '$http', ChartController]);

function ChartController ($scope, $http) {
    // create a message to display in our view
    $scope.home = "Welcome Home!";

    // REQUEST OPTIONS USING GET METHOD.
    var request1 = {
        method: 'get',
        url: './data/platform.json',
        dataType: 'json',
        contentType: "application/json"
    };

    $scope.arrSeries1 = new Array;
    $scope.arrLabels1 = new Array;
    $scope.arrData1 = new Array;

    $http(request1)
        .then(function onSuccess(jsonData) {

            // LOOP THROUGH DATA IN THE JSON FILE.
            angular.forEach(jsonData.data, function (item) {
                //Get platform values in each object
               $scope.arrSeries1.push(item.platform);

                //Get all property names in each object
               $scope.labels1 = Object.keys(item);
               $scope.arrLabels1 = $scope.labels1.slice(1,10);// Get property names between index[1] and index[10]

                //Get values in each object
                $scope._data1 = jsonData.data.map(function(item) {
                    return Object.keys(item)
                        .filter(function(key){
                            return key !=='live' && key !=='platform' //eliminate values of platform & live properties
                        })
                        .map(function(key) {
                        return item[key]
                    });
                });
                $scope.arrData1 = $scope._data1;

            });

            $scope.series1 = $scope.arrSeries1;
            $scope.labels1 = $scope.arrLabels1;
            $scope.data1 = $scope.arrData1;

            $scope.options1 = {
                legend: { display: true },
                title: {
                    display: true,
                    text: 'Most used platform distribution in %'
                }
            };
        });


    // REQUEST OPTIONS USING GET METHOD.
    var request2 = {
        method: 'get',
        url: './data/country.json',
        dataType: 'json',
        contentType: "application/json"
    };

    $scope.arrSeries2 = new Array;
    $scope.arrLabels2 = new Array;
    $scope.arrData2 = new Array;

    $http(request2)
        .then(function onSuccess(jsonData) {

            //LOOP THROUGH DATA IN THE JSON FILE.
            angular.forEach(jsonData.data, function (item) {

                //Get platform values in each object
                $scope.seriestab = Object.keys(item);
                $scope.arrSeries2 = $scope.seriestab.slice(0,4); // Get property names of cdn, p2p and total and percentage

                //Get all property names in each object
                $scope.arrLabels2.push(item.country);

                //Get values in each object
                $scope._data2 = jsonData.data.map(function(item) {
                    return Object.keys(item)
                        .filter(function(key){
                            return key !=='country' //eliminate values of percentage & country properties
                        })
                        .map(function(key) {
                            return item[key]
                        });
                });
                $scope.arrData2 = $scope._data2;

            });

            $scope.series2 = $scope.arrSeries2;
            $scope.labels2 = $scope.arrLabels2;
            $scope.data2 = $scope.arrData2;

            $scope.options2 = {
                legend: { display: true },
                title: {
                    display: true,
                    text: 'Streams distribution in % per most powerful countries'
                }
            };
        });
}





