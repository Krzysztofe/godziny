"use strict";(self.webpackChunkgodziny=self.webpackChunkgodziny||[]).push([[786],{1100:function(n,t,e){var r=e(1830),o=e.n(r),i=e(2791),s=e(4849),a=e(184);t.Z=function(n,t){(0,i.useEffect)((function(){if(n.isError){var t=n.error,e=t&&"status"in t&&t.status&&t.status;o().fire({text:"B\u0142\u0105d: ".concat(e||""),confirmButtonColor:"rgb(31, 180, 255)"})}}),[n.isError]);var e=t;return n.isLoading&&(e=(0,a.jsx)(s.Z,{animation:"border",size:"sm",variant:"secondary",children:(0,a.jsx)("span",{className:"visually-hidden",children:"Loading..."})})),{btnContent:e}}},2218:function(n,t,e){var r=e(3433),o=e(5048);t.Z=function(){var n,t=(0,o.v9)((function(n){return n.infoMonths})).infoMonths,e=t&&(null===(n=(0,r.Z)(t))||void 0===n?void 0:n.sort((function(n,t){return new Date(n).getTime()-new Date(t).getTime()}))),i=null===e||void 0===e?void 0:e.map((function(n){var t=new Date(n);return new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}).format(t)}));return{sortedInfoMonths:e,databaseMonthsDatesToString:i}}},5667:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r=e(4849),o=e(7022),i=e(9743),s=e(5048),a=e(23),c=e(2218),u=e(4165),l=e(5861),f=e(9439),d=e(1830),m=e.n(d),h=e(3360),p=e(7425),x=e(1100),v=e(2767),y=e(7615),g=e(184),b=function(n){var t=(0,y.bw)(),e=(0,f.Z)(t,2),r=e[0],o=e[1],i=(0,y.kM)(),c=(0,f.Z)(i,2),d=c[0],b=(c[1],(0,s.v9)((function(n){return n.infoMonths})).infoMonths),j=(0,x.Z)(o,(0,g.jsx)(p.GnT,{className:"text-danger fs-5 ms-auto"})).btnContent,Z=function(){var t=(0,l.Z)((0,u.Z)().mark((function t(){return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:m().fire((0,v.p)("Chcesz usuni\u0105\u0107 u\u017cytkownika?")).then(function(){var t=(0,l.Z)((0,u.Z)().mark((function t(e){var o,i,s;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isConfirmed){t.next=8;break}return o=n.monthDate.slice(0,4),i=n.monthDate.slice(-2),s=b.filter((function(n){return n!=="".concat(o,"-").concat(i)})),t.next=6,r({year:o,month:i});case 6:return t.next=8,d(s);case 8:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,g.jsx)(a.Z.Item,{onClick:Z,className:"border-0 p-0 px-1 ",children:(0,g.jsxs)(h.Z,{disabled:o.isLoading,className:"w-100 d-flex justify-content-between align-items-center px-1 bg-primary-subtle text-capitalize border-0 fs-5",children:[n.monthDateToString," ",j]})})},j=function(){var n=(0,c.Z)(),t=n.sortedInfoMonths,e=n.databaseMonthsDatesToString,r=(0,s.v9)((function(n){return n.infoMonths})).infoMonths;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h3",{className:"h4",children:"Usu\u0144 miesi\u0105c"}),(0,g.jsx)(a.Z,{className:"border-0 bg-primary-subtle p-0",children:r?null===e||void 0===e?void 0:e.map((function(n,e){return(0,g.jsx)(b,{monthDateToString:n,monthDate:t[e]},n)})):(0,g.jsx)("p",{className:"py-1 px-2 fs-4 text-warning",children:"Brak danych"})})]})},Z=e(2677),w=e(3855),N=[{labelText:"Podaj imi\u0119",name:"userName",type:"text",placeholder:"Imi\u0119"},{labelText:"Podaj kolor",name:"userColor",type:"color",placeholder:""}],k=e(3433),C=e(1413),M=e(5705),O=e(6021),T=e(8007),B=function(){var n=(0,O.xY)().data,t=null===n||void 0===n?void 0:n.map((function(n){return n.userName})),e=null===n||void 0===n?void 0:n.map((function(n){return n.userColor}));return{validationSchema:T.Ry({userName:T.Z_().min(3,"Min. 3 litery").max(10,"Max. 10 liter").test("is-in-database","Imi\u0119 zaj\u0119te",(function(n){return void 0!==n&&!(null!==t&&void 0!==t&&t.includes(n))})).required("Imi\u0119 wymagane"),userColor:T.Z_().test("is-in-database","Kolor zaj\u0119ty",(function(n){return void 0!==n&&!(null!==e&&void 0!==e&&e.includes(n))}))})}},I=function(){var n=(0,O.Vx)(),t=(0,f.Z)(n,2),e=t[0],r=t[1],o=B().validationSchema,i=(0,O.xY)().data,s=i||[],a=(0,M.TA)({initialValues:{id:"",userName:"",userColor:"#e0cce1"},validationSchema:o,onSubmit:function(){var n=(0,l.Z)((0,u.Z)().mark((function n(t,r){var o,a;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=r.resetForm,a=(0,C.Z)((0,C.Z)({},t),{},{id:crypto.randomUUID()}),!i){n.next=7;break}return n.next=5,e([].concat((0,k.Z)(s),[a]));case 5:n.next=9;break;case 7:return n.next=9,e([a]);case 9:o();case 10:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()});return{formik:a,success:r}},z=function(){var n=I(),t=n.formik,e=n.success,r=(0,x.Z)(e,"Zapisz u\u017cytkowanika").btnContent;return(0,g.jsxs)(w.Z,{onSubmit:t.handleSubmit,children:[(0,g.jsx)(i.Z,{children:N.map((function(n,e){var r=n.labelText,o=n.name,i=n.type,s=n.placeholder;return(0,g.jsx)(Z.Z,{className:"".concat(0===e?"col-8":"col-4"),children:(0,g.jsxs)(w.Z.Group,{className:"",children:[(0,g.jsx)(w.Z.Label,{htmlFor:o,className:"fw-medium",children:r}),(0,g.jsx)(w.Z.Control,{id:o,type:i,name:o,value:t.values[o],onChange:t.handleChange,onBlur:t.handleBlur,placeholder:s}),(0,g.jsx)(w.Z.Text,{className:"text-danger d-block mt-0 mb-4 fs-8",style:{height:"0.7rem"},children:t.touched[o]&&t.errors[o]&&t.errors[o]})]})},o)}))}),(0,g.jsx)(h.Z,{disabled:e.isLoading,type:"submit",className:"col-8 col-sm-7  bg-info text-white fw-medium",children:r})]})},D=function(n){var t=(0,O.I1)(),e=(0,f.Z)(t,2),r=e[0],o=e[1],i=(0,x.Z)(o,(0,g.jsx)(p.GnT,{className:"text-danger fs-5 ms-auto"})).btnContent,c=(0,s.v9)((function(n){return n.users})).users,d=function(){var n=(0,l.Z)((0,u.Z)().mark((function n(t){return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:m().fire((0,v.p)("Chcesz usuni\u0105\u0107 u\u017cytkownika?")).then(function(){var n=(0,l.Z)((0,u.Z)().mark((function n(e){var o;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.isConfirmed){n.next=4;break}return o=null===c||void 0===c?void 0:c.filter((function(n){return(null===n||void 0===n?void 0:n.id)!==t})),n.next=4,r(o);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}());case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,g.jsx)(a.Z.Item,{onClick:function(){return d(n.user.id)},className:"border-0 p-0",style:{color:n.user.userColor},children:(0,g.jsxs)(h.Z,{disabled:o.isLoading,className:"w-100 d-flex justify-content-between align-items-center px-1 bg-primary-subtle text-capitalize border-0 fs-5",style:{color:n.user.userColor},children:[n.user.userName,i]})})},E=function(){var n=(0,s.v9)((function(n){return n.users})).users;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h3",{className:"h4",children:"Usu\u0144 u\u017cytkownika"}),(0,g.jsx)(a.Z,{className:"border-0 bg-primary-subtle p-0",children:n?null===n||void 0===n?void 0:n.map((function(n){return(0,g.jsx)(D,{user:n},n.id)})):(0,g.jsx)("p",{className:"py-1 px-2 fs-4 text-warning",children:"Brak danych"})})]})},L=function(){var n,t=(0,s.v9)((function(n){return n.users})),e=t.usersError,a=t.usersIsLoading,c=(0,s.v9)((function(n){return n.infoMonths})),u=c.infoMonthsError,l=c.infoMonthsIsLoading,f="col-sm-8 col-md-9 col-xl-8 col-xxl-8 ms-sm-auto mx-xl-auto px-1 pt-4";if(a||l)n=(0,g.jsx)(r.Z,{animation:"border",variant:"secondary",children:(0,g.jsx)("span",{className:"visually-hidden",children:"Loading..."})});else if(e){if("status"in e){var d="status"in e&&e.status;n=(0,g.jsx)("h3",{className:"text-danger mx-auto ",children:(0,g.jsxs)(g.Fragment,{children:[" B\u0142\u0105d: ",d," "]})})}}else if(u){if("status"in u){var m="status"in u&&u.status;n=(0,g.jsx)("h3",{className:"text-danger mx-auto ",children:(0,g.jsxs)(g.Fragment,{children:[" B\u0142\u0105d: ",m," "]})})}}else n=(0,g.jsxs)(o.Z,{fluid:!0,children:[(0,g.jsx)(i.Z,{className:f,children:(0,g.jsx)(z,{})}),(0,g.jsx)(i.Z,{className:f,children:(0,g.jsx)(E,{})}),(0,g.jsx)(i.Z,{className:f,children:(0,g.jsx)(j,{})})]});return{settingsContent:n}},S=function(){var n=L().settingsContent,t=(0,s.v9)((function(n){return n.users})),e=t.users,r=t.usersError,o=t.usersIsLoading,i=(0,s.v9)((function(n){return n.infoMonths})),a=i.infoMonths,c=i.infoMonthsError,u=i.infoMonthsIsLoading,l="bg-primary-subtle";return(u&&!a||o&&!e)&&(l="d-flex align-items-center justify-content-center vh-100"),(!a||c||u||!e||r||o)&&(l="d-flex justify-content-end align-items-center p-1 pe-sm-5 col-sm-7 col-md-8 ms-auto mx-xxl-auto"),(0,g.jsx)("main",{className:l,style:{minHeight:"100vh"},children:n})}},2767:function(n,t,e){e.d(t,{Z:function(){return s},p:function(){return i}});var r=e(1830),o=e.n(r),i=function(n){return{title:n,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Tak",cancelButtonText:"Nie"}},s=function(n){o().fire({text:"B\u0142\u0105d ".concat(n),confirmButtonColor:"rgb(31, 180, 255)"})}},3201:function(n,t,e){var r=e(2791),o=function(n){return n&&"function"!==typeof n?function(t){n.current=t}:n};t.Z=function(n,t){return(0,r.useMemo)((function(){return function(n,t){var e=o(n),r=o(t);return function(n){e&&e(n),r&&r(n)}}(n,t)}),[n,t])}},9983:function(n,t,e){e.d(t,{w_:function(){return u}});var r=e(2791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),s=function(){return s=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},s.apply(this,arguments)},a=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(e[r[o]]=n[r[o]])}return e};function c(n){return n&&n.map((function(n,t){return r.createElement(n.tag,s({key:t},n.attr),c(n.child))}))}function u(n){return function(t){return r.createElement(l,s({attr:s({},n.attr)},t),c(n.child))}}function l(n){var t=function(t){var e,o=n.attr,i=n.size,c=n.title,u=a(n,["attr","size","title"]),l=i||t.size||"1em";return t.className&&(e=t.className),n.className&&(e=(e?e+" ":"")+n.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:e,style:s(s({color:n.color||t.color},t.style),n.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),n.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(n){return t(n)})):t(o)}},7462:function(n,t,e){function r(){return r=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},r.apply(this,arguments)}e.d(t,{Z:function(){return r}})},1752:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(1120);function o(){return o="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(n,t,e){var o=function(n,t){for(;!Object.prototype.hasOwnProperty.call(n,t)&&null!==(n=(0,r.Z)(n)););return n}(n,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(arguments.length<3?n:e):i.value}},o.apply(this,arguments)}}}]);
//# sourceMappingURL=786.f5f66619.chunk.js.map