'use strict';
var streamApp = angular.module('streamApp');
streamApp.controller('AboutController',['$scope', AboutController]);

function AboutController ($scope) {
    $scope.about="Wanna hear about us! Here you are :)";
}