(function(){

	function LoginFactory( $http, $log){
		path_to_service="http://localhost/usuarios";

		reponse = {};


		return {
			login: login,
			postUser: postUser
		};

		function login( json ){

			$http.get(path_to_service).
	        then(function(response) {
	            reponse = response.data;
	        }, function error(reason){
	        	reponse = 'No se pudo loggear';
	        });

	        return reponse;
		}

		function postUser(usuario, sucess, fail){

			var stringMarco = JSON.stringify(usuario);

			$http.post(path_to_service, stringMarco, {
		        withCredentials: false,
		        //headers: {'Content-Type': "application/json" },
		        headers: {'Content-Type': "application/json" },
		        transformRequest: angular.identity,
		        params : stringMarco
		    }).then(function successCallback(response) {
		    	//:v
		    	sucess(response.data);
			  }, function errorCallback(response) {
		    	console.log('Not uploaded');
		    	console.log(response);
			  }); 
		}

	}

	angular
	.module('app')
	.factory('LoginFactory', LoginFactory);

	LoginFactory.$inject = ['$http', '$log'];

})();