var version="1577560623";
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
				return Promise.all(keys.filter(key => {
					return key.indexOf(version) !== 0;
				}).map(function(key) {
					return caches.delete(key)
				})).then(
					return cache.addAll(cacheUrls)
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
