"use strict";(self.webpackChunkgodziny=self.webpackChunkgodziny||[]).push([[35],{5991:function(e,n,a){var r=a(184);n.Z=function(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:e.name,children:e.label}),(0,r.jsx)("input",{id:e.name,type:e.type,name:e.name,value:e.value,onChange:e.handleChange,onBlur:e.handleBlur,placeholder:e.placeholder,style:{width:50}})]})}},8035:function(e,n,a){a.r(n),a.d(n,{default:function(){return w}});var r=a(7689),t=a(1087),o=a(9404),d=a(322),i=a(3728),u=a(184),l=function(e){return(0,u.jsxs)("div",{className:e.containerClass,children:[(0,u.jsx)("input",{type:"radio",name:e.name,value:e.value,checked:e.checked,onChange:e.handleChange,className:e.inuptClass,id:e.value}),(0,u.jsx)("label",{htmlFor:e.value,className:e.labelClass,children:(0,u.jsxs)("small",{children:[" ",e.label?e.label:e.value]})})]})},s=a(5991),c=a(4165),v=a(1413),m=a(3433),h=a(5861),p=a(9439),f=a(5705),b=a(6712),y={id:crypto.randomUUID(),date:"",hours:"",userName:"",place:""},j=a(6727),x=j.Ry({userName:j.Z_().required("Podaj imi\u0119"),date:j.Z_().required("Podaj dat\u0119"),hours:j.Rx().required("Podaj liczb\u0119 godzin").moreThan(0,"Liczba godzin musi by\u0107 wi\u0119ksza od 0"),place:j.Z_().required("Podaj lokalizacj\u0119")}),Z=function(){var e=(0,d.X)(),n=(0,p.Z)(e,2),a=n[0],t=n[1],o=(0,r.TH)().pathname.split("/"),i=o[o.length-1],u=((0,r.UO)().monthURL,(0,b.Z)(i)),l=u.databaseColumns,s=u.databaseMonth,j=u.data,Z=u.dataCurrentHours,g=(0,f.TA)({initialValues:y,validationSchema:x,onSubmit:function(){var e=(0,h.Z)((0,c.Z)().mark((function e(n){var r,t;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g.setFieldValue("id",crypto.randomUUID()),!(Z-+g.values.hours<0)){e.next=3;break}return e.abrupt("return");case 3:return(t=j&&s&&(null===l||void 0===l?void 0:l.length)>0?(0,m.Z)(l):[])[0]=j&&s&&(null===l||void 0===l?void 0:l.length)>0&&(0,v.Z)((0,v.Z)({},null===l||void 0===l?void 0:l[0]),{},{days:[].concat((0,m.Z)(null===l||void 0===l||null===(r=l[0])||void 0===r?void 0:r.days),[n])}),e.next=7,a({id:j&&s.id,columns:(0,v.Z)((0,v.Z)({},s),{},{columns:t})});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()});return{formik:g,success:t}},g=function(){(0,r.UO)().monthURL;var e=Z(),n=e.formik,a=e.success,t=(0,r.TH)().pathname.split("/"),o=t[t.length-1],d=(0,b.Z)(o),c=d.dataCurrentHours,v=d.databaseAllHours,m=(0,u.jsx)("div",{});c-+n.values.hours<0&&(m=(0,u.jsx)("div",{children:" Brak wolnych godzin"})),0===v&&(m=(0,u.jsx)("div",{children:" Podaj ilo\u015b\u0107 godzin w miesi\u0105cu"}));var h=(0,u.jsx)(i.pl2,{});return a.isLoading&&(h=(0,u.jsx)("div",{children:' "Loading" '})),a.isError&&(h=(0,u.jsx)("div",{children:' "B\u0142\u0105d" '})),(0,u.jsxs)("form",{onSubmit:n.handleSubmit,style:{marginTop:20},children:[[{type:"text",value:"userName",label:"Imi\u0119"},{type:"date",value:"date",label:"Dzie\u0144"},{type:"number",value:"hours",label:"Godz."}].map((function(e){var a=e.type,r=e.value,t=e.label;return(0,u.jsxs)("div",{children:[(0,u.jsx)(s.Z,{type:a,name:r,value:n.values[r],label:t,placeholder:t,handleChange:n.handleChange,handleBlur:n.handleBlur}),(0,u.jsx)("div",{style:{color:"red"},children:n.touched[r]&&n.errors[r]&&(0,u.jsx)("small",{children:n.errors[r]})})]},r)})),["Wewn\u0105trz","Poza"].map((function(e){return(0,u.jsx)(l,{value:e,name:"place",handleChange:n.handleChange,checked:n.values.place===e},e)})),(0,u.jsx)("div",{style:{color:"red"},children:n.touched.place&&n.errors.place&&(0,u.jsx)("small",{children:n.errors.place})}),m,(0,u.jsx)("button",{type:"submit",children:h})]})},H=a(2791),C=(crypto.randomUUID(),{id:"",month:"",allHours:0,currentHours:0,submitedHours:0,acceptedHours:0,rejectedHours:0,columns:[{id:"miesiac",columnName:"Miesi\u0105c",days:[]},{id:"oczekuj\u0105ce",columnName:"Oczekuj\u0105ce"},{id:"zatwierdzone",columnName:"Zatwierdzone"}]}),I=function(){var e=(0,d.Su)(),n=(0,p.Z)(e,2),a=n[0],r=n[1],t=new Date,o=new Intl.DateTimeFormat("pl",{year:"numeric"}).format(t),l=new Intl.DateTimeFormat("pl",{month:"2-digit"}).format(t),s=(0,H.useState)("".concat(o,"-").concat(l)),m=(0,p.Z)(s,2),f=m[0],b=m[1],y=function(){var e=(0,h.Z)((0,c.Z)().mark((function e(n){var r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=(0,v.Z)((0,v.Z)({},C),{},{month:f}),e.next=4,a(r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),j=(0,u.jsx)(i.pl2,{});return r.isLoading&&(j=(0,u.jsx)("div",{children:' "Loading" '})),r.isError&&(j=(0,u.jsx)("div",{children:' "B\u0142\u0105d" '})),(0,u.jsxs)("form",{onSubmit:y,style:{marginRight:20},children:[(0,u.jsx)("input",{type:"month",value:f,onChange:function(e){b(e.target.value)},min:"2023-06",max:"2025-12"}),(0,u.jsx)("button",{type:"submit",children:j})]})},w=function(){(0,r.s0)();var e=(0,r.UO)().monthURL,n=(0,d.P2)(void 0).data,a=(0,o.Z)(e).databaseMonthsCollection,i=n&&a?a.map((function(e){return e.month})):[],l=n&&(null===i||void 0===i?void 0:i.map((function(e){var a=n&&i&&new Date(e);return new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}).format(a)})));i[i.length-1];return(0,u.jsxs)("div",{style:{position:"fixed"},children:[(0,u.jsx)(I,{}),void 0===n||null===n?(0,u.jsx)("p",{children:"Brak danych"}):l.map((function(e,n){return(0,u.jsx)("div",{children:(0,u.jsx)(t.rU,{to:"/miesiac/".concat(i[n]),children:e},e)},e)})),(0,u.jsx)(g,{})]})}},9404:function(e,n,a){var r=a(1413),t=a(322),o=a(3572);n.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=(0,t.P2)(void 0).data,a=n&&Object.keys(n),d=a&&Object.values(n).flat().map((function(e,n){return(0,r.Z)((0,r.Z)({},e),{},{id:a[n]})})),i=(0,o.nr)(d),u=n&&i.length>0?null===i||void 0===i?void 0:i.find((function(n){return n.month===e})):void 0,l=n&&(null===u||void 0===u?void 0:u.columns),s=n?null===u||void 0===u?void 0:u.allHours:"",c=n?null===u||void 0===u?void 0:u.currentHours:"",v=n?null===u||void 0===u?void 0:u.submitedHours:"",m=n?null===u||void 0===u?void 0:u.acceptedHours:"",h=n?null===u||void 0===u?void 0:u.rejectedHours:"",p=n&&i.length>0&&null!==l&&void 0!==l&&l[0].days?null===l||void 0===l?void 0:l[0].days.reduce((function(e,n){return e+n.hours}),0):0,f=n&&i.length>0&&null!==l&&void 0!==l&&l[0].days?null===l||void 0===l?void 0:l[1].days.reduce((function(e,n){return e+n.hours}),0):0,b=n&&i.length>0&&null!==l&&void 0!==l&&l[0].days?null===l||void 0===l?void 0:l[2].days.reduce((function(e,n){return e+n.hours}),0):0;return{data:n,databaseMonthsId:a,databaseMonthsCollection:i,databaseMonth:u,databaseColumns:l,databaseAllHours:s,dataCurrentHours:c,databaseAcceptedHours:m,databaseRejectedHours:h,dataBaseSubmitedHours:v,acceptedHoursSum:f,rejectedHoursSum:b,submitedHoursSum:p}}},6712:function(e,n,a){var r=a(1413),t=a(322),o=a(3572);n.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=(0,t.P2)(void 0).data,a=n&&Object.keys(n),d=a&&Object.values(n).flat().map((function(e,n){return(0,r.Z)((0,r.Z)({},e),{},{id:a[n]})})),i=(0,o.nr)(d),u=n&&i.length>0?null===i||void 0===i?void 0:i.find((function(n){return n.month===e})):void 0,l=n&&(null===u||void 0===u?void 0:u.columns),s=n?null===u||void 0===u?void 0:u.allHours:"",c=n?null===u||void 0===u?void 0:u.currentHours:"",v=n?null===u||void 0===u?void 0:u.submitedHours:"",m=n?null===u||void 0===u?void 0:u.acceptedHours:"",h=n?null===u||void 0===u?void 0:u.rejectedHours:"",p=n&&i.length>0&&null!==l&&void 0!==l&&l[0].days?null===l||void 0===l?void 0:l[0].days.reduce((function(e,n){return e+n.hours}),0):0,f=n&&i.length>0&&null!==l&&void 0!==l&&l[0].days?null===l||void 0===l?void 0:l[1].days.reduce((function(e,n){return e+n.hours}),0):0,b=n&&i.length>0&&null!==l&&void 0!==l&&l[0].days?null===l||void 0===l?void 0:l[2].days.reduce((function(e,n){return e+n.hours}),0):0,y=n&&i?i.map((function(e){return e.month})):[];return{string:y.map((function(e){var n=new Date(e);return new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}).format(n)})),data:n,databaseMonthsId:a,databaseMonthsCollection:i,databaseMonth:u,databaseColumns:l,databaseAllHours:s,dataCurrentHours:c,databaseAcceptedHours:m,databaseRejectedHours:h,dataBaseSubmitedHours:v,acceptedHoursSum:f,rejectedHoursSum:b,submitedHoursSum:p,databaseMonthsDates:y}}},3572:function(e,n,a){a.d(n,{nr:function(){return d},qs:function(){return i}});var r=a(9439),t=a(3433),o=a(1413),d=function(e){return Array.isArray(e)?null===e||void 0===e?void 0:e.map((function(e){var n,a;return(null===e||void 0===e||null===(n=e.columns)||void 0===n?void 0:n.every((function(e){return e.hasOwnProperty("days")})))?e:(0,o.Z)((0,o.Z)({},e),{},{columns:null===e||void 0===e||null===(a=e.columns)||void 0===a?void 0:a.map((function(e){return(0,o.Z)((0,o.Z)({},e),{},{days:e.days||[]})}))})})):[]},i=function(e,n,a){var d=e.source,i=e.destination;if(i&&(d.draggableId!==i.droppableId||d.index===i.index))if(d.droppableId!==i.droppableId){var u=n.findIndex((function(e){return e.id===d.droppableId})),l=n.findIndex((function(e){return e.id===i.droppableId})),s=(0,t.Z)(n[u].days),c=d.droppableId!==i.dropableId?(0,t.Z)(n[l].days):s,v=s.splice(d.index,1),m=(0,r.Z)(v,1)[0];c.splice(i.index,0,m);var h=(0,t.Z)(n);h[u]=(0,o.Z)((0,o.Z)({},n[u]),{},{days:s}),h[l]=(0,o.Z)((0,o.Z)({},n[l]),{},{days:c}),a(h)}else{var p=i.index,f=n.findIndex((function(e){return e.id===d.droppableId})),b=(0,t.Z)(n[f].days),y=b.splice(d.index,1),j=(0,r.Z)(y,1)[0];b.splice(p,0,j);var x=(0,t.Z)(n);x[f]=(0,o.Z)((0,o.Z)({},n[f]),{},{days:b}),a(x)}}}}]);
//# sourceMappingURL=35.ee239980.chunk.js.map