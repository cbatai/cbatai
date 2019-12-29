var version="1577642488";
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
			return response || fetch(event.request.url).then(response => {
				cache.add(event.request.url, response.clone());
				return response;
			})
		})
	})
})
