var version="1577504301";
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
				cache.match(event.request).then(response => {
						console.log('matched ' + event.request);
						return response || fetch(event.request).then(response => {
								console.log('fetched ' + event.request);
								console.log('response ' + response);
								if (response.ok) cache.put(event.request, response.clone()).then(() =>
									return response
								})
						})
				})
		}))
})
