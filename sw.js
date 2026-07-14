// TNY FIT — Service Worker
// Cachea el shell de la app para que funcione offline y sea instalable.

const CACHE_NAME = 'tnyfit-cache-v1';
const APP_SHELL = [
    './',
    './index.html',
    './app.js',
    './manifest.json',
    './TNY SIN FONDO.png',
    './TNY SIN FONDO.ico'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(APP_SHELL))
            .catch(() => { /* algún asset opcional puede faltar en dev; no bloquea la instalación */ })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
        )
    );
    self.clients.claim();
});

// Estrategia: network-first para HTML/JS (siempre la versión más nueva si hay red),
// cache-first para el resto (íconos, fuentes, CDNs).
self.addEventListener('fetch', (event) => {
    const { request } = event;
    if (request.method !== 'GET') return;

    const isAppShell = request.url.includes('index.html') || request.url.includes('app.js') || request.url.endsWith('/');

    if (isAppShell) {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
                    return response;
                })
                .catch(() => caches.match(request))
        );
    } else {
        event.respondWith(
            caches.match(request).then((cached) => cached || fetch(request))
        );
    }
});