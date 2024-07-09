// Instalação do service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/build/style.css',
      ]);
    })
  );
});

// Ativação do service worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(() => {
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// Intercepta as requisições e retorna a resposta do cache, se disponível
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
