// installation
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('visualizaai').then(cache => {
      return cache.addAll(['/', '/index.html', '/build/style.css']);
    })
  );
});

// active
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(() => {})
          .map(cacheName => {
            return caches.delete(cacheName);
          })
      );
    })
  );
});

// intercept requests and return the cache response if available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
