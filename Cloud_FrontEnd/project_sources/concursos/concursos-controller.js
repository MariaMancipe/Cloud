(function(){
	
		function ConcursosController($scope, $http, $uibModal, ConcursosFactory){
			var vm = this;

			vm.nuevoconcurso={};

			vm.nuevoconcurso.nombre="Juan ";
			vm.nuevoconcurso.url="Perez";
			vm.nuevoconcurso.imagen="";
			vm.nuevoconcurso.fechainicio="";
			vm.nuevoconcurso.fechafin="";
			vm.nuevoconcurso.descripcion="";

			vm.concursos = ConcursosFactory.getConcursos();
			/*vm.concursos = [
				//Llamado al servicio del factory que devuelve todos los concursos
				{name:'Nombresito0', value:'0', id:'A'},
				{name:'Nombresito1', value:'1', id:'B'},
				{name:'Nombresito2', value:'2', id:'C'},
				{name:'Nombresito3', value:'3', id:'D'},
			];*/

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
				console.log(f);

				//Envia a registro el concurso
				ConcursosFactory.postConcursos(item);

				//Actualiza la lusta de concursos
				vm.concursos = ConcursosFactory.getConcursos();
			}
			
			vm.removerConcurso = function(item){
				ConcursosFactory.deleteConcursoID(item);
				vm.concursos = ConcursosFactory.getConcursos();
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


		}
	angular
		.module('app')
		.controller('ConcursosController', ConcursosController);

		ConcursosController.$inject = ['$scope', '$http', '$uibModal', 'ConcursosFactory'];


})();