(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,b=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(b.length)b.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c=[];function a(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-099f044c":"813780a0","chunk-1056bf96":"8b06186d","chunk-6a222658":"42afb5a5"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(e);var s=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"39de":function(e,t,n){},a82d:function(e,t,n){"use strict";n("39de")},b383:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"navbar is-dark"},c={class:"navbar-brand"},a=Object(r["g"])(" Issue Reader ");function u(e,t,n,u,i,s){var l=Object(r["x"])("router-link"),f=Object(r["x"])("LoadingSpinner"),b=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["h"])("nav",o,[Object(r["h"])("div",c,[Object(r["h"])(l,{to:"/",class:"navbar-item"},{default:Object(r["D"])((function(){return[a]})),_:1})])]),Object(r["h"])(b,null,{default:Object(r["D"])((function(e){var t=e.Component;return[(Object(r["q"])(),Object(r["e"])(r["b"],{timeout:"0"},{default:Object(r["D"])((function(){return[(Object(r["q"])(),Object(r["e"])(Object(r["y"])(t)))]})),fallback:Object(r["D"])((function(){return[Object(r["h"])(f)]})),_:2},1024))]})),_:1})],64)}var i=Object(r["E"])("data-v-469382f4");Object(r["t"])("data-v-469382f4");var s={class:"loader-wrapper is-active"},l=Object(r["h"])("div",{class:"loader is-loading"},null,-1);Object(r["r"])();var f=i((function(e,t,n,o,c,a){return Object(r["q"])(),Object(r["e"])("div",s,[l])})),b=Object(r["i"])({name:"LoadingSpinner"});n("a82d");b.render=f,b.__scopeId="data-v-469382f4";var d=b,p=Object(r["i"])({components:{LoadingSpinner:d}});p.render=u;var h=p,v=(n("d3b7"),n("6c02")),j=[{path:"/",redirect:{path:"/issues",query:{page:1,per_page:10}}},{path:"/issues",name:"Issues",component:function(){return Promise.all([n.e("chunk-099f044c"),n.e("chunk-1056bf96")]).then(n.bind(null,"0ccb"))}},{path:"/issues/:issueNumber",name:"Issue",component:function(){return Promise.all([n.e("chunk-099f044c"),n.e("chunk-6a222658")]).then(n.bind(null,"1b10"))}}],O=Object(v["a"])({history:Object(v["b"])(),routes:j}),m=O,g=n("5502"),y=Object(g["a"])({state:{},mutations:{},actions:{},modules:{}});n("b383");Object(r["d"])(h).use(y).use(m).mount("#app")}});
//# sourceMappingURL=app.a2e1263c.js.map