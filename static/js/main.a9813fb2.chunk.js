(window.webpackJsonpbooking=window.webpackJsonpbooking||[]).push([[0],{11:function(e,t,n){e.exports=n.p+"static/media/desc.f06acfc6.svg"},12:function(e,t,n){e.exports=n.p+"static/media/asc.d8be3f88.svg"},13:function(e,t,n){e.exports=n.p+"static/media/exchange.c7b5a736.svg"},19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(10),c=n.n(o),i=(n(24),n(1)),l=(n(25),"https://ptx.transportdata.tw/MOTC"),u={method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}};function s(e){var t=e.split(":");return 60*parseInt(t[0],10)+parseInt(t[1],10)}function m(e){return e.length<2?"0"+e:e}var d=n(2),f=n(3),p=n(4),v=n(11),b=n.n(v),g=n(12),h=n.n(g);n(13);function E(){var e=Object(d.a)(["\n  width: 20px;\n"]);return E=function(){return e},e}function O(){var e=Object(d.a)(["\n  width: 20px;\n"]);return O=function(){return e},e}var j=Object(f.a)((function(e){var t=Object(p.a)({},e);return a.a.createElement("img",Object.assign({},t,{src:b.a,alt:"desc"}))}))(O()),T=Object(f.a)((function(e){var t=Object(p.a)({},e);return a.a.createElement("img",Object.assign({},t,{src:h.a,alt:"asc"}))}))(E());function w(){var e=Object(d.a)(["\n  padding: .3em;\n  vertical-align: middle;\n  font-weight: bold;\n  cursor: ",";\n"]);return w=function(){return e},e}function S(){var e=Object(d.a)(["\n  width: 100%;\n  box-shadow: 0px 3px 10px #ddd;\n  thead {\n    background-color: #eee;\n  }\n  td {\n    padding: .3em;\n    vertical-align: middle;\n  }\n  tr:nth-child(even) {\n    background-color: #eee;\n  }\n"]);return S=function(){return e},e}var D=f.a.table(S()),k=f.a.th(w(),(function(e){return e.pointer?"pointer":"initial"})),y=a.a.memo((function(e){var t=e.TrainNo,n=e.DepartureTime,r=e.ArrivalTime,o=s(n),c=s(r);return a.a.createElement("tr",null,a.a.createElement("td",{className:"text-info font-weight-bold"},t),a.a.createElement("td",null,n),a.a.createElement("td",null,r),a.a.createElement("td",null,function(e){for(var t=0;e>=60;)e-=60,t+=1;return(t=m(t.toString()))+":"+(e=m(e.toString()))}(c-o)))})),C=function(){return a.a.createElement("tr",null,a.a.createElement("td",{colSpan:"4"},"\u5c1a\u7121\u8cc7\u6599"))},x=a.a.memo((function(e){var t=e.sortByDeparture,n=e.sortByArrival,r=e.resultList,o=e.onClickDepartureSort,c=e.onClickArrivalSort;return a.a.createElement(D,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement(k,null,"\u8eca\u6b21"),a.a.createElement(k,{pointer:!0,onClick:o},"\u767c\u8eca","desc"===t?a.a.createElement(j,null):a.a.createElement(T,null)),a.a.createElement(k,{pointer:!0,onClick:c},"\u5230\u9054","desc"===n?a.a.createElement(j,null):a.a.createElement(T,null)),a.a.createElement(k,null,"\u7e3d\u6642\u7a0b"))),a.a.createElement("tbody",null,r.length>0?r.map((function(e){return a.a.createElement(y,{key:e.DailyTrainInfo.TrainNo,TrainNo:e.DailyTrainInfo.TrainNo,DepartureTime:e.OriginStopTime.DepartureTime,ArrivalTime:e.DestinationStopTime.ArrivalTime})})):a.a.createElement(C,null)))}));function A(){var e=Object(d.a)(["\n  width: 100%;\n  background-color: #aeeff9;\n  th, td {\n    padding: .3em;\n  }\n"]);return A=function(){return e},e}var N=f.a.table(A()),R=function(e){var t=e.prizeList,n=e.departure,r=e.arrival;return a.a.createElement("div",{className:"mt-3 mb-3"},a.a.createElement("h3",null,"\u7968\u50f9\u8cc7\u8a0a"),a.a.createElement(N,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{colSpan:"3"},n,a.a.createElement("span",{className:"ml-2 mr-2"},"\u2192"),r))),a.a.createElement("tbody",null,a.a.createElement("tr",null,t.map((function(e){return a.a.createElement("td",{key:e.Price},e.TicketType,":",a.a.createElement("strong",null,"$",e.Price))}))))))};function P(){var e=Object(d.a)(["\n  position: fixed;\n  bottom: 5%;\n  right: 5%;\n  z-index: 1050;\n  width: 45px;\n  height: 45px;\n  background: #eee;\n  border-radius: 50%;\n  text-align: center;\n  padding: 0;\n  display: none;\n"]);return P=function(){return e},e}function F(){window.scrollTo({top:0,left:0,behavior:"smooth"})}var L=Object(f.a)((function(e){var t=Object(p.a)({},e),n=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){function e(){window.scrollY>200?a(!0):a(!1)}return e(),window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[a]),n}();return a.a.createElement("button",Object.assign({style:n?{display:"block"}:null,onClick:F},t),"TOP")}))(P()),W=n(16);function B(e){var t=e.children;return a.a.createElement("div",{className:"row form-group"},t)}function I(e){var t=e.htmlFor,n=e.children;return a.a.createElement("label",{htmlFor:t,className:"col-4 col-form-label text-left"},n)}var H=a.a.memo((function(e){var t=e.children;return a.a.createElement("div",{className:"col"},t)})),U=n(8),z=a.a.memo(a.a.forwardRef((function(e,t){var n=e.options,r=Object(U.a)(e,["options"]);return a.a.createElement("select",Object.assign({},r,{ref:t}),n.length>0?n.map((function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.Zh_tw+e.En)})):a.a.createElement("option",{value:""},"\u8acb\u9078\u64c7"))}))),J=["06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],M=a.a.memo((function(e){e.options;var t=Object(U.a)(e,["options"]);return a.a.createElement("select",t,J.map((function(e){return a.a.createElement("option",{value:e,key:e},e)})))})),Y=z;function $(){var e=Object(d.a)(["\n  box-shadow: 1px 1px 5px #ddd;\n  background-color: #f3f3f3;\n  border-color: #ddd;\n  color: #333;\n  text-shadow: 0 1px 0 #eee;\n  padding-top: .5em;\n  padding-bottom: .5em;\n  margin-bottom: .5em;\n  .col-form-label {\n    max-width: 7em;\n  }\n"]);return $=function(){return e},e}function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Z=function(){var e=(new Date).getHours()+1,t=e+3;return{defaultDepTime:e=m(e.toString())+":00",defaultArrTime:t=m(t.toString())+":00"}}(),_=Z.defaultDepTime,q=Z.defaultArrTime;function K(){var e=Object(r.useState)(function(e){var t=new Date(e),n=""+(t.getMonth()+1),r=""+t.getDate(),a=t.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[a,n,r].join("-")}(Date.now())),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)("1000"),c=Object(i.a)(o,2),l=c[0],u=c[1],s=Object(r.useState)("1070"),m=Object(i.a)(s,2),d=m[0],f=m[1],p=Object(r.useState)(_),v=Object(i.a)(p,2),b=v[0],g=v[1],h=Object(r.useState)(q),E=Object(i.a)(h,2);return{date:n,setDate:a,departure:l,setDeparture:u,arrival:d,setArrival:f,departureTime:b,setDepartureTime:g,arriveTime:E[0],setArriveTime:E[1]}}var Q=a.a.memo((function(e){var t=e.date,n=e.onChangeDate,o=e.departure,c=e.onChangeDeparture,s=e.DepArrChange,m=e.arrival,d=e.onChangeArrival,f=e.departureTime,p=e.arriveTime,v=e.changeTime,b=e.onSearch,g=e.departureRef,h=e.arrivalRef,E=e.className,O=Object(r.useState)([]),j=Object(i.a)(O,2),T=j[0],w=j[1];return Object(r.useEffect)((function(){fetch(l+"/v2/Rail/THSR/Station",u).then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){Object(W.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({value:e.StationID},e.StationName)}));w(t)})).catch((function(e){return console.log(e)}))}),[]),a.a.createElement("div",{className:"container ".concat(E)},a.a.createElement(B,null,a.a.createElement(I,{htmlFor:"trip-start"},"\u65e5\u671f"),a.a.createElement(H,null,a.a.createElement("input",{className:"form-control",type:"date",id:"trip-start",value:t,onChange:n}))),a.a.createElement(B,null,a.a.createElement(I,{htmlFor:"OrginStation"},"\u8d77\u7ad9"),a.a.createElement(H,null,a.a.createElement(Y,{className:"form-control",name:"OrginStation",id:"OrginStation",options:T,value:o,onChange:c,ref:g}))),a.a.createElement("div",{className:"row justify-content-center form-group"},a.a.createElement("button",{onClick:s,type:"button",className:"btn btn-outline-primary"},"\u8d77\u8fc4\u7ad9\u4ea4\u63db")),a.a.createElement(B,null,a.a.createElement(I,{htmlFor:"DestinationStation"},"\u8fc4\u7ad9"),a.a.createElement(H,null,a.a.createElement(Y,{className:"form-control",name:"DestinationStation",id:"DestinationStation",options:T,value:m,onChange:d,ref:h}))),a.a.createElement(B,null,a.a.createElement(I,{htmlFor:"DepartureTime"},"\u6700\u65e9\u51fa\u767c"),a.a.createElement(H,null,a.a.createElement(M,{className:"form-control",name:"DepartureTime",id:"DepartureTime",value:f,onChange:v}))),a.a.createElement(B,null,a.a.createElement(I,{htmlFor:"ArriveTime"},"\u6700\u665a\u62b5\u9054"),a.a.createElement(H,null,a.a.createElement(M,{className:"form-control",name:"ArriveTime",id:"ArriveTime",value:p,onChange:v}))),a.a.createElement("button",{type:"button",className:"btn btn-primary btn-lg btn-block",onClick:b},"\u67e5\u8a62"))})),V=Object(f.a)(Q)($());var X=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],c=K(),m=c.date,d=c.setDate,f=c.departure,p=c.setDeparture,v=c.arrival,b=c.setArrival,g=c.departureTime,h=c.setDepartureTime,E=c.arriveTime,O=c.setArriveTime,j=Object(r.useRef)(),T=Object(r.useRef)(),w=Object(r.useState)("desc"),S=Object(i.a)(w,2),D=S[0],k=S[1],y=Object(r.useState)("desc"),C=Object(i.a)(y,2),A=C[0],N=C[1],P=Object(r.useState)([]),F=Object(i.a)(P,2),W=F[0],B=F[1],I=Object(r.useState)([]),H=Object(i.a)(I,2),U=H[0],z=H[1],J=Object(r.useCallback)((function(e){return d(e.currentTarget.value)}),[d]),M=Object(r.useCallback)((function(e){"OrginStation"===e.currentTarget.id?p(e.currentTarget.value):b(e.currentTarget.value)}),[p,b]),Y=Object(r.useCallback)((function(){p(v),b(f)}),[f,v,p,b]),$=Object(r.useCallback)((function(e){"DepartureTime"===e.currentTarget.id?h(e.currentTarget.value):O(e.currentTarget.value)}),[h,O]),G=Object(r.useCallback)((function(){(function(e,t,n){var r="/v2/Rail/THSR/DailyTimetable/OD/".concat(e,"/to/").concat(t,"/").concat(n);return fetch(l+r,u)})(f,v,m).then((function(e){return e.json()})).then((function(e){var t=s(g),n=s(E),r=e.filter((function(e){var r=s(e.OriginStopTime.DepartureTime),a=s(e.DestinationStopTime.ArrivalTime);return r>t&&a<n}));B(r),o(e[0].UpdateTime)})).catch((function(e){return console.log(e)})),function(e,t){var n="/v2/Rail/THSR/ODFare/".concat(e,"/to/").concat(t);return fetch(l+n,u)}(f,v).then((function(e){return e.json()})).then((function(e){return z(e[0].Fares)})).catch((function(e){return console.log(e)}))}),[f,v,m,g,E]),Z=Object(r.useCallback)((function(){k("desc"===D?"asc":"desc"),W.sort((function(e,t){var n=s(e.OriginStopTime.DepartureTime),r=s(t.OriginStopTime.DepartureTime);return"desc"===D?n-r:r-n}))}),[D,W]),_=Object(r.useCallback)((function(){N("desc"===A?"asc":"desc"),W.sort((function(e,t){var n=s(e.DestinationStopTime.ArrivalTime),r=s(t.DestinationStopTime.ArrivalTime);return"desc"===A?n-r:r-n}))}),[A,W]);return a.a.createElement("div",{className:"App"},a.a.createElement("header",null,a.a.createElement("h1",null,"\u9ad8\u9435\u67e5\u8a62\u7cfb\u7d71")),a.a.createElement(V,{date:m,onChangeDate:J,departure:f,onChangeDeparture:M,DepArrChange:Y,arrival:v,onChangeArrival:M,departureTime:g,arriveTime:E,changeTime:$,onSearch:G,departureRef:j,arrivalRef:T}),a.a.createElement("div",{className:"container"},a.a.createElement(x,{sortByDeparture:D,sortByArrival:A,resultList:W,onClickDepartureSort:Z,onClickArrivalSort:_}),U.length>0?a.a.createElement(R,{prizeList:U,departure:j.current.selectedOptions[0].textContent,arrival:T.current.selectedOptions[0].textContent}):null),a.a.createElement("footer",{className:"fixed-bottom"},a.a.createElement("p",null,"\u66f4\u65b0\u6642\u9593: ",n)),a.a.createElement(L,null))},ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement(X,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/booking",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/booking","/service-worker.js");ee?(!function(e,t){fetch(e).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):te(t,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.a9813fb2.chunk.js.map