(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[10],{207:function(e,a,t){e.exports=t.p+"static/media/main-logo.42ad4115.svg"},208:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),l=t.n(n),r=t(142),c=function(){return l.a.createElement("div",{className:"auth-socail-btn-wrap d-flex flex-wrap mt-2",style:{justifyContent:"center"}},l.a.createElement("p",{className:"w-100 text-center mt-3 mb-1"},"Or Continue With"),l.a.createElement(r.a,{variant:"primary",type:"button",className:"facebook-btn",onClick:function(){window.location.href="https://writearn.in/auth/facebook"}},l.a.createElement("i",{className:"fab fa-facebook-f"})),l.a.createElement(r.a,{variant:"primary",type:"button",className:"google-btn",onClick:function(){window.location.href="https://writearn.in/auth/google"}},l.a.createElement("i",{className:"fab fa-google"})))}},648:function(e,a,t){"use strict";t.r(a);var n=t(52),l=t(0),r=t.n(l),c=t(144),o=t(142),s=t(140),m=t(207),i=t.n(m),u=t(208),d=t(38),f=t(1),p=t(12),b=t(61);a.default=function(e){var a=e.onSignUp,t=e.onFogotPassowrd,m=Object(l.useState)({email:"",password:""}),E=Object(n.a)(m,2),g=E[0],h=E[1],w=Object(l.useState)({email:"",password:""}),v=Object(n.a)(w,2),N=v[0],y=v[1],j=Object(d.b)(),k=Object(d.c)((function(e){return e.authReducer})).isLoadingAuth,x=function(e){var a=e.target,t=a.name,n=a.value,l=Object.assign({},g);l[t]=n,h(l);var r=Object.assign({},N);r[t]="",y(r)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"auth-form-wrap"},r.a.createElement("div",{className:"auth-logo text-center mb-2 mt-2"},r.a.createElement("img",{src:i.a,width:160,alt:"Main Logo"})),r.a.createElement("h5",{className:"mb-3 text-center text-capitalize"},"Enter Login Details"),r.a.createElement(c.a,{onSubmit:function(e){e.preventDefault();try{b.c.validateSync(g,{abortEarly:!1}),j(Object(f.L)(g))}catch(a){y(Object(p.f)(a))}},noValidate:!0},r.a.createElement(c.a.Group,{controlId:"formBasicEmail"},r.a.createElement(c.a.Control,{type:"email",placeholder:"",onChange:x,name:"email",value:g.email}),r.a.createElement("label",{className:"form-control-placeholder ".concat(g.email?"float-label":"")},"Email"),N.email?r.a.createElement("p",{className:"text-danger"},N.email):null),r.a.createElement(c.a.Group,{controlId:"formBasicPassword"},r.a.createElement(c.a.Control,{type:"password",placeholder:"",name:"password",onChange:x,value:g.password}),r.a.createElement("label",{className:"form-control-placeholder ".concat(g.password?"float-label":"")},"Password"),N.password?r.a.createElement("p",{className:"text-danger"},N.password):null),r.a.createElement("div",{className:"auth-links d-block d-md-flex  text-center align-items-center justify-content-between mb-3"},r.a.createElement("p",{className:"mb-3 mb-md-0"},"Not a member ?",r.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),a()}}," ","Register here.")),r.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),t()}},"Forgot Password?")),r.a.createElement(o.a,{variant:"primary",type:"submit",className:"w-100",disabled:k},k?r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null),"\xa0 Please wait..."):r.a.createElement(r.a.Fragment,null,"Login")," "),r.a.createElement(u.a,null))))}}}]);
//# sourceMappingURL=10.01065dbf.chunk.js.map