if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service.js').then(function(registration) {
      // Registration was successful
	    if (navigator.serviceWorker.controller == null) {
      		console.log('ServiceWorker registration successful with scope: ', registration.scope);
		window.location = ".";
	    } else {
		    main();
	    }
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    })
  })
}

function main() {
	console.log('hello world');
}
