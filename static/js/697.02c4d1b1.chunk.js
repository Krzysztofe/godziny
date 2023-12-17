"use strict";(self.webpackChunkgodziny=self.webpackChunkgodziny||[]).push([[697],{3175:function(n,e,t){var r=t(184);e.Z=function(n){return(0,r.jsx)("div",{className:"text-danger d-block mt-0 fs-8",style:{height:"0.7rem"},children:n.touched[n.value]&&n.errors[n.value]&&n.errors[n.value]})}},2015:function(n,e,t){var r=t(5705),a=t(3855),i=t(3175),s=t(184);e.Z=function(n){var e=(0,r.u6)(),t=e.values,o=e.handleBlur,u=e.setFieldValue,c=e.errors,l=e.touched;return(0,s.jsx)(s.Fragment,{children:n.inputsData.map((function(n){var e=n.value,r=n.label,d=n.type,m=n.isErrorPrint,f=n.min,h=n.max,v=n.placeholder;return(0,s.jsxs)(a.Z.Group,{children:[r&&(0,s.jsx)(a.Z.Label,{htmlFor:"date",className:"mb-0 fs-responsive fw-medium",children:r}),(0,s.jsx)(a.Z.Control,{id:e,type:d,name:e,value:t[e],onChange:function(n){return u(e,n.target.value)},onBlur:o,min:f,max:h,placeholder:v,size:"sm",className:"p-0 px-1 border border-primary shadow-sm w-100 ",style:{minHeight:0}}),m&&(0,s.jsx)(i.Z,{value:e,errors:c,touched:l})]},e)}))})}},7697:function(n,e,t){t.r(e),t.d(e,{default:function(){return Zn}});var r=t(9439),a=(t(2685),t(2791)),i=t(7732),s=t(7689),o=t(1419),u=t(9065),c=t(5705),l=t(3360),d=t(8820),m=t(1100),f=t(3855),h=t(184),v=function(n){var e=(0,c.u6)(),t=e.values,r=e.handleBlur,a=e.setFieldValue,i=t.allHours/3.2,s="linear-gradient(to right, rgba(180,120,255) ".concat(i,"%, rgba(180,180,255) ").concat(i,"%)");return(0,h.jsx)(h.Fragment,{children:n.inputsValues.map((function(n){return(0,h.jsx)(f.Z.Group,{className:"mt-2 d-flex align-items-center w-100",children:(0,h.jsx)(f.Z.Range,{name:n,min:0,max:320,value:t[n],onChange:function(e){return a(n,e.target.value)},onBlur:r,className:"form-range custom-range medium",style:{height:10,background:s}})},n)}))})},x=t(5048),p=function(){var n,e,t,r,a=(0,c.u6)().values,i=(0,x.v9)((function(n){return n.monthPanel})).month,s="";i&&((null===i||void 0===i||null===(n=i.calcHours)||void 0===n?void 0:n.submittedHours)+(null===i||void 0===i||null===(e=i.calcHours)||void 0===e?void 0:e.acceptedHours)>+(null===a||void 0===a?void 0:a.allHours)&&(s="Min. ".concat((null===i||void 0===i||null===(t=i.calcHours)||void 0===t?void 0:t.submittedHours)+(null===i||void 0===i||null===(r=i.calcHours)||void 0===r?void 0:r.acceptedHours)," h")));return(0,h.jsx)("div",{className:"text-danger fs-8",children:s})},j=t(2015),g=function(){var n="fs-7 d-flex align-items-end";return(0,h.jsxs)("div",{className:"d-flex justify-content-between fw-medium ",children:[(0,h.jsx)("div",{className:n,children:"0 h"}),(0,h.jsxs)("div",{className:"col-6 col-sm-5 d-flex",style:{width:"62px"},children:[(0,h.jsx)(j.Z,{inputsData:[{value:"allHours",type:"number",isErrorPrint:!1}]})," \xa0",(0,h.jsx)("div",{children:"h"})]}),(0,h.jsx)("div",{className:n,children:"320 h"})]})},b=t(4165),Z=t(1413),y=t(5861),w=t(7615),N=function(){var n=(0,u.Z)(),e=n.yearFromURL,t=n.monthFromURL,a=(0,x.v9)((function(n){return n.monthPanel})).month,i=(0,w.uZ)(),s=(0,r.Z)(i,2),o=s[0],c=s[1],l=a&&a.calcHours,d=function(){var n=(0,y.Z)((0,b.Z)().mark((function n(r){var i,s;return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!a){n.next=3;break}if(!((null===a||void 0===a||null===(i=a.calcHours)||void 0===i?void 0:i.submittedHours)+(null===a||void 0===a||null===(s=a.calcHours)||void 0===s?void 0:s.acceptedHours)>+(null===r||void 0===r?void 0:r.allHours))){n.next=3;break}return n.abrupt("return");case 3:if(n.t0=l&&r.allHours,!n.t0){n.next=7;break}return n.next=7,o({year:e,month:t,calcHours:(0,Z.Z)((0,Z.Z)({},l),{},{allHours:+r.allHours,currentHours:+r.allHours-l.acceptedHours-l.submittedHours})});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return{initialValues:{allHours:0},onSubmit:d,success:c}},H=function(){var n=N(),e=n.initialValues,t=n.onSubmit,r=n.success,a=(0,m.Z)(r,(0,h.jsx)(d.dEn,{className:"text-primary",style:{fontSize:"1.4rem"}})).btnContent;return(0,h.jsx)(c.J9,{initialValues:e,onSubmit:t,children:(0,h.jsxs)(c.l0,{className:"py-2",children:[(0,h.jsx)(g,{}),(0,h.jsx)(v,{inputsValues:["allHours"]}),(0,h.jsxs)("div",{className:"d-flex justify-content-between align-items-center mt-2",children:[(0,h.jsx)(p,{}),(0,h.jsx)(l.Z,{type:"submit",disabled:r.isLoading,className:"col-2 d-flex justify-content-center align-items-center m-0 justify-content-center p-0 m-0 ms-1  text-info-emphasis border-0 bg-transparent",children:a})]})]})})},S=t(23),k=t(1087),z=t(2218),L=function(){var n=(0,z.Z)().databaseMonthsDatesToString,e=(0,x.v9)((function(n){return n.listMonths})).listMonths,t=(0,u.Z)(),r=t.monthURL,a=t.isMonthInURL?new Date(r):null,i=a&&new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}).format(a);return(0,h.jsxs)(S.Z,{className:"scrolHidden fs-7 fw-medium text-capitalize",style:{height:"5rem"},children:[!e&&(0,h.jsx)(S.Z.Item,{className:"border-0 p-0 text-warning",children:"Brak danych"}),null===n||void 0===n?void 0:n.map((function(n,t){return(0,h.jsx)(S.Z.Item,{className:"border-0 p-0",children:(0,h.jsx)(k.rU,{to:"/".concat(null===e||void 0===e?void 0:e[t]),className:"".concat(i===n&&i?"text-info":"text-dark"," text-decoration-none"),children:n})},n)}))]})},C=t(3175),D=function(n){var e=(0,c.u6)(),t=e.errors,r=e.touched,a=e.handleBlur,i=e.setFieldValue;return(0,h.jsx)(h.Fragment,{children:n.inputsData.map((function(n){var e=n.name,s=n.firstOption,o=n.label,u=n.options;return(0,h.jsxs)(f.Z.Group,{children:[(0,h.jsx)(f.Z.Label,{htmlFor:e,className:"mb-0 fw-medium  fs-responsive",children:o}),(0,h.jsxs)(f.Z.Select,{id:e,name:e,onChange:function(n){return i(e,n.target.value)},onBlur:a,size:"sm",className:"p-0 px-1 border border-primary shadow-sm text-capitalize ".concat("Zapisz u\u017cytkownika"===s?"text-warning":""),style:{cursor:"pointer"},children:[(0,h.jsx)("option",{className:" ".concat("Zapisz u\u017cytkownika"===s?"text-warning":"text-placeholder"),children:s}),null===u||void 0===u?void 0:u.map((function(n){return(0,h.jsx)("option",{value:n,children:n},n)}))]}),(0,h.jsx)(C.Z,{value:e,errors:t,touched:r})]},o)}))})},I=function(n){var e,t=(0,c.u6)().values,r=(0,m.Z)(n.success,"Dodaj dzie\u0144").btnContent,a=(0,x.v9)((function(n){return n.monthPanel})).month,i=(null===a||void 0===a||null===(e=a.calcHours)||void 0===e?void 0:e.currentHours)||0;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.Z,{type:"submit",disabled:n.success.isLoading,className:"fw-medium w-100 mt-2 ms-auto bg-primary text-white fs-responsive",children:r}),(0,h.jsx)("div",{className:"text-danger d-block mt-0 fs-8",style:{height:"1rem"},children:i-+t.hours<0||0===i?"Brak dost\u0119pnych godzin":""})]})},F=t(9662),U=function(){var n=(0,x.v9)((function(n){return n.listUsers})).listUsers,e=n||[],t=null===e||void 0===e?void 0:e.map((function(n){return n.userName}));return{dataInputsSelect:[{name:"userName",firstOption:"".concat(0===t.length?"Zapisz u\u017cytkownika":"Imi\u0119"),label:"Podaj imi\u0119",options:t},{name:"hours",firstOption:"Godziny",label:"Podaj liczb\u0119 godzin",options:[1,2,3,4,5,6,7,8,9,10]},{name:"place",firstOption:"Lokalizacja",label:"Podaj lokalizacj\u0119",options:["Wewn\u0105trz","Poza"]}],dataInputsText:[{value:"date",label:"Podaj dzie\u0144",type:"date",isErrorPrint:!0,min:F.ob,max:F.Kg}]}},P=t(3433),M=t(4261),R=t(8007),E=R.Ry({userName:R.Z_().test("is-name-valid","Imi\u0119 wymagane",(function(n){return"Imi\u0119"!==n})).required("Imi\u0119 wymagane"),hours:R.Z_().test("is-hours-valid","Liczba godzin wymagana",(function(n){return"Liczba godzin"!==n})).required("Liczba godzin wymagana"),place:R.Z_().test("is-place-valid","Lokalizacja wymagana",(function(n){return"Lokalizacja"!==n})).required("Lokalizacja wymagana")}),B=function(){var n=(0,w.Og)(),e=(0,r.Z)(n,2),t=e[0],a=e[1],i=(0,x.v9)((function(n){return n.monthPanel})).month,s=(0,x.v9)((function(n){return n.listUsers})).listUsers,o=(0,u.Z)(),c=o.yearFromURL,l=o.monthFromURL,d={id:"",date:F.ob,hours:"",userName:"Imi\u0119",place:"",userColor:""},m=E,f=function(){var n=(0,y.Z)((0,b.Z)().mark((function n(e){var r,a,o,u,d;return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!i||!((null===i||void 0===i||null===(r=i.calcHours)||void 0===r?void 0:r.currentHours)-+e.hours<0||0===(null===i||void 0===i||null===(a=i.calcHours)||void 0===a?void 0:a.currentHours))){n.next=2;break}return n.abrupt("return");case 2:if(u=s&&(null===s||void 0===s||null===(o=s.find((function(n){return n.userName===e.userName})))||void 0===o?void 0:o.userColor),d=(0,Z.Z)((0,Z.Z)({},e),{},{id:(0,M.Z)(),hours:+e.hours,userColor:u||""}),n.t0=i,!n.t0){n.next=8;break}return n.next=8,t({year:c,month:l,monthBody:(0,Z.Z)((0,Z.Z)({},i),{},{calcHours:(0,Z.Z)((0,Z.Z)({},null===i||void 0===i?void 0:i.calcHours),{},{currentHours:i.calcHours.currentHours-d.hours,submittedHours:i.calcHours.submittedHours+d.hours}),columns:[(0,Z.Z)((0,Z.Z)({},i.columns[0]),{},{days:i.columns[0].days?[].concat((0,P.Z)(i.columns[0].days),[d]):[d]})].concat((0,P.Z)(i.columns.slice(1)))})});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return{initialValues:d,validation:m,onSubmit:f,success:a}},T=function(){var n,e=U(),t=e.dataInputsText,r=e.dataInputsSelect,a=B(),i=a.initialValues,s=a.validation,o=a.onSubmit,u=a.success,l=(0,x.v9)((function(n){return n.monthPanel})).month,d=null===l||void 0===l||null===(n=l.calcHours)||void 0===n?void 0:n.allHours;return(0,h.jsx)(c.J9,{initialValues:i,validationSchema:s,onSubmit:o,children:(0,h.jsxs)(c.l0,{className:"".concat(0===d?"formContainerBlur":""," mt-2"),children:[(0,h.jsx)(D,{inputsData:r}),(0,h.jsx)(j.Z,{inputsData:t}),(0,h.jsx)(I,{success:u})]})})},V=t(2767),O=function(){var n=(0,x.v9)((function(n){return n.listMonths})).listMonths;return{validationSchema:R.Ry({monthDate:R.Z_().test("is-in-database","Miesi\u0105c zapisany",(function(e){return void 0!==e&&!(null!==n&&void 0!==n&&n.includes(e))}))})}},W={id:"",columns:[{id:"submitted",days:[]},{id:"accepted",days:[]},{id:"rejected",days:[]}],calcHours:{allHours:0,currentHours:0,submittedHours:0,acceptedHours:0,rejectedHours:0}},A=function(n){var e;return n&&(null===(e=(0,P.Z)(n))||void 0===e?void 0:e.sort((function(n,e){return new Date(n).getTime()-new Date(e).getTime()})).reverse())},J=function(){var n=(0,s.s0)(),e=(0,w.CB)(),t=(0,r.Z)(e,2),i=t[0],o=t[1],u=(0,w._V)(),c=(0,r.Z)(u,1)[0],l=(0,w.bw)(),d=(0,r.Z)(l,1)[0],m=(0,x.v9)((function(n){return n.listMonths})).listMonths,f=O().validationSchema,h=(0,a.useState)(!1),v=(0,r.Z)(h,2),p=v[0],j=v[1],g=(0,a.useState)({monthDate:""}),N=(0,r.Z)(g,2),H=N[0],S=N[1],k={monthDate:"".concat(F.j0,"-").concat(F.vs)},z=f,L=function(){var n=(0,y.Z)((0,b.Z)().mark((function n(e){var t,r,a;return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.monthDate.slice(0,4),r=e.monthDate.slice(-2),a=(0,Z.Z)((0,Z.Z)({},W),{},{id:e.monthDate}),n.next=5,i({year:t,month:r,monthBody:a});case 5:S(e);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),C=function(){var e=(0,y.Z)((0,b.Z)().mark((function e(t){var r,a,i,s,u,l,f;return(0,b.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p){e.next=11;break}return r=t.monthDate.slice(0,4),a=t.monthDate.slice(-2),i=m?(0,P.Z)(m):[],s=[].concat((0,P.Z)(i),["".concat(r,"-").concat(a)]),u=A(s),e.next=8,c(u);case 8:n("/".concat(t.monthDate)),e.next=17;break;case 11:if(!o.isError){e.next=17;break}return l=t.monthDate.slice(0,4),f=t.monthDate.slice(-2),e.next=16,d({year:l,month:f});case 16:(0,V.Z)("");case 17:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){o.isSuccess?j(!0):j(!1)}),[o.isSuccess]),(0,a.useEffect)((function(){C(H)}),[p,c]),{initialValues:k,validation:z,onSubmit:L,success:o}},_=function(){var n=J(),e=n.initialValues,t=n.validation,r=n.onSubmit,a=n.success,i=(0,m.Z)(a,(0,h.jsx)(d.dEn,{className:"text-primary",style:{fontSize:"1.4rem"}})).btnContent,s=[{value:"monthDate",type:"month",label:"Podaj miesi\u0105c",isErrorPrint:!0,min:"".concat(F.j0,"-").concat(F.vs),max:"2025-12"}];return(0,h.jsx)(c.J9,{initialValues:e,validationSchema:t,onSubmit:r,children:(0,h.jsxs)(c.l0,{className:"py-2",children:[(0,h.jsx)(j.Z,{inputsData:s}),(0,h.jsx)(l.Z,{type:"submit",disabled:a.isLoading,className:"col-2 d-flex justify-content-center align-items-center justify-content-center p-0 m-0 ms-auto  text-info-emphasis border-0 bg-transparent",children:i})]})})},K=t(6021),q=function(){var n=(0,K.xY)().data,e=null===n||void 0===n?void 0:n.map((function(n){return n.userName})),t=null===n||void 0===n?void 0:n.map((function(n){return n.userColor}));return{validationSchema:R.Ry({userName:R.Z_().min(3,"Min. 3 litery").max(10,"Max. 10 liter").test("is-in-database","Imi\u0119 zaj\u0119te",(function(n){return void 0!==n&&!(null!==e&&void 0!==e&&e.includes(n[0].toUpperCase()+n.slice(1)))})).required("Imi\u0119 wymagane"),userColor:R.Z_().test("is-in-database","Kolor zaj\u0119ty",(function(n){return void 0!==n&&!(null!==t&&void 0!==t&&t.includes(n))}))})}},Y=function(){var n=(0,K.Vx)(),e=(0,r.Z)(n,2),t=e[0],a=e[1],i=q().validationSchema,s=(0,K.xY)().data||[],o=i,u=function(){var n=(0,y.Z)((0,b.Z)().mark((function n(e,r){var a,i,o;return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=r.resetForm,i=(0,Z.Z)((0,Z.Z)({},e),{},{userName:e.userName.slice(0,1).toUpperCase()+e.userName.slice(1),id:(0,M.Z)()}),o=[].concat((0,P.Z)(s),[i]).sort((function(n,e){return n.userName.localeCompare(e.userName)})),n.next=5,t(o);case 5:a();case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return{initialValues:{id:"",userName:"",userColor:"#e0cce1"},validation:o,onSubmit:u,success:a}},G=function(){var n=Y(),e=n.initialValues,t=n.validation,r=n.onSubmit,a=n.success,i=(0,m.Z)(a,(0,h.jsx)(d.dEn,{className:"text-primary",style:{fontSize:"1.4rem"}})).btnContent;return(0,h.jsx)(c.J9,{initialValues:e,validationSchema:t,onSubmit:r,children:(0,h.jsxs)(c.l0,{className:"py-2",children:[(0,h.jsx)(j.Z,{inputsData:[{value:"userName",type:"text",label:"Podaj imi\u0119",isErrorPrint:!0,placeholder:"Imi\u0119"},{value:"userColor",type:"color",label:"Podaj kolor",isErrorPrint:!0}]}),(0,h.jsx)(l.Z,{type:"submit",disabled:a.isLoading,className:"col-2 d-flex justify-content-center align-items-center justify-content-center p-0 m-0 ms-auto  text-info-emphasis border-0 bg-transparent",children:i})]})})},$=t(7858),Q=t(6856),X=function(n){var e=(0,a.useState)(!1),t=(0,r.Z)(e,2),i=t[0],s=t[1];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(l.Z,{variant:"outline-primary",onClick:function(){return s((function(n){return!n}))},"aria-expanded":i,"aria-controls":"example-collapse-text",size:"sm",className:"fw-medium fs-responsive w-100 d-flex justify-content-between align-items-center bg-primary text-white ".concat(i?"rounded-bottom-0":"rounded-bottom-1"),style:{transition:"border-radius 420ms"},children:[n.title,(0,h.jsx)(Q.x3N,{className:"fs-3",style:{transform:"".concat(i?"rotate(180deg)":""," "),transitionDuration:"320ms"}})]}),(0,h.jsx)($.Z,{in:i,children:(0,h.jsx)("div",{className:"border border-primary rounded-bottom px-1",children:n.children})})]})},nn=t(3234),en=function(){var n,e=(0,nn.Z)().monthURLStringFormat,t=(0,x.v9)((function(n){return n.monthPanel})).month,r=(null===(n=e[0])||void 0===n?void 0:n.toUpperCase())+e.slice(1),a=t&&(0,h.jsx)("div",{className:"mt-1",children:(0,h.jsx)(X,{title:"Zapisz godziny",children:(0,h.jsx)(H,{})})}),i=t&&(0,h.jsx)(T,{});return{dataMonthPanel:[(0,h.jsx)(X,{title:r,children:(0,h.jsx)(L,{})}),a,i],dataSettings:[(0,h.jsx)(X,{title:"Zapisz miesi\u0105c",children:(0,h.jsx)(_,{})}),(0,h.jsx)("div",{className:"mt-1",children:(0,h.jsx)(X,{title:"Zapisz u\u017cytkownika",children:(0,h.jsx)(G,{})})})]}},tn=function(){var n=(0,u.Z)().isMonthInURL,e=en(),t=e.dataMonthPanel,r=e.dataSettings;return(0,h.jsxs)(i.Z.Body,{className:"scrolHidden flex-grow-0 p-0 border border-4 border-white bg-white rounded",children:[n&&t.map((function(n,e){return(0,h.jsx)(a.Fragment,{children:n},e)})),!n&&r.map((function(n,e){return(0,h.jsx)(a.Fragment,{children:n},e)}))]})},rn=function(){return(0,h.jsx)(i.Z.Header,{className:"d-sm-none w-fit-content ms-auto",closeButton:!0})},an=function(n){var e=(0,nn.Z)().monthURLStringFormat,t=(0,u.Z)().isMonthInURL;return(0,h.jsxs)(l.Z,{variant:"primary",onClick:n.toggleShow,className:"d-flex d-sm-none justify-content-center align-items-center rounded-0 p-0 fw-medium w-100 px-4 fixed-bottom",style:{height:"2.5rem"},children:[(0,h.jsx)("div",{children:"Menu:\xa0"}),t?(0,h.jsx)("div",{children:e}):(0,h.jsx)("div",{children:"ustawienia"})]})},sn=t(4849),on=t(3200),un=t(7425),cn=function(){var n=(0,s.s0)(),e=(0,a.useState)(!1),t=(0,r.Z)(e,2),i=t[0],o=t[1],u=(0,h.jsxs)("div",{className:"d-flex align-center  d-flex align-items-center text-primary w-100",children:[(0,h.jsx)(un.aIK,{className:"fs-6 me-1 "}),"Wyloguj"]});return i&&(u=(0,h.jsx)(sn.Z,{animation:"border",size:"sm",variant:"secondary",className:"mx-auto",children:(0,h.jsx)("span",{className:"visually-hidden",children:"Loading..."})})),(0,h.jsx)(l.Z,{onClick:function(){o(!0),on.I8.signOut().then((function(){n("/")})).catch((function(n){return(0,V.Z)(n)})).finally((function(){o(!1)}))},className:"fs-6 fw-medium text-info p-0 bg-transparent border-0 w-100",style:{cursor:"pointer"},disabled:i,children:u})},ln=t(390),dn=t(828),mn=function(){var n=(0,ln.lX)();return(0,h.jsx)(l.Z,{onClick:function(){n.back()},className:"fs-6 fw-medium text-primary p-0 bg-transparent border-0 w-100",style:{cursor:"pointer"},children:(0,h.jsxs)("div",{className:"d-flex align-center  d-flex align-items-center text-start w-100",children:[(0,h.jsx)(dn.Fjg,{className:"fs-6 me-1 "})," Wr\xf3\u0107"]})})},fn=function(){var n=(0,u.Z)().isMonthInURL,e="bg-transparent border-0 p-0 ps-2";return(0,h.jsx)("nav",{className:"mt-auto mb-2 fw-medium",children:(0,h.jsxs)(S.Z,{children:[!n&&(0,h.jsx)(S.Z.Item,{className:e,children:(0,h.jsx)(mn,{})}),(0,h.jsx)(S.Z.Item,{className:e,children:(0,h.jsxs)(k.rU,{to:"/ustawienia",className:"text-primary text-decoration-none",children:[(0,h.jsx)(d.QAE,{})," Ustawienia"]})}),(0,h.jsx)(S.Z.Item,{className:e,children:(0,h.jsx)(cn,{})})]})})},hn=t(4832),vn=function(){var n=(0,x.I0)(),e=(0,K.xY)(),t=e.data,r=e.error,i=e.isLoading;(0,a.useEffect)((function(){n((0,hn.Kx)(t)),n((0,hn.qF)(r)),n((0,hn.iP)(i))}),[t,r,i,n])},xn=t(7129),pn=t(8755),jn=function(){var n=(0,x.I0)(),e=(0,u.Z)(),t=e.yearFromURL,r=e.monthFromURL,i=(0,w.a6)({year:t,month:r}),s=i.data,o=i.error,c=i.isLoading;(0,a.useEffect)((function(){n((0,pn.jw)(s)),n((0,pn.MP)(o)),n((0,pn.ed)(c))}),[s,o,c,n])},gn=t(7064),bn=function(){var n=(0,x.I0)(),e=(0,x.v9)((function(n){return n.alert})),t=e.isPrinted,r=e.header;return t?(0,h.jsx)("div",{id:"opacityContainer",className:"fixed-top d-flex justify-content-center align-items-center ",onClick:function(e){return function(e){var t,r;"opacityContainer"!==(null===(t=e.target)||void 0===t?void 0:t.id)&&"noButton"!==(null===(r=e.target)||void 0===r?void 0:r.id)||(n((0,gn.Ov)(!1)),n((0,gn.M6)()))}(e)},style:{height:"100vh",zIndex:"1060",backgroundColor:"rgba(0,0,0,0.4)"},children:(0,h.jsxs)("div",{className:"p-4 bg-white rounded-1 fs-3 fw-medium alertAnimation",children:[r,(0,h.jsxs)("div",{className:"w-fit-content m-auto",children:[(0,h.jsx)(l.Z,{id:"noButton",children:"Nie"}),(0,h.jsx)(l.Z,{onClick:function(){n((0,gn.Ov)(!0))},className:"bg-danger ms-4 border ",children:"Tak"})]})]})}):(0,h.jsx)(h.Fragment,{})},Zn=function(){vn(),(0,xn.Z)(),jn();var n=(0,s.TH)().pathname,e=(0,a.useState)(!1),t=(0,r.Z)(e,2),u=t[0],c=t[1],l=(0,o.Z)().windowWidth;return(0,a.useEffect)((function(){l>=500&&c(!0)}),[l]),(0,h.jsx)(h.Fragment,{children:!["/"].includes(n)&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(bn,{}),(0,h.jsx)(i.Z,{show:u,onHide:function(){return c(!1)},name:"Disable backdrop",scroll:!0,backdrop:!1,className:"".concat(l<=500&&"backgroundImage"," bg-transparent"),style:{width:l>=500?"30%":"100vw",maxWidth:l>=500&&"250px"},children:(0,h.jsxs)("div",{className:"p-1 d-flex flex-column bg-opacity-white h-100",children:[(0,h.jsx)(rn,{}),(0,h.jsx)(tn,{}),(0,h.jsx)(fn,{})]})}),(0,h.jsx)(an,{toggleShow:function(){return c((function(n){return!n}))}})]})})}},9662:function(n,e,t){t.d(e,{Kg:function(){return l},j0:function(){return o},ob:function(){return c},vs:function(){return u}});var r=new Date,a=function(n){var e=n.getFullYear(),t=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return"".concat(e,"-").concat(t,"-").concat(r)},i=new Date(r.getTime()+12096e5),s=new Date(r.getTime()+5184e6),o=r.getFullYear(),u=String(r.getMonth()+1).padStart(2,"0"),c=(String(r.getDate()).padStart(2,"0"),a(r),a(i)),l=a(s);new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}).format(r)},3200:function(n,e,t){t.d(e,{I8:function(){return o}});var r=t(4702),a=t(1793),i=t(2685),s=(0,r.ZF)({apiKey:"AIzaSyAvvdzLRow-8AdA5zJH6uv19MOsPLNwC3A",authDomain:"godziny-3b30f.firebaseapp.com",projectId:"godziny-3b30f",storageBucket:"godziny-3b30f.appspot.com",messagingSenderId:"367174950216",appId:"1:367174950216:web:0bd1ea3c1c77b5e797677d"}),o=(0,a.v0)(s);(0,i.N8)(s)},7129:function(n,e,t){var r=t(2791),a=t(5048),i=t(3920),s=t(7615);e.Z=function(){var n=(0,a.I0)(),e=(0,s.Jw)(),t=e.data,o=e.error,u=e.isLoading;(0,r.useEffect)((function(){n((0,i.eT)(t)),n((0,i.V2)(o)),n((0,i.jJ)(u))}),[t,o,u,n])}},1100:function(n,e,t){var r=t(1830),a=t.n(r),i=t(2791),s=t(4849),o=t(184);e.Z=function(n,e){(0,i.useEffect)((function(){if(n.isError){var e=n.error,t=e&&"status"in e&&e.status&&e.status;a().fire({text:"B\u0142\u0105d: ".concat(t||""),confirmButtonColor:"rgb(31, 180, 255)"})}}),[n.isError]);var t=e;return n.isLoading&&(t=(0,o.jsx)(s.Z,{animation:"border",size:"sm",variant:"secondary",children:(0,o.jsx)("span",{className:"visually-hidden",children:"Loading..."})})),{btnContent:t}}},2218:function(n,e,t){var r=t(3433),a=t(5048);e.Z=function(){var n,e=(0,a.v9)((function(n){return n.listMonths})).listMonths;return{databaseMonthsDatesToString:e&&(null===(n=(0,r.Z)(e))||void 0===n?void 0:n.map((function(n){var e=new Date(n);return new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}).format(e)})))}}},3234:function(n,e,t){var r=t(7689);e.Z=function(){var n=(0,r.TH)().pathname.slice(1);if(n&&/^\d{4}-\d{2}$/.test(n)){var e,t=n&&new Date(n);return{monthURLStringFormat:t&&(null===(e=new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}))||void 0===e?void 0:e.format(t))}}return{monthURLStringFormat:""}}},9065:function(n,e,t){var r=t(7689);e.Z=function(){var n=(0,r.TH)().pathname.split("/").slice(-1)[0],e=null===n||void 0===n?void 0:n.slice(0,4),t=null===n||void 0===n?void 0:n.slice(-2);return{monthURL:n,yearFromURL:e,monthFromURL:t,isMonthInURL:/^\d{4}-\d{2}$/.test(n)}}},1419:function(n,e,t){var r=t(9439),a=t(2791);e.Z=function(){var n=(0,a.useState)(window.innerWidth),e=(0,r.Z)(n,2),t=e[0],i=e[1];return(0,a.useEffect)((function(){var n=function(){i(window.innerWidth)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),{windowWidth:t}}},2767:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(1830),a=t.n(r),i=function(n){a().fire({text:"B\u0142\u0105d ".concat(n),confirmButtonColor:"rgb(31, 180, 255)"})}}}]);
//# sourceMappingURL=697.02c4d1b1.chunk.js.map