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
    if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(event.request.url).catch(error => {
        // Return the offline page
        return caches.match('/offline.html');
      })
    );
  }
  else {
    // Respond with everything else if we can
    event.respondWith(caches.match(event.request)
      .then(function (response) {
        return response || fetch(event.request);
      })
    );
  }
});