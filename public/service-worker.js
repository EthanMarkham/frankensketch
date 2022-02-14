// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', function (event) {
    // do nothing here, just log all the network requests
    //console.log(event.request.url);
});

/* eslint-disable no-undef */
// importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');
// workbox.setConfig({ debug: false });
// workbox.routing.registerRoute(
//     ({request}) => request.destination === 'image',
//     new workbox.strategies.NetworkFirst()
// );