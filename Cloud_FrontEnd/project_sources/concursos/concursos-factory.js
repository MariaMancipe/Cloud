(function(){
	angular
	.module('app')
	.factory('ConcursosFactory', ConcursosFactory);

	ConcursosFactory.$inject = ['$http', '$log'];

	function ConcursosFactory( $http, $log){
		path_to_service="/";

		return {
			getConcursos: getConcursos,
			getConcursoID: getConcursoID,
			postConcursos: postConcursos,
			updateConcursoID: updateConcursoID,
			deleteConcursoID: deleteConcursoID

		};

		function getConcursos(){
			var reponse = '';

			$http.get(path_to_service).
	        then(function(response) {
	            reponse = response.data;
	        });

	        return reponse;
		}
		function postConcursos(concurso){
			//TODO Definir tratamiento
			
			var reponse = '';

			$http.post(path_to_service).
	        then(function(response) {
	            reponse = response.data;
	        });

	        return reponse;
	        
		}

		function getConcursoID(idConcurso){

			console.log('Edit '+idConcurso);
			/*
			var reponse = '';

			$http.get(path_to_service+idConcurso).
	        then(function(response) {
	            reponse = response.data;
	        });

	        return reponse;*/
		}

		function updateConcursoID(idConcurso){
			var reponse = '';

			$http.get(path_to_service+idConcurso).
	        then(function(response) {
	            reponse = response.data;
	        });

	        return reponse;
		}

		function deleteConcursoID(idConcurso){
				console.log('Remover '+idConcurso);
			/*
			var reponse = '';

			$http.get(path_to_service+idConcurso).
	        then(function(response) {
	            reponse = response.data;
	        });

	        return reponse;*/
		}
	}

})();