var version="1577503284";
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
				cache.match(event.request).then(response => {
						return response || fetch(event.request).then(response => {
								if (response.ok) cache.put(event.request, response.clone()).then(() =>
									return response
								})
						})
				})
		}))
})
