(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[21],{681:function(e,a,t){"use strict";t.r(a);var n=t(708),l=t(0),r=t.n(l),c=t(332),i=t(891),m=t(820),o=t(930),u=t(926),s=t(927),E=t(928),d=t(827),h=t(929),p=t(699),g=t(804),b=t(641),w=t(109),f=t(1),y=t(67),v=t(19),P=t(825),O=function(){return r.a.createElement(u.a,{"aria-label":"simple table"},r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(d.a,null,"#"),r.a.createElement(d.a,null,"Payout Id"),r.a.createElement(d.a,null,"Amount\xa0(\u20b9)"),r.a.createElement(d.a,null,"Status"))),r.a.createElement(h.a,null,[1,2,3,4].map((function(e){return r.a.createElement(E.a,{key:e},r.a.createElement(d.a,{width:100},r.a.createElement(P.a,{animation:"wave",height:20,width:"40%"})),r.a.createElement(d.a,{align:"right",width:500,component:"th"},r.a.createElement(P.a,{animation:"wave",height:20,width:"1000"})),r.a.createElement(d.a,{width:100},r.a.createElement(P.a,{animation:"wave",height:20,width:"40%"})),r.a.createElement(d.a,{width:100},r.a.createElement(P.a,{animation:"wave",height:20,width:"80%"})))}))))},j=t(882),R=t.n(j),S=Object(c.a)({table:{minWidth:650}});a.default=function(){var e=Object(l.useState)(y.c),a=Object(n.a)(e,2),t=a[0],c=a[1],P=Object(l.useState)(0),j=Object(n.a)(P,2),N=j[0],k=j[1],x=Object(w.c)(),I=Object(w.d)((function(e){return{payoutReducer:e.payoutReducer}})).payoutReducer;Object(l.useEffect)((function(){x(Object(f.eb)({currentPage:N+1,limit:t}))}),[t,N]);var z=I||{},A=z.isLoading,C=z.data,J=z.totalRecords,F=r.a.createElement(i.a,{labelRowsPerPage:"Records per page",component:"div",count:J,page:N,onChangePage:function(e,a){return k(a)},rowsPerPage:t,rowsPerPageOptions:y.d,onChangeRowsPerPage:function(e){k(0),c(e.target.value)}}),L=S(),T=N*t+1;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{container:!0},r.a.createElement(o.a,{component:b.a},A?r.a.createElement(O,null):r.a.createElement(u.a,{className:L.table,"aria-label":"simple table"},r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(d.a,null,"#"),r.a.createElement(d.a,null,"Payout Id"),r.a.createElement(d.a,{align:"center"},"Amount\xa0(\u20b9)"),r.a.createElement(d.a,{align:"right"},"Status"))),r.a.createElement(h.a,null,C&&C.length?C.map((function(e){return r.a.createElement(E.a,{key:e._id},r.a.createElement(d.a,null,T++),r.a.createElement(d.a,{component:"th",scope:"row"},e.transactionId),r.a.createElement(d.a,{align:"center"},e.amount?Object(v.c)(e.amount):0),r.a.createElement(d.a,{align:"right"},r.a.createElement(p.a,{"aria-label":"share",className:"pull-right"},r.a.createElement(g.a,{size:"small",label:e.payoutStatus,color:"paid"===e.payoutStatus?"primary":"secondary",style:{textTransform:"capitalize"}}))))})):r.a.createElement(E.a,null,r.a.createElement(d.a,{colSpan:4,align:"center"},r.a.createElement("div",{className:"no-data"},r.a.createElement("div",{className:"no-data-icon"},r.a.createElement("img",{src:R.a,alt:"transaction"})),r.a.createElement("p",{className:"no-data-text"},"No payout history to show.")))))))),F)}},882:function(e,a,t){e.exports=t.p+"static/media/transaction.b0f07da4.svg"}}]);
//# sourceMappingURL=21.d77de92f.chunk.js.map