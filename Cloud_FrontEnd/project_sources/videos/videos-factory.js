(function(){
	angular
	.module('app')
	.factory('VideosFactory', VideosFactory);

	VideosFactory.$inject = ['$http', '$log'];

	function VideosFactory( $http, $log){
		path_to_service="http://localhost:3000/videos";
		var reponse='';

		return {
			getVideosAll: getVideosAll,
			getVideo: getVideo,
			getVideosConcurso: getVideosConcurso,
			postVideo: postVideo,
			getVideoCodec: getVideoCodec,
			getEstadoVideo: getEstadoVideo,
			getConcurso: getConcurso

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
			reponse = '';

			$http.get('http://localhost:3000/concursos/'+idConcurso).
	        then(function(response) {
	            reponse = response.data;
	            console.log('Concurso Actual:');
	            console.log(reponse);
	        	return reponse;
	        });

		}

		function postVideo(video){

			
			 $http.post(path_to_service, stringMarco, {
		        withCredentials: false,
		        //headers: {'Content-Type': "application/json" },
		        headers: {'Content-Type': "application/json" },
		        transformRequest: angular.identity,
		        params : stringMarco
		    }).then(function successCallback(response) {
		    	console.log('uploaded');
		    	console.log(response);
			  }, function errorCallback(response) {
		    	console.log('Not uploaded');
			  });      
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