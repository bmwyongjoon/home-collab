function wP(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function EP(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sE={exports:{}},Id={},oE={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ml=Symbol.for("react.element"),IP=Symbol.for("react.portal"),TP=Symbol.for("react.fragment"),xP=Symbol.for("react.strict_mode"),SP=Symbol.for("react.profiler"),AP=Symbol.for("react.provider"),bP=Symbol.for("react.context"),PP=Symbol.for("react.forward_ref"),kP=Symbol.for("react.suspense"),RP=Symbol.for("react.memo"),CP=Symbol.for("react.lazy"),D_=Symbol.iterator;function NP(t){return t===null||typeof t!="object"?null:(t=D_&&t[D_]||t["@@iterator"],typeof t=="function"?t:null)}var aE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lE=Object.assign,uE={};function Lo(t,e,n){this.props=t,this.context=e,this.refs=uE,this.updater=n||aE}Lo.prototype.isReactComponent={};Lo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Lo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cE(){}cE.prototype=Lo.prototype;function pm(t,e,n){this.props=t,this.context=e,this.refs=uE,this.updater=n||aE}var mm=pm.prototype=new cE;mm.constructor=pm;lE(mm,Lo.prototype);mm.isPureReactComponent=!0;var V_=Array.isArray,dE=Object.prototype.hasOwnProperty,gm={current:null},hE={key:!0,ref:!0,__self:!0,__source:!0};function fE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)dE.call(e,r)&&!hE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ml,type:t,key:s,ref:o,props:i,_owner:gm.current}}function DP(t,e){return{$$typeof:Ml,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ym(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ml}function VP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var O_=/\/+/g;function Gh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?VP(""+t.key):e.toString(36)}function ec(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ml:case IP:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gh(o,0):r,V_(i)?(n="",t!=null&&(n=t.replace(O_,"$&/")+"/"),ec(i,e,n,"",function(c){return c})):i!=null&&(ym(i)&&(i=DP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(O_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",V_(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Gh(s,a);o+=ec(s,e,n,l,i)}else if(l=NP(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Gh(s,a++),o+=ec(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pu(t,e,n){if(t==null)return t;var r=[],i=0;return ec(t,r,"","",function(s){return e.call(n,s,i++)}),r}function OP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rt={current:null},tc={transition:null},MP={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:tc,ReactCurrentOwner:gm};function pE(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Pu,forEach:function(t,e,n){Pu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pu(t,function(){e++}),e},toArray:function(t){return Pu(t,function(e){return e})||[]},only:function(t){if(!ym(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Lo;re.Fragment=TP;re.Profiler=SP;re.PureComponent=pm;re.StrictMode=xP;re.Suspense=kP;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MP;re.act=pE;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=lE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)dE.call(e,l)&&!hE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ml,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:bP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:AP,_context:t},t.Consumer=t};re.createElement=fE;re.createFactory=function(t){var e=fE.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:PP,render:t}};re.isValidElement=ym;re.lazy=function(t){return{$$typeof:CP,_payload:{_status:-1,_result:t},_init:OP}};re.memo=function(t,e){return{$$typeof:RP,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=tc.transition;tc.transition={};try{t()}finally{tc.transition=e}};re.unstable_act=pE;re.useCallback=function(t,e){return Rt.current.useCallback(t,e)};re.useContext=function(t){return Rt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return Rt.current.useDeferredValue(t)};re.useEffect=function(t,e){return Rt.current.useEffect(t,e)};re.useId=function(){return Rt.current.useId()};re.useImperativeHandle=function(t,e,n){return Rt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return Rt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return Rt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return Rt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return Rt.current.useReducer(t,e,n)};re.useRef=function(t){return Rt.current.useRef(t)};re.useState=function(t){return Rt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return Rt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return Rt.current.useTransition()};re.version="18.3.1";oE.exports=re;var j=oE.exports;const Pa=EP(j),LP=wP({__proto__:null,default:Pa},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FP=j,jP=Symbol.for("react.element"),UP=Symbol.for("react.fragment"),BP=Object.prototype.hasOwnProperty,zP=FP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$P={key:!0,ref:!0,__self:!0,__source:!0};function mE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)BP.call(e,r)&&!$P.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:jP,type:t,key:s,ref:o,props:i,_owner:zP.current}}Id.Fragment=UP;Id.jsx=mE;Id.jsxs=mE;sE.exports=Id;var g=sE.exports,gE={exports:{}},Yt={},yE={exports:{}},_E={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(K,X){var ee=K.length;K.push(X);e:for(;0<ee;){var Ie=ee-1>>>1,fe=K[Ie];if(0<i(fe,X))K[Ie]=X,K[ee]=fe,ee=Ie;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var X=K[0],ee=K.pop();if(ee!==X){K[0]=ee;e:for(var Ie=0,fe=K.length,Pe=fe>>>1;Ie<Pe;){var Ut=2*(Ie+1)-1,Bt=K[Ut],zt=Ut+1,ln=K[zt];if(0>i(Bt,ee))zt<fe&&0>i(ln,Bt)?(K[Ie]=ln,K[zt]=ee,Ie=zt):(K[Ie]=Bt,K[Ut]=ee,Ie=Ut);else if(zt<fe&&0>i(ln,ee))K[Ie]=ln,K[zt]=ee,Ie=zt;else break e}}return X}function i(K,X){var ee=K.sortIndex-X.sortIndex;return ee!==0?ee:K.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,m=3,_=!1,S=!1,P=!1,R=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(K){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=K)r(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function A(K){if(P=!1,I(K),!S)if(n(l)!==null)S=!0,ue(L);else{var X=n(c);X!==null&&Xt(A,X.startTime-K)}}function L(K,X){S=!1,P&&(P=!1,T(y),y=-1),_=!0;var ee=m;try{for(I(X),f=n(l);f!==null&&(!(f.expirationTime>X)||K&&!C());){var Ie=f.callback;if(typeof Ie=="function"){f.callback=null,m=f.priorityLevel;var fe=Ie(f.expirationTime<=X);X=t.unstable_now(),typeof fe=="function"?f.callback=fe:f===n(l)&&r(l),I(X)}else r(l);f=n(l)}if(f!==null)var Pe=!0;else{var Ut=n(c);Ut!==null&&Xt(A,Ut.startTime-X),Pe=!1}return Pe}finally{f=null,m=ee,_=!1}}var N=!1,v=null,y=-1,x=5,b=-1;function C(){return!(t.unstable_now()-b<x)}function D(){if(v!==null){var K=t.unstable_now();b=K;var X=!0;try{X=v(!0,K)}finally{X?k():(N=!1,v=null)}}else N=!1}var k;if(typeof w=="function")k=function(){w(D)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,Fn=ot.port2;ot.port1.onmessage=D,k=function(){Fn.postMessage(null)}}else k=function(){R(D,0)};function ue(K){v=K,N||(N=!0,k())}function Xt(K,X){y=R(function(){K(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){S||_||(S=!0,ue(L))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(K){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var ee=m;m=X;try{return K()}finally{m=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,X){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ee=m;m=K;try{return X()}finally{m=ee}},t.unstable_scheduleCallback=function(K,X,ee){var Ie=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Ie+ee:Ie):ee=Ie,K){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=ee+fe,K={id:d++,callback:X,priorityLevel:K,startTime:ee,expirationTime:fe,sortIndex:-1},ee>Ie?(K.sortIndex=ee,e(c,K),n(l)===null&&K===n(c)&&(P?(T(y),y=-1):P=!0,Xt(A,ee-Ie))):(K.sortIndex=fe,e(l,K),S||_||(S=!0,ue(L))),K},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(K){var X=m;return function(){var ee=m;m=X;try{return K.apply(this,arguments)}finally{m=ee}}}})(_E);yE.exports=_E;var qP=yE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WP=j,Gt=qP;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vE=new Set,tl={};function hs(t,e){co(t,e),co(t+"Capture",e)}function co(t,e){for(tl[t]=e,t=0;t<e.length;t++)vE.add(e[t])}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=Object.prototype.hasOwnProperty,KP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,M_={},L_={};function GP(t){return Uf.call(L_,t)?!0:Uf.call(M_,t)?!1:KP.test(t)?L_[t]=!0:(M_[t]=!0,!1)}function HP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function QP(t,e,n,r){if(e===null||typeof e>"u"||HP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var _m=/[\-:]([a-z])/g;function vm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_m,vm);ht[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_m,vm);ht[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_m,vm);ht[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function wm(t,e,n,r){var i=ht.hasOwnProperty(e)?ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(QP(e,n,i,r)&&(n=null),r||i===null?GP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var cr=WP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ku=Symbol.for("react.element"),Fs=Symbol.for("react.portal"),js=Symbol.for("react.fragment"),Em=Symbol.for("react.strict_mode"),Bf=Symbol.for("react.profiler"),wE=Symbol.for("react.provider"),EE=Symbol.for("react.context"),Im=Symbol.for("react.forward_ref"),zf=Symbol.for("react.suspense"),$f=Symbol.for("react.suspense_list"),Tm=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),IE=Symbol.for("react.offscreen"),F_=Symbol.iterator;function ma(t){return t===null||typeof t!="object"?null:(t=F_&&t[F_]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Object.assign,Hh;function ka(t){if(Hh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hh=e&&e[1]||""}return`
`+Hh+t}var Qh=!1;function Yh(t,e){if(!t||Qh)return"";Qh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Qh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ka(t):""}function YP(t){switch(t.tag){case 5:return ka(t.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 2:case 15:return t=Yh(t.type,!1),t;case 11:return t=Yh(t.type.render,!1),t;case 1:return t=Yh(t.type,!0),t;default:return""}}function qf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case js:return"Fragment";case Fs:return"Portal";case Bf:return"Profiler";case Em:return"StrictMode";case zf:return"Suspense";case $f:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case EE:return(t.displayName||"Context")+".Consumer";case wE:return(t._context.displayName||"Context")+".Provider";case Im:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tm:return e=t.displayName||null,e!==null?e:qf(t.type)||"Memo";case Ar:e=t._payload,t=t._init;try{return qf(t(e))}catch{}}return null}function JP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qf(e);case 8:return e===Em?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function TE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function XP(t){var e=TE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ru(t){t._valueTracker||(t._valueTracker=XP(t))}function xE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=TE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Sc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wf(t,e){var n=e.checked;return Le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function j_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function SE(t,e){e=e.checked,e!=null&&wm(t,"checked",e,!1)}function Kf(t,e){SE(t,e);var n=Xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gf(t,e.type,Xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function U_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gf(t,e,n){(e!=="number"||Sc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ra=Array.isArray;function Xs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Hf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function B_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Ra(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xr(n)}}function AE(t,e){var n=Xr(e.value),r=Xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function z_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function bE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?bE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Cu,PE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Cu=Cu||document.createElement("div"),Cu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Cu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function nl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ZP=["Webkit","ms","Moz","O"];Object.keys(ja).forEach(function(t){ZP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ja[e]=ja[t]})});function kE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ja.hasOwnProperty(t)&&ja[t]?(""+e).trim():e+"px"}function RE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=kE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var e1=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yf(t,e){if(e){if(e1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Jf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xf=null;function xm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zf=null,Zs=null,eo=null;function $_(t){if(t=jl(t)){if(typeof Zf!="function")throw Error(z(280));var e=t.stateNode;e&&(e=bd(e),Zf(t.stateNode,t.type,e))}}function CE(t){Zs?eo?eo.push(t):eo=[t]:Zs=t}function NE(){if(Zs){var t=Zs,e=eo;if(eo=Zs=null,$_(t),e)for(t=0;t<e.length;t++)$_(e[t])}}function DE(t,e){return t(e)}function VE(){}var Jh=!1;function OE(t,e,n){if(Jh)return t(e,n);Jh=!0;try{return DE(t,e,n)}finally{Jh=!1,(Zs!==null||eo!==null)&&(VE(),NE())}}function rl(t,e){var n=t.stateNode;if(n===null)return null;var r=bd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var ep=!1;if(er)try{var ga={};Object.defineProperty(ga,"passive",{get:function(){ep=!0}}),window.addEventListener("test",ga,ga),window.removeEventListener("test",ga,ga)}catch{ep=!1}function t1(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ua=!1,Ac=null,bc=!1,tp=null,n1={onError:function(t){Ua=!0,Ac=t}};function r1(t,e,n,r,i,s,o,a,l){Ua=!1,Ac=null,t1.apply(n1,arguments)}function i1(t,e,n,r,i,s,o,a,l){if(r1.apply(this,arguments),Ua){if(Ua){var c=Ac;Ua=!1,Ac=null}else throw Error(z(198));bc||(bc=!0,tp=c)}}function fs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ME(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function q_(t){if(fs(t)!==t)throw Error(z(188))}function s1(t){var e=t.alternate;if(!e){if(e=fs(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return q_(i),t;if(s===r)return q_(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function LE(t){return t=s1(t),t!==null?FE(t):null}function FE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=FE(t);if(e!==null)return e;t=t.sibling}return null}var jE=Gt.unstable_scheduleCallback,W_=Gt.unstable_cancelCallback,o1=Gt.unstable_shouldYield,a1=Gt.unstable_requestPaint,ze=Gt.unstable_now,l1=Gt.unstable_getCurrentPriorityLevel,Sm=Gt.unstable_ImmediatePriority,UE=Gt.unstable_UserBlockingPriority,Pc=Gt.unstable_NormalPriority,u1=Gt.unstable_LowPriority,BE=Gt.unstable_IdlePriority,Td=null,Pn=null;function c1(t){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(Td,t,void 0,(t.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:f1,d1=Math.log,h1=Math.LN2;function f1(t){return t>>>=0,t===0?32:31-(d1(t)/h1|0)|0}var Nu=64,Du=4194304;function Ca(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ca(a):(s&=o,s!==0&&(r=Ca(s)))}else o=n&~i,o!==0?r=Ca(o):s!==0&&(r=Ca(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pn(e),i=1<<n,r|=t[n],e&=~i;return r}function p1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=p1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function np(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function zE(){var t=Nu;return Nu<<=1,!(Nu&4194240)&&(Nu=64),t}function Xh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ll(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pn(e),t[e]=n}function g1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-pn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Am(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ge=0;function $E(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var qE,bm,WE,KE,GE,rp=!1,Vu=[],zr=null,$r=null,qr=null,il=new Map,sl=new Map,Pr=[],y1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function K_(t,e){switch(t){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":qr=null;break;case"pointerover":case"pointerout":il.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(e.pointerId)}}function ya(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=jl(e),e!==null&&bm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function _1(t,e,n,r,i){switch(e){case"focusin":return zr=ya(zr,t,e,n,r,i),!0;case"dragenter":return $r=ya($r,t,e,n,r,i),!0;case"mouseover":return qr=ya(qr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return il.set(s,ya(il.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,sl.set(s,ya(sl.get(s)||null,t,e,n,r,i)),!0}return!1}function HE(t){var e=ji(t.target);if(e!==null){var n=fs(e);if(n!==null){if(e=n.tag,e===13){if(e=ME(n),e!==null){t.blockedOn=e,GE(t.priority,function(){WE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ip(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xf=r,n.target.dispatchEvent(r),Xf=null}else return e=jl(n),e!==null&&bm(e),t.blockedOn=n,!1;e.shift()}return!0}function G_(t,e,n){nc(t)&&n.delete(e)}function v1(){rp=!1,zr!==null&&nc(zr)&&(zr=null),$r!==null&&nc($r)&&($r=null),qr!==null&&nc(qr)&&(qr=null),il.forEach(G_),sl.forEach(G_)}function _a(t,e){t.blockedOn===e&&(t.blockedOn=null,rp||(rp=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,v1)))}function ol(t){function e(i){return _a(i,t)}if(0<Vu.length){_a(Vu[0],t);for(var n=1;n<Vu.length;n++){var r=Vu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(zr!==null&&_a(zr,t),$r!==null&&_a($r,t),qr!==null&&_a(qr,t),il.forEach(e),sl.forEach(e),n=0;n<Pr.length;n++)r=Pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Pr.length&&(n=Pr[0],n.blockedOn===null);)HE(n),n.blockedOn===null&&Pr.shift()}var to=cr.ReactCurrentBatchConfig,Rc=!0;function w1(t,e,n,r){var i=ge,s=to.transition;to.transition=null;try{ge=1,Pm(t,e,n,r)}finally{ge=i,to.transition=s}}function E1(t,e,n,r){var i=ge,s=to.transition;to.transition=null;try{ge=4,Pm(t,e,n,r)}finally{ge=i,to.transition=s}}function Pm(t,e,n,r){if(Rc){var i=ip(t,e,n,r);if(i===null)uf(t,e,r,Cc,n),K_(t,r);else if(_1(i,t,e,n,r))r.stopPropagation();else if(K_(t,r),e&4&&-1<y1.indexOf(t)){for(;i!==null;){var s=jl(i);if(s!==null&&qE(s),s=ip(t,e,n,r),s===null&&uf(t,e,r,Cc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else uf(t,e,r,null,n)}}var Cc=null;function ip(t,e,n,r){if(Cc=null,t=xm(r),t=ji(t),t!==null)if(e=fs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ME(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cc=t,null}function QE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l1()){case Sm:return 1;case UE:return 4;case Pc:case u1:return 16;case BE:return 536870912;default:return 16}default:return 16}}var Lr=null,km=null,rc=null;function YE(){if(rc)return rc;var t,e=km,n=e.length,r,i="value"in Lr?Lr.value:Lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return rc=i.slice(t,1<r?1-r:void 0)}function ic(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ou(){return!0}function H_(){return!1}function Jt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ou:H_,this.isPropagationStopped=H_,this}return Le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ou)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ou)},persist:function(){},isPersistent:Ou}),e}var Fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rm=Jt(Fo),Fl=Le({},Fo,{view:0,detail:0}),I1=Jt(Fl),Zh,ef,va,xd=Le({},Fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==va&&(va&&t.type==="mousemove"?(Zh=t.screenX-va.screenX,ef=t.screenY-va.screenY):ef=Zh=0,va=t),Zh)},movementY:function(t){return"movementY"in t?t.movementY:ef}}),Q_=Jt(xd),T1=Le({},xd,{dataTransfer:0}),x1=Jt(T1),S1=Le({},Fl,{relatedTarget:0}),tf=Jt(S1),A1=Le({},Fo,{animationName:0,elapsedTime:0,pseudoElement:0}),b1=Jt(A1),P1=Le({},Fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),k1=Jt(P1),R1=Le({},Fo,{data:0}),Y_=Jt(R1),C1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=D1[t])?!!e[t]:!1}function Cm(){return V1}var O1=Le({},Fl,{key:function(t){if(t.key){var e=C1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ic(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?N1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cm,charCode:function(t){return t.type==="keypress"?ic(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ic(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),M1=Jt(O1),L1=Le({},xd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),J_=Jt(L1),F1=Le({},Fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cm}),j1=Jt(F1),U1=Le({},Fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),B1=Jt(U1),z1=Le({},xd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$1=Jt(z1),q1=[9,13,27,32],Nm=er&&"CompositionEvent"in window,Ba=null;er&&"documentMode"in document&&(Ba=document.documentMode);var W1=er&&"TextEvent"in window&&!Ba,JE=er&&(!Nm||Ba&&8<Ba&&11>=Ba),X_=" ",Z_=!1;function XE(t,e){switch(t){case"keyup":return q1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ZE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Us=!1;function K1(t,e){switch(t){case"compositionend":return ZE(e);case"keypress":return e.which!==32?null:(Z_=!0,X_);case"textInput":return t=e.data,t===X_&&Z_?null:t;default:return null}}function G1(t,e){if(Us)return t==="compositionend"||!Nm&&XE(t,e)?(t=YE(),rc=km=Lr=null,Us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return JE&&e.locale!=="ko"?null:e.data;default:return null}}var H1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ev(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!H1[t.type]:e==="textarea"}function eI(t,e,n,r){CE(r),e=Nc(e,"onChange"),0<e.length&&(n=new Rm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var za=null,al=null;function Q1(t){dI(t,0)}function Sd(t){var e=$s(t);if(xE(e))return t}function Y1(t,e){if(t==="change")return e}var tI=!1;if(er){var nf;if(er){var rf="oninput"in document;if(!rf){var tv=document.createElement("div");tv.setAttribute("oninput","return;"),rf=typeof tv.oninput=="function"}nf=rf}else nf=!1;tI=nf&&(!document.documentMode||9<document.documentMode)}function nv(){za&&(za.detachEvent("onpropertychange",nI),al=za=null)}function nI(t){if(t.propertyName==="value"&&Sd(al)){var e=[];eI(e,al,t,xm(t)),OE(Q1,e)}}function J1(t,e,n){t==="focusin"?(nv(),za=e,al=n,za.attachEvent("onpropertychange",nI)):t==="focusout"&&nv()}function X1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sd(al)}function Z1(t,e){if(t==="click")return Sd(e)}function ek(t,e){if(t==="input"||t==="change")return Sd(e)}function tk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yn=typeof Object.is=="function"?Object.is:tk;function ll(t,e){if(yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Uf.call(e,i)||!yn(t[i],e[i]))return!1}return!0}function rv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function iv(t,e){var n=rv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rv(n)}}function rI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function iI(){for(var t=window,e=Sc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sc(t.document)}return e}function Dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nk(t){var e=iI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&rI(n.ownerDocument.documentElement,n)){if(r!==null&&Dm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=iv(n,s);var o=iv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rk=er&&"documentMode"in document&&11>=document.documentMode,Bs=null,sp=null,$a=null,op=!1;function sv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;op||Bs==null||Bs!==Sc(r)||(r=Bs,"selectionStart"in r&&Dm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$a&&ll($a,r)||($a=r,r=Nc(sp,"onSelect"),0<r.length&&(e=new Rm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Bs)))}function Mu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zs={animationend:Mu("Animation","AnimationEnd"),animationiteration:Mu("Animation","AnimationIteration"),animationstart:Mu("Animation","AnimationStart"),transitionend:Mu("Transition","TransitionEnd")},sf={},sI={};er&&(sI=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Ad(t){if(sf[t])return sf[t];if(!zs[t])return t;var e=zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in sI)return sf[t]=e[n];return t}var oI=Ad("animationend"),aI=Ad("animationiteration"),lI=Ad("animationstart"),uI=Ad("transitionend"),cI=new Map,ov="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function di(t,e){cI.set(t,e),hs(e,[t])}for(var of=0;of<ov.length;of++){var af=ov[of],ik=af.toLowerCase(),sk=af[0].toUpperCase()+af.slice(1);di(ik,"on"+sk)}di(oI,"onAnimationEnd");di(aI,"onAnimationIteration");di(lI,"onAnimationStart");di("dblclick","onDoubleClick");di("focusin","onFocus");di("focusout","onBlur");di(uI,"onTransitionEnd");co("onMouseEnter",["mouseout","mouseover"]);co("onMouseLeave",["mouseout","mouseover"]);co("onPointerEnter",["pointerout","pointerover"]);co("onPointerLeave",["pointerout","pointerover"]);hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hs("onBeforeInput",["compositionend","keypress","textInput","paste"]);hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ok=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function av(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,i1(r,e,void 0,t),t.currentTarget=null}function dI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;av(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;av(i,a,c),s=l}}}if(bc)throw t=tp,bc=!1,tp=null,t}function xe(t,e){var n=e[dp];n===void 0&&(n=e[dp]=new Set);var r=t+"__bubble";n.has(r)||(hI(e,t,2,!1),n.add(r))}function lf(t,e,n){var r=0;e&&(r|=4),hI(n,t,r,e)}var Lu="_reactListening"+Math.random().toString(36).slice(2);function ul(t){if(!t[Lu]){t[Lu]=!0,vE.forEach(function(n){n!=="selectionchange"&&(ok.has(n)||lf(n,!1,t),lf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Lu]||(e[Lu]=!0,lf("selectionchange",!1,e))}}function hI(t,e,n,r){switch(QE(e)){case 1:var i=w1;break;case 4:i=E1;break;default:i=Pm}n=i.bind(null,e,n,t),i=void 0,!ep||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function uf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ji(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}OE(function(){var c=s,d=xm(n),f=[];e:{var m=cI.get(t);if(m!==void 0){var _=Rm,S=t;switch(t){case"keypress":if(ic(n)===0)break e;case"keydown":case"keyup":_=M1;break;case"focusin":S="focus",_=tf;break;case"focusout":S="blur",_=tf;break;case"beforeblur":case"afterblur":_=tf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Q_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=x1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=j1;break;case oI:case aI:case lI:_=b1;break;case uI:_=B1;break;case"scroll":_=I1;break;case"wheel":_=$1;break;case"copy":case"cut":case"paste":_=k1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=J_}var P=(e&4)!==0,R=!P&&t==="scroll",T=P?m!==null?m+"Capture":null:m;P=[];for(var w=c,I;w!==null;){I=w;var A=I.stateNode;if(I.tag===5&&A!==null&&(I=A,T!==null&&(A=rl(w,T),A!=null&&P.push(cl(w,A,I)))),R)break;w=w.return}0<P.length&&(m=new _(m,S,null,n,d),f.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==Xf&&(S=n.relatedTarget||n.fromElement)&&(ji(S)||S[tr]))break e;if((_||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,_?(S=n.relatedTarget||n.toElement,_=c,S=S?ji(S):null,S!==null&&(R=fs(S),S!==R||S.tag!==5&&S.tag!==6)&&(S=null)):(_=null,S=c),_!==S)){if(P=Q_,A="onMouseLeave",T="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(P=J_,A="onPointerLeave",T="onPointerEnter",w="pointer"),R=_==null?m:$s(_),I=S==null?m:$s(S),m=new P(A,w+"leave",_,n,d),m.target=R,m.relatedTarget=I,A=null,ji(d)===c&&(P=new P(T,w+"enter",S,n,d),P.target=I,P.relatedTarget=R,A=P),R=A,_&&S)t:{for(P=_,T=S,w=0,I=P;I;I=bs(I))w++;for(I=0,A=T;A;A=bs(A))I++;for(;0<w-I;)P=bs(P),w--;for(;0<I-w;)T=bs(T),I--;for(;w--;){if(P===T||T!==null&&P===T.alternate)break t;P=bs(P),T=bs(T)}P=null}else P=null;_!==null&&lv(f,m,_,P,!1),S!==null&&R!==null&&lv(f,R,S,P,!0)}}e:{if(m=c?$s(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var L=Y1;else if(ev(m))if(tI)L=ek;else{L=X1;var N=J1}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=Z1);if(L&&(L=L(t,c))){eI(f,L,n,d);break e}N&&N(t,m,c),t==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&Gf(m,"number",m.value)}switch(N=c?$s(c):window,t){case"focusin":(ev(N)||N.contentEditable==="true")&&(Bs=N,sp=c,$a=null);break;case"focusout":$a=sp=Bs=null;break;case"mousedown":op=!0;break;case"contextmenu":case"mouseup":case"dragend":op=!1,sv(f,n,d);break;case"selectionchange":if(rk)break;case"keydown":case"keyup":sv(f,n,d)}var v;if(Nm)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Us?XE(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(JE&&n.locale!=="ko"&&(Us||y!=="onCompositionStart"?y==="onCompositionEnd"&&Us&&(v=YE()):(Lr=d,km="value"in Lr?Lr.value:Lr.textContent,Us=!0)),N=Nc(c,y),0<N.length&&(y=new Y_(y,t,null,n,d),f.push({event:y,listeners:N}),v?y.data=v:(v=ZE(n),v!==null&&(y.data=v)))),(v=W1?K1(t,n):G1(t,n))&&(c=Nc(c,"onBeforeInput"),0<c.length&&(d=new Y_("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=v))}dI(f,e)})}function cl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=rl(t,n),s!=null&&r.unshift(cl(t,s,i)),s=rl(t,e),s!=null&&r.push(cl(t,s,i))),t=t.return}return r}function bs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=rl(n,s),l!=null&&o.unshift(cl(n,l,a))):i||(l=rl(n,s),l!=null&&o.push(cl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ak=/\r\n?/g,lk=/\u0000|\uFFFD/g;function uv(t){return(typeof t=="string"?t:""+t).replace(ak,`
`).replace(lk,"")}function Fu(t,e,n){if(e=uv(e),uv(t)!==e&&n)throw Error(z(425))}function Dc(){}var ap=null,lp=null;function up(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cp=typeof setTimeout=="function"?setTimeout:void 0,uk=typeof clearTimeout=="function"?clearTimeout:void 0,cv=typeof Promise=="function"?Promise:void 0,ck=typeof queueMicrotask=="function"?queueMicrotask:typeof cv<"u"?function(t){return cv.resolve(null).then(t).catch(dk)}:cp;function dk(t){setTimeout(function(){throw t})}function cf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ol(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ol(e)}function Wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var jo=Math.random().toString(36).slice(2),In="__reactFiber$"+jo,dl="__reactProps$"+jo,tr="__reactContainer$"+jo,dp="__reactEvents$"+jo,hk="__reactListeners$"+jo,fk="__reactHandles$"+jo;function ji(t){var e=t[In];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tr]||n[In]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dv(t);t!==null;){if(n=t[In])return n;t=dv(t)}return e}t=n,n=t.parentNode}return null}function jl(t){return t=t[In]||t[tr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function bd(t){return t[dl]||null}var hp=[],qs=-1;function hi(t){return{current:t}}function be(t){0>qs||(t.current=hp[qs],hp[qs]=null,qs--)}function we(t,e){qs++,hp[qs]=t.current,t.current=e}var Zr={},xt=hi(Zr),Lt=hi(!1),Gi=Zr;function ho(t,e){var n=t.type.contextTypes;if(!n)return Zr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ft(t){return t=t.childContextTypes,t!=null}function Vc(){be(Lt),be(xt)}function hv(t,e,n){if(xt.current!==Zr)throw Error(z(168));we(xt,e),we(Lt,n)}function fI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,JP(t)||"Unknown",i));return Le({},n,r)}function Oc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zr,Gi=xt.current,we(xt,t),we(Lt,Lt.current),!0}function fv(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=fI(t,e,Gi),r.__reactInternalMemoizedMergedChildContext=t,be(Lt),be(xt),we(xt,t)):be(Lt),we(Lt,n)}var qn=null,Pd=!1,df=!1;function pI(t){qn===null?qn=[t]:qn.push(t)}function pk(t){Pd=!0,pI(t)}function fi(){if(!df&&qn!==null){df=!0;var t=0,e=ge;try{var n=qn;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qn=null,Pd=!1}catch(i){throw qn!==null&&(qn=qn.slice(t+1)),jE(Sm,fi),i}finally{ge=e,df=!1}}return null}var Ws=[],Ks=0,Mc=null,Lc=0,Zt=[],en=0,Hi=null,Wn=1,Kn="";function Ri(t,e){Ws[Ks++]=Lc,Ws[Ks++]=Mc,Mc=t,Lc=e}function mI(t,e,n){Zt[en++]=Wn,Zt[en++]=Kn,Zt[en++]=Hi,Hi=t;var r=Wn;t=Kn;var i=32-pn(r)-1;r&=~(1<<i),n+=1;var s=32-pn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wn=1<<32-pn(e)+i|n<<i|r,Kn=s+t}else Wn=1<<s|n<<i|r,Kn=t}function Vm(t){t.return!==null&&(Ri(t,1),mI(t,1,0))}function Om(t){for(;t===Mc;)Mc=Ws[--Ks],Ws[Ks]=null,Lc=Ws[--Ks],Ws[Ks]=null;for(;t===Hi;)Hi=Zt[--en],Zt[en]=null,Kn=Zt[--en],Zt[en]=null,Wn=Zt[--en],Zt[en]=null}var Kt=null,Wt=null,Re=!1,fn=null;function gI(t,e){var n=tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Kt=t,Wt=Wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Kt=t,Wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hi!==null?{id:Wn,overflow:Kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Kt=t,Wt=null,!0):!1;default:return!1}}function fp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pp(t){if(Re){var e=Wt;if(e){var n=e;if(!pv(t,e)){if(fp(t))throw Error(z(418));e=Wr(n.nextSibling);var r=Kt;e&&pv(t,e)?gI(r,n):(t.flags=t.flags&-4097|2,Re=!1,Kt=t)}}else{if(fp(t))throw Error(z(418));t.flags=t.flags&-4097|2,Re=!1,Kt=t}}}function mv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kt=t}function ju(t){if(t!==Kt)return!1;if(!Re)return mv(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!up(t.type,t.memoizedProps)),e&&(e=Wt)){if(fp(t))throw yI(),Error(z(418));for(;e;)gI(t,e),e=Wr(e.nextSibling)}if(mv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wt=Wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wt=null}}else Wt=Kt?Wr(t.stateNode.nextSibling):null;return!0}function yI(){for(var t=Wt;t;)t=Wr(t.nextSibling)}function fo(){Wt=Kt=null,Re=!1}function Mm(t){fn===null?fn=[t]:fn.push(t)}var mk=cr.ReactCurrentBatchConfig;function wa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Uu(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gv(t){var e=t._init;return e(t._payload)}function _I(t){function e(T,w){if(t){var I=T.deletions;I===null?(T.deletions=[w],T.flags|=16):I.push(w)}}function n(T,w){if(!t)return null;for(;w!==null;)e(T,w),w=w.sibling;return null}function r(T,w){for(T=new Map;w!==null;)w.key!==null?T.set(w.key,w):T.set(w.index,w),w=w.sibling;return T}function i(T,w){return T=Qr(T,w),T.index=0,T.sibling=null,T}function s(T,w,I){return T.index=I,t?(I=T.alternate,I!==null?(I=I.index,I<w?(T.flags|=2,w):I):(T.flags|=2,w)):(T.flags|=1048576,w)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,w,I,A){return w===null||w.tag!==6?(w=_f(I,T.mode,A),w.return=T,w):(w=i(w,I),w.return=T,w)}function l(T,w,I,A){var L=I.type;return L===js?d(T,w,I.props.children,A,I.key):w!==null&&(w.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ar&&gv(L)===w.type)?(A=i(w,I.props),A.ref=wa(T,w,I),A.return=T,A):(A=dc(I.type,I.key,I.props,null,T.mode,A),A.ref=wa(T,w,I),A.return=T,A)}function c(T,w,I,A){return w===null||w.tag!==4||w.stateNode.containerInfo!==I.containerInfo||w.stateNode.implementation!==I.implementation?(w=vf(I,T.mode,A),w.return=T,w):(w=i(w,I.children||[]),w.return=T,w)}function d(T,w,I,A,L){return w===null||w.tag!==7?(w=qi(I,T.mode,A,L),w.return=T,w):(w=i(w,I),w.return=T,w)}function f(T,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return w=_f(""+w,T.mode,I),w.return=T,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ku:return I=dc(w.type,w.key,w.props,null,T.mode,I),I.ref=wa(T,null,w),I.return=T,I;case Fs:return w=vf(w,T.mode,I),w.return=T,w;case Ar:var A=w._init;return f(T,A(w._payload),I)}if(Ra(w)||ma(w))return w=qi(w,T.mode,I,null),w.return=T,w;Uu(T,w)}return null}function m(T,w,I,A){var L=w!==null?w.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return L!==null?null:a(T,w,""+I,A);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ku:return I.key===L?l(T,w,I,A):null;case Fs:return I.key===L?c(T,w,I,A):null;case Ar:return L=I._init,m(T,w,L(I._payload),A)}if(Ra(I)||ma(I))return L!==null?null:d(T,w,I,A,null);Uu(T,I)}return null}function _(T,w,I,A,L){if(typeof A=="string"&&A!==""||typeof A=="number")return T=T.get(I)||null,a(w,T,""+A,L);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ku:return T=T.get(A.key===null?I:A.key)||null,l(w,T,A,L);case Fs:return T=T.get(A.key===null?I:A.key)||null,c(w,T,A,L);case Ar:var N=A._init;return _(T,w,I,N(A._payload),L)}if(Ra(A)||ma(A))return T=T.get(I)||null,d(w,T,A,L,null);Uu(w,A)}return null}function S(T,w,I,A){for(var L=null,N=null,v=w,y=w=0,x=null;v!==null&&y<I.length;y++){v.index>y?(x=v,v=null):x=v.sibling;var b=m(T,v,I[y],A);if(b===null){v===null&&(v=x);break}t&&v&&b.alternate===null&&e(T,v),w=s(b,w,y),N===null?L=b:N.sibling=b,N=b,v=x}if(y===I.length)return n(T,v),Re&&Ri(T,y),L;if(v===null){for(;y<I.length;y++)v=f(T,I[y],A),v!==null&&(w=s(v,w,y),N===null?L=v:N.sibling=v,N=v);return Re&&Ri(T,y),L}for(v=r(T,v);y<I.length;y++)x=_(v,T,y,I[y],A),x!==null&&(t&&x.alternate!==null&&v.delete(x.key===null?y:x.key),w=s(x,w,y),N===null?L=x:N.sibling=x,N=x);return t&&v.forEach(function(C){return e(T,C)}),Re&&Ri(T,y),L}function P(T,w,I,A){var L=ma(I);if(typeof L!="function")throw Error(z(150));if(I=L.call(I),I==null)throw Error(z(151));for(var N=L=null,v=w,y=w=0,x=null,b=I.next();v!==null&&!b.done;y++,b=I.next()){v.index>y?(x=v,v=null):x=v.sibling;var C=m(T,v,b.value,A);if(C===null){v===null&&(v=x);break}t&&v&&C.alternate===null&&e(T,v),w=s(C,w,y),N===null?L=C:N.sibling=C,N=C,v=x}if(b.done)return n(T,v),Re&&Ri(T,y),L;if(v===null){for(;!b.done;y++,b=I.next())b=f(T,b.value,A),b!==null&&(w=s(b,w,y),N===null?L=b:N.sibling=b,N=b);return Re&&Ri(T,y),L}for(v=r(T,v);!b.done;y++,b=I.next())b=_(v,T,y,b.value,A),b!==null&&(t&&b.alternate!==null&&v.delete(b.key===null?y:b.key),w=s(b,w,y),N===null?L=b:N.sibling=b,N=b);return t&&v.forEach(function(D){return e(T,D)}),Re&&Ri(T,y),L}function R(T,w,I,A){if(typeof I=="object"&&I!==null&&I.type===js&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case ku:e:{for(var L=I.key,N=w;N!==null;){if(N.key===L){if(L=I.type,L===js){if(N.tag===7){n(T,N.sibling),w=i(N,I.props.children),w.return=T,T=w;break e}}else if(N.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ar&&gv(L)===N.type){n(T,N.sibling),w=i(N,I.props),w.ref=wa(T,N,I),w.return=T,T=w;break e}n(T,N);break}else e(T,N);N=N.sibling}I.type===js?(w=qi(I.props.children,T.mode,A,I.key),w.return=T,T=w):(A=dc(I.type,I.key,I.props,null,T.mode,A),A.ref=wa(T,w,I),A.return=T,T=A)}return o(T);case Fs:e:{for(N=I.key;w!==null;){if(w.key===N)if(w.tag===4&&w.stateNode.containerInfo===I.containerInfo&&w.stateNode.implementation===I.implementation){n(T,w.sibling),w=i(w,I.children||[]),w.return=T,T=w;break e}else{n(T,w);break}else e(T,w);w=w.sibling}w=vf(I,T.mode,A),w.return=T,T=w}return o(T);case Ar:return N=I._init,R(T,w,N(I._payload),A)}if(Ra(I))return S(T,w,I,A);if(ma(I))return P(T,w,I,A);Uu(T,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,w!==null&&w.tag===6?(n(T,w.sibling),w=i(w,I),w.return=T,T=w):(n(T,w),w=_f(I,T.mode,A),w.return=T,T=w),o(T)):n(T,w)}return R}var po=_I(!0),vI=_I(!1),Fc=hi(null),jc=null,Gs=null,Lm=null;function Fm(){Lm=Gs=jc=null}function jm(t){var e=Fc.current;be(Fc),t._currentValue=e}function mp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function no(t,e){jc=t,Lm=Gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Dt=!0),t.firstContext=null)}function on(t){var e=t._currentValue;if(Lm!==t)if(t={context:t,memoizedValue:e,next:null},Gs===null){if(jc===null)throw Error(z(308));Gs=t,jc.dependencies={lanes:0,firstContext:t}}else Gs=Gs.next=t;return e}var Ui=null;function Um(t){Ui===null?Ui=[t]:Ui.push(t)}function wI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Um(e)):(n.next=i.next,i.next=n),e.interleaved=n,nr(t,r)}function nr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var br=!1;function Bm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function EI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Kr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,nr(t,n)}return i=r.interleaved,i===null?(e.next=e,Um(r)):(e.next=i.next,i.next=e),r.interleaved=e,nr(t,n)}function sc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Am(t,n)}}function yv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Uc(t,e,n,r){var i=t.updateQueue;br=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=c=l=null,a=s;do{var m=a.lane,_=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,P=a;switch(m=e,_=n,P.tag){case 1:if(S=P.payload,typeof S=="function"){f=S.call(_,f,m);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=P.payload,m=typeof S=="function"?S.call(_,f,m):S,m==null)break e;f=Le({},f,m);break e;case 2:br=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=_,l=f):d=d.next=_,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yi|=o,t.lanes=o,t.memoizedState=f}}function _v(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Ul={},kn=hi(Ul),hl=hi(Ul),fl=hi(Ul);function Bi(t){if(t===Ul)throw Error(z(174));return t}function zm(t,e){switch(we(fl,e),we(hl,t),we(kn,Ul),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qf(e,t)}be(kn),we(kn,e)}function mo(){be(kn),be(hl),be(fl)}function II(t){Bi(fl.current);var e=Bi(kn.current),n=Qf(e,t.type);e!==n&&(we(hl,t),we(kn,n))}function $m(t){hl.current===t&&(be(kn),be(hl))}var De=hi(0);function Bc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hf=[];function qm(){for(var t=0;t<hf.length;t++)hf[t]._workInProgressVersionPrimary=null;hf.length=0}var oc=cr.ReactCurrentDispatcher,ff=cr.ReactCurrentBatchConfig,Qi=0,Ve=null,Qe=null,et=null,zc=!1,qa=!1,pl=0,gk=0;function gt(){throw Error(z(321))}function Wm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yn(t[n],e[n]))return!1;return!0}function Km(t,e,n,r,i,s){if(Qi=s,Ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,oc.current=t===null||t.memoizedState===null?wk:Ek,t=n(r,i),qa){s=0;do{if(qa=!1,pl=0,25<=s)throw Error(z(301));s+=1,et=Qe=null,e.updateQueue=null,oc.current=Ik,t=n(r,i)}while(qa)}if(oc.current=$c,e=Qe!==null&&Qe.next!==null,Qi=0,et=Qe=Ve=null,zc=!1,e)throw Error(z(300));return t}function Gm(){var t=pl!==0;return pl=0,t}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Ve.memoizedState=et=t:et=et.next=t,et}function an(){if(Qe===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var e=et===null?Ve.memoizedState:et.next;if(e!==null)et=e,Qe=t;else{if(t===null)throw Error(z(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},et===null?Ve.memoizedState=et=t:et=et.next=t}return et}function ml(t,e){return typeof e=="function"?e(t):e}function pf(t){var e=an(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Qi&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Ve.lanes|=d,Yi|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,yn(r,e.memoizedState)||(Dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ve.lanes|=s,Yi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mf(t){var e=an(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);yn(s,e.memoizedState)||(Dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function TI(){}function xI(t,e){var n=Ve,r=an(),i=e(),s=!yn(r.memoizedState,i);if(s&&(r.memoizedState=i,Dt=!0),r=r.queue,Hm(bI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,gl(9,AI.bind(null,n,r,i,e),void 0,null),nt===null)throw Error(z(349));Qi&30||SI(n,e,i)}return i}function SI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function AI(t,e,n,r){e.value=n,e.getSnapshot=r,PI(e)&&kI(t)}function bI(t,e,n){return n(function(){PI(e)&&kI(t)})}function PI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yn(t,n)}catch{return!0}}function kI(t){var e=nr(t,1);e!==null&&mn(e,t,1,-1)}function vv(t){var e=En();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ml,lastRenderedState:t},e.queue=t,t=t.dispatch=vk.bind(null,Ve,t),[e.memoizedState,t]}function gl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function RI(){return an().memoizedState}function ac(t,e,n,r){var i=En();Ve.flags|=t,i.memoizedState=gl(1|e,n,void 0,r===void 0?null:r)}function kd(t,e,n,r){var i=an();r=r===void 0?null:r;var s=void 0;if(Qe!==null){var o=Qe.memoizedState;if(s=o.destroy,r!==null&&Wm(r,o.deps)){i.memoizedState=gl(e,n,s,r);return}}Ve.flags|=t,i.memoizedState=gl(1|e,n,s,r)}function wv(t,e){return ac(8390656,8,t,e)}function Hm(t,e){return kd(2048,8,t,e)}function CI(t,e){return kd(4,2,t,e)}function NI(t,e){return kd(4,4,t,e)}function DI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function VI(t,e,n){return n=n!=null?n.concat([t]):null,kd(4,4,DI.bind(null,e,t),n)}function Qm(){}function OI(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function MI(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function LI(t,e,n){return Qi&21?(yn(n,e)||(n=zE(),Ve.lanes|=n,Yi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Dt=!0),t.memoizedState=n)}function yk(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=ff.transition;ff.transition={};try{t(!1),e()}finally{ge=n,ff.transition=r}}function FI(){return an().memoizedState}function _k(t,e,n){var r=Hr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jI(t))UI(e,n);else if(n=wI(t,e,n,r),n!==null){var i=kt();mn(n,t,r,i),BI(n,e,r)}}function vk(t,e,n){var r=Hr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jI(t))UI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,yn(a,o)){var l=e.interleaved;l===null?(i.next=i,Um(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=wI(t,e,i,r),n!==null&&(i=kt(),mn(n,t,r,i),BI(n,e,r))}}function jI(t){var e=t.alternate;return t===Ve||e!==null&&e===Ve}function UI(t,e){qa=zc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function BI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Am(t,n)}}var $c={readContext:on,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},wk={readContext:on,useCallback:function(t,e){return En().memoizedState=[t,e===void 0?null:e],t},useContext:on,useEffect:wv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ac(4194308,4,DI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ac(4194308,4,t,e)},useInsertionEffect:function(t,e){return ac(4,2,t,e)},useMemo:function(t,e){var n=En();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=En();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=_k.bind(null,Ve,t),[r.memoizedState,t]},useRef:function(t){var e=En();return t={current:t},e.memoizedState=t},useState:vv,useDebugValue:Qm,useDeferredValue:function(t){return En().memoizedState=t},useTransition:function(){var t=vv(!1),e=t[0];return t=yk.bind(null,t[1]),En().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ve,i=En();if(Re){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),nt===null)throw Error(z(349));Qi&30||SI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,wv(bI.bind(null,r,s,t),[t]),r.flags|=2048,gl(9,AI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=En(),e=nt.identifierPrefix;if(Re){var n=Kn,r=Wn;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=pl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ek={readContext:on,useCallback:OI,useContext:on,useEffect:Hm,useImperativeHandle:VI,useInsertionEffect:CI,useLayoutEffect:NI,useMemo:MI,useReducer:pf,useRef:RI,useState:function(){return pf(ml)},useDebugValue:Qm,useDeferredValue:function(t){var e=an();return LI(e,Qe.memoizedState,t)},useTransition:function(){var t=pf(ml)[0],e=an().memoizedState;return[t,e]},useMutableSource:TI,useSyncExternalStore:xI,useId:FI,unstable_isNewReconciler:!1},Ik={readContext:on,useCallback:OI,useContext:on,useEffect:Hm,useImperativeHandle:VI,useInsertionEffect:CI,useLayoutEffect:NI,useMemo:MI,useReducer:mf,useRef:RI,useState:function(){return mf(ml)},useDebugValue:Qm,useDeferredValue:function(t){var e=an();return Qe===null?e.memoizedState=t:LI(e,Qe.memoizedState,t)},useTransition:function(){var t=mf(ml)[0],e=an().memoizedState;return[t,e]},useMutableSource:TI,useSyncExternalStore:xI,useId:FI,unstable_isNewReconciler:!1};function dn(t,e){if(t&&t.defaultProps){e=Le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Rd={isMounted:function(t){return(t=t._reactInternals)?fs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=kt(),i=Hr(t),s=Jn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Kr(t,s,i),e!==null&&(mn(e,t,i,r),sc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=kt(),i=Hr(t),s=Jn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Kr(t,s,i),e!==null&&(mn(e,t,i,r),sc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=kt(),r=Hr(t),i=Jn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Kr(t,i,r),e!==null&&(mn(e,t,r,n),sc(e,t,r))}};function Ev(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ll(n,r)||!ll(i,s):!0}function zI(t,e,n){var r=!1,i=Zr,s=e.contextType;return typeof s=="object"&&s!==null?s=on(s):(i=Ft(e)?Gi:xt.current,r=e.contextTypes,s=(r=r!=null)?ho(t,i):Zr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Iv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Rd.enqueueReplaceState(e,e.state,null)}function yp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Bm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=on(s):(s=Ft(e)?Gi:xt.current,i.context=ho(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Rd.enqueueReplaceState(i,i.state,null),Uc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function go(t,e){try{var n="",r=e;do n+=YP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function gf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _p(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Tk=typeof WeakMap=="function"?WeakMap:Map;function $I(t,e,n){n=Jn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Wc||(Wc=!0,Pp=r),_p(t,e)},n}function qI(t,e,n){n=Jn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_p(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_p(t,e),typeof r!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Tv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Tk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Lk.bind(null,t,e,n),e.then(t,t))}function xv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jn(-1,1),e.tag=2,Kr(n,e,1))),n.lanes|=1),t)}var xk=cr.ReactCurrentOwner,Dt=!1;function Pt(t,e,n,r){e.child=t===null?vI(e,null,n,r):po(e,t.child,n,r)}function Av(t,e,n,r,i){n=n.render;var s=e.ref;return no(e,i),r=Km(t,e,n,r,s,i),n=Gm(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rr(t,e,i)):(Re&&n&&Vm(e),e.flags|=1,Pt(t,e,r,i),e.child)}function bv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!rg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,WI(t,e,s,r,i)):(t=dc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ll,n(o,r)&&t.ref===e.ref)return rr(t,e,i)}return e.flags|=1,t=Qr(s,r),t.ref=e.ref,t.return=e,e.child=t}function WI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ll(s,r)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Dt=!0);else return e.lanes=t.lanes,rr(t,e,i)}return vp(t,e,n,r,i)}function KI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Qs,qt),qt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Qs,qt),qt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(Qs,qt),qt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(Qs,qt),qt|=r;return Pt(t,e,i,n),e.child}function GI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vp(t,e,n,r,i){var s=Ft(n)?Gi:xt.current;return s=ho(e,s),no(e,i),n=Km(t,e,n,r,s,i),r=Gm(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rr(t,e,i)):(Re&&r&&Vm(e),e.flags|=1,Pt(t,e,n,i),e.child)}function Pv(t,e,n,r,i){if(Ft(n)){var s=!0;Oc(e)}else s=!1;if(no(e,i),e.stateNode===null)lc(t,e),zI(e,n,r),yp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=on(c):(c=Ft(n)?Gi:xt.current,c=ho(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Iv(e,o,r,c),br=!1;var m=e.memoizedState;o.state=m,Uc(e,r,o,i),l=e.memoizedState,a!==r||m!==l||Lt.current||br?(typeof d=="function"&&(gp(e,n,d,r),l=e.memoizedState),(a=br||Ev(e,n,a,r,m,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,EI(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:dn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=on(l):(l=Ft(n)?Gi:xt.current,l=ho(e,l));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&Iv(e,o,r,l),br=!1,m=e.memoizedState,o.state=m,Uc(e,r,o,i);var S=e.memoizedState;a!==f||m!==S||Lt.current||br?(typeof _=="function"&&(gp(e,n,_,r),S=e.memoizedState),(c=br||Ev(e,n,c,r,m,S,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return wp(t,e,n,r,s,i)}function wp(t,e,n,r,i,s){GI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&fv(e,n,!1),rr(t,e,s);r=e.stateNode,xk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=po(e,t.child,null,s),e.child=po(e,null,a,s)):Pt(t,e,a,s),e.memoizedState=r.state,i&&fv(e,n,!0),e.child}function HI(t){var e=t.stateNode;e.pendingContext?hv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hv(t,e.context,!1),zm(t,e.containerInfo)}function kv(t,e,n,r,i){return fo(),Mm(i),e.flags|=256,Pt(t,e,n,r),e.child}var Ep={dehydrated:null,treeContext:null,retryLane:0};function Ip(t){return{baseLanes:t,cachePool:null,transitions:null}}function QI(t,e,n){var r=e.pendingProps,i=De.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(De,i&1),t===null)return pp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dd(o,r,0,null),t=qi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ip(n),e.memoizedState=Ep,t):Ym(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Sk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Qr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Qr(a,s):(s=qi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ip(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ep,r}return s=t.child,t=s.sibling,r=Qr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ym(t,e){return e=Dd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Bu(t,e,n,r){return r!==null&&Mm(r),po(e,t.child,null,n),t=Ym(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Sk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=gf(Error(z(422))),Bu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Dd({mode:"visible",children:r.children},i,0,null),s=qi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&po(e,t.child,null,o),e.child.memoizedState=Ip(o),e.memoizedState=Ep,s);if(!(e.mode&1))return Bu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=gf(s,r,void 0),Bu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Dt||a){if(r=nt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nr(t,i),mn(r,t,i,-1))}return ng(),r=gf(Error(z(421))),Bu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Fk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Wt=Wr(i.nextSibling),Kt=e,Re=!0,fn=null,t!==null&&(Zt[en++]=Wn,Zt[en++]=Kn,Zt[en++]=Hi,Wn=t.id,Kn=t.overflow,Hi=e),e=Ym(e,r.children),e.flags|=4096,e)}function Rv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mp(t.return,e,n)}function yf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function YI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pt(t,e,r.children,n),r=De.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rv(t,n,e);else if(t.tag===19)Rv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(De,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Bc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Bc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yf(e,!0,n,null,s);break;case"together":yf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function lc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Qr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ak(t,e,n){switch(e.tag){case 3:HI(e),fo();break;case 5:II(e);break;case 1:Ft(e.type)&&Oc(e);break;case 4:zm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(Fc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(De,De.current&1),e.flags|=128,null):n&e.child.childLanes?QI(t,e,n):(we(De,De.current&1),t=rr(t,e,n),t!==null?t.sibling:null);we(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return YI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,KI(t,e,n)}return rr(t,e,n)}var JI,Tp,XI,ZI;JI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tp=function(){};XI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Bi(kn.current);var s=null;switch(n){case"input":i=Wf(t,i),r=Wf(t,r),s=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),s=[];break;case"textarea":i=Hf(t,i),r=Hf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Dc)}Yf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(tl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(tl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&xe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ZI=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ea(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function bk(t,e,n){var r=e.pendingProps;switch(Om(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return Ft(e.type)&&Vc(),yt(e),null;case 3:return r=e.stateNode,mo(),be(Lt),be(xt),qm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ju(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(Cp(fn),fn=null))),Tp(t,e),yt(e),null;case 5:$m(e);var i=Bi(fl.current);if(n=e.type,t!==null&&e.stateNode!=null)XI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return yt(e),null}if(t=Bi(kn.current),ju(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[In]=e,r[dl]=s,t=(e.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<Na.length;i++)xe(Na[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":j_(r,s),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},xe("invalid",r);break;case"textarea":B_(r,s),xe("invalid",r)}Yf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Fu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Fu(r.textContent,a,t),i=["children",""+a]):tl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&xe("scroll",r)}switch(n){case"input":Ru(r),U_(r,s,!0);break;case"textarea":Ru(r),z_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Dc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=bE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[In]=e,t[dl]=r,JI(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jf(n,r),n){case"dialog":xe("cancel",t),xe("close",t),i=r;break;case"iframe":case"object":case"embed":xe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Na.length;i++)xe(Na[i],t);i=r;break;case"source":xe("error",t),i=r;break;case"img":case"image":case"link":xe("error",t),xe("load",t),i=r;break;case"details":xe("toggle",t),i=r;break;case"input":j_(t,r),i=Wf(t,r),xe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),xe("invalid",t);break;case"textarea":B_(t,r),i=Hf(t,r),xe("invalid",t);break;default:i=r}Yf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?RE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&PE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&nl(t,l):typeof l=="number"&&nl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(tl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&xe("scroll",t):l!=null&&wm(t,s,l,o))}switch(n){case"input":Ru(t),U_(t,r,!1);break;case"textarea":Ru(t),z_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Xs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Xs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Dc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)ZI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Bi(fl.current),Bi(kn.current),ju(e)){if(r=e.stateNode,n=e.memoizedProps,r[In]=e,(s=r.nodeValue!==n)&&(t=Kt,t!==null))switch(t.tag){case 3:Fu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[In]=e,e.stateNode=r}return yt(e),null;case 13:if(be(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Wt!==null&&e.mode&1&&!(e.flags&128))yI(),fo(),e.flags|=98560,s=!1;else if(s=ju(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[In]=e}else fo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),s=!1}else fn!==null&&(Cp(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?Ye===0&&(Ye=3):ng())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return mo(),Tp(t,e),t===null&&ul(e.stateNode.containerInfo),yt(e),null;case 10:return jm(e.type._context),yt(e),null;case 17:return Ft(e.type)&&Vc(),yt(e),null;case 19:if(be(De),s=e.memoizedState,s===null)return yt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ea(s,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Bc(t),o!==null){for(e.flags|=128,Ea(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(De,De.current&1|2),e.child}t=t.sibling}s.tail!==null&&ze()>yo&&(e.flags|=128,r=!0,Ea(s,!1),e.lanes=4194304)}else{if(!r)if(t=Bc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ea(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return yt(e),null}else 2*ze()-s.renderingStartTime>yo&&n!==1073741824&&(e.flags|=128,r=!0,Ea(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,n=De.current,we(De,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return tg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qt&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function Pk(t,e){switch(Om(e),e.tag){case 1:return Ft(e.type)&&Vc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mo(),be(Lt),be(xt),qm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $m(e),null;case 13:if(be(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));fo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return be(De),null;case 4:return mo(),null;case 10:return jm(e.type._context),null;case 22:case 23:return tg(),null;case 24:return null;default:return null}}var zu=!1,wt=!1,kk=typeof WeakSet=="function"?WeakSet:Set,H=null;function Hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(t,e,r)}else n.current=null}function xp(t,e,n){try{n()}catch(r){Ue(t,e,r)}}var Cv=!1;function Rk(t,e){if(ap=Rc,t=iI(),Dm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var _;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)m=f,f=_;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(l=o),(_=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lp={focusedElem:t,selectionRange:n},Rc=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var P=S.memoizedProps,R=S.memoizedState,T=e.stateNode,w=T.getSnapshotBeforeUpdate(e.elementType===e.type?P:dn(e.type,P),R);T.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(A){Ue(e,e.return,A)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return S=Cv,Cv=!1,S}function Wa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xp(e,n,s)}i=i.next}while(i!==r)}}function Cd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Sp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function eT(t){var e=t.alternate;e!==null&&(t.alternate=null,eT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[In],delete e[dl],delete e[dp],delete e[hk],delete e[fk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tT(t){return t.tag===5||t.tag===3||t.tag===4}function Nv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ap(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Dc));else if(r!==4&&(t=t.child,t!==null))for(Ap(t,e,n),t=t.sibling;t!==null;)Ap(t,e,n),t=t.sibling}function bp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(bp(t,e,n),t=t.sibling;t!==null;)bp(t,e,n),t=t.sibling}var lt=null,hn=!1;function Er(t,e,n){for(n=n.child;n!==null;)nT(t,e,n),n=n.sibling}function nT(t,e,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(Td,n)}catch{}switch(n.tag){case 5:wt||Hs(n,e);case 6:var r=lt,i=hn;lt=null,Er(t,e,n),lt=r,hn=i,lt!==null&&(hn?(t=lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):lt.removeChild(n.stateNode));break;case 18:lt!==null&&(hn?(t=lt,n=n.stateNode,t.nodeType===8?cf(t.parentNode,n):t.nodeType===1&&cf(t,n),ol(t)):cf(lt,n.stateNode));break;case 4:r=lt,i=hn,lt=n.stateNode.containerInfo,hn=!0,Er(t,e,n),lt=r,hn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xp(n,e,o),i=i.next}while(i!==r)}Er(t,e,n);break;case 1:if(!wt&&(Hs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ue(n,e,a)}Er(t,e,n);break;case 21:Er(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,Er(t,e,n),wt=r):Er(t,e,n);break;default:Er(t,e,n)}}function Dv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kk),e.forEach(function(r){var i=jk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:lt=a.stateNode,hn=!1;break e;case 3:lt=a.stateNode.containerInfo,hn=!0;break e;case 4:lt=a.stateNode.containerInfo,hn=!0;break e}a=a.return}if(lt===null)throw Error(z(160));nT(s,o,i),lt=null,hn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Ue(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rT(e,t),e=e.sibling}function rT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(cn(e,t),wn(t),r&4){try{Wa(3,t,t.return),Cd(3,t)}catch(P){Ue(t,t.return,P)}try{Wa(5,t,t.return)}catch(P){Ue(t,t.return,P)}}break;case 1:cn(e,t),wn(t),r&512&&n!==null&&Hs(n,n.return);break;case 5:if(cn(e,t),wn(t),r&512&&n!==null&&Hs(n,n.return),t.flags&32){var i=t.stateNode;try{nl(i,"")}catch(P){Ue(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&SE(i,s),Jf(a,o);var c=Jf(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?RE(i,f):d==="dangerouslySetInnerHTML"?PE(i,f):d==="children"?nl(i,f):wm(i,d,f,c)}switch(a){case"input":Kf(i,s);break;case"textarea":AE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Xs(i,!!s.multiple,_,!1):m!==!!s.multiple&&(s.defaultValue!=null?Xs(i,!!s.multiple,s.defaultValue,!0):Xs(i,!!s.multiple,s.multiple?[]:"",!1))}i[dl]=s}catch(P){Ue(t,t.return,P)}}break;case 6:if(cn(e,t),wn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Ue(t,t.return,P)}}break;case 3:if(cn(e,t),wn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ol(e.containerInfo)}catch(P){Ue(t,t.return,P)}break;case 4:cn(e,t),wn(t);break;case 13:cn(e,t),wn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Zm=ze())),r&4&&Dv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(c=wt)||d,cn(e,t),wt=c):cn(e,t),wn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(H=t,d=t.child;d!==null;){for(f=H=d;H!==null;){switch(m=H,_=m.child,m.tag){case 0:case 11:case 14:case 15:Wa(4,m,m.return);break;case 1:Hs(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(P){Ue(r,n,P)}}break;case 5:Hs(m,m.return);break;case 22:if(m.memoizedState!==null){Ov(f);continue}}_!==null?(_.return=m,H=_):Ov(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=kE("display",o))}catch(P){Ue(t,t.return,P)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){Ue(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:cn(e,t),wn(t),r&4&&Dv(t);break;case 21:break;default:cn(e,t),wn(t)}}function wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tT(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(nl(i,""),r.flags&=-33);var s=Nv(t);bp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Nv(t);Ap(t,a,o);break;default:throw Error(z(161))}}catch(l){Ue(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ck(t,e,n){H=t,iT(t)}function iT(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||zu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||wt;a=zu;var c=wt;if(zu=o,(wt=l)&&!c)for(H=i;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?Mv(i):l!==null?(l.return=o,H=l):Mv(i);for(;s!==null;)H=s,iT(s),s=s.sibling;H=i,zu=a,wt=c}Vv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Vv(t)}}function Vv(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||Cd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:dn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_v(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_v(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ol(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}wt||e.flags&512&&Sp(e)}catch(m){Ue(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Ov(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Mv(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cd(4,e)}catch(l){Ue(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ue(e,i,l)}}var s=e.return;try{Sp(e)}catch(l){Ue(e,s,l)}break;case 5:var o=e.return;try{Sp(e)}catch(l){Ue(e,o,l)}}}catch(l){Ue(e,e.return,l)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var Nk=Math.ceil,qc=cr.ReactCurrentDispatcher,Jm=cr.ReactCurrentOwner,rn=cr.ReactCurrentBatchConfig,le=0,nt=null,Ge=null,dt=0,qt=0,Qs=hi(0),Ye=0,yl=null,Yi=0,Nd=0,Xm=0,Ka=null,Nt=null,Zm=0,yo=1/0,zn=null,Wc=!1,Pp=null,Gr=null,$u=!1,Fr=null,Kc=0,Ga=0,kp=null,uc=-1,cc=0;function kt(){return le&6?ze():uc!==-1?uc:uc=ze()}function Hr(t){return t.mode&1?le&2&&dt!==0?dt&-dt:mk.transition!==null?(cc===0&&(cc=zE()),cc):(t=ge,t!==0||(t=window.event,t=t===void 0?16:QE(t.type)),t):1}function mn(t,e,n,r){if(50<Ga)throw Ga=0,kp=null,Error(z(185));Ll(t,n,r),(!(le&2)||t!==nt)&&(t===nt&&(!(le&2)&&(Nd|=n),Ye===4&&kr(t,dt)),jt(t,r),n===1&&le===0&&!(e.mode&1)&&(yo=ze()+500,Pd&&fi()))}function jt(t,e){var n=t.callbackNode;m1(t,e);var r=kc(t,t===nt?dt:0);if(r===0)n!==null&&W_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&W_(n),e===1)t.tag===0?pk(Lv.bind(null,t)):pI(Lv.bind(null,t)),ck(function(){!(le&6)&&fi()}),n=null;else{switch($E(r)){case 1:n=Sm;break;case 4:n=UE;break;case 16:n=Pc;break;case 536870912:n=BE;break;default:n=Pc}n=hT(n,sT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sT(t,e){if(uc=-1,cc=0,le&6)throw Error(z(327));var n=t.callbackNode;if(ro()&&t.callbackNode!==n)return null;var r=kc(t,t===nt?dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Gc(t,r);else{e=r;var i=le;le|=2;var s=aT();(nt!==t||dt!==e)&&(zn=null,yo=ze()+500,$i(t,e));do try{Ok();break}catch(a){oT(t,a)}while(!0);Fm(),qc.current=s,le=i,Ge!==null?e=0:(nt=null,dt=0,e=Ye)}if(e!==0){if(e===2&&(i=np(t),i!==0&&(r=i,e=Rp(t,i))),e===1)throw n=yl,$i(t,0),kr(t,r),jt(t,ze()),n;if(e===6)kr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Dk(i)&&(e=Gc(t,r),e===2&&(s=np(t),s!==0&&(r=s,e=Rp(t,s))),e===1))throw n=yl,$i(t,0),kr(t,r),jt(t,ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Ci(t,Nt,zn);break;case 3:if(kr(t,r),(r&130023424)===r&&(e=Zm+500-ze(),10<e)){if(kc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){kt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=cp(Ci.bind(null,t,Nt,zn),e);break}Ci(t,Nt,zn);break;case 4:if(kr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-pn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Nk(r/1960))-r,10<r){t.timeoutHandle=cp(Ci.bind(null,t,Nt,zn),r);break}Ci(t,Nt,zn);break;case 5:Ci(t,Nt,zn);break;default:throw Error(z(329))}}}return jt(t,ze()),t.callbackNode===n?sT.bind(null,t):null}function Rp(t,e){var n=Ka;return t.current.memoizedState.isDehydrated&&($i(t,e).flags|=256),t=Gc(t,e),t!==2&&(e=Nt,Nt=n,e!==null&&Cp(e)),t}function Cp(t){Nt===null?Nt=t:Nt.push.apply(Nt,t)}function Dk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!yn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kr(t,e){for(e&=~Xm,e&=~Nd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pn(e),r=1<<n;t[n]=-1,e&=~r}}function Lv(t){if(le&6)throw Error(z(327));ro();var e=kc(t,0);if(!(e&1))return jt(t,ze()),null;var n=Gc(t,e);if(t.tag!==0&&n===2){var r=np(t);r!==0&&(e=r,n=Rp(t,r))}if(n===1)throw n=yl,$i(t,0),kr(t,e),jt(t,ze()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ci(t,Nt,zn),jt(t,ze()),null}function eg(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(yo=ze()+500,Pd&&fi())}}function Ji(t){Fr!==null&&Fr.tag===0&&!(le&6)&&ro();var e=le;le|=1;var n=rn.transition,r=ge;try{if(rn.transition=null,ge=1,t)return t()}finally{ge=r,rn.transition=n,le=e,!(le&6)&&fi()}}function tg(){qt=Qs.current,be(Qs)}function $i(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uk(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(Om(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vc();break;case 3:mo(),be(Lt),be(xt),qm();break;case 5:$m(r);break;case 4:mo();break;case 13:be(De);break;case 19:be(De);break;case 10:jm(r.type._context);break;case 22:case 23:tg()}n=n.return}if(nt=t,Ge=t=Qr(t.current,null),dt=qt=e,Ye=0,yl=null,Xm=Nd=Yi=0,Nt=Ka=null,Ui!==null){for(e=0;e<Ui.length;e++)if(n=Ui[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ui=null}return t}function oT(t,e){do{var n=Ge;try{if(Fm(),oc.current=$c,zc){for(var r=Ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zc=!1}if(Qi=0,et=Qe=Ve=null,qa=!1,pl=0,Jm.current=null,n===null||n.return===null){Ye=1,yl=e,Ge=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=xv(o);if(_!==null){_.flags&=-257,Sv(_,o,a,s,e),_.mode&1&&Tv(s,c,e),e=_,l=c;var S=e.updateQueue;if(S===null){var P=new Set;P.add(l),e.updateQueue=P}else S.add(l);break e}else{if(!(e&1)){Tv(s,c,e),ng();break e}l=Error(z(426))}}else if(Re&&a.mode&1){var R=xv(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Sv(R,o,a,s,e),Mm(go(l,a));break e}}s=l=go(l,a),Ye!==4&&(Ye=2),Ka===null?Ka=[s]:Ka.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=$I(s,l,e);yv(s,T);break e;case 1:a=l;var w=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Gr===null||!Gr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var A=qI(s,a,e);yv(s,A);break e}}s=s.return}while(s!==null)}uT(n)}catch(L){e=L,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(!0)}function aT(){var t=qc.current;return qc.current=$c,t===null?$c:t}function ng(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),nt===null||!(Yi&268435455)&&!(Nd&268435455)||kr(nt,dt)}function Gc(t,e){var n=le;le|=2;var r=aT();(nt!==t||dt!==e)&&(zn=null,$i(t,e));do try{Vk();break}catch(i){oT(t,i)}while(!0);if(Fm(),le=n,qc.current=r,Ge!==null)throw Error(z(261));return nt=null,dt=0,Ye}function Vk(){for(;Ge!==null;)lT(Ge)}function Ok(){for(;Ge!==null&&!o1();)lT(Ge)}function lT(t){var e=dT(t.alternate,t,qt);t.memoizedProps=t.pendingProps,e===null?uT(t):Ge=e,Jm.current=null}function uT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Pk(n,e),n!==null){n.flags&=32767,Ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,Ge=null;return}}else if(n=bk(n,e,qt),n!==null){Ge=n;return}if(e=e.sibling,e!==null){Ge=e;return}Ge=e=t}while(e!==null);Ye===0&&(Ye=5)}function Ci(t,e,n){var r=ge,i=rn.transition;try{rn.transition=null,ge=1,Mk(t,e,n,r)}finally{rn.transition=i,ge=r}return null}function Mk(t,e,n,r){do ro();while(Fr!==null);if(le&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(g1(t,s),t===nt&&(Ge=nt=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$u||($u=!0,hT(Pc,function(){return ro(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=rn.transition,rn.transition=null;var o=ge;ge=1;var a=le;le|=4,Jm.current=null,Rk(t,n),rT(n,t),nk(lp),Rc=!!ap,lp=ap=null,t.current=n,Ck(n),a1(),le=a,ge=o,rn.transition=s}else t.current=n;if($u&&($u=!1,Fr=t,Kc=i),s=t.pendingLanes,s===0&&(Gr=null),c1(n.stateNode),jt(t,ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wc)throw Wc=!1,t=Pp,Pp=null,t;return Kc&1&&t.tag!==0&&ro(),s=t.pendingLanes,s&1?t===kp?Ga++:(Ga=0,kp=t):Ga=0,fi(),null}function ro(){if(Fr!==null){var t=$E(Kc),e=rn.transition,n=ge;try{if(rn.transition=null,ge=16>t?16:t,Fr===null)var r=!1;else{if(t=Fr,Fr=null,Kc=0,le&6)throw Error(z(331));var i=le;for(le|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(H=c;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:Wa(8,d,s)}var f=d.child;if(f!==null)f.return=d,H=f;else for(;H!==null;){d=H;var m=d.sibling,_=d.return;if(eT(d),d===c){H=null;break}if(m!==null){m.return=_,H=m;break}H=_}}}var S=s.alternate;if(S!==null){var P=S.child;if(P!==null){S.child=null;do{var R=P.sibling;P.sibling=null,P=R}while(P!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wa(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,H=T;break e}H=s.return}}var w=t.current;for(H=w;H!==null;){o=H;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,H=I;else e:for(o=w;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cd(9,a)}}catch(L){Ue(a,a.return,L)}if(a===o){H=null;break e}var A=a.sibling;if(A!==null){A.return=a.return,H=A;break e}H=a.return}}if(le=i,fi(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(Td,t)}catch{}r=!0}return r}finally{ge=n,rn.transition=e}}return!1}function Fv(t,e,n){e=go(n,e),e=$I(t,e,1),t=Kr(t,e,1),e=kt(),t!==null&&(Ll(t,1,e),jt(t,e))}function Ue(t,e,n){if(t.tag===3)Fv(t,t,n);else for(;e!==null;){if(e.tag===3){Fv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gr===null||!Gr.has(r))){t=go(n,t),t=qI(e,t,1),e=Kr(e,t,1),t=kt(),e!==null&&(Ll(e,1,t),jt(e,t));break}}e=e.return}}function Lk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=kt(),t.pingedLanes|=t.suspendedLanes&n,nt===t&&(dt&n)===n&&(Ye===4||Ye===3&&(dt&130023424)===dt&&500>ze()-Zm?$i(t,0):Xm|=n),jt(t,e)}function cT(t,e){e===0&&(t.mode&1?(e=Du,Du<<=1,!(Du&130023424)&&(Du=4194304)):e=1);var n=kt();t=nr(t,e),t!==null&&(Ll(t,e,n),jt(t,n))}function Fk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cT(t,n)}function jk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),cT(t,n)}var dT;dT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Lt.current)Dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Dt=!1,Ak(t,e,n);Dt=!!(t.flags&131072)}else Dt=!1,Re&&e.flags&1048576&&mI(e,Lc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;lc(t,e),t=e.pendingProps;var i=ho(e,xt.current);no(e,n),i=Km(null,e,r,t,i,n);var s=Gm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ft(r)?(s=!0,Oc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bm(e),i.updater=Rd,e.stateNode=i,i._reactInternals=e,yp(e,r,t,n),e=wp(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&Vm(e),Pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(lc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Bk(r),t=dn(r,t),i){case 0:e=vp(null,e,r,t,n);break e;case 1:e=Pv(null,e,r,t,n);break e;case 11:e=Av(null,e,r,t,n);break e;case 14:e=bv(null,e,r,dn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),vp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Pv(t,e,r,i,n);case 3:e:{if(HI(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,EI(t,e),Uc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=go(Error(z(423)),e),e=kv(t,e,r,n,i);break e}else if(r!==i){i=go(Error(z(424)),e),e=kv(t,e,r,n,i);break e}else for(Wt=Wr(e.stateNode.containerInfo.firstChild),Kt=e,Re=!0,fn=null,n=vI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fo(),r===i){e=rr(t,e,n);break e}Pt(t,e,r,n)}e=e.child}return e;case 5:return II(e),t===null&&pp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,up(r,i)?o=null:s!==null&&up(r,s)&&(e.flags|=32),GI(t,e),Pt(t,e,o,n),e.child;case 6:return t===null&&pp(e),null;case 13:return QI(t,e,n);case 4:return zm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=po(e,null,r,n):Pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Av(t,e,r,i,n);case 7:return Pt(t,e,e.pendingProps,n),e.child;case 8:return Pt(t,e,e.pendingProps.children,n),e.child;case 12:return Pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(Fc,r._currentValue),r._currentValue=o,s!==null)if(yn(s.value,o)){if(s.children===i.children&&!Lt.current){e=rr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Jn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),mp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,no(e,n),i=on(i),r=r(i),e.flags|=1,Pt(t,e,r,n),e.child;case 14:return r=e.type,i=dn(r,e.pendingProps),i=dn(r.type,i),bv(t,e,r,i,n);case 15:return WI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),lc(t,e),e.tag=1,Ft(r)?(t=!0,Oc(e)):t=!1,no(e,n),zI(e,r,i),yp(e,r,i,n),wp(null,e,r,!0,t,n);case 19:return YI(t,e,n);case 22:return KI(t,e,n)}throw Error(z(156,e.tag))};function hT(t,e){return jE(t,e)}function Uk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(t,e,n,r){return new Uk(t,e,n,r)}function rg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bk(t){if(typeof t=="function")return rg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Im)return 11;if(t===Tm)return 14}return 2}function Qr(t,e){var n=t.alternate;return n===null?(n=tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function dc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")rg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case js:return qi(n.children,i,s,e);case Em:o=8,i|=8;break;case Bf:return t=tn(12,n,e,i|2),t.elementType=Bf,t.lanes=s,t;case zf:return t=tn(13,n,e,i),t.elementType=zf,t.lanes=s,t;case $f:return t=tn(19,n,e,i),t.elementType=$f,t.lanes=s,t;case IE:return Dd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wE:o=10;break e;case EE:o=9;break e;case Im:o=11;break e;case Tm:o=14;break e;case Ar:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=tn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qi(t,e,n,r){return t=tn(7,t,r,e),t.lanes=n,t}function Dd(t,e,n,r){return t=tn(22,t,r,e),t.elementType=IE,t.lanes=n,t.stateNode={isHidden:!1},t}function _f(t,e,n){return t=tn(6,t,null,e),t.lanes=n,t}function vf(t,e,n){return e=tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xh(0),this.expirationTimes=Xh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ig(t,e,n,r,i,s,o,a,l){return t=new zk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bm(s),t}function $k(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function fT(t){if(!t)return Zr;t=t._reactInternals;e:{if(fs(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Ft(n))return fI(t,n,e)}return e}function pT(t,e,n,r,i,s,o,a,l){return t=ig(n,r,!0,t,i,s,o,a,l),t.context=fT(null),n=t.current,r=kt(),i=Hr(n),s=Jn(r,i),s.callback=e??null,Kr(n,s,i),t.current.lanes=i,Ll(t,i,r),jt(t,r),t}function Vd(t,e,n,r){var i=e.current,s=kt(),o=Hr(i);return n=fT(n),e.context===null?e.context=n:e.pendingContext=n,e=Jn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Kr(i,e,o),t!==null&&(mn(t,i,o,s),sc(t,i,o)),o}function Hc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sg(t,e){jv(t,e),(t=t.alternate)&&jv(t,e)}function qk(){return null}var mT=typeof reportError=="function"?reportError:function(t){console.error(t)};function og(t){this._internalRoot=t}Od.prototype.render=og.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));Vd(t,e,null,null)};Od.prototype.unmount=og.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ji(function(){Vd(null,t,null,null)}),e[tr]=null}};function Od(t){this._internalRoot=t}Od.prototype.unstable_scheduleHydration=function(t){if(t){var e=KE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pr.length&&e!==0&&e<Pr[n].priority;n++);Pr.splice(n,0,t),n===0&&HE(t)}};function ag(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Md(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Uv(){}function Wk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Hc(o);s.call(c)}}var o=pT(e,r,t,0,null,!1,!1,"",Uv);return t._reactRootContainer=o,t[tr]=o.current,ul(t.nodeType===8?t.parentNode:t),Ji(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Hc(l);a.call(c)}}var l=ig(t,0,!1,null,null,!1,!1,"",Uv);return t._reactRootContainer=l,t[tr]=l.current,ul(t.nodeType===8?t.parentNode:t),Ji(function(){Vd(e,l,n,r)}),l}function Ld(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Hc(o);a.call(l)}}Vd(e,o,t,i)}else o=Wk(n,e,t,i,r);return Hc(o)}qE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ca(e.pendingLanes);n!==0&&(Am(e,n|1),jt(e,ze()),!(le&6)&&(yo=ze()+500,fi()))}break;case 13:Ji(function(){var r=nr(t,1);if(r!==null){var i=kt();mn(r,t,1,i)}}),sg(t,1)}};bm=function(t){if(t.tag===13){var e=nr(t,134217728);if(e!==null){var n=kt();mn(e,t,134217728,n)}sg(t,134217728)}};WE=function(t){if(t.tag===13){var e=Hr(t),n=nr(t,e);if(n!==null){var r=kt();mn(n,t,e,r)}sg(t,e)}};KE=function(){return ge};GE=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};Zf=function(t,e,n){switch(e){case"input":if(Kf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=bd(r);if(!i)throw Error(z(90));xE(r),Kf(r,i)}}}break;case"textarea":AE(t,n);break;case"select":e=n.value,e!=null&&Xs(t,!!n.multiple,e,!1)}};DE=eg;VE=Ji;var Kk={usingClientEntryPoint:!1,Events:[jl,$s,bd,CE,NE,eg]},Ia={findFiberByHostInstance:ji,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gk={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=LE(t),t===null?null:t.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||qk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qu.isDisabled&&qu.supportsFiber)try{Td=qu.inject(Gk),Pn=qu}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kk;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ag(e))throw Error(z(200));return $k(t,e,null,n)};Yt.createRoot=function(t,e){if(!ag(t))throw Error(z(299));var n=!1,r="",i=mT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ig(t,1,!1,null,null,n,!1,r,i),t[tr]=e.current,ul(t.nodeType===8?t.parentNode:t),new og(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=LE(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return Ji(t)};Yt.hydrate=function(t,e,n){if(!Md(e))throw Error(z(200));return Ld(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!ag(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=mT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=pT(e,null,t,1,n??null,i,!1,s,o),t[tr]=e.current,ul(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Od(e)};Yt.render=function(t,e,n){if(!Md(e))throw Error(z(200));return Ld(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!Md(t))throw Error(z(40));return t._reactRootContainer?(Ji(function(){Ld(null,null,t,!1,function(){t._reactRootContainer=null,t[tr]=null})}),!0):!1};Yt.unstable_batchedUpdates=eg;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Md(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Ld(t,e,n,!1,r)};Yt.version="18.3.1-next-f1338f8080-20240426";function gT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gT)}catch(t){console.error(t)}}gT(),gE.exports=Yt;var Hk=gE.exports,yT,Bv=Hk;yT=Bv.createRoot,Bv.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _l(){return _l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_l.apply(this,arguments)}var jr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(jr||(jr={}));const zv="popstate";function Qk(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=ps(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Np("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:Qc(s))}function r(i,s){Fd(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Jk(e,n,r,t)}function Oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Fd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Yk(){return Math.random().toString(36).substr(2,8)}function $v(t,e){return{usr:t.state,key:t.key,idx:e}}function Np(t,e,n,r){return n===void 0&&(n=null),_l({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ps(e):e,{state:n,key:e&&e.key||r||Yk()})}function Qc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ps(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Jk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=jr.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(_l({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=jr.Pop;let R=d(),T=R==null?null:R-c;c=R,l&&l({action:a,location:P.location,delta:T})}function m(R,T){a=jr.Push;let w=Np(P.location,R,T);n&&n(w,R),c=d()+1;let I=$v(w,c),A=P.createHref(w);try{o.pushState(I,"",A)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(A)}s&&l&&l({action:a,location:P.location,delta:1})}function _(R,T){a=jr.Replace;let w=Np(P.location,R,T);n&&n(w,R),c=d();let I=$v(w,c),A=P.createHref(w);o.replaceState(I,"",A),s&&l&&l({action:a,location:P.location,delta:0})}function S(R){let T=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof R=="string"?R:Qc(R);return w=w.replace(/ $/,"%20"),Oe(T,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,T)}let P={get action(){return a},get location(){return t(i,o)},listen(R){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(zv,f),l=R,()=>{i.removeEventListener(zv,f),l=null}},createHref(R){return e(i,R)},createURL:S,encodeLocation(R){let T=S(R);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:_,go(R){return o.go(R)}};return P}var qv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(qv||(qv={}));function Xk(t,e,n){return n===void 0&&(n="/"),Zk(t,e,n)}function Zk(t,e,n,r){let i=typeof e=="string"?ps(e):e,s=_o(i.pathname||"/",n);if(s==null)return null;let o=_T(t);eR(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=dR(s);a=uR(o[l],c)}return a}function _T(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Oe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Yr([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Oe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),_T(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:aR(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of vT(s.path))i(s,o,l)}),e}function vT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=vT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function eR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:lR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const tR=/^:[\w-]+$/,nR=3,rR=2,iR=1,sR=10,oR=-2,Wv=t=>t==="*";function aR(t,e){let n=t.split("/"),r=n.length;return n.some(Wv)&&(r+=oR),e&&(r+=rR),n.filter(i=>!Wv(i)).reduce((i,s)=>i+(tR.test(s)?nR:s===""?iR:sR),r)}function lR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function uR(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Dp({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),m=l.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Yr([s,f.pathname]),pathnameBase:gR(Yr([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Yr([s,f.pathnameBase]))}return o}function Dp(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=cR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:_}=d;if(m==="*"){let P=a[f]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const S=a[f];return _&&!S?c[m]=void 0:c[m]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function cR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Fd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function dR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Fd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function _o(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const hR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fR=t=>hR.test(t);function pR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ps(t):t,s;if(n)if(fR(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Fd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Kv(n.substring(1),"/"):s=Kv(n,e)}else s=e;return{pathname:s,search:yR(r),hash:_R(i)}}function Kv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function lg(t,e){let n=mR(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ug(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ps(t):(i=_l({},t),Oe(!i.pathname||!i.pathname.includes("?"),wf("?","pathname","search",i)),Oe(!i.pathname||!i.pathname.includes("#"),wf("#","pathname","hash",i)),Oe(!i.search||!i.search.includes("#"),wf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=pR(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Yr=t=>t.join("/").replace(/\/\/+/g,"/"),gR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),yR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_R=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function vR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const wT=["post","put","patch","delete"];new Set(wT);const wR=["get",...wT];new Set(wR);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vl(){return vl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vl.apply(this,arguments)}const jd=j.createContext(null),ET=j.createContext(null),dr=j.createContext(null),Ud=j.createContext(null),hr=j.createContext({outlet:null,matches:[],isDataRoute:!1}),IT=j.createContext(null);function ER(t,e){let{relative:n}=e===void 0?{}:e;Uo()||Oe(!1);let{basename:r,navigator:i}=j.useContext(dr),{hash:s,pathname:o,search:a}=Bd(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Yr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Uo(){return j.useContext(Ud)!=null}function Bo(){return Uo()||Oe(!1),j.useContext(Ud).location}function TT(t){j.useContext(dr).static||j.useLayoutEffect(t)}function pi(){let{isDataRoute:t}=j.useContext(hr);return t?OR():IR()}function IR(){Uo()||Oe(!1);let t=j.useContext(jd),{basename:e,future:n,navigator:r}=j.useContext(dr),{matches:i}=j.useContext(hr),{pathname:s}=Bo(),o=JSON.stringify(lg(i,n.v7_relativeSplatPath)),a=j.useRef(!1);return TT(()=>{a.current=!0}),j.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=ug(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Yr([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function TR(){let{matches:t}=j.useContext(hr),e=t[t.length-1];return e?e.params:{}}function Bd(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(dr),{matches:i}=j.useContext(hr),{pathname:s}=Bo(),o=JSON.stringify(lg(i,r.v7_relativeSplatPath));return j.useMemo(()=>ug(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function xR(t,e){return SR(t,e)}function SR(t,e,n,r){Uo()||Oe(!1);let{navigator:i}=j.useContext(dr),{matches:s}=j.useContext(hr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Bo(),d;if(e){var f;let R=typeof e=="string"?ps(e):e;l==="/"||(f=R.pathname)!=null&&f.startsWith(l)||Oe(!1),d=R}else d=c;let m=d.pathname||"/",_=m;if(l!=="/"){let R=l.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(R.length).join("/")}let S=Xk(t,{pathname:_}),P=RR(S&&S.map(R=>Object.assign({},R,{params:Object.assign({},a,R.params),pathname:Yr([l,i.encodeLocation?i.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?l:Yr([l,i.encodeLocation?i.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),s,n,r);return e&&P?j.createElement(Ud.Provider,{value:{location:vl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:jr.Pop}},P):P}function AR(){let t=VR(),e=vR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const bR=j.createElement(AR,null);class PR extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(hr.Provider,{value:this.props.routeContext},j.createElement(IT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kR(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(jd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(hr.Provider,{value:e},r)}function RR(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Oe(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:_}=n,S=f.route.loader&&m[f.route.id]===void 0&&(!_||_[f.route.id]===void 0);if(f.route.lazy||S){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let _,S=!1,P=null,R=null;n&&(_=a&&f.route.id?a[f.route.id]:void 0,P=f.route.errorElement||bR,l&&(c<0&&m===0?(MR("route-fallback"),S=!0,R=null):c===m&&(S=!0,R=f.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,m+1)),w=()=>{let I;return _?I=P:S?I=R:f.route.Component?I=j.createElement(f.route.Component,null):f.route.element?I=f.route.element:I=d,j.createElement(kR,{match:f,routeContext:{outlet:d,matches:T,isDataRoute:n!=null},children:I})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?j.createElement(PR,{location:n.location,revalidation:n.revalidation,component:P,error:_,children:w(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):w()},null)}var xT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(xT||{}),ST=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ST||{});function CR(t){let e=j.useContext(jd);return e||Oe(!1),e}function NR(t){let e=j.useContext(ET);return e||Oe(!1),e}function DR(t){let e=j.useContext(hr);return e||Oe(!1),e}function AT(t){let e=DR(),n=e.matches[e.matches.length-1];return n.route.id||Oe(!1),n.route.id}function VR(){var t;let e=j.useContext(IT),n=NR(),r=AT();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function OR(){let{router:t}=CR(xT.UseNavigateStable),e=AT(ST.UseNavigateStable),n=j.useRef(!1);return TT(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,vl({fromRouteId:e},s)))},[t,e])}const Gv={};function MR(t,e,n){Gv[t]||(Gv[t]=!0)}function LR(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function FR(t){let{to:e,replace:n,state:r,relative:i}=t;Uo()||Oe(!1);let{future:s,static:o}=j.useContext(dr),{matches:a}=j.useContext(hr),{pathname:l}=Bo(),c=pi(),d=ug(e,lg(a,s.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(d);return j.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Bn(t){Oe(!1)}function jR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=jr.Pop,navigator:s,static:o=!1,future:a}=t;Uo()&&Oe(!1);let l=e.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:l,navigator:s,static:o,future:vl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ps(r));let{pathname:d="/",search:f="",hash:m="",state:_=null,key:S="default"}=r,P=j.useMemo(()=>{let R=_o(d,l);return R==null?null:{location:{pathname:R,search:f,hash:m,state:_,key:S},navigationType:i}},[l,d,f,m,_,S,i]);return P==null?null:j.createElement(dr.Provider,{value:c},j.createElement(Ud.Provider,{children:n,value:P}))}function UR(t){let{children:e,location:n}=t;return xR(Vp(e),n)}new Promise(()=>{});function Vp(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,Vp(r.props.children,s));return}r.type!==Bn&&Oe(!1),!r.props.index||!r.props.children||Oe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Vp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yc(){return Yc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yc.apply(this,arguments)}function bT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function BR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function zR(t,e){return t.button===0&&(!e||e==="_self")&&!BR(t)}const $R=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],qR=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],WR="6";try{window.__reactRouterVersion=WR}catch{}const KR=j.createContext({isTransitioning:!1}),GR="startTransition",Hv=LP[GR];function HR(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=Qk({window:i,v5Compat:!0}));let o=s.current,[a,l]=j.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=j.useCallback(f=>{c&&Hv?Hv(()=>l(f)):l(f)},[l,c]);return j.useLayoutEffect(()=>o.listen(d),[o,d]),j.useEffect(()=>LR(r),[r]),j.createElement(jR,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const QR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",YR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,JR=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:d,viewTransition:f}=e,m=bT(e,$R),{basename:_}=j.useContext(dr),S,P=!1;if(typeof c=="string"&&YR.test(c)&&(S=c,QR))try{let I=new URL(window.location.href),A=c.startsWith("//")?new URL(I.protocol+c):new URL(c),L=_o(A.pathname,_);A.origin===I.origin&&L!=null?c=L+A.search+A.hash:P=!0}catch{}let R=ER(c,{relative:i}),T=ZR(c,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:f});function w(I){r&&r(I),I.defaultPrevented||T(I)}return j.createElement("a",Yc({},m,{href:S||R,onClick:P||s?r:w,ref:n,target:l}))}),Qv=j.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:c,children:d}=e,f=bT(e,qR),m=Bd(l,{relative:f.relative}),_=Bo(),S=j.useContext(ET),{navigator:P,basename:R}=j.useContext(dr),T=S!=null&&eC(m)&&c===!0,w=P.encodeLocation?P.encodeLocation(m).pathname:m.pathname,I=_.pathname,A=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(I=I.toLowerCase(),A=A?A.toLowerCase():null,w=w.toLowerCase()),A&&R&&(A=_o(A,R)||A);const L=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let N=I===w||!o&&I.startsWith(w)&&I.charAt(L)==="/",v=A!=null&&(A===w||!o&&A.startsWith(w)&&A.charAt(w.length)==="/"),y={isActive:N,isPending:v,isTransitioning:T},x=N?r:void 0,b;typeof s=="function"?b=s(y):b=[s,N?"active":null,v?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let C=typeof a=="function"?a(y):a;return j.createElement(JR,Yc({},f,{"aria-current":x,className:b,ref:n,style:C,to:l,viewTransition:c}),typeof d=="function"?d(y):d)});var Op;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Op||(Op={}));var Yv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Yv||(Yv={}));function XR(t){let e=j.useContext(jd);return e||Oe(!1),e}function ZR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=pi(),c=Bo(),d=Bd(t,{relative:o});return j.useCallback(f=>{if(zR(f,n)){f.preventDefault();let m=r!==void 0?r:Qc(c)===Qc(d);l(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,d,r,i,n,t,s,o,a])}function eC(t,e){e===void 0&&(e={});let n=j.useContext(KR);n==null&&Oe(!1);let{basename:r}=XR(Op.useViewTransitionState),i=Bd(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=_o(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=_o(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Dp(i.pathname,o)!=null||Dp(i.pathname,s)!=null}var Jv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},kT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(m=64)),r.push(n[d],n[f],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(PT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new nC;const m=s<<2|a>>4;if(r.push(m),c!==64){const _=a<<4&240|c>>2;if(r.push(_),f!==64){const S=c<<6&192|f;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rC=function(t){const e=PT(t);return kT.encodeByteArray(e,!0)},Jc=function(t){return rC(t).replace(/\./g,"")},RT=function(t){try{return kT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=()=>iC().__FIREBASE_DEFAULTS__,oC=()=>{if(typeof process>"u"||typeof Jv>"u")return;const t=Jv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&RT(t[1]);return e&&JSON.parse(e)},zd=()=>{try{return sC()||oC()||aC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},CT=t=>{var e,n;return(n=(e=zd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lC=t=>{const e=CT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},NT=()=>{var t;return(t=zd())===null||t===void 0?void 0:t.config},DT=t=>{var e;return(e=zd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Jc(JSON.stringify(n)),Jc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function hC(){var t;const e=(t=zd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gC(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VT(){return!hC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cg(){try{return typeof indexedDB=="object"}catch{return!1}}function OT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function yC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_C,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?vC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mn(i,a,r)}}function vC(t,e){return t.replace(wC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wC=/\{\$([^}]+)}/g;function EC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ei(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xv(s)&&Xv(o)){if(!ei(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Da(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Va(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function IC(t,e){const n=new TC(t,e);return n.subscribe.bind(n)}class TC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ef),i.error===void 0&&(i.error=Ef),i.complete===void 0&&(i.complete=Ef);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ef(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t){return t&&t._delegate?t._delegate:t}class _n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bC(e))try{this.getOrInitializeService({instanceIdentifier:Ni})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ni){return this.instances.has(e)}getOptions(e=Ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ni){return this.component?this.component.multipleInstances?e:Ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AC(t){return t===Ni?void 0:t}function bC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new SC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const kC={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},RC=ie.INFO,CC={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},NC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=CC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dg{constructor(e){this.name=e,this._logLevel=RC,this._logHandler=NC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const DC=(t,e)=>e.some(n=>t instanceof n);let Zv,ew;function VC(){return Zv||(Zv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OC(){return ew||(ew=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const MT=new WeakMap,Mp=new WeakMap,LT=new WeakMap,If=new WeakMap,hg=new WeakMap;function MC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Xn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&MT.set(n,t)}).catch(()=>{}),hg.set(e,t),e}function LC(t){if(Mp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Mp.set(t,e)}let Lp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||LT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FC(t){Lp=t(Lp)}function jC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tf(this),e,...n);return LT.set(r,e.sort?e.sort():[e]),Xn(r)}:OC().includes(t)?function(...e){return t.apply(Tf(this),e),Xn(MT.get(this))}:function(...e){return Xn(t.apply(Tf(this),e))}}function UC(t){return typeof t=="function"?jC(t):(t instanceof IDBTransaction&&LC(t),DC(t,VC())?new Proxy(t,Lp):t)}function Xn(t){if(t instanceof IDBRequest)return MC(t);if(If.has(t))return If.get(t);const e=UC(t);return e!==t&&(If.set(t,e),hg.set(e,t)),e}const Tf=t=>hg.get(t);function $d(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Xn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Xn(o.result),l.oldVersion,l.newVersion,Xn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function xf(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Xn(n).then(()=>{})}const BC=["get","getKey","getAll","getAllKeys","count"],zC=["put","add","delete","clear"],Sf=new Map;function tw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sf.get(e))return Sf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||BC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Sf.set(e,s),s}FC(t=>({...t,get:(e,n,r)=>tw(e,n)||t.get(e,n,r),has:(e,n)=>!!tw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fp="@firebase/app",nw="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new dg("@firebase/app"),WC="@firebase/app-compat",KC="@firebase/analytics-compat",GC="@firebase/analytics",HC="@firebase/app-check-compat",QC="@firebase/app-check",YC="@firebase/auth",JC="@firebase/auth-compat",XC="@firebase/database",ZC="@firebase/data-connect",eN="@firebase/database-compat",tN="@firebase/functions",nN="@firebase/functions-compat",rN="@firebase/installations",iN="@firebase/installations-compat",sN="@firebase/messaging",oN="@firebase/messaging-compat",aN="@firebase/performance",lN="@firebase/performance-compat",uN="@firebase/remote-config",cN="@firebase/remote-config-compat",dN="@firebase/storage",hN="@firebase/storage-compat",fN="@firebase/firestore",pN="@firebase/vertexai-preview",mN="@firebase/firestore-compat",gN="firebase",yN="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="[DEFAULT]",_N={[Fp]:"fire-core",[WC]:"fire-core-compat",[GC]:"fire-analytics",[KC]:"fire-analytics-compat",[QC]:"fire-app-check",[HC]:"fire-app-check-compat",[YC]:"fire-auth",[JC]:"fire-auth-compat",[XC]:"fire-rtdb",[ZC]:"fire-data-connect",[eN]:"fire-rtdb-compat",[tN]:"fire-fn",[nN]:"fire-fn-compat",[rN]:"fire-iid",[iN]:"fire-iid-compat",[sN]:"fire-fcm",[oN]:"fire-fcm-compat",[aN]:"fire-perf",[lN]:"fire-perf-compat",[uN]:"fire-rc",[cN]:"fire-rc-compat",[dN]:"fire-gcs",[hN]:"fire-gcs-compat",[fN]:"fire-fst",[mN]:"fire-fst-compat",[pN]:"fire-vertex","fire-js":"fire-js",[gN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=new Map,vN=new Map,jp=new Map;function rw(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vn(t){const e=t.name;if(jp.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;jp.set(e,t);for(const n of Zc.values())rw(n,t);for(const n of vN.values())rw(n,t);return!0}function mi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function wN(t,e,n=Xc){mi(t,e).clearInstance(n)}function Sn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jr=new ms("app","Firebase",EN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=yN;function FT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Jr.create("bad-app-name",{appName:String(i)});if(n||(n=NT()),!n)throw Jr.create("no-options");const s=Zc.get(i);if(s){if(ei(n,s.options)&&ei(r,s.config))return s;throw Jr.create("duplicate-app",{appName:i})}const o=new PC(i);for(const l of jp.values())o.addComponent(l);const a=new IN(n,r,o);return Zc.set(i,a),a}function fg(t=Xc){const e=Zc.get(t);if(!e&&t===Xc&&NT())return FT();if(!e)throw Jr.create("no-app",{appName:t});return e}function sn(t,e,n){var r;let i=(r=_N[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(a.join(" "));return}Vn(new _n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN="firebase-heartbeat-database",xN=1,wl="firebase-heartbeat-store";let Af=null;function jT(){return Af||(Af=$d(TN,xN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Jr.create("idb-open",{originalErrorMessage:t.message})})),Af}async function SN(t){try{const n=(await jT()).transaction(wl),r=await n.objectStore(wl).get(UT(t));return await n.done,r}catch(e){if(e instanceof Mn)ir.warn(e.message);else{const n=Jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(n.message)}}}async function iw(t,e){try{const r=(await jT()).transaction(wl,"readwrite");await r.objectStore(wl).put(e,UT(t)),await r.done}catch(n){if(n instanceof Mn)ir.warn(n.message);else{const r=Jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ir.warn(r.message)}}}function UT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN=1024,bN=30*24*60*60*1e3;class PN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sw();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=bN}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sw(),{heartbeatsToSend:r,unsentEntries:i}=kN(this._heartbeatsCache.heartbeats),s=Jc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ir.warn(n),""}}}function sw(){return new Date().toISOString().substring(0,10)}function kN(t,e=AN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ow(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ow(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cg()?OT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await SN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ow(t){return Jc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(t){Vn(new _n("platform-logger",e=>new $C(e),"PRIVATE")),Vn(new _n("heartbeat",e=>new PN(e),"PRIVATE")),sn(Fp,nw,t),sn(Fp,nw,"esm2017"),sn("fire-js","")}CN("");function pg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function BT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NN=BT,zT=new ms("auth","Firebase",BT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=new dg("@firebase/auth");function DN(t,...e){ed.logLevel<=ie.WARN&&ed.warn(`Auth (${zo}): ${t}`,...e)}function hc(t,...e){ed.logLevel<=ie.ERROR&&ed.error(`Auth (${zo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,...e){throw mg(t,...e)}function Rn(t,...e){return mg(t,...e)}function $T(t,e,n){const r=Object.assign(Object.assign({},NN()),{[e]:n});return new ms("auth","Firebase",r).create(e,{appName:t.name})}function Zn(t){return $T(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return zT.create(t,...e)}function J(t,e,...n){if(!t)throw mg(e,...n)}function Gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hc(e),new Error(e)}function sr(t,e){t||Gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VN(){return aw()==="http:"||aw()==="https:"}function aw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VN()||pC()||"connection"in navigator)?navigator.onLine:!0}function MN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n){this.shortDelay=e,this.longDelay=n,sr(n>e,"Short delay should be less than long delay!"),this.isMobile=dC()||mC()}get(){return ON()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t,e){sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=new zl(3e4,6e4);function gi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fr(t,e,n,r,i={}){return WT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Bl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return fC()||(c.referrerPolicy="no-referrer"),qT.fetch()(KT(t,t.config.apiHost,n,a),c)})}async function WT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},LN),e);try{const i=new UN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wu(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw $T(t,d,c);vn(t,d)}}catch(i){if(i instanceof Mn)throw i;vn(t,"network-request-failed",{message:String(i)})}}async function $l(t,e,n,r,i={}){const s=await fr(t,e,n,r,i);return"mfaPendingCredential"in s&&vn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function KT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?gg(t.config,i):`${t.config.apiScheme}://${i}`}function jN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class UN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rn(this.auth,"network-request-failed")),FN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rn(t,e,r);return i.customData._tokenResponse=n,i}function lw(t){return t!==void 0&&t.enterprise!==void 0}class BN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return jN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function zN(t,e){return fr(t,"GET","/v2/recaptchaConfig",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $N(t,e){return fr(t,"POST","/v1/accounts:delete",e)}async function GT(t,e){return fr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qN(t,e=!1){const n=he(t),r=await n.getIdToken(e),i=yg(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ha(bf(i.auth_time)),issuedAtTime:Ha(bf(i.iat)),expirationTime:Ha(bf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bf(t){return Number(t)*1e3}function yg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return hc("JWT malformed, contained fewer than 3 sections"),null;try{const i=RT(n);return i?JSON.parse(i):(hc("Failed to decode base64 JWT payload"),null)}catch(i){return hc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uw(t){const e=yg(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&WN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ha(this.lastLoginAt),this.creationTime=Ha(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function td(t){var e;const n=t.auth,r=await t.getIdToken(),i=await vo(t,GT(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?HT(s.providerUserInfo):[],a=HN(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Bp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function GN(t){const e=he(t);await td(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function HT(t){return t.map(e=>{var{providerId:n}=e,r=pg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QN(t,e){const n=await WT(t,{},async()=>{const r=Bl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=KT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YN(t,e){return fr(t,"POST","/v2/accounts:revokeToken",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=uw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await QN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new io;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new io,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Hn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=pg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Bp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await vo(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qN(this,e)}reload(){return GN(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await td(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(Zn(this.auth));const e=await this.getIdToken();return await vo(this,$N(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:A,isAnonymous:L,providerData:N,stsTokenManager:v}=n;J(I&&v,e,"internal-error");const y=io.fromJSON(this.name,v);J(typeof I=="string",e,"internal-error"),Ir(f,e.name),Ir(m,e.name),J(typeof A=="boolean",e,"internal-error"),J(typeof L=="boolean",e,"internal-error"),Ir(_,e.name),Ir(S,e.name),Ir(P,e.name),Ir(R,e.name),Ir(T,e.name),Ir(w,e.name);const x=new Hn({uid:I,auth:e,email:m,emailVerified:A,displayName:f,isAnonymous:L,photoURL:S,phoneNumber:_,tenantId:P,stsTokenManager:y,createdAt:T,lastLoginAt:w});return N&&Array.isArray(N)&&(x.providerData=N.map(b=>Object.assign({},b))),R&&(x._redirectEventId=R),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new io;i.updateFromServerResponse(n);const s=new Hn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await td(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?HT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new io;a.updateFromIdToken(r);const l=new Hn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Bp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=new Map;function Qn(t){sr(t instanceof Function,"Expected a class definition");let e=cw.get(t);return e?(sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cw.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}QT.type="NONE";const dw=QT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t,e,n){return`firebase:${t}:${e}:${n}`}class so{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=fc(this.userKey,i.apiKey,s),this.fullPersistenceKey=fc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new so(Qn(dw),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Qn(dw);const o=fc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Hn._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new so(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new so(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ZT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(YT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tx(e))return"Blackberry";if(nx(e))return"Webos";if(JT(e))return"Safari";if((e.includes("chrome/")||XT(e))&&!e.includes("edge/"))return"Chrome";if(ex(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function YT(t=Je()){return/firefox\//i.test(t)}function JT(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function XT(t=Je()){return/crios\//i.test(t)}function ZT(t=Je()){return/iemobile/i.test(t)}function ex(t=Je()){return/android/i.test(t)}function tx(t=Je()){return/blackberry/i.test(t)}function nx(t=Je()){return/webos/i.test(t)}function _g(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JN(t=Je()){var e;return _g(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function XN(){return gC()&&document.documentMode===10}function rx(t=Je()){return _g(t)||ex(t)||nx(t)||tx(t)||/windows phone/i.test(t)||ZT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(t,e=[]){let n;switch(t){case"Browser":n=hw(Je());break;case"Worker":n=`${hw(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eD(t,e={}){return fr(t,"GET","/v2/passwordPolicy",gi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD=6;class nD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fw(this),this.idTokenSubscription=new fw(this),this.beforeStateQueue=new ZN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await so.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await GT(this,{idToken:e}),r=await Hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await td(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(Zn(this));const n=e?he(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eD(this),n=new nD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ms("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[Qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ix(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function gs(t){return he(t)}class fw{constructor(e){this.auth=e,this.observer=null,this.addObserver=IC(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iD(t){qd=t}function sx(t){return qd.loadJS(t)}function sD(){return qd.recaptchaEnterpriseScript}function oD(){return qd.gapiScript}function aD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const lD="recaptcha-enterprise",uD="NO_RECAPTCHA";class cD{constructor(e){this.type=lD,this.auth=gs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{zN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new BN(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;lw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(uD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&lw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=sD();l.length!==0&&(l+=a),sx(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function pw(t,e,n,r=!1){const i=new cD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function zp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await pw(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await pw(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(t,e){const n=mi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ei(s,e??{}))return i;vn(i,"already-initialized")}return n.initialize({options:e})}function hD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fD(t,e,n){const r=gs(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ox(e),{host:o,port:a}=pD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),mD()}function ox(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pD(t){const e=ox(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:mw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:mw(o)}}}function mw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(e){return Gn("not implemented")}_linkToIdToken(e,n){return Gn("not implemented")}_getReauthenticationResolver(e){return Gn("not implemented")}}async function gD(t,e){return fr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yD(t,e){return $l(t,"POST","/v1/accounts:signInWithPassword",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _D(t,e){return $l(t,"POST","/v1/accounts:signInWithEmailLink",gi(t,e))}async function vD(t,e){return $l(t,"POST","/v1/accounts:signInWithEmailLink",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends vg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new El(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new El(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zp(e,n,"signInWithPassword",yD);case"emailLink":return _D(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zp(e,r,"signUpPassword",gD);case"emailLink":return vD(e,{idToken:n,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t,e){return $l(t,"POST","/v1/accounts:signInWithIdp",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD="http://localhost";class Xi extends vg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=pg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Xi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return oo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,oo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oo(e,n)}buildRequest(){const e={requestUri:wD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ID(t){const e=Da(Va(t)).link,n=e?Da(Va(e)).deep_link_id:null,r=Da(Va(t)).deep_link_id;return(r?Da(Va(r)).link:null)||r||n||e||t}class wg{constructor(e){var n,r,i,s,o,a;const l=Da(Va(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=ED((i=l.mode)!==null&&i!==void 0?i:null);J(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ID(e);try{return new wg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.providerId=$o.PROVIDER_ID}static credential(e,n){return El._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=wg.parseLink(n);return J(r,"argument-error"),El._fromEmailAndCode(e,r.code,r.tenantId)}}$o.PROVIDER_ID="password";$o.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$o.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends ax{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends ql{constructor(){super("facebook.com")}static credential(e){return Xi._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends ql{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xi._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cr.credential(n,r)}catch{return null}}}Cr.GOOGLE_SIGN_IN_METHOD="google.com";Cr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends ql{constructor(){super("github.com")}static credential(e){return Xi._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends ql{constructor(){super("twitter.com")}static credential(e,n){return Xi._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dr.credential(n,r)}catch{return null}}}Dr.TWITTER_SIGN_IN_METHOD="twitter.com";Dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TD(t,e){return $l(t,"POST","/v1/accounts:signUp",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Hn._fromIdTokenResponse(e,r,i),o=gw(r);return new Zi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=gw(r);return new Zi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function gw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd extends Mn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,nd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new nd(e,n,r,i)}}function lx(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?nd._fromErrorAndOperation(t,s,e,r):s})}async function xD(t,e,n=!1){const r=await vo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SD(t,e,n=!1){const{auth:r}=t;if(Sn(r.app))return Promise.reject(Zn(r));const i="reauthenticate";try{const s=await vo(t,lx(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=yg(s.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),Zi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ux(t,e,n=!1){if(Sn(t.app))return Promise.reject(Zn(t));const r="signIn",i=await lx(t,r,e),s=await Zi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function AD(t,e){return ux(gs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cx(t){const e=gs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bD(t,e,n){if(Sn(t.app))return Promise.reject(Zn(t));const r=gs(t),o=await zp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",TD).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&cx(t),l}),a=await Zi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function PD(t,e,n){return Sn(t.app)?Promise.reject(Zn(t)):AD(he(t),$o.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&cx(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kD(t,e){return fr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RD(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=he(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await vo(r,kD(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function CD(t,e,n,r){return he(t).onIdTokenChanged(e,n,r)}function ND(t,e,n){return he(t).beforeAuthStateChanged(e,n)}function DD(t,e,n,r){return he(t).onAuthStateChanged(e,n,r)}function VD(t){return he(t).signOut()}const rd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rd,"1"),this.storage.removeItem(rd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=1e3,MD=10;class hx extends dx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);XN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,MD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hx.type="LOCAL";const LD=hx;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx extends dx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fx.type="SESSION";const px=fx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Wd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await FD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Eg("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){return window}function UD(t){Cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mx(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function BD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $D(){return mx()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx="firebaseLocalStorageDb",qD=1,id="firebaseLocalStorage",yx="fbase_key";class Wl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kd(t,e){return t.transaction([id],e?"readwrite":"readonly").objectStore(id)}function WD(){const t=indexedDB.deleteDatabase(gx);return new Wl(t).toPromise()}function $p(){const t=indexedDB.open(gx,qD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(id,{keyPath:yx})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(id)?e(r):(r.close(),await WD(),e(await $p()))})})}async function yw(t,e,n){const r=Kd(t,!0).put({[yx]:e,value:n});return new Wl(r).toPromise()}async function KD(t,e){const n=Kd(t,!1).get(e),r=await new Wl(n).toPromise();return r===void 0?null:r.value}function _w(t,e){const n=Kd(t,!0).delete(e);return new Wl(n).toPromise()}const GD=800,HD=3;class _x{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $p(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>HD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mx()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wd._getInstance($D()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await BD(),!this.activeServiceWorker)return;this.sender=new jD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $p();return await yw(e,rd,"1"),await _w(e,rd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_w(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Kd(i,!1).getAll();return new Wl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_x.type="LOCAL";const QD=_x;new zl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YD(t,e){return e?Qn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig extends vg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JD(t){return ux(t.auth,new Ig(t),t.bypassAuthState)}function XD(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),SD(n,new Ig(t),t.bypassAuthState)}async function ZD(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),xD(n,new Ig(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JD;case"linkViaPopup":case"linkViaRedirect":return ZD;case"reauthViaPopup":case"reauthViaRedirect":return XD;default:vn(this.auth,"internal-error")}}resolve(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2=new zl(2e3,1e4);class Ys extends vx{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ys.currentPopupAction&&Ys.currentPopupAction.cancel(),Ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){sr(this.filter.length===1,"Popup operations only handle one event");const e=Eg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,e2.get())};e()}}Ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2="pendingRedirect",pc=new Map;class n2 extends vx{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=pc.get(this.auth._key());if(!e){try{const r=await r2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}pc.set(this.auth._key(),e)}return this.bypassAuthState||pc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function r2(t,e){const n=o2(e),r=s2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function i2(t,e){pc.set(t._key(),e)}function s2(t){return Qn(t._redirectPersistence)}function o2(t){return fc(t2,t.config.apiKey,t.name)}async function a2(t,e,n=!1){if(Sn(t.app))return Promise.reject(Zn(t));const r=gs(t),i=YD(r,e),o=await new n2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2=10*60*1e3;class u2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!c2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!wx(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=l2&&this.cachedEventUids.clear(),this.cachedEventUids.has(vw(e))}saveEventToCache(e){this.cachedEventUids.add(vw(e)),this.lastProcessedEventTime=Date.now()}}function vw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wx({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function c2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wx(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d2(t,e={}){return fr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,f2=/^https?/;async function p2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await d2(t);for(const n of e)try{if(m2(n))return}catch{}vn(t,"unauthorized-domain")}function m2(t){const e=Up(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!f2.test(n))return!1;if(h2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=new zl(3e4,6e4);function ww(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function y2(t){return new Promise((e,n)=>{var r,i,s;function o(){ww(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ww(),n(Rn(t,"network-request-failed"))},timeout:g2.get()})}if(!((i=(r=Cn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Cn().gapi)===null||s===void 0)&&s.load)o();else{const a=aD("iframefcb");return Cn()[a]=()=>{gapi.load?o():n(Rn(t,"network-request-failed"))},sx(`${oD()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw mc=null,e})}let mc=null;function _2(t){return mc=mc||y2(t),mc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2=new zl(5e3,15e3),w2="__/auth/iframe",E2="emulator/auth/iframe",I2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},T2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function x2(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gg(e,E2):`https://${t.config.authDomain}/${w2}`,r={apiKey:e.apiKey,appName:t.name,v:zo},i=T2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Bl(r).slice(1)}`}async function S2(t){const e=await _2(t),n=Cn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:x2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:I2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),a=Cn().setTimeout(()=>{s(o)},v2.get());function l(){Cn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},b2=500,P2=600,k2="_blank",R2="http://localhost";class Ew{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function C2(t,e,n,r=b2,i=P2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},A2),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Je().toLowerCase();n&&(a=XT(c)?k2:n),YT(c)&&(e=e||R2,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[_,S])=>`${m}${_}=${S},`,"");if(JN(c)&&a!=="_self")return N2(e||"",a),new Ew(null);const f=window.open(e||"",a,d);J(f,t,"popup-blocked");try{f.focus()}catch{}return new Ew(f)}function N2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2="__/auth/handler",V2="emulator/auth/handler",O2=encodeURIComponent("fac");async function Iw(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zo,eventId:i};if(e instanceof ax){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof ql){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${O2}=${encodeURIComponent(l)}`:"";return`${M2(t)}?${Bl(a).slice(1)}${c}`}function M2({config:t}){return t.emulator?gg(t,V2):`https://${t.authDomain}/${D2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="webStorageSupport";class L2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=px,this._completeRedirectFn=a2,this._overrideRedirectResult=i2}async _openPopup(e,n,r,i){var s;sr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Iw(e,n,r,Up(),i);return C2(e,o,Eg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Iw(e,n,r,Up(),i);return UD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await S2(e),r=new u2(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pf,{type:Pf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Pf];o!==void 0&&n(!!o),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=p2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rx()||JT()||_g()}}const F2=L2;var Tw="@firebase/auth",xw="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function B2(t){Vn(new _n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ix(t)},c=new rD(r,i,s,l);return hD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vn(new _n("auth-internal",e=>{const n=gs(e.getProvider("auth").getImmediate());return(r=>new j2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(Tw,xw,U2(t)),sn(Tw,xw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2=5*60,$2=DT("authIdTokenMaxAge")||z2;let Sw=null;const q2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$2)return;const i=n==null?void 0:n.token;Sw!==i&&(Sw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function W2(t=fg()){const e=mi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dD(t,{popupRedirectResolver:F2,persistence:[QD,LD,px]}),r=DT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=q2(s.toString());ND(n,o,()=>o(n.currentUser)),CD(n,a=>o(a))}}const i=CT("auth");return i&&fD(n,`http://${i}`),n}function K2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}iD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",K2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});B2("Browser");var Aw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wi,Ex;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function x(){}x.prototype=y.prototype,v.D=y.prototype,v.prototype=new x,v.prototype.constructor=v,v.C=function(b,C,D){for(var k=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)k[ot-2]=arguments[ot];return y.prototype[C].apply(b,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,x){x||(x=0);var b=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)b[C]=y.charCodeAt(x++)|y.charCodeAt(x++)<<8|y.charCodeAt(x++)<<16|y.charCodeAt(x++)<<24;else for(C=0;16>C;++C)b[C]=y[x++]|y[x++]<<8|y[x++]<<16|y[x++]<<24;y=v.g[0],x=v.g[1],C=v.g[2];var D=v.g[3],k=y+(D^x&(C^D))+b[0]+3614090360&4294967295;y=x+(k<<7&4294967295|k>>>25),k=D+(C^y&(x^C))+b[1]+3905402710&4294967295,D=y+(k<<12&4294967295|k>>>20),k=C+(x^D&(y^x))+b[2]+606105819&4294967295,C=D+(k<<17&4294967295|k>>>15),k=x+(y^C&(D^y))+b[3]+3250441966&4294967295,x=C+(k<<22&4294967295|k>>>10),k=y+(D^x&(C^D))+b[4]+4118548399&4294967295,y=x+(k<<7&4294967295|k>>>25),k=D+(C^y&(x^C))+b[5]+1200080426&4294967295,D=y+(k<<12&4294967295|k>>>20),k=C+(x^D&(y^x))+b[6]+2821735955&4294967295,C=D+(k<<17&4294967295|k>>>15),k=x+(y^C&(D^y))+b[7]+4249261313&4294967295,x=C+(k<<22&4294967295|k>>>10),k=y+(D^x&(C^D))+b[8]+1770035416&4294967295,y=x+(k<<7&4294967295|k>>>25),k=D+(C^y&(x^C))+b[9]+2336552879&4294967295,D=y+(k<<12&4294967295|k>>>20),k=C+(x^D&(y^x))+b[10]+4294925233&4294967295,C=D+(k<<17&4294967295|k>>>15),k=x+(y^C&(D^y))+b[11]+2304563134&4294967295,x=C+(k<<22&4294967295|k>>>10),k=y+(D^x&(C^D))+b[12]+1804603682&4294967295,y=x+(k<<7&4294967295|k>>>25),k=D+(C^y&(x^C))+b[13]+4254626195&4294967295,D=y+(k<<12&4294967295|k>>>20),k=C+(x^D&(y^x))+b[14]+2792965006&4294967295,C=D+(k<<17&4294967295|k>>>15),k=x+(y^C&(D^y))+b[15]+1236535329&4294967295,x=C+(k<<22&4294967295|k>>>10),k=y+(C^D&(x^C))+b[1]+4129170786&4294967295,y=x+(k<<5&4294967295|k>>>27),k=D+(x^C&(y^x))+b[6]+3225465664&4294967295,D=y+(k<<9&4294967295|k>>>23),k=C+(y^x&(D^y))+b[11]+643717713&4294967295,C=D+(k<<14&4294967295|k>>>18),k=x+(D^y&(C^D))+b[0]+3921069994&4294967295,x=C+(k<<20&4294967295|k>>>12),k=y+(C^D&(x^C))+b[5]+3593408605&4294967295,y=x+(k<<5&4294967295|k>>>27),k=D+(x^C&(y^x))+b[10]+38016083&4294967295,D=y+(k<<9&4294967295|k>>>23),k=C+(y^x&(D^y))+b[15]+3634488961&4294967295,C=D+(k<<14&4294967295|k>>>18),k=x+(D^y&(C^D))+b[4]+3889429448&4294967295,x=C+(k<<20&4294967295|k>>>12),k=y+(C^D&(x^C))+b[9]+568446438&4294967295,y=x+(k<<5&4294967295|k>>>27),k=D+(x^C&(y^x))+b[14]+3275163606&4294967295,D=y+(k<<9&4294967295|k>>>23),k=C+(y^x&(D^y))+b[3]+4107603335&4294967295,C=D+(k<<14&4294967295|k>>>18),k=x+(D^y&(C^D))+b[8]+1163531501&4294967295,x=C+(k<<20&4294967295|k>>>12),k=y+(C^D&(x^C))+b[13]+2850285829&4294967295,y=x+(k<<5&4294967295|k>>>27),k=D+(x^C&(y^x))+b[2]+4243563512&4294967295,D=y+(k<<9&4294967295|k>>>23),k=C+(y^x&(D^y))+b[7]+1735328473&4294967295,C=D+(k<<14&4294967295|k>>>18),k=x+(D^y&(C^D))+b[12]+2368359562&4294967295,x=C+(k<<20&4294967295|k>>>12),k=y+(x^C^D)+b[5]+4294588738&4294967295,y=x+(k<<4&4294967295|k>>>28),k=D+(y^x^C)+b[8]+2272392833&4294967295,D=y+(k<<11&4294967295|k>>>21),k=C+(D^y^x)+b[11]+1839030562&4294967295,C=D+(k<<16&4294967295|k>>>16),k=x+(C^D^y)+b[14]+4259657740&4294967295,x=C+(k<<23&4294967295|k>>>9),k=y+(x^C^D)+b[1]+2763975236&4294967295,y=x+(k<<4&4294967295|k>>>28),k=D+(y^x^C)+b[4]+1272893353&4294967295,D=y+(k<<11&4294967295|k>>>21),k=C+(D^y^x)+b[7]+4139469664&4294967295,C=D+(k<<16&4294967295|k>>>16),k=x+(C^D^y)+b[10]+3200236656&4294967295,x=C+(k<<23&4294967295|k>>>9),k=y+(x^C^D)+b[13]+681279174&4294967295,y=x+(k<<4&4294967295|k>>>28),k=D+(y^x^C)+b[0]+3936430074&4294967295,D=y+(k<<11&4294967295|k>>>21),k=C+(D^y^x)+b[3]+3572445317&4294967295,C=D+(k<<16&4294967295|k>>>16),k=x+(C^D^y)+b[6]+76029189&4294967295,x=C+(k<<23&4294967295|k>>>9),k=y+(x^C^D)+b[9]+3654602809&4294967295,y=x+(k<<4&4294967295|k>>>28),k=D+(y^x^C)+b[12]+3873151461&4294967295,D=y+(k<<11&4294967295|k>>>21),k=C+(D^y^x)+b[15]+530742520&4294967295,C=D+(k<<16&4294967295|k>>>16),k=x+(C^D^y)+b[2]+3299628645&4294967295,x=C+(k<<23&4294967295|k>>>9),k=y+(C^(x|~D))+b[0]+4096336452&4294967295,y=x+(k<<6&4294967295|k>>>26),k=D+(x^(y|~C))+b[7]+1126891415&4294967295,D=y+(k<<10&4294967295|k>>>22),k=C+(y^(D|~x))+b[14]+2878612391&4294967295,C=D+(k<<15&4294967295|k>>>17),k=x+(D^(C|~y))+b[5]+4237533241&4294967295,x=C+(k<<21&4294967295|k>>>11),k=y+(C^(x|~D))+b[12]+1700485571&4294967295,y=x+(k<<6&4294967295|k>>>26),k=D+(x^(y|~C))+b[3]+2399980690&4294967295,D=y+(k<<10&4294967295|k>>>22),k=C+(y^(D|~x))+b[10]+4293915773&4294967295,C=D+(k<<15&4294967295|k>>>17),k=x+(D^(C|~y))+b[1]+2240044497&4294967295,x=C+(k<<21&4294967295|k>>>11),k=y+(C^(x|~D))+b[8]+1873313359&4294967295,y=x+(k<<6&4294967295|k>>>26),k=D+(x^(y|~C))+b[15]+4264355552&4294967295,D=y+(k<<10&4294967295|k>>>22),k=C+(y^(D|~x))+b[6]+2734768916&4294967295,C=D+(k<<15&4294967295|k>>>17),k=x+(D^(C|~y))+b[13]+1309151649&4294967295,x=C+(k<<21&4294967295|k>>>11),k=y+(C^(x|~D))+b[4]+4149444226&4294967295,y=x+(k<<6&4294967295|k>>>26),k=D+(x^(y|~C))+b[11]+3174756917&4294967295,D=y+(k<<10&4294967295|k>>>22),k=C+(y^(D|~x))+b[2]+718787259&4294967295,C=D+(k<<15&4294967295|k>>>17),k=x+(D^(C|~y))+b[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(C+(k<<21&4294967295|k>>>11))&4294967295,v.g[2]=v.g[2]+C&4294967295,v.g[3]=v.g[3]+D&4294967295}r.prototype.u=function(v,y){y===void 0&&(y=v.length);for(var x=y-this.blockSize,b=this.B,C=this.h,D=0;D<y;){if(C==0)for(;D<=x;)i(this,v,D),D+=this.blockSize;if(typeof v=="string"){for(;D<y;)if(b[C++]=v.charCodeAt(D++),C==this.blockSize){i(this,b),C=0;break}}else for(;D<y;)if(b[C++]=v[D++],C==this.blockSize){i(this,b),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;var x=8*this.o;for(y=v.length-8;y<v.length;++y)v[y]=x&255,x/=256;for(this.u(v),v=Array(16),y=x=0;4>y;++y)for(var b=0;32>b;b+=8)v[x++]=this.g[y]>>>b&255;return v};function s(v,y){var x=a;return Object.prototype.hasOwnProperty.call(x,v)?x[v]:x[v]=y(v)}function o(v,y){this.h=y;for(var x=[],b=!0,C=v.length-1;0<=C;C--){var D=v[C]|0;b&&D==y||(x[C]=D,b=!1)}this.g=x}var a={};function l(v){return-128<=v&&128>v?s(v,function(y){return new o([y|0],0>y?-1:0)}):new o([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return f;if(0>v)return R(c(-v));for(var y=[],x=1,b=0;v>=x;b++)y[b]=v/x|0,x*=4294967296;return new o(y,0)}function d(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return R(d(v.substring(1),y));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=c(Math.pow(y,8)),b=f,C=0;C<v.length;C+=8){var D=Math.min(8,v.length-C),k=parseInt(v.substring(C,C+D),y);8>D?(D=c(Math.pow(y,D)),b=b.j(D).add(c(k))):(b=b.j(x),b=b.add(c(k)))}return b}var f=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-R(this).m();for(var v=0,y=1,x=0;x<this.g.length;x++){var b=this.i(x);v+=(0<=b?b:4294967296+b)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S(this))return"0";if(P(this))return"-"+R(this).toString(v);for(var y=c(Math.pow(v,6)),x=this,b="";;){var C=A(x,y).g;x=T(x,C.j(y));var D=((0<x.g.length?x.g[0]:x.h)>>>0).toString(v);if(x=C,S(x))return D+b;for(;6>D.length;)D="0"+D;b=D+b}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function S(v){if(v.h!=0)return!1;for(var y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function P(v){return v.h==-1}t.l=function(v){return v=T(this,v),P(v)?-1:S(v)?0:1};function R(v){for(var y=v.g.length,x=[],b=0;b<y;b++)x[b]=~v.g[b];return new o(x,~v.h).add(m)}t.abs=function(){return P(this)?R(this):this},t.add=function(v){for(var y=Math.max(this.g.length,v.g.length),x=[],b=0,C=0;C<=y;C++){var D=b+(this.i(C)&65535)+(v.i(C)&65535),k=(D>>>16)+(this.i(C)>>>16)+(v.i(C)>>>16);b=k>>>16,D&=65535,k&=65535,x[C]=k<<16|D}return new o(x,x[x.length-1]&-2147483648?-1:0)};function T(v,y){return v.add(R(y))}t.j=function(v){if(S(this)||S(v))return f;if(P(this))return P(v)?R(this).j(R(v)):R(R(this).j(v));if(P(v))return R(this.j(R(v)));if(0>this.l(_)&&0>v.l(_))return c(this.m()*v.m());for(var y=this.g.length+v.g.length,x=[],b=0;b<2*y;b++)x[b]=0;for(b=0;b<this.g.length;b++)for(var C=0;C<v.g.length;C++){var D=this.i(b)>>>16,k=this.i(b)&65535,ot=v.i(C)>>>16,Fn=v.i(C)&65535;x[2*b+2*C]+=k*Fn,w(x,2*b+2*C),x[2*b+2*C+1]+=D*Fn,w(x,2*b+2*C+1),x[2*b+2*C+1]+=k*ot,w(x,2*b+2*C+1),x[2*b+2*C+2]+=D*ot,w(x,2*b+2*C+2)}for(b=0;b<y;b++)x[b]=x[2*b+1]<<16|x[2*b];for(b=y;b<2*y;b++)x[b]=0;return new o(x,0)};function w(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function I(v,y){this.g=v,this.h=y}function A(v,y){if(S(y))throw Error("division by zero");if(S(v))return new I(f,f);if(P(v))return y=A(R(v),y),new I(R(y.g),R(y.h));if(P(y))return y=A(v,R(y)),new I(R(y.g),y.h);if(30<v.g.length){if(P(v)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var x=m,b=y;0>=b.l(v);)x=L(x),b=L(b);var C=N(x,1),D=N(b,1);for(b=N(b,2),x=N(x,2);!S(b);){var k=D.add(b);0>=k.l(v)&&(C=C.add(x),D=k),b=N(b,1),x=N(x,1)}return y=T(v,C.j(y)),new I(C,y)}for(C=f;0<=v.l(y);){for(x=Math.max(1,Math.floor(v.m()/y.m())),b=Math.ceil(Math.log(x)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),D=c(x),k=D.j(y);P(k)||0<k.l(v);)x-=b,D=c(x),k=D.j(y);S(D)&&(D=m),C=C.add(D),v=T(v,k)}return new I(C,v)}t.A=function(v){return A(this,v).h},t.and=function(v){for(var y=Math.max(this.g.length,v.g.length),x=[],b=0;b<y;b++)x[b]=this.i(b)&v.i(b);return new o(x,this.h&v.h)},t.or=function(v){for(var y=Math.max(this.g.length,v.g.length),x=[],b=0;b<y;b++)x[b]=this.i(b)|v.i(b);return new o(x,this.h|v.h)},t.xor=function(v){for(var y=Math.max(this.g.length,v.g.length),x=[],b=0;b<y;b++)x[b]=this.i(b)^v.i(b);return new o(x,this.h^v.h)};function L(v){for(var y=v.g.length+1,x=[],b=0;b<y;b++)x[b]=v.i(b)<<1|v.i(b-1)>>>31;return new o(x,v.h)}function N(v,y){var x=y>>5;y%=32;for(var b=v.g.length-x,C=[],D=0;D<b;D++)C[D]=0<y?v.i(D+x)>>>y|v.i(D+x+1)<<32-y:v.i(D+x);return new o(C,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ex=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Wi=o}).apply(typeof Aw<"u"?Aw:typeof self<"u"?self:typeof window<"u"?window:{});var Ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ix,Oa,Tx,gc,qp,xx,Sx,Ax;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,h,p){return u==Array.prototype||u==Object.prototype||(u[h]=p.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ku=="object"&&Ku];for(var h=0;h<u.length;++h){var p=u[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(u,h){if(h)e:{var p=r;u=u.split(".");for(var E=0;E<u.length-1;E++){var O=u[E];if(!(O in p))break e;p=p[O]}u=u[u.length-1],E=p[u],h=h(E),h!=E&&h!=null&&e(p,u,{configurable:!0,writable:!0,value:h})}}function s(u,h){u instanceof String&&(u+="");var p=0,E=!1,O={next:function(){if(!E&&p<u.length){var F=p++;return{value:h(F,u[F]),done:!1}}return E=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(u){return u||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var h=typeof u;return h=h!="object"?h:u?Array.isArray(u)?"array":h:"null",h=="array"||h=="object"&&typeof u.length=="number"}function c(u){var h=typeof u;return h=="object"&&u!=null||h=="function"}function d(u,h,p){return u.call.apply(u.bind,arguments)}function f(u,h,p){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,E),u.apply(h,O)}}return function(){return u.apply(h,arguments)}}function m(u,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function _(u,h){var p=Array.prototype.slice.call(arguments,1);return function(){var E=p.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function S(u,h){function p(){}p.prototype=h.prototype,u.aa=h.prototype,u.prototype=new p,u.prototype.constructor=u,u.Qb=function(E,O,F){for(var q=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)q[ve-2]=arguments[ve];return h.prototype[O].apply(E,q)}}function P(u){const h=u.length;if(0<h){const p=Array(h);for(let E=0;E<h;E++)p[E]=u[E];return p}return[]}function R(u,h){for(let p=1;p<arguments.length;p++){const E=arguments[p];if(l(E)){const O=u.length||0,F=E.length||0;u.length=O+F;for(let q=0;q<F;q++)u[O+q]=E[q]}else u.push(E)}}class T{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(u){return/^[\s\xa0]*$/.test(u)}function I(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function A(u){return A[" "](u),u}A[" "]=function(){};var L=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function N(u,h,p){for(const E in u)h.call(p,u[E],E,u)}function v(u,h){for(const p in u)h.call(void 0,u[p],p,u)}function y(u){const h={};for(const p in u)h[p]=u[p];return h}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(u,h){let p,E;for(let O=1;O<arguments.length;O++){E=arguments[O];for(p in E)u[p]=E[p];for(let F=0;F<x.length;F++)p=x[F],Object.prototype.hasOwnProperty.call(E,p)&&(u[p]=E[p])}}function C(u){var h=1;u=u.split(":");const p=[];for(;0<h&&u.length;)p.push(u.shift()),h--;return u.length&&p.push(u.join(":")),p}function D(u){a.setTimeout(()=>{throw u},0)}function k(){var u=X;let h=null;return u.g&&(h=u.g,u.g=u.g.next,u.g||(u.h=null),h.next=null),h}class ot{constructor(){this.h=this.g=null}add(h,p){const E=Fn.get();E.set(h,p),this.h?this.h.next=E:this.g=E,this.h=E}}var Fn=new T(()=>new ue,u=>u.reset());class ue{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Xt,K=!1,X=new ot,ee=()=>{const u=a.Promise.resolve(void 0);Xt=()=>{u.then(Ie)}};var Ie=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(p){D(p)}var h=Fn;h.j(u),100>h.h&&(h.h++,u.next=h.g,h.g=u)}K=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(u,h){this.type=u,this.g=this.target=h,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var Ut=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,h=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return u}();function Bt(u,h){if(Pe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var p=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=h,h=u.relatedTarget){if(L){e:{try{A(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else p=="mouseover"?h=u.fromElement:p=="mouseout"&&(h=u.toElement);this.relatedTarget=h,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:zt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Bt.aa.h.call(this)}}S(Bt,Pe);var zt={2:"touch",3:"pen",4:"mouse"};Bt.prototype.h=function(){Bt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ln="closure_listenable_"+(1e6*Math.random()|0),Ih=0;function Th(u,h,p,E,O){this.listener=u,this.proxy=null,this.src=h,this.type=p,this.capture=!!E,this.ha=O,this.key=++Ih,this.da=this.fa=!1}function cu(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function du(u){this.src=u,this.g={},this.h=0}du.prototype.add=function(u,h,p,E,O){var F=u.toString();u=this.g[F],u||(u=this.g[F]=[],this.h++);var q=Sh(u,h,E,O);return-1<q?(h=u[q],p||(h.fa=!1)):(h=new Th(h,this.src,F,!!E,O),h.fa=p,u.push(h)),h};function xh(u,h){var p=h.type;if(p in u.g){var E=u.g[p],O=Array.prototype.indexOf.call(E,h,void 0),F;(F=0<=O)&&Array.prototype.splice.call(E,O,1),F&&(cu(h),u.g[p].length==0&&(delete u.g[p],u.h--))}}function Sh(u,h,p,E){for(var O=0;O<u.length;++O){var F=u[O];if(!F.da&&F.listener==h&&F.capture==!!p&&F.ha==E)return O}return-1}var Ah="closure_lm_"+(1e6*Math.random()|0),bh={};function Vy(u,h,p,E,O){if(Array.isArray(h)){for(var F=0;F<h.length;F++)Vy(u,h[F],p,E,O);return null}return p=Ly(p),u&&u[ln]?u.K(h,p,c(E)?!!E.capture:!1,O):Wb(u,h,p,!1,E,O)}function Wb(u,h,p,E,O,F){if(!h)throw Error("Invalid event type");var q=c(O)?!!O.capture:!!O,ve=kh(u);if(ve||(u[Ah]=ve=new du(u)),p=ve.add(h,p,E,q,F),p.proxy)return p;if(E=Kb(),p.proxy=E,E.src=u,E.listener=p,u.addEventListener)Ut||(O=q),O===void 0&&(O=!1),u.addEventListener(h.toString(),E,O);else if(u.attachEvent)u.attachEvent(My(h.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Kb(){function u(p){return h.call(u.src,u.listener,p)}const h=Gb;return u}function Oy(u,h,p,E,O){if(Array.isArray(h))for(var F=0;F<h.length;F++)Oy(u,h[F],p,E,O);else E=c(E)?!!E.capture:!!E,p=Ly(p),u&&u[ln]?(u=u.i,h=String(h).toString(),h in u.g&&(F=u.g[h],p=Sh(F,p,E,O),-1<p&&(cu(F[p]),Array.prototype.splice.call(F,p,1),F.length==0&&(delete u.g[h],u.h--)))):u&&(u=kh(u))&&(h=u.g[h.toString()],u=-1,h&&(u=Sh(h,p,E,O)),(p=-1<u?h[u]:null)&&Ph(p))}function Ph(u){if(typeof u!="number"&&u&&!u.da){var h=u.src;if(h&&h[ln])xh(h.i,u);else{var p=u.type,E=u.proxy;h.removeEventListener?h.removeEventListener(p,E,u.capture):h.detachEvent?h.detachEvent(My(p),E):h.addListener&&h.removeListener&&h.removeListener(E),(p=kh(h))?(xh(p,u),p.h==0&&(p.src=null,h[Ah]=null)):cu(u)}}}function My(u){return u in bh?bh[u]:bh[u]="on"+u}function Gb(u,h){if(u.da)u=!0;else{h=new Bt(h,this);var p=u.listener,E=u.ha||u.src;u.fa&&Ph(u),u=p.call(E,h)}return u}function kh(u){return u=u[Ah],u instanceof du?u:null}var Rh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ly(u){return typeof u=="function"?u:(u[Rh]||(u[Rh]=function(h){return u.handleEvent(h)}),u[Rh])}function ft(){fe.call(this),this.i=new du(this),this.M=this,this.F=null}S(ft,fe),ft.prototype[ln]=!0,ft.prototype.removeEventListener=function(u,h,p,E){Oy(this,u,h,p,E)};function At(u,h){var p,E=u.F;if(E)for(p=[];E;E=E.F)p.push(E);if(u=u.M,E=h.type||h,typeof h=="string")h=new Pe(h,u);else if(h instanceof Pe)h.target=h.target||u;else{var O=h;h=new Pe(E,u),b(h,O)}if(O=!0,p)for(var F=p.length-1;0<=F;F--){var q=h.g=p[F];O=hu(q,E,!0,h)&&O}if(q=h.g=u,O=hu(q,E,!0,h)&&O,O=hu(q,E,!1,h)&&O,p)for(F=0;F<p.length;F++)q=h.g=p[F],O=hu(q,E,!1,h)&&O}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var u=this.i,h;for(h in u.g){for(var p=u.g[h],E=0;E<p.length;E++)cu(p[E]);delete u.g[h],u.h--}}this.F=null},ft.prototype.K=function(u,h,p,E){return this.i.add(String(u),h,!1,p,E)},ft.prototype.L=function(u,h,p,E){return this.i.add(String(u),h,!0,p,E)};function hu(u,h,p,E){if(h=u.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,F=0;F<h.length;++F){var q=h[F];if(q&&!q.da&&q.capture==p){var ve=q.listener,at=q.ha||q.src;q.fa&&xh(u.i,q),O=ve.call(at,E)!==!1&&O}}return O&&!E.defaultPrevented}function Fy(u,h,p){if(typeof u=="function")p&&(u=m(u,p));else if(u&&typeof u.handleEvent=="function")u=m(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(u,h||0)}function jy(u){u.g=Fy(()=>{u.g=null,u.i&&(u.i=!1,jy(u))},u.l);const h=u.h;u.h=null,u.m.apply(null,h)}class Hb extends fe{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:jy(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function na(u){fe.call(this),this.h=u,this.g={}}S(na,fe);var Uy=[];function By(u){N(u.g,function(h,p){this.g.hasOwnProperty(p)&&Ph(h)},u),u.g={}}na.prototype.N=function(){na.aa.N.call(this),By(this)},na.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ch=a.JSON.stringify,Qb=a.JSON.parse,Yb=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Nh(){}Nh.prototype.h=null;function zy(u){return u.h||(u.h=u.i())}function $y(){}var ra={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Dh(){Pe.call(this,"d")}S(Dh,Pe);function Vh(){Pe.call(this,"c")}S(Vh,Pe);var Si={},qy=null;function fu(){return qy=qy||new ft}Si.La="serverreachability";function Wy(u){Pe.call(this,Si.La,u)}S(Wy,Pe);function ia(u){const h=fu();At(h,new Wy(h))}Si.STAT_EVENT="statevent";function Ky(u,h){Pe.call(this,Si.STAT_EVENT,u),this.stat=h}S(Ky,Pe);function bt(u){const h=fu();At(h,new Ky(h,u))}Si.Ma="timingevent";function Gy(u,h){Pe.call(this,Si.Ma,u),this.size=h}S(Gy,Pe);function sa(u,h){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},h)}function oa(){this.g=!0}oa.prototype.xa=function(){this.g=!1};function Jb(u,h,p,E,O,F){u.info(function(){if(u.g)if(F)for(var q="",ve=F.split("&"),at=0;at<ve.length;at++){var ce=ve[at].split("=");if(1<ce.length){var pt=ce[0];ce=ce[1];var mt=pt.split("_");q=2<=mt.length&&mt[1]=="type"?q+(pt+"="+ce+"&"):q+(pt+"=redacted&")}}else q=null;else q=F;return"XMLHTTP REQ ("+E+") [attempt "+O+"]: "+h+`
`+p+`
`+q})}function Xb(u,h,p,E,O,F,q){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+O+"]: "+h+`
`+p+`
`+F+" "+q})}function Ts(u,h,p,E){u.info(function(){return"XMLHTTP TEXT ("+h+"): "+eP(u,p)+(E?" "+E:"")})}function Zb(u,h){u.info(function(){return"TIMEOUT: "+h})}oa.prototype.info=function(){};function eP(u,h){if(!u.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(u=0;u<p.length;u++)if(Array.isArray(p[u])){var E=p[u];if(!(2>E.length)){var O=E[1];if(Array.isArray(O)&&!(1>O.length)){var F=O[0];if(F!="noop"&&F!="stop"&&F!="close")for(var q=1;q<O.length;q++)O[q]=""}}}}return Ch(p)}catch{return h}}var pu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Oh;function mu(){}S(mu,Nh),mu.prototype.g=function(){return new XMLHttpRequest},mu.prototype.i=function(){return{}},Oh=new mu;function _r(u,h,p,E){this.j=u,this.i=h,this.l=p,this.R=E||1,this.U=new na(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qy}function Qy(){this.i=null,this.g="",this.h=!1}var Yy={},Mh={};function Lh(u,h,p){u.L=1,u.v=vu(jn(h)),u.m=p,u.P=!0,Jy(u,null)}function Jy(u,h){u.F=Date.now(),gu(u),u.A=jn(u.v);var p=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),d_(p.i,"t",E),u.C=0,p=u.j.J,u.h=new Qy,u.g=k_(u.j,p?h:null,!u.m),0<u.O&&(u.M=new Hb(m(u.Y,u,u.g),u.O)),h=u.U,p=u.g,E=u.ca;var O="readystatechange";Array.isArray(O)||(O&&(Uy[0]=O.toString()),O=Uy);for(var F=0;F<O.length;F++){var q=Vy(p,O[F],E||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=u.H?y(u.H):{},u.m?(u.u||(u.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,h)):(u.u="GET",u.g.ea(u.A,u.u,null,h)),ia(),Jb(u.i,u.u,u.A,u.l,u.R,u.m)}_r.prototype.ca=function(u){u=u.target;const h=this.M;h&&Un(u)==3?h.j():this.Y(u)},_r.prototype.Y=function(u){try{if(u==this.g)e:{const mt=Un(this.g);var h=this.g.Ba();const As=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||__(this.g)))){this.J||mt!=4||h==7||(h==8||0>=As?ia(3):ia(2)),Fh(this);var p=this.g.Z();this.X=p;t:if(Xy(this)){var E=__(this.g);u="";var O=E.length,F=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ai(this),aa(this);var q="";break t}this.h.i=new a.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,u+=this.h.i.decode(E[h],{stream:!(F&&h==O-1)});E.length=0,this.h.g+=u,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=p==200,Xb(this.i,this.u,this.A,this.l,this.R,mt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,at=this.g;if((ve=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ve)){var ce=ve;break t}}ce=null}if(p=ce)Ts(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jh(this,p);else{this.o=!1,this.s=3,bt(12),Ai(this),aa(this);break e}}if(this.P){p=!0;let un;for(;!this.J&&this.C<q.length;)if(un=tP(this,q),un==Mh){mt==4&&(this.s=4,bt(14),p=!1),Ts(this.i,this.l,null,"[Incomplete Response]");break}else if(un==Yy){this.s=4,bt(15),Ts(this.i,this.l,q,"[Invalid Chunk]"),p=!1;break}else Ts(this.i,this.l,un,null),jh(this,un);if(Xy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||q.length!=0||this.h.h||(this.s=1,bt(16),p=!1),this.o=this.o&&p,!p)Ts(this.i,this.l,q,"[Invalid Chunked Response]"),Ai(this),aa(this);else if(0<q.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Wh(pt),pt.M=!0,bt(11))}}else Ts(this.i,this.l,q,null),jh(this,q);mt==4&&Ai(this),this.o&&!this.J&&(mt==4?S_(this.j,this):(this.o=!1,gu(this)))}else _P(this.g),p==400&&0<q.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),Ai(this),aa(this)}}}catch{}finally{}};function Xy(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function tP(u,h){var p=u.C,E=h.indexOf(`
`,p);return E==-1?Mh:(p=Number(h.substring(p,E)),isNaN(p)?Yy:(E+=1,E+p>h.length?Mh:(h=h.slice(E,E+p),u.C=E+p,h)))}_r.prototype.cancel=function(){this.J=!0,Ai(this)};function gu(u){u.S=Date.now()+u.I,Zy(u,u.I)}function Zy(u,h){if(u.B!=null)throw Error("WatchDog timer not null");u.B=sa(m(u.ba,u),h)}function Fh(u){u.B&&(a.clearTimeout(u.B),u.B=null)}_r.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Zb(this.i,this.A),this.L!=2&&(ia(),bt(17)),Ai(this),this.s=2,aa(this)):Zy(this,this.S-u)};function aa(u){u.j.G==0||u.J||S_(u.j,u)}function Ai(u){Fh(u);var h=u.M;h&&typeof h.ma=="function"&&h.ma(),u.M=null,By(u.U),u.g&&(h=u.g,u.g=null,h.abort(),h.ma())}function jh(u,h){try{var p=u.j;if(p.G!=0&&(p.g==u||Uh(p.h,u))){if(!u.K&&Uh(p.h,u)&&p.G==3){try{var E=p.Da.g.parse(h)}catch{E=null}if(Array.isArray(E)&&E.length==3){var O=E;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<u.F)Su(p),Tu(p);else break e;qh(p),bt(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=sa(m(p.Za,p),6e3));if(1>=n_(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Pi(p,11)}else if((u.K||p.g==u)&&Su(p),!w(h))for(O=p.Da.g.parse(h),h=0;h<O.length;h++){let ce=O[h];if(p.T=ce[0],ce=ce[1],p.G==2)if(ce[0]=="c"){p.K=ce[1],p.ia=ce[2];const pt=ce[3];pt!=null&&(p.la=pt,p.j.info("VER="+p.la));const mt=ce[4];mt!=null&&(p.Aa=mt,p.j.info("SVER="+p.Aa));const As=ce[5];As!=null&&typeof As=="number"&&0<As&&(E=1.5*As,p.L=E,p.j.info("backChannelRequestTimeoutMs_="+E)),E=p;const un=u.g;if(un){const bu=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bu){var F=E.h;F.g||bu.indexOf("spdy")==-1&&bu.indexOf("quic")==-1&&bu.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Bh(F,F.h),F.h=null))}if(E.D){const Kh=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;Kh&&(E.ya=Kh,Te(E.I,E.D,Kh))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-u.F,p.j.info("Handshake RTT: "+p.R+"ms")),E=p;var q=u;if(E.qa=P_(E,E.J?E.ia:null,E.W),q.K){r_(E.h,q);var ve=q,at=E.L;at&&(ve.I=at),ve.B&&(Fh(ve),gu(ve)),E.g=q}else T_(E);0<p.i.length&&xu(p)}else ce[0]!="stop"&&ce[0]!="close"||Pi(p,7);else p.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Pi(p,7):$h(p):ce[0]!="noop"&&p.l&&p.l.ta(ce),p.v=0)}}ia(4)}catch{}}var nP=class{constructor(u,h){this.g=u,this.map=h}};function e_(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function t_(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function n_(u){return u.h?1:u.g?u.g.size:0}function Uh(u,h){return u.h?u.h==h:u.g?u.g.has(h):!1}function Bh(u,h){u.g?u.g.add(h):u.h=h}function r_(u,h){u.h&&u.h==h?u.h=null:u.g&&u.g.has(h)&&u.g.delete(h)}e_.prototype.cancel=function(){if(this.i=i_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function i_(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let h=u.i;for(const p of u.g.values())h=h.concat(p.D);return h}return P(u.i)}function rP(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var h=[],p=u.length,E=0;E<p;E++)h.push(u[E]);return h}h=[],p=0;for(E in u)h[p++]=u[E];return h}function iP(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var h=[];u=u.length;for(var p=0;p<u;p++)h.push(p);return h}h=[],p=0;for(const E in u)h[p++]=E;return h}}}function s_(u,h){if(u.forEach&&typeof u.forEach=="function")u.forEach(h,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,h,void 0);else for(var p=iP(u),E=rP(u),O=E.length,F=0;F<O;F++)h.call(void 0,E[F],p&&p[F],u)}var o_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sP(u,h){if(u){u=u.split("&");for(var p=0;p<u.length;p++){var E=u[p].indexOf("="),O=null;if(0<=E){var F=u[p].substring(0,E);O=u[p].substring(E+1)}else F=u[p];h(F,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function bi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof bi){this.h=u.h,yu(this,u.j),this.o=u.o,this.g=u.g,_u(this,u.s),this.l=u.l;var h=u.i,p=new ca;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),a_(this,p),this.m=u.m}else u&&(h=String(u).match(o_))?(this.h=!1,yu(this,h[1]||"",!0),this.o=la(h[2]||""),this.g=la(h[3]||"",!0),_u(this,h[4]),this.l=la(h[5]||"",!0),a_(this,h[6]||"",!0),this.m=la(h[7]||"")):(this.h=!1,this.i=new ca(null,this.h))}bi.prototype.toString=function(){var u=[],h=this.j;h&&u.push(ua(h,l_,!0),":");var p=this.g;return(p||h=="file")&&(u.push("//"),(h=this.o)&&u.push(ua(h,l_,!0),"@"),u.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&u.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&u.push("/"),u.push(ua(p,p.charAt(0)=="/"?lP:aP,!0))),(p=this.i.toString())&&u.push("?",p),(p=this.m)&&u.push("#",ua(p,cP)),u.join("")};function jn(u){return new bi(u)}function yu(u,h,p){u.j=p?la(h,!0):h,u.j&&(u.j=u.j.replace(/:$/,""))}function _u(u,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);u.s=h}else u.s=null}function a_(u,h,p){h instanceof ca?(u.i=h,dP(u.i,u.h)):(p||(h=ua(h,uP)),u.i=new ca(h,u.h))}function Te(u,h,p){u.i.set(h,p)}function vu(u){return Te(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function la(u,h){return u?h?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ua(u,h,p){return typeof u=="string"?(u=encodeURI(u).replace(h,oP),p&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function oP(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var l_=/[#\/\?@]/g,aP=/[#\?:]/g,lP=/[#\?]/g,uP=/[#\?@]/g,cP=/#/g;function ca(u,h){this.h=this.g=null,this.i=u||null,this.j=!!h}function vr(u){u.g||(u.g=new Map,u.h=0,u.i&&sP(u.i,function(h,p){u.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ca.prototype,t.add=function(u,h){vr(this),this.i=null,u=xs(this,u);var p=this.g.get(u);return p||this.g.set(u,p=[]),p.push(h),this.h+=1,this};function u_(u,h){vr(u),h=xs(u,h),u.g.has(h)&&(u.i=null,u.h-=u.g.get(h).length,u.g.delete(h))}function c_(u,h){return vr(u),h=xs(u,h),u.g.has(h)}t.forEach=function(u,h){vr(this),this.g.forEach(function(p,E){p.forEach(function(O){u.call(h,O,E,this)},this)},this)},t.na=function(){vr(this);const u=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let E=0;E<h.length;E++){const O=u[E];for(let F=0;F<O.length;F++)p.push(h[E])}return p},t.V=function(u){vr(this);let h=[];if(typeof u=="string")c_(this,u)&&(h=h.concat(this.g.get(xs(this,u))));else{u=Array.from(this.g.values());for(let p=0;p<u.length;p++)h=h.concat(u[p])}return h},t.set=function(u,h){return vr(this),this.i=null,u=xs(this,u),c_(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[h]),this.h+=1,this},t.get=function(u,h){return u?(u=this.V(u),0<u.length?String(u[0]):h):h};function d_(u,h,p){u_(u,h),0<p.length&&(u.i=null,u.g.set(xs(u,h),P(p)),u.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var E=h[p];const F=encodeURIComponent(String(E)),q=this.V(E);for(E=0;E<q.length;E++){var O=F;q[E]!==""&&(O+="="+encodeURIComponent(String(q[E]))),u.push(O)}}return this.i=u.join("&")};function xs(u,h){return h=String(h),u.j&&(h=h.toLowerCase()),h}function dP(u,h){h&&!u.j&&(vr(u),u.i=null,u.g.forEach(function(p,E){var O=E.toLowerCase();E!=O&&(u_(this,E),d_(this,O,p))},u)),u.j=h}function hP(u,h){const p=new oa;if(a.Image){const E=new Image;E.onload=_(wr,p,"TestLoadImage: loaded",!0,h,E),E.onerror=_(wr,p,"TestLoadImage: error",!1,h,E),E.onabort=_(wr,p,"TestLoadImage: abort",!1,h,E),E.ontimeout=_(wr,p,"TestLoadImage: timeout",!1,h,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else h(!1)}function fP(u,h){const p=new oa,E=new AbortController,O=setTimeout(()=>{E.abort(),wr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(u,{signal:E.signal}).then(F=>{clearTimeout(O),F.ok?wr(p,"TestPingServer: ok",!0,h):wr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),wr(p,"TestPingServer: error",!1,h)})}function wr(u,h,p,E,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),E(p)}catch{}}function pP(){this.g=new Yb}function mP(u,h,p){const E=p||"";try{s_(u,function(O,F){let q=O;c(O)&&(q=Ch(O)),h.push(E+F+"="+encodeURIComponent(q))})}catch(O){throw h.push(E+"type="+encodeURIComponent("_badmap")),O}}function wu(u){this.l=u.Ub||null,this.j=u.eb||!1}S(wu,Nh),wu.prototype.g=function(){return new Eu(this.l,this.j)},wu.prototype.i=function(u){return function(){return u}}({});function Eu(u,h){ft.call(this),this.D=u,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Eu,ft),t=Eu.prototype,t.open=function(u,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=h,this.readyState=1,ha(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(h.body=u),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,da(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ha(this)),this.g&&(this.readyState=3,ha(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;h_(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function h_(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var h=u.value?u.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!u.done}))&&(this.response=this.responseText+=h)}u.done?da(this):ha(this),this.readyState==3&&h_(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,da(this))},t.Qa=function(u){this.g&&(this.response=u,da(this))},t.ga=function(){this.g&&da(this)};function da(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ha(u)}t.setRequestHeader=function(u,h){this.u.append(u,h)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,u.push(p[0]+": "+p[1]),p=h.next();return u.join(`\r
`)};function ha(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Eu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function f_(u){let h="";return N(u,function(p,E){h+=E,h+=":",h+=p,h+=`\r
`}),h}function zh(u,h,p){e:{for(E in p){var E=!1;break e}E=!0}E||(p=f_(p),typeof u=="string"?p!=null&&encodeURIComponent(String(p)):Te(u,h,p))}function je(u){ft.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(je,ft);var gP=/^https?$/i,yP=["POST","PUT"];t=je.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,h,p,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);h=h?h.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Oh.g(),this.v=this.o?zy(this.o):zy(Oh),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(u),!0),this.B=!1}catch(F){p_(this,F);return}if(u=p||"",p=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var O in E)p.set(O,E[O]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const F of E.keys())p.set(F,E.get(F));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(p.keys()).find(F=>F.toLowerCase()=="content-type"),O=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(yP,h,void 0))||E||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,q]of p)this.g.setRequestHeader(F,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{y_(this),this.u=!0,this.g.send(u),this.u=!1}catch(F){p_(this,F)}};function p_(u,h){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=h,u.m=5,m_(u),Iu(u)}function m_(u){u.A||(u.A=!0,At(u,"complete"),At(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,At(this,"complete"),At(this,"abort"),Iu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Iu(this,!0)),je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?g_(this):this.bb())},t.bb=function(){g_(this)};function g_(u){if(u.h&&typeof o<"u"&&(!u.v[1]||Un(u)!=4||u.Z()!=2)){if(u.u&&Un(u)==4)Fy(u.Ea,0,u);else if(At(u,"readystatechange"),Un(u)==4){u.h=!1;try{const q=u.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var E;if(E=q===0){var O=String(u.D).match(o_)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),E=!gP.test(O?O.toLowerCase():"")}p=E}if(p)At(u,"complete"),At(u,"success");else{u.m=6;try{var F=2<Un(u)?u.g.statusText:""}catch{F=""}u.l=F+" ["+u.Z()+"]",m_(u)}}finally{Iu(u)}}}}function Iu(u,h){if(u.g){y_(u);const p=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,h||At(u,"ready");try{p.onreadystatechange=E}catch{}}}function y_(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function Un(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var h=this.g.responseText;return u&&h.indexOf(u)==0&&(h=h.substring(u.length)),Qb(h)}};function __(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function _P(u){const h={};u=(u.g&&2<=Un(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(w(u[E]))continue;var p=C(u[E]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const F=h[O]||[];h[O]=F,F.push(p)}v(h,function(E){return E.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function fa(u,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[u]||h}function v_(u){this.Aa=0,this.i=[],this.j=new oa,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=fa("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=fa("baseRetryDelayMs",5e3,u),this.cb=fa("retryDelaySeedMs",1e4,u),this.Wa=fa("forwardChannelMaxRetries",2,u),this.wa=fa("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new e_(u&&u.concurrentRequestLimit),this.Da=new pP,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=v_.prototype,t.la=8,t.G=1,t.connect=function(u,h,p,E){bt(0),this.W=u,this.H=h||{},p&&E!==void 0&&(this.H.OSID=p,this.H.OAID=E),this.F=this.X,this.I=P_(this,null,this.W),xu(this)};function $h(u){if(w_(u),u.G==3){var h=u.U++,p=jn(u.I);if(Te(p,"SID",u.K),Te(p,"RID",h),Te(p,"TYPE","terminate"),pa(u,p),h=new _r(u,u.j,h),h.L=2,h.v=vu(jn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=k_(h.j,null),h.g.ea(h.v)),h.F=Date.now(),gu(h)}b_(u)}function Tu(u){u.g&&(Wh(u),u.g.cancel(),u.g=null)}function w_(u){Tu(u),u.u&&(a.clearTimeout(u.u),u.u=null),Su(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function xu(u){if(!t_(u.h)&&!u.s){u.s=!0;var h=u.Ga;Xt||ee(),K||(Xt(),K=!0),X.add(h,u),u.B=0}}function vP(u,h){return n_(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=h.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=sa(m(u.Ga,u,h),A_(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const O=new _r(this,this.j,u);let F=this.o;if(this.S&&(F?(F=y(F),b(F,this.S)):F=this.S),this.m!==null||this.O||(O.H=F,F=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var E=this.i[p];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(h+=E,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=I_(this,O,h),p=jn(this.I),Te(p,"RID",u),Te(p,"CVER",22),this.D&&Te(p,"X-HTTP-Session-Id",this.D),pa(this,p),F&&(this.O?h="headers="+encodeURIComponent(String(f_(F)))+"&"+h:this.m&&zh(p,this.m,F)),Bh(this.h,O),this.Ua&&Te(p,"TYPE","init"),this.P?(Te(p,"$req",h),Te(p,"SID","null"),O.T=!0,Lh(O,p,null)):Lh(O,p,h),this.G=2}}else this.G==3&&(u?E_(this,u):this.i.length==0||t_(this.h)||E_(this))};function E_(u,h){var p;h?p=h.l:p=u.U++;const E=jn(u.I);Te(E,"SID",u.K),Te(E,"RID",p),Te(E,"AID",u.T),pa(u,E),u.m&&u.o&&zh(E,u.m,u.o),p=new _r(u,u.j,p,u.B+1),u.m===null&&(p.H=u.o),h&&(u.i=h.D.concat(u.i)),h=I_(u,p,1e3),p.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Bh(u.h,p),Lh(p,E,h)}function pa(u,h){u.H&&N(u.H,function(p,E){Te(h,E,p)}),u.l&&s_({},function(p,E){Te(h,E,p)})}function I_(u,h,p){p=Math.min(u.i.length,p);var E=u.l?m(u.l.Na,u.l,u):null;e:{var O=u.i;let F=-1;for(;;){const q=["count="+p];F==-1?0<p?(F=O[0].g,q.push("ofs="+F)):F=0:q.push("ofs="+F);let ve=!0;for(let at=0;at<p;at++){let ce=O[at].g;const pt=O[at].map;if(ce-=F,0>ce)F=Math.max(0,O[at].g-100),ve=!1;else try{mP(pt,q,"req"+ce+"_")}catch{E&&E(pt)}}if(ve){E=q.join("&");break e}}}return u=u.i.splice(0,p),h.D=u,E}function T_(u){if(!u.g&&!u.u){u.Y=1;var h=u.Fa;Xt||ee(),K||(Xt(),K=!0),X.add(h,u),u.v=0}}function qh(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=sa(m(u.Fa,u),A_(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,x_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=sa(m(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),Tu(this),x_(this))};function Wh(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function x_(u){u.g=new _r(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var h=jn(u.qa);Te(h,"RID","rpc"),Te(h,"SID",u.K),Te(h,"AID",u.T),Te(h,"CI",u.F?"0":"1"),!u.F&&u.ja&&Te(h,"TO",u.ja),Te(h,"TYPE","xmlhttp"),pa(u,h),u.m&&u.o&&zh(h,u.m,u.o),u.L&&(u.g.I=u.L);var p=u.g;u=u.ia,p.L=1,p.v=vu(jn(h)),p.m=null,p.P=!0,Jy(p,u)}t.Za=function(){this.C!=null&&(this.C=null,Tu(this),qh(this),bt(19))};function Su(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function S_(u,h){var p=null;if(u.g==h){Su(u),Wh(u),u.g=null;var E=2}else if(Uh(u.h,h))p=h.D,r_(u.h,h),E=1;else return;if(u.G!=0){if(h.o)if(E==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var O=u.B;E=fu(),At(E,new Gy(E,p)),xu(u)}else T_(u);else if(O=h.s,O==3||O==0&&0<h.X||!(E==1&&vP(u,h)||E==2&&qh(u)))switch(p&&0<p.length&&(h=u.h,h.i=h.i.concat(p)),O){case 1:Pi(u,5);break;case 4:Pi(u,10);break;case 3:Pi(u,6);break;default:Pi(u,2)}}}function A_(u,h){let p=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(p*=2),p*h}function Pi(u,h){if(u.j.info("Error code "+h),h==2){var p=m(u.fb,u),E=u.Xa;const O=!E;E=new bi(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||yu(E,"https"),vu(E),O?hP(E.toString(),p):fP(E.toString(),p)}else bt(2);u.G=0,u.l&&u.l.sa(h),b_(u),w_(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function b_(u){if(u.G=0,u.ka=[],u.l){const h=i_(u.h);(h.length!=0||u.i.length!=0)&&(R(u.ka,h),R(u.ka,u.i),u.h.i.length=0,P(u.i),u.i.length=0),u.l.ra()}}function P_(u,h,p){var E=p instanceof bi?jn(p):new bi(p);if(E.g!="")h&&(E.g=h+"."+E.g),_u(E,E.s);else{var O=a.location;E=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var F=new bi(null);E&&yu(F,E),h&&(F.g=h),O&&_u(F,O),p&&(F.l=p),E=F}return p=u.D,h=u.ya,p&&h&&Te(E,p,h),Te(E,"VER",u.la),pa(u,E),E}function k_(u,h,p){if(h&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=u.Ca&&!u.pa?new je(new wu({eb:p})):new je(u.pa),h.Ha(u.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function R_(){}t=R_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Au(){}Au.prototype.g=function(u,h){return new $t(u,h)};function $t(u,h){ft.call(this),this.g=new v_(h),this.l=u,this.h=h&&h.messageUrlParams||null,u=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(u?u["X-WebChannel-Content-Type"]=h.messageContentType:u={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(u?u["X-WebChannel-Client-Profile"]=h.va:u={"X-WebChannel-Client-Profile":h.va}),this.g.S=u,(u=h&&h.Sb)&&!w(u)&&(this.g.m=u),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,u=this.h,u!==null&&h in u&&(u=this.h,h in u&&delete u[h])),this.j=new Ss(this)}S($t,ft),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){$h(this.g)},$t.prototype.o=function(u){var h=this.g;if(typeof u=="string"){var p={};p.__data__=u,u=p}else this.u&&(p={},p.__data__=Ch(u),u=p);h.i.push(new nP(h.Ya++,u)),h.G==3&&xu(h)},$t.prototype.N=function(){this.g.l=null,delete this.j,$h(this.g),delete this.g,$t.aa.N.call(this)};function C_(u){Dh.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var h=u.__sm__;if(h){e:{for(const p in h){u=p;break e}u=void 0}(this.i=u)&&(u=this.i,h=h!==null&&u in h?h[u]:void 0),this.data=h}else this.data=u}S(C_,Dh);function N_(){Vh.call(this),this.status=1}S(N_,Vh);function Ss(u){this.g=u}S(Ss,R_),Ss.prototype.ua=function(){At(this.g,"a")},Ss.prototype.ta=function(u){At(this.g,new C_(u))},Ss.prototype.sa=function(u){At(this.g,new N_)},Ss.prototype.ra=function(){At(this.g,"b")},Au.prototype.createWebChannel=Au.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,Ax=function(){return new Au},Sx=function(){return fu()},xx=Si,qp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pu.NO_ERROR=0,pu.TIMEOUT=8,pu.HTTP_ERROR=6,gc=pu,Hy.COMPLETE="complete",Tx=Hy,$y.EventType=ra,ra.OPEN="a",ra.CLOSE="b",ra.ERROR="c",ra.MESSAGE="d",ft.prototype.listen=ft.prototype.K,Oa=$y,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,Ix=je}).apply(typeof Ku<"u"?Ku:typeof self<"u"?self:typeof window<"u"?window:{});const bw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new dg("@firebase/firestore");function Vs(){return ti.logLevel}function G2(t){ti.setLogLevel(t)}function B(t,...e){if(ti.logLevel<=ie.DEBUG){const n=e.map(Tg);ti.debug(`Firestore (${qo}): ${t}`,...n)}}function $e(t,...e){if(ti.logLevel<=ie.ERROR){const n=e.map(Tg);ti.error(`Firestore (${qo}): ${t}`,...n)}}function Ht(t,...e){if(ti.logLevel<=ie.WARN){const n=e.map(Tg);ti.warn(`Firestore (${qo}): ${t}`,...n)}}function Tg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${qo}) INTERNAL ASSERTION FAILED: `+t;throw $e(e),new Error(e)}function Q(t,e){t||G()}function H2(t,e){t||G()}function $(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Px{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class Q2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Y2{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Q(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new rt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new rt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new rt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new bx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string"),new tt(e)}}class J2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class X2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new J2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Z2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Q(this.o===void 0);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Q(typeof n.token=="string"),this.R=n.token,new kx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class eV{getToken(){return Promise.resolve(new kx(""))}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=tV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function wo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function Rx(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new de(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new de(0,0))}static max(){return new Y(new de(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Il.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Il?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends Il{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const nV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends Il{construct(e,n,r){return new Ae(e,n,r)}static isValidIdentifier(e){return nV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ae(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new U(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new U(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new U(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(n)}static emptyPath(){return new Ae([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(se.fromString(e))}static fromName(e){return new W(se.fromString(e).popFirst(5))}static empty(){return new W(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new se(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Wp(t){return t.fields.find(e=>e.kind===2)}function Di(t){return t.fields.filter(e=>e.kind!==2)}function rV(t,e){let n=Z(t.collectionGroup,e.collectionGroup);if(n!==0)return n;for(let r=0;r<Math.min(t.fields.length,e.fields.length);++r)if(n=iV(t.fields[r],e.fields[r]),n!==0)return n;return Z(t.fields.length,e.fields.length)}Eo.UNKNOWN_ID=-1;class Ki{constructor(e,n){this.fieldPath=e,this.kind=n}}function iV(t,e){const n=Ae.comparator(t.fieldPath,e.fieldPath);return n!==0?n:Z(t.kind,e.kind)}class Io{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Io(0,Qt.min())}}function Cx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new de(n+1,0):new de(n,r));return new Qt(i,W.empty(),e)}function Nx(t){return new Qt(t.readTime,t.key,-1)}class Qt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Qt(Y.min(),W.empty(),-1)}static max(){return new Qt(Y.max(),W.empty(),-1)}}function Sg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==Dx)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new rt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Qa(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Ag(r.target.error);this.V.reject(new Qa(e,i))}}static open(e,n,r,i){try{return new Gd(n,e.transaction(i,r))}catch(s){throw new Qa(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(B("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new oV(n)}}class Nn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Nn.S(Je())===12.2&&$e("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return B("SimpleDb","Removing database:",e),Oi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!cg())return!1;if(Nn.v())return!0;const e=Je(),n=Nn.S(e),r=0<n&&n<10,i=Ox(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(B("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Qa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new U(M.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new U(M.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Qa(e,o))},i.onupgradeneeded=s=>{B("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{B("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Gd.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),V.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(B("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Ox(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class sV{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Oi(this.B.delete())}}class Qa extends U{constructor(e,n){super(M.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function _i(t){return t.name==="IndexedDbTransactionError"}class oV{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(B("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(B("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Oi(r)}add(e){return B("SimpleDb","ADD",this.store.name,e,e),Oi(this.store.add(e))}get(e){return Oi(this.store.get(e)).next(n=>(n===void 0&&(n=null),B("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return B("SimpleDb","DELETE",this.store.name,e),Oi(this.store.delete(e))}count(){return B("SimpleDb","COUNT",this.store.name),Oi(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new V((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new V((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){B("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new V((r,i)=>{n.onerror=s=>{const o=Ag(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new V((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new sV(a),c=n(a.primaryKey,a.value,l);if(c instanceof V){const d=c.catch(f=>(l.done(),V.reject(f)));r.push(d)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>V.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Oi(t){return new V((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Ag(r.target.error);n(i)}})}let Pw=!1;function Ag(t){const e=Nn.S(Je());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new U("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Pw||(Pw=!0,setTimeout(()=>{throw r},0)),r}}return t}class aV{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){B("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{B("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){_i(n)?B("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await yi(n)}await this.X(6e4)})}}class lV{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return V.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return B("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(B("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=Nx(s);Sg(o,r)>0&&(r=o)}),new Qt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Vt.oe=-1;function Kl(t){return t==null}function Tl(t){return t===0&&1/t==-1/0}function Mx(t){return typeof t=="number"&&Number.isInteger(t)&&!Tl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=kw(e)),e=uV(t.get(n),e);return kw(e)}function uV(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function kw(t){return t+""}function An(t){const e=t.length;if(Q(e>=2),e===2)return Q(t.charAt(0)===""&&t.charAt(1)===""),se.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&G(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:G()}s=o+2}return new se(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(t,e){return[t,Et(e)]}function Lx(t,e,n){return[t,Et(e),n]}const cV={},dV=["prefixPath","collectionGroup","readTime","documentId"],hV=["prefixPath","collectionGroup","documentId"],fV=["collectionGroup","readTime","prefixPath","documentId"],pV=["canonicalId","targetId"],mV=["targetId","path"],gV=["path","targetId"],yV=["collectionId","parent"],_V=["indexId","uid"],vV=["uid","sequenceNumber"],wV=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],EV=["indexId","uid","orderedDocumentKey"],IV=["userId","collectionPath","documentId"],TV=["userId","collectionPath","largestBatchId"],xV=["userId","collectionGroup","largestBatchId"],Fx=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],SV=[...Fx,"documentOverlays"],jx=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ux=jx,bg=[...Ux,"indexConfiguration","indexState","indexEntries"],AV=bg,bV=[...bg,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp extends Vx{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function Xe(t,e){const n=$(t);return Nn.F(n._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Bx(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function zx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gu(this.root,e,this.comparator,!0)}}class Gu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ut.RED,this.left=i??ut.EMPTY,this.right=s??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ut(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Nw(this.data.getIterator())}getIteratorFrom(e){return new Nw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ye(this.comparator);return n.data=e,n}}class Nw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ps(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new ye(Ae.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return wo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PV(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new $x("Invalid base64 string: "+s):s}}(e);return new Fe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Fe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const kV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function or(t){if(Q(!!t),typeof t=="string"){let e=0;const n=kV.exec(t);if(Q(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ar(t){return typeof t=="string"?Fe.fromBase64String(t):Fe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qd(t){const e=t.mapValue.fields.__previous_value__;return Hd(e)?Qd(e):e}function xl(t){const e=or(t.mapValue.fields.__local_write_time__.timestampValue);return new de(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RV{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ni{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ni("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ni&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},_c={nullValue:"NULL_VALUE"};function ri(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hd(t)?4:qx(t)?9007199254740991:Yd(t)?10:11:G()}function On(t,e){if(t===e)return!0;const n=ri(t);if(n!==ri(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xl(t).isEqual(xl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=or(i.timestampValue),a=or(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ar(i.bytesValue).isEqual(ar(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ke(i.geoPointValue.latitude)===ke(s.geoPointValue.latitude)&&ke(i.geoPointValue.longitude)===ke(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ke(i.integerValue)===ke(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ke(i.doubleValue),a=ke(s.doubleValue);return o===a?Tl(o)===Tl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return wo(t.arrayValue.values||[],e.arrayValue.values||[],On);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Cw(o)!==Cw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!On(o[l],a[l])))return!1;return!0}(t,e);default:return G()}}function Sl(t,e){return(t.values||[]).find(n=>On(n,e))!==void 0}function ii(t,e){if(t===e)return 0;const n=ri(t),r=ri(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ke(s.integerValue||s.doubleValue),l=ke(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Dw(t.timestampValue,e.timestampValue);case 4:return Dw(xl(t),xl(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ar(s),l=ar(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const d=Z(a[c],l[c]);if(d!==0)return d}return Z(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Z(ke(s.latitude),ke(o.latitude));return a!==0?a:Z(ke(s.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Vw(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,d;const f=s.fields||{},m=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,S=(l=m.value)===null||l===void 0?void 0:l.arrayValue,P=Z(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:Vw(_,S)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ur.mapValue&&o===Ur.mapValue)return 0;if(s===Ur.mapValue)return 1;if(o===Ur.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},d=Object.keys(c);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const m=Z(l[f],d[f]);if(m!==0)return m;const _=ii(a[l[f]],c[d[f]]);if(_!==0)return _}return Z(l.length,d.length)}(t.mapValue,e.mapValue);default:throw G()}}function Dw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=or(t),r=or(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function Vw(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ii(n[i],r[i]);if(s)return s}return Z(n.length,r.length)}function To(t){return Gp(t)}function Gp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=or(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ar(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Gp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Gp(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function vc(t){switch(ri(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Qd(t);return e?16+vc(e):16;case 5:return 2*t.stringValue.length;case 6:return ar(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+vc(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return vi(r.fields,(s,o)=>{i+=s.length+vc(o)}),i}(t.mapValue);default:throw G()}}function es(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Hp(t){return!!t&&"integerValue"in t}function Al(t){return!!t&&"arrayValue"in t}function Ow(t){return!!t&&"nullValue"in t}function Mw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wc(t){return!!t&&"mapValue"in t}function Yd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ya(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ya(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ya(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Wx={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function CV(t){return"nullValue"in t?_c:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?es(ni.empty(),W.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?Yd(t)?Wx:{mapValue:{}}:G()}function NV(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?es(ni.empty(),W.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?Wx:"mapValue"in t?Yd(t)?{mapValue:{}}:Ur:G()}function Lw(t,e){const n=ii(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Fw(t,e){const n=ii(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ya(n)}setAll(e){let n=Ae.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ya(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());wc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];wc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){vi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(Ya(this.value))}}function Kx(t){const e=[];return vi(t.fields,(n,r)=>{const i=new Ae([n]);if(wc(r)){const s=Kx(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Se(e,0,Y.min(),Y.min(),Y.min(),ct.empty(),0)}static newFoundDocument(e,n,r,i){return new Se(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new Se(e,2,n,Y.min(),Y.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new Se(e,3,n,Y.min(),Y.min(),ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n){this.position=e,this.inclusive=n}}function jw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=ii(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!On(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n="asc"){this.field=e,this.dir=n}}function DV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gx=class{};class oe extends Gx{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new VV(e,n,r):n==="array-contains"?new LV(e,r):n==="in"?new Zx(e,r):n==="not-in"?new FV(e,r):n==="array-contains-any"?new jV(e,r):new oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new OV(e,r):new MV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ii(n,this.value)):n!==null&&ri(this.value)===ri(n)&&this.matchesComparison(ii(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class me extends Gx{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new me(e,n)}matches(e){return xo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function xo(t){return t.op==="and"}function Qp(t){return t.op==="or"}function Pg(t){return Hx(t)&&xo(t)}function Hx(t){for(const e of t.filters)if(e instanceof me)return!1;return!0}function Yp(t){if(t instanceof oe)return t.field.canonicalString()+t.op.toString()+To(t.value);if(Pg(t))return t.filters.map(e=>Yp(e)).join(",");{const e=t.filters.map(n=>Yp(n)).join(",");return`${t.op}(${e})`}}function Qx(t,e){return t instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.field.isEqual(i.field)&&On(r.value,i.value)}(t,e):t instanceof me?function(r,i){return i instanceof me&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Qx(o,i.filters[a]),!0):!1}(t,e):void G()}function Yx(t,e){const n=t.filters.concat(e);return me.create(n,t.op)}function Jx(t){return t instanceof oe?function(n){return`${n.field.canonicalString()} ${n.op} ${To(n.value)}`}(t):t instanceof me?function(n){return n.op.toString()+" {"+n.getFilters().map(Jx).join(" ,")+"}"}(t):"Filter"}class VV extends oe{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class OV extends oe{constructor(e,n){super(e,"in",n),this.keys=Xx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class MV extends oe{constructor(e,n){super(e,"not-in",n),this.keys=Xx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Xx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class LV extends oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Al(n)&&Sl(n.arrayValue,this.value)}}class Zx extends oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Sl(this.value.arrayValue,n)}}class FV extends oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Sl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Sl(this.value.arrayValue,n)}}class jV extends oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Al(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Sl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UV{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Jp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new UV(t,e,n,r,i,s,o)}function ts(t){const e=$(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Kl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>To(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>To(r)).join(",")),e.ue=n}return e.ue}function Gl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!DV(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Qx(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Uw(t.startAt,e.startAt)&&Uw(t.endAt,e.endAt)}function sd(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function od(t,e){return t.filters.filter(n=>n instanceof oe&&n.field.isEqual(e))}function Bw(t,e,n){let r=_c,i=!0;for(const s of od(t,e)){let o=_c,a=!0;switch(s.op){case"<":case"<=":o=CV(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=_c}Lw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Lw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function zw(t,e,n){let r=Ur,i=!0;for(const s of od(t,e)){let o=Ur,a=!0;switch(s.op){case">=":case">":o=NV(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Ur}Fw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Fw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function eS(t,e,n,r,i,s,o,a){return new pr(t,e,n,r,i,s,o,a)}function Wo(t){return new pr(t)}function $w(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kg(t){return t.collectionGroup!==null}function ao(t){const e=$(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ye(Ae.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new bl(s,r))}),n.has(Ae.keyField().canonicalString())||e.ce.push(new bl(Ae.keyField(),r))}return e.ce}function It(t){const e=$(t);return e.le||(e.le=nS(e,ao(t))),e.le}function tS(t){const e=$(t);return e.he||(e.he=nS(e,t.explicitOrderBy)),e.he}function nS(t,e){if(t.limitType==="F")return Jp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new bl(i.field,s)});const n=t.endAt?new si(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new si(t.startAt.position,t.startAt.inclusive):null;return Jp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xp(t,e){const n=t.filters.concat([e]);return new pr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ad(t,e,n){return new pr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hl(t,e){return Gl(It(t),It(e))&&t.limitType===e.limitType}function rS(t){return`${ts(It(t))}|lt:${t.limitType}`}function Os(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Jx(i)).join(", ")}]`),Kl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>To(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>To(i)).join(",")),`Target(${r})`}(It(t))}; limitType=${t.limitType})`}function Ql(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ao(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=jw(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,ao(r),i)||r.endAt&&!function(o,a,l){const c=jw(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,ao(r),i))}(t,e)}function iS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sS(t){return(e,n)=>{let r=!1;for(const i of ao(t)){const s=BV(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function BV(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?ii(l,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return zx(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zV=new Ee(W.comparator);function Mt(){return zV}const oS=new Ee(W.comparator);function Ma(...t){let e=oS;for(const n of t)e=e.insert(n.key,n);return e}function aS(t){let e=oS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function bn(){return Ja()}function lS(){return Ja()}function Ja(){return new mr(t=>t.toString(),(t,e)=>t.isEqual(e))}const $V=new Ee(W.comparator),qV=new ye(W.comparator);function te(...t){let e=qV;for(const n of t)e=e.add(n);return e}const WV=new ye(Z);function Rg(){return WV}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tl(e)?"-0":e}}function uS(t){return{integerValue:""+t}}function cS(t,e){return Mx(e)?uS(e):Cg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this._=void 0}}function KV(t,e,n){return t instanceof So?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Hd(s)&&(s=Qd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ns?hS(t,e):t instanceof rs?fS(t,e):function(i,s){const o=dS(i,s),a=qw(o)+qw(i.Pe);return Hp(o)&&Hp(i.Pe)?uS(a):Cg(i.serializer,a)}(t,e)}function GV(t,e,n){return t instanceof ns?hS(t,e):t instanceof rs?fS(t,e):n}function dS(t,e){return t instanceof Ao?function(r){return Hp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class So extends Jd{}class ns extends Jd{constructor(e){super(),this.elements=e}}function hS(t,e){const n=pS(e);for(const r of t.elements)n.some(i=>On(i,r))||n.push(r);return{arrayValue:{values:n}}}class rs extends Jd{constructor(e){super(),this.elements=e}}function fS(t,e){let n=pS(e);for(const r of t.elements)n=n.filter(i=>!On(i,r));return{arrayValue:{values:n}}}class Ao extends Jd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function qw(t){return ke(t.integerValue||t.doubleValue)}function pS(t){return Al(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n){this.field=e,this.transform=n}}function HV(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ns&&i instanceof ns||r instanceof rs&&i instanceof rs?wo(r.elements,i.elements,On):r instanceof Ao&&i instanceof Ao?On(r.Pe,i.Pe):r instanceof So&&i instanceof So}(t.transform,e.transform)}class QV{constructor(e,n){this.version=e,this.transformResults=n}}class Ce{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ce}static exists(e){return new Ce(void 0,e)}static updateTime(e){return new Ce(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ec(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xd{}function mS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Go(t.key,Ce.none()):new Ko(t.key,t.data,Ce.none());{const n=t.data,r=ct.empty();let i=new ye(Ae.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new gr(t.key,r,new Ot(i.toArray()),Ce.none())}}function YV(t,e,n){t instanceof Ko?function(i,s,o){const a=i.value.clone(),l=Kw(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof gr?function(i,s,o){if(!Ec(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Kw(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(gS(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xa(t,e,n,r){return t instanceof Ko?function(s,o,a,l){if(!Ec(s.precondition,o))return a;const c=s.value.clone(),d=Gw(s.fieldTransforms,l,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof gr?function(s,o,a,l){if(!Ec(s.precondition,o))return a;const c=Gw(s.fieldTransforms,l,o),d=o.data;return d.setAll(gS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Ec(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function JV(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=dS(r.transform,i||null);s!=null&&(n===null&&(n=ct.empty()),n.set(r.field,s))}return n||null}function Ww(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&wo(r,i,(s,o)=>HV(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ko extends Xd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gr extends Xd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function gS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Kw(t,e,n){const r=new Map;Q(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,GV(o,a,n[i]))}return r}function Gw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,KV(s,o,e))}return r}class Go extends Xd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ng extends Xd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&YV(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=lS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=mS(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&wo(this.mutations,e.mutations,(n,r)=>Ww(n,r))&&wo(this.baseMutations,e.baseMutations,(n,r)=>Ww(n,r))}}class Vg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Q(e.mutations.length===r.length);let i=function(){return $V}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Vg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XV{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,ae;function _S(t){switch(t){default:return G();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function vS(t){if(t===void 0)return $e("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ke.OK:return M.OK;case Ke.CANCELLED:return M.CANCELLED;case Ke.UNKNOWN:return M.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return M.INTERNAL;case Ke.UNAVAILABLE:return M.UNAVAILABLE;case Ke.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ke.NOT_FOUND:return M.NOT_FOUND;case Ke.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ke.ABORTED:return M.ABORTED;case Ke.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ke.DATA_LOSS:return M.DATA_LOSS;default:return G()}}(ae=Ke||(Ke={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ld=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZV=new Wi([4294967295,4294967295],0);function Hw(t){const e=wS().encode(t),n=new Ex;return n.update(e),new Uint8Array(n.digest())}function Qw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Wi([n,r],0),new Wi([i,s],0)]}class Mg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new La(`Invalid padding: ${n}`);if(r<0)throw new La(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new La(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new La(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Wi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Wi.fromNumber(r)));return i.compare(ZV)===1&&(i=new Wi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Hw(e),[r,i]=Qw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Mg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Hw(e),[r,i]=Qw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class La extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Xl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Jl(Y.min(),i,new Ee(Z),Mt(),te())}}class Xl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xl(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class ES{constructor(e,n){this.targetId=e,this.me=n}}class IS{constructor(e,n,r=Fe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Yw{constructor(){this.fe=0,this.ge=Xw(),this.pe=Fe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Xl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Xw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class eO{constructor(e){this.Le=e,this.Be=new Map,this.ke=Mt(),this.qe=Jw(),this.Qe=new Ee(Z)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(sd(s))if(r===0){const o=new W(s.path);this.Ue(n,o,Se.newNoDocument(o,Y.min()))}else Q(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}ld==null||ld.et(function(d,f,m,_,S){var P,R,T,w,I,A;const L={localCacheCount:d,existenceFilterCount:f.count,databaseId:m.database,projectId:m.projectId},N=f.unchangedNames;return N&&(L.bloomFilter={applied:S===0,hashCount:(P=N==null?void 0:N.hashCount)!==null&&P!==void 0?P:0,bitmapLength:(w=(T=(R=N==null?void 0:N.bits)===null||R===void 0?void 0:R.bitmap)===null||T===void 0?void 0:T.length)!==null&&w!==void 0?w:0,padding:(A=(I=N==null?void 0:N.bits)===null||I===void 0?void 0:I.padding)!==null&&A!==void 0?A:0,mightContain:v=>{var y;return(y=_==null?void 0:_.mightContain(v))!==null&&y!==void 0&&y}}),L}(o,e.me,this.Le.tt(),a,l))}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ar(r).toUint8Array()}catch(l){if(l instanceof $x)return Ht("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Mg(o,i,s)}catch(l){return Ht(l instanceof La?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&sd(a.target)){const l=new W(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Se.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Jl(e,n,this.Qe,this.ke,r);return this.ke=Mt(),this.qe=Jw(),this.Qe=new Ee(Z),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Yw,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ye(Z),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Yw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Jw(){return new Ee(W.comparator)}function Xw(){return new Ee(W.comparator)}const tO={asc:"ASCENDING",desc:"DESCENDING"},nO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rO={and:"AND",or:"OR"};class iO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zp(t,e){return t.useProto3Json||Kl(e)?e:{value:e}}function bo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function TS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function sO(t,e){return bo(t,e.toTimestamp())}function qe(t){return Q(!!t),Y.fromTimestamp(function(n){const r=or(n);return new de(r.seconds,r.nanos)}(t))}function Lg(t,e){return em(t,e).canonicalString()}function em(t,e){const n=function(i){return new se(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xS(t){const e=se.fromString(t);return Q(VS(e)),e}function Pl(t,e){return Lg(t.databaseId,e.path)}function Dn(t,e){const n=xS(e);if(n.get(1)!==t.databaseId.projectId)throw new U(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(bS(n))}function SS(t,e){return Lg(t.databaseId,e)}function AS(t){const e=xS(t);return e.length===4?se.emptyPath():bS(e)}function tm(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bS(t){return Q(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Zw(t,e,n){return{name:Pl(t,e),fields:n.value.mapValue.fields}}function PS(t,e,n){const r=Dn(t,e.name),i=qe(e.updateTime),s=e.createTime?qe(e.createTime):Y.min(),o=new ct({mapValue:{fields:e.fields}}),a=Se.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function oO(t,e){return"found"in e?function(r,i){Q(!!i.found),i.found.name,i.found.updateTime;const s=Dn(r,i.found.name),o=qe(i.found.updateTime),a=i.found.createTime?qe(i.found.createTime):Y.min(),l=new ct({mapValue:{fields:i.found.fields}});return Se.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){Q(!!i.missing),Q(!!i.readTime);const s=Dn(r,i.missing),o=qe(i.readTime);return Se.newNoDocument(s,o)}(t,e):G()}function aO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Q(d===void 0||typeof d=="string"),Fe.fromBase64String(d||"")):(Q(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Fe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?M.UNKNOWN:vS(c.code);return new U(d,c.message||"")}(o);n=new IS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Dn(t,r.document.name),s=qe(r.document.updateTime),o=r.document.createTime?qe(r.document.createTime):Y.min(),a=new ct({mapValue:{fields:r.document.fields}}),l=Se.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Ic(c,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Dn(t,r.document),s=r.readTime?qe(r.readTime):Y.min(),o=Se.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ic([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Dn(t,r.document),s=r.removedTargetIds||[];n=new Ic([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new XV(i,s),a=r.targetId;n=new ES(a,o)}}return n}function kl(t,e){let n;if(e instanceof Ko)n={update:Zw(t,e.key,e.value)};else if(e instanceof Go)n={delete:Pl(t,e.key)};else if(e instanceof gr)n={update:Zw(t,e.key,e.data),updateMask:fO(e.fieldMask)};else{if(!(e instanceof Ng))return G();n={verify:Pl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof So)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ns)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof rs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ao)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:sO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function nm(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Ce.updateTime(qe(s.updateTime)):s.exists!==void 0?Ce.exists(s.exists):Ce.none()}(e.currentDocument):Ce.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)Q(a.setToServerValue==="REQUEST_TIME"),l=new So;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];l=new ns(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];l=new rs(d)}else"increment"in a?l=new Ao(o,a.increment):G();const c=Ae.fromServerFormat(a.fieldPath);return new Yl(c,l)}(t,i)):[];if(e.update){e.update.name;const i=Dn(t,e.update.name),s=new ct({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new Ot(c.map(d=>Ae.fromServerFormat(d)))}(e.updateMask);return new gr(i,s,o,n,r)}return new Ko(i,s,n,r)}if(e.delete){const i=Dn(t,e.delete);return new Go(i,n)}if(e.verify){const i=Dn(t,e.verify);return new Ng(i,n)}return G()}function lO(t,e){return t&&t.length>0?(Q(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?qe(i.updateTime):qe(s);return o.isEqual(Y.min())&&(o=qe(s)),new QV(o,i.transformResults||[])}(n,e))):[]}function kS(t,e){return{documents:[SS(t,e.path)]}}function Zd(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=SS(t,i);const s=function(c){if(c.length!==0)return DS(me.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Vr(m.field),direction:cO(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Zp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function RS(t,e,n,r){const{_t:i,parent:s}=Zd(t,e),o={},a=[];let l=0;return n.forEach(c=>{const d=r?c.alias:"aggregate_"+l++;o[d]=c.alias,c.aggregateType==="count"?a.push({alias:d,count:{}}):c.aggregateType==="avg"?a.push({alias:d,avg:{field:Vr(c.fieldPath)}}):c.aggregateType==="sum"&&a.push({alias:d,sum:{field:Vr(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:i.structuredQuery},parent:i.parent},ut:o,parent:s}}function CS(t){let e=AS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Q(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=NS(f);return m instanceof me&&Pg(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(S){return new bl(Ms(S.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Kl(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,_=f.values||[];return new si(_,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,_=f.values||[];return new si(_,m)}(n.endAt)),eS(e,i,o,s,a,"F",l,c)}function uO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function NS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ms(n.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ms(n.unaryFilter.field);return oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ms(n.unaryFilter.field);return oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ms(n.unaryFilter.field);return oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return oe.create(Ms(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return me.create(n.compositeFilter.filters.map(r=>NS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function cO(t){return tO[t]}function dO(t){return nO[t]}function hO(t){return rO[t]}function Vr(t){return{fieldPath:t.canonicalString()}}function Ms(t){return Ae.fromServerFormat(t.fieldPath)}function DS(t){return t instanceof oe?function(n){if(n.op==="=="){if(Mw(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NAN"}};if(Ow(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Mw(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NOT_NAN"}};if(Ow(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vr(n.field),op:dO(n.op),value:n.value}}}(t):t instanceof me?function(n){const r=n.getFilters().map(i=>DS(i));return r.length===1?r[0]:{compositeFilter:{op:hO(n.op),filters:r}}}(t):G()}function fO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function VS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),a=Fe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.ct=e}}function pO(t,e){let n;if(e.document)n=PS(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=W.fromSegments(e.noDocument.path),i=ss(e.noDocument.readTime);n=Se.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return G();{const r=W.fromSegments(e.unknownDocument.path),i=ss(e.unknownDocument.version);n=Se.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new de(i[0],i[1]);return Y.fromTimestamp(s)}(e.readTime)),n}function e0(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:ud(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Pl(s,o.key),fields:o.data.value.mapValue.fields,updateTime:bo(s,o.version.toTimestamp()),createTime:bo(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:is(e.version)};else{if(!e.isUnknownDocument())return G();r.unknownDocument={path:n.path.toArray(),version:is(e.version)}}return r}function ud(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function is(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ss(t){const e=new de(t.seconds,t.nanoseconds);return Y.fromTimestamp(e)}function Mi(t,e){const n=(e.baseMutations||[]).map(s=>nm(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>nm(t.ct,s)),i=de.fromMillis(e.localWriteTimeMs);return new Dg(e.batchId,i,n,r)}function Fa(t){const e=ss(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?ss(t.lastLimboFreeSnapshotVersion):Y.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return Q(s.documents.length===1),It(Wo(AS(s.documents[0])))}(t.query):function(s){return It(CS(s))}(t.query),new Yn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Fe.fromBase64String(t.resumeToken))}function MS(t,e){const n=is(e.snapshotVersion),r=is(e.lastLimboFreeSnapshotVersion);let i;i=sd(e.target)?kS(t.ct,e.target):Zd(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ts(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Fg(t){const e=CS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ad(e,e.limit,"L"):e}function kf(t,e){return new Og(e.largestBatchId,nm(t.ct,e.overlayMutation))}function t0(t,e){const n=e.path.lastSegment();return[t,Et(e.path.popLast()),n]}function n0(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:is(r.readTime),documentKey:Et(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{getBundleMetadata(e,n){return r0(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:ss(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return r0(e).put(function(i){return{bundleId:i.id,createTime:is(qe(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return i0(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Fg(s.bundledQuery),readTime:ss(s.readTime)}}(r)})}saveNamedQuery(e,n){return i0(e).put(function(i){return{name:i.name,readTime:is(qe(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function r0(t){return Xe(t,"bundles")}function i0(t){return Xe(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new eh(e,r)}getOverlay(e,n){return Ta(e).get(t0(this.userId,n)).next(r=>r?kf(this.serializer,r):null)}getOverlays(e,n){const r=bn();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Og(n,o);i.push(this.ht(e,a))}),V.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Et(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Ta(e).j("collectionPathOverlayIndex",a))}),V.waitFor(s)}getOverlaysForCollection(e,n,r){const i=bn(),s=Et(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ta(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=kf(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=bn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Ta(e).J({index:"collectionGroupOverlayIndex",range:a},(l,c,d)=>{const f=kf(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):d.done()}).next(()=>s)}ht(e,n){return Ta(e).put(function(i,s,o){const[a,l,c]=t0(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:kl(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Ta(t){return Xe(t,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{Pt(e){return Xe(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?Fe.fromUint8Array(r):Fe.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.Pt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){}It(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.dt(n,5);else if("booleanValue"in e)this.dt(n,10),n.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(n,15),n.At(ke(e.integerValue));else if("doubleValue"in e){const r=ke(e.doubleValue);isNaN(r)?this.dt(n,13):(this.dt(n,15),Tl(r)?n.At(0):n.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(n,20),typeof r=="string"&&(r=or(r)),n.Rt(`${r.seconds||""}`),n.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,n),this.ft(n);else if("bytesValue"in e)this.dt(n,30),n.gt(ar(e.bytesValue)),this.ft(n);else if("referenceValue"in e)this.yt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(n,45),n.At(r.latitude||0),n.At(r.longitude||0)}else"mapValue"in e?qx(e)?this.dt(n,Number.MAX_SAFE_INTEGER):Yd(e)?this.wt(e.mapValue,n):(this.St(e.mapValue,n),this.ft(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.ft(n)):G()}Vt(e,n){this.dt(n,25),this.Dt(e,n)}Dt(e,n){n.Rt(e)}St(e,n){const r=e.fields||{};this.dt(n,55);for(const i of Object.keys(r))this.Vt(i,n),this.Tt(r[i],n)}wt(e,n){var r,i;const s=e.fields||{};this.dt(n,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(n,15),n.At(ke(a)),this.Vt(o,n),this.Tt(s[o],n)}bt(e,n){const r=e.values||[];this.dt(n,50);for(const i of r)this.Tt(i,n)}yt(e,n){this.dt(n,37),W.fromName(e).path.forEach(r=>{this.dt(n,60),this.Dt(r,n)})}dt(e,n){e.At(n)}ft(e){e.At(2)}}Li.vt=new Li;function yO(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function s0(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=yO(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class _O{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=s0(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=s0(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class vO{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class wO{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class xa{constructor(){this.jt=new _O,this.Ht=new vO(this.jt),this.Jt=new wO(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Fi(this.indexId,this.documentKey,this.arrayValue,r)}}function Tr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=o0(t.arrayValue,e.arrayValue),n!==0?n:(n=o0(t.directionalValue,e.directionalValue),n!==0?n:W.comparator(t.documentKey,e.documentKey)))}function o0(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){this.Xt=new ye((n,r)=>Ae.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(Q(e.collectionGroup===this.collectionId),this.nn)return!1;const n=Wp(e);if(n!==void 0&&!this.sn(n))return!1;const r=Di(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.on(a,l)||!this._n(this.en[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new ye(Ae.comparator);const n=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Ki(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Ki(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Ki(r.field,r.dir==="asc"?0:1)));return new Eo(Eo.UNKNOWN_ID,this.collectionId,n,Io.empty())}sn(e){for(const n of this.tn)if(this.on(n,e))return!0;return!1}on(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}_n(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t){var e,n;if(Q(t instanceof oe||t instanceof me),t instanceof oe){if(t instanceof Zx){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>oe.create(t.field,"==",s)))||[];return me.create(i,"or")}return t}const r=t.filters.map(i=>LS(i));return me.create(r,t.op)}function EO(t){if(t.getFilters().length===0)return[];const e=sm(LS(t));return Q(FS(e)),rm(e)||im(e)?[e]:e.getFilters()}function rm(t){return t instanceof oe}function im(t){return t instanceof me&&Pg(t)}function FS(t){return rm(t)||im(t)||function(n){if(n instanceof me&&Qp(n)){for(const r of n.getFilters())if(!rm(r)&&!im(r))return!1;return!0}return!1}(t)}function sm(t){if(Q(t instanceof oe||t instanceof me),t instanceof oe)return t;if(t.filters.length===1)return sm(t.filters[0]);const e=t.filters.map(r=>sm(r));let n=me.create(e,t.op);return n=cd(n),FS(n)?n:(Q(n instanceof me),Q(xo(n)),Q(n.filters.length>1),n.filters.reduce((r,i)=>jg(r,i)))}function jg(t,e){let n;return Q(t instanceof oe||t instanceof me),Q(e instanceof oe||e instanceof me),n=t instanceof oe?e instanceof oe?function(i,s){return me.create([i,s],"and")}(t,e):l0(t,e):e instanceof oe?l0(e,t):function(i,s){if(Q(i.filters.length>0&&s.filters.length>0),xo(i)&&xo(s))return Yx(i,s.getFilters());const o=Qp(i)?i:s,a=Qp(i)?s:i,l=o.filters.map(c=>jg(c,a));return me.create(l,"or")}(t,e),cd(n)}function l0(t,e){if(xo(e))return Yx(e,t.getFilters());{const n=e.filters.map(r=>jg(t,r));return me.create(n,"or")}}function cd(t){if(Q(t instanceof oe||t instanceof me),t instanceof oe)return t;const e=t.getFilters();if(e.length===1)return cd(e[0]);if(Hx(t))return t;const n=e.map(i=>cd(i)),r=[];return n.forEach(i=>{i instanceof oe?r.push(i):i instanceof me&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:me.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(){this.un=new Ug}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Qt.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Qt.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class Ug{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ye(se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ye(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=new Uint8Array(0);class TO{constructor(e,n){this.databaseId=n,this.cn=new Ug,this.ln=new mr(r=>ts(r),(r,i)=>Gl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.cn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.cn.add(n)});const s={collectionId:r,parent:Et(i)};return u0(e).put(s)}return V.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[Rx(n),""],!1,!0);return u0(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(An(o.parent))}return r})}addFieldIndex(e,n){const r=Sa(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Rs(e);return s.next(a=>{o.put(n0(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Sa(e),i=Rs(e),s=ks(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Sa(e),r=ks(e),i=Rs(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return V.forEach(this.hn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new a0(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=ks(e);let i=!0;const s=new Map;return V.forEach(this.hn(n),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=te();const a=[];return V.forEach(s,(l,c)=>{B("IndexedDbIndexManager",`Using index ${function(I){return`id=${I.indexId}|cg=${I.collectionGroup}|f=${I.fields.map(A=>`${A.fieldPath}:${A.kind}`).join(",")}`}(l)} to execute ${ts(n)}`);const d=function(I,A){const L=Wp(A);if(L===void 0)return null;for(const N of od(I,L.fieldPath))switch(N.op){case"array-contains-any":return N.value.arrayValue.values||[];case"array-contains":return[N.value]}return null}(c,l),f=function(I,A){const L=new Map;for(const N of Di(A))for(const v of od(I,N.fieldPath))switch(v.op){case"==":case"in":L.set(N.fieldPath.canonicalString(),v.value);break;case"not-in":case"!=":return L.set(N.fieldPath.canonicalString(),v.value),Array.from(L.values())}return null}(c,l),m=function(I,A){const L=[];let N=!0;for(const v of Di(A)){const y=v.kind===0?Bw(I,v.fieldPath,I.startAt):zw(I,v.fieldPath,I.startAt);L.push(y.value),N&&(N=y.inclusive)}return new si(L,N)}(c,l),_=function(I,A){const L=[];let N=!0;for(const v of Di(A)){const y=v.kind===0?zw(I,v.fieldPath,I.endAt):Bw(I,v.fieldPath,I.endAt);L.push(y.value),N&&(N=y.inclusive)}return new si(L,N)}(c,l),S=this.In(l,c,m),P=this.In(l,c,_),R=this.Tn(l,c,f),T=this.En(l.indexId,d,S,m.inclusive,P,_.inclusive,R);return V.forEach(T,w=>r.G(w,n.limit).next(I=>{I.forEach(A=>{const L=W.fromSegments(A.documentKey);o.has(L)||(o=o.add(L),a.push(L))})}))}).next(()=>a)}return V.resolve(null)})}hn(e){let n=this.ln.get(e);return n||(e.filters.length===0?n=[e]:n=EO(me.create(e.filters,"and")).map(r=>Jp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,n),n)}En(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),d=[];for(let f=0;f<l;++f){const m=n?this.dn(n[f/c]):Hu,_=this.An(e,m,r[f%c],i),S=this.Rn(e,m,s[f%c],o),P=a.map(R=>this.An(e,m,R,!0));d.push(...this.createRange(_,S,P))}return d}An(e,n,r,i){const s=new Fi(e,W.empty(),n,r);return i?s:s.Zt()}Rn(e,n,r,i){const s=new Fi(e,W.empty(),n,r);return i?s.Zt():s}Pn(e,n){const r=new a0(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.hn(n);return V.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new ye(Ae.comparator),d=!1;for(const f of l.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:c=c.add(m.field));for(const f of l.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Vn(e,n){const r=new xa;for(const i of Di(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);Li.vt.It(s,o)}return r.zt()}dn(e){const n=new xa;return Li.vt.It(e,n.Yt(0)),n.zt()}mn(e,n){const r=new xa;return Li.vt.It(es(this.databaseId,n),r.Yt(function(s){const o=Di(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,n,r){if(r===null)return[];let i=[];i.push(new xa);let s=0;for(const o of Di(e)){const a=r[s++];for(const l of i)if(this.fn(n,o.fieldPath)&&Al(a))i=this.gn(i,o,a);else{const c=l.Yt(o.kind);Li.vt.It(a,c)}}return this.pn(i)}In(e,n,r){return this.Tn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}gn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new xa;l.seed(a.zt()),Li.vt.It(o,l.Yt(n.kind)),s.push(l)}return s}fn(e,n){return!!e.filters.find(r=>r instanceof oe&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Sa(e),i=Rs(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return V.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(d,f){const m=f?new Io(f.sequenceNumber,new Qt(ss(f.readTime),new W(An(f.documentKey)),f.largestBatchId)):Io.empty(),_=d.fields.map(([S,P])=>new Ki(Ae.fromServerFormat(S),P));return new Eo(d.indexId,d.collectionGroup,_,m)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Z(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Sa(e),s=Rs(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>V.forEach(a,l=>s.put(n0(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return V.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?V.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),V.forEach(a,l=>this.wn(e,i,l).next(c=>{const d=this.Sn(s,l);return c.isEqual(d)?V.resolve():this.bn(e,s,l,c,d)}))))})}Dn(e,n,r,i){return ks(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return ks(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=ks(e);let s=new ye(Tr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{s=s.add(new Fi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,n){let r=new ye(Tr);const i=this.Vn(n,e);if(i==null)return r;const s=Wp(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Al(o))for(const a of o.arrayValue.values||[])r=r.add(new Fi(n.indexId,e.key,this.dn(a),i))}else r=r.add(new Fi(n.indexId,e.key,Hu,i));return r}bn(e,n,r,i,s){B("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,c,d,f,m){const _=l.getIterator(),S=c.getIterator();let P=Ps(_),R=Ps(S);for(;P||R;){let T=!1,w=!1;if(P&&R){const I=d(P,R);I<0?w=!0:I>0&&(T=!0)}else P!=null?w=!0:T=!0;T?(f(R),R=Ps(S)):w?(m(P),P=Ps(_)):(P=Ps(_),R=Ps(S))}}(i,s,Tr,a=>{o.push(this.Dn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),V.waitFor(o)}yn(e){let n=1;return Rs(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Tr(o,a)).filter((o,a,l)=>!a||Tr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Tr(o,e),l=Tr(o,n);if(a===0)i[0]=e.Zt();else if(a>0&&l<0)i.push(o),i.push(o.Zt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Hu,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Hu,[]];s.push(IDBKeyRange.bound(a,l))}return s}Cn(e,n){return Tr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(c0)}getMinOffset(e,n){return V.mapArray(this.hn(n),r=>this.Pn(e,r).next(i=>i||G())).next(c0)}}function u0(t){return Xe(t,"collectionParents")}function ks(t){return Xe(t,"indexEntries")}function Sa(t){return Xe(t,"indexConfiguration")}function Rs(t){return Xe(t,"indexState")}function c0(t){Q(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Sg(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Qt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class vt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(d,f,m)=>(a++,m.delete()));s.push(l.next(()=>{Q(a===1)}));const c=[];for(const d of n.mutations){const f=Lx(e,d.key.path,n.batchId);s.push(i.delete(f)),c.push(d.key)}return V.waitFor(s).next(()=>c)}function dd(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw G();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(41943040,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);class th{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,n,r,i){Q(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new th(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return xr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Ls(e),o=xr(e);return o.add({}).next(a=>{Q(typeof a=="number");const l=new Dg(a,n,r,i),c=function(_,S,P){const R=P.baseMutations.map(w=>kl(_.ct,w)),T=P.mutations.map(w=>kl(_.ct,w));return{userId:S,batchId:P.batchId,localWriteTimeMs:P.localWriteTime.toMillis(),baseMutations:R,mutations:T}}(this.serializer,this.userId,l),d=[];let f=new ye((m,_)=>Z(m.canonicalString(),_.canonicalString()));for(const m of i){const _=Lx(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),d.push(o.put(c)),d.push(s.put(_,cV))}return f.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Fn[a]=l.keys()}),V.waitFor(d).next(()=>l)})}lookupMutationBatch(e,n){return xr(e).get(n).next(r=>r?(Q(r.userId===this.userId),Mi(this.serializer,r)):null)}Mn(e,n){return this.Fn[n]?V.resolve(this.Fn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Fn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return xr(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(Q(a.batchId>=r),s=Mi(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return xr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return xr(e).U("userMutationsIndex",n).next(r=>r.map(i=>Mi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=yc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Ls(e).J({range:i},(o,a,l)=>{const[c,d,f]=o,m=An(d);if(c===this.userId&&n.path.isEqual(m))return xr(e).get(f).next(_=>{if(!_)throw G();Q(_.userId===this.userId),s.push(Mi(this.serializer,_))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ye(Z);const i=[];return n.forEach(s=>{const o=yc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=Ls(e).J({range:a},(c,d,f)=>{const[m,_,S]=c,P=An(_);m===this.userId&&s.path.isEqual(P)?r=r.add(S):f.done()});i.push(l)}),V.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=yc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ye(Z);return Ls(e).J({range:o},(l,c,d)=>{const[f,m,_]=l,S=An(m);f===this.userId&&r.isPrefixOf(S)?S.length===i&&(a=a.add(_)):d.done()}).next(()=>this.xn(e,a))}xn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(xr(e).get(s).next(o=>{if(o===null)throw G();Q(o.userId===this.userId),r.push(Mi(this.serializer,o))}))}),V.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return jS(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.On(n.batchId)}),V.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return V.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Ls(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=An(s[1]);i.push(l)}else a.done()}).next(()=>{Q(i.length===0)})})}containsKey(e,n){return US(e,this.userId,n)}Nn(e){return BS(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function US(t,e,n){const r=yc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ls(t).J({range:s,H:!0},(a,l,c)=>{const[d,f,m]=a;d===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function xr(t){return Xe(t,"mutations")}function Ls(t){return Xe(t,"documentMutations")}function BS(t){return Xe(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new os(0)}static kn(){return new os(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.qn(e).next(n=>{const r=new os(n.highestTargetId);return n.highestTargetId=r.next(),this.Qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(n=>Y.fromTimestamp(new de(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Qn(e,i)))}addTargetData(e,n){return this.Kn(e,n).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(n,r),this.Qn(e,r))))}updateTargetData(e,n){return this.Kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Cs(e).delete(n.targetId)).next(()=>this.qn(e)).next(r=>(Q(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Cs(e).J((o,a)=>{const l=Fa(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>V.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Cs(e).J((r,i)=>{const s=Fa(i);n(s)})}qn(e){return h0(e).get("targetGlobalKey").next(n=>(Q(n!==null),n))}Qn(e,n){return h0(e).put("targetGlobalKey",n)}Kn(e,n){return Cs(e).put(MS(this.serializer,n))}$n(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=ts(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Cs(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=Fa(a);Gl(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Or(e);return n.forEach(o=>{const a=Et(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),V.waitFor(i)}removeMatchingKeys(e,n,r){const i=Or(e);return V.forEach(n,s=>{const o=Et(s.path);return V.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Or(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Or(e);let s=te();return i.J({range:r,H:!0},(o,a,l)=>{const c=An(o[1]),d=new W(c);s=s.add(d)}).next(()=>s)}containsKey(e,n){const r=Et(n.path),i=IDBKeyRange.bound([r],[Rx(r)],!1,!0);let s=0;return Or(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return Cs(e).get(n).next(r=>r?Fa(r):null)}}function Cs(t){return Xe(t,"targets")}function h0(t){return Xe(t,"targetGlobal")}function Or(t){return Xe(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0([t,e],[n,r]){const i=Z(t,n);return i===0?Z(e,r):i}class SO{constructor(e){this.Un=e,this.buffer=new ye(f0),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();f0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class zS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){B("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){_i(n)?B("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await yi(n)}await this.Hn(3e5)})}}class AO{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(Vt.oe);const r=new SO(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(d0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),d0):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,a,l,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Vs()<=ie.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function $S(t,e){return new AO(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e,n){this.db=e,this.garbageCollector=$S(this,n)}Yn(e){const n=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Zn(e,n){return this.tr(e,(r,i)=>n(i))}addReference(e,n,r){return Qu(e,r)}removeReference(e,n,r){return Qu(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Qu(e,n)}nr(e,n){return function(i,s){let o=!1;return BS(i).Y(a=>US(i,a,s).next(l=>(l&&(o=!0),V.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=n){const l=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Y.min()),Or(e).delete(function(f){return[0,Et(f.path)]}(o))))});i.push(l)}}).next(()=>V.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Qu(e,n)}tr(e,n){const r=Or(e);let i,s=Vt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==Vt.oe&&n(new W(An(i)),s),s=c,i=l):s=Vt.oe}).next(()=>{s!==Vt.oe&&n(new W(An(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Qu(t,e){return Or(t).put(function(r,i){return{targetId:0,path:Et(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(){this.changes=new mr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Se.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ki(e).put(r)}removeEntry(e,n,r){return ki(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],ud(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.rr(e,r)))}getEntry(e,n){let r=Se.newInvalidDocument(n);return ki(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Aa(n))},(i,s)=>{r=this.ir(n,s)}).next(()=>r)}sr(e,n){let r={size:0,document:Se.newInvalidDocument(n)};return ki(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Aa(n))},(i,s)=>{r={document:this.ir(n,s),size:dd(s)}}).next(()=>r)}getEntries(e,n){let r=Mt();return this._r(e,n,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,n){let r=Mt(),i=new Ee(W.comparator);return this._r(e,n,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,dd(o))}).next(()=>({documents:r,ur:i}))}_r(e,n,r){if(n.isEmpty())return V.resolve();let i=new ye(g0);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Aa(i.first()),Aa(i.last())),o=i.getIterator();let a=o.getNext();return ki(e).J({index:"documentKeyIndex",range:s},(l,c,d)=>{const f=W.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&g0(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.$(Aa(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),ud(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ki(e).U(IDBKeyRange.bound(a,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=Mt();for(const f of c){const m=this.ir(W.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(Ql(n,m)||i.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,n,r,i){let s=Mt();const o=m0(n,r),a=m0(n,Qt.max());return ki(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,d)=>{const f=this.ir(W.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new kO(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return p0(e).get("remoteDocumentGlobalKey").next(n=>(Q(!!n),n))}rr(e,n){return p0(e).put("remoteDocumentGlobalKey",n)}ir(e,n){if(n){const r=pO(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(Y.min())))return r}return Se.newInvalidDocument(e)}}function WS(t){return new PO(t)}class kO extends qS{constructor(e,n){super(),this.cr=e,this.trackRemovals=n,this.lr=new mr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ye((s,o)=>Z(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(n.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=e0(this.cr.serializer,o);i=i.add(s.path.popLast());const c=dd(l);r+=c-a.size,n.push(this.cr.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=e0(this.cr.serializer,o.convertToNoDocument(Y.min()));n.push(this.cr.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.cr.updateMetadata(e,r)),V.waitFor(n)}getFromCache(e,n){return this.cr.sr(e,n).next(r=>(this.lr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.cr.ar(e,n).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function p0(t){return Xe(t,"remoteDocumentGlobal")}function ki(t){return Xe(t,"remoteDocumentsV14")}function Aa(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function m0(t,e){const n=e.documentKey.path.toArray();return[t,ud(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function g0(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Z(n[s],r[s]),i)return i;return i=Z(n.length,r.length),i||(i=Z(n[n.length-2],r[r.length-2]),i||Z(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Xa(r.mutation,i,Ot.empty(),de.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=bn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ma();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=bn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Mt();const o=Ja(),a=function(){return Ja()}();return n.forEach((l,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof gr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Xa(d.mutation,c,d.mutation.getFieldMask(),de.now())):o.set(c.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new RO(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ja();let i=new Ee((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let d=r.get(l)||Ot.empty();d=a.applyToLocalView(c,d),r.set(l,d);const f=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,d=l.value,f=lS();d.forEach(m=>{if(!s.has(m)){const _=mS(n.get(m),r.get(m));_!==null&&f.set(m,_),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(bn());let a=-1,l=s;return o.next(c=>V.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,te())).next(d=>({batchId:a,changes:aS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Ma();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ma();return this.indexManager.getCollectionParents(e,s).next(a=>V.forEach(a,l=>{const c=function(f,m){return new pr(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Se.newInvalidDocument(d)))});let a=Ma();return o.forEach((l,c)=>{const d=s.get(l);d!==void 0&&Xa(d.mutation,c,Ot.empty(),de.now()),Ql(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:qe(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Fg(i.bundledQuery),readTime:qe(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(){this.overlays=new Ee(W.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=bn();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=bn(),s=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=bn(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=bn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return V.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Og(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.Tr=new ye(Ze.Er),this.dr=new ye(Ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new W(new se([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new W(new se([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return W.comparator(e.key,n.key)||Z(e.wr,n.wr)}static Ar(e,n){return Z(e.wr,n.wr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ye(Ze.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Dg(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ye(Z);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new W(s),0);let a=new ye(Z);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.wr)),!0)},o),V.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Q(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ze(n,0),i=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e){this.Mr=e,this.docs=function(){return new Ee(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Se.newInvalidDocument(n))}getEntries(e,n){let r=Mt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Se.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Mt();const o=n.path,a=new W(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:d}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Sg(Nx(d),r)<=0||(i.has(d.key)||Ql(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new MO(this)}getSize(e){return V.resolve(this.size)}}class MO extends qS{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e){this.persistence=e,this.Nr=new mr(n=>ts(n),Gl),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Bg,this.targetCount=0,this.kr=os.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new os(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Vt(0),this.Kr=!1,this.Kr=!0,this.$r=new DO,this.referenceDelegate=e(this),this.Ur=new LO(this),this.indexManager=new IO,this.remoteDocumentCache=function(i){return new OO(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new OS(n),this.Gr=new CO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new NO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new VO(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new FO(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class FO extends Vx{constructor(e){super(),this.currentSequenceNumber=e}}class nh{constructor(e){this.persistence=e,this.Jr=new Bg,this.Yr=null}static Zr(e){return new nh(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=W.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}class hd{constructor(e,n){this.persistence=e,this.ti=new mr(r=>Et(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=$S(this,n)}static Zr(e,n){return new hd(e,n)}zr(){}jr(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Yn(e){const n=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}Zn(e,n){return V.forEach(this.ti,(r,i)=>this.nr(e,r,i).next(s=>s?V.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Or(e,o=>this.nr(e,o,n).next(a=>{a||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ti.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.ti.set(n,e.currentSequenceNumber),V.resolve()}Wr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=vc(e.data.value)),n}nr(e,n,r){return V.or([()=>this.persistence.Hr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ti.get(n);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e){this.serializer=e}O(e,n,r,i){const s=new Gd("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Rw,{unique:!0}),l.createObjectStore("documentMutations")}(e),y0(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=V.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),y0(e)),o=o.next(()=>function(l){const c=l.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Y.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store("mutations").U().next(d=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Rw,{unique:!0});const f=c.store("mutations"),m=d.map(_=>f.put(_));return V.waitFor(m)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:IV});c.createIndex("collectionPathOverlayIndex",TV,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",xV,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:dV});c.createIndex("documentKeyIndex",hV),c.createIndex("collectionGroupIndex",fV)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:_V}).createIndex("sequenceNumberIndex",vV,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:wV}).createIndex("documentKeyIndex",EV,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=dd(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>V.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>V.forEach(a,l=>{Q(l.userId===s.userId);const c=Mi(this.serializer,l);return jS(e,s.userId,c).next(()=>{})}))}))}ii(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new se(o),c=function(f){return[0,Et(f)]}(l);s.push(n.get(c).next(d=>d?V.resolve():(f=>n.put({targetId:0,path:Et(f),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>V.waitFor(s))})}si(e,n){e.createObjectStore("collectionParents",{keyPath:yV});const r=n.store("collectionParents"),i=new Ug,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Et(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new se(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],c)=>{const d=An(a);return s(d.popLast())}))}oi(e){const n=e.store("targets");return n.J((r,i)=>{const s=Fa(i),o=MS(this.serializer,s);return n.put(o)})}_i(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(f){return f.document?new W(se.fromString(f.document.name).popFirst(5)):f.noDocument?W.fromSegments(f.noDocument.path):f.unknownDocument?W.fromSegments(f.unknownDocument.path):G()}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>V.waitFor(i))}ai(e,n){const r=n.store("mutations"),i=WS(this.serializer),s=new zg(nh.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var c;let d=(c=a.get(l.userId))!==null&&c!==void 0?c:te();Mi(this.serializer,l).keys().forEach(f=>d=d.add(f)),a.set(l.userId,d)}),V.forEach(a,(l,c)=>{const d=new tt(c),f=eh.lt(this.serializer,d),m=s.getIndexManager(d),_=th.lt(d,this.serializer,m,s.referenceDelegate);return new KS(i,_,f,m).recalculateAndSaveOverlaysForDocumentKeys(new Kp(n,Vt.oe),l).next()})})}}function y0(t){t.createObjectStore("targetDocuments",{keyPath:mV}).createIndex("documentTargetsIndex",gV,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",pV,{unique:!0}),t.createObjectStore("targetGlobal")}const Rf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class $g{constructor(e,n,r,i,s,o,a,l,c,d,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=d,this.hi=f,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=m=>Promise.resolve(),!$g.D())throw new U(M.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new bO(this,i),this.Ai=n+"main",this.serializer=new OS(l),this.Ri=new Nn(this.Ai,this.hi,new jO(this.serializer)),this.$r=new gO,this.Ur=new xO(this.referenceDelegate,this.serializer),this.remoteDocumentCache=WS(this.serializer),this.Gr=new mO,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,d===!1&&$e("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new U(M.FAILED_PRECONDITION,Rf);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Vt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Yu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(n=>{n||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(n=>this.isPrimary&&!n?this.bi(e).next(()=>!1):!!n&&this.Di(e).next(()=>!0))).catch(e=>{if(_i(e))return B("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return B("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return ba(e).get("owner").next(n=>V.resolve(this.vi(n)))}Ci(e){return Yu(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Xe(n,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return V.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const n of e)this.Vi.removeItem(this.Oi(n.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?V.resolve(!0):ba(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)){if(this.vi(n)&&this.networkEnabled)return!0;if(!this.vi(n)){if(!n.allowTabSynchronization)throw new U(M.FAILED_PRECONDITION,Rf);return!1}}return!(!this.networkEnabled||!this.inForeground)||Yu(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&B("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Kp(e,Vt.oe);return this.bi(n).next(()=>this.Ci(n))}),this.Ri.close(),this.qi()}xi(e,n){return e.filter(r=>this.Mi(r.updateTimeMs,n)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Yu(e).U().next(n=>this.xi(n,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,n){return th.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new TO(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return eh.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,n,r){B("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===17?bV:l===16?AV:l===15?bg:l===14?Ux:l===13?jx:l===12?SV:l===11?Fx:void G()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new Kp(a,this.Qr?this.Qr.next():Vt.oe),n==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw $e(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new U(M.FAILED_PRECONDITION,Dx);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return ba(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)&&!this.vi(n)&&!(this.li||this.allowTabSynchronization&&n.allowTabSynchronization))throw new U(M.FAILED_PRECONDITION,Rf)})}Di(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ba(e).put("owner",n)}static D(){return Nn.D()}bi(e){const n=ba(e);return n.get("owner").next(r=>this.vi(r)?(B("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):V.resolve())}Mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||($e(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const n=/(?:Version|Mobile)\/1[456]/;VT()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var n;try{const r=((n=this.Vi)===null||n===void 0?void 0:n.getItem(this.Oi(e)))!==null;return B("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return $e("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){$e("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ba(t){return Xe(t,"owner")}function Yu(t){return Xe(t,"clientMetadata")}function qg(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Wg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return VT()?8:Ox(Je())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new UO;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Vs()<=ie.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Os(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Vs()<=ie.DEBUG&&B("QueryEngine","Query:",Os(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Vs()<=ie.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Os(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,It(n))):V.resolve())}Yi(e,n){if($w(n))return V.resolve(null);let r=It(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ad(n,null,"F"),r=It(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,a);return this.ns(n,c,o,l.readTime)?this.Yi(e,ad(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return $w(n)||i.isEqual(Y.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?V.resolve(null):(Vs()<=ie.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Os(n)),this.rs(e,o,n,Cx(i,-1)).next(a=>a))})}ts(e,n){let r=new ye(sS(e));return n.forEach((i,s)=>{Ql(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Vs()<=ie.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Os(n)),this.Ji.getDocumentsMatchingQuery(e,n,Qt.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ee(Z),this._s=new mr(s=>ts(s),Gl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KS(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function HS(t,e,n,r){return new BO(t,e,n,r)}async function QS(t,e){const n=$(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=te();for(const c of i){o.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function zO(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,d){const f=c.batch,m=f.keys();let _=V.resolve();return m.forEach(S=>{_=_.next(()=>d.getEntry(l,S)).next(P=>{const R=c.docVersions.get(S);Q(R!==null),P.version.compareTo(R)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=te();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function YS(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function $O(t,e){const n=$(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,f)));let _=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(Fe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(f,_),function(P,R,T){return P.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,_,d)&&a.push(n.Ur.updateTargetData(s,_))});let l=Mt(),c=te();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(JS(s,o,e.documentUpdates).next(d=>{l=d.Ps,c=d.Is})),!r.isEqual(Y.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return V.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.os=i,s))}function JS(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Mt();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function qO(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Po(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Yn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function ko(t,e,n){const r=$(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!_i(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function fd(t,e,n){const r=$(t);let i=Y.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,d){const f=$(l),m=f._s.get(d);return m!==void 0?V.resolve(f.os.get(m)):f.Ur.getTargetData(c,d)}(r,o,It(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:te())).next(a=>(eA(r,iS(e),a),{documents:a,Ts:s})))}function XS(t,e){const n=$(t),r=$(n.Ur),i=n.os.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function ZS(t,e){const n=$(t),r=n.us.get(e)||Y.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.cs.getAllFromCollectionGroup(i,e,Cx(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(eA(n,e,i),i))}function eA(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}async function WO(t,e,n,r){const i=$(t);let s=te(),o=Mt();for(const c of n){const d=e.Es(c.metadata.name);c.document&&(s=s.add(d));const f=e.ds(c);f.setReadTime(e.As(c.metadata.readTime)),o=o.insert(d,f)}const a=i.cs.newChangeBuffer({trackRemovals:!0}),l=await Po(i,function(d){return It(Wo(se.fromString(`__bundle__/docs/${d}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>JS(c,a,o).next(d=>(a.apply(c),d)).next(d=>i.Ur.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.Ur.addMatchingKeys(c,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,d.Ps,d.Is)).next(()=>d.Ps)))}async function KO(t,e,n=te()){const r=await Po(t,It(Fg(e.bundledQuery))),i=$(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=qe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Gr.saveNamedQuery(s,e);const a=r.withResumeToken(Fe.EMPTY_BYTE_STRING,o);return i.os=i.os.insert(a.targetId,a),i.Ur.updateTargetData(s,a).next(()=>i.Ur.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ur.addMatchingKeys(s,n,r.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function _0(t,e){return`firestore_clients_${t}_${e}`}function v0(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Cf(t,e){return`firestore_targets_${t}_${e}`}class pd{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Rs(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new U(i.error.code,i.error.message))),o?new pd(e,n,i.state,s):($e("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Za{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Rs(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new U(r.error.code,r.error.message))),s?new Za(e,r.state,i):($e("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class md{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Rs(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Rg();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Mx(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new md(e,s):($e("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Kg{constructor(e,n){this.clientId=e,this.onlineState=n}static Rs(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Kg(n.clientId,n.onlineState):($e("SharedClientState",`Failed to parse online state: ${e}`),null)}}class om{constructor(){this.activeTargetIds=Rg()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Nf{constructor(e,n,r,i,s){this.window=e,this.ui=n,this.persistenceKey=r,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new Ee(Z),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=_0(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new om),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const i=this.getItem(_0(this.persistenceKey,r));if(i){const s=md.Rs(r,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const n=this.storage.getItem(this.xs);if(n){const r=this.Ls(n);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let n=!1;return this.Ss.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,n,r){this.qs(e,n,r),this.Qs(e)}addLocalQueryTarget(e,n=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Cf(this.persistenceKey,e));if(i){const s=Za.Rs(e,i);s&&(r=s.state)}}return n&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Cf(this.persistenceKey,e))}updateQueryState(e,n,r){this.$s(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Qs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return B("SharedClientState","READ",e,n),n}setItem(e,n){B("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){B("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const n=e;if(n.storageArea===this.storage){if(B("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Ds)return void $e("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Cs.test(n.key)){if(n.newValue==null){const r=this.Gs(n.key);return this.zs(r,null)}{const r=this.js(n.key,n.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(n.key)){if(n.newValue!==null){const r=this.Hs(n.key,n.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(n.key)){if(n.newValue!==null){const r=this.Ys(n.key,n.newValue);if(r)return this.Zs(r)}}else if(n.key===this.xs){if(n.newValue!==null){const r=this.Ls(n.newValue);if(r)return this.Bs(r)}}else if(n.key===this.vs){const r=function(s){let o=Vt.oe;if(s!=null)try{const a=JSON.parse(s);Q(typeof a=="number"),o=a}catch(a){$e("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Vt.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Os){const r=this.Xs(n.newValue);await Promise.all(r.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(n)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,n,r){const i=new pd(this.currentUser,e,n,r),s=v0(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const n=v0(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Us(e){const n={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(n))}$s(e,n,r){const i=Cf(this.persistenceKey,e),s=new Za(e,n,r);this.setItem(i,s.Vs())}Ws(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Os,n)}Gs(e){const n=this.Cs.exec(e);return n?n[1]:null}js(e,n){const r=this.Gs(e);return md.Rs(r,n)}Hs(e,n){const r=this.Fs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return pd.Rs(new tt(s),i,n)}Ys(e,n){const r=this.Ms.exec(e),i=Number(r[1]);return Za.Rs(i,n)}Ls(e){return Kg.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);B("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,n){const r=n?this.Ss.insert(e,n):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let n=Rg();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class tA{constructor(){this.so=new om,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new om,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ju=null;function Df(){return Ju===null?Ju=function(){return 268435456+Math.round(2147483648*Math.random())}():Ju++,"0x"+Ju.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class YO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Df(),l=this.xo(n,r.toUriEncodedString());B("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,l,c,i).then(d=>(B("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Ht("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=HO[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Df();return new Promise((o,a)=>{const l=new Ix;l.setWithCredentials(!0),l.listenOnce(Tx.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case gc.NO_ERROR:const d=l.getResponseJson();B(_t,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case gc.TIMEOUT:B(_t,`RPC '${e}' ${s} timed out`),a(new U(M.DEADLINE_EXCEEDED,"Request time out"));break;case gc.HTTP_ERROR:const f=l.getStatus();if(B(_t,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const S=function(R){const T=R.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(T)>=0?T:M.UNKNOWN}(_.status);a(new U(S,_.message))}else a(new U(M.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new U(M.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{B(_t,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);B(_t,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Df(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ax(),a=Sx(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");B(_t,`Creating RPC '${e}' stream ${i}: ${d}`,l);const f=o.createWebChannel(d,l);let m=!1,_=!1;const S=new QO({Io:R=>{_?B(_t,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(m||(B(_t,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),B(_t,`RPC '${e}' stream ${i} sending:`,R),f.send(R))},To:()=>f.close()}),P=(R,T,w)=>{R.listen(T,I=>{try{w(I)}catch(A){setTimeout(()=>{throw A},0)}})};return P(f,Oa.EventType.OPEN,()=>{_||(B(_t,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),P(f,Oa.EventType.CLOSE,()=>{_||(_=!0,B(_t,`RPC '${e}' stream ${i} transport closed`),S.So())}),P(f,Oa.EventType.ERROR,R=>{_||(_=!0,Ht(_t,`RPC '${e}' stream ${i} transport errored:`,R),S.So(new U(M.UNAVAILABLE,"The operation could not be completed")))}),P(f,Oa.EventType.MESSAGE,R=>{var T;if(!_){const w=R.data[0];Q(!!w);const I=w,A=I.error||((T=I[0])===null||T===void 0?void 0:T.error);if(A){B(_t,`RPC '${e}' stream ${i} received error:`,A);const L=A.status;let N=function(x){const b=Ke[x];if(b!==void 0)return vS(b)}(L),v=A.message;N===void 0&&(N=M.INTERNAL,v="Unknown error status: "+L+" with message "+A.message),_=!0,S.So(new U(N,v)),f.close()}else B(_t,`RPC '${e}' stream ${i} received:`,w),S.bo(w)}}),P(a,xx.STAT_EVENT,R=>{R.stat===qp.PROXY?B(_t,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===qp.NOPROXY&&B(_t,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(){return typeof window<"u"?window:null}function Tc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(t){return new iO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n,r,i,s,o,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Gg(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?($e(n.toString()),$e("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new U(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JO extends rA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=aO(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?qe(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=tm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=sd(l)?{documents:kS(s,l)}:{query:Zd(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=TS(s,o.resumeToken);const c=Zp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=bo(s,o.snapshotVersion.toTimestamp());const c=Zp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=uO(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=tm(this.serializer),n.removeTarget=e,this.a_(n)}}class XO extends rA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Q(!!e.streamToken),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=lO(e.writeResults,e.commitTime),r=qe(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=tm(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>kl(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new U(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,em(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,em(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class eM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?($e(n),this.D_=!1):B("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{wi(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=$(l);c.L_.add(4),await Ho(c),c.q_.set("Unknown"),c.L_.delete(4),await eu(c)}(this))})}),this.q_=new eM(r,i)}}async function eu(t){if(wi(t))for(const e of t.B_)await e(!0)}async function Ho(t){for(const e of t.B_)await e(!1)}function rh(t,e){const n=$(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Yg(n)?Qg(n):Yo(n).r_()&&Hg(n,e))}function Ro(t,e){const n=$(t),r=Yo(n);n.N_.delete(e),r.r_()&&iA(n,e),n.N_.size===0&&(r.r_()?r.o_():wi(n)&&n.q_.set("Unknown"))}function Hg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Yo(t).A_(e)}function iA(t,e){t.Q_.xe(e),Yo(t).R_(e)}function Qg(t){t.Q_=new eO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Yo(t).start(),t.q_.v_()}function Yg(t){return wi(t)&&!Yo(t).n_()&&t.N_.size>0}function wi(t){return $(t).L_.size===0}function sA(t){t.Q_=void 0}async function nM(t){t.q_.set("Online")}async function rM(t){t.N_.forEach((e,n)=>{Hg(t,e)})}async function iM(t,e){sA(t),Yg(t)?(t.q_.M_(e),Qg(t)):t.q_.set("Unknown")}async function sM(t,e,n){if(t.q_.set("Online"),e instanceof IS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gd(t,r)}else if(e instanceof Ic?t.Q_.Ke(e):e instanceof ES?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await YS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const d=s.N_.get(l);if(!d)return;s.N_.set(l,d.withResumeToken(Fe.EMPTY_BYTE_STRING,d.snapshotVersion)),iA(s,l);const f=new Yn(d.target,l,c,d.sequenceNumber);Hg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await gd(t,r)}}async function gd(t,e,n){if(!_i(e))throw e;t.L_.add(1),await Ho(t),t.q_.set("Offline"),n||(n=()=>YS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await eu(t)})}function oA(t,e){return e().catch(n=>gd(t,n,e))}async function Qo(t){const e=$(t),n=oi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;oM(e);)try{const i=await qO(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,aM(e,i)}catch(i){await gd(e,i)}aA(e)&&lA(e)}function oM(t){return wi(t)&&t.O_.length<10}function aM(t,e){t.O_.push(e);const n=oi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function aA(t){return wi(t)&&!oi(t).n_()&&t.O_.length>0}function lA(t){oi(t).start()}async function lM(t){oi(t).p_()}async function uM(t){const e=oi(t);for(const n of t.O_)e.m_(n.mutations)}async function cM(t,e,n){const r=t.O_.shift(),i=Vg.from(r,e,n);await oA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Qo(t)}async function dM(t,e){e&&oi(t).V_&&await async function(r,i){if(function(o){return _S(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();oi(r).s_(),await oA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Qo(r)}}(t,e),aA(t)&&lA(t)}async function E0(t,e){const n=$(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=wi(n);n.L_.add(3),await Ho(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await eu(n)}async function am(t,e){const n=$(t);e?(n.L_.delete(2),await eu(n)):e||(n.L_.add(2),await Ho(n),n.q_.set("Unknown"))}function Yo(t){return t.K_||(t.K_=function(n,r,i){const s=$(n);return s.w_(),new JO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:nM.bind(null,t),Ro:rM.bind(null,t),mo:iM.bind(null,t),d_:sM.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Yg(t)?Qg(t):t.q_.set("Unknown")):(await t.K_.stop(),sA(t))})),t.K_}function oi(t){return t.U_||(t.U_=function(n,r,i){const s=$(n);return s.w_(),new XO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:lM.bind(null,t),mo:dM.bind(null,t),f_:uM.bind(null,t),g_:cM.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Qo(t)):(await t.U_.stop(),t.O_.length>0&&(B("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Jg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jo(t,e){if($e("AsyncQueue",`${e}: ${t}`),_i(t))return new U(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Ma(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new lo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof lo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new lo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.W_=new Ee(W.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Co{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Co(e,n,lo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class fM{constructor(){this.queries=T0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=$(n),s=i.queries;i.queries=T0(),s.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new U(M.ABORTED,"Firestore shutting down"))}}function T0(){return new mr(t=>rS(t),Hl)}async function Xg(t,e){const n=$(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new hM,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Jo(o,`Initialization of query '${Os(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&ey(n)}async function Zg(t,e){const n=$(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function pM(t,e){const n=$(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&ey(n)}function mM(t,e,n){const r=$(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function ey(t){t.Y_.forEach(e=>{e.next()})}var lm,x0;(x0=lm||(lm={})).ea="default",x0.Cache="cache";class ty{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Co(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Co.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==lm.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{constructor(e,n){this.aa=e,this.byteLength=n}ua(){return"metadata"in this.aa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.serializer=e}Es(e){return Dn(this.serializer,e)}ds(e){return e.metadata.exists?PS(this.serializer,e.document,!1):Se.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return qe(e)}}class yM{constructor(e,n,r){this.ca=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=uA(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++n;const r=se.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ha(e){const n=new Map,r=new S0(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Es(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||te()).add(s);n.set(o,a)}}return n}async complete(){const e=await WO(this.localStore,new S0(this.serializer),this.documents,this.ca.id),n=this.ha(this.documents);for(const r of this.queries)await KO(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function uA(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e){this.key=e}}class dA{constructor(e){this.key=e}}class hA{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=sS(e),this.Ra=new lo(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new I0,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),_=Ql(this.query,f)?f:null,S=!!m&&this.mutatedKeys.has(m.key),P=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let R=!1;m&&_?m.data.isEqual(_.data)?S!==P&&(r.track({type:3,doc:_}),R=!0):this.ga(m,_)||(r.track({type:2,doc:_}),R=!0,(l&&this.Aa(_,l)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!m&&_?(r.track({type:0,doc:_}),R=!0):m&&!_&&(r.track({type:1,doc:m}),R=!0,(l||c)&&(a=!0)),R&&(_?(o=o.add(_),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(_,S){const P=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return P(_)-P(S)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,o.length!==0||c?{snapshot:new Co(this.query,e.Ra,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new I0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new dA(r))}),this.da.forEach(r=>{e.has(r)||n.push(new cA(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Co.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class _M{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class vM{constructor(e){this.key=e,this.va=!1}}class wM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new mr(a=>rS(a),Hl),this.Ma=new Map,this.xa=new Set,this.Oa=new Ee(W.comparator),this.Na=new Map,this.La=new Bg,this.Ba={},this.ka=new Map,this.qa=os.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function EM(t,e,n=!0){const r=ih(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await fA(r,e,n,!0),i}async function IM(t,e){const n=ih(t);await fA(n,e,!0,!1)}async function fA(t,e,n,r){const i=await Po(t.localStore,It(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await ny(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&rh(t.remoteStore,i),a}async function ny(t,e,n,r,i){t.Ka=(f,m,_)=>async function(P,R,T,w){let I=R.view.ma(T);I.ns&&(I=await fd(P.localStore,R.query,!1).then(({documents:v})=>R.view.ma(v,I)));const A=w&&w.targetChanges.get(R.targetId),L=w&&w.targetMismatches.get(R.targetId)!=null,N=R.view.applyChanges(I,P.isPrimaryClient,A,L);return um(P,R.targetId,N.wa),N.snapshot}(t,f,m,_);const s=await fd(t.localStore,e,!0),o=new hA(e,s.Ts),a=o.ma(s.documents),l=Xl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);um(t,n,c.wa);const d=new _M(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function TM(t,e,n){const r=$(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Hl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ko(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ro(r.remoteStore,i.targetId),No(r,i.targetId)}).catch(yi)):(No(r,i.targetId),await ko(r.localStore,i.targetId,!0))}async function xM(t,e){const n=$(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ro(n.remoteStore,r.targetId))}async function SM(t,e,n){const r=oy(t);try{const i=await function(o,a){const l=$(o),c=de.now(),d=a.reduce((_,S)=>_.add(S.key),te());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=Mt(),P=te();return l.cs.getEntries(_,d).next(R=>{S=R,S.forEach((T,w)=>{w.isValidDocument()||(P=P.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,S)).next(R=>{f=R;const T=[];for(const w of a){const I=JV(w,f.get(w.key).overlayedDocument);I!=null&&T.push(new gr(w.key,I,Kx(I.value.mapValue),Ce.exists(!0)))}return l.mutationQueue.addMutationBatch(_,c,T,a)}).next(R=>{m=R;const T=R.applyToLocalDocumentSet(f,P);return l.documentOverlayCache.saveOverlays(_,R.batchId,T)})}).then(()=>({batchId:m.batchId,changes:aS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ee(Z)),c=c.insert(a,l),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await yr(r,i.changes),await Qo(r.remoteStore)}catch(i){const s=Jo(i,"Failed to persist write");n.reject(s)}}async function pA(t,e){const n=$(t);try{const r=await $O(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Q(o.va):i.removedDocuments.size>0&&(Q(o.va),o.va=!1))}),await yr(n,r,e)}catch(r){await yi(r)}}function A0(t,e,n){const r=$(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=$(o);l.onlineState=a;let c=!1;l.queries.forEach((d,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&ey(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function AM(t,e,n){const r=$(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ee(W.comparator);o=o.insert(s,Se.newNoDocument(s,Y.min()));const a=te().add(s),l=new Jl(Y.min(),new Map,new Ee(Z),o,a);await pA(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),sy(r)}else await ko(r.localStore,e,!1).then(()=>No(r,e,n)).catch(yi)}async function bM(t,e){const n=$(t),r=e.batch.batchId;try{const i=await zO(n.localStore,e);iy(n,r,null),ry(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yr(n,i)}catch(i){await yi(i)}}async function PM(t,e,n){const r=$(t);try{const i=await function(o,a){const l=$(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(Q(f!==null),d=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>l.localDocuments.getDocuments(c,d))})}(r.localStore,e);iy(r,e,n),ry(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yr(r,i)}catch(i){await yi(i)}}async function kM(t,e){const n=$(t);wi(n.remoteStore)||B("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=$(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.ka.get(r)||[];i.push(e),n.ka.set(r,i)}catch(r){const i=Jo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function ry(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function iy(t,e,n){const r=$(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function No(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||mA(t,r)})}function mA(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Ro(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),sy(t))}function um(t,e,n){for(const r of n)r instanceof cA?(t.La.addReference(r.key,e),RM(t,r)):r instanceof dA?(B("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||mA(t,r.key)):G()}function RM(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(B("SyncEngine","New document in limbo: "+n),t.xa.add(r),sy(t))}function sy(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new W(se.fromString(e)),r=t.qa.next();t.Na.set(r,new vM(n)),t.Oa=t.Oa.insert(n,r),rh(t.remoteStore,new Yn(It(Wo(n.path)),r,"TargetPurposeLimboResolution",Vt.oe))}}async function yr(t,e,n){const r=$(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Wg.Wi(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,c){const d=$(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>V.forEach(c,m=>V.forEach(m.$i,_=>d.persistence.referenceDelegate.addReference(f,m.targetId,_)).next(()=>V.forEach(m.Ui,_=>d.persistence.referenceDelegate.removeReference(f,m.targetId,_)))))}catch(f){if(!_i(f))throw f;B("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const _=d.os.get(m),S=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(S);d.os=d.os.insert(m,P)}}}(r.localStore,s))}async function CM(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await QS(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(l=>{l.reject(new U(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yr(n,r.hs)}}function NM(t,e){const n=$(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}async function DM(t,e){const n=$(t),r=await fd(n.localStore,e.query,!0),i=e.view.ba(r);return n.isPrimaryClient&&um(n,e.targetId,i.wa),i}async function VM(t,e){const n=$(t);return ZS(n.localStore,e).then(r=>yr(n,r))}async function OM(t,e,n,r){const i=$(t),s=await function(a,l){const c=$(a),d=$(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>d.Mn(f,l).next(m=>m?c.localDocuments.getDocuments(f,m):V.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Qo(i.remoteStore):n==="acknowledged"||n==="rejected"?(iy(i,e,r||null),ry(i,e),function(a,l){$($(a).mutationQueue).On(l)}(i.localStore,e)):G(),await yr(i,s)):B("SyncEngine","Cannot apply mutation batch with id: "+e)}async function MM(t,e){const n=$(t);if(ih(n),oy(n),e===!0&&n.Qa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await b0(n,r.toArray());n.Qa=!0,await am(n.remoteStore,!0);for(const s of i)rh(n.remoteStore,s)}else if(e===!1&&n.Qa!==!1){const r=[];let i=Promise.resolve();n.Ma.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(No(n,o),ko(n.localStore,o,!0))),Ro(n.remoteStore,o)}),await i,await b0(n,r),function(o){const a=$(o);a.Na.forEach((l,c)=>{Ro(a.remoteStore,c)}),a.La.pr(),a.Na=new Map,a.Oa=new Ee(W.comparator)}(n),n.Qa=!1,await am(n.remoteStore,!1)}}async function b0(t,e,n){const r=$(t),i=[],s=[];for(const o of e){let a;const l=r.Ma.get(o);if(l&&l.length!==0){a=await Po(r.localStore,It(l[0]));for(const c of l){const d=r.Fa.get(c),f=await DM(r,d);f.snapshot&&s.push(f.snapshot)}}else{const c=await XS(r.localStore,o);a=await Po(r.localStore,c),await ny(r,gA(c),o,!1,a.resumeToken)}i.push(a)}return r.Ca.d_(s),i}function gA(t){return eS(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function LM(t){return function(n){return $($(n).persistence).Qi()}($(t).localStore)}async function FM(t,e,n,r){const i=$(t);if(i.Qa)return void B("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await ZS(i.localStore,iS(s[0])),a=Jl.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Fe.EMPTY_BYTE_STRING);await yr(i,o,a);break}case"rejected":await ko(i.localStore,e,!0),No(i,e,r);break;default:G()}}async function jM(t,e,n){const r=ih(t);if(r.Qa){for(const i of e){if(r.Ma.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){B("SyncEngine","Adding an already active target "+i);continue}const s=await XS(r.localStore,i),o=await Po(r.localStore,s);await ny(r,gA(s),o.targetId,!1,o.resumeToken),rh(r.remoteStore,o)}for(const i of n)r.Ma.has(i)&&await ko(r.localStore,i,!1).then(()=>{Ro(r.remoteStore,i),No(r,i)}).catch(yi)}}function ih(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AM.bind(null,e),e.Ca.d_=pM.bind(null,e.eventManager),e.Ca.$a=mM.bind(null,e.eventManager),e}function oy(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PM.bind(null,e),e}function UM(t,e,n){const r=$(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(_,S){const P=$(_),R=qe(S.createTime);return P.persistence.runTransaction("hasNewerBundle","readonly",T=>P.Gr.getBundleMetadata(T,S.id)).then(T=>!!T&&T.createTime.compareTo(R)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(_){return{taskState:"Success",documentsLoaded:_.totalDocuments,bytesLoaded:_.totalBytes,totalDocuments:_.totalDocuments,totalBytes:_.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(uA(l));const c=new yM(l,s.localStore,o.serializer);let d=await o.Ua();for(;d;){const m=await c.la(d);m&&a._updateProgress(m),d=await o.Ua()}const f=await c.complete();return await yr(s,f.Ia,void 0),await function(_,S){const P=$(_);return P.persistence.runTransaction("Save bundle","readwrite",R=>P.Gr.saveBundleMetadata(R,S))}(s.localStore,l),a._completeWith(f.progress),Promise.resolve(f.Pa)}catch(l){return Ht("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class ai{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return HS(this.persistence,new GS,e.initialUser,this.serializer)}Ga(e){return new zg(nh.Zr,this.serializer)}Wa(e){return new tA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ai.provider={build:()=>new ai};class BM extends ai{constructor(e){super(),this.cacheSizeBytes=e}ja(e,n){Q(this.persistence.referenceDelegate instanceof hd);const r=this.persistence.referenceDelegate.garbageCollector;return new zS(r,e.asyncQueue,n)}Ga(e){const n=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new zg(r=>hd.Zr(r,n),this.serializer)}}class ay extends ai{constructor(e,n,r){super(),this.Ja=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await oy(this.Ja.syncEngine),await Qo(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return HS(this.persistence,new GS,e.initialUser,this.serializer)}ja(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new zS(r,e.asyncQueue,n)}Ha(e,n){const r=new lV(n,this.persistence);return new aV(e.asyncQueue,r)}Ga(e){const n=qg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new $g(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,nA(),Tc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new tA}}class yA extends ay{constructor(e,n){super(e,n,!1),this.Ja=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ja.syncEngine;this.sharedClientState instanceof Nf&&(this.sharedClientState.syncEngine={no:OM.bind(null,n),ro:FM.bind(null,n),io:jM.bind(null,n),Qi:LM.bind(null,n),eo:VM.bind(null,n)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await MM(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const n=nA();if(!Nf.D(n))throw new U(M.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=qg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Nf(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class li{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>A0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=CM.bind(null,this.syncEngine),await am(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new fM}()}createDatastore(e){const n=Zl(e.databaseInfo.databaseId),r=function(s){return new YO(s)}(e.databaseInfo);return function(s,o,a,l){return new ZO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new tM(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>A0(this.syncEngine,n,0),function(){return w0.D()?new w0:new GO}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,d){const f=new wM(i,s,o,a,l,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=$(i);B("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ho(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}li.provider={build:()=>new li};function P0(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):$e("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e,n){this.Xa=e,this.serializer=n,this.metadata=new rt,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.aa)}`))},r=>this.metadata.reject(r))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const n=this.eu.decode(e),r=Number(n);isNaN(r)&&this.ru(`length string (${n}) is not valid number`);const i=await this.iu(r);return new gM(JSON.parse(i),e.length+r)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const n=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $M{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new U(M.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=$(i),a={documents:s.map(f=>Pl(o.serializer,f))},l=await o.Lo("BatchGetDocuments",o.serializer.databaseId,se.emptyPath(),a,s.length),c=new Map;l.forEach(f=>{const m=oO(o.serializer,f);c.set(m.key.toString(),m)});const d=[];return s.forEach(f=>{const m=c.get(f.toString());Q(!!m),d.push(m)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Go(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=W.fromPath(r);this.mutations.push(new Ng(i,this.precondition(i)))}),await async function(r,i){const s=$(r),o={writes:i.map(a=>kl(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,se.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw G();n=Y.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new U(M.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(Y.min())?Ce.exists(!1):Ce.updateTime(n):Ce.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Y.min()))throw new U(M.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ce.updateTime(n)}return Ce.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new Gg(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new $M(this.datastore),n=this.cu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const n=this.updateFunction(e);return!Kl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!_S(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=xg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{B("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vf(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await QS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function k0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ly(t);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>E0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>E0(e.remoteStore,i)),t._onlineComponents=e}async function ly(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ht("Error using user provided cache. Falling back to memory cache: "+n),await Vf(t,new ai)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Vf(t,new ai);return t._offlineComponents}async function oh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await k0(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await k0(t,new li))),t._onlineComponents}function _A(t){return ly(t).then(e=>e.persistence)}function Xo(t){return ly(t).then(e=>e.localStore)}function vA(t){return oh(t).then(e=>e.remoteStore)}function uy(t){return oh(t).then(e=>e.syncEngine)}function wA(t){return oh(t).then(e=>e.datastore)}async function Do(t){const e=await oh(t),n=e.eventManager;return n.onListen=EM.bind(null,e.syncEngine),n.onUnlisten=TM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=IM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=xM.bind(null,e.syncEngine),n}function KM(t){return t.asyncQueue.enqueue(async()=>{const e=await _A(t),n=await vA(t);return e.setNetworkEnabled(!0),function(i){const s=$(i);return s.L_.delete(0),eu(s)}(n)})}function GM(t){return t.asyncQueue.enqueue(async()=>{const e=await _A(t),n=await vA(t);return e.setNetworkEnabled(!1),async function(i){const s=$(i);s.L_.add(0),await Ho(s),s.q_.set("Offline")}(n)})}function HM(t,e){const n=new rt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,d){const f=$(c);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,d))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new U(M.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Jo(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await Xo(t),e,n)),n.promise}function EA(t,e,n={}){const r=new rt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new sh({next:m=>{d.Za(),o.enqueueAndForget(()=>Zg(s,f));const _=m.docs.has(a);!_&&m.fromCache?c.reject(new U(M.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?c.reject(new U(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new ty(Wo(a.path),d,{includeMetadataChanges:!0,_a:!0});return Xg(s,f)}(await Do(t),t.asyncQueue,e,n,r)),r.promise}function QM(t,e){const n=new rt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await fd(i,s,!0),l=new hA(s,a.Ts),c=l.ma(a.documents),d=l.applyChanges(c,!1);o.resolve(d.snapshot)}catch(a){const l=Jo(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await Xo(t),e,n)),n.promise}function IA(t,e,n={}){const r=new rt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new sh({next:m=>{d.Za(),o.enqueueAndForget(()=>Zg(s,f)),m.fromCache&&l.source==="server"?c.reject(new U(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new ty(a,d,{includeMetadataChanges:!0,_a:!0});return Xg(s,f)}(await Do(t),t.asyncQueue,e,n,r)),r.promise}function YM(t,e,n){const r=new rt;return t.asyncQueue.enqueueAndForget(async()=>{try{const i=await wA(t);r.resolve(async function(o,a,l){var c;const d=$(o),{request:f,ut:m,parent:_}=RS(d.serializer,tS(a),l);d.connection.Fo||delete f.parent;const S=(await d.Lo("RunAggregationQuery",d.serializer.databaseId,_,f,1)).filter(R=>!!R.result);Q(S.length===1);const P=(c=S[0].result)===null||c===void 0?void 0:c.aggregateFields;return Object.keys(P).reduce((R,T)=>(R[m[T]]=P[T],R),{})}(i,e,n))}catch(i){r.reject(i)}}),r.promise}function JM(t,e){const n=new sh(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){$(i).Y_.add(s),s.next()}(await Do(t),n)),()=>{n.Za(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){$(i).Y_.delete(s)}(await Do(t),n))}}function XM(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?wS().encode(o):o,function(d,f){return new zM(d,f)}(function(d,f){if(d instanceof Uint8Array)return P0(d,f);if(d instanceof ArrayBuffer)return P0(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,Zl(e));t.asyncQueue.enqueueAndForget(async()=>{UM(await uy(t),i,r)})}function ZM(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=$(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Gr.getNamedQuery(o,i))}(await Xo(t),e))}function eL(t,e){return t.asyncQueue.enqueue(async()=>async function(r,i){const s=$(r),o=s.indexManager,a=[];return s.persistence.runTransaction("Configure indexes","readwrite",l=>o.getFieldIndexes(l).next(c=>function(f,m,_,S,P){f=[...f],m=[...m],f.sort(_),m.sort(_);const R=f.length,T=m.length;let w=0,I=0;for(;w<T&&I<R;){const A=_(f[I],m[w]);A<0?P(f[I++]):A>0?S(m[w++]):(w++,I++)}for(;w<T;)S(m[w++]);for(;I<R;)P(f[I++])}(c,i,rV,d=>{a.push(o.addFieldIndex(l,d))},d=>{a.push(o.deleteFieldIndex(l,d))})).next(()=>V.waitFor(a)))}(await Xo(t),e))}function tL(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){$(r).ss.zi=i}(await Xo(t),e))}function nL(t){return t.asyncQueue.enqueue(async()=>function(n){const r=$(n),i=r.indexManager;return r.persistence.runTransaction("Delete All Indexes","readwrite",s=>i.deleteAllFieldIndexes(s))}(await Xo(t)))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(t,e,n){if(!n)throw new U(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xA(t,e,n,r){if(e===!0&&r===!0)throw new U(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function C0(t){if(!W.isDocumentKey(t))throw new U(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function N0(t){if(W.isDocumentKey(t))throw new U(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ah(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function ne(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ah(t);throw new U(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function SA(t,e){if(e<=0)throw new U(M.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=TA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new U(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new U(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new U(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class tu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new D0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new D0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Px;switch(r.type){case"firstParty":return new X2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=R0.get(n);r&&(B("ComponentProvider","Removing Datastore"),R0.delete(n),r.terminate())}(this),Promise.resolve()}}function AA(t,e,n,r={}){var i;const s=(t=ne(t,tu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ht("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=tt.MOCK_USER;else{a=cC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new U(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new tt(c)}t._authCredentials=new Q2(new bx(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new st(this.firestore,e,this._query)}}class Be{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}}class gn extends st{constructor(e,n,r){super(e,n,Wo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new W(e))}withConverter(e){return new gn(this.firestore,e,this._path)}}function ys(t,e,...n){if(t=he(t),cy("collection","path",e),t instanceof tu){const r=se.fromString(e,...n);return N0(r),new gn(t,null,r)}{if(!(t instanceof Be||t instanceof gn))throw new U(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return N0(r),new gn(t.firestore,null,r)}}function rL(t,e){if(t=ne(t,tu),cy("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new U(M.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new st(t,null,function(r){return new pr(se.emptyPath(),r)}(e))}function St(t,e,...n){if(t=he(t),arguments.length===1&&(e=xg.newId()),cy("doc","path",e),t instanceof tu){const r=se.fromString(e,...n);return C0(r),new Be(t,null,new W(r))}{if(!(t instanceof Be||t instanceof gn))throw new U(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return C0(r),new Be(t.firestore,t instanceof gn?t.converter:null,new W(r))}}function iL(t,e){return t=he(t),e=he(e),(t instanceof Be||t instanceof gn)&&(e instanceof Be||e instanceof gn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function dy(t,e){return t=he(t),e=he(e),t instanceof st&&e instanceof st&&t.firestore===e.firestore&&Hl(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Gg(this,"async_queue_retry"),this.Vu=()=>{const r=Tc();r&&B("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Tc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Tc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new rt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!_i(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw $e("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Jg.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function cm(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class bA{constructor(){this._progressObserver={},this._taskCompletionResolver=new rt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL=-1;class _e extends tu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new V0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new V0(e),this._firestoreClient=void 0,await e}}}function oL(t,e,n){n||(n="(default)");const r=mi(t,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(ei(s,e))return i;throw new U(M.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new U(M.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:n})}function PA(t,e){const n=typeof t=="object"?t:fg(),r=typeof t=="string"?t:e||"(default)",i=mi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=lC("firestore");s&&AA(i,...s)}return i}function Ne(t){if(t._terminated)throw new U(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||kA(t),t._firestoreClient}function kA(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,d){return new RV(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,TA(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new WM(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}function aL(t,e){Ht("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return RA(t,li.provider,{build:r=>new ay(r,n.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function lL(t){Ht("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=t._freezeSettings();RA(t,li.provider,{build:n=>new yA(n,e.cacheSizeBytes)})}function RA(t,e,n){if((t=ne(t,_e))._firestoreClient||t._terminated)throw new U(M.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new U(M.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},kA(t)}function uL(t){if(t._initialized&&!t._terminated)throw new U(M.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new rt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Nn.D())return Promise.resolve();const i=r+"main";await Nn.delete(i)}(qg(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function cL(t){return function(n){const r=new rt;return n.asyncQueue.enqueueAndForget(async()=>kM(await uy(n),r)),r.promise}(Ne(t=ne(t,_e)))}function dL(t){return KM(Ne(t=ne(t,_e)))}function hL(t){return GM(Ne(t=ne(t,_e)))}function fL(t){return wN(t.app,"firestore",t._databaseId.database),t._delete()}function pL(t,e){const n=Ne(t=ne(t,_e)),r=new bA;return XM(n,t._databaseId,e,r),r}function mL(t,e){return ZM(Ne(t=ne(t,_e)),e).then(n=>n?new st(t,null,n.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class CA{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ui(Fe.fromBase64String(e))}catch(n){throw new U(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ui(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function gL(){return new Ei("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yL=/^__.*__$/;class _L{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ko(e,this.data,n,this.fieldTransforms)}}class NA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function DA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class uh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new uh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return yd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(DA(this.Cu)&&yL.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class vL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Zl(e)}Qu(e,n,r,i=!1){return new uh({Cu:e,methodName:n,qu:r,path:Ae.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _s(t){const e=t._freezeSettings(),n=Zl(t._databaseId);return new vL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ch(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);_y("Data must be an object, but it was:",o,r);const a=MA(r,o);let l,c;if(s.merge)l=new Ot(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=Rl(e,f,n);if(!o.contains(m))throw new U(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);FA(d,m)||d.push(m)}l=new Ot(d),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new _L(new ct(a),l,c)}class ru extends Ii{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ru}}function VA(t,e,n){return new uh({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class hy extends Ii{_toFieldTransform(e){return new Yl(e.path,new So)}isEqual(e){return e instanceof hy}}class fy extends Ii{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=VA(this,e,!0),r=this.Ku.map(s=>vs(s,n)),i=new ns(r);return new Yl(e.path,i)}isEqual(e){return e instanceof fy&&ei(this.Ku,e.Ku)}}class py extends Ii{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=VA(this,e,!0),r=this.Ku.map(s=>vs(s,n)),i=new rs(r);return new Yl(e.path,i)}isEqual(e){return e instanceof py&&ei(this.Ku,e.Ku)}}class my extends Ii{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new Ao(e.serializer,cS(e.serializer,this.$u));return new Yl(e.path,n)}isEqual(e){return e instanceof my&&this.$u===e.$u}}function gy(t,e,n,r){const i=t.Qu(1,e,n);_y("Data must be an object, but it was:",i,r);const s=[],o=ct.empty();vi(r,(l,c)=>{const d=dh(e,l,n);c=he(c);const f=i.Nu(d);if(c instanceof ru)s.push(d);else{const m=vs(c,f);m!=null&&(s.push(d),o.set(d,m))}});const a=new Ot(s);return new NA(o,a,i.fieldTransforms)}function yy(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[Rl(e,r,n)],l=[i];if(s.length%2!=0)throw new U(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(Rl(e,s[m])),l.push(s[m+1]);const c=[],d=ct.empty();for(let m=a.length-1;m>=0;--m)if(!FA(c,a[m])){const _=a[m];let S=l[m];S=he(S);const P=o.Nu(_);if(S instanceof ru)c.push(_);else{const R=vs(S,P);R!=null&&(c.push(_),d.set(_,R))}}const f=new Ot(c);return new NA(d,f,o.fieldTransforms)}function OA(t,e,n,r=!1){return vs(n,t.Qu(r?4:3,e))}function vs(t,e){if(LA(t=he(t)))return _y("Unsupported field value:",e,t),MA(t,e);if(t instanceof Ii)return function(r,i){if(!DA(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=vs(a,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=he(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=de.fromDate(r);return{timestampValue:bo(i.serializer,s)}}if(r instanceof de){const s=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bo(i.serializer,s)}}if(r instanceof lh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ui)return{bytesValue:TS(i.serializer,r._byteString)};if(r instanceof Be){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Lg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof nu)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return Cg(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ah(r)}`)}(t,e)}function MA(t,e){const n={};return zx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vi(t,(r,i)=>{const s=vs(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function LA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof de||t instanceof lh||t instanceof ui||t instanceof Be||t instanceof Ii||t instanceof nu)}function _y(t,e,n){if(!LA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ah(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Rl(t,e,n){if((e=he(e))instanceof Ei)return e._internalPath;if(typeof e=="string")return dh(t,e);throw yd("Field path arguments must be of type string or ",t,!1,void 0,n)}const wL=new RegExp("[~\\*/\\[\\]]");function dh(t,e,n){if(e.search(wL)>=0)throw yd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ei(...e.split("."))._internalPath}catch{throw yd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new U(M.INVALID_ARGUMENT,a+t+l)}function FA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class EL extends Cl{data(){return super.data()}}function hh(t,e){return typeof e=="string"?dh(t,e):e instanceof Ei?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vy{}class Zo extends vy{}function fh(t,e,...n){let r=[];e instanceof vy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof ws).length,a=s.filter(l=>l instanceof ea).length;if(o>1||o>0&&a>0)throw new U(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ea extends Zo{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ea(e,n,r)}_apply(e){const n=this._parse(e);return zA(e._query,n),new st(e.firestore,e.converter,Xp(e._query,n))}_parse(e){const n=_s(e.firestore);return function(s,o,a,l,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new U(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){M0(f,d);const _=[];for(const S of f)_.push(O0(l,s,S));m={arrayValue:{values:_}}}else m=O0(l,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||M0(f,d),m=OA(a,o,f,d==="in"||d==="not-in");return oe.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function IL(t,e,n){const r=e,i=hh("where",t);return ea._create(i,r,n)}class ws extends vy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ws(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:me.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)zA(o,l),o=Xp(o,l)}(e._query,n),new st(e.firestore,e.converter,Xp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function TL(...t){return t.forEach(e=>$A("or",e)),ws._create("or",t)}function xL(...t){return t.forEach(e=>$A("and",e)),ws._create("and",t)}class ph extends Zo{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ph(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new U(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new U(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new bl(s,o)}(e._query,this._field,this._direction);return new st(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new pr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function mh(t,e="asc"){const n=e,r=hh("orderBy",t);return ph._create(r,n)}class iu extends Zo{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new iu(e,n,r)}_apply(e){return new st(e.firestore,e.converter,ad(e._query,this._limit,this._limitType))}}function UA(t){return SA("limit",t),iu._create("limit",t,"F")}function SL(t){return SA("limitToLast",t),iu._create("limitToLast",t,"L")}class su extends Zo{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new su(e,n,r)}_apply(e){const n=BA(e,this.type,this._docOrFields,this._inclusive);return new st(e.firestore,e.converter,function(i,s){return new pr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function AL(...t){return su._create("startAt",t,!0)}function bL(...t){return su._create("startAfter",t,!1)}class ou extends Zo{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new ou(e,n,r)}_apply(e){const n=BA(e,this.type,this._docOrFields,this._inclusive);return new st(e.firestore,e.converter,function(i,s){return new pr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function PL(...t){return ou._create("endBefore",t,!1)}function kL(...t){return ou._create("endAt",t,!0)}function BA(t,e,n,r){if(n[0]=he(n[0]),n[0]instanceof Cl)return function(s,o,a,l,c){if(!l)throw new U(M.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of ao(s))if(f.field.isKeyField())d.push(es(o,l.key));else{const m=l.data.field(f.field);if(Hd(m))throw new U(M.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const _=f.field.canonicalString();throw new U(M.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${_}' (used as the orderBy) does not exist.`)}d.push(m)}return new si(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=_s(t.firestore);return function(o,a,l,c,d,f){const m=o.explicitOrderBy;if(d.length>m.length)throw new U(M.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const _=[];for(let S=0;S<d.length;S++){const P=d[S];if(m[S].field.isKeyField()){if(typeof P!="string")throw new U(M.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof P}`);if(!kg(o)&&P.indexOf("/")!==-1)throw new U(M.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${P}' contains a slash.`);const R=o.path.child(se.fromString(P));if(!W.isDocumentKey(R))throw new U(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${R}' is not because it contains an odd number of segments.`);const T=new W(R);_.push(es(a,T))}else{const R=OA(l,c,P);_.push(R)}}return new si(_,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function O0(t,e,n){if(typeof(n=he(n))=="string"){if(n==="")throw new U(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kg(e)&&n.indexOf("/")!==-1)throw new U(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(se.fromString(n));if(!W.isDocumentKey(r))throw new U(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return es(t,new W(r))}if(n instanceof Be)return es(t,n._key);throw new U(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ah(n)}.`)}function M0(t,e){if(!Array.isArray(t)||t.length===0)throw new U(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function zA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function $A(t,e){if(!(e instanceof ea||e instanceof ws))throw new U(M.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class wy{convertValue(e,n="none"){switch(ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ar(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ke(o.doubleValue));return new nu(s)}convertGeoPoint(e){return new lh(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Qd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xl(e));default:return null}}convertTimestamp(e){const n=or(e);return new de(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);Q(VS(r));const i=new ni(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||$e(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class RL extends wy{constructor(e){super(),this.firestore=e}convertBytes(e){return new ui(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CL(t){return new Vo("sum",Rl("sum",t))}function NL(t){return new Vo("avg",Rl("average",t))}function qA(){return new Vo("count")}function DL(t,e){var n,r;return t instanceof Vo&&e instanceof Vo&&t.aggregateType===e.aggregateType&&((n=t._internalFieldPath)===null||n===void 0?void 0:n.canonicalString())===((r=e._internalFieldPath)===null||r===void 0?void 0:r.canonicalString())}function VL(t,e){return dy(t.query,e.query)&&ei(t.data(),e.data())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class as extends Cl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new el(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class el extends as{data(e={}){return super.data(e)}}class ls{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Br(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new el(this._firestore,this._userDataWriter,r.key,r,new Br(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new el(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Br(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new el(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Br(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:OL(a.type),doc:l,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function OL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}function ML(t,e){return t instanceof as&&e instanceof as?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof ls&&e instanceof ls&&t._firestore===e._firestore&&dy(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t){t=ne(t,Be);const e=ne(t.firestore,_e);return EA(Ne(e),t._key).then(n=>Iy(e,t,n))}class Ti extends wy{constructor(e){super(),this.firestore=e}convertBytes(e){return new ui(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}function LL(t){t=ne(t,Be);const e=ne(t.firestore,_e),n=Ne(e),r=new Ti(e);return HM(n,t._key).then(i=>new as(e,r,t._key,i,new Br(i!==null&&i.hasLocalMutations,!0),t.converter))}function FL(t){t=ne(t,Be);const e=ne(t.firestore,_e);return EA(Ne(e),t._key,{source:"server"}).then(n=>Iy(e,t,n))}function WA(t){t=ne(t,st);const e=ne(t.firestore,_e),n=Ne(e),r=new Ti(e);return jA(t._query),IA(n,t._query).then(i=>new ls(e,r,t,i))}function jL(t){t=ne(t,st);const e=ne(t.firestore,_e),n=Ne(e),r=new Ti(e);return QM(n,t._query).then(i=>new ls(e,r,t,i))}function UL(t){t=ne(t,st);const e=ne(t.firestore,_e),n=Ne(e),r=new Ti(e);return IA(n,t._query,{source:"server"}).then(i=>new ls(e,r,t,i))}function KA(t,e,n){t=ne(t,Be);const r=ne(t.firestore,_e),i=gh(t.converter,e,n);return ta(r,[ch(_s(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ce.none())])}function us(t,e,n,...r){t=ne(t,Be);const i=ne(t.firestore,_e),s=_s(i);let o;return o=typeof(e=he(e))=="string"||e instanceof Ei?yy(s,"updateDoc",t._key,e,n,r):gy(s,"updateDoc",t._key,e),ta(i,[o.toMutation(t._key,Ce.exists(!0))])}function yh(t){return ta(ne(t.firestore,_e),[new Go(t._key,Ce.none())])}function Es(t,e){const n=ne(t.firestore,_e),r=St(t),i=gh(t.converter,e);return ta(n,[ch(_s(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ce.exists(!1))]).then(()=>r)}function Oo(t,...e){var n,r,i;t=he(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||cm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(cm(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,d;if(t instanceof Be)c=ne(t.firestore,_e),d=Wo(t._key.path),l={next:f=>{e[o]&&e[o](Iy(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=ne(t,st);c=ne(f.firestore,_e),d=f._query;const m=new Ti(c);l={next:_=>{e[o]&&e[o](new ls(c,m,f,_))},error:e[o+1],complete:e[o+2]},jA(t._query)}return function(m,_,S,P){const R=new sh(P),T=new ty(_,R,S);return m.asyncQueue.enqueueAndForget(async()=>Xg(await Do(m),T)),()=>{R.Za(),m.asyncQueue.enqueueAndForget(async()=>Zg(await Do(m),T))}}(Ne(c),d,a,l)}function BL(t,e){return JM(Ne(t=ne(t,_e)),cm(e)?e:{next:e})}function ta(t,e){return function(r,i){const s=new rt;return r.asyncQueue.enqueueAndForget(async()=>SM(await uy(r),i,s)),s.promise}(Ne(t),e)}function Iy(t,e,n){const r=n.docs.get(e._key),i=new Ti(t);return new as(t,i,e._key,r,new Br(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zL(t){return GA(t,{count:qA()})}function GA(t,e){const n=ne(t.firestore,_e),r=Ne(n),i=Bx(e,(s,o)=>new yS(o,s.aggregateType,s._internalFieldPath));return YM(r,t._query,i).then(s=>function(a,l,c){const d=new Ti(a);return new CA(l,d,c)}(n,t,s))}class $L{constructor(e){this.kind="memory",this._onlineComponentProvider=li.provider,e!=null&&e.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=ai.provider}toJSON(){return{kind:this.kind}}}class qL{constructor(e){let n;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),n=e.tabManager):(n=HA(void 0),n._initialize(e)),this._onlineComponentProvider=n._onlineComponentProvider,this._offlineComponentProvider=n._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class WL{constructor(){this.kind="memoryEager",this._offlineComponentProvider=ai.provider}toJSON(){return{kind:this.kind}}}class KL{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new BM(e)}}toJSON(){return{kind:this.kind}}}function GL(){return new WL}function HL(t){return new KL(t==null?void 0:t.cacheSizeBytes)}function QL(t){return new $L(t)}function YL(t){return new qL(t)}class JL{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=li.provider,this._offlineComponentProvider={build:n=>new ay(n,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class XL{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=li.provider,this._offlineComponentProvider={build:n=>new yA(n,e==null?void 0:e.cacheSizeBytes)}}}function HA(t){return new JL(t==null?void 0:t.forceOwnership)}function ZL(){return new XL}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eF={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=_s(e)}set(e,n,r){this._verifyNotCommitted();const i=Mr(e,this._firestore),s=gh(i.converter,n,r),o=ch(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ce.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Mr(e,this._firestore);let o;return o=typeof(n=he(n))=="string"||n instanceof Ei?yy(this._dataReader,"WriteBatch.update",s._key,n,r,i):gy(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ce.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Mr(e,this._firestore);return this._mutations=this._mutations.concat(new Go(n._key,Ce.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new U(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Mr(t,e){if((t=he(t)).firestore!==e)throw new U(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=_s(n)}get(n){const r=Mr(n,this._firestore),i=new RL(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return G();const o=s[0];if(o.isFoundDocument())return new Cl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Cl(this._firestore,i,r._key,null,r.converter);throw G()})}set(n,r,i){const s=Mr(n,this._firestore),o=gh(s.converter,r,i),a=ch(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Mr(n,this._firestore);let a;return a=typeof(r=he(r))=="string"||r instanceof Ei?yy(this._dataReader,"Transaction.update",o._key,r,i,s):gy(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Mr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Mr(e,this._firestore),r=new Ti(this._firestore);return super.get(e).then(i=>new as(this._firestore,r,n._key,i._document,new Br(!1,!1),n.converter))}}function tF(t,e,n){t=ne(t,_e);const r=Object.assign(Object.assign({},eF),n);return function(s){if(s.maxAttempts<1)throw new U(M.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new rt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await wA(s);new qM(s.asyncQueue,c,a,o,l).au()}),l.promise}(Ne(t),i=>e(new YA(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nF(){return new ru("deleteField")}function lr(){return new hy("serverTimestamp")}function rF(...t){return new fy("arrayUnion",t)}function iF(...t){return new py("arrayRemove",t)}function sF(t){return new my("increment",t)}function oF(t){return new nu(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t){return Ne(t=ne(t,_e)),new QA(t,e=>ta(t,e))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aF(t,e){const n=Ne(t=ne(t,_e));if(!n._uninitializedComponentsProvider||n._uninitializedComponentsProvider._offline.kind==="memory")return Ht("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=function(s){const o=typeof s=="string"?function(c){try{return JSON.parse(c)}catch(d){throw new U(M.INVALID_ARGUMENT,"Failed to parse JSON: "+(d==null?void 0:d.message))}}(s):s,a=[];if(Array.isArray(o.indexes))for(const l of o.indexes){const c=L0(l,"collectionGroup"),d=[];if(Array.isArray(l.fields))for(const f of l.fields){const m=dh("setIndexConfiguration",L0(f,"fieldPath"));f.arrayConfig==="CONTAINS"?d.push(new Ki(m,2)):f.order==="ASCENDING"?d.push(new Ki(m,0)):f.order==="DESCENDING"&&d.push(new Ki(m,1))}a.push(new Eo(Eo.UNKNOWN_ID,c,d,Io.empty()))}return a}(e);return eL(n,r)}function L0(t,e){if(typeof t[e]!="string")throw new U(M.INVALID_ARGUMENT,"Missing string value for: "+e);return t[e]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function lF(t){var e;t=ne(t,_e);const n=F0.get(t);if(n)return n;if(((e=Ne(t)._uninitializedComponentsProvider)===null||e===void 0?void 0:e._offline.kind)!=="persistent")return null;const r=new XA(t);return F0.set(t,r),r}function uF(t){ZA(t,!0)}function cF(t){ZA(t,!1)}function dF(t){nL(Ne(t._firestore)).then(e=>B("deleting all persistent cache indexes succeeded")).catch(e=>Ht("deleting all persistent cache indexes failed",e))}function ZA(t,e){tL(Ne(t._firestore),e).then(n=>B(`setting persistent cache index auto creation isEnabled=${e} succeeded`)).catch(n=>Ht(`setting persistent cache index auto creation isEnabled=${e} failed`,n))}const F0=new WeakMap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hF(t){var e;const n=(e=Ne(ne(t.firestore,_e))._onlineComponents)===null||e===void 0?void 0:e.datastore.serializer;return n===void 0?null:Zd(n,It(t._query))._t}function fF(t,e){var n;const r=Bx(e,(s,o)=>new yS(o,s.aggregateType,s._internalFieldPath)),i=(n=Ne(ne(t.firestore,_e))._onlineComponents)===null||n===void 0?void 0:n.datastore.serializer;return i===void 0?null:RS(i,tS(t._query),r,!0).request}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pF{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return Ty.instance.onExistenceFilterMismatch(e)}}class Ty{constructor(){this.Uu=new Map}static get instance(){return Xu||(Xu=new Ty,function(n){if(ld)throw new Error("a TestingHooksSpi instance is already set");ld=n}(Xu)),Xu}et(e){this.Uu.forEach(n=>n(e))}onExistenceFilterMismatch(e){const n=Symbol(),r=this.Uu;return r.set(n,e),()=>r.delete(n)}}let Xu=null;(function(e,n=!0){(function(i){qo=i})(zo),Vn(new _n("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new _e(new Y2(r.getProvider("auth-internal")),new Z2(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new U(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ni(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),sn(bw,"4.7.3",e),sn(bw,"4.7.3","esm2017")})();const mF=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:wy,AggregateField:Vo,AggregateQuerySnapshot:CA,Bytes:ui,CACHE_SIZE_UNLIMITED:sL,CollectionReference:gn,DocumentReference:Be,DocumentSnapshot:as,FieldPath:Ei,FieldValue:Ii,Firestore:_e,FirestoreError:U,GeoPoint:lh,LoadBundleTask:bA,PersistentCacheIndexManager:XA,Query:st,QueryCompositeFilterConstraint:ws,QueryConstraint:Zo,QueryDocumentSnapshot:el,QueryEndAtConstraint:ou,QueryFieldFilterConstraint:ea,QueryLimitConstraint:iu,QueryOrderByConstraint:ph,QuerySnapshot:ls,QueryStartAtConstraint:su,SnapshotMetadata:Br,Timestamp:de,Transaction:YA,VectorValue:nu,WriteBatch:QA,_AutoId:xg,_ByteString:Fe,_DatabaseId:ni,_DocumentKey:W,_EmptyAppCheckTokenProvider:eV,_EmptyAuthCredentialsProvider:Px,_FieldPath:Ae,_TestingHooks:pF,_cast:ne,_debugAssert:H2,_internalAggregationQueryToProtoRunAggregationQueryRequest:fF,_internalQueryToProtoQueryTarget:hF,_isBase64Available:PV,_logWarn:Ht,_validateIsNotUsedTogether:xA,addDoc:Es,aggregateFieldEqual:DL,aggregateQuerySnapshotEqual:VL,and:xL,arrayRemove:iF,arrayUnion:rF,average:NL,clearIndexedDbPersistence:uL,collection:ys,collectionGroup:rL,connectFirestoreEmulator:AA,count:qA,deleteAllPersistentCacheIndexes:dF,deleteDoc:yh,deleteField:nF,disableNetwork:hL,disablePersistentCacheIndexAutoCreation:cF,doc:St,documentId:gL,enableIndexedDbPersistence:aL,enableMultiTabIndexedDbPersistence:lL,enableNetwork:dL,enablePersistentCacheIndexAutoCreation:uF,endAt:kL,endBefore:PL,ensureFirestoreConfigured:Ne,executeWrite:ta,getAggregateFromServer:GA,getCountFromServer:zL,getDoc:Ey,getDocFromCache:LL,getDocFromServer:FL,getDocs:WA,getDocsFromCache:jL,getDocsFromServer:UL,getFirestore:PA,getPersistentCacheIndexManager:lF,increment:sF,initializeFirestore:oL,limit:UA,limitToLast:SL,loadBundle:pL,memoryEagerGarbageCollector:GL,memoryLocalCache:QL,memoryLruGarbageCollector:HL,namedQuery:mL,onSnapshot:Oo,onSnapshotsInSync:BL,or:TL,orderBy:mh,persistentLocalCache:YL,persistentMultipleTabManager:ZL,persistentSingleTabManager:HA,query:fh,queryEqual:dy,refEqual:iL,runTransaction:tF,serverTimestamp:lr,setDoc:KA,setIndexConfiguration:aF,setLogLevel:G2,snapshotEqual:ML,startAfter:bL,startAt:AL,sum:CL,terminate:fL,updateDoc:us,vector:oF,waitForPendingWrites:cL,where:IL,writeBatch:JA},Symbol.toStringTag,{value:"Module"}));var gF="firebase",yF="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(gF,yF,"app");const eb="@firebase/installations",xy="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=1e4,nb=`w:${xy}`,rb="FIS_v2",_F="https://firebaseinstallations.googleapis.com/v1",vF=60*60*1e3,wF="installations",EF="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IF={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},cs=new ms(wF,EF,IF);function ib(t){return t instanceof Mn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb({projectId:t}){return`${_F}/projects/${t}/installations`}function ob(t){return{token:t.token,requestStatus:2,expiresIn:xF(t.expiresIn),creationTime:Date.now()}}async function ab(t,e){const r=(await e.json()).error;return cs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function lb({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function TF(t,{refreshToken:e}){const n=lb(t);return n.append("Authorization",SF(e)),n}async function ub(t){const e=await t();return e.status>=500&&e.status<600?t():e}function xF(t){return Number(t.replace("s","000"))}function SF(t){return`${rb} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AF({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=sb(t),i=lb(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:rb,appId:t.appId,sdkVersion:nb},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await ub(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:ob(c.authToken)}}else throw await ab("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bF(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PF=/^[cdef][\w-]{21}$/,dm="";function kF(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=RF(t);return PF.test(n)?n:dm}catch{return dm}}function RF(t){return bF(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=new Map;function hb(t,e){const n=_h(t);fb(n,e),CF(n,e)}function fb(t,e){const n=db.get(t);if(n)for(const r of n)r(e)}function CF(t,e){const n=NF();n&&n.postMessage({key:t,fid:e}),DF()}let zi=null;function NF(){return!zi&&"BroadcastChannel"in self&&(zi=new BroadcastChannel("[Firebase] FID Change"),zi.onmessage=t=>{fb(t.data.key,t.data.fid)}),zi}function DF(){db.size===0&&zi&&(zi.close(),zi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VF="firebase-installations-database",OF=1,ds="firebase-installations-store";let Of=null;function Sy(){return Of||(Of=$d(VF,OF,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ds)}}})),Of}async function _d(t,e){const n=_h(t),i=(await Sy()).transaction(ds,"readwrite"),s=i.objectStore(ds),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&hb(t,e.fid),e}async function pb(t){const e=_h(t),r=(await Sy()).transaction(ds,"readwrite");await r.objectStore(ds).delete(e),await r.done}async function vh(t,e){const n=_h(t),i=(await Sy()).transaction(ds,"readwrite"),s=i.objectStore(ds),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&hb(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ay(t){let e;const n=await vh(t.appConfig,r=>{const i=MF(r),s=LF(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===dm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function MF(t){const e=t||{fid:kF(),registrationStatus:0};return mb(e)}function LF(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(cs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=FF(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:jF(t)}:{installationEntry:e}}async function FF(t,e){try{const n=await AF(t,e);return _d(t.appConfig,n)}catch(n){throw ib(n)&&n.customData.serverCode===409?await pb(t.appConfig):await _d(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function jF(t){let e=await j0(t.appConfig);for(;e.registrationStatus===1;)await cb(100),e=await j0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ay(t);return r||n}return e}function j0(t){return vh(t,e=>{if(!e)throw cs.create("installation-not-found");return mb(e)})}function mb(t){return UF(t)?{fid:t.fid,registrationStatus:0}:t}function UF(t){return t.registrationStatus===1&&t.registrationTime+tb<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BF({appConfig:t,heartbeatServiceProvider:e},n){const r=zF(t,n),i=TF(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:nb,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await ub(()=>fetch(r,a));if(l.ok){const c=await l.json();return ob(c)}else throw await ab("Generate Auth Token",l)}function zF(t,{fid:e}){return`${sb(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function by(t,e=!1){let n;const r=await vh(t.appConfig,s=>{if(!gb(s))throw cs.create("not-registered");const o=s.authToken;if(!e&&WF(o))return s;if(o.requestStatus===1)return n=$F(t,e),s;{if(!navigator.onLine)throw cs.create("app-offline");const a=GF(s);return n=qF(t,a),a}});return n?await n:r.authToken}async function $F(t,e){let n=await U0(t.appConfig);for(;n.authToken.requestStatus===1;)await cb(100),n=await U0(t.appConfig);const r=n.authToken;return r.requestStatus===0?by(t,e):r}function U0(t){return vh(t,e=>{if(!gb(e))throw cs.create("not-registered");const n=e.authToken;return HF(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function qF(t,e){try{const n=await BF(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await _d(t.appConfig,r),n}catch(n){if(ib(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await pb(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await _d(t.appConfig,r)}throw n}}function gb(t){return t!==void 0&&t.registrationStatus===2}function WF(t){return t.requestStatus===2&&!KF(t)}function KF(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+vF}function GF(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function HF(t){return t.requestStatus===1&&t.requestTime+tb<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QF(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ay(e);return r?r.catch(console.error):by(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YF(t,e=!1){const n=t;return await JF(n),(await by(n,e)).token}async function JF(t){const{registrationPromise:e}=await Ay(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XF(t){if(!t||!t.options)throw Mf("App Configuration");if(!t.name)throw Mf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Mf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Mf(t){return cs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb="installations",ZF="installations-internal",e4=t=>{const e=t.getProvider("app").getImmediate(),n=XF(e),r=mi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},t4=t=>{const e=t.getProvider("app").getImmediate(),n=mi(e,yb).getImmediate();return{getId:()=>QF(n),getToken:i=>YF(n,i)}};function n4(){Vn(new _n(yb,e4,"PUBLIC")),Vn(new _n(ZF,t4,"PRIVATE"))}n4();sn(eb,xy);sn(eb,xy,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r4="/firebase-messaging-sw.js",i4="/firebase-cloud-messaging-push-scope",_b="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",s4="https://fcmregistrations.googleapis.com/v1",vb="google.c.a.c_id",o4="google.c.a.c_l",a4="google.c.a.ts",l4="google.c.a.e";var B0;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(B0||(B0={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Nl;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Nl||(Nl={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function u4(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="fcm_token_details_db",c4=5,z0="fcm_token_object_Store";async function d4(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Lf))return null;let e=null;return(await $d(Lf,c4,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(z0))return;const l=o.objectStore(z0),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(i===2){const d=c;if(!d.auth||!d.p256dh||!d.endpoint)return;e={token:d.fcmToken,createTime:(a=d.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:$n(d.vapidKey)}}}else if(i===3){const d=c;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:$n(d.auth),p256dh:$n(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:$n(d.vapidKey)}}}else if(i===4){const d=c;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:$n(d.auth),p256dh:$n(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:$n(d.vapidKey)}}}}}})).close(),await xf(Lf),await xf("fcm_vapid_details_db"),await xf("undefined"),h4(e)?e:null}function h4(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4="firebase-messaging-database",p4=1,Dl="firebase-messaging-store";let Ff=null;function wb(){return Ff||(Ff=$d(f4,p4,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Dl)}}})),Ff}async function m4(t){const e=Eb(t),r=await(await wb()).transaction(Dl).objectStore(Dl).get(e);if(r)return r;{const i=await d4(t.appConfig.senderId);if(i)return await Py(t,i),i}}async function Py(t,e){const n=Eb(t),i=(await wb()).transaction(Dl,"readwrite");return await i.objectStore(Dl).put(e,n),await i.done,e}function Eb({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Tt=new ms("messaging","Messaging",g4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y4(t,e){const n=await Ry(t),r=Ib(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(ky(t.appConfig),i)).json()}catch(o){throw Tt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Tt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Tt.create("token-subscribe-no-token");return s.token}async function _4(t,e){const n=await Ry(t),r=Ib(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${ky(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Tt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Tt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Tt.create("token-update-no-token");return s.token}async function v4(t,e){const r={method:"DELETE",headers:await Ry(t)};try{const s=await(await fetch(`${ky(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Tt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Tt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function ky({projectId:t}){return`${s4}/projects/${t}/registrations`}async function Ry({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Ib({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==_b&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w4=7*24*60*60*1e3;async function E4(t){const e=await T4(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:$n(e.getKey("auth")),p256dh:$n(e.getKey("p256dh"))},r=await m4(t.firebaseDependencies);if(r){if(x4(r.subscriptionOptions,n))return Date.now()>=r.createTime+w4?I4(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await v4(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return $0(t.firebaseDependencies,n)}else return $0(t.firebaseDependencies,n)}async function I4(t,e){try{const n=await _4(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Py(t.firebaseDependencies,r),n}catch(n){throw n}}async function $0(t,e){const r={token:await y4(t,e),createTime:Date.now(),subscriptionOptions:e};return await Py(t,r),r.token}async function T4(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:u4(e)})}function x4(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return S4(e,t),A4(e,t),b4(e,t),e}function S4(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function A4(t,e){e.data&&(t.data=e.data)}function b4(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P4(t){return typeof t=="object"&&!!t&&vb in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k4(t){if(!t||!t.options)throw jf("App Configuration Object");if(!t.name)throw jf("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw jf(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function jf(t){return Tt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=k4(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C4(t){try{t.swRegistration=await navigator.serviceWorker.register(r4,{scope:i4}),t.swRegistration.update().catch(()=>{})}catch(e){throw Tt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N4(t,e){if(!e&&!t.swRegistration&&await C4(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Tt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D4(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=_b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(t,e){if(!navigator)throw Tt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Tt.create("permission-blocked");return await D4(t,e==null?void 0:e.vapidKey),await N4(t,e==null?void 0:e.serviceWorkerRegistration),E4(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V4(t,e,n){const r=O4(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[vb],message_name:n[o4],message_time:n[a4],message_device_time:Math.floor(Date.now()/1e3)})}function O4(t){switch(t){case Nl.NOTIFICATION_CLICKED:return"notification_open";case Nl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M4(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Nl.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(q0(n)):t.onMessageHandler.next(q0(n)));const r=n.data;P4(r)&&r[l4]==="1"&&await V4(t,n.messageType,r)}const W0="@firebase/messaging",K0="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L4=t=>{const e=new R4(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>M4(e,n)),e},F4=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>Tb(e,r)}};function j4(){Vn(new _n("messaging",L4,"PUBLIC")),Vn(new _n("messaging-internal",F4,"PRIVATE")),sn(W0,K0),sn(W0,K0,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xb(){try{await OT()}catch{return!1}return typeof window<"u"&&cg()&&yC()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U4(t,e){if(!navigator)throw Tt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B4(t=fg()){return xb().then(e=>{if(!e)throw Tt.create("unsupported-browser")},e=>{throw Tt.create("indexed-db-unsupported")}),mi(he(t),"messaging").getImmediate()}async function z4(t,e){return t=he(t),Tb(t,e)}function $4(t,e){return t=he(t),U4(t,e)}j4();const q4={apiKey:"AIzaSyAYr-SX1BaUG_PWF31H1uvTspY-rq5arGg",authDomain:"home-collab.firebaseapp.com",projectId:"home-collab",storageBucket:"home-collab.firebasestorage.app",messagingSenderId:"803047926601",appId:"1:803047926601:web:b84b6334215b55f9cac898"},wh=FT(q4),au=W2(wh),We=PA(wh);let Zu=null;async function Cy(){return Zu||(await xb()&&(Zu=B4(wh)),Zu)}const W4=Object.freeze(Object.defineProperty({__proto__:null,auth:au,db:We,default:wh,getMessagingInstance:Cy},Symbol.toStringTag,{value:"Module"}));async function K4(t,e){return PD(au,t,e)}async function G4(t,e,n){const r=await bD(au,t,e);await RD(r.user,{displayName:n});const i=await Es(ys(We,"families"),{members:[r.user.uid],memberNames:{[r.user.uid]:n},createdAt:lr()});return await KA(St(We,"users",r.user.uid),{displayName:n,email:t,familyId:i.id,fcmTokens:[],notificationsEnabled:!0,createdAt:lr()}),r}async function H4(){return VD(au)}async function Q4(t){const e=await Ey(St(We,"users",t));return e.exists()?{id:e.id,...e.data()}:null}async function Y4(t,e){return us(St(We,"users",t),e)}async function J4(t,e){const n=St(We,"users",t),r=await Ey(n);if(!r.exists())return;const{fcmTokens:i=[]}=r.data();i.includes(e)||await us(n,{fcmTokens:[...i,e]})}async function X4(t,e){const n=await Es(ys(We,"families"),{members:[t],memberNames:{[t]:e},createdAt:lr()});return await us(St(We,"users",t),{familyId:n.id}),n.id}async function Z4(t,e,n,r){const i=await Es(ys(We,"families"),{members:[t,n],memberNames:{[t]:e,[n]:r},createdAt:lr()});return await us(St(We,"users",t),{familyId:i.id}),await us(St(We,"users",n),{familyId:i.id}),i.id}const G0=t=>{let e;const n=new Set,r=(c,d)=>{const f=typeof c=="function"?c(e):c;if(!Object.is(f,e)){const m=e;e=d??(typeof f!="object"||f===null)?f:Object.assign({},e,f),n.forEach(_=>_(e,m))}},i=()=>e,a={setState:r,getState:i,getInitialState:()=>l,subscribe:c=>(n.add(c),()=>n.delete(c))},l=e=t(r,i,a);return a},ej=t=>t?G0(t):G0,tj=t=>t;function nj(t,e=tj){const n=Pa.useSyncExternalStore(t.subscribe,Pa.useCallback(()=>e(t.getState()),[t,e]),Pa.useCallback(()=>e(t.getInitialState()),[t,e]));return Pa.useDebugValue(n),n}const H0=t=>{const e=ej(t),n=r=>nj(e,r);return Object.assign(n,e),n},Sb=t=>t?H0(t):H0,Ln=Sb(t=>({currentUser:null,userProfile:null,partnerProfile:null,familyId:null,familyData:null,isLoading:!0,setCurrentUser:e=>t({currentUser:e}),setUserProfile:e=>t({userProfile:e}),setPartnerProfile:e=>t({partnerProfile:e}),setFamilyId:e=>t({familyId:e}),setFamilyData:e=>t({familyData:e}),setLoading:e=>t({isLoading:e}),reset:()=>t({currentUser:null,userProfile:null,partnerProfile:null,familyId:null,familyData:null,isLoading:!1})}));function rj(){const{setCurrentUser:t,setUserProfile:e,setPartnerProfile:n,setFamilyId:r,setFamilyData:i,setLoading:s,reset:o}=Ln(),a=j.useRef(null),l=j.useRef(null),c=j.useRef(!1);j.useEffect(()=>{const d=DD(au,f=>{var m,_;if((m=l.current)==null||m.call(l),(_=a.current)==null||_.call(a),c.current=!1,!f){o();return}t(f),a.current=Oo(St(We,"users",f.uid),async S=>{var R;if(!S.exists()){s(!1);return}const P={id:S.id,...S.data()};if(e(P),P.familyId)c.current=!1,r(P.familyId),(R=l.current)==null||R.call(l),l.current=Oo(St(We,"families",P.familyId),async T=>{if(!T.exists()){s(!1);return}const w={id:T.id,...T.data()};i(w);const I=w.members.find(A=>A!==f.uid);if(I){const A=await Q4(I);n(A)}else n(null);s(!1)});else if(!c.current){c.current=!0;try{await X4(f.uid,P.displayName||P.email||"")}catch(T){console.error("솔로 패밀리 생성 오류:",T),c.current=!1,s(!1)}}})});return()=>{var f,m;d(),(f=l.current)==null||f.call(l),(m=a.current)==null||m.call(a)}},[])}function Ab(t){return ys(We,"families",t,"tasks")}function ij(t,e){const n=fh(Ab(t),mh("createdAt","desc"));return Oo(n,r=>{const i=r.docs.map(s=>({id:s.id,...s.data()}));e(i)})}async function sj(t,e){var i;const n={...e,isActive:!0,createdAt:lr()};return(i=e.recurrence)!=null&&i.startDate&&!(e.recurrence.startDate instanceof de)&&(n.recurrence={...e.recurrence,startDate:de.fromDate(new Date(e.recurrence.startDate))}),e.dueDate&&!(e.dueDate instanceof de)&&(n.dueDate=de.fromDate(new Date(e.dueDate))),(await Es(Ab(t),n)).id}async function oj(t,e,n){var i;const r={...n};return(i=n.recurrence)!=null&&i.startDate&&!(n.recurrence.startDate instanceof de)&&(r.recurrence={...n.recurrence,startDate:de.fromDate(new Date(n.recurrence.startDate))}),n.dueDate&&!(n.dueDate instanceof de)&&(r.dueDate=de.fromDate(new Date(n.dueDate))),us(St(We,"families",t,"tasks",e),r)}async function aj(t,e){return yh(St(We,"families",t,"tasks",e))}function bb(t){return ys(We,"families",t,"completions")}function lj(t,e){const n=fh(bb(t),mh("completedAt","desc"),UA(500));return Oo(n,r=>{const i=r.docs.map(s=>({id:s.id,...s.data()}));e(i)})}async function uj(t,e){return Es(bb(t),{...e,completedAt:lr()})}async function cj(t,e){return yh(St(We,"families",t,"completions",e))}const dj=[{name:"청소",color:"#3b82f6",icon:"🧹",order:0},{name:"주방",color:"#f97316",icon:"🍳",order:1},{name:"장보기",color:"#22c55e",icon:"🛒",order:2},{name:"집관리",color:"#a855f7",icon:"🔧",order:3},{name:"기타",color:"#6b7280",icon:"📌",order:4}];function vd(t){return ys(We,"families",t,"categories")}async function hj(t){if(!(await WA(vd(t))).empty)return;const n=JA(We);dj.forEach(r=>{n.set(St(vd(t)),{...r,isDefault:!0,createdAt:lr()})}),await n.commit()}function fj(t,e){const n=fh(vd(t),mh("order","asc"));return Oo(n,r=>{e(r.docs.map(i=>({id:i.id,...i.data()})))})}async function pj(t,e){return Es(vd(t),{...e,createdAt:lr()})}async function mj(t,e){return yh(St(We,"families",t,"categories",e))}const xi=Sb((t,e)=>({tasks:[],categories:[],completions:[],setTasks:n=>t({tasks:n}),setCategories:n=>t({categories:n}),setCompletions:n=>t({completions:n}),getCategoryById:n=>e().categories.find(r=>r.id===n),isCompleted:(n,r)=>{const i=e().completions;return r==="permanent"?i.some(s=>s.taskId===n):i.some(s=>s.taskId===n&&s.periodKey===r)},getCompletionForPeriod:(n,r)=>{const i=e().completions;return r==="permanent"?i.find(s=>s.taskId===n):i.find(s=>s.taskId===n&&s.periodKey===r)}}));function gj(t){const{setTasks:e,setCompletions:n,setCategories:r}=xi();j.useEffect(()=>{if(!t)return;hj(t);const i=ij(t,e),s=lj(t,n),o=fj(t,r);return()=>{i(),s(),o()}},[t])}async function yj(t){if(!("Notification"in window))return console.warn("[FCM] 이 브라우저는 알림을 지원하지 않습니다."),null;const e=await Notification.requestPermission();if(console.log("[FCM] 알림 권한 상태:",e),e!=="granted")return null;const n=await Cy();if(!n)return console.warn("[FCM] messaging 인스턴스 초기화 실패 (브라우저 미지원)"),null;try{let r;if("serviceWorker"in navigator){const o="/home-collab/";r=await navigator.serviceWorker.register(o+"firebase-messaging-sw.js",{scope:o}),await navigator.serviceWorker.ready,console.log("[FCM] 서비스 워커 등록 완료:",r.scope)}else console.warn("[FCM] 이 브라우저는 Service Worker를 지원하지 않습니다.");const i={vapidKey:t};r&&(i.serviceWorkerRegistration=r);const s=await z4(n,i);return s?console.log("[FCM] 토큰 발급 성공:",s.slice(0,20)+"..."):console.warn("[FCM] 빈 토큰 반환됨 — VAPID 키 또는 FCM 설정을 확인하세요."),s||null}catch(r){return console.error("[FCM] 토큰 발급 오류:",r.code,r.message),null}}async function _j(t){const e=await Cy();return e?(console.log("[FCM] 포그라운드 메시지 핸들러 등록 완료"),$4(e,n=>{console.log("[FCM] 포그라운드 메시지 수신:",n),t(n)})):()=>{}}async function Pb({tokens:t,title:e,body:n,data:r}){const i="https://effulgent-capybara-f0865c.netlify.app/.netlify/functions/send-notification";if(i.includes("your-app.netlify.app")){console.warn("[FCM] VITE_NOTIFICATION_API_URL이 설정되지 않았습니다. Netlify 함수 배포 후 .env에 URL을 입력하세요.");return}if(!t||t.length===0){console.warn("[FCM] 전송할 FCM 토큰이 없습니다. 상대방이 알림을 허용했는지 확인하세요.");return}console.log("[FCM] 알림 전송 시도:",{tokenCount:t.length,title:e,body:n});try{const o=await(await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tokens:t,title:e,body:n,data:r||{}})})).json();console.log("[FCM] 알림 전송 결과:",o)}catch(s){console.error("[FCM] 알림 전송 실패:",s)}}function vj(){const{currentUser:t,userProfile:e}=Ln();j.useEffect(()=>{if(!t||!(e!=null&&e.notificationsEnabled))return;const n="BDwSQ1SxPkBJiT1jFWBqCZM6555ymZXOOIc6-sT0JGU3YJ4wmnV1FUZXFC0hvvQnTzvwv6m3S9Etax_WTQHKdFc";let r=()=>{};return(async()=>{const i=await yj(n);i&&await J4(t.uid,i),r=await _j(s=>{var o,a;Notification.permission==="granted"&&new Notification(((o=s.notification)==null?void 0:o.title)||"홈콜라보",{body:((a=s.notification)==null?void 0:a.body)||"",icon:"/home-collab/icons/icon-192.png"})})})(),()=>r()},[t==null?void 0:t.uid,e==null?void 0:e.notificationsEnabled])}function kb({fullScreen:t}){const e=g.jsxs("div",{className:"flex flex-col items-center gap-3",children:[g.jsx("div",{className:"w-10 h-10 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"}),g.jsx("p",{className:"text-sm text-slate-400",children:"불러오는 중..."})]});return t?g.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-white z-50",children:e}):g.jsx("div",{className:"flex justify-center py-12",children:e})}const wj="modulepreload",Ej=function(t){return"/home-collab/"+t},Q0={},hm=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=Ej(l),l in Q0)return;Q0[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":wj,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,_)=>{f.addEventListener("load",m),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function Ij(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:o}=t;let a,l;const c=async(f=!0)=>{await l};async function d(){if("serviceWorker"in navigator){if(a=await hm(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/home-collab/sw.js",{scope:"/home-collab/",type:"classic"})).catch(f=>{o==null||o(f)}),!a)return;a.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&window.location.reload()}),a.addEventListener("installed",f=>{f.isUpdate||r==null||r()}),a.register({immediate:e}).then(f=>{s?s("/home-collab/sw.js",f):i==null||i(f)}).catch(f=>{o==null||o(f)})}}return l=d(),c}function Tj(t={}){const{immediate:e=!0,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:o}=t,[a,l]=j.useState(!1),[c,d]=j.useState(!1),[f]=j.useState(()=>Ij({immediate:e,onOfflineReady(){d(!0),r==null||r()},onNeedRefresh(){l(!0),n==null||n()},onRegistered:i,onRegisteredSW:s,onRegisterError:o}));return{needRefresh:[a,l],offlineReady:[c,d],updateServiceWorker:f}}/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xj=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Rb=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Sj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aj=j.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>j.createElement("svg",{ref:l,...Sj,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Rb("lucide",i),...a},[...o.map(([c,d])=>j.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=(t,e)=>{const n=j.forwardRef(({className:r,...i},s)=>j.createElement(Aj,{ref:s,iconNode:e,className:Rb(`lucide-${xj(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bj=He("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pj=He("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kj=He("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rj=He("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cj=He("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=He("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=He("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nj=He("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dj=He("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vj=He("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oj=He("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mj=He("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lj=He("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fj=He("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=He("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jj=He("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uj=He("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=He("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bj=He("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=He("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function zj(){const{needRefresh:[t,e]}=Tj();if(!t)return null;function n(){e(!1),window.location.reload()}return g.jsx("div",{className:"fixed bottom-24 left-4 right-4 z-50 animate-in",children:g.jsxs("div",{className:"bg-white rounded-2xl shadow-xl border border-slate-200 p-4",children:[g.jsxs("div",{className:"flex items-start gap-3",children:[g.jsx("div",{className:"flex-shrink-0 w-9 h-9 bg-primary-100 rounded-xl flex items-center justify-center",children:g.jsx(jj,{size:18,className:"text-primary-600"})}),g.jsxs("div",{className:"flex-1 min-w-0",children:[g.jsx("p",{className:"text-sm font-semibold text-slate-800",children:"새 버전이 출시됐어요!"}),g.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:"업데이트하고 최신 기능을 사용해보세요."})]})]}),g.jsxs("div",{className:"flex gap-2 mt-4",children:[g.jsx("button",{onClick:n,className:"flex-1 py-2.5 bg-primary-600 text-white rounded-xl text-sm font-semibold hover:bg-primary-700 active:scale-[0.98] transition-all",children:"지금 업데이트"}),g.jsx("button",{onClick:()=>e(!1),className:"px-4 py-2.5 bg-slate-100 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors",children:"나중에"})]})]})})}function $j(){const[t,e]=j.useState("login"),[n,r]=j.useState(""),[i,s]=j.useState(""),[o,a]=j.useState(""),[l,c]=j.useState(""),[d,f]=j.useState(!1);async function m(_){_.preventDefault(),c(""),f(!0);try{if(t==="login")await K4(n,i);else{if(!o.trim()){c("이름을 입력해주세요."),f(!1);return}await G4(n,i,o.trim())}}catch(S){c({"auth/user-not-found":"등록되지 않은 이메일입니다.","auth/wrong-password":"비밀번호가 올바르지 않습니다.","auth/invalid-credential":"이메일 또는 비밀번호가 올바르지 않습니다.","auth/email-already-in-use":"이미 사용 중인 이메일입니다.","auth/weak-password":"비밀번호는 6자 이상이어야 합니다.","auth/invalid-email":"올바른 이메일 형식이 아닙니다."}[S.code]||"오류가 발생했습니다. 다시 시도해주세요.")}finally{f(!1)}}return g.jsx("div",{className:"min-h-screen bg-gradient-to-br from-primary-50 to-white flex flex-col items-center justify-center px-6",children:g.jsxs("div",{className:"w-full max-w-sm",children:[g.jsxs("div",{className:"text-center mb-8",children:[g.jsx("div",{className:"flex justify-center mb-3",children:g.jsxs("svg",{width:"72",height:"72",viewBox:"0 0 192 192",xmlns:"http://www.w3.org/2000/svg",children:[g.jsx("circle",{cx:"96",cy:"96",r:"96",fill:"#FF9A3C"}),g.jsx("polygon",{points:"33,106 96,47 159,106",fill:"white"}),g.jsx("rect",{x:"52",y:"99",width:"88",height:"64",rx:"4",fill:"white"}),g.jsx("rect",{x:"74",y:"130",width:"30",height:"33",rx:"3",fill:"#FF9A3C"}),g.jsx("polyline",{points:"63,118 85,140 126,105",stroke:"#22C55E",strokeWidth:"11",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"})]})}),g.jsx("h1",{className:"text-2xl font-bold text-slate-800",children:"함께할 일"}),g.jsx("p",{className:"text-slate-500 text-sm mt-1",children:"둘이 함께하는 집안일 협업 앱"})]}),g.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-6",children:[g.jsx("div",{className:"flex bg-slate-100 rounded-xl p-1 mb-6",children:["login","signup"].map(_=>g.jsx("button",{onClick:()=>{e(_),c("")},className:`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${t===_?"bg-white text-slate-800 shadow-sm":"text-slate-500"}`,children:_==="login"?"로그인":"회원가입"},_))}),g.jsxs("form",{onSubmit:m,className:"space-y-4",children:[t==="signup"&&g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"이름"}),g.jsx("input",{type:"text",value:o,onChange:_=>a(_.target.value),placeholder:"홍길동",className:"w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 text-slate-800",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"이메일"}),g.jsx("input",{type:"email",value:n,onChange:_=>r(_.target.value),placeholder:"example@email.com",className:"w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 text-slate-800",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"비밀번호"}),g.jsx("input",{type:"password",value:i,onChange:_=>s(_.target.value),placeholder:"6자 이상",className:"w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 text-slate-800",required:!0})]}),l&&g.jsx("p",{className:"text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl",children:l}),g.jsx("button",{type:"submit",disabled:d,className:"w-full py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 active:scale-95 transition-all disabled:opacity-60",children:d?"처리 중...":t==="login"?"로그인":"가입하기"})]})]})]})})}function Me(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function ur(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function Ob(t,e){const n=Me(t);return isNaN(e)?ur(t,NaN):(e&&n.setDate(n.getDate()+e),n)}const Mb=6048e5,qj=864e5;let Wj={};function Eh(){return Wj}function ci(t,e){var a,l,c,d;const n=Eh(),r=(e==null?void 0:e.weekStartsOn)??((l=(a=e==null?void 0:e.locale)==null?void 0:a.options)==null?void 0:l.weekStartsOn)??n.weekStartsOn??((d=(c=n.locale)==null?void 0:c.options)==null?void 0:d.weekStartsOn)??0,i=Me(t),s=i.getDay(),o=(s<r?7:0)+s-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function wd(t){return ci(t,{weekStartsOn:1})}function Lb(t){const e=Me(t),n=e.getFullYear(),r=ur(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=wd(r),s=ur(t,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const o=wd(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function Vl(t){const e=Me(t);return e.setHours(0,0,0,0),e}function Y0(t){const e=Me(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Kj(t,e){const n=Vl(t),r=Vl(e),i=+n-Y0(n),s=+r-Y0(r);return Math.round((i-s)/qj)}function Gj(t){const e=Lb(t),n=ur(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),wd(n)}function Ny(t){return ur(t,Date.now())}function Ol(t,e){const n=Vl(t),r=Vl(e);return+n==+r}function Hj(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Qj(t){if(!Hj(t)&&typeof t!="number")return!1;const e=Me(t);return!isNaN(Number(e))}function Yj(t){const e=Me(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function Jj(t,e){const n=Me(t.start),r=Me(t.end);let i=+n>+r;const s=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0);let a=1;const l=[];for(;+o<=s;)l.push(Me(o)),o.setDate(o.getDate()+a),o.setHours(0,0,0,0);return i?l.reverse():l}function Xj(t){const e=Me(t);return e.setDate(1),e.setHours(0,0,0,0),e}function Zj(t){const e=Me(t),n=ur(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}function eU(t,e){const n=e==null?void 0:e.weekStartsOn,r=Me(t),i=r.getDay(),s=(i<n?-7:0)+6-(i-n);return r.setDate(r.getDate()+s),r.setHours(23,59,59,999),r}const tU={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},nU=(t,e,n)=>{let r;const i=tU[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function uo(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const rU={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},iU={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},sU={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},oU={date:uo({formats:rU,defaultWidth:"full"}),time:uo({formats:iU,defaultWidth:"full"}),dateTime:uo({formats:sU,defaultWidth:"full"})},aU={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},lU=(t,e,n,r)=>aU[t];function Tn(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,a=n!=null&&n.width?String(n.width):o;i=t.formattingValues[a]||t.formattingValues[o]}else{const o=t.defaultWidth,a=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[a]||t.values[o]}const s=t.argumentCallback?t.argumentCallback(e):e;return i[s]}}const uU={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},cU={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},dU={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},hU={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},fU={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},pU={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},mU=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},gU={ordinalNumber:mU,era:Tn({values:uU,defaultWidth:"wide"}),quarter:Tn({values:cU,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Tn({values:dU,defaultWidth:"wide"}),day:Tn({values:hU,defaultWidth:"wide"}),dayPeriod:Tn({values:fU,defaultWidth:"wide",formattingValues:pU,defaultFormattingWidth:"wide"})};function xn(t){return(e,n={})=>{const r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;const o=s[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?_U(a,f=>f.test(o)):yU(a,f=>f.test(o));let c;c=t.valueCallback?t.valueCallback(l):l,c=n.valueCallback?n.valueCallback(c):c;const d=e.slice(o.length);return{value:c,rest:d}}}function yU(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function _U(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function Fb(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const i=r[0],s=e.match(t.parsePattern);if(!s)return null;let o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;const a=e.slice(i.length);return{value:o,rest:a}}}const vU=/^(\d+)(th|st|nd|rd)?/i,wU=/\d+/i,EU={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},IU={any:[/^b/i,/^(a|c)/i]},TU={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},xU={any:[/1/i,/2/i,/3/i,/4/i]},SU={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},AU={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},bU={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},PU={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},kU={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},RU={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},CU={ordinalNumber:Fb({matchPattern:vU,parsePattern:wU,valueCallback:t=>parseInt(t,10)}),era:xn({matchPatterns:EU,defaultMatchWidth:"wide",parsePatterns:IU,defaultParseWidth:"any"}),quarter:xn({matchPatterns:TU,defaultMatchWidth:"wide",parsePatterns:xU,defaultParseWidth:"any",valueCallback:t=>t+1}),month:xn({matchPatterns:SU,defaultMatchWidth:"wide",parsePatterns:AU,defaultParseWidth:"any"}),day:xn({matchPatterns:bU,defaultMatchWidth:"wide",parsePatterns:PU,defaultParseWidth:"any"}),dayPeriod:xn({matchPatterns:kU,defaultMatchWidth:"any",parsePatterns:RU,defaultParseWidth:"any"})},NU={code:"en-US",formatDistance:nU,formatLong:oU,formatRelative:lU,localize:gU,match:CU,options:{weekStartsOn:0,firstWeekContainsDate:1}};function DU(t){const e=Me(t);return Kj(e,Zj(e))+1}function VU(t){const e=Me(t),n=+wd(e)-+Gj(e);return Math.round(n/Mb)+1}function jb(t,e){var d,f,m,_;const n=Me(t),r=n.getFullYear(),i=Eh(),s=(e==null?void 0:e.firstWeekContainsDate)??((f=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??i.firstWeekContainsDate??((_=(m=i.locale)==null?void 0:m.options)==null?void 0:_.firstWeekContainsDate)??1,o=ur(t,0);o.setFullYear(r+1,0,s),o.setHours(0,0,0,0);const a=ci(o,e),l=ur(t,0);l.setFullYear(r,0,s),l.setHours(0,0,0,0);const c=ci(l,e);return n.getTime()>=a.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function OU(t,e){var a,l,c,d;const n=Eh(),r=(e==null?void 0:e.firstWeekContainsDate)??((l=(a=e==null?void 0:e.locale)==null?void 0:a.options)==null?void 0:l.firstWeekContainsDate)??n.firstWeekContainsDate??((d=(c=n.locale)==null?void 0:c.options)==null?void 0:d.firstWeekContainsDate)??1,i=jb(t,e),s=ur(t,0);return s.setFullYear(i,0,r),s.setHours(0,0,0,0),ci(s,e)}function MU(t,e){const n=Me(t),r=+ci(n,e)-+OU(n,e);return Math.round(r/Mb)+1}function pe(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const Sr={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return pe(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):pe(n+1,2)},d(t,e){return pe(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return pe(t.getHours()%12||12,e.length)},H(t,e){return pe(t.getHours(),e.length)},m(t,e){return pe(t.getMinutes(),e.length)},s(t,e){return pe(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),i=Math.trunc(r*Math.pow(10,n-3));return pe(i,e.length)}},Ns={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},J0={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return Sr.y(t,e)},Y:function(t,e,n,r){const i=jb(t,r),s=i>0?i:1-i;if(e==="YY"){const o=s%100;return pe(o,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):pe(s,e.length)},R:function(t,e){const n=Lb(t);return pe(n,e.length)},u:function(t,e){const n=t.getFullYear();return pe(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return pe(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return pe(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return Sr.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return pe(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const i=MU(t,r);return e==="wo"?n.ordinalNumber(i,{unit:"week"}):pe(i,e.length)},I:function(t,e,n){const r=VU(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):pe(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Sr.d(t,e)},D:function(t,e,n){const r=DU(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):pe(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const i=t.getDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return pe(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const i=t.getDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return pe(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),i=r===0?7:r;switch(e){case"i":return String(i);case"ii":return pe(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const i=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let i;switch(r===12?i=Ns.noon:r===0?i=Ns.midnight:i=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let i;switch(r>=17?i=Ns.evening:r>=12?i=Ns.afternoon:r>=4?i=Ns.morning:i=Ns.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Sr.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Sr.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):pe(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):pe(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Sr.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Sr.s(t,e)},S:function(t,e){return Sr.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return Z0(r);case"XXXX":case"XX":return Vi(r);case"XXXXX":case"XXX":default:return Vi(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return Z0(r);case"xxxx":case"xx":return Vi(r);case"xxxxx":case"xxx":default:return Vi(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+X0(r,":");case"OOOO":default:return"GMT"+Vi(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+X0(r,":");case"zzzz":default:return"GMT"+Vi(r,":")}},t:function(t,e,n){const r=Math.trunc(t.getTime()/1e3);return pe(r,e.length)},T:function(t,e,n){const r=t.getTime();return pe(r,e.length)}};function X0(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=Math.trunc(r/60),s=r%60;return s===0?n+String(i):n+String(i)+e+pe(s,2)}function Z0(t,e){return t%60===0?(t>0?"-":"+")+pe(Math.abs(t)/60,2):Vi(t,e)}function Vi(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=pe(Math.trunc(r/60),2),s=pe(r%60,2);return n+i+e+s}const eE=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Ub=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},LU=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return eE(t,e);let s;switch(r){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",eE(r,e)).replace("{{time}}",Ub(i,e))},FU={p:Ub,P:LU},jU=/^D+$/,UU=/^Y+$/,BU=["D","DD","YY","YYYY"];function zU(t){return jU.test(t)}function $U(t){return UU.test(t)}function qU(t,e,n){const r=WU(t,e,n);if(console.warn(r),BU.includes(t))throw new RangeError(r)}function WU(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const KU=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,GU=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,HU=/^'([^]*?)'?$/,QU=/''/g,YU=/[a-zA-Z]/;function it(t,e,n){var d,f,m,_,S,P,R,T;const r=Eh(),i=(n==null?void 0:n.locale)??r.locale??NU,s=(n==null?void 0:n.firstWeekContainsDate)??((f=(d=n==null?void 0:n.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??r.firstWeekContainsDate??((_=(m=r.locale)==null?void 0:m.options)==null?void 0:_.firstWeekContainsDate)??1,o=(n==null?void 0:n.weekStartsOn)??((P=(S=n==null?void 0:n.locale)==null?void 0:S.options)==null?void 0:P.weekStartsOn)??r.weekStartsOn??((T=(R=r.locale)==null?void 0:R.options)==null?void 0:T.weekStartsOn)??0,a=Me(t);if(!Qj(a))throw new RangeError("Invalid time value");let l=e.match(GU).map(w=>{const I=w[0];if(I==="p"||I==="P"){const A=FU[I];return A(w,i.formatLong)}return w}).join("").match(KU).map(w=>{if(w==="''")return{isToken:!1,value:"'"};const I=w[0];if(I==="'")return{isToken:!1,value:JU(w)};if(J0[I])return{isToken:!0,value:w};if(I.match(YU))throw new RangeError("Format string contains an unescaped latin alphabet character `"+I+"`");return{isToken:!1,value:w}});i.localize.preprocessor&&(l=i.localize.preprocessor(a,l));const c={firstWeekContainsDate:s,weekStartsOn:o,locale:i};return l.map(w=>{if(!w.isToken)return w.value;const I=w.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&$U(I)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&zU(I))&&qU(I,e,String(t));const A=J0[I[0]];return A(a,I,i.localize,c)}).join("")}function JU(t){const e=t.match(HU);return e?e[1].replace(QU,"'"):t}function Ds(t){return Me(t).getDate()}function tE(t){return Me(t).getDay()}function XU(t,e){const n=Me(t),r=Me(e);return+n<+r}function ZU(t){return+Me(t)<Date.now()}function lu(t){return Ol(t,Ny(t))}function Dy(t){return Ol(t,Ob(Ny(t),1))}function eB(t,e){return Ob(t,-1)}function tB(t){return Ol(t,eB(Ny(t)))}const nB={lessThanXSeconds:{one:"1초 미만",other:"{{count}}초 미만"},xSeconds:{one:"1초",other:"{{count}}초"},halfAMinute:"30초",lessThanXMinutes:{one:"1분 미만",other:"{{count}}분 미만"},xMinutes:{one:"1분",other:"{{count}}분"},aboutXHours:{one:"약 1시간",other:"약 {{count}}시간"},xHours:{one:"1시간",other:"{{count}}시간"},xDays:{one:"1일",other:"{{count}}일"},aboutXWeeks:{one:"약 1주",other:"약 {{count}}주"},xWeeks:{one:"1주",other:"{{count}}주"},aboutXMonths:{one:"약 1개월",other:"약 {{count}}개월"},xMonths:{one:"1개월",other:"{{count}}개월"},aboutXYears:{one:"약 1년",other:"약 {{count}}년"},xYears:{one:"1년",other:"{{count}}년"},overXYears:{one:"1년 이상",other:"{{count}}년 이상"},almostXYears:{one:"거의 1년",other:"거의 {{count}}년"}},rB=(t,e,n)=>{let r;const i=nB[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?r+" 후":r+" 전":r},iB={full:"y년 M월 d일 EEEE",long:"y년 M월 d일",medium:"y.MM.dd",short:"y.MM.dd"},sB={full:"a H시 mm분 ss초 zzzz",long:"a H:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},oB={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},aB={date:uo({formats:iB,defaultWidth:"full"}),time:uo({formats:sB,defaultWidth:"full"}),dateTime:uo({formats:oB,defaultWidth:"full"})},lB={lastWeek:"'지난' eeee p",yesterday:"'어제' p",today:"'오늘' p",tomorrow:"'내일' p",nextWeek:"'다음' eeee p",other:"P"},uB=(t,e,n,r)=>lB[t],cB={narrow:["BC","AD"],abbreviated:["BC","AD"],wide:["기원전","서기"]},dB={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1분기","2분기","3분기","4분기"]},hB={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],wide:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]},fB={narrow:["일","월","화","수","목","금","토"],short:["일","월","화","수","목","금","토"],abbreviated:["일","월","화","수","목","금","토"],wide:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]},pB={narrow:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},abbreviated:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},wide:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"}},mB={narrow:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},abbreviated:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},wide:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"}},gB=(t,e)=>{const n=Number(t);switch(String(e==null?void 0:e.unit)){case"minute":case"second":return String(n);case"date":return n+"일";default:return n+"번째"}},yB={ordinalNumber:gB,era:Tn({values:cB,defaultWidth:"wide"}),quarter:Tn({values:dB,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Tn({values:hB,defaultWidth:"wide"}),day:Tn({values:fB,defaultWidth:"wide"}),dayPeriod:Tn({values:pB,defaultWidth:"wide",formattingValues:mB,defaultFormattingWidth:"wide"})},_B=/^(\d+)(일|번째)?/i,vB=/\d+/i,wB={narrow:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(기원전|서기)/i},EB={any:[/^(bc|기원전)/i,/^(ad|서기)/i]},IB={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]사?분기/i},TB={any:[/1/i,/2/i,/3/i,/4/i]},xB={narrow:/^(1[012]|[123456789])/,abbreviated:/^(1[012]|[123456789])월/i,wide:/^(1[012]|[123456789])월/i},SB={any:[/^1월?$/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},AB={narrow:/^[일월화수목금토]/,short:/^[일월화수목금토]/,abbreviated:/^[일월화수목금토]/,wide:/^[일월화수목금토]요일/},bB={any:[/^일/,/^월/,/^화/,/^수/,/^목/,/^금/,/^토/]},PB={any:/^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i},kB={any:{am:/^(am|오전)/i,pm:/^(pm|오후)/i,midnight:/^자정/i,noon:/^정오/i,morning:/^아침/i,afternoon:/^오후/i,evening:/^저녁/i,night:/^밤/i}},RB={ordinalNumber:Fb({matchPattern:_B,parsePattern:vB,valueCallback:t=>parseInt(t,10)}),era:xn({matchPatterns:wB,defaultMatchWidth:"wide",parsePatterns:EB,defaultParseWidth:"any"}),quarter:xn({matchPatterns:IB,defaultMatchWidth:"wide",parsePatterns:TB,defaultParseWidth:"any",valueCallback:t=>t+1}),month:xn({matchPatterns:xB,defaultMatchWidth:"wide",parsePatterns:SB,defaultParseWidth:"any"}),day:xn({matchPatterns:AB,defaultMatchWidth:"wide",parsePatterns:bB,defaultParseWidth:"any"}),dayPeriod:xn({matchPatterns:PB,defaultMatchWidth:"any",parsePatterns:kB,defaultParseWidth:"any"})},Is={code:"ko",formatDistance:rB,formatLong:aB,formatRelative:uB,localize:yB,match:RB,options:{weekStartsOn:0,firstWeekContainsDate:1}},nE=[{to:"/",icon:Mj,label:"홈"},{to:"/calendar",icon:kj,label:"캘린더"},{to:"/tasks",icon:Dj,label:"태스크"},{to:"/settings",icon:Uj,label:"설정"}];function CB(){const t=pi();return g.jsx("nav",{className:"fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 safe-bottom",children:g.jsxs("div",{className:"flex items-center justify-around h-16 max-w-lg mx-auto px-2",children:[nE.slice(0,2).map(({to:e,icon:n,label:r})=>g.jsxs(Qv,{to:e,end:e==="/",className:({isActive:i})=>`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors ${i?"text-primary-600":"text-slate-400"}`,children:[g.jsx(n,{size:22}),g.jsx("span",{className:"text-xs",children:r})]},e)),g.jsx("button",{onClick:()=>t("/tasks/new"),className:"flex items-center justify-center w-14 h-14 rounded-full bg-primary-600 text-white shadow-lg -mt-6 active:scale-95 transition-transform","aria-label":"태스크 추가",children:g.jsx(Mo,{size:28})}),nE.slice(2).map(({to:e,icon:n,label:r})=>g.jsxs(Qv,{to:e,className:({isActive:i})=>`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors ${i?"text-primary-600":"text-slate-400"}`,children:[g.jsx(n,{size:22}),g.jsx("span",{className:"text-xs",children:r})]},e))]})})}function uu({children:t,title:e,headerRight:n,noPadding:r}){return g.jsxs("div",{className:"flex flex-col min-h-screen bg-slate-50",children:[e&&g.jsxs("header",{className:"sticky top-0 z-30 bg-white border-b border-slate-100 px-4 h-14 flex items-center justify-between",children:[g.jsx("h1",{className:"text-lg font-bold text-slate-800",children:e}),n&&g.jsx("div",{children:n})]}),g.jsx("main",{className:`flex-1 pb-20 ${r?"":"px-4 py-4"}`,children:t}),g.jsx(CB,{})]})}function Bb(t,e){var o;if(t.type!=="routine"||!t.isActive)return!1;const{recurrence:n}=t;if(!n)return!1;const r=(o=n.startDate)!=null&&o.toDate?n.startDate.toDate():new Date(n.startDate),i=new Date(e.getFullYear(),e.getMonth(),e.getDate()),s=new Date(r.getFullYear(),r.getMonth(),r.getDate());if(XU(i,s))return!1;switch(n.type){case"daily":return!0;case"weekly":return(n.daysOfWeek||[]).includes(tE(e));case"biweekly":{if(!(n.daysOfWeek||[]).includes(tE(e)))return!1;const a=ci(s,{weekStartsOn:0}),l=ci(i,{weekStartsOn:0});return Math.round((l.getTime()-a.getTime())/(7*24*60*60*1e3))%2===0}case"monthly":return Ds(e)===(n.dayOfMonth||Ds(s));case"quarterly":{const a=s.getMonth(),l=e.getMonth();return((e.getFullYear()-s.getFullYear())*12+(l-a))%3===0&&Ds(e)===Ds(s)}case"yearly":return e.getMonth()===s.getMonth()&&Ds(e)===Ds(s);default:return!1}}function xc(t,e){var r;if(t.type!=="one-time"||!t.isActive||!t.dueDate)return!1;const n=(r=t.dueDate)!=null&&r.toDate?t.dueDate.toDate():new Date(t.dueDate);return n.getFullYear()===e.getFullYear()&&n.getMonth()===e.getMonth()&&n.getDate()===e.getDate()}function Ed(t){return it(t,"yyyy-MM-dd")}const zb={daily:"매일",weekly:"매주",biweekly:"격주",monthly:"매달",quarterly:"분기",yearly:"매년"},NB=["일","월","화","수","목","금","토"];function nn(t){return t?t!=null&&t.toDate?t.toDate():t instanceof Date?t:new Date(t):null}function $b(t){const e=nn(t);return e?lu(e)?"오늘":Dy(e)?"내일":tB(e)?"어제":it(e,"M월 d일 (E)",{locale:Is}):""}function qb(t){const e=nn(t);return e?ZU(Vl(e))&&!lu(e):!1}function DB(t,e){return it(new Date(t,e,1),"yyyy년 M월",{locale:Is})}function VB(t,e){if(!t)return"";if(!e)return $b(new Date(t+"T00:00:00"));const n=new Date(t+"T"+e);return lu(n)?`오늘 ${it(n,"HH:mm")}`:Dy(n)?`내일 ${it(n,"HH:mm")}`:it(n,"M월 d일 HH:mm",{locale:Is})}function OB({category:t}){return t?g.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full font-medium",style:{backgroundColor:t.color+"20",color:t.color},children:[t.icon," ",t.name]}):null}function MB({name:t,uid:e,currentUid:n}){const r=e===n,i=e==="together",s=i?"bg-purple-100 text-purple-700":r?"bg-blue-100 text-blue-700":"bg-pink-100 text-pink-700";return g.jsxs("span",{className:`text-xs px-2 py-0.5 rounded-full font-medium ${s}`,children:[i?"👫 ":"👤 ",t]})}function Js({task:t,date:e,showActions:n=!0}){var I;const r=pi(),{currentUser:i,userProfile:s,partnerProfile:o,familyId:a}=Ln(),{isCompleted:l,getCompletionForPeriod:c,getCategoryById:d}=xi(),f=t.type==="one-time"?"permanent":Ed(e||new Date),m=l(t.id,f),_=c(t.id,f),S=d(t.categoryId),P=t.type==="one-time"&&t.dueDate&&qb(t.dueDate)&&!m;function R(A){return A==="together"?"함께":A===(i==null?void 0:i.uid)?(s==null?void 0:s.displayName)||"나":(o==null?void 0:o.displayName)||"상대방"}async function T(){if(m){_&&await cj(a,_.id);return}await uj(a,{taskId:t.id,taskTitle:t.title,categoryId:t.categoryId||null,completedBy:i.uid,completedByName:(s==null?void 0:s.displayName)||"",periodKey:f,isAssist:t.assigneeId!==i.uid&&t.assigneeId!=="together"});const A=[...(s==null?void 0:s.fcmTokens)||[],...(o==null?void 0:o.fcmTokens)||[]];if(A.length>0){const L=(s==null?void 0:s.displayName)||"누군가";Pb({tokens:A,title:"✅ 태스크 완료!",body:`${L}님이 "${t.title}"을(를) 완료했어요.`,data:{taskId:t.id}})}}async function w(){window.confirm(`"${t.title}" 태스크를 삭제할까요?`)&&await aj(a,t.id)}return g.jsx("div",{className:`bg-white rounded-xl shadow-sm border transition-all ${P?"border-red-200 bg-red-50":"border-slate-100"} ${m?"opacity-60":""}`,children:g.jsxs("div",{className:"flex items-start gap-3 p-4",children:[g.jsx("button",{onClick:T,className:`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${m?"bg-primary-600 border-primary-600 text-white":"border-slate-300 hover:border-primary-400"}`,children:m&&g.jsx(Rj,{size:14,strokeWidth:3})}),g.jsxs("div",{className:"flex-1 min-w-0",children:[g.jsx("p",{className:`font-medium text-slate-800 ${m?"line-through text-slate-400":""}`,children:t.title}),t.description&&g.jsx("p",{className:"text-sm text-slate-500 mt-0.5 truncate",children:t.description}),g.jsxs("div",{className:"flex flex-wrap items-center gap-2 mt-2",children:[S&&g.jsx(OB,{category:S}),g.jsx(MB,{name:R(t.assigneeId),uid:t.assigneeId,currentUid:i==null?void 0:i.uid}),t.type==="routine"&&t.recurrence&&g.jsx("span",{className:"text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full",children:zb[t.recurrence.type]||t.recurrence.type}),t.type==="one-time"&&t.dueDate&&g.jsxs("span",{className:`text-xs px-2 py-0.5 rounded-full ${P?"text-red-600 bg-red-100":"text-slate-400 bg-slate-100"}`,children:[P?"⚠️ ":"",t.dueTime?VB((I=t.dueDate)!=null&&I.toDate?t.dueDate.toDate().toISOString().slice(0,10):t.dueDate,t.dueTime):$b(t.dueDate),"까지"]})]}),m&&_&&g.jsxs("p",{className:"text-xs text-slate-400 mt-1",children:[_.completedByName,"님이 완료",_.isAssist&&" (도움)"]})]}),n&&g.jsxs("div",{className:"flex items-center gap-1 flex-shrink-0",children:[g.jsx("button",{onClick:()=>r(`/tasks/${t.id}/edit`),className:"p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100",children:g.jsx(Fj,{size:16})}),g.jsx("button",{onClick:w,className:"p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50",children:g.jsx(Db,{size:16})})]})]})})}function LB(t){return lu(t)?`오늘 ${it(t,"M/d")}`:Dy(t)?`내일 ${it(t,"M/d")}`:it(t,"M/d (E)",{locale:Is})}function FB(){const t=pi(),[e,n]=j.useState("task"),[r,i]=j.useState(null),{userProfile:s,partnerProfile:o,isLoading:a}=Ln(),{tasks:l,completions:c}=xi(),d=new Date,f=Ed(d),m=j.useMemo(()=>l.filter(v=>v.isActive),[l]),_=j.useMemo(()=>m.filter(v=>v.type==="one-time"&&xc(v,d)),[m]),S=j.useMemo(()=>m.filter(v=>v.type==="routine"&&Bb(v,d)),[m]),P=j.useMemo(()=>_.filter(v=>c.some(y=>y.taskId===v.id)).length,[_,c]),R=j.useMemo(()=>S.filter(v=>c.some(y=>y.taskId===v.id&&y.periodKey===f)).length,[S,c,f]),T=j.useMemo(()=>{const v=new Date(d.getFullYear(),d.getMonth(),d.getDate());let y=m.filter(b=>{if(b.type!=="one-time"||!b.dueDate)return!1;const C=nn(b.dueDate);return!C||new Date(C.getFullYear(),C.getMonth(),C.getDate())<v?!1:!c.some(k=>k.taskId===b.id)}).sort((b,C)=>nn(b.dueDate)-nn(C.dueDate));r==="todo"&&(y=y.filter(b=>xc(b,d)));const x=new Map;for(const b of y){const C=nn(b.dueDate),D=Ed(C);x.has(D)||x.set(D,{key:D,date:C,tasks:[]}),x.get(D).tasks.push(b)}return Array.from(x.values())},[m,c,r]),w=j.useMemo(()=>[..._.filter(v=>c.some(y=>y.taskId===v.id)),...S.filter(v=>c.some(y=>y.taskId===v.id&&y.periodKey===f))],[_,S,c,f]),I=j.useMemo(()=>m.filter(v=>v.type!=="one-time"?!1:!c.some(x=>x.taskId===v.id)&&v.dueDate&&qb(v.dueDate)&&!xc(v,d)),[m,c]);if(a)return g.jsx(kb,{fullScreen:!0});const A=d.getHours(),L=A<12?"좋은 아침이에요":A<18?"좋은 오후예요":"좋은 저녁이에요";function N(v){v==="todo"?(n("task"),i(y=>y==="todo"?null:"todo")):v==="routine"?(n("routine"),i(y=>y==="routine"?null:"routine")):i(y=>y==="completed"?null:"completed")}return g.jsxs(uu,{children:[g.jsxs("div",{className:"bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-5 mb-5 text-white",children:[g.jsxs("p",{className:"text-primary-100 text-sm",children:[L,","]}),g.jsxs("h2",{className:"text-xl font-bold mt-0.5",children:[(s==null?void 0:s.displayName)||"","님 👋"]}),g.jsxs("p",{className:"text-primary-200 text-sm mt-1",children:[it(d,"M월 d일 (E)",{locale:Is}),o&&` · ${o.displayName}님과 함께`]}),g.jsx("div",{className:"flex gap-3 mt-4",children:[{type:"todo",label:"오늘 할 일",value:_.length},{type:"routine",label:"오늘 루틴",value:S.length},{type:"completed",label:"완료",value:P+R}].map(({type:v,label:y,value:x})=>g.jsxs("button",{onClick:()=>N(v),className:`flex-1 rounded-xl p-2.5 text-center transition-all active:scale-95 ${r===v?"bg-white/40 ring-2 ring-white/60":"bg-white/20 hover:bg-white/30"}`,children:[g.jsx("p",{className:"text-2xl font-bold",children:x}),g.jsx("p",{className:"text-xs text-primary-100 mt-0.5",children:y})]},v))})]}),I.length>0&&g.jsxs("section",{className:"mb-5",children:[g.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[g.jsx(Nj,{size:16,className:"text-red-500"}),g.jsxs("h3",{className:"text-sm font-semibold text-red-600",children:["기한 초과 (",I.length,")"]})]}),g.jsx("div",{className:"space-y-2",children:I.map(v=>g.jsx(Js,{task:v,date:d},v.id))})]}),r==="completed"?g.jsxs("section",{children:[g.jsx("h3",{className:"text-sm font-semibold text-slate-600 mb-3",children:"오늘 완료한 태스크"}),w.length===0?g.jsxs("div",{className:"text-center py-12",children:[g.jsx("p",{className:"text-4xl mb-3",children:"✅"}),g.jsx("p",{className:"text-slate-500",children:"아직 완료한 태스크가 없어요"})]}):g.jsx("div",{className:"space-y-2",children:w.map(v=>g.jsx(Js,{task:v,date:d},v.id))})]}):g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"flex bg-slate-100 rounded-xl p-1 mb-4",children:[{key:"task",label:"태스크"},{key:"routine",label:`오늘의 루틴 (${S.length})`}].map(({key:v,label:y})=>g.jsx("button",{onClick:()=>{n(v),i(null)},className:`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${e===v?"bg-white text-slate-800 shadow-sm":"text-slate-500"}`,children:y},v))}),e==="task"&&g.jsx("section",{children:T.length===0?g.jsxs("div",{className:"text-center py-12",children:[g.jsx("p",{className:"text-4xl mb-3",children:"📌"}),g.jsx("p",{className:"text-slate-500",children:r==="todo"?"오늘 마감인 할 일이 없어요!":"예정된 할 일이 없어요!"}),g.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"새 태스크를 추가해보세요"}),g.jsxs("button",{onClick:()=>t("/tasks/new"),className:"mt-4 flex items-center gap-2 mx-auto px-4 py-2 bg-primary-600 text-white rounded-xl text-sm font-medium",children:[g.jsx(Mo,{size:16})," 태스크 추가"]})]}):g.jsx("div",{className:"space-y-5",children:T.map(({key:v,date:y,tasks:x})=>g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[g.jsx("span",{className:"text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg",children:LB(y)}),g.jsxs("span",{className:"text-xs text-slate-400",children:[x.length,"개"]})]}),g.jsx("div",{className:"space-y-2",children:x.map(b=>g.jsx(Js,{task:b,date:y},b.id))})]},v))})}),e==="routine"&&g.jsx("section",{children:S.length===0?g.jsxs("div",{className:"text-center py-12",children:[g.jsx("p",{className:"text-4xl mb-3",children:"🔁"}),g.jsx("p",{className:"text-slate-500",children:"오늘 해야 할 루틴이 없어요!"}),g.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"새 루틴을 추가해보세요"}),g.jsxs("button",{onClick:()=>t("/tasks/new"),className:"mt-4 flex items-center gap-2 mx-auto px-4 py-2 bg-primary-600 text-white rounded-xl text-sm font-medium",children:[g.jsx(Mo,{size:16})," 루틴 추가"]})]}):g.jsxs(g.Fragment,{children:[g.jsxs("p",{className:"text-xs text-slate-400 mb-3",children:[R," / ",S.length," 완료"]}),g.jsx("div",{className:"space-y-2",children:S.map(v=>g.jsx(Js,{task:v,date:d},v.id))})]})})]})]})}function fm({isOpen:t,onClose:e,title:n,children:r}){return j.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]),t?g.jsxs("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center",children:[g.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm",onClick:e}),g.jsxs("div",{className:"relative w-full sm:max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto",children:[g.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-slate-100",children:[g.jsx("h2",{className:"text-base font-bold text-slate-800",children:n}),g.jsx("button",{onClick:e,className:"p-1.5 rounded-lg text-slate-400 hover:bg-slate-100",children:g.jsx(Vb,{size:20})})]}),g.jsx("div",{className:"p-4",children:r})]})]}):null}const jB=["일","월","화","수","목","금","토"],UB=Array.from({length:11},(t,e)=>2020+e),BB=Array.from({length:12},(t,e)=>e+1);function zB(t,e){const n=t.assigneeId===e,r=t.assigneeId==="together",i=t.type==="routine";return n?i?"bg-blue-200 text-blue-800":"bg-blue-500 text-white":r?i?"bg-green-200 text-green-800":"bg-green-500 text-white":i?"bg-pink-200 text-pink-800":"bg-pink-500 text-white"}function $B(){const t=new Date,[e,n]=j.useState(t.getFullYear()),[r,i]=j.useState(t.getMonth()),[s,o]=j.useState(null),[a,l]=j.useState(!1),[c,d]=j.useState(t.getFullYear()),[f,m]=j.useState({me:!0,partner:!0,together:!0,completed:!0}),{currentUser:_}=Ln(),{tasks:S,completions:P}=xi();function R(){r===0?(n(N=>N-1),i(11)):i(N=>N-1)}function T(){r===11?(n(N=>N+1),i(0)):i(N=>N+1)}const w=j.useMemo(()=>{const N=Xj(new Date(e,r,1)),v=Yj(N),y=ci(N,{weekStartsOn:0}),x=eU(v,{weekStartsOn:0});return Jj({start:y,end:x})},[e,r]);function I(N){return S.filter(v=>{if(!v.isActive||!(v.type==="routine"?Bb(v,N):xc(v,N)))return!1;const x=Ed(N),b=P.some(ot=>ot.taskId===v.id&&ot.periodKey===x),C=v.assigneeId===(_==null?void 0:_.uid),D=v.assigneeId==="together",k=!C&&!D;return!(C&&!f.me||k&&!f.partner||D&&!f.together||b&&!f.completed)})}const A=s?I(s):[],L=g.jsxs("button",{onClick:()=>{d(e),l(!0)},className:"flex items-center gap-1 text-lg font-bold text-slate-800 hover:text-primary-600 transition-colors",children:[DB(e,r),g.jsx(Cj,{size:16})]});return g.jsxs(uu,{title:L,children:[a&&g.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40",children:g.jsxs("div",{className:"bg-white rounded-2xl p-5 w-72 shadow-xl mx-4",children:[g.jsxs("div",{className:"flex items-center justify-between mb-4",children:[g.jsx("h3",{className:"font-semibold text-slate-800",children:"연도 / 월 선택"}),g.jsx("button",{onClick:()=>l(!1),className:"p-1 text-slate-400 hover:text-slate-600 rounded-lg",children:g.jsx(Vb,{size:20})})]}),g.jsx("div",{className:"grid grid-cols-4 gap-1.5 mb-4",children:UB.map(N=>g.jsx("button",{onClick:()=>d(N),className:`py-1.5 rounded-lg text-sm font-medium transition-colors ${c===N?"bg-primary-600 text-white":"hover:bg-slate-100 text-slate-700"}`,children:N},N))}),g.jsx("div",{className:"h-px bg-slate-100 mb-4"}),g.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:BB.map(N=>g.jsxs("button",{onClick:()=>{n(c),i(N-1),l(!1)},className:`py-1.5 rounded-lg text-sm font-medium transition-colors ${c===e&&N-1===r?"bg-primary-600 text-white":"hover:bg-slate-100 text-slate-700"}`,children:[N,"월"]},N))})]})}),g.jsxs("div",{className:"flex items-center justify-between mb-4",children:[g.jsx("button",{onClick:R,className:"p-2 rounded-xl hover:bg-slate-100",children:g.jsx(Cb,{size:20,className:"text-slate-600"})}),g.jsx("button",{onClick:()=>{n(t.getFullYear()),i(t.getMonth())},className:"text-sm font-medium text-primary-600 px-3 py-1 rounded-lg hover:bg-primary-50",children:"오늘"}),g.jsx("button",{onClick:T,className:"p-2 rounded-xl hover:bg-slate-100",children:g.jsx(Nb,{size:20,className:"text-slate-600"})})]}),g.jsx("div",{className:"flex gap-2 mb-4 flex-wrap",children:[{key:"me",label:"나"},{key:"partner",label:"상대방"},{key:"together",label:"함께"},{key:"completed",label:"완료"}].map(({key:N,label:v})=>g.jsx("button",{onClick:()=>m(y=>({...y,[N]:!y[N]})),className:`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${f[N]?"bg-primary-600 text-white border-primary-600":"bg-white text-slate-400 border-slate-200"}`,children:v},N))}),g.jsx("div",{className:"flex gap-3 mb-3 flex-wrap",children:[{label:"나 (일회성)",color:"bg-blue-500"},{label:"나 (루틴)",color:"bg-blue-200"},{label:"상대방 (일회성)",color:"bg-pink-500"},{label:"함께 (일회성)",color:"bg-green-500"}].map(({label:N,color:v})=>g.jsxs("div",{className:"flex items-center gap-1",children:[g.jsx("span",{className:`w-2.5 h-2.5 rounded-sm ${v}`}),g.jsx("span",{className:"text-[10px] text-slate-400",children:N})]},N))}),g.jsx("div",{className:"grid grid-cols-7 mb-1",children:jB.map((N,v)=>g.jsx("div",{className:`text-center text-xs font-medium py-2 ${v===0?"text-red-400":v===6?"text-blue-400":"text-slate-400"}`,children:N},N))}),g.jsx("div",{className:"grid grid-cols-7 gap-px bg-slate-100 rounded-xl overflow-hidden border border-slate-100",children:w.map(N=>{const v=N.getMonth()===r,y=v?I(N):[],x=s&&Ol(N,s),b=lu(N);return g.jsxs("button",{onClick:()=>v&&o(Ol(N,s)?null:N),className:`bg-white p-1 min-h-[80px] flex flex-col transition-colors ${v?"hover:bg-primary-50":"opacity-30 cursor-default"} ${x?"bg-primary-50 ring-2 ring-inset ring-primary-300":""}`,children:[g.jsx("span",{className:`w-6 h-6 flex items-center justify-center text-xs rounded-full mb-0.5 flex-shrink-0 ${b?"bg-primary-600 text-white font-bold":N.getDay()===0?"text-red-400":N.getDay()===6?"text-blue-400":"text-slate-700"}`,children:N.getDate()}),g.jsxs("div",{className:"w-full space-y-0.5",children:[y.slice(0,2).map((C,D)=>g.jsx("div",{className:`w-full truncate text-[9px] leading-[14px] px-0.5 rounded ${zB(C,_==null?void 0:_.uid)}`,children:C.title},D)),y.length>2&&g.jsxs("p",{className:"text-[8px] text-slate-400 px-0.5 leading-3",children:["+",y.length-2,"개 더"]})]})]},N.toISOString())})}),g.jsx(fm,{isOpen:!!s,onClose:()=>o(null),title:s?it(s,"M월 d일 (E) 할 일",{locale:Is}):"",children:A.length===0?g.jsx("p",{className:"text-center text-slate-400 py-6",children:"이 날 할 일이 없어요"}):g.jsx("div",{className:"space-y-2",children:A.map(N=>g.jsx(Js,{task:N,date:s,showActions:!1},N.id))})})]})}function qB(){const t=pi(),[e,n]=j.useState("one-time"),[r,i]=j.useState("all"),[s,o]=j.useState("all"),{currentUser:a}=Ln(),{tasks:l,categories:c}=xi(),d=new Date,f=j.useMemo(()=>{const m=l.filter(_=>!(_.type!==e||!_.isActive||r!=="all"&&(r==="me"&&_.assigneeId!==(a==null?void 0:a.uid)||r==="together"&&_.assigneeId!=="together"||r==="partner"&&(_.assigneeId===(a==null?void 0:a.uid)||_.assigneeId==="together"))||s!=="all"&&_.categoryId!==s));return e==="one-time"&&m.sort((_,S)=>{const P=nn(_.dueDate),R=nn(S.dueDate);return!P&&!R?0:P?R?P-R:-1:1}),m},[l,e,r,s,a==null?void 0:a.uid]);return g.jsxs(uu,{title:"태스크 목록",headerRight:g.jsxs("button",{onClick:()=>t("/tasks/new"),className:"flex items-center gap-1 px-3 py-1.5 bg-primary-600 text-white rounded-xl text-sm font-medium",children:[g.jsx(Mo,{size:16})," 추가"]}),children:[g.jsx("div",{className:"flex bg-slate-100 rounded-xl p-1 mb-4",children:[{key:"one-time",label:"일회성"},{key:"routine",label:"루틴"}].map(({key:m,label:_})=>g.jsx("button",{onClick:()=>n(m),className:`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${e===m?"bg-white text-slate-800 shadow-sm":"text-slate-500"}`,children:_},m))}),g.jsxs("div",{className:"flex gap-2 mb-4 overflow-x-auto pb-1",children:[g.jsx("div",{className:"flex items-center gap-1.5 flex-shrink-0",children:g.jsx(Vj,{size:14,className:"text-slate-400"})}),[{key:"all",label:"전체"},{key:"me",label:"나"},{key:"partner",label:"상대방"},{key:"together",label:"함께"}].map(({key:m,label:_})=>g.jsx("button",{onClick:()=>i(m),className:`px-3 py-1 rounded-full text-xs font-medium border flex-shrink-0 transition-colors ${r===m?"bg-primary-600 text-white border-primary-600":"bg-white text-slate-500 border-slate-200"}`,children:_},m)),g.jsx("div",{className:"w-px bg-slate-200 flex-shrink-0"}),g.jsx("button",{onClick:()=>o("all"),className:`px-3 py-1 rounded-full text-xs font-medium border flex-shrink-0 transition-colors ${s==="all"?"bg-slate-700 text-white border-slate-700":"bg-white text-slate-500 border-slate-200"}`,children:"전체 카테고리"}),c.map(m=>g.jsxs("button",{onClick:()=>o(m.id),className:`px-3 py-1 rounded-full text-xs font-medium border flex-shrink-0 transition-colors ${s===m.id?"text-white border-transparent":"bg-white text-slate-500 border-slate-200"}`,style:s===m.id?{backgroundColor:m.color}:{},children:[m.icon," ",m.name]},m.id))]}),f.length===0?g.jsxs("div",{className:"text-center py-16",children:[g.jsx("p",{className:"text-3xl mb-3",children:"📋"}),g.jsx("p",{className:"text-slate-500",children:"태스크가 없어요"}),g.jsxs("button",{onClick:()=>t("/tasks/new"),className:"mt-4 flex items-center gap-2 mx-auto px-4 py-2 bg-primary-600 text-white rounded-xl text-sm font-medium",children:[g.jsx(Mo,{size:16})," 태스크 추가"]})]}):g.jsx("div",{className:"space-y-2",children:f.map(m=>g.jsx(Js,{task:m,date:d},m.id))})]})}const WB=["daily","weekly","biweekly","monthly","quarterly","yearly"],rE={title:"",description:"",type:"routine",assigneeId:"together",categoryId:"",recurrence:{type:"weekly",daysOfWeek:[],dayOfMonth:1,startDate:it(new Date,"yyyy-MM-dd")},dueDate:"",dueTime:"",hasDueTime:!1};function iE(){const t=pi(),{id:e}=TR(),n=!!e&&e!=="new",{currentUser:r,userProfile:i,partnerProfile:s,familyId:o}=Ln(),{tasks:a,categories:l}=xi(),[c,d]=j.useState(rE),[f,m]=j.useState(!1),[_,S]=j.useState("");j.useEffect(()=>{var N,v;if(!n)return;const A=a.find(y=>y.id===e);if(!A)return;const L=(N=A.dueDate)!=null&&N.toDate?it(A.dueDate.toDate(),"yyyy-MM-dd"):A.dueDate||"";d({title:A.title||"",description:A.description||"",type:A.type||"routine",assigneeId:A.assigneeId||"together",categoryId:A.categoryId||"",recurrence:A.recurrence?{type:A.recurrence.type||"weekly",daysOfWeek:A.recurrence.daysOfWeek||[],dayOfMonth:A.recurrence.dayOfMonth||1,startDate:(v=A.recurrence.startDate)!=null&&v.toDate?it(A.recurrence.startDate.toDate(),"yyyy-MM-dd"):A.recurrence.startDate||it(new Date,"yyyy-MM-dd")}:rE.recurrence,dueDate:L,dueTime:A.dueTime||"",hasDueTime:!!A.dueTime})},[e,a]);function P(A,L){d(N=>({...N,[A]:L}))}function R(A,L){d(N=>({...N,recurrence:{...N.recurrence,[A]:L}}))}function T(A){const L=c.recurrence.daysOfWeek||[],N=L.includes(A)?L.filter(v=>v!==A):[...L,A].sort();R("daysOfWeek",N)}async function w(A){if(A.preventDefault(),!c.title.trim()){S("제목을 입력해주세요.");return}if(c.type==="routine"&&["weekly","biweekly"].includes(c.recurrence.type)&&c.recurrence.daysOfWeek.length===0){S("요일을 하나 이상 선택해주세요.");return}S(""),m(!0);try{const L={title:c.title.trim(),description:c.description.trim(),type:c.type,assigneeId:c.assigneeId,categoryId:c.categoryId||null,createdBy:r.uid};if(c.type==="routine"?(L.recurrence={...c.recurrence},L.dueDate=null,L.dueTime=null):(L.dueDate=c.dueDate||null,L.dueTime=c.hasDueTime&&c.dueTime?c.dueTime:null,L.recurrence=null),n)await oj(o,e,L);else{await sj(o,L);const N=[...(i==null?void 0:i.fcmTokens)||[],...(s==null?void 0:s.fcmTokens)||[]];N.length>0&&Pb({tokens:N,title:"📋 새 태스크가 추가됐어요!",body:`"${L.title}" 태스크가 추가됐습니다.`})}t(-1)}catch(L){S("저장 중 오류가 발생했습니다."),console.error(L)}finally{m(!1)}}const I=[{value:r==null?void 0:r.uid,label:`${(i==null?void 0:i.displayName)||"나"} (나)`},{value:s==null?void 0:s.id,label:`${(s==null?void 0:s.displayName)||"상대방"} (상대방)`},{value:"together",label:"👫 함께"}].filter(A=>A.value);return g.jsxs("div",{className:"min-h-screen bg-slate-50",children:[g.jsxs("header",{className:"sticky top-0 z-30 bg-white border-b border-slate-100 px-4 h-14 flex items-center gap-3",children:[g.jsx("button",{onClick:()=>t(-1),className:"p-1.5 rounded-lg hover:bg-slate-100",children:g.jsx(Cb,{size:22,className:"text-slate-600"})}),g.jsx("h1",{className:"text-lg font-bold text-slate-800",children:n?"태스크 수정":"새 태스크"})]}),g.jsxs("form",{onSubmit:w,className:"px-4 py-4 space-y-5 pb-32",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1.5",children:"제목 *"}),g.jsx("input",{type:"text",value:c.title,onChange:A=>P("title",A.target.value),placeholder:"태스크 이름",className:"w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1.5",children:"메모"}),g.jsx("textarea",{value:c.description,onChange:A=>P("description",A.target.value),placeholder:"추가 설명 (선택)",rows:2,className:"w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 resize-none"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1.5",children:"유형"}),g.jsx("div",{className:"flex bg-slate-100 rounded-xl p-1",children:[{v:"routine",l:"🔁 루틴"},{v:"one-time",l:"📌 일회성"}].map(({v:A,l:L})=>g.jsx("button",{type:"button",onClick:()=>P("type",A),className:`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${c.type===A?"bg-white text-slate-800 shadow-sm":"text-slate-500"}`,children:L},A))})]}),c.type==="routine"&&g.jsxs("div",{className:"space-y-4 bg-white rounded-2xl p-4 border border-slate-100",children:[g.jsx("h3",{className:"text-sm font-semibold text-slate-700",children:"반복 설정"}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs text-slate-500 mb-1.5",children:"반복 주기"}),g.jsx("div",{className:"grid grid-cols-3 gap-2",children:WB.map(A=>g.jsx("button",{type:"button",onClick:()=>R("type",A),className:`py-2 rounded-xl text-sm font-medium border transition-colors ${c.recurrence.type===A?"bg-primary-600 text-white border-primary-600":"bg-white text-slate-600 border-slate-200"}`,children:zb[A]},A))})]}),["weekly","biweekly"].includes(c.recurrence.type)&&g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs text-slate-500 mb-1.5",children:"요일 선택"}),g.jsx("div",{className:"flex gap-2",children:NB.map((A,L)=>g.jsx("button",{type:"button",onClick:()=>T(L),className:`flex-1 py-2 rounded-xl text-sm font-medium border transition-colors ${(c.recurrence.daysOfWeek||[]).includes(L)?"bg-primary-600 text-white border-primary-600":"bg-white border-slate-200 text-slate-600"}`,children:A},L))})]}),c.recurrence.type==="monthly"&&g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs text-slate-500 mb-1.5",children:"매달 몇 일"}),g.jsx("input",{type:"number",min:1,max:31,value:c.recurrence.dayOfMonth,onChange:A=>R("dayOfMonth",Number(A.target.value)),className:"w-24 px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs text-slate-500 mb-1.5",children:"시작일"}),g.jsx("input",{type:"date",value:c.recurrence.startDate,onChange:A=>R("startDate",A.target.value),className:"px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400"})]})]}),c.type==="one-time"&&g.jsxs("div",{className:"space-y-3 bg-white rounded-2xl p-4 border border-slate-100",children:[g.jsx("h3",{className:"text-sm font-semibold text-slate-700",children:"마감일 설정"}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs text-slate-500 mb-1.5",children:"날짜 (선택)"}),g.jsx("input",{type:"date",value:c.dueDate,onChange:A=>P("dueDate",A.target.value),className:"px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400"})]}),c.dueDate&&g.jsxs("div",{children:[g.jsxs("label",{className:"flex items-center gap-2 text-xs text-slate-500 mb-1.5 cursor-pointer",children:[g.jsx("input",{type:"checkbox",checked:c.hasDueTime,onChange:A=>P("hasDueTime",A.target.checked),className:"w-4 h-4 rounded accent-primary-600"}),"시간 설정"]}),c.hasDueTime&&g.jsx("input",{type:"time",value:c.dueTime,onChange:A=>P("dueTime",A.target.value),className:"px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1.5",children:"담당자"}),g.jsx("div",{className:"space-y-2",children:I.map(({value:A,label:L})=>g.jsxs("button",{type:"button",onClick:()=>P("assigneeId",A),className:`w-full flex items-center px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${c.assigneeId===A?"bg-primary-50 border-primary-400 text-primary-700":"bg-white border-slate-200 text-slate-700"}`,children:[c.assigneeId===A&&g.jsx("span",{className:"mr-2 text-primary-500",children:"✓"}),L]},A))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1.5",children:"카테고리"}),g.jsxs("div",{className:"flex flex-wrap gap-2",children:[g.jsx("button",{type:"button",onClick:()=>P("categoryId",""),className:`px-3 py-1.5 rounded-xl text-sm border transition-colors ${c.categoryId?"bg-white border-slate-200 text-slate-600":"bg-slate-700 text-white border-slate-700"}`,children:"없음"}),l.map(A=>g.jsxs("button",{type:"button",onClick:()=>P("categoryId",A.id),className:`px-3 py-1.5 rounded-xl text-sm border transition-colors font-medium ${c.categoryId===A.id?"text-white border-transparent":"bg-white border-slate-200 text-slate-600"}`,style:c.categoryId===A.id?{backgroundColor:A.color}:{},children:[A.icon," ",A.name]},A.id))]})]}),_&&g.jsx("p",{className:"text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl",children:_}),g.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100",children:g.jsx("button",{type:"submit",disabled:f,className:"w-full py-4 bg-primary-600 text-white rounded-xl font-semibold text-base hover:bg-primary-700 active:scale-[0.98] transition-all disabled:opacity-60",children:f?"저장 중...":n?"수정 완료":"태스크 추가"})})]})]})}function KB(){const[t,e]=j.useState("all"),{currentUser:n,userProfile:r,partnerProfile:i}=Ln(),{completions:s,getCategoryById:o}=xi(),a=j.useMemo(()=>[...s].sort((d,f)=>{var S,P;const m=((S=nn(d.completedAt))==null?void 0:S.getTime())||0;return(((P=nn(f.completedAt))==null?void 0:P.getTime())||0)-m}).filter(d=>t==="me"?d.completedBy===(n==null?void 0:n.uid):t==="partner"?d.completedBy!==(n==null?void 0:n.uid):!0),[s,t,n==null?void 0:n.uid]),l=j.useMemo(()=>{const c={};return a.forEach(d=>{const f=nn(d.completedAt);if(!f)return;const m=it(f,"yyyy-MM");c[m]||(c[m]={label:it(f,"yyyy년 M월",{locale:Is}),items:[]}),c[m].items.push(d)}),Object.values(c)},[a]);return g.jsxs(uu,{title:"히스토리",children:[g.jsx("div",{className:"flex gap-2 mb-4",children:[{key:"all",label:"전체"},{key:"me",label:`${(r==null?void 0:r.displayName)||"나"}`},{key:"partner",label:`${(i==null?void 0:i.displayName)||"상대방"}`}].map(({key:c,label:d})=>g.jsx("button",{onClick:()=>e(c),className:`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${t===c?"bg-primary-600 text-white border-primary-600":"bg-white text-slate-500 border-slate-200"}`,children:d},c))}),l.length===0?g.jsxs("div",{className:"text-center py-16",children:[g.jsx("p",{className:"text-4xl mb-3",children:"📝"}),g.jsx("p",{className:"text-slate-500",children:"완료 기록이 없어요"})]}):g.jsx("div",{className:"space-y-6",children:l.map(({label:c,items:d})=>g.jsxs("section",{children:[g.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[g.jsx("h3",{className:"text-sm font-bold text-slate-600",children:c}),g.jsxs("span",{className:"text-xs text-slate-400",children:[d.length,"개"]})]}),g.jsx("div",{className:"space-y-2",children:d.map(f=>{const m=nn(f.completedAt),_=f.completedBy===(n==null?void 0:n.uid),S=o(f.categoryId);return g.jsxs("div",{className:"bg-white rounded-xl border border-slate-100 px-4 py-3 flex items-start gap-3",children:[g.jsx("span",{className:"text-lg flex-shrink-0 mt-0.5",children:(S==null?void 0:S.icon)||"✅"}),g.jsxs("div",{className:"flex-1 min-w-0",children:[g.jsx("p",{className:"font-medium text-slate-800 truncate",children:f.taskTitle}),g.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[g.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full font-medium ${_?"bg-blue-100 text-blue-700":"bg-pink-100 text-pink-700"}`,children:f.completedByName}),f.isAssist&&g.jsx("span",{className:"text-xs text-slate-400",children:"도움"}),S&&g.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full font-medium",style:{backgroundColor:S.color+"20",color:S.color},children:S.name})]})]}),g.jsx("p",{className:"text-xs text-slate-400 flex-shrink-0 mt-0.5",children:m?it(m,"M/d HH:mm"):""})]},f.id)})})]},c))})]})}function GB(){const t=pi(),{currentUser:e,userProfile:n,partnerProfile:r,familyId:i}=Ln(),{categories:s}=xi(),[o,a]=j.useState(""),[l,c]=j.useState(!1),[d,f]=j.useState(""),[m,_]=j.useState(""),[S,P]=j.useState(!1),[R,T]=j.useState(!1),[w,I]=j.useState(""),[A,L]=j.useState("📌"),[N,v]=j.useState("#6b7280"),[y,x]=j.useState(!1);async function b(){e&&await Y4(e.uid,{notificationsEnabled:!(n!=null&&n.notificationsEnabled)})}async function C(ue){ue.preventDefault(),f(""),_(""),c(!0);try{const{getDocs:Xt,query:K,collection:X,where:ee}=await hm(async()=>{const{getDocs:zt,query:ln,collection:Ih,where:Th}=await Promise.resolve().then(()=>mF);return{getDocs:zt,query:ln,collection:Ih,where:Th}},void 0),{db:Ie}=await hm(async()=>{const{db:zt}=await Promise.resolve().then(()=>W4);return{db:zt}},void 0),fe=K(X(Ie,"users"),ee("email","==",o.trim())),Pe=await Xt(fe);if(Pe.empty){f("해당 이메일로 가입된 사용자가 없어요.");return}const Ut=Pe.docs[0],Bt=Ut.data();if(Ut.id===e.uid){f("자신의 이메일은 입력할 수 없어요.");return}if(Bt.familyId){f("상대방이 이미 다른 가족과 연결되어 있어요.");return}await Z4(e.uid,(n==null?void 0:n.displayName)||"",Ut.id,Bt.displayName||""),_(`${Bt.displayName}님과 연결됐어요! 🎉`),a(""),setTimeout(()=>P(!1),1500)}catch{f("연결 중 오류가 발생했습니다.")}finally{c(!1)}}async function D(ue){if(ue.preventDefault(),!!w.trim()){x(!0);try{await pj(i,{name:w.trim(),icon:A,color:N,order:s.length,isDefault:!1}),I(""),T(!1)}finally{x(!1)}}}async function k(ue){window.confirm("이 카테고리를 삭제할까요?")&&await mj(i,ue)}const ot=["#3b82f6","#f97316","#22c55e","#a855f7","#6b7280","#ef4444","#eab308","#06b6d4"],Fn=["🧹","🍳","🛒","🔧","📌","🧺","🐶","🌿","🔑","💊","📦","🚗"];return g.jsxs(uu,{title:"설정",children:[g.jsxs("div",{className:"space-y-4",children:[g.jsxs("section",{className:"bg-white rounded-2xl border border-slate-100 overflow-hidden",children:[g.jsx("div",{className:"px-4 py-3 border-b border-slate-50",children:g.jsx("h2",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wide",children:"프로필"})}),g.jsx("div",{className:"p-4",children:g.jsxs("div",{className:"flex items-center gap-4",children:[g.jsx("div",{className:"w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center text-2xl",children:"👤"}),g.jsxs("div",{children:[g.jsx("p",{className:"font-bold text-slate-800",children:(n==null?void 0:n.displayName)||"–"}),g.jsx("p",{className:"text-sm text-slate-400",children:n==null?void 0:n.email})]})]})}),r&&g.jsx("div",{className:"px-4 pb-4",children:g.jsxs("div",{className:"flex items-center gap-3 bg-slate-50 rounded-xl p-3",children:[g.jsx("div",{className:"w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-sm",children:"👤"}),g.jsxs("div",{children:[g.jsx("p",{className:"text-sm font-medium text-slate-700",children:r.displayName}),g.jsx("p",{className:"text-xs text-slate-400",children:"파트너"})]})]})})]}),!i&&g.jsxs("section",{className:"bg-amber-50 border border-amber-200 rounded-2xl p-4",children:[g.jsx("p",{className:"text-sm font-medium text-amber-800 mb-2",children:"⚠️ 파트너와 아직 연결되지 않았어요"}),g.jsx("p",{className:"text-xs text-amber-600 mb-3",children:"파트너가 먼저 앱에 가입한 후, 이메일로 연결하세요."}),g.jsxs("button",{onClick:()=>P(!0),className:"flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-xl text-sm font-medium",children:[g.jsx(Bj,{size:16})," 파트너 연결하기"]})]}),g.jsxs("section",{className:"bg-white rounded-2xl border border-slate-100 overflow-hidden",children:[g.jsx("div",{className:"px-4 py-3 border-b border-slate-50",children:g.jsx("h2",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wide",children:"알림"})}),g.jsxs("button",{onClick:b,className:"w-full flex items-center justify-between px-4 py-4 hover:bg-slate-50",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[n!=null&&n.notificationsEnabled?g.jsx(Pj,{size:20,className:"text-primary-600"}):g.jsx(bj,{size:20,className:"text-slate-400"}),g.jsxs("div",{className:"text-left",children:[g.jsx("p",{className:"text-sm font-medium text-slate-800",children:"푸시 알림"}),g.jsx("p",{className:"text-xs text-slate-400",children:"태스크 완료/추가 시 알림 받기"})]})]}),g.jsx("div",{className:`w-12 h-6 rounded-full transition-colors ${n!=null&&n.notificationsEnabled?"bg-primary-600":"bg-slate-300"}`,children:g.jsx("div",{className:`w-5 h-5 bg-white rounded-full shadow-sm mt-0.5 transition-transform ${n!=null&&n.notificationsEnabled?"translate-x-6":"translate-x-0.5"}`})})]})]}),i&&g.jsxs("section",{className:"bg-white rounded-2xl border border-slate-100 overflow-hidden",children:[g.jsxs("div",{className:"px-4 py-3 border-b border-slate-50 flex items-center justify-between",children:[g.jsx("h2",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wide",children:"카테고리"}),g.jsxs("button",{onClick:()=>T(!0),className:"flex items-center gap-1 text-xs text-primary-600 font-medium",children:[g.jsx(Mo,{size:14})," 추가"]})]}),g.jsx("div",{className:"divide-y divide-slate-50",children:s.map(ue=>g.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("span",{className:"w-8 h-8 rounded-full flex items-center justify-center text-sm",style:{backgroundColor:ue.color+"20"},children:ue.icon}),g.jsx("span",{className:"text-sm font-medium text-slate-800",children:ue.name})]}),!ue.isDefault&&g.jsx("button",{onClick:()=>k(ue.id),className:"p-1.5 text-slate-400 hover:text-red-500 rounded-lg",children:g.jsx(Db,{size:15})})]},ue.id))})]}),g.jsxs("button",{onClick:()=>t("/history"),className:"w-full flex items-center justify-between bg-white rounded-2xl border border-slate-100 px-4 py-4 hover:bg-slate-50",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx(Oj,{size:20,className:"text-slate-500"}),g.jsx("span",{className:"text-sm font-medium text-slate-800",children:"완료 히스토리"})]}),g.jsx(Nb,{size:18,className:"text-slate-300"})]}),g.jsxs("button",{onClick:()=>H4(),className:"w-full flex items-center gap-3 bg-white rounded-2xl border border-slate-100 px-4 py-4 text-red-500 hover:bg-red-50",children:[g.jsx(Lj,{size:20}),g.jsx("span",{className:"text-sm font-medium",children:"로그아웃"})]})]}),g.jsx(fm,{isOpen:S,onClose:()=>P(!1),title:"파트너 연결",children:g.jsxs("form",{onSubmit:C,className:"space-y-4",children:[g.jsx("p",{className:"text-sm text-slate-500",children:"파트너의 이메일을 입력하세요. 상대방이 먼저 앱에 가입되어 있어야 합니다."}),g.jsx("input",{type:"email",value:o,onChange:ue=>a(ue.target.value),placeholder:"partner@email.com",className:"w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400",required:!0}),d&&g.jsx("p",{className:"text-red-500 text-sm",children:d}),m&&g.jsx("p",{className:"text-green-600 text-sm",children:m}),g.jsx("button",{type:"submit",disabled:l,className:"w-full py-3 bg-primary-600 text-white rounded-xl font-medium disabled:opacity-60",children:l?"연결 중...":"연결하기"})]})}),g.jsx(fm,{isOpen:R,onClose:()=>T(!1),title:"카테고리 추가",children:g.jsxs("form",{onSubmit:D,className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1.5",children:"이름"}),g.jsx("input",{type:"text",value:w,onChange:ue=>I(ue.target.value),placeholder:"카테고리 이름",className:"w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1.5",children:"아이콘"}),g.jsx("div",{className:"flex flex-wrap gap-2",children:Fn.map(ue=>g.jsx("button",{type:"button",onClick:()=>L(ue),className:`w-10 h-10 rounded-xl text-xl flex items-center justify-center border-2 transition-colors ${A===ue?"border-primary-400 bg-primary-50":"border-transparent hover:bg-slate-100"}`,children:ue},ue))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1.5",children:"색상"}),g.jsx("div",{className:"flex flex-wrap gap-2",children:ot.map(ue=>g.jsx("button",{type:"button",onClick:()=>v(ue),className:`w-8 h-8 rounded-full border-2 transition-all ${N===ue?"border-slate-800 scale-110":"border-transparent"}`,style:{backgroundColor:ue}},ue))})]}),g.jsx("button",{type:"submit",disabled:y||!w.trim(),className:"w-full py-3 bg-primary-600 text-white rounded-xl font-medium disabled:opacity-60",children:y?"추가 중...":"카테고리 추가"})]})})]})}function HB(){const{currentUser:t,familyId:e,isLoading:n}=Ln();return gj(e),vj(),n?g.jsx(kb,{fullScreen:!0}):t?g.jsxs(UR,{children:[g.jsx(Bn,{path:"/",element:g.jsx(FB,{})}),g.jsx(Bn,{path:"/calendar",element:g.jsx($B,{})}),g.jsx(Bn,{path:"/tasks",element:g.jsx(qB,{})}),g.jsx(Bn,{path:"/tasks/new",element:g.jsx(iE,{})}),g.jsx(Bn,{path:"/tasks/:id/edit",element:g.jsx(iE,{})}),g.jsx(Bn,{path:"/history",element:g.jsx(KB,{})}),g.jsx(Bn,{path:"/settings",element:g.jsx(GB,{})}),g.jsx(Bn,{path:"*",element:g.jsx(FR,{to:"/",replace:!0})})]}):g.jsx($j,{})}function QB(){return rj(),g.jsxs(HR,{children:[g.jsx(HB,{}),g.jsx(zj,{})]})}yT(document.getElementById("root")).render(g.jsx(j.StrictMode,{children:g.jsx(QB,{})}));
