(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76eb3c34"],{"8e21":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v("Cotizaciones")]),a("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.mensaje.color},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.mensaje.texto)+" ")]),a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.cotizaciones,(function(e,i){return a("tr",{key:i},[a("td",[t._v(t._s(t.formatearFecha(e.date)))]),a("td",[t._v(t._s(e.nombre))]),a("td",[t._v(t._s(e.apellidos))]),a("td",[t._v(t._s(e.email))]),a("td",[t._v(t._s(e.telefono))]),a("td",[t._v(t._s(e.empresa))]),a("td",[t._v(t._s(e.presupuesto))]),a("td",[t._v(t._s(e.personas))]),a("td",[t._v(t._s(t.formatearFecha(e.entrega)))]),a("td",[t._v(t._s(e.receptor))]),a("td",[t._v(t._s(e.regalo))]),a("td",[t._v(t._s(e.comentario))]),a("td",[t._v(t._s(e.activo))]),a("td",[a("b-button",{staticClass:"btn-danger btn-sm",on:{click:function(a){return t.eliminarCot(e._id)}}},[t._v("Eliminar")])],1)])})),0)]),a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:1===t.paginaActual}},[a("router-link",{staticClass:"page-link",attrs:{to:{query:{pagina:t.paginaActual-1}}}},[t._v(" Anterior ")])],1),t._l(t.cantidadPaginas,(function(e,i){return a("li",{key:i,staticClass:"page-item",class:{active:t.paginaActual===i+1}},[a("router-link",{staticClass:"page-link",attrs:{to:{query:{pagina:i+1}}}},[t._v(t._s(i+1))])],1)})),a("li",{staticClass:"page-item",class:{disabled:t.paginaActual===t.cantidadPaginas}},[a("router-link",{staticClass:"page-link",attrs:{to:{query:{pagina:t.paginaActual+1}}}},[t._v(" Siguiente ")])],1)],2)])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Registro")]),a("th",{attrs:{scope:"col"}},[t._v("Nombre")]),a("th",{attrs:{scope:"col"}},[t._v("Apellidos")]),a("th",{attrs:{scope:"col"}},[t._v("Correo")]),a("th",{attrs:{scope:"col"}},[t._v("Telefono")]),a("th",{attrs:{scope:"col"}},[t._v("Empresa")]),a("th",{attrs:{scope:"col"}},[t._v("Presupuesto")]),a("th",{attrs:{scope:"col"}},[t._v("Personas")]),a("th",{attrs:{scope:"col"}},[t._v("Entrega")]),a("th",{attrs:{scope:"col"}},[t._v("Receptor")]),a("th",{attrs:{scope:"col"}},[t._v("regalo")]),a("th",{attrs:{scope:"col"}},[t._v("comentario")]),a("th",{attrs:{scope:"col"}},[t._v("estado")])])])}],o=a("5530"),n=(a("99af"),a("c740"),a("a434"),a("c1df")),c=a.n(n),r=a("2f62"),l={data:function(){return{totalCotizaciones:0,limite:50,paginaActual:1,cotizaciones:[],dismissSecs:5,dismissCountDown:0,mensaje:{color:"",texto:""}}},computed:Object(o["a"])(Object(o["a"])({},Object(r["d"])(["token"])),{},{cantidadPaginas:function(){return Math.ceil(this.totalCotizaciones/this.limite)}}),methods:{paginacion:function(t){var e=this,a={headers:{token:this.token}},i=(t-1)*this.limite;this.axios.get("/rodselect/ver-cot?limite=".concat(this.limite,"&skip=").concat(i),a).then((function(t){console.log(t.data),e.cotizaciones=t.data.cotizacionDB,e.totalCotizaciones=t.data.totalCotizaciones})).catch((function(t){console.log(t.response)}))},eliminarCot:function(t){var e=this;this.axios.delete("/rodselect/borrar-cot/".concat(t)).then((function(t){var a=e.cotizaciones.findIndex((function(e){return e._id===t.data._id}));e.cotizaciones.splice(a,1),e.mensaje.color="success",e.mensaje.texto="Cotizacion eliminada",e.showAlert()})).catch((function(t){}))},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},formatearFecha:function(t){return c()(t).format("L")}},watch:{"$route.query.pagina":{immediate:!0,handler:function(t){t=parseInt(t)||1,this.paginacion(t),this.paginaActual=t}}}},d=l,u=a("2877"),h=Object(u["a"])(d,i,s,!1,null,null,null);e["default"]=h.exports},a434:function(t,e,a){"use strict";var i=a("23e7"),s=a("da84"),o=a("23cb"),n=a("5926"),c=a("07fa"),r=a("7b0b"),l=a("65f0"),d=a("8418"),u=a("1dde"),h=u("splice"),p=s.TypeError,_=Math.max,f=Math.min,m=9007199254740991,v="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!h},{splice:function(t,e){var a,i,s,u,h,g,b=r(this),C=c(b),w=o(t,C),k=arguments.length;if(0===k?a=i=0:1===k?(a=0,i=C-w):(a=k-2,i=f(_(n(e),0),C-w)),C+a-i>m)throw p(v);for(s=l(b,i),u=0;u<i;u++)h=w+u,h in b&&d(s,u,b[h]);if(s.length=i,a<i){for(u=w;u<C-i;u++)h=u+i,g=u+a,h in b?b[g]=b[h]:delete b[g];for(u=C;u>C-i+a;u--)delete b[u-1]}else if(a>i)for(u=C-i;u>w;u--)h=u+i-1,g=u+a-1,h in b?b[g]=b[h]:delete b[g];for(u=0;u<a;u++)b[u+w]=arguments[u+2];return b.length=C-i+a,s}})},c740:function(t,e,a){"use strict";var i=a("23e7"),s=a("b727").findIndex,o=a("44d2"),n="findIndex",c=!0;n in[]&&Array(1)[n]((function(){c=!1})),i({target:"Array",proto:!0,forced:c},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),o(n)}}]);
//# sourceMappingURL=chunk-76eb3c34.0dc89852.js.map