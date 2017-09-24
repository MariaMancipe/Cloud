(function(){
	
		function ConcursosController($scope, $rootScope, $http, $uibModal, ConcursosFactory){
			var vm = this;
			var rutaAcceso = "http://34.236.13.118:9292/concursos";

			vm.concursos;

			vm.nuevoconcurso={};
			vm.instanciaModalConcurso;

			vm.nuevoconcurso.nombre="Juan ";
			vm.nuevoconcurso.fecha_inicio="";
			vm.nuevoconcurso.fecha_fin="";
			vm.nuevoconcurso.url="Perez";
			vm.nuevoconcurso.descripcion="";
			vm.nuevoconcurso.picture="";

	        vm.actualizar = function(){
	        	$http.get(rutaAcceso).
		        then(function(response) {
		            vm.concursos  = response.data;
		        },function(error){
		        	alert('No se pudo completar');
		        });
	        }

			vm.getConcursos = function(){
				vm.concursos = ConcursosFactory.getConcursos();
			}

			vm.crearconcurso = function(item){
				//Obtiene la imagen carga en el elemento file del DOM
				var f = document.getElementById('file').files[0],
				r = new FileReader();

				/*var marco = {
					concurso: concurso
				};
				var stringMarco = JSON.stringify(marco);
				console.log(stringMarco);*/

				var fd = new FormData();
			    //Take the first selected file
			    //fd.append("file", files[0]);
			    fd.append("picture", file);
			    fd.append("nombre", vm.nuevoconcurso.nombre);
			    fd.append("fecha_inicio", vm.nuevoconcurso.fecha_inicio);
			    fd.append("fecha_fin", vm.nuevoconcurso.fecha_fin);
			    fd.append("url", vm.nuevoconcurso.url);
			    fd.append("descripcion", vm.nuevoconcurso.descripcion);


			    console.log(fd);
			    
			    //File upload
			    
			    $http.post(rutaAcceso, fd, {
			        withCredentials: false,
			        headers: {'Content-Type': undefined},
			        transformRequest: angular.identity,
			        params : fd
			    }).then(function successCallback(response) {
			    	$http.get(rutaAcceso).
			        then(function(response) {
			            vm.concursos  = response.data;
			        },function(error){
			        	alert('Could not complete request');
			        });
			    	console.log('uploaded');
				  }, function errorCallback(response) {
			    	console.log('Not uploaded');
			  });
			    $rootScope.modalInstance.close('a');

		    	/*
				r.onloadend = function(e) {
					var data = e.target.result;
					//TODO enviar al back para ser almacenada
					//send your binary data via $http or $resource or do anything else with it
				}

				r.readAsBinaryString(f);

				//Envia a registro el concurso
				ConcursosFactory.postConcursos(vm.nuevoconcurso, f);*/
			}
			
			vm.removerConcurso = function(concursoID){
				$http.delete(path_to_service+'/'+concursoID)
				.then(function(response) {
		            $http.get(rutaAcceso).
			        then(function(response) {
			            vm.concursos  = response.data;
			        },function(error){
			        	alert('Could not complete request');
			        });
		        },function(error){
		        	alert('Could not complete request');
		        });
				//ConcursosFactory.deleteConcursoID(concursoID);
				//vm.actualizar();
			};

			vm.editarConcurso = function(item){
				ConcursosFactory.getConcursoID(item);
			};

			vm.irAVideos=function(item){
				console.log('IR a videos');
			};

			vm.nuevoConcurso = function(){
				console.log('opening pop up');

				$rootScope.modalInstance = $uibModal.open({
					templateUrl: 'project_sources/concursos/nuevoconcurso.template.html',
					controller: 'ConcursosController',
					controllerAs: 'vm',
					bindToController: true
				});

			};

			vm.irAConcurso = function(elId)
			{
				$rootScope.concurso_id = elId;
			};

			vm.actualizar();
		}
	angular
		.module('app')
		.controller('ConcursosController', ConcursosController);

		ConcursosController.$inject = ['$scope','$rootScope', '$http', '$uibModal', 'ConcursosFactory'];


})();