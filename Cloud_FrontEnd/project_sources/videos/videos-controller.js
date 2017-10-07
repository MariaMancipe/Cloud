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

		VideosController.$inject = ['$scope', '$rootScope', '$http', '$routeParams','$uibModal', '$sce', 'VideosFactory', 'config'];


		function VideosController($scope, $rootScope, $http, $routeParams, $uibModal, $sce, VideosFactory, config){
			var vm = this;

			var rutaAcceso = config.baseURL + "/videos";

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

			if($rootScope.id_usuario == undefined)
			{
				$rootScope.id_usuario = -1;
			}

			vm.metodoExitoConcurso = function(respuesta)
		    {
		    		vm.concursoActual = respuesta.data;
		            vm.idconcursoActual = vm.concursoActual.id;
		    }

		    vm.metodoExitoVideos = function(respuesta)
		    {
		    		vm.vids = respuesta.data;
		    }

		    vm.debeEsconderse = function(elItem)
		    {
		    	//concurso_id
		    	console.log($rootScope.id_usuario + " - " + $rootScope.id_usuario_concurso);
		    	if(elItem.estado != 2 && $rootScope.id_usuario != $rootScope.id_usuario_concurso)
		    	{
		    		return true;
		    	}
		    	else
		    	{
		    		return false;
		    	}
		    }

		    vm.metodoFailConcurso = function(respuesta)
		    {
		    		
		    };

			vm.init = function(){
				//Esto deberia ir en el factory pero por naturaleza asincrona no funciona bien
				VideosFactory.getInfoConcurso($rootScope.concurso_id, vm.metodoExitoConcurso);
				VideosFactory.getInfoVideos($rootScope.concurso_id, vm.metodoExitoVideos);

		        
			}

			vm.numberOfPages=function(){
		        return Math.ceil(vm.vids.length/vm.pageSize);                
		    };

		    

		    //Subir un video------------
			vm.subirVideo = function(){

				$rootScope.modalInstance = $uibModal.open({
					templateUrl: 'project_sources/videos/nuevovideo.template.html',
					controller: 'VideosController',
					controllerAs: 'vm',
					bindToController: true
				});
			}
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
			    fd.append("duracion", new Date().getTime());
			    fd.append("nombre_concursante", vm.nuevovideo.nombre_concursante);
			    fd.append("apellido_concursante", vm.nuevovideo.apellido_concursante);
			    fd.append("correo_concursante", vm.nuevovideo.correo_concursante);
			    fd.append("fecha_carga", vm.nuevovideo.fecha_carga);
			    fd.append("estado", vm.nuevovideo.estado);
			    //fd.append("fecha_carga", new Date().getTime());

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

			    $rootScope.modalInstance.close('a');

			}


		}
})();