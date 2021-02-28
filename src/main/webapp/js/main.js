window.app = angular.module('app', ['ngRoute']);

window.app.config([
  '$routeProvider', function($routeProvider) {
    $routeProvider.when('/page1', {
      templateUrl: 'pages/page1.html',
      controller: 'autoRefreshController'
    }).when('/page2', {
      templateUrl: 'pages/page2.html',
      controller: 'autoRefreshController'
    }).otherwise({
      redirectTo: '/page1'
    });
  }
]);

window.app.controller('autoRefreshController', [
  '$scope', function($scope) {
    console.log("autoRefreshController");
    $scope.rand = Math.random();
  }
]);

window.app.directive('googleAd', [
  '$timeout', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        return $timeout(function() {
          var adsbygoogle, html, rand;
          rand = Math.random();
          html = "<ins class='adsbygoogle' style='display:block' data-ad-client='ca-pub-7656700967113967' data-ad-slot='1894787830' data-ad-format='auto'></ins>";
          $(element).append(html);
          return (adsbygoogle = window.adsbygoogle || []).push({});
        });
      }
    };
  }
]);
