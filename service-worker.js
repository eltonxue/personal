"use strict";var precacheConfig=[["/personal/index.html","0bd637491f63f4853bca6c6a7bafa0bf"],["/personal/static/css/main.a2f5f50a.css","68b8fde6eea66e4139a59940861d2602"],["/personal/static/js/main.bd586291.js","e46ce290de34155a0cf94f2275a1c65d"],["/personal/static/media/aceit-1.e4d33991.jpg","e4d339910a17e551940df0d34d2f8bff"],["/personal/static/media/aceit-2.097782ae.jpg","097782aea4edc4f3f02acdb7467610f4"],["/personal/static/media/aceit-3.e63a0b93.jpg","e63a0b93db9779c15899c8ab732c3bd0"],["/personal/static/media/aceit-4.675cb692.jpg","675cb6927bb636ece5572708ae07ac37"],["/personal/static/media/aceit-5.61a7ee3d.jpg","61a7ee3d5e320d979fd4390871dfde34"],["/personal/static/media/aceit-6.a4878284.jpg","a4878284dc2c32d25616b0de2dcc2767"],["/personal/static/media/aceit-7.bcb87956.jpg","bcb8795602923802916fbde671a7940a"],["/personal/static/media/aceit-8.174715c7.jpg","174715c746c584c654f987885ad2599d"],["/personal/static/media/adigami-logo.f3560e47.png","f3560e479e8c1e520d5f45399b4f1050"],["/personal/static/media/apache-original.01d7be02.svg","01d7be02a868837e449ca2b956cc0875"],["/personal/static/media/background-cover.3abfb9ad.jpg","3abfb9add79c9539a7edcbc3ec899f4f"],["/personal/static/media/chai-original.9872d3f5.png","9872d3f559e2e4ed0d1a40af287c7b9c"],["/personal/static/media/coreoverflow-1.8cf156ce.jpg","8cf156ce5e39fc7f15e3d567f25d7b5a"],["/personal/static/media/coreoverflow-2.a19a891b.jpg","a19a891b16ec8772f373996de97b8c13"],["/personal/static/media/coreoverflow-3.cfd2873d.jpg","cfd2873d47b93db75da220625307c9b5"],["/personal/static/media/coreoverflow-4.36e43a65.jpg","36e43a656cc2f597d80425ccd00b1440"],["/personal/static/media/coreoverflow-5.4b5c7e1e.jpg","4b5c7e1e0ed9f1c3f832040011751c15"],["/personal/static/media/coreoverflow-6.c14211c1.jpg","c14211c1983efb817040b29f517abbc4"],["/personal/static/media/coreoverflow-7.1876f63e.jpg","1876f63eccde770a86659467afb97053"],["/personal/static/media/css3-original.a70a7e3e.svg","a70a7e3e545f3ddc5707d4c4da8cfa17"],["/personal/static/media/dynamo-db.55fe6ce0.png","55fe6ce0f69e68656a0cbc1e1880b293"],["/personal/static/media/email-icon.94405fe3.png","94405fe3cf295381d7ab4528cda591bd"],["/personal/static/media/express-original.c3af8b67.svg","c3af8b67d896ace3528c7f109750e875"],["/personal/static/media/fablix-1.31a34dd7.jpg","31a34dd78f76926c700b29851cb22f79"],["/personal/static/media/fablix-2.de5fcb0c.jpg","de5fcb0c3efce5c243af86cfd12fbda5"],["/personal/static/media/fablix-3.a35ad3a4.jpg","a35ad3a4ca687b9a535e664b272f64c3"],["/personal/static/media/fablix-4.6f842f3c.jpg","6f842f3c0e96ec95ad3fa48cf5d6e46a"],["/personal/static/media/fablix-5.885420f6.jpg","885420f6804b16cc66c30fd394231a4b"],["/personal/static/media/fablix-6.d622ece1.jpg","d622ece15bf4c180888fd75ca56b6f9a"],["/personal/static/media/github.76d344f0.svg","76d344f08412543c74ccd1fb2493d607"],["/personal/static/media/html5-original.7997c424.svg","7997c4244e7a8cf2b160803e1c741502"],["/personal/static/media/immerse-logo.a23a6e55.png","a23a6e55ff9822b3328ca94db97f4913"],["/personal/static/media/jquery-original.cebb17c0.svg","cebb17c0855c821f6f042fc2956b54e8"],["/personal/static/media/lambda-original.75de55c8.svg","75de55c884198b886a76720e4c797e55"],["/personal/static/media/linkedin.a08f59f4.png","a08f59f44e32ab5f5fe579b7b4088b97"],["/personal/static/media/logo.f01d4f0a.svg","f01d4f0a63784b0838895c73d202a81c"],["/personal/static/media/minder-1.5b6d3bfc.jpg","5b6d3bfc18b3cef5e647e9aa836e44db"],["/personal/static/media/minder-2.4439cf3a.jpg","4439cf3a9d70fbe3bca113800303b7bc"],["/personal/static/media/minder-3.3459510c.jpg","3459510c45ca0eb9f72bf2e914379943"],["/personal/static/media/minder-4.7cd1b19e.jpg","7cd1b19e6e0086d3f2c1d66cf785a29d"],["/personal/static/media/minder-5.9d085dfd.jpg","9d085dfdf11819e83579dd032efe33a8"],["/personal/static/media/minder-6.77c8acfa.jpg","77c8acfa8a0dbeda8d6202cfb4dc10c9"],["/personal/static/media/mocha-plain.14785336.svg","1478533601c8d628375a8cbb63c3d84a"],["/personal/static/media/mongodb-original.52783a2f.svg","52783a2f8043e237279093badadc9cf1"],["/personal/static/media/mongoose-original.096d33be.png","096d33be2aad46efe516fcf6fece32ad"],["/personal/static/media/mysql-original.c326c80a.svg","c326c80ab2f4dc4288ece5e55e746cbe"],["/personal/static/media/nodejs-original.ccb43d34.svg","ccb43d3400fb05951c89ad3ba6acd9d5"],["/personal/static/media/postgresql-original.1e83f710.svg","1e83f7103d15e32357b2dc768106fac0"],["/personal/static/media/procore-logo.fb24b95b.png","fb24b95b5b2cf61ca0fd50281f0b7f7c"],["/personal/static/media/profile-2-cropped.441aeca1.jpg","441aeca188275721c0b152a138153017"],["/personal/static/media/react-original.e9f3d01c.svg","e9f3d01c242e086f895bde131803b451"],["/personal/static/media/redux-original.59c46753.png","59c467536111a981d904a050d335c2be"],["/personal/static/media/sass-original.88c10477.svg","88c1047792044b547d1d3e066d3e18c4"],["/personal/static/media/sequelize-original.b8a803af.svg","b8a803afc78c1e8a9a8edd77cd2b5c0f"],["/personal/static/media/technologist.47e09758.png","47e09758488db2010ae832aeb4b6262b"],["/personal/static/media/wave-emoji.e5f82052.png","e5f820522b2d69a67753e12a85e0c299"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var n="/personal/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});