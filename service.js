var version=1577488625;
var cacheUrls = [
	'/',
	'/favicon.png',
	'/index.css',
	'/index.js',
	'/manifest.json'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(version)
		.then(function(cache) {
			return cache.addAll(cacheUrls);
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
			return fetch(event.request).then(
				function(response) {
					if (!response || response.status !== 200 || response.type !== 'basic') {
						return response;
					}
					var responseClone = response.clone();
					caches.open(version)
						.then(function(cache) {
							cache.put(event.request, responseClone);
						})
					return response;
				}
			)
		})
	)
})
