(function(){

		function MisConcursosController($scope, $rootScope, $http, $uibModal, MisConcursosFactory, config){
			var vm = this;
			vm.concursos;
			var rutaAcceso = config.baseURL+"/concursos";

			vm.nuevoconcurso={};
			vm.instanciaModalConcurso;

			vm.nuevoconcurso.nombre="Juan ";
			vm.nuevoconcurso.fecha_inicio="";
			vm.nuevoconcurso.fecha_fin="";
			vm.nuevoconcurso.url="Perez";
			vm.nuevoconcurso.descripcion="";
			vm.nuevoconcurso.picture="";

			vm.edicionID;

			vm.editConcurso ={};
			vm.editConcurso.nombre;
			vm.editConcurso.url;
			vm.editConcurso.descripcion;
			vm.editConcurso.fecha_inicio;
			vm.editConcurso.fecha_fin;


	        vm.actualizar = function(){

	        	$http.get(rutaAcceso+'/usuario/'+$rootScope.id_usuario).
		        then(function(response) {
		            vm.concursos  = response.data;
		        },function(error){
		        	alert('No se pudo completar');
		        });
	        }

			vm.getConcursos = function(){
				console.log('ID usuario loggeado: '+$rootScope.id_usuario)
				vm.concursos = MisConcursosFactory.getConcursos($rootScope.id_usuario);
			}

			vm.crearconcurso = function(item){
				//Obtiene la imagen carga en el elemento file del DOM
				var f = document.getElementById('file').files[0],
				r = new FileReader();

				var fd = new FormData();
			    //Take the first selected file
			    //fd.append("file", files[0]);
			    fd.append("picture", file);
			    fd.append("nombre", vm.nuevoconcurso.nombre);
			    fd.append("fecha_inicio", vm.nuevoconcurso.fecha_inicio);
			    fd.append("fecha_fin", vm.nuevoconcurso.fecha_fin);
			    fd.append("url", vm.nuevoconcurso.url);
			    fd.append("descripcion", vm.nuevoconcurso.descripcion);

			    //File upload
			    
			    $http.post(rutaAcceso + "/usuario/" + $rootScope.id_usuario, fd, {
			        withCredentials: false,
			        headers: {'Content-Type': undefined},
			        transformRequest: angular.identity,
			        params : fd
			    }).then(function(response) {
		            $http.get(rutaAcceso+'/usuario/'+$rootScope.id_usuario).
			        then(function(response) {
			            vm.concursos  = response.data;
			            $scope.$apply();
			        },function(error){
			        	alert('Could not complete request');
			        });
		        },function(error){
		        	alert('Could not complete request');
		        });

			    $rootScope.modalInstance.close('a');
			}
			
			vm.removerConcurso = function(concursoID){
				$http.delete(path_to_service+"/usuario/" + $rootScope.id_usuario+'/'+concursoID)
				.then(function(response) {
		            $http.get(rutaAcceso+'/usuario/'+$rootScope.id_usuario).
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
				$rootScope.edicionID = item.id;
				vm.editConcurso = item;

				console.log('opening edit pop up '+vm.editConcurso.nombre);
				console.log($rootScope.edicionID);

				$rootScope.modalInstance = $uibModal.open({
					templateUrl: 'project_sources/misconcursos/editconcurso.template.html',
					controller: 'MisConcursosController',
					controllerAs: 'vm',
					bindToController: true,
					resolve:{
						editID: function(){
							return vm.edicionID;
						}
					}
				});
			};

			vm.updateConcurso = function(item){
				console.log($rootScope.edicionID);
				//Obtiene la imagen carga en el elemento file del DOM
				//var f = document.getElementById('file').files[0],
				//r = new FileReader();

				var fd = new FormData();
			    //Take the first selected file
			    //fd.append("file", files[0]);
			    //fd.append("picture", file);
			    fd.append("nombre", item.nombre);
			    fd.append("fecha_inicio", item.fecha_inicio);
			    fd.append("fecha_fin", item.fecha_fin);
			    fd.append("url", item.url);
			    fd.append("descripcion", item.descripcion);

			    //File upload
			    
			    $http.patch(rutaAcceso + "/usuario/" + $rootScope.id_usuario+"/"+$rootScope.edicionID, fd, {
			        withCredentials: false,
			        headers: {'Content-Type': undefined},
			        transformRequest: angular.identity,
			        params : fd
			    }).then(function(response) {
		            $http.get(rutaAcceso+'/usuario/'+$rootScope.id_usuario).
			        then(function(response) {
			            vm.concursos  = response.data;
			            $scope.$apply();
			        },function(error){
			        	alert('Could not complete request');
			        });
		        },function(error){
		        	alert('Could not complete request');
		        });

			    $rootScope.modalInstance.close('a');
			};

			vm.irAVideos=function(item){
				console.log('IR a videos');
			};

			vm.nuevoConcurso = function(){

				$rootScope.modalInstance = $uibModal.open({
					templateUrl: 'project_sources/misconcursos/nuevoconcurso.template.html',
					controller: 'MisConcursosController',
					controllerAs: 'vm',
					bindToController: true
				});

			};
		  vm.actualizar();

		}
	angular
		.module('app')
		.controller('MisConcursosController', MisConcursosController);

		MisConcursosController.$inject = ['$scope','$rootScope', '$http', '$uibModal', 'MisConcursosFactory', 'config'];


})();