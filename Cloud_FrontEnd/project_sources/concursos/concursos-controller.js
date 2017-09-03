(function(){
	
		function ConcursosController($scope, $http, ConcursosFactory){
			var vm = this;

			vm.concursos = [
				//Llamado al servicio del factory que devuelve todos los concursos
				{name:'Nombresito0', value:'0', id:'A'},
				{name:'Nombresito1', value:'1', id:'B'},
				{name:'Nombresito2', value:'2', id:'C'},
				{name:'Nombresito3', value:'3', id:'D'},
			];
			
			vm.removerConcurso = function(itemid){
				ConcursosFactory.deleteConcursoID(itemid);
			};

			vm.editarConcurso = function(itemid){
				ConcursosFactory.getConcursoID(itemid);
			};
			vm.irAVideos=function(itemid){
				console.log('IR a videos');

			}


		}
	angular
		.module('app')
		.controller('ConcursosController', ConcursosController);

		ConcursosController.$inject = ['$scope', '$http', 'ConcursosFactory'];


})();