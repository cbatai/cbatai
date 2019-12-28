var version="1577560957";
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
			caches.keys().then(function(keys) {
				return Promise.all(keys => {
					keys.map(key => {
						if (key == version) return Promise.resolve()
						return caches.delete(key)
					})
				}).then(
					cache.addAll(cacheUrls)
				)
			})
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
