(this["webpackJsonpthree-react-test"]=this["webpackJsonpthree-react-test"]||[]).push([[0],{12:function(t){t.exports=JSON.parse('{"cards":[{"id":"34249","position":[-1000,-800,0],"height":270,"width":120,"exits":[{"id":"99211"},{"id":"90412"},{"id":"55389"}]},{"id":"78579","position":[-1250,-650,1e-10],"height":282,"width":120,"exits":[{"id":"17207"}]},{"id":"39227","position":[-600,-1750,2e-10],"height":130,"width":120,"exits":[{"id":"14024"},{"id":"59362"},{"id":"45730"}],"variant":"solution"},{"id":"1635","position":[-800,-1200,7.000000000000001e-10],"height":256,"width":120,"exits":[{"id":"8855"},{"id":"17317"}]},{"id":"52280","position":[-800,-1750,8e-10],"height":271,"width":120,"exits":[{"id":"75480"},{"id":"99666"},{"id":"59186"}]},{"id":"23949","position":[-1000,-1450,9e-10],"height":223,"width":120,"exits":[{"id":"9233"},{"id":"97253"},{"id":"58931"}]},{"id":"25343","position":[-800,-900,1e-9],"height":111,"width":120,"exits":[{"id":"3510"},{"id":"66947"}]},{"id":"26875","position":[-600,-1200,1.1000000000000001e-9],"height":272,"width":120,"exits":[{"id":"28193"},{"id":"56005"},{"id":"69383"}],"variant":"solution"},{"id":"56765","position":[-1000,-1050,1.2e-9],"height":209,"width":120,"exits":[{"id":"98472"}]},{"id":"69723","position":[-800,-550,1.3e-9],"height":148,"width":120,"exits":[{"id":"16583"}],"variant":"solution"},{"id":"29498","position":[-600,-1600,1.4000000000000001e-9],"height":137,"width":120,"exits":[],"variant":"solution"},{"id":"60889","position":[-600,-900,1.5e-9],"height":207,"width":120,"exits":[{"id":"26226"},{"id":"66099"},{"id":"25984"}],"variant":"solution"},{"id":"24250","position":[-200,-1400,1.6e-9],"height":255,"width":120,"exits":[{"id":"4175"},{"id":"28086"},{"id":"78042"}]},{"id":"60129","position":[-1250,-950,1.7000000000000001e-9],"height":209,"width":120,"exits":[{"id":"25652"}]}],"connections":[{"id":"51704","from":"3510","to":"60889"},{"id":"48234","from":"9233","to":"52280"},{"id":"35226","from":"66099","to":"24250"},{"id":"89173","from":"59186","to":"29498"},{"id":"56173","from":"90412","to":"69723"},{"id":"1090","from":"97253","to":"24250"},{"id":"3342","from":"25652","to":"56765"},{"id":"62065","from":"25652","to":"34249"},{"id":"88162","from":"17207","to":"69723"},{"id":"89790","from":"14024","to":"24250"},{"id":"9594","from":"8855","to":"26875"},{"id":"69088","from":"8855","to":"60889"},{"id":"12181","from":"75480","to":"39227"},{"id":"58568","from":"17207","to":"34249"}]}')},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n(2),r=n(0),a=n.n(r),c=n(6),u=n.n(c),d=n(3),l={zoom:0,position:[0,0]},m=a.a.createContext({zoom:0,position:[0,0]}),s=a.a.createContext((function(){throw new Error("Cannot set camera")})),f=a.a.createContext({current:null}),h=function(){return a.a.useContext(f)},p=function(t){return Math.exp(t)},v=function(t){document.documentElement.style.cursor=t||null},g=function(t){return 50*Math.round(t/50)},b=function(t){return[g(t[0]),g(t[1])]},x=function(t){var e=t.children,n=a.a.useContext(m),o=n.zoom,i=n.position;return a.a.createElement("g",{transform:"\n          translate(\n            ".concat(document.documentElement.clientWidth/2,",\n            ").concat(document.documentElement.clientHeight/2,"\n          )\n          scale(").concat(p(o),")\n          translate(").concat(-i[0],", ").concat(i[1],")\n        ")},e)},E=n(4),M=function(t){var e=t.isConnected,n=t.isSolution,o=Object(E.a)(t,["isConnected","isSolution"]);return a.a.createElement("circle",Object.assign({r:10,stroke:e?n?"#7f333e":"#3d3f4c":"#666666",fill:e?n?"#7f333e":"#3d3f4c":"#FFFFFF",strokeWidth:3},o))},w=a.a.createContext({cardMap:new Map,connectionMap:new Map,setCard:function(){throw new Error("Uninitialized context: Cannot set card")}}),C=function(t){var e=t.model,n=t.onSetModel,o=t.children,r=a.a.useMemo((function(){return new Map(e.cards.map((function(t){return[t.id,t]})))}),[e.cards]),c=a.a.useMemo((function(){return new Map(e.connections.map((function(t){return[t.id,t]})))}),[e.connections]),u=a.a.useCallback((function(t,e){return n((function(n){return Object(i.a)({},n,{cards:n.cards.map((function(n){return n.id===t?e(n):n}))})}))}),[n]);return a.a.createElement(w.Provider,{value:a.a.useMemo((function(){return{cardMap:r,connectionMap:c,setCard:u}}),[r,c,u])},o)},y=function(){return a.a.useContext(w)},k=function(t){var e=t.children,n=Object(E.a)(t,["children"]),o=h(),i=a.a.useRef(null),r=a.a.useRef(null);return a.a.useLayoutEffect((function(){if(i.current&&r.current){var t=r.current.getBoundingClientRect(),e=p(o.current.zoom),n=t.height/e,a=t.width/e;i.current.setAttribute("width","".concat(a)),i.current.setAttribute("height","".concat(n)),i.current.setAttribute("x","".concat(-a/2)),i.current.setAttribute("y","".concat(-n/2))}})),a.a.createElement("foreignObject",Object.assign({ref:i},n),a.a.createElement("div",{style:{width:"max-content",height:"max-content"},ref:r},e))},j=function(){return Math.floor(1e7*Math.random()).toString()},O="Spicy jalapeno bacon ipsum dolor amet dolore shoulder spare ribs enim tenderloin jerky. Doner enim beef ribs incididunt laboris t-bone ea dolore consectetur turducken short loin. Ut short loin bacon excepteur id ham hock flank culpa brisket. Swine velit cupidatat, qui leberkas ad andouille lorem hamburger labore pancetta sunt in fatback tri-tip. Lorem porchetta minim cupim. Fatback pork chop beef, qui culpa ham ullamco.".split(" "),S=function(){return O.filter((function(){return Math.random()<.2})).sort((function(){return Math.random()-.5})).join(" ")},z=function(){var t=new URLSearchParams(window.location.search);if("1"===t.get("model"))return n(12);var e,o=parseInt(null!==(e=t.get("amt"))&&void 0!==e?e:"")||50;return function(t,e){var n=new Array(t).fill(null).map((function(e,n){return{id:j(),position:b([(.5-Math.random())*Math.sqrt(t)*1e3,(.5-Math.random())*Math.sqrt(t)*1e3]),type:Math.random()>.8?"solution":"problem",text:S()}})),o=new Array(Math.round(e)).fill(0).map((function(){return{id:j(),from:n[Math.max(0,Math.floor(Math.random()*n.length-1))].id,to:n[Math.max(0,Math.floor(Math.random()*n.length-1))].id}}));return{cards:n,connections:o}}(o,.8*o)}(),A=a.a.memo((function(t){var e=t.card,n=t.onChangeCard,r=h(),c=function(t){return n(e.id,(function(e){return Object(i.a)({},e,{},"function"===typeof t?t(e):t)}))},u=Object(d.a)({onClick:function(t){t.event.altKey&&c({text:S()})},onDragStart:function(){v("grabbing")},onDragEnd:function(t){var e,n,i=Object(o.a)(t.movement,2),a=i[0],u=i[1],d=t.memo;if(v(),d){var l=p(null!==(e=null===(n=r.current)||void 0===n?void 0:n.zoom)&&void 0!==e?e:0);c({position:b([d[0]+a/l,d[1]+u/l])})}},onDrag:function(t){var n=t.buttons,i=Object(o.a)(t.movement,2),a=i[0],u=i[1],d=t.memo;if(1===n){v("grabbing"),d||(d=e.position);var l=p(r.current.zoom);return c({position:[d[0]+a/l,d[1]+u/l]}),d}}},{pointerEvents:!0,drag:{threshold:10}});return a.a.createElement(a.a.Fragment,null,a.a.createElement("g",{transform:"translate(".concat(e.position[0],", ").concat(e.position[1],")")},a.a.createElement(k,u(),a.a.createElement("div",null,a.a.createElement("div",{style:{display:"flex",flexDirection:"column",padding:16,width:160,borderRadius:16,boxSizing:"border-box",backgroundColor:"solution"===e.type?"#7f333e":"#3d3f4c",color:"white"}},a.a.createElement("strong",null,"solution"===e.type?"Solution":"Problem"),a.a.createElement("div",{style:{height:8}}),a.a.createElement("span",null,e.text)))),a.a.createElement(M,{isConnected:!0,isSolution:"solution"===e.type,cx:-80}),a.a.createElement(M,{isConnected:!0,isSolution:"solution"===e.type,cx:80})))})),D=function(){var t=y(),e=t.cardMap,n=t.setCard;return a.a.createElement("g",{id:"cards"},Array.from(e.values()).map((function(t){return a.a.createElement(A,{key:t.id,card:t,onChangeCard:n})})))},F=a.a.memo((function(t){t.connection;var e=t.fromCard,n=t.toCard,o=[e.position[0]+80,e.position[1]],i=[n.position[0]-80,n.position[1]],r=Math.abs((i[0]-o[0])/2),c=Math.max(50,r);return a.a.createElement("path",{d:"\n        M ".concat(o[0]," ").concat(o[1],"\n        C ").concat(o[0]+c," ").concat(o[1]," ").concat(i[0]-c," ").concat(i[1]," ").concat(i[0]," ").concat(i[1],"\n      "),fill:"none",strokeWidth:4,stroke:"solution"===n.text?"#7f333e":"#3d3f4c"})})),P=function(){var t=y(),e=t.connectionMap,n=t.cardMap;return a.a.createElement("g",{id:"connections"},Array.from(e.values()).map((function(t){var e=n.get(t.from),o=n.get(t.to);return e&&o?a.a.createElement(F,{key:t.id,connection:t,fromCard:e,toCard:o}):null})))};n(13);u.a.render(a.a.createElement((function(t){var e=t.children,n=a.a.useState(z),i=Object(o.a)(n,2),r=i[0],c=i[1];return a.a.createElement(C,{model:r,onSetModel:c},e)}),null,a.a.createElement((function(t){var e=t.children,n=a.a.useState(l),i=Object(o.a)(n,2),r=i[0],c=i[1],u=a.a.useRef(l),d=a.a.useCallback((function(t){c(t),u.current=t}),[]);return a.a.createElement(m.Provider,{value:r},a.a.createElement(s.Provider,{value:d},a.a.createElement(f.Provider,{value:u},e)))}),null,a.a.createElement((function(){var t=h(),e=a.a.useContext(s),n=a.a.useRef(null),r=y().cardMap;return a.a.useEffect((function(){var t,n={minX:(t=Array.from(r.values())).reduce((function(t,e){return Math.min(t,e.position[0])}),1/0),maxX:t.reduce((function(t,e){return Math.max(t,e.position[0])}),-1/0),minY:t.reduce((function(t,e){return Math.min(t,e.position[1])}),1/0),maxY:t.reduce((function(t,e){return Math.max(t,e.position[1])}),-1/0)};e({position:[(n.maxX+n.minX)/2,-(n.maxY+n.minY)/2],zoom:-Math.log(Math.max((n.maxY-n.minY+200)/document.documentElement.clientHeight,(n.maxX-n.minX+200)/document.documentElement.clientWidth))})}),[]),Object(d.a)({onWheel:function(n){var o=n.event,r=n.movement,a=n.memo;n.active;if(o){var c,u=0===o.deltaMode?1:20;if(!a)a=null===(c=t.current)||void 0===c?void 0:c.position;var d=p(t.current.zoom);return e(Object(i.a)({},t.current,{position:[r[0]/d*u+a[0],-r[1]/d*u+a[1]]})),a}},onPinch:function(n){var r=n.event,a=(n.origin,Object(o.a)(n.da,1)[0]),c=n.memo;r.preventDefault();var u=a/50;c||(c={delta:u,initZoom:t.current.zoom,initPos:t.current.position});var d=c.initZoom+u-c.delta;return e(Object(i.a)({},t.current,{zoom:d})),c},onDrag:function(n){var o=n.buttons,r=(n.active,n.movement),a=(n.direction,n.velocity,n.memo);if(4===o){a||(a=t.current.position);var c=p(t.current.zoom);return e(Object(i.a)({},t.current,{position:r.map((function(t,e){return t*c+a[e]}))})),a}},onDoubleClick:function(t){var e=t.event;e.clientX,e.clientY,e.ctrlKey}},{domTarget:n,eventOptions:{passive:!1}}),a.a.createElement("svg",{ref:n,style:{userSelect:"none"},viewBox:"0 0 ".concat(document.documentElement.clientWidth," ").concat(document.documentElement.clientHeight)},a.a.createElement(x,null,a.a.createElement(P,null),a.a.createElement(D,null)))}),null))),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.7dc7b8f6.chunk.js.map