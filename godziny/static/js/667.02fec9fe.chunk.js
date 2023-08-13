"use strict";(self.webpackChunkgodziny=self.webpackChunkgodziny||[]).push([[667],{1100:function(n,e,t){var r=t(1830),s=t.n(r),i=t(2791),o=t(4849),a=t(184);e.Z=function(n,e){(0,i.useEffect)((function(){if(n.isError){var e=n.error,t=e&&"status"in e&&e.status&&e.status;s().fire({text:"B\u0142\u0105d: ".concat(t||""),confirmButtonColor:"rgb(31, 180, 255)"})}}),[n.isError]);var t=e;return n.isLoading&&(t=(0,a.jsx)(o.Z,{animation:"border",size:"sm",variant:"secondary",children:(0,a.jsx)("span",{className:"visually-hidden",children:"Loading..."})})),{btnContent:t}}},2218:function(n,e,t){var r=t(3433),s=t(5048);e.Z=function(){var n,e=(0,s.v9)((function(n){return n.infoMonths})).infoMonths,t=e&&(null===(n=(0,r.Z)(e))||void 0===n?void 0:n.sort((function(n,e){return new Date(n).getTime()-new Date(e).getTime()}))),i=null===t||void 0===t?void 0:t.map((function(n){var e=new Date(n);return new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}).format(e)}));return{sortedInfoMonths:t,databaseMonthsDatesToString:i}}},1419:function(n,e,t){var r=t(9439),s=t(2791);e.Z=function(){var n=(0,s.useState)(window.innerWidth),e=(0,r.Z)(n,2),t=e[0],i=e[1];return(0,s.useEffect)((function(){var n=function(){i(window.innerWidth)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),{windowWidth:t}}},5667:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r=t(4849),s=t(9743),i=t(5048),o=t(23),a=t(2677),c=t(2218),u=t(4165),l=t(5861),d=t(9439),f=t(1830),m=t.n(f),h=t(3360),x=t(7425),v=t(1100),p=t(2767),Z=t(7615),b=t(184),g=function(n){var e=(0,Z.bw)(),t=(0,d.Z)(e,2),r=t[0],s=t[1],a=(0,Z.kM)(),c=(0,d.Z)(a,2),f=c[0],g=(c[1],(0,i.v9)((function(n){return n.infoMonths})).infoMonths),j=(0,v.Z)(s,(0,b.jsx)(x.GnT,{className:"text-danger fs-5 ms-auto"})).btnContent,w=function(){var e=(0,l.Z)((0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m().fire((0,p.p)("Chcesz usun\u0105\u0107 miesi\u0105c?")).then(function(){var e=(0,l.Z)((0,u.Z)().mark((function e(t){var s,i,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConfirmed){e.next=8;break}return s=n.monthDate.slice(0,4),i=n.monthDate.slice(-2),o=g.filter((function(n){return n!=="".concat(s,"-").concat(i)})),e.next=6,r({year:s,month:i});case 6:return e.next=8,f(o);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,b.jsx)(o.Z.Item,{onClick:w,className:"border-0 p-0 px-1 ",children:(0,b.jsxs)(h.Z,{disabled:s.isLoading,className:"w-100 d-flex justify-content-between align-items-center px-1 bg-primary-subtle text-capitalize border-0 fs-5",children:[n.monthDateToString," ",j]})})},j=function(){var n=(0,c.Z)(),e=n.sortedInfoMonths,t=n.databaseMonthsDatesToString,r=(0,i.v9)((function(n){return n.infoMonths})).infoMonths;return(0,b.jsxs)(a.Z,{className:"col-9 col-sm-9 col-md-6 col-xl-3 col-xxl-3 me-md-auto",children:[(0,b.jsx)("h3",{className:"h4",style:{},children:"Usu\u0144 miesi\u0105c"}),(0,b.jsx)(o.Z,{className:"border-0 bg-primary-subtle p-0",children:r?null===t||void 0===t?void 0:t.map((function(n,t){return(0,b.jsx)(g,{monthDateToString:n,monthDate:e[t]},n)})):(0,b.jsx)("p",{className:"py-1 px-2 fs-4 text-warning",children:"Brak danych"})})]})},w=t(3855),y=[{labelText:"Podaj imi\u0119",name:"userName",type:"text",placeholder:"Imi\u0119"},{labelText:"Podaj kolor",name:"userColor",type:"color",placeholder:""}],N=t(3433),k=t(1413),C=t(5705),M=t(6021),T=t(8007),B=function(){var n=(0,M.xY)().data,e=null===n||void 0===n?void 0:n.map((function(n){return n.userName})),t=null===n||void 0===n?void 0:n.map((function(n){return n.userColor}));return{validationSchema:T.Ry({userName:T.Z_().min(3,"Min. 3 litery").max(10,"Max. 10 liter").test("is-in-database","Imi\u0119 zaj\u0119te",(function(n){return void 0!==n&&!(null!==e&&void 0!==e&&e.includes(n))})).required("Imi\u0119 wymagane"),userColor:T.Z_().test("is-in-database","Kolor zaj\u0119ty",(function(n){return void 0!==n&&!(null!==t&&void 0!==t&&t.includes(n))}))})}},I=function(){var n=(0,M.Vx)(),e=(0,d.Z)(n,2),t=e[0],r=e[1],s=B().validationSchema,i=(0,M.xY)().data,o=i||[],a=(0,C.TA)({initialValues:{id:"",userName:"",userColor:"#e0cce1"},validationSchema:s,onSubmit:function(){var n=(0,l.Z)((0,u.Z)().mark((function n(e,r){var s,a;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s=r.resetForm,a=(0,k.Z)((0,k.Z)({},e),{},{id:crypto.randomUUID()}),!i){n.next=7;break}return n.next=5,t([].concat((0,N.Z)(o),[a]));case 5:n.next=9;break;case 7:return n.next=9,t([a]);case 9:s();case 10:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()});return{formik:a,success:r}},L=t(390),z=function(){var n=I(),e=n.formik,t=n.success,r=(0,v.Z)(t,"Zapisz u\u017cytkowanika").btnContent,i=(0,L.lX)();return(0,b.jsxs)(a.Z,{className:"col-12 col-sm-9 col-md-6 col-xl-3 col-xxl-3 me-md-auto",children:[(0,b.jsx)("button",{onClick:function(){i.back()},children:"Wr\xf3\u0107"}),(0,b.jsxs)(w.Z,{onSubmit:e.handleSubmit,children:[(0,b.jsx)(s.Z,{children:y.map((function(n,t){var r=n.labelText,s=n.name,i=n.type,o=n.placeholder;return(0,b.jsx)(a.Z,{className:"".concat(0===t?"col-8":"col-4"),children:(0,b.jsxs)(w.Z.Group,{className:"",children:[(0,b.jsx)(w.Z.Label,{htmlFor:s,className:"fw-medium",children:r}),(0,b.jsx)(w.Z.Control,{id:s,type:i,name:s,value:e.values[s],onChange:e.handleChange,onBlur:e.handleBlur,placeholder:o}),(0,b.jsx)(w.Z.Text,{className:"text-danger d-block mt-0 mb-4 fs-8",style:{height:"0.7rem"},children:e.touched[s]&&e.errors[s]&&e.errors[s]})]})},s)}))}),(0,b.jsx)(h.Z,{disabled:t.isLoading,type:"submit",className:"col-8 col-sm-7  bg-info text-white fw-medium",children:r})]})]})},D=function(n){var e=(0,M.I1)(),t=(0,d.Z)(e,2),r=t[0],s=t[1],a=(0,v.Z)(s,(0,b.jsx)(x.GnT,{className:"text-danger fs-5 ms-auto"})).btnContent,c=(0,i.v9)((function(n){return n.users})).users,f=function(){var n=(0,l.Z)((0,u.Z)().mark((function n(e){return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:m().fire((0,p.p)("Chcesz usun\u0105\u0107 u\u017cytkownika?")).then(function(){var n=(0,l.Z)((0,u.Z)().mark((function n(t){var s;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.isConfirmed){n.next=4;break}return s=null===c||void 0===c?void 0:c.filter((function(n){return(null===n||void 0===n?void 0:n.id)!==e})),n.next=4,r(s);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,b.jsx)(o.Z.Item,{onClick:function(){return f(n.user.id)},className:"border-0 p-0",style:{color:n.user.userColor},children:(0,b.jsxs)(h.Z,{disabled:s.isLoading,className:"w-100 d-flex justify-content-between align-items-center px-1 bg-primary-subtle text-capitalize border-0 fs-5",style:{color:n.user.userColor},children:[n.user.userName,a]})})},S=function(){var n=(0,i.v9)((function(n){return n.users})).users;return(0,b.jsxs)(a.Z,{className:"col-9 col-sm-9 col-md-6 col-xl-3 col-xxl-3 me-md-auto",children:[(0,b.jsx)("h3",{className:"h4",children:"Usu\u0144 u\u017cytkownika"}),(0,b.jsx)(o.Z,{className:"border-0 bg-primary-subtle p-0",children:n?null===n||void 0===n?void 0:n.map((function(n){return(0,b.jsx)(D,{user:n},n.id)})):(0,b.jsx)("p",{className:"py-1 px-2 fs-4 text-warning",children:"Brak danych"})})]})},E=function(){var n,e=(0,i.v9)((function(n){return n.users})),t=e.usersError,o=e.usersIsLoading,a=(0,i.v9)((function(n){return n.infoMonths})),c=a.infoMonthsError,u=a.infoMonthsIsLoading;if(o||u)n=(0,b.jsx)(r.Z,{animation:"border",variant:"secondary",children:(0,b.jsx)("span",{className:"visually-hidden",children:"Loading..."})});else if(t){if("status"in t){var l="status"in t&&t.status;n=(0,b.jsx)("h3",{className:"text-danger mx-auto ",children:(0,b.jsxs)(b.Fragment,{children:[" B\u0142\u0105d: ",l," "]})})}}else if(c){if("status"in c){var d="status"in c&&c.status;n=(0,b.jsx)("h3",{className:"text-danger mx-auto ",children:(0,b.jsxs)(b.Fragment,{children:[" B\u0142\u0105d: ",d," "]})})}}else{var f="col-12 bg-white";n=(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s.Z,{className:f,children:(0,b.jsx)(z,{})}),(0,b.jsx)(s.Z,{className:f,children:(0,b.jsx)(S,{})}),(0,b.jsx)(s.Z,{className:"".concat(f," flex-grow-1 d-block"),style:{maxHeight:"20%"},children:(0,b.jsx)(j,{})})]})}return{settingsContent:n}},F=t(7022),U=t(1419),W=function(){var n=E().settingsContent,e=(0,i.v9)((function(n){return n.users})),t=(e.users,e.usersError,e.usersIsLoading,(0,i.v9)((function(n){return n.infoMonths}))),r=(t.infoMonths,t.infoMonthsError,t.infoMonthsIsLoading,(0,U.Z)().windowWidth);return(0,b.jsx)("main",{className:"backgroundImage",style:{height:"100vh"},children:(0,b.jsx)(F.Z,{className:"d-flex align-items-center flex-column  pe-0 overflow-y-scroll",style:{maxHeight:r>576?"100vh":"calc(100vh - 40px)"},children:n})})}},2767:function(n,e,t){t.d(e,{Z:function(){return o},p:function(){return i}});var r=t(1830),s=t.n(r),i=function(n){return{title:n,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Tak",cancelButtonText:"Nie"}},o=function(n){s().fire({text:"B\u0142\u0105d ".concat(n),confirmButtonColor:"rgb(31, 180, 255)"})}}}]);
//# sourceMappingURL=667.02fec9fe.chunk.js.map