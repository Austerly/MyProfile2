'use strict';

(function(){ 
	var profileApp = angular.module('profileApp', ['ui.router'])
	profileApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/about")

	$stateProvider
	.state('about', {
		url: "/about",
		templateUrl: "templates/about.html"

	})
	.state('education', {
		url: '/education',
		templateUrl: 'templates/education.html'
	})
	.state('interests', {
		url: '/interests',
		templateUrl: 'templates/interests.html'
	})
});
})();