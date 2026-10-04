/* Eldria service worker: network-first for the game page so updates arrive immediately, cached copy as fallback */
const C='eldria-v1';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k!==C)await caches.delete(k);await self.clients.claim()})()));
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!=='GET')return;const u=new URL(q.url);
 if(u.origin===location.origin){if(u.pathname.endsWith('version.json'))return;const key=u.origin+u.pathname;
  e.respondWith(fetch(q).then(r=>{if(r.ok){const cp=r.clone();caches.open(C).then(c=>c.put(key,cp))}return r}).catch(async()=>(await caches.match(key))||(await caches.match(new URL('./',location.href).href))||Response.error()));return}
 if(u.hostname==='www.gstatic.com'&&u.pathname.includes('/firebasejs/'))e.respondWith(caches.match(q).then(r=>r||fetch(q).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put(q,cp));return res})))});
