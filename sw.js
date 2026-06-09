const CACHE = 'pallete-v1';
const ASSETS = [
  'worker.html', 'admin.html', 'monitor.html', 'settings.html', 'index.html',
  'icon-worker.png', 'icon-worker-192.png',
  'icon-admin.png', 'icon-admin-192.png',
  'icon-monitor.png', 'icon-monitor-192.png',
  'icon-settings.png', 'icon-settings-192.png',
  'manifest-worker.json', 'manifest-admin.json',
  'manifest-monitor.json', 'manifest-settings.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
