(function(){

	function LoginFactory( $http, $log, config){
		path_to_service=config.baseURL+"/usuarios";

		reponse = {};


		return {
			login: login,
			postUser: postUser
		};

		function login( json, sucess, fail ){
			///usuarios/:correo/:clave
			$http.get(config.baseURL+"/usuarios"+"/credenciales/"+json.correo+"/"+json.clave)
			.then(function successCallback(response) {
		    	//:v
		    	reponse = response.data;
		    	sucess(response.data.id);
			  }, function errorCallback(response) {
		    	console.log('Not logged');
		    	fail();
			  }); 
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

	LoginFactory.$inject = ['$http', '$log', 'config'];

})();