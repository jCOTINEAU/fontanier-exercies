(this.webpackJsonpjftraining=this.webpackJsonpjftraining||[]).push([[0],{54:function(e,t,n){e.exports=n(67)},59:function(e,t,n){},60:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),l=(n(59),n(11)),i=(n(60),r.a.createContext({kanji:!1,toggleKanji:function(){}})),u=r.a.createContext({color:!1,toggleColor:function(){}}),s=r.a.createContext({Module:!1,toggleModule:function(){}}),m=r.a.createContext({version:!1,toggleVersion:function(){}}),g=n(38),b=n(39),v=n(47),d=n(46),f=n(98),E=n(95);function h(e){var t,n,o,c,s,m=Object(a.useContext)(u).color,g=Object(a.useContext)(i).kanji,b=Object(a.useState)(!1),v=Object(l.a)(b,2),d=v[0],h=v[1],j=e.wb.origin;g?j=d?null!==(n=null!==(o=e.wb.onHoverAlternate)&&void 0!==o?o:e.wb.onHover)&&void 0!==n?n:e.wb.origin:null!==(c=e.wb.alternate)&&void 0!==c?c:e.wb.origin:d&&(j=null!==(s=e.wb.onHover)&&void 0!==s?s:e.wb.origin);return r.a.createElement(E.a,{item:!0},r.a.createElement(f.a,{className:"wordblock",style:{backgroundColor:m&&null!==(t=e.wb.color)&&void 0!==t?t:"lightgray"},onMouseLeave:function(){h(!d)},onMouseEnter:function(){h(!d)},onClick:function(){navigator.clipboard.writeText(j)}},j))}var j=function(e){Object(v.a)(n,e);var t=Object(d.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.version?"version":"theme",t=this.props.module+e+100*this.props.question.question,n=this.props.question.wbs.map((function(e,n){return r.a.createElement(h,{key:t+n,wb:e})}));return r.a.createElement(E.a,{container:!0,justify:"center",spacing:"2",allignItems:"center"},r.a.createElement(E.a,{container:!0,justify:"center"},r.a.createElement(E.a,{item:!0},r.a.createElement("div",null,"question n\xb0:",this.props.question.question))),n)}}]),n}(r.a.Component),p=n(101);function C(e){var t=Object(a.useContext)(i).kanji,n=Object(a.useState)(""),o=Object(l.a)(n,2),c=o[0],u=o[1],s=c===e.rb.alternate,m=c===e.rb.origin,g="white";return g=t&&s||!t&&m||m&&!e.rb.alternate?"lightgreen":t&&m||!t&&s?"orange":"white",r.a.createElement(E.a,{item:!0,xs:"3",md:"1"},r.a.createElement(p.a,{style:{backgroundColor:g},onChange:function(e){u(e.target.value.toLocaleLowerCase())}}))}function k(e){var t=e.version?"version":"theme",n=e.module+t+100*e.response.response,a=e.response.rbs.map((function(e,t){return r.a.createElement(C,{key:n+t,rb:e})}));return r.a.createElement(E.a,{container:!0,justify:"center",spacing:"2",allignItems:"center"},a)}n(64);var O=n(104),w=n(102);var y=function(){var e=r.a.useContext(u),t=e.color,n=e.toggleColor;return r.a.createElement(O.a,{labelPlacement:"start",control:r.a.createElement(w.a,{size:"small",checked:t,onChange:function(e){n(e.target.checked)}}),label:"coloration :".concat(t?"on":"off")})};var x=function(){var e=r.a.useContext(i),t=e.kanji,n=e.toggleKanji;return r.a.createElement(O.a,{control:r.a.createElement(w.a,{size:"small",checked:t,onChange:function(e){n(e.target.checked)}}),label:t?"\u6f22\u5b57":"\u304b\u3093\u3058",labelPlacement:"start"})};var S=function(){var e=r.a.useContext(m),t=e.version,n=e.toggleVersion;return r.a.createElement(O.a,{labelPlacement:"start",control:r.a.createElement(w.a,{size:"small",checked:t,onChange:function(e){n(e.target.checked)}}),label:t?"version":"theme"})},q=n(99),M=n(100),P=n(103),H=n(45),I=n.n(H),z=["no","de"];function B(){var e=r.a.useContext(s),t=e.module,n=e.toggleModule,a=r.a.useState(null),o=Object(l.a)(a,2),c=o[0],i=o[1],u=Boolean(c),m=function(e,t){i(null),"backdropClick"!==t&&n(t)};return r.a.createElement("div",null,r.a.createElement(q.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)}},r.a.createElement(I.a,null)),r.a.createElement(M.a,{id:"long-menu",anchorEl:c,keepMounted:!0,open:u,onClose:m,PaperProps:{style:{maxHeight:216,width:"20ch"}}},z.map((function(e){return r.a.createElement(P.a,{key:e,selected:e===t,onClick:function(t){return m(0,e)}},e)}))))}function K(){return r.a.createElement(E.a,{container:!0,justify:"center"},r.a.createElement(E.a,{item:!0},r.a.createElement(B,null," ")),r.a.createElement(E.a,{item:!0},r.a.createElement(S,null," ")),r.a.createElement(E.a,{item:!0},r.a.createElement(y,null," ")),r.a.createElement(E.a,{item:!0},r.a.createElement(x,null," ")))}function L(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),g=Object(l.a)(c,2),b=g[0],v=g[1],d=r.a.useState([]),h=Object(l.a)(d,2),p=h[0],C=h[1],O=r.a.useState([]),w=Object(l.a)(O,2),y=w[0],x=w[1],S=r.a.useState(0),q=Object(l.a)(S,2),M=q[0],P=q[1],H=Object(a.useState)(!1),I=Object(l.a)(H,2),z={color:I[0],toggleColor:I[1]},B=Object(a.useState)(!1),L=Object(l.a)(B,2),T={kanji:L[0],toggleKanji:L[1]},V=Object(a.useState)(!1),A=Object(l.a)(V,2),J=A[0],N=A[1],W={version:J,toggleVersion:N},U=Object(a.useState)("no"),$=Object(l.a)(U,2),D=$[0],F=$[1],G={module:D,toggleModule:F};return Object(a.useEffect)((function(){fetch("https://raw.githubusercontent.com/jCOTINEAU/fontanier-exercies/data/data/"+(J?"version":"theme")+"/"+D+"/data.json").then((function(e){return e.json()})).then((function(e){C(e.questions.questions),x(e.responses.responses),v(!0)}),(function(e){o(e.message),v(!0)}))}),[n,D,J]),M>=p.length&&(M=0),n?r.a.createElement("div",null,"Erreur : ",n):b?r.a.createElement("div",null,r.a.createElement(i.Provider,{value:T},r.a.createElement(u.Provider,{value:z},r.a.createElement(m.Provider,{value:W},r.a.createElement(s.Provider,{value:G},r.a.createElement(K,null),r.a.createElement(j,{version:J,module:D,question:p[M]}),r.a.createElement(k,{version:J,module:D,response:y[M]}),r.a.createElement(E.a,{container:!0,justify:"center"},r.a.createElement(E.a,{item:!0},r.a.createElement(f.a,{color:"secondary",onClick:function(){P(Math.abs(--M%p.length))}},"pr\xe9c\xe9dent")),r.a.createElement(E.a,{item:!0},r.a.createElement(f.a,{color:"primary",onClick:function(){P(++M%p.length)}},"suivant")))))))):r.a.createElement("div",null,"Chargement...")}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.1560c948.chunk.js.map