var urls = [
	'/',
	'/favicon.png',
	'/index.css',
	'/index.js',
	'/manifest.json'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(Date.now())
		.then(function(cache) {
			return cache.addAll(urls);
		})
	)
})
