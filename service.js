var urls = [
	'/',
	'/favicon.png',
	'/index.css',
	'/index.js',
	'/manifest.json'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(Date.now())
		.then(function(cache) {
			return cache.addAll(urls);
		})
	)
})

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
		.then(function(response) {
			if (response) {
				return response;
			}
			return fetch(event.request);
		})
	)
})
