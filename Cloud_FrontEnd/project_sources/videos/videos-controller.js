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

		VideosController.$inject = ['$scope', '$rootScope', '$http', '$routeParams','$uibModal', '$sce', 'VideosFactory'];


		function VideosController($scope, $rootScope, $http, $routeParams, $uibModal, $sce, VideosFactory){
			var vm = this;
			var rutaAcceso = "http://34.236.13.118:9292";

			vm.idconcursoActual='';

		    vm.currentPage = 0;
			vm.pageSize = 10;
			vm.orderBy = "-nombre";
			vm.vids = [];

			vm.nuevovideo = {};
			vm.nuevovideo.titulo = "Título";
			vm.nuevovideo.video = "";
			vm.nuevovideo.mensaje_concursante = "¿Por qué te gusta el producto que aparece en el video?";
			vm.nuevovideo.duracion = "";
			vm.nuevovideo.codec = "";
			vm.nuevovideo.nombre_concursante = "Tu nombre";
			vm.nuevovideo.apellido_concursante = "Tu apellido";
			vm.nuevovideo.correo_concursante = "Tu correo";
			vm.nuevovideo.fecha_carga = "";
			vm.nuevovideo.estado = "En conversion";

			vm.metodoExitoConcurso = function(respuesta)
		    {
		    		console.log(respuesta);
		            vm.concursoActual = respuesta.data;
		            vm.idconcursoActual = vm.concursoActual.id;
		            console.log('Concurso Actual:');
		            console.log(vm.concursoActual);
		    }

		    vm.metodoExitoVideos = function(respuesta)
		    {
		    		vm.vids = respuesta.data;
		            console.log('Videos del Concurso Actual:');
		            console.log(vm.vids);
		    }

		    vm.metodoFailConcurso = function(respuesta)
		    {
		    		
		    };

			vm.init = function(){
				//Esto deberia ir en el factory pero por naturaleza asincrona no funciona bien
				console.log(VideosFactory);
				console.log(VideosFactory.cargarInfoConcurso);
				VideosFactory.getInfoConcurso($rootScope.concurso_id, vm.metodoExitoConcurso, vm.metodoFailConcurso);
				VideosFactory.getInfoVideos($rootScope.concurso_id, vm.metodoExitoVideos, vm.metodoFailConcurso);

		        
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

			vm.procesarNuevoVideo = function(){

				var file = document.getElementById('video_file').files[0],
				r = new FileReader();


				vm.nuevovideo.video = file;
				vm.nuevovideo.duracion = file.duration;
				vm.nuevovideo.codec = file.name.substr(file.name.length-4,file.name.length );
				vm.nuevovideo.fecha_carga = new Date();
				var fd = new FormData();

			    //Take the first selected file
			    fd.append("video", file);
			    fd.append("nombre", vm.nuevovideo.titulo);
			    fd.append("mensaje_concursante", vm.nuevovideo.mensaje_concursante);
			    fd.append("duracion", vm.nuevovideo.duracion);
			    fd.append("nombre_concursante", vm.nuevovideo.nombre_concursante);
			    fd.append("apellido_concursante", vm.nuevovideo.apellido_concursante);
			    fd.append("correo_concursante", vm.nuevovideo.correo_concursante);
			    fd.append("fecha_carga", vm.nuevovideo.fecha_carga);
			    fd.append("estado", vm.nuevovideo.estado);

			    console.log(fd);

				//File upload
		    
			    $http.post(rutaAcceso + "/videos/concurso/"+$routeParams.nombre, fd, {
			        withCredentials: false,
			        headers: {'Content-Type': undefined},
			        transformRequest: angular.identity,
			        params : fd
			    }).then(function successCallback(response) {
			    	console.log('uploaded')
				  }, function errorCallback(response) {
			    	console.log('Not uploaded')
				  });

			}


		}
})();