"use strict";(self.webpackChunkgodziny=self.webpackChunkgodziny||[]).push([[510],{5452:function(n,e,t){var r=t(5048),a=t(6579),i=t(7064),s=t(184);e.Z=function(){var n=(0,r.I0)(),e=(0,r.v9)((function(n){return n.alert})).header;return e?(0,s.jsx)(a.Z,{action:function(){n((0,i.VG)(""))},isPrinted:!0,header:e}):null}},6579:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(7064),a=t(5048),i=t(3360),s=t(184),o=function(n){return(0,s.jsx)(i.Z,{id:"noButton",className:"_radius bg-primary border-0 px-5 ms-4",onClick:n.action,children:"Ok"})},c=function(n){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{id:"noButton",className:"_radius bg-dark border-0 px-4 px-sm-5",children:"Nie"}),(0,s.jsx)(i.Z,{onClick:n.action,className:"_radius bg-primary border-0 px-4 px-sm-5 ms-4",children:"Tak"})]})},u=(0,t(2791).memo)((function(n){var e=(0,a.I0)();return n.isPrinted?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{id:"opacityContainer",className:"fixed-top _d-center _alert",onClick:function(t){var a;["opacityContainer","noButton"].includes(null===(a=t.target)||void 0===a?void 0:a.id)&&(null!==n&&void 0!==n&&n.setIsPrinted&&(null===n||void 0===n||n.setIsPrinted(!1)),e((0,r.VG)("")))},children:(0,s.jsxs)("div",{className:"p-5 bg-white _radius text-center fs-2 fw-medium _anim-dropDown",children:[n.header,(0,s.jsx)("div",{className:"_w-fitContent m-auto mt-4",children:n.header.includes("Usun\u0105\u0107")?(0,s.jsx)(c,{action:n.action}):(0,s.jsx)(o,{action:n.action})})]})})}):null}))},8477:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r=t(2791),a=t(5048),i=t(3920),s=t(9439),o=t(2685),c=t(3003),u=function(){var n=(0,o.iH)(c.Fs),e=(0,r.useState)(""),t=(0,s.Z)(e,2),a=t[0],i=t[1],u=(0,r.useState)([]),l=(0,s.Z)(u,2),d=l[0],m=l[1];return(0,r.useEffect)((function(){var e=(0,o.jM)(n,(function(n){var e=[],t=[];n.forEach((function(n){var r=n.key||"";e.push(r);var a=(0,o.iH)(c.Fs,"".concat(r));(0,o.jM)(a,(function(n){var e=[];n.forEach((function(n){var t=n.key||"";e.push(t)})),t.push(e)}),(function(n){i("B\u0142\u0105d. Od\u015bwie\u017c stron\u0119")}))}));var r=[].concat(t).map((function(n,t){return n.map((function(n){return e[t]+"-"+n}))})).flat().reverse();m(r)}),(function(n){i("B\u0142\u0105d. Od\u015bwie\u017c stron\u0119")}));return function(){e()}}),[]),{listMonths:d,error:a}},l=function(){var n=(0,a.I0)(),e=u(),t=e.listMonths,s=e.error;(0,r.useEffect)((function(){n((0,i.eT)(t)),n((0,i.V2)(s))}),[t,n])},d=t(6021),m=t(4779),f=t(3360),h=t(6910),p=t(805),v=t(6931),x=t(5452),j=t(6355),g=t(184),b=(0,r.memo)((function(){var n=(0,v.Z)(["202"]).isPath;return(0,g.jsxs)("div",{className:" d-flex align-items-center text-light-emphasis w-100",children:[(0,g.jsx)(j.m3W,{className:"fs-2 text-light-emphasis  "}),(0,g.jsx)("span",{className:"ms-1 ".concat(n?"_iconLogout":""),children:"Wyloguj"})]})})),N=t(4165),Z=t(5861),y=t(7689),w=t(7064),_=function(){var n=(0,a.I0)(),e=(0,r.useState)(!1),t=(0,s.Z)(e,2),i=t[0],o=t[1],u=(0,y.s0)(),l=function(){var e=(0,Z.Z)((0,N.Z)().mark((function e(){return(0,N.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.prev=1,e.next=4,c.I8.signOut();case 4:u("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n((0,w.VG)(e.t0.message));case 10:return e.prev=10,o(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})));return function(){return e.apply(this,arguments)}}();return{isLoading:i,logout:l}},k=(0,r.memo)((function(){var n=_(),e=n.isLoading,t=n.logout,r=(0,p.Z)(e,(0,g.jsx)(b,{})).btnContent,a=(0,h.F_)(c.I8),i=(0,s.Z)(a,1)[0],o=(0,v.Z)(["ustawienia","202"]).isPath;return i&&o?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x.Z,{}),(0,g.jsx)(f.Z,{onClick:t,className:"bg-transparent border-0 p-0 ms-2 me-3",disabled:e,children:r})]}):null})),O=t(5705),I=t(4446),C=t(577),P=function(){var n=(0,a.I0)(),e=(0,O.u6)().values;return(0,r.useEffect)((function(){n((0,C.j6)(e.searchedName))}),[e.searchedName]),null},S=function(){var n=(0,d.xY)().data,e=n||[],t=null===e||void 0===e?void 0:e.map((function(n){return n.userName}));return{dataInputsSelect:[{name:"searchedName",firstOption:"".concat(0===t.length?"Brak danych":"Szukaj"),options:t}]}},E=function(){return{initialValues:{searchedName:""},onSubmit:function(){}}},F=(0,r.memo)((function(){var n=S().dataInputsSelect,e=E(),t=e.initialValues,r=e.onSubmit,a=(0,h.F_)(c.I8),i=(0,s.Z)(a,1)[0],o=(0,v.Z)(["202"]).isPath;return i&&o?(0,g.jsx)(O.J9,{initialValues:t,onSubmit:r,children:(0,g.jsxs)(O.l0,{className:"_formSearchContext",children:[(0,g.jsx)("div",{className:"_formSearchContext__select ms-3 m-md-auto",children:(0,g.jsx)(I.Z,{inputsData:n,padding:"ps-4 text-start",inputIcon:!0})}),(0,g.jsx)(P,{})]})}):null})),z=(0,r.memo)((function(){var n=(0,h.F_)(c.I8),e=(0,s.Z)(n,1)[0],t=(0,v.Z)(["ustawienia","202"]).isPath,r=e&&t?"d-none d-md-block":"_headerName__outLoged";return(0,g.jsx)("div",{className:"_headerName ".concat(r," ps-3 ps-lg-4 "),children:"OZZ Inicjatywa Pracownicza"})})),L=function(){return l(),(0,d.xY)(),(0,g.jsxs)("header",{className:"w-100 d-flex align-items-center border-bottom fs-3 position-relative _header",children:[(0,g.jsx)(z,{}),(0,g.jsx)(F,{}),(0,g.jsxs)("div",{className:"position-absolute top-0 d-flex h-100 end-0",children:[(0,g.jsx)(m.Z,{styles:"d-flex align-items-center flex-row h-100 d-md-none"}),(0,g.jsx)(k,{})]})]})}},5212:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(184),a=function(n){return(0,r.jsx)("div",{className:"text-danger d-block mt-0 fs-5 ps-2 _inputError",children:n.touched[n.value]&&n.errors[n.value]&&n.errors[n.value]})}},4446:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(5705),a=t(2936),i=t(5212),s=t(6355),o=t(184),c=function(){return(0,o.jsx)("div",{className:"position-absolute z-3 ms-1 pt-1",children:(0,o.jsx)(s.U41,{className:"text-light-emphasis"})})},u=function(n){var e=(0,r.u6)(),t=e.errors,s=e.touched,u=e.handleBlur,l=e.setFieldValue,d=function(n){return"Brak danych"===n?"text-danger":"text-light-emphasis "};return(0,o.jsxs)("div",{className:"position-relative",children:[n.inputIcon&&(0,o.jsx)(c,{}),n.inputsData.map((function(e){var r=e.name,c=e.firstOption,m=e.isErrorPrint,f=e.options;return(0,o.jsxs)(a.Z.Group,{className:"mt-2 _inputSelect",children:[(0,o.jsxs)(a.Z.Select,{id:r,name:r,onChange:function(n){return l(r,n.target.value)},onBlur:u,size:"sm",className:" _fs-primary border bg-secondary-light _cursor-pointer _inputSelect position-relative  ".concat(d(c)," ").concat(n.padding),children:[(0,o.jsx)("option",{value:c,children:c}),null===f||void 0===f?void 0:f.map((function(n){return(0,o.jsx)("option",{value:n,children:n},n)}))]}),m&&(0,o.jsx)(i.Z,{value:r,errors:t,touched:s})]},r)}))]})}},4779:function(n,e,t){t.d(e,{Z:function(){return g}});var r=t(9439),a=t(4418),i=t(9065),s=t(390),o=t(3360),c=t(828),u=t(184),l=function(){var n=(0,s.lX)();return(0,u.jsxs)(o.Z,{onClick:function(){n.back()},className:"text-light-emphasis p-0 bg-transparent border-0 w-100 d-flex align-items-center_cursor-pointer",children:[(0,u.jsx)(c.Fjg,{className:"text-light-emphasis  me-1 align-self-center "})," ","Wr\xf3\u0107"]})},d=t(1087),m=t(8820),f=t(6931),h=function(){var n=(0,f.Z)(["ustawienia"]).isPath;return(0,u.jsx)(m.QAE,{className:"fs-2  ".concat(!n&&"me-3"," me-sm-0")})},p=function(){var n=(0,f.Z)(["202"]).isPath;return(0,u.jsx)(d.OL,{to:"/ustawienia",className:function(n){return n.isActive?"text-primary text-decoration-none":"text-light-emphasis text-decoration-none"},end:!0,children:(0,u.jsxs)("div",{className:"_align-center",children:[(0,u.jsx)(h,{}),(0,u.jsx)("div",{className:"ms-1 ".concat(n&&"d-none"," d-sm-block"),children:"Ustawienia"})]})})},v=function(){return{dataSidebarNavItems:[!(0,i.Z)().isMonthInURL&&(0,u.jsx)(l,{}),(0,u.jsx)(p,{})]}},x=t(6910),j=t(3003),g=(0,t(2791).memo)((function(n){var e=v().dataSidebarNavItems,t=(0,x.F_)(j.I8),i=(0,r.Z)(t,1)[0],s=(0,f.Z)(["202","ustawienia"]).isPath;return i&&s?(0,u.jsx)("nav",{children:(0,u.jsx)(a.Z,{className:n.styles,children:e.map((function(n,e){return(0,u.jsx)(a.Z.Item,{className:"bg-transparent border-0 text-dark p-0 ms-2",children:n},e)}))})}):null}))},805:function(n,e,t){var r=t(4849),a=t(184);e.Z=function(n,e){var t=e;return n&&(t=(0,a.jsx)(r.Z,{animation:"border",size:"sm",variant:"primary",className:"text-dark",children:(0,a.jsx)("span",{className:"visually-hidden",children:"Loading..."})})),{btnContent:t}}},9065:function(n,e,t){var r=t(7689);e.Z=function(){var n=(0,r.TH)().pathname.split("/").slice(-1)[0],e=null===n||void 0===n?void 0:n.slice(0,4),t=null===n||void 0===n?void 0:n.slice(-2);return{monthURL:n,yearFromURL:e,monthFromURL:t,isMonthInURL:/^\d{4}-\d{2}$/.test(n)}}},9983:function(n,e,t){t.d(e,{w_:function(){return u}});var r=t(2791),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),s=function(){return s=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var a in e=arguments[t])Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},s.apply(this,arguments)},o=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]])}return t};function c(n){return n&&n.map((function(n,e){return r.createElement(n.tag,s({key:e},n.attr),c(n.child))}))}function u(n){return function(e){return r.createElement(l,s({attr:s({},n.attr)},e),c(n.child))}}function l(n){var e=function(e){var t,a=n.attr,i=n.size,c=n.title,u=o(n,["attr","size","title"]),l=i||e.size||"1em";return e.className&&(t=e.className),n.className&&(t=(t?t+" ":"")+n.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,u,{className:t,style:s(s({color:n.color||e.color},e.style),n.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),n.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(n){return e(n)})):e(a)}},7462:function(n,e,t){function r(){return r=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},r.apply(this,arguments)}t.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=510.46060584.chunk.js.map