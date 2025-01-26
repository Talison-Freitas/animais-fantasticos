/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={633:(t,e,n)=>{var r=n(738).default;function o(){"use strict";t.exports=o=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var e,n={},i=Object.prototype,a=i.hasOwnProperty,s=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",h=c.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,n){return t[e]=n}}function v(t,e,n,r){var o=e&&e.prototype instanceof L?e:L,i=Object.create(o.prototype),a=new _(r||[]);return s(i,"_invoke",{value:A(t,n,a)}),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=v;var m="suspendedStart",p="suspendedYield",y="executing",b="completed",g={};function L(){}function w(){}function E(){}var x={};f(x,u,(function(){return this}));var k=Object.getPrototypeOf,T=k&&k(k(D([])));T&&T!==i&&a.call(T,u)&&(x=T);var M=E.prototype=L.prototype=Object.create(x);function S(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function n(o,i,s,c){var u=d(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==r(h)&&a.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}var o;s(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function A(t,n,r){var o=m;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===b){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var c=q(s,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===m)throw o=b,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var u=d(t,n,r);if("normal"===u.type){if(o=r.done?b:p,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=b,r.method="throw",r.arg=u.arg)}}}function q(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,q(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=d(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function D(t){if(t||""===t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(a.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(r(t)+" is not iterable")}return w.prototype=E,s(M,"constructor",{value:E,configurable:!0}),s(E,"constructor",{value:w,configurable:!0}),w.displayName=f(E,h,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,f(t,h,"GeneratorFunction")),t.prototype=Object.create(M),t},n.awrap=function(t){return{__await:t}},S(C.prototype),f(C.prototype,l,(function(){return this})),n.AsyncIterator=C,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new C(v(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(M),f(M,h,"Generator"),f(M,u,(function(){return this})),f(M,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=D,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:D(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},n}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},738:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},756:(t,e,n)=>{var r=n(633)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t){var n=function(t){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(n)?n:n+""}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var a=function(){return i((function e(n,r){t(this,e),this.linksInternos=document.querySelectorAll(n),this.options=void 0===r?{block:"start",behavior:"smooth"}:r,this.scrollToSection=this.scrollToSection.bind(this)}),[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinkEvent(),this}}])}();function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var c=function(){return i((function e(n){var r,o;t(this,e),this.sections=document.querySelectorAll(n),this.windowMetade=.65*window.innerHeight,this.checkDistance=(r=this.checkDistance.bind(this),function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];o&&clearTimeout(o),o=setTimeout((function(){r.apply(void 0,e),o=null}),50)})}),[{key:"getDistance",value:function(){var t,e=this;this.distance=(t=this.sections,function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var n=t.offsetTop;return{element:t,offset:Math.floor(n-e.windowMetade)}}))}},{key:"checkDistance",value:function(){this.distance.forEach((function(t){window.scrollY>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}},{key:"addEventScroll",value:function(){window.addEventListener("scroll",this.checkDistance)}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),this.addEventScroll()),this}}])}(),u=function(){return i((function e(n){t(this,e),this.faqDt=document.querySelectorAll(n),this.activeClass="ativo"}),[{key:"toggleDt",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"addAccordionEvent",value:function(){var t=this;this.faqDt.forEach((function(e){e.addEventListener("click",(function(){t.toggleDt(e)}))}))}},{key:"init",value:function(){if(this.faqDt.length)return this.addAccordionEvent(),this.toggleDt(this.faqDt[0]),this}}])}(),l=function(){return i((function e(n,r){t(this,e),this.tabContent=document.querySelectorAll(n),this.menuLista=document.querySelector(r)}),[{key:"activeTab",value:function(t){this.tabContent.forEach((function(t){t.classList.remove("ativo"),t.classList.remove(t.dataset.anima)})),this.tabContent[t].classList.add("ativo"),this.tabContent[t].classList.add(this.tabContent[t].dataset.anima)}},{key:"addNavScrollEvent",value:function(){var t=this,e=-1;this.menuLista.addEventListener("scroll",(function(){var n;(n=t.menuLista.scrollTop<=300?0:t.menuLista.scrollTop<=650?1:t.menuLista.scrollTop<=1050?2:t.menuLista.scrollTop<=1450?3:t.menuLista.scrollTop<=1850?4:5)!==e&&(t.activeTab(n),e=n)}));var n=window.matchMedia("(max-width: 700px)");if(n&&n.matches){var r=-1;this.menuLista.addEventListener("scroll",(function(){var e;(e=t.menuLista.scrollTop<=200?0:t.menuLista.scrollTop<=450?1:t.menuLista.scrollTop<=700?2:t.menuLista.scrollTop<=950?3:t.menuLista.scrollTop<=1200?4:5)!==r&&(t.activeTab(e),r=e)}))}var o=window.matchMedia("(max-width: 500px)");if(o&&o.matches){var i=-1;this.menuLista.addEventListener("scroll",(function(){var e;(e=t.menuLista.scrollLeft<=200?0:t.menuLista.scrollLeft<=500?1:t.menuLista.scrollLeft<=800?2:t.menuLista.scrollLeft<=1100?3:t.menuLista.scrollLeft<=1400?4:5)!==i&&(t.activeTab(e),i=e)}))}}},{key:"init",value:function(){if(this.menuLista&&this.tabContent)return this.addNavScrollEvent(),this}}])}(),h=function(){return i((function e(n,r){t(this,e),this.tabMenu=document.querySelectorAll(n),this.tabContent=document.querySelectorAll(r),this.activeClass="ativo"}),[{key:"activeTab",value:function(t){var e=this;this.tabContent.forEach((function(t){t.classList.remove(e.activeClass)}));var n=this.tabContent[t].dataset.anima;this.tabContent[t].classList.add(this.activeClass,n)}},{key:"addTabEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){t.activeTab(n)}))}))}},{key:"init",value:function(){return this.tabMenu.length&&this.tabContent.length&&(this.addTabEvent(),this.activeTab(0)),this}}])}(),f=function(){return i((function e(n,r,o){t(this,e),this.modalContainer=document.querySelector(n),this.botaoAbrir=document.querySelector(r),this.botaoFechar=document.querySelector(o),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueExternoModal=this.cliqueExternoModal.bind(this)}),[{key:"toggleModal",value:function(){this.modalContainer.classList.toggle("ativo")}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal(t)}},{key:"cliqueExternoModal",value:function(t){t.target===this.modalContainer&&this.modalContainer.classList.remove("ativo")}},{key:"addModalEvents",value:function(){this.modalContainer.addEventListener("click",this.cliqueExternoModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.botaoAbrir.addEventListener("click",this.eventToggleModal)}},{key:"init",value:function(){if(this.modalContainer&&this.botaoAbrir&&this.botaoFechar)return this.addModalEvents(),this}}])}(),v=function(){return i((function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}),[{key:"onMouseOver",value:function(t){this.createTooltipBox(t.currentTarget),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave),t.currentTarget.addEventListener("mousemove",this.onMouseMove)}},{key:"onMouseLeave",value:function(t){this.tooltipBox.remove(),t.currentTarget.removeEventListener("mouseleave",this.onMouseLeave),t.currentTarget.removeEventListener("mousemove",this.onMouseMove)}},{key:"onMouseMove",value:function(t){this.tooltipBox.style.top=t.pageY- -18+"px",t.pageX+230>window.innerWidth?this.tooltipBox.style.left=t.pageX+-196+"px":this.tooltipBox.style.left=t.pageX+20+"px"}},{key:"createTooltipBox",value:function(t){var e=document.createElement("div");e.classList.add("tooltip"),document.body.appendChild(e),e.innerHTML=t.getAttribute("aria-label"),this.tooltipBox=e}},{key:"removeTooltipBox",value:function(t){t.remove()}},{key:"addTooltipEvent",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){if(this.tooltips.length)return this.addTooltipEvent(),this}}])}();function d(t,e,n){var r=document.documentElement,o="data-outside";function i(a){t.contains(a.target)||e.forEach((function(e){t.removeAttribute(o),r.removeEventListener(e,i),n()}))}t.hasAttribute(o)||e.forEach((function(e){setTimeout((function(){return r.addEventListener(e,i)})),t.setAttribute(o,"")}))}var m=function(){return i((function e(n,r){t(this,e),this.dropdownMenus=document.querySelectorAll(n),this.handleClick=this.handleClick.bind(this),this.events=r,this.activeClass="ativo"}),[{key:"addDropdownEvent",value:function(){var t=this;this.dropdownMenus.forEach((function(e){t.events.forEach((function(n){e.addEventListener(n,t.handleClick)}))}))}},{key:"handleClick",value:function(t){var e=this;t.preventDefault();var n=t.currentTarget;n.classList.toggle(this.activeClass),d(n,this.events,(function(){n.classList.remove(e.activeClass)}))}},{key:"init",value:function(){this.dropdownMenus.length&&this.addDropdownEvent()}}])}();function p(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function y(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){p(i,r,o,a,s,"next",t)}function s(t){p(i,r,o,a,s,"throw",t)}a(void 0)}))}}var b,g,L,w,E,x,k,T,M=n(756),S=n.n(M),C=function(){return i((function e(n,r,o){t(this,e),this.numeros=document.querySelectorAll(n),this.observeTarget=document.querySelector(r),this.observeClass=o,this.handleMutation=this.handleMutation.bind(this)}),[{key:"animaNumeros",value:function(){var t=this;this.numeros.forEach((function(e){t.constructor.incrementarNumero(e)}))}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observeTarget,{attributes:!0})}},{key:"handleMutation",value:function(){this.observeTarget.classList.contains(this.observeClass)&&(this.observer.disconnect(),this.animaNumeros())}},{key:"init",value:function(){if(this.numeros.length&&this.observeTarget)return this.addMutationObserver(),this}}],[{key:"incrementarNumero",value:function(t){var e=+t.innerText,n=e/100,r=0,o=setInterval((function(){r+=n,t.innerText=Math.floor(r),r>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())}}])}(),A=function(){return i((function e(n,r,o,i){t(this,e),this.numerosGrid=document.querySelector(n),this.element=r,this.elementClass=o,this.url=i}),[{key:"fetchAnimais",value:(e=y(S().mark((function t(e){var n,r=this;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:t.sent.forEach((function(t){var e=r.createAnimal(t);r.numerosGrid.appendChild(e)})),this.animaNumeros=new C("[data-numero]",".numeros","ativo"),this.animaNumeros.init(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(Error(t.t0));case 15:case"end":return t.stop()}}),t,this,[[0,12]])}))),function(t){return e.apply(this,arguments)})},{key:"createAnimal",value:function(t){var e=document.createElement(this.element);return e.classList.add(this.elementClass),e.innerHTML="<h3>".concat(t.specie,"</h3> <span data-numero>").concat(t.total,"</span>"),e}},{key:"init",value:function(){return this.fetchAnimais(this.url),this}}]);var e}(),q=function(){return i((function e(n,r){t(this,e),this.displayBtc=document.querySelector(n),this.url=r}),[{key:"fetchBitcoin",value:(e=y(S().mark((function t(e){var n,r,o;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,o=r.BRL.sell,this.displayBtc.innerText=(100/o).toFixed(5),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(Error(t.t0));case 14:case"end":return t.stop()}}),t,this,[[0,11]])}))),function(t){return e.apply(this,arguments)})},{key:"init",value:function(){if(this.displayBtc&&this.url)return this.fetchBitcoin(this.url),this}}]);var e}();new a("[data-interface='menu'] a[href^='#']").init(),new u("[data-anima='accordion'] dt").init(),new h("[data-tab='menu'] li","[data-tab='content'] section").init(),new f('[data-modal="container"]','[data-modal="abrir"]','[data-modal="fechar"]').init(),new l("[data-tab='content'] section","[data-tab='menu']").init(),new v("[data-tooltip]").init(),new A(".numeros-grid","div","numero-animal","./animaisapi.json").init(),new q(".btc-preco","https://blockchain.info/ticker").init(),new c("[data-anima='scroll']").init(),new m("[data-dropdown]",["click","touchstart"]).init(),function(){var t=document.querySelector("[data-menu='botao']"),e=document.querySelector("[data-menu='list']"),n=["click","touchstart"];function r(){e.classList.add("ativo"),t.classList.add("ativo"),d(e,n,(function(){e.classList.remove("ativo"),t.classList.remove("ativo")}))}t&&n.forEach((function(e){return t.addEventListener(e,r)}))}(),g=(b=document.querySelector("[data-semana]")).dataset.semana.split(",").map(Number),L=b.dataset.horario.split(",").map(Number),E=(w=new Date).getDay(),x=w.getHours(),k=-1!==g.indexOf(E),T=x>=L[0]&&x<L[1],k&&T&&b.classList.add("ativo")})()})();