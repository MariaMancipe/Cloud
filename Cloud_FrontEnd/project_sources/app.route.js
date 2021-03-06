(function() {
	angular
		.module( 'app' , ['ui.bootstrap', 'ngRoute', 'ngCookies'])
		.controller( 'MainController',['$scope','$rootScope', '$uibModal', '$cookies',  function($scope,$rootScope, $uibModal, $cookies){
			if($cookies.getObject('globals')){
				$rootScope.id_usuario = $cookies.getObject('globals').currentUser.idUsuario;
				if($rootScope.id_usuario){
					$scope.loggeado = true;
				}
			}

			$scope.open = function () {
				$rootScope.modalInstance = $uibModal.open({
					templateUrl: 'project_sources/login/login.template.html',
				});
			}

			$scope.close = function () {
				$scope.loggeado = false;
				$rootScope.globals = {};
				$cookies.remove('globals');				
			}
		}] )
		//MainController )
		.config( config )
		.constant('config', {
			baseURL: 'http://34.236.13.118:9292'
		});
/*
	function MainController( $scope, $modal ) {
			$scope.showDialog = function($event){
				$mdDialog.show({
					controller: MainController,
					controllerAs: 'dialog',
					templateUrl: './login/login.template.html',
					parent: angular.element(document.body),
					targetEvent: event,
					clickOutsideToClose: true,
					fullscreen: useFullScreen
				})
				/*.then(credentials => this.showToast(`Thanks for logging in, ${credentials.username}.`),
					() => this.showToast('You canceled the login.'));

				this.$scope.$watch(() => this.$mdMedia('xs') || this.$mdMedia('sm'),
					wantsFullScreen => this.customFullscreen = wantsFullScreen === true);
			}
	}*/
	
	//MainController.$inject = ['$scope', '$uibModal'];	

	function config( $routeProvider ) {
	    $routeProvider
	    	.when('/', {
	            templateUrl: 'project_sources/home/home.view.html',
	            //controller: 'HomeController',
	            //controllerAs: 'vm',
	            /*resolve: {
	            	// En este resolve van los datos que se deben pasar al siugiente controlador
	            }*/
	        })
	        .when('/concursos', {
	            templateUrl: 'project_sources/concursos/concursos.view.html',
	            controller: 'ConcursosController',
	            controllerAs: 'vm',
	            /*resolve: {
	            	// En este resolve van los datos que se deben pasar al siugiente controlador
	            }*/
	        })
	        .when('/misconcursos', {
	            templateUrl: 'project_sources/misconcursos/misconcursos.view.html',
	            controller: 'MisConcursosController',
	            controllerAs: 'vm',
	            /*resolve: {
	            	// En este resolve van los datos que se deben pasar al siugiente controlador
	            }*/
	        })
	        .when('/login', {
	            templateUrl: '/project_sources/login/login.view.html',
	            controller: 'LoginController',
	            controllerAs: 'vm',
	            resolve: {
	            }
	        })
	        .when("/videos/:nombre", {
	            templateUrl: '/project_sources/videos/videos.view.html',
	            controller: 'VideosController',
	            controllerAs: 'vm',
	            resolve: {
	            	
	            }
	        })
	}

})();