(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[18],{340:function(e,a,t){"use strict";t.d(a,"a",(function(){return v}));var r=t(647),n=t(48),i=t(0),s=t.n(i),o=t(76),l=(t(18),t(3)),c=t(42),u=t(75);s.a.Component;s.a.Component;var m=function(e,a){return"function"===typeof e?e(a):e},d=function(e,a){return"string"===typeof e?Object(o.c)(e,null,null,a):e},f=function(e){return e},p=s.a.forwardRef;"undefined"===typeof p&&(p=f);var h=p((function(e,a){var t=e.innerRef,r=e.navigate,n=e.onClick,i=Object(c.a)(e,["innerRef","navigate","onClick"]),o=i.target,u=Object(l.a)({},i,{onClick:function(e){try{n&&n(e)}catch(a){throw e.preventDefault(),a}e.defaultPrevented||0!==e.button||o&&"_self"!==o||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return u.ref=f!==p&&a||t,s.a.createElement("a",u)}));var v=p((function(e,a){var t=e.component,n=void 0===t?h:t,i=e.replace,o=e.to,v=e.innerRef,b=Object(c.a)(e,["component","replace","to","innerRef"]);return s.a.createElement(r.d.Consumer,null,(function(e){e||Object(u.a)(!1);var t=e.history,r=d(m(o,e.location),e.location),c=r?t.createHref(r):"",h=Object(l.a)({},b,{href:c,navigate:function(){var a=m(o,e.location);(i?t.replace:t.push)(a)}});return f!==p?h.ref=a||v:h.innerRef=v,s.a.createElement(n,h)}))})),b=function(e){return e},g=s.a.forwardRef;"undefined"===typeof g&&(g=b);g((function(e,a){var t=e["aria-current"],n=void 0===t?"page":t,i=e.activeClassName,o=void 0===i?"active":i,f=e.activeStyle,p=e.className,h=e.exact,P=e.isActive,y=e.location,w=e.sensitive,N=e.strict,O=e.style,E=e.to,q=e.innerRef,j=Object(c.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return s.a.createElement(r.d.Consumer,null,(function(e){e||Object(u.a)(!1);var t=y||e.location,i=d(m(E,t),t),c=i.pathname,x=c&&c.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),C=x?Object(r.e)(t.pathname,{path:x,exact:h,sensitive:w,strict:N}):null,R=!!(P?P(C,t):C),k=R?function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return e})).join(" ")}(p,o):p,S=R?Object(l.a)({},O,{},f):O,_=Object(l.a)({"aria-current":R&&n||null,className:k,style:S,to:i},j);return b!==g?_.ref=a||q:_.innerRef=q,s.a.createElement(v,_)}))}))},673:function(e,a,t){"use strict";t.r(a);var r=t(708),n=t(0),i=t.n(n),s=t(340),o=t(820),l=t(918),c=t(697),u=t(205),m=t(335),d=t(712),f=t(19),p=t(33),h=t(109),v=t(1);a.default=function(){var e=Object(h.c)(),a=Object(h.d)((function(e){return e.singupReducer})),t=Object(n.useState)({email:"",password:"",firstName:"",lastName:"",confirmPassword:""}),b=Object(r.a)(t,2),g=b[0],P=b[1],y=Object(n.useState)({email:"",password:"",firstName:"",lastName:"",confirmPassword:""}),w=Object(r.a)(y,2),N=w[0],O=w[1],E=function(e){var a=e.target.name,t=e.target.value,r=Object.assign({},g);r[a]=t,P(r);var n=Object.assign({},N);n[a]="",O(n)};return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{noValidate:!0,autoComplete:"off",className:"form-container",onSubmit:function(a){a.preventDefault();try{d.f.validateSync(g,{abortEarly:!1}),e(Object(v.kb)(g))}catch(t){O(Object(f.b)(t))}}},i.a.createElement(o.a,{container:!0},i.a.createElement(o.a,{item:!0,sm:6,md:6,xs:12,style:{paddingRight:10}},i.a.createElement(l.a,{className:"form-input",name:"firstName",label:"First Name",type:"text",variant:"outlined",error:!!N.firstName,helperText:N.firstName,value:g.firstName,autoComplete:"first-name",onChange:E,fullWidth:!0})),i.a.createElement(o.a,{item:!0,sm:6,md:6,xs:12,style:{paddingLeft:10}},i.a.createElement(l.a,{className:"form-input",name:"lastName",label:"Last Name",type:"text",variant:"outlined",error:!!N.lastName,helperText:N.lastName,value:g.lastName,autoComplete:"last-name",onChange:E,fullWidth:!0}))),i.a.createElement(l.a,{className:"form-input",name:"email",label:"Email",type:"email",variant:"outlined",error:!!N.email,helperText:N.email,value:g.email,autoComplete:"email",onChange:E,fullWidth:!0}),i.a.createElement(l.a,{className:"form-input",name:"password",label:"Password",type:"password",variant:"outlined",error:!!N.password,helperText:N.password,value:g.password,onChange:E,fullWidth:!0}),i.a.createElement(l.a,{className:"form-input",name:"confirmPassword",label:"Confirm Password",type:"password",variant:"outlined",error:!!N.confirmPassword,helperText:N.confirmPassword,value:g.confirmPassword,onChange:E,fullWidth:!0}),i.a.createElement(c.a,{className:"form-input",variant:"contained",size:"large",color:"primary",type:"submit",fullWidth:!0,disabled:a.isLoading},a.isLoading?i.a.createElement(u.a,{size:16,color:"inherit"}):null,"\xa0\xa0 Signup for Free"),i.a.createElement(o.a,{container:!0,className:"form-input"},i.a.createElement(o.a,{item:!0,sm:12},i.a.createElement(m.a,null,"Already a member?\xa0",i.a.createElement(s.a,{to:p.c.LOGIN},"Login"),".")))))}},712:function(e,a,t){"use strict";t.d(a,"d",(function(){return n})),t.d(a,"f",(function(){return i})),t.d(a,"b",(function(){return s})),t.d(a,"e",(function(){return m})),t.d(a,"a",(function(){return d})),t.d(a,"c",(function(){return f}));var r=t(705),n=r.c().shape({email:r.e().required("Please enter email.").email("Please enter valid email."),password:r.e().required("Please enter password.").min(6,"Please enter at least 6 digit password.").max(20,"Password should not be more than 20 characters.")}),i=r.c().shape({firstName:r.e().required("Please enter first name."),lastName:r.e().required("Please enter last name."),email:r.e().required("Please enter email.").email("Please enter valid email."),password:r.e().required("Please enter password.").min(6,"Please enter at least 6 digit password.").max(20,"Password should not be more than 20 characters."),confirmPassword:r.e().oneOf([r.d("password")],"Password and confirm password didn't match.")}),s=r.c().shape({title:r.e().required("Please enter title."),slug:r.e().trim().required("Please enter slug.").matches(/^[a-zA-Z0-9][a-zA-Z0-9-_.]*$/,"Please enter only English characters with - or _"),postType:r.e().required("Please enter post type."),shortDescription:r.e().required("Please enter a summary."),categories:r.a().of(r.e()).required("Please choose atleast one category."),featuredImage:r.e().required("Please choose featured image."),description:r.e().required("Please provide description.").test("validateJSONString","Please enter proper description",(function(e){var a=this.path,t=this.createError;try{var r=JSON.parse(e||""),n=JSON.parse(JSON.stringify(r.blocks))[0].type;return console.log(n),!0}catch(o){if(o.message.includes("JSON")){var i=document.createElement("div");i.innerHTML=e;var s=i.textContent||i.innerText||"";if(s&&"{}"!==s)return!(s.split(" ").length<100)||t({path:a,message:"Please enter at least 100 words."})}return t({path:a,message:"Please enter proper description."})}}))}),o=t(7),l=t.n(o),c=t(14),u=t(19),m=r.c().shape({username:r.e().trim().required("Please enter username.").test("validateDuplicateUsername","This username is not available.",function(){var e=Object(c.a)(l.a.mark((function e(a){var t,r,n,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.path,r=this.createError,e.next=3,(new u.a).FetchFromServer("/auth","/validate-username","get",!0,{username:a});case 3:if(n=e.sent,i=n.isError,s=n.messages,i){e.next=8;break}return e.abrupt("return",!0);case 8:return e.abrupt("return",r({path:t,message:s[0]||"This username is not available."}));case 9:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()),firstName:r.e().trim().required("Please enter first name."),lastName:r.e().trim().required("Plesae enter last name"),phoneNumber:r.e().trim().notRequired().min(10,"Phone number should be at least of 10 character.").max(13,"Phone number should not be more than 13 character."),gender:r.e().trim().notRequired().oneOf(["male","female","other"],"Invalid gender."),address:r.e().trim().optional(),state:r.e().trim().optional(),city:r.e().trim().optional(),pincode:r.e().trim().notRequired().length(6,"Pin code should be of 6 digits."),about:r.e().trim().optional()}),d=r.c().shape({account_type:r.e().required("Please choose account type.").oneOf(["bank_account","vpa"]),bank_account:r.c().when("account_type",{is:"bank_account",then:r.c().shape({name:r.e().required("Please enter bank name."),ifsc:r.e().required("Please enter ifsc code."),account_number:r.e().required("Please enter account number.")})}),vpa:r.c().when("account_type",{is:"vpa",then:r.c().shape({address:r.e().required("Please enter UPI ID")})})}),f=r.c().shape({mode:r.e().required("Please choose account type.").oneOf(["bank_account","vpa"]),amount:r.b().required("Please enter amount").min(1,"Amount should be greater than 1").max(r.d("availableBalance"),"Amount should not be greater than available balance")})}}]);
//# sourceMappingURL=18.d5b5568b.chunk.js.map