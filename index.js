var version="1577516457";
window.addEventListener('load', main);

function main() {
	console.log("main()");
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/service.js').then(
			function(registration) {
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
				console.log('ServiceWorker registration failed: ', err);
			},
		)
	} else {
		console.log("serviceWorker not found in navigator");
	}
}

function main2() {
	console.log(version + ' hello world');
}
