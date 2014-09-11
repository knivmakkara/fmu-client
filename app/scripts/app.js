'use strict';

/**
 * @ngdoc overview
 * @name fmuClientApp
 * @description
 * # fmuClientApp
 *
 * Main module of the application.
 */
angular
.module('fmuClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/overview/orders");
    //
    // Now set up the states
    $stateProvider
    .state('overview', {
        url: "/overview",
        abstract: true,
        controller: 'OverviewCtrl',
        templateUrl: "views/overview.html",
    })
    .state('overview.orders', {
        url: "/orders",
        templateUrl: "views/overview.orders.html",
    })
    .state('overview.ongoing', {
        url: "/ongoing",
        templateUrl: "views/overview.ongoing.html",
    })
    .state('overview.completed', {
        url: "/completed",
        templateUrl: "views/overview.completed.html",
    });
});

