const CACHE_NAME = 'atomy-keson-cache-v3';
const urlsToCache = [
  'https://atomykeson.online/', // Add a forward slash at the end
  'https://atomykeson.online/home/', // Add the full URL to the HTML files
  'https://atomykeson.online/about/', // Add the full URL to the HTML files
  'https://atomykeson.online/data/assets/logo/white.png',
  // Add other static assets (stylesheets, scripts, images, etc.)
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
