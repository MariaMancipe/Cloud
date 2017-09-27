(function(){
	angular
	.module('app')
	.factory('VideosFactory', VideosFactory);

	VideosFactory.$inject = ['$http', '$log'];

	function VideosFactory( $http, $log){
		path_to_service="http://0.0.0.0/videos";
		var rutaAcceso = "http://0.0.0.0:9292";

		var reponse='';

		return {
			getVideosAll: getVideosAll,
			getVideo: getVideo,
			getVideosConcurso: getVideosConcurso,
			postVideo: postVideo,
			getVideoCodec: getVideoCodec,
			getEstadoVideo: getEstadoVideo,
			getConcurso: getConcurso,
			getInfoConcurso : getInfoConcurso,
			getInfoVideos : getInfoVideos

		};

		function getVideosAll(){
			var reponse = '';

			$http.get(path_to_service).
	        then(function(response) {
	            reponse = response.data;
	        });

	        return reponse;
		}

		function getInfoConcurso(idDelConcurso, metodoExito){
			// Simple GET request example:
			$http({
  			method: 'GET',
  			url: rutaAcceso+"/concursos/"+idDelConcurso
			}).then(function successCallback(response) {
    		metodoExito(response);
  			}, function errorCallback(response) {
    		// called asynchronously if an error occurs
    		// or server returns response with an error status.
  			});
		}

		function getInfoVideos(idDelConcurso, metodoExito){
			var reponse = '';

			
			$http.get(rutaAcceso + "/videos/concurso/"+idDelConcurso).
	        then(function(response) {
	            reponse = response.data;
	            metodoExito(response);
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

			$http.get(rutaAcceso + "/concursos/"+idConcurso).
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