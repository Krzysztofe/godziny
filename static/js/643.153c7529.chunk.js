"use strict";(self.webpackChunkgodziny=self.webpackChunkgodziny||[]).push([[643],{380:function(n,e,r){var t=r(184);e.Z=function(){return(0,t.jsx)("div",{className:"border d-md-none"})}},6579:function(n,e,r){r.d(e,{Z:function(){return u}});var t=r(7064),i=r(5048),o=r(3360),s=r(184),a=function(n){return(0,s.jsx)(o.Z,{id:"noButton",className:"_radius bg-primary border-0 px-5 ms-4",onClick:n.action,children:"Ok"})},d=function(n){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{id:"noButton",className:"_radius bg-dark border-0 px-4 px-sm-5",children:"Nie"}),(0,s.jsx)(o.Z,{onClick:n.action,className:"_radius bg-primary border-0 px-4 px-sm-5 ms-4",children:"Tak"})]})},u=function(n){var e=(0,i.I0)();return n.isPrinted?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{id:"opacityContainer",className:"fixed-top _d-center _alert",onClick:function(r){var i;["opacityContainer","noButton"].includes(null===(i=r.target)||void 0===i?void 0:i.id)&&(null!==n&&void 0!==n&&n.setIsPrinted&&(null===n||void 0===n||n.setIsPrinted(!1)),e((0,t.VG)("")))},children:(0,s.jsxs)("div",{className:"p-5 bg-white _radius text-center fs-2 fw-medium _anim-dropDown",children:[n.header,(0,s.jsx)("div",{className:"_w-fitContent m-auto mt-4",children:n.header.includes("Usun\u0105\u0107")?(0,s.jsx)(d,{action:n.action}):(0,s.jsx)(a,{action:n.action})})]})})}):null}},9871:function(n,e,r){var t=r(7425),i=r(184);e.Z=function(){return(0,i.jsx)(t.GnT,{className:"text-light-emphasis fs-2 ms-auto"})}},4954:function(n,e,r){r.d(e,{Z:function(){return u}});var t=r(9439),i=r(2791),o=r(4604),s=function(){var n=(0,i.useState)(61),e=(0,t.Z)(n,2),r=e[0],s=e[1],a=0,d=function(){a=Date.now()+3e5};return(0,i.useEffect)((function(){var n=setInterval((function(){!function(){var n=Math.max(0,Math.floor((a-Date.now())/1e3));s(n),a<Date.now()&&o.I8.signOut()}()}),1e3);return function(){return clearInterval(n)}}),[]),(0,i.useEffect)((function(){d();var n=["mousemove","keypress","click","scroll"];return n.map((function(n){return document.addEventListener(n,d)})),function(){n.map((function(n){return document.addEventListener(n,d)}))}}),[]),{secondsRemaining:r}},a=r(184),d=function(){var n=s().secondsRemaining;return n+1>60?null:(0,a.jsx)("div",{className:"fixed-top _d-center p-5 _autoLogout",children:(0,a.jsxs)("div",{className:"p-4 bg-white text-center rounded-1 _fs-primary fw-semiBold _anim-dropDown",children:["Wylogowanie nast\u0105pi za",(0,a.jsxs)("div",{className:"d-flex mx-auto _w-fitContent",children:[n+1," ",(0,a.jsx)("div",{children:"\xa0s."})]})]})})},u=function(n){return(0,a.jsxs)("main",{className:"d-flex m-0 bg-secondary _indexContainer ",children:[(0,a.jsx)("aside",{className:"_indexContainer__aside"}),(0,a.jsxs)("div",{className:"_indexContainer__rightSide",children:[(0,a.jsx)(d,{}),n.children]})]})}},4256:function(n,e,r){var t=r(184);e.Z=function(n){return(0,t.jsx)(t.Fragment,{children:n.styles((0,t.jsx)("div",{className:"text-danger fs-1 text-center",children:"B\u0142\u0105d. Od\u015bwie\u017c stron\u0119"}))})}},3464:function(n,e,r){var t=r(4849),i=r(184);e.Z=function(n){return(0,i.jsx)(i.Fragment,{children:n.styles((0,i.jsx)(t.Z,{animation:"border",variant:"primary",className:"fs-5",children:(0,i.jsx)("span",{className:"visually-hidden",children:"Loading..."})}))})}},7359:function(n,e,r){var t=r(9439),i=r(2791),o=r(6579),s=r(184);e.Z=function(n,e){var r=(0,i.useState)(!1),a=(0,t.Z)(r,2),d=a[0],u=a[1];return{handleAlert:function(){u(!0)},alert:(0,s.jsx)(o.Z,{action:n,isPrinted:d,setIsPrinted:u,header:e})}}},805:function(n,e,r){var t=r(4849),i=r(184);e.Z=function(n,e){var r=e;return n&&(r=(0,i.jsx)(t.Z,{animation:"border",size:"sm",variant:"primary",className:"text-dark",children:(0,i.jsx)("span",{className:"visually-hidden",children:"Loading..."})})),{btnContent:r}}},3234:function(n,e,r){var t=r(7689);e.Z=function(){var n=(0,t.TH)().pathname.slice(1);if(n&&/^\d{4}-\d{2}$/.test(n)){var e,r=n&&new Date(n);return{monthURLStringFormat:r&&(null===(e=new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}))||void 0===e?void 0:e.format(r))}}return{monthURLStringFormat:""}}},9065:function(n,e,r){var t=r(7689);e.Z=function(){var n=(0,t.TH)().pathname.split("/").slice(-1)[0],e=null===n||void 0===n?void 0:n.slice(0,4),r=null===n||void 0===n?void 0:n.slice(-2);return{monthURL:n,yearFromURL:e,monthFromURL:r,isMonthInURL:/^\d{4}-\d{2}$/.test(n)}}},8643:function(n,e,r){r.r(e),r.d(e,{default:function(){return X}});var t=r(5048),i=r(4954),o=r(2791),s=r(8755),a=r(7615),d=r(9065),u=function(){var n=(0,t.I0)(),e=(0,d.Z)(),r=e.yearFromURL,i=e.monthFromURL,u=(0,d.Z)().isMonthInURL,c=u?r:"",l=u?i:"",v=(0,a.a6)({year:c,month:l}),m=v.data,f=v.error,h=v.isLoading;(0,o.useEffect)((function(){n((0,s.jw)(m)),n((0,s.MP)(f)),n((0,s.ed)(h))}),[m,f,h,n])},c=r(3234),l=r(184),v=function(){var n=(0,c.Z)().monthURLStringFormat;return(0,l.jsxs)("div",{className:"_d-center fs-2 text-warning text-center _monthPanelEmpty",children:["Brak danych z miesi\u0105ca ",n,". Zapisz miesi\u0105c w ustawieniach."]})},m=r(4256),f=r(3464),h=r(9439),x=r(7689),p=r(380),j=function(){var n,e=(0,c.Z)().monthURLStringFormat,r=(null===(n=e[0])||void 0===n?void 0:n.toUpperCase())+e.slice(1);return(0,l.jsx)("div",{className:"text-center fs-4 d-md-none",children:r})},y=function(){var n,e,r,i,o=(0,t.v9)((function(n){return n.monthPanel})).month;return(0,l.jsxs)("div",{className:"position-sticky z-3 fs-2 top-0 py-2 bg-secondary",children:[(0,l.jsxs)("div",{className:"d-flex mx-auto fw-medium _w-fitContent",children:[(0,l.jsxs)("div",{children:["Wszystkie ",null===o||void 0===o||null===(n=o.calcHours)||void 0===n?void 0:n.allHours,"\xa0-\xa0"]}),(0,l.jsxs)("div",{className:"".concat(o&&(null===o||void 0===o||null===(e=o.calcHours)||void 0===e?void 0:e.currentHours)<=0?"text-danger":""),children:[(0,l.jsx)("strong",{children:o&&(null===o||void 0===o||null===(r=o.calcHours)||void 0===r?void 0:r.currentHours)})," ","",o&&(null===o||void 0===o||null===(i=o.calcHours)||void 0===i?void 0:i.currentHours)<=0?"Brak":"Dost\u0119pne"]})]}),(0,l.jsx)(j,{})]})},g=r(793),Z=r(1413),b=r(4261),H=r(3360),_=r(9871),N=r(7359),w=r(805),I=r(4165),k=r(5861),L=function(n,e){var r=n.columns.map((function(n){var r,t=null===n||void 0===n||null===(r=n.days)||void 0===r?void 0:r.filter((function(n){return console.log("",null===n||void 0===n?void 0:n.id),!(!n||!n.id)&&n.id!==e}));return(0,Z.Z)((0,Z.Z)({},n),{},{days:t})}));return(0,Z.Z)((0,Z.Z)({},n),{},{columns:r})},C=function(n,e,r){if(!n||!n.calcHours)return{currentHours:0,submittedHours:0,acceptedHours:0,rejectedHours:0,allHours:0};var t=n.calcHours;return(0,Z.Z)((0,Z.Z)({},t),{},{currentHours:2!==e&&r?t.currentHours+r:t.currentHours,submittedHours:0===e&&r?t.submittedHours-r:t.submittedHours,acceptedHours:1===e&&r?t.acceptedHours-r:t.acceptedHours,rejectedHours:2===e&&r?t.rejectedHours-r:t.rejectedHours})},D=function(n,e){var r=(0,t.v9)((function(n){return n.monthPanel})).month,i=(0,a.ur)(),o=(0,h.Z)(i,2),s=o[0],u=o[1],c=(0,d.Z)(),l=c.yearFromURL,v=c.monthFromURL,m=function(){var t=(0,k.Z)((0,I.Z)().mark((function t(){var i;return(0,I.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=null===n||void 0===n?void 0:n.hours,console.log("async",n.id),t.t0=r,!t.t0){t.next=6;break}return t.next=6,s({year:l,month:v,colIdx:e,monthBody:(0,Z.Z)((0,Z.Z)({},r),{},{calcHours:C(r,+e,i),columns:L((0,Z.Z)({},r),null===n||void 0===n?void 0:n.id).columns})});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{deleteDayAsync:m,success:u}},P=function(n){var e,r=D(n.day,n.columnIdx),t=r.deleteDayAsync,i=r.success,o=(0,N.Z)(t,"Usun\u0105\u0107 dzie\u0144?"),s=o.handleAlert,a=o.alert,d=(0,w.Z)(i.isLoading,(0,l.jsx)(_.Z,{})).btnContent;return(0,l.jsxs)(l.Fragment,{children:[a,(0,l.jsxs)(H.Z,{onClick:s,className:"d-flex justify-content-between fs-4 _fw-semiBold align-items-center w-100 p-0 bg-transparent border-0 text-dark",disabled:i.isLoading,children:[(0,l.jsxs)("div",{children:[null===(e=n.day)||void 0===e?void 0:e.hours," h"]}),(0,l.jsx)("div",{children:d})]})]})},U=r(6856),F=r(1578),R=function(n){return(0,l.jsx)("div",{children:"Poza"===n.place?(0,l.jsx)(F.ols,{className:"text-light-emphasis"}):(0,l.jsx)(U.P8U,{className:"text-light-emphasis"})})},z=function(n){var e,r;if(null===n||void 0===n||!n.day)return(0,l.jsx)("div",{children:"Brak danych"});var t=function(n){var e=new Date(n);return new Intl.DateTimeFormat("pl-PL",{day:"numeric",month:"short"}).format(e)}(null===n||void 0===n||null===(e=n.day)||void 0===e?void 0:e.date);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"d-flex justify-content-between text-light-emphasis fs-4 ",children:[(0,l.jsx)("div",{children:null===(r=n.day)||void 0===r?void 0:r.userName}),(0,l.jsx)(R,{place:n.day.place})]}),(0,l.jsx)("div",{className:"d-flex justify-content-between text-light-emphasis fs-4 _fw-semiBold",children:(0,l.jsx)("div",{children:t||""})})]})},E=function(n){var e,r,i=(0,t.v9)((function(n){return n.filterDays})).searchedName;return i&&"Szukaj"!==i?i!==n.day.userName&&(r="d-none"):r="d-block",(0,l.jsx)(g._l,{draggableId:n.day&&(null===n||void 0===n||null===(e=n.day)||void 0===e?void 0:e.id),index:n.dayIdx,isDragDisabled:!1,children:function(e,t){var i;return(0,l.jsx)("div",(0,Z.Z)((0,Z.Z)((0,Z.Z)({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,className:"mb-2 bg-white _radius border ".concat(t.isDragging?"border-dark":"border-dark-subtle"," ").concat(r),children:(0,l.jsxs)("div",{className:"ps-2 pe-1 py-2 py-sm-1 _radius",style:{borderTop:"8px solid ".concat(null===(i=n.day)||void 0===i?void 0:i.userColor),opacity:t.isDragging?.8:1},children:[(0,l.jsx)(z,{day:n.day}),(0,l.jsx)(P,{columnIdx:n.columnIdx,day:n.day})]})}))}})},T=function(n){var e=(0,t.v9)((function(n){return n.filterDays})).searchedName,r=e&&"Szukaj"!==e?"_isSearching":"";return(0,l.jsx)("div",{className:"_column position-relative",children:(0,l.jsx)(g.bK,{droppableId:n.column.id,children:function(e,t){return(0,l.jsxs)("div",(0,Z.Z)((0,Z.Z)({},e.droppableProps),{},{ref:e.innerRef,className:"p-1 pt-3 px-lg-3 h-100 overflow-hidden border border-1 border border-top-0  ".concat((i=t.isDraggingOver,i?"_isDragging":"_noDragging")," ").concat(r),children:[Array.isArray(n.column.days)?n.column.days.map((function(e,r){return(0,l.jsx)(E,{day:e,columnIdx:n.columnIdx,dayIdx:r},(0,b.Z)())})):[],e.placeholder]}));var i}})})},B=r(3433),S=function(n){var e=(0,t.v9)((function(n){return n.monthPanel})).month,r=(0,o.useState)([n.counter]),i=(0,h.Z)(r,2),s=i[0],a=i[1],d=(0,o.useRef)(!0);return(0,o.useEffect)((function(){a([n.counter]),d.current=!1}),[null===e||void 0===e?void 0:e.id]),(0,o.useEffect)((function(){d.current?a((function(e){var r;return[].concat((0,B.Z)(e),[null!==(r=null===n||void 0===n?void 0:n.counter)&&void 0!==r?r:0])})):d.current=!0}),[n.counter]),(0,l.jsx)("div",{className:"_counter",children:(0,l.jsx)("div",{style:{transform:"translateY(-".concat(20*(s.length-1),"px)"),transition:"transform 0.3s"},children:s.map((function(n,e){return(0,l.jsx)("div",{className:"_counter__dygit",children:n},e)}))})})},A=function(){var n,e,r,i=(0,t.v9)((function(n){return n.monthPanel})).month;return{dataColumnsHeader:[{headerText:"Z\u0142o\u017cone:",counter:null===i||void 0===i||null===(n=i.calcHours)||void 0===n?void 0:n.submittedHours},{headerText:"Przyznane:",counter:null===i||void 0===i||null===(e=i.calcHours)||void 0===e?void 0:e.acceptedHours},{headerText:"Odrzucone:",counter:null===i||void 0===i||null===(r=i.calcHours)||void 0===r?void 0:r.rejectedHours}]}},M=function(){var n=A().dataColumnsHeader;return(0,l.jsx)("div",{className:"_d-between _columnsHeader",children:n.map((function(n){var e=n.headerText,r=n.counter;return(0,l.jsxs)("div",{className:"text-primary _d-center _fw-semiBold p-1 _columnsHeader__item bg-secondary  border border-bottom-0            \n            ",children:[e,(0,l.jsx)(S,{counter:r,text:e})]},e)}))})},O=function(n){var e,r=(0,t.v9)((function(n){return n.monthPanel})).month,i=r&&(e=null===r||void 0===r?void 0:r.columns,Array.isArray(e)?null===e||void 0===e?void 0:e.map((function(n){return null!==n&&void 0!==n&&n.hasOwnProperty("days")?n:(0,Z.Z)((0,Z.Z)({},n),{},{days:[]})})):[]);(0,o.useEffect)((function(){i&&n(i)}),[null===r||void 0===r?void 0:r.columns])},G=function(n){return null===n||void 0===n?void 0:n.reduce((function(n,e){return n+((null===e||void 0===e?void 0:e.hours)||0)}),0)},W=function(n,e){var r=(0,d.Z)(),i=r.yearFromURL,s=r.monthFromURL,u=(0,a.CB)(),c=(0,h.Z)(u,1)[0],l=(0,t.v9)((function(n){return n.monthPanel})).month,v=function(n){var e,r,t;return{submittedHours:G(null===(e=n[0])||void 0===e?void 0:e.days),acceptedHours:G(null===(r=n[1])||void 0===r?void 0:r.days),rejectedHours:G(null===(t=n[2])||void 0===t?void 0:t.days)}}(n),m=v.submittedHours,f=v.acceptedHours,x=v.rejectedHours;(0,o.useEffect)((function(){var e;n.length>0&&l&&c({year:i,month:s,monthBody:(0,Z.Z)((0,Z.Z)({},l),{},{columns:n,calcHours:(0,Z.Z)((0,Z.Z)({},null===l||void 0===l?void 0:l.calcHours),{},{currentHours:(null===l||void 0===l||null===(e=l.calcHours)||void 0===e?void 0:e.allHours)-m-f-x+x,submittedHours:m,acceptedHours:f,rejectedHours:x})})})}),[e])},$=function(n,e){return null===n||void 0===n?void 0:n.findIndex((function(n){return n.id===e.droppableId}))},q=function(n,e){var r=n.splice(e.index,1);return(0,h.Z)(r,1)[0]},K=function(n,e,r){var t=(0,B.Z)(n);return t[e]=(0,Z.Z)((0,Z.Z)({},n[e]),{},{days:r}),t},V=function(n,e,r,t){var i=n.source,o=n.destination;o&&(i.draggableId===o.droppableId&&i.index!==o.index||"rejected"!==i.droppableId&&(i.droppableId!==o.droppableId?function(n,e,r,t){var i=$(n,e),o=function(n,e){return null===n||void 0===n?void 0:n.findIndex((function(n){return n.id===e.droppableId}))}(n,r),s=n&&(0,B.Z)(n[i].days),a=e.droppableId!==r.dropableId?(0,B.Z)(n[o].days):s,d=q(s,e);a.splice(r.index,0,d);var u=K(n,i,s);t(K(u,o,a))}(e,i,o,r):function(n,e,r,t){var i=r.index,o=$(n,e),s=(0,B.Z)(n[o].days),a=q(s,e);s.splice(i,0,a),t(K(n,o,s))}(e,i,o,r)))},Y=function(){var n=(0,t.v9)((function(n){return n.monthPanel})).month,e=((0,t.v9)((function(n){return n.filterDays})).searchedName,(0,o.useState)([])),r=(0,h.Z)(e,2),i=r[0],s=r[1],a=(0,o.useState)(!1),d=(0,h.Z)(a,2),u=d[0],c=d[1];O(s),W(i,u);return(0,l.jsxs)("div",{className:"_columnsContainer",children:[(0,l.jsx)(M,{}),(0,l.jsx)("div",{className:"_d-between _dragDropContex",children:(0,l.jsx)(g.Z5,{onDragEnd:function(e){n&&V(e,i,s),c((function(n){return!n}))},children:null===i||void 0===i?void 0:i.map((function(n,e){return(0,l.jsx)(T,{columnIdx:e,column:n},n.id)}))})})]})},J=function(){var n=(0,x.TH)().pathname,e=(0,o.useState)(!1),r=(0,h.Z)(e,2),t=r[0],i=r[1];return(0,o.useEffect)((function(){i(!1);var n=setTimeout((function(){i(!0)}));return function(){clearTimeout(n)}}),[n]),(0,l.jsx)(l.Fragment,{children:t&&(0,l.jsxs)("div",{className:"px-2 px-sm-5 px-md-3 pb-3 _anim-opacity",children:[(0,l.jsx)(p.Z,{}),(0,l.jsx)(y,{}),(0,l.jsx)(Y,{})]})})},Q=r(2050),X=function(){u();var n,e=(0,t.v9)((function(n){return n.monthPanel})),r=e.month,o=e.monthErrorGet,s=e.monthIsLoading,a=(0,t.v9)((function(n){return n.listUsers})),d=a.listUsersError,c=a.listUsersIsLoading,h=(0,t.v9)((function(n){return n.listMonths})).listMonthsError;return n=s||c?(0,l.jsx)(f.Z,{styles:Q.u}):o||d||h?(0,l.jsx)(m.Z,{styles:Q.u}):r&&""!==(null===r||void 0===r?void 0:r.id)?(0,l.jsx)(J,{}):(0,l.jsx)(v,{}),(0,l.jsx)(i.Z,{children:n})}},2050:function(n,e,r){r.d(e,{u:function(){return i}});var t=r(184),i=function(n){return(0,t.jsx)("div",{className:"fixed-top _d-center fs-4 _requestContainer",style:{width:"100vw",height:"100vh",zIndex:"1060",backgroundColor:"rgba(255,255,255,0.4)"},children:n})}}}]);
//# sourceMappingURL=643.153c7529.chunk.js.map