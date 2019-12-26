if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
	    if (navigator.serviceWorker.controller == null) {
		setTimeout(function() { window.location = "."}, 3000);
	    }
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    })
  })
}
