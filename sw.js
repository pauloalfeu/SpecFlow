const CACHE_NAME = 'specflow-v1';

// Recursos essenciais para funcionar offline
const PRECACHE_URLS = [
  '/SpecFlow/',
  '/SpecFlow/index.html',
  '/SpecFlow/manifest.json',
  '/SpecFlow/icons/icon-192.png',
  '/SpecFlow/icons/icon-512.png',
  // Fontes do Google (cacheadas na primeira visita)
  'https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,400&family=Syne:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap',
];

// ── Install: pré-cacheia os recursos essenciais ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: limpa caches antigos ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: cache-first para o app, network-first para fontes ──
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignora requisições não-GET
  if (request.method !== 'GET') return;

  // Fontes Google: cache-first com fallback de rede
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          return response;
        }).catch(() => cached);
      })
    );
    return;
  }

  // App shell: cache-first, atualiza cache em background
  event.respondWith(
    caches.match(request).then(cached => {
      const networkFetch = fetch(request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        }
        return response;
      }).catch(() => null);

      // Retorna cache imediatamente se disponível, senão aguarda rede
      return cached || networkFetch;
    })
  );
});
