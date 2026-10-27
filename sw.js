// Caches the whole app so it opens with no Wi-Fi after the first visit.
// Bump the version whenever ASSETS changes.
const CACHE = 'yarn-spinner-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './img/cat.png',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Serve app files from the cache right away and refresh them in the background,
// so a slow hotspot never holds up launch. Word and dictionary APIs are left alone;
// the page handles those with its own timeouts.
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = (await cache.match(req, { ignoreSearch: true }))
      || (req.mode === 'navigate' ? await cache.match('./index.html') : undefined);
    const fresh = fetch(req)
      .then(res => {
        if (res.ok) cache.put(req, res.clone());
        return res;
      })
      .catch(() => undefined);
    if (cached) {
      event.waitUntil(fresh);
      return cached;
    }
    return (await fresh) || Response.error();
  })());
});
