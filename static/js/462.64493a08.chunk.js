"use strict";(self.webpackChunkgodziny=self.webpackChunkgodziny||[]).push([[462],{5452:function(n,t,e){var r=e(5048),i=e(6579),a=e(7064),s=e(184);t.Z=function(){var n=(0,r.I0)(),t=(0,r.v9)((function(n){return n.alert})).header;return t?(0,s.jsx)(i.Z,{action:function(){n((0,a.VG)(""))},isPrinted:!0,header:t}):null}},6579:function(n,t,e){e.d(t,{Z:function(){return u}});var r=e(7064),i=e(5048),a=e(3360),s=e(184),o=function(n){return(0,s.jsx)(a.Z,{id:"noButton",className:"_radius bg-primary border-0 px-5 ms-4",onClick:n.action,children:"Ok"})},c=function(n){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{id:"noButton",className:"_radius bg-dark border-0 px-4 px-sm-5",children:"Nie"}),(0,s.jsx)(a.Z,{onClick:n.action,className:"_radius bg-primary border-0 px-4 px-sm-5 ms-4",children:"Tak"})]})},u=(0,e(2791).memo)((function(n){var t=(0,i.I0)();return n.isPrinted?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{id:"opacityContainer",className:"fixed-top _d-center _alert",onClick:function(e){var i;["opacityContainer","noButton"].includes(null===(i=e.target)||void 0===i?void 0:i.id)&&(null!==n&&void 0!==n&&n.setIsPrinted&&(null===n||void 0===n||n.setIsPrinted(!1)),t((0,r.VG)("")))},children:(0,s.jsxs)("div",{className:"p-5 bg-white _radius text-center fs-2 fw-medium _anim-dropDown",children:[n.header,(0,s.jsx)("div",{className:"_w-fitContent m-auto mt-4",children:n.header.includes("Usun\u0105\u0107")?(0,s.jsx)(c,{action:n.action}):(0,s.jsx)(o,{action:n.action})})]})})}):null}))},5208:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var r=e(2791),i=e(5048),a=e(3920),s=e(9439),o=e(2685),c=e(3003),u=function(){var n=(0,o.iH)(c.Fs),t=(0,r.useState)(""),e=(0,s.Z)(t,2),i=e[0],a=e[1],u=(0,r.useState)([]),l=(0,s.Z)(u,2),d=l[0],m=l[1];return(0,r.useEffect)((function(){var t=(0,o.jM)(n,(function(n){var t=[],e=[];null===n||void 0===n||n.forEach((function(n){var r=n.key;t.push(r);var i=(0,o.iH)(c.Fs,"".concat(r));(0,o.jM)(i,(function(n){var t=[];null===n||void 0===n||n.forEach((function(n){var e=n.key;t.push(e.slice(6))})),e.push(t)}),(function(n){console.log("pierwszy"),a("B\u0142\u0105d. Od\u015bwie\u017c stron\u0119")}))}));var r=[].concat(e).map((function(n,e){return n.map((function(n){return t[e]+"-"+n}))})).flat().reverse();m(r)}),(function(n){console.log("dtugi"),a("B\u0142\u0105d. Od\u015bwie\u017c stron\u0119")}));return function(){t()}}),[]),{databaseListMonths:d,error:i}},l=function(){var n=(0,i.I0)(),t=u(),e=t.databaseListMonths,s=t.error;(0,r.useEffect)((function(){n((0,a.eT)(e)),n((0,a.V2)(s))}),[e,n])},d=e(6021),m=e(4832),f=function(){var n=(0,i.I0)(),t=(0,d.xY)(),e=t.data,a=t.error,s=t.isLoading;(0,r.useEffect)((function(){n((0,m.Kx)(e)),n((0,m.qF)(a)),n((0,m.iP)(s))}),[e,a,s,n])},h=e(4779),v=e(3360),p=e(6910),x=e(805),j=e(6931),g=e(5452),b=e(6355),N=e(184),y=function(){var n=(0,j.Z)(["202"]).isPath;return(0,N.jsxs)("div",{className:" d-flex align-items-center text-light-emphasis w-100",children:[(0,N.jsx)(b.m3W,{className:"fs-2 text-icons-primary "}),(0,N.jsx)("span",{className:"ms-1 ".concat(n?"_iconLogout":""),children:"Wyloguj"})]})},Z=e(7689),w=e(7064),_=function(){var n=(0,i.I0)(),t=(0,r.useState)(!1),e=(0,s.Z)(t,2),a=e[0],o=e[1],u=(0,Z.s0)();return{isLoading:a,logout:function(){o(!0),c.I8.signOut().then((function(){u("/")})).catch((function(t){n((0,w.VG)(t.message))})).finally((function(){o(!1)}))}}},k=function(){var n=_(),t=n.isLoading,e=n.logout,r=(0,x.Z)(t,(0,N.jsx)(y,{})).btnContent,i=(0,p.F_)(c.I8),a=(0,s.Z)(i,1)[0],o=(0,j.Z)(["ustawienia","202"]).isPath;return a&&o?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(g.Z,{}),(0,N.jsx)(v.Z,{onClick:e,className:"bg-transparent border-0 p-0 ms-2 me-3",disabled:t,children:r})]}):null},I=e(5705),O=e(4446),C=e(3994),P=function(){var n=(0,i.I0)(),t=(0,I.u6)().values;return(0,r.useEffect)((function(){n((0,C.j6)(t.searchedName))}),[t.searchedName]),null},S=function(){var n=(0,i.v9)((function(n){return n.listUsers})).listUsers,t=n||[],e=null===t||void 0===t?void 0:t.map((function(n){return n.userName}));return{dataInputsSelect:[{name:"searchedName",firstOption:"".concat(0===e.length?"Brak danych":"Szukaj"),options:e}]}},E=function(){return{initialValues:{searchedName:""},onSubmit:function(){}}},F=function(){var n=S().dataInputsSelect,t=E(),e=t.initialValues,r=t.onSubmit,i=(0,p.F_)(c.I8),a=(0,s.Z)(i,1)[0],o=(0,j.Z)(["202"]).isPath;return a&&o?(0,N.jsx)(I.J9,{initialValues:e,onSubmit:r,children:(0,N.jsxs)(I.l0,{className:"_formSearchContext",children:[(0,N.jsx)("div",{className:"_formSearchContext__select ms-3 m-md-auto",children:(0,N.jsx)(O.Z,{inputsData:n,padding:"ps-4 text-start",inputIcon:!0})}),(0,N.jsx)(P,{})]})}):null},L=function(){var n=(0,p.F_)(c.I8),t=(0,s.Z)(n,1)[0],e=(0,j.Z)(["ustawienia","202"]).isPath,r=t&&e?"d-none d-md-block":"_headerName__outLoged";return(0,N.jsx)("div",{className:"_headerName ".concat(r," ps-3 ps-lg-4 "),children:"OZZ Inicjatywa Pracownicza"})},z=function(){return f(),l(),(0,N.jsxs)("header",{className:"w-100 d-flex align-items-center border-bottom fs-3 position-relative _header",children:[(0,N.jsx)(L,{}),(0,N.jsx)(F,{}),(0,N.jsxs)("div",{className:"position-absolute top-0 d-flex h-100 end-0",children:[(0,N.jsx)(h.Z,{styles:"d-flex align-items-center flex-row h-100 d-md-none"}),(0,N.jsx)(k,{})]})]})}},5212:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(184),i=function(n){return(0,r.jsx)("div",{className:"text-danger d-block mt-0 fs-5 ps-2 _inputError",children:n.touched[n.value]&&n.errors[n.value]&&n.errors[n.value]})}},4446:function(n,t,e){e.d(t,{Z:function(){return u}});var r=e(5705),i=e(2936),a=e(5212),s=e(6355),o=e(184),c=function(){return(0,o.jsx)("div",{className:"position-absolute z-3 ms-1 pt-1",children:(0,o.jsx)(s.U41,{className:"text-light-emphasis"})})},u=function(n){var t=(0,r.u6)(),e=t.errors,s=t.touched,u=t.handleBlur,l=t.setFieldValue,d=function(n){return"Brak danych"===n?"text-danger":"text-light-emphasis "};return(0,o.jsxs)("div",{className:"position-relative",children:[n.inputIcon&&(0,o.jsx)(c,{}),n.inputsData.map((function(t){var r=t.name,c=t.firstOption,m=t.isErrorPrint,f=t.options;return(0,o.jsxs)(i.Z.Group,{className:"mt-2 _inputSelect",children:[(0,o.jsxs)(i.Z.Select,{id:r,name:r,onChange:function(n){return l(r,n.target.value)},onBlur:u,size:"sm",className:" _fs-primary border bg-secondary-light _cursor-pointer _inputSelect position-relative  ".concat(d(c)," ").concat(n.padding),children:[(0,o.jsx)("option",{value:c,children:c}),null===f||void 0===f?void 0:f.map((function(n){return(0,o.jsx)("option",{value:n,children:n},n)}))]}),m&&(0,o.jsx)(a.Z,{value:r,errors:e,touched:s})]},r)}))]})}},4779:function(n,t,e){e.d(t,{Z:function(){return g}});var r=e(9439),i=e(4418),a=e(9065),s=e(390),o=e(3360),c=e(828),u=e(184),l=function(){var n=(0,s.lX)();return(0,u.jsxs)(o.Z,{onClick:function(){n.back()},className:"text-light-emphasis p-0 bg-transparent border-0 w-100 d-flex align-items-center_cursor-pointer",children:[(0,u.jsx)(c.Fjg,{className:" text-icons-primary  me-1 align-self-center "})," ","Wr\xf3\u0107"]})},d=e(1087),m=e(8820),f=e(6931),h=function(){var n=(0,f.Z)(["ustawienia"]).isPath;return(0,u.jsx)(m.QAE,{className:"fs-2 text-icons-primary ".concat(!n&&"me-3"," me-sm-0")})},v=function(){var n=(0,f.Z)(["202"]).isPath;return(0,u.jsx)(d.OL,{to:"/ustawienia",className:function(n){return n.isActive?"text-primary text-decoration-none":"text-light-emphasis text-decoration-none"},end:!0,children:(0,u.jsxs)("div",{className:"_align-center",children:[(0,u.jsx)(h,{}),(0,u.jsx)("div",{className:"ms-1 ".concat(n&&"d-none"," d-sm-block"),children:"Ustawienia"})]})})},p=function(){return{dataSidebarNavItems:[!(0,a.Z)().isMonthInURL&&(0,u.jsx)(l,{}),(0,u.jsx)(v,{})]}},x=e(6910),j=e(3003),g=function(n){var t=p().dataSidebarNavItems,e=(0,x.F_)(j.I8),a=(0,r.Z)(e,1)[0],s=(0,f.Z)(["202","ustawienia"]).isPath;return a&&s?(0,u.jsx)("nav",{children:(0,u.jsx)(i.Z,{className:n.styles,children:t.map((function(n,t){return(0,u.jsx)(i.Z.Item,{className:"bg-transparent border-0 text-dark p-0 ms-2",children:n},t)}))})}):null}},805:function(n,t,e){var r=e(4849),i=e(184);t.Z=function(n,t){var e=t;return n&&(e=(0,i.jsx)(r.Z,{animation:"border",size:"sm",variant:"primary",className:"text-dark",children:(0,i.jsx)("span",{className:"visually-hidden",children:"Loading..."})})),{btnContent:e}}},9065:function(n,t,e){var r=e(7689);t.Z=function(){var n=(0,r.TH)().pathname.split("/").slice(-1)[0],t=null===n||void 0===n?void 0:n.slice(0,4),e=null===n||void 0===n?void 0:n.slice(-2);return{monthURL:n,yearFromURL:t,monthFromURL:e,isMonthInURL:/^\d{4}-\d{2}$/.test(n)}}},9983:function(n,t,e){e.d(t,{w_:function(){return u}});var r=e(2791),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(i),s=function(){return s=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},s.apply(this,arguments)},o=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]])}return e};function c(n){return n&&n.map((function(n,t){return r.createElement(n.tag,s({key:t},n.attr),c(n.child))}))}function u(n){return function(t){return r.createElement(l,s({attr:s({},n.attr)},t),c(n.child))}}function l(n){var t=function(t){var e,i=n.attr,a=n.size,c=n.title,u=o(n,["attr","size","title"]),l=a||t.size||"1em";return t.className&&(e=t.className),n.className&&(e=(e?e+" ":"")+n.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,u,{className:e,style:s(s({color:n.color||t.color},t.style),n.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),n.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(n){return t(n)})):t(i)}},7462:function(n,t,e){function r(){return r=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},r.apply(this,arguments)}e.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=462.64493a08.chunk.js.map