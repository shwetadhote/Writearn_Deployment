(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"uP/6":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var i=u("pMnS"),a=u("v2r3"),d=u("f5JQ"),o=u("syPK"),s=u("Fe25"),r=u("SVse"),c=u("G0yt"),p=u("iInd"),m=u("AytR"),f=u("PSD3"),g=u.n(f);class h{constructor(l,n){this.apiService=l,this.notificationService=n,this.imageEndpoint=m.a.ImageEndpoint}ngOnInit(){this.isLoading=!0,this.getRequests()}getRequests(){console.log("requests"),this.getVerificationRequestSubscription&&this.getVerificationRequestSubscription.unsubscribe(),this.isLoading=!0,this.requests=[],this.getVerificationRequestSubscription=this.apiService.call("/identity-document","/all","GET",!0).subscribe(l=>{this.isLoading=!1,this.requests=l.data},l=>{this.isLoading=!1})}ngOnDestroy(){this.getVerificationRequestSubscription&&this.getVerificationRequestSubscription.unsubscribe()}updateStatus(l,n,u){this.notificationService.confirmBox({title:"ID verification",html:`Add a note for ${n}.`,input:"textarea",showCancelButton:!0,showLoaderOnConfirm:!0,preConfirm:e=>new Promise((u,t)=>{this.apiService.call("/identity-document","/update-status","PUT",!0,void 0,{status:n,userId:l,note:e}).subscribe(i=>{this.apiService.call("/user",`/${l}/update-verification-status`,"PATCH",!0,void 0,{isVerified:"approved"===n}).subscribe(l=>u({note:e,res:l}),l=>{t(this.apiService.getErrorMessage(l))})},l=>{t(this.apiService.getErrorMessage(l))})}).then(({note:l})=>(this.requests[u].status=n,this.requests[u].note=l,!0)).catch(l=>(g.a.showValidationMessage(l),!1)),inputValidator:l=>new Promise(n=>{n(""!==l?null:"Please select an option.")})})}}var b=u("nm5K"),v=u("9nlD"),I=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["View front file"]))],null,(function(l,n){l(n,1,0,e["\u0275inlineInterpolate"](2,"",n.component.imageEndpoint,"/",n.parent.context.$implicit.frontImage,""))}))}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,null,null,null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["View back file"]))],null,(function(l,n){l(n,2,0,e["\u0275inlineInterpolate"](2,"",n.component.imageEndpoint,"/",n.parent.context.$implicit.backImage,""))}))}function x(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,null,null,null,null,null,null,null)),(l()(),e["\u0275eld"](1,16777216,null,null,2,"span",[["class","text-center label label-success cursor-pointer"],["ngbTooltip","Approve"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.updateStatus(null==l.parent.context.$implicit.userId?null:l.parent.context.$implicit.userId._id,"approved",l.parent.context.index)&&e),e}),null,null)),e["\u0275did"](2,737280,null,0,c.hb,[e.ElementRef,e.Renderer2,e.Injector,e.ComponentFactoryResolver,e.ViewContainerRef,c.ib,e.NgZone,r.DOCUMENT,e.ChangeDetectorRef,e.ApplicationRef],{ngbTooltip:[0,"ngbTooltip"]},null),(l()(),e["\u0275eld"](3,0,null,null,0,"i",[["class","fa fa-check"]],null,null,null,null,null)),(l()(),e["\u0275and"](0,null,null,0))],(function(l,n){l(n,2,0,"Approve")}),null)}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,33,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"th",[["scope","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,["",""])),(l()(),e["\u0275eld"](3,0,null,null,6,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,5).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e["\u0275did"](5,671744,null,0,p.r,[p.o,p.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](6,null,[" "," ",""])),(l()(),e["\u0275eld"](7,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),e["\u0275ted"](9,null,["",""])),(l()(),e["\u0275eld"](10,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](11,null,["",""])),(l()(),e["\u0275eld"](12,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](14,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](16,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](17,0,null,null,6,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](18,16777216,null,null,5,"span",[["class","pcoded-badge label cursor-pointer"]],null,null,null,null,null)),e["\u0275prd"](512,null,r["\u0275NgClassImpl"],r["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](20,278528,null,0,r.NgClass,[r["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](21,{"label-warning":0,"label-success":1,"label-danger":2}),e["\u0275did"](22,737280,null,0,c.hb,[e.ElementRef,e.Renderer2,e.Injector,e.ComponentFactoryResolver,e.ViewContainerRef,c.ib,e.NgZone,r.DOCUMENT,e.ChangeDetectorRef,e.ApplicationRef],{ngbTooltip:[0,"ngbTooltip"]},null),(l()(),e["\u0275ted"](23,null,["",""])),(l()(),e["\u0275eld"](24,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](25,null,["",""])),e["\u0275ppd"](26,2),(l()(),e["\u0275eld"](27,0,null,null,5,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,x)),e["\u0275did"](29,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](30,16777216,null,null,2,"span",[["class","text-center label label-danger cursor-pointer"],["ngbTooltip","Reject"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.updateStatus(null==l.context.$implicit.userId?null:l.context.$implicit.userId._id,"rejected",l.context.index)&&e),e}),null,null)),e["\u0275did"](31,737280,null,0,c.hb,[e.ElementRef,e.Renderer2,e.Injector,e.ComponentFactoryResolver,e.ViewContainerRef,c.ib,e.NgZone,r.DOCUMENT,e.ChangeDetectorRef,e.ApplicationRef],{ngbTooltip:[0,"ngbTooltip"]},null),(l()(),e["\u0275eld"](32,0,null,null,0,"i",[["class","fa fa-times"]],null,null,null,null,null)),(l()(),e["\u0275eld"](33,0,null,null,0,"td",[],null,null,null,null,null))],(function(l,n){l(n,5,0,"/users/"+(null==n.context.$implicit.userId?null:n.context.$implicit.userId._id)),l(n,14,0,n.context.$implicit.frontImage),l(n,16,0,n.context.$implicit.backImage);var u=l(n,21,0,"pending"===n.context.$implicit.status,"approved"===n.context.$implicit.status,"rejected"===n.context.$implicit.status);l(n,20,0,"pcoded-badge label cursor-pointer",u),l(n,22,0,e["\u0275inlineInterpolate"](1,"",n.context.$implicit.note,"")),l(n,29,0,"approved"!==n.context.$implicit.status),l(n,31,0,"Reject")}),(function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,e["\u0275nov"](n,5).target,e["\u0275nov"](n,5).href),l(n,6,0,null==n.context.$implicit.userId?null:n.context.$implicit.userId.firstName,null==n.context.$implicit.userId?null:n.context.$implicit.userId.lastName),l(n,9,0,null==n.context.$implicit.userId?null:n.context.$implicit.userId.email),l(n,11,0,n.context.$implicit.type),l(n,23,0,n.context.$implicit.status);var u=e["\u0275unv"](n,25,0,l(n,26,0,e["\u0275nov"](n.parent.parent.parent,0),n.context.$implicit.createdAt,"dd-MM-yyyy hh:mmaa"));l(n,25,0,u)}))}function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](2,278528,null,0,r.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275and"](0,null,null,0))],(function(l,n){l(n,2,0,n.component.requests)}),null)}function S(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,E)),e["\u0275did"](2,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e["\u0275and"](0,null,null,0))],(function(l,n){l(n,2,0,n.component.requests.length,e["\u0275nov"](n.parent,25))}),null)}function k(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"td",[["colspan","10"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"app-component-loader",[],null,null,null,a.b,a.a)),e["\u0275did"](3,114688,null,0,d.a,[],null,null)],(function(l,n){l(n,3,0)}),null)}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"td",[["colspan","10"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"div",[["class","alert alert-primary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["No Requests available"]))],null,null)}function N(l){return e["\u0275vid"](0,[e["\u0275pid"](0,r.DatePipe,[e.LOCALE_ID]),(l()(),e["\u0275eld"](1,0,null,null,22,"app-card",[],null,null,null,o.b,o.a)),e["\u0275did"](2,114688,null,0,s.a,[],{title:[0,"title"],blockClass:[1,"blockClass"],classHeader:[2,"classHeader"]},null),(l()(),e["\u0275eld"](3,0,null,1,20,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,19,"table",[["class","table table-inverse"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,15,"thead",[],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,14,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["#"])),(l()(),e["\u0275eld"](9,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["User"])),(l()(),e["\u0275eld"](11,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Document Type"])),(l()(),e["\u0275eld"](13,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Document File"])),(l()(),e["\u0275eld"](15,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Status"])),(l()(),e["\u0275eld"](17,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Requested At"])),(l()(),e["\u0275eld"](19,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Actions"])),(l()(),e["\u0275eld"](21,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,S)),e["\u0275did"](23,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e["\u0275and"](0,[["loader",2]],null,0,null,k)),(l()(),e["\u0275and"](0,[["noRequest",2]],null,0,null,w))],(function(l,n){var u=n.component;l(n,2,0,"Verification Requests","table-border-style",!0),l(n,23,0,!u.isLoading,e["\u0275nov"](n,24))}),null)}var T=u("/Dc2"),$=u("1oxc"),D=u("scj3");class L{constructor(l,n){this.apiService=l,this.modalService=n,this.dashboardposts=[],this.page=1,this.pageSize=10,this.searchKey="",this.selectedAuthor="",this.ImageEndpoint=m.a.ImageEndpoint,this.getPosts=()=>{this.getPostSubscription&&this.getPostSubscription.unsubscribe(),this.isLoading=!0,this.isErrored=!1,this.getPostSubscription=this.apiService.call("/post","/admin","GET",!0,{currentPage:this.page,limit:this.pageSize,searchKey:this.searchKey,userIds:this.selectedAuthor}).subscribe(l=>{this.isLoading=!1,this.dashboardposts=l.data},l=>{this.isLoading=!1,this.isErrored=!0})}}ngOnInit(){this.isLoading=!0,this.isErrored=!1,this.getPosts()}getPostLink(l){return`${m.a.DomainEndPoint}/blog/${l.postType.slug}/${l.categories.map(({slug:l})=>l).join("-")}/${l.slug}?is_preview=true`}changeStatusModal(l,n){let u=this.modalService.open(D.a,{windowClass:"modal-holder",centered:!0});u.componentInstance.postId=n,u.componentInstance.status=this.dashboardposts[l].status,u.result.then(n=>{n&&(this.dashboardposts[l].status=n.status)}).catch(l=>{})}ngOnDestroy(){this.getPostSubscription&&this.getPostSubscription.unsubscribe()}}var V=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function A(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"span",[["class","pcoded-badge label label-default category-name"]],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.name)}))}function O(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,29,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"th",[["scope","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,["",""])),(l()(),e["\u0275eld"](3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,0,"img",[["class","img-fluid"],["style","height: 60px"]],[[8,"src",4]],null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](6,null,["",""])),(l()(),e["\u0275eld"](7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](8,null,["",""])),(l()(),e["\u0275eld"](9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](10,null,["",""])),(l()(),e["\u0275eld"](11,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,A)),e["\u0275did"](13,278528,null,0,r.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](14,0,null,null,3,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,16).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e["\u0275did"](16,671744,null,0,p.r,[p.o,p.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](17,null,[" "," "," "])),(l()(),e["\u0275eld"](18,0,null,null,5,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,4,"span",[["class","pcoded-badge label cursor-pointer"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.changeStatusModal(l.context.index,l.context.$implicit._id)&&e),e}),null,null)),e["\u0275prd"](512,null,r["\u0275NgClassImpl"],r["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](21,278528,null,0,r.NgClass,[r["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](22,{"label-warning":0,"label-inverse":1,"label-success":2,"label-danger":3}),(l()(),e["\u0275ted"](23,null,["",""])),(l()(),e["\u0275eld"](24,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](25,null,["",""])),e["\u0275ppd"](26,2),(l()(),e["\u0275eld"](27,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](28,0,null,null,1,"a",[["class","text-center label label-default"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,0,"i",[["class","fa fa-eye"]],null,null,null,null,null))],(function(l,n){l(n,13,0,n.context.$implicit.categories),l(n,16,0,"/users/"+n.context.$implicit.author._id);var u=l(n,22,0,"pending"===n.context.$implicit.status,"re-submitted"===n.context.$implicit.status,"active"===n.context.$implicit.status,"rejected"===n.context.$implicit.status);l(n,21,0,"pcoded-badge label cursor-pointer",u)}),(function(l,n){var u=n.component;l(n,2,0,n.context.index+1),l(n,4,0,u.ImageEndpoint+n.context.$implicit.featuredImage),l(n,6,0,n.context.$implicit.title);var t=n.context.$implicit.shortDescription.truncate(40);l(n,8,0,t),l(n,10,0,n.context.$implicit.postType.name),l(n,15,0,e["\u0275nov"](n,16).target,e["\u0275nov"](n,16).href),l(n,17,0,n.context.$implicit.author.firstName,n.context.$implicit.author.lastName),l(n,23,0,n.context.$implicit.status);var i=e["\u0275unv"](n,25,0,l(n,26,0,e["\u0275nov"](n.parent.parent.parent.parent,0),n.context.$implicit.createdAt,"dd-MM-yyyy hh:mmaa"));l(n,25,0,i),l(n,28,0,u.getPostLink(n.context.$implicit))}))}function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,O)),e["\u0275did"](2,278528,null,0,r.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275and"](0,null,null,0))],(function(l,n){l(n,2,0,n.component.dashboardposts)}),null)}function M(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,P)),e["\u0275did"](2,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e["\u0275and"](0,null,null,0))],(function(l,n){l(n,2,0,n.component.dashboardposts.length,e["\u0275nov"](n.parent.parent,32))}),null)}function F(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,M)),e["\u0275did"](2,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e["\u0275and"](0,null,null,0))],(function(l,n){l(n,2,0,!n.component.isErrored,e["\u0275nov"](n.parent,33))}),null)}function q(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"td",[["colspan","10"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"app-component-loader",[],null,null,null,a.b,a.a)),e["\u0275did"](3,114688,null,0,d.a,[],null,null)],(function(l,n){l(n,3,0)}),null)}function _(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"td",[["colspan","10"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"div",[["class","alert alert-primary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["No post available"]))],null,null)}function K(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,4,"td",[["class","text-center"],["colspan","10"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["There is an error occured fetching posts."])),(l()(),e["\u0275eld"](4,0,null,null,1,"button",[["class","btn btn-outline-primary btn-sm"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.getPosts()&&e),e}),null,null)),(l()(),e["\u0275ted"](-1,null,[" Retry "]))],null,null)}function j(l){return e["\u0275vid"](0,[e["\u0275pid"](0,r.DatePipe,[e.LOCALE_ID]),(l()(),e["\u0275eld"](1,0,null,null,29,"app-card",[],null,null,null,o.b,o.a)),e["\u0275did"](2,114688,null,0,s.a,[],{title:[0,"title"],blockClass:[1,"blockClass"],classHeader:[2,"classHeader"]},null),(l()(),e["\u0275eld"](3,0,null,1,0,"div",[["class","row search-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,1,26,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,25,"table",[["class","table table-inverse"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,21,"thead",[],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,20,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["#"])),(l()(),e["\u0275eld"](10,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Featured Image"])),(l()(),e["\u0275eld"](12,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Title"])),(l()(),e["\u0275eld"](14,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Short Description"])),(l()(),e["\u0275eld"](16,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Type"])),(l()(),e["\u0275eld"](18,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Category"])),(l()(),e["\u0275eld"](20,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Author"])),(l()(),e["\u0275eld"](22,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Status"])),(l()(),e["\u0275eld"](24,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Created At"])),(l()(),e["\u0275eld"](26,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Actions"])),(l()(),e["\u0275eld"](28,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,F)),e["\u0275did"](30,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e["\u0275and"](0,[["loader",2]],null,0,null,q)),(l()(),e["\u0275and"](0,[["noPost",2]],null,0,null,_)),(l()(),e["\u0275and"](0,[["errorMessage",2]],null,0,null,K))],(function(l,n){var u=n.component;l(n,2,0,"All Posts","table-border-style",!0),l(n,30,0,!u.isLoading,e["\u0275nov"](n,31))}),null)}var U=u("SxV6");class z{constructor(l,n){this.apiService=l,this.notificationService=n,this.dashboardInfo=null,this.isLoading=!0}ngOnInit(){this.getDashboardData()}getDashboardData(){this.isLoading=!0,this.apiService.call("/dashboard","/admin/stats","GET",!0).pipe(Object(U.a)()).subscribe(l=>{this.dashboardInfo=l,this.isLoading=!1},l=>{this.notificationService.showError("Error!",this.apiService.getErrorMessage(l))})}}var B=e["\u0275crt"]({encapsulation:2,styles:[[".gauge-container,.line-container{height:300px;width:100%;display:block}.backtotop{float:right;margin-right:0!important}"]],data:{}});function H(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" "," "]))],null,(function(l,n){var u=n.component;l(n,1,0,null==u.dashboardInfo?null:u.dashboardInfo.userCount)}))}function J(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" "," "]))],null,(function(l,n){var u=n.component;l(n,1,0,null==u.dashboardInfo?null:u.dashboardInfo.postCount)}))}function G(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" "," "]))],null,(function(l,n){var u=n.component;l(n,1,0,null==u.dashboardInfo?null:u.dashboardInfo.totalEarning)}))}function Q(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-component-loader",[["size","sm"]],null,null,null,a.b,a.a)),e["\u0275did"](1,114688,null,0,d.a,[],{size:[0,"size"]},null)],(function(l,n){l(n,1,0,"sm")}),null)}function X(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,45,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,11,"div",[["class","col-md-12 col-xl-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,10,"app-card",[],null,null,null,o.b,o.a)),e["\u0275did"](3,114688,null,0,s.a,[],{blockClass:[0,"blockClass"],cardClass:[1,"cardClass"]},null),(l()(),e["\u0275eld"](4,0,null,1,8,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,1,"div",[["class","col-6 counter-card-icon"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,0,"i",[["class","icofont icofont-chart-histogram"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,5,"div",[["class","col-6 text-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,4,"div",[["class","counter-card-text"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,H)),e["\u0275did"](10,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e["\u0275eld"](11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["ACTIVE USER"])),(l()(),e["\u0275eld"](13,0,null,null,11,"div",[["class","col-md-6 col-xl-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](14,0,null,null,10,"app-card",[],null,null,null,o.b,o.a)),e["\u0275did"](15,114688,null,0,s.a,[],{blockClass:[0,"blockClass"],cardClass:[1,"cardClass"]},null),(l()(),e["\u0275eld"](16,0,null,1,8,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,1,"div",[["class","col-6 counter-card-icon"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,0,"i",[["class","icofont icofont-chart-line-alt"]],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,5,"div",[["class","col-6 text-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,null,4,"div",[["class","counter-card-text"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,J)),e["\u0275did"](22,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e["\u0275eld"](23,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Total Post"])),(l()(),e["\u0275eld"](25,0,null,null,11,"div",[["class","col-md-6 col-xl-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,10,"app-card",[],null,null,null,o.b,o.a)),e["\u0275did"](27,114688,null,0,s.a,[],{blockClass:[0,"blockClass"],cardClass:[1,"cardClass"]},null),(l()(),e["\u0275eld"](28,0,null,1,8,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,1,"div",[["class","col-6 counter-card-icon"]],null,null,null,null,null)),(l()(),e["\u0275eld"](30,0,null,null,0,"i",[["class","icofont icofont-chart-line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](31,0,null,null,5,"div",[["class","col-6 text-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](32,0,null,null,4,"div",[["class","counter-card-text"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,G)),e["\u0275did"](34,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e["\u0275eld"](35,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Total Earning"])),(l()(),e["\u0275eld"](37,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](38,0,null,null,1,"app-verification-requests",[],null,null,null,N,I)),e["\u0275did"](39,245760,null,0,h,[b.a,v.a],null,null),(l()(),e["\u0275eld"](40,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](41,0,null,null,1,"app-list",[],null,null,null,T.c,T.b)),e["\u0275did"](42,245760,null,0,$.a,[b.a,v.a,c.B,c.w],{showFilter:[0,"showFilter"],showPagination:[1,"showPagination"],title:[2,"title"]},null),(l()(),e["\u0275eld"](43,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](44,0,null,null,1,"app-post-list",[],null,null,null,j,V)),e["\u0275did"](45,245760,null,0,L,[b.a,c.B],null,null),(l()(),e["\u0275and"](0,[["loader",2]],null,0,null,Q))],(function(l,n){var u=n.component;l(n,3,0,"card-body-big","counter-card-1"),l(n,10,0,!u.isLoading,e["\u0275nov"](n,46)),l(n,15,0,"card-body-big","counter-card-2"),l(n,22,0,!u.isLoading,e["\u0275nov"](n,46)),l(n,27,0,"card-body-big","counter-card-3"),l(n,34,0,!u.isLoading,e["\u0275nov"](n,46)),l(n,39,0),l(n,42,0,!1,!1,"USERS"),l(n,45,0)}),null)}function Y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-dashboard",[],null,null,null,X,B)),e["\u0275did"](1,114688,null,0,z,[b.a,v.a],null,null)],(function(l,n){l(n,1,0)}),null)}var Z=e["\u0275ccf"]("app-dashboard",z,Y,{},{},[]),W=u("9AJC"),ll=u("hc6C"),nl=u("W86+"),ul=u("w8y1"),el=u("s7LF"),tl=u("g3ai"),il=u("U2d/"),al=u("IheW"),dl=u("nluj"),ol=u("LSHg"),sl=u("ADQ8"),rl=u("LfpI");const cl={breadcrumb:"Dashboard"};class pl{}var ml=u("zs7K"),fl=u("IcD6"),gl=u("22Na"),hl=u("bse0"),bl=u("eACs"),vl=u("PCNd"),Il=u("Md8o"),Cl=u("3npE");u.d(n,"DashboardModuleNgFactory",(function(){return Rl}));var Rl=e["\u0275cmf"](t,[],(function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,Z,W.a,W.b,W.h,W.i,W.e,W.f,W.g,ll.a,nl.a,ul.a,T.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[e.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,el.s,el.s,[]),e["\u0275mpd"](4608,el.d,el.d,[]),e["\u0275mpd"](4608,c.B,c.B,[e.ComponentFactoryResolver,e.Injector,c.ub,c.C]),e["\u0275mpd"](4608,tl.NotificationsService,tl.NotificationsService,[]),e["\u0275mpd"](4608,il.AnimationService,il.AnimationService,[]),e["\u0275mpd"](4608,al.i,al.o,[r.DOCUMENT,e.PLATFORM_ID,al.m]),e["\u0275mpd"](4608,al.p,al.p,[al.i,al.n]),e["\u0275mpd"](5120,al.a,(function(l){return[l]}),[al.p]),e["\u0275mpd"](4608,al.l,al.l,[]),e["\u0275mpd"](6144,al.j,null,[al.l]),e["\u0275mpd"](4608,al.h,al.h,[al.j]),e["\u0275mpd"](6144,al.b,null,[al.h]),e["\u0275mpd"](4608,al.f,al.k,[al.b,e.Injector]),e["\u0275mpd"](4608,al.c,al.c,[al.f]),e["\u0275mpd"](4608,dl.b,dl.b,[r.DOCUMENT,e.PLATFORM_ID]),e["\u0275mpd"](4608,ol.e,ol.e,[]),e["\u0275mpd"](4608,ol.f,ol.f,[]),e["\u0275mpd"](4608,ol.d,ol.c,[[2,ol.b],ol.e,ol.f,e.LOCALE_ID]),e["\u0275mpd"](4608,sl.a,sl.a,[]),e["\u0275mpd"](4608,rl.a,rl.a,[]),e["\u0275mpd"](4608,b.a,b.a,[al.c]),e["\u0275mpd"](4608,v.a,v.a,[]),e["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),e["\u0275mpd"](1073742336,p.s,p.s,[[2,p.x],[2,p.o]]),e["\u0275mpd"](1073742336,pl,pl,[]),e["\u0275mpd"](1073742336,el.r,el.r,[]),e["\u0275mpd"](1073742336,el.e,el.e,[]),e["\u0275mpd"](1073742336,el.o,el.o,[]),e["\u0275mpd"](1073742336,c.c,c.c,[]),e["\u0275mpd"](1073742336,c.g,c.g,[]),e["\u0275mpd"](1073742336,c.h,c.h,[]),e["\u0275mpd"](1073742336,c.l,c.l,[]),e["\u0275mpd"](1073742336,c.m,c.m,[]),e["\u0275mpd"](1073742336,c.s,c.s,[]),e["\u0275mpd"](1073742336,c.y,c.y,[]),e["\u0275mpd"](1073742336,c.D,c.D,[]),e["\u0275mpd"](1073742336,c.F,c.F,[]),e["\u0275mpd"](1073742336,c.K,c.K,[]),e["\u0275mpd"](1073742336,c.P,c.P,[]),e["\u0275mpd"](1073742336,c.S,c.S,[]),e["\u0275mpd"](1073742336,c.V,c.V,[]),e["\u0275mpd"](1073742336,c.Y,c.Y,[]),e["\u0275mpd"](1073742336,c.db,c.db,[]),e["\u0275mpd"](1073742336,c.gb,c.gb,[]),e["\u0275mpd"](1073742336,c.jb,c.jb,[]),e["\u0275mpd"](1073742336,c.kb,c.kb,[]),e["\u0275mpd"](1073742336,c.E,c.E,[]),e["\u0275mpd"](1073742336,ml.SimpleNotificationsModule,ml.SimpleNotificationsModule,[]),e["\u0275mpd"](1073742336,fl.AnimatorModule,fl.AnimatorModule,[]),e["\u0275mpd"](1073742336,dl.a,dl.a,[]),e["\u0275mpd"](1073742336,ol.a,ol.a,[]),e["\u0275mpd"](1073742336,gl.ClickOutsideModule,gl.ClickOutsideModule,[]),e["\u0275mpd"](1073742336,hl.d,hl.d,[]),e["\u0275mpd"](1073742336,bl.b,bl.b,[]),e["\u0275mpd"](1073742336,al.e,al.e,[]),e["\u0275mpd"](1073742336,al.d,al.d,[]),e["\u0275mpd"](1073742336,vl.a,vl.a,[]),e["\u0275mpd"](1073742336,Il.a,Il.a,[]),e["\u0275mpd"](1073742336,Cl.a,Cl.a,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,p.m,(function(){return[[{path:"",component:z,data:cl}],[{path:"",component:$.a,data:Il.b},{path:":userId",loadChildren:Il.c}]]}),[]),e["\u0275mpd"](256,al.m,"XSRF-TOKEN",[]),e["\u0275mpd"](256,al.n,"X-XSRF-TOKEN",[]),e["\u0275mpd"](256,ol.b,{apiKey:"AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk"},[]),e["\u0275mpd"](256,hl.a,vl.b,[])])}))}}]);