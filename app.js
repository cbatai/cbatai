var version="2020.0108.0055";

function init() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/swk.js').then(
			function(registration) {
				console.log('navigator.serviceWorker.controller', navigator.serviceWorker.controller);
				if (navigator.serviceWorker.controller == null) {
					setTimeout(function() {
						//window.location = '.'
					}, 10000)
				} else {
					main()
				}
			},
			function(err) {
				console.log('ServiceWorker registration failed: ', err)
			},
		)
	} else {
		console.log('ServiceWorker not found in navigator')
	}
}

function main() {
	console.log(version + ' hello world')
}

window.addEventListener('load', init);
