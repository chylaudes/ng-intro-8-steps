var app = angular.module('introNg', []);
app.controller('IntroCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.sometext = "Whatever you want";
  $scope.catchphrase = "Gotta Catch them All!";


}]);

app.filter('reverse', function() {
  return function(item) {
    var a = item.toLowerCase().split("").reverse().join("");
    return a[0].toUpperCase()+ a.slice(1);
  };
});
