"use strict";(self.webpackChunkgodziny=self.webpackChunkgodziny||[]).push([[182],{5452:function(n,e,t){var r=t(5048),i=t(1014),a=t(7064),s=t(184);e.Z=function(){var n=(0,r.I0)(),e=(0,r.v9)((function(n){return n.alert})).header;return(0,s.jsx)(s.Fragment,{children:e&&(0,s.jsx)(i.Z,{action:function(){n((0,a.VG)(""))},isPrinted:!0,header:e})})}},1014:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(3360),i=t(5048),a=t(7064),s=t(184),o=function(n){var e=(0,i.I0)();return(0,s.jsx)(s.Fragment,{children:n.isPrinted?(0,s.jsx)("div",{id:"opacityContainer",className:"fixed-top d-center ",onClick:function(t){return function(t){var r,i;"opacityContainer"!==(null===(r=t.target)||void 0===r?void 0:r.id)&&"noButton"!==(null===(i=t.target)||void 0===i?void 0:i.id)||(null!==n&&void 0!==n&&n.setIsPrinted&&(null===n||void 0===n||n.setIsPrinted(!1)),e((0,a.VG)("")))}(t)},style:{height:"100vh",zIndex:"1060",backgroundColor:"rgba(0,0,0,0.4)"},children:(0,s.jsxs)("div",{className:"p-4 bg-white rounded-1 fs-3 fw-medium alertAnimationDown",children:[n.header,(0,s.jsx)("div",{className:"w-fit-content m-auto",children:n.header.includes("Usun\u0105\u0107")?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{id:"noButton",children:"Nie"}),(0,s.jsx)(r.Z,{onClick:n.action,className:"bg-danger ms-4 border ",children:"Tak"})]}):(0,s.jsx)(r.Z,{id:"noButton",onClick:n.action,children:"Ok"})})]})}):(0,s.jsx)(s.Fragment,{})})}},5010:function(n,e,t){var r=t(6856),i=t(184);e.Z=function(n){return(0,i.jsx)(r.x3N,{className:"fs-3",style:{transform:"".concat(n.isOpen?"rotate(180deg)":""," "),transitionDuration:"320ms"}})}},3175:function(n,e,t){var r=t(184);e.Z=function(n){return(0,r.jsx)("div",{className:"text-danger d-block mt-0 fs-8",style:{height:"0.7rem"},children:n.touched[n.value]&&n.errors[n.value]&&n.errors[n.value]})}},2015:function(n,e,t){var r=t(5705),i=t(3027),a=t(3175),s=t(184);e.Z=function(n){var e=(0,r.u6)(),t=e.values,o=e.handleBlur,u=e.setFieldValue,c=e.errors,l=e.touched;return(0,s.jsx)(s.Fragment,{children:n.inputsData.map((function(n){var e=n.value,r=n.label,d=n.type,m=n.isErrorPrint,f=n.min,h=n.max,v=n.placeholder;return(0,s.jsxs)(i.Z.Group,{children:[r&&(0,s.jsx)(i.Z.Label,{htmlFor:"date",className:"mb-0 fs-responsive fw-medium",children:r}),(0,s.jsx)(i.Z.Control,{id:e,type:d,name:e,value:t[e],onChange:function(n){return u(e,n.target.value)},onBlur:o,min:f,max:h,placeholder:v,size:"sm",className:"p-0 border border-primary shadow-sm w-100 text-capitalize ".concat("color"===d?"px-0":"px-1"),style:{minHeight:0}}),m&&(0,s.jsx)(a.Z,{value:e,errors:c,touched:l})]},e)}))})}},9182:function(n,e,t){t.r(e),t.d(e,{default:function(){return zn}});var r=t(9439),i=t(2791),a=t(7732),s=t(7689),o=t(1419),u=t(9065),c=t(23),l=t(5048),d=t(1087),m=t(2218),f=t(184),h=function(){var n=(0,m.Z)().databaseMonthsDatesToString,e=(0,l.v9)((function(n){return n.listMonths})).listMonths,t=(0,u.Z)(),r=t.monthURL,i=t.isMonthInURL?new Date(r):null,a=i&&new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}).format(i);return(0,f.jsxs)(c.Z,{className:"scrolHidden fs-7 fw-medium text-capitalize",style:{height:"5rem"},children:[0===(null===e||void 0===e?void 0:e.length)&&(0,f.jsx)(c.Z.Item,{className:"border-0 p-0 text-warning",children:"Brak danych"}),null===n||void 0===n?void 0:n.map((function(n,t){return(0,f.jsx)(c.Z.Item,{className:"border-0 p-0",children:(0,f.jsx)(d.rU,{to:"/godziny/".concat(null===e||void 0===e?void 0:e[t]),className:"".concat(a===n&&a?"text-info":"text-dark"," text-decoration-none"),children:n})},n)}))]})},v=t(5705),x=t(3380),p=function(n,e,t){var r;return null===n||void 0===n||null===(r=n.days)||void 0===r?void 0:r.find((function(n){var r=n.userName,i=n.date;return r===e&&i===t}))},j=function(n,e,t){var r="";return n&&p(null===n||void 0===n?void 0:n.columns[0],e,t)?r="Dzie\u0144 z\u0142o\u017cony":n&&p(null===n||void 0===n?void 0:n.columns[1],e,t)&&(r="Dzie\u0144 przyznany"),r},g=function(n){var e=(0,v.u6)().values,t=(0,l.v9)((function(n){return n.monthPanel})).month,r=t&&j(t,e.userName,e.date);return(0,f.jsx)("div",{className:"text-danger d-block mt-0 fs-8",style:{height:"0.7rem",position:"absolute",bottom:"0px"},children:r})},b=t(3027),y=t(3175),Z=function(n){var e=(0,v.u6)(),t=e.errors,r=e.touched,i=e.handleBlur,a=e.setFieldValue;return(0,f.jsx)(f.Fragment,{children:n.inputsData.map((function(n){var e=n.name,s=n.firstOption,o=n.label,u=n.options;return(0,f.jsxs)(b.Z.Group,{children:[(0,f.jsx)(b.Z.Label,{htmlFor:e,className:"mb-0 fw-medium  fs-responsive",children:o}),(0,f.jsxs)(b.Z.Select,{id:e,name:e,onChange:function(n){return a(e,n.target.value)},onBlur:i,size:"sm",className:"p-0 px-1 border border-primary shadow-sm ".concat("Brak danych"===s?"text-warning":""),style:{cursor:"pointer"},children:[(0,f.jsx)("option",{value:s,className:" ".concat("Brak danych"===s?"text-warning":"text-placeholder"),children:s}),null===u||void 0===u?void 0:u.map((function(n){return(0,f.jsx)("option",{value:n,children:n},n)}))]}),(0,f.jsx)(y.Z,{value:e,errors:t,touched:r})]},o)}))})},w=t(2015),N=t(3360),S=t(1100),z=function(n){var e,t=(0,v.u6)().values,r=(0,S.Z)(n.success,"Dodaj dzie\u0144").btnContent,i=(0,l.v9)((function(n){return n.monthPanel})).month,a=(null===i||void 0===i||null===(e=i.calcHours)||void 0===e?void 0:e.currentHours)||0;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(N.Z,{type:"submit",disabled:n.success.isLoading,className:"fw-medium w-100 mt-2 ms-auto bg-primary text-white fs-responsive",children:r}),(0,f.jsx)("div",{className:"text-danger d-block mt-0 fs-8",style:{height:"1rem"},children:a-+t.hours<0||0===a?"Brak dost\u0119pnych godzin":""})]})},k=t(9662),C=function(){var n=(0,l.v9)((function(n){return n.listUsers})).listUsers,e=n||[],t=null===e||void 0===e?void 0:e.map((function(n){return n.userName}));return{dataInputsSelect:[{name:"userName",firstOption:"".concat(0===t.length?"Brak danych":"Imi\u0119"),label:"Podaj imi\u0119",options:t},{name:"hours",firstOption:"Godziny",label:"Podaj liczb\u0119 godzin",options:[1,2,3,4,5,6,7,8,9,10]},{name:"place",firstOption:"Lokalizacja",label:"Podaj lokalizacj\u0119",options:["Wewn\u0105trz","Poza"]}],dataInputsText:[{value:"date",label:"Podaj dat\u0119",type:"date",isErrorPrint:!0,min:k.ob,max:k.Kg}]}},I=t(4165),L=t(3433),F=t(1413),D=t(5861),H=t(4261),U=t(7615),P=t(8007),E=P.Ry({userName:P.Z_().test("is-name-valid","Imi\u0119 wymagane",(function(n){return"Imi\u0119"!==n})).required("Imi\u0119 wymagane"),hours:P.Z_().test("is-hours-valid","Liczba godzin wymagana",(function(n){return"Liczba godzin"!==n})).required("Liczba godzin wymagana"),place:P.Z_().test("is-place-valid","Lokalizacja wymagana",(function(n){return"Lokalizacja"!==n})).required("Lokalizacja wymagana")}),M=function(){var n=(0,U.Og)(),e=(0,r.Z)(n,2),t=e[0],a=e[1],s=(0,l.v9)((function(n){return n.monthPanel})).month,o=(0,l.v9)((function(n){return n.listUsers})).listUsers,c=(0,u.Z)(),d=c.yearFromURL,m=c.monthFromURL,f=(0,i.useState)(""),h=(0,r.Z)(f,2),v=h[0],x=h[1],p={id:"",date:k.ob,hours:"",userName:"",place:"",userColor:""},g=E,b=function(){var n=(0,D.Z)((0,I.Z)().mark((function n(e,r){var i,a,u,c,l,f;return(0,I.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.resetForm,c=s&&j(s,e.userName,e.date),!s||!c){n.next=5;break}return x(c),n.abrupt("return");case 5:if(!s||!((null===s||void 0===s||null===(i=s.calcHours)||void 0===i?void 0:i.currentHours)-+e.hours<0||0===(null===s||void 0===s||null===(a=s.calcHours)||void 0===a?void 0:a.currentHours))){n.next=7;break}return n.abrupt("return");case 7:if(l=o&&(null===o||void 0===o||null===(u=o.find((function(n){return n.userName===e.userName})))||void 0===u?void 0:u.userColor),f=(0,F.Z)((0,F.Z)({},e),{},{id:(0,H.Z)(),hours:+e.hours,userColor:l||""}),n.t0=s,!n.t0){n.next=13;break}return n.next=13,t({year:d,month:m,monthBody:(0,F.Z)((0,F.Z)({},s),{},{calcHours:(0,F.Z)((0,F.Z)({},null===s||void 0===s?void 0:s.calcHours),{},{currentHours:s.calcHours.currentHours-f.hours,submittedHours:s.calcHours.submittedHours+f.hours}),columns:[(0,F.Z)((0,F.Z)({},s.columns[0]),{},{days:s.columns[0].days?[].concat((0,L.Z)(s.columns[0].days),[f]):[f]})].concat((0,L.Z)(s.columns.slice(1)))})});case 13:x("");case 14:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return{initialValues:p,validation:g,onSubmit:b,success:a,dateError:v}},T=function(){var n,e=(0,l.I0)(),t=C(),r=t.dataInputsText,a=t.dataInputsSelect,s=M(),o=s.initialValues,u=s.validation,c=s.onSubmit,d=s.success,m=s.dateError,h=(0,l.v9)((function(n){return n.monthPanel})).month,p=null===h||void 0===h||null===(n=h.calcHours)||void 0===n?void 0:n.allHours;return(0,i.useEffect)((function(){e((0,x.NV)(d.isSuccess))}),[d.isSuccess]),(0,f.jsx)(v.J9,{initialValues:o,validationSchema:u,onSubmit:c,children:(0,f.jsxs)(v.l0,{className:"".concat(0===p?"formContainerBlur":""," mt-2"),children:[(0,f.jsx)(Z,{inputsData:a}),(0,f.jsxs)("div",{className:"position-relative",children:[(0,f.jsx)(w.Z,{inputsData:r}),(0,f.jsx)(g,{dateError:m})]}),(0,f.jsx)(z,{success:d})]})})},B={id:"",columns:[{id:"submitted",days:[]},{id:"accepted",days:[]},{id:"rejected",days:[]}],calcHours:{allHours:0,currentHours:0,submittedHours:0,acceptedHours:0,rejectedHours:0}},R=[{value:"monthDate",type:"month",label:"Podaj miesi\u0105c",isErrorPrint:!0,min:"".concat(k.j0,"-").concat(k.vs),max:"2025-12"}],V=function(){var n=(0,l.v9)((function(n){return n.listMonths})).listMonths;return{validationSchema:P.Ry({monthDate:P.Z_().test("is-in-database","Miesi\u0105c zapisany",(function(e){return void 0!==e&&!(null!==n&&void 0!==n&&n.includes(e))}))})}},O=t(3920),W=t(8755),q=function(){var n=(0,l.I0)(),e=(0,U.CB)(),t=(0,r.Z)(e,2),a=t[0],s=t[1],o=V().validationSchema,u={monthDate:"".concat(k.j0,"-").concat(k.vs)},c=o,d=function(){var e=(0,D.Z)((0,I.Z)().mark((function e(t){var r,i,o;return(0,I.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n((0,W.oI)(s.isError)),n((0,O.fY)(-1)),r=t.monthDate.slice(0,4),i=t.monthDate.slice(-2),o=(0,F.Z)((0,F.Z)({},B),{},{id:t.monthDate}),e.next=7,a({year:r,month:i,monthBody:o});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){n((0,W.oI)(s.isError))}),[s.isError]),{initialValues:u,validation:c,onSubmit:d,success:s}},G=t(8820),Y=function(){var n=(0,l.I0)(),e=q(),t=e.initialValues,r=e.validation,a=e.onSubmit,s=e.success,o=(0,S.Z)(s,(0,f.jsx)(G.dEn,{className:"text-primary",style:{fontSize:"1.4rem"}})).btnContent;return(0,i.useEffect)((function(){n((0,x.x)(s.isSuccess))}),[s.isSuccess]),(0,f.jsx)(v.J9,{initialValues:t,validationSchema:r,onSubmit:a,children:(0,f.jsxs)(v.l0,{className:"py-2",children:[(0,f.jsx)(w.Z,{inputsData:R}),(0,f.jsx)(N.Z,{type:"submit",disabled:s.isLoading,className:"d-flex p-0 m-0 ms-auto  text-info-emphasis border-0 bg-transparent",children:o})]})})},_=t(6021),A=function(){var n=(0,_.xY)().data,e=null===n||void 0===n?void 0:n.map((function(n){return n.userName})),t=null===n||void 0===n?void 0:n.map((function(n){return n.userColor}));return{validationSchema:P.Ry({userName:P.Z_().transform((function(n,e){return"string"===typeof e?e.trim():e})).min(3,"Min. 3 litery").max(20,"Max. 20 liter").test("is-in-database","Imi\u0119 zaj\u0119te",(function(n){return void 0!==n&&!(null!==e&&void 0!==e&&e.includes(n.charAt(0).toUpperCase()+n.slice(1)))})).required("Imi\u0119 wymagane"),userColor:P.Z_().test("is-in-database","Kolor zaj\u0119ty",(function(n){return void 0!==n&&!(null!==t&&void 0!==t&&t.includes(n))}))})}},K=t(9622),J=function(){var n=(0,_.Vx)(),e=(0,r.Z)(n,2),t=e[0],i=e[1],a=A().validationSchema,s=(0,_.xY)().data||[],o=a,u=function(){var n=(0,D.Z)((0,I.Z)().mark((function n(e,r){var i,a,o;return(0,I.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=r.resetForm,a=(0,F.Z)((0,F.Z)({},e),{},{userName:(0,K.f)(e.userName),id:(0,H.Z)()}),o=[].concat((0,L.Z)(s),[a]).sort((function(n,e){return n.userName.localeCompare(e.userName)})),n.next=5,t(o);case 5:i();case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return{initialValues:{id:"",userName:"",userColor:"#e0cce1"},validation:o,onSubmit:u,success:i}},$=[{value:"userName",type:"text",label:"Podaj imi\u0119",isErrorPrint:!0,placeholder:"Imi\u0119"},{value:"userColor",type:"color",label:"Podaj kolor",isErrorPrint:!0}],Q=function(){var n=(0,l.I0)(),e=J(),t=e.initialValues,r=e.validation,a=e.onSubmit,s=e.success,o=(0,S.Z)(s,(0,f.jsx)(G.dEn,{className:"text-primary",style:{fontSize:"1.4rem"}})).btnContent;return(0,i.useEffect)((function(){n((0,x.Ni)(s.isSuccess))}),[s.isSuccess]),(0,f.jsx)(v.J9,{initialValues:t,validationSchema:r,onSubmit:a,children:(0,f.jsxs)(v.l0,{className:"py-2",children:[(0,f.jsx)(w.Z,{inputsData:$}),(0,f.jsx)(N.Z,{type:"submit",disabled:s.isLoading,className:"d-flex p-0 m-0 ms-auto text-info-emphasis border-0 bg-transparent",children:o})]})})},X=t(7858),nn=t(5010),en=function(n){var e=(0,i.useState)(!1),t=(0,r.Z)(e,2),a=t[0],s=t[1];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(N.Z,{variant:"outline-primary",onClick:function(){return s((function(n){return!n}))},"aria-expanded":a,"aria-controls":"example-collapse-text",size:"sm",className:"fw-medium fs-responsive d-flex justify-content-between align-items-center bg-primary text-white w-100 ".concat(a?"rounded-bottom-0":"rounded-bottom-1"),style:{transition:"border-radius 420ms"},children:[n.title,(0,f.jsx)(nn.Z,{isOpen:a})]}),(0,f.jsx)(X.Z,{in:a,children:(0,f.jsx)("div",{className:"border border-primary rounded-bottom px-1",children:n.children})})]})},tn=t(3234),rn=function(n){return(0,f.jsx)(f.Fragment,{children:n.isSuccess&&(0,f.jsx)("div",{className:"rounded-1 p-2 fw-medium text-white toastAnimation",style:{position:"absolute",backgroundColor:"rgba(0, 0, 0, 0.4)",width:"200px"},children:n.text})})},an=function(){var n=(0,l.v9)((function(n){return n.requestSuccess})),e=n.isMonthSuccess,t=n.isUserSuccess;return(0,f.jsxs)("div",{className:"position-absolute mt-4",children:[(0,f.jsx)(rn,{text:"Miesi\u0105c zapisany",isSuccess:e}),(0,f.jsx)(rn,{text:"U\u017cytkownik zapisany",isSuccess:t})]})},sn=function(){var n,e=(0,tn.Z)().monthURLStringFormat,t=(0,l.v9)((function(n){return n.monthPanel})).month,r=(null===(n=e[0])||void 0===n?void 0:n.toUpperCase())+e.slice(1),i=t&&(0,f.jsx)(T,{});return{dataMonthPanel:[(0,f.jsx)(en,{title:r,children:(0,f.jsx)(h,{})}),i],dataSettings:[(0,f.jsx)(en,{title:"Zapisz miesi\u0105c",children:(0,f.jsx)(Y,{})}),(0,f.jsx)("div",{className:"mt-1",children:(0,f.jsx)(en,{title:"Zapisz u\u017cytkownika",children:(0,f.jsx)(Q,{})})}),(0,f.jsx)(an,{})]}},on=function(){var n=(0,s.TH)().pathname,e=(0,u.Z)().isMonthInURL,t=sn(),r=t.dataMonthPanel,o=t.dataSettings;return(0,f.jsxs)(a.Z.Body,{className:"scrolHidden flex-grow-0 p-0 border border-4 border-white bg-white rounded ",children:[e&&r.map((function(n,e){return(0,f.jsx)(i.Fragment,{children:n},e)})),"/godziny/ustawienia"===n&&o.map((function(n,e){return(0,f.jsx)(i.Fragment,{children:n},e)}))]})},un=function(){var n=(0,l.v9)((function(n){return n.requestSuccess})).isDaySuccess;return(0,f.jsx)("div",{className:"d-sm-none",children:(0,f.jsx)(rn,{text:"Dzie\u0144 zapisany",isSuccess:n})})},cn=function(){var n=(0,s.TH)().pathname;return(0,f.jsxs)("div",{children:[n.includes("/godziny/202")&&(0,f.jsx)(un,{}),(0,f.jsx)(a.Z.Header,{className:"d-flex d-sm-none w-fit-content ms-auto",closeButton:!0})]})},ln=function(n){var e=(0,tn.Z)().monthURLStringFormat,t=(0,u.Z)().isMonthInURL;return(0,f.jsxs)(N.Z,{variant:"primary",onClick:n.toggleShow,className:"d-sm-none d-flex justify-content-center align-items-center rounded-0 p-0 fw-medium w-100 px-4 fixed-bottom",style:{height:"2.5rem"},children:[(0,f.jsx)("div",{children:"Menu:\xa0"}),t?(0,f.jsx)("div",{children:e}):(0,f.jsx)("div",{children:"ustawienia"})]})},dn=t(4849),mn=t(4604),fn=t(7064),hn=t(7425),vn=t(5452),xn=function(){var n=(0,l.I0)(),e=(0,s.s0)(),t=(0,i.useState)(!1),a=(0,r.Z)(t,2),o=a[0],u=a[1],c=(0,f.jsxs)("div",{className:"d-flex align-center  d-flex align-items-center text-primary w-100",children:[(0,f.jsx)(hn.aIK,{className:"fs-6 me-1 "}),"Wyloguj"]});return o&&(c=(0,f.jsx)(dn.Z,{animation:"border",size:"sm",variant:"secondary",className:"mx-auto",children:(0,f.jsx)("span",{className:"visually-hidden",children:"Loading..."})})),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(vn.Z,{}),(0,f.jsx)(N.Z,{onClick:function(){u(!0),mn.I8.signOut().then((function(){e("/godziny")})).catch((function(e){return n((0,fn.VG)(e.message))})).finally((function(){u(!1)}))},className:"fs-6 fw-medium text-info p-0 bg-transparent border-0 w-100",style:{cursor:"pointer"},disabled:o,children:c})]})},pn=t(390),jn=t(828),gn=function(){var n=(0,pn.lX)();return(0,f.jsx)(N.Z,{onClick:function(){n.back()},className:"fs-6 fw-medium text-primary p-0 bg-transparent border-0 w-100",style:{cursor:"pointer"},children:(0,f.jsxs)("div",{className:"d-flex align-center  d-flex align-items-center text-start w-100",children:[(0,f.jsx)(jn.Fjg,{className:"fs-6 me-1 "})," Wr\xf3\u0107"]})})},bn=function(n){var e=(0,o.Z)().windowWidth,t=(0,u.Z)().isMonthInURL,r=function(){e<500&&n.handleClose()},i=[!t&&(0,f.jsx)(gn,{}),(0,f.jsxs)(d.rU,{to:"/godziny/ustawienia",className:"text-primary text-decoration-none",children:[(0,f.jsx)(G.QAE,{})," Ustawienia"]}),(0,f.jsx)(xn,{})];return(0,f.jsx)("nav",{className:"mt-auto mb-2 fw-medium",children:(0,f.jsx)(c.Z,{children:i.map((function(n,e){return(0,f.jsx)(c.Z.Item,{className:"bg-transparent border-0 p-0 ps-2",onClick:r,children:n},e)}))})})},yn=t(4832),Zn=function(){var n=(0,l.I0)(),e=(0,_.xY)(),t=e.data,r=e.error,a=e.isLoading;(0,i.useEffect)((function(){n((0,yn.Kx)(t)),n((0,yn.qF)(r)),n((0,yn.iP)(a))}),[t,r,a,n])},wn=t(2685),Nn=function(){var n=(0,wn.iH)(mn.Fs),e=(0,i.useState)(""),t=(0,r.Z)(e,2),a=t[0],s=t[1],o=(0,i.useState)([]),u=(0,r.Z)(o,2),c=u[0],l=u[1];return(0,i.useEffect)((function(){var e=(0,wn.jM)(n,(function(n){var e=[],t=[];null===n||void 0===n||n.forEach((function(n){var r=n.key;e.push(r);var i=(0,wn.iH)(mn.Fs,"".concat(r));(0,wn.jM)(i,(function(n){var e=[];null===n||void 0===n||n.forEach((function(n){var t=n.key;e.push(t.slice(6))})),t.push(e)}),(function(n){console.log("pierwszy"),s("B\u0142\u0105d. Od\u015bwie\u017c stron\u0119")}))}));var r=[].concat(t).map((function(n,t){return n.map((function(n){return e[t]+"-"+n}))})).flat().reverse();l(r)}),(function(n){console.log("dtugi"),s("B\u0142\u0105d. Od\u015bwie\u017c stron\u0119")}));return function(){e()}}),[]),{databaseListMonths:c,error:a}},Sn=function(){var n=(0,l.I0)(),e=Nn(),t=e.databaseListMonths,r=e.error;(0,i.useEffect)((function(){n((0,O.eT)(t)),n((0,O.V2)(r))}),[t,n])},zn=function(){Zn(),Sn();var n=(0,s.TH)().pathname,e=(0,i.useState)(!1),t=(0,r.Z)(e,2),u=t[0],c=t[1],l=(0,o.Z)().windowWidth,d=function(){return c(!1)};(0,i.useEffect)((function(){l>=500&&c(!0)}),[l]);var m=n.includes("/godziny/ustawienia")||n.includes("/godziny/202");return(0,f.jsx)(f.Fragment,{children:m&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{show:u,onHide:d,name:"Disable backdrop",scroll:!0,backdrop:!1,className:"".concat(l<=500&&"backgroundImage"," bg-transparent border-0"),style:{width:l>=500?"30%":"100vw",maxWidth:l>=500&&"250px"},children:(0,f.jsxs)("div",{className:"p-1 d-flex flex-column bg-opacity-white h-100",children:[(0,f.jsx)(cn,{}),(0,f.jsx)(on,{}),(0,f.jsx)(bn,{handleClose:d})]})}),(0,f.jsx)(ln,{toggleShow:function(){return c((function(n){return!n}))}})]})})}},9662:function(n,e,t){t.d(e,{Kg:function(){return l},j0:function(){return o},ob:function(){return c},vs:function(){return u}});var r=new Date,i=function(n){var e=n.getFullYear(),t=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return"".concat(e,"-").concat(t,"-").concat(r)},a=new Date(r.getTime()+12096e5),s=new Date(r.getTime()+5184e6),o=r.getFullYear(),u=String(r.getMonth()+1).padStart(2,"0"),c=(String(r.getDate()).padStart(2,"0"),i(r),i(a)),l=i(s);new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}).format(r)},1100:function(n,e,t){var r=t(4849),i=t(184);e.Z=function(n,e){var t=e;return n.isLoading&&(t=(0,i.jsx)(r.Z,{animation:"border",size:"sm",variant:"secondary",children:(0,i.jsx)("span",{className:"visually-hidden",children:"Loading..."})})),{btnContent:t}}},2218:function(n,e,t){var r=t(3433),i=t(5048);e.Z=function(){var n,e=(0,i.v9)((function(n){return n.listMonths})).listMonths;return{databaseMonthsDatesToString:e&&(null===(n=(0,r.Z)(e))||void 0===n?void 0:n.map((function(n){var e=new Date(n);return new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}).format(e)})))}}},3234:function(n,e,t){var r=t(7689);e.Z=function(){var n=(0,r.TH)().pathname.slice(9);if(n&&/^\d{4}-\d{2}$/.test(n)){var e,t=n&&new Date(n);return{monthURLStringFormat:t&&(null===(e=new Intl.DateTimeFormat("pl-PL",{year:"numeric",month:"long",timeZone:"UTC"}))||void 0===e?void 0:e.format(t))}}return{monthURLStringFormat:""}}},9065:function(n,e,t){var r=t(7689);e.Z=function(){var n=(0,r.TH)().pathname.split("/").slice(-1)[0],e=null===n||void 0===n?void 0:n.slice(0,4),t=null===n||void 0===n?void 0:n.slice(-2);return{monthURL:n,yearFromURL:e,monthFromURL:t,isMonthInURL:/^\d{4}-\d{2}$/.test(n)}}},1419:function(n,e,t){var r=t(9439),i=t(2791);e.Z=function(){var n=(0,i.useState)(window.innerWidth),e=(0,r.Z)(n,2),t=e[0],a=e[1];return(0,i.useEffect)((function(){var n=function(){a(window.innerWidth)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),{windowWidth:t}}},9622:function(n,e,t){t.d(e,{f:function(){return r}});var r=function(n){return n.toLowerCase().split(" ").map((function(n){var e;return(null===n||void 0===n||null===(e=n.charAt(0))||void 0===e?void 0:e.toUpperCase())+n.slice(1)})).join(" ")}}}]);
//# sourceMappingURL=182.86518a92.chunk.js.map