if(!self.define){let e,i={};const s=(s,t)=>(s=new URL(s+".js",t).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let l={};const o=e=>s(e,n),c={module:{uri:n},exports:l,require:o};i[n]=Promise.all(t.map((e=>c[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"daylight-app"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/daylight/css/app.5be7cca4.css",revision:null},{url:"/daylight/index.html",revision:"27c892410385c7fd9192fe530648e17b"},{url:"/daylight/js/app.4dd5071f.js",revision:null},{url:"/daylight/js/chunk-vendors.f71e244b.js",revision:null},{url:"/daylight/manifest.json",revision:"09881bec983da4598a98f85795999b0d"},{url:"/daylight/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
