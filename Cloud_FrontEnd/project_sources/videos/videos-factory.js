(function(){
	angular
	.module('app')
	.factory('VideosFactory', VideosFactory);

	VideosFactory.$inject = ['$http', '$log'];

	function VideosFactory( $http, $log){
		path_to_service="/";

		return {
			getVideosAll: getVideosAll,
			getVideo: getVideo,
			getVideosConcurso: getVideosConcurso,
			postVideo: postVideo,
			getVideoCodec: getVideoCodec,
			getEstadoVideo: getEstadoVideo

		};

		function getVideosAll(){
			var reponse = '';

			$http.get(path_to_service).
	        then(function(response) {
	            reponse = response.data;
	        });

	        return reponse;
		}
		function getVideo(idVideo){
			//TODO Definir tratamiento
			
			var reponse = '';

			$http.post(path_to_service).
	        then(function(response) {
	            reponse = response.data;
	        });

	        return reponse;
	        
		}

		function getVideosConcurso(idConcurso){

			console.log('Edit '+idConcurso);
			/*
			var reponse = '';

			$http.get(path_to_service+idConcurso).
	        then(function(response) {
	            reponse = response.data;
	        });

	        return reponse;*/
		}


		function getConcurso(idConcurso){

			console.log('Edit '+idConcurso);
			/*
			var reponse = '';

			$http.get(path_to_service+idConcurso).
	        then(function(response) {
	            reponse = response.data;
	        });

	        return reponse;*/
		}

		function postVideo(video){
			var reponse = '';

			$http.get(path_to_service+idConcurso).
	        then(function(response) {
	            reponse = response.data;
	        });

	        return reponse;
		}

		function getVideoCodec(codec){
				console.log('Remover '+idConcurso);
			/*
			var reponse = '';

			$http.get(path_to_service+idConcurso).
	        then(function(response) {
	            reponse = response.data;
	        });

	        return reponse;*/
		}

		function getEstadoVideo(estado){
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