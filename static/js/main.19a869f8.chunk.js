(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,r){e.exports=r(23)},18:function(e,t,r){},20:function(e,t,r){},23:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o),s=r(4),a=r.n(s),i=(r(18),r(5)),c=function(e){e&&e instanceof Function&&r.e(1).then(r.bind(null,24)).then(function(t){var r=t.getCLS,o=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),o(e),n(e),s(e),a(e)})};a.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i.a,null))),c()},5:function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return p});var o=r(9),n=r(1),s=r(6),a=r(7),i=r(0),c=r.n(i),l=(r(20),r(8)),u=r.n(l),d=10,f=["monkey","owl","frog","spider","tortoise","snail"],h=6,m=1,b=2,w=3,g=function(){function t(){Object(s.a)(this,t),this.crosswordWords=f,this.inCrossword=new Array(h).fill(!0),this._Crossword=Array.from({length:d},function(){return new Array(d).fill("-")}),this.maxWordLength=this.crosswordWords.reduce(function(e,t){return Math.max(e,t.length)},0),this.maxWordLength>d&&(console.log("Invalid params"),e.exit(0))}return Object(a.a)(t,[{key:"createCrossword",value:function(){for(var t=h;0!==t;){for(var r=!1,o=0;!r;){o>200&&(console.log("Not Possible"),e.exit(0));var n=Math.floor(Math.random()*d),s=Math.floor(Math.random()*d);this.isPossibleDiagonal(n,s,t-1)?(this.wordPlace(n,s,t-1,w),r=!0,this.inCrossword[t-1]=!0):this.isPossibleVertical(n,s,t-1)?(this.wordPlace(n,s,t-1,b),r=!0,this.inCrossword[t-1]=!0):this.isPossibleHorizontal(n,s,t-1)&&(this.wordPlace(n,s,t-1,m),r=!0,this.inCrossword[t-1]=!0),o++}t--}this.printCrossword();for(var a=0;a<d;a++)for(var i=0;i<d;i++)"-"===this._Crossword[a][i]&&(this._Crossword[a][i]=this.randomChar())}},{key:"printCrossword",value:function(){for(var e=0;e<d;e++)console.log(this._Crossword[e].join("  ")),console.log("\n")}},{key:"randomChar",value:function(){return String.fromCharCode(97+Math.floor(26*Math.random()))}},{key:"wordPlace",value:function(e,t,r,o){switch(o){case m:for(var n=0;n<this.crosswordWords[r].length;n++)this._Crossword[n+e][t]=this.crosswordWords[r][n];break;case b:for(var s=0;s<this.crosswordWords[r].length;s++)this._Crossword[e][s+t]=this.crosswordWords[r][s];break;case w:for(var a=0;a<this.crosswordWords[r].length;a++)this._Crossword[e+a][t+a]=this.crosswordWords[r][a];break;default:return}}},{key:"isPossibleHorizontal",value:function(e,t,r){var o;for(o=e;o-e<this.crosswordWords[r].length&&o<d;o++)if("-"!==this._Crossword[o][t])return!1;return o<d}},{key:"isPossibleVertical",value:function(e,t,r){var o;for(o=t;o-t<this.crosswordWords[r].length&&o<d;o++)if("-"!==this._Crossword[e][o])return!1;return o<d}},{key:"isPossibleDiagonal",value:function(e,t,r){var o;for(o=0;o<this.crosswordWords[r].length&&o+e<d&&o+t<d;o++)if("-"!==this._Crossword[e+o][t+o])return!1;return o+e<d&&o+t<d}}]),t}();function C(e){var t=e.value,r=e.data,o=e.onSquareClick;return c.a.createElement("button",{id:t,className:"square",onClick:function(){return o(t)}},r)}function v(e){var t=e.rowNo,r=e.crossword,o=e.onSquareClick;return c.a.createElement("span",{className:"row"},r[t].map(function(e,n){return c.a.createElement(C,{key:n+t*d,value:n+t*d,data:r[t][n],onSquareClick:o})}))}function y(e){var t=e.crossword,r=e.onSquareClick;return c.a.createElement("div",{className:"board"},t.map(function(e,o){return c.a.createElement(v,{key:o,rowNo:o,crossword:t,onSquareClick:r})}))}function p(){var e=Object(i.useState)([]),t=Object(n.a)(e,2),r=t[0],s=t[1],a=Object(i.useState)([]),l=Object(n.a)(a,2),h=l[0],m=l[1],b=Object(i.useState)(0),w=Object(n.a)(b,2),C=w[0],v=w[1],p=Object(i.useState)(1),E=Object(n.a)(p,2),O=E[0],j=E[1],k=Object(i.useState)(""),S=Object(n.a)(k,2),P=S[0],W=S[1],M=Object(i.useState)([]),N=Object(n.a)(M,2),_=N[0],T=N[1],x=Object(i.useState)([]),L=Object(n.a)(x,2),F=L[0],q=L[1],B=Object(i.useState)([]),H=Object(n.a)(B,2),I=H[0],J=H[1],A=Object(i.useState)(0),D=Object(n.a)(A,2),R=D[0],z=D[1],V=Object(i.useState)([]),G=Object(n.a)(V,2),K=G[0],Q=G[1],U=Object(i.useRef)(null);return Object(i.useEffect)(function(){var e=new g;e.createCrossword(),s(JSON.parse(JSON.stringify(f))),m(e._Crossword),v(e.maxWordLength),j(f.length),q(["#ff445c","#44FFE7"]),J(["#ffffff","#000000"]),Q([].fill(!1,0,d*d-1))},[]),Object(i.useEffect)(function(){if(r.includes(P)&&(j(O-1),Q(function(){return _.forEach(function(e){K[e]=!0}),K}),T([]),W(""),z((R+1)%F.length),console.log(R)),P.length===C+1&&(_.forEach(function(e){var t=document.getElementById(e);t.style.backgroundColor="rgb(255, 255, 255)",t.style.color="rgb(0, 0, 0)"}),T([]),W("")),0===O){var e=document.getElementById("Congratulations"),t=e.getElementsByTagName("p");e.style.backgroundColor="#ff445c",t[0].innerHTML="Congratulations!!!",t[1].innerHTML="<button onClick=window.location.reload()>Replay</button>",t[0].style.font="italic bold 3rem 'Poppins', sans-serif",t[1].style.font="bold 1rem 'Poppins', sans-serif",t[1].style.margin="1% 0 0 40%";var o=t[1].getElementsByTagName("button")[0];o.style.height="1.5rem",o.style.width="5rem",o.style.bgcolor="#ffffff",o.style.borderColor="#888888",o.style.font="100 1rem  'Poppins', sans-serif",U.current.play()}},[r,C,_,P,O,F,R,K]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("div",{className:"Title"},c.a.createElement("p",null,"WordSearch")),c.a.createElement("div",{className:"Scoreboard"},c.a.createElement("span",null,c.a.createElement("p",null,"To Find")),c.a.createElement("span",null,c.a.createElement("p",{id:"remCount"},O)))),c.a.createElement(y,{crossword:h,onSquareClick:function(e){if(!K[e]){var t=document.getElementById(e);if(_.includes(e)){t.style.backgroundColor="rgb(255, 255, 255)",t.style.color="rgb(0, 0, 0)",T(_.filter(function(t){return t!==e}));var r=P.indexOf(t.innerHTML);-1!==r&&W(P.slice(0,r)+P.slice(r+1))}else t.style.backgroundColor=F[R],t.style.color=I[R],T([].concat(Object(o.a)(_),[e])),W(P+t.innerHTML)}}}),c.a.createElement("div",null,c.a.createElement("span",{id:"Congratulations"},c.a.createElement("p",null),c.a.createElement("p",null))),c.a.createElement("div",null,c.a.createElement("audio",{ref:U},c.a.createElement("source",{src:u.a,type:"audio/mpeg"}))))}}).call(this,r(3))},8:function(e,t,r){e.exports=r.p+"static/media/win.de7c0cf3.mp3"}},[[10,3,2]]]);
//# sourceMappingURL=main.19a869f8.chunk.js.map