(function(){
	angular
	.module('app')
	.factory('ConcursosFactory', ConcursosFactory);

	ConcursosFactory.$inject = ['$http', '$log'];

	function ConcursosFactory( $http, $log){
		path_to_service="/";
		reponse =[
	        	{ 
	        		nombre: 'Concurso0',
	        		url: 'Blah0',
	        		fechainicio: new Date('2009','08','12','15','34','23','0' ),
	        		fechafin: new Date('2009','09','12','15','34','23','0' ),
	        		descripcion: 'Descripcion0'
	        	},
	        	{ 
	        		nombre: 'Concurso1',
	        		url: 'Blah1',
	        		fechainicio: new Date('2009','08','12','15','34','23','0' ),
	        		fechafin: new Date('2009','09','12','15','34','23','0' ),
	        		descripcion: 'Descripcion0'
	        	},
	        	{ 
	        		nombre: 'Concurso2',
	        		url: 'Blah2',
	        		fechainicio: new Date('2009','08','12','15','34','23','0' ),
	        		fechafin: new Date('2009','09','12','15','34','23','0' ),
	        		descripcion: 'Descripcion0'
	        	},
	        	{ 
	        		nombre: 'Concurso3',
	        		url: 'Blah3',
	        		fechainicio: new Date('2009','08','12','15','34','23','0' ),
	        		fechafin: new Date('2009','09','12','15','34','23','0' ),
	        		descripcion: 'Descripcion0'
	        	},
	        ];

		return {
			getConcursos: getConcursos,
			getConcursoID: getConcursoID,
			postConcursos: postConcursos,
			updateConcursoID: updateConcursoID,
			deleteConcursoID: deleteConcursoID

		};

		function getConcursos(){

			/**$http.get(path_to_service).
	        then(function(response) {
	            reponse = response.data;
	        });*/

	        return reponse;
		}
		function postConcursos(concurso){
			var cReponse = {};

			cReponse.nombre = concurso.nombre;
			cReponse.url = concurso.url;
			cReponse.fechainicio = concurso.fechainicio;
			cReponse.fechafin = concurso.fechafin;
			cReponse.descripcion = concurso.descripcion;

			reponse.push(cReponse);

			/*$http.post(path_to_service).
	        then(function(response) {
	            reponse = response.data;
	        });*/	        
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