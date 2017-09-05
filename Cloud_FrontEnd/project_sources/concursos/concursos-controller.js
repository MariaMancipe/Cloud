(function(){
	
		function ConcursosController($scope, $http, $uibModal, ConcursosFactory){
			var vm = this;

			vm.concursos;

			vm.nuevoconcurso={};

			vm.nuevoconcurso.nombre="Juan ";
			vm.nuevoconcurso.fecha_inicio="";
			vm.nuevoconcurso.fecha_fin="";
			vm.nuevoconcurso.url="Perez";
			vm.nuevoconcurso.descripcion="";
			vm.nuevoconcurso.picture="";

	        vm.actualizar = function(){
	        	$http.get("http://localhost:3000/concursos").
		        then(function(response) {
		            vm.concursos  = response.data;
		        },function(error){
		        	alert('Could not complete request');
		        });
	        }

			vm.getConcursos = function(){
				vm.concursos = ConcursosFactory.getConcursos();
			}

			vm.crearconcurso = function(item){
				//Obtiene la imagen carga en el elemento file del DOM
				var f = document.getElementById('file').files[0],
				r = new FileReader();

				r.onloadend = function(e) {
					var data = e.target.result;
					//TODO enviar al back para ser almacenada
					//send your binary data via $http or $resource or do anything else with it
				}

				r.readAsBinaryString(f);

				//Envia a registro el concurso
				ConcursosFactory.postConcursos(vm.nuevoconcurso, f);
				
				vm.nuevoconcurso.picture=f.name;
				//Actualiza la lusta de concursos
				vm.actualizar();
			}
			
			vm.removerConcurso = function(concursoID){
				$http.delete(path_to_service+'/'+concursoID)
				.then(function(response) {
		            $http.get("http://localhost:3000/concursos").
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

				var modalInstance = $uibModal.open({
					templateUrl: 'project_sources/concursos/nuevoconcurso.template.html',
					controller: 'ConcursosController',
					controllerAs: 'vm',
					bindToController: true
				});
			};

			vm.actualizar();
		}
	angular
		.module('app')
		.controller('ConcursosController', ConcursosController);

		ConcursosController.$inject = ['$scope', '$http', '$uibModal', 'ConcursosFactory'];


})();