"use strict";var precacheConfig=[["/index.html","1e4655be279b0599ea5baeb8545ef44a"],["/static/css/main.5b5b69ee.css","8f761c4a29987d71edc6e2e28ae0bddd"],["/static/js/main.0143fe8a.js","7c8d9c4a43f1a0d7e8cd4c3289e67d8d"],["/static/media/agent2.16fddfe3.jpg","16fddfe3286d35dc42e8dd0609836dfd"],["/static/media/contact.3b8889f4.ico","3b8889f42decbb26b924dcb5baf67810"],["/static/media/favicon.bf59b0f8.ico","bf59b0f8696fff561ff1ab609a40047a"],["/static/media/house.823d5727.ico","823d57276823ad7610b1c74734473e24"],["/static/media/house1.5720598a.jpg","5720598a8ab407f17826598068a5707c"],["/static/media/house2.9a1376ac.jpg","9a1376ac82de168cb0cbd2da4bf993e2"],["/static/media/house3.3999d142.jpg","3999d142d4011f7a8cf27808ca4db8cf"],["/static/media/image2.d4c8bafe.jpg","d4c8bafef794e46810c65bf34a59dca5"],["/static/media/image4.f837c3b2.jpg","f837c3b23db274004f9a289c8af1c51e"],["/static/media/loupe.099b821c.png","099b821cfbab4db7d641124265f61311"],["/static/media/partner1.f8ed0dcb.png","f8ed0dcbe5d2471526d291ac37ef63b3"],["/static/media/partner2.e44d209c.png","e44d209c9a6ce79520cb80cafaa882c8"],["/static/media/partner3.5902e7f8.png","5902e7f822e8533add2dc17970b0433b"],["/static/media/partner4.001b49ae.png","001b49ae98cf5b5bbbd5208f769b0a59"],["/static/media/partner5.c5b92705.png","c5b927059c7f4363fd7c695dd4984eb6"],["/static/media/partner6.68ec25b2.png","68ec25b22b726ecc963d126237926287"],["/static/media/partner7.9337b084.png","9337b0846bac5a8fb9cae2ea046e3779"],["/static/media/partner8.a4927c03.png","a4927c037bfa8e6ec47f59ed6ec7600e"],["/static/media/pen.bafc3a47.ico","bafc3a47a03600109f06bb29c03e5099"],["/static/media/search.6d2b1382.ico","6d2b138245ee75c58db8ea689d2aa14f"],["/static/media/user1.7383fcba.jpg","7383fcba1a82c07790cbc03e7f2c08ac"],["/static/media/workclub_logo.43d16df3.png","43d16df3fc1d859d0448031717ab1149"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});