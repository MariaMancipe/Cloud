(function(){

	function LoginFactory( $http, $log){
		path_to_service="/";

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

		function postUser(usuario){
			var cReponse = {};

			cReponse.nombre = concurso.nombre;
			cReponse.url = concurso.url;
			cReponse.fechainicio = concurso.fechainicio;
			cReponse.fechafin = concurso.fechafin;
			cReponse.descripcion = concurso.descripcion;


			/*$http.post(path_to_service).
	        then(function(response) {
	            reponse = response.data;
	        });*/	        
		}

	}

	angular
	.module('app')
	.factory('LoginFactory', LoginFactory);

	LoginFactory.$inject = ['$http', '$log'];

})();