'use strict';

(function(){ 
	var profileApp = angular.module('profileApp', ['ui.router'])
	profileApp.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise(function ($injector, $location) {
	        debugger
	        return ("/about");
	     });

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
	setTimeout(function(){
		var oldHash = window.location.hash
		console.log('manually triggering a hash change event in a hacky way')
		window.location.hash = '#asdf';
		window.location.hash = oldHash;
	},1000)
})();

