var cacheUrls = [
	'/',
	'/favicon.png',
	'/index.css',
	'/index.js',
	'/manifest.json'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open("cache")
		.then(function(cache) {
			return cache.addAll(cacheUrls);
		})
	)
})

self.addEventListener('fetch', function(event) {
	console.log(event.request);
	var request = version + ':' + event.request;
	event.respondWith(
		caches.match(request)
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
					caches.open("cache")
						.then(function(cache) {
							cache.put(request, responseClone);
						})
					return response;
				}
			)
		})
	)
})
