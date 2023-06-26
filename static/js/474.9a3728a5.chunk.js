"use strict";(self.webpackChunkgodziny=self.webpackChunkgodziny||[]).push([[474],{5474:function(e,n,r){r.r(n),r.d(n,{default:function(){return L}});var a=r(9439),t=r(2791),o=r(3360),i=r(3787),s=r(8014),d=r(7689),l=r(3200),u=r(4165),c=r(1413),m=r(3433),h=r(5861),p=r(5705),v=r(6712),f={id:crypto.randomUUID(),date:"",hours:"",userName:"",place:""},x=r(8007),Z=x.Ry({userName:x.Z_().test("is-name-valid","Podaj imi\u0119",(function(e){return"Imi\u0119"!==e})).required("Podaj imi\u0119"),date:x.Z_().required("Podaj dat\u0119"),hours:x.nK().test("is-hours-valid","Podaj liczb\u0119 z\u0142o\u017conych godzin",(function(e){return"Liczba godzin"!==e})).required("Podaj liczb\u0119 z\u0142o\u017conych godzin"),place:x.Z_().test("is-place-valid","Podaj lokalizacj\u0119",(function(e){return"Lokalizacja"!==e})).required("Podaj lokalizacj\u0119")}),j=r(322),y=function(){var e=(0,j.CB)(),n=(0,a.Z)(e,2),r=n[0],t=n[1],o=(0,d.TH)().pathname.split("/"),i=o[o.length-1],s=((0,d.UO)().monthURL,(0,v.Z)(i)),l=s.databaseColumns,x=s.databaseMonth,y=s.data,b=s.dataCurrentHours,g=(0,p.TA)({initialValues:f,validationSchema:Z,onSubmit:function(){var e=(0,h.Z)((0,u.Z)().mark((function e(n){var a,t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g.setFieldValue("id",crypto.randomUUID()),!(b-+g.values.hours<0)){e.next=3;break}return e.abrupt("return");case 3:return(t=y&&x&&(null===l||void 0===l?void 0:l.length)>0?(0,m.Z)(l):[])[0]=y&&x&&(null===l||void 0===l?void 0:l.length)>0&&(0,c.Z)((0,c.Z)({},null===l||void 0===l?void 0:l[0]),{},{days:[].concat((0,m.Z)(null===l||void 0===l||null===(a=l[0])||void 0===a?void 0:a.days),[(0,c.Z)((0,c.Z)({},n),{},{hours:+n.hours})])}),e.next=7,r({id:y&&x.id,columns:(0,c.Z)((0,c.Z)({},x),{},{columns:t})});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()});return{formik:g,success:t}},b=r(4849),g=r(3855),z=r(184),N=function(){(0,d.UO)().monthURL;var e=y(),n=e.formik,r=e.success,a=(0,d.TH)().pathname.split("/"),t=a[a.length-1],i=(0,v.Z)(t),s=i.dataCurrentHours,l=i.databaseAllHours,u=(0,z.jsx)("span",{children:"Zatwierd\u017a dzie\u0144"});return r.isLoading&&(u=(0,z.jsx)(b.Z,{animation:"border",size:"sm",variant:"secondary",children:(0,z.jsx)("span",{className:"visually-hidden",children:"Loading..."})})),r.isError&&(u=(0,z.jsx)("span",{children:' "B\u0142\u0105d" '})),0===l&&(u=(0,z.jsx)("span",{style:{color:"red"},children:" Podaj godziny"})),s-+n.values.hours<0&&(u=(0,z.jsx)("span",{style:{color:"red"},children:"Brak godzin "})),(0,z.jsxs)(g.Z,{onSubmit:n.handleSubmit,className:"mt-4",children:[(0,z.jsxs)(g.Z.Select,{name:"userName",onChange:n.handleChange,onBlur:n.handleBlur,size:"sm",className:"rounded-0",children:[(0,z.jsx)("option",{children:"Imi\u0119"}),["Jan","Maria","Mariola"].map((function(e){return(0,z.jsx)("option",{value:e,children:e},e)}))]}),(0,z.jsx)(g.Z.Text,{className:"text-danger d-block mt-0 mb-1 lh-0",style:{fontSize:"0.7rem",height:"1rem"},children:n.touched.userName&&n.errors.userName&&n.errors.userName}),(0,z.jsxs)(g.Z.Group,{className:"",children:[(0,z.jsx)(g.Z.Control,{id:"date",type:"date",name:"date",value:n.values.date,onChange:n.handleChange,onBlur:n.handleBlur,min:1,placeholder:"Liczba",size:"sm",className:"rounded-0"}),(0,z.jsx)(g.Z.Text,{className:"text-danger d-block mt-0 mb-1 lh-0",style:{fontSize:"0.7rem",height:"1rem"},children:n.touched.date&&n.errors.date&&n.errors.date})]}),(0,z.jsxs)(g.Z.Select,{name:"hours",onChange:n.handleChange,onBlur:n.handleBlur,size:"sm",className:"rounded-0",children:[(0,z.jsx)("option",{children:"Liczba godzin "}),[1,2,3,4,5,6,7,8,9,10].map((function(e){return(0,z.jsx)("option",{value:+e,children:e},e)}))]}),(0,z.jsx)(g.Z.Text,{className:"text-danger d-block mt-0 mb-1 lh-0",style:{fontSize:"0.7rem",height:"1rem"},children:n.touched.hours&&n.errors.hours&&n.errors.hours}),(0,z.jsxs)(g.Z.Select,{name:"place",onChange:n.handleChange,onBlur:n.handleBlur,size:"sm",className:"rounded-0",children:[(0,z.jsx)("option",{children:"Lokalizacja"}),(0,z.jsx)("option",{value:"Wewn\u0105trz",children:"Wewn\u0105trz"}),(0,z.jsx)("option",{value:"Poza",children:"Poza"})]}),(0,z.jsx)(g.Z.Text,{className:"text-danger d-block mt-0 mb-1 lh-0",style:{fontSize:"0.7rem",height:"1rem"},children:n.touched.place&&n.errors.place&&n.errors.place}),(0,z.jsx)("div",{className:"d-grid",children:(0,z.jsx)(o.Z,{variant:"secondary",type:"submit",className:"rounded-0 fw-medium",children:u})})]})},k=(crypto.randomUUID(),{id:"",month:"",allHours:0,currentHours:0,submitedHours:0,acceptedHours:0,rejectedHours:0,columns:[{id:"miesiac",columnName:"Miesi\u0105c",days:[]},{id:"oczekuj\u0105ce",columnName:"Oczekuj\u0105ce",days:[null]},{id:"zatwierdzone",columnName:"Zatwierdzone",days:[null]}]}),I=function(){var e=(0,j.Su)(),n=(0,a.Z)(e,2),r=n[0],t=n[1],o=new Date,i=new Intl.DateTimeFormat("pl",{year:"numeric"}).format(o),s=new Intl.DateTimeFormat("pl",{month:"2-digit"}).format(o),d=(0,p.TA)({initialValues:{monthYear:"".concat(i,"-").concat(s)},onSubmit:function(){var e=(0,h.Z)((0,u.Z)().mark((function e(n){var a;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,c.Z)((0,c.Z)({},k),{},{month:n.monthYear}),e.next=3,r(a);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()});return{formik:d,success:t}},C=r(8820),H=function(){var e=I(),n=e.formik,r=e.success,a=(0,z.jsx)(C.dEn,{style:{fontSize:"2rem"}});return r.isLoading&&(a=(0,z.jsx)(b.Z,{animation:"border",variant:"secondary",children:(0,z.jsx)("span",{className:"visually-hidden",children:"Loading..."})})),r.isError&&(a=(0,z.jsx)("span",{children:' "B\u0142\u0105d" '})),(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(g.Z,{onSubmit:n.handleSubmit,className:"",children:(0,z.jsxs)(g.Z.Group,{className:"d-flex",children:[(0,z.jsx)(g.Z.Control,{type:"month",name:"monthYear",min:"2023-06",max:"2025-12",value:n.values.monthYear,onChange:n.handleChange,onBlur:n.handleBlur,size:"sm",className:"rounded-0"}),(0,z.jsx)(o.Z,{type:"submit",variant:"secondary",size:"sm",className:"rounded-0 d-flex align-items-center justify-content-center px-0  bg-transparent  text-dark border-0",style:{width:"25%",height:"100%"},children:a})]})})})},w=r(23),S=r(1087),B=function(){var e=(0,j.S$)(void 0).data,n=(0,d.UO)().monthURL,r=(0,v.Z)(n).databaseMonthsCollection,a=e&&r?r.map((function(e){return e.month})).sort((function(e,n){return e<n?-1:e>n?1:0})):[],t=e&&(null===a||void 0===a?void 0:a.map((function(n){var r=e&&a&&new Date(n);return new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}).format(r)})));return(0,z.jsx)(w.Z,{className:"monthListContainer",children:void 0===e||null===e?(0,z.jsx)("p",{className:"py-1 px-2",children:"Brak danych"}):t.map((function(e,n){return(0,z.jsx)(w.Z.Item,{className:"border-0 p-0 px-1 ",children:(0,z.jsx)(S.rU,{to:"/miesiac/".concat(a[n]),style:{textDecoration:"none",color:"black"},children:e},e)},e)}))})},L=function(){var e=(0,d.s0)(),n=(0,d.TH)().pathname,r=(0,t.useState)(!1),u=(0,a.Z)(r,2),c=u[0],m=u[1];return(0,z.jsx)(z.Fragment,{children:["/"].includes(n)?null:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(o.Z,{variant:"primary",onClick:function(){return m((function(e){return!e}))},className:"me-2",style:{position:"absolute",right:0,bottom:"60%"},children:(0,z.jsx)(s.vHB,{})}),(0,z.jsxs)(i.Z,{show:c,onHide:function(){return m(!1)},name:"Disable backdrop",scroll:!0,backdrop:!1,className:"w-20",style:{width:200},children:[(0,z.jsx)(i.Z.Header,{className:"pb-0",children:(0,z.jsx)(i.Z.Title,{children:(0,z.jsx)("div",{onClick:function(){l.I.signOut(),e("/")},className:"fs-6 ",style:{cursor:"pointer"},children:"Wyloguj"})})}),(0,z.jsxs)(i.Z.Body,{children:[(0,z.jsx)(H,{}),(0,z.jsx)(B,{}),(0,z.jsx)(N,{})]})]})]})})}},3200:function(e,n,r){r.d(n,{I:function(){return i}});var a=r(4702),t=r(1793),o=(0,a.ZF)({apiKey:"AIzaSyAvvdzLRow-8AdA5zJH6uv19MOsPLNwC3A",authDomain:"godziny-3b30f.firebaseapp.com",projectId:"godziny-3b30f",storageBucket:"godziny-3b30f.appspot.com",messagingSenderId:"367174950216",appId:"1:367174950216:web:0bd1ea3c1c77b5e797677d"}),i=(0,t.v0)(o)},6712:function(e,n,r){var a=r(1413),t=r(322),o=r(3572);n.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=(0,t.S$)(void 0).data,r=n&&Object.keys(n),i=r&&Object.values(n).flat().map((function(e,n){return(0,a.Z)((0,a.Z)({},e),{},{id:r[n]})})),s=(0,o.nr)(i),d=n&&s.length>0?null===s||void 0===s?void 0:s.find((function(n){return n.month===e})):void 0,l=n&&(null===d||void 0===d?void 0:d.columns),u=n?null===d||void 0===d?void 0:d.allHours:"",c=n?null===d||void 0===d?void 0:d.currentHours:"",m=n?null===d||void 0===d?void 0:d.submitedHours:"",h=n?null===d||void 0===d?void 0:d.acceptedHours:"",p=n?null===d||void 0===d?void 0:d.rejectedHours:"",v=n&&s.length>0&&null!==l&&void 0!==l&&l[0].days?null===l||void 0===l?void 0:l[0].days.reduce((function(e,n){return e+n.hours}),0):0,f=n&&s.length>0&&null!==l&&void 0!==l&&l[0].days?null===l||void 0===l?void 0:l[1].days.reduce((function(e,n){return e+n.hours}),0):0,x=n&&s.length>0&&null!==l&&void 0!==l&&l[0].days?null===l||void 0===l?void 0:l[2].days.reduce((function(e,n){return e+n.hours}),0):0,Z=n&&s?s.map((function(e){return e.month})):[];return{string:Z.map((function(e){var n=new Date(e);return new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}).format(n)})),data:n,databaseMonthsId:r,databaseMonthsCollection:s,databaseMonth:d,databaseColumns:l,databaseAllHours:u,dataCurrentHours:c,databaseAcceptedHours:h,databaseRejectedHours:p,dataBaseSubmitedHours:m,acceptedHoursSum:f,rejectedHoursSum:x,submitedHoursSum:v,databaseMonthsDates:Z}}},3572:function(e,n,r){r.d(n,{nr:function(){return i},qs:function(){return s}});var a=r(9439),t=r(3433),o=r(1413),i=function(e){return Array.isArray(e)?null===e||void 0===e?void 0:e.map((function(e){var n,r;return(null===e||void 0===e||null===(n=e.columns)||void 0===n?void 0:n.every((function(e){return e.hasOwnProperty("days")})))?e:(0,o.Z)((0,o.Z)({},e),{},{columns:null===e||void 0===e||null===(r=e.columns)||void 0===r?void 0:r.map((function(e){return(0,o.Z)((0,o.Z)({},e),{},{days:e.days||[]})}))})})):[]},s=function(e,n,r){var i=e.source,s=e.destination;if(s&&(i.draggableId!==s.droppableId||i.index===s.index))if(i.droppableId!==s.droppableId){var d=n.findIndex((function(e){return e.id===i.droppableId})),l=n.findIndex((function(e){return e.id===s.droppableId})),u=(0,t.Z)(n[d].days),c=i.droppableId!==s.dropableId?(0,t.Z)(n[l].days):u,m=u.splice(i.index,1),h=(0,a.Z)(m,1)[0];c.splice(s.index,0,h);var p=(0,t.Z)(n);p[d]=(0,o.Z)((0,o.Z)({},n[d]),{},{days:u}),p[l]=(0,o.Z)((0,o.Z)({},n[l]),{},{days:c}),r(p)}else{var v=s.index,f=n.findIndex((function(e){return e.id===i.droppableId})),x=(0,t.Z)(n[f].days),Z=x.splice(i.index,1),j=(0,a.Z)(Z,1)[0];x.splice(v,0,j);var y=(0,t.Z)(n);y[f]=(0,o.Z)((0,o.Z)({},n[f]),{},{days:x}),r(y)}}}}]);
//# sourceMappingURL=474.9a3728a5.chunk.js.map