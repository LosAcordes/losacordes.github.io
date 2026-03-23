const CACHE_NAME = 'acordes-cache-v1';

const urlsToCache =[
  './',
  './index.html',
  './style.css',
  './js/darkmode.js',
  './js/searchbar.js',
  './js/actualizacion.js',
  './js/player.js',

  './song-data/back_to_friends.pdf',
  './audio/back_to_friends.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
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
