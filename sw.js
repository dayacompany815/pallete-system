const CACHE = 'pallete-v5';
const ASSETS = [
  'worker.html', 'admin.html', 'monitor.html', 'settings.html', 'index.html', 'install.html',
  'css/worker-theme.css', 'css/monitor-theme.css', 'css/admin-theme.css', 'css/settings-theme.css',
  'icon-work.png', 'icon-work-192.png',
  'icon-phone.png', 'icon-phone-192.png',
  'icon-pc.png', 'icon-pc-192.png',
  'icon-set.png', 'icon-set-192.png',
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
