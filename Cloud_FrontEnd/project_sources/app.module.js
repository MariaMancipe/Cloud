(function() {

	angular
		.module( 'app', [ "ngRoute",
			    "ngCookies",
				"ui.bootstrap",
				"ngSanitize",
				"com.2fdevs.videogular",
				"com.2fdevs.videogular.plugins.controls",
				"com.2fdevs.videogular.plugins.overlayplay",
				"com.2fdevs.videogular.plugins.poster"
			]
				);

})();