(function(){
	
		function LoginController($scope,$rootScope, LoginFactory){
				console.log('opening pop up');

			var vm = this;
			vm.loggeado = false;
			vm.nombreusuario = "";
			vm.apellidousuario = "";
			vm.password = "";
			vm.email = "";
			vm.rol = "";
			vm.empresa = "";
			vm.confirmpassword = "";

			vm.postJSON = {};

			vm.nuevoUsuario = function(usuario){
				console.log('Register');

				vm.postJSON.user = vm.email;
				vm.postJSON.password = vm.password;

				vm.postJSON.nombre = vm.nombreusuario;
				vm.postJSON.apellido = vm.apellidousuario;
				vm.postJSON.correo = vm.email;
				vm.postJSON.empresa = vm.empresa;
				vm.postJSON.rol = vm.rol;
				vm.postJSON.clave = vm.password;

				var resuelve = LoginFactory.postUser( vm.postJSON );
				console.log(resuelve);
				$rootScope.modalInstance.close('a');

			};

			vm.login = function(){
				console.log('Login');
				
					/*.then( function( data ) {
						vm.loggeado = true;

					}, function error(reason) {
						vm.loggeado = false;
						alert('No se puedo iniciar tu sesión.');

					});*/

				$rootScope.modalInstance.close('a');
			};;


		};
	angular
		.module('app')
		.controller('LoginController', LoginController);

		LoginController.$inject = ['$scope', '$rootScope','LoginFactory'];


})();