(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7],{176:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),r=t.n(n),c=t(12),l=t(38),m=t(1),s=function(e){var a=e.totalViews,t=e.totalLikes,n=e.totalComments,s=e.postId,i=Object(l.c)((function(e){return{userDetails:e.authReducer.details}})).userDetails,o=Object(l.b)();return r.a.createElement("div",{className:"rection-wrap"},r.a.createElement("a",{href:"javscript:void(0);",className:"d-inline-flex mr-3"},r.a.createElement("span",null,a||0),r.a.createElement("i",{className:"far fa-eye"})),r.a.createElement("a",{href:"javscript:void(0);",className:"d-inline-flex mr-3",onClick:function(){Object(c.g)(i)?o(Object(m.K)({id:s})):o(Object(m.bb)({showLoginModal:!0,showRegisterModal:!1}))}},r.a.createElement("span",null,t||0),r.a.createElement("i",{className:"far fa-thumbs-up"})),r.a.createElement("a",{href:"javscript:void(0);",className:"d-inline-flex"},r.a.createElement("span",null,n||0),r.a.createElement("i",{className:"far fa-comment"})))}},181:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),r=t.n(n),c=t(12),l=function(e){var a=e.post,t=function(e,t){e.preventDefault();var n=a.title,r=a.shortDescription,l=a.featuredImage,m=a.url,s="".concat("https://writearn.in").concat(m),i=r?r.replace(new RegExp(/[ +!@#$%^&*().]/g),"_"):"",o=l?Object(c.h)(l):null;n=n?n.replace(new RegExp(/[ +!@#$%^&*().]/g),"_"):null;var u=encodeURIComponent("".concat("https://writearn.in/social-share","?title=").concat(n,"&description=").concat(i,"&image=").concat(o,"&url=").concat(s)),d="";switch(t){case"facebook":d="https://www.facebook.com/dialog/share?app_id=".concat("337514887308522","&display=popup&href=").concat(u);break;case"whatsapp":d="https://".concat(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web",".whatsapp.com/send?text=").concat(u);break;case"linkedin":d="https://www.linkedin.com/shareArticle?url=".concat(u);break;case"twitter":d="https://twitter.com/share?url=".concat(u)}window.open(d)};return r.a.createElement("div",{className:"social-media-listing d-flex mt-3"},r.a.createElement("span",{className:"mr-2 social-icon"},r.a.createElement("i",{className:"fas fa-share-alt"})),r.a.createElement("span",{className:"mr-2 social-icon",onClick:function(e){return t(e,"facebook")}},r.a.createElement("i",{className:"fab fa-facebook-f"})),r.a.createElement("span",{className:"mr-2 social-icon",onClick:function(e){return t(e,"twitter")}},r.a.createElement("i",{className:"fab fa-twitter"})),r.a.createElement("span",{className:"mr-2 social-icon",onClick:function(e){return t(e,"whatsapp")}},r.a.createElement("i",{className:"fab fa-whatsapp"})),r.a.createElement("span",{className:"social-icon",onClick:function(e){return t(e,"instagram")}},r.a.createElement("i",{className:"fab fa-instagram"})))}},252:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(51),l=t(12),m=t(253),s=t.n(m);a.a=function(e){var a=e.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{to:Object(l.e)(a)},Object(l.b)(a),a.isVerified?r.a.createElement(r.a.Fragment,null,"\xa0",r.a.createElement("img",{src:s.a,alt:"verify icon",style:{width:12}})):null))}},253:function(e,a,t){e.exports=t.p+"static/media/verify-icon.ac8a3348.svg"},276:function(e,a,t){"use strict";var n=t(6),r=t.n(n),c=t(60),l=t(52),m=t(0),s=t.n(m),i=t(162),o=t.n(i),u=t(12),d=t(51),E=t(176);a.a=function(e){var a=e._id,t=e.name,n=e.isLoading,i=Object(m.useState)({isLoading:!0,data:[]}),p=Object(l.a)(i,2),g=p[0],b=p[1],f=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(new u.a).FetchFromServer("/homepage","/trending-post/".concat(a),"GET",!0);case 2:if(t=e.sent,n=t.isError,c=t.data,!n){e.next=8;break}return b({isLoading:!1,data:[]}),e.abrupt("return");case 8:b({isLoading:!1,data:c});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(m.useEffect)((function(){n||f()}),[n]);var h=g.isLoading,N=g.data;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"main-heading"},s.a.createElement("div",{className:"ribbon-heading-wrap"},s.a.createElement("div",{className:"ribbon-heading ligh-blue-ribbon"},s.a.createElement("h4",{className:"m-0"},s.a.createElement("i",{className:"fa fa-chart-line mr-1"})," ",h||n?s.a.createElement(o.a,{width:100}):t)))),h||n?["","","","","","","","","","","","",""].map((function(e,a){return s.a.createElement("div",{className:"card-listing",key:a},s.a.createElement("div",{className:"d-flex align-items-center"},s.a.createElement("div",{className:"user-icon-circle"}),s.a.createElement("div",{className:"blog-card-text ml-2"},s.a.createElement("h6",{className:"mb-1"},s.a.createElement(o.a,{height:12})),s.a.createElement("p",{className:"m-0"},s.a.createElement(o.a,{height:10})),s.a.createElement("div",{className:"rection-wrap"},s.a.createElement(o.a,{height:8})))))})):N.length?N.map((function(e){return s.a.createElement("div",{key:e._id,className:"card-listing"},s.a.createElement("div",{className:"d-flex align-items-center"},s.a.createElement("div",{className:"user-icon-circle"},s.a.createElement("img",{alt:"",src:Object(u.h)(e.featuredImage),className:"img-fluid"})),s.a.createElement("div",{className:"blog-card-text ml-2"},s.a.createElement("h6",{className:"mb-1"},s.a.createElement(d.a,{to:Object(u.c)(e)},e.title)),s.a.createElement("p",{className:"m-0"},e.shortDescription),s.a.createElement(E.a,e))))})):s.a.createElement("p",null,"No Trending Post ",s.a.createElement("b",null,t)))}},277:function(e,a,t){e.exports=t.p+"static/media/net-shap.2d62e4e8.png"},652:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(645),l=t(89),m=t(38),s=t(141),i=t(1),o=t(276),u=t(4),d=t(162),E=t.n(d),p=function(){return r.a.createElement("div",{className:"text-left"},r.a.createElement(E.a,{height:25}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:""},r.a.createElement(E.a,{height:300})),r.a.createElement("div",{className:"blog-text  mt-4"},r.a.createElement("h6",{className:"blog-category text-uppercase"},r.a.createElement(E.a,{key:"category"})),r.a.createElement("h4",null,r.a.createElement(E.a,{key:"description"})),r.a.createElement("p",{className:"mt-3"},r.a.createElement(E.a,{key:"shortdescription",width:250}))))},g=t(12),b=t(140),f=function(e){var a=e.totalLikes,t=e.totalDislikes,n=e.totalComments,c=e.totalViews,l=e.postId,s=Object(m.c)((function(e){return{userDetails:e.authReducer.details}})).userDetails,o=Object(m.c)((function(e){return e.postDetailsReducer})),u=o.isLikeLoading,d=o.isDisLikeLoading,E=Object(m.b)();return r.a.createElement("div",{className:"like-container"},r.a.createElement("span",{className:"like cursor-pointer"},r.a.createElement("i",{className:"fa fa-eye"}),"\xa0\xa0Views (",c||0,")"),"\xa0\xa0",r.a.createElement("span",{className:"like cursor-pointer",onClick:function(){Object(g.g)(s)?E(Object(i.K)({id:l})):E(Object(i.bb)({showLoginModal:!0,showRegisterModal:!1}))}},u?r.a.createElement(b.a,{animation:"border",size:"sm",variant:"secondary"}):r.a.createElement("i",{className:"fa fa-thumbs-up"}),"\xa0\xa0Like (",a||0,")"),"\xa0\xa0",r.a.createElement("span",{className:"like cursor-pointer",onClick:function(){Object(g.g)(s)?E(Object(i.J)({id:l})):E(Object(i.bb)({showLoginModal:!0,showRegisterModal:!1}))}},d?r.a.createElement(b.a,{animation:"border",size:"sm",variant:"secondary"}):r.a.createElement("i",{className:"fa fa-thumbs-down"}),"\xa0\xa0Dislike (",t||0,")"),"\xa0\xa0",r.a.createElement("span",{className:"like cursor-pointer"},r.a.createElement("i",{className:"fa fa-comments"}),"\xa0\xa0Comments (",n||0,")"))},h=t(6),N=t.n(h),v=t(60),k=t(52),j=t(144),w=t(142),O=t(277),y=t.n(O),x=t(252),F=function(e){var a=e.postId,t=(e.count,Object(m.c)((function(e){return{userDetails:e.authReducer.details}})).userDetails),s=Object(m.b)(),o={comment:"",postId:a},d=Object(n.useState)(o),E=Object(k.a)(d,2),p=E[0],f=E[1],h=Object(n.useState)(o),O=Object(k.a)(h,2),F=O[0],_=O[1],L=Object(m.c)((function(e){return e.commentOnPostReducer})).isLoading;Object(n.useEffect)((function(){L||f(Object(u.a)(Object(u.a)({},p),{},{comment:""}))}),[L]);var D=function(){s(Object(i.bb)({showLoginModal:!0,showRegisterModal:!1}))},I=function(){var e=Object(v.a)(N.a.mark((function e(a){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),Object(g.g)(t)?s(Object(i.I)({id:p.postId,comment:p.comment})):D();case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(l.a,{md:12},r.a.createElement("div",{className:"form-wrap post-comment-form"},r.a.createElement("div",{className:"net-shape-bg"},r.a.createElement("img",{src:y.a,width:300,alt:"Net Shape"})),r.a.createElement("div",{className:"ribbon-heading-wrap mb-5"},r.a.createElement("div",{className:"ribbon-heading"},r.a.createElement("h2",{className:"mt-2"},"Add Your Comment"))),r.a.createElement(j.a,{onSubmit:I,noValidate:!0},r.a.createElement(c.a,null,r.a.createElement(l.a,{md:12},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-label",htmlFor:"phone"},"Your comment"),r.a.createElement("textarea",{id:"comment",className:"form-control",name:"comment",onChange:function(e){var a=e.target,t=a.name,n=a.value,r=Object.assign({},p);r[t]=n,f(r);var c=Object.assign({},F);c[t]="",_(c)},value:p.comment,style:{resize:"none"}}),F.comment?r.a.createElement("p",{className:"text-danger"},F.comment):null))),r.a.createElement(c.a,null,r.a.createElement(l.a,{md:12},Object(g.g)(t)?r.a.createElement(r.a.Fragment,null,"Commenting as:\xa0",r.a.createElement(x.a,{user:{firstName:t?t.firstName:"",lastName:t?t.lastName:"",username:t?t.username:"",_id:t?t._id:""}})):r.a.createElement(r.a.Fragment,null,"You need to ",r.a.createElement("span",{className:"login-link",onClick:D},"login")," to post comment"))),r.a.createElement(w.a,{className:"mt-1",disabled:L||!p.comment.trim(),variant:"primary",type:"submit"},L?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{animation:"border",size:"sm"})," Please wait.."):"Submit"))))))},_=t(642),L=t.n(_),D=t(189),I=function(e){var a=e.commentItem,t=a.userId,c=a.comment,l=a.createdAt,m=Object(n.useState)(!1),s=Object(k.a)(m,2),i=s[0],o=s[1];return r.a.createElement("div",{className:"post-comment-item mt-4 bg-white p-3"},r.a.createElement("div",{className:"author-pic"},r.a.createElement(D.a,{size:50,src:Object(g.e)(t),name:Object(g.b)(t),className:"mr-2",round:!0})),r.a.createElement("div",{className:"contents"},r.a.createElement("div",{className:"media-body"},r.a.createElement("h5",{className:"m-0"},r.a.createElement("a",{href:Object(g.e)(t)},Object(g.b)(t))),r.a.createElement("small",null,L()(l).format("DDMMYYYY")===L()(new Date).format("DDMMYYYY")?r.a.createElement("span",null,L()(l).fromNow()):r.a.createElement("span",null,L()(l).format("lll")))),r.a.createElement("p",{className:"m-0 mt-2"},i?c:c.substring(0,200),c.length>200?r.a.createElement("span",{className:"more-less",onClick:function(){return o(!i)}},i?"  Read less":"  Read more"):null)))},C=function(){return["","",""].map((function(e,a){return r.a.createElement("div",{className:"card-listing mt-4 bg-white p-3",key:a},r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("div",{className:"user-icon-circle"}),r.a.createElement("div",{className:"ml-2 col-md-9"},r.a.createElement("h6",{className:"mb-1"},r.a.createElement(E.a,{height:12})),r.a.createElement("p",{className:"m-0"},r.a.createElement(E.a,{height:10})),r.a.createElement("div",{className:"rection-wrap"},r.a.createElement(E.a,{height:8})))))}))},M=function(e){var a=e.postId,t=Object(m.b)(),c=Object(m.c)((function(e){return e.postCommentReducer})),l=c.list,s=void 0===l?[]:l,o=c.totalRecords,u=(c.isError,c.isLoading),d=Object(n.useState)(0),E=Object(k.a)(d,2),p=E[0],g=E[1];Object(n.useEffect)((function(){t(Object(i.N)({id:a,skip:p,limit:10}))}),[p]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"post-comments"},u&&!s.length?r.a.createElement(C,null):r.a.createElement(r.a.Fragment,null,s&&s.length?s.map((function(e){return r.a.createElement(I,{commentItem:e,key:e._id})})):r.a.createElement("div",null,"No comments added"),u&&s.length?r.a.createElement(C,null):o>s.length?r.a.createElement(w.a,{variant:"primary",type:"button",className:"mt-4",onClick:function(){g(s.length)}},"Show more"):null)))},S=function(e){var a=e.author;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"media"},r.a.createElement(D.a,{size:50,src:Object(g.e)(a),name:Object(g.b)(a),className:"mr-3",round:!0}),r.a.createElement("div",{className:"media-body"},r.a.createElement("h5",{className:"m-0"},"Author: ",r.a.createElement("a",{href:Object(g.e)(a)},Object(g.b)(a))),r.a.createElement("small",null,a.about))))},R=function(e){var a=e.post;return r.a.createElement("div",{className:"featured-image-container my-2"},r.a.createElement("div",{className:"img-container text-center my-2"},r.a.createElement("div",{className:"feature-image-background",style:{backgroundImage:"url(".concat(Object(g.h)(a.featuredImage),")")}}),r.a.createElement("img",{src:Object(g.h)(a.featuredImage),alt:a.title,className:"featured-image img-fluid"})),r.a.createElement("div",{className:"caption"},a.shortDescription))},T=function(e){var a=e.level,t=e.text;switch(a){case 1:return r.a.createElement("h1",{dangerouslySetInnerHTML:{__html:t}});case 2:return r.a.createElement("h2",{dangerouslySetInnerHTML:{__html:t}});case 3:return r.a.createElement("h3",{dangerouslySetInnerHTML:{__html:t}});case 4:return r.a.createElement("h4",{dangerouslySetInnerHTML:{__html:t}});case 5:return r.a.createElement("h5",{dangerouslySetInnerHTML:{__html:t}});default:return r.a.createElement("h6",{dangerouslySetInnerHTML:{__html:t}})}},Y=function(e){var a=e.data;switch(a.service){case"youtube":return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"text-center"},r.a.createElement("iframe",{width:a.width||420,height:a.height||315,src:a.embed,title:a.source})),a.caption?r.a.createElement("p",null,a.caption):null);case"twitter":return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"text-center"},r.a.createElement("iframe",{width:a.width||420,height:a.width||420,src:a.embed,title:a.source,style:{margin:"0 auto"},frameborder:"0",scrolling:"no",allowtransparency:"true",className:"embed-tool__content"})),a.caption?r.a.createElement("p",null,a.caption):null);default:return r.a.createElement(r.a.Fragment,null)}},H=t(647),z=function(e){var a=e.description;console.log(a,"PostDescriptionPostDescriptionPostDescription");return r.a.createElement("div",{className:"post-description-container"},function(e){return r.a.createElement(r.a.Fragment,null,e.blocks.map((function(e,a){switch(e.type){case"header":return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement(T,{level:e.data.level,text:e.data.text}));case"embed":return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement(Y,{data:e.data}));case"paragraph":return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("p",{className:"post-description-p",dangerouslySetInnerHTML:{__html:e.data.text}}));case"image":return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("img",{src:e.data.file.url,className:"img-fluid",alt:""}),e.data.caption?r.a.createElement("p",null,e.data.caption):null);case"code":return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("pre",null,r.a.createElement("code",null,e.data.code)));case"quote":return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("blockquote",null,e.data.text));case"warning":return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("div",{className:"warning"},r.a.createElement("p",null,e.data.title),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.data.message}})));case"list":return r.a.createElement(r.a.Fragment,{key:a},"ordered"===e.data.style?r.a.createElement("ol",null,e.data.items.map((function(e,a){return r.a.createElement("li",{key:a},e)}))):r.a.createElement("ul",null,e.data.items.map((function(e,a){return r.a.createElement("li",{key:a},e)}))));case"checklist":return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("ul",null,e.data.items.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("input",{type:"checkbox",checked:e.checked})," \xa0"," ",e.text)}))));case"delimiter":return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("div",{className:"delimiter text-center"}));case"table":return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement(H.a,{responsive:!0,bordered:!0},r.a.createElement("tbody",null,e.data.content.map((function(e,a){return r.a.createElement("tr",{key:a},e.map((function(e,a){return r.a.createElement("td",{key:a},e)})))})))));default:return null}})))}(a))},V=function(e){var a=e.categories;return r.a.createElement("h6",{className:"blog-category mt-3 mb-2 text-uppercase"},"Categories:"," ",a.map((function(e){return r.a.createElement(r.a.Fragment,{key:e._id},r.a.createElement("span",{className:"category-tag"},e.name),"\xa0")})))},P=function(e){var a=e.tags;return r.a.createElement(r.a.Fragment,null,a&&a.length?r.a.createElement("h6",{className:"blog-tags text-uppercase"},"Tags:"," ",a.map((function(e){return r.a.createElement(r.a.Fragment,{key:e},r.a.createElement("span",{className:"badge badge-secondary tag text"},e),"\xa0")}))):null)},A=t(181),J=function(e){var a=e.isLoading,t=e.post;Object(n.useEffect)((function(){!a&&t&&t._id&&setTimeout((function(){l()}),1e4)}),[t&&t._id]);var c=Object(m.b)(),l=function(){c(Object(i.ab)({id:t._id}))};return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null)):r.a.createElement("div",{className:"post-details-container"},r.a.createElement("h1",{className:"post-title"}," ",t.title),r.a.createElement("div",null,"Date: ",(new Date).toDateString()),r.a.createElement(R,{post:t}),r.a.createElement(z,{description:t.description}),r.a.createElement(V,{categories:t.categories}),r.a.createElement("br",null),r.a.createElement(P,{tags:t.tags}),r.a.createElement("br",null),r.a.createElement(f,{totalViews:t.totalViews,totalLikes:t.totalLikes,totalDislikes:t.totalDislikes,totalComments:t.totalComments,postId:t._id}),r.a.createElement("br",null),r.a.createElement(A.a,{post:Object(u.a)(Object(u.a)({},t),{},{url:Object(g.c)(t)})}),r.a.createElement("hr",{className:"post-detail-hr"}),r.a.createElement(S,{author:t.author}),r.a.createElement("div",{className:"add-comment mt-3"},r.a.createElement("h5",{className:"text-capitalize comments-count"},t.totalComments," Comments"),r.a.createElement(F,{postId:t._id,author:t.author})),r.a.createElement("div",{className:"comment-list mt-4"},r.a.createElement(M,{postId:t._id}))))};a.default=function(){var e=Object(m.b)(),a=Object(m.c)((function(e){return e.postDetailsReducer})),t=a.isLoading,u=a.postDetails,d=Object(s.i)();return Object(n.useEffect)((function(){e(Object(i.O)(d.params))}),[d.params.id,d.slug]),r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(l.a,{lg:9},r.a.createElement(J,{isLoading:t||u._id!==d.params.id,post:u})),r.a.createElement(l.a,{lg:3},r.a.createElement("div",{className:"blog-card mt-5 mt-md-0"},r.a.createElement(o.a,Object.assign({},u.postType,{isLoading:t}))))))}}}]);
//# sourceMappingURL=7.37b8a21f.chunk.js.map