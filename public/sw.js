if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,n,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1033-d4930f6564b1aa954902.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/1487.2f5d2ac4f52cf06a6f39.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/1630.0dac3eb42007e9d0a9a8.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/2071-735976a18da63bf00fce.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/2175-26fb6044a76c8bc96bdc.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/2433.f885757b3ed62c842c30.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/2482.5a6df58c88be95c46ff1.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/2586-4ef2f160d88cbc63db1b.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/2638-3db5ebe7da6ab499c0b2.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/2642-50449117021804806338.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/2670-1d851ed136fd4e832e70.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/273.7a6a7a4d5a3897258880.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/2825.61b440fd76abb8463c5a.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/3140.ea64cf51565e21d383f5.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/3640-e60e24d487d0204c529b.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/36bcf0ca-3b7a7e78488e84ba5dc1.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/3727.e3cfafaf66fc1ef67921.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/3765.3013ec38224080ede2ab.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/3815.8e401e688e3a814cfb41.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/3894.09462452c0eb86072f02.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/4122.8b34691f50830e490946.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/4254.3fadae49815d6f6f23cd.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/432.ba5827f7a71ea63201ab.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/4527.d0071db55094a72073a9.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/464.33c50eea9600f1566d81.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/4743.6a94ac2d0d6c5ecb8fcc.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/5052.93e28aea81fa53a562cd.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/5065.ed12a70ffc6dbd60fb9f.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/5213-7066b59d08eb65e52a96.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/5241.2d3762a098baa91dd9c1.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/5345.3ebd3aef5a11709cb448.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/5368.84c03e3218d0457a630f.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/5510-23156ba7e43d0949338c.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/5633.26cbfef802031dffd8eb.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/5832.3f9a6f80886788745f9f.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/5911.b55f7dfbe5282f997fbf.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/6286-4333fa8d231547e6d214.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/6341.198d2b5ab660ff4fdf7f.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/6659.2dc1c5040c0b14c15cc1.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/6661-0831fa0c1676edc0a968.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/6965.6f00d8dd9eace6ef3ce6.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/7230.8ed3509726653f210e5b.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/7307-29f7f1c4dd8a35217f59.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/7406-cf408b8f0aa7a744563c.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/7620-a7a97b9dd0d23061aac7.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/7857-26bac93317becc8ec289.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/7893.9f77d0a039e1699fa64b.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/8554-4ca93bf227c85533b91d.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/8632.16f17280acd8db3dcd6d.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/9074-0a3fdc71caa7e809015f.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/9352.1670715fd67d113ddd73.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/9486.fb954213a6e0105b3dd6.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/9497.6e9a953d9fc7b2a74adb.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/9574-1c7eb788cc1395fa4117.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/9594-977d1c4a3b62a172547a.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/9787-0e0cc7a56c127af6c2b3.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/9904-9548e24ac895f9c541e0.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/9927.348e4f3345ded3160489.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/9991.f3b23dd866ef032aa219.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/framework-3be88cdf70608a4e5e68.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/main-8ba9da08d4bd986ebde2.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/pages/%5Baps%5D/active/%5Bid%5D-a47dcb89fe9fc54470bf.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/pages/%5Baps%5D/cards-d7e3e1dff4d13e96eb60.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/pages/%5Baps%5D/dashboard-6e615b9a5b5389d15ab4.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/pages/%5Baps%5D/device/%5Bid%5D-d4c418016164eb6fa651.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/pages/%5Baps%5D/docs/%5Bslug%5D-46e783cf17a095087cfe.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/pages/%5Baps%5D/history-6a8aac3a0c137275add9.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/pages/%5Baps%5D/map-cf4f59938a12dd22191c.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/pages/%5Baps%5D/overview-d5280995ff2dd2f73e36.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/pages/%5Baps%5D/rack/%5Bid%5D-ba581f80f741c9f82809.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/pages/%5Baps%5D/racks-182f424b685bf9fb0c74.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/pages/%5Baps%5D/statistics-6b27cb98ae65d13e2ea2.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/pages/_app-0ac997814217ce25398e.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/pages/_error-64d09c5061203e14db9c.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/pages/docs/%5Bslug%5D-7f25c57b480af7b2e66b.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/pages/home-850a37104526b3e19f00.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/pages/index-a107fbfd5140e1019904.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/pages/lab/test-13351413c3c4c085f10d.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/pages/signin-e155963a5fbaff0eac12.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/chunks/webpack-332b993cd8fbce6068d0.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/ySfa5xp3kaKoW5CicnBtf/_buildManifest.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/_next/static/ySfa5xp3kaKoW5CicnBtf/_ssgManifest.js",revision:"ySfa5xp3kaKoW5CicnBtf"},{url:"/bot.svg",revision:"8e241fd1ed19c910f94247c53e084036"},{url:"/et200mp-1.png",revision:"8883e392b0da047062387da3895639de"},{url:"/et200sp-1.png",revision:"2a93fd5ecbdd1a2ac07d952415903fd2"},{url:"/favicon.ico",revision:"54bd02ba547dd63cc1941d535b5a6e28"},{url:"/icons/icon-128x128.png",revision:"bbb5c046215b1a9b354926c94bfcee14"},{url:"/icons/icon-144x144.png",revision:"4741618f24073bcc25e97ecdc09eabc4"},{url:"/icons/icon-152x152.png",revision:"5eed60dfee13a5867ba4a46d461654aa"},{url:"/icons/icon-16x16.png",revision:"f99bd5e903d2901b7f1e91cceaa855ef"},{url:"/icons/icon-192x192.png",revision:"31c188cb5c3ac19d1d5519639c5826a5"},{url:"/icons/icon-32x32.png",revision:"5ac102fd95d5dc7e0e7a13aa1e5c3806"},{url:"/icons/icon-384x384.png",revision:"eb17ad0b4ef81acd558ce98f9b0fec68"},{url:"/icons/icon-512x512.png",revision:"81c8e65dcf87dfe6e2bfd93e33b9afed"},{url:"/icons/icon-72x72.png",revision:"1fa796143d212fa522007e6f9ffaa091"},{url:"/icons/icon-96x96.png",revision:"e65cb587e2c11a83fd241eda5210ed15"},{url:"/manifest.json",revision:"7f7097274d6fbbcec5d8b55f64f3622b"},{url:"/silomat.jpg",revision:"69a10191cd5e2f36d0e42cc8b0b0568f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
