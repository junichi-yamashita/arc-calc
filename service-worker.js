self.addEventListener('install', event => {
    console.log('Service Worker: Installed');
  });
  
  self.addEventListener('activate', event => {
    console.log('Service Worker: Activated');
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  const cacheName = 'arc-cache-v1';
  const filesToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/manifest.json',
    '/icon-192.png',
    '/icon-512.png'
  ];
  
  self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(cacheName).then(cache => {
        return cache.addAll(filesToCache);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
   