(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[9],{207:function(e,a,t){e.exports=t.p+"static/media/main-logo.42ad4115.svg"},208:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),l=t.n(n),r=t(142),c=function(){return l.a.createElement("div",{className:"auth-socail-btn-wrap d-flex flex-wrap mt-2",style:{justifyContent:"center"}},l.a.createElement("p",{className:"w-100 text-center mt-3 mb-1"},"Or Continue With"),l.a.createElement(r.a,{variant:"primary",type:"button",className:"facebook-btn",onClick:function(){window.location.href="https://writearn.in/auth/facebook"}},l.a.createElement("i",{className:"fab fa-facebook-f"})),l.a.createElement(r.a,{variant:"primary",type:"button",className:"google-btn",onClick:function(){window.location.href="https://writearn.in/auth/google"}},l.a.createElement("i",{className:"fab fa-google"})))}},650:function(e,a,t){"use strict";t.r(a);var n=t(52),l=t(0),r=t.n(l),c=t(144),o=t(142),i=t(140),m=t(207),s=t.n(m),u=t(208),b=t(38),f=t(1),d=t(12),p=t(61);a.default=function(e){var a=e.onLogin,t=Object(l.useState)(""),m=Object(n.a)(t,2),E=m[0],h=m[1],w=Object(l.useState)(""),g=Object(n.a)(w,2),v=g[0],y=g[1],N=Object(b.b)(),x=Object(b.c)((function(e){return e.authReducer})).isLoadingAuth;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"auth-form-wrap"},r.a.createElement("div",{className:"auth-logo text-center mb-2 mt-2"},r.a.createElement("img",{src:s.a,width:160,alt:"Main Logo"})),r.a.createElement("h5",{className:"mb-3 text-center text-capitalize"},"Forgot Your Password"),r.a.createElement("p",{className:"text-center"},"Enter your email below and we will send you instructions on how to reset your password"),r.a.createElement(c.a,{onSubmit:function(e){e.preventDefault();try{p.b.validateSync({email:E},{abortEarly:!1}),N(Object(f.Q)({email:E}))}catch(a){y(Object(d.f)(a))}},noValidate:!0},r.a.createElement(c.a.Group,{controlId:"formBasicEmail"},r.a.createElement(c.a.Control,{type:"email",placeholder:"",onChange:function(e){var a=e.target.value;h(a),y({email:""})},name:"email",value:E}),r.a.createElement("label",{className:"form-control-placeholder ".concat(E?"float-label":"")},"Email"),v.email?r.a.createElement("p",{className:"text-danger"},v.email):null),r.a.createElement("div",{className:"auth-links d-block d-md-flex  text-center align-items-center justify-content-between mb-3"},r.a.createElement("p",{className:"mb-3 mb-md-0"},"Remember your password?",r.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),a()}}," ","Login"))),r.a.createElement(o.a,{variant:"primary",type:"submit",className:"w-100",disabled:x},x?r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null),"\xa0 Please wait..."):r.a.createElement(r.a.Fragment,null,"Submit")," "),r.a.createElement(u.a,null))))}}}]);
//# sourceMappingURL=9.a422fbe4.chunk.js.map