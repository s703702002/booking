(window.webpackJsonpbooking=window.webpackJsonpbooking||[]).push([[0],{12:function(e,t,n){e.exports=n.p+"static/media/desc.f06acfc6.svg"},13:function(e,t,n){e.exports=n.p+"static/media/asc.d8be3f88.svg"},14:function(e,t,n){e.exports=n.p+"static/media/exchange.c7b5a736.svg"},19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),l=(n(24),n(11)),i=n(1),u=(n(25),n(8)),s=r.a.memo(r.a.forwardRef((function(e,t){var n=e.options,a=Object(u.a)(e,["options"]);return r.a.createElement("select",Object.assign({},a,{ref:t}),n.length>0?n.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.Zh_tw+e.En)})):r.a.createElement("option",{value:""},"\u8acb\u9078\u64c7"))}))),m=["06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],f=r.a.memo((function(e){e.options;var t=Object(u.a)(e,["options"]);return r.a.createElement("select",t,m.map((function(e){return r.a.createElement("option",{value:e,key:e},e)})))})),p=s;function d(e){var t=e.children;return r.a.createElement("div",{className:"row form-group"},t)}function b(e){var t=e.htmlFor,n=e.children;return r.a.createElement("label",{htmlFor:t,className:"col-4 col-form-label text-left"},n)}var v=r.a.memo((function(e){var t=e.children;return r.a.createElement("div",{className:"col"},t)}));function g(e){var t=e.split(":");return 60*parseInt(t[0],10)+parseInt(t[1],10)}var h=n(2),E=n(3),O=n(4),j=n(12),T=n.n(j),w=n(13),S=n.n(w);n(14);function k(){var e=Object(h.a)(["\n  width: 20px;\n"]);return k=function(){return e},e}function y(){var e=Object(h.a)(["\n  width: 20px;\n"]);return y=function(){return e},e}var D=Object(E.a)((function(e){var t=Object(O.a)({},e);return r.a.createElement("img",Object.assign({},t,{src:T.a,alt:"desc"}))}))(y()),C=Object(E.a)((function(e){var t=Object(O.a)({},e);return r.a.createElement("img",Object.assign({},t,{src:S.a,alt:"asc"}))}))(k());function N(){var e=Object(h.a)(["\n  padding: .3em;\n  vertical-align: middle;\n  font-weight: bold;\n  cursor: ",";\n"]);return N=function(){return e},e}function A(){var e=Object(h.a)(["\n  width: 100%;\n  box-shadow: 0px 3px 10px #ddd;\n  thead {\n    background-color: #eee;\n  }\n  td {\n    padding: .3em;\n    vertical-align: middle;\n  }\n  tr:nth-child(even) {\n    background-color: #eee;\n  }\n"]);return A=function(){return e},e}var x=E.a.table(A()),P=E.a.th(N(),(function(e){return e.pointer?"pointer":"initial"})),R=r.a.memo((function(e){var t=e.TrainNo,n=e.DepartureTime,a=e.ArrivalTime,c=g(n),o=g(a);return r.a.createElement("tr",null,r.a.createElement("td",{className:"text-info font-weight-bold"},t),r.a.createElement("td",null,n),r.a.createElement("td",null,a),r.a.createElement("td",null,function(e){for(var t=0;e>=60;)e-=60,t+=1;return t=t.toString(),e=e.toString(),t.length<2&&(t="0"+t),e.length<2&&(e="0"+e),t+":"+e}(o-c)))})),F=function(){return r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"4"},"\u5c1a\u7121\u8cc7\u6599"))},W=r.a.memo((function(e){var t=e.sortByDeparture,n=e.sortByArrival,a=e.resultList,c=e.onClickDepartureSort,o=e.onClickArrivalSort;return r.a.createElement(x,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement(P,null,"\u8eca\u6b21"),r.a.createElement(P,{pointer:!0,onClick:c},"\u767c\u8eca","desc"===t?r.a.createElement(D,null):r.a.createElement(C,null)),r.a.createElement(P,{pointer:!0,onClick:o},"\u5230\u9054","desc"===n?r.a.createElement(D,null):r.a.createElement(C,null)),r.a.createElement(P,null,"\u7e3d\u6642\u7a0b"))),r.a.createElement("tbody",null,a.length>0?a.map((function(e){return r.a.createElement(R,{key:e.DailyTrainInfo.TrainNo,TrainNo:e.DailyTrainInfo.TrainNo,DepartureTime:e.OriginStopTime.DepartureTime,ArrivalTime:e.DestinationStopTime.ArrivalTime})})):r.a.createElement(F,null)))}));function B(){var e=Object(h.a)(["\n  width: 100%;\n  background-color: #aeeff9;\n  th, td {\n    padding: .3em;\n  }\n"]);return B=function(){return e},e}var I=E.a.table(B()),L=function(e){var t=e.prizeList,n=e.departure,a=e.arrival;return r.a.createElement("div",{className:"mt-3 mb-3"},r.a.createElement("h3",null,"\u7968\u50f9\u8cc7\u8a0a"),r.a.createElement(I,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"3"},n,r.a.createElement("span",{className:"ml-2 mr-2"},"\u2192"),a))),r.a.createElement("tbody",null,r.a.createElement("tr",null,t.map((function(e){return r.a.createElement("td",{key:e.Price},e.TicketType,":",r.a.createElement("strong",null,"$",e.Price))}))))))};function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var H="https://ptx.transportdata.tw/MOTC",z={method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}};var J=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),u=Object(i.a)(o,2),s=u[0],m=u[1],h=Object(a.useState)(function(e){var t=new Date(e),n=""+(t.getMonth()+1),a=""+t.getDate(),r=t.getFullYear();return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),[r,n,a].join("-")}(Date.now())),E=Object(i.a)(h,2),O=E[0],j=E[1],T=Object(a.useState)("desc"),w=Object(i.a)(T,2),S=w[0],k=w[1],y=Object(a.useState)("desc"),D=Object(i.a)(y,2),C=D[0],N=D[1],A=Object(a.useState)("1000"),x=Object(i.a)(A,2),P=x[0],R=x[1],F=Object(a.useState)("1070"),B=Object(i.a)(F,2),I=B[0],J=B[1],M=Object(a.useRef)(),$=Object(a.useRef)(),_=Object(a.useState)([]),G=Object(i.a)(_,2),Y=G[0],Z=G[1],q=Object(a.useState)([]),K=Object(i.a)(q,2),Q=K[0],V=K[1],X=Object(a.useState)("08:00"),ee=Object(i.a)(X,2),te=ee[0],ne=ee[1],ae=Object(a.useState)("17:00"),re=Object(i.a)(ae,2),ce=re[0],oe=re[1],le=Object(a.useCallback)((function(e){return R(e.currentTarget.value)}),[R]),ie=Object(a.useCallback)((function(e){return J(e.currentTarget.value)}),[J]),ue=Object(a.useCallback)((function(){R(I),J(P)}),[P,I]),se=Object(a.useCallback)((function(){(function(e,t,n){var a="/v2/Rail/THSR/DailyTimetable/OD/".concat(e,"/to/").concat(t,"/").concat(n);return fetch(H+a,z)})(P,I,O).then((function(e){return e.json()})).then((function(e){var t=g(te),n=g(ce),a=e.filter((function(e){var a=g(e.OriginStopTime.DepartureTime),r=g(e.DestinationStopTime.ArrivalTime);return a>t&&r<n}));Z(a)})).catch((function(e){return console.log(e)})),function(e,t){var n="/v2/Rail/THSR/ODFare/".concat(e,"/to/").concat(t);return fetch(H+n,z)}(P,I).then((function(e){return e.json()})).then((function(e){return V(e[0].Fares)})).catch((function(e){return console.log(e)}))}),[P,I,O,te,ce]),me=Object(a.useCallback)((function(){k("desc"===S?"asc":"desc"),Y.sort((function(e,t){var n=g(e.OriginStopTime.DepartureTime),a=g(t.OriginStopTime.DepartureTime);return"desc"===S?n-a:a-n}))}),[S,Y]),fe=Object(a.useCallback)((function(){N("desc"===C?"asc":"desc"),Y.sort((function(e,t){var n=g(e.DestinationStopTime.ArrivalTime),a=g(t.DestinationStopTime.ArrivalTime);return"desc"===C?n-a:a-n}))}),[C,Y]),pe=Object(a.useCallback)((function(e){"DepartureTime"===e.currentTarget.id?ne(e.currentTarget.value):oe(e.currentTarget.value)}),[]);return Object(a.useEffect)((function(){fetch(H+"/v2/Rail/THSR/Station",z).then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({value:e.StationID},e.StationName)}));m(t),c(e[0].UpdateTime)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"\u9ad8\u9435\u67e5\u8a62\u7cfb\u7d71")),r.a.createElement("div",{className:"search_panel container"},r.a.createElement(d,null,r.a.createElement(b,{htmlFor:"trip-start"},"\u65e5\u671f"),r.a.createElement(v,null,r.a.createElement("input",{className:"form-control",type:"date",id:"trip-start",value:O,onChange:function(e){return j(e.currentTarget.value)}}))),r.a.createElement(d,null,r.a.createElement(b,{htmlFor:"OrginStation"},"\u8d77\u7ad9"),r.a.createElement(v,null,r.a.createElement(p,{className:"form-control",name:"OrginStation",id:"OrginStation",options:s,value:P,onChange:le,ref:M}))),r.a.createElement("div",{className:"row justify-content-center form-group"},r.a.createElement("button",{onClick:ue,type:"button",className:"btn btn-outline-primary"},"\u8d77\u8fc4\u7ad9\u4ea4\u63db")),r.a.createElement(d,null,r.a.createElement(b,{htmlFor:"DestinationStation"},"\u8fc4\u7ad9"),r.a.createElement(v,null,r.a.createElement(p,{className:"form-control",name:"DestinationStation",id:"DestinationStation",options:s,value:I,onChange:ie,ref:$}))),r.a.createElement(d,null,r.a.createElement(b,{htmlFor:"DepartureTime"},"\u6700\u65e9\u51fa\u767c"),r.a.createElement(v,null,r.a.createElement(f,{className:"form-control",name:"DepartureTime",id:"DepartureTime",value:te,onChange:pe}))),r.a.createElement(d,null,r.a.createElement(b,{htmlFor:"ArriveTime"},"\u6700\u665a\u62b5\u9054"),r.a.createElement(v,null,r.a.createElement(f,{className:"form-control",name:"ArriveTime",id:"ArriveTime",value:ce,onChange:pe}))),r.a.createElement("button",{type:"button",className:"btn btn-primary btn-lg btn-block",onClick:se},"\u67e5\u8a62")),r.a.createElement("div",{className:"container"},r.a.createElement(W,{sortByDeparture:S,sortByArrival:C,resultList:Y,onClickDepartureSort:me,onClickArrivalSort:fe}),Q.length>0?r.a.createElement(L,{prizeList:Q,departure:M.current.selectedOptions[0].textContent,arrival:$.current.selectedOptions[0].textContent}):null),r.a.createElement("footer",{className:"fixed-bottom"},r.a.createElement("p",null,"\u66f4\u65b0\u6642\u9593: ",n)))},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(J,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/booking",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/booking","/service-worker.js");M?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):$(t,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.f5f043e6.chunk.js.map