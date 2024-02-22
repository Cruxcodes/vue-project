var cacheName = "afterschoolStore-v1";
var cacheFiles = [
  "index.html",
  //"products.js",
  "assets/store-32.jpg",
  "assets/store-512.jpg",
//   "s/cat-litter.jpg",
//   "images/icon-32.png",
//   "images/icon-512.png",
//   "images/laser-pointer.jpg",
//   "images/yarn.jpg",
];
self.addEventListener("install", function (e) {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log("[Service Worker] Caching files");
      return cache.addAll(cacheFiles);
    })
  );
});
