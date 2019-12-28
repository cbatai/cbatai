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
			cache.match(event.request.url).then(response => {
				return response;
			})
		})
	)
})
