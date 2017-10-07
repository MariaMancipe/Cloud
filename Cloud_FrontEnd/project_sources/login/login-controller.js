(function(){
	
		function LoginController($scope,$rootScope, LoginFactory, $cookies, config){
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

			vm.clearCredential = function(){
				$rootScope.globals = {};
				$cookies.remove('globals');
			}


			vm.guardarId = function(dataDelPost)
			{
				$rootScope.globals = {
					currentUser:{
						idUsuario:dataDelPost.id
					}
				};

				var cookiExp = new Date();
				cookieExp.setDate(cookieExp.getDate() + 7);
				//Las cookies duran 7 dias a menos que el usuario cierre sesion
				$cookies.putObject('globals', $rootScope.globals, {expires:cookieExp});
				
				console.log("Hello");

				console.log($rootScope.id_usuario);
				//console.log(dataDelPost.data);
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

		LoginController.$inject = ['$scope', '$rootScope','LoginFactory','$cookies', 'config'];


})();