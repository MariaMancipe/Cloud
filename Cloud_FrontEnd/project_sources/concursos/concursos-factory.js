(function(){
	angular
	.module('app')
	.factory('ConcursosFactory', ConcursosFactory);

	ConcursosFactory.$inject = ['$http', '$log'];

	function ConcursosFactory( $http, $log){
		path_to_service="http://0.0.0.0:9292/concursos";

		return {
			getConcursos: getConcursos,
			getConcursoID: getConcursoID,
			postConcursos: postConcursos,
			updateConcursoID: updateConcursoID,
			deleteConcursoID: deleteConcursoID
		};

		function getConcursos(){
			var reponse;

			$http.get(path_to_service).
	        then(function(response) {
	            reponse = response.data;
	        	return reponse;
	        },function(error){
	        	alert('Could not complete request');
	        });
		}
		function postConcursos(concurso, file){
			var marco = {
				concurso: concurso
			};
			var stringMarco = JSON.stringify(marco);
			console.log(stringMarco);

			var fd = new FormData();
		    //Take the first selected file
		    //fd.append("file", files[0]);
		    fd.append("picture", file);
		    fd.append("nombre", concurso.nombre);
		    fd.append("fecha_inicio", concurso.fecha_inicio);
		    fd.append("fecha_fin", concurso.fecha_fin);
		    fd.append("url", concurso.url);
		    fd.append("descripcion", concurso.descripcion);


		    console.log(fd);
		    
		    //File upload
		    
		    $http.post(path_to_service, fd, {
		        withCredentials: false,
		        headers: {'Content-Type': undefined},
		        transformRequest: angular.identity,
		        params : fd
		    }).then(function successCallback(response) {
		    	console.log('uploaded')
			  }, function errorCallback(response) {
		    	console.log('Not uploaded')
			  });

		    //Registro concurso
		    /*
		    $http.post(path_to_service, fd, {
		        withCredentials: false,
		        //headers: {'Content-Type': "multipart/form-data" },
		        headers: {'Content-Type': undefined },
		        transformRequest: angular.identity,
		    }).then(function successCallback(response) {
		    	console.log('uploaded');
		    	console.log(response);
			  }, function errorCallback(response) {
		    	console.log('Not uploaded');
			  });     */ 
			  
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

			$http.get(path_to_service+idConcurso).
	        then(function(response) {
	            reponse = response.data;
	        });

	        return reponse;
		}

		function deleteConcursoID(concursoID){
			$http.delete(path_to_service+'/'+concursoID);
		}
	}

})();