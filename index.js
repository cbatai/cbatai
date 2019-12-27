function main() {
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', function() {
			navigator.serviceWorker.register('/service.js').then(
				function(registration) {
					// Registration was successful
					if (navigator.serviceWorker.controller == null) {
						console.log(
							'ServiceWorker registration successful with scope: ',
							registration.scope,
						);
						setTimeout(function() {
							window.location = '.';
						}, 3000);
					} else {
						main2();
					}
				},
				function(err) {
					// registration failed :(
					console.log('ServiceWorker registration failed: ', err);
				},
			);
		});
	}
}

function main2() {
	console.log('hello world');
}
