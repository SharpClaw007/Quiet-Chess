// Quiet Move service worker: lets the app open with no connection.
// Bump VERSION whenever the engine files change.
const VERSION='qm-v2';
const CORE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','engine/sf-mt.js','engine/stockfish-19-lite.js','engine/stockfish-19-lite.wasm'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>Promise.all(CORE.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
  if(r.mode==='navigate'){ // newest page when online, cached copy when offline
    e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(VERSION).then(c=>c.put('./',cp));return res}).catch(()=>caches.match('./').then(m=>m||caches.match('index.html'))));return}
  e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(VERSION).then(c=>c.put(r,cp))}return res})))});
