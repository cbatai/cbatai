var version="1577559366";
function init() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/service.js').then(
			function(registration) {
				if (navigator.serviceWorker.controller == null) {
					window.location = '.';
				} else {
					main();
				}
			},
			function(err) {
				console.log('ServiceWorker registration failed: ', err);
			},
		)
	} else {
		console.log('ServiceWorker not found in navigator');
	}
}

function main() {
	console.log(version + ' hello world');
}

window.addEventListener('load', init);
