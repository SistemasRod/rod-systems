(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64c633d4"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}},"2e4d":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("b-button",{staticClass:"btn-danger btn-sm disabled"},[t._v("Enviar Correo Masivo")]),r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.prospectos,(function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(t.formatearFecha(e.date)))]),r("td",[t._v(t._s(e.nombre))]),r("td",[t._v(t._s(e.telefono))]),r("td",[t._v(t._s(e.email))]),r("td",[t._v(t._s(e.categoria))]),r("td",[r("b-button",{staticClass:"btn-danger btn-sm disabled"},[t._v("Enviar Correo")])],1)])})),0)]),r("nav",{attrs:{"aria-label":"Page navigation example"}},[r("ul",{staticClass:"pagination"},[r("li",{staticClass:"page-item",class:{disabled:1===t.paginaActual}},[r("router-link",{staticClass:"page-link",attrs:{to:{query:{pagina:t.paginaActual-1}}}},[t._v(" Anterior ")])],1),t._l(t.cantidadPaginas,(function(e,n){return r("li",{key:n,staticClass:"page-item",class:{active:t.paginaActual===n+1}},[r("router-link",{staticClass:"page-link",attrs:{to:{query:{pagina:n+1}}}},[t._v(t._s(n+1))])],1)})),r("li",{staticClass:"page-item",class:{disabled:t.paginaActual===t.cantidadPaginas}},[r("router-link",{staticClass:"page-link",attrs:{to:{query:{pagina:t.paginaActual+1}}}},[t._v(" Siguiente ")])],1)],2)])],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("Registro")]),r("th",{attrs:{scope:"col"}},[t._v("Nombre")]),r("th",{attrs:{scope:"col"}},[t._v("Telefono")]),r("th",{attrs:{scope:"col"}},[t._v("Correo")]),r("th",{attrs:{scope:"col"}},[t._v("Categoria")])])])}],a=r("1da1"),i=r("5530"),c=(r("96cf"),r("99af"),r("c1df")),s=r.n(c),u=r("2f62"),l={data:function(){return{totalProspectos:0,limite:50,paginaActual:1,prospectos:[]}},computed:Object(i["a"])(Object(i["a"])({},Object(u["d"])(["token"])),{},{cantidadPaginas:function(){return Math.ceil(this.totalProspectos/this.limite)}}),methods:{paginacion:function(t){var e=this,r={headers:{token:this.token}},n=(t-1)*this.limite;this.axios.get("/rodselect/prospecto?limite=".concat(this.limite,"&skip=").concat(n),r).then((function(t){s.a.locale("es-mx"),console.log(t.data),e.prospectos=t.data.prospectoDB,e.totalProspectos=t.data.totalProspectos})).catch((function(t){console.log(t)}))},listarProspectos:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r={headers:{token:t.token}},t.axios.get("/rodselect/prospecto",r).then((function(e){console.log(e.data),t.prospectos=e.data.prospectoDB})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},formatearFecha:function(t){return s()(t).format("L")}},watch:{"$route.query.pagina":{immediate:!0,handler:function(t){t=parseInt(t)||1,this.paginacion(t),this.paginaActual=t}}}},h=l,f=r("2877"),p=Object(f["a"])(h,n,o,!1,null,null,null);e["default"]=p.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(F){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new C(n||[]);return a._invoke=E(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function g(){}function y(){}function m(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(A([])));_&&_!==r&&n.call(_,a)&&(w=_);var x=m.prototype=g.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function E(t,e,r){var n=h;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return N()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?d:f,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function A(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:N}}function N(){return{value:e,done:!0}}return y.prototype=m,s(x,"constructor",m),s(m,"constructor",y),y.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(k.prototype),s(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),s(x,c,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=A,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=chunk-64c633d4.c2dd9694.js.map