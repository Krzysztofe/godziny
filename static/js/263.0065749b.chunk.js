"use strict";(self.webpackChunkgodziny=self.webpackChunkgodziny||[]).push([[263],{3786:function(n,e,r){var t=r(1419),o=r(184);e.Z=function(n){var e=(0,t.Z)().windowWidth;return(0,o.jsxs)("main",{className:"d-flex backgroundImage m-0",style:{height:"100dvh",overflow:"hidden"},children:[(0,o.jsx)("aside",{style:{width:e>=500?"30%":0,maxWidth:"250px",height:"100%"}}),(0,o.jsx)("div",{className:"d-flex ps-1 flex-fill",style:{width:e>=500?"70%":"100%"},children:n.children})]})}},1100:function(n,e,r){var t=r(1830),o=r.n(t),i=r(2791),d=r(4849),u=r(184);e.Z=function(n,e){(0,i.useEffect)((function(){if(n.isError){var e=n.error,r=e&&"status"in e&&e.status&&e.status;o().fire({text:"B\u0142\u0105d: ".concat(r||""),confirmButtonColor:"rgb(31, 180, 255)"})}}),[n.isError]);var r=e;return n.isLoading&&(r=(0,u.jsx)(d.Z,{animation:"border",size:"sm",variant:"secondary",children:(0,u.jsx)("span",{className:"visually-hidden",children:"Loading..."})})),{btnContent:r}}},3234:function(n,e,r){var t=r(7689);e.Z=function(){var n=(0,t.TH)().pathname.slice(1);if(n&&/^\d{4}-\d{2}$/.test(n)){var e,r=n&&new Date(n);return{monthURLStringFormat:r&&(null===(e=new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}))||void 0===e?void 0:e.format(r))}}return{monthURLStringFormat:""}}},9065:function(n,e,r){var t=r(7689);e.Z=function(){var n=(0,t.TH)().pathname.split("/").slice(-1)[0],e=null===n||void 0===n?void 0:n.slice(0,4),r=null===n||void 0===n?void 0:n.slice(-2);return{monthURL:n,yearFromURL:e,monthFromURL:r,isMonthInURL:/^\d{4}-\d{2}$/.test(n)}}},1419:function(n,e,r){var t=r(9439),o=r(2791);e.Z=function(){var n=(0,o.useState)(window.innerWidth),e=(0,t.Z)(n,2),r=e[0],i=e[1];return(0,o.useEffect)((function(){var n=function(){i(window.innerWidth)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),{windowWidth:r}}},1263:function(n,e,r){r.r(e),r.d(e,{default:function(){return q}});var t=r(4849),o=r(5048),i=r(3234),d=r(3940),u=r(9439),a=r(2791),s=r(7689),l=r(184),c=function(){var n,e,r,t,i=(0,o.v9)((function(n){return n.monthPanel})).month;return(0,l.jsxs)("div",{className:"d-flex gap-2 mx-auto fw-medium pb-2 w-fit-content",children:[(0,l.jsxs)("div",{children:["Wszystkie ",null===i||void 0===i||null===(n=i.calcHours)||void 0===n?void 0:n.allHours," - "]}),(0,l.jsxs)("div",{className:"".concat(i&&(null===i||void 0===i||null===(e=i.calcHours)||void 0===e?void 0:e.currentHours)<=0?"text-danger":""),children:[i&&(null===i||void 0===i||null===(r=i.calcHours)||void 0===r?void 0:r.currentHours)," ","",i&&(null===i||void 0===i||null===(t=i.calcHours)||void 0===t?void 0:t.currentHours)<0?"Brak":"Dost\u0119pne"]})]})},v=r(1413),f=r(793),m=r(9065),h=r(7615),x=r(2677),p=r(4165),y=r(5861),b=r(3360),Z=r(7425),j=r(1830),g=r.n(j),H=r(1100),w=r(2767),I=r(6856),N=r(1578),k=function(n){var e,r;if(null!==n&&void 0!==n&&null!==(e=n.day)&&void 0!==e&&e.date){var t,o,i=new Date(n.day.date);return r=new Intl.DateTimeFormat("pl-PL",{day:"numeric",month:"short"}).format(i),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"d-flex justify-content-between fs-7 ",children:[(0,l.jsx)("div",{children:null===(t=n.day)||void 0===t?void 0:t.userName}),(0,l.jsx)("div",{children:"Poza"===(null===(o=n.day)||void 0===o?void 0:o.place)?(0,l.jsx)(N.ols,{style:{color:"rgb(80,173,150)"}}):(0,l.jsx)(I.P8U,{style:{color:"rgb(255, 181, 9)"}})})]}),(0,l.jsx)("div",{className:"d-flex fw-medium justify-content-between",children:(0,l.jsx)("div",{children:r||""})})]})}return(0,l.jsx)("div",{children:"Brak danych"})},L=function(n,e){var r=n.columns.map((function(n){var r,t=null===n||void 0===n||null===(r=n.days)||void 0===r?void 0:r.filter((function(n){return n.id!==e}));return(0,v.Z)((0,v.Z)({},n),{},{days:t})}));return(0,v.Z)((0,v.Z)({},n),{},{columns:r})},P=function(n,e,r){if(!n||!n.calcHours)return{currentHours:0,submittedHours:0,acceptedHours:0,rejectedHours:0,allHours:0};var t=n.calcHours;return(0,v.Z)((0,v.Z)({},t),{},{currentHours:2!==e&&r?t.currentHours+r:t.currentHours,submittedHours:0===e&&r?t.submittedHours-r:t.submittedHours,acceptedHours:1===e&&r?t.acceptedHours-r:t.acceptedHours,rejectedHours:2===e&&r?t.rejectedHours-r:t.rejectedHours})},T=function(n){var e,r=(0,m.Z)(),t=r.yearFromURL,i=r.monthFromURL,d=(0,o.v9)((function(n){return n.monthPanel})).month,a=(0,h.ur)(),s=(0,u.Z)(a,2),c=s[0],x=s[1],j=(0,H.Z)(x,(0,l.jsx)(Z.GnT,{className:"text-danger"})).btnContent,I=function(){var e=(0,y.Z)((0,p.Z)().mark((function e(r,o){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g().fire((0,w.p)("Usun\u0105\u0107 dzie\u0144")).then(function(){var e=(0,y.Z)((0,p.Z)().mark((function e(u){var a,s;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u.isConfirmed){e.next=6;break}if(s=null===(a=(0,v.Z)({},null===d||void 0===d?void 0:d.columns[n.columnIdx].days.find((function(e){return(null===e||void 0===e?void 0:e.id)===n.day.id}))))||void 0===a?void 0:a.hours,e.t0=d,!e.t0){e.next=6;break}return e.next=6,c({year:t,month:i,colIdx:n.columnIdx,monthBody:(0,v.Z)((0,v.Z)({},d),{},{calcHours:P(d,r,s),columns:L((0,v.Z)({},d),o).columns})});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}();return(0,l.jsx)(f._l,{draggableId:n.day&&(null===n||void 0===n||null===(e=n.day)||void 0===e?void 0:e.id),index:n.dayIdx,isDragDisabled:!1,children:function(e,r){var t,o;return(0,l.jsx)("div",(0,v.Z)((0,v.Z)((0,v.Z)({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,className:"mb-2 bg-white rounded border ".concat(r.isDragging?"border-dark":"border-dark-subtle"," "),children:(0,l.jsxs)("div",{className:"px-1 py-2 py-sm-1 rounded",style:{borderTop:"8px solid ".concat(null===(t=n.day)||void 0===t?void 0:t.userColor),opacity:r.isDragging?.8:1},children:[(0,l.jsx)(k,{day:n.day}),(0,l.jsxs)(b.Z,{onClick:function(){return I(n.columnIdx,n.day.id)},className:"d-flex justify-content-between  align-items-center w-100 p-0 bg-transparent border-0 fw-medium text-dark",disabled:x.isLoading,children:[(0,l.jsxs)("div",{children:[null===(o=n.day)||void 0===o?void 0:o.hours," h"]}),(0,l.jsx)("div",{children:j})]})]})}))}})},F=r(4261),B=function(n){return(0,l.jsx)(x.Z,{children:(0,l.jsx)(f.bK,{droppableId:n.column.id,children:function(e,r){return(0,l.jsxs)("div",(0,v.Z)((0,v.Z)({},e.droppableProps),{},{ref:e.innerRef,className:"p-1 h-100 overflow-hidden border border-1 border border-top-0",style:{backgroundColor:r.isDraggingOver?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.2)",height:"100%"},children:[Array.isArray(n.column.days)?n.column.days.map((function(e,r){return(0,l.jsx)(T,{day:e,columnIdx:n.columnIdx,dayIdx:r},(0,F.Z)())})):[],e.placeholder]}))}})})},R=function(n){var e,r,t,i=(0,o.v9)((function(n){return n.monthPanel})).month;return(0,l.jsx)(l.Fragment,{children:[{headerText:"Z\u0142o\u017cone:",counter:null===i||void 0===i||null===(e=i.calcHours)||void 0===e?void 0:e.submittedHours},{headerText:"Przyznane:",counter:null===i||void 0===i||null===(r=i.calcHours)||void 0===r?void 0:r.acceptedHours},{headerText:"Odrzucone:",counter:null===i||void 0===i||null===(t=i.calcHours)||void 0===t?void 0:t.rejectedHours}].map((function(e){var r=e.headerText,t=e.counter;return(0,l.jsxs)(x.Z,{className:"text-dark-emphasis fs-responsive bg-white fw-medium p-1 ".concat(0===n.thumbPosition?"border-bottom border-3 border-white":"border-bottom border-3"),children:[r," ","",t]},r)}))})},C=function(){var n=(0,a.useRef)(null),e=(0,a.useState)(0),r=(0,u.Z)(e,2),t=r[0],o=r[1];return{scrollableRef:n,thumbPosition:t,handleScroll:function(){var e=n.current;if(e){var r=e.scrollTop,t=e.scrollHeight,i=e.clientHeight;o(r/(t-i)*100)}}}},U=r(3433),z=r(1419),S=function(n){return null===n||void 0===n?void 0:n.reduce((function(n,e){return n+((null===e||void 0===e?void 0:e.hours)||0)}),0)},D=function(n){var e,r,t;return{submittedHours:S(null===(e=n[0])||void 0===e?void 0:e.days),acceptedHours:S(null===(r=n[1])||void 0===r?void 0:r.days),rejectedHours:S(null===(t=n[2])||void 0===t?void 0:t.days)}},E=function(){var n=(0,m.Z)(),e=n.yearFromURL,r=n.monthFromURL,t=(0,h.CB)(),i=(0,u.Z)(t,1)[0],d=(0,o.v9)((function(n){return n.monthPanel})).month,s=d&&function(n){return Array.isArray(n)?null===n||void 0===n?void 0:n.map((function(n){return null!==n&&void 0!==n&&n.hasOwnProperty("days")?n:(0,v.Z)((0,v.Z)({},n),{},{days:[]})})):[]}(null===d||void 0===d?void 0:d.columns),c=(0,a.useState)([]),x=(0,u.Z)(c,2),p=x[0],y=x[1],b=(0,a.useState)(!1),Z=(0,u.Z)(b,2),j=Z[0],g=Z[1],H=D(p),w=H.submittedHours,I=H.acceptedHours,N=H.rejectedHours,k=C(),L=k.scrollableRef,P=k.thumbPosition,T=k.handleScroll,F=(0,z.Z)().windowWidth;(0,a.useEffect)((function(){s&&y(s)}),[null===d||void 0===d?void 0:d.columns]),(0,a.useEffect)((function(){var n;p.length>0&&d&&i({year:e,month:r,monthBody:(0,v.Z)((0,v.Z)({},d),{},{columns:p,calcHours:(0,v.Z)((0,v.Z)({},null===d||void 0===d?void 0:d.calcHours),{},{currentHours:(null===d||void 0===d||null===(n=d.calcHours)||void 0===n?void 0:n.allHours)-w-I-N+N,submittedHours:w,acceptedHours:I,rejectedHours:N})})})}),[j]);var S="d-flex column-gap-1";return(0,l.jsxs)("div",{ref:L,onScroll:T,className:"p-0 overflow-y-scroll h-100",style:{maxHeight:F>=500?"calc(100% - 32px)":"calc(100% - 32px - 2.5rem)"},children:[(0,l.jsx)("div",{className:"".concat(S," sticky-top"),children:(0,l.jsx)(R,{thumbPosition:P})}),(0,l.jsx)("div",{className:"".concat(S),style:{minHeight:"calc(100% - 35px)"},children:(0,l.jsx)(f.Z5,{onDragEnd:function(n){d&&function(n,e,r,t){var o,i,d=n.source,a=n.destination;if(a&&(d.draggableId!==a.droppableId||d.index===a.index)){var s=null===(o=r[2])||void 0===o||null===(i=o.days[d.index])||void 0===i?void 0:i.hours;if(!("rejected"===d.droppableId&&e<s))if(d.droppableId!==a.droppableId){var l=null===r||void 0===r?void 0:r.findIndex((function(n){return n.id===d.droppableId})),c=null===r||void 0===r?void 0:r.findIndex((function(n){return n.id===a.droppableId})),f=r&&(0,U.Z)(r[l].days),m=d.droppableId!==a.dropableId?(0,U.Z)(r[c].days):f,h=f.splice(d.index,1),x=(0,u.Z)(h,1)[0];m.splice(a.index,0,x);var p=(0,U.Z)(r);p[l]=(0,v.Z)((0,v.Z)({},r[l]),{},{days:f}),p[c]=(0,v.Z)((0,v.Z)({},r[c]),{},{days:m}),t(p)}else{var y=a.index,b=r.findIndex((function(n){return n.id===d.droppableId})),Z=(0,U.Z)(r[b].days),j=Z.splice(d.index,1),g=(0,u.Z)(j,1)[0];Z.splice(y,0,g);var H=(0,U.Z)(r);H[b]=(0,v.Z)((0,v.Z)({},r[b]),{},{days:Z}),t(H)}}}(n,null===d||void 0===d?void 0:d.calcHours.currentHours,p,y),g((function(n){return!n}))},children:null===p||void 0===p?void 0:p.map((function(n,e){return(0,l.jsx)(B,{column:n,columnIdx:e},n.id)}))})})]})},W=function(){var n=(0,s.TH)().pathname,e=(0,a.useState)(!1),r=(0,u.Z)(e,2),t=r[0],o=r[1];return(0,a.useEffect)((function(){o(!1);var n=setTimeout((function(){o(!0)}));return function(){clearTimeout(n)}}),[n]),(0,l.jsx)(l.Fragment,{children:t&&(0,l.jsxs)("div",{className:"py-1 opacityAnimation",style:{maxWidth:"1000px",width:"100%"},children:[(0,l.jsx)(c,{}),(0,l.jsx)(E,{})]})})},A=function(){var n,e=(0,o.v9)((function(n){return n.monthPanel})),r=e.month,u=e.error,a=e.isLoading,s=(0,i.Z)().monthURLStringFormat;if(a)n=(0,d.a)((0,l.jsx)(t.Z,{animation:"border",variant:"secondary",className:"fs-6",children:(0,l.jsx)("span",{className:"visually-hidden",children:"Loading..."})}));else if(u){if("status"in u){var c="status"in u&&u.status;n=(0,d.a)((0,l.jsxs)("div",{className:"text-danger text-center ",children:[(0,l.jsxs)(l.Fragment,{children:[" B\u0142\u0105d: ",c," "]})," ",(0,l.jsx)("br",{}),(0,l.jsx)(l.Fragment,{children:"Od\u015bwie\u017c stron\u0119"})]}))}}else n=r&&""!==(null===r||void 0===r?void 0:r.id)?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(W,{})}):(0,d.a)((0,l.jsxs)("div",{children:["Brak danych z miesi\u0105ca ",s,". Zapisz miesi\u0105c w ustawieniach."]}));return{requestState:n}},O=r(3786),q=function(){var n=A().requestState;return(0,l.jsx)(O.Z,{children:n})}},2767:function(n,e,r){r.d(e,{Z:function(){return d},p:function(){return i}});var t=r(1830),o=r.n(t),i=function(n){return{title:n,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Tak",cancelButtonText:"Nie"}},d=function(n){o().fire({text:"B\u0142\u0105d ".concat(n),confirmButtonColor:"rgb(31, 180, 255)"})}},3940:function(n,e,r){r.d(e,{a:function(){return o}});var t=r(184),o=function(n){return(0,t.jsx)("div",{className:" d-flex justify-content-center align-items-center fs-3 text-warning text-center",style:{maxWidth:"1000px",width:"100%",height:"100%"},children:n})}}}]);
//# sourceMappingURL=263.0065749b.chunk.js.map