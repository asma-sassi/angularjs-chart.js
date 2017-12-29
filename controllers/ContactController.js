'use strict';
var streamApp = angular.module('streamApp');
streamApp.controller('ContactController',['$scope', ContactController]);

function ContactController ($scope) {
    $scope.contact="Don't be shy to contact us!";
}