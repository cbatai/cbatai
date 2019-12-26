if ('serviceWorker' in navigator) {
	console.log(navigator.serviceworker.controller);
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
	setTimeout(function() { window.location = "."}, 3000);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    })
  })
}
