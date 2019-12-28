var cacheUrls = [
	'/',
	'/favicon.png',
	'/index.css',
	'/index.js',
	'/manifest.json'
];

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(version).then(cache => {
			return cache.addAll(cacheUrls);
		})
	)
})

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.open(version).then(cache => {
			console.log('open ' + version);
			cache.match(event.request.url).then(response => {
				console.log('matched ' + event.request.url);
				console.log(response);
				return response || fetch(event.request).then(response => {
					console.log('fetched ' + event.request.url);
					console.log('response ' + response);
					if (response.ok) cache.put(event.request.url, response.clone());
					return response;
				})
			})
		})
	)
})
