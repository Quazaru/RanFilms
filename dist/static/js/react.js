!function(e){function t(t){for(var r,c,l=t[0],i=t[1],s=t[2],m=0,f=[];m<l.length;m++)c=l[m],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={1:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;o.push([148,3]),n()}({148:function(e,t,n){n(149),e.exports=n(362)},339:function(e,t,n){var r=n(13),a=n(340);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},340:function(e,t,n){},341:function(e,t,n){var r=n(13),a=n(342);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},342:function(e,t,n){},343:function(e,t,n){var r=n(13),a=n(344);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},344:function(e,t,n){},345:function(e,t,n){var r=n(13),a=n(346);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},346:function(e,t,n){},347:function(e,t,n){var r=n(13),a=n(348);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},348:function(e,t,n){},349:function(e,t,n){var r=n(13),a=n(350);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},350:function(e,t,n){},351:function(e,t,n){var r=n(13),a=n(352);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},352:function(e,t,n){},353:function(e,t,n){var r=n(13),a=n(354);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},354:function(e,t,n){},360:function(e,t,n){var r=n(13),a=n(361);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},361:function(e,t,n){},362:function(e,t,n){"use strict";n.r(t);n(71);var r=n(0),a=n.n(r),o=n(139),c=n.n(o),l=n(8);function i(e,t,n,r,a,o,c){try{var l=e[o](c),i=l.value}catch(e){return void n(e)}l.done?t(i):Promise.resolve(i).then(r,a)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){i(o,r,a,c,l,"next",e)}function l(e){i(o,r,a,c,l,"throw",e)}c(void 0)}))}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r,a,o;return t=e,(n=[{key:"getData",value:(o=s(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/albums/1/photos");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Failed to get content");case 5:return n=t.json(),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)}))),function(){return o.apply(this,arguments)})},{key:"getDataById",value:(a=s(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/photos/"+t);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Filed to get content, please try again");case 5:return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})}])&&u(t.prototype,n),r&&u(t,r),e}()),d=function(){return function(e){return function(t){return a.a.createElement(e,m({},t,{service:f}))}}},p=function(){return a.a.createElement("div",{className:"loading-spinner"},a.a.createElement("div",{className:"loading-spinner__header"},"Загрузка.."),a.a.createElement("img",{src:"".concat("./../static/assets/img/","loading-spinner.svg"),alt:"loading-spinner"}))},v=(n(339),function(e){var t=e.data;if(t){var n=t.title,r=t.url,o=t.id;t.thumbnailUrl;return a.a.createElement("div",{className:"content-card",key:o},a.a.createElement("div",{className:"content-card__preview"},a.a.createElement("img",{src:r,alt:n+"-preview"})),a.a.createElement("div",{className:"content-card__body"},a.a.createElement("div",{className:"content-card__title"},a.a.createElement("p",null,n)),a.a.createElement("div",{className:"content-card__description"},a.a.createElement("p",null,n+n+n+n+0+n))),a.a.createElement("div",{className:"content-card__footer"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("div",{className:"content-card__attribute"},a.a.createElement("div",{className:"sub_icon"},a.a.createElement("img",{src:"".concat("./../static/assets/img/","icons/views.svg"),alt:""})),12*o)),a.a.createElement("li",null,a.a.createElement("div",{className:"content-card__attribute "},a.a.createElement("div",{className:"sub_icon"},a.a.createElement("img",{src:"".concat("./../static/assets/img/","icons/star.svg"),alt:""})),o>10?o/10:o+1)),a.a.createElement("li",null,a.a.createElement("div",{className:"content-card__attribute "},a.a.createElement("div",{className:"sub_icon"},a.a.createElement("img",{src:"".concat("./../static/assets/img/","icons/date.svg"),alt:""})),o+2005)))))}return a.a.createElement(p,null)}),g=(n(341),function(e){var t=e.data,n=t.title,r=t.url;return a.a.createElement("div",{className:"content-card_min"},a.a.createElement("div",{className:"content-card_min__preview"},a.a.createElement("img",{src:r,alt:n+"-preview"})),a.a.createElement("div",{className:"content-card_min__title"},a.a.createElement("p",null,n)),a.a.createElement("ul",{className:"content-card_min__btns"},a.a.createElement("li",null,a.a.createElement("div",{className:"content-card_min__settings-btn"},a.a.createElement("img",{src:"".concat("./../static/assets/img/","icons/delete.svg"),alt:""})))))}),E=(n(343),function(e){var t=e.content,n=e.mode;if(t){var r=null;return"full"==n?(r=t.map((function(e){return a.a.createElement(v,{data:e,key:e.id})})),console.log(r)):r=t.map((function(e){return a.a.createElement(g,{data:e,key:e.id})})),a.a.createElement("div",{className:"content-tape"},r)}return a.a.createElement(p,null)}),h=d()((function(e){var t=e.data,n=e.mode,r=void 0===n?"full":n;return console.log(r),a.a.createElement(E,{content:t,mode:r})}));function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=d()((function(e){var t=e.service,n=y(Object(r.useState)(null),2),o=n[0],c=n[1];return Object(r.useEffect)((function(){t.getData().then((function(e){c(e)}))}),[]),o?a.a.createElement(h,{data:o}):a.a.createElement(p,null)}));n(345);function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Math.floor(Math.random()*(t-e)+e)},S=d()((function(e){var t=e.service,n=w(Object(r.useState)(null),2),o=n[0],c=n[1],l=w(Object(r.useState)(x(0,100)),2),i=l[0],s=l[1];return Object(r.useEffect)((function(){t.getDataById(i).then((function(e){c(e)}))}),[i]),a.a.createElement("div",{className:"generator"},a.a.createElement("div",{className:"generator__title"},"Случайный фильм:"),a.a.createElement(v,{data:o}),a.a.createElement("div",{className:"generator__btns"},a.a.createElement("div",{className:"generator__btn generator__btn_next main-btn",onClick:function(){s(x(0,100))}},a.a.createElement("div",{className:"sub_icon"},a.a.createElement("img",{src:"".concat("../../../assets/img","/icons/next.svg"),alt:""})),a.a.createElement("p",null,"Следующий")),a.a.createElement("div",{className:"generator__btn generator__btn_postpone main-btn"},a.a.createElement("div",{className:"sub_icon"},a.a.createElement("img",{src:"".concat("../../../assets/img","/icons/delay.svg"),alt:""})),a.a.createElement("p",null,"Отложить"))))}));var j=d()((function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),a.a.createElement(S,null)}));n(347);function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=d()((function(e){var t=e.service,n=O(Object(r.useState)(null),2),o=n[0],c=n[1];return Object(r.useEffect)((function(){t.getData().then((function(e){c(e)}))}),[]),o?a.a.createElement("div",{className:"favorite-page"},a.a.createElement("div",{className:"favorite-page__title"},"Ваши закладки:"),a.a.createElement("div",{className:"favorite__tape"},a.a.createElement(h,{mode:"min",data:o}))):a.a.createElement(p,null)})),k=(n(349),function(e){return a.a.createElement("form",{className:"sign-form",id:"signup-form"},a.a.createElement("div",{className:"sign-form__title"},"Регистрация"),a.a.createElement("div",{className:"sign-form__body"},a.a.createElement("div",{className:"sign-form__input"},a.a.createElement("p",null,"Имя"),a.a.createElement("input",{name:"login",type:"text",placeholder:"Имя"})),a.a.createElement("div",{className:"sign-form__input"},a.a.createElement("p",null,"E-mail"),a.a.createElement("input",{id:"sign-form__email",name:"email",type:"text",placeholder:"E-mail"})),a.a.createElement("div",{className:"sign-form__input"},a.a.createElement("p",null,"Пароль"),a.a.createElement("input",{name:"password",type:"text",placeholder:"Пароль"})),a.a.createElement("div",{className:"sign-form__input"},a.a.createElement("p",null,"Подтвердите пароль"),a.a.createElement("input",{name:"password",type:"text",placeholder:"Пароль"}))),a.a.createElement("div",{className:"sign-form__btn"},a.a.createElement("div",{className:"main-btn"},"Зарегистрироваться")))}),L=(n(351),function(e){return a.a.createElement("form",{className:"sign-form",id:"signin-form"},a.a.createElement("div",{className:"sign-form__title"},"Вход"),a.a.createElement("div",{className:"sign-form__body"},a.a.createElement("div",{className:"sign-form__input"},a.a.createElement("p",null,"E-mail"),a.a.createElement("input",{id:"sign-form__email",name:"email",type:"text",placeholder:"E-mail",maxLength:"24"})),a.a.createElement("div",{className:"sign-form__input"},a.a.createElement("p",null,"Пароль"),a.a.createElement("input",{name:"password",type:"text",placeholder:"Пароль",maxLength:"24"}))),a.a.createElement("div",{className:"sign-form__btn"},a.a.createElement("div",{className:"main-btn"},"Войти")))}),P=function(e){var t=e.formSelector,n=e.triggerSelector,r=e.minLength,a=void 0===r?3:r,o=e.maxLength,c=void 0===o?25:o,l=e.settings,i=(l.signupPasswordSelector,l.emailSelector),s=void 0===i?null:i,u=document.querySelector(t),m=u.querySelectorAll("input");u.querySelector(n).addEventListener("click",(function(){var e=!0;(m.forEach((function(t){t.classList.remove("icorrect-input"),(t.value.length<a||t.value.length>c)&&(t.classList.add("icorrect-input"),e=!1)})),s)&&u.querySelectorAll(s).forEach((function(t){t.classList.remove("icorrect-input"),-1==t.value.indexOf("@")&&(t.classList.add("icorrect-input"),console.log(t),e=!1)}));e&&m.forEach((function(e){e.classList.remove("icorrect-input")}))}))};function T(e,t,n,r,a,o,c){try{var l=e[o](c),i=l.value}catch(e){return void n(e)}l.done?t(i):Promise.resolve(i).then(r,a)}function I(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){T(o,r,a,c,l,"next",e)}function l(e){T(o,r,a,c,l,"throw",e)}c(void 0)}))}}function q(){return(q=I(regeneratorRuntime.mark((function e(t,n){var r,a,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>2&&void 0!==o[2]?o[2]:null,a=r?{method:"POST",body:n,headers:r}:{method:"POST",body:n,headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-with":"XMLHttpRequest"}},e.abrupt("return",fetch(t,a));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=function(e,t){return q.apply(this,arguments)},C=function(e,t){var n=document.querySelector(e),r=n.querySelector(t);console.log(n,r),r.addEventListener("click",(function(){var e=new FormData(n);R("https://jsonplaceholder.typicode.com/posts",e),n.querySelectorAll("input").forEach((function(e){e.value=""}))}))},D=(n(353),function(e){return Object(r.useEffect)((function(){setTimeout((function(){P({formSelector:"#signup-form",triggerSelector:".sign-form__btn",minLength:3,maxLength:32,settings:{emailSelector:"#sign-form__email"}}),C("#signin-form",".sign-form__btn")}),300),setTimeout((function(){P({formSelector:"#signin-form",triggerSelector:".sign-form__btn",minLength:3,maxLength:32,settings:{emailSelector:"#sign-form__email"}}),C("#signin-form",".sign-form__btn")}),300)}),[]),a.a.createElement("div",{className:"auth-page"},a.a.createElement("div",{className:"auth-page__title"},"Авторизация"),a.a.createElement("div",{className:"auth-page__forms"},a.a.createElement(k,null),a.a.createElement("div",{className:"auth-page__divider"}),a.a.createElement(L,null)))}),F=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"container"},a.a.createElement(l.b,{exact:!0,path:"/",component:b}),a.a.createElement(l.b,{exact:!0,path:"/random",component:j}),a.a.createElement(l.b,{exact:!0,path:"/favorite",component:M}),a.a.createElement(l.b,{exact:!0,path:"/auth",component:D})))},U=n(45),$=(n(360),function(e){return a.a.createElement("header",{className:"header"},a.a.createElement("nav",{className:"container"},a.a.createElement("div",{className:"logo"},a.a.createElement("img",{src:"".concat("./../static/assets/img/","icons/logo.svg"),alt:""})),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(U.a,{to:"/"},"Главная")),a.a.createElement("li",null,a.a.createElement(U.a,{to:"/random"},"Генератор")),a.a.createElement("li",null,a.a.createElement(U.a,{to:"/favorite"},"Закладки")),a.a.createElement("li",null,a.a.createElement(U.a,{to:"/auth"},"Авторизация")))))});c.a.render(a.a.createElement(l.a,null,a.a.createElement($,null),a.a.createElement(l.d,null,a.a.createElement(F,null))),document.querySelector("#app"))},71:function(e,t,n){var r=n(13),a=n(72);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},72:function(e,t,n){}});