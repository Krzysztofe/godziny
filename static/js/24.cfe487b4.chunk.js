"use strict";(self.webpackChunkgodziny=self.webpackChunkgodziny||[]).push([[24],{5452:function(n,e,t){var r=t(5048),a=t(1014),i=t(7064),s=t(184);e.Z=function(){var n=(0,r.I0)(),e=(0,r.v9)((function(n){return n.alert})).header;return e?(0,s.jsx)(a.Z,{action:function(){n((0,i.VG)(""))},isPrinted:!0,header:e}):null}},1014:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(3360),a=t(7064),i=t(5048),s=t(184),o=function(n){var e=(0,i.I0)();return n.isPrinted?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{id:"opacityContainer",className:"fixed-top _d-center _alert",onClick:function(t){var r;["opacityContainer","noButton"].includes(null===(r=t.target)||void 0===r?void 0:r.id)&&(null!==n&&void 0!==n&&n.setIsPrinted&&(null===n||void 0===n||n.setIsPrinted(!1)),e((0,a.VG)("")))},children:(0,s.jsxs)("div",{className:"p-5 bg-white _radius text-center fs-2 fw-medium _anim-dropDown",children:[n.header,(0,s.jsx)("div",{className:"_w-fitContent m-auto mt-4",children:n.header.includes("Usun\u0105\u0107")?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{id:"noButton",className:"_radius bg-dark border-0 px-4 px-sm-5",children:"Nie"}),(0,s.jsx)(r.Z,{onClick:n.action,className:"_radius bg-primary border-0 px-4 px-sm-5 ms-4 border ",children:"Tak"})]}):(0,s.jsx)(r.Z,{id:"noButton",className:"_radius _fs-3 bg-primary border-0 px-5 ms-4 border ",onClick:n.action,children:"Ok"})})]})})}):null}},4707:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r=t(9562),a=t(3360),i=t(7689),s=t(805),o=t(5452),c=t(6355),l=t(3205),u=t(184),d=function(){var n=(0,l.Z)("202").inPathname;return(0,u.jsxs)("div",{className:" d-flex align-items-center text-light-emphasis w-100",children:[(0,u.jsx)(c.m3W,{className:"fs-2 "}),(0,u.jsx)("span",{className:"ms-1 ".concat(n?"_iconLogout":""),children:"Wyloguj"})]})},m=t(9439),f=t(2791),h=t(4604),p=t(5048),v=t(7064),x=function(){var n=(0,p.I0)(),e=(0,f.useState)(!1),t=(0,m.Z)(e,2),r=t[0],a=t[1],s=(0,i.s0)();return{isLoading:r,logout:function(){a(!0),h.I8.signOut().then((function(){s("/")})).catch((function(e){n((0,v.VG)(e.message))})).finally((function(){a(!1)}))}}},j=function(){var n=x(),e=n.isLoading,t=n.logout,r=(0,s.Z)(e,(0,u.jsx)(d,{})).btnContent;return"/"===(0,i.TH)().pathname?null:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.Z,{}),(0,u.jsx)(a.Z,{onClick:t,className:"bg-transparent border-0 p-0 ms-2 me-3",disabled:e,children:r})]})},g=t(5705),b=t(4446),N=t(3994),y=function(){var n=(0,p.I0)(),e=(0,g.u6)().values;return(0,f.useEffect)((function(){n((0,N.j6)(e.searchedName))}),[e.searchedName]),(0,u.jsx)(u.Fragment,{})},Z=function(){var n=(0,p.v9)((function(n){return n.listUsers})).listUsers,e=n||[],t=null===e||void 0===e?void 0:e.map((function(n){return n.userName}));return{dataInputsSelect:[{name:"searchedName",firstOption:"".concat(0===t.length?"Brak danych":"Szukaj"),options:t}]}},_=function(){return{initialValues:{searchedName:""},onSubmit:function(){}}},w=function(){var n=Z().dataInputsSelect,e=_(),t=e.initialValues,r=e.onSubmit,a=(0,l.Z)("202").inPathname;return(0,u.jsx)(g.J9,{initialValues:t,onSubmit:r,children:(0,u.jsxs)(g.l0,{className:"_formSearchContext ".concat(a?"visible":"invisible"),children:[(0,u.jsx)("div",{className:"_formSearchContext__select ms-3 m-md-auto",children:(0,u.jsx)(b.Z,{inputsData:n,padding:"ps-4 text-start",inputIcon:!0})}),(0,u.jsx)(y,{})]})})},k=t(6910),O=function(){var n=(0,k.F_)(h.I8),e=(0,m.Z)(n,1)[0];return(0,u.jsx)("div",{className:"_headerName ".concat(e?"d-none d-md-block text-end":"_headerName__outLoged"),children:"OZZ Inicjatywa Pracownicza"})},C=function(){return(0,u.jsxs)("header",{className:"w-100 d-flex align-items-center border-bottom fs-3 position-relative",style:{scrollbarGutter:"stable"},children:[(0,u.jsx)(O,{}),(0,u.jsx)(w,{}),(0,u.jsxs)("div",{className:"position-absolute top-0 d-flex h-100 end-0",children:[(0,u.jsx)(r.Z,{display:"d-flex align-items-center flex-row h-100 d-md-none"}),(0,u.jsx)(j,{})]})]})}},5212:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(184),a=function(n){return(0,r.jsx)("div",{className:"text-danger d-block mt-0 fs-5 _inputError",children:n.touched[n.value]&&n.errors[n.value]&&n.errors[n.value]})}},4446:function(n,e,t){t.d(e,{Z:function(){return l}});var r=t(5705),a=t(2936),i=t(5212),s=t(6355),o=t(184),c=function(){return(0,o.jsx)("div",{className:"position-absolute z-3 ms-1 pt-1",children:(0,o.jsx)(s.U41,{className:"text-light-emphasis"})})},l=function(n){var e=(0,r.u6)(),t=e.errors,s=e.touched,l=e.handleBlur,u=e.setFieldValue;return(0,o.jsxs)("div",{className:"position-relative",children:[n.inputIcon&&(0,o.jsx)(c,{}),n.inputsData.map((function(e){var r=e.name,c=e.firstOption,d=(e.label,e.options);return(0,o.jsxs)(a.Z.Group,{className:"mt-2  _inputSelect",children:[(0,o.jsxs)(a.Z.Select,{id:r,name:r,onChange:function(n){return u(r,n.target.value)},onBlur:l,size:"sm",className:" _fs-primary text-light-emphasis text-center border bg-secondary-light _cursor-pointer _inputSelect position-relative ".concat("Brak danych"===c?"text-warning":""," ").concat(n.padding),children:[(0,o.jsx)("option",{value:c,className:" ".concat("Brak danych"===c?"text-warning":"text-placeholder"),children:c}),null===d||void 0===d?void 0:d.map((function(n){return(0,o.jsx)("option",{value:n,children:n},n)}))]}),(0,o.jsx)(i.Z,{value:r,errors:t,touched:s})]},r)}))]})}},9562:function(n,e,t){t.d(e,{Z:function(){return j}});var r=t(9439),a=t(4418),i=t(9065),s=t(390),o=t(3360),c=t(828),l=t(184),u=function(){var n=(0,s.lX)();return(0,l.jsxs)(o.Z,{onClick:function(){n.back()},className:"text-light-emphasis p-0 bg-transparent border-0 w-100 d-flex align-items-center_cursor-pointer",children:[(0,l.jsx)(c.Fjg,{className:" me-1 align-self-center "})," Wr\xf3\u0107"]})},d=t(1087),m=t(8820),f=t(3205),h=function(){var n=(0,f.Z)("202").inPathname;return(0,l.jsx)(d.OL,{to:"/ustawienia",className:function(n){return n.isActive?"text-primary text-decoration-none":"text-light-emphasis text-decoration-none"},end:!0,children:(0,l.jsxs)("div",{className:"_align-center",children:[(0,l.jsx)(m.QAE,{className:"fs-2 ".concat(n&&"me-3"," me-sm-0")}),(0,l.jsx)("div",{className:"ms-1 ".concat(n&&"d-none"," d-sm-block"),children:"Ustawienia"})]})})},p=function(){return{dataSidebarNavItems:[!(0,i.Z)().isMonthInURL&&(0,l.jsx)(u,{}),(0,l.jsx)(h,{})]}},v=t(6910),x=t(4604),j=function(n){var e=p().dataSidebarNavItems,t=(0,v.F_)(x.I8);return(0,r.Z)(t,1)[0]?(0,l.jsx)("nav",{children:(0,l.jsx)(a.Z,{className:n.display,children:e.map((function(n,e){return(0,l.jsx)(a.Z.Item,{className:"bg-transparent border-0 text-dark p-0 ms-2",children:n},e)}))})}):(0,l.jsx)(l.Fragment,{})}},805:function(n,e,t){var r=t(4849),a=t(184);e.Z=function(n,e){var t=e;return n&&(t=(0,a.jsx)(r.Z,{animation:"border",size:"sm",variant:"primary",className:"text-dark",children:(0,a.jsx)("span",{className:"visually-hidden",children:"Loading..."})})),{btnContent:t}}},3205:function(n,e,t){var r=t(7689);e.Z=function(n){return{inPathname:(0,r.TH)().pathname.includes(n)}}},9065:function(n,e,t){var r=t(7689);e.Z=function(){var n=(0,r.TH)().pathname.split("/").slice(-1)[0],e=null===n||void 0===n?void 0:n.slice(0,4),t=null===n||void 0===n?void 0:n.slice(-2);return{monthURL:n,yearFromURL:e,monthFromURL:t,isMonthInURL:/^\d{4}-\d{2}$/.test(n)}}},9983:function(n,e,t){t.d(e,{w_:function(){return l}});var r=t(2791),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),s=function(){return s=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var a in e=arguments[t])Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},s.apply(this,arguments)},o=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]])}return t};function c(n){return n&&n.map((function(n,e){return r.createElement(n.tag,s({key:e},n.attr),c(n.child))}))}function l(n){return function(e){return r.createElement(u,s({attr:s({},n.attr)},e),c(n.child))}}function u(n){var e=function(e){var t,a=n.attr,i=n.size,c=n.title,l=o(n,["attr","size","title"]),u=i||e.size||"1em";return e.className&&(t=e.className),n.className&&(t=(t?t+" ":"")+n.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,l,{className:t,style:s(s({color:n.color||e.color},e.style),n.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),n.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(n){return e(n)})):e(a)}},7462:function(n,e,t){function r(){return r=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},r.apply(this,arguments)}t.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=24.cfe487b4.chunk.js.map