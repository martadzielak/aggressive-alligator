(this["webpackJsonpaggresive-alligator"]=this["webpackJsonpaggresive-alligator"]||[]).push([[0],{25:function(e,n,t){},51:function(e,n,t){"use strict";t.r(n);var c,r,a,i,o,s,l,d,u,p,j,b,f,x,h,m=t(0),O=t.n(m),g=t(14),v=t.n(g),y=(t(25),t(6)),w=t.n(y),k=t(8),D=t(12),S=t(20),M=t(15),T=["https://medium.com/feed/@kentcdodds","https://medium.com/feed/free-code-camp","https://medium.com/hackernoon","https://sekurak.pl/feed/","https://css-tricks.com/feed/","https://stackabuse.com/rss","https://alistapart.com/main/feed/","https://www.akendi.com/blog/feed/"],A=function(e){if(e)return new Date(e).getTime()},H=function(e){var n=new Date(e),t=n.getHours(),c=n.getMinutes(),r=t>=12?"pm":"am",a=(t=(t%=12)||12)+":"+(c=c<10?parseInt(c.toString().padStart(2,"0")):c)+r;return"".concat(n.getDate()," ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()]," ").concat(n.getFullYear()," ").concat(a)},q=function(){var e=Object(k.a)(w.a.mark((function e(){var n,t,c,r,a,i,o,s,l,d,u,p;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],t=Object(M.a)(T),e.prev=2,t.s();case 4:if((c=t.n()).done){e.next=19;break}return r=c.value,e.next=8,fetch("https://api.allorigins.win/get?url=".concat(r));case 8:return a=e.sent,e.next=11,a.json();case 11:i=e.sent,o=i.contents,s=(new window.DOMParser).parseFromString(o,"text/xml"),l=s.querySelectorAll("item"),d=Object(S.a)(l).map((function(e){var n,t,c,r,a;return{link:null===(n=e.querySelector("link"))||void 0===n?void 0:n.innerHTML,title:null===(t=e.querySelector("title"))||void 0===t?void 0:t.innerHTML,pubDate:A(null===(c=e.querySelector("pubDate"))||void 0===c?void 0:c.innerHTML),creator:null===(r=e.querySelector("creator"))||void 0===r?void 0:r.innerHTML,description:null===(a=e.querySelector("description"))||void 0===a?void 0:a.innerHTML}})),n.push(d);case 17:e.next=4;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(2),t.e(e.t0);case 24:return e.prev=24,t.f(),e.finish(24);case 27:return u=n.flat(),p=u.sort((function(e,n){return e.pubDate&&n.pubDate?e.pubDate>n.pubDate?-1:1:0})),e.abrupt("return",p);case 30:case"end":return e.stop()}}),e,null,[[2,21,24,27]])})));return function(){return e.apply(this,arguments)}}(),L=t(16),J=t.n(L),z=(t(47),t(3)),F=t(4),I=F.a.div(c||(c=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),W=F.a.header(r||(r=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 35px;\n"]))),E=F.a.h1(a||(a=Object(z.a)(["\n  font-size: 70px;\n  margin: 0;\n  text-align: center;\n  color: #05f4b7;\n\n  & span {\n    color: #371bb1;\n  }\n\n  @media (max-width: 1000px) {\n    font-size: 50px;\n  }\n"]))),R=F.a.p(i||(i=Object(z.a)(["\n  padding-top: 15px;\n  margin: 0;\n  text-align: center;\n  color: #eee;\n"]))),_=F.a.div(o||(o=Object(z.a)(["\n  max-width: 1000px;\n  width: 100%;\n  padding: 35px;\n\n  & hr {\n    background-color: #eee;\n  }\n\n  @media (max-width: 1000px) {\n    padding: 15px;\n  }\n"]))),B=F.a.a(s||(s=Object(z.a)(["\n  color: #05f4b7;\n  text-decoration: none;\n\n  &:visited {\n    color: #eee;\n  }\n"]))),C=F.a.footer(l||(l=Object(z.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  color: #eee;\n  padding: 35px;\n"]))),N=F.a.div(d||(d=Object(z.a)(["\n  margin: 0 auto;\n  max-width: 1000px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),P=F.a.p(u||(u=Object(z.a)(["\n  color: #eee;\n  font-size: 40px;\n  text-align: center;\n  @media (max-width: 1000px) {\n    font-size: 20px;\n  }\n"]))),Y=F.a.ul(p||(p=Object(z.a)(["\n  list-style: none;\n  padding-left: 0;\n"]))),G=F.a.li(j||(j=Object(z.a)(["\n  padding: 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  @media (max-width: 1000px) {\n    padding: 15px;\n  }\n"]))),K=F.a.span(b||(b=Object(z.a)(["\n  color: #eee;\n"]))),Q=F.a.h2(f||(f=Object(z.a)(["\n  padding: 0;\n  margin: 0;\n"]))),U=F.a.span(x||(x=Object(z.a)([""]))),V=F.a.p(h||(h=Object(z.a)(["\n  color: #eee;\n\n  & a {\n    color: #05f4b7;\n  }\n\n  & a:visited {\n    color: #eee;\n  }\n"]))),X=t(1),Z=function(){return Object(X.jsxs)(N,{children:[Object(X.jsx)(J.a,{type:"Rings",color:"#f2f2f2",height:150,width:150}),Object(X.jsx)(P,{children:"Wait for your feed to load..."})]})},$=function(e){return e.replace(/<!\[CDATA\[.*?\]\]>/g,"")},ee=function(){var e=Object(m.useState)([]),n=Object(D.a)(e,2),t=n[0],c=n[1],r=Object(m.useState)(!0),a=Object(D.a)(r,2),i=a[0],o=a[1];Object(m.useEffect)((function(){s()}),[]);var s=function(){var e=Object(k.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,q();case 3:e.t1=e.sent,(0,e.t0)(e.t1),o(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i?Object(X.jsx)(Z,{}):Object(X.jsx)(_,{children:Object(X.jsx)(Y,{children:t.slice(0,5).map((function(e,n){return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(G,{children:[Object(X.jsx)(B,{href:e.link,children:Object(X.jsxs)(Q,{children:[Object(X.jsxs)(K,{children:[e.pubDate?"\ud83d\udcc5".concat(H(e.pubDate)," "):null,e.creator?"- ".concat($(e.creator)," "):null]}),Object(X.jsx)(U,{children:e.title?"| ".concat($(e.title)):null})]})}),Object(X.jsx)(V,{dangerouslySetInnerHTML:{__html:e.description?$((t=e.description,c=1e3,t.split("").splice(0,c).join(""))):""}})]},e.title),4!==n&&Object(X.jsx)("hr",{})]});var t,c}))})})},ne=function(){return Object(X.jsx)(C,{children:Object(X.jsx)("p",{children:"If you're done... then you can go for a walk or do something different for once!"})})},te=function(){return Object(X.jsxs)(W,{children:[Object(X.jsxs)(E,{children:["Aggre",Object(X.jsx)("span",{children:"ssive Alli"}),"gator"]}),Object(X.jsx)(R,{children:"Where have you been, Web Developer? Read!"})]})};function ce(){return Object(X.jsxs)(I,{children:[Object(X.jsx)(te,{}),Object(X.jsx)(ee,{}),Object(X.jsx)(ne,{})]})}v.a.render(Object(X.jsx)(O.a.StrictMode,{children:Object(X.jsx)(ce,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.f78e8481.chunk.js.map