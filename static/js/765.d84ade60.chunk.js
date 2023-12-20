"use strict";(self.webpackChunkgodziny=self.webpackChunkgodziny||[]).push([[765],{3786:function(n,e,t){var r=t(1419),s=t(184);e.Z=function(n){var e=(0,r.Z)().windowWidth;return(0,s.jsxs)("main",{className:"d-flex backgroundImage m-0",style:{height:"100vh",overflow:"hidden",position:"relative"},children:[(0,s.jsx)("aside",{style:{width:e>=500?"30%":0,maxWidth:"250px",height:"100%"}}),(0,s.jsx)("div",{className:"d-flex ps-1 flex-fill",style:{width:e>=500?"70%":"100%"},children:n.children})]})}},5904:function(n,e,t){t.d(e,{Z:function(){return l}});var r=t(2791),s=t(5048),i=t(3920),a=t(9439),o=t(2685),u=t(3003),c=function(){var n=(0,o.iH)(u.Fs),e=(0,r.useState)(""),t=(0,a.Z)(e,2),s=t[0],i=t[1],c=(0,r.useState)([]),l=(0,a.Z)(c,2),d=l[0],f=l[1];return(0,r.useEffect)((function(){var e=(0,o.jM)(n,(function(n){var e=[],t=[];null===n||void 0===n||n.forEach((function(n){var r=n.key;e.push(r);var s=(0,o.iH)(u.Fs,"".concat(r));(0,o.jM)(s,(function(n){var e=[];null===n||void 0===n||n.forEach((function(n){var t=n.key;e.push(t.slice(6))})),t.push(e)}),(function(n){i("B\u0142\u0105d")}))}));var r=[].concat(t).map((function(n,t){return n.map((function(n){return e[t]+"-"+n}))})).flat().reverse();f(r)}),(function(n){i("B\u0142\u0105d")}));return function(){e()}}),[]),{databaseListMonths:d,error:s}},l=function(){var n=(0,s.I0)(),e=c(),t=e.databaseListMonths;e.error;(0,r.useEffect)((function(){n((0,i.eT)(t))}),[t,n])}},1100:function(n,e,t){var r=t(4849),s=t(184);e.Z=function(n,e){var t=e;return n.isLoading&&(t=(0,s.jsx)(r.Z,{animation:"border",size:"sm",variant:"secondary",children:(0,s.jsx)("span",{className:"visually-hidden",children:"Loading..."})})),{btnContent:t}}},2218:function(n,e,t){var r=t(3433),s=t(5048);e.Z=function(){var n,e=(0,s.v9)((function(n){return n.listMonths})).listMonths;return{databaseMonthsDatesToString:e&&(null===(n=(0,r.Z)(e))||void 0===n?void 0:n.map((function(n){var e=new Date(n);return new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}).format(e)})))}}},1419:function(n,e,t){var r=t(9439),s=t(2791);e.Z=function(){var n=(0,s.useState)(window.innerWidth),e=(0,r.Z)(n,2),t=e[0],i=e[1];return(0,s.useEffect)((function(){var n=function(){i(window.innerWidth)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),{windowWidth:t}}},7089:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r=t(3786),s=t(4849),i=t(5048),a=t(3940),o=t(23),u=t(184),c=function(n){var e;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("h3",{className:"h6",children:[n.header,": ",null===(e=n.listContent)||void 0===e?void 0:e.length]}),(0,u.jsxs)(o.Z,{className:"border-0 p-0",children:[!n.listContent&&(0,u.jsx)(o.Z.Item,{className:"py-1 px-2 text-warning border-0",children:"Brak danych"}),n.children]})]})},l=t(5904),d=t(4165),f=t(5861),h=t(9439),v=t(2791),m=t(3360),x=t(7425),p=t(1100),j=t(2218),g=t(7064),w=t(7615),Z="shadow-sm p-0 mb-2 ps-2 pe-0 rounded-1",b=function(){var n=(0,i.I0)(),e=(0,j.Z)().databaseMonthsDatesToString,t=(0,w.bw)(),r=(0,h.Z)(t,2),s=r[0],a=r[1],c=(0,w._V)(),l=(0,h.Z)(c,2),b=(l[0],l[1],(0,i.v9)((function(n){return n.listMonths})).listMonths),y=(0,p.Z)(a,(0,u.jsx)(x.GnT,{className:"text-danger fs-5 ms-auto"})).btnContent,N=(0,i.v9)((function(n){return n.alert})).agree,k=(0,v.useState)(""),M=(0,h.Z)(k,2),C=M[0],L=M[1],E=function(){var n=(0,f.Z)((0,d.Z)().mark((function n(){var e,t;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(N&&C&&null!==b&&void 0!==b&&b.includes(C))){n.next=6;break}return null===b||void 0===b?void 0:b.filter((function(n){return n!==C})),e=C.slice(0,4),t=C.slice(-2),n.next=6,s({year:e,month:t});case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,v.useEffect)((function(){E(),n((0,g.Ov)(!1)),n((0,g.M6)())}),[N]),(0,u.jsx)(u.Fragment,{children:null===e||void 0===e?void 0:e.map((function(e,t){return(0,u.jsx)(o.Z.Item,{className:Z,children:(0,u.jsx)(m.Z,{disabled:a.isLoading,onClick:function(){return b&&function(e){n((0,g.VG)("Usun\u0105\u0107 miesi\u0105c?")),L(e)}(b[t])},className:"m-auto",children:b&&C===b[t]?y:(0,u.jsx)(x.GnT,{className:"text-danger fs-5 ms-auto"})})},e)}))})},y=t(6021),N=function(){var n=(0,i.I0)(),e=(0,y.I1)(),t=(0,h.Z)(e,2),r=t[0],s=t[1],a=(0,p.Z)(s,(0,u.jsx)(x.GnT,{className:"text-danger fs-5 ms-auto"})).btnContent,c=(0,i.v9)((function(n){return n.listUsers})).listUsers,l=(0,i.v9)((function(n){return n.alert})).agree,j=(0,v.useState)(""),w=(0,h.Z)(j,2),b=w[0],N=w[1],k=null===c||void 0===c?void 0:c.map((function(n){return n.userName})),M=function(){var n=(0,f.Z)((0,d.Z)().mark((function n(){var e;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(l&&b&&null!==k&&void 0!==k&&k.includes(b))){n.next=6;break}if(e=null===c||void 0===c?void 0:c.filter((function(n){return(null===n||void 0===n?void 0:n.userName)!==b})),n.t0=e,!n.t0){n.next=6;break}return n.next=6,r(e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,v.useEffect)((function(){M(),n((0,g.Ov)(!1)),s.isSuccess&&n((0,g.M6)())}),[l]),(0,u.jsx)(u.Fragment,{children:null===c||void 0===c?void 0:c.map((function(e){return(0,u.jsx)(o.Z.Item,{className:Z,style:{backgroundColor:e.userColor,overflow:"hidden"},children:(0,u.jsxs)(m.Z,{onClick:function(){return function(e){n((0,g.VG)("Usun\u0105\u0107 u\u017cytkownika?")),N(e)}(e.userName)},disabled:s.isLoading,className:"w-100 d-flex justify-content-between align-items-center px-1 text-capitalize rounded-0 bg-white border-0",style:{color:e.userColor},children:[e.userName,b===e.userName?a:(0,u.jsx)(x.GnT,{className:"text-danger fs-5 ms-auto"})]})},e.userName)}))})},k=function(){(0,l.Z)();var n=(0,i.v9)((function(n){return n.listMonths})).listMonths,e=(0,i.v9)((function(n){return n.listUsers})).listUsers;return(0,u.jsx)("div",{className:"bg-white p-2 py-4 p-sm-4 w-100",style:{height:"100%",overflow:"hidden auto",outline:"4px solid white"},children:(0,u.jsxs)("div",{style:{maxWidth:"480px",width:"100%"},children:[(0,u.jsx)(c,{header:"Zapisane miesi\u0105ce",listContent:n,children:(0,u.jsx)(b,{})}),(0,u.jsx)("div",{className:"border my-4"}),(0,u.jsx)(c,{header:"Zapisani u\u017cytkownicy",listContent:e,children:(0,u.jsx)(N,{})})]})})},M=function(){var n,e=(0,i.v9)((function(n){return n.listUsers})),t=e.listUsersError,r=e.listUsersIsLoading,o=(0,i.v9)((function(n){return n.listMonths})),c=o.listMonthsError,l=o.listMonthsIsLoading;if(r||l)n=(0,a.a)((0,u.jsx)(s.Z,{animation:"border",variant:"secondary",children:(0,u.jsx)("span",{className:"visually-hidden",children:"Loading..."})}));else if(t){if("status"in t){var d="status"in t&&t.status;n=(0,a.a)((0,u.jsxs)("h3",{className:"text-danger mx-auto ",children:[(0,u.jsxs)(u.Fragment,{children:[" B\u0142\u0105d: ",d]})," ",(0,u.jsx)("br",{}),(0,u.jsx)(u.Fragment,{children:"Od\u015bwie\u017c stron\u0119"})]}))}}else if(c){if("status"in c){var f="status"in c&&c.status;n=(0,a.a)((0,u.jsxs)("h3",{className:"text-danger mx-auto ",children:[(0,u.jsxs)(u.Fragment,{children:[" B\u0142\u0105d: ",f]})," ",(0,u.jsx)("br",{}),(0,u.jsx)(u.Fragment,{children:"Od\u015bwie\u017c stron\u0119"})]}))}}else n=(0,u.jsx)(k,{});return{requestState:n}},C=function(){var n=M().requestState;return(0,u.jsx)(r.Z,{children:n})}},3940:function(n,e,t){t.d(e,{a:function(){return s}});var r=t(184),s=function(n){return(0,r.jsx)("div",{className:" d-flex justify-content-center align-items-center fs-3 text-warning text-center",style:{maxWidth:"1000px",width:"100%",height:"100%"},children:n})}},2391:function(n){var e=function(){};n.exports=e}}]);
//# sourceMappingURL=765.d84ade60.chunk.js.map