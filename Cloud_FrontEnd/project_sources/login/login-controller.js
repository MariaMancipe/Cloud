(function(){
	
		function LoginController($scope, LoginFactory){
				console.log('opening pop up');

			var vm = this;
			vm.loggeado = false;
			vm.nombreusuario = "";
			vm.apellidousuario = "";
			vm.password = "";
			vm.email = "";
			vm.confirmpassword = "";

			vm.postJSON = {};

			vm.nuevoUsuario = function(usuario){
				console.log('Register');

			};

			vm.login = function(){
				console.log('Login');
				vm.postJSON.user = vm.email;
				vm.postJSON.password = vm.password;


				var resuelve = LoginFactory.login( vm.postJSON );
				console.log(resuelve);
					/*.then( function( data ) {
						vm.loggeado = true;

					}, function error(reason) {
						vm.loggeado = false;
						alert('No se puedo iniciar tu sesión.');

					});*/
			};;


		};
	angular
		.module('app')
		.controller('LoginController', LoginController);

		LoginController.$inject = ['$scope', 'LoginFactory'];


})();