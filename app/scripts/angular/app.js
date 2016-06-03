'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {templateUrl: '/views/tpl/welcome.html', controller: 'WelcomeCtrl'})//自动触发事件
        .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
}]);