var version="1577565057";
var cacheUrls = [
	'/',
	'/favicon.png',
	'/index.css',
	'/index.js',
	'/manifest.json'
];

self.addEventListener('install', event => {
	event.waitUntil(
		caches.keys().then(() =>
			caches.open(version).then(cache => cache.addAll(cacheUrls))
		)
	)
})

self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys().then(keys => {
			return Promise.all(
				keys.map(key => {
					if (key != version) return caches.delete(key)
				})
			)
		})
	)
})

self.addEventListener('fetch', event => {
	return caches.open(version).then(cache => {
		return cache.match(event.request.url).then(response => {
			console.log(response);
			return response;
		})
	})
})
