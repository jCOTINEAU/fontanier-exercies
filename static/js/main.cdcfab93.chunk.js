(this.webpackJsonpjftraining=this.webpackJsonpjftraining||[]).push([[0],{30:function(e){e.exports=JSON.parse('{"questions":[{"module":"no","id":1,"wbs":[{"value":"c\'est"},{"value":"le"},{"value":"chat","color":"green","trad":{"kana":"\u306d\u3053","kanji":"\u732b"}},{"value":"de"},{"value":"link","color":"red","trad":{"kana":"\u308a\u30f3\u30af"}}]},{"module":"no","id":2,"wbs":[{"value":"c\'est"},{"value":"le"},{"value":"chant","trad":{"kana":"\u3046\u305f","kanji":"\u6b4c"}},{"value":"du"},{"value":"temps","trad":{"kana":"\u3068\u304d","kanji":"\u6642"}}]},{"module":"no","id":"\uff13","wbs":[{"value":"ce"},{"value":"sont"},{"value":"les"},{"value":"momies","trad":{"kana":"\u30df\u30a4\u30e9"}},{"value":"du","trad":{"kana":"\u3068\u304d","kanji":"\u6642"}},{"value":"temple","trad":{"kana":"\u3068\u304d","kanji":"\u6642"}}]}]}')},31:function(e){e.exports=JSON.parse('{"responses":[{"id":1,"module":"no","rbs":[{"kana":"\u30ea\u30f3\u30af"},{"kana":"\u306e"},{"kanji":"\u732b","kana":"\u306d\u3053"},{"kana":"\u3060"}]},{"id":2,"module":"no","rbs":[{"kana":"\u3068\u304d","kanji":"\u6642"},{"kana":"\u306e"},{"kana":"\u3046\u305f","kanji":"\u6b4c"},{"kana":"\u3060"}]},{"id":3,"module":"no","rbs":[{"kana":"\u30b7\u30f3\u30c7\u30f3","kanji":"\u795e\u6bbf"},{"kana":"\u306e"},{"kana":"\u30df\u30a4\u30e9"},{"kana":"\u3060"}]}]}')},40:function(e,a,t){e.exports=t(52)},45:function(e,a,t){},46:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(11),c=t.n(o),l=(t(45),t(9)),i=(t(46),r.a.createContext({kanji:!1,toggleKanji:function(){}})),u=r.a.createContext({color:!1,toggleColor:function(){}}),s=t(23),m=t(24),k=t(33),d=t(32),b=t(72),j=t(71);function v(e){var a,t=Object(n.useContext)(u).color,o=Object(n.useContext)(i).kanji,c=Object(n.useState)(!1),s=Object(l.a)(c,2),m=s[0],k=s[1],d=e.wb.value;return m&&e.wb.trad?o&&e.wb.trad.kanji?d=e.wb.trad.kanji:e.wb.trad&&(d=e.wb.trad.kana):d=e.wb.value,r.a.createElement(j.a,{item:!0},r.a.createElement(b.a,{className:"wordblock",style:{backgroundColor:t&&null!==(a=e.wb.color)&&void 0!==a?a:"lightgray"},onMouseLeave:function(){k(!m)},onMouseEnter:function(){k(!m)}},d))}var g=function(e){Object(k.a)(t,e);var a=Object(d.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props.question.wbs.map((function(e){return r.a.createElement(v,{wb:e})}));return r.a.createElement(j.a,{container:!0,justify:"center",spacing:"2",allignItems:"center"},e)}}]),t}(r.a.Component),f=t(73);function E(e){var a=Object(n.useContext)(i).kanji,t=Object(n.useState)(""),o=Object(l.a)(t,2),c=o[0],u=o[1],s=c===e.rb.kanji,m=c===e.rb.kana,k="white";return k=a&&s||!a&&m||m&&!e.rb.kanji?"lightgreen":a&&m||!a&&s?"orange":"white",r.a.createElement(j.a,{item:!0,xs:"1"},r.a.createElement(f.a,{style:{backgroundColor:k},onChange:function(e){u(e.target.value)}}))}function h(e){var a=e.response.rbs.map((function(e){return r.a.createElement(E,{key:Math.random(),rb:e})}));return r.a.createElement(j.a,{container:!0,justify:"center",spacing:"2",allignItems:"center"},a)}var p=t(75),w=t(74);var O=function(){var e=r.a.useContext(u),a=e.color,t=e.toggleColor;return r.a.createElement(p.a,{labelPlacement:"start",control:r.a.createElement(w.a,{size:"small",checked:a,onChange:function(e){t(e.target.checked)}}),label:"coloration syntaxique :".concat(a?"on":"off")})};var C=function(){var e=r.a.useContext(i),a=e.kanji,t=e.toggleKanji;return r.a.createElement(p.a,{control:r.a.createElement(w.a,{size:"small",checked:a,onChange:function(e){t(e.target.checked)}}),label:a?"\u6f22\u5b57":"\u304b\u3093\u3058",labelPlacement:"start"})},y=(t(51),t(30)),x=t(31);function S(){var e=r.a.useState(y.questions),a=Object(l.a)(e,1)[0],t=r.a.useState(x.responses),o=Object(l.a)(t,1)[0],c=r.a.useState(0),s=Object(l.a)(c,2),m=s[0],k=s[1],d=Object(n.useState)(!1),v=Object(l.a)(d,2),f={color:v[0],toggleColor:v[1]},E=Object(n.useState)(!1),p=Object(l.a)(E,2),w={kanji:p[0],toggleKanji:p[1]};return r.a.createElement("div",null,r.a.createElement(i.Provider,{value:w},r.a.createElement(u.Provider,{value:f},r.a.createElement(j.a,{container:!0,jystify:"center"}),r.a.createElement(j.a,{container:!0,justify:"center"},r.a.createElement(j.a,{item:!0},r.a.createElement(O,null," ")),r.a.createElement(j.a,{item:!0},r.a.createElement(C,null," "))),r.a.createElement(g,{question:a[m]}),r.a.createElement(h,{response:o[m]}),r.a.createElement(j.a,{container:!0,justify:"center"},r.a.createElement(j.a,{item:!0},r.a.createElement(b.a,{onClick:function(){k(Math.abs(--m%a.length))}},"pr\xe9cedent")),r.a.createElement(j.a,{item:!0},r.a.createElement(b.a,{onClick:function(){k(++m%a.length)}},"suivant"))))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.cdcfab93.chunk.js.map