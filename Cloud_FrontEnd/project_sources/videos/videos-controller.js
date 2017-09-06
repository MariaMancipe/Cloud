(function(){
	
	angular
		.module('app')
		.controller('VideosController', VideosController)
		.filter('startFrom', function() {
			    return function(input, start) {
			        start = +start; //parse to int
			        return input.slice(start);
			    }
			});

		VideosController.$inject = ['$scope', '$http', '$routeParams','$uibModal', '$sce', 'VideosFactory'];


		function VideosController($scope, $http, $routeParams, $uibModal, $sce, VideosFactory){
			var vm = this;

		    vm.currentPage = 0;
			vm.pageSize = 10;
			vm.orderBy = "-nombre";
			vm.vids = [
				{'nombre': 1, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 2, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 3, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 4, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 5, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 6, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 7, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 8, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 9, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 10, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 11, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 12, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 13, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 14, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 15, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 16, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 17, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 18, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 19, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 20, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 21, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 22, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 23, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 24, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 25, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 26, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 27, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 28, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 29, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
				{'nombre': 30, 'source': 'http://static.videogular.com/assets/videos/videogular.mp4'}, 
			];

			vm.playerconfig = {
				sources: [
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
				],
				tracks: [
					{
						src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
						kind: "subtitles",
						srclang: "en",
						label: "English",
						default: ""
					}
				],
				theme: "http://www.videogular.com/styles/themes/default/latest/videogular.css",
				plugins: {
					poster: "http://www.videogular.com/assets/images/videogular.png"
				}
			};

			//console.log(vm.playerconfig.sources);

			vm.nuevovideo = {};
			vm.nuevovideo.nombre = "Tu nombre";
			vm.nuevovideo.apellido = "Tu apellido";
			vm.nuevovideo.video = "";
			vm.nuevovideo.mensaje = "¿Por qué te gusta el producto que aparece en el video?";

			vm.init = function(){
				//Esto deberia ir en el factory pero por naturaleza asincrona no funciona bien
				var reponse;
				$http.get('http://localhost:3000/concursos/'+$routeParams.nombre).
		        then(function(response) {
		            vm.concursoActual = response.data;
		            console.log('Concurso Actual:');
		            console.log(vm.concursoActual);
		        });

		        /* VideoController uninitialized
		        $http.get('http://localhost:3000/videos/byConcurso/'+$routeParams.nombre).
		        then(function(response) {
		            vm.vids = response.data;
		            console.log('Videos del Concurso Actual:');
		            console.log(vm.vids);
		        });*/
			}

			vm.numberOfPages=function(){
		        return Math.ceil(vm.vids.length/vm.pageSize);                
		    };



		    //Subir un video------------
			vm.subirVideo = function(){
				console.log('opening pop up');

				var modalInstance = $uibModal.open({
					templateUrl: 'project_sources/videos/nuevovideo.template.html',
					controller: 'VideosController',
					controllerAs: 'vm',
					bindToController: true
				});
			}
			//angular.module('app')
				;

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
})();