"use strict";(self.webpackChunkgodziny=self.webpackChunkgodziny||[]).push([[172],{5452:function(e,n,t){var r=t(5048),a=t(1014),i=t(7064),s=t(184);n.Z=function(){var e=(0,r.I0)(),n=(0,r.v9)((function(e){return e.alert})).header;return n?(0,s.jsx)(a.Z,{action:function(){e((0,i.VG)(""))},isPrinted:!0,header:n}):null}},1014:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(3360),a=t(7064),i=t(5048),s=t(184),o=function(e){var n=(0,i.I0)();return e.isPrinted?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{id:"opacityContainer",className:"fixed-top _d-center _alert",onClick:function(t){var r;["opacityContainer","noButton"].includes(null===(r=t.target)||void 0===r?void 0:r.id)&&(null!==e&&void 0!==e&&e.setIsPrinted&&(null===e||void 0===e||e.setIsPrinted(!1)),n((0,a.VG)("")))},children:(0,s.jsxs)("div",{className:"p-5 bg-white _radius text-center fs-2 fw-medium _anim-dropDown",children:[e.header,(0,s.jsx)("div",{className:"_w-fitContent m-auto mt-4",children:e.header.includes("Usun\u0105\u0107")?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{id:"noButton",className:"_radius bg-dark border-0 px-4 px-sm-5",children:"Nie"}),(0,s.jsx)(r.Z,{onClick:e.action,className:"_radius bg-primary border-0 px-4 px-sm-5 ms-4 border ",children:"Tak"})]}):(0,s.jsx)(r.Z,{id:"noButton",className:"_radius _fs-3 bg-primary border-0 px-5 ms-4 border ",onClick:e.action,children:"Ok"})})]})})}):null}},971:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(9562),a=t(9439),i=t(2791),s=t(4849),o=t(3360),c=t(7689),l=t(4604),u=t(7064),d=t(6355),m=t(5048),h=t(5452),f=t(3205),p=t(184),v=function(){var e=(0,m.I0)(),n=(0,c.s0)(),t=(0,i.useState)(!1),r=(0,a.Z)(t,2),v=r[0],x=r[1],j=(0,f.Z)("202").inPathname,b="/"!==(0,c.TH)().pathname,g=(0,p.jsxs)("div",{className:" d-flex align-items-center text-light-emphasis w-100",children:[(0,p.jsx)(d.m3W,{className:"fs-2 "}),(0,p.jsx)("span",{className:"".concat(j&&"d-none"," d-sm-block ms-1"),children:"Wyloguj"})]});return v&&(g=(0,p.jsx)(s.Z,{animation:"border",size:"sm",variant:"secondary",className:"mx-auto",children:(0,p.jsx)("span",{className:"visually-hidden",children:"Loading..."})})),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h.Z,{}),(0,p.jsx)(o.Z,{onClick:function(){x(!0),l.I8.signOut().then((function(){n("/")})).catch((function(n){return e((0,u.VG)(n.message))})).finally((function(){x(!1)}))},className:"bg-transparent border-0 p-0 ms-2 me-3 ".concat(b?"visible":"invisible"),disabled:v,children:g})]})},x=t(5705),j=function(){return{initialValues:{searchedName:""},onSubmit:function(){}}},b=t(3994),g=function(){var e=(0,m.I0)(),n=(0,x.u6)().values;return(0,i.useEffect)((function(){e((0,b.j6)(n.searchedName))}),[n.searchedName]),(0,p.jsx)(p.Fragment,{})},N=function(){var e=(0,m.v9)((function(e){return e.listUsers})).listUsers,n=e||[],t=null===n||void 0===n?void 0:n.map((function(e){return e.userName}));return{dataInputsSelect:[{name:"searchedName",firstOption:"".concat(0===t.length?"Brak danych":"Szukaj"),options:t}]}},y=t(4446),Z=function(){var e=N().dataInputsSelect,n=j(),t=n.initialValues,r=n.onSubmit,a=(0,f.Z)("202").inPathname;return(0,p.jsx)(x.J9,{initialValues:t,onSubmit:r,children:(0,p.jsxs)(x.l0,{className:"_formSearchContext ".concat(a?"visible":"invisible"),children:[(0,p.jsx)("div",{className:"_formSearchContext__select ms-3 m-md-auto",children:(0,p.jsx)(y.Z,{inputsData:e,padding:"ps-4",inputIcon:!0})}),(0,p.jsx)(g,{})]})})},w=t(6910),_=function(){var e=(0,w.F_)(l.I8),n=(0,a.Z)(e,1)[0];return(0,p.jsx)("div",{className:"_headerName ".concat(n?"d-none d-md-block text-end":"_headerName__outLoged"),children:"OZZ Inicjatywa Pracownicza"})},k=function(){return(0,p.jsxs)("header",{className:"w-100 d-flex align-items-center border-bottom fs-3 position-relative",style:{scrollbarGutter:"stable"},children:[(0,p.jsx)(_,{}),(0,p.jsx)(Z,{}),(0,p.jsxs)("div",{className:"position-absolute top-0 d-flex h-100 end-0",children:[(0,p.jsx)(r.Z,{display:"d-flex align-items-center flex-row h-100 d-md-none"}),(0,p.jsx)(v,{})]})]})}},5212:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(184),a=function(e){return(0,r.jsx)("div",{className:"text-danger d-block mt-0 fs-5 _inputError",children:e.touched[e.value]&&e.errors[e.value]&&e.errors[e.value]})}},4446:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(5705),a=t(2936),i=t(5212),s=t(6355),o=t(184),c=function(){return(0,o.jsx)("div",{className:"position-absolute z-3 ms-1",children:(0,o.jsx)(s.U41,{className:"text-light-emphasis"})})},l=function(e){var n=(0,r.u6)(),t=n.errors,s=n.touched,l=n.handleBlur,u=n.setFieldValue;return(0,o.jsxs)("div",{className:"position-relative",children:[e.inputIcon&&(0,o.jsx)(c,{}),e.inputsData.map((function(n){var r=n.name,c=n.firstOption,d=(n.label,n.options);return(0,o.jsxs)(a.Z.Group,{className:"mt-2  _inputSelect",children:[(0,o.jsxs)(a.Z.Select,{id:r,name:r,onChange:function(e){return u(r,e.target.value)},onBlur:l,size:"sm",className:"p-0 _fs-primary text-light-emphasis border bg-secondary-light shadow-sm _cursor-pointer _inputSelect position-relative ".concat("Brak danych"===c?"text-warning":""," ").concat(e.padding),children:[(0,o.jsx)("option",{value:c,className:" ".concat("Brak danych"===c?"text-warning":"text-placeholder"),children:c}),null===d||void 0===d?void 0:d.map((function(e){return(0,o.jsx)("option",{value:e,children:e},e)}))]}),(0,o.jsx)(i.Z,{value:r,errors:t,touched:s})]},r)}))]})}},9562:function(e,n,t){t.d(n,{Z:function(){return j}});var r=t(9439),a=t(4418),i=t(9065),s=t(390),o=t(3360),c=t(828),l=t(184),u=function(){var e=(0,s.lX)();return(0,l.jsxs)(o.Z,{onClick:function(){e.back()},className:"text-light-emphasis p-0 bg-transparent border-0 w-100 d-flex align-items-center_cursor-pointer",children:[(0,l.jsx)(c.Fjg,{className:" me-1 align-self-center "})," Wr\xf3\u0107"]})},d=t(1087),m=t(8820),h=t(3205),f=function(){var e=(0,h.Z)("202").inPathname;return(0,l.jsx)(d.OL,{to:"/ustawienia",className:function(e){return e.isActive?"text-primary text-decoration-none":"text-light-emphasis text-decoration-none"},end:!0,children:(0,l.jsxs)("div",{className:"_align-center",children:[(0,l.jsx)(m.QAE,{className:"fs-2 ".concat(e&&"me-3"," me-sm-0")}),(0,l.jsx)("div",{className:"ms-1 ".concat(e&&"d-none"," d-sm-block"),children:"Ustawienia"})]})})},p=function(){return{dataSidebarNavItems:[!(0,i.Z)().isMonthInURL&&(0,l.jsx)(u,{}),(0,l.jsx)(f,{})]}},v=t(6910),x=t(4604),j=function(e){var n=p().dataSidebarNavItems,t=(0,v.F_)(x.I8);return(0,r.Z)(t,1)[0]?(0,l.jsx)("nav",{children:(0,l.jsx)(a.Z,{className:e.display,children:n.map((function(e,n){return(0,l.jsx)(a.Z.Item,{className:"bg-transparent border-0 text-dark p-0 ms-2",children:e},n)}))})}):(0,l.jsx)(l.Fragment,{})}},3205:function(e,n,t){var r=t(7689);n.Z=function(e){return{inPathname:(0,r.TH)().pathname.includes(e)}}},9065:function(e,n,t){var r=t(7689);n.Z=function(){var e=(0,r.TH)().pathname.split("/").slice(-1)[0],n=null===e||void 0===e?void 0:e.slice(0,4),t=null===e||void 0===e?void 0:e.slice(-2);return{monthURL:e,yearFromURL:n,monthFromURL:t,isMonthInURL:/^\d{4}-\d{2}$/.test(e)}}},9983:function(e,n,t){t.d(n,{w_:function(){return l}});var r=t(2791),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),s=function(){return s=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},s.apply(this,arguments)},o=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t};function c(e){return e&&e.map((function(e,n){return r.createElement(e.tag,s({key:n},e.attr),c(e.child))}))}function l(e){return function(n){return r.createElement(u,s({attr:s({},e.attr)},n),c(e.child))}}function u(e){var n=function(n){var t,a=e.attr,i=e.size,c=e.title,l=o(e,["attr","size","title"]),u=i||n.size||"1em";return n.className&&(t=n.className),e.className&&(t=(t?t+" ":"")+e.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,l,{className:t,style:s(s({color:e.color||n.color},n.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return n(e)})):n(a)}},7462:function(e,n,t){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=172.ea169d43.chunk.js.map