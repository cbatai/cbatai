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
	var url = event.request.url + '?' + version;
	event.respondWith(
		caches.open(version)
		.then(function(cache) {
			cache.match(url)
				.then(function(response) {
					if (response) {
						return response;
					}
					return fetch(url).then(
						function(response) {
							if (!response || response.status !== 200 || response.type !== 'basic') {
								return response;
							}
							var responseClone = response.clone();
							caches.open(version)
								.then(function(cache) {
									cache.put(url, responseClone);
								})
							return response;
						}
					)
				})
		})
	)
})
