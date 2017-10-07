(function(){
	
		function LoginController($scope,$rootScope, LoginFactory, config){
				console.log('opening pop up');

			var vm = this;
			vm.nombreusuario = "";
			vm.apellidousuario = "";
			vm.password = "";
			vm.email = "";
			vm.rol = "";
			vm.empresa = "";
			vm.confirmpassword = "";

			vm.postJSON = {};

			$rootScope.loggeado = false;



			vm.guardarId = function(dataDelPost)
			{
				//console.log(dataDelPost.data);
				console.log("Hello");
				$rootScope.id_usuario = dataDelPost.id;
			}

			vm.fallo = function()
			{
				//TODO que paso cuando muere
			}

			vm.nuevoUsuario = function(usuario){
				$rootScope.loggeado = true;	
				$rootScope.nombreApellido = vm.nombreusuario;	

				vm.postJSON.user = vm.email;
				vm.postJSON.password = vm.password;

				vm.postJSON.nombre = vm.nombreusuario;
				vm.postJSON.apellido = vm.apellidousuario;
				vm.postJSON.correo = vm.email;
				vm.postJSON.empresa = vm.empresa;
				vm.postJSON.rol = vm.rol;
				vm.postJSON.clave = vm.password;

				resuelve = LoginFactory.postUser( vm.postJSON, vm.guardarId, vm.fallo );
				
				
				$rootScope.modalInstance.close('a');

			};

			vm.login = function(){
					$rootScope.loggeado = true;					
					vm.postJSON.correo = vm.email;
					vm.postJSON.clave = vm.password;
					var resuelve = LoginFactory.login( vm.postJSON, vm.guardarId, vm.fallo );
					//console.log(resuelve);
				$rootScope.modalInstance.close('a');
			};;


		};
	angular
		.module('app')
		.controller('LoginController', LoginController);

		LoginController.$inject = ['$scope', '$rootScope','LoginFactory', 'config'];


})();