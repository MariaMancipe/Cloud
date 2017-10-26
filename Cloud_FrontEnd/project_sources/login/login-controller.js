(function(){
	
		function LoginController($scope,$rootScope, LoginFactory, config, $cookies){
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
				$rootScope.id_usuario = dataDelPost.id;
				console.log($rootScope.id_usuario);
				$rootScope.loggeado = true;

				$rootScope.globals = {
				currentUser:{
					idUsuario:dataDelPost
				}
				};

				var cookieExp = new Date();
				cookieExp.setDate(cookieExp.getDate() + 7);
				//Las cookies duran 7 dias a menos que el usuario cierre sesion
				$cookies.putObject('globals', $rootScope.globals, {expires:cookieExp});
				
				//console.log("Hello");

				//console.log($rootScope.id_usuario);
				
			}

			vm.guardarIdLog = function(dataDelPost)
			{
				$rootScope.id_usuario = dataDelPost;
				console.log($rootScope.id_usuario);
				$rootScope.loggeado = true;

				$rootScope.globals = {
				currentUser:{
					idUsuario:dataDelPost
				}
				};

				var cookieExp = new Date();
				cookieExp.setDate(cookieExp.getDate() + 7);
				//Las cookies duran 7 dias a menos que el usuario cierre sesion
				$cookies.putObject('globals', $rootScope.globals, {expires:cookieExp});
				
				//console.log("Hello");

				//console.log($rootScope.id_usuario);
				
			}

			vm.fallo = function()
			{
				//TODO que paso cuando muere
				alert('No fue posible iniciar sesion.');
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
				//$rootScope.id_usuario = usuario.id;
				
				
				$rootScope.modalInstance.close('a');

			};

			vm.login = function(usuario){

					console.log(":v");			
					vm.postJSON.correo = vm.email;
					vm.postJSON.clave = vm.password;
					var resuelve = LoginFactory.login( vm.postJSON, vm.guardarIdLog, vm.fallo );
					
				$rootScope.modalInstance.close('a');
			};;


		};
	angular
		.module('app')
		.controller('LoginController', LoginController);

		LoginController.$inject = ['$scope', '$rootScope','LoginFactory', 'config', '$cookies'];


})();