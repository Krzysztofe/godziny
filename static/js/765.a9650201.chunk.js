"use strict";(self.webpackChunkgodziny=self.webpackChunkgodziny||[]).push([[765],{3786:function(n,e,t){var r=t(1419),s=t(184);e.Z=function(n){var e=(0,r.Z)().windowWidth;return(0,s.jsxs)("main",{className:"d-flex backgroundImage m-0",style:{height:"100vh",overflow:"hidden",position:"relative"},children:[(0,s.jsx)("aside",{style:{width:e>=500?"30%":0,maxWidth:"250px",height:"100%"}}),(0,s.jsx)("div",{className:"d-flex ps-1 flex-fill",style:{width:e>=500?"70%":"100%"},children:n.children})]})}},7129:function(n,e,t){var r=t(2791),s=t(5048),i=t(3920),a=t(7615);e.Z=function(){var n=(0,s.I0)(),e=(0,a.Jw)(),t=e.data,o=e.error,u=e.isLoading;(0,r.useEffect)((function(){n((0,i.eT)(t)),n((0,i.V2)(o)),n((0,i.jJ)(u))}),[t,o,u,n])}},1100:function(n,e,t){var r=t(1830),s=t.n(r),i=t(2791),a=t(4849),o=t(184);e.Z=function(n,e){(0,i.useEffect)((function(){if(n.isError){var e=n.error,t=e&&"status"in e&&e.status&&e.status;s().fire({text:"B\u0142\u0105d: ".concat(t||""),confirmButtonColor:"rgb(31, 180, 255)"})}}),[n.isError]);var t=e;return n.isLoading&&(t=(0,o.jsx)(a.Z,{animation:"border",size:"sm",variant:"secondary",children:(0,o.jsx)("span",{className:"visually-hidden",children:"Loading..."})})),{btnContent:t}}},2218:function(n,e,t){var r=t(3433),s=t(5048);e.Z=function(){var n,e=(0,s.v9)((function(n){return n.listMonths})).listMonths;return{databaseMonthsDatesToString:e&&(null===(n=(0,r.Z)(e))||void 0===n?void 0:n.map((function(n){var e=new Date(n);return new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}).format(e)})))}}},1419:function(n,e,t){var r=t(9439),s=t(2791);e.Z=function(){var n=(0,s.useState)(window.innerWidth),e=(0,r.Z)(n,2),t=e[0],i=e[1];return(0,s.useEffect)((function(){var n=function(){i(window.innerWidth)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),{windowWidth:t}}},7089:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r=t(3786),s=t(4849),i=t(5048),a=t(3940),o=t(23),u=t(184),c=function(n){var e;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("h3",{className:"h6",children:[n.header,": ",null===(e=n.listContent)||void 0===e?void 0:e.length]}),(0,u.jsxs)(o.Z,{className:"border-0 p-0",children:[!n.listContent&&(0,u.jsx)(o.Z.Item,{className:"py-1 px-2 text-warning border-0",children:"Brak danych"}),n.children]})]})},l=t(7129),d=t(4165),f=t(5861),h=t(9439),x=t(2791),v=t(3360),m=t(7425),g=t(1100),j=t(2218),w=t(7064),p=t(7615),Z="shadow-sm p-0 mb-2 ps-2 pe-0 rounded-1",b="w-100 d-flex justify-content-between align-items-center px-1 text-capitalize rounded-0 bg-white border-0",y=function(){var n=(0,i.I0)(),e=(0,j.Z)().databaseMonthsDatesToString,t=(0,p.bw)(),r=(0,h.Z)(t,2),s=r[0],a=r[1],c=(0,p._V)(),l=(0,h.Z)(c,2),y=l[0],N=(l[1],(0,i.v9)((function(n){return n.listMonths})).listMonths),k=(0,g.Z)(a,(0,u.jsx)(m.GnT,{className:"text-danger fs-5 ms-auto"})).btnContent,C=(0,i.v9)((function(n){return n.alert})).agree,M=(0,x.useState)(""),E=(0,h.Z)(M,2),I=E[0],L=E[1],U=function(){var n=(0,f.Z)((0,d.Z)().mark((function n(){var e,t,r;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(C&&I&&null!==N&&void 0!==N&&N.includes(I))){n.next=10;break}return e=null===N||void 0===N?void 0:N.filter((function(n){return n!==I})),t=I.slice(0,4),r=I.slice(-2),n.next=6,s({year:t,month:r});case 6:if(n.t0=e,!n.t0){n.next=10;break}return n.next=10,y(e);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,x.useEffect)((function(){U(),n((0,w.Ov)(!1)),n((0,w.M6)())}),[C]),(0,u.jsx)(u.Fragment,{children:null===e||void 0===e?void 0:e.map((function(e,t){return(0,u.jsx)(o.Z.Item,{className:Z,children:(0,u.jsxs)(v.Z,{disabled:!(!N||I!==N[t])&&a.isLoading,onClick:function(){return N&&function(e){n((0,w.VG)("Usun\u0105\u0107 miesi\u0105c?")),L(e)}(N[t])},className:"".concat(b," text-dark"),children:[e,N&&I===N[t]?k:(0,u.jsx)(m.GnT,{className:"text-danger fs-5 ms-auto"})]})},e)}))})},N=t(6021),k=function(){var n=(0,i.I0)(),e=(0,N.I1)(),t=(0,h.Z)(e,2),r=t[0],s=t[1],a=(0,g.Z)(s,(0,u.jsx)(m.GnT,{className:"text-danger fs-5 ms-auto"})).btnContent,c=(0,i.v9)((function(n){return n.listUsers})).listUsers,l=(0,i.v9)((function(n){return n.alert})).agree,j=(0,x.useState)(""),p=(0,h.Z)(j,2),y=p[0],k=p[1],C=null===c||void 0===c?void 0:c.map((function(n){return n.userName})),M=function(){var n=(0,f.Z)((0,d.Z)().mark((function n(){var e;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(l&&y&&null!==C&&void 0!==C&&C.includes(y))){n.next=6;break}if(e=null===c||void 0===c?void 0:c.filter((function(n){return(null===n||void 0===n?void 0:n.userName)!==y})),n.t0=e,!n.t0){n.next=6;break}return n.next=6,r(e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,x.useEffect)((function(){M(),n((0,w.Ov)(!1)),n((0,w.M6)())}),[l]),(0,u.jsx)(u.Fragment,{children:null===c||void 0===c?void 0:c.map((function(e){return(0,u.jsx)(o.Z.Item,{className:Z,style:{backgroundColor:e.userColor,overflow:"hidden"},children:(0,u.jsxs)(v.Z,{onClick:function(){return function(e){n((0,w.VG)("Usun\u0105\u0107 u\u017cytkownika?")),k(e)}(e.userName)},disabled:y===e.userName&&s.isLoading,className:b,style:{color:e.userColor},children:[e.userName,y===e.userName?a:(0,u.jsx)(m.GnT,{className:"text-danger fs-5 ms-auto"})]})},e.userName)}))})},C=function(){(0,l.Z)();var n=(0,i.v9)((function(n){return n.listMonths})).listMonths,e=(0,i.v9)((function(n){return n.listUsers})).listUsers;return(0,u.jsx)("div",{className:"bg-white p-2 py-4 p-sm-4 w-100",style:{height:"100%",overflow:"hidden auto",outline:"4px solid white"},children:(0,u.jsxs)("div",{style:{maxWidth:"480px",width:"100%"},children:[(0,u.jsx)(c,{header:"Zapisane miesi\u0105ce",listContent:n,children:(0,u.jsx)(y,{})}),(0,u.jsx)("div",{className:"border my-4"}),(0,u.jsx)(c,{header:"Zapisani u\u017cytkownicy",listContent:e,children:(0,u.jsx)(k,{})})]})})},M=function(){var n,e=(0,i.v9)((function(n){return n.listUsers})),t=e.listUsersError,r=e.listUsersIsLoading,o=(0,i.v9)((function(n){return n.listMonths})),c=o.listMonthsError,l=o.listMonthsIsLoading;if(r||l)n=(0,a.a)((0,u.jsx)(s.Z,{animation:"border",variant:"secondary",children:(0,u.jsx)("span",{className:"visually-hidden",children:"Loading..."})}));else if(t){if("status"in t){var d="status"in t&&t.status;n=(0,a.a)((0,u.jsxs)("h3",{className:"text-danger mx-auto ",children:[(0,u.jsxs)(u.Fragment,{children:[" B\u0142\u0105d: ",d]})," ",(0,u.jsx)("br",{}),(0,u.jsx)(u.Fragment,{children:"Od\u015bwie\u017c stron\u0119"})]}))}}else if(c){if("status"in c){var f="status"in c&&c.status;n=(0,a.a)((0,u.jsxs)("h3",{className:"text-danger mx-auto ",children:[(0,u.jsxs)(u.Fragment,{children:[" B\u0142\u0105d: ",f]})," ",(0,u.jsx)("br",{}),(0,u.jsx)(u.Fragment,{children:"Od\u015bwie\u017c stron\u0119"})]}))}}else n=(0,u.jsx)(C,{});return{requestState:n}},E=function(){var n=M().requestState;return(0,u.jsx)(r.Z,{children:n})}},3940:function(n,e,t){t.d(e,{a:function(){return s}});var r=t(184),s=function(n){return(0,r.jsx)("div",{className:" d-flex justify-content-center align-items-center fs-3 text-warning text-center",style:{maxWidth:"1000px",width:"100%",height:"100%"},children:n})}},2391:function(n){var e=function(){};n.exports=e}}]);
//# sourceMappingURL=765.a9650201.chunk.js.map