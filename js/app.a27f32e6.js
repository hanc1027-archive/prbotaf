(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=r[0]))}return t}var n={},o={app:0},a={app:0},i=[];function s(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-ebba2b2e":"84fc3ad9"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(t){var e=[],r={"chunk-ebba2b2e":1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise((function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-ebba2b2e":"2830b0d8"}[t]+".css",a=l.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===a))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===n||u===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[t],f.parentNode.removeChild(f),r(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("TopBar"),r("v-main",[r("router-view")],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{attrs:{color:"red lighten-3",dark:"",fixed:"",app:""}},[r("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/"}},[r("v-toolbar-title",[t._v("青年班《耳根圓通》登錄簿")])],1),r("v-spacer"),r("div",{staticClass:"d-none d-md-block"},[r("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/"}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"indigo"}},[t._v(" 部數登錄 ")])],1),r("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/query"}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"indigo"}},[t._v(" 部數查詢 ")])],1),r("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"indigo",href:t.second_link,target:"_blank"}},[t._v(" 楞嚴咒 ")]),r("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"indigo",href:t.third_link,target:"_blank"}},[t._v(" 耳根圓通 ")])],1),r("div",{staticClass:"d-md-none"},[r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-app-bar-nav-icon",t._g(t._b({},"v-app-bar-nav-icon",o,!1),n))]}}])},[r("v-list",{staticClass:"d-md-none",staticStyle:{float:"right"}},[r("v-list-item",[r("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/"}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"indigo"}},[t._v(" 部數登錄 ")])],1)],1),r("v-list-item",[r("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/query"}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"indigo"}},[t._v(" 部數查詢 ")])],1)],1),r("v-list-item",[r("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"indigo",href:t.second_link,target:"_blank"}},[t._v(" 楞嚴咒 ")])],1),r("v-list-item",[r("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"indigo",href:t.third_link,target:"_blank"}},[t._v(" 耳根圓通 ")])],1)],1)],1)],1)],1)},s=[],l={data:function(){return{isHome:!0,second_link:"https://drive.google.com/file/d/15Zx_LBGW2lToj2C7Nlz5qW3wZ-EEajwC/view?usp=sharing",third_link:"https://drive.google.com/file/d/1CalP3rk80yNdO7Dl862w0mHEK6SpsnMx/view?usp=sharing"}}},c=l,u=r("2877"),d=r("6544"),f=r.n(d),p=r("40dc"),v=r("5bc1"),h=r("8336"),m=r("8860"),b=r("da13"),g=r("e449"),_=r("2fa4"),y=r("2a7f"),k=Object(u["a"])(c,i,s,!1,null,null,null),w=k.exports;f()(k,{VAppBar:p["a"],VAppBarNavIcon:v["a"],VBtn:h["a"],VList:m["a"],VListItem:b["a"],VMenu:g["a"],VSpacer:_["a"],VToolbarTitle:y["a"]});var x={name:"App",components:{TopBar:w}},S=x,C=(r("fd60"),r("7496")),O=r("f6c4"),j=Object(u["a"])(S,o,a,!1,null,"89e50ea6",null),E=j.exports;f()(j,{VApp:C["a"],VMain:O["a"]});r("d3b7"),r("3ca3"),r("ddb0");var V=r("8c4f"),P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("iframe",{attrs:{src:"https://docs.google.com/forms/u/2/d/e/1FAIpQLSdOfadDVUPocsZzQZMdgGdpPehpOTjV3cbvzOMpcoGaZt8-pA/viewform",width:"100%",height:"800px",frameborder:"1"}})])}],A={},L=A,M=Object(u["a"])(L,P,T,!1,null,null,null),B=M.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("iframe",{attrs:{src:"https://docs.google.com/spreadsheets/d/1QEWbxOjyItJS7eAuaVjl0LDvLpPzLVfZZS4NwFIIXHQ/edit#gid=51820991",width:"100%",height:"800px",frameborder:"1"}})])}],Z={},$=Z,q=Object(u["a"])($,N,I,!1,null,null,null),D=q.exports;n["a"].use(V["a"]);var H=[{path:"/",name:"Home",component:B},{path:"/query",name:"Query",component:D},{path:"*",name:"404",component:function(){return r.e("chunk-ebba2b2e").then(r.bind(null,"8cdb"))}}],Q=new V["a"]({mode:"history",routes:H}),z=Q,F=r("2f62");n["a"].use(F["a"]);var G=new F["a"].Store({state:{},mutations:{},actions:{},modules:{}}),J=r("f309");n["a"].use(J["a"]);var W=new J["a"]({}),K=r("58ca");n["a"].config.productionTip=!1,new n["a"]({router:z,store:G,vuetify:W,VueMeta:K["a"],render:function(t){return t(E)}}).$mount("#app")},"5f21":function(t,e,r){},fd60:function(t,e,r){"use strict";r("5f21")}});
//# sourceMappingURL=app.a27f32e6.js.map