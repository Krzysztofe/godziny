"use strict";(self.webpackChunkgodziny=self.webpackChunkgodziny||[]).push([[885],{9662:function(e,n,r){r.d(n,{j0:function(){return s},kc:function(){return d},p1:function(){return c},vs:function(){return l},xk:function(){return u}});var t=new Date,a=function(e){var n=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),t=String(e.getDate()).padStart(2,"0");return"".concat(n,"-").concat(r,"-").concat(t)},i=new Date(t.getTime()+12096e5),o=new Date(t.getTime()+5184e6),s=t.getFullYear(),l=String(t.getMonth()+1).padStart(2,"0"),d=(String(t.getDate()).padStart(2,"0"),a(t),a(i)),c=a(o),u=new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}).format(t)},1100:function(e,n,r){var t=r(1830),a=r.n(t),i=r(2791),o=r(4849),s=r(184);n.Z=function(e,n){(0,i.useEffect)((function(){if(e.isError){var n=e.error,r=n&&"status"in n&&n.status&&n.status;a().fire({title:"B\u0142\u0105d: ".concat(r||""),confirmButtonColor:"rgb(31, 180, 255)"})}}),[e.isError]);var r=n;return e.isLoading&&(r=(0,s.jsx)(o.Z,{animation:"border",size:"sm",variant:"secondary",children:(0,s.jsx)("span",{className:"visually-hidden",children:"Loading..."})})),{btnContent:r}}},9065:function(e,n,r){var t=r(7689);n.Z=function(){var e=(0,t.TH)().pathname.split("/").slice(-1)[0],n=null===e||void 0===e?void 0:e.slice(0,4),r=null===e||void 0===e?void 0:e.slice(-2);return{monthURL:e,yearFromURL:n,monthFromURL:r}}},1885:function(e,n,r){r.r(n),r.d(n,{default:function(){return O}});var t=r(4849),a=r(9662),i=r(9065),o=r(3210),s=r(1413),l=r(9439),d=r(2791),c=r(793),u=r(7022),m=r(4165),v=r(5861),h=r(3360),x=r(1830),f=r.n(x),p=r(1100),y=r(6856),j=r(1578),g=r(3853),b=r(184),Z=function(e){var n,r;if(null!==e&&void 0!==e&&null!==(n=e.day)&&void 0!==n&&n.date){var t,a,i,o=new Date(e.day.date);return r=new Intl.DateTimeFormat("pl-PL",{day:"numeric",month:"short"}).format(o),(0,b.jsxs)("div",{className:"px-1 py-2 py-sm-1",children:[(0,b.jsxs)("div",{className:"d-flex justify-content-between",style:{fontSize:"clamp(0.8rem, 3.4vw, 1rem)"},children:[(0,b.jsx)("div",{children:null===(t=e.day)||void 0===t?void 0:t.userName}),(0,b.jsxs)("div",{children:[null===(a=e.day)||void 0===a?void 0:a.hours," ",(0,b.jsx)(g.TCC,{className:"text-primary"})]})]}),(0,b.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,b.jsx)("div",{children:r||""}),(0,b.jsx)("div",{children:"Poza"===(null===(i=e.day)||void 0===i?void 0:i.place)?(0,b.jsx)(j.ols,{className:"text-success"}):(0,b.jsx)(y.P8U,{className:"text-danger"})})]})]})}return(0,b.jsx)("div",{children:"Brak danych"})},N=function(e){var n,r=(0,i.Z)(),t=r.yearFromURL,a=r.monthFromURL,d=(0,o.a6)({year:t,month:a}).data,u=(0,o.ur)(),x=(0,l.Z)(u,2),y=x[0],j=x[1],g=(0,p.Z)(j,"Usu\u0144").btnContent,N=function(){var n=(0,v.Z)((0,m.Z)().mark((function n(r,i){return(0,m.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:f().fire({title:"Chcesz usun\u0105\u0107 dzie\u0144?",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Tak",cancelButtonText:"Nie"}).then(function(){var n=(0,v.Z)((0,m.Z)().mark((function n(o){var s,l,c;return(0,m.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!o.isConfirmed){n.next=4;break}return c=null===d||void 0===d||null===(s=d.columns[r])||void 0===s||null===(l=s.days)||void 0===l?void 0:l.filter((function(e){return(null===e||void 0===e?void 0:e.id)!==i})),n.next=4,y({year:t,month:a,colIdx:e.columnIdx,daysBody:c});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 1:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}();return(0,b.jsx)(c._l,{draggableId:e.day&&(null===e||void 0===e||null===(n=e.day)||void 0===n?void 0:n.id),index:e.dayIdx,isDragDisabled:!1,children:function(n){return(0,b.jsxs)("div",(0,s.Z)((0,s.Z)((0,s.Z)({className:"bg-white card mb-2"},n.draggableProps),n.dragHandleProps),{},{ref:n.innerRef,children:[(0,b.jsx)(Z,{day:e.day}),(0,b.jsx)(h.Z,{variant:"info",size:"sm",className:"rounded-top-0 w-100 fw-medium ",onClick:function(){return N(e.columnIdx,e.day.id)},disabled:j.isLoading,children:g})]}))}})},w=function(e){return(0,b.jsx)("div",{className:"w-100",children:(0,b.jsx)(c.bK,{droppableId:e.column.id,children:function(n,r){return(0,b.jsxs)("div",(0,s.Z)((0,s.Z)({},n.droppableProps),{},{ref:n.innerRef,className:"p-1 bg-primary-subtle h-100",children:[Array.isArray(e.column.days)?e.column.days.map((function(n,r){return(0,b.jsx)(N,{day:n,columnIdx:e.columnIdx,dayIdx:r},crypto.randomUUID())})):[],n.placeholder]}))}})})},H=function(){var e=(0,i.Z)(),n=e.yearFromURL,r=e.monthFromURL,t=(0,o.I8)({year:n,month:r}).data;return(0,b.jsx)(b.Fragment,{children:[{headerText:"Z\u0142o\u017cone:",counter:null===t||void 0===t?void 0:t.submittedHours},{headerText:"Przyznane:",counter:null===t||void 0===t?void 0:t.acceptedHours},{headerText:"Odrzucone:",counter:null===t||void 0===t?void 0:t.rejectedHours}].map((function(e){var n=e.headerText,r=e.counter;return(0,b.jsxs)("div",{className:"p-1 bg-primary-subtle text-dark-emphasis fw-medium w-100 border-4 border-bottom border-white",style:{fontSize:"clamp(0.8rem, 3.4vw, 1rem)"},children:[n," ","",r]},n)}))})},z=r(3433),L=function(e){return Array.isArray(e)?null===e||void 0===e?void 0:e.map((function(e){return null!==e&&void 0!==e&&e.hasOwnProperty("days")?e:(0,s.Z)((0,s.Z)({},e),{},{days:[]})})):[]},F=function(){var e=(0,i.Z)(),n=e.yearFromURL,r=e.monthFromURL,t=(0,o.a6)({year:n,month:r}).data;if(t){var a,s,l,d,c,u,m=L(null===t||void 0===t?void 0:t.columns);return{submittedHoursSum:t&&m&&(null===(a=m[0])||void 0===a||null===(s=a.days)||void 0===s?void 0:s.reduce((function(e,n){var r;return e+(null!==(r=null===n||void 0===n?void 0:n.hours)&&void 0!==r?r:0)}),0)),acceptedHoursSum:t&&m&&(null===(l=m[1])||void 0===l||null===(d=l.days)||void 0===d?void 0:d.reduce((function(e,n){var r;return e+(null!==(r=null===n||void 0===n?void 0:n.hours)&&void 0!==r?r:0)}),0)),rejectedHoursSum:t&&m&&(null===(c=m[2])||void 0===c||null===(u=c.days)||void 0===u?void 0:u.reduce((function(e,n){var r;return e+(null!==(r=null===n||void 0===n?void 0:n.hours)&&void 0!==r?r:0)}),0))}}return{submittedHoursSum:0,acceptedHoursSum:0,rejectedHoursSum:0}},S=function(){var e=(0,i.Z)(),n=e.yearFromURL,r=e.monthFromURL,t=(0,o.a6)({year:n,month:r}).data,a=(0,o.X)(),m=(0,l.Z)(a,1)[0],v=(0,o.ej)(),h=(0,l.Z)(v,1)[0],x=null!==t&&void 0!==t&&t.columns?L(t.columns):[],f=F(),p=f.submittedHoursSum,y=f.acceptedHoursSum,j=f.rejectedHoursSum,g=(0,d.useState)([]),Z=(0,l.Z)(g,2),N=Z[0],S=Z[1],I=(0,d.useState)(null),k=(0,l.Z)(I,2),U=k[0],R=k[1];(0,d.useEffect)((function(){S(x)}),[t]),(0,d.useEffect)((function(){null!==U&&m({year:n,month:r,columnsBody:N})}),[U]),(0,d.useEffect)((function(){var e,a;h({year:n,month:r,allHours:(0,s.Z)((0,s.Z)({},null===t||void 0===t?void 0:t.calc),{},{currentHours:(null!==(e=null===t||void 0===t||null===(a=t.calc)||void 0===a?void 0:a.allHours)&&void 0!==e?e:0)-p-y-j+j,submittedHours:p,acceptedHours:y,rejectedHours:j})})}),[t]);var C=(0,d.useRef)(null),B=(0,d.useState)(0),D=(0,l.Z)(B,2),T=D[0],P=D[1];return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("main",{ref:C,onScroll:function(){var e=C.current;if(e){var n=e.scrollTop,r=e.scrollHeight,t=e.clientHeight;P(n/(r-t)*100)}},className:"mb-2 overflow-y-scroll ",style:{top:"".concat(T,"%")},children:[(0,b.jsx)(u.Z,{className:"mx-0 ms-sm-auto sticky-top d-flex column-gap-2",children:(0,b.jsx)(H,{})}),(0,b.jsx)(u.Z,{className:"mx-0 ms-sm-auto mb-5 d-flex column-gap-2",style:{height:"fit-content"},children:(0,b.jsx)(c.Z5,{onDragEnd:function(e){!function(e,n,r){var t=e.source,a=e.destination;if(a&&(t.draggableId!==a.droppableId||t.index===a.index))if(t.droppableId!==a.droppableId){var i=null===n||void 0===n?void 0:n.findIndex((function(e){return e.id===t.droppableId})),o=null===n||void 0===n?void 0:n.findIndex((function(e){return e.id===a.droppableId})),d=n&&(0,z.Z)(n[i].days),c=t.droppableId!==a.dropableId?(0,z.Z)(n[o].days):d,u=d.splice(t.index,1),m=(0,l.Z)(u,1)[0];c.splice(a.index,0,m);var v=(0,z.Z)(n);v[i]=(0,s.Z)((0,s.Z)({},n[i]),{},{days:d}),v[o]=(0,s.Z)((0,s.Z)({},n[o]),{},{days:c}),r(v)}else{var h=a.index,x=n.findIndex((function(e){return e.id===t.droppableId})),f=(0,z.Z)(n[x].days),p=f.splice(t.index,1),y=(0,l.Z)(p,1)[0];f.splice(h,0,y);var j=(0,z.Z)(n);j[x]=(0,s.Z)((0,s.Z)({},n[x]),{},{days:f}),r(j)}}(e,N,S),R(e)},children:null===N||void 0===N?void 0:N.map((function(e,n){return(0,b.jsx)(w,{column:e,columnIdx:n},e.id)}))})})]})})},I=r(7858),k=r(3027),U=r(5705),R=r(8007),C=R.Ry({allHours:R.Rx().max(320,"Max. 320").required("Podaj liczb\u0119 godzin")}),B=function(){var e=(0,i.Z)(),n=e.yearFromURL,r=e.monthFromURL,t=(0,o.I8)({year:n,month:r}).data,a=(0,o.uZ)(),s=(0,l.Z)(a,2),d=s[0],c=s[1],u=(0,U.TA)({initialValues:{allHours:0},validationSchema:C,onSubmit:function(){var e=(0,v.Z)((0,m.Z)().mark((function e(a){return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((null===t||void 0===t?void 0:t.submittedHours)+(null===t||void 0===t?void 0:t.acceptedHours)>+u.values.allHours)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,d({year:n,month:r,allHours:+a.allHours});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()});return{formik:u,success:c}},D=function(){var e=B(),n=e.formik,r=e.success,t=(0,i.Z)(),a=t.yearFromURL,s=t.monthFromURL,l=(0,o.I8)({year:a,month:s}).data,d=(0,p.Z)(r,"Zapisz liczb\u0119 godzin").btnContent;return(0,b.jsxs)(k.Z,{onSubmit:n.handleSubmit,className:"my-2",children:[(0,b.jsx)(k.Z.Control,{type:"number",name:"allHours",min:0,max:320,value:n.values.allHours,onChange:n.handleChange,onBlur:n.handleBlur,placeholder:"Liczba",size:"sm",className:"p-0 px-1 mx-auto mb-2 border border-primary",style:{minHeight:0,cursor:"pointer",width:"fit-content"}}),(0,b.jsx)("div",{className:"text-danger d-block mt-0 fs-8 text-center",style:{height:"0.7rem"},children:(null===l||void 0===l?void 0:l.submittedHours)+(null===l||void 0===l?void 0:l.acceptedHours)>+n.values.allHours?"Podaj ilo\u015b\u0107 godzin wi\u0119ksz\u0105 od ".concat((null===l||void 0===l?void 0:l.submittedHours)+(null===l||void 0===l?void 0:l.acceptedHours)," "):""}),(0,b.jsxs)(k.Z.Group,{className:"mt-2 d-flex align-items-center w-100",children:[(0,b.jsx)("div",{className:"fw-medium",children:"0"}),(0,b.jsx)(k.Z.Range,{name:"allHours",min:0,max:320,value:n.values.allHours,onChange:n.handleChange,onBlur:n.handleBlur,className:"form-range custom-range mx-2 medium",style:{height:10,background:"linear-gradient(to right, olive 0%, red ".concat(n.values.allHours,"%, transparent ").concat(n.values.allHours,"%, transparent 100%)")}}),(0,b.jsx)("div",{className:"fw-medium",children:"320"})]}),(0,b.jsx)(h.Z,{type:"submit",variant:"info",size:"sm",className:"fw-medium d-block mx-auto mt-2 col-sm-4 col-md-3 col-lg-2",disabled:r.isLoading,children:d})]})},T=function(){var e=(0,d.useState)(!1),n=(0,l.Z)(e,2),r=n[0],t=n[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(h.Z,{onClick:function(){return t(!r)},"aria-controls":"example-collapse-text","aria-expanded":r,variant:"info",className:"fw-medium p-1 w-100 mt-1 d-flex justify-content-center align-items-center",children:["Liczba godzin w miesi\u0105cu",(0,b.jsx)(y.x3N,{className:"fs-1 fw-medium",style:{transform:"".concat(r?"rotate(180deg)":""," "),transitionDuration:"320ms"}})]}),(0,b.jsx)(I.Z,{in:r,children:(0,b.jsx)("div",{className:"bg-primary-subtle rounded p-1",children:(0,b.jsx)(D,{})})})]})},P=r(7689),E=function(){var e=(0,P.UO)().monthURL,n=e&&new Date(e);return{monthURLStringFormat:n&&new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}).format(n)}},A=function(){var e=(0,i.Z)(),n=e.yearFromURL,r=e.monthFromURL,t=(0,o.I8)({year:n,month:r}).data,a=E().monthURLStringFormat;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"text-capitalize fw-medium mt-2 text-center d-sm-none",children:a}),(0,b.jsxs)("div",{className:" d-flex justify-content-center my-2 fw-medium position-relative",children:[(0,b.jsx)("div",{className:"text-capitalize fw-medium d-none d-sm-block  position-absolute end-0",children:a}),(0,b.jsx)("div",{className:"col-3 text-end",children:"Wszystkie"}),(0,b.jsxs)("div",{className:"mx-2",children:[null===t||void 0===t?void 0:t.allHours," -"," ",(0,b.jsx)("span",{className:"".concat((null===t||void 0===t?void 0:t.currentHours)<0?"text-danger":""),children:null===t||void 0===t?void 0:t.currentHours})]}),(0,b.jsx)("div",{className:"col-3 ".concat((null===t||void 0===t?void 0:t.currentHours)<0?"text-danger":""),children:(null===t||void 0===t?void 0:t.currentHours)<0?"Brak":"Dost\u0119pne"})]})]})},M=function(){return(0,b.jsx)("header",{className:"me-3",children:(0,b.jsxs)(u.Z,{className:"mx-0 ms-sm-auto ",children:[(0,b.jsx)(T,{}),(0,b.jsx)(A,{})]})})},O=function(){var e,n=(0,i.Z)(),r=n.yearFromURL,s=n.monthFromURL,l=(0,o.S$)(void 0),d=l.data,c=l.error,u=l.isLoading,m=(0,o.a6)({year:r,month:s}).data;if(u)e=(0,b.jsx)("main",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:(0,b.jsx)(t.Z,{animation:"border",variant:"secondary",children:(0,b.jsx)("span",{className:"visually-hidden",children:"Loading..."})})});else if(c){if("status"in c){var v="status"in c&&c.status;return(0,b.jsx)("main",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:(0,b.jsx)("h3",{className:"text-danger col-5",children:(0,b.jsxs)(b.Fragment,{children:[" B\u0142\u0105d: ",v," "]})})})}}else e=d?m?(0,b.jsxs)("main",{className:"d-flex flex-column",style:{height:"100vh"},children:[(0,b.jsx)(M,{}),(0,b.jsx)(S,{})]}):(0,b.jsx)("main",{className:"d-flex justify-content-center align-items-center text-center",style:{height:"100vh"},children:(0,b.jsxs)("h3",{className:"text-warning text-center col-5",children:["Brak danych z miesi\u0105ca ",a.xk,". Dodaj miesi\u0105c za pomoc\u0105 formularza"]})}):(0,b.jsx)("main",{className:"d-flex justify-content-center align-items-center text-center",style:{height:"100vh"},children:(0,b.jsx)("h5",{className:"text-warning text-center col-5",children:"Brak  miesi\u0119cy zapisanych w bazie danych. Dodaj miesi\u0105c za pomoc\u0105 formularza"})});return(0,b.jsx)(b.Fragment,{children:e})}}}]);
//# sourceMappingURL=885.95f8a4f4.chunk.js.map