(window.webpackJsonpbooking=window.webpackJsonpbooking||[]).push([[0],{12:function(e,t,n){e.exports=n.p+"static/media/desc.f06acfc6.svg"},13:function(e,t,n){e.exports=n.p+"static/media/asc.d8be3f88.svg"},14:function(e,t,n){e.exports=n.p+"static/media/exchange.c7b5a736.svg"},19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),l=n.n(c),o=(n(24),n(11)),i=n(1),u=(n(25),n(8)),m=r.a.memo(r.a.forwardRef((function(e,t){var n=e.options,a=Object(u.a)(e,["options"]);return r.a.createElement("select",Object.assign({},a,{ref:t}),n.length>0?n.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.Zh_tw+e.En)})):r.a.createElement("option",{value:""},"\u8acb\u9078\u64c7"))}))),s=["06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],f=r.a.memo((function(e){e.options;var t=Object(u.a)(e,["options"]);return r.a.createElement("select",t,s.map((function(e){return r.a.createElement("option",{value:e,key:e},e)})))})),p=m;function b(e){var t=e.children;return r.a.createElement("div",{className:"row form-group"},t)}function d(e){var t=e.htmlFor,n=e.children;return r.a.createElement("label",{htmlFor:t,className:"col-4 col-form-label text-left"},n)}var v=r.a.memo((function(e){var t=e.children;return r.a.createElement("div",{className:"col"},t)}));function E(e){var t=e.split(":");return 60*parseInt(t[0],10)+parseInt(t[1],10)}var O=n(2),h=n(3),g=n(4),j=n(12),T=n.n(j),S=n(13),y=n.n(S);n(14);function D(){var e=Object(O.a)(["\n  width: 20px;\n"]);return D=function(){return e},e}function w(){var e=Object(O.a)(["\n  width: 20px;\n"]);return w=function(){return e},e}var k=Object(h.a)((function(e){var t=Object(g.a)({},e);return r.a.createElement("img",Object.assign({},t,{src:T.a,alt:"desc"}))}))(w()),C=Object(h.a)((function(e){var t=Object(g.a)({},e);return r.a.createElement("img",Object.assign({},t,{src:y.a,alt:"asc"}))}))(D());function N(){var e=Object(O.a)(["\n  padding: .3em;\n  vertical-align: middle;\n  font-weight: bold;\n  cursor: ",";\n"]);return N=function(){return e},e}function x(){var e=Object(O.a)(["\n  width: 100%;\n  box-shadow: 0px 3px 10px #ddd;\n  thead {\n    background-color: #eee;\n  }\n  td {\n    padding: .3em;\n    vertical-align: middle;\n  }\n  tr:nth-child(even) {\n    background-color: #eee;\n  }\n"]);return x=function(){return e},e}var A=h.a.table(x()),F=h.a.th(N(),(function(e){return e.pointer?"pointer":"initial"})),P=r.a.memo((function(e){var t=e.TrainNo,n=e.DepartureTime,a=e.ArrivalTime,c=E(n),l=E(a);return r.a.createElement("tr",null,r.a.createElement("td",{className:"text-info font-weight-bold"},t),r.a.createElement("td",null,n),r.a.createElement("td",null,a),r.a.createElement("td",null,function(e){for(var t=0;e>=60;)e-=60,t+=1;return t=t.toString(),e=e.toString(),t.length<2&&(t="0"+t),e.length<2&&(e="0"+e),t+":"+e}(l-c)))})),R=function(){return r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"4"},"\u5c1a\u7121\u8cc7\u6599"))},B=r.a.memo((function(e){var t=e.sortByDeparture,n=e.sortByArrival,a=e.resultList,c=e.onClickDepartureSort,l=e.onClickArrivalSort;return r.a.createElement(A,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement(F,null,"\u8eca\u6b21"),r.a.createElement(F,{pointer:!0,onClick:c},"\u767c\u8eca","desc"===t?r.a.createElement(k,null):r.a.createElement(C,null)),r.a.createElement(F,{pointer:!0,onClick:l},"\u5230\u9054","desc"===n?r.a.createElement(k,null):r.a.createElement(C,null)),r.a.createElement(F,null,"\u7e3d\u6642\u7a0b"))),r.a.createElement("tbody",null,a.length>0?a.map((function(e){return r.a.createElement(P,{key:e.DailyTrainInfo.TrainNo,TrainNo:e.DailyTrainInfo.TrainNo,DepartureTime:e.OriginStopTime.DepartureTime,ArrivalTime:e.DestinationStopTime.ArrivalTime})})):r.a.createElement(R,null)))}));function I(){var e=Object(O.a)(["\n  width: 100%;\n  background-color: #aeeff9;\n  th, td {\n    padding: .3em;\n  }\n"]);return I=function(){return e},e}var L=h.a.table(I()),H=function(e){var t=e.prizeList,n=e.departure,a=e.arrival;return r.a.createElement("div",{className:"mt-3 mb-3"},r.a.createElement("h3",null,"\u7968\u50f9\u8cc7\u8a0a"),r.a.createElement(L,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"3"},n,r.a.createElement("span",{className:"ml-2 mr-2"},"\u2192"),a))),r.a.createElement("tbody",null,r.a.createElement("tr",null,t.map((function(e){return r.a.createElement("td",{key:e.Price},e.TicketType,":",r.a.createElement("strong",null,"$",e.Price))}))))))};function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var J="https://ptx.transportdata.tw/MOTC",M={method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}};var W=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),u=Object(i.a)(l,2),m=u[0],s=u[1],O=Object(a.useState)(function(e){var t=new Date(e),n=""+(t.getMonth()+1),a=""+t.getDate(),r=t.getFullYear();return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),[r,n,a].join("-")}(Date.now())),h=Object(i.a)(O,2),g=h[0],j=h[1],T=Object(a.useState)("desc"),S=Object(i.a)(T,2),y=S[0],D=S[1],w=Object(a.useState)("desc"),k=Object(i.a)(w,2),C=k[0],N=k[1],x=Object(a.useState)("1000"),A=Object(i.a)(x,2),F=A[0],P=A[1],R=Object(a.useState)("1070"),I=Object(i.a)(R,2),L=I[0],W=I[1],$=Object(a.useRef)(),_=Object(a.useRef)(),G=Object(a.useState)([]),U=Object(i.a)(G,2),Y=U[0],Z=U[1],q=Object(a.useState)([]),K=Object(i.a)(q,2),Q=K[0],V=K[1],X=Object(a.useState)("08:00"),ee=Object(i.a)(X,2),te=ee[0],ne=ee[1],ae=Object(a.useState)("17:00"),re=Object(i.a)(ae,2),ce=re[0],le=re[1],oe=Object(a.useCallback)((function(e){return P(e.currentTarget.value)}),[P]),ie=Object(a.useCallback)((function(e){return W(e.currentTarget.value)}),[W]),ue=Object(a.useCallback)((function(){P(L),W(F)}),[F,L]),me=Object(a.useCallback)((function(){(function(e,t,n){var a="/v2/Rail/THSR/DailyTimetable/OD/".concat(e,"/to/").concat(t,"/").concat(n);return fetch(J+a,M)})(F,L,g).then((function(e){return e.json()})).then((function(e){var t=E(te),n=E(ce),a=e.filter((function(e){var a=E(e.OriginStopTime.DepartureTime),r=E(e.DestinationStopTime.ArrivalTime);return a>t&&r<n}));Z(a)})).catch((function(e){return console.log(e)})),function(e,t){var n="/v2/Rail/THSR/ODFare/".concat(e,"/to/").concat(t);return fetch(J+n,M)}(F,L).then((function(e){return e.json()})).then((function(e){return V(e[0].Fares)})).catch((function(e){return console.log(e)}))}),[F,L,g,te,ce]),se=Object(a.useCallback)((function(){D("desc"===y?"asc":"desc"),Y.sort((function(e,t){var n=E(e.OriginStopTime.DepartureTime),a=E(t.OriginStopTime.DepartureTime);return"desc"===y?n-a:a-n}))}),[y,Y]),fe=Object(a.useCallback)((function(){N("desc"===C?"asc":"desc"),Y.sort((function(e,t){var n=E(e.DestinationStopTime.ArrivalTime),a=E(t.DestinationStopTime.ArrivalTime);return"desc"===C?n-a:a-n}))}),[C,Y]),pe=Object(a.useCallback)((function(e){"DepartureTime"===e.currentTarget.id?ne(e.currentTarget.value):le(e.currentTarget.value)}),[]);return Object(a.useEffect)((function(){fetch(J+"/v2/Rail/THSR/Station",M).then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(n,!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({value:e.StationID},e.StationName)}));s(t),c(e[0].UpdateTime)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"\u9ad8\u9435\u67e5\u8a62\u7cfb\u7d71")),r.a.createElement("div",{className:"search_panel container"},r.a.createElement(b,null,r.a.createElement(d,{htmlFor:"trip-start"},"\u65e5\u671f"),r.a.createElement(v,null,r.a.createElement("input",{className:"form-control",type:"date",id:"trip-start",value:g,onChange:function(e){return j(e.currentTarget.value)}}))),r.a.createElement(b,null,r.a.createElement(d,{htmlFor:"OrginStation"},"\u8d77\u7ad9"),r.a.createElement(v,null,r.a.createElement(p,{className:"form-control",name:"OrginStation",id:"OrginStation",options:m,value:F,onChange:oe,ref:$}))),r.a.createElement("div",{className:"row justify-content-center form-group"},r.a.createElement("button",{onClick:ue,type:"button",className:"btn btn-outline-primary"},"\u8d77\u8fc4\u7ad9\u4ea4\u63db")),r.a.createElement(b,null,r.a.createElement(d,{htmlFor:"DestinationStation"},"\u8fc4\u7ad9"),r.a.createElement(v,null,r.a.createElement(p,{className:"form-control",name:"DestinationStation",id:"DestinationStation",options:m,value:L,onChange:ie,ref:_}))),r.a.createElement(b,null,r.a.createElement(d,{htmlFor:"DepartureTime"},"\u6700\u65e9\u51fa\u767c"),r.a.createElement(v,null,r.a.createElement(f,{className:"form-control",name:"DepartureTime",id:"DepartureTime",value:te,onChange:pe}))),r.a.createElement(b,null,r.a.createElement(d,{htmlFor:"ArriveTime"},"\u6700\u665a\u62b5\u9054"),r.a.createElement(v,null,r.a.createElement(f,{className:"form-control",name:"ArriveTime",id:"ArriveTime",value:ce,onChange:pe}))),r.a.createElement("button",{type:"button",className:"btn btn-primary btn-lg btn-block",onClick:me},"\u67e5\u8a62")),r.a.createElement("div",{className:"container"},r.a.createElement(B,{sortByDeparture:y,sortByArrival:C,resultList:Y,onClickDepartureSort:se,onClickArrivalSort:fe}),Q.length>0?r.a.createElement(H,{prizeList:Q,departure:$.current.selectedOptions[0].textContent,arrival:_.current.selectedOptions[0].textContent}):null),r.a.createElement("footer",{className:"fixed-bottom"},r.a.createElement("p",null,"\u66f4\u65b0\u6642\u9593: ",n)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.6e3866ba.chunk.js.map