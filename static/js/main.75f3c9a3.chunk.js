(window["webpackJsonpbullet-journal"]=window["webpackJsonpbullet-journal"]||[]).push([[0],{20:function(e,t,a){"use strict";(function(e){var n=a(10),l=a(12),r=function(){var e,t=null,a=!1,r=window.WebStreamsPolyfill||{},o=window.isSecureContext,s=/constructor/i.test(window.HTMLElement)||!!window.safari,i=o||"MozAppearance"in document.documentElement.style?"iframe":"navigate",c=(e={createWriteStream:function(e,n,l){var u={size:null,pathname:null,writableStrategy:void 0,readableStrategy:void 0},d=0,y=null,b=null,p=null;if(Number.isFinite(n)){var f=[n,l];l=f[0],n=f[1],console.warn("[StreamSaver] Depricated pass an object as 2nd argument when creating a write stream"),u.size=l,u.writableStrategy=n}else n&&n.highWaterMark?(console.warn("[StreamSaver] Depricated pass an object as 2nd argument when creating a write stream"),u.size=l,u.writableStrategy=n):u=n||{};if(!s){t||(t=o?m(c.mitm):function(e){var t=document.createDocumentFragment(),a={frame:window.open(e,"popup","width=200,height=100"),loaded:!1,isIframe:!1,isPopup:!0,remove:function(){a.frame.close()},addEventListener:function(){t.addEventListener.apply(t,arguments)},dispatchEvent:function(){t.dispatchEvent.apply(t,arguments)},removeEventListener:function(){t.removeEventListener.apply(t,arguments)},postMessage:function(){var e;(e=a.frame).postMessage.apply(e,arguments)}};return window.addEventListener("message",(function e(t){t.source===a.frame&&(a.loaded=!0,window.removeEventListener("message",e),a.dispatchEvent(new Event("load")))})),a}(c.mitm)),b=new MessageChannel,e=encodeURIComponent(e.replace(/\//g,":")).replace(/['()]/g,escape).replace(/\*/g,"%2A");var v={transferringReadable:a,pathname:u.pathname||Math.random().toString().slice(-6)+"/"+e,headers:{"Content-Type":"application/octet-stream; charset=utf-8","Content-Disposition":"attachment; filename*=UTF-8''"+e}};u.size&&(v.headers["Content-Length"]=u.size);var h,E=[v,"*",[b.port2]];if(a){var g="iframe"===i?void 0:{transform:function(e,t){d+=e.length,t.enqueue(e),y&&(y=null)},flush:function(){}},w=(p=new c.TransformStream(g,u.writableStrategy,u.readableStrategy)).readable;b.port1.postMessage({readableStream:w},[w])}if(b.port1.onmessage=function(e){e.data.download&&("navigate"===i?(t.remove(),t=null,d||(y=e.data.download)):(t.isPopup&&(t.remove(),"iframe"===i&&m(c.mitm)),m(e.data.download)))},t.loaded)(h=t).postMessage.apply(h,E);else t.addEventListener("load",(function(){var e;(e=t).postMessage.apply(e,E)}),{once:!0})}var _=[];return console.log(r),!s&&p&&p.writable||new c.WritableStream({write:function(e){s?_.push(e):(b.port1.postMessage(e),d+=e.length,y&&(y=null))},close:function(){if(s){var t=new Blob(_,{type:"application/octet-stream; charset=utf-8"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download=e,a.click()}else b.port1.postMessage("end")},abort:function(){_=[],b.port1.postMessage("abort"),b.port1.onmessage=null,b.port1.close(),b.port2.close(),b=null}},u.writableStrategy)},WritableStream:window.WritableStream||r.WritableStream},Object(n.a)(e,"WritableStream",window.WritableStream||l.a),Object(n.a)(e,"supported",!0),Object(n.a)(e,"version",{full:"2.0.0",major:2,minor:0,dot:0}),Object(n.a)(e,"mitm","https://jimmywarting.github.io/StreamSaver.js/mitm.html?version=2.0.0"),e);function m(e){if(!e)throw new Error("meh");var t=document.createElement("iframe");return t.hidden=!0,t.src=e,t.loaded=!1,t.name="iframe",t.isIframe=!0,t.postMessage=function(){var e;return(e=t.contentWindow).postMessage.apply(e,arguments)},t.addEventListener("load",(function(){t.loaded=!0}),{once:!0}),document.body.appendChild(t),t}try{new Response(new ReadableStream),!o||"serviceWorker"in navigator||(s=!0)}catch(u){s=!0}return function(e){try{e()}catch(t){}}((function(){var e=(new TransformStream).readable,t=new MessageChannel;t.port1.postMessage(e,[e]),t.port1.close(),t.port2.close(),a=!0,Object.defineProperty(c,"TransformStream",{configurable:!1,writable:!1,value:TransformStream})})),c};r(),t.a={streamSaver:r}}).call(this,a(35)(e))},23:function(e,t,a){e.exports=a(40)},28:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n,l=a(0),r=a.n(l),o=a(17),s=a.n(o),i=a(7),c=a(6),m=(a(28),a(29),function(){return r.a.createElement("div",{className:"sidebar"},r.a.createElement("h3",{className:"sidebar-logo"},"Logs"),r.a.createElement("ul",{className:"sidebar-links"},r.a.createElement(i.b,{to:"/daily"},r.a.createElement("li",null,"Daily")),r.a.createElement(i.b,{to:"/monthly"},r.a.createElement("li",null,"Monthly")),r.a.createElement(i.b,{to:"/future"},r.a.createElement("li",null,"Future"))))}),u=(a(12),a(20)),d=(a(36),a(22)),y=a(2),b=function(e){var t=e.monthIndex,a=e.dayIndex,n=e.setBullets;return r.a.createElement("button",{className:"monthlyCalendar__deleteButton",type:"button",onClick:function(e){g(t,a,null),n(S()[t].days)}},"Delete")},p=function(e){var t=e.editSwitch,a=e.changeVisibility,n=e.monthIndex,l=e.dayIndex,o=e.input,s=e.setInput,i=(e.bullets,e.setBullets),c=t?"visible":"hidden";return r.a.createElement("form",{className:"editCalenderBullet",style:{visibility:c}},r.a.createElement("input",{type:"text",onChange:function(e){s(e.target.value)}}),r.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),g(n,l,o),a(l)(),i(S()[n].days)}},"Submit"))};console.log("test month ",n);var f=function(e){var t=e.monthIndex;console.log(t),n=t;var a=Object(l.useState)(""),o=Object(y.a)(a,2),s=o[0],i=o[1],c=S()[t],m=new Array(c.length).fill(!1),u=Object(l.useState)(m),f=Object(y.a)(u,2),v=f[0],h=f[1];var E=Object(l.useState)(c.days),g=Object(y.a)(E,2),w=g[0],_=g[1],N=function(e){var t=Object(d.a)(v);return t[e]=!t[e],function(){return h(t)}};return r.a.createElement("div",{className:"monthlyCalendar"},r.a.createElement("h1",{className:"monthlyCalender__title monthlyHeader"},c.name),w.map((function(e,a){return r.a.createElement("div",{className:"monthlyCalender__bulletsContainer"},r.a.createElement("span",{className:"monthlyCalendar__days"},a+1),r.a.createElement("span",{className:"globalContent"},e),r.a.createElement(b,{monthIndex:t,dayIndex:a,setBullets:_}),r.a.createElement(p,{editSwitch:v[a],input:s,changeVisibility:N,monthIndex:t,dayIndex:a,setInput:i,bullets:w,setBullets:_}),r.a.createElement("button",{className:"monthlyCalendar__editButton",type:"button",onClick:N(a)},"Edit"))})))},v=function(e,t){console.log("in set storage key: ",e,"  data: ",t),window.localStorage.setItem(e,JSON.stringify(t))},h=function(e){try{return console.log(JSON.parse(window.localStorage.getItem(e))),JSON.parse(window.localStorage.getItem(e))}catch(t){return console.log(2),!1}},E=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null===t&&null!==a){var n=C(),l=n[e].slice(0,a).concat(n[e].slice(a+1));n[e]=l,v("daily",n)}else{var r=C();r[e].push(t),v("daily",r)}},g=function(e,t,a){var n=S("monthly"),l=n[e];l.id===e&&(l.days[t]=a,n[e]=l,v("monthly",n))},w=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;console.log("month index ",e),console.log("task",t),console.log(a);var n=S("monthly"),l=n[e];l.id===e&&(null===t&&null!==a?(console.log(l.tasks),l.tasks=l.tasks.slice(0,a).concat(l.tasks.slice(a+1)),console.log(l.tasks),n[e]=l,v("monthly",n)):(console.log("in insert"),l.tasks.push(t),n[e]=l,v("monthly",n)))},_=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=h("future"),l=n[e];l.id===e&&(null!=a&&null===t?(l.bullets=l.bullets.slice(0,a).concat(l.bullets.slice(a+1)),n[e]=l,v("future",n)):(l.bullets.push(t),n[e]=l,v("future",n)))},N=function(){console.log(!h("daily")),h("daily")||(console.log("testadfasdf"),function(){var e=new Array(366).fill([]);v("daily",e)}()),h("monthly")||(console.log("testadfasdf"),function(){var e=[{id:0,name:"January",days:new Array(30),tasks:[]},{id:1,name:"February",days:new Array(29),tasks:[]},{id:2,name:"March",days:new Array(31),tasks:[]},{id:3,name:"April",days:new Array(30),tasks:[]},{id:4,name:"May",days:new Array(31),tasks:[]},{id:5,name:"June",days:new Array(30),tasks:[]},{id:6,name:"July",days:new Array(31),tasks:[]},{id:7,name:"August",days:new Array(31),tasks:[]},{id:8,name:"September",days:new Array(30),tasks:[]},{id:9,name:"October",days:new Array(31),tasks:[]},{id:10,name:"November",days:new Array(30),tasks:[]},{id:11,name:"December",days:new Array(31),tasks:[]}];v("monthly",e)}()),h("future")||(console.log("testadfasdf"),v("future",[{id:0,name:"January",bullets:[]},{id:1,name:"February",bullets:[]},{id:2,name:"March",bullets:[]},{id:3,name:"April",bullets:[]},{id:4,name:"May",bullets:[]},{id:5,name:"June",bullets:[]},{id:6,name:"July",bullets:[]},{id:7,name:"August",bullets:[]},{id:8,name:"September",bullets:[]},{id:9,name:"October",bullets:[]},{id:10,name:"November",bullets:[]},{id:11,name:"December",bullets:[]}]))},C=function(){return h("daily")},S=function(){return h("monthly")},k=function(){return h("future")},j=function(e){return h("future")[e].bullets};function O(e){return console.log(e),new Promise((function(t,a){var n=document.createElement("script");n.src=e,n.addEventListener("load",(function(){t()})),n.addEventListener("error",(function(e){a(e)})),document.body.appendChild(n)}))}O("https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js"),O("https://cdn.jsdelivr.net/npm/web-streams-polyfill@2.0.2/dist/ponyfill.min.js");var x=function(){window.addEventListener("storage",(function(e){console.log("storage change")}));var e=function(e){var t=e.target.files[0],a=new FileReader;a.onload=function(e){!function(e){var t=JSON.parse(e);v("daily",t.daily),v("monthly",t.monthly),v("future",t.future),window.location.reload()}(e.target.result)},a.readAsText(t,{type:"application/json"})};return r.a.createElement("nav",{className:"navbar"},r.a.createElement("button",{className:"navbar__save",onClick:function(){var e=u.a.streamSaver(),t=function(){var e={daily:C(),monthly:S(),future:k()};return JSON.stringify(e)}(),a=new Blob([t]),n=e.createWriteStream("sample.json",{size:t.size}),l=a.stream();if(window.WritableStream&&l.pipeTo)return l.pipeTo(n).then((function(){return console.log("done writing")}));window.writer=n.getWriter();var r=l.getReader();!function e(){return r.read().then((function(t){return t.done?window.writer.close():window.writer.write(t.value).then(e)}))}()},type:"button"},"Save"),r.a.createElement("input",{className:"inputFile",type:"file",onChange:function(t){return e(t)}}))},A=a(21);a(37);var B=function e(t){var a;Object(A.a)(this,e),this.month=t.getMonth()+1,this.day=t.getDate(),this.name=["SUN","MON","TUE","WED","THU","FRI","SAT"][t.getDay()],this.index=(a=t.getMonth(),[0,31,29,31,30,31,30,31,31,30,31,30,31].slice(0,a+1).reduce((function(e,t){return e+t}),0)+(this.day-1))};var M=function(e){var t=e.index,a=(e.bullets,e.setBullets),n=Object(l.useState)(""),o=Object(y.a)(n,2),s=o[0],i=o[1],c=Object(l.useState)("."),m=Object(y.a)(c,2),u=m[0],d=m[1];return r.a.createElement("div",{className:"dailyBulletAdd"},r.a.createElement("select",{onChange:function(e){d(e.target.value)}},r.a.createElement("option",{value:"."},"."),r.a.createElement("option",{value:"-"},"-"),r.a.createElement("option",{value:"o"},"o")),r.a.createElement("input",{className:"dailyBulletAdd__input",onChange:function(e){i(e.target.value)},type:"text"}),r.a.createElement("button",{className:"dailyBulletAdd__button",onClick:function(e){var n={symbol:u,content:s};console.log(t),E(t,n),a(C())},type:"button"},"Add"))},T=function(){var e=Object(l.useState)(C()),t=Object(y.a)(e,2),a=t[0],n=t[1],o=new Date,s=new B(new Date(o.valueOf()-864e5)),i=new B(o),c=new B(new Date(o.valueOf()+864e5)),m=new B(new Date(o.valueOf()+1728e5)),u=function(e,t){return function(){E(e,null,t),n(C())}};return r.a.createElement("div",{className:"dailyBody"},r.a.createElement("div",{className:"dailyBody__yesterday dayContainer"},r.a.createElement("pre",{className:"dayContainer__header"},r.a.createElement("h2",null,s.month,".",s.day," ",s.name)),r.a.createElement(M,{index:s.index,bullets:a,setBullets:n}),a[s.index].map((function(e,t){return r.a.createElement("div",{className:"dayContainer__bulletContainer"},r.a.createElement("li",{className:"bulletContainer__bullet"},r.a.createElement("span",{className:"globalSymbol"},e.symbol),r.a.createElement("span",{className:"globalContent"},e.content)),r.a.createElement("button",{className:"bulletContainer__delete",onClick:u(s.index,t),type:"button"},"Delete"))}))),r.a.createElement("div",{className:"dailyBody__today dayContainer"},r.a.createElement("pre",{className:"dailyBody__today__header dayContainer__header"},r.a.createElement("h2",null,i.month,".",i.day," ",i.name)),r.a.createElement(M,{index:i.index,bullets:a,setBullets:n}),a[i.index].map((function(e,t){return r.a.createElement("div",{className:"dayContainer__bulletContainer"},r.a.createElement("li",{className:"bulletContainer__bullet"},r.a.createElement("span",{className:"globalSymbol"},e.symbol),r.a.createElement("span",{className:"globalContent"},e.content)),r.a.createElement("button",{className:"bulletContainer__delete",onClick:u(i.index,t),type:"button"},"Delete"))}))),r.a.createElement("div",{className:"dailyBody__tomorrow dayContainer"},r.a.createElement("pre",{className:"dayContainer__header"},r.a.createElement("h2",null,c.month,".",c.day," ",c.name)),r.a.createElement(M,{index:c.index,bullets:a,setBullets:n}),a[c.index].map((function(e,t){return r.a.createElement("div",{className:"dayContainer__bulletContainer"},r.a.createElement("li",{className:"bulletContainer__bullet"},r.a.createElement("span",{className:"globalSymbol"},e.symbol),r.a.createElement("span",{className:"globalContent"},e.content)),r.a.createElement("button",{className:"bulletContainer__delete",onClick:u(c.index,t),type:"button"},"Delete"))}))),r.a.createElement("div",{className:"dailyBody__afterTomorrow dayContainer"},r.a.createElement("pre",{className:"dayContainer__header"},r.a.createElement("h2",null,m.month,".",m.day," ",m.name)),r.a.createElement(M,{index:m.index,bullets:a,setBullets:n}),a[m.index].map((function(e,t){return r.a.createElement("div",{className:"dayContainer__bulletContainer"},r.a.createElement("li",{className:"bulletContainer__bullet"},r.a.createElement("span",{className:"globalSymbol"},e.symbol),r.a.createElement("span",{className:"globalContent"},e.content)),r.a.createElement("button",{className:"bulletContainer__delete",onClick:u(m.index,t),type:"button"},"Delete"))}))))},D=(a(38),function(e){var t=e.month,a=Object(l.useState)(""),n=Object(y.a)(a,2),o=n[0],s=n[1],i=Object(l.useState)(t.bullets),c=Object(y.a)(i,2),m=c[0],u=c[1],d=Object(l.useState)("."),b=Object(y.a)(d,2),p=b[0],f=b[1],v=function(e){return function(){_(t.id,null,e);var a=j(t.id);u(a)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"monthContainer__header"},t.name),r.a.createElement("form",{className:"month-container-form"},r.a.createElement("select",{onChange:function(e){f(e.target.value)}},r.a.createElement("option",{value:"."},"."),r.a.createElement("option",{value:"-"},"-"),r.a.createElement("option",{value:"o"},"o")),r.a.createElement("input",{type:"text",onChange:function(e){e.preventDefault(),s(e.target.value)}}),r.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault();var a={symbol:p,content:o};_(t.id,a);var n=j(t.id);u(n)}},"submit")),m.map((function(e,t){return r.a.createElement("div",{className:"dayContainer__bulletContainer"},r.a.createElement("li",{key:t,className:"bulletContainer__bullet"},r.a.createElement("span",{className:"globalSymbol"},e.symbol),r.a.createElement("span",{className:"globalContent"},e.content)),r.a.createElement("button",{className:"bulletContainer__delete",onClick:v(t),type:"button"},"Delete"))})))}),I=function(){var e=k();return r.a.createElement("div",{className:"future-container"},e.map((function(e){return r.a.createElement("div",{className:"month-container"},r.a.createElement(D,{month:e}))})))},L=function(e){var t=e.monthIndex,a=Object(l.useState)(""),n=Object(y.a)(a,2),o=n[0],s=n[1],i=Object(l.useState)("."),c=Object(y.a)(i,2),m=c[0],u=c[1],d=Object(l.useState)([]),b=Object(y.a)(d,2),p=b[0],f=b[1];return r.a.createElement("div",{className:"monthlyTask"},r.a.createElement("h1",{className:"monthlyHeader"},"Tasks"),r.a.createElement("div",{className:"monthlyTaskAdd"},r.a.createElement("select",{onChange:function(e){u(e.target.value)}},r.a.createElement("option",{value:"."},"."),r.a.createElement("option",{value:"-"},"-"),r.a.createElement("option",{value:"o"},"o")),r.a.createElement("input",{className:"monthlyTaskAdd__input",onChange:function(e){s(e.target.value)},type:"text"}),r.a.createElement("button",{className:"monthlyTaskAdd__button",onClick:function(e){var a={symbol:m,content:o};console.log("in add task");w(t,a),f(S()[t].tasks),document.getElementsByClassName("monthlyTaskAdd__input")[0].value=""},type:"button"},"Add")),p.map((function(e,a){return r.a.createElement("div",{className:"monthlyTaskTasks"},r.a.createElement("li",{className:"monthlyTaskTasks__bullet",key:a},r.a.createElement("span",{className:"globalSymbol"},e.symbol),r.a.createElement("span",{className:"globalContent"},e.content)),r.a.createElement("button",{className:"monthlyTaskTasks__deleteButton",onClick:(n=a,function(){w(t,null,n),f(S()[t].tasks),s("")}),type:"click"},"Delete"));var n})))},W=(a(39),function(){var e=(new Date).getMonth();return r.a.createElement("div",{className:"monthlyCalendarBody"},r.a.createElement(f,{class:"monthlyCalendarBody__calendar",monthIndex:e}),r.a.createElement(L,{monthIndex:e}))});N(),console.log("after local storage");s.a.render(r.a.createElement((function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"app-container"},r.a.createElement(m,null),r.a.createElement("div",{className:"main-body"},r.a.createElement(x,null),r.a.createElement(c.a,{path:"/daily",component:T}),r.a.createElement(c.a,{path:"/monthly",component:W}),r.a.createElement(c.a,{path:"/future",component:I}))))}),null),document.body)}},[[23,1,2]]]);
//# sourceMappingURL=main.75f3c9a3.chunk.js.map