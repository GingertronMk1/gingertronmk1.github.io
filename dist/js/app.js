<<<<<<< HEAD
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==_typeof(e)&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=2)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==("undefined"==typeof window?"undefined":_typeof(window))&&(n=window)}e.exports=n},function(e,t,n){e.exports=n(3)},function(e,t,n){n(9),n(7),n(8),e.exports=n(10)},function(e,t,n){"use strict";(function(t,n){var r=Object.freeze({});function i(e){return null==e}function o(e){return null!=e}function a(e){return!0===e}function s(e){return"string"==typeof e||"number"==typeof e||"symbol"==_typeof(e)||"boolean"==typeof e}function c(e){return null!==e&&"object"==_typeof(e)}var u=Object.prototype.toString;function l(e){return"[object Object]"===u.call(e)}function f(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function p(e){return o(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function d(e){return null==e?"":Array.isArray(e)||l(e)&&e.toString===u?JSON.stringify(e,null,2):String(e)}function v(e){var t=parseFloat(e);return isNaN(t)?e:t}function h(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}var m=h("slot,component",!0),y=h("key,ref,slot,slot-scope,is");function g(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function b(e,t){return _.call(e,t)}function w(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}var $=/-(\w)/g,x=w(function(e){return e.replace($,function(e,t){return t?t.toUpperCase():""})}),C=w(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),k=/\B([A-Z])/g,A=w(function(e){return e.replace(k,"-$1").toLowerCase()}),S=Function.prototype.bind?function(e,t){return e.bind(t)}:function(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n};function O(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function T(e,t){for(var n in t)e[n]=t[n];return e}function E(e){for(var t={},n=0;n<e.length;n++)e[n]&&T(t,e[n]);return t}function j(e,t,n){}var N=function(e,t,n){return!1},I=function(e){return e};function L(e,t){if(e===t)return!0;var n=c(e),r=c(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),o=Array.isArray(t);if(i&&o)return e.length===t.length&&e.every(function(e,n){return L(e,t[n])});if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||o)return!1;var a=Object.keys(e),s=Object.keys(t);return a.length===s.length&&a.every(function(n){return L(e[n],t[n])})}catch(e){return!1}}function M(e,t){for(var n=0;n<e.length;n++)if(L(e[n],t))return n;return-1}function D(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var F="data-server-rendered",P=["component","directive","filter"],R=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],H={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:N,isReservedAttr:N,isUnknownElement:N,getTagNamespace:j,parsePlatformTagName:I,mustUseProp:N,async:!0,_lifecycleHooks:R},U=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function B(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var z,q=new RegExp("[^"+U.source+".$_\\d]"),V="__proto__"in{},K="undefined"!=typeof window,J="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,W=J&&WXEnvironment.platform.toLowerCase(),G=K&&window.navigator.userAgent.toLowerCase(),Z=G&&/msie|trident/.test(G),X=G&&G.indexOf("msie 9.0")>0,Y=G&&G.indexOf("edge/")>0,Q=(G&&G.indexOf("android"),G&&/iphone|ipad|ipod|ios/.test(G)||"ios"===W),ee=(G&&/chrome\/\d+/.test(G),G&&/phantomjs/.test(G),G&&G.match(/firefox\/(\d+)/)),te={}.watch,ne=!1;if(K)try{var re={};Object.defineProperty(re,"passive",{get:function(){ne=!0}}),window.addEventListener("test-passive",null,re)}catch(r){}var ie=function(){return void 0===z&&(z=!K&&!J&&void 0!==t&&t.process&&"server"===t.process.env.VUE_ENV),z},oe=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ae(e){return"function"==typeof e&&/native code/.test(e.toString())}var se,ce="undefined"!=typeof Symbol&&ae(Symbol)&&"undefined"!=typeof Reflect&&ae(Reflect.ownKeys);se="undefined"!=typeof Set&&ae(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ue=j,le=0,fe=function(){this.id=le++,this.subs=[]};fe.prototype.addSub=function(e){this.subs.push(e)},fe.prototype.removeSub=function(e){g(this.subs,e)},fe.prototype.depend=function(){fe.target&&fe.target.addDep(this)},fe.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},fe.target=null;var pe=[];function de(e){pe.push(e),fe.target=e}function ve(){pe.pop(),fe.target=pe[pe.length-1]}var he=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},me={child:{configurable:!0}};me.child.get=function(){return this.componentInstance},Object.defineProperties(he.prototype,me);var ye=function(e){void 0===e&&(e="");var t=new he;return t.text=e,t.isComment=!0,t};function ge(e){return new he(void 0,void 0,void 0,String(e))}function _e(e){var t=new he(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var be=Array.prototype,we=Object.create(be);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=be[e];B(we,e,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=t.apply(this,n),a=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var $e=Object.getOwnPropertyNames(we),xe=!0;function Ce(e){xe=e}var ke=function(e){var t;this.value=e,this.dep=new fe,this.vmCount=0,B(e,"__ob__",this),Array.isArray(e)?(V?(t=we,e.__proto__=t):function(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];B(e,o,t[o])}}(e,we,$e),this.observeArray(e)):this.walk(e)};function Ae(e,t){var n;if(c(e)&&!(e instanceof he))return b(e,"__ob__")&&e.__ob__ instanceof ke?n=e.__ob__:xe&&!ie()&&(Array.isArray(e)||l(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new ke(e)),t&&n&&n.vmCount++,n}function Se(e,t,n,r,i){var o=new fe,a=Object.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(n=e[t]);var u=!i&&Ae(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=s?s.call(e):n;return fe.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(t)&&function e(t){for(var n=void 0,r=0,i=t.length;r<i;r++)(n=t[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&e(n)}(t))),t},set:function(t){var r=s?s.call(e):n;t===r||t!=t&&r!=r||s&&!c||(c?c.call(e,t):n=t,u=!i&&Ae(t),o.notify())}})}}function Oe(e,t,n){if(Array.isArray(e)&&f(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(Se(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function Te(e,t){if(Array.isArray(e)&&f(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||b(e,t)&&(delete e[t],n&&n.dep.notify())}}ke.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)Se(e,t[n])},ke.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Ae(e[t])};var Ee=H.optionMergeStrategies;function je(e,t){if(!t)return e;for(var n,r,i,o=ce?Reflect.ownKeys(t):Object.keys(t),a=0;a<o.length;a++)"__ob__"!==(n=o[a])&&(r=e[n],i=t[n],b(e,n)?r!==i&&l(r)&&l(i)&&je(r,i):Oe(e,n,i));return e}function Ne(e,t,n){return n?function(){var r="function"==typeof t?t.call(n,n):t,i="function"==typeof e?e.call(n,n):e;return r?je(r,i):i}:t?e?function(){return je("function"==typeof t?t.call(this,this):t,"function"==typeof e?e.call(this,this):e)}:t:e}function Ie(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(n):n}function Le(e,t,n,r){var i=Object.create(e||null);return t?T(i,t):i}Ee.data=function(e,t,n){return n?Ne(e,t,n):t&&"function"!=typeof t?e:Ne(e,t)},R.forEach(function(e){Ee[e]=Ie}),P.forEach(function(e){Ee[e+"s"]=Le}),Ee.watch=function(e,t,n,r){if(e===te&&(e=void 0),t===te&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var o in T(i,e),t){var a=i[o],s=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Ee.props=Ee.methods=Ee.inject=Ee.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return T(i,e),t&&T(i,t),i},Ee.provide=Ne;var Me=function(e,t){return void 0===t?e:t};function De(e,t,n){if("function"==typeof t&&(t=t.options),function(e,t){var n=e.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[x(i)]={type:null});else if(l(n))for(var a in n)i=n[a],o[x(a)]=l(i)?i:{type:i};e.props=o}}(t),function(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var a=n[o];r[o]=l(a)?T({from:o},a):{from:a}}}}(t),function(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}(t),!t._base&&(t.extends&&(e=De(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=De(e,t.mixins[r],n);var o,a={};for(o in e)s(o);for(o in t)b(e,o)||s(o);function s(r){var i=Ee[r]||Me;a[r]=i(e[r],t[r],n,r)}return a}function Fe(e,t,n,r){if("string"==typeof n){var i=e[t];if(b(i,n))return i[n];var o=x(n);if(b(i,o))return i[o];var a=C(o);return b(i,a)?i[a]:i[n]||i[o]||i[a]}}function Pe(e,t,n,r){var i=t[e],o=!b(n,e),a=n[e],s=Ue(Boolean,i.type);if(s>-1)if(o&&!b(i,"default"))a=!1;else if(""===a||a===A(e)){var c=Ue(String,i.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=function(e,t,n){if(b(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"==typeof r&&"Function"!==Re(t.type)?r.call(e):r}}(r,i,e);var u=xe;Ce(!0),Ae(a),Ce(u)}return a}function Re(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function He(e,t){return Re(e)===Re(t)}function Ue(e,t){if(!Array.isArray(t))return He(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(He(t[n],e))return n;return-1}function Be(e,t,n){de();try{if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,e,t,n))return}catch(e){qe(e,r,"errorCaptured hook")}}qe(e,t,n)}finally{ve()}}function ze(e,t,n,r,i){var o;try{(o=n?e.apply(t,n):e.call(t))&&!o._isVue&&p(o)&&!o._handled&&(o.catch(function(e){return Be(e,r,i+" (Promise/async)")}),o._handled=!0)}catch(e){Be(e,r,i)}return o}function qe(e,t,n){if(H.errorHandler)try{return H.errorHandler.call(null,e,t,n)}catch(t){t!==e&&Ve(t,null,"config.errorHandler")}Ve(e,t,n)}function Ve(e,t,n){if(!K&&!J||"undefined"==typeof console)throw e;console.error(e)}var Ke,Je=!1,We=[],Ge=!1;function Ze(){Ge=!1;var e=We.slice(0);We.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!=typeof Promise&&ae(Promise)){var Xe=Promise.resolve();Ke=function(){Xe.then(Ze),Q&&setTimeout(j)},Je=!0}else if(Z||"undefined"==typeof MutationObserver||!ae(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Ke=void 0!==n&&ae(n)?function(){n(Ze)}:function(){setTimeout(Ze,0)};else{var Ye=1,Qe=new MutationObserver(Ze),et=document.createTextNode(String(Ye));Qe.observe(et,{characterData:!0}),Ke=function(){Ye=(Ye+1)%2,et.data=String(Ye)},Je=!0}function tt(e,t){var n;if(We.push(function(){if(e)try{e.call(t)}catch(e){Be(e,t,"nextTick")}else n&&n(t)}),Ge||(Ge=!0,Ke()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){n=e})}var nt=new se;function rt(e){!function e(t,n){var r,i,o=Array.isArray(t);if(!(!o&&!c(t)||Object.isFrozen(t)||t instanceof he)){if(t.__ob__){var a=t.__ob__.dep.id;if(n.has(a))return;n.add(a)}if(o)for(r=t.length;r--;)e(t[r],n);else for(r=(i=Object.keys(t)).length;r--;)e(t[i[r]],n)}}(e,nt),nt.clear()}var it=w(function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return{name:e=r?e.slice(1):e,once:n,capture:r,passive:t}});function ot(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return ze(r,null,arguments,t,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)ze(i[o],null,e,t,"v-on handler")}return n.fns=e,n}function at(e,t,n,r,o,s){var c,u,l,f;for(c in e)u=e[c],l=t[c],f=it(c),i(u)||(i(l)?(i(u.fns)&&(u=e[c]=ot(u,s)),a(f.once)&&(u=e[c]=o(f.name,u,f.capture)),n(f.name,u,f.capture,f.passive,f.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)i(e[c])&&r((f=it(c)).name,t[c],f.capture)}function st(e,t,n){var r;e instanceof he&&(e=e.data.hook||(e.data.hook={}));var s=e[t];function c(){n.apply(this,arguments),g(r.fns,c)}i(s)?r=ot([c]):o(s.fns)&&a(s.merged)?(r=s).fns.push(c):r=ot([s,c]),r.merged=!0,e[t]=r}function ct(e,t,n,r,i){if(o(t)){if(b(t,n))return e[n]=t[n],i||delete t[n],!0;if(b(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function ut(e){return s(e)?[ge(e)]:Array.isArray(e)?function e(t,n){var r,c,u,l,f=[];for(r=0;r<t.length;r++)i(c=t[r])||"boolean"==typeof c||(l=f[u=f.length-1],Array.isArray(c)?c.length>0&&(lt((c=e(c,(n||"")+"_"+r))[0])&&lt(l)&&(f[u]=ge(l.text+c[0].text),c.shift()),f.push.apply(f,c)):s(c)?lt(l)?f[u]=ge(l.text+c):""!==c&&f.push(ge(c)):lt(c)&&lt(l)?f[u]=ge(l.text+c.text):(a(t._isVList)&&o(c.tag)&&i(c.key)&&o(n)&&(c.key="__vlist"+n+"_"+r+"__"),f.push(c)));return f}(e):void 0}function lt(e){return o(e)&&o(e.text)&&!1===e.isComment}function ft(e,t){if(e){for(var n=Object.create(null),r=ce?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){for(var a=e[o].from,s=t;s;){if(s._provided&&b(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s&&"default"in e[o]){var c=e[o].default;n[o]="function"==typeof c?c.call(t):c}}}return n}}function pt(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(dt)&&delete n[u];return n}function dt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function vt(e,t,n){var i,o=Object.keys(t).length>0,a=e?!!e.$stable:!o,s=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&n&&n!==r&&s===n.$key&&!o&&!n.$hasNormal)return n;for(var c in i={},e)e[c]&&"$"!==c[0]&&(i[c]=ht(t,c,e[c]))}else i={};for(var u in t)u in i||(i[u]=mt(t,u));return e&&Object.isExtensible(e)&&(e._normalized=i),B(i,"$stable",a),B(i,"$key",s),B(i,"$hasNormal",o),i}function ht(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({});return(e=e&&"object"==_typeof(e)&&!Array.isArray(e)?[e]:ut(e))&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function mt(e,t){return function(){return e[t]}}function yt(e,t){var n,r,i,a,s;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(c(e))if(ce&&e[Symbol.iterator]){n=[];for(var u=e[Symbol.iterator](),l=u.next();!l.done;)n.push(t(l.value,n.length)),l=u.next()}else for(a=Object.keys(e),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=t(e[s],s,r);return o(n)||(n=[]),n._isVList=!0,n}function gt(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=T(T({},r),n)),i=o(n)||t):i=this.$slots[e]||t;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function _t(e){return Fe(this.$options,"filters",e)||I}function bt(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function wt(e,t,n,r,i){var o=H.keyCodes[t]||n;return i&&r&&!H.keyCodes[t]?bt(i,r):o?bt(o,e):r?A(r)!==t:void 0}function $t(e,t,n,r,i){if(n&&c(n)){var o;Array.isArray(n)&&(n=E(n));var a=function(a){if("class"===a||"style"===a||y(a))o=e;else{var s=e.attrs&&e.attrs.type;o=r||H.mustUseProp(t,s,a)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=x(a),u=A(a);c in o||u in o||(o[a]=n[a],i&&((e.on||(e.on={}))["update:"+a]=function(e){n[a]=e}))};for(var s in n)a(s)}return e}function xt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||kt(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),"__static__"+e,!1),r}function Ct(e,t,n){return kt(e,"__once__"+t+(n?"_"+n:""),!0),e}function kt(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&At(e[r],t+"_"+r,n);else At(e,t,n)}function At(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function St(e,t){if(t&&l(t)){var n=e.on=e.on?T({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}return e}function Ot(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var o=e[i];Array.isArray(o)?Ot(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return r&&(t.$key=r),t}function Tt(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"==typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Et(e,t){return"string"==typeof e?t+e:e}function jt(e){e._o=Ct,e._n=v,e._s=d,e._l=yt,e._t=gt,e._q=L,e._i=M,e._m=xt,e._f=_t,e._k=wt,e._b=$t,e._v=ge,e._e=ye,e._u=Ot,e._g=St,e._d=Tt,e._p=Et}function Nt(e,t,n,i,o){var s,c=this,u=o.options;b(i,"_uid")?(s=Object.create(i))._original=i:(s=i,i=i._original);var l=a(u._compiled),f=!l;this.data=e,this.props=t,this.children=n,this.parent=i,this.listeners=e.on||r,this.injections=ft(u.inject,i),this.slots=function(){return c.$slots||vt(e.scopedSlots,c.$slots=pt(n,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return vt(e.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=vt(e.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,r){var o=Rt(s,e,t,n,r,f);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(e,t,n,r){return Rt(s,e,t,n,r,f)}}function It(e,t,n,r,i){var o=_e(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function Lt(e,t){for(var n in t)e[x(n)]=t[n]}jt(Nt.prototype);var Mt={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;Mt.prepatch(n,n)}else(e.componentInstance=function(e,t){var n={_isComponent:!0,_parentVnode:e,parent:Gt},r=e.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}(e)).$mount(t?e.elm:void 0,t)},prepatch:function(e,t){var n=t.componentOptions;!function(e,t,n,i,o){var a=i.data.scopedSlots,s=e.$scopedSlots,c=!!(a&&!a.$stable||s!==r&&!s.$stable||a&&e.$scopedSlots.$key!==a.$key),u=!!(o||e.$options._renderChildren||c);if(e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=o,e.$attrs=i.data.attrs||r,e.$listeners=n||r,t&&e.$options.props){Ce(!1);for(var l=e._props,f=e.$options._propKeys||[],p=0;p<f.length;p++){var d=f[p],v=e.$options.props;l[d]=Pe(d,v,t,e)}Ce(!0),e.$options.propsData=t}n=n||r;var h=e.$options._parentListeners;e.$options._parentListeners=n,Wt(e,n,h),u&&(e.$slots=pt(o,i.context),e.$forceUpdate())}(t.componentInstance=e.componentInstance,n.propsData,n.listeners,t,n.children)},insert:function(e){var t,n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,Qt(r,"mounted")),e.data.keepAlive&&(n._isMounted?((t=r)._inactive=!1,tn.push(t)):Yt(r,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?function e(t,n){if(!(n&&(t._directInactive=!0,Xt(t))||t._inactive)){t._inactive=!0;for(var r=0;r<t.$children.length;r++)e(t.$children[r]);Qt(t,"deactivated")}}(t,!0):t.$destroy())}},Dt=Object.keys(Mt);function Ft(e,t,n,s,u){if(!i(e)){var l=n.$options._base;if(c(e)&&(e=l.extend(e)),"function"==typeof e){var f;if(i(e.cid)&&void 0===(e=function(e,t){if(a(e.error)&&o(e.errorComp))return e.errorComp;if(o(e.resolved))return e.resolved;var n=Ut;if(n&&o(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),a(e.loading)&&o(e.loadingComp))return e.loadingComp;if(n&&!o(e.owners)){var r=e.owners=[n],s=!0,u=null,l=null;n.$on("hook:destroyed",function(){return g(r,n)});var f=function(e){for(var t=0,n=r.length;t<n;t++)r[t].$forceUpdate();e&&(r.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},d=D(function(n){e.resolved=Bt(n,t),s?r.length=0:f(!0)}),v=D(function(t){o(e.errorComp)&&(e.error=!0,f(!0))}),h=e(d,v);return c(h)&&(p(h)?i(e.resolved)&&h.then(d,v):p(h.component)&&(h.component.then(d,v),o(h.error)&&(e.errorComp=Bt(h.error,t)),o(h.loading)&&(e.loadingComp=Bt(h.loading,t),0===h.delay?e.loading=!0:u=setTimeout(function(){u=null,i(e.resolved)&&i(e.error)&&(e.loading=!0,f(!1))},h.delay||200)),o(h.timeout)&&(l=setTimeout(function(){l=null,i(e.resolved)&&v(null)},h.timeout)))),s=!1,e.loading?e.loadingComp:e.resolved}}(f=e,l)))return function(e,t,n,r,i){var o=ye();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}(f,t,n,s,u);t=t||{},wn(e),o(t.model)&&function(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var i=t.on||(t.on={}),a=i[r],s=t.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[r]=[s].concat(a)):i[r]=s}(e.options,t);var d=function(e,t,n){var r=t.options.props;if(!i(r)){var a={},s=e.attrs,c=e.props;if(o(s)||o(c))for(var u in r){var l=A(u);ct(a,c,u,l,!0)||ct(a,s,u,l,!1)}return a}}(t,e);if(a(e.options.functional))return function(e,t,n,i,a){var s=e.options,c={},u=s.props;if(o(u))for(var l in u)c[l]=Pe(l,u,t||r);else o(n.attrs)&&Lt(c,n.attrs),o(n.props)&&Lt(c,n.props);var f=new Nt(n,c,a,i,e),p=s.render.call(null,f._c,f);if(p instanceof he)return It(p,n,f.parent,s);if(Array.isArray(p)){for(var d=ut(p)||[],v=new Array(d.length),h=0;h<d.length;h++)v[h]=It(d[h],n,f.parent,s);return v}}(e,d,t,n,s);var v=t.on;if(t.on=t.nativeOn,a(e.options.abstract)){var h=t.slot;t={},h&&(t.slot=h)}!function(e){for(var t=e.hook||(e.hook={}),n=0;n<Dt.length;n++){var r=Dt[n],i=t[r],o=Mt[r];i===o||i&&i._merged||(t[r]=i?Pt(o,i):o)}}(t);var m=e.options.name||u;return new he("vue-component-"+e.cid+(m?"-"+m:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:d,listeners:v,tag:u,children:s},f)}}}function Pt(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function Rt(e,t,n,r,u,l){return(Array.isArray(n)||s(n))&&(u=r,r=n,n=void 0),a(l)&&(u=2),function(e,t,n,r,s){return o(n)&&o(n.__ob__)?ye():(o(n)&&o(n.is)&&(t=n.is),t?(Array.isArray(r)&&"function"==typeof r[0]&&((n=n||{}).scopedSlots={default:r[0]},r.length=0),2===s?r=ut(r):1===s&&(r=function(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}(r)),"string"==typeof t?(l=e.$vnode&&e.$vnode.ns||H.getTagNamespace(t),u=H.isReservedTag(t)?new he(H.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!o(f=Fe(e.$options,"components",t))?new he(t,n,r,void 0,void 0,e):Ft(f,n,e,r,t)):u=Ft(t,n,e,r),Array.isArray(u)?u:o(u)?(o(l)&&function e(t,n,r){if(t.ns=n,"foreignObject"===t.tag&&(n=void 0,r=!0),o(t.children))for(var s=0,c=t.children.length;s<c;s++){var u=t.children[s];o(u.tag)&&(i(u.ns)||a(r)&&"svg"!==u.tag)&&e(u,n,r)}}(u,l),o(n)&&function(e){c(e.style)&&rt(e.style),c(e.class)&&rt(e.class)}(n),u):ye()):ye());var u,l,f}(e,t,n,r,u)}var Ht,Ut=null;function Bt(e,t){return(e.__esModule||ce&&"Module"===e[Symbol.toStringTag])&&(e=e.default),c(e)?t.extend(e):e}function zt(e){return e.isComment&&e.asyncFactory}function qt(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(o(n)&&(o(n.componentOptions)||zt(n)))return n}}function Vt(e,t){Ht.$on(e,t)}function Kt(e,t){Ht.$off(e,t)}function Jt(e,t){var n=Ht;return function r(){null!==t.apply(null,arguments)&&n.$off(e,r)}}function Wt(e,t,n){Ht=e,at(t,n||{},Vt,Kt,Jt,e),Ht=void 0}var Gt=null;function Zt(e){var t=Gt;return Gt=e,function(){Gt=t}}function Xt(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function Yt(e,t){if(t){if(e._directInactive=!1,Xt(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Yt(e.$children[n]);Qt(e,"activated")}}function Qt(e,t){de();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,o=n.length;i<o;i++)ze(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),ve()}var en=[],tn=[],nn={},rn=!1,on=!1,an=0,sn=0,cn=Date.now;if(K&&!Z){var un=window.performance;un&&"function"==typeof un.now&&cn()>document.createEvent("Event").timeStamp&&(cn=function(){return un.now()})}function ln(){var e,t;for(sn=cn(),on=!0,en.sort(function(e,t){return e.id-t.id}),an=0;an<en.length;an++)(e=en[an]).before&&e.before(),t=e.id,nn[t]=null,e.run();var n=tn.slice(),r=en.slice();an=en.length=tn.length=0,nn={},rn=on=!1,function(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Yt(e[t],!0)}(n),function(e){for(var t=e.length;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Qt(r,"updated")}}(r),oe&&H.devtools&&oe.emit("flush")}var fn=0,pn=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++fn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new se,this.newDepIds=new se,this.expression="","function"==typeof t?this.getter=t:(this.getter=function(e){if(!q.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}(t),this.getter||(this.getter=j)),this.value=this.lazy?void 0:this.get()};pn.prototype.get=function(){var e;de(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;Be(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&rt(e),ve(),this.cleanupDeps()}return e},pn.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},pn.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},pn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(e){var t=e.id;if(null==nn[t]){if(nn[t]=!0,on){for(var n=en.length-1;n>an&&en[n].id>e.id;)n--;en.splice(n+1,0,e)}else en.push(e);rn||(rn=!0,tt(ln))}}(this)},pn.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||c(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){Be(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},pn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},pn.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},pn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var dn={enumerable:!0,configurable:!0,get:j,set:j};function vn(e,t,n){dn.get=function(){return this[t][n]},dn.set=function(e){this[t][n]=e},Object.defineProperty(e,n,dn)}var hn={lazy:!0};function mn(e,t,n){var r=!ie();"function"==typeof n?(dn.get=r?yn(t):gn(n),dn.set=j):(dn.get=n.get?r&&!1!==n.cache?yn(t):gn(n.get):j,dn.set=n.set||j),Object.defineProperty(e,t,dn)}function yn(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),fe.target&&t.depend(),t.value}}function gn(e){return function(){return e.call(this,this)}}function _n(e,t,n,r){return l(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}var bn=0;function wn(e){var t=e.options;if(e.super){var n=wn(e.super);if(n!==e.superOptions){e.superOptions=n;var r=function(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}(e);r&&T(e.extendOptions,r),(t=e.options=De(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function $n(e){this._init(e)}function xn(e){return e&&(e.Ctor.options.name||e.tag)}function Cn(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:(n=e,"[object RegExp]"===u.call(n)&&e.test(t));var n}function kn(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=xn(a.componentOptions);s&&!t(s)&&An(n,o,r,i)}}}function An(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,g(n,t)}$n.prototype._init=function(e){var t=this;t._uid=bn++,t._isVue=!0,e&&e._isComponent?function(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}(t,e):t.$options=De(wn(t.constructor),e||{},t),t._renderProxy=t,t._self=t,function(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}(t),function(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Wt(e,t)}(t),function(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,i=n&&n.context;e.$slots=pt(t._renderChildren,i),e.$scopedSlots=r,e._c=function(t,n,r,i){return Rt(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Rt(e,t,n,r,i,!0)};var o=n&&n.data;Se(e,"$attrs",o&&o.attrs||r,null,!0),Se(e,"$listeners",t._parentListeners||r,null,!0)}(t),Qt(t,"beforeCreate"),function(e){var t=ft(e.$options.inject,e);t&&(Ce(!1),Object.keys(t).forEach(function(n){Se(e,n,t[n])}),Ce(!0))}(t),function(e){e._watchers=[];var t=e.$options;t.props&&function(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[];e.$parent&&Ce(!1);var o=function(o){i.push(o);var a=Pe(o,t,n,e);Se(r,o,a),o in e||vn(e,"_props",o)};for(var a in t)o(a);Ce(!0)}(e,t.props),t.methods&&function(e,t){for(var n in e.$options.props,t)e[n]="function"!=typeof t[n]?j:S(t[n],e)}(e,t.methods),t.data?function(e){var t=e.$options.data;l(t=e._data="function"==typeof t?function(e,t){de();try{return e.call(t,t)}catch(e){return Be(e,t,"data()"),{}}finally{ve()}}(t,e):t||{})||(t={});for(var n,r=Object.keys(t),i=e.$options.props,o=(e.$options.methods,r.length);o--;){var a=r[o];i&&b(i,a)||36!==(n=(a+"").charCodeAt(0))&&95!==n&&vn(e,"_data",a)}Ae(t,!0)}(e):Ae(e._data={},!0),t.computed&&function(e,t){var n=e._computedWatchers=Object.create(null),r=ie();for(var i in t){var o=t[i],a="function"==typeof o?o:o.get;r||(n[i]=new pn(e,a||j,j,hn)),i in e||mn(e,i,o)}}(e,t.computed),t.watch&&t.watch!==te&&function(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)_n(e,n,r[i]);else _n(e,n,r)}}(e,t.watch)}(t),function(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}(t),Qt(t,"created"),t.$options.el&&t.$mount(t.$options.el)},function(e){Object.defineProperty(e.prototype,"$data",{get:function(){return this._data}}),Object.defineProperty(e.prototype,"$props",{get:function(){return this._props}}),e.prototype.$set=Oe,e.prototype.$delete=Te,e.prototype.$watch=function(e,t,n){if(l(t))return _n(this,e,t,n);(n=n||{}).user=!0;var r=new pn(this,e,t,n);if(n.immediate)try{t.call(this,r.value)}catch(e){Be(e,this,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}($n),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,o=e.length;i<o;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var o,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;for(var s=a.length;s--;)if((o=a[s])===t||o.fn===t){a.splice(s,1);break}return n},e.prototype.$emit=function(e){var t=this._events[e];if(t){t=t.length>1?O(t):t;for(var n=O(arguments,1),r='event handler for "'+e+'"',i=0,o=t.length;i<o;i++)ze(t[i],this,n,this,r)}return this}}($n),function(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=Zt(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Qt(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||g(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Qt(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}($n),function(e){jt(e.prototype),e.prototype.$nextTick=function(e){return tt(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=vt(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{Ut=t,e=r.call(t._renderProxy,t.$createElement)}catch(n){Be(n,t,"render"),e=t._vnode}finally{Ut=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof he||(e=ye()),e.parent=i,e}}($n);var Sn=[String,RegExp,Array],On={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Sn,exclude:Sn,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)An(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(t){kn(e,function(e){return Cn(t,e)})}),this.$watch("exclude",function(t){kn(e,function(e){return!Cn(t,e)})})},render:function(){var e=this.$slots.default,t=qt(e),n=t&&t.componentOptions;if(n){var r=xn(n),i=this.include,o=this.exclude;if(i&&(!r||!Cn(i,r))||o&&r&&Cn(o,r))return t;var a=this.cache,s=this.keys,c=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;a[c]?(t.componentInstance=a[c].componentInstance,g(s,c),s.push(c)):(a[c]=t,s.push(c),this.max&&s.length>parseInt(this.max)&&An(a,s[0],s,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}}};!function(e){var t={get:function(){return H}};Object.defineProperty(e,"config",t),e.util={warn:ue,extend:T,mergeOptions:De,defineReactive:Se},e.set=Oe,e.delete=Te,e.nextTick=tt,e.observable=function(e){return Ae(e),e},e.options=Object.create(null),P.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,T(e.options.components,On),function(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=O(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this}}(e),function(e){e.mixin=function(e){return this.options=De(this.options,e),this}}(e),function(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=t++,a.options=De(n.options,e),a.super=n,a.options.props&&function(e){var t=e.options.props;for(var n in t)vn(e.prototype,"_props",n)}(a),a.options.computed&&function(e){var t=e.options.computed;for(var n in t)mn(e.prototype,n,t[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,P.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=T({},a.options),i[r]=a,a}}(e),function(e){P.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&l(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}(e)}($n),Object.defineProperty($n.prototype,"$isServer",{get:ie}),Object.defineProperty($n.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty($n,"FunctionalRenderContext",{value:Nt}),$n.version="2.6.12";var Tn=h("style,class"),En=h("input,textarea,option,select,progress"),jn=function(e,t,n){return"value"===n&&En(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Nn=h("contenteditable,draggable,spellcheck"),In=h("events,caret,typing,plaintext-only"),Ln=h("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),Mn="http://www.w3.org/1999/xlink",Dn=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Fn=function(e){return Dn(e)?e.slice(6,e.length):""},Pn=function(e){return null==e||!1===e};function Rn(e,t){return{staticClass:Hn(e.staticClass,t.staticClass),class:o(e.class)?[e.class,t.class]:t.class}}function Hn(e,t){return e?t?e+" "+t:e:t||""}function Un(e){return Array.isArray(e)?function(e){for(var t,n="",r=0,i=e.length;r<i;r++)o(t=Un(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}(e):c(e)?function(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}(e):"string"==typeof e?e:""}var Bn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},zn=h("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),qn=h("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Vn=function(e){return zn(e)||qn(e)};function Kn(e){return qn(e)?"svg":"math"===e?"math":void 0}var Jn=Object.create(null),Wn=h("text,number,password,search,email,tel,url");function Gn(e){return"string"==typeof e?document.querySelector(e)||document.createElement("div"):e}var Zn=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n},createElementNS:function(e,t){return document.createElementNS(Bn[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setStyleScope:function(e,t){e.setAttribute(t,"")}}),Xn={create:function(e,t){Yn(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Yn(e,!0),Yn(t))},destroy:function(e){Yn(e,!0)}};function Yn(e,t){var n=e.data.ref;if(o(n)){var r=e.context,i=e.componentInstance||e.elm,a=r.$refs;t?Array.isArray(a[n])?g(a[n],i):a[n]===i&&(a[n]=void 0):e.data.refInFor?Array.isArray(a[n])?a[n].indexOf(i)<0&&a[n].push(i):a[n]=[i]:a[n]=i}}var Qn=new he("",{},[]),er=["create","activate","update","remove","destroy"];function tr(e,t){return e.key===t.key&&(e.tag===t.tag&&e.isComment===t.isComment&&o(e.data)===o(t.data)&&function(e,t){if("input"!==e.tag)return!0;var n,r=o(n=e.data)&&o(n=n.attrs)&&n.type,i=o(n=t.data)&&o(n=n.attrs)&&n.type;return r===i||Wn(r)&&Wn(i)}(e,t)||a(e.isAsyncPlaceholder)&&e.asyncFactory===t.asyncFactory&&i(t.asyncFactory.error))}function nr(e,t,n){var r,i,a={};for(r=t;r<=n;++r)o(i=e[r].key)&&(a[i]=r);return a}var rr={create:ir,update:ir,destroy:function(e){ir(e,Qn)}};function ir(e,t){(e.data.directives||t.data.directives)&&function(e,t){var n,r,i,o=e===Qn,a=t===Qn,s=ar(e.data.directives,e.context),c=ar(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,cr(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(cr(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)cr(u[n],"inserted",t,e)};o?st(t,"insert",f):f()}if(l.length&&st(t,"postpatch",function(){for(var n=0;n<l.length;n++)cr(l[n],"componentUpdated",t,e)}),!o)for(n in s)c[n]||cr(s[n],"unbind",e,e,a)}(e,t)}var or=Object.create(null);function ar(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)(r=e[n]).modifiers||(r.modifiers=or),i[sr(r)]=r,r.def=Fe(t.$options,"directives",r.name);return i}function sr(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function cr(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(r){Be(r,n.context,"directive "+e.name+" "+t+" hook")}}var ur=[Xn,rr];function lr(e,t){var n=t.componentOptions;if(!(o(n)&&!1===n.Ctor.options.inheritAttrs||i(e.data.attrs)&&i(t.data.attrs))){var r,a,s=t.elm,c=e.data.attrs||{},u=t.data.attrs||{};for(r in o(u.__ob__)&&(u=t.data.attrs=T({},u)),u)a=u[r],c[r]!==a&&fr(s,r,a);for(r in(Z||Y)&&u.value!==c.value&&fr(s,"value",u.value),c)i(u[r])&&(Dn(r)?s.removeAttributeNS(Mn,Fn(r)):Nn(r)||s.removeAttribute(r))}}function fr(e,t,n){e.tagName.indexOf("-")>-1?pr(e,t,n):Ln(t)?Pn(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Nn(t)?e.setAttribute(t,function(e,t){return Pn(t)||"false"===t?"false":"contenteditable"===e&&In(t)?t:"true"}(t,n)):Dn(t)?Pn(n)?e.removeAttributeNS(Mn,Fn(t)):e.setAttributeNS(Mn,t,n):pr(e,t,n)}function pr(e,t,n){if(Pn(n))e.removeAttribute(t);else{if(Z&&!X&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){e.addEventListener("input",function t(n){n.stopImmediatePropagation(),e.removeEventListener("input",t)}),e.__ieph=!0}e.setAttribute(t,n)}}var dr={create:lr,update:lr};function vr(e,t){var n=t.elm,r=t.data,a=e.data;if(!(i(r.staticClass)&&i(r.class)&&(i(a)||i(a.staticClass)&&i(a.class)))){var s=function(e){for(var t=e.data,n=e,r=e;o(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(t=Rn(r.data,t));for(;o(n=n.parent);)n&&n.data&&(t=Rn(t,n.data));return function(e,t){return o(e)||o(t)?Hn(e,Un(t)):""}(t.staticClass,t.class)}(t),c=n._transitionClasses;o(c)&&(s=Hn(s,Un(c))),s!==n._prevClass&&(n.setAttribute("class",s),n._prevClass=s)}}var hr,mr,yr,gr,_r,br,wr={create:vr,update:vr},$r=/[\w).+\-_$\]]/;function xr(e){var t,n,r,i,o,a=!1,s=!1,c=!1,u=!1,l=0,f=0,p=0,d=0;for(r=0;r<e.length;r++)if(n=t,t=e.charCodeAt(r),a)39===t&&92!==n&&(a=!1);else if(s)34===t&&92!==n&&(s=!1);else if(c)96===t&&92!==n&&(c=!1);else if(u)47===t&&92!==n&&(u=!1);else if(124!==t||124===e.charCodeAt(r+1)||124===e.charCodeAt(r-1)||l||f||p){switch(t){case 34:s=!0;break;case 39:a=!0;break;case 96:c=!0;break;case 40:p++;break;case 41:p--;break;case 91:f++;break;case 93:f--;break;case 123:l++;break;case 125:l--}if(47===t){for(var v=r-1,h=void 0;v>=0&&" "===(h=e.charAt(v));v--);h&&$r.test(h)||(u=!0)}}else void 0===i?(d=r+1,i=e.slice(0,r).trim()):m();function m(){(o||(o=[])).push(e.slice(d,r).trim()),d=r+1}if(void 0===i?i=e.slice(0,r).trim():0!==d&&m(),o)for(r=0;r<o.length;r++)i=Cr(i,o[r]);return i}function Cr(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+(")"!==i?","+i:i)}function kr(e,t){console.error("[Vue compiler]: "+e)}function Ar(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function Sr(e,t,n,r,i){(e.props||(e.props=[])).push(Dr({name:t,value:n,dynamic:i},r)),e.plain=!1}function Or(e,t,n,r,i){(i?e.dynamicAttrs||(e.dynamicAttrs=[]):e.attrs||(e.attrs=[])).push(Dr({name:t,value:n,dynamic:i},r)),e.plain=!1}function Tr(e,t,n,r){e.attrsMap[t]=n,e.attrsList.push(Dr({name:t,value:n},r))}function Er(e,t,n,r,i,o,a,s){(e.directives||(e.directives=[])).push(Dr({name:t,rawName:n,value:r,arg:i,isDynamicArg:o,modifiers:a},s)),e.plain=!1}function jr(e,t,n){return n?"_p("+t+',"'+e+'")':e+t}function Nr(e,t,n,i,o,a,s,c){var u;(i=i||r).right?c?t="("+t+")==='click'?'contextmenu':("+t+")":"click"===t&&(t="contextmenu",delete i.right):i.middle&&(c?t="("+t+")==='click'?'mouseup':("+t+")":"click"===t&&(t="mouseup")),i.capture&&(delete i.capture,t=jr("!",t,c)),i.once&&(delete i.once,t=jr("~",t,c)),i.passive&&(delete i.passive,t=jr("&",t,c)),i.native?(delete i.native,u=e.nativeEvents||(e.nativeEvents={})):u=e.events||(e.events={});var l=Dr({value:n.trim(),dynamic:c},s);i!==r&&(l.modifiers=i);var f=u[t];Array.isArray(f)?o?f.unshift(l):f.push(l):u[t]=f?o?[l,f]:[f,l]:l,e.plain=!1}function Ir(e,t,n){var r=Lr(e,":"+t)||Lr(e,"v-bind:"+t);if(null!=r)return xr(r);if(!1!==n){var i=Lr(e,t);if(null!=i)return JSON.stringify(i)}}function Lr(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var i=e.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===t){i.splice(o,1);break}return n&&delete e.attrsMap[t],r}function Mr(e,t){for(var n=e.attrsList,r=0,i=n.length;r<i;r++){var o=n[r];if(t.test(o.name))return n.splice(r,1),o}}function Dr(e,t){return t&&(null!=t.start&&(e.start=t.start),null!=t.end&&(e.end=t.end)),e}function Fr(e,t,n){var r=n||{},i=r.number,o="$$v";r.trim&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(o="_n("+o+")");var a=Pr(t,o);e.model={value:"("+t+")",expression:JSON.stringify(t),callback:"function ($$v) {"+a+"}"}}function Pr(e,t){var n=function(e){if(e=e.trim(),hr=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<hr-1)return(gr=e.lastIndexOf("."))>-1?{exp:e.slice(0,gr),key:'"'+e.slice(gr+1)+'"'}:{exp:e,key:null};for(mr=e,gr=_r=br=0;!Hr();)Ur(yr=Rr())?zr(yr):91===yr&&Br(yr);return{exp:e.slice(0,_r),key:e.slice(_r+1,br)}}(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function Rr(){return mr.charCodeAt(++gr)}function Hr(){return gr>=hr}function Ur(e){return 34===e||39===e}function Br(e){var t=1;for(_r=gr;!Hr();)if(Ur(e=Rr()))zr(e);else if(91===e&&t++,93===e&&t--,0===t){br=gr;break}}function zr(e){for(var t=e;!Hr()&&(e=Rr())!==t;);}var qr;function Vr(e,t,n){var r=qr;return function i(){null!==t.apply(null,arguments)&&Wr(e,i,n,r)}}var Kr=Je&&!(ee&&Number(ee[1])<=53);function Jr(e,t,n,r){if(Kr){var i=sn,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}qr.addEventListener(e,t,ne?{capture:n,passive:r}:n)}function Wr(e,t,n,r){(r||qr).removeEventListener(e,t._wrapper||t,n)}function Gr(e,t){if(!i(e.data.on)||!i(t.data.on)){var n=t.data.on||{},r=e.data.on||{};qr=t.elm,function(e){if(o(e.__r)){var t=Z?"change":"input";e[t]=[].concat(e.__r,e[t]||[]),delete e.__r}o(e.__c)&&(e.change=[].concat(e.__c,e.change||[]),delete e.__c)}(n),at(n,r,Jr,Wr,Vr,t.context),qr=void 0}}var Zr,Xr={create:Gr,update:Gr};function Yr(e,t){if(!i(e.data.domProps)||!i(t.data.domProps)){var n,r,a=t.elm,s=e.data.domProps||{},c=t.data.domProps||{};for(n in o(c.__ob__)&&(c=t.data.domProps=T({},c)),s)n in c||(a[n]="");for(n in c){if(r=c[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===s[n])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===n&&"PROGRESS"!==a.tagName){a._value=r;var u=i(r)?"":String(r);Qr(a,u)&&(a.value=u)}else if("innerHTML"===n&&qn(a.tagName)&&i(a.innerHTML)){(Zr=Zr||document.createElement("div")).innerHTML="<svg>"+r+"</svg>";for(var l=Zr.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;l.firstChild;)a.appendChild(l.firstChild)}else if(r!==s[n])try{a[n]=r}catch(e){}}}}function Qr(e,t){return!e.composing&&("OPTION"===e.tagName||function(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}(e,t)||function(e,t){var n=e.value,r=e._vModifiers;if(o(r)){if(r.number)return v(n)!==v(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}(e,t))}var ei={create:Yr,update:Yr},ti=w(function(e){var t={},n=/:(.+)/;return e.split(/;(?![^(]*\))/g).forEach(function(e){if(e){var r=e.split(n);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t});function ni(e){var t=ri(e.style);return e.staticStyle?T(e.staticStyle,t):t}function ri(e){return Array.isArray(e)?E(e):"string"==typeof e?ti(e):e}var ii,oi=/^--/,ai=/\s*!important$/,si=function(e,t,n){if(oi.test(t))e.style.setProperty(t,n);else if(ai.test(n))e.style.setProperty(A(t),n.replace(ai,""),"important");else{var r=ui(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},ci=["Webkit","Moz","ms"],ui=w(function(e){if(ii=ii||document.createElement("div").style,"filter"!==(e=x(e))&&e in ii)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<ci.length;n++){var r=ci[n]+t;if(r in ii)return r}});function li(e,t){var n=t.data,r=e.data;if(!(i(n.staticStyle)&&i(n.style)&&i(r.staticStyle)&&i(r.style))){var a,s,c=t.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},f=u||l,p=ri(t.data.style)||{};t.data.normalizedStyle=o(p.__ob__)?T({},p):p;var d=function(e,t){for(var n,r={},i=e;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=ni(i.data))&&T(r,n);(n=ni(e.data))&&T(r,n);for(var o=e;o=o.parent;)o.data&&(n=ni(o.data))&&T(r,n);return r}(t);for(s in f)i(d[s])&&si(c,s,"");for(s in d)(a=d[s])!==f[s]&&si(c,s,null==a?"":a)}}var fi={create:li,update:li},pi=/\s+/;function di(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(pi).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function vi(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(pi).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?e.setAttribute("class",n):e.removeAttribute("class")}}function hi(e){if(e){if("object"==_typeof(e)){var t={};return!1!==e.css&&T(t,mi(e.name||"v")),T(t,e),t}return"string"==typeof e?mi(e):void 0}}var mi=w(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),yi=K&&!X,gi="transition",_i="animation",bi="transition",wi="transitionend",$i="animation",xi="animationend";yi&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(bi="WebkitTransition",wi="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&($i="WebkitAnimation",xi="webkitAnimationEnd"));var Ci=K?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function ki(e){Ci(function(){Ci(e)})}function Ai(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),di(e,t))}function Si(e,t){e._transitionClasses&&g(e._transitionClasses,t),vi(e,t)}function Oi(e,t,n){var r=Ei(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===gi?wi:xi,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}var Ti=/\b(transform|all)(,|$)/;function Ei(e,t){var n,r=window.getComputedStyle(e),i=(r[bi+"Delay"]||"").split(", "),o=(r[bi+"Duration"]||"").split(", "),a=ji(i,o),s=(r[$i+"Delay"]||"").split(", "),c=(r[$i+"Duration"]||"").split(", "),u=ji(s,c),l=0,f=0;return t===gi?a>0&&(n=gi,l=a,f=o.length):t===_i?u>0&&(n=_i,l=u,f=c.length):f=(n=(l=Math.max(a,u))>0?a>u?gi:_i:null)?n===gi?o.length:c.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===gi&&Ti.test(r[bi+"Property"])}}function ji(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Ni(t)+Ni(e[n])}))}function Ni(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Ii(e,t){var n=e.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=hi(e.data.transition);if(!i(r)&&!o(n._enterCb)&&1===n.nodeType){for(var a=r.css,s=r.type,u=r.enterClass,l=r.enterToClass,f=r.enterActiveClass,p=r.appearClass,d=r.appearToClass,h=r.appearActiveClass,m=r.beforeEnter,y=r.enter,g=r.afterEnter,_=r.enterCancelled,b=r.beforeAppear,w=r.appear,$=r.afterAppear,x=r.appearCancelled,C=r.duration,k=Gt,A=Gt.$vnode;A&&A.parent;)k=A.context,A=A.parent;var S=!k._isMounted||!e.isRootInsert;if(!S||w||""===w){var O=S&&p?p:u,T=S&&h?h:f,E=S&&d?d:l,j=S&&b||m,N=S&&"function"==typeof w?w:y,I=S&&$||g,L=S&&x||_,M=v(c(C)?C.enter:C),F=!1!==a&&!X,P=Di(N),R=n._enterCb=D(function(){F&&(Si(n,E),Si(n,T)),R.cancelled?(F&&Si(n,O),L&&L(n)):I&&I(n),n._enterCb=null});e.data.show||st(e,"insert",function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),N&&N(n,R)}),j&&j(n),F&&(Ai(n,O),Ai(n,T),ki(function(){Si(n,O),R.cancelled||(Ai(n,E),P||(Mi(M)?setTimeout(R,M):Oi(n,s,R)))})),e.data.show&&(t&&t(),N&&N(n,R)),F||P||R()}}}function Li(e,t){var n=e.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=hi(e.data.transition);if(i(r)||1!==n.nodeType)return t();if(!o(n._leaveCb)){var a=r.css,s=r.type,u=r.leaveClass,l=r.leaveToClass,f=r.leaveActiveClass,p=r.beforeLeave,d=r.leave,h=r.afterLeave,m=r.leaveCancelled,y=r.delayLeave,g=r.duration,_=!1!==a&&!X,b=Di(d),w=v(c(g)?g.leave:g),$=n._leaveCb=D(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),_&&(Si(n,l),Si(n,f)),$.cancelled?(_&&Si(n,u),m&&m(n)):(t(),h&&h(n)),n._leaveCb=null});y?y(x):x()}function x(){$.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),p&&p(n),_&&(Ai(n,u),Ai(n,f),ki(function(){Si(n,u),$.cancelled||(Ai(n,l),b||(Mi(w)?setTimeout($,w):Oi(n,s,$)))})),d&&d(n,$),_||b||$())}}function Mi(e){return"number"==typeof e&&!isNaN(e)}function Di(e){if(i(e))return!1;var t=e.fns;return o(t)?Di(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Fi(e,t){!0!==t.data.show&&Ii(t)}var Pi=function(e){var t,n,r={},c=e.modules,u=e.nodeOps;for(t=0;t<er.length;++t)for(r[er[t]]=[],n=0;n<c.length;++n)o(c[n][er[t]])&&r[er[t]].push(c[n][er[t]]);function l(e){var t=u.parentNode(e);o(t)&&u.removeChild(t,e)}function f(e,t,n,i,s,c,l){if(o(e.elm)&&o(c)&&(e=c[l]=_e(e)),e.isRootInsert=!s,!function(e,t,n,i){var s=e.data;if(o(s)){var c=o(e.componentInstance)&&s.keepAlive;if(o(s=s.hook)&&o(s=s.init)&&s(e,!1),o(e.componentInstance))return p(e,t),d(n,e.elm,i),a(c)&&function(e,t,n,i){for(var a,s=e;s.componentInstance;)if(o(a=(s=s.componentInstance._vnode).data)&&o(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a](Qn,s);t.push(s);break}d(n,e.elm,i)}(e,t,n,i),!0}}(e,t,n,i)){var f=e.data,h=e.children,m=e.tag;o(m)?(e.elm=e.ns?u.createElementNS(e.ns,m):u.createElement(m,e),g(e),v(e,h,t),o(f)&&y(e,t),d(n,e.elm,i)):a(e.isComment)?(e.elm=u.createComment(e.text),d(n,e.elm,i)):(e.elm=u.createTextNode(e.text),d(n,e.elm,i))}}function p(e,t){o(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,m(e)?(y(e,t),g(e)):(Yn(e),t.push(e))}function d(e,t,n){o(e)&&(o(n)?u.parentNode(n)===e&&u.insertBefore(e,t,n):u.appendChild(e,t))}function v(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)f(t[r],n,e.elm,null,!0,t,r);else s(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function m(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return o(e.tag)}function y(e,n){for(var i=0;i<r.create.length;++i)r.create[i](Qn,e);o(t=e.data.hook)&&(o(t.create)&&t.create(Qn,e),o(t.insert)&&n.push(e))}function g(e){var t;if(o(t=e.fnScopeId))u.setStyleScope(e.elm,t);else for(var n=e;n;)o(t=n.context)&&o(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),n=n.parent;o(t=Gt)&&t!==e.context&&t!==e.fnContext&&o(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function _(e,t,n,r,i,o){for(;r<=i;++r)f(n[r],o,e,t,!1,n,r)}function b(e){var t,n,i=e.data;if(o(i))for(o(t=i.hook)&&o(t=t.destroy)&&t(e),t=0;t<r.destroy.length;++t)r.destroy[t](e);if(o(t=e.children))for(n=0;n<e.children.length;++n)b(e.children[n])}function w(e,t,n){for(;t<=n;++t){var r=e[t];o(r)&&(o(r.tag)?($(r),b(r)):l(r.elm))}}function $(e,t){if(o(t)||o(e.data)){var n,i=r.remove.length+1;for(o(t)?t.listeners+=i:t=function(e,t){function n(){0==--n.listeners&&l(e)}return n.listeners=t,n}(e.elm,i),o(n=e.componentInstance)&&o(n=n._vnode)&&o(n.data)&&$(n,t),n=0;n<r.remove.length;++n)r.remove[n](e,t);o(n=e.data.hook)&&o(n=n.remove)?n(e,t):t()}else l(e.elm)}function x(e,t,n,r){for(var i=n;i<r;i++){var a=t[i];if(o(a)&&tr(e,a))return i}}function C(e,t,n,s,c,l){if(e!==t){o(t.elm)&&o(s)&&(t=s[c]=_e(t));var p=t.elm=e.elm;if(a(e.isAsyncPlaceholder))o(t.asyncFactory.resolved)?S(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(a(t.isStatic)&&a(e.isStatic)&&t.key===e.key&&(a(t.isCloned)||a(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,v=t.data;o(v)&&o(d=v.hook)&&o(d=d.prepatch)&&d(e,t);var h=e.children,y=t.children;if(o(v)&&m(t)){for(d=0;d<r.update.length;++d)r.update[d](e,t);o(d=v.hook)&&o(d=d.update)&&d(e,t)}i(t.text)?o(h)&&o(y)?h!==y&&function(e,t,n,r,a){for(var s,c,l,p=0,d=0,v=t.length-1,h=t[0],m=t[v],y=n.length-1,g=n[0],b=n[y],$=!a;p<=v&&d<=y;)i(h)?h=t[++p]:i(m)?m=t[--v]:tr(h,g)?(C(h,g,r,n,d),h=t[++p],g=n[++d]):tr(m,b)?(C(m,b,r,n,y),m=t[--v],b=n[--y]):tr(h,b)?(C(h,b,r,n,y),$&&u.insertBefore(e,h.elm,u.nextSibling(m.elm)),h=t[++p],b=n[--y]):tr(m,g)?(C(m,g,r,n,d),$&&u.insertBefore(e,m.elm,h.elm),m=t[--v],g=n[++d]):(i(s)&&(s=nr(t,p,v)),i(c=o(g.key)?s[g.key]:x(g,t,p,v))?f(g,r,e,h.elm,!1,n,d):tr(l=t[c],g)?(C(l,g,r,n,d),t[c]=void 0,$&&u.insertBefore(e,l.elm,h.elm)):f(g,r,e,h.elm,!1,n,d),g=n[++d]);p>v?_(e,i(n[y+1])?null:n[y+1].elm,n,d,y,r):d>y&&w(t,p,v)}(p,h,y,n,l):o(y)?(o(e.text)&&u.setTextContent(p,""),_(p,null,y,0,y.length-1,n)):o(h)?w(h,0,h.length-1):o(e.text)&&u.setTextContent(p,""):e.text!==t.text&&u.setTextContent(p,t.text),o(v)&&o(d=v.hook)&&o(d=d.postpatch)&&d(e,t)}}}function k(e,t,n){if(a(n)&&o(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var A=h("attrs,class,staticClass,staticStyle,key");function S(e,t,n,r){var i,s=t.tag,c=t.data,u=t.children;if(r=r||c&&c.pre,t.elm=e,a(t.isComment)&&o(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(o(c)&&(o(i=c.hook)&&o(i=i.init)&&i(t,!0),o(i=t.componentInstance)))return p(t,n),!0;if(o(s)){if(o(u))if(e.hasChildNodes())if(o(i=c)&&o(i=i.domProps)&&o(i=i.innerHTML)){if(i!==e.innerHTML)return!1}else{for(var l=!0,f=e.firstChild,d=0;d<u.length;d++){if(!f||!S(f,u[d],n,r)){l=!1;break}f=f.nextSibling}if(!l||f)return!1}else v(t,u,n);if(o(c)){var h=!1;for(var m in c)if(!A(m)){h=!0,y(t,n);break}!h&&c.class&&rt(c.class)}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,s){if(!i(t)){var c,l=!1,p=[];if(i(e))l=!0,f(t,p);else{var d=o(e.nodeType);if(!d&&tr(e,t))C(e,t,p,null,null,s);else{if(d){if(1===e.nodeType&&e.hasAttribute(F)&&(e.removeAttribute(F),n=!0),a(n)&&S(e,t,p))return k(t,p,!0),e;c=e,e=new he(u.tagName(c).toLowerCase(),{},[],void 0,c)}var v=e.elm,h=u.parentNode(v);if(f(t,p,v._leaveCb?null:h,u.nextSibling(v)),o(t.parent))for(var y=t.parent,g=m(t);y;){for(var _=0;_<r.destroy.length;++_)r.destroy[_](y);if(y.elm=t.elm,g){for(var $=0;$<r.create.length;++$)r.create[$](Qn,y);var x=y.data.hook.insert;if(x.merged)for(var A=1;A<x.fns.length;A++)x.fns[A]()}else Yn(y);y=y.parent}o(h)?w([e],0,0):o(e.tag)&&b(e)}}return k(t,p,l),t.elm}o(e)&&b(e)}}({nodeOps:Zn,modules:[dr,wr,Xr,ei,fi,K?{create:Fi,activate:Fi,remove:function(e,t){!0!==e.data.show?Li(e,t):t()}}:{}].concat(ur)});X&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Ki(e,"input")});var Ri={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?st(n,"postpatch",function(){Ri.componentUpdated(e,t,n)}):Hi(e,t,n.context),e._vOptions=[].map.call(e.options,zi)):("textarea"===n.tag||Wn(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",qi),e.addEventListener("compositionend",Vi),e.addEventListener("change",Vi),X&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Hi(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,zi);i.some(function(e,t){return!L(e,r[t])})&&(e.multiple?t.value.some(function(e){return Bi(e,i)}):t.value!==t.oldValue&&Bi(t.value,i))&&Ki(e,"change")}}};function Hi(e,t,n){Ui(e,t,n),(Z||Y)&&setTimeout(function(){Ui(e,t,n)},0)}function Ui(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=M(r,zi(a))>-1,a.selected!==o&&(a.selected=o);else if(L(zi(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function Bi(e,t){return t.every(function(t){return!L(t,e)})}function zi(e){return"_value"in e?e._value:e.value}function qi(e){e.target.composing=!0}function Vi(e){e.target.composing&&(e.target.composing=!1,Ki(e.target,"input"))}function Ki(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Ji(e){return!e.componentInstance||e.data&&e.data.transition?e:Ji(e.componentInstance._vnode)}var Wi={model:Ri,show:{bind:function(e,t,n){var r=t.value,i=(n=Ji(n)).data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Ii(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;!r!=!t.oldValue&&((n=Ji(n)).data&&n.data.transition?(n.data.show=!0,r?Ii(n,function(){e.style.display=e.__vOriginalDisplay}):Li(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},Gi={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Zi(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Zi(qt(t.children)):e}function Xi(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[x(o)]=i[o];return t}function Yi(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}var Qi=function(e){return e.tag||zt(e)},eo=function(e){return"show"===e.name},to={name:"transition",props:Gi,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(Qi)).length){var r=this.mode,i=n[0];if(function(e){for(;e=e.parent;)if(e.data.transition)return!0}(this.$vnode))return i;var o=Zi(i);if(!o)return i;if(this._leaving)return Yi(e,i);var a="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?a+"comment":a+o.tag:s(o.key)?0===String(o.key).indexOf(a)?o.key:a+o.key:o.key;var c=(o.data||(o.data={})).transition=Xi(this),u=this._vnode,l=Zi(u);if(o.data.directives&&o.data.directives.some(eo)&&(o.data.show=!0),l&&l.data&&!function(e,t){return t.key===e.key&&t.tag===e.tag}(o,l)&&!zt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var f=l.data.transition=T({},c);if("out-in"===r)return this._leaving=!0,st(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),Yi(e,i);if("in-out"===r){if(zt(o))return u;var p,d=function(){p()};st(c,"afterEnter",d),st(c,"enterCancelled",d),st(f,"delayLeave",function(e){p=e})}}return i}}},no=T({tag:String,moveClass:String},Gi);function ro(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function io(e){e.data.newPos=e.elm.getBoundingClientRect()}function oo(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}delete no.mode;var ao={Transition:to,TransitionGroup:{props:no,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Zt(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=Xi(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):l.push(p)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(ro),e.forEach(io),e.forEach(oo),this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Ai(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(wi,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(wi,e),n._moveCb=null,Si(n,t))})}}))},methods:{hasMove:function(e,t){if(!yi)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){vi(n,e)}),di(n,t),n.style.display="none",this.$el.appendChild(n);var r=Ei(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};$n.config.mustUseProp=jn,$n.config.isReservedTag=Vn,$n.config.isReservedAttr=Tn,$n.config.getTagNamespace=Kn,$n.config.isUnknownElement=function(e){if(!K)return!0;if(Vn(e))return!1;if(e=e.toLowerCase(),null!=Jn[e])return Jn[e];var t=document.createElement(e);return e.indexOf("-")>-1?Jn[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Jn[e]=/HTMLUnknownElement/.test(t.toString())},T($n.options.directives,Wi),T($n.options.components,ao),$n.prototype.__patch__=K?Pi:j,$n.prototype.$mount=function(e,t){return function(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=ye),Qt(e,"beforeMount"),r=function(){e._update(e._render(),n)},new pn(e,r,j,{before:function(){e._isMounted&&!e._isDestroyed&&Qt(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,Qt(e,"mounted")),e}(this,e=e&&K?Gn(e):void 0,t)},K&&setTimeout(function(){H.devtools&&oe&&oe.emit("init",$n)},0);var so,co=/\{\{((?:.|\r?\n)+?)\}\}/g,uo=/[-.*+?^${}()|[\]\/\\]/g,lo=w(function(e){var t=e[0].replace(uo,"\\$&"),n=e[1].replace(uo,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),fo={staticKeys:["staticClass"],transformNode:function(e,t){t.warn;var n=Lr(e,"class");n&&(e.staticClass=JSON.stringify(n));var r=Ir(e,"class",!1);r&&(e.classBinding=r)},genData:function(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}},po={staticKeys:["staticStyle"],transformNode:function(e,t){t.warn;var n=Lr(e,"style");n&&(e.staticStyle=JSON.stringify(ti(n)));var r=Ir(e,"style",!1);r&&(e.styleBinding=r)},genData:function(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}},vo=h("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),ho=h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),mo=h("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),yo=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,go=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,_o="[a-zA-Z_][\\-\\.0-9_a-zA-Z"+U.source+"]*",bo="((?:"+_o+"\\:)?"+_o+")",wo=new RegExp("^<"+bo),$o=/^\s*(\/?)>/,xo=new RegExp("^<\\/"+bo+"[^>]*>"),Co=/^<!DOCTYPE [^>]+>/i,ko=/^<!\--/,Ao=/^<!\[/,So=h("script,style,textarea",!0),Oo={},To={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t","&#39;":"'"},Eo=/&(?:lt|gt|quot|amp|#39);/g,jo=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,No=h("pre,textarea",!0),Io=function(e,t){return e&&No(e)&&"\n"===t[0]};function Lo(e,t){var n=t?jo:Eo;return e.replace(n,function(e){return To[e]})}var Mo,Do,Fo,Po,Ro,Ho,Uo,Bo,zo=/^@|^v-on:/,qo=/^v-|^@|^:|^#/,Vo=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Ko=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Jo=/^\(|\)$/g,Wo=/^\[.*\]$/,Go=/:(.*)$/,Zo=/^:|^\.|^v-bind:/,Xo=/\.[^.\]]+(?=[^\]]*$)/g,Yo=/^v-slot(:|$)|^#/,Qo=/[\r\n]/,ea=/\s+/g,ta=w(function(e){return(so=so||document.createElement("div")).innerHTML=e,so.textContent}),na="_empty_";function ra(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:ua(t),rawAttrsMap:{},parent:n,children:[]}}function ia(e,t){var n,r;(r=Ir(n=e,"key"))&&(n.key=r),e.plain=!e.key&&!e.scopedSlots&&!e.attrsList.length,function(e){var t=Ir(e,"ref");t&&(e.ref=t,e.refInFor=function(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}(e))}(e),function(e){var t;"template"===e.tag?(t=Lr(e,"scope"),e.slotScope=t||Lr(e,"slot-scope")):(t=Lr(e,"slot-scope"))&&(e.slotScope=t);var n=Ir(e,"slot");if(n&&(e.slotTarget='""'===n?'"default"':n,e.slotTargetDynamic=!(!e.attrsMap[":slot"]&&!e.attrsMap["v-bind:slot"]),"template"===e.tag||e.slotScope||Or(e,"slot",n,function(e,t){return e.rawAttrsMap[":"+t]||e.rawAttrsMap["v-bind:"+t]||e.rawAttrsMap[t]}(e,"slot"))),"template"===e.tag){var r=Mr(e,Yo);if(r){var i=sa(r),o=i.name,a=i.dynamic;e.slotTarget=o,e.slotTargetDynamic=a,e.slotScope=r.value||na}}else{var s=Mr(e,Yo);if(s){var c=e.scopedSlots||(e.scopedSlots={}),u=sa(s),l=u.name,f=u.dynamic,p=c[l]=ra("template",[],e);p.slotTarget=l,p.slotTargetDynamic=f,p.children=e.children.filter(function(e){if(!e.slotScope)return e.parent=p,!0}),p.slotScope=s.value||na,e.children=[],e.plain=!1}}}(e),function(e){"slot"===e.tag&&(e.slotName=Ir(e,"name"))}(e),function(e){var t;(t=Ir(e,"is"))&&(e.component=t),null!=Lr(e,"inline-template")&&(e.inlineTemplate=!0)}(e);for(var i=0;i<Fo.length;i++)e=Fo[i](e,t)||e;return function(e){var t,n,r,i,o,a,s,c,u=e.attrsList;for(t=0,n=u.length;t<n;t++)if(r=i=u[t].name,o=u[t].value,qo.test(r))if(e.hasBindings=!0,(a=ca(r.replace(qo,"")))&&(r=r.replace(Xo,"")),Zo.test(r))r=r.replace(Zo,""),o=xr(o),(c=Wo.test(r))&&(r=r.slice(1,-1)),a&&(a.prop&&!c&&"innerHtml"===(r=x(r))&&(r="innerHTML"),a.camel&&!c&&(r=x(r)),a.sync&&(s=Pr(o,"$event"),c?Nr(e,'"update:"+('+r+")",s,null,!1,0,u[t],!0):(Nr(e,"update:"+x(r),s,null,!1,0,u[t]),A(r)!==x(r)&&Nr(e,"update:"+A(r),s,null,!1,0,u[t])))),a&&a.prop||!e.component&&Uo(e.tag,e.attrsMap.type,r)?Sr(e,r,o,u[t],c):Or(e,r,o,u[t],c);else if(zo.test(r))r=r.replace(zo,""),(c=Wo.test(r))&&(r=r.slice(1,-1)),Nr(e,r,o,a,!1,0,u[t],c);else{var l=(r=r.replace(qo,"")).match(Go),f=l&&l[1];c=!1,f&&(r=r.slice(0,-(f.length+1)),Wo.test(f)&&(f=f.slice(1,-1),c=!0)),Er(e,r,i,o,f,c,a,u[t])}else Or(e,r,JSON.stringify(o),u[t]),!e.component&&"muted"===r&&Uo(e.tag,e.attrsMap.type,r)&&Sr(e,r,"true",u[t])}(e),e}function oa(e){var t;if(t=Lr(e,"v-for")){var n=function(e){var t=e.match(Vo);if(t){var n={};n.for=t[2].trim();var r=t[1].trim().replace(Jo,""),i=r.match(Ko);return i?(n.alias=r.replace(Ko,"").trim(),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r,n}}(t);n&&T(e,n)}}function aa(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function sa(e){var t=e.name.replace(Yo,"");return t||"#"!==e.name[0]&&(t="default"),Wo.test(t)?{name:t.slice(1,-1),dynamic:!0}:{name:'"'+t+'"',dynamic:!1}}function ca(e){var t=e.match(Xo);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function ua(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}var la=/^xmlns:NS\d+/,fa=/^NS\d+:/;function pa(e){return ra(e.tag,e.attrsList.slice(),e.parent)}var da,va,ha=[fo,po,{preTransformNode:function(e,t){if("input"===e.tag){var n,r=e.attrsMap;if(!r["v-model"])return;if((r[":type"]||r["v-bind:type"])&&(n=Ir(e,"type")),r.type||n||!r["v-bind"]||(n="("+r["v-bind"]+").type"),n){var i=Lr(e,"v-if",!0),o=i?"&&("+i+")":"",a=null!=Lr(e,"v-else",!0),s=Lr(e,"v-else-if",!0),c=pa(e);oa(c),Tr(c,"type","checkbox"),ia(c,t),c.processed=!0,c.if="("+n+")==='checkbox'"+o,aa(c,{exp:c.if,block:c});var u=pa(e);Lr(u,"v-for",!0),Tr(u,"type","radio"),ia(u,t),aa(c,{exp:"("+n+")==='radio'"+o,block:u});var l=pa(e);return Lr(l,"v-for",!0),Tr(l,":type",n),ia(l,t),aa(c,{exp:i,block:l}),a?c.else=!0:s&&(c.elseif=s),c}}}}],ma={expectHTML:!0,modules:ha,directives:{model:function(e,t,n){var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if(e.component)return Fr(e,r,i),!1;if("select"===o)!function(e,t,n){var r='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(i&&i.number?"_n(val)":"val")+"});";Nr(e,"change",r=r+" "+Pr(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),null,!0)}(e,r);else if("input"===o&&"checkbox"===a)!function(e,t,n){var r=n&&n.number,i=Ir(e,"value")||"null",o=Ir(e,"true-value")||"true",a=Ir(e,"false-value")||"false";Sr(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),Nr(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+Pr(t,"$$a.concat([$$v])")+")}else{$$i>-1&&("+Pr(t,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")+")}}else{"+Pr(t,"$$c")+"}",null,!0)}(e,r,i);else if("input"===o&&"radio"===a)!function(e,t,n){var r=n&&n.number,i=Ir(e,"value")||"null";Sr(e,"checked","_q("+t+","+(i=r?"_n("+i+")":i)+")"),Nr(e,"change",Pr(t,i),null,!0)}(e,r,i);else if("input"===o||"textarea"===o)!function(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?"__r":"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=Pr(t,l);c&&(f="if($event.target.composing)return;"+f),Sr(e,"value","("+t+")"),Nr(e,u,f,null,!0),(s||a)&&Nr(e,"blur","$forceUpdate()")}(e,r,i);else if(!H.isReservedTag(o))return Fr(e,r,i),!1;return!0},text:function(e,t){t.value&&Sr(e,"textContent","_s("+t.value+")",t)},html:function(e,t){t.value&&Sr(e,"innerHTML","_s("+t.value+")",t)}},isPreTag:function(e){return"pre"===e},isUnaryTag:vo,mustUseProp:jn,canBeLeftOpenTag:ho,isReservedTag:Vn,getTagNamespace:Kn,staticKeys:ha.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")},ya=w(function(e){return h("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(e?","+e:""))}),ga=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,_a=/\([^)]*?\);*$/,ba=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,wa={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},$a={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},xa=function(e){return"if("+e+")return null;"},Ca={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:xa("$event.target !== $event.currentTarget"),ctrl:xa("!$event.ctrlKey"),shift:xa("!$event.shiftKey"),alt:xa("!$event.altKey"),meta:xa("!$event.metaKey"),left:xa("'button' in $event && $event.button !== 0"),middle:xa("'button' in $event && $event.button !== 1"),right:xa("'button' in $event && $event.button !== 2")};function ka(e,t){var n=t?"nativeOn:":"on:",r="",i="";for(var o in e){var a=Aa(e[o]);e[o]&&e[o].dynamic?i+=o+","+a+",":r+='"'+o+'":'+a+","}return r="{"+r.slice(0,-1)+"}",i?n+"_d("+r+",["+i.slice(0,-1)+"])":n+r}function Aa(e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return Aa(e)}).join(",")+"]";var t=ba.test(e.value),n=ga.test(e.value),r=ba.test(e.value.replace(_a,""));if(e.modifiers){var i="",o="",a=[];for(var s in e.modifiers)if(Ca[s])o+=Ca[s],wa[s]&&a.push(s);else if("exact"===s){var c=e.modifiers;o+=xa(["ctrl","shift","alt","meta"].filter(function(e){return!c[e]}).map(function(e){return"$event."+e+"Key"}).join("||"))}else a.push(s);return a.length&&(i+="if(!$event.type.indexOf('key')&&"+a.map(Sa).join("&&")+")return null;"),o&&(i+=o),"function($event){"+i+(t?"return "+e.value+"($event)":n?"return ("+e.value+")($event)":r?"return "+e.value:e.value)+"}"}return t||n?e.value:"function($event){"+(r?"return "+e.value:e.value)+"}"}function Sa(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=wa[e],r=$a[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key,"+JSON.stringify(r)+")"}var Oa={on:function(e,t){e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}},bind:function(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+","+(t.modifiers&&t.modifiers.prop?"true":"false")+(t.modifiers&&t.modifiers.sync?",true":"")+")"}},cloak:j},Ta=function(e){this.options=e,this.warn=e.warn||kr,this.transforms=Ar(e.modules,"transformCode"),this.dataGenFns=Ar(e.modules,"genData"),this.directives=T(T({},Oa),e.directives);var t=e.isReservedTag||N;this.maybeComponent=function(e){return!!e.component||!t(e.tag)},this.onceId=0,this.staticRenderFns=[],this.pre=!1};function Ea(e,t){var n=new Ta(t);return{render:"with(this){return "+(e?ja(e,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function ja(e,t){if(e.parent&&(e.pre=e.pre||e.parent.pre),e.staticRoot&&!e.staticProcessed)return Na(e,t);if(e.once&&!e.onceProcessed)return Ia(e,t);if(e.for&&!e.forProcessed)return Ma(e,t);if(e.if&&!e.ifProcessed)return La(e,t);if("template"!==e.tag||e.slotTarget||t.pre){if("slot"===e.tag)return function(e,t){var n=e.slotName||'"default"',r=Ra(e,t),i="_t("+n+(r?","+r:""),o=e.attrs||e.dynamicAttrs?Ba((e.attrs||[]).concat(e.dynamicAttrs||[]).map(function(e){return{name:x(e.name),value:e.value,dynamic:e.dynamic}})):null,a=e.attrsMap["v-bind"];return!o&&!a||r||(i+=",null"),o&&(i+=","+o),a&&(i+=(o?"":",null")+","+a),i+")"}(e,t);var n;if(e.component)n=function(e,t,n){var r=t.inlineTemplate?null:Ra(t,n,!0);return"_c("+e+","+Da(t,n)+(r?","+r:"")+")"}(e.component,e,t);else{var r;(!e.plain||e.pre&&t.maybeComponent(e))&&(r=Da(e,t));var i=e.inlineTemplate?null:Ra(e,t,!0);n="_c('"+e.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<t.transforms.length;o++)n=t.transforms[o](e,n);return n}return Ra(e,t)||"void 0"}function Na(e,t){e.staticProcessed=!0;var n=t.pre;return e.pre&&(t.pre=e.pre),t.staticRenderFns.push("with(this){return "+ja(e,t)+"}"),t.pre=n,"_m("+(t.staticRenderFns.length-1)+(e.staticInFor?",true":"")+")"}function Ia(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return La(e,t);if(e.staticInFor){for(var n="",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+ja(e,t)+","+t.onceId+++","+n+")":ja(e,t)}return Na(e,t)}function La(e,t,n,r){return e.ifProcessed=!0,function e(t,n,r,i){if(!t.length)return i||"_e()";var o=t.shift();return o.exp?"("+o.exp+")?"+a(o.block)+":"+e(t,n,r,i):""+a(o.block);function a(e){return r?r(e,n):e.once?Ia(e,n):ja(e,n)}}(e.ifConditions.slice(),t,n,r)}function Ma(e,t,n,r){var i=e.for,o=e.alias,a=e.iterator1?","+e.iterator1:"",s=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||ja)(e,t)+"})"}function Da(e,t){var n="{",r=function(e,t){var n=e.directives;if(n){var r,i,o,a,s="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var u=t.directives[o.name];u&&(a=!!u(e,o,t.warn)),a&&(c=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?",arg:"+(o.isDynamicArg?o.arg:'"'+o.arg+'"'):"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}return c?s.slice(0,-1)+"]":void 0}}(e,t);r&&(n+=r+","),e.key&&(n+="key:"+e.key+","),e.ref&&(n+="ref:"+e.ref+","),e.refInFor&&(n+="refInFor:true,"),e.pre&&(n+="pre:true,"),e.component&&(n+='tag:"'+e.tag+'",');for(var i=0;i<t.dataGenFns.length;i++)n+=t.dataGenFns[i](e);if(e.attrs&&(n+="attrs:"+Ba(e.attrs)+","),e.props&&(n+="domProps:"+Ba(e.props)+","),e.events&&(n+=ka(e.events,!1)+","),e.nativeEvents&&(n+=ka(e.nativeEvents,!0)+","),e.slotTarget&&!e.slotScope&&(n+="slot:"+e.slotTarget+","),e.scopedSlots&&(n+=function(e,t,n){var r=e.for||Object.keys(t).some(function(e){var n=t[e];return n.slotTargetDynamic||n.if||n.for||Fa(n)}),i=!!e.if;if(!r)for(var o=e.parent;o;){if(o.slotScope&&o.slotScope!==na||o.for){r=!0;break}o.if&&(i=!0),o=o.parent}var a=Object.keys(t).map(function(e){return Pa(t[e],n)}).join(",");return"scopedSlots:_u(["+a+"]"+(r?",null,true":"")+(!r&&i?",null,false,"+function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}(a):"")+")"}(e,e.scopedSlots,t)+","),e.model&&(n+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var o=function(e,t){var n=e.children[0];if(n&&1===n.type){var r=Ea(n,t.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}(e,t);o&&(n+=o+",")}return n=n.replace(/,$/,"")+"}",e.dynamicAttrs&&(n="_b("+n+',"'+e.tag+'",'+Ba(e.dynamicAttrs)+")"),e.wrapData&&(n=e.wrapData(n)),e.wrapListeners&&(n=e.wrapListeners(n)),n}function Fa(e){return 1===e.type&&("slot"===e.tag||e.children.some(Fa))}function Pa(e,t){var n=e.attrsMap["slot-scope"];if(e.if&&!e.ifProcessed&&!n)return La(e,t,Pa,"null");if(e.for&&!e.forProcessed)return Ma(e,t,Pa);var r=e.slotScope===na?"":String(e.slotScope),i="function("+r+"){return "+("template"===e.tag?e.if&&n?"("+e.if+")?"+(Ra(e,t)||"undefined")+":undefined":Ra(e,t)||"undefined":ja(e,t))+"}",o=r?"":",proxy:true";return"{key:"+(e.slotTarget||'"default"')+",fn:"+i+o+"}"}function Ra(e,t,n,r,i){var o=e.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag){var s=n?t.maybeComponent(a)?",1":",0":"";return""+(r||ja)(a,t)+s}var c=n?function(e,t){for(var n=0,r=0;r<e.length;r++){var i=e[r];if(1===i.type){if(Ha(i)||i.ifConditions&&i.ifConditions.some(function(e){return Ha(e.block)})){n=2;break}(t(i)||i.ifConditions&&i.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}(o,t.maybeComponent):0,u=i||Ua;return"["+o.map(function(e){return u(e,t)}).join(",")+"]"+(c?","+c:"")}}function Ha(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function Ua(e,t){return 1===e.type?ja(e,t):3===e.type&&e.isComment?(r=e,"_e("+JSON.stringify(r.text)+")"):"_v("+(2===(n=e).type?n.expression:za(JSON.stringify(n.text)))+")";var n,r}function Ba(e){for(var t="",n="",r=0;r<e.length;r++){var i=e[r],o=za(i.value);i.dynamic?n+=i.name+","+o+",":t+='"'+i.name+'":'+o+","}return t="{"+t.slice(0,-1)+"}",n?"_d("+t+",["+n.slice(0,-1)+"])":t}function za(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function qa(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),j}}function Va(e){var t=Object.create(null);return function(n,r,i){(r=T({},r)).warn,delete r.warn;var o=r.delimiters?String(r.delimiters)+n:n;if(t[o])return t[o];var a=e(n,r),s={},c=[];return s.render=qa(a.render,c),s.staticRenderFns=a.staticRenderFns.map(function(e){return qa(e,c)}),t[o]=s}}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b");var Ka,Ja,Wa=(Ka=function(e,t){var n=function(e,t){Mo=t.warn||kr,Ho=t.isPreTag||N,Uo=t.mustUseProp||N,Bo=t.getTagNamespace||N,t.isReservedTag,Fo=Ar(t.modules,"transformNode"),Po=Ar(t.modules,"preTransformNode"),Ro=Ar(t.modules,"postTransformNode"),Do=t.delimiters;var n,r,i=[],o=!1!==t.preserveWhitespace,a=t.whitespace,s=!1,c=!1;function u(e){if(l(e),s||e.processed||(e=ia(e,t)),i.length||e===n||n.if&&(e.elseif||e.else)&&aa(n,{exp:e.elseif,block:e}),r&&!e.forbidden)if(e.elseif||e.else)a=e,(u=function(e){for(var t=e.length;t--;){if(1===e[t].type)return e[t];e.pop()}}(r.children))&&u.if&&aa(u,{exp:a.elseif,block:a});else{if(e.slotScope){var o=e.slotTarget||'"default"';(r.scopedSlots||(r.scopedSlots={}))[o]=e}r.children.push(e),e.parent=r}var a,u;e.children=e.children.filter(function(e){return!e.slotScope}),l(e),e.pre&&(s=!1),Ho(e.tag)&&(c=!1);for(var f=0;f<Ro.length;f++)Ro[f](e,t)}function l(e){if(!c)for(var t;(t=e.children[e.children.length-1])&&3===t.type&&" "===t.text;)e.children.pop()}return function(e,t){for(var n,r,i=[],o=t.expectHTML,a=t.isUnaryTag||N,s=t.canBeLeftOpenTag||N,c=0;e;){if(n=e,r&&So(r)){var u=0,l=r.toLowerCase(),f=Oo[l]||(Oo[l]=new RegExp("([\\s\\S]*?)(</"+l+"[^>]*>)","i")),p=e.replace(f,function(e,n,r){return u=r.length,So(l)||"noscript"===l||(n=n.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Io(l,n)&&(n=n.slice(1)),t.chars&&t.chars(n),""});c+=e.length-p.length,e=p,A(l,c-u,c)}else{var d=e.indexOf("<");if(0===d){if(ko.test(e)){var v=e.indexOf("--\x3e");if(v>=0){t.shouldKeepComment&&t.comment(e.substring(4,v),c,c+v+3),x(v+3);continue}}if(Ao.test(e)){var h=e.indexOf("]>");if(h>=0){x(h+2);continue}}var m=e.match(Co);if(m){x(m[0].length);continue}var y=e.match(xo);if(y){var g=c;x(y[0].length),A(y[1],g,c);continue}var _=C();if(_){k(_),Io(_.tagName,e)&&x(1);continue}}var b=void 0,w=void 0,$=void 0;if(d>=0){for(w=e.slice(d);!(xo.test(w)||wo.test(w)||ko.test(w)||Ao.test(w)||($=w.indexOf("<",1))<0);)d+=$,w=e.slice(d);b=e.substring(0,d)}d<0&&(b=e),b&&x(b.length),t.chars&&b&&t.chars(b,c-b.length,c)}if(e===n){t.chars&&t.chars(e);break}}function x(t){c+=t,e=e.substring(t)}function C(){var t=e.match(wo);if(t){var n,r,i={tagName:t[1],attrs:[],start:c};for(x(t[0].length);!(n=e.match($o))&&(r=e.match(go)||e.match(yo));)r.start=c,x(r[0].length),r.end=c,i.attrs.push(r);if(n)return i.unarySlash=n[1],x(n[0].length),i.end=c,i}}function k(e){var n=e.tagName,c=e.unarySlash;o&&("p"===r&&mo(n)&&A(r),s(n)&&r===n&&A(n));for(var u=a(n)||!!c,l=e.attrs.length,f=new Array(l),p=0;p<l;p++){var d=e.attrs[p],v=d[3]||d[4]||d[5]||"",h="a"===n&&"href"===d[1]?t.shouldDecodeNewlinesForHref:t.shouldDecodeNewlines;f[p]={name:d[1],value:Lo(v,h)}}u||(i.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:f,start:e.start,end:e.end}),r=n),t.start&&t.start(n,f,u,e.start,e.end)}function A(e,n,o){var a,s;if(null==n&&(n=c),null==o&&(o=c),e)for(s=e.toLowerCase(),a=i.length-1;a>=0&&i[a].lowerCasedTag!==s;a--);else a=0;if(a>=0){for(var u=i.length-1;u>=a;u--)t.end&&t.end(i[u].tag,n,o);i.length=a,r=a&&i[a-1].tag}else"br"===s?t.start&&t.start(e,[],!0,n,o):"p"===s&&(t.start&&t.start(e,[],!1,n,o),t.end&&t.end(e,n,o))}A()}(e,{warn:Mo,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,shouldDecodeNewlinesForHref:t.shouldDecodeNewlinesForHref,shouldKeepComment:t.comments,outputSourceRange:t.outputSourceRange,start:function(e,o,a,l,f){var p=r&&r.ns||Bo(e);Z&&"svg"===p&&(o=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];la.test(r.name)||(r.name=r.name.replace(fa,""),t.push(r))}return t}(o));var d,v=ra(e,o,r);p&&(v.ns=p),"style"!==(d=v).tag&&("script"!==d.tag||d.attrsMap.type&&"text/javascript"!==d.attrsMap.type)||ie()||(v.forbidden=!0);for(var h=0;h<Po.length;h++)v=Po[h](v,t)||v;s||(function(e){null!=Lr(e,"v-pre")&&(e.pre=!0)}(v),v.pre&&(s=!0)),Ho(v.tag)&&(c=!0),s?function(e){var t=e.attrsList,n=t.length;if(n)for(var r=e.attrs=new Array(n),i=0;i<n;i++)r[i]={name:t[i].name,value:JSON.stringify(t[i].value)},null!=t[i].start&&(r[i].start=t[i].start,r[i].end=t[i].end);else e.pre||(e.plain=!0)}(v):v.processed||(oa(v),function(e){var t=Lr(e,"v-if");if(t)e.if=t,aa(e,{exp:t,block:e});else{null!=Lr(e,"v-else")&&(e.else=!0);var n=Lr(e,"v-else-if");n&&(e.elseif=n)}}(v),function(e){null!=Lr(e,"v-once")&&(e.once=!0)}(v)),n||(n=v),a?u(v):(r=v,i.push(v))},end:function(e,t,n){var o=i[i.length-1];i.length-=1,r=i[i.length-1],u(o)},chars:function(e,t,n){if(r&&(!Z||"textarea"!==r.tag||r.attrsMap.placeholder!==e)){var i,u,l,f=r.children;(e=c||e.trim()?"script"===(i=r).tag||"style"===i.tag?e:ta(e):f.length?a?"condense"===a&&Qo.test(e)?"":" ":o?" ":"":"")&&(c||"condense"!==a||(e=e.replace(ea," ")),!s&&" "!==e&&(u=function(e,t){var n=Do?lo(Do):co;if(n.test(e)){for(var r,i,o,a=[],s=[],c=n.lastIndex=0;r=n.exec(e);){(i=r.index)>c&&(s.push(o=e.slice(c,i)),a.push(JSON.stringify(o)));var u=xr(r[1].trim());a.push("_s("+u+")"),s.push({"@binding":u}),c=i+r[0].length}return c<e.length&&(s.push(o=e.slice(c)),a.push(JSON.stringify(o))),{expression:a.join("+"),tokens:s}}}(e))?l={type:2,expression:u.expression,tokens:u.tokens,text:e}:" "===e&&f.length&&" "===f[f.length-1].text||(l={type:3,text:e}),l&&f.push(l))}},comment:function(e,t,n){if(r){var i={type:3,text:e,isComment:!0};r.children.push(i)}}}),n}(e.trim(),t);!1!==t.optimize&&function(e,t){e&&(da=ya(t.staticKeys||""),va=t.isReservedTag||N,function e(t){if(t.static=function(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||m(e.tag)||!va(e.tag)||function(e){for(;e.parent;){if("template"!==(e=e.parent).tag)return!1;if(e.for)return!0}return!1}(e)||!Object.keys(e).every(da))))}(t),1===t.type){if(!va(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var n=0,r=t.children.length;n<r;n++){var i=t.children[n];e(i),i.static||(t.static=!1)}if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++){var s=t.ifConditions[o].block;e(s),s.static||(t.static=!1)}}}(e),function e(t,n){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=n),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var r=0,i=t.children.length;r<i;r++)e(t.children[r],n||!!t.for);if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++)e(t.ifConditions[o].block,n)}}(e,!1))}(n,t);var r=Ea(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(e){function t(t,n){var r=Object.create(e),i=[],o=[];if(n)for(var a in n.modules&&(r.modules=(e.modules||[]).concat(n.modules)),n.directives&&(r.directives=T(Object.create(e.directives||null),n.directives)),n)"modules"!==a&&"directives"!==a&&(r[a]=n[a]);r.warn=function(e,t,n){(n?o:i).push(e)};var s=Ka(t.trim(),r);return s.errors=i,s.tips=o,s}return{compile:t,compileToFunctions:Va(t)}})(ma),Ga=(Wa.compile,Wa.compileToFunctions);function Za(e){return(Ja=Ja||document.createElement("div")).innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',Ja.innerHTML.indexOf("&#10;")>0}var Xa=!!K&&Za(!1),Ya=!!K&&Za(!0),Qa=w(function(e){var t=Gn(e);return t&&t.innerHTML}),es=$n.prototype.$mount;$n.prototype.$mount=function(e,t){if((e=e&&Gn(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=Qa(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=function(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}(e));if(r){var i=Ga(r,{outputSourceRange:!1,shouldDecodeNewlines:Xa,shouldDecodeNewlinesForHref:Ya,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return es.call(this,e,t)},$n.compile=Ga,e.exports=$n}).call(this,n(0),n(4).setImmediate)},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(i.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new o(i.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(5),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,i,o,a,s,c=1,u={},l=!1,f=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){v(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&v(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),r=function(t){e.postMessage(a+t,"*")}):e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){v(e.data)},r=function(e){o.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(i=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){v(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):r=function(e){setTimeout(v,0,e)},p.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return u[c]=i,r(c),c++},p.clearImmediate=d}function d(e){delete u[e]}function v(e){if(l)setTimeout(v,0,e);else{var t=u[e];if(t){l=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{d(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(6))},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],l=!1,f=-1;function p(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&d())}function d(){if(!l){var e=s(p);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new v(e,t)),1!==u.length||l||s(d)},v.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t),n.d(t,"seasonDiv",function(){return r}),n.d(t,"generate_season_form",function(){return i}),n.d(t,"add_input",function(){return a}),n.d(t,"generate_options",function(){return s});var r=document.querySelector(".season__input");function i(e){document.querySelector(".season__input").innerHTML="";for(var t=0;t<e;t++)o(t)}function o(e){var t=document.querySelector("#season__input-template").innerHTML;t=t.replace("NUMBERREPLACE",e);var n=document.createElement("fieldset");n.name="show"+e,n.innerHTML=t,document.querySelector(".season__input").append(n)}function a(){o(document.querySelectorAll(".season__input > fieldset").length)}function s(){var e=document.querySelectorAll(".season__input > fieldset"),t=[];e.forEach(function(e){var n=e.querySelector("input[name*=title]").value,r=e.querySelector("input[name*=slots]").value.split(",");""!=r&&""!=n&&r.forEach(function(e){e=e.trim(),t[e]?t[e].push(n):t[e]=[n]})}),console.log(t,Object.keys(t));var n=function e(t,n,r){if(r+1<n.length){var i=e(t,n,r+1),o=t[n[r]],a=[];for(var s in i){var c=i[s];for(var u in o)try{var l=o[u],f=c.slice(0);console.log(f,l),-1==f.indexOf(l)&&(f.push(l),a.push(f))}catch(e){console.error(e)}}return a}return t[n[r]].map(function(e){return[e]})}(t,Object.keys(t),0),r="";r+="<h3>You have: "+n.length+" options for this season</h3>",r+="<ul>",n.forEach(function(e){r+="<li><ol>",e.reverse().forEach(function(e,t){slot=t+1,r+="<li>"+e+"</li>"}),r+="</ol></li>"}),r+="</ul>",document.querySelector(".season__option").innerHTML=r,console.log(n)}},function(e,t,n){"use strict";n.r(t),n.d(t,"allTextsDiv",function(){return r}),n.d(t,"generate_texts",function(){return i});var r=document.querySelector("#all-texts-div");function i(){for(;r.firstChild;)r.removeChild(r.firstChild);var e=document.querySelector("#input-form").value.split("\n\n"),t="";e.forEach(function(e){var n=/(.+?): ([\s\S]+)/,i=e.split(n)[1],o=e.split(n)[2];if(console.log(i,o),i&&o){i=i.trim(),o=o.trim();var a=document.createElement("div"),s=document.createElement("div"),c="text",u="message";switch(t!==i&&(c+=" text--chain-top",u+=" message--chain-top"),i){case"me":c+=" text--me",u+=" message--me";break;case"them":c+=" text--them",u+=" message--them";break;case"time":c+=" text--time",u+=" message--time"}a.className=u,s.className=c,s.innerHTML=o.replace("\n","</br>"),a.appendChild(s),r.appendChild(a),t=i}})}document.querySelector(".season__input")},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r);function o(e,t,n,r,i,o,a,s){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:e,options:u}}var a=o({data:function(){return{shows_slots:[{id:0,show:"Show 1",slots:"1,2"},{id:1,show:"Show 2",slots:"3"},{id:2,show:"Show 3",slots:"4,5"},{id:3,show:"Show 4",slots:"1,3,5"},{id:4,show:"Show 5",slots:"2,4"}]}},methods:{recurse_generate:function(e,t,n){if(n+1<t.length){var r=this.recurse_generate(e,t,n+1),i=e[t[n]],o=[];for(var a in r){var s=r[a];for(var c in i)try{var u=i[c],l=s.slice(0);-1==l.indexOf(u)&&(l.push(u),o.push(l))}catch(e){console.error(e)}}return o}return e[t[n]].map(function(e){return[e]})}},computed:{permutations:function(){var e=[];return this.shows_slots.forEach(function(t){var n=t.show,r=t.slots.split(",");""!=r&&""!=n&&r.forEach(function(t){""!==(t=t.trim())&&(e[t]?e[t].push(n):e[t]=[n])})}),this.recurse_generate(e,Object.keys(e),0)}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.shows_slots,function(t){return n("div",{key:t,staticClass:"p-y-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.show,expression:"show_slots.show"}],domProps:{value:t.show},on:{input:function(n){n.target.composing||e.$set(t,"show",n.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.slots,expression:"show_slots.slots"}],domProps:{value:t.slots},on:{input:function(n){n.target.composing||e.$set(t,"slots",n.target.value)}}})])}),e._v(" "),n("div",{staticClass:"p-y-1"},[n("button",{on:{click:function(t){return e.shows_slots.push({id:e.shows_slots.length})}}},[e._v("\n      Add new\n    ")])]),e._v(" "),e.permutations.length?n("span",e._l(e.permutations,function(t){return n("ol",{key:t},e._l(t,function(t){return n("li",{key:t,domProps:{textContent:e._s(t)}})}),0)}),0):n("h2",[e._v("No valid seasons exist")])],2)},[],!1,null,null,null).exports,s=o({data:function(){return{input_text:"\nme: A blue message on the right of the screen\n\nthem: A grey message on the left of the screen\n\ntime: Grey bolded text at the center of the screen\n\nAnd this text won't be shown at all!\n",input_class:""}},methods:{toggleFloat:function(){null===this.input_class?this.input_class="floating":this.input_class=null}},computed:{texts:function(){var e=/(.+?)(: *?)([\s\S]+)/,t=this.input_text.split("\n\n"),n="",r=[];return t.forEach(function(t){var i=t.split(e),o=i[1],a=i[3];if(!o||!a)return!1;o=o.trim(),a=a.trim();var s=["text"],c=["message"];switch(n!==o&&(s.push("text--chain-top"),c.push("message--chain-top")),o.toLowerCase()){case"me":s.push("text--me"),c.push("message--me");break;case"them":s.push("text--them"),c.push("message--them");break;case"time":s.push("text--time"),c.push("message--time")}r.push({textClasses:s,messageClasses:c,message:a}),n=o}),r}},mounted:function(){this.input_text=this.input_text.trim()}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"risky-texts__wrapper",attrs:{id:"app"}},[n("div",{staticClass:"risky-texts__input"},[e._m(0),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.input_text,expression:"input_text"}],class:e.input_class,attrs:{id:"input-form",rows:"7"},domProps:{value:e.input_text},on:{input:function(t){t.target.composing||(e.input_text=t.target.value)}}}),e._v(" "),n("button",{staticClass:"p-2",on:{click:function(t){return e.toggleFloat()}}},[e._v("Toggle Floating Editor")])]),e._v(" "),n("div",{staticClass:"risky-texts__display",attrs:{id:"all-texts-div"}},e._l(e.texts,function(t){return n("div",{key:t,class:t.messageClasses},[n("div",{class:t.textClasses,domProps:{textContent:e._s(t.message)}})])}),0)])},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{attrs:{for:"input-form"}},[e._v("\n      Please enter your texts here!"),n("br"),e._v("\n      They should be of the form "),n("em",[e._v("person: message")]),e._v(", where\n      "),n("em",[e._v("person")]),e._v(" is one of:\n      "),n("ul",[n("li",[n("em",[e._v("me")]),e._v(", blue messages from the right of the screen")]),e._v(" "),n("li",[n("em",[e._v("them")]),e._v(", grey messages from the left of the screen")]),e._v(" "),n("li",[n("em",[e._v("time")]),e._v(", grey text in the center of the screen,")])]),e._v("\n      and they should be separated by new lines (i.e. one empty line between\n      texts).\n    ")])}],!1,null,null,null).exports,c=o({data:function(){return{count:0,increment:1,button_classes:["button","button--center","p-y-1","font-size-10"]}},methods:{keyboardCounter:function(e){switch(e.keyCode){case 75:case 87:case 38:this.countUp();break;case 74:case 83:case 40:this.countDown()}},countUp:function(){this.count=parseFloat(parseFloat(this.count)+parseFloat(this.increment))},countDown:function(){this.count=parseFloat(parseFloat(this.count)-parseFloat(this.increment))},incrementUp:function(){this.increment++},incrementDown:function(){this.increment--}},mounted:function(){document.addEventListener("keydown",this.keyboardCounter)}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-y-2 counter"},[n("div",{staticClass:"counter__counter"},[n("h3",[e._v("Counter")]),e._v(" "),n("div",{class:e.button_classes,on:{click:function(t){return e.countUp()}}},[e._v("+"+e._s(e.increment))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.count,expression:"count"}],staticClass:"m-y-3 font-size-5",attrs:{type:"number",name:"counter"},domProps:{value:e.count},on:{input:function(t){t.target.composing||(e.count=t.target.value)}}}),e._v(" "),n("div",{class:e.button_classes,on:{click:function(t){return e.countDown()}}},[e._v("-"+e._s(e.increment))])]),e._v(" "),n("div",{staticClass:"counter__increment"},[n("h3",[e._v("Increment")]),e._v(" "),n("div",{class:e.button_classes,on:{click:function(t){return e.incrementUp()}}},[e._v("+")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.increment,expression:"increment"}],staticClass:"m-y-3 font-size-5",attrs:{type:"number",name:"counter"},domProps:{value:e.increment},on:{input:function(t){t.target.composing||(e.increment=t.target.value)}}}),e._v(" "),n("div",{class:e.button_classes,on:{click:function(t){return e.incrementDown()}}},[e._v("-")])])])},[],!1,null,null,null).exports,u=document.querySelector("#nav-toggle"),l=document.querySelectorAll(".navbar__list")[0];u.onclick=function(){u.classList.toggle("active"),l.classList.toggle("active")},new i.a({el:"#app",components:{season_gen:a,text_gen:s,counter:c}})},function(e,t){}]);
=======
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "/";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./_assets/js/script.js":
  /*!******************************!*\
    !*** ./_assets/js/script.js ***!
    \******************************/

  /*! no exports provided */

  /***/
  function _assetsJsScriptJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! vue */
    "./node_modules/vue/dist/vue.common.js");
    /* harmony import */


    var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _vue_components_SeasonGen_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./vue_components/SeasonGen.vue */
    "./_assets/js/vue_components/SeasonGen.vue");
    /* harmony import */


    var _vue_components_TextGen_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./vue_components/TextGen.vue */
    "./_assets/js/vue_components/TextGen.vue");
    /* harmony import */


    var _vue_components_Counter_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vue_components/Counter.vue */
    "./_assets/js/vue_components/Counter.vue");

    var toggle = document.querySelector("#nav-toggle");
    var nav_list = document.querySelectorAll(".navbar__list")[0];

    toggle.onclick = function () {
      toggle.classList.toggle("active");
      nav_list.classList.toggle("active");
    };

    var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
      el: '#app',
      components: {
        season_gen: _vue_components_SeasonGen_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
        text_gen: _vue_components_TextGen_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
        counter: _vue_components_Counter_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
      }
    });
    /***/
  },

  /***/
  "./_assets/js/season_gen.js":
  /*!**********************************!*\
    !*** ./_assets/js/season_gen.js ***!
    \**********************************/

  /*! exports provided: seasonDiv, generate_season_form, add_input, generate_options */

  /***/
  function _assetsJsSeason_genJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "seasonDiv", function () {
      return seasonDiv;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "generate_season_form", function () {
      return generate_season_form;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "add_input", function () {
      return add_input;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "generate_options", function () {
      return generate_options;
    });
    /**
     *
     *  SEASON GENERATOR
     *
     */


    var seasonDiv = document.querySelector(".season__input");

    function generate_season_form(num_shows) {
      document.querySelector(".season__input").innerHTML = "";

      for (var i = 0; i < num_shows; i++) {
        add_season_input(i);
      }
    }

    function add_season_input(n) {
      var new_input = document.querySelector("#season__input-template").innerHTML;
      new_input = new_input.replace("NUMBERREPLACE", n);
      var new_fieldset = document.createElement("fieldset");
      new_fieldset.name = "show" + n;
      new_fieldset.innerHTML = new_input;
      document.querySelector(".season__input").append(new_fieldset);
    }

    function add_input() {
      add_season_input(document.querySelectorAll(".season__input > fieldset").length);
    } // [{show: show_name,slot: slot_num}]


    function generate_options() {
      var fieldsets = document.querySelectorAll(".season__input > fieldset");
      var preferences = [];
      fieldsets.forEach(function (fieldset) {
        var showname = fieldset.querySelector("input[name*=title]").value;
        var slots = fieldset.querySelector("input[name*=slots]").value.split(",");

        if (slots != "" && showname != "") {
          slots.forEach(function (slot) {
            slot = slot.trim();

            if (!preferences[slot]) {
              preferences[slot] = [showname];
            } else {
              preferences[slot].push(showname);
            }
          });
        }
      });
      console.log(preferences, Object.keys(preferences));
      var s = something(preferences, Object.keys(preferences), 0);
      var n_o_html = "";
      n_o_html += "<h3>You have: " + s.length + " options for this season</h3>";
      n_o_html += "<ul>";
      s.forEach(function (season) {
        n_o_html += "<li><ol>";
        season.reverse().forEach(function (show, slotMinus) {
          slot = slotMinus + 1;
          n_o_html += "<li>" + show + "</li>";
        });
        n_o_html += "</ol></li>";
      });
      n_o_html += "</ul>";
      document.querySelector(".season__option").innerHTML = n_o_html;
      console.log(s);
    }

    function something(object, keys, index) {
      //console.log("index:", index, "keys:", keys);
      if (index + 1 < keys.length) {
        var after = something(object, keys, index + 1);
        var oki = object[keys[index]];
        var n = [];

        for (var _perm in after) {
          var perm = after[_perm]; // One option for after this slot

          for (var _slot in oki) {
            try {
              var _slot2 = oki[_slot]; // The current show for this slot

              var perm2 = perm.slice(0);
              console.log(perm2, _slot2);

              if (perm2.indexOf(_slot2) == -1) {
                perm2.push(_slot2);
                n.push(perm2);
              }
            } catch (e) {
              console.error(e);
            }
          }
        }

        return n;
      } else {
        return object[keys[index]].map(function (x) {
          return [x];
        });
      }
    }
    /***/

  },

  /***/
  "./_assets/js/text_gen.js":
  /*!********************************!*\
    !*** ./_assets/js/text_gen.js ***!
    \********************************/

  /*! exports provided: allTextsDiv, generate_texts */

  /***/
  function _assetsJsText_genJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "allTextsDiv", function () {
      return allTextsDiv;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "generate_texts", function () {
      return generate_texts;
    });
    /**
     *
     * TEXT GENERATOR
     *
     */


    var allTextsDiv = document.querySelector("#all-texts-div");

    function generate_texts() {
      while (allTextsDiv.firstChild) {
        allTextsDiv.removeChild(allTextsDiv.firstChild);
      }

      var texts = document.querySelector("#input-form").value.split("\n\n");
      var lastPerson = "";
      var firstText = true;
      var y = 12;
      texts.forEach(function (item) {
        /**
         *
         *  PRINTING TO HTML AND DIVS
         *
         */
        var regex = /(.+?): ([\s\S]+)/;
        var person = item.split(regex)[1];
        var message = item.split(regex)[2];
        console.log(person, message);

        if (!(person && message)) {
          return;
        }

        person = person.trim();
        message = message.trim();
        var messageDiv = document.createElement("div");
        var textDiv = document.createElement("div");
        var textClasses = "text";
        var messageClasses = "message";

        if (lastPerson !== person) {
          textClasses += " text--chain-top";
          messageClasses += " message--chain-top";
        }

        switch (person) {
          case "me":
            textClasses += " text--me";
            messageClasses += " message--me";
            break;

          case "them":
            textClasses += " text--them";
            messageClasses += " message--them";
            break;

          case "time":
            textClasses += " text--time";
            messageClasses += " message--time";
            break;

          default:
            break;
        }

        messageDiv.className = messageClasses;
        textDiv.className = textClasses;
        textDiv.innerHTML = message.replace("\n", "</br>");
        messageDiv.appendChild(textDiv);
        allTextsDiv.appendChild(messageDiv);
        lastPerson = person;
      });
    }
    /*
     *
     *  SEASON GENERATOR
     *
     */


    var seasonDiv = document.querySelector(".season__input");

    function generate_season_form(num_shows) {
      document.querySelector(".season__input").innerHTML = "";

      for (var i = 0; i < num_shows; i++) {
        add_season_input(i);
      }
    }

    function add_season_input(n) {
      var new_input = document.querySelector("#season__input-template").innerHTML;
      new_input = new_input.replace("NUMBERREPLACE", n);
      var new_fieldset = document.createElement("fieldset");
      new_fieldset.name = "show" + n;
      new_fieldset.innerHTML = new_input;
      document.querySelector(".season__input").append(new_fieldset);
    }

    function add_input() {
      add_season_input(document.querySelectorAll(".season__input > fieldset").length);
    } // [{show: show_name,slot: slot_num}]


    function generate_options() {
      var fieldsets = document.querySelectorAll(".season__input > fieldset");
      var preferences = [];
      fieldsets.forEach(function (fieldset) {
        var showname = fieldset.querySelector("input[name*=title]").value;
        var slots = fieldset.querySelector("input[name*=slots]").value.split(",");

        if (slots != "" && showname != "") {
          slots.forEach(function (slot) {
            slot = slot.trim();

            if (!preferences[slot]) {
              preferences[slot] = [showname];
            } else {
              preferences[slot].push(showname);
            }
          });
        }
      });
      var season_options = [];
      console.log(preferences, Object.keys(preferences));
      var s = something(preferences, Object.keys(preferences), 0);
      var n_o_html = "";
      n_o_html += "<h3>You have: " + s.length + " options for this season</h3>";
      n_o_html += "<ul>";
      s.forEach(function (season) {
        n_o_html += "<li><ol>";
        season.reverse().forEach(function (show, slotMinus) {
          slot = slotMinus + 1;
          n_o_html += "<li>" + show + "</li>";
        });
        n_o_html += "</ol></li>";
      });
      n_o_html += "</ul>";
      document.querySelector(".season__option").innerHTML = n_o_html;
      console.log(s);
    }

    function something(object, keys, index) {
      //console.log("index:", index, "keys:", keys);
      if (index + 1 < keys.length) {
        var after = something(object, keys, index + 1);
        var oki = object[keys[index]];
        var n = [];

        for (var _perm in after) {
          var perm = after[_perm]; // One option for after this slot

          for (var _slot in oki) {
            try {
              var slot = oki[_slot]; // The current show for this slot

              var perm2 = perm.slice(0);
              console.log(perm2, slot);

              if (perm2.indexOf(slot) == -1) {
                //console.log('before', perm2);
                perm2.push(slot); //console.log('after',perm2);

                n.push(perm2); //console.log('n',n);
              }
            } catch (e) {
              console.error(e);
            }
          }
        }

        console.log('n', n);
        return n;
      } else {
        return object[keys[index]].map(function (x) {
          return [x];
        });
      }
    }
    /***/

  },

  /***/
  "./_assets/js/vue_components/Counter.vue":
  /*!***********************************************!*\
    !*** ./_assets/js/vue_components/Counter.vue ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function _assetsJsVue_componentsCounterVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _Counter_vue_vue_type_template_id_6e138177___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Counter.vue?vue&type=template&id=6e138177& */
    "./_assets/js/vue_components/Counter.vue?vue&type=template&id=6e138177&");
    /* harmony import */


    var _Counter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Counter.vue?vue&type=script&lang=js& */
    "./_assets/js/vue_components/Counter.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Counter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _Counter_vue_vue_type_template_id_6e138177___WEBPACK_IMPORTED_MODULE_0__["render"], _Counter_vue_vue_type_template_id_6e138177___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "_assets/js/vue_components/Counter.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./_assets/js/vue_components/Counter.vue?vue&type=script&lang=js&":
  /*!************************************************************************!*\
    !*** ./_assets/js/vue_components/Counter.vue?vue&type=script&lang=js& ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function _assetsJsVue_componentsCounterVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Counter.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./_assets/js/vue_components/Counter.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./_assets/js/vue_components/Counter.vue?vue&type=template&id=6e138177&":
  /*!******************************************************************************!*\
    !*** ./_assets/js/vue_components/Counter.vue?vue&type=template&id=6e138177& ***!
    \******************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function _assetsJsVue_componentsCounterVueVueTypeTemplateId6e138177(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_template_id_6e138177___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Counter.vue?vue&type=template&id=6e138177& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./_assets/js/vue_components/Counter.vue?vue&type=template&id=6e138177&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_template_id_6e138177___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_template_id_6e138177___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./_assets/js/vue_components/SeasonGen.vue":
  /*!*************************************************!*\
    !*** ./_assets/js/vue_components/SeasonGen.vue ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function _assetsJsVue_componentsSeasonGenVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _SeasonGen_vue_vue_type_template_id_323c7ba8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./SeasonGen.vue?vue&type=template&id=323c7ba8& */
    "./_assets/js/vue_components/SeasonGen.vue?vue&type=template&id=323c7ba8&");
    /* harmony import */


    var _SeasonGen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./SeasonGen.vue?vue&type=script&lang=js& */
    "./_assets/js/vue_components/SeasonGen.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SeasonGen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _SeasonGen_vue_vue_type_template_id_323c7ba8___WEBPACK_IMPORTED_MODULE_0__["render"], _SeasonGen_vue_vue_type_template_id_323c7ba8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "_assets/js/vue_components/SeasonGen.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./_assets/js/vue_components/SeasonGen.vue?vue&type=script&lang=js&":
  /*!**************************************************************************!*\
    !*** ./_assets/js/vue_components/SeasonGen.vue?vue&type=script&lang=js& ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function _assetsJsVue_componentsSeasonGenVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SeasonGen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SeasonGen.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./_assets/js/vue_components/SeasonGen.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SeasonGen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./_assets/js/vue_components/SeasonGen.vue?vue&type=template&id=323c7ba8&":
  /*!********************************************************************************!*\
    !*** ./_assets/js/vue_components/SeasonGen.vue?vue&type=template&id=323c7ba8& ***!
    \********************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function _assetsJsVue_componentsSeasonGenVueVueTypeTemplateId323c7ba8(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SeasonGen_vue_vue_type_template_id_323c7ba8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SeasonGen.vue?vue&type=template&id=323c7ba8& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./_assets/js/vue_components/SeasonGen.vue?vue&type=template&id=323c7ba8&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SeasonGen_vue_vue_type_template_id_323c7ba8___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SeasonGen_vue_vue_type_template_id_323c7ba8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./_assets/js/vue_components/TextGen.vue":
  /*!***********************************************!*\
    !*** ./_assets/js/vue_components/TextGen.vue ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function _assetsJsVue_componentsTextGenVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _TextGen_vue_vue_type_template_id_b46ef244___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./TextGen.vue?vue&type=template&id=b46ef244& */
    "./_assets/js/vue_components/TextGen.vue?vue&type=template&id=b46ef244&");
    /* harmony import */


    var _TextGen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./TextGen.vue?vue&type=script&lang=js& */
    "./_assets/js/vue_components/TextGen.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TextGen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _TextGen_vue_vue_type_template_id_b46ef244___WEBPACK_IMPORTED_MODULE_0__["render"], _TextGen_vue_vue_type_template_id_b46ef244___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, null, null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "_assets/js/vue_components/TextGen.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./_assets/js/vue_components/TextGen.vue?vue&type=script&lang=js&":
  /*!************************************************************************!*\
    !*** ./_assets/js/vue_components/TextGen.vue?vue&type=script&lang=js& ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function _assetsJsVue_componentsTextGenVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextGen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TextGen.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./_assets/js/vue_components/TextGen.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextGen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./_assets/js/vue_components/TextGen.vue?vue&type=template&id=b46ef244&":
  /*!******************************************************************************!*\
    !*** ./_assets/js/vue_components/TextGen.vue?vue&type=template&id=b46ef244& ***!
    \******************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function _assetsJsVue_componentsTextGenVueVueTypeTemplateIdB46ef244(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextGen_vue_vue_type_template_id_b46ef244___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TextGen.vue?vue&type=template&id=b46ef244& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./_assets/js/vue_components/TextGen.vue?vue&type=template&id=b46ef244&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextGen_vue_vue_type_template_id_b46ef244___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextGen_vue_vue_type_template_id_b46ef244___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./_assets/sass/style.scss":
  /*!*********************************!*\
    !*** ./_assets/sass/style.scss ***!
    \*********************************/

  /*! no static exports found */

  /***/
  function _assetsSassStyleScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./_assets/js/vue_components/Counter.vue?vue&type=script&lang=js&":
  /*!********************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./_assets/js/vue_components/Counter.vue?vue&type=script&lang=js& ***!
    \********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJs_assetsJsVue_componentsCounterVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      data: function data() {
        return {
          count: 0,
          increment: 1,
          button_classes: ["button", "button--center", "p-y-1", "font-size-10"]
        };
      },
      methods: {
        keyboardCounter: function keyboardCounter(e) {
          switch (e.keyCode) {
            case 75:
            case 87:
            case 38:
              this.countUp();
              break;

            case 74:
            case 83:
            case 40:
              this.countDown();
              break;
          }
        },
        parseFloat: function (_parseFloat) {
          function parseFloat(_x) {
            return _parseFloat.apply(this, arguments);
          }

          parseFloat.toString = function () {
            return _parseFloat.toString();
          };

          return parseFloat;
        }(function (val) {
          var new_val = parseFloat(val);

          if (isNaN(new_val)) {
            new_val = 0;
          }

          return new_val;
        }),
        countUp: function countUp() {
          this.count = this.parseFloat(this.parseFloat(this.count) + this.parseFloat(this.increment));
        },
        countDown: function countDown() {
          this.count = this.parseFloat(this.parseFloat(this.count) - this.parseFloat(this.increment));
        },
        incrementUp: function incrementUp() {
          this.increment++;
        },
        incrementDown: function incrementDown() {
          this.increment--;
        },
        makeIncrementNumber: function makeIncrementNumber() {
          this.increment = this.parseFloat(this.increment);
        },
        makeCounterNumber: function makeCounterNumber() {
          this.counter = this.parseFloat(this.counter);
        }
      },
      mounted: function mounted() {
        document.addEventListener("keydown", this.keyboardCounter);
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./_assets/js/vue_components/SeasonGen.vue?vue&type=script&lang=js&":
  /*!**********************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./_assets/js/vue_components/SeasonGen.vue?vue&type=script&lang=js& ***!
    \**********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJs_assetsJsVue_componentsSeasonGenVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      data: function data() {
        return {
          shows_slots: [{
            id: 0,
            show: "Show 1",
            slots: "1,2"
          }, {
            id: 1,
            show: "Show 2",
            slots: "3"
          }, {
            id: 2,
            show: "Show 3",
            slots: "4,5"
          }, {
            id: 3,
            show: "Show 4",
            slots: "1,3,5"
          }, {
            id: 4,
            show: "Show 5",
            slots: "2,4"
          }]
        };
      },
      methods: {
        recurse_generate: function recurse_generate(object, keys, index) {
          //console.log("index:", index, "keys:", keys);
          if (index + 1 < keys.length) {
            var after = this.recurse_generate(object, keys, index + 1);
            var oki = object[keys[index]];
            var n = [];

            for (var _perm in after) {
              var perm = after[_perm]; // One option for after this slot

              for (var _slot in oki) {
                try {
                  var slot = oki[_slot]; // The current show for this slot

                  var perm2 = perm.slice(0); // console.log(perm2, slot);

                  if (perm2.indexOf(slot) == -1) {
                    perm2.push(slot);
                    n.push(perm2);
                  }
                } catch (e) {
                  console.error(e);
                }
              }
            }

            return n;
          } else {
            return object[keys[index]].map(function (x) {
              return [x];
            });
          }
        }
      },
      computed: {
        permutations: function permutations() {
          var preferences = [];
          this.shows_slots.forEach(function (show_slots) {
            var showname = show_slots.show;
            var slots = show_slots.slots.split(",");

            if (slots != "" && showname != "") {
              slots.forEach(function (slot) {
                slot = slot.trim();

                if (slot !== "") {
                  if (!preferences[slot]) {
                    preferences[slot] = [showname];
                  } else {
                    preferences[slot].push(showname);
                  }
                }
              });
            }
          });
          return this.recurse_generate(preferences, Object.keys(preferences), 0);
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./_assets/js/vue_components/TextGen.vue?vue&type=script&lang=js&":
  /*!********************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./_assets/js/vue_components/TextGen.vue?vue&type=script&lang=js& ***!
    \********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJs_assetsJsVue_componentsTextGenVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      data: function data() {
        return {
          input_text: "\nme: A blue message on the right of the screen\n\nthem: A grey message on the left of the screen\n\ntime: Grey bolded text at the center of the screen\n\nAnd this text won't be shown at all!\n",
          input_class: ""
        };
      },
      methods: {
        toggleFloat: function toggleFloat() {
          if (this.input_class === null) {
            this.input_class = "floating";
          } else {
            this.input_class = null;
          }
        }
      },
      computed: {
        texts: function texts() {
          var regex = /(.+?)(: *?)([\s\S]+)/;
          var texts = this.input_text.split("\n\n"); // console.log(texts);

          var lastPerson = "";
          var all_texts = [];
          texts.forEach(function (text) {
            // console.log(text);
            var split_text = text.split(regex);
            var person = split_text[1];
            var message = split_text[3];

            if (!(person && message)) {
              return false;
            } // console.log(person, message);


            person = person.trim();
            message = message.trim();
            var textClasses = ["text"];
            var messageClasses = ["message"];

            if (lastPerson !== person) {
              textClasses.push("text--chain-top");
              messageClasses.push("message--chain-top");
            }

            switch (person.toLowerCase()) {
              case "me":
                textClasses.push("text--me");
                messageClasses.push("message--me");
                break;

              case "them":
                textClasses.push("text--them");
                messageClasses.push("message--them");
                break;

              case "time":
                textClasses.push("text--time");
                messageClasses.push("message--time");
                break;

              default:
                break;
            }

            all_texts.push({
              textClasses: textClasses,
              messageClasses: messageClasses,
              message: message
            });
            lastPerson = person;
          });
          return all_texts;
        }
      },
      mounted: function mounted() {
        this.input_text = this.input_text.trim();
      }
    };
    /***/
  },

  /***/
  "./node_modules/process/browser.js":
  /*!*****************************************!*\
    !*** ./node_modules/process/browser.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesProcessBrowserJs(module, exports) {
    // shim for using process in browser
    var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.

    var cachedSetTimeout;
    var cachedClearTimeout;

    function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
    }

    function defaultClearTimeout() {
      throw new Error('clearTimeout has not been defined');
    }

    (function () {
      try {
        if (typeof setTimeout === 'function') {
          cachedSetTimeout = setTimeout;
        } else {
          cachedSetTimeout = defaultSetTimout;
        }
      } catch (e) {
        cachedSetTimeout = defaultSetTimout;
      }

      try {
        if (typeof clearTimeout === 'function') {
          cachedClearTimeout = clearTimeout;
        } else {
          cachedClearTimeout = defaultClearTimeout;
        }
      } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
      }
    })();

    function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
      } // if setTimeout wasn't available but was latter defined


      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
      }

      try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
      } catch (e) {
        try {
          // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
          return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
          // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
          return cachedSetTimeout.call(this, fun, 0);
        }
      }
    }

    function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
      } // if clearTimeout wasn't available but was latter defined


      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
      }

      try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
      } catch (e) {
        try {
          // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
          return cachedClearTimeout.call(null, marker);
        } catch (e) {
          // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
          // Some versions of I.E. have different rules for clearTimeout vs setTimeout
          return cachedClearTimeout.call(this, marker);
        }
      }
    }

    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
      if (!draining || !currentQueue) {
        return;
      }

      draining = false;

      if (currentQueue.length) {
        queue = currentQueue.concat(queue);
      } else {
        queueIndex = -1;
      }

      if (queue.length) {
        drainQueue();
      }
    }

    function drainQueue() {
      if (draining) {
        return;
      }

      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
      var len = queue.length;

      while (len) {
        currentQueue = queue;
        queue = [];

        while (++queueIndex < len) {
          if (currentQueue) {
            currentQueue[queueIndex].run();
          }
        }

        queueIndex = -1;
        len = queue.length;
      }

      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
    }

    process.nextTick = function (fun) {
      var args = new Array(arguments.length - 1);

      if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
          args[i - 1] = arguments[i];
        }
      }

      queue.push(new Item(fun, args));

      if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
      }
    }; // v8 likes predictible objects


    function Item(fun, array) {
      this.fun = fun;
      this.array = array;
    }

    Item.prototype.run = function () {
      this.fun.apply(null, this.array);
    };

    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues

    process.versions = {};

    function noop() {}

    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;

    process.listeners = function (name) {
      return [];
    };

    process.binding = function (name) {
      throw new Error('process.binding is not supported');
    };

    process.cwd = function () {
      return '/';
    };

    process.chdir = function (dir) {
      throw new Error('process.chdir is not supported');
    };

    process.umask = function () {
      return 0;
    };
    /***/

  },

  /***/
  "./node_modules/setimmediate/setImmediate.js":
  /*!***************************************************!*\
    !*** ./node_modules/setimmediate/setImmediate.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSetimmediateSetImmediateJs(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function (global, process) {
      (function (global, undefined) {
        "use strict";

        if (global.setImmediate) {
          return;
        }

        var nextHandle = 1; // Spec says greater than zero

        var tasksByHandle = {};
        var currentlyRunningATask = false;
        var doc = global.document;
        var registerImmediate;

        function setImmediate(callback) {
          // Callback can either be a function or a string
          if (typeof callback !== "function") {
            callback = new Function("" + callback);
          } // Copy function arguments


          var args = new Array(arguments.length - 1);

          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
          } // Store and register the task


          var task = {
            callback: callback,
            args: args
          };
          tasksByHandle[nextHandle] = task;
          registerImmediate(nextHandle);
          return nextHandle++;
        }

        function clearImmediate(handle) {
          delete tasksByHandle[handle];
        }

        function run(task) {
          var callback = task.callback;
          var args = task.args;

          switch (args.length) {
            case 0:
              callback();
              break;

            case 1:
              callback(args[0]);
              break;

            case 2:
              callback(args[0], args[1]);
              break;

            case 3:
              callback(args[0], args[1], args[2]);
              break;

            default:
              callback.apply(undefined, args);
              break;
          }
        }

        function runIfPresent(handle) {
          // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
          // So if we're currently running a task, we'll need to delay this invocation.
          if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
          } else {
            var task = tasksByHandle[handle];

            if (task) {
              currentlyRunningATask = true;

              try {
                run(task);
              } finally {
                clearImmediate(handle);
                currentlyRunningATask = false;
              }
            }
          }
        }

        function installNextTickImplementation() {
          registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
              runIfPresent(handle);
            });
          };
        }

        function canUsePostMessage() {
          // The test against `importScripts` prevents this implementation from being installed inside a web worker,
          // where `global.postMessage` means something completely different and can't be used for this purpose.
          if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;

            global.onmessage = function () {
              postMessageIsAsynchronous = false;
            };

            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
          }
        }

        function installPostMessageImplementation() {
          // Installs an event handler on `global` for the `message` event: see
          // * https://developer.mozilla.org/en/DOM/window.postMessage
          // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
          var messagePrefix = "setImmediate$" + Math.random() + "$";

          var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
              runIfPresent(+event.data.slice(messagePrefix.length));
            }
          };

          if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
          } else {
            global.attachEvent("onmessage", onGlobalMessage);
          }

          registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
          };
        }

        function installMessageChannelImplementation() {
          var channel = new MessageChannel();

          channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
          };

          registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
          };
        }

        function installReadyStateChangeImplementation() {
          var html = doc.documentElement;

          registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");

            script.onreadystatechange = function () {
              runIfPresent(handle);
              script.onreadystatechange = null;
              html.removeChild(script);
              script = null;
            };

            html.appendChild(script);
          };
        }

        function installSetTimeoutImplementation() {
          registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
          };
        } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


        var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
        attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

        if ({}.toString.call(global.process) === "[object process]") {
          // For Node.js before 0.9
          installNextTickImplementation();
        } else if (canUsePostMessage()) {
          // For non-IE10 modern browsers
          installPostMessageImplementation();
        } else if (global.MessageChannel) {
          // For web workers, where supported
          installMessageChannelImplementation();
        } else if (doc && "onreadystatechange" in doc.createElement("script")) {
          // For IE 6–8
          installReadyStateChangeImplementation();
        } else {
          // For older browsers
          installSetTimeoutImplementation();
        }

        attachTo.setImmediate = setImmediate;
        attachTo.clearImmediate = clearImmediate;
      })(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
      /* WEBPACK VAR INJECTION */

    }).call(this, __webpack_require__(
    /*! ./../webpack/buildin/global.js */
    "./node_modules/webpack/buildin/global.js"), __webpack_require__(
    /*! ./../process/browser.js */
    "./node_modules/process/browser.js"));
    /***/
  },

  /***/
  "./node_modules/timers-browserify/main.js":
  /*!************************************************!*\
    !*** ./node_modules/timers-browserify/main.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesTimersBrowserifyMainJs(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function (global) {
      var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
      var apply = Function.prototype.apply; // DOM APIs, for completeness

      exports.setTimeout = function () {
        return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
      };

      exports.setInterval = function () {
        return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
      };

      exports.clearTimeout = exports.clearInterval = function (timeout) {
        if (timeout) {
          timeout.close();
        }
      };

      function Timeout(id, clearFn) {
        this._id = id;
        this._clearFn = clearFn;
      }

      Timeout.prototype.unref = Timeout.prototype.ref = function () {};

      Timeout.prototype.close = function () {
        this._clearFn.call(scope, this._id);
      }; // Does not start the time, just sets up the members needed.


      exports.enroll = function (item, msecs) {
        clearTimeout(item._idleTimeoutId);
        item._idleTimeout = msecs;
      };

      exports.unenroll = function (item) {
        clearTimeout(item._idleTimeoutId);
        item._idleTimeout = -1;
      };

      exports._unrefActive = exports.active = function (item) {
        clearTimeout(item._idleTimeoutId);
        var msecs = item._idleTimeout;

        if (msecs >= 0) {
          item._idleTimeoutId = setTimeout(function onTimeout() {
            if (item._onTimeout) item._onTimeout();
          }, msecs);
        }
      }; // setimmediate attaches itself to the global object


      __webpack_require__(
      /*! setimmediate */
      "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
      // able to install onto.  Search each possibility in the same order as the
      // `setimmediate` library.


      exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
      exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(
    /*! ./../webpack/buildin/global.js */
    "./node_modules/webpack/buildin/global.js"));
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./_assets/js/vue_components/Counter.vue?vue&type=template&id=6e138177&":
  /*!************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./_assets/js/vue_components/Counter.vue?vue&type=template&id=6e138177& ***!
    \************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJs_assetsJsVue_componentsCounterVueVueTypeTemplateId6e138177(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("div", {
        staticClass: "p-y-2 counter"
      }, [_c("div", {
        staticClass: "counter__counter"
      }, [_c("h3", [_vm._v("Counter")]), _vm._v(" "), _c("div", {
        "class": _vm.button_classes,
        on: {
          click: function click($event) {
            return _vm.countUp();
          }
        }
      }, [_vm._v("+" + _vm._s(_vm.increment))]), _vm._v(" "), _c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.count,
          expression: "count"
        }],
        staticClass: "m-y-3 font-size-5",
        attrs: {
          type: "text",
          pattern: "\\d",
          name: "counter"
        },
        domProps: {
          value: _vm.count
        },
        on: {
          change: function change($event) {
            return _vm.makeCounterNumber();
          },
          input: function input($event) {
            if ($event.target.composing) {
              return;
            }

            _vm.count = $event.target.value;
          }
        }
      }), _vm._v(" "), _c("div", {
        "class": _vm.button_classes,
        on: {
          click: function click($event) {
            return _vm.countDown();
          }
        }
      }, [_vm._v("-" + _vm._s(_vm.increment))])]), _vm._v(" "), _c("div", {
        staticClass: "counter__increment"
      }, [_c("h3", [_vm._v("Increment")]), _vm._v(" "), _c("div", {
        "class": _vm.button_classes,
        on: {
          click: function click($event) {
            return _vm.incrementUp();
          }
        }
      }, [_vm._v("+")]), _vm._v(" "), _c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.increment,
          expression: "increment"
        }],
        staticClass: "m-y-3 font-size-5",
        attrs: {
          type: "text",
          pattern: "\\d",
          name: "counter"
        },
        domProps: {
          value: _vm.increment
        },
        on: {
          change: function change($event) {
            return _vm.makeIncrementNumber();
          },
          input: function input($event) {
            if ($event.target.composing) {
              return;
            }

            _vm.increment = $event.target.value;
          }
        }
      }), _vm._v(" "), _c("div", {
        "class": _vm.button_classes,
        on: {
          click: function click($event) {
            return _vm.incrementDown();
          }
        }
      }, [_vm._v("-")])])]);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./_assets/js/vue_components/SeasonGen.vue?vue&type=template&id=323c7ba8&":
  /*!**************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./_assets/js/vue_components/SeasonGen.vue?vue&type=template&id=323c7ba8& ***!
    \**************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJs_assetsJsVue_componentsSeasonGenVueVueTypeTemplateId323c7ba8(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("div", [_vm._l(_vm.shows_slots, function (show_slots) {
        return _c("div", {
          key: show_slots,
          staticClass: "p-y-1"
        }, [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: show_slots.show,
            expression: "show_slots.show"
          }],
          domProps: {
            value: show_slots.show
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) {
                return;
              }

              _vm.$set(show_slots, "show", $event.target.value);
            }
          }
        }), _vm._v(" "), _c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: show_slots.slots,
            expression: "show_slots.slots"
          }],
          domProps: {
            value: show_slots.slots
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) {
                return;
              }

              _vm.$set(show_slots, "slots", $event.target.value);
            }
          }
        })]);
      }), _vm._v(" "), _c("div", {
        staticClass: "p-y-1"
      }, [_c("button", {
        on: {
          click: function click($event) {
            return _vm.shows_slots.push({
              id: _vm.shows_slots.length
            });
          }
        }
      }, [_vm._v("\n      Add new\n    ")])]), _vm._v(" "), _vm.permutations.length ? _c("span", _vm._l(_vm.permutations, function (permutation) {
        return _c("ol", {
          key: permutation
        }, _vm._l(permutation, function (show) {
          return _c("li", {
            key: show,
            domProps: {
              textContent: _vm._s(show)
            }
          });
        }), 0);
      }), 0) : _c("h2", [_vm._v("No valid seasons exist")])], 2);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./_assets/js/vue_components/TextGen.vue?vue&type=template&id=b46ef244&":
  /*!************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./_assets/js/vue_components/TextGen.vue?vue&type=template&id=b46ef244& ***!
    \************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJs_assetsJsVue_componentsTextGenVueVueTypeTemplateIdB46ef244(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("div", {
        staticClass: "risky-texts__wrapper",
        attrs: {
          id: "app"
        }
      }, [_c("div", {
        staticClass: "risky-texts__input"
      }, [_vm._m(0), _vm._v(" "), _c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.input_text,
          expression: "input_text"
        }],
        "class": _vm.input_class,
        attrs: {
          id: "input-form",
          rows: "7"
        },
        domProps: {
          value: _vm.input_text
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) {
              return;
            }

            _vm.input_text = $event.target.value;
          }
        }
      }), _vm._v(" "), _c("button", {
        staticClass: "p-2",
        on: {
          click: function click($event) {
            return _vm.toggleFloat();
          }
        }
      }, [_vm._v("Toggle Floating Editor")])]), _vm._v(" "), _c("div", {
        staticClass: "risky-texts__display",
        attrs: {
          id: "all-texts-div"
        }
      }, _vm._l(_vm.texts, function (text) {
        return _c("div", {
          key: text,
          "class": text.messageClasses
        }, [_c("div", {
          "class": text.textClasses,
          domProps: {
            textContent: _vm._s(text.message)
          }
        })]);
      }), 0)]);
    };

    var staticRenderFns = [function () {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("label", {
        attrs: {
          "for": "input-form"
        }
      }, [_vm._v("\n      Please enter your texts here!"), _c("br"), _vm._v("\n      They should be of the form "), _c("em", [_vm._v("person: message")]), _vm._v(", where\n      "), _c("em", [_vm._v("person")]), _vm._v(" is one of:\n      "), _c("ul", [_c("li", [_c("em", [_vm._v("me")]), _vm._v(", blue messages from the right of the screen")]), _vm._v(" "), _c("li", [_c("em", [_vm._v("them")]), _vm._v(", grey messages from the left of the screen")]), _vm._v(" "), _c("li", [_c("em", [_vm._v("time")]), _vm._v(", grey text in the center of the screen,")])]), _vm._v("\n      and they should be separated by new lines (i.e. one empty line between\n      texts).\n    ")]);
    }];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
  /*!********************************************************************!*\
    !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesVueLoaderLibRuntimeComponentNormalizerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return normalizeComponent;
    });
    /* globals __VUE_SSR_CONTEXT__ */
    // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
    // This module is a runtime utility for cleaner component module output and will
    // be included in the final webpack user bundle.


    function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier,
    /* server only */
    shadowMode
    /* vue-cli only */
    ) {
      // Vue.extend constructor export interop
      var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports; // render functions

      if (render) {
        options.render = render;
        options.staticRenderFns = staticRenderFns;
        options._compiled = true;
      } // functional template


      if (functionalTemplate) {
        options.functional = true;
      } // scopedId


      if (scopeId) {
        options._scopeId = 'data-v-' + scopeId;
      }

      var hook;

      if (moduleIdentifier) {
        // server build
        hook = function hook(context) {
          // 2.3 injection
          context = context || // cached call
          this.$vnode && this.$vnode.ssrContext || // stateful
          this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
          // 2.2 with runInNewContext: true

          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__;
          } // inject component styles


          if (injectStyles) {
            injectStyles.call(this, context);
          } // register component module identifier for async chunk inferrence


          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        }; // used by ssr in case component is cached and beforeCreate
        // never gets called


        options._ssrRegister = hook;
      } else if (injectStyles) {
        hook = shadowMode ? function () {
          injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
        } : injectStyles;
      }

      if (hook) {
        if (options.functional) {
          // for template-only hot-reload because in that case the render fn doesn't
          // go through the normalizer
          options._injectStyles = hook; // register for functional component in vue file

          var originalRender = options.render;

          options.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = options.beforeCreate;
          options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }

      return {
        exports: scriptExports,
        options: options
      };
    }
    /***/

  },

  /***/
  "./node_modules/vue/dist/vue.common.dev.js":
  /*!*************************************************!*\
    !*** ./node_modules/vue/dist/vue.common.dev.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesVueDistVueCommonDevJs(module, exports, __webpack_require__) {
    "use strict";
    /* WEBPACK VAR INJECTION */

    (function (global, setImmediate) {
      /*!
      * Vue.js v2.6.12
      * (c) 2014-2020 Evan You
      * Released under the MIT License.
      */

      /*  */
      var emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
      // explicitness and function inlining.

      function isUndef(v) {
        return v === undefined || v === null;
      }

      function isDef(v) {
        return v !== undefined && v !== null;
      }

      function isTrue(v) {
        return v === true;
      }

      function isFalse(v) {
        return v === false;
      }
      /**
       * Check if value is primitive.
       */


      function isPrimitive(value) {
        return typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
        _typeof(value) === 'symbol' || typeof value === 'boolean';
      }
      /**
       * Quick object check - this is primarily used to tell
       * Objects from primitive values when we know the value
       * is a JSON-compliant type.
       */


      function isObject(obj) {
        return obj !== null && _typeof(obj) === 'object';
      }
      /**
       * Get the raw type string of a value, e.g., [object Object].
       */


      var _toString = Object.prototype.toString;

      function toRawType(value) {
        return _toString.call(value).slice(8, -1);
      }
      /**
       * Strict object type check. Only returns true
       * for plain JavaScript objects.
       */


      function isPlainObject(obj) {
        return _toString.call(obj) === '[object Object]';
      }

      function isRegExp(v) {
        return _toString.call(v) === '[object RegExp]';
      }
      /**
       * Check if val is a valid array index.
       */


      function isValidArrayIndex(val) {
        var n = parseFloat(String(val));
        return n >= 0 && Math.floor(n) === n && isFinite(val);
      }

      function isPromise(val) {
        return isDef(val) && typeof val.then === 'function' && typeof val["catch"] === 'function';
      }
      /**
       * Convert a value to a string that is actually rendered.
       */


      function toString(val) {
        return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
      }
      /**
       * Convert an input value to a number for persistence.
       * If the conversion fails, return original string.
       */


      function toNumber(val) {
        var n = parseFloat(val);
        return isNaN(n) ? val : n;
      }
      /**
       * Make a map and return a function for checking if a key
       * is in that map.
       */


      function makeMap(str, expectsLowerCase) {
        var map = Object.create(null);
        var list = str.split(',');

        for (var i = 0; i < list.length; i++) {
          map[list[i]] = true;
        }

        return expectsLowerCase ? function (val) {
          return map[val.toLowerCase()];
        } : function (val) {
          return map[val];
        };
      }
      /**
       * Check if a tag is a built-in tag.
       */


      var isBuiltInTag = makeMap('slot,component', true);
      /**
       * Check if an attribute is a reserved attribute.
       */

      var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
      /**
       * Remove an item from an array.
       */

      function remove(arr, item) {
        if (arr.length) {
          var index = arr.indexOf(item);

          if (index > -1) {
            return arr.splice(index, 1);
          }
        }
      }
      /**
       * Check whether an object has the property.
       */


      var hasOwnProperty = Object.prototype.hasOwnProperty;

      function hasOwn(obj, key) {
        return hasOwnProperty.call(obj, key);
      }
      /**
       * Create a cached version of a pure function.
       */


      function cached(fn) {
        var cache = Object.create(null);
        return function cachedFn(str) {
          var hit = cache[str];
          return hit || (cache[str] = fn(str));
        };
      }
      /**
       * Camelize a hyphen-delimited string.
       */


      var camelizeRE = /-(\w)/g;
      var camelize = cached(function (str) {
        return str.replace(camelizeRE, function (_, c) {
          return c ? c.toUpperCase() : '';
        });
      });
      /**
       * Capitalize a string.
       */

      var capitalize = cached(function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      });
      /**
       * Hyphenate a camelCase string.
       */

      var hyphenateRE = /\B([A-Z])/g;
      var hyphenate = cached(function (str) {
        return str.replace(hyphenateRE, '-$1').toLowerCase();
      });
      /**
       * Simple bind polyfill for environments that do not support it,
       * e.g., PhantomJS 1.x. Technically, we don't need this anymore
       * since native bind is now performant enough in most browsers.
       * But removing it would mean breaking code that was able to run in
       * PhantomJS 1.x, so this must be kept for backward compatibility.
       */

      /* istanbul ignore next */

      function polyfillBind(fn, ctx) {
        function boundFn(a) {
          var l = arguments.length;
          return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
        }

        boundFn._length = fn.length;
        return boundFn;
      }

      function nativeBind(fn, ctx) {
        return fn.bind(ctx);
      }

      var bind = Function.prototype.bind ? nativeBind : polyfillBind;
      /**
       * Convert an Array-like object to a real Array.
       */

      function toArray(list, start) {
        start = start || 0;
        var i = list.length - start;
        var ret = new Array(i);

        while (i--) {
          ret[i] = list[i + start];
        }

        return ret;
      }
      /**
       * Mix properties into target object.
       */


      function extend(to, _from) {
        for (var key in _from) {
          to[key] = _from[key];
        }

        return to;
      }
      /**
       * Merge an Array of Objects into a single Object.
       */


      function toObject(arr) {
        var res = {};

        for (var i = 0; i < arr.length; i++) {
          if (arr[i]) {
            extend(res, arr[i]);
          }
        }

        return res;
      }
      /* eslint-disable no-unused-vars */

      /**
       * Perform no operation.
       * Stubbing args to make Flow happy without leaving useless transpiled code
       * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
       */


      function noop(a, b, c) {}
      /**
       * Always return false.
       */


      var no = function no(a, b, c) {
        return false;
      };
      /* eslint-enable no-unused-vars */

      /**
       * Return the same value.
       */


      var identity = function identity(_) {
        return _;
      };
      /**
       * Generate a string containing static keys from compiler modules.
       */


      function genStaticKeys(modules) {
        return modules.reduce(function (keys, m) {
          return keys.concat(m.staticKeys || []);
        }, []).join(',');
      }
      /**
       * Check if two values are loosely equal - that is,
       * if they are plain objects, do they have the same shape?
       */


      function looseEqual(a, b) {
        if (a === b) {
          return true;
        }

        var isObjectA = isObject(a);
        var isObjectB = isObject(b);

        if (isObjectA && isObjectB) {
          try {
            var isArrayA = Array.isArray(a);
            var isArrayB = Array.isArray(b);

            if (isArrayA && isArrayB) {
              return a.length === b.length && a.every(function (e, i) {
                return looseEqual(e, b[i]);
              });
            } else if (a instanceof Date && b instanceof Date) {
              return a.getTime() === b.getTime();
            } else if (!isArrayA && !isArrayB) {
              var keysA = Object.keys(a);
              var keysB = Object.keys(b);
              return keysA.length === keysB.length && keysA.every(function (key) {
                return looseEqual(a[key], b[key]);
              });
            } else {
              /* istanbul ignore next */
              return false;
            }
          } catch (e) {
            /* istanbul ignore next */
            return false;
          }
        } else if (!isObjectA && !isObjectB) {
          return String(a) === String(b);
        } else {
          return false;
        }
      }
      /**
       * Return the first index at which a loosely equal value can be
       * found in the array (if value is a plain object, the array must
       * contain an object of the same shape), or -1 if it is not present.
       */


      function looseIndexOf(arr, val) {
        for (var i = 0; i < arr.length; i++) {
          if (looseEqual(arr[i], val)) {
            return i;
          }
        }

        return -1;
      }
      /**
       * Ensure a function is called only once.
       */


      function once(fn) {
        var called = false;
        return function () {
          if (!called) {
            called = true;
            fn.apply(this, arguments);
          }
        };
      }

      var SSR_ATTR = 'data-server-rendered';
      var ASSET_TYPES = ['component', 'directive', 'filter'];
      var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];
      /*  */

      var config = {
        /**
         * Option merge strategies (used in core/util/options)
         */
        // $flow-disable-line
        optionMergeStrategies: Object.create(null),

        /**
         * Whether to suppress warnings.
         */
        silent: false,

        /**
         * Show production mode tip message on boot?
         */
        productionTip: "development" !== 'production',

        /**
         * Whether to enable devtools
         */
        devtools: "development" !== 'production',

        /**
         * Whether to record perf
         */
        performance: false,

        /**
         * Error handler for watcher errors
         */
        errorHandler: null,

        /**
         * Warn handler for watcher warns
         */
        warnHandler: null,

        /**
         * Ignore certain custom elements
         */
        ignoredElements: [],

        /**
         * Custom user key aliases for v-on
         */
        // $flow-disable-line
        keyCodes: Object.create(null),

        /**
         * Check if a tag is reserved so that it cannot be registered as a
         * component. This is platform-dependent and may be overwritten.
         */
        isReservedTag: no,

        /**
         * Check if an attribute is reserved so that it cannot be used as a component
         * prop. This is platform-dependent and may be overwritten.
         */
        isReservedAttr: no,

        /**
         * Check if a tag is an unknown element.
         * Platform-dependent.
         */
        isUnknownElement: no,

        /**
         * Get the namespace of an element
         */
        getTagNamespace: noop,

        /**
         * Parse the real tag name for the specific platform.
         */
        parsePlatformTagName: identity,

        /**
         * Check if an attribute must be bound using property, e.g. value
         * Platform-dependent.
         */
        mustUseProp: no,

        /**
         * Perform updates asynchronously. Intended to be used by Vue Test Utils
         * This will significantly reduce performance if set to false.
         */
        async: true,

        /**
         * Exposed for legacy reasons
         */
        _lifecycleHooks: LIFECYCLE_HOOKS
      };
      /*  */

      /**
       * unicode letters used for parsing html tags, component names and property paths.
       * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
       * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
       */

      var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
      /**
       * Check if a string starts with $ or _
       */

      function isReserved(str) {
        var c = (str + '').charCodeAt(0);
        return c === 0x24 || c === 0x5F;
      }
      /**
       * Define a property.
       */


      function def(obj, key, val, enumerable) {
        Object.defineProperty(obj, key, {
          value: val,
          enumerable: !!enumerable,
          writable: true,
          configurable: true
        });
      }
      /**
       * Parse simple path.
       */


      var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");

      function parsePath(path) {
        if (bailRE.test(path)) {
          return;
        }

        var segments = path.split('.');
        return function (obj) {
          for (var i = 0; i < segments.length; i++) {
            if (!obj) {
              return;
            }

            obj = obj[segments[i]];
          }

          return obj;
        };
      }
      /*  */
      // can we use __proto__?


      var hasProto = ('__proto__' in {}); // Browser environment sniffing

      var inBrowser = typeof window !== 'undefined';
      var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
      var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
      var UA = inBrowser && window.navigator.userAgent.toLowerCase();
      var isIE = UA && /msie|trident/.test(UA);
      var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
      var isEdge = UA && UA.indexOf('edge/') > 0;
      var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
      var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
      var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
      var isPhantomJS = UA && /phantomjs/.test(UA);
      var isFF = UA && UA.match(/firefox\/(\d+)/); // Firefox has a "watch" function on Object.prototype...

      var nativeWatch = {}.watch;
      var supportsPassive = false;

      if (inBrowser) {
        try {
          var opts = {};
          Object.defineProperty(opts, 'passive', {
            get: function get() {
              /* istanbul ignore next */
              supportsPassive = true;
            }
          }); // https://github.com/facebook/flow/issues/285

          window.addEventListener('test-passive', null, opts);
        } catch (e) {}
      } // this needs to be lazy-evaled because vue may be required before
      // vue-server-renderer can set VUE_ENV


      var _isServer;

      var isServerRendering = function isServerRendering() {
        if (_isServer === undefined) {
          /* istanbul ignore if */
          if (!inBrowser && !inWeex && typeof global !== 'undefined') {
            // detect presence of vue-server-renderer and avoid
            // Webpack shimming the process
            _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
          } else {
            _isServer = false;
          }
        }

        return _isServer;
      }; // detect devtools


      var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
      /* istanbul ignore next */

      function isNative(Ctor) {
        return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
      }

      var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

      var _Set;
      /* istanbul ignore if */
      // $flow-disable-line


      if (typeof Set !== 'undefined' && isNative(Set)) {
        // use native Set when available.
        _Set = Set;
      } else {
        // a non-standard Set polyfill that only works with primitive keys.
        _Set = /*@__PURE__*/function () {
          function Set() {
            this.set = Object.create(null);
          }

          Set.prototype.has = function has(key) {
            return this.set[key] === true;
          };

          Set.prototype.add = function add(key) {
            this.set[key] = true;
          };

          Set.prototype.clear = function clear() {
            this.set = Object.create(null);
          };

          return Set;
        }();
      }
      /*  */


      var warn = noop;
      var tip = noop;
      var generateComponentTrace = noop; // work around flow check

      var formatComponentName = noop;
      {
        var hasConsole = typeof console !== 'undefined';
        var classifyRE = /(?:^|[-_])(\w)/g;

        var classify = function classify(str) {
          return str.replace(classifyRE, function (c) {
            return c.toUpperCase();
          }).replace(/[-_]/g, '');
        };

        warn = function warn(msg, vm) {
          var trace = vm ? generateComponentTrace(vm) : '';

          if (config.warnHandler) {
            config.warnHandler.call(null, msg, vm, trace);
          } else if (hasConsole && !config.silent) {
            console.error("[Vue warn]: " + msg + trace);
          }
        };

        tip = function tip(msg, vm) {
          if (hasConsole && !config.silent) {
            console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
          }
        };

        formatComponentName = function formatComponentName(vm, includeFile) {
          if (vm.$root === vm) {
            return '<Root>';
          }

          var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
          var name = options.name || options._componentTag;
          var file = options.__file;

          if (!name && file) {
            var match = file.match(/([^/\\]+)\.vue$/);
            name = match && match[1];
          }

          return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
        };

        var repeat = function repeat(str, n) {
          var res = '';

          while (n) {
            if (n % 2 === 1) {
              res += str;
            }

            if (n > 1) {
              str += str;
            }

            n >>= 1;
          }

          return res;
        };

        generateComponentTrace = function generateComponentTrace(vm) {
          if (vm._isVue && vm.$parent) {
            var tree = [];
            var currentRecursiveSequence = 0;

            while (vm) {
              if (tree.length > 0) {
                var last = tree[tree.length - 1];

                if (last.constructor === vm.constructor) {
                  currentRecursiveSequence++;
                  vm = vm.$parent;
                  continue;
                } else if (currentRecursiveSequence > 0) {
                  tree[tree.length - 1] = [last, currentRecursiveSequence];
                  currentRecursiveSequence = 0;
                }
              }

              tree.push(vm);
              vm = vm.$parent;
            }

            return '\n\nfound in\n\n' + tree.map(function (vm, i) {
              return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
            }).join('\n');
          } else {
            return "\n\n(found in " + formatComponentName(vm) + ")";
          }
        };
      }
      /*  */

      var uid = 0;
      /**
       * A dep is an observable that can have multiple
       * directives subscribing to it.
       */

      var Dep = function Dep() {
        this.id = uid++;
        this.subs = [];
      };

      Dep.prototype.addSub = function addSub(sub) {
        this.subs.push(sub);
      };

      Dep.prototype.removeSub = function removeSub(sub) {
        remove(this.subs, sub);
      };

      Dep.prototype.depend = function depend() {
        if (Dep.target) {
          Dep.target.addDep(this);
        }
      };

      Dep.prototype.notify = function notify() {
        // stabilize the subscriber list first
        var subs = this.subs.slice();

        if (!config.async) {
          // subs aren't sorted in scheduler if not running async
          // we need to sort them now to make sure they fire in correct
          // order
          subs.sort(function (a, b) {
            return a.id - b.id;
          });
        }

        for (var i = 0, l = subs.length; i < l; i++) {
          subs[i].update();
        }
      }; // The current target watcher being evaluated.
      // This is globally unique because only one watcher
      // can be evaluated at a time.


      Dep.target = null;
      var targetStack = [];

      function pushTarget(target) {
        targetStack.push(target);
        Dep.target = target;
      }

      function popTarget() {
        targetStack.pop();
        Dep.target = targetStack[targetStack.length - 1];
      }
      /*  */


      var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
        this.tag = tag;
        this.data = data;
        this.children = children;
        this.text = text;
        this.elm = elm;
        this.ns = undefined;
        this.context = context;
        this.fnContext = undefined;
        this.fnOptions = undefined;
        this.fnScopeId = undefined;
        this.key = data && data.key;
        this.componentOptions = componentOptions;
        this.componentInstance = undefined;
        this.parent = undefined;
        this.raw = false;
        this.isStatic = false;
        this.isRootInsert = true;
        this.isComment = false;
        this.isCloned = false;
        this.isOnce = false;
        this.asyncFactory = asyncFactory;
        this.asyncMeta = undefined;
        this.isAsyncPlaceholder = false;
      };

      var prototypeAccessors = {
        child: {
          configurable: true
        }
      }; // DEPRECATED: alias for componentInstance for backwards compat.

      /* istanbul ignore next */

      prototypeAccessors.child.get = function () {
        return this.componentInstance;
      };

      Object.defineProperties(VNode.prototype, prototypeAccessors);

      var createEmptyVNode = function createEmptyVNode(text) {
        if (text === void 0) text = '';
        var node = new VNode();
        node.text = text;
        node.isComment = true;
        return node;
      };

      function createTextVNode(val) {
        return new VNode(undefined, undefined, undefined, String(val));
      } // optimized shallow clone
      // used for static nodes and slot nodes because they may be reused across
      // multiple renders, cloning them avoids errors when DOM manipulations rely
      // on their elm reference.


      function cloneVNode(vnode) {
        var cloned = new VNode(vnode.tag, vnode.data, // #7975
        // clone children array to avoid mutating original in case of cloning
        // a child.
        vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
        cloned.ns = vnode.ns;
        cloned.isStatic = vnode.isStatic;
        cloned.key = vnode.key;
        cloned.isComment = vnode.isComment;
        cloned.fnContext = vnode.fnContext;
        cloned.fnOptions = vnode.fnOptions;
        cloned.fnScopeId = vnode.fnScopeId;
        cloned.asyncMeta = vnode.asyncMeta;
        cloned.isCloned = true;
        return cloned;
      }
      /*
       * not type checking this file because flow doesn't play well with
       * dynamically accessing methods on Array prototype
       */


      var arrayProto = Array.prototype;
      var arrayMethods = Object.create(arrayProto);
      var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
      /**
       * Intercept mutating methods and emit events
       */

      methodsToPatch.forEach(function (method) {
        // cache original method
        var original = arrayProto[method];
        def(arrayMethods, method, function mutator() {
          var args = [],
              len = arguments.length;

          while (len--) {
            args[len] = arguments[len];
          }

          var result = original.apply(this, args);
          var ob = this.__ob__;
          var inserted;

          switch (method) {
            case 'push':
            case 'unshift':
              inserted = args;
              break;

            case 'splice':
              inserted = args.slice(2);
              break;
          }

          if (inserted) {
            ob.observeArray(inserted);
          } // notify change


          ob.dep.notify();
          return result;
        });
      });
      /*  */

      var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
      /**
       * In some cases we may want to disable observation inside a component's
       * update computation.
       */

      var shouldObserve = true;

      function toggleObserving(value) {
        shouldObserve = value;
      }
      /**
       * Observer class that is attached to each observed
       * object. Once attached, the observer converts the target
       * object's property keys into getter/setters that
       * collect dependencies and dispatch updates.
       */


      var Observer = function Observer(value) {
        this.value = value;
        this.dep = new Dep();
        this.vmCount = 0;
        def(value, '__ob__', this);

        if (Array.isArray(value)) {
          if (hasProto) {
            protoAugment(value, arrayMethods);
          } else {
            copyAugment(value, arrayMethods, arrayKeys);
          }

          this.observeArray(value);
        } else {
          this.walk(value);
        }
      };
      /**
       * Walk through all properties and convert them into
       * getter/setters. This method should only be called when
       * value type is Object.
       */


      Observer.prototype.walk = function walk(obj) {
        var keys = Object.keys(obj);

        for (var i = 0; i < keys.length; i++) {
          defineReactive$$1(obj, keys[i]);
        }
      };
      /**
       * Observe a list of Array items.
       */


      Observer.prototype.observeArray = function observeArray(items) {
        for (var i = 0, l = items.length; i < l; i++) {
          observe(items[i]);
        }
      }; // helpers

      /**
       * Augment a target Object or Array by intercepting
       * the prototype chain using __proto__
       */


      function protoAugment(target, src) {
        /* eslint-disable no-proto */
        target.__proto__ = src;
        /* eslint-enable no-proto */
      }
      /**
       * Augment a target Object or Array by defining
       * hidden properties.
       */

      /* istanbul ignore next */


      function copyAugment(target, src, keys) {
        for (var i = 0, l = keys.length; i < l; i++) {
          var key = keys[i];
          def(target, key, src[key]);
        }
      }
      /**
       * Attempt to create an observer instance for a value,
       * returns the new observer if successfully observed,
       * or the existing observer if the value already has one.
       */


      function observe(value, asRootData) {
        if (!isObject(value) || value instanceof VNode) {
          return;
        }

        var ob;

        if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
          ob = value.__ob__;
        } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
          ob = new Observer(value);
        }

        if (asRootData && ob) {
          ob.vmCount++;
        }

        return ob;
      }
      /**
       * Define a reactive property on an Object.
       */


      function defineReactive$$1(obj, key, val, customSetter, shallow) {
        var dep = new Dep();
        var property = Object.getOwnPropertyDescriptor(obj, key);

        if (property && property.configurable === false) {
          return;
        } // cater for pre-defined getter/setters


        var getter = property && property.get;
        var setter = property && property.set;

        if ((!getter || setter) && arguments.length === 2) {
          val = obj[key];
        }

        var childOb = !shallow && observe(val);
        Object.defineProperty(obj, key, {
          enumerable: true,
          configurable: true,
          get: function reactiveGetter() {
            var value = getter ? getter.call(obj) : val;

            if (Dep.target) {
              dep.depend();

              if (childOb) {
                childOb.dep.depend();

                if (Array.isArray(value)) {
                  dependArray(value);
                }
              }
            }

            return value;
          },
          set: function reactiveSetter(newVal) {
            var value = getter ? getter.call(obj) : val;
            /* eslint-disable no-self-compare */

            if (newVal === value || newVal !== newVal && value !== value) {
              return;
            }
            /* eslint-enable no-self-compare */


            if (customSetter) {
              customSetter();
            } // #7981: for accessor properties without setter


            if (getter && !setter) {
              return;
            }

            if (setter) {
              setter.call(obj, newVal);
            } else {
              val = newVal;
            }

            childOb = !shallow && observe(newVal);
            dep.notify();
          }
        });
      }
      /**
       * Set a property on an object. Adds the new property and
       * triggers change notification if the property doesn't
       * already exist.
       */


      function set(target, key, val) {
        if (isUndef(target) || isPrimitive(target)) {
          warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
        }

        if (Array.isArray(target) && isValidArrayIndex(key)) {
          target.length = Math.max(target.length, key);
          target.splice(key, 1, val);
          return val;
        }

        if (key in target && !(key in Object.prototype)) {
          target[key] = val;
          return val;
        }

        var ob = target.__ob__;

        if (target._isVue || ob && ob.vmCount) {
          warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
          return val;
        }

        if (!ob) {
          target[key] = val;
          return val;
        }

        defineReactive$$1(ob.value, key, val);
        ob.dep.notify();
        return val;
      }
      /**
       * Delete a property and trigger change if necessary.
       */


      function del(target, key) {
        if (isUndef(target) || isPrimitive(target)) {
          warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
        }

        if (Array.isArray(target) && isValidArrayIndex(key)) {
          target.splice(key, 1);
          return;
        }

        var ob = target.__ob__;

        if (target._isVue || ob && ob.vmCount) {
          warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
          return;
        }

        if (!hasOwn(target, key)) {
          return;
        }

        delete target[key];

        if (!ob) {
          return;
        }

        ob.dep.notify();
      }
      /**
       * Collect dependencies on array elements when the array is touched, since
       * we cannot intercept array element access like property getters.
       */


      function dependArray(value) {
        for (var e = void 0, i = 0, l = value.length; i < l; i++) {
          e = value[i];
          e && e.__ob__ && e.__ob__.dep.depend();

          if (Array.isArray(e)) {
            dependArray(e);
          }
        }
      }
      /*  */

      /**
       * Option overwriting strategies are functions that handle
       * how to merge a parent option value and a child option
       * value into the final value.
       */


      var strats = config.optionMergeStrategies;
      /**
       * Options with restrictions
       */

      {
        strats.el = strats.propsData = function (parent, child, vm, key) {
          if (!vm) {
            warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
          }

          return defaultStrat(parent, child);
        };
      }
      /**
       * Helper that recursively merges two data objects together.
       */

      function mergeData(to, from) {
        if (!from) {
          return to;
        }

        var key, toVal, fromVal;
        var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

        for (var i = 0; i < keys.length; i++) {
          key = keys[i]; // in case the object is already observed...

          if (key === '__ob__') {
            continue;
          }

          toVal = to[key];
          fromVal = from[key];

          if (!hasOwn(to, key)) {
            set(to, key, fromVal);
          } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
            mergeData(toVal, fromVal);
          }
        }

        return to;
      }
      /**
       * Data
       */


      function mergeDataOrFn(parentVal, childVal, vm) {
        if (!vm) {
          // in a Vue.extend merge, both should be functions
          if (!childVal) {
            return parentVal;
          }

          if (!parentVal) {
            return childVal;
          } // when parentVal & childVal are both present,
          // we need to return a function that returns the
          // merged result of both functions... no need to
          // check if parentVal is a function here because
          // it has to be a function to pass previous merges.


          return function mergedDataFn() {
            return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
          };
        } else {
          return function mergedInstanceDataFn() {
            // instance merge
            var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
            var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

            if (instanceData) {
              return mergeData(instanceData, defaultData);
            } else {
              return defaultData;
            }
          };
        }
      }

      strats.data = function (parentVal, childVal, vm) {
        if (!vm) {
          if (childVal && typeof childVal !== 'function') {
            warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
            return parentVal;
          }

          return mergeDataOrFn(parentVal, childVal);
        }

        return mergeDataOrFn(parentVal, childVal, vm);
      };
      /**
       * Hooks and props are merged as arrays.
       */


      function mergeHook(parentVal, childVal) {
        var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
        return res ? dedupeHooks(res) : res;
      }

      function dedupeHooks(hooks) {
        var res = [];

        for (var i = 0; i < hooks.length; i++) {
          if (res.indexOf(hooks[i]) === -1) {
            res.push(hooks[i]);
          }
        }

        return res;
      }

      LIFECYCLE_HOOKS.forEach(function (hook) {
        strats[hook] = mergeHook;
      });
      /**
       * Assets
       *
       * When a vm is present (instance creation), we need to do
       * a three-way merge between constructor options, instance
       * options and parent options.
       */

      function mergeAssets(parentVal, childVal, vm, key) {
        var res = Object.create(parentVal || null);

        if (childVal) {
          assertObjectType(key, childVal, vm);
          return extend(res, childVal);
        } else {
          return res;
        }
      }

      ASSET_TYPES.forEach(function (type) {
        strats[type + 's'] = mergeAssets;
      });
      /**
       * Watchers.
       *
       * Watchers hashes should not overwrite one
       * another, so we merge them as arrays.
       */

      strats.watch = function (parentVal, childVal, vm, key) {
        // work around Firefox's Object.prototype.watch...
        if (parentVal === nativeWatch) {
          parentVal = undefined;
        }

        if (childVal === nativeWatch) {
          childVal = undefined;
        }
        /* istanbul ignore if */


        if (!childVal) {
          return Object.create(parentVal || null);
        }

        {
          assertObjectType(key, childVal, vm);
        }

        if (!parentVal) {
          return childVal;
        }

        var ret = {};
        extend(ret, parentVal);

        for (var key$1 in childVal) {
          var parent = ret[key$1];
          var child = childVal[key$1];

          if (parent && !Array.isArray(parent)) {
            parent = [parent];
          }

          ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
        }

        return ret;
      };
      /**
       * Other object hashes.
       */


      strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
        if (childVal && "development" !== 'production') {
          assertObjectType(key, childVal, vm);
        }

        if (!parentVal) {
          return childVal;
        }

        var ret = Object.create(null);
        extend(ret, parentVal);

        if (childVal) {
          extend(ret, childVal);
        }

        return ret;
      };

      strats.provide = mergeDataOrFn;
      /**
       * Default strategy.
       */

      var defaultStrat = function defaultStrat(parentVal, childVal) {
        return childVal === undefined ? parentVal : childVal;
      };
      /**
       * Validate component names
       */


      function checkComponents(options) {
        for (var key in options.components) {
          validateComponentName(key);
        }
      }

      function validateComponentName(name) {
        if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
          warn('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
        }

        if (isBuiltInTag(name) || config.isReservedTag(name)) {
          warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
        }
      }
      /**
       * Ensure all props option syntax are normalized into the
       * Object-based format.
       */


      function normalizeProps(options, vm) {
        var props = options.props;

        if (!props) {
          return;
        }

        var res = {};
        var i, val, name;

        if (Array.isArray(props)) {
          i = props.length;

          while (i--) {
            val = props[i];

            if (typeof val === 'string') {
              name = camelize(val);
              res[name] = {
                type: null
              };
            } else {
              warn('props must be strings when using array syntax.');
            }
          }
        } else if (isPlainObject(props)) {
          for (var key in props) {
            val = props[key];
            name = camelize(key);
            res[name] = isPlainObject(val) ? val : {
              type: val
            };
          }
        } else {
          warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
        }

        options.props = res;
      }
      /**
       * Normalize all injections into Object-based format
       */


      function normalizeInject(options, vm) {
        var inject = options.inject;

        if (!inject) {
          return;
        }

        var normalized = options.inject = {};

        if (Array.isArray(inject)) {
          for (var i = 0; i < inject.length; i++) {
            normalized[inject[i]] = {
              from: inject[i]
            };
          }
        } else if (isPlainObject(inject)) {
          for (var key in inject) {
            var val = inject[key];
            normalized[key] = isPlainObject(val) ? extend({
              from: key
            }, val) : {
              from: val
            };
          }
        } else {
          warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
        }
      }
      /**
       * Normalize raw function directives into object format.
       */


      function normalizeDirectives(options) {
        var dirs = options.directives;

        if (dirs) {
          for (var key in dirs) {
            var def$$1 = dirs[key];

            if (typeof def$$1 === 'function') {
              dirs[key] = {
                bind: def$$1,
                update: def$$1
              };
            }
          }
        }
      }

      function assertObjectType(name, value, vm) {
        if (!isPlainObject(value)) {
          warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
        }
      }
      /**
       * Merge two option objects into a new one.
       * Core utility used in both instantiation and inheritance.
       */


      function mergeOptions(parent, child, vm) {
        {
          checkComponents(child);
        }

        if (typeof child === 'function') {
          child = child.options;
        }

        normalizeProps(child, vm);
        normalizeInject(child, vm);
        normalizeDirectives(child); // Apply extends and mixins on the child options,
        // but only if it is a raw options object that isn't
        // the result of another mergeOptions call.
        // Only merged options has the _base property.

        if (!child._base) {
          if (child["extends"]) {
            parent = mergeOptions(parent, child["extends"], vm);
          }

          if (child.mixins) {
            for (var i = 0, l = child.mixins.length; i < l; i++) {
              parent = mergeOptions(parent, child.mixins[i], vm);
            }
          }
        }

        var options = {};
        var key;

        for (key in parent) {
          mergeField(key);
        }

        for (key in child) {
          if (!hasOwn(parent, key)) {
            mergeField(key);
          }
        }

        function mergeField(key) {
          var strat = strats[key] || defaultStrat;
          options[key] = strat(parent[key], child[key], vm, key);
        }

        return options;
      }
      /**
       * Resolve an asset.
       * This function is used because child instances need access
       * to assets defined in its ancestor chain.
       */


      function resolveAsset(options, type, id, warnMissing) {
        /* istanbul ignore if */
        if (typeof id !== 'string') {
          return;
        }

        var assets = options[type]; // check local registration variations first

        if (hasOwn(assets, id)) {
          return assets[id];
        }

        var camelizedId = camelize(id);

        if (hasOwn(assets, camelizedId)) {
          return assets[camelizedId];
        }

        var PascalCaseId = capitalize(camelizedId);

        if (hasOwn(assets, PascalCaseId)) {
          return assets[PascalCaseId];
        } // fallback to prototype chain


        var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

        if (warnMissing && !res) {
          warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
        }

        return res;
      }
      /*  */


      function validateProp(key, propOptions, propsData, vm) {
        var prop = propOptions[key];
        var absent = !hasOwn(propsData, key);
        var value = propsData[key]; // boolean casting

        var booleanIndex = getTypeIndex(Boolean, prop.type);

        if (booleanIndex > -1) {
          if (absent && !hasOwn(prop, 'default')) {
            value = false;
          } else if (value === '' || value === hyphenate(key)) {
            // only cast empty string / same name to boolean if
            // boolean has higher priority
            var stringIndex = getTypeIndex(String, prop.type);

            if (stringIndex < 0 || booleanIndex < stringIndex) {
              value = true;
            }
          }
        } // check default value


        if (value === undefined) {
          value = getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
          // make sure to observe it.

          var prevShouldObserve = shouldObserve;
          toggleObserving(true);
          observe(value);
          toggleObserving(prevShouldObserve);
        }

        {
          assertProp(prop, key, value, vm, absent);
        }
        return value;
      }
      /**
       * Get the default value of a prop.
       */


      function getPropDefaultValue(vm, prop, key) {
        // no default, return undefined
        if (!hasOwn(prop, 'default')) {
          return undefined;
        }

        var def = prop["default"]; // warn against non-factory defaults for Object & Array

        if (isObject(def)) {
          warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
        } // the raw prop value was also undefined from previous render,
        // return previous default value to avoid unnecessary watcher trigger


        if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
          return vm._props[key];
        } // call factory function for non-Function types
        // a value is Function if its prototype is function even across different execution context


        return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
      }
      /**
       * Assert whether a prop is valid.
       */


      function assertProp(prop, name, value, vm, absent) {
        if (prop.required && absent) {
          warn('Missing required prop: "' + name + '"', vm);
          return;
        }

        if (value == null && !prop.required) {
          return;
        }

        var type = prop.type;
        var valid = !type || type === true;
        var expectedTypes = [];

        if (type) {
          if (!Array.isArray(type)) {
            type = [type];
          }

          for (var i = 0; i < type.length && !valid; i++) {
            var assertedType = assertType(value, type[i]);
            expectedTypes.push(assertedType.expectedType || '');
            valid = assertedType.valid;
          }
        }

        if (!valid) {
          warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
          return;
        }

        var validator = prop.validator;

        if (validator) {
          if (!validator(value)) {
            warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
          }
        }
      }

      var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

      function assertType(value, type) {
        var valid;
        var expectedType = getType(type);

        if (simpleCheckRE.test(expectedType)) {
          var t = _typeof(value);

          valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

          if (!valid && t === 'object') {
            valid = value instanceof type;
          }
        } else if (expectedType === 'Object') {
          valid = isPlainObject(value);
        } else if (expectedType === 'Array') {
          valid = Array.isArray(value);
        } else {
          valid = value instanceof type;
        }

        return {
          valid: valid,
          expectedType: expectedType
        };
      }
      /**
       * Use function string name to check built-in types,
       * because a simple equality check will fail when running
       * across different vms / iframes.
       */


      function getType(fn) {
        var match = fn && fn.toString().match(/^\s*function (\w+)/);
        return match ? match[1] : '';
      }

      function isSameType(a, b) {
        return getType(a) === getType(b);
      }

      function getTypeIndex(type, expectedTypes) {
        if (!Array.isArray(expectedTypes)) {
          return isSameType(expectedTypes, type) ? 0 : -1;
        }

        for (var i = 0, len = expectedTypes.length; i < len; i++) {
          if (isSameType(expectedTypes[i], type)) {
            return i;
          }
        }

        return -1;
      }

      function getInvalidTypeMessage(name, value, expectedTypes) {
        var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ');
        var expectedType = expectedTypes[0];
        var receivedType = toRawType(value);
        var expectedValue = styleValue(value, expectedType);
        var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

        if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
          message += " with value " + expectedValue;
        }

        message += ", got " + receivedType + " "; // check if we need to specify received value

        if (isExplicable(receivedType)) {
          message += "with value " + receivedValue + ".";
        }

        return message;
      }

      function styleValue(value, type) {
        if (type === 'String') {
          return "\"" + value + "\"";
        } else if (type === 'Number') {
          return "" + Number(value);
        } else {
          return "" + value;
        }
      }

      function isExplicable(value) {
        var explicitTypes = ['string', 'number', 'boolean'];
        return explicitTypes.some(function (elem) {
          return value.toLowerCase() === elem;
        });
      }

      function isBoolean() {
        var args = [],
            len = arguments.length;

        while (len--) {
          args[len] = arguments[len];
        }

        return args.some(function (elem) {
          return elem.toLowerCase() === 'boolean';
        });
      }
      /*  */


      function handleError(err, vm, info) {
        // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
        // See: https://github.com/vuejs/vuex/issues/1505
        pushTarget();

        try {
          if (vm) {
            var cur = vm;

            while (cur = cur.$parent) {
              var hooks = cur.$options.errorCaptured;

              if (hooks) {
                for (var i = 0; i < hooks.length; i++) {
                  try {
                    var capture = hooks[i].call(cur, err, vm, info) === false;

                    if (capture) {
                      return;
                    }
                  } catch (e) {
                    globalHandleError(e, cur, 'errorCaptured hook');
                  }
                }
              }
            }
          }

          globalHandleError(err, vm, info);
        } finally {
          popTarget();
        }
      }

      function invokeWithErrorHandling(handler, context, args, vm, info) {
        var res;

        try {
          res = args ? handler.apply(context, args) : handler.call(context);

          if (res && !res._isVue && isPromise(res) && !res._handled) {
            res["catch"](function (e) {
              return handleError(e, vm, info + " (Promise/async)");
            }); // issue #9511
            // avoid catch triggering multiple times when nested calls

            res._handled = true;
          }
        } catch (e) {
          handleError(e, vm, info);
        }

        return res;
      }

      function globalHandleError(err, vm, info) {
        if (config.errorHandler) {
          try {
            return config.errorHandler.call(null, err, vm, info);
          } catch (e) {
            // if the user intentionally throws the original error in the handler,
            // do not log it twice
            if (e !== err) {
              logError(e, null, 'config.errorHandler');
            }
          }
        }

        logError(err, vm, info);
      }

      function logError(err, vm, info) {
        {
          warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
        }
        /* istanbul ignore else */

        if ((inBrowser || inWeex) && typeof console !== 'undefined') {
          console.error(err);
        } else {
          throw err;
        }
      }
      /*  */


      var isUsingMicroTask = false;
      var callbacks = [];
      var pending = false;

      function flushCallbacks() {
        pending = false;
        var copies = callbacks.slice(0);
        callbacks.length = 0;

        for (var i = 0; i < copies.length; i++) {
          copies[i]();
        }
      } // Here we have async deferring wrappers using microtasks.
      // In 2.5 we used (macro) tasks (in combination with microtasks).
      // However, it has subtle problems when state is changed right before repaint
      // (e.g. #6813, out-in transitions).
      // Also, using (macro) tasks in event handler would cause some weird behaviors
      // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
      // So we now use microtasks everywhere, again.
      // A major drawback of this tradeoff is that there are some scenarios
      // where microtasks have too high a priority and fire in between supposedly
      // sequential events (e.g. #4521, #6690, which have workarounds)
      // or even between bubbling of the same event (#6566).


      var timerFunc; // The nextTick behavior leverages the microtask queue, which can be accessed
      // via either native Promise.then or MutationObserver.
      // MutationObserver has wider support, however it is seriously bugged in
      // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
      // completely stops working after triggering a few times... so, if native
      // Promise is available, we will use it:

      /* istanbul ignore next, $flow-disable-line */

      if (typeof Promise !== 'undefined' && isNative(Promise)) {
        var p = Promise.resolve();

        timerFunc = function timerFunc() {
          p.then(flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break, but
          // it can get stuck in a weird state where callbacks are pushed into the
          // microtask queue but the queue isn't being flushed, until the browser
          // needs to do some other work, e.g. handle a timer. Therefore we can
          // "force" the microtask queue to be flushed by adding an empty timer.

          if (isIOS) {
            setTimeout(noop);
          }
        };

        isUsingMicroTask = true;
      } else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
      MutationObserver.toString() === '[object MutationObserverConstructor]')) {
        // Use MutationObserver where native Promise is not available,
        // e.g. PhantomJS, iOS7, Android 4.4
        // (#6466 MutationObserver is unreliable in IE11)
        var counter = 1;
        var observer = new MutationObserver(flushCallbacks);
        var textNode = document.createTextNode(String(counter));
        observer.observe(textNode, {
          characterData: true
        });

        timerFunc = function timerFunc() {
          counter = (counter + 1) % 2;
          textNode.data = String(counter);
        };

        isUsingMicroTask = true;
      } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
        // Fallback to setImmediate.
        // Technically it leverages the (macro) task queue,
        // but it is still a better choice than setTimeout.
        timerFunc = function timerFunc() {
          setImmediate(flushCallbacks);
        };
      } else {
        // Fallback to setTimeout.
        timerFunc = function timerFunc() {
          setTimeout(flushCallbacks, 0);
        };
      }

      function nextTick(cb, ctx) {
        var _resolve;

        callbacks.push(function () {
          if (cb) {
            try {
              cb.call(ctx);
            } catch (e) {
              handleError(e, ctx, 'nextTick');
            }
          } else if (_resolve) {
            _resolve(ctx);
          }
        });

        if (!pending) {
          pending = true;
          timerFunc();
        } // $flow-disable-line


        if (!cb && typeof Promise !== 'undefined') {
          return new Promise(function (resolve) {
            _resolve = resolve;
          });
        }
      }
      /*  */


      var mark;
      var measure;
      {
        var perf = inBrowser && window.performance;
        /* istanbul ignore if */

        if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
          mark = function mark(tag) {
            return perf.mark(tag);
          };

          measure = function measure(name, startTag, endTag) {
            perf.measure(name, startTag, endTag);
            perf.clearMarks(startTag);
            perf.clearMarks(endTag); // perf.clearMeasures(name)
          };
        }
      }
      /* not type checking this file because flow doesn't play well with Proxy */

      var initProxy;
      {
        var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
        );

        var warnNonPresent = function warnNonPresent(target, key) {
          warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
        };

        var warnReservedPrefix = function warnReservedPrefix(target, key) {
          warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + 'prevent conflicts with Vue internals. ' + 'See: https://vuejs.org/v2/api/#data', target);
        };

        var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

        if (hasProxy) {
          var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
          config.keyCodes = new Proxy(config.keyCodes, {
            set: function set(target, key, value) {
              if (isBuiltInModifier(key)) {
                warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
                return false;
              } else {
                target[key] = value;
                return true;
              }
            }
          });
        }

        var hasHandler = {
          has: function has(target, key) {
            var has = (key in target);
            var isAllowed = allowedGlobals(key) || typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data);

            if (!has && !isAllowed) {
              if (key in target.$data) {
                warnReservedPrefix(target, key);
              } else {
                warnNonPresent(target, key);
              }
            }

            return has || !isAllowed;
          }
        };
        var getHandler = {
          get: function get(target, key) {
            if (typeof key === 'string' && !(key in target)) {
              if (key in target.$data) {
                warnReservedPrefix(target, key);
              } else {
                warnNonPresent(target, key);
              }
            }

            return target[key];
          }
        };

        initProxy = function initProxy(vm) {
          if (hasProxy) {
            // determine which proxy handler to use
            var options = vm.$options;
            var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
            vm._renderProxy = new Proxy(vm, handlers);
          } else {
            vm._renderProxy = vm;
          }
        };
      }
      /*  */

      var seenObjects = new _Set();
      /**
       * Recursively traverse an object to evoke all converted
       * getters, so that every nested property inside the object
       * is collected as a "deep" dependency.
       */

      function traverse(val) {
        _traverse(val, seenObjects);

        seenObjects.clear();
      }

      function _traverse(val, seen) {
        var i, keys;
        var isA = Array.isArray(val);

        if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
          return;
        }

        if (val.__ob__) {
          var depId = val.__ob__.dep.id;

          if (seen.has(depId)) {
            return;
          }

          seen.add(depId);
        }

        if (isA) {
          i = val.length;

          while (i--) {
            _traverse(val[i], seen);
          }
        } else {
          keys = Object.keys(val);
          i = keys.length;

          while (i--) {
            _traverse(val[keys[i]], seen);
          }
        }
      }
      /*  */


      var normalizeEvent = cached(function (name) {
        var passive = name.charAt(0) === '&';
        name = passive ? name.slice(1) : name;
        var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first

        name = once$$1 ? name.slice(1) : name;
        var capture = name.charAt(0) === '!';
        name = capture ? name.slice(1) : name;
        return {
          name: name,
          once: once$$1,
          capture: capture,
          passive: passive
        };
      });

      function createFnInvoker(fns, vm) {
        function invoker() {
          var arguments$1 = arguments;
          var fns = invoker.fns;

          if (Array.isArray(fns)) {
            var cloned = fns.slice();

            for (var i = 0; i < cloned.length; i++) {
              invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
            }
          } else {
            // return handler return value for single handlers
            return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
          }
        }

        invoker.fns = fns;
        return invoker;
      }

      function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
        var name, def$$1, cur, old, event;

        for (name in on) {
          def$$1 = cur = on[name];
          old = oldOn[name];
          event = normalizeEvent(name);

          if (isUndef(cur)) {
            warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
          } else if (isUndef(old)) {
            if (isUndef(cur.fns)) {
              cur = on[name] = createFnInvoker(cur, vm);
            }

            if (isTrue(event.once)) {
              cur = on[name] = createOnceHandler(event.name, cur, event.capture);
            }

            add(event.name, cur, event.capture, event.passive, event.params);
          } else if (cur !== old) {
            old.fns = cur;
            on[name] = old;
          }
        }

        for (name in oldOn) {
          if (isUndef(on[name])) {
            event = normalizeEvent(name);
            remove$$1(event.name, oldOn[name], event.capture);
          }
        }
      }
      /*  */


      function mergeVNodeHook(def, hookKey, hook) {
        if (def instanceof VNode) {
          def = def.data.hook || (def.data.hook = {});
        }

        var invoker;
        var oldHook = def[hookKey];

        function wrappedHook() {
          hook.apply(this, arguments); // important: remove merged hook to ensure it's called only once
          // and prevent memory leak

          remove(invoker.fns, wrappedHook);
        }

        if (isUndef(oldHook)) {
          // no existing hook
          invoker = createFnInvoker([wrappedHook]);
        } else {
          /* istanbul ignore if */
          if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
            // already a merged invoker
            invoker = oldHook;
            invoker.fns.push(wrappedHook);
          } else {
            // existing plain hook
            invoker = createFnInvoker([oldHook, wrappedHook]);
          }
        }

        invoker.merged = true;
        def[hookKey] = invoker;
      }
      /*  */


      function extractPropsFromVNodeData(data, Ctor, tag) {
        // we are only extracting raw values here.
        // validation and default values are handled in the child
        // component itself.
        var propOptions = Ctor.options.props;

        if (isUndef(propOptions)) {
          return;
        }

        var res = {};
        var attrs = data.attrs;
        var props = data.props;

        if (isDef(attrs) || isDef(props)) {
          for (var key in propOptions) {
            var altKey = hyphenate(key);
            {
              var keyInLowerCase = key.toLowerCase();

              if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
                tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
              }
            }
            checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
          }
        }

        return res;
      }

      function checkProp(res, hash, key, altKey, preserve) {
        if (isDef(hash)) {
          if (hasOwn(hash, key)) {
            res[key] = hash[key];

            if (!preserve) {
              delete hash[key];
            }

            return true;
          } else if (hasOwn(hash, altKey)) {
            res[key] = hash[altKey];

            if (!preserve) {
              delete hash[altKey];
            }

            return true;
          }
        }

        return false;
      }
      /*  */
      // The template compiler attempts to minimize the need for normalization by
      // statically analyzing the template at compile time.
      //
      // For plain HTML markup, normalization can be completely skipped because the
      // generated render function is guaranteed to return Array<VNode>. There are
      // two cases where extra normalization is needed:
      // 1. When the children contains components - because a functional component
      // may return an Array instead of a single root. In this case, just a simple
      // normalization is needed - if any child is an Array, we flatten the whole
      // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
      // because functional components already normalize their own children.


      function simpleNormalizeChildren(children) {
        for (var i = 0; i < children.length; i++) {
          if (Array.isArray(children[i])) {
            return Array.prototype.concat.apply([], children);
          }
        }

        return children;
      } // 2. When the children contains constructs that always generated nested Arrays,
      // e.g. <template>, <slot>, v-for, or when the children is provided by user
      // with hand-written render functions / JSX. In such cases a full normalization
      // is needed to cater to all possible types of children values.


      function normalizeChildren(children) {
        return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
      }

      function isTextNode(node) {
        return isDef(node) && isDef(node.text) && isFalse(node.isComment);
      }

      function normalizeArrayChildren(children, nestedIndex) {
        var res = [];
        var i, c, lastIndex, last;

        for (i = 0; i < children.length; i++) {
          c = children[i];

          if (isUndef(c) || typeof c === 'boolean') {
            continue;
          }

          lastIndex = res.length - 1;
          last = res[lastIndex]; //  nested

          if (Array.isArray(c)) {
            if (c.length > 0) {
              c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i); // merge adjacent text nodes

              if (isTextNode(c[0]) && isTextNode(last)) {
                res[lastIndex] = createTextVNode(last.text + c[0].text);
                c.shift();
              }

              res.push.apply(res, c);
            }
          } else if (isPrimitive(c)) {
            if (isTextNode(last)) {
              // merge adjacent text nodes
              // this is necessary for SSR hydration because text nodes are
              // essentially merged when rendered to HTML strings
              res[lastIndex] = createTextVNode(last.text + c);
            } else if (c !== '') {
              // convert primitive to vnode
              res.push(createTextVNode(c));
            }
          } else {
            if (isTextNode(c) && isTextNode(last)) {
              // merge adjacent text nodes
              res[lastIndex] = createTextVNode(last.text + c.text);
            } else {
              // default key for nested array children (likely generated by v-for)
              if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
                c.key = "__vlist" + nestedIndex + "_" + i + "__";
              }

              res.push(c);
            }
          }
        }

        return res;
      }
      /*  */


      function initProvide(vm) {
        var provide = vm.$options.provide;

        if (provide) {
          vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
        }
      }

      function initInjections(vm) {
        var result = resolveInject(vm.$options.inject, vm);

        if (result) {
          toggleObserving(false);
          Object.keys(result).forEach(function (key) {
            /* istanbul ignore else */
            {
              defineReactive$$1(vm, key, result[key], function () {
                warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
              });
            }
          });
          toggleObserving(true);
        }
      }

      function resolveInject(inject, vm) {
        if (inject) {
          // inject is :any because flow is not smart enough to figure out cached
          var result = Object.create(null);
          var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

          for (var i = 0; i < keys.length; i++) {
            var key = keys[i]; // #6574 in case the inject object is observed...

            if (key === '__ob__') {
              continue;
            }

            var provideKey = inject[key].from;
            var source = vm;

            while (source) {
              if (source._provided && hasOwn(source._provided, provideKey)) {
                result[key] = source._provided[provideKey];
                break;
              }

              source = source.$parent;
            }

            if (!source) {
              if ('default' in inject[key]) {
                var provideDefault = inject[key]["default"];
                result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
              } else {
                warn("Injection \"" + key + "\" not found", vm);
              }
            }
          }

          return result;
        }
      }
      /*  */

      /**
       * Runtime helper for resolving raw children VNodes into a slot object.
       */


      function resolveSlots(children, context) {
        if (!children || !children.length) {
          return {};
        }

        var slots = {};

        for (var i = 0, l = children.length; i < l; i++) {
          var child = children[i];
          var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

          if (data && data.attrs && data.attrs.slot) {
            delete data.attrs.slot;
          } // named slots should only be respected if the vnode was rendered in the
          // same context.


          if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
            var name = data.slot;
            var slot = slots[name] || (slots[name] = []);

            if (child.tag === 'template') {
              slot.push.apply(slot, child.children || []);
            } else {
              slot.push(child);
            }
          } else {
            (slots["default"] || (slots["default"] = [])).push(child);
          }
        } // ignore slots that contains only whitespace


        for (var name$1 in slots) {
          if (slots[name$1].every(isWhitespace)) {
            delete slots[name$1];
          }
        }

        return slots;
      }

      function isWhitespace(node) {
        return node.isComment && !node.asyncFactory || node.text === ' ';
      }
      /*  */


      function normalizeScopedSlots(slots, normalSlots, prevSlots) {
        var res;
        var hasNormalSlots = Object.keys(normalSlots).length > 0;
        var isStable = slots ? !!slots.$stable : !hasNormalSlots;
        var key = slots && slots.$key;

        if (!slots) {
          res = {};
        } else if (slots._normalized) {
          // fast path 1: child component re-render only, parent did not change
          return slots._normalized;
        } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
          // fast path 2: stable scoped slots w/ no normal slots to proxy,
          // only need to normalize once
          return prevSlots;
        } else {
          res = {};

          for (var key$1 in slots) {
            if (slots[key$1] && key$1[0] !== '$') {
              res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
            }
          }
        } // expose normal slots on scopedSlots


        for (var key$2 in normalSlots) {
          if (!(key$2 in res)) {
            res[key$2] = proxyNormalSlot(normalSlots, key$2);
          }
        } // avoriaz seems to mock a non-extensible $scopedSlots object
        // and when that is passed down this would cause an error


        if (slots && Object.isExtensible(slots)) {
          slots._normalized = res;
        }

        def(res, '$stable', isStable);
        def(res, '$key', key);
        def(res, '$hasNormal', hasNormalSlots);
        return res;
      }

      function normalizeScopedSlot(normalSlots, key, fn) {
        var normalized = function normalized() {
          var res = arguments.length ? fn.apply(null, arguments) : fn({});
          res = res && _typeof(res) === 'object' && !Array.isArray(res) ? [res] // single vnode
          : normalizeChildren(res);
          return res && (res.length === 0 || res.length === 1 && res[0].isComment // #9658
          ) ? undefined : res;
        }; // this is a slot using the new v-slot syntax without scope. although it is
        // compiled as a scoped slot, render fn users would expect it to be present
        // on this.$slots because the usage is semantically a normal slot.


        if (fn.proxy) {
          Object.defineProperty(normalSlots, key, {
            get: normalized,
            enumerable: true,
            configurable: true
          });
        }

        return normalized;
      }

      function proxyNormalSlot(slots, key) {
        return function () {
          return slots[key];
        };
      }
      /*  */

      /**
       * Runtime helper for rendering v-for lists.
       */


      function renderList(val, render) {
        var ret, i, l, keys, key;

        if (Array.isArray(val) || typeof val === 'string') {
          ret = new Array(val.length);

          for (i = 0, l = val.length; i < l; i++) {
            ret[i] = render(val[i], i);
          }
        } else if (typeof val === 'number') {
          ret = new Array(val);

          for (i = 0; i < val; i++) {
            ret[i] = render(i + 1, i);
          }
        } else if (isObject(val)) {
          if (hasSymbol && val[Symbol.iterator]) {
            ret = [];
            var iterator = val[Symbol.iterator]();
            var result = iterator.next();

            while (!result.done) {
              ret.push(render(result.value, ret.length));
              result = iterator.next();
            }
          } else {
            keys = Object.keys(val);
            ret = new Array(keys.length);

            for (i = 0, l = keys.length; i < l; i++) {
              key = keys[i];
              ret[i] = render(val[key], key, i);
            }
          }
        }

        if (!isDef(ret)) {
          ret = [];
        }

        ret._isVList = true;
        return ret;
      }
      /*  */

      /**
       * Runtime helper for rendering <slot>
       */


      function renderSlot(name, fallback, props, bindObject) {
        var scopedSlotFn = this.$scopedSlots[name];
        var nodes;

        if (scopedSlotFn) {
          // scoped slot
          props = props || {};

          if (bindObject) {
            if (!isObject(bindObject)) {
              warn('slot v-bind without argument expects an Object', this);
            }

            props = extend(extend({}, bindObject), props);
          }

          nodes = scopedSlotFn(props) || fallback;
        } else {
          nodes = this.$slots[name] || fallback;
        }

        var target = props && props.slot;

        if (target) {
          return this.$createElement('template', {
            slot: target
          }, nodes);
        } else {
          return nodes;
        }
      }
      /*  */

      /**
       * Runtime helper for resolving filters
       */


      function resolveFilter(id) {
        return resolveAsset(this.$options, 'filters', id, true) || identity;
      }
      /*  */


      function isKeyNotMatch(expect, actual) {
        if (Array.isArray(expect)) {
          return expect.indexOf(actual) === -1;
        } else {
          return expect !== actual;
        }
      }
      /**
       * Runtime helper for checking keyCodes from config.
       * exposed as Vue.prototype._k
       * passing in eventKeyName as last argument separately for backwards compat
       */


      function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
        var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;

        if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
          return isKeyNotMatch(builtInKeyName, eventKeyName);
        } else if (mappedKeyCode) {
          return isKeyNotMatch(mappedKeyCode, eventKeyCode);
        } else if (eventKeyName) {
          return hyphenate(eventKeyName) !== key;
        }
      }
      /*  */

      /**
       * Runtime helper for merging v-bind="object" into a VNode's data.
       */


      function bindObjectProps(data, tag, value, asProp, isSync) {
        if (value) {
          if (!isObject(value)) {
            warn('v-bind without argument expects an Object or Array value', this);
          } else {
            if (Array.isArray(value)) {
              value = toObject(value);
            }

            var hash;

            var loop = function loop(key) {
              if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
                hash = data;
              } else {
                var type = data.attrs && data.attrs.type;
                hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
              }

              var camelizedKey = camelize(key);
              var hyphenatedKey = hyphenate(key);

              if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
                hash[key] = value[key];

                if (isSync) {
                  var on = data.on || (data.on = {});

                  on["update:" + key] = function ($event) {
                    value[key] = $event;
                  };
                }
              }
            };

            for (var key in value) {
              loop(key);
            }
          }
        }

        return data;
      }
      /*  */

      /**
       * Runtime helper for rendering static trees.
       */


      function renderStatic(index, isInFor) {
        var cached = this._staticTrees || (this._staticTrees = []);
        var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
        // we can reuse the same tree.

        if (tree && !isInFor) {
          return tree;
        } // otherwise, render a fresh tree.


        tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
        );
        markStatic(tree, "__static__" + index, false);
        return tree;
      }
      /**
       * Runtime helper for v-once.
       * Effectively it means marking the node as static with a unique key.
       */


      function markOnce(tree, index, key) {
        markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
        return tree;
      }

      function markStatic(tree, key, isOnce) {
        if (Array.isArray(tree)) {
          for (var i = 0; i < tree.length; i++) {
            if (tree[i] && typeof tree[i] !== 'string') {
              markStaticNode(tree[i], key + "_" + i, isOnce);
            }
          }
        } else {
          markStaticNode(tree, key, isOnce);
        }
      }

      function markStaticNode(node, key, isOnce) {
        node.isStatic = true;
        node.key = key;
        node.isOnce = isOnce;
      }
      /*  */


      function bindObjectListeners(data, value) {
        if (value) {
          if (!isPlainObject(value)) {
            warn('v-on without argument expects an Object value', this);
          } else {
            var on = data.on = data.on ? extend({}, data.on) : {};

            for (var key in value) {
              var existing = on[key];
              var ours = value[key];
              on[key] = existing ? [].concat(existing, ours) : ours;
            }
          }
        }

        return data;
      }
      /*  */


      function resolveScopedSlots(fns, // see flow/vnode
      res, // the following are added in 2.6
      hasDynamicKeys, contentHashKey) {
        res = res || {
          $stable: !hasDynamicKeys
        };

        for (var i = 0; i < fns.length; i++) {
          var slot = fns[i];

          if (Array.isArray(slot)) {
            resolveScopedSlots(slot, res, hasDynamicKeys);
          } else if (slot) {
            // marker for reverse proxying v-slot without scope on this.$slots
            if (slot.proxy) {
              slot.fn.proxy = true;
            }

            res[slot.key] = slot.fn;
          }
        }

        if (contentHashKey) {
          res.$key = contentHashKey;
        }

        return res;
      }
      /*  */


      function bindDynamicKeys(baseObj, values) {
        for (var i = 0; i < values.length; i += 2) {
          var key = values[i];

          if (typeof key === 'string' && key) {
            baseObj[values[i]] = values[i + 1];
          } else if (key !== '' && key !== null) {
            // null is a special value for explicitly removing a binding
            warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
          }
        }

        return baseObj;
      } // helper to dynamically append modifier runtime markers to event names.
      // ensure only append when value is already string, otherwise it will be cast
      // to string and cause the type check to miss.


      function prependModifier(value, symbol) {
        return typeof value === 'string' ? symbol + value : value;
      }
      /*  */


      function installRenderHelpers(target) {
        target._o = markOnce;
        target._n = toNumber;
        target._s = toString;
        target._l = renderList;
        target._t = renderSlot;
        target._q = looseEqual;
        target._i = looseIndexOf;
        target._m = renderStatic;
        target._f = resolveFilter;
        target._k = checkKeyCodes;
        target._b = bindObjectProps;
        target._v = createTextVNode;
        target._e = createEmptyVNode;
        target._u = resolveScopedSlots;
        target._g = bindObjectListeners;
        target._d = bindDynamicKeys;
        target._p = prependModifier;
      }
      /*  */


      function FunctionalRenderContext(data, props, children, parent, Ctor) {
        var this$1 = this;
        var options = Ctor.options; // ensure the createElement function in functional components
        // gets a unique context - this is necessary for correct named slot check

        var contextVm;

        if (hasOwn(parent, '_uid')) {
          contextVm = Object.create(parent); // $flow-disable-line

          contextVm._original = parent;
        } else {
          // the context vm passed in is a functional context as well.
          // in this case we want to make sure we are able to get a hold to the
          // real context instance.
          contextVm = parent; // $flow-disable-line

          parent = parent._original;
        }

        var isCompiled = isTrue(options._compiled);
        var needNormalization = !isCompiled;
        this.data = data;
        this.props = props;
        this.children = children;
        this.parent = parent;
        this.listeners = data.on || emptyObject;
        this.injections = resolveInject(options.inject, parent);

        this.slots = function () {
          if (!this$1.$slots) {
            normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
          }

          return this$1.$slots;
        };

        Object.defineProperty(this, 'scopedSlots', {
          enumerable: true,
          get: function get() {
            return normalizeScopedSlots(data.scopedSlots, this.slots());
          }
        }); // support for compiled functional template

        if (isCompiled) {
          // exposing $options for renderStatic()
          this.$options = options; // pre-resolve slots for renderSlot()

          this.$slots = this.slots();
          this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
        }

        if (options._scopeId) {
          this._c = function (a, b, c, d) {
            var vnode = createElement(contextVm, a, b, c, d, needNormalization);

            if (vnode && !Array.isArray(vnode)) {
              vnode.fnScopeId = options._scopeId;
              vnode.fnContext = parent;
            }

            return vnode;
          };
        } else {
          this._c = function (a, b, c, d) {
            return createElement(contextVm, a, b, c, d, needNormalization);
          };
        }
      }

      installRenderHelpers(FunctionalRenderContext.prototype);

      function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
        var options = Ctor.options;
        var props = {};
        var propOptions = options.props;

        if (isDef(propOptions)) {
          for (var key in propOptions) {
            props[key] = validateProp(key, propOptions, propsData || emptyObject);
          }
        } else {
          if (isDef(data.attrs)) {
            mergeProps(props, data.attrs);
          }

          if (isDef(data.props)) {
            mergeProps(props, data.props);
          }
        }

        var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
        var vnode = options.render.call(null, renderContext._c, renderContext);

        if (vnode instanceof VNode) {
          return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
        } else if (Array.isArray(vnode)) {
          var vnodes = normalizeChildren(vnode) || [];
          var res = new Array(vnodes.length);

          for (var i = 0; i < vnodes.length; i++) {
            res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
          }

          return res;
        }
      }

      function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
        // #7817 clone node before setting fnContext, otherwise if the node is reused
        // (e.g. it was from a cached normal slot) the fnContext causes named slots
        // that should not be matched to match.
        var clone = cloneVNode(vnode);
        clone.fnContext = contextVm;
        clone.fnOptions = options;
        {
          (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
        }

        if (data.slot) {
          (clone.data || (clone.data = {})).slot = data.slot;
        }

        return clone;
      }

      function mergeProps(to, from) {
        for (var key in from) {
          to[camelize(key)] = from[key];
        }
      }
      /*  */

      /*  */

      /*  */

      /*  */
      // inline hooks to be invoked on component VNodes during patch


      var componentVNodeHooks = {
        init: function init(vnode, hydrating) {
          if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
            // kept-alive components, treat as a patch
            var mountedNode = vnode; // work around flow

            componentVNodeHooks.prepatch(mountedNode, mountedNode);
          } else {
            var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
            child.$mount(hydrating ? vnode.elm : undefined, hydrating);
          }
        },
        prepatch: function prepatch(oldVnode, vnode) {
          var options = vnode.componentOptions;
          var child = vnode.componentInstance = oldVnode.componentInstance;
          updateChildComponent(child, options.propsData, // updated props
          options.listeners, // updated listeners
          vnode, // new parent vnode
          options.children // new children
          );
        },
        insert: function insert(vnode) {
          var context = vnode.context;
          var componentInstance = vnode.componentInstance;

          if (!componentInstance._isMounted) {
            componentInstance._isMounted = true;
            callHook(componentInstance, 'mounted');
          }

          if (vnode.data.keepAlive) {
            if (context._isMounted) {
              // vue-router#1212
              // During updates, a kept-alive component's child components may
              // change, so directly walking the tree here may call activated hooks
              // on incorrect children. Instead we push them into a queue which will
              // be processed after the whole patch process ended.
              queueActivatedComponent(componentInstance);
            } else {
              activateChildComponent(componentInstance, true
              /* direct */
              );
            }
          }
        },
        destroy: function destroy(vnode) {
          var componentInstance = vnode.componentInstance;

          if (!componentInstance._isDestroyed) {
            if (!vnode.data.keepAlive) {
              componentInstance.$destroy();
            } else {
              deactivateChildComponent(componentInstance, true
              /* direct */
              );
            }
          }
        }
      };
      var hooksToMerge = Object.keys(componentVNodeHooks);

      function createComponent(Ctor, data, context, children, tag) {
        if (isUndef(Ctor)) {
          return;
        }

        var baseCtor = context.$options._base; // plain options object: turn it into a constructor

        if (isObject(Ctor)) {
          Ctor = baseCtor.extend(Ctor);
        } // if at this stage it's not a constructor or an async component factory,
        // reject.


        if (typeof Ctor !== 'function') {
          {
            warn("Invalid Component definition: " + String(Ctor), context);
          }
          return;
        } // async component


        var asyncFactory;

        if (isUndef(Ctor.cid)) {
          asyncFactory = Ctor;
          Ctor = resolveAsyncComponent(asyncFactory, baseCtor);

          if (Ctor === undefined) {
            // return a placeholder node for async component, which is rendered
            // as a comment node but preserves all the raw information for the node.
            // the information will be used for async server-rendering and hydration.
            return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
          }
        }

        data = data || {}; // resolve constructor options in case global mixins are applied after
        // component constructor creation

        resolveConstructorOptions(Ctor); // transform component v-model data into props & events

        if (isDef(data.model)) {
          transformModel(Ctor.options, data);
        } // extract props


        var propsData = extractPropsFromVNodeData(data, Ctor, tag); // functional component

        if (isTrue(Ctor.options.functional)) {
          return createFunctionalComponent(Ctor, propsData, data, context, children);
        } // extract listeners, since these needs to be treated as
        // child component listeners instead of DOM listeners


        var listeners = data.on; // replace with listeners with .native modifier
        // so it gets processed during parent component patch.

        data.on = data.nativeOn;

        if (isTrue(Ctor.options["abstract"])) {
          // abstract components do not keep anything
          // other than props & listeners & slot
          // work around flow
          var slot = data.slot;
          data = {};

          if (slot) {
            data.slot = slot;
          }
        } // install component management hooks onto the placeholder node


        installComponentHooks(data); // return a placeholder vnode

        var name = Ctor.options.name || tag;
        var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
          Ctor: Ctor,
          propsData: propsData,
          listeners: listeners,
          tag: tag,
          children: children
        }, asyncFactory);
        return vnode;
      }

      function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
      parent // activeInstance in lifecycle state
      ) {
        var options = {
          _isComponent: true,
          _parentVnode: vnode,
          parent: parent
        }; // check inline-template render functions

        var inlineTemplate = vnode.data.inlineTemplate;

        if (isDef(inlineTemplate)) {
          options.render = inlineTemplate.render;
          options.staticRenderFns = inlineTemplate.staticRenderFns;
        }

        return new vnode.componentOptions.Ctor(options);
      }

      function installComponentHooks(data) {
        var hooks = data.hook || (data.hook = {});

        for (var i = 0; i < hooksToMerge.length; i++) {
          var key = hooksToMerge[i];
          var existing = hooks[key];
          var toMerge = componentVNodeHooks[key];

          if (existing !== toMerge && !(existing && existing._merged)) {
            hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
          }
        }
      }

      function mergeHook$1(f1, f2) {
        var merged = function merged(a, b) {
          // flow complains about extra args which is why we use any
          f1(a, b);
          f2(a, b);
        };

        merged._merged = true;
        return merged;
      } // transform component v-model info (value and callback) into
      // prop and event handler respectively.


      function transformModel(options, data) {
        var prop = options.model && options.model.prop || 'value';
        var event = options.model && options.model.event || 'input';
        (data.attrs || (data.attrs = {}))[prop] = data.model.value;
        var on = data.on || (data.on = {});
        var existing = on[event];
        var callback = data.model.callback;

        if (isDef(existing)) {
          if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
            on[event] = [callback].concat(existing);
          }
        } else {
          on[event] = callback;
        }
      }
      /*  */


      var SIMPLE_NORMALIZE = 1;
      var ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
      // without getting yelled at by flow

      function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
        if (Array.isArray(data) || isPrimitive(data)) {
          normalizationType = children;
          children = data;
          data = undefined;
        }

        if (isTrue(alwaysNormalize)) {
          normalizationType = ALWAYS_NORMALIZE;
        }

        return _createElement(context, tag, data, children, normalizationType);
      }

      function _createElement(context, tag, data, children, normalizationType) {
        if (isDef(data) && isDef(data.__ob__)) {
          warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
          return createEmptyVNode();
        } // object syntax in v-bind


        if (isDef(data) && isDef(data.is)) {
          tag = data.is;
        }

        if (!tag) {
          // in case of component :is set to falsy value
          return createEmptyVNode();
        } // warn against non-primitive key


        if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
          {
            warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
          }
        } // support single function children as default scoped slot


        if (Array.isArray(children) && typeof children[0] === 'function') {
          data = data || {};
          data.scopedSlots = {
            "default": children[0]
          };
          children.length = 0;
        }

        if (normalizationType === ALWAYS_NORMALIZE) {
          children = normalizeChildren(children);
        } else if (normalizationType === SIMPLE_NORMALIZE) {
          children = simpleNormalizeChildren(children);
        }

        var vnode, ns;

        if (typeof tag === 'string') {
          var Ctor;
          ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);

          if (config.isReservedTag(tag)) {
            // platform built-in elements
            if (isDef(data) && isDef(data.nativeOn)) {
              warn("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">.", context);
            }

            vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
          } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
            // component
            vnode = createComponent(Ctor, data, context, children, tag);
          } else {
            // unknown or unlisted namespaced elements
            // check at runtime because it may get assigned a namespace when its
            // parent normalizes children
            vnode = new VNode(tag, data, children, undefined, undefined, context);
          }
        } else {
          // direct component options / constructor
          vnode = createComponent(tag, data, context, children);
        }

        if (Array.isArray(vnode)) {
          return vnode;
        } else if (isDef(vnode)) {
          if (isDef(ns)) {
            applyNS(vnode, ns);
          }

          if (isDef(data)) {
            registerDeepBindings(data);
          }

          return vnode;
        } else {
          return createEmptyVNode();
        }
      }

      function applyNS(vnode, ns, force) {
        vnode.ns = ns;

        if (vnode.tag === 'foreignObject') {
          // use default namespace inside foreignObject
          ns = undefined;
          force = true;
        }

        if (isDef(vnode.children)) {
          for (var i = 0, l = vnode.children.length; i < l; i++) {
            var child = vnode.children[i];

            if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
              applyNS(child, ns, force);
            }
          }
        }
      } // ref #5318
      // necessary to ensure parent re-render when deep bindings like :style and
      // :class are used on slot nodes


      function registerDeepBindings(data) {
        if (isObject(data.style)) {
          traverse(data.style);
        }

        if (isObject(data["class"])) {
          traverse(data["class"]);
        }
      }
      /*  */


      function initRender(vm) {
        vm._vnode = null; // the root of the child tree

        vm._staticTrees = null; // v-once cached trees

        var options = vm.$options;
        var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

        var renderContext = parentVnode && parentVnode.context;
        vm.$slots = resolveSlots(options._renderChildren, renderContext);
        vm.$scopedSlots = emptyObject; // bind the createElement fn to this instance
        // so that we get proper render context inside it.
        // args order: tag, data, children, normalizationType, alwaysNormalize
        // internal version is used by render functions compiled from templates

        vm._c = function (a, b, c, d) {
          return createElement(vm, a, b, c, d, false);
        }; // normalization is always applied for the public version, used in
        // user-written render functions.


        vm.$createElement = function (a, b, c, d) {
          return createElement(vm, a, b, c, d, true);
        }; // $attrs & $listeners are exposed for easier HOC creation.
        // they need to be reactive so that HOCs using them are always updated


        var parentData = parentVnode && parentVnode.data;
        /* istanbul ignore else */

        {
          defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
            !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
          }, true);
          defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
            !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
          }, true);
        }
      }

      var currentRenderingInstance = null;

      function renderMixin(Vue) {
        // install runtime convenience helpers
        installRenderHelpers(Vue.prototype);

        Vue.prototype.$nextTick = function (fn) {
          return nextTick(fn, this);
        };

        Vue.prototype._render = function () {
          var vm = this;
          var ref = vm.$options;
          var render = ref.render;
          var _parentVnode = ref._parentVnode;

          if (_parentVnode) {
            vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
          } // set parent vnode. this allows render functions to have access
          // to the data on the placeholder node.


          vm.$vnode = _parentVnode; // render self

          var vnode;

          try {
            // There's no need to maintain a stack because all render fns are called
            // separately from one another. Nested component's render fns are called
            // when parent component is patched.
            currentRenderingInstance = vm;
            vnode = render.call(vm._renderProxy, vm.$createElement);
          } catch (e) {
            handleError(e, vm, "render"); // return error render result,
            // or previous vnode to prevent render error causing blank component

            /* istanbul ignore else */

            if (vm.$options.renderError) {
              try {
                vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
              } catch (e) {
                handleError(e, vm, "renderError");
                vnode = vm._vnode;
              }
            } else {
              vnode = vm._vnode;
            }
          } finally {
            currentRenderingInstance = null;
          } // if the returned array contains only a single node, allow it


          if (Array.isArray(vnode) && vnode.length === 1) {
            vnode = vnode[0];
          } // return empty vnode in case the render function errored out


          if (!(vnode instanceof VNode)) {
            if (Array.isArray(vnode)) {
              warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
            }

            vnode = createEmptyVNode();
          } // set parent


          vnode.parent = _parentVnode;
          return vnode;
        };
      }
      /*  */


      function ensureCtor(comp, base) {
        if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
          comp = comp["default"];
        }

        return isObject(comp) ? base.extend(comp) : comp;
      }

      function createAsyncPlaceholder(factory, data, context, children, tag) {
        var node = createEmptyVNode();
        node.asyncFactory = factory;
        node.asyncMeta = {
          data: data,
          context: context,
          children: children,
          tag: tag
        };
        return node;
      }

      function resolveAsyncComponent(factory, baseCtor) {
        if (isTrue(factory.error) && isDef(factory.errorComp)) {
          return factory.errorComp;
        }

        if (isDef(factory.resolved)) {
          return factory.resolved;
        }

        var owner = currentRenderingInstance;

        if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
          // already pending
          factory.owners.push(owner);
        }

        if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
          return factory.loadingComp;
        }

        if (owner && !isDef(factory.owners)) {
          var owners = factory.owners = [owner];
          var sync = true;
          var timerLoading = null;
          var timerTimeout = null;
          owner.$on('hook:destroyed', function () {
            return remove(owners, owner);
          });

          var forceRender = function forceRender(renderCompleted) {
            for (var i = 0, l = owners.length; i < l; i++) {
              owners[i].$forceUpdate();
            }

            if (renderCompleted) {
              owners.length = 0;

              if (timerLoading !== null) {
                clearTimeout(timerLoading);
                timerLoading = null;
              }

              if (timerTimeout !== null) {
                clearTimeout(timerTimeout);
                timerTimeout = null;
              }
            }
          };

          var resolve = once(function (res) {
            // cache resolved
            factory.resolved = ensureCtor(res, baseCtor); // invoke callbacks only if this is not a synchronous resolve
            // (async resolves are shimmed as synchronous during SSR)

            if (!sync) {
              forceRender(true);
            } else {
              owners.length = 0;
            }
          });
          var reject = once(function (reason) {
            warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));

            if (isDef(factory.errorComp)) {
              factory.error = true;
              forceRender(true);
            }
          });
          var res = factory(resolve, reject);

          if (isObject(res)) {
            if (isPromise(res)) {
              // () => Promise
              if (isUndef(factory.resolved)) {
                res.then(resolve, reject);
              }
            } else if (isPromise(res.component)) {
              res.component.then(resolve, reject);

              if (isDef(res.error)) {
                factory.errorComp = ensureCtor(res.error, baseCtor);
              }

              if (isDef(res.loading)) {
                factory.loadingComp = ensureCtor(res.loading, baseCtor);

                if (res.delay === 0) {
                  factory.loading = true;
                } else {
                  timerLoading = setTimeout(function () {
                    timerLoading = null;

                    if (isUndef(factory.resolved) && isUndef(factory.error)) {
                      factory.loading = true;
                      forceRender(false);
                    }
                  }, res.delay || 200);
                }
              }

              if (isDef(res.timeout)) {
                timerTimeout = setTimeout(function () {
                  timerTimeout = null;

                  if (isUndef(factory.resolved)) {
                    reject("timeout (" + res.timeout + "ms)");
                  }
                }, res.timeout);
              }
            }
          }

          sync = false; // return in case resolved synchronously

          return factory.loading ? factory.loadingComp : factory.resolved;
        }
      }
      /*  */


      function isAsyncPlaceholder(node) {
        return node.isComment && node.asyncFactory;
      }
      /*  */


      function getFirstComponentChild(children) {
        if (Array.isArray(children)) {
          for (var i = 0; i < children.length; i++) {
            var c = children[i];

            if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
              return c;
            }
          }
        }
      }
      /*  */

      /*  */


      function initEvents(vm) {
        vm._events = Object.create(null);
        vm._hasHookEvent = false; // init parent attached events

        var listeners = vm.$options._parentListeners;

        if (listeners) {
          updateComponentListeners(vm, listeners);
        }
      }

      var target;

      function add(event, fn) {
        target.$on(event, fn);
      }

      function remove$1(event, fn) {
        target.$off(event, fn);
      }

      function createOnceHandler(event, fn) {
        var _target = target;
        return function onceHandler() {
          var res = fn.apply(null, arguments);

          if (res !== null) {
            _target.$off(event, onceHandler);
          }
        };
      }

      function updateComponentListeners(vm, listeners, oldListeners) {
        target = vm;
        updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
        target = undefined;
      }

      function eventsMixin(Vue) {
        var hookRE = /^hook:/;

        Vue.prototype.$on = function (event, fn) {
          var vm = this;

          if (Array.isArray(event)) {
            for (var i = 0, l = event.length; i < l; i++) {
              vm.$on(event[i], fn);
            }
          } else {
            (vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
            // instead of a hash lookup

            if (hookRE.test(event)) {
              vm._hasHookEvent = true;
            }
          }

          return vm;
        };

        Vue.prototype.$once = function (event, fn) {
          var vm = this;

          function on() {
            vm.$off(event, on);
            fn.apply(vm, arguments);
          }

          on.fn = fn;
          vm.$on(event, on);
          return vm;
        };

        Vue.prototype.$off = function (event, fn) {
          var vm = this; // all

          if (!arguments.length) {
            vm._events = Object.create(null);
            return vm;
          } // array of events


          if (Array.isArray(event)) {
            for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
              vm.$off(event[i$1], fn);
            }

            return vm;
          } // specific event


          var cbs = vm._events[event];

          if (!cbs) {
            return vm;
          }

          if (!fn) {
            vm._events[event] = null;
            return vm;
          } // specific handler


          var cb;
          var i = cbs.length;

          while (i--) {
            cb = cbs[i];

            if (cb === fn || cb.fn === fn) {
              cbs.splice(i, 1);
              break;
            }
          }

          return vm;
        };

        Vue.prototype.$emit = function (event) {
          var vm = this;
          {
            var lowerCaseEvent = event.toLowerCase();

            if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
              tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
            }
          }
          var cbs = vm._events[event];

          if (cbs) {
            cbs = cbs.length > 1 ? toArray(cbs) : cbs;
            var args = toArray(arguments, 1);
            var info = "event handler for \"" + event + "\"";

            for (var i = 0, l = cbs.length; i < l; i++) {
              invokeWithErrorHandling(cbs[i], vm, args, vm, info);
            }
          }

          return vm;
        };
      }
      /*  */


      var activeInstance = null;
      var isUpdatingChildComponent = false;

      function setActiveInstance(vm) {
        var prevActiveInstance = activeInstance;
        activeInstance = vm;
        return function () {
          activeInstance = prevActiveInstance;
        };
      }

      function initLifecycle(vm) {
        var options = vm.$options; // locate first non-abstract parent

        var parent = options.parent;

        if (parent && !options["abstract"]) {
          while (parent.$options["abstract"] && parent.$parent) {
            parent = parent.$parent;
          }

          parent.$children.push(vm);
        }

        vm.$parent = parent;
        vm.$root = parent ? parent.$root : vm;
        vm.$children = [];
        vm.$refs = {};
        vm._watcher = null;
        vm._inactive = null;
        vm._directInactive = false;
        vm._isMounted = false;
        vm._isDestroyed = false;
        vm._isBeingDestroyed = false;
      }

      function lifecycleMixin(Vue) {
        Vue.prototype._update = function (vnode, hydrating) {
          var vm = this;
          var prevEl = vm.$el;
          var prevVnode = vm._vnode;
          var restoreActiveInstance = setActiveInstance(vm);
          vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
          // based on the rendering backend used.

          if (!prevVnode) {
            // initial render
            vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false
            /* removeOnly */
            );
          } else {
            // updates
            vm.$el = vm.__patch__(prevVnode, vnode);
          }

          restoreActiveInstance(); // update __vue__ reference

          if (prevEl) {
            prevEl.__vue__ = null;
          }

          if (vm.$el) {
            vm.$el.__vue__ = vm;
          } // if parent is an HOC, update its $el as well


          if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
            vm.$parent.$el = vm.$el;
          } // updated hook is called by the scheduler to ensure that children are
          // updated in a parent's updated hook.

        };

        Vue.prototype.$forceUpdate = function () {
          var vm = this;

          if (vm._watcher) {
            vm._watcher.update();
          }
        };

        Vue.prototype.$destroy = function () {
          var vm = this;

          if (vm._isBeingDestroyed) {
            return;
          }

          callHook(vm, 'beforeDestroy');
          vm._isBeingDestroyed = true; // remove self from parent

          var parent = vm.$parent;

          if (parent && !parent._isBeingDestroyed && !vm.$options["abstract"]) {
            remove(parent.$children, vm);
          } // teardown watchers


          if (vm._watcher) {
            vm._watcher.teardown();
          }

          var i = vm._watchers.length;

          while (i--) {
            vm._watchers[i].teardown();
          } // remove reference from data ob
          // frozen object may not have observer.


          if (vm._data.__ob__) {
            vm._data.__ob__.vmCount--;
          } // call the last hook...


          vm._isDestroyed = true; // invoke destroy hooks on current rendered tree

          vm.__patch__(vm._vnode, null); // fire destroyed hook


          callHook(vm, 'destroyed'); // turn off all instance listeners.

          vm.$off(); // remove __vue__ reference

          if (vm.$el) {
            vm.$el.__vue__ = null;
          } // release circular reference (#6759)


          if (vm.$vnode) {
            vm.$vnode.parent = null;
          }
        };
      }

      function mountComponent(vm, el, hydrating) {
        vm.$el = el;

        if (!vm.$options.render) {
          vm.$options.render = createEmptyVNode;
          {
            /* istanbul ignore if */
            if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
              warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
            } else {
              warn('Failed to mount component: template or render function not defined.', vm);
            }
          }
        }

        callHook(vm, 'beforeMount');
        var updateComponent;
        /* istanbul ignore if */

        if (config.performance && mark) {
          updateComponent = function updateComponent() {
            var name = vm._name;
            var id = vm._uid;
            var startTag = "vue-perf-start:" + id;
            var endTag = "vue-perf-end:" + id;
            mark(startTag);

            var vnode = vm._render();

            mark(endTag);
            measure("vue " + name + " render", startTag, endTag);
            mark(startTag);

            vm._update(vnode, hydrating);

            mark(endTag);
            measure("vue " + name + " patch", startTag, endTag);
          };
        } else {
          updateComponent = function updateComponent() {
            vm._update(vm._render(), hydrating);
          };
        } // we set this to vm._watcher inside the watcher's constructor
        // since the watcher's initial patch may call $forceUpdate (e.g. inside child
        // component's mounted hook), which relies on vm._watcher being already defined


        new Watcher(vm, updateComponent, noop, {
          before: function before() {
            if (vm._isMounted && !vm._isDestroyed) {
              callHook(vm, 'beforeUpdate');
            }
          }
        }, true
        /* isRenderWatcher */
        );
        hydrating = false; // manually mounted instance, call mounted on self
        // mounted is called for render-created child components in its inserted hook

        if (vm.$vnode == null) {
          vm._isMounted = true;
          callHook(vm, 'mounted');
        }

        return vm;
      }

      function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
        {
          isUpdatingChildComponent = true;
        } // determine whether component has slot children
        // we need to do this before overwriting $options._renderChildren.
        // check if there are dynamic scopedSlots (hand-written or compiled but with
        // dynamic slot names). Static scoped slots compiled from template has the
        // "$stable" marker.

        var newScopedSlots = parentVnode.data.scopedSlots;
        var oldScopedSlots = vm.$scopedSlots;
        var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key); // Any static slot children from the parent may have changed during parent's
        // update. Dynamic scoped slots may also have changed. In such cases, a forced
        // update is necessary to ensure correctness.

        var needsForceUpdate = !!(renderChildren || // has new static slots
        vm.$options._renderChildren || // has old static slots
        hasDynamicScopedSlot);
        vm.$options._parentVnode = parentVnode;
        vm.$vnode = parentVnode; // update vm's placeholder node without re-render

        if (vm._vnode) {
          // update child tree's parent
          vm._vnode.parent = parentVnode;
        }

        vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
        // these are also reactive so they may trigger child update if the child
        // used them during render

        vm.$attrs = parentVnode.data.attrs || emptyObject;
        vm.$listeners = listeners || emptyObject; // update props

        if (propsData && vm.$options.props) {
          toggleObserving(false);
          var props = vm._props;
          var propKeys = vm.$options._propKeys || [];

          for (var i = 0; i < propKeys.length; i++) {
            var key = propKeys[i];
            var propOptions = vm.$options.props; // wtf flow?

            props[key] = validateProp(key, propOptions, propsData, vm);
          }

          toggleObserving(true); // keep a copy of raw propsData

          vm.$options.propsData = propsData;
        } // update listeners


        listeners = listeners || emptyObject;
        var oldListeners = vm.$options._parentListeners;
        vm.$options._parentListeners = listeners;
        updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

        if (needsForceUpdate) {
          vm.$slots = resolveSlots(renderChildren, parentVnode.context);
          vm.$forceUpdate();
        }

        {
          isUpdatingChildComponent = false;
        }
      }

      function isInInactiveTree(vm) {
        while (vm && (vm = vm.$parent)) {
          if (vm._inactive) {
            return true;
          }
        }

        return false;
      }

      function activateChildComponent(vm, direct) {
        if (direct) {
          vm._directInactive = false;

          if (isInInactiveTree(vm)) {
            return;
          }
        } else if (vm._directInactive) {
          return;
        }

        if (vm._inactive || vm._inactive === null) {
          vm._inactive = false;

          for (var i = 0; i < vm.$children.length; i++) {
            activateChildComponent(vm.$children[i]);
          }

          callHook(vm, 'activated');
        }
      }

      function deactivateChildComponent(vm, direct) {
        if (direct) {
          vm._directInactive = true;

          if (isInInactiveTree(vm)) {
            return;
          }
        }

        if (!vm._inactive) {
          vm._inactive = true;

          for (var i = 0; i < vm.$children.length; i++) {
            deactivateChildComponent(vm.$children[i]);
          }

          callHook(vm, 'deactivated');
        }
      }

      function callHook(vm, hook) {
        // #7573 disable dep collection when invoking lifecycle hooks
        pushTarget();
        var handlers = vm.$options[hook];
        var info = hook + " hook";

        if (handlers) {
          for (var i = 0, j = handlers.length; i < j; i++) {
            invokeWithErrorHandling(handlers[i], vm, null, vm, info);
          }
        }

        if (vm._hasHookEvent) {
          vm.$emit('hook:' + hook);
        }

        popTarget();
      }
      /*  */


      var MAX_UPDATE_COUNT = 100;
      var queue = [];
      var activatedChildren = [];
      var has = {};
      var circular = {};
      var waiting = false;
      var flushing = false;
      var index = 0;
      /**
       * Reset the scheduler's state.
       */

      function resetSchedulerState() {
        index = queue.length = activatedChildren.length = 0;
        has = {};
        {
          circular = {};
        }
        waiting = flushing = false;
      } // Async edge case #6566 requires saving the timestamp when event listeners are
      // attached. However, calling performance.now() has a perf overhead especially
      // if the page has thousands of event listeners. Instead, we take a timestamp
      // every time the scheduler flushes and use that for all event listeners
      // attached during that flush.


      var currentFlushTimestamp = 0; // Async edge case fix requires storing an event listener's attach timestamp.

      var getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
      // timestamp can either be hi-res (relative to page load) or low-res
      // (relative to UNIX epoch), so in order to compare time we have to use the
      // same timestamp type when saving the flush timestamp.
      // All IE versions use low-res event timestamps, and have problematic clock
      // implementations (#9632)

      if (inBrowser && !isIE) {
        var performance = window.performance;

        if (performance && typeof performance.now === 'function' && getNow() > document.createEvent('Event').timeStamp) {
          // if the event timestamp, although evaluated AFTER the Date.now(), is
          // smaller than it, it means the event is using a hi-res timestamp,
          // and we need to use the hi-res version for event listener timestamps as
          // well.
          getNow = function getNow() {
            return performance.now();
          };
        }
      }
      /**
       * Flush both queues and run the watchers.
       */


      function flushSchedulerQueue() {
        currentFlushTimestamp = getNow();
        flushing = true;
        var watcher, id; // Sort queue before flush.
        // This ensures that:
        // 1. Components are updated from parent to child. (because parent is always
        //    created before the child)
        // 2. A component's user watchers are run before its render watcher (because
        //    user watchers are created before the render watcher)
        // 3. If a component is destroyed during a parent component's watcher run,
        //    its watchers can be skipped.

        queue.sort(function (a, b) {
          return a.id - b.id;
        }); // do not cache length because more watchers might be pushed
        // as we run existing watchers

        for (index = 0; index < queue.length; index++) {
          watcher = queue[index];

          if (watcher.before) {
            watcher.before();
          }

          id = watcher.id;
          has[id] = null;
          watcher.run(); // in dev build, check and stop circular updates.

          if (has[id] != null) {
            circular[id] = (circular[id] || 0) + 1;

            if (circular[id] > MAX_UPDATE_COUNT) {
              warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
              break;
            }
          }
        } // keep copies of post queues before resetting state


        var activatedQueue = activatedChildren.slice();
        var updatedQueue = queue.slice();
        resetSchedulerState(); // call component updated and activated hooks

        callActivatedHooks(activatedQueue);
        callUpdatedHooks(updatedQueue); // devtool hook

        /* istanbul ignore if */

        if (devtools && config.devtools) {
          devtools.emit('flush');
        }
      }

      function callUpdatedHooks(queue) {
        var i = queue.length;

        while (i--) {
          var watcher = queue[i];
          var vm = watcher.vm;

          if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
            callHook(vm, 'updated');
          }
        }
      }
      /**
       * Queue a kept-alive component that was activated during patch.
       * The queue will be processed after the entire tree has been patched.
       */


      function queueActivatedComponent(vm) {
        // setting _inactive to false here so that a render function can
        // rely on checking whether it's in an inactive tree (e.g. router-view)
        vm._inactive = false;
        activatedChildren.push(vm);
      }

      function callActivatedHooks(queue) {
        for (var i = 0; i < queue.length; i++) {
          queue[i]._inactive = true;
          activateChildComponent(queue[i], true
          /* true */
          );
        }
      }
      /**
       * Push a watcher into the watcher queue.
       * Jobs with duplicate IDs will be skipped unless it's
       * pushed when the queue is being flushed.
       */


      function queueWatcher(watcher) {
        var id = watcher.id;

        if (has[id] == null) {
          has[id] = true;

          if (!flushing) {
            queue.push(watcher);
          } else {
            // if already flushing, splice the watcher based on its id
            // if already past its id, it will be run next immediately.
            var i = queue.length - 1;

            while (i > index && queue[i].id > watcher.id) {
              i--;
            }

            queue.splice(i + 1, 0, watcher);
          } // queue the flush


          if (!waiting) {
            waiting = true;

            if (!config.async) {
              flushSchedulerQueue();
              return;
            }

            nextTick(flushSchedulerQueue);
          }
        }
      }
      /*  */


      var uid$2 = 0;
      /**
       * A watcher parses an expression, collects dependencies,
       * and fires callback when the expression value changes.
       * This is used for both the $watch() api and directives.
       */

      var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
        this.vm = vm;

        if (isRenderWatcher) {
          vm._watcher = this;
        }

        vm._watchers.push(this); // options


        if (options) {
          this.deep = !!options.deep;
          this.user = !!options.user;
          this.lazy = !!options.lazy;
          this.sync = !!options.sync;
          this.before = options.before;
        } else {
          this.deep = this.user = this.lazy = this.sync = false;
        }

        this.cb = cb;
        this.id = ++uid$2; // uid for batching

        this.active = true;
        this.dirty = this.lazy; // for lazy watchers

        this.deps = [];
        this.newDeps = [];
        this.depIds = new _Set();
        this.newDepIds = new _Set();
        this.expression = expOrFn.toString(); // parse expression for getter

        if (typeof expOrFn === 'function') {
          this.getter = expOrFn;
        } else {
          this.getter = parsePath(expOrFn);

          if (!this.getter) {
            this.getter = noop;
            warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
          }
        }

        this.value = this.lazy ? undefined : this.get();
      };
      /**
       * Evaluate the getter, and re-collect dependencies.
       */


      Watcher.prototype.get = function get() {
        pushTarget(this);
        var value;
        var vm = this.vm;

        try {
          value = this.getter.call(vm, vm);
        } catch (e) {
          if (this.user) {
            handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
          } else {
            throw e;
          }
        } finally {
          // "touch" every property so they are all tracked as
          // dependencies for deep watching
          if (this.deep) {
            traverse(value);
          }

          popTarget();
          this.cleanupDeps();
        }

        return value;
      };
      /**
       * Add a dependency to this directive.
       */


      Watcher.prototype.addDep = function addDep(dep) {
        var id = dep.id;

        if (!this.newDepIds.has(id)) {
          this.newDepIds.add(id);
          this.newDeps.push(dep);

          if (!this.depIds.has(id)) {
            dep.addSub(this);
          }
        }
      };
      /**
       * Clean up for dependency collection.
       */


      Watcher.prototype.cleanupDeps = function cleanupDeps() {
        var i = this.deps.length;

        while (i--) {
          var dep = this.deps[i];

          if (!this.newDepIds.has(dep.id)) {
            dep.removeSub(this);
          }
        }

        var tmp = this.depIds;
        this.depIds = this.newDepIds;
        this.newDepIds = tmp;
        this.newDepIds.clear();
        tmp = this.deps;
        this.deps = this.newDeps;
        this.newDeps = tmp;
        this.newDeps.length = 0;
      };
      /**
       * Subscriber interface.
       * Will be called when a dependency changes.
       */


      Watcher.prototype.update = function update() {
        /* istanbul ignore else */
        if (this.lazy) {
          this.dirty = true;
        } else if (this.sync) {
          this.run();
        } else {
          queueWatcher(this);
        }
      };
      /**
       * Scheduler job interface.
       * Will be called by the scheduler.
       */


      Watcher.prototype.run = function run() {
        if (this.active) {
          var value = this.get();

          if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
          // when the value is the same, because the value may
          // have mutated.
          isObject(value) || this.deep) {
            // set new value
            var oldValue = this.value;
            this.value = value;

            if (this.user) {
              try {
                this.cb.call(this.vm, value, oldValue);
              } catch (e) {
                handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
              }
            } else {
              this.cb.call(this.vm, value, oldValue);
            }
          }
        }
      };
      /**
       * Evaluate the value of the watcher.
       * This only gets called for lazy watchers.
       */


      Watcher.prototype.evaluate = function evaluate() {
        this.value = this.get();
        this.dirty = false;
      };
      /**
       * Depend on all deps collected by this watcher.
       */


      Watcher.prototype.depend = function depend() {
        var i = this.deps.length;

        while (i--) {
          this.deps[i].depend();
        }
      };
      /**
       * Remove self from all dependencies' subscriber list.
       */


      Watcher.prototype.teardown = function teardown() {
        if (this.active) {
          // remove self from vm's watcher list
          // this is a somewhat expensive operation so we skip it
          // if the vm is being destroyed.
          if (!this.vm._isBeingDestroyed) {
            remove(this.vm._watchers, this);
          }

          var i = this.deps.length;

          while (i--) {
            this.deps[i].removeSub(this);
          }

          this.active = false;
        }
      };
      /*  */


      var sharedPropertyDefinition = {
        enumerable: true,
        configurable: true,
        get: noop,
        set: noop
      };

      function proxy(target, sourceKey, key) {
        sharedPropertyDefinition.get = function proxyGetter() {
          return this[sourceKey][key];
        };

        sharedPropertyDefinition.set = function proxySetter(val) {
          this[sourceKey][key] = val;
        };

        Object.defineProperty(target, key, sharedPropertyDefinition);
      }

      function initState(vm) {
        vm._watchers = [];
        var opts = vm.$options;

        if (opts.props) {
          initProps(vm, opts.props);
        }

        if (opts.methods) {
          initMethods(vm, opts.methods);
        }

        if (opts.data) {
          initData(vm);
        } else {
          observe(vm._data = {}, true
          /* asRootData */
          );
        }

        if (opts.computed) {
          initComputed(vm, opts.computed);
        }

        if (opts.watch && opts.watch !== nativeWatch) {
          initWatch(vm, opts.watch);
        }
      }

      function initProps(vm, propsOptions) {
        var propsData = vm.$options.propsData || {};
        var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
        // instead of dynamic object key enumeration.

        var keys = vm.$options._propKeys = [];
        var isRoot = !vm.$parent; // root instance props should be converted

        if (!isRoot) {
          toggleObserving(false);
        }

        var loop = function loop(key) {
          keys.push(key);
          var value = validateProp(key, propsOptions, propsData, vm);
          /* istanbul ignore else */

          {
            var hyphenatedKey = hyphenate(key);

            if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
              warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
            }

            defineReactive$$1(props, key, value, function () {
              if (!isRoot && !isUpdatingChildComponent) {
                warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
              }
            });
          } // static props are already proxied on the component's prototype
          // during Vue.extend(). We only need to proxy props defined at
          // instantiation here.

          if (!(key in vm)) {
            proxy(vm, "_props", key);
          }
        };

        for (var key in propsOptions) {
          loop(key);
        }

        toggleObserving(true);
      }

      function initData(vm) {
        var data = vm.$options.data;
        data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};

        if (!isPlainObject(data)) {
          data = {};
          warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
        } // proxy data on instance


        var keys = Object.keys(data);
        var props = vm.$options.props;
        var methods = vm.$options.methods;
        var i = keys.length;

        while (i--) {
          var key = keys[i];
          {
            if (methods && hasOwn(methods, key)) {
              warn("Method \"" + key + "\" has already been defined as a data property.", vm);
            }
          }

          if (props && hasOwn(props, key)) {
            warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
          } else if (!isReserved(key)) {
            proxy(vm, "_data", key);
          }
        } // observe data


        observe(data, true
        /* asRootData */
        );
      }

      function getData(data, vm) {
        // #7573 disable dep collection when invoking data getters
        pushTarget();

        try {
          return data.call(vm, vm);
        } catch (e) {
          handleError(e, vm, "data()");
          return {};
        } finally {
          popTarget();
        }
      }

      var computedWatcherOptions = {
        lazy: true
      };

      function initComputed(vm, computed) {
        // $flow-disable-line
        var watchers = vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR

        var isSSR = isServerRendering();

        for (var key in computed) {
          var userDef = computed[key];
          var getter = typeof userDef === 'function' ? userDef : userDef.get;

          if (getter == null) {
            warn("Getter is missing for computed property \"" + key + "\".", vm);
          }

          if (!isSSR) {
            // create internal watcher for the computed property.
            watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
          } // component-defined computed properties are already defined on the
          // component prototype. We only need to define computed properties defined
          // at instantiation here.


          if (!(key in vm)) {
            defineComputed(vm, key, userDef);
          } else {
            if (key in vm.$data) {
              warn("The computed property \"" + key + "\" is already defined in data.", vm);
            } else if (vm.$options.props && key in vm.$options.props) {
              warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
            }
          }
        }
      }

      function defineComputed(target, key, userDef) {
        var shouldCache = !isServerRendering();

        if (typeof userDef === 'function') {
          sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
          sharedPropertyDefinition.set = noop;
        } else {
          sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
          sharedPropertyDefinition.set = userDef.set || noop;
        }

        if (sharedPropertyDefinition.set === noop) {
          sharedPropertyDefinition.set = function () {
            warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
          };
        }

        Object.defineProperty(target, key, sharedPropertyDefinition);
      }

      function createComputedGetter(key) {
        return function computedGetter() {
          var watcher = this._computedWatchers && this._computedWatchers[key];

          if (watcher) {
            if (watcher.dirty) {
              watcher.evaluate();
            }

            if (Dep.target) {
              watcher.depend();
            }

            return watcher.value;
          }
        };
      }

      function createGetterInvoker(fn) {
        return function computedGetter() {
          return fn.call(this, this);
        };
      }

      function initMethods(vm, methods) {
        var props = vm.$options.props;

        for (var key in methods) {
          {
            if (typeof methods[key] !== 'function') {
              warn("Method \"" + key + "\" has type \"" + _typeof(methods[key]) + "\" in the component definition. " + "Did you reference the function correctly?", vm);
            }

            if (props && hasOwn(props, key)) {
              warn("Method \"" + key + "\" has already been defined as a prop.", vm);
            }

            if (key in vm && isReserved(key)) {
              warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
            }
          }
          vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
        }
      }

      function initWatch(vm, watch) {
        for (var key in watch) {
          var handler = watch[key];

          if (Array.isArray(handler)) {
            for (var i = 0; i < handler.length; i++) {
              createWatcher(vm, key, handler[i]);
            }
          } else {
            createWatcher(vm, key, handler);
          }
        }
      }

      function createWatcher(vm, expOrFn, handler, options) {
        if (isPlainObject(handler)) {
          options = handler;
          handler = handler.handler;
        }

        if (typeof handler === 'string') {
          handler = vm[handler];
        }

        return vm.$watch(expOrFn, handler, options);
      }

      function stateMixin(Vue) {
        // flow somehow has problems with directly declared definition object
        // when using Object.defineProperty, so we have to procedurally build up
        // the object here.
        var dataDef = {};

        dataDef.get = function () {
          return this._data;
        };

        var propsDef = {};

        propsDef.get = function () {
          return this._props;
        };

        {
          dataDef.set = function () {
            warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
          };

          propsDef.set = function () {
            warn("$props is readonly.", this);
          };
        }
        Object.defineProperty(Vue.prototype, '$data', dataDef);
        Object.defineProperty(Vue.prototype, '$props', propsDef);
        Vue.prototype.$set = set;
        Vue.prototype.$delete = del;

        Vue.prototype.$watch = function (expOrFn, cb, options) {
          var vm = this;

          if (isPlainObject(cb)) {
            return createWatcher(vm, expOrFn, cb, options);
          }

          options = options || {};
          options.user = true;
          var watcher = new Watcher(vm, expOrFn, cb, options);

          if (options.immediate) {
            try {
              cb.call(vm, watcher.value);
            } catch (error) {
              handleError(error, vm, "callback for immediate watcher \"" + watcher.expression + "\"");
            }
          }

          return function unwatchFn() {
            watcher.teardown();
          };
        };
      }
      /*  */


      var uid$3 = 0;

      function initMixin(Vue) {
        Vue.prototype._init = function (options) {
          var vm = this; // a uid

          vm._uid = uid$3++;
          var startTag, endTag;
          /* istanbul ignore if */

          if (config.performance && mark) {
            startTag = "vue-perf-start:" + vm._uid;
            endTag = "vue-perf-end:" + vm._uid;
            mark(startTag);
          } // a flag to avoid this being observed


          vm._isVue = true; // merge options

          if (options && options._isComponent) {
            // optimize internal component instantiation
            // since dynamic options merging is pretty slow, and none of the
            // internal component options needs special treatment.
            initInternalComponent(vm, options);
          } else {
            vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
          }
          /* istanbul ignore else */


          {
            initProxy(vm);
          } // expose real self

          vm._self = vm;
          initLifecycle(vm);
          initEvents(vm);
          initRender(vm);
          callHook(vm, 'beforeCreate');
          initInjections(vm); // resolve injections before data/props

          initState(vm);
          initProvide(vm); // resolve provide after data/props

          callHook(vm, 'created');
          /* istanbul ignore if */

          if (config.performance && mark) {
            vm._name = formatComponentName(vm, false);
            mark(endTag);
            measure("vue " + vm._name + " init", startTag, endTag);
          }

          if (vm.$options.el) {
            vm.$mount(vm.$options.el);
          }
        };
      }

      function initInternalComponent(vm, options) {
        var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

        var parentVnode = options._parentVnode;
        opts.parent = options.parent;
        opts._parentVnode = parentVnode;
        var vnodeComponentOptions = parentVnode.componentOptions;
        opts.propsData = vnodeComponentOptions.propsData;
        opts._parentListeners = vnodeComponentOptions.listeners;
        opts._renderChildren = vnodeComponentOptions.children;
        opts._componentTag = vnodeComponentOptions.tag;

        if (options.render) {
          opts.render = options.render;
          opts.staticRenderFns = options.staticRenderFns;
        }
      }

      function resolveConstructorOptions(Ctor) {
        var options = Ctor.options;

        if (Ctor["super"]) {
          var superOptions = resolveConstructorOptions(Ctor["super"]);
          var cachedSuperOptions = Ctor.superOptions;

          if (superOptions !== cachedSuperOptions) {
            // super option changed,
            // need to resolve new options.
            Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

            var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

            if (modifiedOptions) {
              extend(Ctor.extendOptions, modifiedOptions);
            }

            options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

            if (options.name) {
              options.components[options.name] = Ctor;
            }
          }
        }

        return options;
      }

      function resolveModifiedOptions(Ctor) {
        var modified;
        var latest = Ctor.options;
        var sealed = Ctor.sealedOptions;

        for (var key in latest) {
          if (latest[key] !== sealed[key]) {
            if (!modified) {
              modified = {};
            }

            modified[key] = latest[key];
          }
        }

        return modified;
      }

      function Vue(options) {
        if (!(this instanceof Vue)) {
          warn('Vue is a constructor and should be called with the `new` keyword');
        }

        this._init(options);
      }

      initMixin(Vue);
      stateMixin(Vue);
      eventsMixin(Vue);
      lifecycleMixin(Vue);
      renderMixin(Vue);
      /*  */

      function initUse(Vue) {
        Vue.use = function (plugin) {
          var installedPlugins = this._installedPlugins || (this._installedPlugins = []);

          if (installedPlugins.indexOf(plugin) > -1) {
            return this;
          } // additional parameters


          var args = toArray(arguments, 1);
          args.unshift(this);

          if (typeof plugin.install === 'function') {
            plugin.install.apply(plugin, args);
          } else if (typeof plugin === 'function') {
            plugin.apply(null, args);
          }

          installedPlugins.push(plugin);
          return this;
        };
      }
      /*  */


      function initMixin$1(Vue) {
        Vue.mixin = function (mixin) {
          this.options = mergeOptions(this.options, mixin);
          return this;
        };
      }
      /*  */


      function initExtend(Vue) {
        /**
         * Each instance constructor, including Vue, has a unique
         * cid. This enables us to create wrapped "child
         * constructors" for prototypal inheritance and cache them.
         */
        Vue.cid = 0;
        var cid = 1;
        /**
         * Class inheritance
         */

        Vue.extend = function (extendOptions) {
          extendOptions = extendOptions || {};
          var Super = this;
          var SuperId = Super.cid;
          var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

          if (cachedCtors[SuperId]) {
            return cachedCtors[SuperId];
          }

          var name = extendOptions.name || Super.options.name;

          if (name) {
            validateComponentName(name);
          }

          var Sub = function VueComponent(options) {
            this._init(options);
          };

          Sub.prototype = Object.create(Super.prototype);
          Sub.prototype.constructor = Sub;
          Sub.cid = cid++;
          Sub.options = mergeOptions(Super.options, extendOptions);
          Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
          // the Vue instances at extension time, on the extended prototype. This
          // avoids Object.defineProperty calls for each instance created.

          if (Sub.options.props) {
            initProps$1(Sub);
          }

          if (Sub.options.computed) {
            initComputed$1(Sub);
          } // allow further extension/mixin/plugin usage


          Sub.extend = Super.extend;
          Sub.mixin = Super.mixin;
          Sub.use = Super.use; // create asset registers, so extended classes
          // can have their private assets too.

          ASSET_TYPES.forEach(function (type) {
            Sub[type] = Super[type];
          }); // enable recursive self-lookup

          if (name) {
            Sub.options.components[name] = Sub;
          } // keep a reference to the super options at extension time.
          // later at instantiation we can check if Super's options have
          // been updated.


          Sub.superOptions = Super.options;
          Sub.extendOptions = extendOptions;
          Sub.sealedOptions = extend({}, Sub.options); // cache constructor

          cachedCtors[SuperId] = Sub;
          return Sub;
        };
      }

      function initProps$1(Comp) {
        var props = Comp.options.props;

        for (var key in props) {
          proxy(Comp.prototype, "_props", key);
        }
      }

      function initComputed$1(Comp) {
        var computed = Comp.options.computed;

        for (var key in computed) {
          defineComputed(Comp.prototype, key, computed[key]);
        }
      }
      /*  */


      function initAssetRegisters(Vue) {
        /**
         * Create asset registration methods.
         */
        ASSET_TYPES.forEach(function (type) {
          Vue[type] = function (id, definition) {
            if (!definition) {
              return this.options[type + 's'][id];
            } else {
              /* istanbul ignore if */
              if (type === 'component') {
                validateComponentName(id);
              }

              if (type === 'component' && isPlainObject(definition)) {
                definition.name = definition.name || id;
                definition = this.options._base.extend(definition);
              }

              if (type === 'directive' && typeof definition === 'function') {
                definition = {
                  bind: definition,
                  update: definition
                };
              }

              this.options[type + 's'][id] = definition;
              return definition;
            }
          };
        });
      }
      /*  */


      function getComponentName(opts) {
        return opts && (opts.Ctor.options.name || opts.tag);
      }

      function matches(pattern, name) {
        if (Array.isArray(pattern)) {
          return pattern.indexOf(name) > -1;
        } else if (typeof pattern === 'string') {
          return pattern.split(',').indexOf(name) > -1;
        } else if (isRegExp(pattern)) {
          return pattern.test(name);
        }
        /* istanbul ignore next */


        return false;
      }

      function pruneCache(keepAliveInstance, filter) {
        var cache = keepAliveInstance.cache;
        var keys = keepAliveInstance.keys;
        var _vnode = keepAliveInstance._vnode;

        for (var key in cache) {
          var cachedNode = cache[key];

          if (cachedNode) {
            var name = getComponentName(cachedNode.componentOptions);

            if (name && !filter(name)) {
              pruneCacheEntry(cache, key, keys, _vnode);
            }
          }
        }
      }

      function pruneCacheEntry(cache, key, keys, current) {
        var cached$$1 = cache[key];

        if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
          cached$$1.componentInstance.$destroy();
        }

        cache[key] = null;
        remove(keys, key);
      }

      var patternTypes = [String, RegExp, Array];
      var KeepAlive = {
        name: 'keep-alive',
        "abstract": true,
        props: {
          include: patternTypes,
          exclude: patternTypes,
          max: [String, Number]
        },
        created: function created() {
          this.cache = Object.create(null);
          this.keys = [];
        },
        destroyed: function destroyed() {
          for (var key in this.cache) {
            pruneCacheEntry(this.cache, key, this.keys);
          }
        },
        mounted: function mounted() {
          var this$1 = this;
          this.$watch('include', function (val) {
            pruneCache(this$1, function (name) {
              return matches(val, name);
            });
          });
          this.$watch('exclude', function (val) {
            pruneCache(this$1, function (name) {
              return !matches(val, name);
            });
          });
        },
        render: function render() {
          var slot = this.$slots["default"];
          var vnode = getFirstComponentChild(slot);
          var componentOptions = vnode && vnode.componentOptions;

          if (componentOptions) {
            // check pattern
            var name = getComponentName(componentOptions);
            var ref = this;
            var include = ref.include;
            var exclude = ref.exclude;

            if ( // not included
            include && (!name || !matches(include, name)) || // excluded
            exclude && name && matches(exclude, name)) {
              return vnode;
            }

            var ref$1 = this;
            var cache = ref$1.cache;
            var keys = ref$1.keys;
            var key = vnode.key == null // same constructor may get registered as different local components
            // so cid alone is not enough (#3269)
            ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;

            if (cache[key]) {
              vnode.componentInstance = cache[key].componentInstance; // make current key freshest

              remove(keys, key);
              keys.push(key);
            } else {
              cache[key] = vnode;
              keys.push(key); // prune oldest entry

              if (this.max && keys.length > parseInt(this.max)) {
                pruneCacheEntry(cache, keys[0], keys, this._vnode);
              }
            }

            vnode.data.keepAlive = true;
          }

          return vnode || slot && slot[0];
        }
      };
      var builtInComponents = {
        KeepAlive: KeepAlive
      };
      /*  */

      function initGlobalAPI(Vue) {
        // config
        var configDef = {};

        configDef.get = function () {
          return config;
        };

        {
          configDef.set = function () {
            warn('Do not replace the Vue.config object, set individual fields instead.');
          };
        }
        Object.defineProperty(Vue, 'config', configDef); // exposed util methods.
        // NOTE: these are not considered part of the public API - avoid relying on
        // them unless you are aware of the risk.

        Vue.util = {
          warn: warn,
          extend: extend,
          mergeOptions: mergeOptions,
          defineReactive: defineReactive$$1
        };
        Vue.set = set;
        Vue["delete"] = del;
        Vue.nextTick = nextTick; // 2.6 explicit observable API

        Vue.observable = function (obj) {
          observe(obj);
          return obj;
        };

        Vue.options = Object.create(null);
        ASSET_TYPES.forEach(function (type) {
          Vue.options[type + 's'] = Object.create(null);
        }); // this is used to identify the "base" constructor to extend all plain-object
        // components with in Weex's multi-instance scenarios.

        Vue.options._base = Vue;
        extend(Vue.options.components, builtInComponents);
        initUse(Vue);
        initMixin$1(Vue);
        initExtend(Vue);
        initAssetRegisters(Vue);
      }

      initGlobalAPI(Vue);
      Object.defineProperty(Vue.prototype, '$isServer', {
        get: isServerRendering
      });
      Object.defineProperty(Vue.prototype, '$ssrContext', {
        get: function get() {
          /* istanbul ignore next */
          return this.$vnode && this.$vnode.ssrContext;
        }
      }); // expose FunctionalRenderContext for ssr runtime helper installation

      Object.defineProperty(Vue, 'FunctionalRenderContext', {
        value: FunctionalRenderContext
      });
      Vue.version = '2.6.12';
      /*  */
      // these are reserved for web because they are directly compiled away
      // during template compilation

      var isReservedAttr = makeMap('style,class'); // attributes that should be using props for binding

      var acceptValue = makeMap('input,textarea,option,select,progress');

      var mustUseProp = function mustUseProp(tag, type, attr) {
        return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
      };

      var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
      var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

      var convertEnumeratedValue = function convertEnumeratedValue(key, value) {
        return isFalsyAttrValue(value) || value === 'false' ? 'false' // allow arbitrary string value for contenteditable
        : key === 'contenteditable' && isValidContentEditableValue(value) ? value : 'true';
      };

      var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');
      var xlinkNS = 'http://www.w3.org/1999/xlink';

      var isXlink = function isXlink(name) {
        return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
      };

      var getXlinkProp = function getXlinkProp(name) {
        return isXlink(name) ? name.slice(6, name.length) : '';
      };

      var isFalsyAttrValue = function isFalsyAttrValue(val) {
        return val == null || val === false;
      };
      /*  */


      function genClassForVnode(vnode) {
        var data = vnode.data;
        var parentNode = vnode;
        var childNode = vnode;

        while (isDef(childNode.componentInstance)) {
          childNode = childNode.componentInstance._vnode;

          if (childNode && childNode.data) {
            data = mergeClassData(childNode.data, data);
          }
        }

        while (isDef(parentNode = parentNode.parent)) {
          if (parentNode && parentNode.data) {
            data = mergeClassData(data, parentNode.data);
          }
        }

        return renderClass(data.staticClass, data["class"]);
      }

      function mergeClassData(child, parent) {
        return {
          staticClass: concat(child.staticClass, parent.staticClass),
          "class": isDef(child["class"]) ? [child["class"], parent["class"]] : parent["class"]
        };
      }

      function renderClass(staticClass, dynamicClass) {
        if (isDef(staticClass) || isDef(dynamicClass)) {
          return concat(staticClass, stringifyClass(dynamicClass));
        }
        /* istanbul ignore next */


        return '';
      }

      function concat(a, b) {
        return a ? b ? a + ' ' + b : a : b || '';
      }

      function stringifyClass(value) {
        if (Array.isArray(value)) {
          return stringifyArray(value);
        }

        if (isObject(value)) {
          return stringifyObject(value);
        }

        if (typeof value === 'string') {
          return value;
        }
        /* istanbul ignore next */


        return '';
      }

      function stringifyArray(value) {
        var res = '';
        var stringified;

        for (var i = 0, l = value.length; i < l; i++) {
          if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
            if (res) {
              res += ' ';
            }

            res += stringified;
          }
        }

        return res;
      }

      function stringifyObject(value) {
        var res = '';

        for (var key in value) {
          if (value[key]) {
            if (res) {
              res += ' ';
            }

            res += key;
          }
        }

        return res;
      }
      /*  */


      var namespaceMap = {
        svg: 'http://www.w3.org/2000/svg',
        math: 'http://www.w3.org/1998/Math/MathML'
      };
      var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
      // contain child elements.

      var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

      var isPreTag = function isPreTag(tag) {
        return tag === 'pre';
      };

      var isReservedTag = function isReservedTag(tag) {
        return isHTMLTag(tag) || isSVG(tag);
      };

      function getTagNamespace(tag) {
        if (isSVG(tag)) {
          return 'svg';
        } // basic support for MathML
        // note it doesn't support other MathML elements being component roots


        if (tag === 'math') {
          return 'math';
        }
      }

      var unknownElementCache = Object.create(null);

      function isUnknownElement(tag) {
        /* istanbul ignore if */
        if (!inBrowser) {
          return true;
        }

        if (isReservedTag(tag)) {
          return false;
        }

        tag = tag.toLowerCase();
        /* istanbul ignore if */

        if (unknownElementCache[tag] != null) {
          return unknownElementCache[tag];
        }

        var el = document.createElement(tag);

        if (tag.indexOf('-') > -1) {
          // http://stackoverflow.com/a/28210364/1070244
          return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
        } else {
          return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
        }
      }

      var isTextInputType = makeMap('text,number,password,search,email,tel,url');
      /*  */

      /**
       * Query an element selector if it's not an element already.
       */

      function query(el) {
        if (typeof el === 'string') {
          var selected = document.querySelector(el);

          if (!selected) {
            warn('Cannot find element: ' + el);
            return document.createElement('div');
          }

          return selected;
        } else {
          return el;
        }
      }
      /*  */


      function createElement$1(tagName, vnode) {
        var elm = document.createElement(tagName);

        if (tagName !== 'select') {
          return elm;
        } // false or null will remove the attribute but undefined will not


        if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
          elm.setAttribute('multiple', 'multiple');
        }

        return elm;
      }

      function createElementNS(namespace, tagName) {
        return document.createElementNS(namespaceMap[namespace], tagName);
      }

      function createTextNode(text) {
        return document.createTextNode(text);
      }

      function createComment(text) {
        return document.createComment(text);
      }

      function insertBefore(parentNode, newNode, referenceNode) {
        parentNode.insertBefore(newNode, referenceNode);
      }

      function removeChild(node, child) {
        node.removeChild(child);
      }

      function appendChild(node, child) {
        node.appendChild(child);
      }

      function parentNode(node) {
        return node.parentNode;
      }

      function nextSibling(node) {
        return node.nextSibling;
      }

      function tagName(node) {
        return node.tagName;
      }

      function setTextContent(node, text) {
        node.textContent = text;
      }

      function setStyleScope(node, scopeId) {
        node.setAttribute(scopeId, '');
      }

      var nodeOps = /*#__PURE__*/Object.freeze({
        createElement: createElement$1,
        createElementNS: createElementNS,
        createTextNode: createTextNode,
        createComment: createComment,
        insertBefore: insertBefore,
        removeChild: removeChild,
        appendChild: appendChild,
        parentNode: parentNode,
        nextSibling: nextSibling,
        tagName: tagName,
        setTextContent: setTextContent,
        setStyleScope: setStyleScope
      });
      /*  */

      var ref = {
        create: function create(_, vnode) {
          registerRef(vnode);
        },
        update: function update(oldVnode, vnode) {
          if (oldVnode.data.ref !== vnode.data.ref) {
            registerRef(oldVnode, true);
            registerRef(vnode);
          }
        },
        destroy: function destroy(vnode) {
          registerRef(vnode, true);
        }
      };

      function registerRef(vnode, isRemoval) {
        var key = vnode.data.ref;

        if (!isDef(key)) {
          return;
        }

        var vm = vnode.context;
        var ref = vnode.componentInstance || vnode.elm;
        var refs = vm.$refs;

        if (isRemoval) {
          if (Array.isArray(refs[key])) {
            remove(refs[key], ref);
          } else if (refs[key] === ref) {
            refs[key] = undefined;
          }
        } else {
          if (vnode.data.refInFor) {
            if (!Array.isArray(refs[key])) {
              refs[key] = [ref];
            } else if (refs[key].indexOf(ref) < 0) {
              // $flow-disable-line
              refs[key].push(ref);
            }
          } else {
            refs[key] = ref;
          }
        }
      }
      /**
       * Virtual DOM patching algorithm based on Snabbdom by
       * Simon Friis Vindum (@paldepind)
       * Licensed under the MIT License
       * https://github.com/paldepind/snabbdom/blob/master/LICENSE
       *
       * modified by Evan You (@yyx990803)
       *
       * Not type-checking this because this file is perf-critical and the cost
       * of making flow understand it is not worth it.
       */


      var emptyNode = new VNode('', {}, []);
      var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

      function sameVnode(a, b) {
        return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
      }

      function sameInputType(a, b) {
        if (a.tag !== 'input') {
          return true;
        }

        var i;
        var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
        var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
        return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
      }

      function createKeyToOldIdx(children, beginIdx, endIdx) {
        var i, key;
        var map = {};

        for (i = beginIdx; i <= endIdx; ++i) {
          key = children[i].key;

          if (isDef(key)) {
            map[key] = i;
          }
        }

        return map;
      }

      function createPatchFunction(backend) {
        var i, j;
        var cbs = {};
        var modules = backend.modules;
        var nodeOps = backend.nodeOps;

        for (i = 0; i < hooks.length; ++i) {
          cbs[hooks[i]] = [];

          for (j = 0; j < modules.length; ++j) {
            if (isDef(modules[j][hooks[i]])) {
              cbs[hooks[i]].push(modules[j][hooks[i]]);
            }
          }
        }

        function emptyNodeAt(elm) {
          return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
        }

        function createRmCb(childElm, listeners) {
          function remove$$1() {
            if (--remove$$1.listeners === 0) {
              removeNode(childElm);
            }
          }

          remove$$1.listeners = listeners;
          return remove$$1;
        }

        function removeNode(el) {
          var parent = nodeOps.parentNode(el); // element may have already been removed due to v-html / v-text

          if (isDef(parent)) {
            nodeOps.removeChild(parent, el);
          }
        }

        function isUnknownElement$$1(vnode, inVPre) {
          return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
            return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
          })) && config.isUnknownElement(vnode.tag);
        }

        var creatingElmInVPre = 0;

        function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
          if (isDef(vnode.elm) && isDef(ownerArray)) {
            // This vnode was used in a previous render!
            // now it's used as a new node, overwriting its elm would cause
            // potential patch errors down the road when it's used as an insertion
            // reference node. Instead, we clone the node on-demand before creating
            // associated DOM element for it.
            vnode = ownerArray[index] = cloneVNode(vnode);
          }

          vnode.isRootInsert = !nested; // for transition enter check

          if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
            return;
          }

          var data = vnode.data;
          var children = vnode.children;
          var tag = vnode.tag;

          if (isDef(tag)) {
            {
              if (data && data.pre) {
                creatingElmInVPre++;
              }

              if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
                warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
              }
            }
            vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
            setScope(vnode);
            /* istanbul ignore if */

            {
              createChildren(vnode, children, insertedVnodeQueue);

              if (isDef(data)) {
                invokeCreateHooks(vnode, insertedVnodeQueue);
              }

              insert(parentElm, vnode.elm, refElm);
            }

            if (data && data.pre) {
              creatingElmInVPre--;
            }
          } else if (isTrue(vnode.isComment)) {
            vnode.elm = nodeOps.createComment(vnode.text);
            insert(parentElm, vnode.elm, refElm);
          } else {
            vnode.elm = nodeOps.createTextNode(vnode.text);
            insert(parentElm, vnode.elm, refElm);
          }
        }

        function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
          var i = vnode.data;

          if (isDef(i)) {
            var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;

            if (isDef(i = i.hook) && isDef(i = i.init)) {
              i(vnode, false
              /* hydrating */
              );
            } // after calling the init hook, if the vnode is a child component
            // it should've created a child instance and mounted it. the child
            // component also has set the placeholder vnode's elm.
            // in that case we can just return the element and be done.


            if (isDef(vnode.componentInstance)) {
              initComponent(vnode, insertedVnodeQueue);
              insert(parentElm, vnode.elm, refElm);

              if (isTrue(isReactivated)) {
                reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
              }

              return true;
            }
          }
        }

        function initComponent(vnode, insertedVnodeQueue) {
          if (isDef(vnode.data.pendingInsert)) {
            insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
            vnode.data.pendingInsert = null;
          }

          vnode.elm = vnode.componentInstance.$el;

          if (isPatchable(vnode)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            setScope(vnode);
          } else {
            // empty component root.
            // skip all element-related modules except for ref (#3455)
            registerRef(vnode); // make sure to invoke the insert hook

            insertedVnodeQueue.push(vnode);
          }
        }

        function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
          var i; // hack for #4339: a reactivated component with inner transition
          // does not trigger because the inner node's created hooks are not called
          // again. It's not ideal to involve module-specific logic in here but
          // there doesn't seem to be a better way to do it.

          var innerNode = vnode;

          while (innerNode.componentInstance) {
            innerNode = innerNode.componentInstance._vnode;

            if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
              for (i = 0; i < cbs.activate.length; ++i) {
                cbs.activate[i](emptyNode, innerNode);
              }

              insertedVnodeQueue.push(innerNode);
              break;
            }
          } // unlike a newly created component,
          // a reactivated keep-alive component doesn't insert itself


          insert(parentElm, vnode.elm, refElm);
        }

        function insert(parent, elm, ref$$1) {
          if (isDef(parent)) {
            if (isDef(ref$$1)) {
              if (nodeOps.parentNode(ref$$1) === parent) {
                nodeOps.insertBefore(parent, elm, ref$$1);
              }
            } else {
              nodeOps.appendChild(parent, elm);
            }
          }
        }

        function createChildren(vnode, children, insertedVnodeQueue) {
          if (Array.isArray(children)) {
            {
              checkDuplicateKeys(children);
            }

            for (var i = 0; i < children.length; ++i) {
              createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
            }
          } else if (isPrimitive(vnode.text)) {
            nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
          }
        }

        function isPatchable(vnode) {
          while (vnode.componentInstance) {
            vnode = vnode.componentInstance._vnode;
          }

          return isDef(vnode.tag);
        }

        function invokeCreateHooks(vnode, insertedVnodeQueue) {
          for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
            cbs.create[i$1](emptyNode, vnode);
          }

          i = vnode.data.hook; // Reuse variable

          if (isDef(i)) {
            if (isDef(i.create)) {
              i.create(emptyNode, vnode);
            }

            if (isDef(i.insert)) {
              insertedVnodeQueue.push(vnode);
            }
          }
        } // set scope id attribute for scoped CSS.
        // this is implemented as a special case to avoid the overhead
        // of going through the normal attribute patching process.


        function setScope(vnode) {
          var i;

          if (isDef(i = vnode.fnScopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          } else {
            var ancestor = vnode;

            while (ancestor) {
              if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
                nodeOps.setStyleScope(vnode.elm, i);
              }

              ancestor = ancestor.parent;
            }
          } // for slot content they should also get the scopeId from the host instance.


          if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }
        }

        function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
          for (; startIdx <= endIdx; ++startIdx) {
            createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
          }
        }

        function invokeDestroyHook(vnode) {
          var i, j;
          var data = vnode.data;

          if (isDef(data)) {
            if (isDef(i = data.hook) && isDef(i = i.destroy)) {
              i(vnode);
            }

            for (i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](vnode);
            }
          }

          if (isDef(i = vnode.children)) {
            for (j = 0; j < vnode.children.length; ++j) {
              invokeDestroyHook(vnode.children[j]);
            }
          }
        }

        function removeVnodes(vnodes, startIdx, endIdx) {
          for (; startIdx <= endIdx; ++startIdx) {
            var ch = vnodes[startIdx];

            if (isDef(ch)) {
              if (isDef(ch.tag)) {
                removeAndInvokeRemoveHook(ch);
                invokeDestroyHook(ch);
              } else {
                // Text node
                removeNode(ch.elm);
              }
            }
          }
        }

        function removeAndInvokeRemoveHook(vnode, rm) {
          if (isDef(rm) || isDef(vnode.data)) {
            var i;
            var listeners = cbs.remove.length + 1;

            if (isDef(rm)) {
              // we have a recursively passed down rm callback
              // increase the listeners count
              rm.listeners += listeners;
            } else {
              // directly removing
              rm = createRmCb(vnode.elm, listeners);
            } // recursively invoke hooks on child component root node


            if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
              removeAndInvokeRemoveHook(i, rm);
            }

            for (i = 0; i < cbs.remove.length; ++i) {
              cbs.remove[i](vnode, rm);
            }

            if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
              i(vnode, rm);
            } else {
              rm();
            }
          } else {
            removeNode(vnode.elm);
          }
        }

        function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
          var oldStartIdx = 0;
          var newStartIdx = 0;
          var oldEndIdx = oldCh.length - 1;
          var oldStartVnode = oldCh[0];
          var oldEndVnode = oldCh[oldEndIdx];
          var newEndIdx = newCh.length - 1;
          var newStartVnode = newCh[0];
          var newEndVnode = newCh[newEndIdx];
          var oldKeyToIdx, idxInOld, vnodeToMove, refElm; // removeOnly is a special flag used only by <transition-group>
          // to ensure removed elements stay in correct relative positions
          // during leaving transitions

          var canMove = !removeOnly;
          {
            checkDuplicateKeys(newCh);
          }

          while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (isUndef(oldStartVnode)) {
              oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
            } else if (isUndef(oldEndVnode)) {
              oldEndVnode = oldCh[--oldEndIdx];
            } else if (sameVnode(oldStartVnode, newStartVnode)) {
              patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldStartVnode = oldCh[++oldStartIdx];
              newStartVnode = newCh[++newStartIdx];
            } else if (sameVnode(oldEndVnode, newEndVnode)) {
              patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
              oldEndVnode = oldCh[--oldEndIdx];
              newEndVnode = newCh[--newEndIdx];
            } else if (sameVnode(oldStartVnode, newEndVnode)) {
              // Vnode moved right
              patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
              canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
              oldStartVnode = oldCh[++oldStartIdx];
              newEndVnode = newCh[--newEndIdx];
            } else if (sameVnode(oldEndVnode, newStartVnode)) {
              // Vnode moved left
              patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
              oldEndVnode = oldCh[--oldEndIdx];
              newStartVnode = newCh[++newStartIdx];
            } else {
              if (isUndef(oldKeyToIdx)) {
                oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
              }

              idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);

              if (isUndef(idxInOld)) {
                // New element
                createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
              } else {
                vnodeToMove = oldCh[idxInOld];

                if (sameVnode(vnodeToMove, newStartVnode)) {
                  patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                  oldCh[idxInOld] = undefined;
                  canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
                } else {
                  // same key but different element. treat as new element
                  createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                }
              }

              newStartVnode = newCh[++newStartIdx];
            }
          }

          if (oldStartIdx > oldEndIdx) {
            refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
            addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
          } else if (newStartIdx > newEndIdx) {
            removeVnodes(oldCh, oldStartIdx, oldEndIdx);
          }
        }

        function checkDuplicateKeys(children) {
          var seenKeys = {};

          for (var i = 0; i < children.length; i++) {
            var vnode = children[i];
            var key = vnode.key;

            if (isDef(key)) {
              if (seenKeys[key]) {
                warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
              } else {
                seenKeys[key] = true;
              }
            }
          }
        }

        function findIdxInOld(node, oldCh, start, end) {
          for (var i = start; i < end; i++) {
            var c = oldCh[i];

            if (isDef(c) && sameVnode(node, c)) {
              return i;
            }
          }
        }

        function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
          if (oldVnode === vnode) {
            return;
          }

          if (isDef(vnode.elm) && isDef(ownerArray)) {
            // clone reused vnode
            vnode = ownerArray[index] = cloneVNode(vnode);
          }

          var elm = vnode.elm = oldVnode.elm;

          if (isTrue(oldVnode.isAsyncPlaceholder)) {
            if (isDef(vnode.asyncFactory.resolved)) {
              hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
            } else {
              vnode.isAsyncPlaceholder = true;
            }

            return;
          } // reuse element for static trees.
          // note we only do this if the vnode is cloned -
          // if the new node is not cloned it means the render functions have been
          // reset by the hot-reload-api and we need to do a proper re-render.


          if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
            vnode.componentInstance = oldVnode.componentInstance;
            return;
          }

          var i;
          var data = vnode.data;

          if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
            i(oldVnode, vnode);
          }

          var oldCh = oldVnode.children;
          var ch = vnode.children;

          if (isDef(data) && isPatchable(vnode)) {
            for (i = 0; i < cbs.update.length; ++i) {
              cbs.update[i](oldVnode, vnode);
            }

            if (isDef(i = data.hook) && isDef(i = i.update)) {
              i(oldVnode, vnode);
            }
          }

          if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
              if (oldCh !== ch) {
                updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
              }
            } else if (isDef(ch)) {
              {
                checkDuplicateKeys(ch);
              }

              if (isDef(oldVnode.text)) {
                nodeOps.setTextContent(elm, '');
              }

              addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
            } else if (isDef(oldCh)) {
              removeVnodes(oldCh, 0, oldCh.length - 1);
            } else if (isDef(oldVnode.text)) {
              nodeOps.setTextContent(elm, '');
            }
          } else if (oldVnode.text !== vnode.text) {
            nodeOps.setTextContent(elm, vnode.text);
          }

          if (isDef(data)) {
            if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
              i(oldVnode, vnode);
            }
          }
        }

        function invokeInsertHook(vnode, queue, initial) {
          // delay insert hooks for component root nodes, invoke them after the
          // element is really inserted
          if (isTrue(initial) && isDef(vnode.parent)) {
            vnode.parent.data.pendingInsert = queue;
          } else {
            for (var i = 0; i < queue.length; ++i) {
              queue[i].data.hook.insert(queue[i]);
            }
          }
        }

        var hydrationBailed = false; // list of modules that can skip create hook during hydration because they
        // are already rendered on the client or has no need for initialization
        // Note: style is excluded because it relies on initial clone for future
        // deep updates (#7063).

        var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key'); // Note: this is a browser-only function so we can assume elms are DOM nodes.

        function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
          var i;
          var tag = vnode.tag;
          var data = vnode.data;
          var children = vnode.children;
          inVPre = inVPre || data && data.pre;
          vnode.elm = elm;

          if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
            vnode.isAsyncPlaceholder = true;
            return true;
          } // assert node match


          {
            if (!assertNodeMatch(elm, vnode, inVPre)) {
              return false;
            }
          }

          if (isDef(data)) {
            if (isDef(i = data.hook) && isDef(i = i.init)) {
              i(vnode, true
              /* hydrating */
              );
            }

            if (isDef(i = vnode.componentInstance)) {
              // child component. it should have hydrated its own tree.
              initComponent(vnode, insertedVnodeQueue);
              return true;
            }
          }

          if (isDef(tag)) {
            if (isDef(children)) {
              // empty element, allow client to pick up and populate children
              if (!elm.hasChildNodes()) {
                createChildren(vnode, children, insertedVnodeQueue);
              } else {
                // v-html and domProps: innerHTML
                if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
                  if (i !== elm.innerHTML) {
                    /* istanbul ignore if */
                    if (typeof console !== 'undefined' && !hydrationBailed) {
                      hydrationBailed = true;
                      console.warn('Parent: ', elm);
                      console.warn('server innerHTML: ', i);
                      console.warn('client innerHTML: ', elm.innerHTML);
                    }

                    return false;
                  }
                } else {
                  // iterate and compare children lists
                  var childrenMatch = true;
                  var childNode = elm.firstChild;

                  for (var i$1 = 0; i$1 < children.length; i$1++) {
                    if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                      childrenMatch = false;
                      break;
                    }

                    childNode = childNode.nextSibling;
                  } // if childNode is not null, it means the actual childNodes list is
                  // longer than the virtual children list.


                  if (!childrenMatch || childNode) {
                    /* istanbul ignore if */
                    if (typeof console !== 'undefined' && !hydrationBailed) {
                      hydrationBailed = true;
                      console.warn('Parent: ', elm);
                      console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                    }

                    return false;
                  }
                }
              }
            }

            if (isDef(data)) {
              var fullInvoke = false;

              for (var key in data) {
                if (!isRenderedModule(key)) {
                  fullInvoke = true;
                  invokeCreateHooks(vnode, insertedVnodeQueue);
                  break;
                }
              }

              if (!fullInvoke && data['class']) {
                // ensure collecting deps for deep class bindings for future updates
                traverse(data['class']);
              }
            }
          } else if (elm.data !== vnode.text) {
            elm.data = vnode.text;
          }

          return true;
        }

        function assertNodeMatch(node, vnode, inVPre) {
          if (isDef(vnode.tag)) {
            return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
          } else {
            return node.nodeType === (vnode.isComment ? 8 : 3);
          }
        }

        return function patch(oldVnode, vnode, hydrating, removeOnly) {
          if (isUndef(vnode)) {
            if (isDef(oldVnode)) {
              invokeDestroyHook(oldVnode);
            }

            return;
          }

          var isInitialPatch = false;
          var insertedVnodeQueue = [];

          if (isUndef(oldVnode)) {
            // empty mount (likely as component), create new root element
            isInitialPatch = true;
            createElm(vnode, insertedVnodeQueue);
          } else {
            var isRealElement = isDef(oldVnode.nodeType);

            if (!isRealElement && sameVnode(oldVnode, vnode)) {
              // patch existing root node
              patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
            } else {
              if (isRealElement) {
                // mounting to a real element
                // check if this is server-rendered content and if we can perform
                // a successful hydration.
                if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                  oldVnode.removeAttribute(SSR_ATTR);
                  hydrating = true;
                }

                if (isTrue(hydrating)) {
                  if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                    invokeInsertHook(vnode, insertedVnodeQueue, true);
                    return oldVnode;
                  } else {
                    warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
                  }
                } // either not server-rendered, or hydration failed.
                // create an empty node and replace it


                oldVnode = emptyNodeAt(oldVnode);
              } // replacing existing element


              var oldElm = oldVnode.elm;
              var parentElm = nodeOps.parentNode(oldElm); // create new node

              createElm(vnode, insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
              // leaving transition. Only happens when combining transition +
              // keep-alive + HOCs. (#4590)
              oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)); // update parent placeholder node element, recursively

              if (isDef(vnode.parent)) {
                var ancestor = vnode.parent;
                var patchable = isPatchable(vnode);

                while (ancestor) {
                  for (var i = 0; i < cbs.destroy.length; ++i) {
                    cbs.destroy[i](ancestor);
                  }

                  ancestor.elm = vnode.elm;

                  if (patchable) {
                    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                      cbs.create[i$1](emptyNode, ancestor);
                    } // #6513
                    // invoke insert hooks that may have been merged by create hooks.
                    // e.g. for directives that uses the "inserted" hook.


                    var insert = ancestor.data.hook.insert;

                    if (insert.merged) {
                      // start at index 1 to avoid re-invoking component mounted hook
                      for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                        insert.fns[i$2]();
                      }
                    }
                  } else {
                    registerRef(ancestor);
                  }

                  ancestor = ancestor.parent;
                }
              } // destroy old node


              if (isDef(parentElm)) {
                removeVnodes([oldVnode], 0, 0);
              } else if (isDef(oldVnode.tag)) {
                invokeDestroyHook(oldVnode);
              }
            }
          }

          invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
          return vnode.elm;
        };
      }
      /*  */


      var directives = {
        create: updateDirectives,
        update: updateDirectives,
        destroy: function unbindDirectives(vnode) {
          updateDirectives(vnode, emptyNode);
        }
      };

      function updateDirectives(oldVnode, vnode) {
        if (oldVnode.data.directives || vnode.data.directives) {
          _update(oldVnode, vnode);
        }
      }

      function _update(oldVnode, vnode) {
        var isCreate = oldVnode === emptyNode;
        var isDestroy = vnode === emptyNode;
        var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
        var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
        var dirsWithInsert = [];
        var dirsWithPostpatch = [];
        var key, oldDir, dir;

        for (key in newDirs) {
          oldDir = oldDirs[key];
          dir = newDirs[key];

          if (!oldDir) {
            // new directive, bind
            callHook$1(dir, 'bind', vnode, oldVnode);

            if (dir.def && dir.def.inserted) {
              dirsWithInsert.push(dir);
            }
          } else {
            // existing directive, update
            dir.oldValue = oldDir.value;
            dir.oldArg = oldDir.arg;
            callHook$1(dir, 'update', vnode, oldVnode);

            if (dir.def && dir.def.componentUpdated) {
              dirsWithPostpatch.push(dir);
            }
          }
        }

        if (dirsWithInsert.length) {
          var callInsert = function callInsert() {
            for (var i = 0; i < dirsWithInsert.length; i++) {
              callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
            }
          };

          if (isCreate) {
            mergeVNodeHook(vnode, 'insert', callInsert);
          } else {
            callInsert();
          }
        }

        if (dirsWithPostpatch.length) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            for (var i = 0; i < dirsWithPostpatch.length; i++) {
              callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
            }
          });
        }

        if (!isCreate) {
          for (key in oldDirs) {
            if (!newDirs[key]) {
              // no longer present, unbind
              callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
            }
          }
        }
      }

      var emptyModifiers = Object.create(null);

      function normalizeDirectives$1(dirs, vm) {
        var res = Object.create(null);

        if (!dirs) {
          // $flow-disable-line
          return res;
        }

        var i, dir;

        for (i = 0; i < dirs.length; i++) {
          dir = dirs[i];

          if (!dir.modifiers) {
            // $flow-disable-line
            dir.modifiers = emptyModifiers;
          }

          res[getRawDirName(dir)] = dir;
          dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
        } // $flow-disable-line


        return res;
      }

      function getRawDirName(dir) {
        return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
      }

      function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
        var fn = dir.def && dir.def[hook];

        if (fn) {
          try {
            fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
          } catch (e) {
            handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
          }
        }
      }

      var baseModules = [ref, directives];
      /*  */

      function updateAttrs(oldVnode, vnode) {
        var opts = vnode.componentOptions;

        if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
          return;
        }

        if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
          return;
        }

        var key, cur, old;
        var elm = vnode.elm;
        var oldAttrs = oldVnode.data.attrs || {};
        var attrs = vnode.data.attrs || {}; // clone observed objects, as the user probably wants to mutate it

        if (isDef(attrs.__ob__)) {
          attrs = vnode.data.attrs = extend({}, attrs);
        }

        for (key in attrs) {
          cur = attrs[key];
          old = oldAttrs[key];

          if (old !== cur) {
            setAttr(elm, key, cur);
          }
        } // #4391: in IE9, setting type can reset value for input[type=radio]
        // #6666: IE/Edge forces progress value down to 1 before setting a max

        /* istanbul ignore if */


        if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
          setAttr(elm, 'value', attrs.value);
        }

        for (key in oldAttrs) {
          if (isUndef(attrs[key])) {
            if (isXlink(key)) {
              elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
            } else if (!isEnumeratedAttr(key)) {
              elm.removeAttribute(key);
            }
          }
        }
      }

      function setAttr(el, key, value) {
        if (el.tagName.indexOf('-') > -1) {
          baseSetAttr(el, key, value);
        } else if (isBooleanAttr(key)) {
          // set attribute for blank value
          // e.g. <option disabled>Select one</option>
          if (isFalsyAttrValue(value)) {
            el.removeAttribute(key);
          } else {
            // technically allowfullscreen is a boolean attribute for <iframe>,
            // but Flash expects a value of "true" when used on <embed> tag
            value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
            el.setAttribute(key, value);
          }
        } else if (isEnumeratedAttr(key)) {
          el.setAttribute(key, convertEnumeratedValue(key, value));
        } else if (isXlink(key)) {
          if (isFalsyAttrValue(value)) {
            el.removeAttributeNS(xlinkNS, getXlinkProp(key));
          } else {
            el.setAttributeNS(xlinkNS, key, value);
          }
        } else {
          baseSetAttr(el, key, value);
        }
      }

      function baseSetAttr(el, key, value) {
        if (isFalsyAttrValue(value)) {
          el.removeAttribute(key);
        } else {
          // #7138: IE10 & 11 fires input event when setting placeholder on
          // <textarea>... block the first input event and remove the blocker
          // immediately.

          /* istanbul ignore if */
          if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && value !== '' && !el.__ieph) {
            var blocker = function blocker(e) {
              e.stopImmediatePropagation();
              el.removeEventListener('input', blocker);
            };

            el.addEventListener('input', blocker); // $flow-disable-line

            el.__ieph = true;
            /* IE placeholder patched */
          }

          el.setAttribute(key, value);
        }
      }

      var attrs = {
        create: updateAttrs,
        update: updateAttrs
      };
      /*  */

      function updateClass(oldVnode, vnode) {
        var el = vnode.elm;
        var data = vnode.data;
        var oldData = oldVnode.data;

        if (isUndef(data.staticClass) && isUndef(data["class"]) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData["class"]))) {
          return;
        }

        var cls = genClassForVnode(vnode); // handle transition classes

        var transitionClass = el._transitionClasses;

        if (isDef(transitionClass)) {
          cls = concat(cls, stringifyClass(transitionClass));
        } // set the class


        if (cls !== el._prevClass) {
          el.setAttribute('class', cls);
          el._prevClass = cls;
        }
      }

      var klass = {
        create: updateClass,
        update: updateClass
      };
      /*  */

      var validDivisionCharRE = /[\w).+\-_$\]]/;

      function parseFilters(exp) {
        var inSingle = false;
        var inDouble = false;
        var inTemplateString = false;
        var inRegex = false;
        var curly = 0;
        var square = 0;
        var paren = 0;
        var lastFilterIndex = 0;
        var c, prev, i, expression, filters;

        for (i = 0; i < exp.length; i++) {
          prev = c;
          c = exp.charCodeAt(i);

          if (inSingle) {
            if (c === 0x27 && prev !== 0x5C) {
              inSingle = false;
            }
          } else if (inDouble) {
            if (c === 0x22 && prev !== 0x5C) {
              inDouble = false;
            }
          } else if (inTemplateString) {
            if (c === 0x60 && prev !== 0x5C) {
              inTemplateString = false;
            }
          } else if (inRegex) {
            if (c === 0x2f && prev !== 0x5C) {
              inRegex = false;
            }
          } else if (c === 0x7C && // pipe
          exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
            if (expression === undefined) {
              // first filter, end of expression
              lastFilterIndex = i + 1;
              expression = exp.slice(0, i).trim();
            } else {
              pushFilter();
            }
          } else {
            switch (c) {
              case 0x22:
                inDouble = true;
                break;
              // "

              case 0x27:
                inSingle = true;
                break;
              // '

              case 0x60:
                inTemplateString = true;
                break;
              // `

              case 0x28:
                paren++;
                break;
              // (

              case 0x29:
                paren--;
                break;
              // )

              case 0x5B:
                square++;
                break;
              // [

              case 0x5D:
                square--;
                break;
              // ]

              case 0x7B:
                curly++;
                break;
              // {

              case 0x7D:
                curly--;
                break;
              // }
            }

            if (c === 0x2f) {
              // /
              var j = i - 1;
              var p = void 0; // find first non-whitespace prev char

              for (; j >= 0; j--) {
                p = exp.charAt(j);

                if (p !== ' ') {
                  break;
                }
              }

              if (!p || !validDivisionCharRE.test(p)) {
                inRegex = true;
              }
            }
          }
        }

        if (expression === undefined) {
          expression = exp.slice(0, i).trim();
        } else if (lastFilterIndex !== 0) {
          pushFilter();
        }

        function pushFilter() {
          (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
          lastFilterIndex = i + 1;
        }

        if (filters) {
          for (i = 0; i < filters.length; i++) {
            expression = wrapFilter(expression, filters[i]);
          }
        }

        return expression;
      }

      function wrapFilter(exp, filter) {
        var i = filter.indexOf('(');

        if (i < 0) {
          // _f: resolveFilter
          return "_f(\"" + filter + "\")(" + exp + ")";
        } else {
          var name = filter.slice(0, i);
          var args = filter.slice(i + 1);
          return "_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args);
        }
      }
      /*  */

      /* eslint-disable no-unused-vars */


      function baseWarn(msg, range) {
        console.error("[Vue compiler]: " + msg);
      }
      /* eslint-enable no-unused-vars */


      function pluckModuleFunction(modules, key) {
        return modules ? modules.map(function (m) {
          return m[key];
        }).filter(function (_) {
          return _;
        }) : [];
      }

      function addProp(el, name, value, range, dynamic) {
        (el.props || (el.props = [])).push(rangeSetItem({
          name: name,
          value: value,
          dynamic: dynamic
        }, range));
        el.plain = false;
      }

      function addAttr(el, name, value, range, dynamic) {
        var attrs = dynamic ? el.dynamicAttrs || (el.dynamicAttrs = []) : el.attrs || (el.attrs = []);
        attrs.push(rangeSetItem({
          name: name,
          value: value,
          dynamic: dynamic
        }, range));
        el.plain = false;
      } // add a raw attr (use this in preTransforms)


      function addRawAttr(el, name, value, range) {
        el.attrsMap[name] = value;
        el.attrsList.push(rangeSetItem({
          name: name,
          value: value
        }, range));
      }

      function addDirective(el, name, rawName, value, arg, isDynamicArg, modifiers, range) {
        (el.directives || (el.directives = [])).push(rangeSetItem({
          name: name,
          rawName: rawName,
          value: value,
          arg: arg,
          isDynamicArg: isDynamicArg,
          modifiers: modifiers
        }, range));
        el.plain = false;
      }

      function prependModifierMarker(symbol, name, dynamic) {
        return dynamic ? "_p(" + name + ",\"" + symbol + "\")" : symbol + name; // mark the event as captured
      }

      function addHandler(el, name, value, modifiers, important, warn, range, dynamic) {
        modifiers = modifiers || emptyObject; // warn prevent and passive modifier

        /* istanbul ignore if */

        if (warn && modifiers.prevent && modifiers.passive) {
          warn('passive and prevent can\'t be used together. ' + 'Passive handler can\'t prevent default event.', range);
        } // normalize click.right and click.middle since they don't actually fire
        // this is technically browser-specific, but at least for now browsers are
        // the only target envs that have right/middle clicks.


        if (modifiers.right) {
          if (dynamic) {
            name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
          } else if (name === 'click') {
            name = 'contextmenu';
            delete modifiers.right;
          }
        } else if (modifiers.middle) {
          if (dynamic) {
            name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
          } else if (name === 'click') {
            name = 'mouseup';
          }
        } // check capture modifier


        if (modifiers.capture) {
          delete modifiers.capture;
          name = prependModifierMarker('!', name, dynamic);
        }

        if (modifiers.once) {
          delete modifiers.once;
          name = prependModifierMarker('~', name, dynamic);
        }
        /* istanbul ignore if */


        if (modifiers.passive) {
          delete modifiers.passive;
          name = prependModifierMarker('&', name, dynamic);
        }

        var events;

        if (modifiers["native"]) {
          delete modifiers["native"];
          events = el.nativeEvents || (el.nativeEvents = {});
        } else {
          events = el.events || (el.events = {});
        }

        var newHandler = rangeSetItem({
          value: value.trim(),
          dynamic: dynamic
        }, range);

        if (modifiers !== emptyObject) {
          newHandler.modifiers = modifiers;
        }

        var handlers = events[name];
        /* istanbul ignore if */

        if (Array.isArray(handlers)) {
          important ? handlers.unshift(newHandler) : handlers.push(newHandler);
        } else if (handlers) {
          events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
        } else {
          events[name] = newHandler;
        }

        el.plain = false;
      }

      function getRawBindingAttr(el, name) {
        return el.rawAttrsMap[':' + name] || el.rawAttrsMap['v-bind:' + name] || el.rawAttrsMap[name];
      }

      function getBindingAttr(el, name, getStatic) {
        var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);

        if (dynamicValue != null) {
          return parseFilters(dynamicValue);
        } else if (getStatic !== false) {
          var staticValue = getAndRemoveAttr(el, name);

          if (staticValue != null) {
            return JSON.stringify(staticValue);
          }
        }
      } // note: this only removes the attr from the Array (attrsList) so that it
      // doesn't get processed by processAttrs.
      // By default it does NOT remove it from the map (attrsMap) because the map is
      // needed during codegen.


      function getAndRemoveAttr(el, name, removeFromMap) {
        var val;

        if ((val = el.attrsMap[name]) != null) {
          var list = el.attrsList;

          for (var i = 0, l = list.length; i < l; i++) {
            if (list[i].name === name) {
              list.splice(i, 1);
              break;
            }
          }
        }

        if (removeFromMap) {
          delete el.attrsMap[name];
        }

        return val;
      }

      function getAndRemoveAttrByRegex(el, name) {
        var list = el.attrsList;

        for (var i = 0, l = list.length; i < l; i++) {
          var attr = list[i];

          if (name.test(attr.name)) {
            list.splice(i, 1);
            return attr;
          }
        }
      }

      function rangeSetItem(item, range) {
        if (range) {
          if (range.start != null) {
            item.start = range.start;
          }

          if (range.end != null) {
            item.end = range.end;
          }
        }

        return item;
      }
      /*  */

      /**
       * Cross-platform code generation for component v-model
       */


      function genComponentModel(el, value, modifiers) {
        var ref = modifiers || {};
        var number = ref.number;
        var trim = ref.trim;
        var baseValueExpression = '$$v';
        var valueExpression = baseValueExpression;

        if (trim) {
          valueExpression = "(typeof " + baseValueExpression + " === 'string'" + "? " + baseValueExpression + ".trim()" + ": " + baseValueExpression + ")";
        }

        if (number) {
          valueExpression = "_n(" + valueExpression + ")";
        }

        var assignment = genAssignmentCode(value, valueExpression);
        el.model = {
          value: "(" + value + ")",
          expression: JSON.stringify(value),
          callback: "function (" + baseValueExpression + ") {" + assignment + "}"
        };
      }
      /**
       * Cross-platform codegen helper for generating v-model value assignment code.
       */


      function genAssignmentCode(value, assignment) {
        var res = parseModel(value);

        if (res.key === null) {
          return value + "=" + assignment;
        } else {
          return "$set(" + res.exp + ", " + res.key + ", " + assignment + ")";
        }
      }
      /**
       * Parse a v-model expression into a base path and a final key segment.
       * Handles both dot-path and possible square brackets.
       *
       * Possible cases:
       *
       * - test
       * - test[key]
       * - test[test1[key]]
       * - test["a"][key]
       * - xxx.test[a[a].test1[key]]
       * - test.xxx.a["asa"][test1[key]]
       *
       */


      var len, str, chr, index$1, expressionPos, expressionEndPos;

      function parseModel(val) {
        // Fix https://github.com/vuejs/vue/pull/7730
        // allow v-model="obj.val " (trailing whitespace)
        val = val.trim();
        len = val.length;

        if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
          index$1 = val.lastIndexOf('.');

          if (index$1 > -1) {
            return {
              exp: val.slice(0, index$1),
              key: '"' + val.slice(index$1 + 1) + '"'
            };
          } else {
            return {
              exp: val,
              key: null
            };
          }
        }

        str = val;
        index$1 = expressionPos = expressionEndPos = 0;

        while (!eof()) {
          chr = next();
          /* istanbul ignore if */

          if (isStringStart(chr)) {
            parseString(chr);
          } else if (chr === 0x5B) {
            parseBracket(chr);
          }
        }

        return {
          exp: val.slice(0, expressionPos),
          key: val.slice(expressionPos + 1, expressionEndPos)
        };
      }

      function next() {
        return str.charCodeAt(++index$1);
      }

      function eof() {
        return index$1 >= len;
      }

      function isStringStart(chr) {
        return chr === 0x22 || chr === 0x27;
      }

      function parseBracket(chr) {
        var inBracket = 1;
        expressionPos = index$1;

        while (!eof()) {
          chr = next();

          if (isStringStart(chr)) {
            parseString(chr);
            continue;
          }

          if (chr === 0x5B) {
            inBracket++;
          }

          if (chr === 0x5D) {
            inBracket--;
          }

          if (inBracket === 0) {
            expressionEndPos = index$1;
            break;
          }
        }
      }

      function parseString(chr) {
        var stringQuote = chr;

        while (!eof()) {
          chr = next();

          if (chr === stringQuote) {
            break;
          }
        }
      }
      /*  */


      var warn$1; // in some cases, the event used has to be determined at runtime
      // so we used some reserved tokens during compile.

      var RANGE_TOKEN = '__r';
      var CHECKBOX_RADIO_TOKEN = '__c';

      function model(el, dir, _warn) {
        warn$1 = _warn;
        var value = dir.value;
        var modifiers = dir.modifiers;
        var tag = el.tag;
        var type = el.attrsMap.type;
        {
          // inputs with type="file" are read only and setting the input's
          // value will throw an error.
          if (tag === 'input' && type === 'file') {
            warn$1("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.", el.rawAttrsMap['v-model']);
          }
        }

        if (el.component) {
          genComponentModel(el, value, modifiers); // component v-model doesn't need extra runtime

          return false;
        } else if (tag === 'select') {
          genSelect(el, value, modifiers);
        } else if (tag === 'input' && type === 'checkbox') {
          genCheckboxModel(el, value, modifiers);
        } else if (tag === 'input' && type === 'radio') {
          genRadioModel(el, value, modifiers);
        } else if (tag === 'input' || tag === 'textarea') {
          genDefaultModel(el, value, modifiers);
        } else if (!config.isReservedTag(tag)) {
          genComponentModel(el, value, modifiers); // component v-model doesn't need extra runtime

          return false;
        } else {
          warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "v-model is not supported on this element type. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.', el.rawAttrsMap['v-model']);
        } // ensure runtime directive metadata


        return true;
      }

      function genCheckboxModel(el, value, modifiers) {
        var number = modifiers && modifiers.number;
        var valueBinding = getBindingAttr(el, 'value') || 'null';
        var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
        var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
        addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true' ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
        addHandler(el, 'change', "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$el.checked){$$i<0&&(" + genAssignmentCode(value, '$$a.concat([$$v])') + ")}" + "else{$$i>-1&&(" + genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))') + ")}" + "}else{" + genAssignmentCode(value, '$$c') + "}", null, true);
      }

      function genRadioModel(el, value, modifiers) {
        var number = modifiers && modifiers.number;
        var valueBinding = getBindingAttr(el, 'value') || 'null';
        valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
        addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
        addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
      }

      function genSelect(el, value, modifiers) {
        var number = modifiers && modifiers.number;
        var selectedVal = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})";
        var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
        var code = "var $$selectedVal = " + selectedVal + ";";
        code = code + " " + genAssignmentCode(value, assignment);
        addHandler(el, 'change', code, null, true);
      }

      function genDefaultModel(el, value, modifiers) {
        var type = el.attrsMap.type; // warn if v-bind:value conflicts with v-model
        // except for inputs with v-bind:type

        {
          var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
          var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];

          if (value$1 && !typeBinding) {
            var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
            warn$1(binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " + 'because the latter already expands to a value binding internally', el.rawAttrsMap[binding]);
          }
        }
        var ref = modifiers || {};
        var lazy = ref.lazy;
        var number = ref.number;
        var trim = ref.trim;
        var needCompositionGuard = !lazy && type !== 'range';
        var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';
        var valueExpression = '$event.target.value';

        if (trim) {
          valueExpression = "$event.target.value.trim()";
        }

        if (number) {
          valueExpression = "_n(" + valueExpression + ")";
        }

        var code = genAssignmentCode(value, valueExpression);

        if (needCompositionGuard) {
          code = "if($event.target.composing)return;" + code;
        }

        addProp(el, 'value', "(" + value + ")");
        addHandler(el, event, code, null, true);

        if (trim || number) {
          addHandler(el, 'blur', '$forceUpdate()');
        }
      }
      /*  */
      // normalize v-model event tokens that can only be determined at runtime.
      // it's important to place the event as the first in the array because
      // the whole point is ensuring the v-model callback gets called before
      // user-attached handlers.


      function normalizeEvents(on) {
        /* istanbul ignore if */
        if (isDef(on[RANGE_TOKEN])) {
          // IE input[type=range] only supports `change` event
          var event = isIE ? 'change' : 'input';
          on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
          delete on[RANGE_TOKEN];
        } // This was originally intended to fix #4521 but no longer necessary
        // after 2.5. Keeping it for backwards compat with generated code from < 2.4

        /* istanbul ignore if */


        if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
          on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
          delete on[CHECKBOX_RADIO_TOKEN];
        }
      }

      var target$1;

      function createOnceHandler$1(event, handler, capture) {
        var _target = target$1; // save current target element in closure

        return function onceHandler() {
          var res = handler.apply(null, arguments);

          if (res !== null) {
            remove$2(event, onceHandler, capture, _target);
          }
        };
      } // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
      // implementation and does not fire microtasks in between event propagation, so
      // safe to exclude.


      var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

      function add$1(name, handler, capture, passive) {
        // async edge case #6566: inner click event triggers patch, event handler
        // attached to outer element during patch, and triggered again. This
        // happens because browsers fire microtask ticks between event propagation.
        // the solution is simple: we save the timestamp when a handler is attached,
        // and the handler would only fire if the event passed to it was fired
        // AFTER it was attached.
        if (useMicrotaskFix) {
          var attachedTimestamp = currentFlushTimestamp;
          var original = handler;

          handler = original._wrapper = function (e) {
            if ( // no bubbling, should always fire.
            // this is just a safety net in case event.timeStamp is unreliable in
            // certain weird environments...
            e.target === e.currentTarget || // event is fired after handler attachment
            e.timeStamp >= attachedTimestamp || // bail for environments that have buggy event.timeStamp implementations
            // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
            // #9681 QtWebEngine event.timeStamp is negative value
            e.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
            // electron/nw.js app, since event.timeStamp will be using a different
            // starting reference
            e.target.ownerDocument !== document) {
              return original.apply(this, arguments);
            }
          };
        }

        target$1.addEventListener(name, handler, supportsPassive ? {
          capture: capture,
          passive: passive
        } : capture);
      }

      function remove$2(name, handler, capture, _target) {
        (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
      }

      function updateDOMListeners(oldVnode, vnode) {
        if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
          return;
        }

        var on = vnode.data.on || {};
        var oldOn = oldVnode.data.on || {};
        target$1 = vnode.elm;
        normalizeEvents(on);
        updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
        target$1 = undefined;
      }

      var events = {
        create: updateDOMListeners,
        update: updateDOMListeners
      };
      /*  */

      var svgContainer;

      function updateDOMProps(oldVnode, vnode) {
        if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
          return;
        }

        var key, cur;
        var elm = vnode.elm;
        var oldProps = oldVnode.data.domProps || {};
        var props = vnode.data.domProps || {}; // clone observed objects, as the user probably wants to mutate it

        if (isDef(props.__ob__)) {
          props = vnode.data.domProps = extend({}, props);
        }

        for (key in oldProps) {
          if (!(key in props)) {
            elm[key] = '';
          }
        }

        for (key in props) {
          cur = props[key]; // ignore children if the node has textContent or innerHTML,
          // as these will throw away existing DOM nodes and cause removal errors
          // on subsequent patches (#3360)

          if (key === 'textContent' || key === 'innerHTML') {
            if (vnode.children) {
              vnode.children.length = 0;
            }

            if (cur === oldProps[key]) {
              continue;
            } // #6601 work around Chrome version <= 55 bug where single textNode
            // replaced by innerHTML/textContent retains its parentNode property


            if (elm.childNodes.length === 1) {
              elm.removeChild(elm.childNodes[0]);
            }
          }

          if (key === 'value' && elm.tagName !== 'PROGRESS') {
            // store value as _value as well since
            // non-string values will be stringified
            elm._value = cur; // avoid resetting cursor position when value is the same

            var strCur = isUndef(cur) ? '' : String(cur);

            if (shouldUpdateValue(elm, strCur)) {
              elm.value = strCur;
            }
          } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
            // IE doesn't support innerHTML for SVG elements
            svgContainer = svgContainer || document.createElement('div');
            svgContainer.innerHTML = "<svg>" + cur + "</svg>";
            var svg = svgContainer.firstChild;

            while (elm.firstChild) {
              elm.removeChild(elm.firstChild);
            }

            while (svg.firstChild) {
              elm.appendChild(svg.firstChild);
            }
          } else if ( // skip the update if old and new VDOM state is the same.
          // `value` is handled separately because the DOM value may be temporarily
          // out of sync with VDOM state due to focus, composition and modifiers.
          // This  #4521 by skipping the unnecessary `checked` update.
          cur !== oldProps[key]) {
            // some property updates can throw
            // e.g. `value` on <progress> w/ non-finite value
            try {
              elm[key] = cur;
            } catch (e) {}
          }
        }
      } // check platforms/web/util/attrs.js acceptValue


      function shouldUpdateValue(elm, checkVal) {
        return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
      }

      function isNotInFocusAndDirty(elm, checkVal) {
        // return true when textbox (.number and .trim) loses focus and its value is
        // not equal to the updated value
        var notInFocus = true; // #6157
        // work around IE bug when accessing document.activeElement in an iframe

        try {
          notInFocus = document.activeElement !== elm;
        } catch (e) {}

        return notInFocus && elm.value !== checkVal;
      }

      function isDirtyWithModifiers(elm, newVal) {
        var value = elm.value;
        var modifiers = elm._vModifiers; // injected by v-model runtime

        if (isDef(modifiers)) {
          if (modifiers.number) {
            return toNumber(value) !== toNumber(newVal);
          }

          if (modifiers.trim) {
            return value.trim() !== newVal.trim();
          }
        }

        return value !== newVal;
      }

      var domProps = {
        create: updateDOMProps,
        update: updateDOMProps
      };
      /*  */

      var parseStyleText = cached(function (cssText) {
        var res = {};
        var listDelimiter = /;(?![^(]*\))/g;
        var propertyDelimiter = /:(.+)/;
        cssText.split(listDelimiter).forEach(function (item) {
          if (item) {
            var tmp = item.split(propertyDelimiter);
            tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
          }
        });
        return res;
      }); // merge static and dynamic style data on the same vnode

      function normalizeStyleData(data) {
        var style = normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
        // and is always a fresh object, so it's safe to merge into it

        return data.staticStyle ? extend(data.staticStyle, style) : style;
      } // normalize possible array / string values into Object


      function normalizeStyleBinding(bindingStyle) {
        if (Array.isArray(bindingStyle)) {
          return toObject(bindingStyle);
        }

        if (typeof bindingStyle === 'string') {
          return parseStyleText(bindingStyle);
        }

        return bindingStyle;
      }
      /**
       * parent component style should be after child's
       * so that parent component's style could override it
       */


      function getStyle(vnode, checkChild) {
        var res = {};
        var styleData;

        if (checkChild) {
          var childNode = vnode;

          while (childNode.componentInstance) {
            childNode = childNode.componentInstance._vnode;

            if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
              extend(res, styleData);
            }
          }
        }

        if (styleData = normalizeStyleData(vnode.data)) {
          extend(res, styleData);
        }

        var parentNode = vnode;

        while (parentNode = parentNode.parent) {
          if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
            extend(res, styleData);
          }
        }

        return res;
      }
      /*  */


      var cssVarRE = /^--/;
      var importantRE = /\s*!important$/;

      var setProp = function setProp(el, name, val) {
        /* istanbul ignore if */
        if (cssVarRE.test(name)) {
          el.style.setProperty(name, val);
        } else if (importantRE.test(val)) {
          el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
        } else {
          var normalizedName = normalize(name);

          if (Array.isArray(val)) {
            // Support values array created by autoprefixer, e.g.
            // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
            // Set them one by one, and the browser will only set those it can recognize
            for (var i = 0, len = val.length; i < len; i++) {
              el.style[normalizedName] = val[i];
            }
          } else {
            el.style[normalizedName] = val;
          }
        }
      };

      var vendorNames = ['Webkit', 'Moz', 'ms'];
      var emptyStyle;
      var normalize = cached(function (prop) {
        emptyStyle = emptyStyle || document.createElement('div').style;
        prop = camelize(prop);

        if (prop !== 'filter' && prop in emptyStyle) {
          return prop;
        }

        var capName = prop.charAt(0).toUpperCase() + prop.slice(1);

        for (var i = 0; i < vendorNames.length; i++) {
          var name = vendorNames[i] + capName;

          if (name in emptyStyle) {
            return name;
          }
        }
      });

      function updateStyle(oldVnode, vnode) {
        var data = vnode.data;
        var oldData = oldVnode.data;

        if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
          return;
        }

        var cur, name;
        var el = vnode.elm;
        var oldStaticStyle = oldData.staticStyle;
        var oldStyleBinding = oldData.normalizedStyle || oldData.style || {}; // if static style exists, stylebinding already merged into it when doing normalizeStyleData

        var oldStyle = oldStaticStyle || oldStyleBinding;
        var style = normalizeStyleBinding(vnode.data.style) || {}; // store normalized style under a different key for next diff
        // make sure to clone it if it's reactive, since the user likely wants
        // to mutate it.

        vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
        var newStyle = getStyle(vnode, true);

        for (name in oldStyle) {
          if (isUndef(newStyle[name])) {
            setProp(el, name, '');
          }
        }

        for (name in newStyle) {
          cur = newStyle[name];

          if (cur !== oldStyle[name]) {
            // ie9 setting to null has no effect, must use empty string
            setProp(el, name, cur == null ? '' : cur);
          }
        }
      }

      var style = {
        create: updateStyle,
        update: updateStyle
      };
      /*  */

      var whitespaceRE = /\s+/;
      /**
       * Add class with compatibility for SVG since classList is not supported on
       * SVG elements in IE
       */

      function addClass(el, cls) {
        /* istanbul ignore if */
        if (!cls || !(cls = cls.trim())) {
          return;
        }
        /* istanbul ignore else */


        if (el.classList) {
          if (cls.indexOf(' ') > -1) {
            cls.split(whitespaceRE).forEach(function (c) {
              return el.classList.add(c);
            });
          } else {
            el.classList.add(cls);
          }
        } else {
          var cur = " " + (el.getAttribute('class') || '') + " ";

          if (cur.indexOf(' ' + cls + ' ') < 0) {
            el.setAttribute('class', (cur + cls).trim());
          }
        }
      }
      /**
       * Remove class with compatibility for SVG since classList is not supported on
       * SVG elements in IE
       */


      function removeClass(el, cls) {
        /* istanbul ignore if */
        if (!cls || !(cls = cls.trim())) {
          return;
        }
        /* istanbul ignore else */


        if (el.classList) {
          if (cls.indexOf(' ') > -1) {
            cls.split(whitespaceRE).forEach(function (c) {
              return el.classList.remove(c);
            });
          } else {
            el.classList.remove(cls);
          }

          if (!el.classList.length) {
            el.removeAttribute('class');
          }
        } else {
          var cur = " " + (el.getAttribute('class') || '') + " ";
          var tar = ' ' + cls + ' ';

          while (cur.indexOf(tar) >= 0) {
            cur = cur.replace(tar, ' ');
          }

          cur = cur.trim();

          if (cur) {
            el.setAttribute('class', cur);
          } else {
            el.removeAttribute('class');
          }
        }
      }
      /*  */


      function resolveTransition(def$$1) {
        if (!def$$1) {
          return;
        }
        /* istanbul ignore else */


        if (_typeof(def$$1) === 'object') {
          var res = {};

          if (def$$1.css !== false) {
            extend(res, autoCssTransition(def$$1.name || 'v'));
          }

          extend(res, def$$1);
          return res;
        } else if (typeof def$$1 === 'string') {
          return autoCssTransition(def$$1);
        }
      }

      var autoCssTransition = cached(function (name) {
        return {
          enterClass: name + "-enter",
          enterToClass: name + "-enter-to",
          enterActiveClass: name + "-enter-active",
          leaveClass: name + "-leave",
          leaveToClass: name + "-leave-to",
          leaveActiveClass: name + "-leave-active"
        };
      });
      var hasTransition = inBrowser && !isIE9;
      var TRANSITION = 'transition';
      var ANIMATION = 'animation'; // Transition property/event sniffing

      var transitionProp = 'transition';
      var transitionEndEvent = 'transitionend';
      var animationProp = 'animation';
      var animationEndEvent = 'animationend';

      if (hasTransition) {
        /* istanbul ignore if */
        if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
          transitionProp = 'WebkitTransition';
          transitionEndEvent = 'webkitTransitionEnd';
        }

        if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
          animationProp = 'WebkitAnimation';
          animationEndEvent = 'webkitAnimationEnd';
        }
      } // binding to window is necessary to make hot reload work in IE in strict mode


      var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout :
      /* istanbul ignore next */
      function (fn) {
        return fn();
      };

      function nextFrame(fn) {
        raf(function () {
          raf(fn);
        });
      }

      function addTransitionClass(el, cls) {
        var transitionClasses = el._transitionClasses || (el._transitionClasses = []);

        if (transitionClasses.indexOf(cls) < 0) {
          transitionClasses.push(cls);
          addClass(el, cls);
        }
      }

      function removeTransitionClass(el, cls) {
        if (el._transitionClasses) {
          remove(el._transitionClasses, cls);
        }

        removeClass(el, cls);
      }

      function whenTransitionEnds(el, expectedType, cb) {
        var ref = getTransitionInfo(el, expectedType);
        var type = ref.type;
        var timeout = ref.timeout;
        var propCount = ref.propCount;

        if (!type) {
          return cb();
        }

        var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
        var ended = 0;

        var end = function end() {
          el.removeEventListener(event, onEnd);
          cb();
        };

        var onEnd = function onEnd(e) {
          if (e.target === el) {
            if (++ended >= propCount) {
              end();
            }
          }
        };

        setTimeout(function () {
          if (ended < propCount) {
            end();
          }
        }, timeout + 1);
        el.addEventListener(event, onEnd);
      }

      var transformRE = /\b(transform|all)(,|$)/;

      function getTransitionInfo(el, expectedType) {
        var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

        var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
        var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
        var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
        var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
        var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
        var animationTimeout = getTimeout(animationDelays, animationDurations);
        var type;
        var timeout = 0;
        var propCount = 0;
        /* istanbul ignore if */

        if (expectedType === TRANSITION) {
          if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
          }
        } else if (expectedType === ANIMATION) {
          if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
          }
        } else {
          timeout = Math.max(transitionTimeout, animationTimeout);
          type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
          propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
        }

        var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
        return {
          type: type,
          timeout: timeout,
          propCount: propCount,
          hasTransform: hasTransform
        };
      }

      function getTimeout(delays, durations) {
        /* istanbul ignore next */
        while (delays.length < durations.length) {
          delays = delays.concat(delays);
        }

        return Math.max.apply(null, durations.map(function (d, i) {
          return toMs(d) + toMs(delays[i]);
        }));
      } // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
      // in a locale-dependent way, using a comma instead of a dot.
      // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
      // as a floor function) causing unexpected behaviors


      function toMs(s) {
        return Number(s.slice(0, -1).replace(',', '.')) * 1000;
      }
      /*  */


      function enter(vnode, toggleDisplay) {
        var el = vnode.elm; // call leave callback now

        if (isDef(el._leaveCb)) {
          el._leaveCb.cancelled = true;

          el._leaveCb();
        }

        var data = resolveTransition(vnode.data.transition);

        if (isUndef(data)) {
          return;
        }
        /* istanbul ignore if */


        if (isDef(el._enterCb) || el.nodeType !== 1) {
          return;
        }

        var css = data.css;
        var type = data.type;
        var enterClass = data.enterClass;
        var enterToClass = data.enterToClass;
        var enterActiveClass = data.enterActiveClass;
        var appearClass = data.appearClass;
        var appearToClass = data.appearToClass;
        var appearActiveClass = data.appearActiveClass;
        var beforeEnter = data.beforeEnter;
        var enter = data.enter;
        var afterEnter = data.afterEnter;
        var enterCancelled = data.enterCancelled;
        var beforeAppear = data.beforeAppear;
        var appear = data.appear;
        var afterAppear = data.afterAppear;
        var appearCancelled = data.appearCancelled;
        var duration = data.duration; // activeInstance will always be the <transition> component managing this
        // transition. One edge case to check is when the <transition> is placed
        // as the root node of a child component. In that case we need to check
        // <transition>'s parent for appear check.

        var context = activeInstance;
        var transitionNode = activeInstance.$vnode;

        while (transitionNode && transitionNode.parent) {
          context = transitionNode.context;
          transitionNode = transitionNode.parent;
        }

        var isAppear = !context._isMounted || !vnode.isRootInsert;

        if (isAppear && !appear && appear !== '') {
          return;
        }

        var startClass = isAppear && appearClass ? appearClass : enterClass;
        var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
        var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
        var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
        var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
        var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
        var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
        var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

        if (explicitEnterDuration != null) {
          checkDuration(explicitEnterDuration, 'enter', vnode);
        }

        var expectsCSS = css !== false && !isIE9;
        var userWantsControl = getHookArgumentsLength(enterHook);
        var cb = el._enterCb = once(function () {
          if (expectsCSS) {
            removeTransitionClass(el, toClass);
            removeTransitionClass(el, activeClass);
          }

          if (cb.cancelled) {
            if (expectsCSS) {
              removeTransitionClass(el, startClass);
            }

            enterCancelledHook && enterCancelledHook(el);
          } else {
            afterEnterHook && afterEnterHook(el);
          }

          el._enterCb = null;
        });

        if (!vnode.data.show) {
          // remove pending leave element on enter by injecting an insert hook
          mergeVNodeHook(vnode, 'insert', function () {
            var parent = el.parentNode;
            var pendingNode = parent && parent._pending && parent._pending[vnode.key];

            if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
              pendingNode.elm._leaveCb();
            }

            enterHook && enterHook(el, cb);
          });
        } // start enter transition


        beforeEnterHook && beforeEnterHook(el);

        if (expectsCSS) {
          addTransitionClass(el, startClass);
          addTransitionClass(el, activeClass);
          nextFrame(function () {
            removeTransitionClass(el, startClass);

            if (!cb.cancelled) {
              addTransitionClass(el, toClass);

              if (!userWantsControl) {
                if (isValidDuration(explicitEnterDuration)) {
                  setTimeout(cb, explicitEnterDuration);
                } else {
                  whenTransitionEnds(el, type, cb);
                }
              }
            }
          });
        }

        if (vnode.data.show) {
          toggleDisplay && toggleDisplay();
          enterHook && enterHook(el, cb);
        }

        if (!expectsCSS && !userWantsControl) {
          cb();
        }
      }

      function leave(vnode, rm) {
        var el = vnode.elm; // call enter callback now

        if (isDef(el._enterCb)) {
          el._enterCb.cancelled = true;

          el._enterCb();
        }

        var data = resolveTransition(vnode.data.transition);

        if (isUndef(data) || el.nodeType !== 1) {
          return rm();
        }
        /* istanbul ignore if */


        if (isDef(el._leaveCb)) {
          return;
        }

        var css = data.css;
        var type = data.type;
        var leaveClass = data.leaveClass;
        var leaveToClass = data.leaveToClass;
        var leaveActiveClass = data.leaveActiveClass;
        var beforeLeave = data.beforeLeave;
        var leave = data.leave;
        var afterLeave = data.afterLeave;
        var leaveCancelled = data.leaveCancelled;
        var delayLeave = data.delayLeave;
        var duration = data.duration;
        var expectsCSS = css !== false && !isIE9;
        var userWantsControl = getHookArgumentsLength(leave);
        var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

        if (isDef(explicitLeaveDuration)) {
          checkDuration(explicitLeaveDuration, 'leave', vnode);
        }

        var cb = el._leaveCb = once(function () {
          if (el.parentNode && el.parentNode._pending) {
            el.parentNode._pending[vnode.key] = null;
          }

          if (expectsCSS) {
            removeTransitionClass(el, leaveToClass);
            removeTransitionClass(el, leaveActiveClass);
          }

          if (cb.cancelled) {
            if (expectsCSS) {
              removeTransitionClass(el, leaveClass);
            }

            leaveCancelled && leaveCancelled(el);
          } else {
            rm();
            afterLeave && afterLeave(el);
          }

          el._leaveCb = null;
        });

        if (delayLeave) {
          delayLeave(performLeave);
        } else {
          performLeave();
        }

        function performLeave() {
          // the delayed leave may have already been cancelled
          if (cb.cancelled) {
            return;
          } // record leaving element


          if (!vnode.data.show && el.parentNode) {
            (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
          }

          beforeLeave && beforeLeave(el);

          if (expectsCSS) {
            addTransitionClass(el, leaveClass);
            addTransitionClass(el, leaveActiveClass);
            nextFrame(function () {
              removeTransitionClass(el, leaveClass);

              if (!cb.cancelled) {
                addTransitionClass(el, leaveToClass);

                if (!userWantsControl) {
                  if (isValidDuration(explicitLeaveDuration)) {
                    setTimeout(cb, explicitLeaveDuration);
                  } else {
                    whenTransitionEnds(el, type, cb);
                  }
                }
              }
            });
          }

          leave && leave(el, cb);

          if (!expectsCSS && !userWantsControl) {
            cb();
          }
        }
      } // only used in dev mode


      function checkDuration(val, name, vnode) {
        if (typeof val !== 'number') {
          warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
        } else if (isNaN(val)) {
          warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
        }
      }

      function isValidDuration(val) {
        return typeof val === 'number' && !isNaN(val);
      }
      /**
       * Normalize a transition hook's argument length. The hook may be:
       * - a merged hook (invoker) with the original in .fns
       * - a wrapped component method (check ._length)
       * - a plain function (.length)
       */


      function getHookArgumentsLength(fn) {
        if (isUndef(fn)) {
          return false;
        }

        var invokerFns = fn.fns;

        if (isDef(invokerFns)) {
          // invoker
          return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
        } else {
          return (fn._length || fn.length) > 1;
        }
      }

      function _enter(_, vnode) {
        if (vnode.data.show !== true) {
          enter(vnode);
        }
      }

      var transition = inBrowser ? {
        create: _enter,
        activate: _enter,
        remove: function remove$$1(vnode, rm) {
          /* istanbul ignore else */
          if (vnode.data.show !== true) {
            leave(vnode, rm);
          } else {
            rm();
          }
        }
      } : {};
      var platformModules = [attrs, klass, events, domProps, style, transition];
      /*  */
      // the directive module should be applied last, after all
      // built-in modules have been applied.

      var modules = platformModules.concat(baseModules);
      var patch = createPatchFunction({
        nodeOps: nodeOps,
        modules: modules
      });
      /**
       * Not type checking this file because flow doesn't like attaching
       * properties to Elements.
       */

      /* istanbul ignore if */

      if (isIE9) {
        // http://www.matts411.com/post/internet-explorer-9-oninput/
        document.addEventListener('selectionchange', function () {
          var el = document.activeElement;

          if (el && el.vmodel) {
            trigger(el, 'input');
          }
        });
      }

      var directive = {
        inserted: function inserted(el, binding, vnode, oldVnode) {
          if (vnode.tag === 'select') {
            // #6903
            if (oldVnode.elm && !oldVnode.elm._vOptions) {
              mergeVNodeHook(vnode, 'postpatch', function () {
                directive.componentUpdated(el, binding, vnode);
              });
            } else {
              setSelected(el, binding, vnode.context);
            }

            el._vOptions = [].map.call(el.options, getValue);
          } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
            el._vModifiers = binding.modifiers;

            if (!binding.modifiers.lazy) {
              el.addEventListener('compositionstart', onCompositionStart);
              el.addEventListener('compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
              // switching focus before confirming composition choice
              // this also fixes the issue where some browsers e.g. iOS Chrome
              // fires "change" instead of "input" on autocomplete.

              el.addEventListener('change', onCompositionEnd);
              /* istanbul ignore if */

              if (isIE9) {
                el.vmodel = true;
              }
            }
          }
        },
        componentUpdated: function componentUpdated(el, binding, vnode) {
          if (vnode.tag === 'select') {
            setSelected(el, binding, vnode.context); // in case the options rendered by v-for have changed,
            // it's possible that the value is out-of-sync with the rendered options.
            // detect such cases and filter out values that no longer has a matching
            // option in the DOM.

            var prevOptions = el._vOptions;
            var curOptions = el._vOptions = [].map.call(el.options, getValue);

            if (curOptions.some(function (o, i) {
              return !looseEqual(o, prevOptions[i]);
            })) {
              // trigger change event if
              // no matching option found for at least one value
              var needReset = el.multiple ? binding.value.some(function (v) {
                return hasNoMatchingOption(v, curOptions);
              }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);

              if (needReset) {
                trigger(el, 'change');
              }
            }
          }
        }
      };

      function setSelected(el, binding, vm) {
        actuallySetSelected(el, binding, vm);
        /* istanbul ignore if */

        if (isIE || isEdge) {
          setTimeout(function () {
            actuallySetSelected(el, binding, vm);
          }, 0);
        }
      }

      function actuallySetSelected(el, binding, vm) {
        var value = binding.value;
        var isMultiple = el.multiple;

        if (isMultiple && !Array.isArray(value)) {
          warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
          return;
        }

        var selected, option;

        for (var i = 0, l = el.options.length; i < l; i++) {
          option = el.options[i];

          if (isMultiple) {
            selected = looseIndexOf(value, getValue(option)) > -1;

            if (option.selected !== selected) {
              option.selected = selected;
            }
          } else {
            if (looseEqual(getValue(option), value)) {
              if (el.selectedIndex !== i) {
                el.selectedIndex = i;
              }

              return;
            }
          }
        }

        if (!isMultiple) {
          el.selectedIndex = -1;
        }
      }

      function hasNoMatchingOption(value, options) {
        return options.every(function (o) {
          return !looseEqual(o, value);
        });
      }

      function getValue(option) {
        return '_value' in option ? option._value : option.value;
      }

      function onCompositionStart(e) {
        e.target.composing = true;
      }

      function onCompositionEnd(e) {
        // prevent triggering an input event for no reason
        if (!e.target.composing) {
          return;
        }

        e.target.composing = false;
        trigger(e.target, 'input');
      }

      function trigger(el, type) {
        var e = document.createEvent('HTMLEvents');
        e.initEvent(type, true, true);
        el.dispatchEvent(e);
      }
      /*  */
      // recursively search for possible transition defined inside the component root


      function locateNode(vnode) {
        return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
      }

      var show = {
        bind: function bind(el, ref, vnode) {
          var value = ref.value;
          vnode = locateNode(vnode);
          var transition$$1 = vnode.data && vnode.data.transition;
          var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;

          if (value && transition$$1) {
            vnode.data.show = true;
            enter(vnode, function () {
              el.style.display = originalDisplay;
            });
          } else {
            el.style.display = value ? originalDisplay : 'none';
          }
        },
        update: function update(el, ref, vnode) {
          var value = ref.value;
          var oldValue = ref.oldValue;
          /* istanbul ignore if */

          if (!value === !oldValue) {
            return;
          }

          vnode = locateNode(vnode);
          var transition$$1 = vnode.data && vnode.data.transition;

          if (transition$$1) {
            vnode.data.show = true;

            if (value) {
              enter(vnode, function () {
                el.style.display = el.__vOriginalDisplay;
              });
            } else {
              leave(vnode, function () {
                el.style.display = 'none';
              });
            }
          } else {
            el.style.display = value ? el.__vOriginalDisplay : 'none';
          }
        },
        unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
          if (!isDestroy) {
            el.style.display = el.__vOriginalDisplay;
          }
        }
      };
      var platformDirectives = {
        model: directive,
        show: show
      };
      /*  */

      var transitionProps = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [Number, String, Object]
      }; // in case the child is also an abstract component, e.g. <keep-alive>
      // we want to recursively retrieve the real component to be rendered

      function getRealChild(vnode) {
        var compOptions = vnode && vnode.componentOptions;

        if (compOptions && compOptions.Ctor.options["abstract"]) {
          return getRealChild(getFirstComponentChild(compOptions.children));
        } else {
          return vnode;
        }
      }

      function extractTransitionData(comp) {
        var data = {};
        var options = comp.$options; // props

        for (var key in options.propsData) {
          data[key] = comp[key];
        } // events.
        // extract listeners and pass them directly to the transition methods


        var listeners = options._parentListeners;

        for (var key$1 in listeners) {
          data[camelize(key$1)] = listeners[key$1];
        }

        return data;
      }

      function placeholder(h, rawChild) {
        if (/\d-keep-alive$/.test(rawChild.tag)) {
          return h('keep-alive', {
            props: rawChild.componentOptions.propsData
          });
        }
      }

      function hasParentTransition(vnode) {
        while (vnode = vnode.parent) {
          if (vnode.data.transition) {
            return true;
          }
        }
      }

      function isSameChild(child, oldChild) {
        return oldChild.key === child.key && oldChild.tag === child.tag;
      }

      var isNotTextNode = function isNotTextNode(c) {
        return c.tag || isAsyncPlaceholder(c);
      };

      var isVShowDirective = function isVShowDirective(d) {
        return d.name === 'show';
      };

      var Transition = {
        name: 'transition',
        props: transitionProps,
        "abstract": true,
        render: function render(h) {
          var this$1 = this;
          var children = this.$slots["default"];

          if (!children) {
            return;
          } // filter out text nodes (possible whitespaces)


          children = children.filter(isNotTextNode);
          /* istanbul ignore if */

          if (!children.length) {
            return;
          } // warn multiple elements


          if (children.length > 1) {
            warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
          }

          var mode = this.mode; // warn invalid mode

          if (mode && mode !== 'in-out' && mode !== 'out-in') {
            warn('invalid <transition> mode: ' + mode, this.$parent);
          }

          var rawChild = children[0]; // if this is a component root node and the component's
          // parent container node also has transition, skip.

          if (hasParentTransition(this.$vnode)) {
            return rawChild;
          } // apply transition data to child
          // use getRealChild() to ignore abstract components e.g. keep-alive


          var child = getRealChild(rawChild);
          /* istanbul ignore if */

          if (!child) {
            return rawChild;
          }

          if (this._leaving) {
            return placeholder(h, rawChild);
          } // ensure a key that is unique to the vnode type and to this transition
          // component instance. This key will be used to remove pending leaving nodes
          // during entering.


          var id = "__transition-" + this._uid + "-";
          child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
          var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
          var oldRawChild = this._vnode;
          var oldChild = getRealChild(oldRawChild); // mark v-show
          // so that the transition module can hand over the control to the directive

          if (child.data.directives && child.data.directives.some(isVShowDirective)) {
            child.data.show = true;
          }

          if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
          !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
            // replace old child transition data with fresh one
            // important for dynamic transitions!
            var oldData = oldChild.data.transition = extend({}, data); // handle transition mode

            if (mode === 'out-in') {
              // return placeholder node and queue update when leave finishes
              this._leaving = true;
              mergeVNodeHook(oldData, 'afterLeave', function () {
                this$1._leaving = false;
                this$1.$forceUpdate();
              });
              return placeholder(h, rawChild);
            } else if (mode === 'in-out') {
              if (isAsyncPlaceholder(child)) {
                return oldRawChild;
              }

              var delayedLeave;

              var performLeave = function performLeave() {
                delayedLeave();
              };

              mergeVNodeHook(data, 'afterEnter', performLeave);
              mergeVNodeHook(data, 'enterCancelled', performLeave);
              mergeVNodeHook(oldData, 'delayLeave', function (leave) {
                delayedLeave = leave;
              });
            }
          }

          return rawChild;
        }
      };
      /*  */

      var props = extend({
        tag: String,
        moveClass: String
      }, transitionProps);
      delete props.mode;
      var TransitionGroup = {
        props: props,
        beforeMount: function beforeMount() {
          var this$1 = this;
          var update = this._update;

          this._update = function (vnode, hydrating) {
            var restoreActiveInstance = setActiveInstance(this$1); // force removing pass

            this$1.__patch__(this$1._vnode, this$1.kept, false, // hydrating
            true // removeOnly (!important, avoids unnecessary moves)
            );

            this$1._vnode = this$1.kept;
            restoreActiveInstance();
            update.call(this$1, vnode, hydrating);
          };
        },
        render: function render(h) {
          var tag = this.tag || this.$vnode.data.tag || 'span';
          var map = Object.create(null);
          var prevChildren = this.prevChildren = this.children;
          var rawChildren = this.$slots["default"] || [];
          var children = this.children = [];
          var transitionData = extractTransitionData(this);

          for (var i = 0; i < rawChildren.length; i++) {
            var c = rawChildren[i];

            if (c.tag) {
              if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
                children.push(c);
                map[c.key] = c;
                (c.data || (c.data = {})).transition = transitionData;
              } else {
                var opts = c.componentOptions;
                var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
                warn("<transition-group> children must be keyed: <" + name + ">");
              }
            }
          }

          if (prevChildren) {
            var kept = [];
            var removed = [];

            for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
              var c$1 = prevChildren[i$1];
              c$1.data.transition = transitionData;
              c$1.data.pos = c$1.elm.getBoundingClientRect();

              if (map[c$1.key]) {
                kept.push(c$1);
              } else {
                removed.push(c$1);
              }
            }

            this.kept = h(tag, null, kept);
            this.removed = removed;
          }

          return h(tag, null, children);
        },
        updated: function updated() {
          var children = this.prevChildren;
          var moveClass = this.moveClass || (this.name || 'v') + '-move';

          if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
            return;
          } // we divide the work into three loops to avoid mixing DOM reads and writes
          // in each iteration - which helps prevent layout thrashing.


          children.forEach(callPendingCbs);
          children.forEach(recordPosition);
          children.forEach(applyTranslation); // force reflow to put everything in position
          // assign to this to avoid being removed in tree-shaking
          // $flow-disable-line

          this._reflow = document.body.offsetHeight;
          children.forEach(function (c) {
            if (c.data.moved) {
              var el = c.elm;
              var s = el.style;
              addTransitionClass(el, moveClass);
              s.transform = s.WebkitTransform = s.transitionDuration = '';
              el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
                if (e && e.target !== el) {
                  return;
                }

                if (!e || /transform$/.test(e.propertyName)) {
                  el.removeEventListener(transitionEndEvent, cb);
                  el._moveCb = null;
                  removeTransitionClass(el, moveClass);
                }
              });
            }
          });
        },
        methods: {
          hasMove: function hasMove(el, moveClass) {
            /* istanbul ignore if */
            if (!hasTransition) {
              return false;
            }
            /* istanbul ignore if */


            if (this._hasMove) {
              return this._hasMove;
            } // Detect whether an element with the move class applied has
            // CSS transitions. Since the element may be inside an entering
            // transition at this very moment, we make a clone of it and remove
            // all other transition classes applied to ensure only the move class
            // is applied.


            var clone = el.cloneNode();

            if (el._transitionClasses) {
              el._transitionClasses.forEach(function (cls) {
                removeClass(clone, cls);
              });
            }

            addClass(clone, moveClass);
            clone.style.display = 'none';
            this.$el.appendChild(clone);
            var info = getTransitionInfo(clone);
            this.$el.removeChild(clone);
            return this._hasMove = info.hasTransform;
          }
        }
      };

      function callPendingCbs(c) {
        /* istanbul ignore if */
        if (c.elm._moveCb) {
          c.elm._moveCb();
        }
        /* istanbul ignore if */


        if (c.elm._enterCb) {
          c.elm._enterCb();
        }
      }

      function recordPosition(c) {
        c.data.newPos = c.elm.getBoundingClientRect();
      }

      function applyTranslation(c) {
        var oldPos = c.data.pos;
        var newPos = c.data.newPos;
        var dx = oldPos.left - newPos.left;
        var dy = oldPos.top - newPos.top;

        if (dx || dy) {
          c.data.moved = true;
          var s = c.elm.style;
          s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
          s.transitionDuration = '0s';
        }
      }

      var platformComponents = {
        Transition: Transition,
        TransitionGroup: TransitionGroup
      };
      /*  */
      // install platform specific utils

      Vue.config.mustUseProp = mustUseProp;
      Vue.config.isReservedTag = isReservedTag;
      Vue.config.isReservedAttr = isReservedAttr;
      Vue.config.getTagNamespace = getTagNamespace;
      Vue.config.isUnknownElement = isUnknownElement; // install platform runtime directives & components

      extend(Vue.options.directives, platformDirectives);
      extend(Vue.options.components, platformComponents); // install platform patch function

      Vue.prototype.__patch__ = inBrowser ? patch : noop; // public mount method

      Vue.prototype.$mount = function (el, hydrating) {
        el = el && inBrowser ? query(el) : undefined;
        return mountComponent(this, el, hydrating);
      }; // devtools global hook

      /* istanbul ignore next */


      if (inBrowser) {
        setTimeout(function () {
          if (config.devtools) {
            if (devtools) {
              devtools.emit('init', Vue);
            } else {
              console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
            }
          }

          if (config.productionTip !== false && typeof console !== 'undefined') {
            console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
          }
        }, 0);
      }
      /*  */


      var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
      var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
      var buildRegex = cached(function (delimiters) {
        var open = delimiters[0].replace(regexEscapeRE, '\\$&');
        var close = delimiters[1].replace(regexEscapeRE, '\\$&');
        return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
      });

      function parseText(text, delimiters) {
        var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;

        if (!tagRE.test(text)) {
          return;
        }

        var tokens = [];
        var rawTokens = [];
        var lastIndex = tagRE.lastIndex = 0;
        var match, index, tokenValue;

        while (match = tagRE.exec(text)) {
          index = match.index; // push text token

          if (index > lastIndex) {
            rawTokens.push(tokenValue = text.slice(lastIndex, index));
            tokens.push(JSON.stringify(tokenValue));
          } // tag token


          var exp = parseFilters(match[1].trim());
          tokens.push("_s(" + exp + ")");
          rawTokens.push({
            '@binding': exp
          });
          lastIndex = index + match[0].length;
        }

        if (lastIndex < text.length) {
          rawTokens.push(tokenValue = text.slice(lastIndex));
          tokens.push(JSON.stringify(tokenValue));
        }

        return {
          expression: tokens.join('+'),
          tokens: rawTokens
        };
      }
      /*  */


      function transformNode(el, options) {
        var warn = options.warn || baseWarn;
        var staticClass = getAndRemoveAttr(el, 'class');

        if (staticClass) {
          var res = parseText(staticClass, options.delimiters);

          if (res) {
            warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.', el.rawAttrsMap['class']);
          }
        }

        if (staticClass) {
          el.staticClass = JSON.stringify(staticClass);
        }

        var classBinding = getBindingAttr(el, 'class', false
        /* getStatic */
        );

        if (classBinding) {
          el.classBinding = classBinding;
        }
      }

      function genData(el) {
        var data = '';

        if (el.staticClass) {
          data += "staticClass:" + el.staticClass + ",";
        }

        if (el.classBinding) {
          data += "class:" + el.classBinding + ",";
        }

        return data;
      }

      var klass$1 = {
        staticKeys: ['staticClass'],
        transformNode: transformNode,
        genData: genData
      };
      /*  */

      function transformNode$1(el, options) {
        var warn = options.warn || baseWarn;
        var staticStyle = getAndRemoveAttr(el, 'style');

        if (staticStyle) {
          /* istanbul ignore if */
          {
            var res = parseText(staticStyle, options.delimiters);

            if (res) {
              warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.', el.rawAttrsMap['style']);
            }
          }
          el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
        }

        var styleBinding = getBindingAttr(el, 'style', false
        /* getStatic */
        );

        if (styleBinding) {
          el.styleBinding = styleBinding;
        }
      }

      function genData$1(el) {
        var data = '';

        if (el.staticStyle) {
          data += "staticStyle:" + el.staticStyle + ",";
        }

        if (el.styleBinding) {
          data += "style:(" + el.styleBinding + "),";
        }

        return data;
      }

      var style$1 = {
        staticKeys: ['staticStyle'],
        transformNode: transformNode$1,
        genData: genData$1
      };
      /*  */

      var decoder;
      var he = {
        decode: function decode(html) {
          decoder = decoder || document.createElement('div');
          decoder.innerHTML = html;
          return decoder.textContent;
        }
      };
      /*  */

      var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr'); // Elements that you can, intentionally, leave open
      // (and which close themselves)

      var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'); // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
      // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content

      var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track');
      /**
       * Not type-checking this file because it's mostly vendor code.
       */
      // Regular Expressions for parsing tags and attributes

      var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
      var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
      var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + unicodeRegExp.source + "]*";
      var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
      var startTagOpen = new RegExp("^<" + qnameCapture);
      var startTagClose = /^\s*(\/?)>/;
      var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
      var doctype = /^<!DOCTYPE [^>]+>/i; // #7298: escape - to avoid being passed as HTML comment when inlined in page

      var comment = /^<!\--/;
      var conditionalComment = /^<!\[/; // Special Elements (can contain anything)

      var isPlainTextElement = makeMap('script,style,textarea', true);
      var reCache = {};
      var decodingMap = {
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&amp;': '&',
        '&#10;': '\n',
        '&#9;': '\t',
        '&#39;': "'"
      };
      var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
      var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g; // #5992

      var isIgnoreNewlineTag = makeMap('pre,textarea', true);

      var shouldIgnoreFirstNewline = function shouldIgnoreFirstNewline(tag, html) {
        return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
      };

      function decodeAttr(value, shouldDecodeNewlines) {
        var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
        return value.replace(re, function (match) {
          return decodingMap[match];
        });
      }

      function parseHTML(html, options) {
        var stack = [];
        var expectHTML = options.expectHTML;
        var isUnaryTag$$1 = options.isUnaryTag || no;
        var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
        var index = 0;
        var last, lastTag;

        while (html) {
          last = html; // Make sure we're not in a plaintext content element like script/style

          if (!lastTag || !isPlainTextElement(lastTag)) {
            var textEnd = html.indexOf('<');

            if (textEnd === 0) {
              // Comment:
              if (comment.test(html)) {
                var commentEnd = html.indexOf('-->');

                if (commentEnd >= 0) {
                  if (options.shouldKeepComment) {
                    options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
                  }

                  advance(commentEnd + 3);
                  continue;
                }
              } // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment


              if (conditionalComment.test(html)) {
                var conditionalEnd = html.indexOf(']>');

                if (conditionalEnd >= 0) {
                  advance(conditionalEnd + 2);
                  continue;
                }
              } // Doctype:


              var doctypeMatch = html.match(doctype);

              if (doctypeMatch) {
                advance(doctypeMatch[0].length);
                continue;
              } // End tag:


              var endTagMatch = html.match(endTag);

              if (endTagMatch) {
                var curIndex = index;
                advance(endTagMatch[0].length);
                parseEndTag(endTagMatch[1], curIndex, index);
                continue;
              } // Start tag:


              var startTagMatch = parseStartTag();

              if (startTagMatch) {
                handleStartTag(startTagMatch);

                if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
                  advance(1);
                }

                continue;
              }
            }

            var text = void 0,
                rest = void 0,
                next = void 0;

            if (textEnd >= 0) {
              rest = html.slice(textEnd);

              while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
                // < in plain text, be forgiving and treat it as text
                next = rest.indexOf('<', 1);

                if (next < 0) {
                  break;
                }

                textEnd += next;
                rest = html.slice(textEnd);
              }

              text = html.substring(0, textEnd);
            }

            if (textEnd < 0) {
              text = html;
            }

            if (text) {
              advance(text.length);
            }

            if (options.chars && text) {
              options.chars(text, index - text.length, index);
            }
          } else {
            var endTagLength = 0;
            var stackedTag = lastTag.toLowerCase();
            var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
            var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
              endTagLength = endTag.length;

              if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
                text = text.replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
                .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
              }

              if (shouldIgnoreFirstNewline(stackedTag, text)) {
                text = text.slice(1);
              }

              if (options.chars) {
                options.chars(text);
              }

              return '';
            });
            index += html.length - rest$1.length;
            html = rest$1;
            parseEndTag(stackedTag, index - endTagLength, index);
          }

          if (html === last) {
            options.chars && options.chars(html);

            if (!stack.length && options.warn) {
              options.warn("Mal-formatted tag at end of template: \"" + html + "\"", {
                start: index + html.length
              });
            }

            break;
          }
        } // Clean up any remaining tags


        parseEndTag();

        function advance(n) {
          index += n;
          html = html.substring(n);
        }

        function parseStartTag() {
          var start = html.match(startTagOpen);

          if (start) {
            var match = {
              tagName: start[1],
              attrs: [],
              start: index
            };
            advance(start[0].length);
            var end, attr;

            while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
              attr.start = index;
              advance(attr[0].length);
              attr.end = index;
              match.attrs.push(attr);
            }

            if (end) {
              match.unarySlash = end[1];
              advance(end[0].length);
              match.end = index;
              return match;
            }
          }
        }

        function handleStartTag(match) {
          var tagName = match.tagName;
          var unarySlash = match.unarySlash;

          if (expectHTML) {
            if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
              parseEndTag(lastTag);
            }

            if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
              parseEndTag(tagName);
            }
          }

          var unary = isUnaryTag$$1(tagName) || !!unarySlash;
          var l = match.attrs.length;
          var attrs = new Array(l);

          for (var i = 0; i < l; i++) {
            var args = match.attrs[i];
            var value = args[3] || args[4] || args[5] || '';
            var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href' ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
            attrs[i] = {
              name: args[1],
              value: decodeAttr(value, shouldDecodeNewlines)
            };

            if (options.outputSourceRange) {
              attrs[i].start = args.start + args[0].match(/^\s*/).length;
              attrs[i].end = args.end;
            }
          }

          if (!unary) {
            stack.push({
              tag: tagName,
              lowerCasedTag: tagName.toLowerCase(),
              attrs: attrs,
              start: match.start,
              end: match.end
            });
            lastTag = tagName;
          }

          if (options.start) {
            options.start(tagName, attrs, unary, match.start, match.end);
          }
        }

        function parseEndTag(tagName, start, end) {
          var pos, lowerCasedTagName;

          if (start == null) {
            start = index;
          }

          if (end == null) {
            end = index;
          } // Find the closest opened tag of the same type


          if (tagName) {
            lowerCasedTagName = tagName.toLowerCase();

            for (pos = stack.length - 1; pos >= 0; pos--) {
              if (stack[pos].lowerCasedTag === lowerCasedTagName) {
                break;
              }
            }
          } else {
            // If no tag name is provided, clean shop
            pos = 0;
          }

          if (pos >= 0) {
            // Close all the open elements, up the stack
            for (var i = stack.length - 1; i >= pos; i--) {
              if (i > pos || !tagName && options.warn) {
                options.warn("tag <" + stack[i].tag + "> has no matching end tag.", {
                  start: stack[i].start,
                  end: stack[i].end
                });
              }

              if (options.end) {
                options.end(stack[i].tag, start, end);
              }
            } // Remove the open elements from the stack


            stack.length = pos;
            lastTag = pos && stack[pos - 1].tag;
          } else if (lowerCasedTagName === 'br') {
            if (options.start) {
              options.start(tagName, [], true, start, end);
            }
          } else if (lowerCasedTagName === 'p') {
            if (options.start) {
              options.start(tagName, [], false, start, end);
            }

            if (options.end) {
              options.end(tagName, start, end);
            }
          }
        }
      }
      /*  */


      var onRE = /^@|^v-on:/;
      var dirRE = /^v-|^@|^:|^#/;
      var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
      var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
      var stripParensRE = /^\(|\)$/g;
      var dynamicArgRE = /^\[.*\]$/;
      var argRE = /:(.*)$/;
      var bindRE = /^:|^\.|^v-bind:/;
      var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;
      var slotRE = /^v-slot(:|$)|^#/;
      var lineBreakRE = /[\r\n]/;
      var whitespaceRE$1 = /\s+/g;
      var invalidAttributeRE = /[\s"'<>\/=]/;
      var decodeHTMLCached = cached(he.decode);
      var emptySlotScopeToken = "_empty_"; // configurable state

      var warn$2;
      var delimiters;
      var transforms;
      var preTransforms;
      var postTransforms;
      var platformIsPreTag;
      var platformMustUseProp;
      var platformGetTagNamespace;
      var maybeComponent;

      function createASTElement(tag, attrs, parent) {
        return {
          type: 1,
          tag: tag,
          attrsList: attrs,
          attrsMap: makeAttrsMap(attrs),
          rawAttrsMap: {},
          parent: parent,
          children: []
        };
      }
      /**
       * Convert HTML string to AST.
       */


      function parse(template, options) {
        warn$2 = options.warn || baseWarn;
        platformIsPreTag = options.isPreTag || no;
        platformMustUseProp = options.mustUseProp || no;
        platformGetTagNamespace = options.getTagNamespace || no;
        var isReservedTag = options.isReservedTag || no;

        maybeComponent = function maybeComponent(el) {
          return !!el.component || !isReservedTag(el.tag);
        };

        transforms = pluckModuleFunction(options.modules, 'transformNode');
        preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
        postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
        delimiters = options.delimiters;
        var stack = [];
        var preserveWhitespace = options.preserveWhitespace !== false;
        var whitespaceOption = options.whitespace;
        var root;
        var currentParent;
        var inVPre = false;
        var inPre = false;
        var warned = false;

        function warnOnce(msg, range) {
          if (!warned) {
            warned = true;
            warn$2(msg, range);
          }
        }

        function closeElement(element) {
          trimEndingWhitespace(element);

          if (!inVPre && !element.processed) {
            element = processElement(element, options);
          } // tree management


          if (!stack.length && element !== root) {
            // allow root elements with v-if, v-else-if and v-else
            if (root["if"] && (element.elseif || element["else"])) {
              {
                checkRootConstraints(element);
              }
              addIfCondition(root, {
                exp: element.elseif,
                block: element
              });
            } else {
              warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.", {
                start: element.start
              });
            }
          }

          if (currentParent && !element.forbidden) {
            if (element.elseif || element["else"]) {
              processIfConditions(element, currentParent);
            } else {
              if (element.slotScope) {
                // scoped slot
                // keep it in the children list so that v-else(-if) conditions can
                // find it as the prev node.
                var name = element.slotTarget || '"default"';
                (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
              }

              currentParent.children.push(element);
              element.parent = currentParent;
            }
          } // final children cleanup
          // filter out scoped slots


          element.children = element.children.filter(function (c) {
            return !c.slotScope;
          }); // remove trailing whitespace node again

          trimEndingWhitespace(element); // check pre state

          if (element.pre) {
            inVPre = false;
          }

          if (platformIsPreTag(element.tag)) {
            inPre = false;
          } // apply post-transforms


          for (var i = 0; i < postTransforms.length; i++) {
            postTransforms[i](element, options);
          }
        }

        function trimEndingWhitespace(el) {
          // remove trailing whitespace node
          if (!inPre) {
            var lastNode;

            while ((lastNode = el.children[el.children.length - 1]) && lastNode.type === 3 && lastNode.text === ' ') {
              el.children.pop();
            }
          }
        }

        function checkRootConstraints(el) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes.', {
              start: el.start
            });
          }

          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements.', el.rawAttrsMap['v-for']);
          }
        }

        parseHTML(template, {
          warn: warn$2,
          expectHTML: options.expectHTML,
          isUnaryTag: options.isUnaryTag,
          canBeLeftOpenTag: options.canBeLeftOpenTag,
          shouldDecodeNewlines: options.shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
          shouldKeepComment: options.comments,
          outputSourceRange: options.outputSourceRange,
          start: function start(tag, attrs, unary, start$1, end) {
            // check namespace.
            // inherit parent ns if there is one
            var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag); // handle IE svg bug

            /* istanbul ignore if */

            if (isIE && ns === 'svg') {
              attrs = guardIESVGBug(attrs);
            }

            var element = createASTElement(tag, attrs, currentParent);

            if (ns) {
              element.ns = ns;
            }

            {
              if (options.outputSourceRange) {
                element.start = start$1;
                element.end = end;
                element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
                  cumulated[attr.name] = attr;
                  return cumulated;
                }, {});
              }

              attrs.forEach(function (attr) {
                if (invalidAttributeRE.test(attr.name)) {
                  warn$2("Invalid dynamic argument expression: attribute names cannot contain " + "spaces, quotes, <, >, / or =.", {
                    start: attr.start + attr.name.indexOf("["),
                    end: attr.start + attr.name.length
                  });
                }
              });
            }

            if (isForbiddenTag(element) && !isServerRendering()) {
              element.forbidden = true;
              warn$2('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.', {
                start: element.start
              });
            } // apply pre-transforms


            for (var i = 0; i < preTransforms.length; i++) {
              element = preTransforms[i](element, options) || element;
            }

            if (!inVPre) {
              processPre(element);

              if (element.pre) {
                inVPre = true;
              }
            }

            if (platformIsPreTag(element.tag)) {
              inPre = true;
            }

            if (inVPre) {
              processRawAttrs(element);
            } else if (!element.processed) {
              // structural directives
              processFor(element);
              processIf(element);
              processOnce(element);
            }

            if (!root) {
              root = element;
              {
                checkRootConstraints(root);
              }
            }

            if (!unary) {
              currentParent = element;
              stack.push(element);
            } else {
              closeElement(element);
            }
          },
          end: function end(tag, start, end$1) {
            var element = stack[stack.length - 1]; // pop stack

            stack.length -= 1;
            currentParent = stack[stack.length - 1];

            if (options.outputSourceRange) {
              element.end = end$1;
            }

            closeElement(element);
          },
          chars: function chars(text, start, end) {
            if (!currentParent) {
              {
                if (text === template) {
                  warnOnce('Component template requires a root element, rather than just text.', {
                    start: start
                  });
                } else if (text = text.trim()) {
                  warnOnce("text \"" + text + "\" outside root element will be ignored.", {
                    start: start
                  });
                }
              }
              return;
            } // IE textarea placeholder bug

            /* istanbul ignore if */


            if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
              return;
            }

            var children = currentParent.children;

            if (inPre || text.trim()) {
              text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
            } else if (!children.length) {
              // remove the whitespace-only node right after an opening tag
              text = '';
            } else if (whitespaceOption) {
              if (whitespaceOption === 'condense') {
                // in condense mode, remove the whitespace node if it contains
                // line break, otherwise condense to a single space
                text = lineBreakRE.test(text) ? '' : ' ';
              } else {
                text = ' ';
              }
            } else {
              text = preserveWhitespace ? ' ' : '';
            }

            if (text) {
              if (!inPre && whitespaceOption === 'condense') {
                // condense consecutive whitespaces into single space
                text = text.replace(whitespaceRE$1, ' ');
              }

              var res;
              var child;

              if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
                child = {
                  type: 2,
                  expression: res.expression,
                  tokens: res.tokens,
                  text: text
                };
              } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
                child = {
                  type: 3,
                  text: text
                };
              }

              if (child) {
                if (options.outputSourceRange) {
                  child.start = start;
                  child.end = end;
                }

                children.push(child);
              }
            }
          },
          comment: function comment(text, start, end) {
            // adding anything as a sibling to the root node is forbidden
            // comments should still be allowed, but ignored
            if (currentParent) {
              var child = {
                type: 3,
                text: text,
                isComment: true
              };

              if (options.outputSourceRange) {
                child.start = start;
                child.end = end;
              }

              currentParent.children.push(child);
            }
          }
        });
        return root;
      }

      function processPre(el) {
        if (getAndRemoveAttr(el, 'v-pre') != null) {
          el.pre = true;
        }
      }

      function processRawAttrs(el) {
        var list = el.attrsList;
        var len = list.length;

        if (len) {
          var attrs = el.attrs = new Array(len);

          for (var i = 0; i < len; i++) {
            attrs[i] = {
              name: list[i].name,
              value: JSON.stringify(list[i].value)
            };

            if (list[i].start != null) {
              attrs[i].start = list[i].start;
              attrs[i].end = list[i].end;
            }
          }
        } else if (!el.pre) {
          // non root node in pre blocks with no attributes
          el.plain = true;
        }
      }

      function processElement(element, options) {
        processKey(element); // determine whether this is a plain element after
        // removing structural attributes

        element.plain = !element.key && !element.scopedSlots && !element.attrsList.length;
        processRef(element);
        processSlotContent(element);
        processSlotOutlet(element);
        processComponent(element);

        for (var i = 0; i < transforms.length; i++) {
          element = transforms[i](element, options) || element;
        }

        processAttrs(element);
        return element;
      }

      function processKey(el) {
        var exp = getBindingAttr(el, 'key');

        if (exp) {
          {
            if (el.tag === 'template') {
              warn$2("<template> cannot be keyed. Place the key on real elements instead.", getRawBindingAttr(el, 'key'));
            }

            if (el["for"]) {
              var iterator = el.iterator2 || el.iterator1;
              var parent = el.parent;

              if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
                warn$2("Do not use v-for index as key on <transition-group> children, " + "this is the same as not using keys.", getRawBindingAttr(el, 'key'), true
                /* tip */
                );
              }
            }
          }
          el.key = exp;
        }
      }

      function processRef(el) {
        var ref = getBindingAttr(el, 'ref');

        if (ref) {
          el.ref = ref;
          el.refInFor = checkInFor(el);
        }
      }

      function processFor(el) {
        var exp;

        if (exp = getAndRemoveAttr(el, 'v-for')) {
          var res = parseFor(exp);

          if (res) {
            extend(el, res);
          } else {
            warn$2("Invalid v-for expression: " + exp, el.rawAttrsMap['v-for']);
          }
        }
      }

      function parseFor(exp) {
        var inMatch = exp.match(forAliasRE);

        if (!inMatch) {
          return;
        }

        var res = {};
        res["for"] = inMatch[2].trim();
        var alias = inMatch[1].trim().replace(stripParensRE, '');
        var iteratorMatch = alias.match(forIteratorRE);

        if (iteratorMatch) {
          res.alias = alias.replace(forIteratorRE, '').trim();
          res.iterator1 = iteratorMatch[1].trim();

          if (iteratorMatch[2]) {
            res.iterator2 = iteratorMatch[2].trim();
          }
        } else {
          res.alias = alias;
        }

        return res;
      }

      function processIf(el) {
        var exp = getAndRemoveAttr(el, 'v-if');

        if (exp) {
          el["if"] = exp;
          addIfCondition(el, {
            exp: exp,
            block: el
          });
        } else {
          if (getAndRemoveAttr(el, 'v-else') != null) {
            el["else"] = true;
          }

          var elseif = getAndRemoveAttr(el, 'v-else-if');

          if (elseif) {
            el.elseif = elseif;
          }
        }
      }

      function processIfConditions(el, parent) {
        var prev = findPrevElement(parent.children);

        if (prev && prev["if"]) {
          addIfCondition(prev, {
            exp: el.elseif,
            block: el
          });
        } else {
          warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.", el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']);
        }
      }

      function findPrevElement(children) {
        var i = children.length;

        while (i--) {
          if (children[i].type === 1) {
            return children[i];
          } else {
            if (children[i].text !== ' ') {
              warn$2("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.", children[i]);
            }

            children.pop();
          }
        }
      }

      function addIfCondition(el, condition) {
        if (!el.ifConditions) {
          el.ifConditions = [];
        }

        el.ifConditions.push(condition);
      }

      function processOnce(el) {
        var once$$1 = getAndRemoveAttr(el, 'v-once');

        if (once$$1 != null) {
          el.once = true;
        }
      } // handle content being passed to a component as slot,
      // e.g. <template slot="xxx">, <div slot-scope="xxx">


      function processSlotContent(el) {
        var slotScope;

        if (el.tag === 'template') {
          slotScope = getAndRemoveAttr(el, 'scope');
          /* istanbul ignore if */

          if (slotScope) {
            warn$2("the \"scope\" attribute for scoped slots have been deprecated and " + "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " + "can also be used on plain elements in addition to <template> to " + "denote scoped slots.", el.rawAttrsMap['scope'], true);
          }

          el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
        } else if (slotScope = getAndRemoveAttr(el, 'slot-scope')) {
          /* istanbul ignore if */
          if (el.attrsMap['v-for']) {
            warn$2("Ambiguous combined usage of slot-scope and v-for on <" + el.tag + "> " + "(v-for takes higher priority). Use a wrapper <template> for the " + "scoped slot to make it clearer.", el.rawAttrsMap['slot-scope'], true);
          }

          el.slotScope = slotScope;
        } // slot="xxx"


        var slotTarget = getBindingAttr(el, 'slot');

        if (slotTarget) {
          el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
          el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']); // preserve slot as an attribute for native shadow DOM compat
          // only for non-scoped slots.

          if (el.tag !== 'template' && !el.slotScope) {
            addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
          }
        } // 2.6 v-slot syntax


        {
          if (el.tag === 'template') {
            // v-slot on <template>
            var slotBinding = getAndRemoveAttrByRegex(el, slotRE);

            if (slotBinding) {
              {
                if (el.slotTarget || el.slotScope) {
                  warn$2("Unexpected mixed usage of different slot syntaxes.", el);
                }

                if (el.parent && !maybeComponent(el.parent)) {
                  warn$2("<template v-slot> can only appear at the root level inside " + "the receiving component", el);
                }
              }
              var ref = getSlotName(slotBinding);
              var name = ref.name;
              var dynamic = ref.dynamic;
              el.slotTarget = name;
              el.slotTargetDynamic = dynamic;
              el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
            }
          } else {
            // v-slot on component, denotes default slot
            var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);

            if (slotBinding$1) {
              {
                if (!maybeComponent(el)) {
                  warn$2("v-slot can only be used on components or <template>.", slotBinding$1);
                }

                if (el.slotScope || el.slotTarget) {
                  warn$2("Unexpected mixed usage of different slot syntaxes.", el);
                }

                if (el.scopedSlots) {
                  warn$2("To avoid scope ambiguity, the default slot should also use " + "<template> syntax when there are other named slots.", slotBinding$1);
                }
              } // add the component's children to its default slot

              var slots = el.scopedSlots || (el.scopedSlots = {});
              var ref$1 = getSlotName(slotBinding$1);
              var name$1 = ref$1.name;
              var dynamic$1 = ref$1.dynamic;
              var slotContainer = slots[name$1] = createASTElement('template', [], el);
              slotContainer.slotTarget = name$1;
              slotContainer.slotTargetDynamic = dynamic$1;
              slotContainer.children = el.children.filter(function (c) {
                if (!c.slotScope) {
                  c.parent = slotContainer;
                  return true;
                }
              });
              slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken; // remove children as they are returned from scopedSlots now

              el.children = []; // mark el non-plain so data gets generated

              el.plain = false;
            }
          }
        }
      }

      function getSlotName(binding) {
        var name = binding.name.replace(slotRE, '');

        if (!name) {
          if (binding.name[0] !== '#') {
            name = 'default';
          } else {
            warn$2("v-slot shorthand syntax requires a slot name.", binding);
          }
        }

        return dynamicArgRE.test(name) // dynamic [name]
        ? {
          name: name.slice(1, -1),
          dynamic: true
        } // static name
        : {
          name: "\"" + name + "\"",
          dynamic: false
        };
      } // handle <slot/> outlets


      function processSlotOutlet(el) {
        if (el.tag === 'slot') {
          el.slotName = getBindingAttr(el, 'name');

          if (el.key) {
            warn$2("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.", getRawBindingAttr(el, 'key'));
          }
        }
      }

      function processComponent(el) {
        var binding;

        if (binding = getBindingAttr(el, 'is')) {
          el.component = binding;
        }

        if (getAndRemoveAttr(el, 'inline-template') != null) {
          el.inlineTemplate = true;
        }
      }

      function processAttrs(el) {
        var list = el.attrsList;
        var i, l, name, rawName, value, modifiers, syncGen, isDynamic;

        for (i = 0, l = list.length; i < l; i++) {
          name = rawName = list[i].name;
          value = list[i].value;

          if (dirRE.test(name)) {
            // mark element as dynamic
            el.hasBindings = true; // modifiers

            modifiers = parseModifiers(name.replace(dirRE, '')); // support .foo shorthand syntax for the .prop modifier

            if (modifiers) {
              name = name.replace(modifierRE, '');
            }

            if (bindRE.test(name)) {
              // v-bind
              name = name.replace(bindRE, '');
              value = parseFilters(value);
              isDynamic = dynamicArgRE.test(name);

              if (isDynamic) {
                name = name.slice(1, -1);
              }

              if (value.trim().length === 0) {
                warn$2("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"");
              }

              if (modifiers) {
                if (modifiers.prop && !isDynamic) {
                  name = camelize(name);

                  if (name === 'innerHtml') {
                    name = 'innerHTML';
                  }
                }

                if (modifiers.camel && !isDynamic) {
                  name = camelize(name);
                }

                if (modifiers.sync) {
                  syncGen = genAssignmentCode(value, "$event");

                  if (!isDynamic) {
                    addHandler(el, "update:" + camelize(name), syncGen, null, false, warn$2, list[i]);

                    if (hyphenate(name) !== camelize(name)) {
                      addHandler(el, "update:" + hyphenate(name), syncGen, null, false, warn$2, list[i]);
                    }
                  } else {
                    // handler w/ dynamic event name
                    addHandler(el, "\"update:\"+(" + name + ")", syncGen, null, false, warn$2, list[i], true // dynamic
                    );
                  }
                }
              }

              if (modifiers && modifiers.prop || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
                addProp(el, name, value, list[i], isDynamic);
              } else {
                addAttr(el, name, value, list[i], isDynamic);
              }
            } else if (onRE.test(name)) {
              // v-on
              name = name.replace(onRE, '');
              isDynamic = dynamicArgRE.test(name);

              if (isDynamic) {
                name = name.slice(1, -1);
              }

              addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
            } else {
              // normal directives
              name = name.replace(dirRE, ''); // parse arg

              var argMatch = name.match(argRE);
              var arg = argMatch && argMatch[1];
              isDynamic = false;

              if (arg) {
                name = name.slice(0, -(arg.length + 1));

                if (dynamicArgRE.test(arg)) {
                  arg = arg.slice(1, -1);
                  isDynamic = true;
                }
              }

              addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);

              if (name === 'model') {
                checkForAliasModel(el, value);
              }
            }
          } else {
            // literal attribute
            {
              var res = parseText(value, delimiters);

              if (res) {
                warn$2(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.', list[i]);
              }
            }
            addAttr(el, name, JSON.stringify(value), list[i]); // #6887 firefox doesn't update muted state if set via attribute
            // even immediately after element creation

            if (!el.component && name === 'muted' && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
              addProp(el, name, 'true', list[i]);
            }
          }
        }
      }

      function checkInFor(el) {
        var parent = el;

        while (parent) {
          if (parent["for"] !== undefined) {
            return true;
          }

          parent = parent.parent;
        }

        return false;
      }

      function parseModifiers(name) {
        var match = name.match(modifierRE);

        if (match) {
          var ret = {};
          match.forEach(function (m) {
            ret[m.slice(1)] = true;
          });
          return ret;
        }
      }

      function makeAttrsMap(attrs) {
        var map = {};

        for (var i = 0, l = attrs.length; i < l; i++) {
          if (map[attrs[i].name] && !isIE && !isEdge) {
            warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
          }

          map[attrs[i].name] = attrs[i].value;
        }

        return map;
      } // for script (e.g. type="x/template") or style, do not decode content


      function isTextTag(el) {
        return el.tag === 'script' || el.tag === 'style';
      }

      function isForbiddenTag(el) {
        return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
      }

      var ieNSBug = /^xmlns:NS\d+/;
      var ieNSPrefix = /^NS\d+:/;
      /* istanbul ignore next */

      function guardIESVGBug(attrs) {
        var res = [];

        for (var i = 0; i < attrs.length; i++) {
          var attr = attrs[i];

          if (!ieNSBug.test(attr.name)) {
            attr.name = attr.name.replace(ieNSPrefix, '');
            res.push(attr);
          }
        }

        return res;
      }

      function checkForAliasModel(el, value) {
        var _el = el;

        while (_el) {
          if (_el["for"] && _el.alias === value) {
            warn$2("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.", el.rawAttrsMap['v-model']);
          }

          _el = _el.parent;
        }
      }
      /*  */


      function preTransformNode(el, options) {
        if (el.tag === 'input') {
          var map = el.attrsMap;

          if (!map['v-model']) {
            return;
          }

          var typeBinding;

          if (map[':type'] || map['v-bind:type']) {
            typeBinding = getBindingAttr(el, 'type');
          }

          if (!map.type && !typeBinding && map['v-bind']) {
            typeBinding = "(" + map['v-bind'] + ").type";
          }

          if (typeBinding) {
            var ifCondition = getAndRemoveAttr(el, 'v-if', true);
            var ifConditionExtra = ifCondition ? "&&(" + ifCondition + ")" : "";
            var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
            var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true); // 1. checkbox

            var branch0 = cloneASTElement(el); // process for on the main node

            processFor(branch0);
            addRawAttr(branch0, 'type', 'checkbox');
            processElement(branch0, options);
            branch0.processed = true; // prevent it from double-processed

            branch0["if"] = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
            addIfCondition(branch0, {
              exp: branch0["if"],
              block: branch0
            }); // 2. add radio else-if condition

            var branch1 = cloneASTElement(el);
            getAndRemoveAttr(branch1, 'v-for', true);
            addRawAttr(branch1, 'type', 'radio');
            processElement(branch1, options);
            addIfCondition(branch0, {
              exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
              block: branch1
            }); // 3. other

            var branch2 = cloneASTElement(el);
            getAndRemoveAttr(branch2, 'v-for', true);
            addRawAttr(branch2, ':type', typeBinding);
            processElement(branch2, options);
            addIfCondition(branch0, {
              exp: ifCondition,
              block: branch2
            });

            if (hasElse) {
              branch0["else"] = true;
            } else if (elseIfCondition) {
              branch0.elseif = elseIfCondition;
            }

            return branch0;
          }
        }
      }

      function cloneASTElement(el) {
        return createASTElement(el.tag, el.attrsList.slice(), el.parent);
      }

      var model$1 = {
        preTransformNode: preTransformNode
      };
      var modules$1 = [klass$1, style$1, model$1];
      /*  */

      function text(el, dir) {
        if (dir.value) {
          addProp(el, 'textContent', "_s(" + dir.value + ")", dir);
        }
      }
      /*  */


      function html(el, dir) {
        if (dir.value) {
          addProp(el, 'innerHTML', "_s(" + dir.value + ")", dir);
        }
      }

      var directives$1 = {
        model: model,
        text: text,
        html: html
      };
      /*  */

      var baseOptions = {
        expectHTML: true,
        modules: modules$1,
        directives: directives$1,
        isPreTag: isPreTag,
        isUnaryTag: isUnaryTag,
        mustUseProp: mustUseProp,
        canBeLeftOpenTag: canBeLeftOpenTag,
        isReservedTag: isReservedTag,
        getTagNamespace: getTagNamespace,
        staticKeys: genStaticKeys(modules$1)
      };
      /*  */

      var isStaticKey;
      var isPlatformReservedTag;
      var genStaticKeysCached = cached(genStaticKeys$1);
      /**
       * Goal of the optimizer: walk the generated template AST tree
       * and detect sub-trees that are purely static, i.e. parts of
       * the DOM that never needs to change.
       *
       * Once we detect these sub-trees, we can:
       *
       * 1. Hoist them into constants, so that we no longer need to
       *    create fresh nodes for them on each re-render;
       * 2. Completely skip them in the patching process.
       */

      function optimize(root, options) {
        if (!root) {
          return;
        }

        isStaticKey = genStaticKeysCached(options.staticKeys || '');
        isPlatformReservedTag = options.isReservedTag || no; // first pass: mark all non-static nodes.

        markStatic$1(root); // second pass: mark static roots.

        markStaticRoots(root, false);
      }

      function genStaticKeys$1(keys) {
        return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' + (keys ? ',' + keys : ''));
      }

      function markStatic$1(node) {
        node["static"] = isStatic(node);

        if (node.type === 1) {
          // do not make component slot content static. this avoids
          // 1. components not able to mutate slot nodes
          // 2. static slot content fails for hot-reloading
          if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
            return;
          }

          for (var i = 0, l = node.children.length; i < l; i++) {
            var child = node.children[i];
            markStatic$1(child);

            if (!child["static"]) {
              node["static"] = false;
            }
          }

          if (node.ifConditions) {
            for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
              var block = node.ifConditions[i$1].block;
              markStatic$1(block);

              if (!block["static"]) {
                node["static"] = false;
              }
            }
          }
        }
      }

      function markStaticRoots(node, isInFor) {
        if (node.type === 1) {
          if (node["static"] || node.once) {
            node.staticInFor = isInFor;
          } // For a node to qualify as a static root, it should have children that
          // are not just static text. Otherwise the cost of hoisting out will
          // outweigh the benefits and it's better off to just always render it fresh.


          if (node["static"] && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
            node.staticRoot = true;
            return;
          } else {
            node.staticRoot = false;
          }

          if (node.children) {
            for (var i = 0, l = node.children.length; i < l; i++) {
              markStaticRoots(node.children[i], isInFor || !!node["for"]);
            }
          }

          if (node.ifConditions) {
            for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
              markStaticRoots(node.ifConditions[i$1].block, isInFor);
            }
          }
        }
      }

      function isStatic(node) {
        if (node.type === 2) {
          // expression
          return false;
        }

        if (node.type === 3) {
          // text
          return true;
        }

        return !!(node.pre || !node.hasBindings && // no dynamic bindings
        !node["if"] && !node["for"] && // not v-if or v-for or v-else
        !isBuiltInTag(node.tag) && // not a built-in
        isPlatformReservedTag(node.tag) && // not a component
        !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
      }

      function isDirectChildOfTemplateFor(node) {
        while (node.parent) {
          node = node.parent;

          if (node.tag !== 'template') {
            return false;
          }

          if (node["for"]) {
            return true;
          }
        }

        return false;
      }
      /*  */


      var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
      var fnInvokeRE = /\([^)]*?\);*$/;
      var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/; // KeyboardEvent.keyCode aliases

      var keyCodes = {
        esc: 27,
        tab: 9,
        enter: 13,
        space: 32,
        up: 38,
        left: 37,
        right: 39,
        down: 40,
        'delete': [8, 46]
      }; // KeyboardEvent.key aliases

      var keyNames = {
        // #7880: IE11 and Edge use `Esc` for Escape key name.
        esc: ['Esc', 'Escape'],
        tab: 'Tab',
        enter: 'Enter',
        // #9112: IE11 uses `Spacebar` for Space key name.
        space: [' ', 'Spacebar'],
        // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
        up: ['Up', 'ArrowUp'],
        left: ['Left', 'ArrowLeft'],
        right: ['Right', 'ArrowRight'],
        down: ['Down', 'ArrowDown'],
        // #9112: IE11 uses `Del` for Delete key name.
        'delete': ['Backspace', 'Delete', 'Del']
      }; // #4868: modifiers that prevent the execution of the listener
      // need to explicitly return null so that we can determine whether to remove
      // the listener for .once

      var genGuard = function genGuard(condition) {
        return "if(" + condition + ")return null;";
      };

      var modifierCode = {
        stop: '$event.stopPropagation();',
        prevent: '$event.preventDefault();',
        self: genGuard("$event.target !== $event.currentTarget"),
        ctrl: genGuard("!$event.ctrlKey"),
        shift: genGuard("!$event.shiftKey"),
        alt: genGuard("!$event.altKey"),
        meta: genGuard("!$event.metaKey"),
        left: genGuard("'button' in $event && $event.button !== 0"),
        middle: genGuard("'button' in $event && $event.button !== 1"),
        right: genGuard("'button' in $event && $event.button !== 2")
      };

      function genHandlers(events, isNative) {
        var prefix = isNative ? 'nativeOn:' : 'on:';
        var staticHandlers = "";
        var dynamicHandlers = "";

        for (var name in events) {
          var handlerCode = genHandler(events[name]);

          if (events[name] && events[name].dynamic) {
            dynamicHandlers += name + "," + handlerCode + ",";
          } else {
            staticHandlers += "\"" + name + "\":" + handlerCode + ",";
          }
        }

        staticHandlers = "{" + staticHandlers.slice(0, -1) + "}";

        if (dynamicHandlers) {
          return prefix + "_d(" + staticHandlers + ",[" + dynamicHandlers.slice(0, -1) + "])";
        } else {
          return prefix + staticHandlers;
        }
      }

      function genHandler(handler) {
        if (!handler) {
          return 'function(){}';
        }

        if (Array.isArray(handler)) {
          return "[" + handler.map(function (handler) {
            return genHandler(handler);
          }).join(',') + "]";
        }

        var isMethodPath = simplePathRE.test(handler.value);
        var isFunctionExpression = fnExpRE.test(handler.value);
        var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

        if (!handler.modifiers) {
          if (isMethodPath || isFunctionExpression) {
            return handler.value;
          }

          return "function($event){" + (isFunctionInvocation ? "return " + handler.value : handler.value) + "}"; // inline statement
        } else {
          var code = '';
          var genModifierCode = '';
          var keys = [];

          for (var key in handler.modifiers) {
            if (modifierCode[key]) {
              genModifierCode += modifierCode[key]; // left/right

              if (keyCodes[key]) {
                keys.push(key);
              }
            } else if (key === 'exact') {
              var modifiers = handler.modifiers;
              genModifierCode += genGuard(['ctrl', 'shift', 'alt', 'meta'].filter(function (keyModifier) {
                return !modifiers[keyModifier];
              }).map(function (keyModifier) {
                return "$event." + keyModifier + "Key";
              }).join('||'));
            } else {
              keys.push(key);
            }
          }

          if (keys.length) {
            code += genKeyFilter(keys);
          } // Make sure modifiers like prevent and stop get executed after key filtering


          if (genModifierCode) {
            code += genModifierCode;
          }

          var handlerCode = isMethodPath ? "return " + handler.value + "($event)" : isFunctionExpression ? "return (" + handler.value + ")($event)" : isFunctionInvocation ? "return " + handler.value : handler.value;
          return "function($event){" + code + handlerCode + "}";
        }
      }

      function genKeyFilter(keys) {
        return (// make sure the key filters only apply to KeyboardEvents
          // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
          // key events that do not have keyCode property...
          "if(!$event.type.indexOf('key')&&" + keys.map(genFilterCode).join('&&') + ")return null;"
        );
      }

      function genFilterCode(key) {
        var keyVal = parseInt(key, 10);

        if (keyVal) {
          return "$event.keyCode!==" + keyVal;
        }

        var keyCode = keyCodes[key];
        var keyName = keyNames[key];
        return "_k($event.keyCode," + JSON.stringify(key) + "," + JSON.stringify(keyCode) + "," + "$event.key," + "" + JSON.stringify(keyName) + ")";
      }
      /*  */


      function on(el, dir) {
        if (dir.modifiers) {
          warn("v-on without argument does not support modifiers.");
        }

        el.wrapListeners = function (code) {
          return "_g(" + code + "," + dir.value + ")";
        };
      }
      /*  */


      function bind$1(el, dir) {
        el.wrapData = function (code) {
          return "_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")";
        };
      }
      /*  */


      var baseDirectives = {
        on: on,
        bind: bind$1,
        cloak: noop
      };
      /*  */

      var CodegenState = function CodegenState(options) {
        this.options = options;
        this.warn = options.warn || baseWarn;
        this.transforms = pluckModuleFunction(options.modules, 'transformCode');
        this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
        this.directives = extend(extend({}, baseDirectives), options.directives);
        var isReservedTag = options.isReservedTag || no;

        this.maybeComponent = function (el) {
          return !!el.component || !isReservedTag(el.tag);
        };

        this.onceId = 0;
        this.staticRenderFns = [];
        this.pre = false;
      };

      function generate(ast, options) {
        var state = new CodegenState(options);
        var code = ast ? genElement(ast, state) : '_c("div")';
        return {
          render: "with(this){return " + code + "}",
          staticRenderFns: state.staticRenderFns
        };
      }

      function genElement(el, state) {
        if (el.parent) {
          el.pre = el.pre || el.parent.pre;
        }

        if (el.staticRoot && !el.staticProcessed) {
          return genStatic(el, state);
        } else if (el.once && !el.onceProcessed) {
          return genOnce(el, state);
        } else if (el["for"] && !el.forProcessed) {
          return genFor(el, state);
        } else if (el["if"] && !el.ifProcessed) {
          return genIf(el, state);
        } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
          return genChildren(el, state) || 'void 0';
        } else if (el.tag === 'slot') {
          return genSlot(el, state);
        } else {
          // component or element
          var code;

          if (el.component) {
            code = genComponent(el.component, el, state);
          } else {
            var data;

            if (!el.plain || el.pre && state.maybeComponent(el)) {
              data = genData$2(el, state);
            }

            var children = el.inlineTemplate ? null : genChildren(el, state, true);
            code = "_c('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
          } // module transforms


          for (var i = 0; i < state.transforms.length; i++) {
            code = state.transforms[i](el, code);
          }

          return code;
        }
      } // hoist static sub-trees out


      function genStatic(el, state) {
        el.staticProcessed = true; // Some elements (templates) need to behave differently inside of a v-pre
        // node.  All pre nodes are static roots, so we can use this as a location to
        // wrap a state change and reset it upon exiting the pre node.

        var originalPreState = state.pre;

        if (el.pre) {
          state.pre = el.pre;
        }

        state.staticRenderFns.push("with(this){return " + genElement(el, state) + "}");
        state.pre = originalPreState;
        return "_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")";
      } // v-once


      function genOnce(el, state) {
        el.onceProcessed = true;

        if (el["if"] && !el.ifProcessed) {
          return genIf(el, state);
        } else if (el.staticInFor) {
          var key = '';
          var parent = el.parent;

          while (parent) {
            if (parent["for"]) {
              key = parent.key;
              break;
            }

            parent = parent.parent;
          }

          if (!key) {
            state.warn("v-once can only be used inside v-for that is keyed. ", el.rawAttrsMap['v-once']);
            return genElement(el, state);
          }

          return "_o(" + genElement(el, state) + "," + state.onceId++ + "," + key + ")";
        } else {
          return genStatic(el, state);
        }
      }

      function genIf(el, state, altGen, altEmpty) {
        el.ifProcessed = true; // avoid recursion

        return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
      }

      function genIfConditions(conditions, state, altGen, altEmpty) {
        if (!conditions.length) {
          return altEmpty || '_e()';
        }

        var condition = conditions.shift();

        if (condition.exp) {
          return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions, state, altGen, altEmpty);
        } else {
          return "" + genTernaryExp(condition.block);
        } // v-if with v-once should generate code like (a)?_m(0):_m(1)


        function genTernaryExp(el) {
          return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
        }
      }

      function genFor(el, state, altGen, altHelper) {
        var exp = el["for"];
        var alias = el.alias;
        var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
        var iterator2 = el.iterator2 ? "," + el.iterator2 : '';

        if (state.maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key) {
          state.warn("<" + el.tag + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", el.rawAttrsMap['v-for'], true
          /* tip */
          );
        }

        el.forProcessed = true; // avoid recursion

        return (altHelper || '_l') + "((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + (altGen || genElement)(el, state) + '})';
      }

      function genData$2(el, state) {
        var data = '{'; // directives first.
        // directives may mutate the el's other properties before they are generated.

        var dirs = genDirectives(el, state);

        if (dirs) {
          data += dirs + ',';
        } // key


        if (el.key) {
          data += "key:" + el.key + ",";
        } // ref


        if (el.ref) {
          data += "ref:" + el.ref + ",";
        }

        if (el.refInFor) {
          data += "refInFor:true,";
        } // pre


        if (el.pre) {
          data += "pre:true,";
        } // record original tag name for components using "is" attribute


        if (el.component) {
          data += "tag:\"" + el.tag + "\",";
        } // module data generation functions


        for (var i = 0; i < state.dataGenFns.length; i++) {
          data += state.dataGenFns[i](el);
        } // attributes


        if (el.attrs) {
          data += "attrs:" + genProps(el.attrs) + ",";
        } // DOM props


        if (el.props) {
          data += "domProps:" + genProps(el.props) + ",";
        } // event handlers


        if (el.events) {
          data += genHandlers(el.events, false) + ",";
        }

        if (el.nativeEvents) {
          data += genHandlers(el.nativeEvents, true) + ",";
        } // slot target
        // only for non-scoped slots


        if (el.slotTarget && !el.slotScope) {
          data += "slot:" + el.slotTarget + ",";
        } // scoped slots


        if (el.scopedSlots) {
          data += genScopedSlots(el, el.scopedSlots, state) + ",";
        } // component v-model


        if (el.model) {
          data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
        } // inline-template


        if (el.inlineTemplate) {
          var inlineTemplate = genInlineTemplate(el, state);

          if (inlineTemplate) {
            data += inlineTemplate + ",";
          }
        }

        data = data.replace(/,$/, '') + '}'; // v-bind dynamic argument wrap
        // v-bind with dynamic arguments must be applied using the same v-bind object
        // merge helper so that class/style/mustUseProp attrs are handled correctly.

        if (el.dynamicAttrs) {
          data = "_b(" + data + ",\"" + el.tag + "\"," + genProps(el.dynamicAttrs) + ")";
        } // v-bind data wrap


        if (el.wrapData) {
          data = el.wrapData(data);
        } // v-on data wrap


        if (el.wrapListeners) {
          data = el.wrapListeners(data);
        }

        return data;
      }

      function genDirectives(el, state) {
        var dirs = el.directives;

        if (!dirs) {
          return;
        }

        var res = 'directives:[';
        var hasRuntime = false;
        var i, l, dir, needRuntime;

        for (i = 0, l = dirs.length; i < l; i++) {
          dir = dirs[i];
          needRuntime = true;
          var gen = state.directives[dir.name];

          if (gen) {
            // compile-time directive that manipulates AST.
            // returns true if it also needs a runtime counterpart.
            needRuntime = !!gen(el, dir, state.warn);
          }

          if (needRuntime) {
            hasRuntime = true;
            res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : '') + (dir.arg ? ",arg:" + (dir.isDynamicArg ? dir.arg : "\"" + dir.arg + "\"") : '') + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : '') + "},";
          }
        }

        if (hasRuntime) {
          return res.slice(0, -1) + ']';
        }
      }

      function genInlineTemplate(el, state) {
        var ast = el.children[0];

        if (el.children.length !== 1 || ast.type !== 1) {
          state.warn('Inline-template components must have exactly one child element.', {
            start: el.start
          });
        }

        if (ast && ast.type === 1) {
          var inlineRenderFns = generate(ast, state.options);
          return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
            return "function(){" + code + "}";
          }).join(',') + "]}";
        }
      }

      function genScopedSlots(el, slots, state) {
        // by default scoped slots are considered "stable", this allows child
        // components with only scoped slots to skip forced updates from parent.
        // but in some cases we have to bail-out of this optimization
        // for example if the slot contains dynamic names, has v-if or v-for on them...
        var needsForceUpdate = el["for"] || Object.keys(slots).some(function (key) {
          var slot = slots[key];
          return slot.slotTargetDynamic || slot["if"] || slot["for"] || containsSlotChild(slot) // is passing down slot from parent which may be dynamic
          ;
        }); // #9534: if a component with scoped slots is inside a conditional branch,
        // it's possible for the same component to be reused but with different
        // compiled slot content. To avoid that, we generate a unique key based on
        // the generated code of all the slot contents.

        var needsKey = !!el["if"]; // OR when it is inside another scoped slot or v-for (the reactivity may be
        // disconnected due to the intermediate scope variable)
        // #9438, #9506
        // TODO: this can be further optimized by properly analyzing in-scope bindings
        // and skip force updating ones that do not actually use scope variables.

        if (!needsForceUpdate) {
          var parent = el.parent;

          while (parent) {
            if (parent.slotScope && parent.slotScope !== emptySlotScopeToken || parent["for"]) {
              needsForceUpdate = true;
              break;
            }

            if (parent["if"]) {
              needsKey = true;
            }

            parent = parent.parent;
          }
        }

        var generatedSlots = Object.keys(slots).map(function (key) {
          return genScopedSlot(slots[key], state);
        }).join(',');
        return "scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? ",null,false," + hash(generatedSlots) : "") + ")";
      }

      function hash(str) {
        var hash = 5381;
        var i = str.length;

        while (i) {
          hash = hash * 33 ^ str.charCodeAt(--i);
        }

        return hash >>> 0;
      }

      function containsSlotChild(el) {
        if (el.type === 1) {
          if (el.tag === 'slot') {
            return true;
          }

          return el.children.some(containsSlotChild);
        }

        return false;
      }

      function genScopedSlot(el, state) {
        var isLegacySyntax = el.attrsMap['slot-scope'];

        if (el["if"] && !el.ifProcessed && !isLegacySyntax) {
          return genIf(el, state, genScopedSlot, "null");
        }

        if (el["for"] && !el.forProcessed) {
          return genFor(el, state, genScopedSlot);
        }

        var slotScope = el.slotScope === emptySlotScopeToken ? "" : String(el.slotScope);
        var fn = "function(" + slotScope + "){" + "return " + (el.tag === 'template' ? el["if"] && isLegacySyntax ? "(" + el["if"] + ")?" + (genChildren(el, state) || 'undefined') + ":undefined" : genChildren(el, state) || 'undefined' : genElement(el, state)) + "}"; // reverse proxy v-slot without scope on this.$slots

        var reverseProxy = slotScope ? "" : ",proxy:true";
        return "{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}";
      }

      function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
        var children = el.children;

        if (children.length) {
          var el$1 = children[0]; // optimize single v-for

          if (children.length === 1 && el$1["for"] && el$1.tag !== 'template' && el$1.tag !== 'slot') {
            var normalizationType = checkSkip ? state.maybeComponent(el$1) ? ",1" : ",0" : "";
            return "" + (altGenElement || genElement)(el$1, state) + normalizationType;
          }

          var normalizationType$1 = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
          var gen = altGenNode || genNode;
          return "[" + children.map(function (c) {
            return gen(c, state);
          }).join(',') + "]" + (normalizationType$1 ? "," + normalizationType$1 : '');
        }
      } // determine the normalization needed for the children array.
      // 0: no normalization needed
      // 1: simple normalization needed (possible 1-level deep nested array)
      // 2: full normalization needed


      function getNormalizationType(children, maybeComponent) {
        var res = 0;

        for (var i = 0; i < children.length; i++) {
          var el = children[i];

          if (el.type !== 1) {
            continue;
          }

          if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function (c) {
            return needsNormalization(c.block);
          })) {
            res = 2;
            break;
          }

          if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function (c) {
            return maybeComponent(c.block);
          })) {
            res = 1;
          }
        }

        return res;
      }

      function needsNormalization(el) {
        return el["for"] !== undefined || el.tag === 'template' || el.tag === 'slot';
      }

      function genNode(node, state) {
        if (node.type === 1) {
          return genElement(node, state);
        } else if (node.type === 3 && node.isComment) {
          return genComment(node);
        } else {
          return genText(node);
        }
      }

      function genText(text) {
        return "_v(" + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
        : transformSpecialNewlines(JSON.stringify(text.text))) + ")";
      }

      function genComment(comment) {
        return "_e(" + JSON.stringify(comment.text) + ")";
      }

      function genSlot(el, state) {
        var slotName = el.slotName || '"default"';
        var children = genChildren(el, state);
        var res = "_t(" + slotName + (children ? "," + children : '');
        var attrs = el.attrs || el.dynamicAttrs ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) {
          return {
            // slot props are camelized
            name: camelize(attr.name),
            value: attr.value,
            dynamic: attr.dynamic
          };
        })) : null;
        var bind$$1 = el.attrsMap['v-bind'];

        if ((attrs || bind$$1) && !children) {
          res += ",null";
        }

        if (attrs) {
          res += "," + attrs;
        }

        if (bind$$1) {
          res += (attrs ? '' : ',null') + "," + bind$$1;
        }

        return res + ')';
      } // componentName is el.component, take it as argument to shun flow's pessimistic refinement


      function genComponent(componentName, el, state) {
        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        return "_c(" + componentName + "," + genData$2(el, state) + (children ? "," + children : '') + ")";
      }

      function genProps(props) {
        var staticProps = "";
        var dynamicProps = "";

        for (var i = 0; i < props.length; i++) {
          var prop = props[i];
          var value = transformSpecialNewlines(prop.value);

          if (prop.dynamic) {
            dynamicProps += prop.name + "," + value + ",";
          } else {
            staticProps += "\"" + prop.name + "\":" + value + ",";
          }
        }

        staticProps = "{" + staticProps.slice(0, -1) + "}";

        if (dynamicProps) {
          return "_d(" + staticProps + ",[" + dynamicProps.slice(0, -1) + "])";
        } else {
          return staticProps;
        }
      } // #3895, #4268


      function transformSpecialNewlines(text) {
        return text.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
      }
      /*  */
      // these keywords should not appear inside expressions, but operators like
      // typeof, instanceof and in are allowed


      var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b'); // these unary operators should not be used as property/method names

      var unaryOperatorsRE = new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)'); // strip strings in expressions

      var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g; // detect problematic expressions in a template

      function detectErrors(ast, warn) {
        if (ast) {
          checkNode(ast, warn);
        }
      }

      function checkNode(node, warn) {
        if (node.type === 1) {
          for (var name in node.attrsMap) {
            if (dirRE.test(name)) {
              var value = node.attrsMap[name];

              if (value) {
                var range = node.rawAttrsMap[name];

                if (name === 'v-for') {
                  checkFor(node, "v-for=\"" + value + "\"", warn, range);
                } else if (name === 'v-slot' || name[0] === '#') {
                  checkFunctionParameterExpression(value, name + "=\"" + value + "\"", warn, range);
                } else if (onRE.test(name)) {
                  checkEvent(value, name + "=\"" + value + "\"", warn, range);
                } else {
                  checkExpression(value, name + "=\"" + value + "\"", warn, range);
                }
              }
            }
          }

          if (node.children) {
            for (var i = 0; i < node.children.length; i++) {
              checkNode(node.children[i], warn);
            }
          }
        } else if (node.type === 2) {
          checkExpression(node.expression, node.text, warn, node);
        }
      }

      function checkEvent(exp, text, warn, range) {
        var stripped = exp.replace(stripStringRE, '');
        var keywordMatch = stripped.match(unaryOperatorsRE);

        if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
          warn("avoid using JavaScript unary operator as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim(), range);
        }

        checkExpression(exp, text, warn, range);
      }

      function checkFor(node, text, warn, range) {
        checkExpression(node["for"] || '', text, warn, range);
        checkIdentifier(node.alias, 'v-for alias', text, warn, range);
        checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
        checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
      }

      function checkIdentifier(ident, type, text, warn, range) {
        if (typeof ident === 'string') {
          try {
            new Function("var " + ident + "=_");
          } catch (e) {
            warn("invalid " + type + " \"" + ident + "\" in expression: " + text.trim(), range);
          }
        }
      }

      function checkExpression(exp, text, warn, range) {
        try {
          new Function("return " + exp);
        } catch (e) {
          var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);

          if (keywordMatch) {
            warn("avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\"\n  Raw expression: " + text.trim(), range);
          } else {
            warn("invalid expression: " + e.message + " in\n\n" + "    " + exp + "\n\n" + "  Raw expression: " + text.trim() + "\n", range);
          }
        }
      }

      function checkFunctionParameterExpression(exp, text, warn, range) {
        try {
          new Function(exp, '');
        } catch (e) {
          warn("invalid function parameter expression: " + e.message + " in\n\n" + "    " + exp + "\n\n" + "  Raw expression: " + text.trim() + "\n", range);
        }
      }
      /*  */


      var range = 2;

      function generateCodeFrame(source, start, end) {
        if (start === void 0) start = 0;
        if (end === void 0) end = source.length;
        var lines = source.split(/\r?\n/);
        var count = 0;
        var res = [];

        for (var i = 0; i < lines.length; i++) {
          count += lines[i].length + 1;

          if (count >= start) {
            for (var j = i - range; j <= i + range || end > count; j++) {
              if (j < 0 || j >= lines.length) {
                continue;
              }

              res.push("" + (j + 1) + repeat$1(" ", 3 - String(j + 1).length) + "|  " + lines[j]);
              var lineLength = lines[j].length;

              if (j === i) {
                // push underline
                var pad = start - (count - lineLength) + 1;
                var length = end > count ? lineLength - pad : end - start;
                res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
              } else if (j > i) {
                if (end > count) {
                  var length$1 = Math.min(end - count, lineLength);
                  res.push("   |  " + repeat$1("^", length$1));
                }

                count += lineLength + 1;
              }
            }

            break;
          }
        }

        return res.join('\n');
      }

      function repeat$1(str, n) {
        var result = '';

        if (n > 0) {
          while (true) {
            // eslint-disable-line
            if (n & 1) {
              result += str;
            }

            n >>>= 1;

            if (n <= 0) {
              break;
            }

            str += str;
          }
        }

        return result;
      }
      /*  */


      function createFunction(code, errors) {
        try {
          return new Function(code);
        } catch (err) {
          errors.push({
            err: err,
            code: code
          });
          return noop;
        }
      }

      function createCompileToFunctionFn(compile) {
        var cache = Object.create(null);
        return function compileToFunctions(template, options, vm) {
          options = extend({}, options);
          var warn$$1 = options.warn || warn;
          delete options.warn;
          /* istanbul ignore if */

          {
            // detect possible CSP restriction
            try {
              new Function('return 1');
            } catch (e) {
              if (e.toString().match(/unsafe-eval|CSP/)) {
                warn$$1('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
              }
            }
          } // check cache

          var key = options.delimiters ? String(options.delimiters) + template : template;

          if (cache[key]) {
            return cache[key];
          } // compile


          var compiled = compile(template, options); // check compilation errors/tips

          {
            if (compiled.errors && compiled.errors.length) {
              if (options.outputSourceRange) {
                compiled.errors.forEach(function (e) {
                  warn$$1("Error compiling template:\n\n" + e.msg + "\n\n" + generateCodeFrame(template, e.start, e.end), vm);
                });
              } else {
                warn$$1("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function (e) {
                  return "- " + e;
                }).join('\n') + '\n', vm);
              }
            }

            if (compiled.tips && compiled.tips.length) {
              if (options.outputSourceRange) {
                compiled.tips.forEach(function (e) {
                  return tip(e.msg, vm);
                });
              } else {
                compiled.tips.forEach(function (msg) {
                  return tip(msg, vm);
                });
              }
            }
          } // turn code into functions

          var res = {};
          var fnGenErrors = [];
          res.render = createFunction(compiled.render, fnGenErrors);
          res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
            return createFunction(code, fnGenErrors);
          }); // check function generation errors.
          // this should only happen if there is a bug in the compiler itself.
          // mostly for codegen development use

          /* istanbul ignore if */

          {
            if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
              warn$$1("Failed to generate render function:\n\n" + fnGenErrors.map(function (ref) {
                var err = ref.err;
                var code = ref.code;
                return err.toString() + " in\n\n" + code + "\n";
              }).join('\n'), vm);
            }
          }
          return cache[key] = res;
        };
      }
      /*  */


      function createCompilerCreator(baseCompile) {
        return function createCompiler(baseOptions) {
          function compile(template, options) {
            var finalOptions = Object.create(baseOptions);
            var errors = [];
            var tips = [];

            var warn = function warn(msg, range, tip) {
              (tip ? tips : errors).push(msg);
            };

            if (options) {
              if (options.outputSourceRange) {
                // $flow-disable-line
                var leadingSpaceLength = template.match(/^\s*/)[0].length;

                warn = function warn(msg, range, tip) {
                  var data = {
                    msg: msg
                  };

                  if (range) {
                    if (range.start != null) {
                      data.start = range.start + leadingSpaceLength;
                    }

                    if (range.end != null) {
                      data.end = range.end + leadingSpaceLength;
                    }
                  }

                  (tip ? tips : errors).push(data);
                };
              } // merge custom modules


              if (options.modules) {
                finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
              } // merge custom directives


              if (options.directives) {
                finalOptions.directives = extend(Object.create(baseOptions.directives || null), options.directives);
              } // copy other options


              for (var key in options) {
                if (key !== 'modules' && key !== 'directives') {
                  finalOptions[key] = options[key];
                }
              }
            }

            finalOptions.warn = warn;
            var compiled = baseCompile(template.trim(), finalOptions);
            {
              detectErrors(compiled.ast, warn);
            }
            compiled.errors = errors;
            compiled.tips = tips;
            return compiled;
          }

          return {
            compile: compile,
            compileToFunctions: createCompileToFunctionFn(compile)
          };
        };
      }
      /*  */
      // `createCompilerCreator` allows creating compilers that use alternative
      // parser/optimizer/codegen, e.g the SSR optimizing compiler.
      // Here we just export a default compiler using the default parts.


      var createCompiler = createCompilerCreator(function baseCompile(template, options) {
        var ast = parse(template.trim(), options);

        if (options.optimize !== false) {
          optimize(ast, options);
        }

        var code = generate(ast, options);
        return {
          ast: ast,
          render: code.render,
          staticRenderFns: code.staticRenderFns
        };
      });
      /*  */

      var ref$1 = createCompiler(baseOptions);
      var compile = ref$1.compile;
      var compileToFunctions = ref$1.compileToFunctions;
      /*  */
      // check whether current browser encodes a char inside attribute values

      var div;

      function getShouldDecode(href) {
        div = div || document.createElement('div');
        div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
        return div.innerHTML.indexOf('&#10;') > 0;
      } // #3663: IE encodes newlines inside attribute values while other browsers don't


      var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false; // #6828: chrome encodes content in a[href]

      var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;
      /*  */

      var idToTemplate = cached(function (id) {
        var el = query(id);
        return el && el.innerHTML;
      });
      var mount = Vue.prototype.$mount;

      Vue.prototype.$mount = function (el, hydrating) {
        el = el && query(el);
        /* istanbul ignore if */

        if (el === document.body || el === document.documentElement) {
          warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
          return this;
        }

        var options = this.$options; // resolve template/el and convert to render function

        if (!options.render) {
          var template = options.template;

          if (template) {
            if (typeof template === 'string') {
              if (template.charAt(0) === '#') {
                template = idToTemplate(template);
                /* istanbul ignore if */

                if (!template) {
                  warn("Template element not found or is empty: " + options.template, this);
                }
              }
            } else if (template.nodeType) {
              template = template.innerHTML;
            } else {
              {
                warn('invalid template option:' + template, this);
              }
              return this;
            }
          } else if (el) {
            template = getOuterHTML(el);
          }

          if (template) {
            /* istanbul ignore if */
            if (config.performance && mark) {
              mark('compile');
            }

            var ref = compileToFunctions(template, {
              outputSourceRange: "development" !== 'production',
              shouldDecodeNewlines: shouldDecodeNewlines,
              shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
              delimiters: options.delimiters,
              comments: options.comments
            }, this);
            var render = ref.render;
            var staticRenderFns = ref.staticRenderFns;
            options.render = render;
            options.staticRenderFns = staticRenderFns;
            /* istanbul ignore if */

            if (config.performance && mark) {
              mark('compile end');
              measure("vue " + this._name + " compile", 'compile', 'compile end');
            }
          }
        }

        return mount.call(this, el, hydrating);
      };
      /**
       * Get outerHTML of elements, taking care
       * of SVG elements in IE as well.
       */


      function getOuterHTML(el) {
        if (el.outerHTML) {
          return el.outerHTML;
        } else {
          var container = document.createElement('div');
          container.appendChild(el.cloneNode(true));
          return container.innerHTML;
        }
      }

      Vue.compile = compileToFunctions;
      module.exports = Vue;
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(
    /*! ./../../webpack/buildin/global.js */
    "./node_modules/webpack/buildin/global.js"), __webpack_require__(
    /*! ./../../timers-browserify/main.js */
    "./node_modules/timers-browserify/main.js").setImmediate);
    /***/
  },

  /***/
  "./node_modules/vue/dist/vue.common.js":
  /*!*********************************************!*\
    !*** ./node_modules/vue/dist/vue.common.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesVueDistVueCommonJs(module, exports, __webpack_require__) {
    if (false) {} else {
      module.exports = __webpack_require__(
      /*! ./vue.common.dev.js */
      "./node_modules/vue/dist/vue.common.dev.js");
    }
    /***/

  },

  /***/
  "./node_modules/webpack/buildin/global.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/global.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinGlobalJs(module, exports) {
    var g; // This works in non-strict mode

    g = function () {
      return this;
    }();

    try {
      // This works if eval is allowed (see CSP)
      g = g || new Function("return this")();
    } catch (e) {
      // This works if the window reference is available
      if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
    } // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}


    module.exports = g;
    /***/
  },

  /***/
  0:
  /*!******************************************************************************************************************!*\
    !*** multi ./_assets/js/script.js ./_assets/js/season_gen.js ./_assets/js/text_gen.js ./_assets/sass/style.scss ***!
    \******************************************************************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! /Users/jackellis/Git/gingertronmk1.github.io/_assets/js/script.js */
    "./_assets/js/script.js");

    __webpack_require__(
    /*! /Users/jackellis/Git/gingertronmk1.github.io/_assets/js/season_gen.js */
    "./_assets/js/season_gen.js");

    __webpack_require__(
    /*! /Users/jackellis/Git/gingertronmk1.github.io/_assets/js/text_gen.js */
    "./_assets/js/text_gen.js");

    module.exports = __webpack_require__(
    /*! /Users/jackellis/Git/gingertronmk1.github.io/_assets/sass/style.scss */
    "./_assets/sass/style.scss");
    /***/
  }
  /******/

});
>>>>>>> master
