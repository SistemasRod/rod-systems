(function(e){function t(t){for(var o,c,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d2086b7":"9d4228e9","chunk-2d22d746":"ec5b93d6","chunk-3deb324d":"0f4aa254","chunk-4f9f6de2":"b4ce35af","chunk-64c633d4":"4bd6bce9","chunk-76eb3c34":"eafcc648"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var s=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container mb-5",attrs:{id:"nav"}},[n("b-nav",{attrs:{pills:""}},[n("b-nav-item",[n("router-link",{attrs:{to:"/"}},[e._v("Inicio")])],1),n("b-nav-item",[e.estaActivo?e._e():n("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),n("b-nav-item",[e.estaActivo?n("router-link",{attrs:{to:"/notas"}},[e._v("Mis Notas")]):e._e()],1),e.estaActivo?n("b-nav-item-dropdown",{attrs:{id:"my-nav-dropdown",text:"Rod Select","toggle-class":"nav-link-custom",right:""}},[n("b-dropdown-item",[e.estaActivo?n("router-link",{attrs:{to:"/select/prospectos"}},[e._v("Prospectos")]):e._e()],1),n("b-dropdown-item",[e.estaActivo?n("router-link",{attrs:{to:"/select/cotizaciones"}},[e._v("Cotizaciones")]):e._e()],1)],1):e._e(),n("b-nav-item",[e.estaActivo?n("a",{on:{click:function(t){return e.cerrarSesion()}}},[e._v("Cerrar Sesion")]):e._e()])],1)],1),n("router-view")],1)},a=[],c=n("5530"),i=n("2f62"),u={methods:Object(c["a"])({},Object(i["b"])(["cerrarSesion","leerToken"])),computed:Object(c["a"])({},Object(i["c"])(["estaActivo"])),created:function(){this.leerToken()}},s=u,l=n("2877"),d=Object(l["a"])(s,r,a,!1,null,null,null),f=d.exports,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Logo",src:"https://rodselect.com/assets/img/principal/rodselectlogo2.png"}})])}],h={name:"Home",components:{}},v=h,g=(n("fcb3"),Object(l["a"])(v,m,b,!1,null,"139f3dd1",null)),k=g.exports,_=n("1232");o["default"].use(i["a"]);var y=new i["a"].Store({state:{token:localStorage.getItem("token")||"",usuarioDB:""},mutations:{obtenerUsuario:function(e,t){e.token=t,""===t?(e.usuarioDB="",O.push({name:"Login"})):e.usuarioDB=Object(_["a"])(t)}},actions:{guardarUsuario:function(e,t){var n=e.commit;localStorage.setItem("token",t),n("obtenerUsuario",t)},cerrarSesion:function(e){var t=e.commit;t("obtenerUsuario",""),localStorage.removeItem("token")},leerToken:function(e){var t=e.commit,n=localStorage.getItem("token");t("obtenerUsuario",n||"")}},getters:{estaActivo:function(e){return!!e.token}},modules:{}});o["default"].use(p["a"]);var w=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"/notas",name:"Notas",component:function(){return n.e("chunk-3deb324d").then(n.bind(null,"c93e"))},meta:{requireAuth:!0}},{path:"/select/prospectos",name:"SelectProspectos",component:function(){return Promise.all([n.e("chunk-4f9f6de2"),n.e("chunk-64c633d4")]).then(n.bind(null,"2e4d"))},meta:{requireAuth:!0}},{path:"/select/cotizaciones",name:"SelectCotizaciones",component:function(){return Promise.all([n.e("chunk-4f9f6de2"),n.e("chunk-76eb3c34")]).then(n.bind(null,"8e21"))},meta:{requireAuth:!0}},{path:"*",redirect:{name:"Home"}}],j=new p["a"]({mode:"history",base:"/",routes:w});j.beforeEach((function(e,t,n){var o=e.matched.some((function(e){return e.meta.requireAuth}));o&&""===y.state.token?n({name:"Login"}):n()}));var O=j,S=n("5f5b"),A=(n("f9e3"),n("2dd8"),n("bc3a")),P=n.n(A),x=n("130e");o["default"].use(S["a"]),o["default"].use(x["a"],P.a),P.a.defaults.baseURL="https://sistemasrod.com/api",o["default"].config.productionTip=!1,new o["default"]({router:O,store:y,render:function(e){return e(f)}}).$mount("#app")},dc30:function(e,t,n){},fcb3:function(e,t,n){"use strict";n("dc30")}});
//# sourceMappingURL=app.985aae29.js.map