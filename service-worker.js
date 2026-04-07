importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// =======================
// FIREBASE INIT
// =======================
firebase.initializeApp({
  apiKey: "AIzaSyBkPYP3bnDy61NFjRSboRZrfTVNTdIMWbY",
  authDomain: "videovortex-235cd.firebaseapp.com",
  databaseURL: "https://videovortex-235cd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "videovortex-235cd",
  storageBucket: "videovortex-235cd.appspot.com",
  messagingSenderId: "681594250269",
  appId: "1:681594250269:web:1176b21fcc8fe2a7d052f4"
});

const messaging = firebase.messaging();


// =======================
// PUSH (BACKGROUND)
// =======================
messaging.onBackgroundMessage(function(payload) {
  console.log('[FCM] Background message:', payload);

  const title = payload.notification?.title || 'VideoVortex';
  const body = payload.notification?.body || '';

  return self.registration.showNotification(title, {
    body: body,
    icon: '/VideoVortex_logo_192x192.png'
  });
});


// =======================
// CACHE
// =======================
const CACHE_NAME = "videovortex-cache-v3";

const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/manifest.json",
  "/VideoVortex_logo_192x192.png",
  "/VideoVortex_logo_512x512.png"
];

self.addEventListener("install", event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.error("Cache error:", err);
      });
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(names => {
      return Promise.all(
        names
          .filter(n => n !== CACHE_NAME)
          .map(n => caches.delete(n))
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.destination === "video") return;

  event.respondWith(
    caches.match(event.request)
      .then(res => res || fetch(event.request))
      .catch(() => caches.match("/index.html"))
  );
});