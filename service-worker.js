// service-worker.js

const CACHE_NAME = "maarefa-cache-v1";
const urlsToCache = [
  "index.html",
  "chat.css",
  "chat.js",
  "profile.html",
  "store-v2.html",
  "about.html",
  "contact.html",
  "faq.html",
  "privacy.html",
  "terms.html"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
`
