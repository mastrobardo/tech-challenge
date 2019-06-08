self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('skilling').then(cache => {
      return cache.addAll([
        `/`,
        `/offline.html`,
        `/index.html`,
        `/app.prod.js`
      ])
      .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open('skilling')
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});