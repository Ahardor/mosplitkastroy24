'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7144cedb190ddf3a3b5f785283d26ccd",
"assets/assets/img/1.jpeg": "6752fa4759dd536d7d16d9a24ab7ca48",
"assets/assets/img/10.jpeg": "909b844f3d0c204e2af4f604905f4c1a",
"assets/assets/img/11.jpeg": "a36bd9dbe223e318ce469520f44eb60a",
"assets/assets/img/12.jpeg": "d4044df824459a8e8a346ca7a815efca",
"assets/assets/img/13.jpeg": "f49649b3eb287fea2804db91d5e61951",
"assets/assets/img/14.jpeg": "c71367cb456acef4cd3c8689051f23f3",
"assets/assets/img/15.jpeg": "d42a52eb308a6fc7c1fcf51e21c9f857",
"assets/assets/img/16.jpeg": "5f3d88dbd06f8b339941e187ea622bdb",
"assets/assets/img/17.jpeg": "69ac4ccaae8e0d52ff0d715ae49cc6a3",
"assets/assets/img/18.jpeg": "c2648156b089d3a44b4d31d7444f2ed0",
"assets/assets/img/19.jpeg": "053972c8ec431de77a52afba69233bc1",
"assets/assets/img/2.jpeg": "992944263c47c497c9591fd0d15178bb",
"assets/assets/img/20.jpeg": "a6fab8067c12b6e3daadef54b111e85e",
"assets/assets/img/21.jpeg": "51a9e8bfed5aa137703a82175b16ed8f",
"assets/assets/img/22.jpeg": "c47f8f47df5b5614ec1ba5980d0d00ec",
"assets/assets/img/23.jpeg": "166f410fcfe6d8f157dc2755608e5eed",
"assets/assets/img/24.jpeg": "d34b45d34d5e06d04cf0b2250893f81e",
"assets/assets/img/25.jpeg": "901b0f8550e6df63042fd4d0b59ab81d",
"assets/assets/img/26.jpeg": "cdb1e9f4eb842de6b0dcf25bab167d3e",
"assets/assets/img/27.jpeg": "78fb05839dfb8015a7c3e9f9eb11ee66",
"assets/assets/img/28.jpeg": "18710794301038f578978e6930be35f2",
"assets/assets/img/29.jpeg": "50ada4873aabf0af587df5d749609c74",
"assets/assets/img/3.jpeg": "22b5e1770df87d85d62523bdd2a213c5",
"assets/assets/img/30.jpeg": "bfe8493d0da076d5a9d5a99d561ca9e2",
"assets/assets/img/31.jpeg": "bd3adbc5ae7b6d0cfb505e183aa64431",
"assets/assets/img/32.jpeg": "15d3a37d706a2984c6f33532c933d2fe",
"assets/assets/img/33.jpeg": "a70ee494339bb5e9b8e29e9d9b0127b1",
"assets/assets/img/34.jpeg": "29f7636396574b92381248910d227c76",
"assets/assets/img/35.jpeg": "b663c49b45a14ff0642203dd4e2283d9",
"assets/assets/img/36.jpeg": "67e898cf3ddc8f3817381bd2e501f776",
"assets/assets/img/37.jpeg": "3a63d649ded4efe33a39d64d6d55d0bc",
"assets/assets/img/38.jpeg": "f090ce0d46853f1a10dd3bd85b8745c6",
"assets/assets/img/39.jpeg": "ffd578698132d3a542976f76da3ca8eb",
"assets/assets/img/4.jpeg": "eb2b2f84fd2448c6b9b5cdbadff3af72",
"assets/assets/img/40.jpeg": "99f09093a2276d28e5355948117a1bef",
"assets/assets/img/41.jpeg": "6b586b0c90dbd5540aa3f6566cbaf645",
"assets/assets/img/42.jpeg": "6b65164c002ed370bcf4820d4983d60c",
"assets/assets/img/43.jpeg": "651b74ea65d530e6d161eacb282b75c4",
"assets/assets/img/45.jpeg": "b7c425f310f90de718fca11825a5db42",
"assets/assets/img/46.jpeg": "3c105a8bfb04ceb7acd61dd24e8d4107",
"assets/assets/img/5.jpeg": "39824b3ada8c9170f021a7c57ae6c4d4",
"assets/assets/img/7.jpeg": "d3ed4472cb3cedd1d674d6e39fe0b32e",
"assets/assets/img/8.jpeg": "0c9f11b39eb4e20212c6eb158ed4c6b8",
"assets/assets/img/9.jpeg": "ed46e612a6536a9e6db8496f38273c9a",
"assets/assets/img/Glavnaya/1.jpeg": "e7f027f4134b181a780fa66637d6d7a6",
"assets/assets/img/Glavnaya/2.jpeg": "2a52c56dc59d92c7fb6de5d2ee940412",
"assets/assets/img/Glavnaya/3.jpeg": "b663c49b45a14ff0642203dd4e2283d9",
"assets/assets/img/Glavnaya/4.jpeg": "3a63d649ded4efe33a39d64d6d55d0bc",
"assets/assets/img/Glavnaya/5.jpeg": "c4b65ab4a760d41ce054d6b9a39a3350",
"assets/assets/img/Glavnaya/7.jpeg": "60a25a797f821d434a7c2d15619cd2be",
"assets/assets/img/Glavnaya/8.jpeg": "c44edc5c75e81bf304dba6bc081826c3",
"assets/assets/img/products/Elements/press/1000x200x70.jpeg": "f721ee2090e3947ca6b0218cbdcbc24f",
"assets/assets/img/products/Elements/press/1000x300x150.jpeg": "a98acae76150a0250759489eca816fe2",
"assets/assets/img/products/Elements/press/500x200x70.jpeg": "ce0d411afbc1292762a5a7f0df9ac671",
"assets/assets/img/products/Elements/press/500x200x70_red.jpeg": "d6ad73e2b01ceba4c88afcfbeaad56a5",
"assets/assets/img/products/Elements/vibro/1000x200x80.jpeg": "f893ce4da62c55aaa9ae1224ba3dea43",
"assets/assets/img/products/Elements/vibro/260x260x60_eko.jpeg": "f4fe83079bd2de3af580c75239d0cfe6",
"assets/assets/img/products/Elements/vibro/500x160x50_vodostok.jpeg": "ae2c874ce91ec99a2a2101158c3ffd62",
"assets/assets/img/products/Elements/vibro/500x200x40.jpeg": "af6fc6bd88ac2f0576b6e332af38f6a1",
"assets/assets/img/products/Elements/vibro/500x200x40_seri.jpeg": "1b19ca300ab33ea2ec47070e961e9f81",
"assets/assets/img/products/Elements/vibro/500x200x70.jpeg": "ddfc7306632660195441454732d0e61a",
"assets/assets/img/products/Elements/vibro/nojki.jpeg": "87923ee4f08f741f3488aa7cc40783ea",
"assets/assets/img/products/Elements/vibro/stupen.jpeg": "e0611e45dd6b8fb577ce838cc1801884",
"assets/assets/img/products/Plitka/Press/angliskybulijnik.jpg": "83134a8ed5e8cdc2286b318cfc499839",
"assets/assets/img/products/Plitka/Press/bruschatka.jpeg": "40f5f3139c344a14c15dacdf7b067d92",
"assets/assets/img/products/Plitka/Vibro/300x300_cvetok.jpeg": "9978d929aa8a607b45a4003fb99436e3",
"assets/assets/img/products/Plitka/Vibro/300x300_doska_kalifornia.jpeg": "36f2dd36ab218eea9f5bac76de43dc90",
"assets/assets/img/products/Plitka/Vibro/300x300_kalifornia.jpeg": "1b155401baa46e1f06fb8b91e4dadb27",
"assets/assets/img/products/Plitka/Vibro/300x300_parket.jpeg": "af0f949979dbb0144632ac941ce6370a",
"assets/assets/img/products/Plitka/Vibro/300x300_tuchka.jpeg": "848b7f55708e74fb2a518e37ce095842",
"assets/assets/img/products/Plitka/Vibro/400x400x50x_3doski.jpeg": "0d7365010c5ac61cde8bd1c5533d3af4",
"assets/assets/img/products/Plitka/Vibro/400x400x50_8kirpicha.jpeg": "5c25a67aa9a564e7ebef4612bd08bfaa",
"assets/assets/img/products/Plitka/Vibro/400x400x50_cvetok.jpeg": "16d2a45c14f25cbe413c188b061e3ec8",
"assets/assets/img/products/Plitka/Vibro/500x500x50_12kirpicha.jpeg": "4e2a5b25d1ec7adeeca418f58ccbc9e6",
"assets/assets/img/products/Plitka/Vibro/cvetok_glaza.png": "9fca8adeb0f2196c4568e995c691421e",
"assets/assets/img/products/vibrolitaya/1pautinka.jpg": "5d6cf153d5da02b937b8c776bb403346",
"assets/assets/img/products/vibrolitaya/2bulijnik.jpg": "884b357278fc699dc7ef70e37282db17",
"assets/assets/img/products/vibrolitaya/3vosemkirpichei.jpg": "b3af020ce6e47b3e8f65abf400ef3a35",
"assets/assets/img/products/vibrolitaya/babochka.jpg": "eb89252bb56e6acb745e2c155e9bdc9d",
"assets/assets/img/products/vibrolitaya/bordyur.png": "4056ae225cf455907d732c68ade170b3",
"assets/assets/img/products/vibrolitaya/cherepaxa.jpg": "0fb453a327a33b0c90fa98449c415eee",
"assets/assets/img/products/vibrolitaya/Cvetok.jpeg": "91ff1a527416c7b613cfaff0a1ead090",
"assets/assets/img/products/vibrolitaya/delivery.jpg": "e9248eb477ecfda330e9320503e89704",
"assets/assets/img/products/vibrolitaya/dowbleg.jpg": "112d23d125a7479839f1376f171e3b94",
"assets/assets/img/products/vibrolitaya/glaza.jpg": "ea6187720332fc865fd943d83bb6cd03",
"assets/assets/img/products/vibrolitaya/irpichshershavi.jpg": "aeda6739f19b3f4c226bd89ff5dba33c",
"assets/assets/img/products/vibrolitaya/katushka.jpg": "2550cf21c8a1a61096cc97e1d9c21ab8",
"assets/assets/img/products/vibrolitaya/klenovi-list.jpg": "78b01a18df92f5c5f79f24be0cc8b760",
"assets/assets/img/products/vibrolitaya/klever.jpg": "cc2f632581035f69ef8ecac0a37f7e31",
"assets/assets/img/products/vibrolitaya/klever2.jpg": "54d94e7a94e3e9d503e3023b37381ae4",
"assets/assets/img/products/vibrolitaya/mostik.jpg": "e60d62ca109268cab24509afc8dc4a9a",
"assets/assets/img/products/vibrolitaya/oblicovka.jpg": "b13ac593825339200f4900e4cd4b5880",
"assets/assets/img/products/vibrolitaya/parcet.jpg": "d343ed8e3136dd44e90951f10c7631f1",
"assets/assets/img/products/vibrolitaya/runo.jpg": "bb6638f7305f2af380b0a6001deaede2",
"assets/assets/img/products/vibrolitaya/setka.jpg": "a8db7ca70212326e81ecd748df9e5b67",
"assets/assets/img/products/vibrolitaya/soti.jpg": "401dc6d3aa1e279d091b056f6161f483",
"assets/assets/img/products/vibrolitaya/srednevekovaya.jpg": "300faed7276a2104d1d5c67f9d19d189",
"assets/assets/img/products/vibrolitaya/taktilnaya.jpg": "4b0221df4437c950b16f3e3e44480e2e",
"assets/assets/img/products/vibrolitaya/tuchka.jpg": "b4529d2e983893b21ac62de066916942",
"assets/assets/img/products/vibrolitaya/ukladka.jpg": "3bff34edbeef2062f5aeb19ecd2e662f",
"assets/assets/img/products/vibrolitaya/vodostok.jpg": "5d9138e5323f46715d66eb74afa15ec8",
"assets/assets/img/products/vibrolitaya/volna.jpg": "d7c8cf1c0c1ab799eaa73940de3cf42f",
"assets/assets/img/products/vibrolitaya/zigzag.jpg": "f3f15336d2e664a9d82e999fc3d93e49",
"assets/assets/items.json": "eaf3340057e6cf42c6b95d3a693b4488",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2ac01b7948ab1ee5975daa2c4f353972",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "690e2c598cd9ca0232513514fce6a0cd",
"/": "690e2c598cd9ca0232513514fce6a0cd",
"main.dart.js": "8b693206434074a0566a790c92e144fc",
"manifest.json": "fab16f38693bb7dd92899a0985aacbc8",
"version.json": "4a9403da02a0d12e0a07c82a114239ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
