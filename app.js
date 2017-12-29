angular.module('streamApp',['main']);
angular.module('main',[]);
angular.module('main').controller("mainController", function ($scope) {
   $scope.data="hello world!";
});