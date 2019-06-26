/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "calc.js",
    "revision": "ab63e755043472bf758a61225ed3a44c"
  },
  {
    "url": "gulpsrc.html",
    "revision": "3df65130e775e6b6633cd84cd5dc040d"
  },
  {
    "url": "icon.svg",
    "revision": "161b0dbe511e28d598fb45138bac1346"
  },
  {
    "url": "index.html",
    "revision": "a8dd9bea73da37c2b07dc2a65ea408b4"
  },
  {
    "url": "style.css",
    "revision": "c35641fa66bfe3bf1dccb0a1d4db2b64"
  },
  {
    "url": "work.js",
    "revision": "139bb3e4577f4db72bab9eba55d72acc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
