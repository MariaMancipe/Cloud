(function(){
	angular
	.module('app')
	.factory('ConcursosFactory', ConcursosFactory);

	ConcursosFactory.$inject = ['$http', '$log'];

	function ConcursosFactory( $http, $log){
		path_to_service="http://localhost:3000/concursos";

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
		    fd.append("file", file);

		    console.log(fd);
		    
		    //File upload
		    /*
		    $http.post(path_to_service, fd, {
		        withCredentials: false,
		        headers: {'Content-Type': undefined },
		        transformRequest: angular.identity
		    }).then(function successCallback(response) {
		    	console.log('uploaded')
			  }, function errorCallback(response) {
		    	console.log('Not uploaded')
			  });*/

		    //Registro concurso
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

		function deleteConcursoID(concurso){
				console.log(reponse);
				var terminar = false;
				var indice = 0;

				for (var i = 0; i < reponse.length && !terminar; i++) {
					if(reponse[i].nombre===concurso.nombre){
						indice = i;
						terminar = true;
					};
				}

				reponse.splice(indice, 1);
				console.log(reponse);
				/*var index = reponse.indexOf(concurso);
				console.log('Remover '+index);
				if(index>-1){
					reponse.splice(index, 1);
				}
				console.log(reponse);*/

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