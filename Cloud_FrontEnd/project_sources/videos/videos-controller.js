(function(){
	
		function VideosController($scope, $http, $uibModal, VideosFactory){
			var vm = this;
			vm.nuevovideo = {};
			vm.nuevovideo.nombre = "Tu nombre";
			vm.nuevovideo.apellido = "Tu apellido";
			vm.nuevovideo.video = "";
			vm.nuevovideo.mensaje = "¿Por qué te gusta el producto que aparece en el video?";

			vm.subirVideo = function(){
				console.log('opening pop up');

				var modalInstance = $uibModal.open({
					templateUrl: 'project_sources/videos/nuevovideo.template.html',
					controller: 'VideosController',
					controllerAs: 'vm',
					bindToController: true
				});
			}

			vm.procesarNuevoVideo = function(video){
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
				ConcursosFactory.postVideo(video);

				//Actualiza la lusta de concursos
				vm.videos = VideosFactory.getConcursos();
			}


		}
	angular
		.module('app')
		.controller('VideosController', VideosController);

		VideosController.$inject = ['$scope', '$http', '$uibModal', 'VideosFactory'];


})();