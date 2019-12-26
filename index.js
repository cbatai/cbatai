if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
	    if (navigator.serviceWorker.controller == null) {
		window.location = ".";
	    }
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    })
  })
}
