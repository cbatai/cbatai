var cacheUrls = [
	'/',
	'/favicon.png',
	'/index.css',
	'/index.js',
	'/manifest.json'
];

self.addEventListener('install', event => {
	event.waitUntil(
		caches.keys().then(keys => {
			Promise.all(keys => {
				//					keys.map(key => {
				//						console.log(key);
				//						if (key == version) return Promise.resolve()
				//						return;
				//						return caches.delete(key)
				//					})
			}).then(
				caches.open(version).then(cache => {
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
