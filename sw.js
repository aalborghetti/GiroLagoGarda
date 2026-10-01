const CACHE='garda-2026-v7';
const FILES=[
  './',
  './index.html',
  './tracce_gpx.html',
  './tappe.html',
  './materiale.html',
  './check_serale.html',
  './servizi.html',
  './leaflet.css',
  './leaflet.js',
  './site.js',
  './manifest.webmanifest',
  './favicon.svg',
  './favicon.ico',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png',
  './01_originale_06_Desenzano_del_Garda_Peschiera_del_Garda.gpx',
  './02_originale_07_Peschiera_del_Garda_Torri_del_Benaco.gpx',
  './03_originale_08_Torri_del_Benaco_Malcesine.gpx',
  './04_originale_09_Malcesine_Riva_del_Garda.gpx',
  './05_originale_01_Riva_del_Garda_Limone_sul_Garda.gpx',
  './06_originale_02_Limone_sul_Garda_Campione_del_Garda.gpx',
  './07_originale_03_Campione_del_Garda_Gargnano.gpx',
  './08_originale_04_Gargnano_Salo.gpx',
  './09_originale_05_Salo_Desenzano_del_Garda.gpx'
];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response;}).catch(()=>caches.match('./index.html'))));});
