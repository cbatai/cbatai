var version="1578182300";
function init() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/service.js').then(
			function(registration) {
				if (navigator.serviceWorker.controller == null) {
					setTimeout(function() {
						window.location = '.'
					}, 1000)
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
