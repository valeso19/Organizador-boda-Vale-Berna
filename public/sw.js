const CACHE_NAME = 'berna-vale-cache-v2';
const ASSETS = [
  '.',
  './index.html',
  './assets/index-*.js',
  './assets/index-*.css',
  './manifest.json'
];

self.addEventListener('install', evt => {
  evt.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', evt => {
  evt.waitUntil(clients.claim());
});

self.addEventListener('fetch', evt => {
  evt.respondWith(caches.match(evt.request).then(res => res || fetch(evt.request)));
});