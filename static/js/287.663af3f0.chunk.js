"use strict";(self.webpackChunkgodziny=self.webpackChunkgodziny||[]).push([[287],{380:function(n,e,t){var r=t(184);e.Z=function(){return(0,r.jsx)("div",{className:"border d-md-none"})}},1014:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(3360),s=t(7064),i=t(5048),a=t(184),o=function(n){var e=(0,i.I0)();return n.isPrinted?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{id:"opacityContainer",className:"fixed-top _d-center _alert",onClick:function(t){var r;["opacityContainer","noButton"].includes(null===(r=t.target)||void 0===r?void 0:r.id)&&(null!==n&&void 0!==n&&n.setIsPrinted&&(null===n||void 0===n||n.setIsPrinted(!1)),e((0,s.VG)("")))},children:(0,a.jsxs)("div",{className:"p-5 bg-white _radius text-center fs-2 fw-medium _anim-dropDown",children:[n.header,(0,a.jsx)("div",{className:"_w-fitContent m-auto mt-4",children:n.header.includes("Usun\u0105\u0107")?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{id:"noButton",className:"_radius bg-dark border-0 px-4 px-sm-5",children:"Nie"}),(0,a.jsx)(r.Z,{onClick:n.action,className:"_radius bg-primary border-0 px-4 px-sm-5 ms-4 border ",children:"Tak"})]}):(0,a.jsx)(r.Z,{id:"noButton",className:"_radius _fs-3 bg-primary border-0 px-5 ms-4 border ",onClick:n.action,children:"Ok"})})]})})}):null}},6094:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(3360),s=t(1100),i=t(184),a=function(n){var e=n.text?(0,i.jsx)("div",{children:n.text}):(0,i.jsx)("div",{children:"Zapisz"}),t=(0,s.Z)(null===n||void 0===n?void 0:n.isLoading,e).btnContent;return(0,i.jsxs)(r.Z,{type:"submit",variant:"primary",disabled:null===n||void 0===n?void 0:n.isLoading,className:"_d-center w-50 p-0 py-1 mt-2 ms-auto _radius  _fw-semiBold _fs-primary _buttonForm position-relative ".concat(n.styles),children:[(0,i.jsx)("div",{className:"invisible",children:"Z"}),(0,i.jsx)("div",{className:"_buttonForm__content",children:t})]})}},8762:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(6856),s=t(184),i=function(n){return(0,s.jsx)(r.x3N,{className:"fs-1 _fw-light _collapseArrow h-100 ".concat(n.isOpen?"_collapseArrow--rotate":"")})}},4954:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(9439),s=t(2791),i=t(4604),a=function(){var n=(0,s.useState)(61),e=(0,r.Z)(n,2),t=e[0],a=e[1],o=0,l=function(){o=Date.now()+3e5};return(0,s.useEffect)((function(){var n=setInterval((function(){!function(){var n=Math.max(0,Math.floor((o-Date.now())/1e3));a(n),o<Date.now()&&i.I8.signOut()}()}),1e3);return function(){return clearInterval(n)}}),[]),(0,s.useEffect)((function(){l();var n=["mousemove","keypress","click","scroll"];return n.map((function(n){return document.addEventListener(n,l)})),function(){n.map((function(n){return document.addEventListener(n,l)}))}}),[]),{secondsRemaining:t}},o=t(184),l=function(){var n=a().secondsRemaining;return(0,o.jsx)(o.Fragment,{children:n+1<=60&&(0,o.jsx)("div",{className:"fixed-top _d-center p-5 _autoLogout",children:(0,o.jsxs)("div",{className:"p-4 bg-white text-center rounded-1 _fs-primary fw-semiBold _anim-dropDown",children:["Wylogowanie nast\u0105pi za",(0,o.jsxs)("div",{className:"d-flex mx-auto _w-fitContent",children:[n+1," ",(0,o.jsx)("div",{children:"\xa0s."})]})]})})})},u=function(n){return(0,o.jsxs)("main",{className:"d-flex m-0 bg-secondary _indexContainer ",children:[(0,o.jsx)("aside",{className:"_indexContainer__aside"}),(0,o.jsxs)("div",{className:"_indexContainer__rightSide",children:[(0,o.jsx)(l,{}),n.children]})]})}},5212:function(n,e,t){t.d(e,{Z:function(){return s}});var r=t(184),s=function(n){return(0,r.jsx)("div",{className:"text-danger d-block mt-0 fs-5 _inputError",children:n.touched[n.value]&&n.errors[n.value]&&n.errors[n.value]})}},3961:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(5705),s=t(2936),i=t(5212),a=t(9439),o=t(2791),l=t(184),u=function(n){var e=(0,o.useState)(!0),t=(0,a.Z)(e,2),r=t[0],s=t[1];return(0,l.jsx)(l.Fragment,{children:r&&(0,l.jsx)("div",{onClick:function(){s(!1)},className:"_inputsCover w-100 _d-center  bg-secondary-light _fs-primary text-light-emphasis  _radius border",children:n.text})})},c=function(n){return void 0===n.labelCover?(0,l.jsx)(l.Fragment,{}):(0,l.jsx)(s.Z.Label,{htmlFor:n.value,className:"position-absolute w-100",children:(0,l.jsx)(u,{text:n.labelCover})})},d=function(n){var e=(0,r.u6)(),t=e.values,a=e.handleBlur,o=e.setFieldValue,u=e.errors,d=e.touched;return(0,l.jsx)(l.Fragment,{children:n.inputsData.map((function(n){var e=n.value,r=n.labelCover,m=n.type,v=n.isErrorPrint,x=n.min,f=n.max,h=n.placeholder,p=n.styles;return(0,l.jsxs)(s.Z.Group,{className:" mt-2 position-relative",children:[(0,l.jsx)(c,{value:e,labelCover:r}),(0,l.jsx)(s.Z.Control,{id:e,type:m,name:e,value:t[e],onChange:function(n){return o(e,n.target.value)},onBlur:a,min:x,max:f,placeholder:h,size:"sm",className:"text-light-emphasis bg-secondary-light _radius w-100 text-capitalize _cursor-pointer _fs-primary text-center \n                   ".concat("color"===m?"_inputsColor p-0":"py-2"," ").concat(p,"\n                ")}),v&&(0,l.jsx)(i.Z,{value:e,errors:u,touched:d})]},e)}))})}},7305:function(n,e,t){var r=t(4418),s=t(995),i=t(184);e.Z=function(n){return n.noData?(0,i.jsx)(r.Z.Item,{className:"".concat(s.l," ").concat(n.styles," text-warning"),children:"Brak danych"}):null}},995:function(n,e,t){t.d(e,{l:function(){return r}});var r="p-0 mb-3 ps-2 pe-0 py-2  _fs-primary _radius"},4256:function(n,e,t){var r=t(184);e.Z=function(n){return(0,r.jsx)(r.Fragment,{children:n.styles((0,r.jsx)("div",{className:"text-danger fs-1 text-center",children:"B\u0142\u0105d. Od\u015bwie\u017c stron\u0119"}))})}},3464:function(n,e,t){var r=t(4849),s=t(184);e.Z=function(n){return(0,s.jsx)(s.Fragment,{children:n.styles((0,s.jsx)(r.Z,{animation:"border",variant:"primary",className:"fs-5",children:(0,s.jsx)("span",{className:"visually-hidden",children:"Loading..."})}))})}},7359:function(n,e,t){var r=t(9439),s=t(2791),i=t(1014),a=t(184);e.Z=function(n,e){var t=(0,s.useState)(!1),o=(0,r.Z)(t,2),l=o[0],u=o[1];return{handleAlert:function(){u(!0)},alert:(0,a.jsx)(i.Z,{action:n,isPrinted:l,setIsPrinted:u,header:e})}}},1100:function(n,e,t){var r=t(4849),s=t(184);e.Z=function(n,e){var t=e;return n&&(t=(0,s.jsx)(r.Z,{animation:"border",size:"sm",variant:"primary",className:"text-dark",children:(0,s.jsx)("span",{className:"visually-hidden",children:"Loading..."})})),{btnContent:t}}},2218:function(n,e,t){var r=t(3433),s=t(5048);e.Z=function(){var n,e=(0,s.v9)((function(n){return n.listMonths})).listMonths;return{databaseMonthsDatesToString:e&&(null===(n=(0,r.Z)(e))||void 0===n?void 0:n.map((function(n){var e=new Date(n);return new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}).format(e)})))}}},8287:function(n,e,t){t.r(e),t.d(e,{default:function(){return tn}});var r=t(5048),s=t(4954),i=t(4256),a=t(3464),o=t(2050),l=t(4418),u=t(7305),c=t(184),d=function(n){var e,t,r=!n.listContent||0===(null===(e=n.listContent)||void 0===e?void 0:e.length);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("h3",{className:"fs-2 py-4 text-center _fw-regular",children:[n.header,": ",null===(t=n.listContent)||void 0===t?void 0:t.length]}),(0,c.jsxs)(l.Z,{className:"border-0 p-0",children:[(0,c.jsx)(u.Z,{noData:r}),n.children]})]})},m=t(2218),v=t(3360),x=t(211),f=t(7425),h=t(1100),p=t(7359),j=function(n){var e=(0,r.v9)((function(n){return n.listMonths})).listMonths;return{monthDate:e&&e[n]}},g=t(4165),Z=t(5861),b=t(9439),_=t(3920),N=t(7615),y=t(2791),w=t(8755),C=function(n){var e=(0,r.I0)(),t=j(n).monthDate,s=(0,r.v9)((function(n){return n.listMonths})).listMonths,i=(0,N.bw)(),a=(0,b.Z)(i,2),o=a[0],l=a[1],u=function(){var n=(0,Z.Z)((0,g.Z)().mark((function n(){var r,i;return(0,g.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t||null===s||void 0===s||!s.includes(t)){n.next=6;break}return e((0,_.fY)(-1)),r=t.slice(0,4),i=t.slice(-2),n.next=6,o({year:r,month:i});case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,y.useEffect)((function(){e((0,w.oI)(l.isError))}),[l.isError]),{deleteMonthAsync:u,success:l}},k=function(n){var e=C(n.idx),t=e.deleteMonthAsync,s=e.success,i=(0,h.Z)(s.isLoading,(0,c.jsx)(f.GnT,{className:"text-light-emphasis fs-2 ms-auto"})).btnContent,a=j(n.idx).monthDate,o=(0,r.v9)((function(n){return n.listMonths})).listMonths,l=(0,p.Z)(t,"Usun\u0105\u0107 miesi\u0105c?"),u=l.handleAlert,d=l.alert,m=o&&a===o[n.idx],x=(0,c.jsx)(f.GnT,{className:"text-light-emphasis fs-2 ms-auto"});return(0,c.jsxs)(c.Fragment,{children:[d,(0,c.jsx)(v.Z,{disabled:s.isLoading,onClick:u,className:"py-0 _d-center ms-auto bg-transparent border-0",children:m?i:x})]})},H=t(828),F=t(1087),M=t(9622),I=function(n){var e=(0,r.v9)((function(n){return n.listMonths})).listMonths,t=(0,m.Z)().databaseMonthsDatesToString,s=t&&(0,M.f)(t[n.idx]);return(0,c.jsx)("div",{className:"_monthTitle _fs-primary",children:(0,c.jsxs)(F.rU,{to:"/".concat(null===e||void 0===e?void 0:e[n.idx]),className:"text-decoration-none _fw-regular text-dark _align-center",children:[(0,c.jsx)(H.Fjg,{className:" text-light-emphasis me-1"}),(0,c.jsx)("div",{className:"_text-noWrap",children:s})]})})},L=t(8762),D=t(1175),U=function(n,e){var t=(0,r.I0)(),s=(0,N._r)({year:null!==n&&void 0!==n?n:"",month:null!==e&&void 0!==e?e:""}),i=s.data,a=s.isLoading,o=s.error;(0,y.useEffect)((function(){t((0,D.PA)(i)),t((0,D.le)(o)),t((0,D.rr)(a))}),[i,o,a,t])},E=t(5705),B=t(6094),T=t(2936),z=function(n){var e=(0,E.u6)(),t=e.values,r=e.handleBlur,s=e.setFieldValue,i=t.allHours/3.2,a="linear-gradient(to right,  rgb(110, 110, 110)".concat(i,"%, rgb(239, 239, 239) ").concat(i,"%)");return(0,c.jsx)(c.Fragment,{children:n.inputsValues.map((function(n){return(0,c.jsx)(T.Z.Group,{className:"mt-2 d-flex align-items-center w-100",children:(0,c.jsx)(T.Z.Range,{name:n,min:0,max:320,value:t[n],onChange:function(e){return s(n,e.target.value)},onBlur:r,className:"form-range _inputsRange medium position-relative",style:{background:a}})},n)}))})},A=function(n){var e=(0,E.u6)().values,t=(0,r.v9)((function(n){return n.calcHours})).calcHours,s="";return t&&(null===t||void 0===t?void 0:t.submittedHours)+(null===t||void 0===t?void 0:t.acceptedHours)>+(null===e||void 0===e?void 0:e.allHours)&&(s="Min. ".concat((null===t||void 0===t?void 0:t.submittedHours)+(null===t||void 0===t?void 0:t.acceptedHours)," h")),(0,c.jsx)("div",{className:"text-danger fs-5",children:s})},S=t(3961),P=function(){var n=(0,r.v9)((function(n){return n.calcHours})).calcHours;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"_d-between align-items-center fs-4 mb-3 position-relative",children:[(0,c.jsx)("div",{className:"",children:"0 h "}),(0,c.jsxs)("div",{className:"_formHoursTop__summary",children:["Zapisane: ",null===n||void 0===n?void 0:n.allHours," h"]}),(0,c.jsxs)("div",{className:"d-flex align-items-center ms-sm-4 _formHoursTop__input",children:[(0,c.jsx)(S.Z,{inputsData:[{value:"allHours",type:"number",isErrorPrint:!1,styles:"ps-1 pt-0 pb-0 pl-0 fs-4 mt-0 _fw-semiBold"}]})," \xa0",(0,c.jsx)("div",{className:"align-self-center mt-2",children:"h"})]}),(0,c.jsx)("div",{children:"320 h"})]})})},V=t(1413),G=function(n,e){var t=(0,N.uZ)(),s=(0,b.Z)(t,2),i=s[0],a=s[1],o=(0,r.v9)((function(n){return n.calcHours})).calcHours,l=function(){var t=(0,Z.Z)((0,g.Z)().mark((function t(r){return(0,g.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o){t.next=3;break}if(!((null===o||void 0===o?void 0:o.submittedHours)+(null===o||void 0===o?void 0:o.acceptedHours)>+(null===r||void 0===r?void 0:r.allHours))){t.next=3;break}return t.abrupt("return");case 3:if(t.t0=o&&r.allHours&&n&&e,!t.t0){t.next=7;break}return t.next=7,i({year:n,month:e,calcHours:(0,V.Z)((0,V.Z)({},o),{},{allHours:+r.allHours,currentHours:+r.allHours-o.acceptedHours-o.submittedHours})});case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return{initialValues:{allHours:0},onSubmit:l,success:a}},O=function(n){var e,t,r=j(n.idx).monthDate,s=null!==(e=null===r||void 0===r?void 0:r.slice(0,4))&&void 0!==e?e:"",i=null!==(t=null===r||void 0===r?void 0:r.slice(5))&&void 0!==t?t:"",a=G(s,i),o=a.initialValues,l=a.onSubmit,u=a.success;return(0,c.jsx)(E.J9,{initialValues:o,onSubmit:l,children:(0,c.jsxs)(E.l0,{className:"py-2 pe-2",children:[(0,c.jsx)(P,{}),(0,c.jsx)(z,{inputsValues:["allHours"]}),(0,c.jsxs)("div",{className:"_d-between align-items-center mt-2 ",children:[(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)(A,{})}),(0,c.jsx)(B.Z,{isLoading:u.isLoading})]})]})})},R=function(n){return(0,c.jsx)("div",{className:"_d-center fs-6 _requestContainer",children:n})},W=function(n){var e,t,s=j(n.idx).monthDate,o=null!==(e=null===s||void 0===s?void 0:s.slice(0,4))&&void 0!==e?e:"",l=null!==(t=null===s||void 0===s?void 0:s.slice(5))&&void 0!==t?t:"";U(o,l);var u,d=(0,r.v9)((function(n){return n.calcHours})),m=d.calcHoursIsLoading,v=d.calcHoursError;return u=m?(0,c.jsx)(a.Z,{styles:R}):v?(0,c.jsx)(i.Z,{styles:R}):(0,c.jsx)(O,{idx:n.idx}),(0,c.jsxs)(c.Fragment,{children:[" ",u," "]})},Y=function(n){var e=(0,r.I0)(),t=(0,r.v9)((function(n){return n.listMonths})).openCollapseIndex,s=n.idx===t;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"d-flex align-items-center",children:[(0,c.jsx)(I,{idx:n.idx}),(0,c.jsxs)(v.Z,{"aria-expanded":s,"aria-controls":"example-collapse-text",size:"sm",onClick:function(){var t;t=n.idx,e((0,_.fY)(t)),s&&e((0,_.fY)(-1))},className:"_radius _text-noWrap _fs-primary _fw-semiBold border-0 p-0 ps-1 pe-4 position-relative",children:["Zapisz godziny",(0,c.jsx)(L.Z,{isOpen:s})]}),(0,c.jsx)(k,{idx:n.idx})]}),(0,c.jsx)(x.Z,{in:s,children:(0,c.jsx)("div",{className:"pe-1",children:s?(0,c.jsx)(W,{idx:n.idx}):(0,c.jsx)("div",{style:{height:"88px"}})})})]})},q=t(995),J=function(){var n=(0,m.Z)().databaseMonthsDatesToString;return(0,c.jsx)(c.Fragment,{children:null===n||void 0===n?void 0:n.map((function(n,e){return(0,c.jsx)(l.Z.Item,{className:q.l,children:(0,c.jsx)(Y,{idx:e})},n)}))})},K=t(6021),Q=function(n){var e=(0,r.v9)((function(n){return n.listUsers})).listUsers,t=(0,K.I1)(),s=(0,b.Z)(t,2),i=s[0],a=s[1],o=function(){var t=(0,Z.Z)((0,g.Z)().mark((function t(){var r;return(0,g.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=6;break}if(r=null===e||void 0===e?void 0:e.filter((function(e){return(null===e||void 0===e?void 0:e.userName)!==n})),t.t0=r,!t.t0){t.next=6;break}return t.next=6,i(r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{deleteUserAsync:o,success:a}},X=function(n){var e=(0,y.useState)(""),t=(0,b.Z)(e,2),r=t[0],s=t[1],i=Q(r),a=i.deleteUserAsync,o=i.success,l=(0,h.Z)(o.isLoading,(0,c.jsx)(f.GnT,{className:"text-light-emphasis fs-2  ms-auto"})).btnContent,u=(0,p.Z)(a,"Usun\u0105\u0107 u\u017cytkownika ?"),d=u.alert,m=u.handleAlert,x=r===n.user.userName,j=(0,c.jsx)(f.GnT,{className:"text-light-emphasis fs-2 ms-auto"});return(0,c.jsxs)(c.Fragment,{children:[d,(0,c.jsx)(v.Z,{onClick:function(){var e,t;t=null===(e=n.user)||void 0===e?void 0:e.userName,s(t),m()},disabled:o.isLoading,className:"py-0 _d-center ms-auto bg-transparent border-0",children:x?l:j})]})},$=function(){var n=(0,r.v9)((function(n){return n.listUsers})).listUsers;return(0,c.jsx)(c.Fragment,{children:null===n||void 0===n?void 0:n.map((function(n){return(0,c.jsxs)(l.Z.Item,{className:"".concat(q.l," d-flex"),style:{borderLeft:"8px solid ".concat(n.userColor),color:n.userColor},children:[(0,c.jsx)("div",{className:"ms-2",children:n.userName}),(0,c.jsx)(X,{user:n})]},n.userName)}))})},nn=t(380),en=function(){var n=(0,r.v9)((function(n){return n.listMonths})).listMonths,e=(0,r.v9)((function(n){return n.listUsers})).listUsers;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"_settingsContent pb-4",children:[(0,c.jsx)(nn.Z,{}),(0,c.jsx)(d,{header:"Zapisane miesi\u0105ce",listContent:n,children:(0,c.jsx)(J,{})}),(0,c.jsx)(d,{header:"Zapisani u\u017cytkownicy",listContent:e,children:(0,c.jsx)($,{})})]})})},tn=function(){var n,e=(0,r.v9)((function(n){return n.listUsers})),t=e.listUsersError,l=e.listUsersIsLoading,u=(0,r.v9)((function(n){return n.listMonths})).listMonthsError,d=(0,r.v9)((function(n){return n.monthPanel})).updateMonthError;return n=l?(0,c.jsx)(a.Z,{styles:o.u}):d||u||t?(0,c.jsx)(i.Z,{styles:o.u}):(0,c.jsx)(en,{}),(0,c.jsx)(s.Z,{children:n})}},9622:function(n,e,t){t.d(e,{f:function(){return r}});var r=function(n){return n.toLowerCase().split(" ").map((function(n){var e;return(null===n||void 0===n||null===(e=n.charAt(0))||void 0===e?void 0:e.toUpperCase())+n.slice(1)})).join(" ")}},2050:function(n,e,t){t.d(e,{u:function(){return s}});var r=t(184),s=function(n){return(0,r.jsx)("div",{className:"fixed-top _d-center fs-4 _requestContainer",style:{width:"100vw",height:"100vh",zIndex:"1060",backgroundColor:"rgba(255,255,255,0.4)"},children:n})}}}]);
//# sourceMappingURL=287.663af3f0.chunk.js.map