// Caches offline page when service worker is installed.
self.addEventListener('install', function(event) {
  self.skipWaiting();
  const offlinePage = new Request('/');
  event.waitUntil(
    fetch(offlinePage).then(function(response) {
      return caches.open('app-offline').then(function(cache) {
        return cache.put(offlinePage, response);
      });
    }));
});

//If any fetch fails, it will show the offline page.
self.addEventListener('fetch', function(event) {
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
    return;
  }
  event.respondWith(
    fetch(event.request).catch(function(error) {
        return caches.open('app-offline').then(function(cache) {
          return cache.match('/');
        });
      }
    ));
});
