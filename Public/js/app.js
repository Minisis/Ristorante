(function () {
	var app = angular.module('Usuarios',[
		'ngRoute',
		'ngCookies',
		'loggin.controllers'
	]);
	
	app.config(['$routeProvider', function	($routeProvider){

		$routeProvider
			.when ('/', {
				templateUrl: 'views/checkStatus.html',
				controller: 'checStatusController'
			})
			.when('/loggin', {
				templateUrl: 'views/loggin.html',
				controller: 'logginController'
			})
			.when ('/crear-superusuario',{
				templateUrl: 'views/suser.html'
			})
			.when ('/pruebas', {
				templateUrl: 'views/pruebas.html'
			})
			.otherwise({
				redirectTo: 'loggin'
			});
	}]);
})();
