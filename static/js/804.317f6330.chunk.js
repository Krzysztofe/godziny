"use strict";(self.webpackChunkgodziny=self.webpackChunkgodziny||[]).push([[804],{871:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(1419),r=t(9439),s=t(2791),a=t(3003),o=function(){var e=(0,s.useState)(61),n=(0,r.Z)(e,2),t=n[0],i=n[1],o=0,l=function(){o=Date.now()+3e5};return(0,s.useEffect)((function(){var e=setInterval((function(){!function(){var e=Math.max(0,Math.floor((o-Date.now())/1e3));i(e),o<Date.now()&&a.I8.signOut()}()}),1e3);return function(){return clearInterval(e)}}),[]),(0,s.useEffect)((function(){l();var e=["mousemove","keypress","click","scroll"];return e.map((function(e){return document.addEventListener(e,l)})),function(){e.map((function(e){return document.addEventListener(e,l)}))}}),[]),{secondsRemaining:t}},l=t(184),u=function(){var e=o().secondsRemaining;return o(),(0,l.jsx)("div",{children:e+1<=60&&(0,l.jsx)("div",{id:"opacityContainer",className:"fixed-top d-flex justify-content-center align-items-center ",style:{height:"100vh",zIndex:"1060",backgroundColor:"rgba(0,0,0,0.4)"},children:(0,l.jsxs)("div",{className:"p-4 bg-white rounded-1 fs-3 fw-medium alertAnimationDown",children:["Wylogowanie nast\u0105pi za",(0,l.jsxs)("div",{className:"d-flex mx-auto w-fit-content",children:[e+1," ",(0,l.jsx)("div",{children:"\xa0s."})]}),(0,l.jsx)("div",{className:"w-fit-content m-auto"})]})})})},c=function(e){var n=(0,i.Z)().windowWidth;return(0,l.jsxs)("main",{className:"d-flex backgroundImage m-0",style:{height:"100vh",overflow:"hidden",position:"relative"},children:[(0,l.jsx)("aside",{style:{width:n>=500?"30%":0,maxWidth:"250px",height:"100%"}}),(0,l.jsxs)("div",{className:"d-flex ps-1 flex-fill",style:{width:n>=500?"70%":"100%"},children:[(0,l.jsx)(u,{}),e.children]})]})}},1014:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(3360),r=t(5048),s=t(7064),a=t(184),o=function(e){var n=(0,r.I0)();return(0,a.jsx)(a.Fragment,{children:e.isPrinted?(0,a.jsx)("div",{id:"opacityContainer",className:"fixed-top d-flex justify-content-center align-items-center ",onClick:function(t){return function(t){var i,r;"opacityContainer"!==(null===(i=t.target)||void 0===i?void 0:i.id)&&"noButton"!==(null===(r=t.target)||void 0===r?void 0:r.id)||(null!==e&&void 0!==e&&e.setIsPrinted&&(null===e||void 0===e||e.setIsPrinted(!1)),n((0,s.VG)("")))}(t)},style:{height:"100vh",zIndex:"1060",backgroundColor:"rgba(0,0,0,0.4)"},children:(0,a.jsxs)("div",{className:"p-4 bg-white rounded-1 fs-3 fw-medium alertAnimationDown",children:[e.header,(0,a.jsx)("div",{className:"w-fit-content m-auto",children:e.header.includes("Usun\u0105\u0107")?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{id:"noButton",children:"Nie"}),(0,a.jsx)(i.Z,{onClick:e.action,className:"bg-danger ms-4 border ",children:"Tak"})]}):(0,a.jsx)(i.Z,{id:"noButton",onClick:e.action,children:"Ok"})})]})}):(0,a.jsx)(a.Fragment,{})})}},3175:function(e,n,t){var i=t(184);n.Z=function(e){return(0,i.jsx)("div",{className:"text-danger d-block mt-0 fs-8",style:{height:"0.7rem"},children:e.touched[e.value]&&e.errors[e.value]&&e.errors[e.value]})}},2015:function(e,n,t){var i=t(5705),r=t(3027),s=t(3175),a=t(184);n.Z=function(e){var n=(0,i.u6)(),t=n.values,o=n.handleBlur,l=n.setFieldValue,u=n.errors,c=n.touched;return(0,a.jsx)(a.Fragment,{children:e.inputsData.map((function(e){var n=e.value,i=e.label,d=e.type,m=e.isErrorPrint,h=e.min,v=e.max,f=e.placeholder;return(0,a.jsxs)(r.Z.Group,{children:[i&&(0,a.jsx)(r.Z.Label,{htmlFor:"date",className:"mb-0 fs-responsive fw-medium",children:i}),(0,a.jsx)(r.Z.Control,{id:n,type:d,name:n,value:t[n],onChange:function(e){return l(n,e.target.value)},onBlur:o,min:h,max:v,placeholder:f,size:"sm",className:"p-0 border border-primary shadow-sm w-100 text-capitalize ".concat("color"===d?"px-0":"px-1"),style:{minHeight:0}}),m&&(0,a.jsx)(s.Z,{value:n,errors:u,touched:c})]},n)}))})}},1100:function(e,n,t){var i=t(4849),r=t(184);n.Z=function(e,n){var t=n;return e.isLoading&&(t=(0,r.jsx)(i.Z,{animation:"border",size:"sm",variant:"secondary",children:(0,r.jsx)("span",{className:"visually-hidden",children:"Loading..."})})),{btnContent:t}}},2218:function(e,n,t){var i=t(3433),r=t(5048);n.Z=function(){var e,n=(0,r.v9)((function(e){return e.listMonths})).listMonths;return{databaseMonthsDatesToString:n&&(null===(e=(0,i.Z)(n))||void 0===e?void 0:e.map((function(e){var n=new Date(e);return new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}).format(n)})))}}},1419:function(e,n,t){var i=t(9439),r=t(2791);n.Z=function(){var e=(0,r.useState)(window.innerWidth),n=(0,i.Z)(e,2),t=n[0],s=n[1];return(0,r.useEffect)((function(){var e=function(){s(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),{windowWidth:t}}},7804:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var i=t(871),r=t(4849),s=t(5048),a=t(3940),o=t(23),l=t(184),u=function(e){var n,t,i;return 0!==(null===(n=e.listContent)||void 0===n?void 0:n.length)&&e.listContent||(i="Brak danych"),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h3",{className:"h6",children:[e.header,": ",null===(t=e.listContent)||void 0===t?void 0:t.length]}),(0,l.jsxs)(o.Z,{className:"border-0 p-0",children:[(0,l.jsx)(o.Z.Item,{className:"py-1 px-2 text-warning border-0",children:i}),e.children]})]})},c=t(1419),d=t(4165),m=t(5861),h=t(9439),v=t(2791),f=t(3360),x=t(7425),p=t(1014),g=t(1100),j=t(6021),w="shadow-sm p-0 mb-2 ps-2 pe-0 rounded-1",b=function(){var e=(0,j.I1)(),n=(0,h.Z)(e,2),t=n[0],i=n[1],r=(0,g.Z)(i,(0,l.jsx)(x.GnT,{className:"text-danger fs-5 ms-auto"})).btnContent,a=(0,s.v9)((function(e){return e.listUsers})).listUsers,u=(0,v.useState)(""),c=(0,h.Z)(u,2),b=c[0],Z=c[1],y=(0,v.useState)(!1),N=(0,h.Z)(y,2),C=N[0],k=N[1],H=function(){var e=(0,m.Z)((0,d.Z)().mark((function e(){var n;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=7;break}if(n=null===a||void 0===a?void 0:a.filter((function(e){return(null===e||void 0===e?void 0:e.userName)!==b})),e.t0=n,!e.t0){e.next=6;break}return e.next=6,t(n);case 6:k(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.Z,{action:H,isPrinted:C,setIsPrinted:k,header:"Usun\u0105\u0107 u\u017cytkownika"}),null===a||void 0===a?void 0:a.map((function(e){return(0,l.jsx)(o.Z.Item,{className:w,style:{backgroundColor:e.userColor,overflow:"hidden"},children:(0,l.jsxs)(f.Z,{onClick:function(){return function(e){Z(e),k(!0)}(e.userName)},disabled:i.isLoading,className:"w-100 d-flex justify-content-between align-items-center px-1 rounded-0 bg-white border-0",style:{color:e.userColor},children:[e.userName,b===e.userName?r:(0,l.jsx)(x.GnT,{className:"text-danger fs-5 ms-auto"})]})},e.userName)}))]})},Z=t(5705),y=t(8820),N=t(3027),C=function(e){var n=(0,Z.u6)(),t=n.values,i=n.handleBlur,r=n.setFieldValue,s=t.allHours/3.2,a="linear-gradient(to right, rgba(180,120,255) ".concat(s,"%, rgba(180,180,255) ").concat(s,"%)");return(0,l.jsx)(l.Fragment,{children:e.inputsValues.map((function(e){return(0,l.jsx)(N.Z.Group,{className:"mt-2 d-flex align-items-center w-100",children:(0,l.jsx)(N.Z.Range,{name:e,min:0,max:320,value:t[e],onChange:function(n){return r(e,n.target.value)},onBlur:i,className:"form-range custom-range medium",style:{height:10,background:a}})},e)}))})},k=function(e){var n,t,i,r,a=(0,Z.u6)().values,o=((0,s.v9)((function(e){return e.monthPanel})).month,"");e.calcHours&&((null===e||void 0===e||null===(n=e.calcHours)||void 0===n?void 0:n.submittedHours)+(null===e||void 0===e||null===(t=e.calcHours)||void 0===t?void 0:t.acceptedHours)>+(null===a||void 0===a?void 0:a.allHours)&&(o="Min. ".concat((null===e||void 0===e||null===(i=e.calcHours)||void 0===i?void 0:i.submittedHours)+(null===e||void 0===e||null===(r=e.calcHours)||void 0===r?void 0:r.acceptedHours)," h")));return(0,l.jsx)("div",{className:"text-danger fs-8",children:o})},H=t(2015),D=function(e){var n,t;e.isLoading?n=(0,l.jsx)(r.Z,{animation:"border",size:"sm",variant:"secondary",children:(0,l.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):n=null===e||void 0===e||null===(t=e.calcHours)||void 0===t?void 0:t.allHours;var i="fs-7 d-flex align-items-end";return(0,l.jsxs)("div",{className:"d-flex justify-content-between fw-medium ",children:[(0,l.jsx)("div",{className:i,children:"0 h"}),"Zapisane: ",n," h",(0,l.jsxs)("div",{className:"col-6 col-sm-5 d-flex",style:{width:"62px"},children:[(0,l.jsx)(H.Z,{inputsData:[{value:"allHours",type:"number",isErrorPrint:!1}]})," \xa0",(0,l.jsx)("div",{children:"h"})]}),(0,l.jsx)("div",{className:i,children:"320 h"})]})},M=t(1413),I=t(7615),S=function(e,n,t){var i=(0,I.uZ)(),r=(0,h.Z)(i,2),s=r[0],a=r[1],o=function(){var i=(0,m.Z)((0,d.Z)().mark((function i(r){return(0,d.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!e){i.next=3;break}if(!((null===e||void 0===e?void 0:e.submittedHours)+(null===e||void 0===e?void 0:e.acceptedHours)>+(null===r||void 0===r?void 0:r.allHours))){i.next=3;break}return i.abrupt("return");case 3:if(i.t0=e&&r.allHours&&n&&t,!i.t0){i.next=7;break}return i.next=7,s({year:n,month:t,calcHours:(0,M.Z)((0,M.Z)({},e),{},{allHours:+r.allHours,currentHours:+r.allHours-e.acceptedHours-e.submittedHours})});case 7:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}();return{initialValues:{allHours:0},onSubmit:o,success:a}},L=function(e){var n,t,i,r,s=null!==(n=null===(t=e.monthDate)||void 0===t?void 0:t.slice(0,4))&&void 0!==n?n:"",a=null!==(i=null===(r=e.monthDate)||void 0===r?void 0:r.slice(5))&&void 0!==i?i:"",o=(0,I.jg)({year:null!==s&&void 0!==s?s:"",month:null!==a&&void 0!==a?a:""}),u=o.data,c=o.isLoading,d=S(u,s,a),m=d.initialValues,h=d.onSubmit,v=d.success;console.log("",c);var x=(0,g.Z)(v,(0,l.jsx)(y.dEn,{className:"text-primary",style:{fontSize:"1.4rem"}})).btnContent;return(0,l.jsx)(Z.J9,{initialValues:m,onSubmit:h,children:(0,l.jsxs)(Z.l0,{className:"py-2 pe-2",children:[(0,l.jsx)(D,{calcHours:u,isLoading:c}),(0,l.jsx)(C,{inputsValues:["allHours"]}),(0,l.jsxs)("div",{className:"d-flex justify-content-between align-items-center mt-2",children:[(0,l.jsx)(k,{calcHours:u}),(0,l.jsx)(f.Z,{type:"submit",disabled:v.isLoading,className:"col-2 d-flex justify-content-center align-items-center m-0 justify-content-center p-0 m-0 ms-1  text-info-emphasis border-0 bg-transparent",children:x})]})]})})},z=t(2218),F=t(7858),T=t(6856),U=t(828),E=t(1087),O=t(8215),P=function(e){var n=(0,s.v9)((function(e){return e.listMonths})).listMonths,t=(null===e||void 0===e?void 0:e.title)&&(0,O.f)(null===e||void 0===e?void 0:e.title);return(0,l.jsx)("div",{style:{width:"45%"},children:(0,l.jsxs)(E.rU,{to:"/godziny/".concat(null===n||void 0===n?void 0:n[e.idx]),className:"text-decoration-none fs-responsive text-dark fw-medium",children:[(0,l.jsx)(U.Fjg,{className:"fs-6 me-1 text-primary"}),t]})})},B=function(e){var n=(0,I.bw)(),t=(0,h.Z)(n,2),i=t[0],r=t[1],a=(0,g.Z)(r,(0,l.jsx)(x.GnT,{className:"text-danger fs-5 ms-auto"})).btnContent,o=(0,s.v9)((function(e){return e.listMonths})).listMonths,u=(0,v.useState)(!1),c=(0,h.Z)(u,2),j=c[0],w=c[1],b=function(){var n=(0,m.Z)((0,d.Z)().mark((function n(){var t,r;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===e||void 0===e||!e.monthDate||null===o||void 0===o||!o.includes(e.monthDate)){n.next=5;break}return t=e.monthDate.slice(0,4),r=e.monthDate.slice(-2),n.next=5,i({year:t,month:r});case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.Z,{action:b,isPrinted:j,setIsPrinted:w,header:"Usun\u0105\u0107 miesi\u0105c"}),(0,l.jsx)(f.Z,{disabled:r.isLoading,onClick:function(){return o&&(n=o[e.idx],e.idx,e.setMonthDate(n),void w(!0));var n},className:"ms-auto bg-transparent border-0 p-1",children:o&&e.monthDate===o[e.idx]?a:(0,l.jsx)(x.GnT,{className:"text-danger fs-5 ms-auto"})})]})},W=function(e){var n=(0,v.useState)(!1),t=(0,h.Z)(n,2),i=t[0],r=t[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"d-flex align-items-center",children:[(0,l.jsx)(P,{title:e.monthDateToString,idx:e.idx}),(0,l.jsxs)(f.Z,{onClick:function(){e.onToggle(),e.isOpen&&(e.setOpenCollapseIndex(-1),r((function(e){return!e})))},"aria-expanded":i,"aria-controls":"example-collapse-text",size:"sm",className:"fw-medium fs-responsive d-flex justify-content-between align-items-center p-0 ps-1",style:{transition:"border-radius 420ms"},children:["Zapisz godziny",(0,l.jsx)(T.x3N,{className:"fs-3",style:{transform:"".concat(e.isOpen?"rotate(180deg)":""," "),transitionDuration:"320ms"}})]}),(0,l.jsx)(B,{idx:e.idx,monthDate:e.monthDate,setMonthDate:e.setMonthDate})]}),(0,l.jsx)(F.Z,{in:e.isOpen,children:(0,l.jsx)("div",{className:" pe-1",children:e.isOpen?e.children:(0,l.jsx)("div",{style:{height:"88px"}})})})]})},G=function(){var e=(0,z.Z)().databaseMonthsDatesToString,n=(0,s.v9)((function(e){return e.listMonths})).listMonths,t=(0,v.useState)(null),i=(0,h.Z)(t,2),r=i[0],a=i[1],u=(0,v.useState)(!1),c=(0,h.Z)(u,2),d=c[0],m=c[1],f=(0,v.useState)(""),x=(0,h.Z)(f,2),p=x[0],g=x[1];return(0,l.jsx)(l.Fragment,{children:null===e||void 0===e?void 0:e.map((function(e,t){return(0,l.jsx)(o.Z.Item,{className:w,children:(0,l.jsx)(W,{monthDateToString:e,monthDate:p,isOpen:t===r,setOpenCollapseIndex:a,isOpenCollapse:d,onToggle:function(){return n&&function(e,t){g(e),a(t),n&&e===n[t]&&m((function(e){return!e}))}(n[t],t)},idx:t,setMonthDate:g,children:(0,l.jsx)(L,{monthDate:n&&n[t]})})},e)}))})},V=function(){var e=(0,s.v9)((function(e){return e.listMonths})).listMonths,n=(0,s.v9)((function(e){return e.listUsers})).listUsers,t=(0,c.Z)().windowWidth;return(0,l.jsx)("div",{className:"bg-white p-2 py-4 p-sm-4 w-100",style:{height:t>=500?"calc(100%)":"calc(100% - 2.5rem)",overflow:"hidden auto",outline:"4px solid white",scrollbarGutter:"stable"},children:(0,l.jsxs)("div",{style:{maxWidth:"480px",width:"100%"},children:[(0,l.jsx)(u,{header:"Zapisane miesi\u0105ce",listContent:e,children:(0,l.jsx)(G,{})}),(0,l.jsx)("div",{className:"border my-4"}),(0,l.jsx)(u,{header:"Zapisani u\u017cytkownicy",listContent:n,children:(0,l.jsx)(b,{})})]})})},A=function(){var e=(0,s.v9)((function(e){return e.listUsers})),n=e.listUsersError,t=e.listUsersIsLoading,i=(0,s.v9)((function(e){return e.listMonths})).listMonthsError;return{requestState:t?(0,a.C)((0,l.jsx)(r.Z,{animation:"border",variant:"secondary",className:"fs-6",children:(0,l.jsx)("span",{className:"visually-hidden",children:"Loading..."})})):i||n?(0,a.C)((0,l.jsx)("div",{className:"text-danger text-center fs-4 ",children:"B\u0142\u0105d. Od\u015bwie\u017c stron\u0119"})):(0,l.jsx)(V,{})}},R=function(){var e=A().requestState;return(0,l.jsx)(i.Z,{children:e})}},8215:function(e,n,t){t.d(n,{f:function(){return i}});var i=function(e){return e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}},3940:function(e,n,t){t.d(n,{C:function(){return s},a:function(){return r}});var i=t(184),r=function(e){return(0,i.jsx)("div",{className:"d-flex justify-content-center align-items-center fs-3 text-warning text-center",style:{maxWidth:"1000px",width:"100%",height:"100%"},children:e})},s=function(e){return(0,i.jsx)("div",{className:"fixed-top d-flex justify-content-center align-items-center",style:{width:"100vw",height:"100vh",zIndex:"1060",backgroundColor:"rgba(255,255,255,0.4)"},children:e})}}}]);
//# sourceMappingURL=804.317f6330.chunk.js.map