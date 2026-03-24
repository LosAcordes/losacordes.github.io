const CACHE_NAME = 'losacordes-v1.2.2';

const urlsToCache =[
  "./",
  "./index.html",
  "./style.css",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./js/actualizacion.js",
  "./js/canciones.js",
  "./js/darkmode.js",
  "./js/instalar.js",
  "./js/player.js",
  "./js/searchbar.js",

  "./audio/Al_mar!.mp3",
  "./audio/back_to_friends.mp3",
  "./audio/Come_Together.mp3",
  "./audio/Corbelles.mp3",
  "./audio/Coti_X_Coti.mp3",
  "./audio/Cul.mp3",
  "./audio/Despacito.mp3",
  "./audio/Don't_Start_Now.mp3",
  "./audio/Esbarzers_(Remix_La_Gossa_Sorda).mp3",
  "./audio/Fent_voltes_per_Palma.mp3",
  "./audio/I'm_Still_Standing.mp3",
  "./audio/Jumping_Jack_Flash.wav",
  "./audio/Killing_in_the_Name.mp3",
  "./audio/LA_PENULTIMA.mp3",
  "./audio/Mari_Carmen.mp3",
  "./audio/September.mp3",
  "./audio/Seven_Nation_Army.mp3",
  "./audio/Smells_Like_Teen_Spirit.mp3",
  "./audio/Sweet_Child_O'_Mine.mp3",
  "./audio/Sweet_Home_Alabama.mp3",
  "./audio/Tobogan.mp3",
  "./audio/Tusa.mp3",
  "./audio/WILDFLOWER.mp3",
  "./audio/Zapatillas.mp3",

  "./song-data/back_to_friends.pdf",
  "./song-data/Don't_Start_Now.pdf",
  "./song-data/Fent_voltes_per_Palma.pdf",
  "./song-data/I'm_Still_Standing.pdf",
  "./song-data/Jumping_Jack_Flash.pdf",
  "./song-data/September.pdf",
  "./song-data/WILDFLOWER.pdf",

  "./songs/Al_mar!.html",
  "./songs/back_to_friends.html",
  "./songs/Come_Together.html",
  "./songs/Corbelles.html",
  "./songs/Coti_X_Coti.html",
  "./songs/Cul.html",
  "./songs/Despacito.html",
  "./songs/Don't_Start_Now.html",
  "./songs/Esbarzers_(Remix_La_Gossa_Sorda).html",
  "./songs/Fent_voltes_per_Palma.html",
  "./songs/I'm_Still_Standing.html",
  "./songs/Jumping_Jack_Flash.html",
  "./songs/Killing_in_the_Name.html",
  "./songs/LA_PENULTIMA.html",
  "./songs/Mari_Carmen.html",
  "./songs/September.html",
  "./songs/Seven_Nation_Army.html",
  "./songs/Smells_Like_Teen_Spirit.html",
  "./songs/Sweet_Child_O'_Mine.html",
  "./songs/Sweet_Home_Alabama.html",
  "./songs/Tobogan.html",
  "./songs/Tusa.html",
  "./songs/WILDFLOWER.html",
  "./songs/Zapatillas.html"
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting()) // Force the new service worker to activate immediately
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim()) // Forces all open pages to use this new service worker
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        return response;
      })
      .catch(() => {
        // Fall back to cache if online
        return caches.match(event.request);
      })
  );
});
