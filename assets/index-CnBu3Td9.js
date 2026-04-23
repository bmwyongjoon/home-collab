function yb(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _b(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var iE={exports:{}},wd={},sE={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nl=Symbol.for("react.element"),vb=Symbol.for("react.portal"),wb=Symbol.for("react.fragment"),Eb=Symbol.for("react.strict_mode"),Ib=Symbol.for("react.profiler"),Tb=Symbol.for("react.provider"),Sb=Symbol.for("react.context"),xb=Symbol.for("react.forward_ref"),Ab=Symbol.for("react.suspense"),Pb=Symbol.for("react.memo"),bb=Symbol.for("react.lazy"),C_=Symbol.iterator;function Rb(t){return t===null||typeof t!="object"?null:(t=C_&&t[C_]||t["@@iterator"],typeof t=="function"?t:null)}var oE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},aE=Object.assign,lE={};function No(t,e,n){this.props=t,this.context=e,this.refs=lE,this.updater=n||oE}No.prototype.isReactComponent={};No.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};No.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function uE(){}uE.prototype=No.prototype;function hm(t,e,n){this.props=t,this.context=e,this.refs=lE,this.updater=n||oE}var fm=hm.prototype=new uE;fm.constructor=hm;aE(fm,No.prototype);fm.isPureReactComponent=!0;var N_=Array.isArray,cE=Object.prototype.hasOwnProperty,pm={current:null},dE={key:!0,ref:!0,__self:!0,__source:!0};function hE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)cE.call(e,r)&&!dE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Nl,type:t,key:s,ref:o,props:i,_owner:pm.current}}function kb(t,e){return{$$typeof:Nl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function mm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Nl}function Cb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var D_=/\/+/g;function Wh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Cb(""+t.key):e.toString(36)}function Xu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Nl:case vb:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Wh(o,0):r,N_(i)?(n="",t!=null&&(n=t.replace(D_,"$&/")+"/"),Xu(i,e,n,"",function(c){return c})):i!=null&&(mm(i)&&(i=kb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(D_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",N_(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Wh(s,a);o+=Xu(s,e,n,l,i)}else if(l=Rb(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Wh(s,a++),o+=Xu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Au(t,e,n){if(t==null)return t;var r=[],i=0;return Xu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Nb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bt={current:null},Zu={transition:null},Db={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:Zu,ReactCurrentOwner:pm};function fE(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Au,forEach:function(t,e,n){Au(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Au(t,function(){e++}),e},toArray:function(t){return Au(t,function(e){return e})||[]},only:function(t){if(!mm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=No;re.Fragment=wb;re.Profiler=Ib;re.PureComponent=hm;re.StrictMode=Eb;re.Suspense=Ab;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Db;re.act=fE;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=aE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=pm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)cE.call(e,l)&&!dE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Nl,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:Sb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Tb,_context:t},t.Consumer=t};re.createElement=hE;re.createFactory=function(t){var e=hE.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:xb,render:t}};re.isValidElement=mm;re.lazy=function(t){return{$$typeof:bb,_payload:{_status:-1,_result:t},_init:Nb}};re.memo=function(t,e){return{$$typeof:Pb,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Zu.transition;Zu.transition={};try{t()}finally{Zu.transition=e}};re.unstable_act=fE;re.useCallback=function(t,e){return bt.current.useCallback(t,e)};re.useContext=function(t){return bt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return bt.current.useDeferredValue(t)};re.useEffect=function(t,e){return bt.current.useEffect(t,e)};re.useId=function(){return bt.current.useId()};re.useImperativeHandle=function(t,e,n){return bt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return bt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return bt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return bt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return bt.current.useReducer(t,e,n)};re.useRef=function(t){return bt.current.useRef(t)};re.useState=function(t){return bt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return bt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return bt.current.useTransition()};re.version="18.3.1";sE.exports=re;var j=sE.exports;const Ta=_b(j),Vb=yb({__proto__:null,default:Ta},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ob=j,Mb=Symbol.for("react.element"),Lb=Symbol.for("react.fragment"),Fb=Object.prototype.hasOwnProperty,jb=Ob.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ub={key:!0,ref:!0,__self:!0,__source:!0};function pE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Fb.call(e,r)&&!Ub.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Mb,type:t,key:s,ref:o,props:i,_owner:jb.current}}wd.Fragment=Lb;wd.jsx=pE;wd.jsxs=pE;iE.exports=wd;var E=iE.exports,mE={exports:{}},Qt={},gE={exports:{}},yE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(K,X){var ee=K.length;K.push(X);e:for(;0<ee;){var Ie=ee-1>>>1,fe=K[Ie];if(0<i(fe,X))K[Ie]=X,K[ee]=fe,ee=Ie;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var X=K[0],ee=K.pop();if(ee!==X){K[0]=ee;e:for(var Ie=0,fe=K.length,be=fe>>>1;Ie<be;){var jt=2*(Ie+1)-1,Ut=K[jt],Bt=jt+1,an=K[Bt];if(0>i(Ut,ee))Bt<fe&&0>i(an,Ut)?(K[Ie]=an,K[Bt]=ee,Ie=Bt):(K[Ie]=Ut,K[jt]=ee,Ie=jt);else if(Bt<fe&&0>i(an,ee))K[Ie]=an,K[Bt]=ee,Ie=Bt;else break e}}return X}function i(K,X){var ee=K.sortIndex-X.sortIndex;return ee!==0?ee:K.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,m=3,_=!1,x=!1,S=!1,k=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(K){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=K)r(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function P(K){if(S=!1,I(K),!x)if(n(l)!==null)x=!0,ue(L);else{var X=n(c);X!==null&&Jt(P,X.startTime-K)}}function L(K,X){x=!1,S&&(S=!1,v(w),w=-1),_=!0;var ee=m;try{for(I(X),f=n(l);f!==null&&(!(f.expirationTime>X)||K&&!C());){var Ie=f.callback;if(typeof Ie=="function"){f.callback=null,m=f.priorityLevel;var fe=Ie(f.expirationTime<=X);X=t.unstable_now(),typeof fe=="function"?f.callback=fe:f===n(l)&&r(l),I(X)}else r(l);f=n(l)}if(f!==null)var be=!0;else{var jt=n(c);jt!==null&&Jt(P,jt.startTime-X),be=!1}return be}finally{f=null,m=ee,_=!1}}var F=!1,T=null,w=-1,A=5,b=-1;function C(){return!(t.unstable_now()-b<A)}function D(){if(T!==null){var K=t.unstable_now();b=K;var X=!0;try{X=T(!0,K)}finally{X?R():(F=!1,T=null)}}else F=!1}var R;if(typeof g=="function")R=function(){g(D)};else if(typeof MessageChannel<"u"){var kt=new MessageChannel,Ln=kt.port2;kt.port1.onmessage=D,R=function(){Ln.postMessage(null)}}else R=function(){k(D,0)};function ue(K){T=K,F||(F=!0,R())}function Jt(K,X){w=k(function(){K(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){x||_||(x=!0,ue(L))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(K){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var ee=m;m=X;try{return K()}finally{m=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,X){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ee=m;m=K;try{return X()}finally{m=ee}},t.unstable_scheduleCallback=function(K,X,ee){var Ie=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Ie+ee:Ie):ee=Ie,K){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=ee+fe,K={id:d++,callback:X,priorityLevel:K,startTime:ee,expirationTime:fe,sortIndex:-1},ee>Ie?(K.sortIndex=ee,e(c,K),n(l)===null&&K===n(c)&&(S?(v(w),w=-1):S=!0,Jt(P,ee-Ie))):(K.sortIndex=fe,e(l,K),x||_||(x=!0,ue(L))),K},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(K){var X=m;return function(){var ee=m;m=X;try{return K.apply(this,arguments)}finally{m=ee}}}})(yE);gE.exports=yE;var Bb=gE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zb=j,Kt=Bb;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _E=new Set,Ya={};function us(t,e){so(t,e),so(t+"Capture",e)}function so(t,e){for(Ya[t]=e,t=0;t<e.length;t++)_E.add(e[t])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ff=Object.prototype.hasOwnProperty,$b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,V_={},O_={};function qb(t){return Ff.call(O_,t)?!0:Ff.call(V_,t)?!1:$b.test(t)?O_[t]=!0:(V_[t]=!0,!1)}function Wb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Kb(t,e,n,r){if(e===null||typeof e>"u"||Wb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Rt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ct[t]=new Rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ct[e]=new Rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ct[t]=new Rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ct[t]=new Rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ct[t]=new Rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ct[t]=new Rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ct[t]=new Rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ct[t]=new Rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ct[t]=new Rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var gm=/[\-:]([a-z])/g;function ym(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gm,ym);ct[e]=new Rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gm,ym);ct[e]=new Rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gm,ym);ct[e]=new Rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ct[t]=new Rt(t,1,!1,t.toLowerCase(),null,!1,!1)});ct.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ct[t]=new Rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function _m(t,e,n,r){var i=ct.hasOwnProperty(e)?ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Kb(e,n,i,r)&&(n=null),r||i===null?qb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var lr=zb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pu=Symbol.for("react.element"),Ds=Symbol.for("react.portal"),Vs=Symbol.for("react.fragment"),vm=Symbol.for("react.strict_mode"),jf=Symbol.for("react.profiler"),vE=Symbol.for("react.provider"),wE=Symbol.for("react.context"),wm=Symbol.for("react.forward_ref"),Uf=Symbol.for("react.suspense"),Bf=Symbol.for("react.suspense_list"),Em=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),EE=Symbol.for("react.offscreen"),M_=Symbol.iterator;function ca(t){return t===null||typeof t!="object"?null:(t=M_&&t[M_]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Object.assign,Kh;function Sa(t){if(Kh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Kh=e&&e[1]||""}return`
`+Kh+t}var Gh=!1;function Hh(t,e){if(!t||Gh)return"";Gh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Gh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Sa(t):""}function Gb(t){switch(t.tag){case 5:return Sa(t.type);case 16:return Sa("Lazy");case 13:return Sa("Suspense");case 19:return Sa("SuspenseList");case 0:case 2:case 15:return t=Hh(t.type,!1),t;case 11:return t=Hh(t.type.render,!1),t;case 1:return t=Hh(t.type,!0),t;default:return""}}function zf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vs:return"Fragment";case Ds:return"Portal";case jf:return"Profiler";case vm:return"StrictMode";case Uf:return"Suspense";case Bf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wE:return(t.displayName||"Context")+".Consumer";case vE:return(t._context.displayName||"Context")+".Provider";case wm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Em:return e=t.displayName||null,e!==null?e:zf(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return zf(t(e))}catch{}}return null}function Hb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zf(e);case 8:return e===vm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function IE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qb(t){var e=IE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bu(t){t._valueTracker||(t._valueTracker=Qb(t))}function TE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=IE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ic(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $f(t,e){var n=e.checked;return Le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function L_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function SE(t,e){e=e.checked,e!=null&&_m(t,"checked",e,!1)}function qf(t,e){SE(t,e);var n=Yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wf(t,e.type,Yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function F_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wf(t,e,n){(e!=="number"||Ic(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xa=Array.isArray;function Gs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Kf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function j_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(xa(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yr(n)}}function xE(t,e){var n=Yr(e.value),r=Yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function U_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function AE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?AE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ru,PE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ru=Ru||document.createElement("div"),Ru.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ru.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ja(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yb=["Webkit","ms","Moz","O"];Object.keys(Va).forEach(function(t){Yb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Va[e]=Va[t]})});function bE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Va.hasOwnProperty(t)&&Va[t]?(""+e).trim():e+"px"}function RE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Jb=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hf(t,e){if(e){if(Jb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Qf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yf=null;function Im(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jf=null,Hs=null,Qs=null;function B_(t){if(t=Ol(t)){if(typeof Jf!="function")throw Error(z(280));var e=t.stateNode;e&&(e=xd(e),Jf(t.stateNode,t.type,e))}}function kE(t){Hs?Qs?Qs.push(t):Qs=[t]:Hs=t}function CE(){if(Hs){var t=Hs,e=Qs;if(Qs=Hs=null,B_(t),e)for(t=0;t<e.length;t++)B_(e[t])}}function NE(t,e){return t(e)}function DE(){}var Qh=!1;function VE(t,e,n){if(Qh)return t(e,n);Qh=!0;try{return NE(t,e,n)}finally{Qh=!1,(Hs!==null||Qs!==null)&&(DE(),CE())}}function Xa(t,e){var n=t.stateNode;if(n===null)return null;var r=xd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Xf=!1;if(Zn)try{var da={};Object.defineProperty(da,"passive",{get:function(){Xf=!0}}),window.addEventListener("test",da,da),window.removeEventListener("test",da,da)}catch{Xf=!1}function Xb(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Oa=!1,Tc=null,Sc=!1,Zf=null,Zb={onError:function(t){Oa=!0,Tc=t}};function e1(t,e,n,r,i,s,o,a,l){Oa=!1,Tc=null,Xb.apply(Zb,arguments)}function t1(t,e,n,r,i,s,o,a,l){if(e1.apply(this,arguments),Oa){if(Oa){var c=Tc;Oa=!1,Tc=null}else throw Error(z(198));Sc||(Sc=!0,Zf=c)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function OE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function z_(t){if(cs(t)!==t)throw Error(z(188))}function n1(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return z_(i),t;if(s===r)return z_(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function ME(t){return t=n1(t),t!==null?LE(t):null}function LE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=LE(t);if(e!==null)return e;t=t.sibling}return null}var FE=Kt.unstable_scheduleCallback,$_=Kt.unstable_cancelCallback,r1=Kt.unstable_shouldYield,i1=Kt.unstable_requestPaint,ze=Kt.unstable_now,s1=Kt.unstable_getCurrentPriorityLevel,Tm=Kt.unstable_ImmediatePriority,jE=Kt.unstable_UserBlockingPriority,xc=Kt.unstable_NormalPriority,o1=Kt.unstable_LowPriority,UE=Kt.unstable_IdlePriority,Ed=null,Pn=null;function a1(t){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(Ed,t,void 0,(t.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:c1,l1=Math.log,u1=Math.LN2;function c1(t){return t>>>=0,t===0?32:31-(l1(t)/u1|0)|0}var ku=64,Cu=4194304;function Aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ac(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Aa(a):(s&=o,s!==0&&(r=Aa(s)))}else o=n&~i,o!==0?r=Aa(o):s!==0&&(r=Aa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-fn(e),i=1<<n,r|=t[n],e&=~i;return r}function d1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function h1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-fn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=d1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ep(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function BE(){var t=ku;return ku<<=1,!(ku&4194240)&&(ku=64),t}function Yh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Dl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-fn(e),t[e]=n}function f1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-fn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Sm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-fn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ge=0;function zE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $E,xm,qE,WE,KE,tp=!1,Nu=[],Ur=null,Br=null,zr=null,Za=new Map,el=new Map,Ar=[],p1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function q_(t,e){switch(t){case"focusin":case"focusout":Ur=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":Za.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(e.pointerId)}}function ha(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ol(e),e!==null&&xm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function m1(t,e,n,r,i){switch(e){case"focusin":return Ur=ha(Ur,t,e,n,r,i),!0;case"dragenter":return Br=ha(Br,t,e,n,r,i),!0;case"mouseover":return zr=ha(zr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Za.set(s,ha(Za.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,el.set(s,ha(el.get(s)||null,t,e,n,r,i)),!0}return!1}function GE(t){var e=Li(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=OE(n),e!==null){t.blockedOn=e,KE(t.priority,function(){qE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ec(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=np(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Yf=r,n.target.dispatchEvent(r),Yf=null}else return e=Ol(n),e!==null&&xm(e),t.blockedOn=n,!1;e.shift()}return!0}function W_(t,e,n){ec(t)&&n.delete(e)}function g1(){tp=!1,Ur!==null&&ec(Ur)&&(Ur=null),Br!==null&&ec(Br)&&(Br=null),zr!==null&&ec(zr)&&(zr=null),Za.forEach(W_),el.forEach(W_)}function fa(t,e){t.blockedOn===e&&(t.blockedOn=null,tp||(tp=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,g1)))}function tl(t){function e(i){return fa(i,t)}if(0<Nu.length){fa(Nu[0],t);for(var n=1;n<Nu.length;n++){var r=Nu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ur!==null&&fa(Ur,t),Br!==null&&fa(Br,t),zr!==null&&fa(zr,t),Za.forEach(e),el.forEach(e),n=0;n<Ar.length;n++)r=Ar[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ar.length&&(n=Ar[0],n.blockedOn===null);)GE(n),n.blockedOn===null&&Ar.shift()}var Ys=lr.ReactCurrentBatchConfig,Pc=!0;function y1(t,e,n,r){var i=ge,s=Ys.transition;Ys.transition=null;try{ge=1,Am(t,e,n,r)}finally{ge=i,Ys.transition=s}}function _1(t,e,n,r){var i=ge,s=Ys.transition;Ys.transition=null;try{ge=4,Am(t,e,n,r)}finally{ge=i,Ys.transition=s}}function Am(t,e,n,r){if(Pc){var i=np(t,e,n,r);if(i===null)af(t,e,r,bc,n),q_(t,r);else if(m1(i,t,e,n,r))r.stopPropagation();else if(q_(t,r),e&4&&-1<p1.indexOf(t)){for(;i!==null;){var s=Ol(i);if(s!==null&&$E(s),s=np(t,e,n,r),s===null&&af(t,e,r,bc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else af(t,e,r,null,n)}}var bc=null;function np(t,e,n,r){if(bc=null,t=Im(r),t=Li(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=OE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bc=t,null}function HE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(s1()){case Tm:return 1;case jE:return 4;case xc:case o1:return 16;case UE:return 536870912;default:return 16}default:return 16}}var Or=null,Pm=null,tc=null;function QE(){if(tc)return tc;var t,e=Pm,n=e.length,r,i="value"in Or?Or.value:Or.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return tc=i.slice(t,1<r?1-r:void 0)}function nc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Du(){return!0}function K_(){return!1}function Yt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Du:K_,this.isPropagationStopped=K_,this}return Le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Du)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Du)},persist:function(){},isPersistent:Du}),e}var Do={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bm=Yt(Do),Vl=Le({},Do,{view:0,detail:0}),v1=Yt(Vl),Jh,Xh,pa,Id=Le({},Vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pa&&(pa&&t.type==="mousemove"?(Jh=t.screenX-pa.screenX,Xh=t.screenY-pa.screenY):Xh=Jh=0,pa=t),Jh)},movementY:function(t){return"movementY"in t?t.movementY:Xh}}),G_=Yt(Id),w1=Le({},Id,{dataTransfer:0}),E1=Yt(w1),I1=Le({},Vl,{relatedTarget:0}),Zh=Yt(I1),T1=Le({},Do,{animationName:0,elapsedTime:0,pseudoElement:0}),S1=Yt(T1),x1=Le({},Do,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),A1=Yt(x1),P1=Le({},Do,{data:0}),H_=Yt(P1),b1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=k1[t])?!!e[t]:!1}function Rm(){return C1}var N1=Le({},Vl,{key:function(t){if(t.key){var e=b1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?R1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rm,charCode:function(t){return t.type==="keypress"?nc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),D1=Yt(N1),V1=Le({},Id,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Q_=Yt(V1),O1=Le({},Vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rm}),M1=Yt(O1),L1=Le({},Do,{propertyName:0,elapsedTime:0,pseudoElement:0}),F1=Yt(L1),j1=Le({},Id,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),U1=Yt(j1),B1=[9,13,27,32],km=Zn&&"CompositionEvent"in window,Ma=null;Zn&&"documentMode"in document&&(Ma=document.documentMode);var z1=Zn&&"TextEvent"in window&&!Ma,YE=Zn&&(!km||Ma&&8<Ma&&11>=Ma),Y_=" ",J_=!1;function JE(t,e){switch(t){case"keyup":return B1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function XE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function $1(t,e){switch(t){case"compositionend":return XE(e);case"keypress":return e.which!==32?null:(J_=!0,Y_);case"textInput":return t=e.data,t===Y_&&J_?null:t;default:return null}}function q1(t,e){if(Os)return t==="compositionend"||!km&&JE(t,e)?(t=QE(),tc=Pm=Or=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return YE&&e.locale!=="ko"?null:e.data;default:return null}}var W1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function X_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!W1[t.type]:e==="textarea"}function ZE(t,e,n,r){kE(r),e=Rc(e,"onChange"),0<e.length&&(n=new bm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var La=null,nl=null;function K1(t){cI(t,0)}function Td(t){var e=Fs(t);if(TE(e))return t}function G1(t,e){if(t==="change")return e}var eI=!1;if(Zn){var ef;if(Zn){var tf="oninput"in document;if(!tf){var Z_=document.createElement("div");Z_.setAttribute("oninput","return;"),tf=typeof Z_.oninput=="function"}ef=tf}else ef=!1;eI=ef&&(!document.documentMode||9<document.documentMode)}function ev(){La&&(La.detachEvent("onpropertychange",tI),nl=La=null)}function tI(t){if(t.propertyName==="value"&&Td(nl)){var e=[];ZE(e,nl,t,Im(t)),VE(K1,e)}}function H1(t,e,n){t==="focusin"?(ev(),La=e,nl=n,La.attachEvent("onpropertychange",tI)):t==="focusout"&&ev()}function Q1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Td(nl)}function Y1(t,e){if(t==="click")return Td(e)}function J1(t,e){if(t==="input"||t==="change")return Td(e)}function X1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gn=typeof Object.is=="function"?Object.is:X1;function rl(t,e){if(gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ff.call(e,i)||!gn(t[i],e[i]))return!1}return!0}function tv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nv(t,e){var n=tv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tv(n)}}function nI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?nI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function rI(){for(var t=window,e=Ic();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ic(t.document)}return e}function Cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Z1(t){var e=rI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&nI(n.ownerDocument.documentElement,n)){if(r!==null&&Cm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=nv(n,s);var o=nv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var eR=Zn&&"documentMode"in document&&11>=document.documentMode,Ms=null,rp=null,Fa=null,ip=!1;function rv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ip||Ms==null||Ms!==Ic(r)||(r=Ms,"selectionStart"in r&&Cm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fa&&rl(Fa,r)||(Fa=r,r=Rc(rp,"onSelect"),0<r.length&&(e=new bm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ms)))}function Vu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ls={animationend:Vu("Animation","AnimationEnd"),animationiteration:Vu("Animation","AnimationIteration"),animationstart:Vu("Animation","AnimationStart"),transitionend:Vu("Transition","TransitionEnd")},nf={},iI={};Zn&&(iI=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Sd(t){if(nf[t])return nf[t];if(!Ls[t])return t;var e=Ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in iI)return nf[t]=e[n];return t}var sI=Sd("animationend"),oI=Sd("animationiteration"),aI=Sd("animationstart"),lI=Sd("transitionend"),uI=new Map,iv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ui(t,e){uI.set(t,e),us(e,[t])}for(var rf=0;rf<iv.length;rf++){var sf=iv[rf],tR=sf.toLowerCase(),nR=sf[0].toUpperCase()+sf.slice(1);ui(tR,"on"+nR)}ui(sI,"onAnimationEnd");ui(oI,"onAnimationIteration");ui(aI,"onAnimationStart");ui("dblclick","onDoubleClick");ui("focusin","onFocus");ui("focusout","onBlur");ui(lI,"onTransitionEnd");so("onMouseEnter",["mouseout","mouseover"]);so("onMouseLeave",["mouseout","mouseover"]);so("onPointerEnter",["pointerout","pointerover"]);so("onPointerLeave",["pointerout","pointerover"]);us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));us("onBeforeInput",["compositionend","keypress","textInput","paste"]);us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pa));function sv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,t1(r,e,void 0,t),t.currentTarget=null}function cI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;sv(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;sv(i,a,c),s=l}}}if(Sc)throw t=Zf,Sc=!1,Zf=null,t}function Se(t,e){var n=e[up];n===void 0&&(n=e[up]=new Set);var r=t+"__bubble";n.has(r)||(dI(e,t,2,!1),n.add(r))}function of(t,e,n){var r=0;e&&(r|=4),dI(n,t,r,e)}var Ou="_reactListening"+Math.random().toString(36).slice(2);function il(t){if(!t[Ou]){t[Ou]=!0,_E.forEach(function(n){n!=="selectionchange"&&(rR.has(n)||of(n,!1,t),of(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ou]||(e[Ou]=!0,of("selectionchange",!1,e))}}function dI(t,e,n,r){switch(HE(e)){case 1:var i=y1;break;case 4:i=_1;break;default:i=Am}n=i.bind(null,e,n,t),i=void 0,!Xf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function af(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Li(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}VE(function(){var c=s,d=Im(n),f=[];e:{var m=uI.get(t);if(m!==void 0){var _=bm,x=t;switch(t){case"keypress":if(nc(n)===0)break e;case"keydown":case"keyup":_=D1;break;case"focusin":x="focus",_=Zh;break;case"focusout":x="blur",_=Zh;break;case"beforeblur":case"afterblur":_=Zh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=G_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=E1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=M1;break;case sI:case oI:case aI:_=S1;break;case lI:_=F1;break;case"scroll":_=v1;break;case"wheel":_=U1;break;case"copy":case"cut":case"paste":_=A1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Q_}var S=(e&4)!==0,k=!S&&t==="scroll",v=S?m!==null?m+"Capture":null:m;S=[];for(var g=c,I;g!==null;){I=g;var P=I.stateNode;if(I.tag===5&&P!==null&&(I=P,v!==null&&(P=Xa(g,v),P!=null&&S.push(sl(g,P,I)))),k)break;g=g.return}0<S.length&&(m=new _(m,x,null,n,d),f.push({event:m,listeners:S}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==Yf&&(x=n.relatedTarget||n.fromElement)&&(Li(x)||x[er]))break e;if((_||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,_?(x=n.relatedTarget||n.toElement,_=c,x=x?Li(x):null,x!==null&&(k=cs(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(_=null,x=c),_!==x)){if(S=G_,P="onMouseLeave",v="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(S=Q_,P="onPointerLeave",v="onPointerEnter",g="pointer"),k=_==null?m:Fs(_),I=x==null?m:Fs(x),m=new S(P,g+"leave",_,n,d),m.target=k,m.relatedTarget=I,P=null,Li(d)===c&&(S=new S(v,g+"enter",x,n,d),S.target=I,S.relatedTarget=k,P=S),k=P,_&&x)t:{for(S=_,v=x,g=0,I=S;I;I=Is(I))g++;for(I=0,P=v;P;P=Is(P))I++;for(;0<g-I;)S=Is(S),g--;for(;0<I-g;)v=Is(v),I--;for(;g--;){if(S===v||v!==null&&S===v.alternate)break t;S=Is(S),v=Is(v)}S=null}else S=null;_!==null&&ov(f,m,_,S,!1),x!==null&&k!==null&&ov(f,k,x,S,!0)}}e:{if(m=c?Fs(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var L=G1;else if(X_(m))if(eI)L=J1;else{L=Q1;var F=H1}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=Y1);if(L&&(L=L(t,c))){ZE(f,L,n,d);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&Wf(m,"number",m.value)}switch(F=c?Fs(c):window,t){case"focusin":(X_(F)||F.contentEditable==="true")&&(Ms=F,rp=c,Fa=null);break;case"focusout":Fa=rp=Ms=null;break;case"mousedown":ip=!0;break;case"contextmenu":case"mouseup":case"dragend":ip=!1,rv(f,n,d);break;case"selectionchange":if(eR)break;case"keydown":case"keyup":rv(f,n,d)}var T;if(km)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Os?JE(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(YE&&n.locale!=="ko"&&(Os||w!=="onCompositionStart"?w==="onCompositionEnd"&&Os&&(T=QE()):(Or=d,Pm="value"in Or?Or.value:Or.textContent,Os=!0)),F=Rc(c,w),0<F.length&&(w=new H_(w,t,null,n,d),f.push({event:w,listeners:F}),T?w.data=T:(T=XE(n),T!==null&&(w.data=T)))),(T=z1?$1(t,n):q1(t,n))&&(c=Rc(c,"onBeforeInput"),0<c.length&&(d=new H_("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}cI(f,e)})}function sl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xa(t,n),s!=null&&r.unshift(sl(t,s,i)),s=Xa(t,e),s!=null&&r.push(sl(t,s,i))),t=t.return}return r}function Is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ov(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Xa(n,s),l!=null&&o.unshift(sl(n,l,a))):i||(l=Xa(n,s),l!=null&&o.push(sl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var iR=/\r\n?/g,sR=/\u0000|\uFFFD/g;function av(t){return(typeof t=="string"?t:""+t).replace(iR,`
`).replace(sR,"")}function Mu(t,e,n){if(e=av(e),av(t)!==e&&n)throw Error(z(425))}function kc(){}var sp=null,op=null;function ap(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lp=typeof setTimeout=="function"?setTimeout:void 0,oR=typeof clearTimeout=="function"?clearTimeout:void 0,lv=typeof Promise=="function"?Promise:void 0,aR=typeof queueMicrotask=="function"?queueMicrotask:typeof lv<"u"?function(t){return lv.resolve(null).then(t).catch(lR)}:lp;function lR(t){setTimeout(function(){throw t})}function lf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),tl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);tl(e)}function $r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function uv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Vo=Math.random().toString(36).slice(2),En="__reactFiber$"+Vo,ol="__reactProps$"+Vo,er="__reactContainer$"+Vo,up="__reactEvents$"+Vo,uR="__reactListeners$"+Vo,cR="__reactHandles$"+Vo;function Li(t){var e=t[En];if(e)return e;for(var n=t.parentNode;n;){if(e=n[er]||n[En]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=uv(t);t!==null;){if(n=t[En])return n;t=uv(t)}return e}t=n,n=t.parentNode}return null}function Ol(t){return t=t[En]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function xd(t){return t[ol]||null}var cp=[],js=-1;function ci(t){return{current:t}}function Pe(t){0>js||(t.current=cp[js],cp[js]=null,js--)}function we(t,e){js++,cp[js]=t.current,t.current=e}var Jr={},It=ci(Jr),Mt=ci(!1),Wi=Jr;function oo(t,e){var n=t.type.contextTypes;if(!n)return Jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Lt(t){return t=t.childContextTypes,t!=null}function Cc(){Pe(Mt),Pe(It)}function cv(t,e,n){if(It.current!==Jr)throw Error(z(168));we(It,e),we(Mt,n)}function hI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,Hb(t)||"Unknown",i));return Le({},n,r)}function Nc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jr,Wi=It.current,we(It,t),we(Mt,Mt.current),!0}function dv(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=hI(t,e,Wi),r.__reactInternalMemoizedMergedChildContext=t,Pe(Mt),Pe(It),we(It,t)):Pe(Mt),we(Mt,n)}var $n=null,Ad=!1,uf=!1;function fI(t){$n===null?$n=[t]:$n.push(t)}function dR(t){Ad=!0,fI(t)}function di(){if(!uf&&$n!==null){uf=!0;var t=0,e=ge;try{var n=$n;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}$n=null,Ad=!1}catch(i){throw $n!==null&&($n=$n.slice(t+1)),FE(Tm,di),i}finally{ge=e,uf=!1}}return null}var Us=[],Bs=0,Dc=null,Vc=0,Xt=[],Zt=0,Ki=null,qn=1,Wn="";function bi(t,e){Us[Bs++]=Vc,Us[Bs++]=Dc,Dc=t,Vc=e}function pI(t,e,n){Xt[Zt++]=qn,Xt[Zt++]=Wn,Xt[Zt++]=Ki,Ki=t;var r=qn;t=Wn;var i=32-fn(r)-1;r&=~(1<<i),n+=1;var s=32-fn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qn=1<<32-fn(e)+i|n<<i|r,Wn=s+t}else qn=1<<s|n<<i|r,Wn=t}function Nm(t){t.return!==null&&(bi(t,1),pI(t,1,0))}function Dm(t){for(;t===Dc;)Dc=Us[--Bs],Us[Bs]=null,Vc=Us[--Bs],Us[Bs]=null;for(;t===Ki;)Ki=Xt[--Zt],Xt[Zt]=null,Wn=Xt[--Zt],Xt[Zt]=null,qn=Xt[--Zt],Xt[Zt]=null}var Wt=null,qt=null,ke=!1,hn=null;function mI(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,qt=$r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ki!==null?{id:qn,overflow:Wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,qt=null,!0):!1;default:return!1}}function dp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hp(t){if(ke){var e=qt;if(e){var n=e;if(!hv(t,e)){if(dp(t))throw Error(z(418));e=$r(n.nextSibling);var r=Wt;e&&hv(t,e)?mI(r,n):(t.flags=t.flags&-4097|2,ke=!1,Wt=t)}}else{if(dp(t))throw Error(z(418));t.flags=t.flags&-4097|2,ke=!1,Wt=t}}}function fv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function Lu(t){if(t!==Wt)return!1;if(!ke)return fv(t),ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ap(t.type,t.memoizedProps)),e&&(e=qt)){if(dp(t))throw gI(),Error(z(418));for(;e;)mI(t,e),e=$r(e.nextSibling)}if(fv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qt=$r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qt=null}}else qt=Wt?$r(t.stateNode.nextSibling):null;return!0}function gI(){for(var t=qt;t;)t=$r(t.nextSibling)}function ao(){qt=Wt=null,ke=!1}function Vm(t){hn===null?hn=[t]:hn.push(t)}var hR=lr.ReactCurrentBatchConfig;function ma(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Fu(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pv(t){var e=t._init;return e(t._payload)}function yI(t){function e(v,g){if(t){var I=v.deletions;I===null?(v.deletions=[g],v.flags|=16):I.push(g)}}function n(v,g){if(!t)return null;for(;g!==null;)e(v,g),g=g.sibling;return null}function r(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function i(v,g){return v=Gr(v,g),v.index=0,v.sibling=null,v}function s(v,g,I){return v.index=I,t?(I=v.alternate,I!==null?(I=I.index,I<g?(v.flags|=2,g):I):(v.flags|=2,g)):(v.flags|=1048576,g)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,g,I,P){return g===null||g.tag!==6?(g=gf(I,v.mode,P),g.return=v,g):(g=i(g,I),g.return=v,g)}function l(v,g,I,P){var L=I.type;return L===Vs?d(v,g,I.props.children,P,I.key):g!==null&&(g.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Sr&&pv(L)===g.type)?(P=i(g,I.props),P.ref=ma(v,g,I),P.return=v,P):(P=uc(I.type,I.key,I.props,null,v.mode,P),P.ref=ma(v,g,I),P.return=v,P)}function c(v,g,I,P){return g===null||g.tag!==4||g.stateNode.containerInfo!==I.containerInfo||g.stateNode.implementation!==I.implementation?(g=yf(I,v.mode,P),g.return=v,g):(g=i(g,I.children||[]),g.return=v,g)}function d(v,g,I,P,L){return g===null||g.tag!==7?(g=zi(I,v.mode,P,L),g.return=v,g):(g=i(g,I),g.return=v,g)}function f(v,g,I){if(typeof g=="string"&&g!==""||typeof g=="number")return g=gf(""+g,v.mode,I),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Pu:return I=uc(g.type,g.key,g.props,null,v.mode,I),I.ref=ma(v,null,g),I.return=v,I;case Ds:return g=yf(g,v.mode,I),g.return=v,g;case Sr:var P=g._init;return f(v,P(g._payload),I)}if(xa(g)||ca(g))return g=zi(g,v.mode,I,null),g.return=v,g;Fu(v,g)}return null}function m(v,g,I,P){var L=g!==null?g.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return L!==null?null:a(v,g,""+I,P);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Pu:return I.key===L?l(v,g,I,P):null;case Ds:return I.key===L?c(v,g,I,P):null;case Sr:return L=I._init,m(v,g,L(I._payload),P)}if(xa(I)||ca(I))return L!==null?null:d(v,g,I,P,null);Fu(v,I)}return null}function _(v,g,I,P,L){if(typeof P=="string"&&P!==""||typeof P=="number")return v=v.get(I)||null,a(g,v,""+P,L);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Pu:return v=v.get(P.key===null?I:P.key)||null,l(g,v,P,L);case Ds:return v=v.get(P.key===null?I:P.key)||null,c(g,v,P,L);case Sr:var F=P._init;return _(v,g,I,F(P._payload),L)}if(xa(P)||ca(P))return v=v.get(I)||null,d(g,v,P,L,null);Fu(g,P)}return null}function x(v,g,I,P){for(var L=null,F=null,T=g,w=g=0,A=null;T!==null&&w<I.length;w++){T.index>w?(A=T,T=null):A=T.sibling;var b=m(v,T,I[w],P);if(b===null){T===null&&(T=A);break}t&&T&&b.alternate===null&&e(v,T),g=s(b,g,w),F===null?L=b:F.sibling=b,F=b,T=A}if(w===I.length)return n(v,T),ke&&bi(v,w),L;if(T===null){for(;w<I.length;w++)T=f(v,I[w],P),T!==null&&(g=s(T,g,w),F===null?L=T:F.sibling=T,F=T);return ke&&bi(v,w),L}for(T=r(v,T);w<I.length;w++)A=_(T,v,w,I[w],P),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?w:A.key),g=s(A,g,w),F===null?L=A:F.sibling=A,F=A);return t&&T.forEach(function(C){return e(v,C)}),ke&&bi(v,w),L}function S(v,g,I,P){var L=ca(I);if(typeof L!="function")throw Error(z(150));if(I=L.call(I),I==null)throw Error(z(151));for(var F=L=null,T=g,w=g=0,A=null,b=I.next();T!==null&&!b.done;w++,b=I.next()){T.index>w?(A=T,T=null):A=T.sibling;var C=m(v,T,b.value,P);if(C===null){T===null&&(T=A);break}t&&T&&C.alternate===null&&e(v,T),g=s(C,g,w),F===null?L=C:F.sibling=C,F=C,T=A}if(b.done)return n(v,T),ke&&bi(v,w),L;if(T===null){for(;!b.done;w++,b=I.next())b=f(v,b.value,P),b!==null&&(g=s(b,g,w),F===null?L=b:F.sibling=b,F=b);return ke&&bi(v,w),L}for(T=r(v,T);!b.done;w++,b=I.next())b=_(T,v,w,b.value,P),b!==null&&(t&&b.alternate!==null&&T.delete(b.key===null?w:b.key),g=s(b,g,w),F===null?L=b:F.sibling=b,F=b);return t&&T.forEach(function(D){return e(v,D)}),ke&&bi(v,w),L}function k(v,g,I,P){if(typeof I=="object"&&I!==null&&I.type===Vs&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Pu:e:{for(var L=I.key,F=g;F!==null;){if(F.key===L){if(L=I.type,L===Vs){if(F.tag===7){n(v,F.sibling),g=i(F,I.props.children),g.return=v,v=g;break e}}else if(F.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Sr&&pv(L)===F.type){n(v,F.sibling),g=i(F,I.props),g.ref=ma(v,F,I),g.return=v,v=g;break e}n(v,F);break}else e(v,F);F=F.sibling}I.type===Vs?(g=zi(I.props.children,v.mode,P,I.key),g.return=v,v=g):(P=uc(I.type,I.key,I.props,null,v.mode,P),P.ref=ma(v,g,I),P.return=v,v=P)}return o(v);case Ds:e:{for(F=I.key;g!==null;){if(g.key===F)if(g.tag===4&&g.stateNode.containerInfo===I.containerInfo&&g.stateNode.implementation===I.implementation){n(v,g.sibling),g=i(g,I.children||[]),g.return=v,v=g;break e}else{n(v,g);break}else e(v,g);g=g.sibling}g=yf(I,v.mode,P),g.return=v,v=g}return o(v);case Sr:return F=I._init,k(v,g,F(I._payload),P)}if(xa(I))return x(v,g,I,P);if(ca(I))return S(v,g,I,P);Fu(v,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,g!==null&&g.tag===6?(n(v,g.sibling),g=i(g,I),g.return=v,v=g):(n(v,g),g=gf(I,v.mode,P),g.return=v,v=g),o(v)):n(v,g)}return k}var lo=yI(!0),_I=yI(!1),Oc=ci(null),Mc=null,zs=null,Om=null;function Mm(){Om=zs=Mc=null}function Lm(t){var e=Oc.current;Pe(Oc),t._currentValue=e}function fp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Js(t,e){Mc=t,Om=zs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Nt=!0),t.firstContext=null)}function sn(t){var e=t._currentValue;if(Om!==t)if(t={context:t,memoizedValue:e,next:null},zs===null){if(Mc===null)throw Error(z(308));zs=t,Mc.dependencies={lanes:0,firstContext:t}}else zs=zs.next=t;return e}var Fi=null;function Fm(t){Fi===null?Fi=[t]:Fi.push(t)}function vI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Fm(e)):(n.next=i.next,i.next=n),e.interleaved=n,tr(t,r)}function tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xr=!1;function jm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,tr(t,n)}return i=r.interleaved,i===null?(e.next=e,Fm(r)):(e.next=i.next,i.next=e),r.interleaved=e,tr(t,n)}function rc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Sm(t,n)}}function mv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Lc(t,e,n,r){var i=t.updateQueue;xr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=c=l=null,a=s;do{var m=a.lane,_=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,S=a;switch(m=e,_=n,S.tag){case 1:if(x=S.payload,typeof x=="function"){f=x.call(_,f,m);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,m=typeof x=="function"?x.call(_,f,m):x,m==null)break e;f=Le({},f,m);break e;case 2:xr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=_,l=f):d=d.next=_,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hi|=o,t.lanes=o,t.memoizedState=f}}function gv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Ml={},bn=ci(Ml),al=ci(Ml),ll=ci(Ml);function ji(t){if(t===Ml)throw Error(z(174));return t}function Um(t,e){switch(we(ll,e),we(al,t),we(bn,Ml),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gf(e,t)}Pe(bn),we(bn,e)}function uo(){Pe(bn),Pe(al),Pe(ll)}function EI(t){ji(ll.current);var e=ji(bn.current),n=Gf(e,t.type);e!==n&&(we(al,t),we(bn,n))}function Bm(t){al.current===t&&(Pe(bn),Pe(al))}var De=ci(0);function Fc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cf=[];function zm(){for(var t=0;t<cf.length;t++)cf[t]._workInProgressVersionPrimary=null;cf.length=0}var ic=lr.ReactCurrentDispatcher,df=lr.ReactCurrentBatchConfig,Gi=0,Ve=null,Ge=null,Xe=null,jc=!1,ja=!1,ul=0,fR=0;function pt(){throw Error(z(321))}function $m(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gn(t[n],e[n]))return!1;return!0}function qm(t,e,n,r,i,s){if(Gi=s,Ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ic.current=t===null||t.memoizedState===null?yR:_R,t=n(r,i),ja){s=0;do{if(ja=!1,ul=0,25<=s)throw Error(z(301));s+=1,Xe=Ge=null,e.updateQueue=null,ic.current=vR,t=n(r,i)}while(ja)}if(ic.current=Uc,e=Ge!==null&&Ge.next!==null,Gi=0,Xe=Ge=Ve=null,jc=!1,e)throw Error(z(300));return t}function Wm(){var t=ul!==0;return ul=0,t}function wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Ve.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function on(){if(Ge===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=Xe===null?Ve.memoizedState:Xe.next;if(e!==null)Xe=e,Ge=t;else{if(t===null)throw Error(z(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Xe===null?Ve.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function cl(t,e){return typeof e=="function"?e(t):e}function hf(t){var e=on(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Gi&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Ve.lanes|=d,Hi|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,gn(r,e.memoizedState)||(Nt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ve.lanes|=s,Hi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ff(t){var e=on(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gn(s,e.memoizedState)||(Nt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function II(){}function TI(t,e){var n=Ve,r=on(),i=e(),s=!gn(r.memoizedState,i);if(s&&(r.memoizedState=i,Nt=!0),r=r.queue,Km(AI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,dl(9,xI.bind(null,n,r,i,e),void 0,null),et===null)throw Error(z(349));Gi&30||SI(n,e,i)}return i}function SI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xI(t,e,n,r){e.value=n,e.getSnapshot=r,PI(e)&&bI(t)}function AI(t,e,n){return n(function(){PI(e)&&bI(t)})}function PI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gn(t,n)}catch{return!0}}function bI(t){var e=tr(t,1);e!==null&&pn(e,t,1,-1)}function yv(t){var e=wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cl,lastRenderedState:t},e.queue=t,t=t.dispatch=gR.bind(null,Ve,t),[e.memoizedState,t]}function dl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function RI(){return on().memoizedState}function sc(t,e,n,r){var i=wn();Ve.flags|=t,i.memoizedState=dl(1|e,n,void 0,r===void 0?null:r)}function Pd(t,e,n,r){var i=on();r=r===void 0?null:r;var s=void 0;if(Ge!==null){var o=Ge.memoizedState;if(s=o.destroy,r!==null&&$m(r,o.deps)){i.memoizedState=dl(e,n,s,r);return}}Ve.flags|=t,i.memoizedState=dl(1|e,n,s,r)}function _v(t,e){return sc(8390656,8,t,e)}function Km(t,e){return Pd(2048,8,t,e)}function kI(t,e){return Pd(4,2,t,e)}function CI(t,e){return Pd(4,4,t,e)}function NI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function DI(t,e,n){return n=n!=null?n.concat([t]):null,Pd(4,4,NI.bind(null,e,t),n)}function Gm(){}function VI(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$m(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function OI(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$m(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function MI(t,e,n){return Gi&21?(gn(n,e)||(n=BE(),Ve.lanes|=n,Hi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Nt=!0),t.memoizedState=n)}function pR(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=df.transition;df.transition={};try{t(!1),e()}finally{ge=n,df.transition=r}}function LI(){return on().memoizedState}function mR(t,e,n){var r=Kr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},FI(t))jI(e,n);else if(n=vI(t,e,n,r),n!==null){var i=At();pn(n,t,r,i),UI(n,e,r)}}function gR(t,e,n){var r=Kr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(FI(t))jI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,gn(a,o)){var l=e.interleaved;l===null?(i.next=i,Fm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=vI(t,e,i,r),n!==null&&(i=At(),pn(n,t,r,i),UI(n,e,r))}}function FI(t){var e=t.alternate;return t===Ve||e!==null&&e===Ve}function jI(t,e){ja=jc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function UI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Sm(t,n)}}var Uc={readContext:sn,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},yR={readContext:sn,useCallback:function(t,e){return wn().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:_v,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,sc(4194308,4,NI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sc(4194308,4,t,e)},useInsertionEffect:function(t,e){return sc(4,2,t,e)},useMemo:function(t,e){var n=wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mR.bind(null,Ve,t),[r.memoizedState,t]},useRef:function(t){var e=wn();return t={current:t},e.memoizedState=t},useState:yv,useDebugValue:Gm,useDeferredValue:function(t){return wn().memoizedState=t},useTransition:function(){var t=yv(!1),e=t[0];return t=pR.bind(null,t[1]),wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ve,i=wn();if(ke){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),et===null)throw Error(z(349));Gi&30||SI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,_v(AI.bind(null,r,s,t),[t]),r.flags|=2048,dl(9,xI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=wn(),e=et.identifierPrefix;if(ke){var n=Wn,r=qn;n=(r&~(1<<32-fn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ul++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_R={readContext:sn,useCallback:VI,useContext:sn,useEffect:Km,useImperativeHandle:DI,useInsertionEffect:kI,useLayoutEffect:CI,useMemo:OI,useReducer:hf,useRef:RI,useState:function(){return hf(cl)},useDebugValue:Gm,useDeferredValue:function(t){var e=on();return MI(e,Ge.memoizedState,t)},useTransition:function(){var t=hf(cl)[0],e=on().memoizedState;return[t,e]},useMutableSource:II,useSyncExternalStore:TI,useId:LI,unstable_isNewReconciler:!1},vR={readContext:sn,useCallback:VI,useContext:sn,useEffect:Km,useImperativeHandle:DI,useInsertionEffect:kI,useLayoutEffect:CI,useMemo:OI,useReducer:ff,useRef:RI,useState:function(){return ff(cl)},useDebugValue:Gm,useDeferredValue:function(t){var e=on();return Ge===null?e.memoizedState=t:MI(e,Ge.memoizedState,t)},useTransition:function(){var t=ff(cl)[0],e=on().memoizedState;return[t,e]},useMutableSource:II,useSyncExternalStore:TI,useId:LI,unstable_isNewReconciler:!1};function cn(t,e){if(t&&t.defaultProps){e=Le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function pp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bd={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=At(),i=Kr(t),s=Yn(r,i);s.payload=e,n!=null&&(s.callback=n),e=qr(t,s,i),e!==null&&(pn(e,t,i,r),rc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=At(),i=Kr(t),s=Yn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qr(t,s,i),e!==null&&(pn(e,t,i,r),rc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=At(),r=Kr(t),i=Yn(n,r);i.tag=2,e!=null&&(i.callback=e),e=qr(t,i,r),e!==null&&(pn(e,t,r,n),rc(e,t,r))}};function vv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!rl(n,r)||!rl(i,s):!0}function BI(t,e,n){var r=!1,i=Jr,s=e.contextType;return typeof s=="object"&&s!==null?s=sn(s):(i=Lt(e)?Wi:It.current,r=e.contextTypes,s=(r=r!=null)?oo(t,i):Jr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function wv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&bd.enqueueReplaceState(e,e.state,null)}function mp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},jm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=sn(s):(s=Lt(e)?Wi:It.current,i.context=oo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&bd.enqueueReplaceState(i,i.state,null),Lc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function co(t,e){try{var n="",r=e;do n+=Gb(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function pf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wR=typeof WeakMap=="function"?WeakMap:Map;function zI(t,e,n){n=Yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){zc||(zc=!0,Ap=r),gp(t,e)},n}function $I(t,e,n){n=Yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){gp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gp(t,e),typeof r!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ev(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new wR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=VR.bind(null,t,e,n),e.then(t,t))}function Iv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yn(-1,1),e.tag=2,qr(n,e,1))),n.lanes|=1),t)}var ER=lr.ReactCurrentOwner,Nt=!1;function xt(t,e,n,r){e.child=t===null?_I(e,null,n,r):lo(e,t.child,n,r)}function Sv(t,e,n,r,i){n=n.render;var s=e.ref;return Js(e,i),r=qm(t,e,n,r,s,i),n=Wm(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(ke&&n&&Nm(e),e.flags|=1,xt(t,e,r,i),e.child)}function xv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!tg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,qI(t,e,s,r,i)):(t=uc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:rl,n(o,r)&&t.ref===e.ref)return nr(t,e,i)}return e.flags|=1,t=Gr(s,r),t.ref=e.ref,t.return=e,e.child=t}function qI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(rl(s,r)&&t.ref===e.ref)if(Nt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Nt=!0);else return e.lanes=t.lanes,nr(t,e,i)}return yp(t,e,n,r,i)}function WI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(qs,$t),$t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(qs,$t),$t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(qs,$t),$t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(qs,$t),$t|=r;return xt(t,e,i,n),e.child}function KI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yp(t,e,n,r,i){var s=Lt(n)?Wi:It.current;return s=oo(e,s),Js(e,i),n=qm(t,e,n,r,s,i),r=Wm(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(ke&&r&&Nm(e),e.flags|=1,xt(t,e,n,i),e.child)}function Av(t,e,n,r,i){if(Lt(n)){var s=!0;Nc(e)}else s=!1;if(Js(e,i),e.stateNode===null)oc(t,e),BI(e,n,r),mp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=sn(c):(c=Lt(n)?Wi:It.current,c=oo(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&wv(e,o,r,c),xr=!1;var m=e.memoizedState;o.state=m,Lc(e,r,o,i),l=e.memoizedState,a!==r||m!==l||Mt.current||xr?(typeof d=="function"&&(pp(e,n,d,r),l=e.memoizedState),(a=xr||vv(e,n,a,r,m,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,wI(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:cn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=sn(l):(l=Lt(n)?Wi:It.current,l=oo(e,l));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&wv(e,o,r,l),xr=!1,m=e.memoizedState,o.state=m,Lc(e,r,o,i);var x=e.memoizedState;a!==f||m!==x||Mt.current||xr?(typeof _=="function"&&(pp(e,n,_,r),x=e.memoizedState),(c=xr||vv(e,n,c,r,m,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return _p(t,e,n,r,s,i)}function _p(t,e,n,r,i,s){KI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&dv(e,n,!1),nr(t,e,s);r=e.stateNode,ER.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=lo(e,t.child,null,s),e.child=lo(e,null,a,s)):xt(t,e,a,s),e.memoizedState=r.state,i&&dv(e,n,!0),e.child}function GI(t){var e=t.stateNode;e.pendingContext?cv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cv(t,e.context,!1),Um(t,e.containerInfo)}function Pv(t,e,n,r,i){return ao(),Vm(i),e.flags|=256,xt(t,e,n,r),e.child}var vp={dehydrated:null,treeContext:null,retryLane:0};function wp(t){return{baseLanes:t,cachePool:null,transitions:null}}function HI(t,e,n){var r=e.pendingProps,i=De.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(De,i&1),t===null)return hp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cd(o,r,0,null),t=zi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wp(n),e.memoizedState=vp,t):Hm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return IR(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Gr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Gr(a,s):(s=zi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?wp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vp,r}return s=t.child,t=s.sibling,r=Gr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Hm(t,e){return e=Cd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ju(t,e,n,r){return r!==null&&Vm(r),lo(e,t.child,null,n),t=Hm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function IR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=pf(Error(z(422))),ju(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Cd({mode:"visible",children:r.children},i,0,null),s=zi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&lo(e,t.child,null,o),e.child.memoizedState=wp(o),e.memoizedState=vp,s);if(!(e.mode&1))return ju(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=pf(s,r,void 0),ju(t,e,o,r)}if(a=(o&t.childLanes)!==0,Nt||a){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tr(t,i),pn(r,t,i,-1))}return eg(),r=pf(Error(z(421))),ju(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=OR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,qt=$r(i.nextSibling),Wt=e,ke=!0,hn=null,t!==null&&(Xt[Zt++]=qn,Xt[Zt++]=Wn,Xt[Zt++]=Ki,qn=t.id,Wn=t.overflow,Ki=e),e=Hm(e,r.children),e.flags|=4096,e)}function bv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),fp(t.return,e,n)}function mf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function QI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(xt(t,e,r.children,n),r=De.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bv(t,n,e);else if(t.tag===19)bv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(De,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Fc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),mf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Fc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}mf(e,!0,n,null,s);break;case"together":mf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function oc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function TR(t,e,n){switch(e.tag){case 3:GI(e),ao();break;case 5:EI(e);break;case 1:Lt(e.type)&&Nc(e);break;case 4:Um(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(Oc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(De,De.current&1),e.flags|=128,null):n&e.child.childLanes?HI(t,e,n):(we(De,De.current&1),t=nr(t,e,n),t!==null?t.sibling:null);we(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return QI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,WI(t,e,n)}return nr(t,e,n)}var YI,Ep,JI,XI;YI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ep=function(){};JI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ji(bn.current);var s=null;switch(n){case"input":i=$f(t,i),r=$f(t,r),s=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),s=[];break;case"textarea":i=Kf(t,i),r=Kf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=kc)}Hf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ya.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ya.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Se("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};XI=function(t,e,n,r){n!==r&&(e.flags|=4)};function ga(t,e){if(!ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function SR(t,e,n){var r=e.pendingProps;switch(Dm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return Lt(e.type)&&Cc(),mt(e),null;case 3:return r=e.stateNode,uo(),Pe(Mt),Pe(It),zm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Lu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(Rp(hn),hn=null))),Ep(t,e),mt(e),null;case 5:Bm(e);var i=ji(ll.current);if(n=e.type,t!==null&&e.stateNode!=null)JI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return mt(e),null}if(t=ji(bn.current),Lu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[En]=e,r[ol]=s,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<Pa.length;i++)Se(Pa[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":L_(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":j_(r,s),Se("invalid",r)}Hf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Mu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Mu(r.textContent,a,t),i=["children",""+a]):Ya.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":bu(r),F_(r,s,!0);break;case"textarea":bu(r),U_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=kc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=AE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[En]=e,t[ol]=r,YI(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qf(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<Pa.length;i++)Se(Pa[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":L_(t,r),i=$f(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),Se("invalid",t);break;case"textarea":j_(t,r),i=Kf(t,r),Se("invalid",t);break;default:i=r}Hf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?RE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&PE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ja(t,l):typeof l=="number"&&Ja(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ya.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Se("scroll",t):l!=null&&_m(t,s,l,o))}switch(n){case"input":bu(t),F_(t,r,!1);break;case"textarea":bu(t),U_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=kc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)XI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=ji(ll.current),ji(bn.current),Lu(e)){if(r=e.stateNode,n=e.memoizedProps,r[En]=e,(s=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:Mu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Mu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[En]=e,e.stateNode=r}return mt(e),null;case 13:if(Pe(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&qt!==null&&e.mode&1&&!(e.flags&128))gI(),ao(),e.flags|=98560,s=!1;else if(s=Lu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[En]=e}else ao(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else hn!==null&&(Rp(hn),hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?He===0&&(He=3):eg())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return uo(),Ep(t,e),t===null&&il(e.stateNode.containerInfo),mt(e),null;case 10:return Lm(e.type._context),mt(e),null;case 17:return Lt(e.type)&&Cc(),mt(e),null;case 19:if(Pe(De),s=e.memoizedState,s===null)return mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ga(s,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fc(t),o!==null){for(e.flags|=128,ga(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(De,De.current&1|2),e.child}t=t.sibling}s.tail!==null&&ze()>ho&&(e.flags|=128,r=!0,ga(s,!1),e.lanes=4194304)}else{if(!r)if(t=Fc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ga(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ke)return mt(e),null}else 2*ze()-s.renderingStartTime>ho&&n!==1073741824&&(e.flags|=128,r=!0,ga(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,n=De.current,we(De,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return Zm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?$t&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function xR(t,e){switch(Dm(e),e.tag){case 1:return Lt(e.type)&&Cc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return uo(),Pe(Mt),Pe(It),zm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bm(e),null;case 13:if(Pe(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));ao()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(De),null;case 4:return uo(),null;case 10:return Lm(e.type._context),null;case 22:case 23:return Zm(),null;case 24:return null;default:return null}}var Uu=!1,_t=!1,AR=typeof WeakSet=="function"?WeakSet:Set,H=null;function $s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(t,e,r)}else n.current=null}function Ip(t,e,n){try{n()}catch(r){Ue(t,e,r)}}var Rv=!1;function PR(t,e){if(sp=Pc,t=rI(),Cm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var _;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)m=f,f=_;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(l=o),(_=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(op={focusedElem:t,selectionRange:n},Pc=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,k=x.memoizedState,v=e.stateNode,g=v.getSnapshotBeforeUpdate(e.elementType===e.type?S:cn(e.type,S),k);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(P){Ue(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return x=Rv,Rv=!1,x}function Ua(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ip(e,n,s)}i=i.next}while(i!==r)}}function Rd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Tp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ZI(t){var e=t.alternate;e!==null&&(t.alternate=null,ZI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[En],delete e[ol],delete e[up],delete e[uR],delete e[cR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function eT(t){return t.tag===5||t.tag===3||t.tag===4}function kv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||eT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kc));else if(r!==4&&(t=t.child,t!==null))for(Sp(t,e,n),t=t.sibling;t!==null;)Sp(t,e,n),t=t.sibling}function xp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(xp(t,e,n),t=t.sibling;t!==null;)xp(t,e,n),t=t.sibling}var ot=null,dn=!1;function vr(t,e,n){for(n=n.child;n!==null;)tT(t,e,n),n=n.sibling}function tT(t,e,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(Ed,n)}catch{}switch(n.tag){case 5:_t||$s(n,e);case 6:var r=ot,i=dn;ot=null,vr(t,e,n),ot=r,dn=i,ot!==null&&(dn?(t=ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(dn?(t=ot,n=n.stateNode,t.nodeType===8?lf(t.parentNode,n):t.nodeType===1&&lf(t,n),tl(t)):lf(ot,n.stateNode));break;case 4:r=ot,i=dn,ot=n.stateNode.containerInfo,dn=!0,vr(t,e,n),ot=r,dn=i;break;case 0:case 11:case 14:case 15:if(!_t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ip(n,e,o),i=i.next}while(i!==r)}vr(t,e,n);break;case 1:if(!_t&&($s(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ue(n,e,a)}vr(t,e,n);break;case 21:vr(t,e,n);break;case 22:n.mode&1?(_t=(r=_t)||n.memoizedState!==null,vr(t,e,n),_t=r):vr(t,e,n);break;default:vr(t,e,n)}}function Cv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new AR),e.forEach(function(r){var i=MR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ot=a.stateNode,dn=!1;break e;case 3:ot=a.stateNode.containerInfo,dn=!0;break e;case 4:ot=a.stateNode.containerInfo,dn=!0;break e}a=a.return}if(ot===null)throw Error(z(160));tT(s,o,i),ot=null,dn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Ue(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nT(e,t),e=e.sibling}function nT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(un(e,t),vn(t),r&4){try{Ua(3,t,t.return),Rd(3,t)}catch(S){Ue(t,t.return,S)}try{Ua(5,t,t.return)}catch(S){Ue(t,t.return,S)}}break;case 1:un(e,t),vn(t),r&512&&n!==null&&$s(n,n.return);break;case 5:if(un(e,t),vn(t),r&512&&n!==null&&$s(n,n.return),t.flags&32){var i=t.stateNode;try{Ja(i,"")}catch(S){Ue(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&SE(i,s),Qf(a,o);var c=Qf(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?RE(i,f):d==="dangerouslySetInnerHTML"?PE(i,f):d==="children"?Ja(i,f):_m(i,d,f,c)}switch(a){case"input":qf(i,s);break;case"textarea":xE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Gs(i,!!s.multiple,_,!1):m!==!!s.multiple&&(s.defaultValue!=null?Gs(i,!!s.multiple,s.defaultValue,!0):Gs(i,!!s.multiple,s.multiple?[]:"",!1))}i[ol]=s}catch(S){Ue(t,t.return,S)}}break;case 6:if(un(e,t),vn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(S){Ue(t,t.return,S)}}break;case 3:if(un(e,t),vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tl(e.containerInfo)}catch(S){Ue(t,t.return,S)}break;case 4:un(e,t),vn(t);break;case 13:un(e,t),vn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Jm=ze())),r&4&&Cv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(_t=(c=_t)||d,un(e,t),_t=c):un(e,t),vn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(H=t,d=t.child;d!==null;){for(f=H=d;H!==null;){switch(m=H,_=m.child,m.tag){case 0:case 11:case 14:case 15:Ua(4,m,m.return);break;case 1:$s(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(S){Ue(r,n,S)}}break;case 5:$s(m,m.return);break;case 22:if(m.memoizedState!==null){Dv(f);continue}}_!==null?(_.return=m,H=_):Dv(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bE("display",o))}catch(S){Ue(t,t.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){Ue(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:un(e,t),vn(t),r&4&&Cv(t);break;case 21:break;default:un(e,t),vn(t)}}function vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(eT(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ja(i,""),r.flags&=-33);var s=kv(t);xp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=kv(t);Sp(t,a,o);break;default:throw Error(z(161))}}catch(l){Ue(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bR(t,e,n){H=t,rT(t)}function rT(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Uu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||_t;a=Uu;var c=_t;if(Uu=o,(_t=l)&&!c)for(H=i;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?Vv(i):l!==null?(l.return=o,H=l):Vv(i);for(;s!==null;)H=s,rT(s),s=s.sibling;H=i,Uu=a,_t=c}Nv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Nv(t)}}function Nv(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_t||Rd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_t)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:cn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&tl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}_t||e.flags&512&&Tp(e)}catch(m){Ue(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Dv(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Vv(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rd(4,e)}catch(l){Ue(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ue(e,i,l)}}var s=e.return;try{Tp(e)}catch(l){Ue(e,s,l)}break;case 5:var o=e.return;try{Tp(e)}catch(l){Ue(e,o,l)}}}catch(l){Ue(e,e.return,l)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var RR=Math.ceil,Bc=lr.ReactCurrentDispatcher,Qm=lr.ReactCurrentOwner,tn=lr.ReactCurrentBatchConfig,le=0,et=null,Ke=null,ut=0,$t=0,qs=ci(0),He=0,hl=null,Hi=0,kd=0,Ym=0,Ba=null,Ct=null,Jm=0,ho=1/0,Bn=null,zc=!1,Ap=null,Wr=null,Bu=!1,Mr=null,$c=0,za=0,Pp=null,ac=-1,lc=0;function At(){return le&6?ze():ac!==-1?ac:ac=ze()}function Kr(t){return t.mode&1?le&2&&ut!==0?ut&-ut:hR.transition!==null?(lc===0&&(lc=BE()),lc):(t=ge,t!==0||(t=window.event,t=t===void 0?16:HE(t.type)),t):1}function pn(t,e,n,r){if(50<za)throw za=0,Pp=null,Error(z(185));Dl(t,n,r),(!(le&2)||t!==et)&&(t===et&&(!(le&2)&&(kd|=n),He===4&&Pr(t,ut)),Ft(t,r),n===1&&le===0&&!(e.mode&1)&&(ho=ze()+500,Ad&&di()))}function Ft(t,e){var n=t.callbackNode;h1(t,e);var r=Ac(t,t===et?ut:0);if(r===0)n!==null&&$_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$_(n),e===1)t.tag===0?dR(Ov.bind(null,t)):fI(Ov.bind(null,t)),aR(function(){!(le&6)&&di()}),n=null;else{switch(zE(r)){case 1:n=Tm;break;case 4:n=jE;break;case 16:n=xc;break;case 536870912:n=UE;break;default:n=xc}n=dT(n,iT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function iT(t,e){if(ac=-1,lc=0,le&6)throw Error(z(327));var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var r=Ac(t,t===et?ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=qc(t,r);else{e=r;var i=le;le|=2;var s=oT();(et!==t||ut!==e)&&(Bn=null,ho=ze()+500,Bi(t,e));do try{NR();break}catch(a){sT(t,a)}while(!0);Mm(),Bc.current=s,le=i,Ke!==null?e=0:(et=null,ut=0,e=He)}if(e!==0){if(e===2&&(i=ep(t),i!==0&&(r=i,e=bp(t,i))),e===1)throw n=hl,Bi(t,0),Pr(t,r),Ft(t,ze()),n;if(e===6)Pr(t,r);else{if(i=t.current.alternate,!(r&30)&&!kR(i)&&(e=qc(t,r),e===2&&(s=ep(t),s!==0&&(r=s,e=bp(t,s))),e===1))throw n=hl,Bi(t,0),Pr(t,r),Ft(t,ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Ri(t,Ct,Bn);break;case 3:if(Pr(t,r),(r&130023424)===r&&(e=Jm+500-ze(),10<e)){if(Ac(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){At(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=lp(Ri.bind(null,t,Ct,Bn),e);break}Ri(t,Ct,Bn);break;case 4:if(Pr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-fn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*RR(r/1960))-r,10<r){t.timeoutHandle=lp(Ri.bind(null,t,Ct,Bn),r);break}Ri(t,Ct,Bn);break;case 5:Ri(t,Ct,Bn);break;default:throw Error(z(329))}}}return Ft(t,ze()),t.callbackNode===n?iT.bind(null,t):null}function bp(t,e){var n=Ba;return t.current.memoizedState.isDehydrated&&(Bi(t,e).flags|=256),t=qc(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&Rp(e)),t}function Rp(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function kR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pr(t,e){for(e&=~Ym,e&=~kd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fn(e),r=1<<n;t[n]=-1,e&=~r}}function Ov(t){if(le&6)throw Error(z(327));Xs();var e=Ac(t,0);if(!(e&1))return Ft(t,ze()),null;var n=qc(t,e);if(t.tag!==0&&n===2){var r=ep(t);r!==0&&(e=r,n=bp(t,r))}if(n===1)throw n=hl,Bi(t,0),Pr(t,e),Ft(t,ze()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ri(t,Ct,Bn),Ft(t,ze()),null}function Xm(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(ho=ze()+500,Ad&&di())}}function Qi(t){Mr!==null&&Mr.tag===0&&!(le&6)&&Xs();var e=le;le|=1;var n=tn.transition,r=ge;try{if(tn.transition=null,ge=1,t)return t()}finally{ge=r,tn.transition=n,le=e,!(le&6)&&di()}}function Zm(){$t=qs.current,Pe(qs)}function Bi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oR(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(Dm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cc();break;case 3:uo(),Pe(Mt),Pe(It),zm();break;case 5:Bm(r);break;case 4:uo();break;case 13:Pe(De);break;case 19:Pe(De);break;case 10:Lm(r.type._context);break;case 22:case 23:Zm()}n=n.return}if(et=t,Ke=t=Gr(t.current,null),ut=$t=e,He=0,hl=null,Ym=kd=Hi=0,Ct=Ba=null,Fi!==null){for(e=0;e<Fi.length;e++)if(n=Fi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Fi=null}return t}function sT(t,e){do{var n=Ke;try{if(Mm(),ic.current=Uc,jc){for(var r=Ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}jc=!1}if(Gi=0,Xe=Ge=Ve=null,ja=!1,ul=0,Qm.current=null,n===null||n.return===null){He=1,hl=e,Ke=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Iv(o);if(_!==null){_.flags&=-257,Tv(_,o,a,s,e),_.mode&1&&Ev(s,c,e),e=_,l=c;var x=e.updateQueue;if(x===null){var S=new Set;S.add(l),e.updateQueue=S}else x.add(l);break e}else{if(!(e&1)){Ev(s,c,e),eg();break e}l=Error(z(426))}}else if(ke&&a.mode&1){var k=Iv(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Tv(k,o,a,s,e),Vm(co(l,a));break e}}s=l=co(l,a),He!==4&&(He=2),Ba===null?Ba=[s]:Ba.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=zI(s,l,e);mv(s,v);break e;case 1:a=l;var g=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Wr===null||!Wr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var P=$I(s,a,e);mv(s,P);break e}}s=s.return}while(s!==null)}lT(n)}catch(L){e=L,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(!0)}function oT(){var t=Bc.current;return Bc.current=Uc,t===null?Uc:t}function eg(){(He===0||He===3||He===2)&&(He=4),et===null||!(Hi&268435455)&&!(kd&268435455)||Pr(et,ut)}function qc(t,e){var n=le;le|=2;var r=oT();(et!==t||ut!==e)&&(Bn=null,Bi(t,e));do try{CR();break}catch(i){sT(t,i)}while(!0);if(Mm(),le=n,Bc.current=r,Ke!==null)throw Error(z(261));return et=null,ut=0,He}function CR(){for(;Ke!==null;)aT(Ke)}function NR(){for(;Ke!==null&&!r1();)aT(Ke)}function aT(t){var e=cT(t.alternate,t,$t);t.memoizedProps=t.pendingProps,e===null?lT(t):Ke=e,Qm.current=null}function lT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xR(n,e),n!==null){n.flags&=32767,Ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,Ke=null;return}}else if(n=SR(n,e,$t),n!==null){Ke=n;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=t}while(e!==null);He===0&&(He=5)}function Ri(t,e,n){var r=ge,i=tn.transition;try{tn.transition=null,ge=1,DR(t,e,n,r)}finally{tn.transition=i,ge=r}return null}function DR(t,e,n,r){do Xs();while(Mr!==null);if(le&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(f1(t,s),t===et&&(Ke=et=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bu||(Bu=!0,dT(xc,function(){return Xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tn.transition,tn.transition=null;var o=ge;ge=1;var a=le;le|=4,Qm.current=null,PR(t,n),nT(n,t),Z1(op),Pc=!!sp,op=sp=null,t.current=n,bR(n),i1(),le=a,ge=o,tn.transition=s}else t.current=n;if(Bu&&(Bu=!1,Mr=t,$c=i),s=t.pendingLanes,s===0&&(Wr=null),a1(n.stateNode),Ft(t,ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zc)throw zc=!1,t=Ap,Ap=null,t;return $c&1&&t.tag!==0&&Xs(),s=t.pendingLanes,s&1?t===Pp?za++:(za=0,Pp=t):za=0,di(),null}function Xs(){if(Mr!==null){var t=zE($c),e=tn.transition,n=ge;try{if(tn.transition=null,ge=16>t?16:t,Mr===null)var r=!1;else{if(t=Mr,Mr=null,$c=0,le&6)throw Error(z(331));var i=le;for(le|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(H=c;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:Ua(8,d,s)}var f=d.child;if(f!==null)f.return=d,H=f;else for(;H!==null;){d=H;var m=d.sibling,_=d.return;if(ZI(d),d===c){H=null;break}if(m!==null){m.return=_,H=m;break}H=_}}}var x=s.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var k=S.sibling;S.sibling=null,S=k}while(S!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ua(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,H=v;break e}H=s.return}}var g=t.current;for(H=g;H!==null;){o=H;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,H=I;else e:for(o=g;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Rd(9,a)}}catch(L){Ue(a,a.return,L)}if(a===o){H=null;break e}var P=a.sibling;if(P!==null){P.return=a.return,H=P;break e}H=a.return}}if(le=i,di(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(Ed,t)}catch{}r=!0}return r}finally{ge=n,tn.transition=e}}return!1}function Mv(t,e,n){e=co(n,e),e=zI(t,e,1),t=qr(t,e,1),e=At(),t!==null&&(Dl(t,1,e),Ft(t,e))}function Ue(t,e,n){if(t.tag===3)Mv(t,t,n);else for(;e!==null;){if(e.tag===3){Mv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wr===null||!Wr.has(r))){t=co(n,t),t=$I(e,t,1),e=qr(e,t,1),t=At(),e!==null&&(Dl(e,1,t),Ft(e,t));break}}e=e.return}}function VR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=At(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(ut&n)===n&&(He===4||He===3&&(ut&130023424)===ut&&500>ze()-Jm?Bi(t,0):Ym|=n),Ft(t,e)}function uT(t,e){e===0&&(t.mode&1?(e=Cu,Cu<<=1,!(Cu&130023424)&&(Cu=4194304)):e=1);var n=At();t=tr(t,e),t!==null&&(Dl(t,e,n),Ft(t,n))}function OR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),uT(t,n)}function MR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),uT(t,n)}var cT;cT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mt.current)Nt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Nt=!1,TR(t,e,n);Nt=!!(t.flags&131072)}else Nt=!1,ke&&e.flags&1048576&&pI(e,Vc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;oc(t,e),t=e.pendingProps;var i=oo(e,It.current);Js(e,n),i=qm(null,e,r,t,i,n);var s=Wm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Lt(r)?(s=!0,Nc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jm(e),i.updater=bd,e.stateNode=i,i._reactInternals=e,mp(e,r,t,n),e=_p(null,e,r,!0,s,n)):(e.tag=0,ke&&s&&Nm(e),xt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(oc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=FR(r),t=cn(r,t),i){case 0:e=yp(null,e,r,t,n);break e;case 1:e=Av(null,e,r,t,n);break e;case 11:e=Sv(null,e,r,t,n);break e;case 14:e=xv(null,e,r,cn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),yp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),Av(t,e,r,i,n);case 3:e:{if(GI(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,wI(t,e),Lc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=co(Error(z(423)),e),e=Pv(t,e,r,n,i);break e}else if(r!==i){i=co(Error(z(424)),e),e=Pv(t,e,r,n,i);break e}else for(qt=$r(e.stateNode.containerInfo.firstChild),Wt=e,ke=!0,hn=null,n=_I(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ao(),r===i){e=nr(t,e,n);break e}xt(t,e,r,n)}e=e.child}return e;case 5:return EI(e),t===null&&hp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ap(r,i)?o=null:s!==null&&ap(r,s)&&(e.flags|=32),KI(t,e),xt(t,e,o,n),e.child;case 6:return t===null&&hp(e),null;case 13:return HI(t,e,n);case 4:return Um(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=lo(e,null,r,n):xt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),Sv(t,e,r,i,n);case 7:return xt(t,e,e.pendingProps,n),e.child;case 8:return xt(t,e,e.pendingProps.children,n),e.child;case 12:return xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(Oc,r._currentValue),r._currentValue=o,s!==null)if(gn(s.value,o)){if(s.children===i.children&&!Mt.current){e=nr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Yn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),fp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),fp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Js(e,n),i=sn(i),r=r(i),e.flags|=1,xt(t,e,r,n),e.child;case 14:return r=e.type,i=cn(r,e.pendingProps),i=cn(r.type,i),xv(t,e,r,i,n);case 15:return qI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),oc(t,e),e.tag=1,Lt(r)?(t=!0,Nc(e)):t=!1,Js(e,n),BI(e,r,i),mp(e,r,i,n),_p(null,e,r,!0,t,n);case 19:return QI(t,e,n);case 22:return WI(t,e,n)}throw Error(z(156,e.tag))};function dT(t,e){return FE(t,e)}function LR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new LR(t,e,n,r)}function tg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function FR(t){if(typeof t=="function")return tg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wm)return 11;if(t===Em)return 14}return 2}function Gr(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function uc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")tg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vs:return zi(n.children,i,s,e);case vm:o=8,i|=8;break;case jf:return t=en(12,n,e,i|2),t.elementType=jf,t.lanes=s,t;case Uf:return t=en(13,n,e,i),t.elementType=Uf,t.lanes=s,t;case Bf:return t=en(19,n,e,i),t.elementType=Bf,t.lanes=s,t;case EE:return Cd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case vE:o=10;break e;case wE:o=9;break e;case wm:o=11;break e;case Em:o=14;break e;case Sr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=en(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zi(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function Cd(t,e,n,r){return t=en(22,t,r,e),t.elementType=EE,t.lanes=n,t.stateNode={isHidden:!1},t}function gf(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function yf(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yh(0),this.expirationTimes=Yh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ng(t,e,n,r,i,s,o,a,l){return t=new jR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=en(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jm(s),t}function UR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ds,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function hT(t){if(!t)return Jr;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Lt(n))return hI(t,n,e)}return e}function fT(t,e,n,r,i,s,o,a,l){return t=ng(n,r,!0,t,i,s,o,a,l),t.context=hT(null),n=t.current,r=At(),i=Kr(n),s=Yn(r,i),s.callback=e??null,qr(n,s,i),t.current.lanes=i,Dl(t,i,r),Ft(t,r),t}function Nd(t,e,n,r){var i=e.current,s=At(),o=Kr(i);return n=hT(n),e.context===null?e.context=n:e.pendingContext=n,e=Yn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=qr(i,e,o),t!==null&&(pn(t,i,o,s),rc(t,i,o)),o}function Wc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function rg(t,e){Lv(t,e),(t=t.alternate)&&Lv(t,e)}function BR(){return null}var pT=typeof reportError=="function"?reportError:function(t){console.error(t)};function ig(t){this._internalRoot=t}Dd.prototype.render=ig.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));Nd(t,e,null,null)};Dd.prototype.unmount=ig.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qi(function(){Nd(null,t,null,null)}),e[er]=null}};function Dd(t){this._internalRoot=t}Dd.prototype.unstable_scheduleHydration=function(t){if(t){var e=WE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ar.length&&e!==0&&e<Ar[n].priority;n++);Ar.splice(n,0,t),n===0&&GE(t)}};function sg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fv(){}function zR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Wc(o);s.call(c)}}var o=fT(e,r,t,0,null,!1,!1,"",Fv);return t._reactRootContainer=o,t[er]=o.current,il(t.nodeType===8?t.parentNode:t),Qi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Wc(l);a.call(c)}}var l=ng(t,0,!1,null,null,!1,!1,"",Fv);return t._reactRootContainer=l,t[er]=l.current,il(t.nodeType===8?t.parentNode:t),Qi(function(){Nd(e,l,n,r)}),l}function Od(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Wc(o);a.call(l)}}Nd(e,o,t,i)}else o=zR(n,e,t,i,r);return Wc(o)}$E=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Aa(e.pendingLanes);n!==0&&(Sm(e,n|1),Ft(e,ze()),!(le&6)&&(ho=ze()+500,di()))}break;case 13:Qi(function(){var r=tr(t,1);if(r!==null){var i=At();pn(r,t,1,i)}}),rg(t,1)}};xm=function(t){if(t.tag===13){var e=tr(t,134217728);if(e!==null){var n=At();pn(e,t,134217728,n)}rg(t,134217728)}};qE=function(t){if(t.tag===13){var e=Kr(t),n=tr(t,e);if(n!==null){var r=At();pn(n,t,e,r)}rg(t,e)}};WE=function(){return ge};KE=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};Jf=function(t,e,n){switch(e){case"input":if(qf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=xd(r);if(!i)throw Error(z(90));TE(r),qf(r,i)}}}break;case"textarea":xE(t,n);break;case"select":e=n.value,e!=null&&Gs(t,!!n.multiple,e,!1)}};NE=Xm;DE=Qi;var $R={usingClientEntryPoint:!1,Events:[Ol,Fs,xd,kE,CE,Xm]},ya={findFiberByHostInstance:Li,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qR={bundleType:ya.bundleType,version:ya.version,rendererPackageName:ya.rendererPackageName,rendererConfig:ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ME(t),t===null?null:t.stateNode},findFiberByHostInstance:ya.findFiberByHostInstance||BR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zu.isDisabled&&zu.supportsFiber)try{Ed=zu.inject(qR),Pn=zu}catch{}}Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$R;Qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sg(e))throw Error(z(200));return UR(t,e,null,n)};Qt.createRoot=function(t,e){if(!sg(t))throw Error(z(299));var n=!1,r="",i=pT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ng(t,1,!1,null,null,n,!1,r,i),t[er]=e.current,il(t.nodeType===8?t.parentNode:t),new ig(e)};Qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=ME(e),t=t===null?null:t.stateNode,t};Qt.flushSync=function(t){return Qi(t)};Qt.hydrate=function(t,e,n){if(!Vd(e))throw Error(z(200));return Od(null,t,e,!0,n)};Qt.hydrateRoot=function(t,e,n){if(!sg(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=pT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=fT(e,null,t,1,n??null,i,!1,s,o),t[er]=e.current,il(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Dd(e)};Qt.render=function(t,e,n){if(!Vd(e))throw Error(z(200));return Od(null,t,e,!1,n)};Qt.unmountComponentAtNode=function(t){if(!Vd(t))throw Error(z(40));return t._reactRootContainer?(Qi(function(){Od(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1};Qt.unstable_batchedUpdates=Xm;Qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Vd(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Od(t,e,n,!1,r)};Qt.version="18.3.1-next-f1338f8080-20240426";function mT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mT)}catch(t){console.error(t)}}mT(),mE.exports=Qt;var WR=mE.exports,gT,jv=WR;gT=jv.createRoot,jv.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fl.apply(this,arguments)}var Lr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Lr||(Lr={}));const Uv="popstate";function KR(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=ds(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),kp("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:Kc(s))}function r(i,s){Md(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return HR(e,n,r,t)}function Oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Md(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function GR(){return Math.random().toString(36).substr(2,8)}function Bv(t,e){return{usr:t.state,key:t.key,idx:e}}function kp(t,e,n,r){return n===void 0&&(n=null),fl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ds(e):e,{state:n,key:e&&e.key||r||GR()})}function Kc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ds(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function HR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Lr.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(fl({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Lr.Pop;let k=d(),v=k==null?null:k-c;c=k,l&&l({action:a,location:S.location,delta:v})}function m(k,v){a=Lr.Push;let g=kp(S.location,k,v);n&&n(g,k),c=d()+1;let I=Bv(g,c),P=S.createHref(g);try{o.pushState(I,"",P)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(P)}s&&l&&l({action:a,location:S.location,delta:1})}function _(k,v){a=Lr.Replace;let g=kp(S.location,k,v);n&&n(g,k),c=d();let I=Bv(g,c),P=S.createHref(g);o.replaceState(I,"",P),s&&l&&l({action:a,location:S.location,delta:0})}function x(k){let v=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof k=="string"?k:Kc(k);return g=g.replace(/ $/,"%20"),Oe(v,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,v)}let S={get action(){return a},get location(){return t(i,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Uv,f),l=k,()=>{i.removeEventListener(Uv,f),l=null}},createHref(k){return e(i,k)},createURL:x,encodeLocation(k){let v=x(k);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:_,go(k){return o.go(k)}};return S}var zv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(zv||(zv={}));function QR(t,e,n){return n===void 0&&(n="/"),YR(t,e,n)}function YR(t,e,n,r){let i=typeof e=="string"?ds(e):e,s=fo(i.pathname||"/",n);if(s==null)return null;let o=yT(t);JR(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=lk(s);a=ok(o[l],c)}return a}function yT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Oe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Hr([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Oe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),yT(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:ik(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of _T(s.path))i(s,o,l)}),e}function _T(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=_T(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function JR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const XR=/^:[\w-]+$/,ZR=3,ek=2,tk=1,nk=10,rk=-2,$v=t=>t==="*";function ik(t,e){let n=t.split("/"),r=n.length;return n.some($v)&&(r+=rk),e&&(r+=ek),n.filter(i=>!$v(i)).reduce((i,s)=>i+(XR.test(s)?ZR:s===""?tk:nk),r)}function sk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ok(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Cp({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),m=l.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Hr([s,f.pathname]),pathnameBase:fk(Hr([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Hr([s,f.pathnameBase]))}return o}function Cp(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ak(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:_}=d;if(m==="*"){let S=a[f]||"";o=s.slice(0,s.length-S.length).replace(/(.)\/+$/,"$1")}const x=a[f];return _&&!x?c[m]=void 0:c[m]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function ak(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Md(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function lk(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Md(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function fo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const uk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ck=t=>uk.test(t);function dk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ds(t):t,s;if(n)if(ck(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Md(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=qv(n.substring(1),"/"):s=qv(n,e)}else s=e;return{pathname:s,search:pk(r),hash:mk(i)}}function qv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _f(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function og(t,e){let n=hk(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ag(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ds(t):(i=fl({},t),Oe(!i.pathname||!i.pathname.includes("?"),_f("?","pathname","search",i)),Oe(!i.pathname||!i.pathname.includes("#"),_f("#","pathname","hash",i)),Oe(!i.search||!i.search.includes("#"),_f("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=dk(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Hr=t=>t.join("/").replace(/\/\/+/g,"/"),fk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),pk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,mk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function gk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const vT=["post","put","patch","delete"];new Set(vT);const yk=["get",...vT];new Set(yk);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pl(){return pl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pl.apply(this,arguments)}const Ld=j.createContext(null),wT=j.createContext(null),ur=j.createContext(null),Fd=j.createContext(null),cr=j.createContext({outlet:null,matches:[],isDataRoute:!1}),ET=j.createContext(null);function _k(t,e){let{relative:n}=e===void 0?{}:e;Oo()||Oe(!1);let{basename:r,navigator:i}=j.useContext(ur),{hash:s,pathname:o,search:a}=jd(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Hr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Oo(){return j.useContext(Fd)!=null}function Mo(){return Oo()||Oe(!1),j.useContext(Fd).location}function IT(t){j.useContext(ur).static||j.useLayoutEffect(t)}function hi(){let{isDataRoute:t}=j.useContext(cr);return t?Nk():vk()}function vk(){Oo()||Oe(!1);let t=j.useContext(Ld),{basename:e,future:n,navigator:r}=j.useContext(ur),{matches:i}=j.useContext(cr),{pathname:s}=Mo(),o=JSON.stringify(og(i,n.v7_relativeSplatPath)),a=j.useRef(!1);return IT(()=>{a.current=!0}),j.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=ag(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Hr([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function wk(){let{matches:t}=j.useContext(cr),e=t[t.length-1];return e?e.params:{}}function jd(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(ur),{matches:i}=j.useContext(cr),{pathname:s}=Mo(),o=JSON.stringify(og(i,r.v7_relativeSplatPath));return j.useMemo(()=>ag(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Ek(t,e){return Ik(t,e)}function Ik(t,e,n,r){Oo()||Oe(!1);let{navigator:i}=j.useContext(ur),{matches:s}=j.useContext(cr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Mo(),d;if(e){var f;let k=typeof e=="string"?ds(e):e;l==="/"||(f=k.pathname)!=null&&f.startsWith(l)||Oe(!1),d=k}else d=c;let m=d.pathname||"/",_=m;if(l!=="/"){let k=l.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(k.length).join("/")}let x=QR(t,{pathname:_}),S=Pk(x&&x.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:Hr([l,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:Hr([l,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return e&&S?j.createElement(Fd.Provider,{value:{location:pl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Lr.Pop}},S):S}function Tk(){let t=Ck(),e=gk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const Sk=j.createElement(Tk,null);class xk extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(cr.Provider,{value:this.props.routeContext},j.createElement(ET.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ak(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(Ld);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(cr.Provider,{value:e},r)}function Pk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Oe(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:_}=n,x=f.route.loader&&m[f.route.id]===void 0&&(!_||_[f.route.id]===void 0);if(f.route.lazy||x){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let _,x=!1,S=null,k=null;n&&(_=a&&f.route.id?a[f.route.id]:void 0,S=f.route.errorElement||Sk,l&&(c<0&&m===0?(Dk("route-fallback"),x=!0,k=null):c===m&&(x=!0,k=f.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,m+1)),g=()=>{let I;return _?I=S:x?I=k:f.route.Component?I=j.createElement(f.route.Component,null):f.route.element?I=f.route.element:I=d,j.createElement(Ak,{match:f,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:I})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?j.createElement(xk,{location:n.location,revalidation:n.revalidation,component:S,error:_,children:g(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):g()},null)}var TT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(TT||{}),ST=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ST||{});function bk(t){let e=j.useContext(Ld);return e||Oe(!1),e}function Rk(t){let e=j.useContext(wT);return e||Oe(!1),e}function kk(t){let e=j.useContext(cr);return e||Oe(!1),e}function xT(t){let e=kk(),n=e.matches[e.matches.length-1];return n.route.id||Oe(!1),n.route.id}function Ck(){var t;let e=j.useContext(ET),n=Rk(),r=xT();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Nk(){let{router:t}=bk(TT.UseNavigateStable),e=xT(ST.UseNavigateStable),n=j.useRef(!1);return IT(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,pl({fromRouteId:e},s)))},[t,e])}const Wv={};function Dk(t,e,n){Wv[t]||(Wv[t]=!0)}function Vk(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Ok(t){let{to:e,replace:n,state:r,relative:i}=t;Oo()||Oe(!1);let{future:s,static:o}=j.useContext(ur),{matches:a}=j.useContext(cr),{pathname:l}=Mo(),c=hi(),d=ag(e,og(a,s.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(d);return j.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Un(t){Oe(!1)}function Mk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Lr.Pop,navigator:s,static:o=!1,future:a}=t;Oo()&&Oe(!1);let l=e.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:l,navigator:s,static:o,future:pl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ds(r));let{pathname:d="/",search:f="",hash:m="",state:_=null,key:x="default"}=r,S=j.useMemo(()=>{let k=fo(d,l);return k==null?null:{location:{pathname:k,search:f,hash:m,state:_,key:x},navigationType:i}},[l,d,f,m,_,x,i]);return S==null?null:j.createElement(ur.Provider,{value:c},j.createElement(Fd.Provider,{children:n,value:S}))}function Lk(t){let{children:e,location:n}=t;return Ek(Np(e),n)}new Promise(()=>{});function Np(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,Np(r.props.children,s));return}r.type!==Un&&Oe(!1),!r.props.index||!r.props.children||Oe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Np(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gc(){return Gc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gc.apply(this,arguments)}function AT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Fk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function jk(t,e){return t.button===0&&(!e||e==="_self")&&!Fk(t)}const Uk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Bk=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],zk="6";try{window.__reactRouterVersion=zk}catch{}const $k=j.createContext({isTransitioning:!1}),qk="startTransition",Kv=Vb[qk];function Wk(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=KR({window:i,v5Compat:!0}));let o=s.current,[a,l]=j.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=j.useCallback(f=>{c&&Kv?Kv(()=>l(f)):l(f)},[l,c]);return j.useLayoutEffect(()=>o.listen(d),[o,d]),j.useEffect(()=>Vk(r),[r]),j.createElement(Mk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Kk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hk=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:d,viewTransition:f}=e,m=AT(e,Uk),{basename:_}=j.useContext(ur),x,S=!1;if(typeof c=="string"&&Gk.test(c)&&(x=c,Kk))try{let I=new URL(window.location.href),P=c.startsWith("//")?new URL(I.protocol+c):new URL(c),L=fo(P.pathname,_);P.origin===I.origin&&L!=null?c=L+P.search+P.hash:S=!0}catch{}let k=_k(c,{relative:i}),v=Yk(c,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:f});function g(I){r&&r(I),I.defaultPrevented||v(I)}return j.createElement("a",Gc({},m,{href:x||k,onClick:S||s?r:g,ref:n,target:l}))}),Gv=j.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:c,children:d}=e,f=AT(e,Bk),m=jd(l,{relative:f.relative}),_=Mo(),x=j.useContext(wT),{navigator:S,basename:k}=j.useContext(ur),v=x!=null&&Jk(m)&&c===!0,g=S.encodeLocation?S.encodeLocation(m).pathname:m.pathname,I=_.pathname,P=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(I=I.toLowerCase(),P=P?P.toLowerCase():null,g=g.toLowerCase()),P&&k&&(P=fo(P,k)||P);const L=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let F=I===g||!o&&I.startsWith(g)&&I.charAt(L)==="/",T=P!=null&&(P===g||!o&&P.startsWith(g)&&P.charAt(g.length)==="/"),w={isActive:F,isPending:T,isTransitioning:v},A=F?r:void 0,b;typeof s=="function"?b=s(w):b=[s,F?"active":null,T?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let C=typeof a=="function"?a(w):a;return j.createElement(Hk,Gc({},f,{"aria-current":A,className:b,ref:n,style:C,to:l,viewTransition:c}),typeof d=="function"?d(w):d)});var Dp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Dp||(Dp={}));var Hv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Hv||(Hv={}));function Qk(t){let e=j.useContext(Ld);return e||Oe(!1),e}function Yk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=hi(),c=Mo(),d=jd(t,{relative:o});return j.useCallback(f=>{if(jk(f,n)){f.preventDefault();let m=r!==void 0?r:Kc(c)===Kc(d);l(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,d,r,i,n,t,s,o,a])}function Jk(t,e){e===void 0&&(e={});let n=j.useContext($k);n==null&&Oe(!1);let{basename:r}=Qk(Dp.useViewTransitionState),i=jd(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=fo(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=fo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Cp(i.pathname,o)!=null||Cp(i.pathname,s)!=null}var Qv={};/**
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
 */const PT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},bT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(m=64)),r.push(n[d],n[f],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(PT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Zk;const m=s<<2|a>>4;if(r.push(m),c!==64){const _=a<<4&240|c>>2;if(r.push(_),f!==64){const x=c<<6&192|f;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Zk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eC=function(t){const e=PT(t);return bT.encodeByteArray(e,!0)},Hc=function(t){return eC(t).replace(/\./g,"")},RT=function(t){try{return bT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nC=()=>tC().__FIREBASE_DEFAULTS__,rC=()=>{if(typeof process>"u"||typeof Qv>"u")return;const t=Qv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&RT(t[1]);return e&&JSON.parse(e)},Ud=()=>{try{return nC()||rC()||iC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},kT=t=>{var e,n;return(n=(e=Ud())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sC=t=>{const e=kT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},CT=()=>{var t;return(t=Ud())===null||t===void 0?void 0:t.config},NT=t=>{var e;return(e=Ud())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class oC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function aC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Hc(JSON.stringify(n)),Hc(JSON.stringify(o)),""].join(".")}/**
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
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function uC(){var t;const e=(t=Ud())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fC(){const t=Qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function DT(){return!uC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lg(){try{return typeof indexedDB=="object"}catch{return!1}}function VT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function pC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const mC="FirebaseError";class On extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mC,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hs.prototype.create)}}class hs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?gC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new On(i,a,r)}}function gC(t,e){return t.replace(yC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const yC=/\{\$([^}]+)}/g;function _C(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Yv(s)&&Yv(o)){if(!Xr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yv(t){return t!==null&&typeof t=="object"}/**
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
 */function Ll(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ba(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ra(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vC(t,e){const n=new wC(t,e);return n.subscribe.bind(n)}class wC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");EC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=vf),i.error===void 0&&(i.error=vf),i.complete===void 0&&(i.complete=vf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function EC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vf(){}/**
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
 */function he(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ki="[DEFAULT]";/**
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
 */class IC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new oC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SC(e))try{this.getOrInitializeService({instanceIdentifier:ki})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ki){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ki){return this.instances.has(e)}getOptions(e=ki){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ki){return this.component?this.component.multipleInstances?e:ki:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TC(t){return t===ki?void 0:t}function SC(t){return t.instantiationMode==="EAGER"}/**
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
 */class xC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const AC={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},PC=ie.INFO,bC={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},RC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ug{constructor(e){this.name=e,this._logLevel=PC,this._logHandler=RC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const kC=(t,e)=>e.some(n=>t instanceof n);let Jv,Xv;function CC(){return Jv||(Jv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NC(){return Xv||(Xv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const OT=new WeakMap,Vp=new WeakMap,MT=new WeakMap,wf=new WeakMap,cg=new WeakMap;function DC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Jn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&OT.set(n,t)}).catch(()=>{}),cg.set(e,t),e}function VC(t){if(Vp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Vp.set(t,e)}let Op={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||MT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OC(t){Op=t(Op)}function MC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ef(this),e,...n);return MT.set(r,e.sort?e.sort():[e]),Jn(r)}:NC().includes(t)?function(...e){return t.apply(Ef(this),e),Jn(OT.get(this))}:function(...e){return Jn(t.apply(Ef(this),e))}}function LC(t){return typeof t=="function"?MC(t):(t instanceof IDBTransaction&&VC(t),kC(t,CC())?new Proxy(t,Op):t)}function Jn(t){if(t instanceof IDBRequest)return DC(t);if(wf.has(t))return wf.get(t);const e=LC(t);return e!==t&&(wf.set(t,e),cg.set(e,t)),e}const Ef=t=>cg.get(t);function Bd(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Jn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Jn(o.result),l.oldVersion,l.newVersion,Jn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function If(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Jn(n).then(()=>{})}const FC=["get","getKey","getAll","getAllKeys","count"],jC=["put","add","delete","clear"],Tf=new Map;function Zv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tf.get(e))return Tf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Tf.set(e,s),s}OC(t=>({...t,get:(e,n,r)=>Zv(e,n)||t.get(e,n,r),has:(e,n)=>!!Zv(e,n)||t.has(e,n)}));/**
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
 */class UC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(BC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function BC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mp="@firebase/app",ew="0.10.13";/**
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
 */const rr=new ug("@firebase/app"),zC="@firebase/app-compat",$C="@firebase/analytics-compat",qC="@firebase/analytics",WC="@firebase/app-check-compat",KC="@firebase/app-check",GC="@firebase/auth",HC="@firebase/auth-compat",QC="@firebase/database",YC="@firebase/data-connect",JC="@firebase/database-compat",XC="@firebase/functions",ZC="@firebase/functions-compat",eN="@firebase/installations",tN="@firebase/installations-compat",nN="@firebase/messaging",rN="@firebase/messaging-compat",iN="@firebase/performance",sN="@firebase/performance-compat",oN="@firebase/remote-config",aN="@firebase/remote-config-compat",lN="@firebase/storage",uN="@firebase/storage-compat",cN="@firebase/firestore",dN="@firebase/vertexai-preview",hN="@firebase/firestore-compat",fN="firebase",pN="10.14.1";/**
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
 */const Qc="[DEFAULT]",mN={[Mp]:"fire-core",[zC]:"fire-core-compat",[qC]:"fire-analytics",[$C]:"fire-analytics-compat",[KC]:"fire-app-check",[WC]:"fire-app-check-compat",[GC]:"fire-auth",[HC]:"fire-auth-compat",[QC]:"fire-rtdb",[YC]:"fire-data-connect",[JC]:"fire-rtdb-compat",[XC]:"fire-fn",[ZC]:"fire-fn-compat",[eN]:"fire-iid",[tN]:"fire-iid-compat",[nN]:"fire-fcm",[rN]:"fire-fcm-compat",[iN]:"fire-perf",[sN]:"fire-perf-compat",[oN]:"fire-rc",[aN]:"fire-rc-compat",[lN]:"fire-gcs",[uN]:"fire-gcs-compat",[cN]:"fire-fst",[hN]:"fire-fst-compat",[dN]:"fire-vertex","fire-js":"fire-js",[fN]:"fire-js-all"};/**
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
 */const Yc=new Map,gN=new Map,Lp=new Map;function tw(t,e){try{t.container.addComponent(e)}catch(n){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dn(t){const e=t.name;if(Lp.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;Lp.set(e,t);for(const n of Yc.values())tw(n,t);for(const n of gN.values())tw(n,t);return!0}function fi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yN(t,e,n=Qc){fi(t,e).clearInstance(n)}function Sn(t){return t.settings!==void 0}/**
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
 */const _N={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qr=new hs("app","Firebase",_N);/**
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
 */class vN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qr.create("app-deleted",{appName:this._name})}}/**
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
 */const Lo=pN;function LT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qr.create("bad-app-name",{appName:String(i)});if(n||(n=CT()),!n)throw Qr.create("no-options");const s=Yc.get(i);if(s){if(Xr(n,s.options)&&Xr(r,s.config))return s;throw Qr.create("duplicate-app",{appName:i})}const o=new xC(i);for(const l of Lp.values())o.addComponent(l);const a=new vN(n,r,o);return Yc.set(i,a),a}function dg(t=Qc){const e=Yc.get(t);if(!e&&t===Qc&&CT())return LT();if(!e)throw Qr.create("no-app",{appName:t});return e}function nn(t,e,n){var r;let i=(r=mN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(a.join(" "));return}Dn(new yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const wN="firebase-heartbeat-database",EN=1,ml="firebase-heartbeat-store";let Sf=null;function FT(){return Sf||(Sf=Bd(wN,EN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ml)}catch(n){console.warn(n)}}}}).catch(t=>{throw Qr.create("idb-open",{originalErrorMessage:t.message})})),Sf}async function IN(t){try{const n=(await FT()).transaction(ml),r=await n.objectStore(ml).get(jT(t));return await n.done,r}catch(e){if(e instanceof On)rr.warn(e.message);else{const n=Qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rr.warn(n.message)}}}async function nw(t,e){try{const r=(await FT()).transaction(ml,"readwrite");await r.objectStore(ml).put(e,jT(t)),await r.done}catch(n){if(n instanceof On)rr.warn(n.message);else{const r=Qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rr.warn(r.message)}}}function jT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const TN=1024,SN=30*24*60*60*1e3;class xN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=rw();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=SN}),this._storage.overwrite(this._heartbeatsCache))}catch(r){rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rw(),{heartbeatsToSend:r,unsentEntries:i}=AN(this._heartbeatsCache.heartbeats),s=Hc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return rr.warn(n),""}}}function rw(){return new Date().toISOString().substring(0,10)}function AN(t,e=TN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),iw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),iw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class PN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lg()?VT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await IN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function iw(t){return Hc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function bN(t){Dn(new yn("platform-logger",e=>new UC(e),"PRIVATE")),Dn(new yn("heartbeat",e=>new xN(e),"PRIVATE")),nn(Mp,ew,t),nn(Mp,ew,"esm2017"),nn("fire-js","")}bN("");function hg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function UT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RN=UT,BT=new hs("auth","Firebase",UT());/**
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
 */const Jc=new ug("@firebase/auth");function kN(t,...e){Jc.logLevel<=ie.WARN&&Jc.warn(`Auth (${Lo}): ${t}`,...e)}function cc(t,...e){Jc.logLevel<=ie.ERROR&&Jc.error(`Auth (${Lo}): ${t}`,...e)}/**
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
 */function _n(t,...e){throw fg(t,...e)}function Rn(t,...e){return fg(t,...e)}function zT(t,e,n){const r=Object.assign(Object.assign({},RN()),{[e]:n});return new hs("auth","Firebase",r).create(e,{appName:t.name})}function Xn(t){return zT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return BT.create(t,...e)}function J(t,e,...n){if(!t)throw fg(e,...n)}function Kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cc(e),new Error(e)}function ir(t,e){t||Kn(e)}/**
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
 */function Fp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function CN(){return sw()==="http:"||sw()==="https:"}function sw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function NN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CN()||dC()||"connection"in navigator)?navigator.onLine:!0}function DN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Fl{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=lC()||hC()}get(){return NN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pg(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class $T{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const VN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ON=new Fl(3e4,6e4);function pi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function dr(t,e,n,r,i={}){return qT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ll(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return cC()||(c.referrerPolicy="no-referrer"),$T.fetch()(WT(t,t.config.apiHost,n,a),c)})}async function qT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VN),e);try{const i=new LN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $u(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $u(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $u(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw $u(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw zT(t,d,c);_n(t,d)}}catch(i){if(i instanceof On)throw i;_n(t,"network-request-failed",{message:String(i)})}}async function jl(t,e,n,r,i={}){const s=await dr(t,e,n,r,i);return"mfaPendingCredential"in s&&_n(t,"multi-factor-auth-required",{_serverResponse:s}),s}function WT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?pg(t.config,i):`${t.config.apiScheme}://${i}`}function MN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rn(this.auth,"network-request-failed")),ON.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $u(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rn(t,e,r);return i.customData._tokenResponse=n,i}function ow(t){return t!==void 0&&t.enterprise!==void 0}class FN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return MN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function jN(t,e){return dr(t,"GET","/v2/recaptchaConfig",pi(t,e))}/**
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
 */async function UN(t,e){return dr(t,"POST","/v1/accounts:delete",e)}async function KT(t,e){return dr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function $a(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BN(t,e=!1){const n=he(t),r=await n.getIdToken(e),i=mg(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:$a(xf(i.auth_time)),issuedAtTime:$a(xf(i.iat)),expirationTime:$a(xf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xf(t){return Number(t)*1e3}function mg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cc("JWT malformed, contained fewer than 3 sections"),null;try{const i=RT(n);return i?JSON.parse(i):(cc("Failed to decode base64 JWT payload"),null)}catch(i){return cc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function aw(t){const e=mg(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function po(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof On&&zN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $N{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$a(this.lastLoginAt),this.creationTime=$a(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await po(t,KT(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?GT(s.providerUserInfo):[],a=WN(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function qN(t){const e=he(t);await Xc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function GT(t){return t.map(e=>{var{providerId:n}=e,r=hg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function KN(t,e){const n=await qT(t,{},async()=>{const r=Ll({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=WT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$T.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GN(t,e){return dr(t,"POST","/v2/accounts:revokeToken",pi(t,e))}/**
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
 */class Zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):aw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=aw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await KN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Zs;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zs,this.toJSON())}_performRefresh(){return Kn("not implemented")}}/**
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
 */function wr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=hg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $N(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await po(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BN(this,e)}reload(){return qN(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(Xn(this.auth));const e=await this.getIdToken();return await po(this,UN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:P,isAnonymous:L,providerData:F,stsTokenManager:T}=n;J(I&&T,e,"internal-error");const w=Zs.fromJSON(this.name,T);J(typeof I=="string",e,"internal-error"),wr(f,e.name),wr(m,e.name),J(typeof P=="boolean",e,"internal-error"),J(typeof L=="boolean",e,"internal-error"),wr(_,e.name),wr(x,e.name),wr(S,e.name),wr(k,e.name),wr(v,e.name),wr(g,e.name);const A=new Gn({uid:I,auth:e,email:m,emailVerified:P,displayName:f,isAnonymous:L,photoURL:x,phoneNumber:_,tenantId:S,stsTokenManager:w,createdAt:v,lastLoginAt:g});return F&&Array.isArray(F)&&(A.providerData=F.map(b=>Object.assign({},b))),k&&(A._redirectEventId=k),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Zs;i.updateFromServerResponse(n);const s=new Gn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?GT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Zs;a.updateFromIdToken(r);const l=new Gn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new jp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const lw=new Map;function Hn(t){ir(t instanceof Function,"Expected a class definition");let e=lw.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lw.set(t,e),e)}/**
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
 */class HT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}HT.type="NONE";const uw=HT;/**
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
 */function dc(t,e,n){return`firebase:${t}:${e}:${n}`}class eo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=dc(this.userKey,i.apiKey,s),this.fullPersistenceKey=dc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new eo(Hn(uw),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Hn(uw);const o=dc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Gn._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new eo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new eo(s,e,r))}}/**
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
 */function cw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(XT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(QT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(eS(e))return"Blackberry";if(tS(e))return"Webos";if(YT(e))return"Safari";if((e.includes("chrome/")||JT(e))&&!e.includes("edge/"))return"Chrome";if(ZT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function QT(t=Qe()){return/firefox\//i.test(t)}function YT(t=Qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function JT(t=Qe()){return/crios\//i.test(t)}function XT(t=Qe()){return/iemobile/i.test(t)}function ZT(t=Qe()){return/android/i.test(t)}function eS(t=Qe()){return/blackberry/i.test(t)}function tS(t=Qe()){return/webos/i.test(t)}function gg(t=Qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HN(t=Qe()){var e;return gg(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QN(){return fC()&&document.documentMode===10}function nS(t=Qe()){return gg(t)||ZT(t)||tS(t)||eS(t)||/windows phone/i.test(t)||XT(t)}/**
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
 */function rS(t,e=[]){let n;switch(t){case"Browser":n=cw(Qe());break;case"Worker":n=`${cw(Qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Lo}/${r}`}/**
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
 */class YN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function JN(t,e={}){return dr(t,"GET","/v2/passwordPolicy",pi(t,e))}/**
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
 */const XN=6;class ZN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:XN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class eD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dw(this),this.idTokenSubscription=new dw(this),this.beforeStateQueue=new YN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=BT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await eo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await KT(this,{idToken:e}),r=await Gn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(Xn(this));const n=e?he(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(Xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(Xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JN(this),n=new ZN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await GN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await eo.create(this,[Hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fs(t){return he(t)}class dw{constructor(e){this.auth=e,this.observer=null,this.addObserver=vC(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tD(t){zd=t}function iS(t){return zd.loadJS(t)}function nD(){return zd.recaptchaEnterpriseScript}function rD(){return zd.gapiScript}function iD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sD="recaptcha-enterprise",oD="NO_RECAPTCHA";class aD{constructor(e){this.type=sD,this.auth=fs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{jN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new FN(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ow(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(oD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ow(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=nD();l.length!==0&&(l+=a),iS(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function hw(t,e,n,r=!1){const i=new aD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Up(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await hw(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await hw(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function lD(t,e){const n=fi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xr(s,e??{}))return i;_n(i,"already-initialized")}return n.initialize({options:e})}function uD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cD(t,e,n){const r=fs(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=sS(e),{host:o,port:a}=dD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),hD()}function sS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dD(t){const e=sS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:fw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:fw(o)}}}function fw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class yg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kn("not implemented")}_getIdTokenResponse(e){return Kn("not implemented")}_linkToIdToken(e,n){return Kn("not implemented")}_getReauthenticationResolver(e){return Kn("not implemented")}}async function fD(t,e){return dr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function pD(t,e){return jl(t,"POST","/v1/accounts:signInWithPassword",pi(t,e))}/**
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
 */async function mD(t,e){return jl(t,"POST","/v1/accounts:signInWithEmailLink",pi(t,e))}async function gD(t,e){return jl(t,"POST","/v1/accounts:signInWithEmailLink",pi(t,e))}/**
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
 */class gl extends yg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new gl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new gl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Up(e,n,"signInWithPassword",pD);case"emailLink":return mD(e,{email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Up(e,r,"signUpPassword",fD);case"emailLink":return gD(e,{idToken:n,email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function to(t,e){return jl(t,"POST","/v1/accounts:signInWithIdp",pi(t,e))}/**
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
 */const yD="http://localhost";class Yi extends yg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=hg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return to(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,to(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,to(e,n)}buildRequest(){const e={requestUri:yD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ll(n)}return e}}/**
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
 */function _D(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vD(t){const e=ba(Ra(t)).link,n=e?ba(Ra(e)).deep_link_id:null,r=ba(Ra(t)).deep_link_id;return(r?ba(Ra(r)).link:null)||r||n||e||t}class _g{constructor(e){var n,r,i,s,o,a;const l=ba(Ra(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=_D((i=l.mode)!==null&&i!==void 0?i:null);J(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=vD(e);try{return new _g(n)}catch{return null}}}/**
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
 */class Fo{constructor(){this.providerId=Fo.PROVIDER_ID}static credential(e,n){return gl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_g.parseLink(n);return J(r,"argument-error"),gl._fromEmailAndCode(e,r.code,r.tenantId)}}Fo.PROVIDER_ID="password";Fo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class oS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ul extends oS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class br extends Ul{constructor(){super("facebook.com")}static credential(e){return Yi._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return br.credential(e.oauthAccessToken)}catch{return null}}}br.FACEBOOK_SIGN_IN_METHOD="facebook.com";br.PROVIDER_ID="facebook.com";/**
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
 */class Rr extends Ul{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yi._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rr.credential(n,r)}catch{return null}}}Rr.GOOGLE_SIGN_IN_METHOD="google.com";Rr.PROVIDER_ID="google.com";/**
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
 */class kr extends Ul{constructor(){super("github.com")}static credential(e){return Yi._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
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
 */class Cr extends Ul{constructor(){super("twitter.com")}static credential(e,n){return Yi._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cr.credential(n,r)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
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
 */async function wD(t,e){return jl(t,"POST","/v1/accounts:signUp",pi(t,e))}/**
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
 */class Ji{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Gn._fromIdTokenResponse(e,r,i),o=pw(r);return new Ji({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=pw(r);return new Ji({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function pw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Zc extends On{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Zc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Zc(e,n,r,i)}}function aS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Zc._fromErrorAndOperation(t,s,e,r):s})}async function ED(t,e,n=!1){const r=await po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ji._forOperation(t,"link",r)}/**
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
 */async function ID(t,e,n=!1){const{auth:r}=t;if(Sn(r.app))return Promise.reject(Xn(r));const i="reauthenticate";try{const s=await po(t,aS(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=mg(s.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),Ji._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&_n(r,"user-mismatch"),s}}/**
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
 */async function lS(t,e,n=!1){if(Sn(t.app))return Promise.reject(Xn(t));const r="signIn",i=await aS(t,r,e),s=await Ji._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function TD(t,e){return lS(fs(t),e)}/**
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
 */async function uS(t){const e=fs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function SD(t,e,n){if(Sn(t.app))return Promise.reject(Xn(t));const r=fs(t),o=await Up(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wD).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&uS(t),l}),a=await Ji._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function xD(t,e,n){return Sn(t.app)?Promise.reject(Xn(t)):TD(he(t),Fo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&uS(t),r})}/**
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
 */async function AD(t,e){return dr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function PD(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=he(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await po(r,AD(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function bD(t,e,n,r){return he(t).onIdTokenChanged(e,n,r)}function RD(t,e,n){return he(t).beforeAuthStateChanged(e,n)}function kD(t,e,n,r){return he(t).onAuthStateChanged(e,n,r)}function CD(t){return he(t).signOut()}const ed="__sak";/**
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
 */class cS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ed,"1"),this.storage.removeItem(ed),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ND=1e3,DD=10;class dS extends cS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);QN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,DD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ND)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dS.type="LOCAL";const VD=dS;/**
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
 */class hS extends cS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hS.type="SESSION";const fS=hS;/**
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
 */function OD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $d{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $d(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await OD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$d.receivers=[];/**
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
 */function vg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class MD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=vg("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function kn(){return window}function LD(t){kn().location.href=t}/**
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
 */function pS(){return typeof kn().WorkerGlobalScope<"u"&&typeof kn().importScripts=="function"}async function FD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function UD(){return pS()?self:null}/**
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
 */const mS="firebaseLocalStorageDb",BD=1,td="firebaseLocalStorage",gS="fbase_key";class Bl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qd(t,e){return t.transaction([td],e?"readwrite":"readonly").objectStore(td)}function zD(){const t=indexedDB.deleteDatabase(mS);return new Bl(t).toPromise()}function Bp(){const t=indexedDB.open(mS,BD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(td,{keyPath:gS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(td)?e(r):(r.close(),await zD(),e(await Bp()))})})}async function mw(t,e,n){const r=qd(t,!0).put({[gS]:e,value:n});return new Bl(r).toPromise()}async function $D(t,e){const n=qd(t,!1).get(e),r=await new Bl(n).toPromise();return r===void 0?null:r.value}function gw(t,e){const n=qd(t,!0).delete(e);return new Bl(n).toPromise()}const qD=800,WD=3;class yS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$d._getInstance(UD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await FD(),!this.activeServiceWorker)return;this.sender=new MD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bp();return await mw(e,ed,"1"),await gw(e,ed),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$D(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=qd(i,!1).getAll();return new Bl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yS.type="LOCAL";const KD=yS;new Fl(3e4,6e4);/**
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
 */function GD(t,e){return e?Hn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wg extends yg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return to(e,this._buildIdpRequest())}_linkToIdToken(e,n){return to(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return to(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function HD(t){return lS(t.auth,new wg(t),t.bypassAuthState)}function QD(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),ID(n,new wg(t),t.bypassAuthState)}async function YD(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),ED(n,new wg(t),t.bypassAuthState)}/**
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
 */class _S{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HD;case"linkViaPopup":case"linkViaRedirect":return YD;case"reauthViaPopup":case"reauthViaRedirect":return QD;default:_n(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const JD=new Fl(2e3,1e4);class Ws extends _S{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ws.currentPopupAction&&Ws.currentPopupAction.cancel(),Ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=vg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JD.get())};e()}}Ws.currentPopupAction=null;/**
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
 */const XD="pendingRedirect",hc=new Map;class ZD extends _S{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hc.get(this.auth._key());if(!e){try{const r=await eV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hc.set(this.auth._key(),e)}return this.bypassAuthState||hc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eV(t,e){const n=rV(e),r=nV(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function tV(t,e){hc.set(t._key(),e)}function nV(t){return Hn(t._redirectPersistence)}function rV(t){return dc(XD,t.config.apiKey,t.name)}async function iV(t,e,n=!1){if(Sn(t.app))return Promise.reject(Xn(t));const r=fs(t),i=GD(r,e),o=await new ZD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const sV=10*60*1e3;class oV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aV(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!vS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sV&&this.cachedEventUids.clear(),this.cachedEventUids.has(yw(e))}saveEventToCache(e){this.cachedEventUids.add(yw(e)),this.lastProcessedEventTime=Date.now()}}function yw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aV(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vS(t);default:return!1}}/**
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
 */async function lV(t,e={}){return dr(t,"GET","/v1/projects",e)}/**
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
 */const uV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cV=/^https?/;async function dV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lV(t);for(const n of e)try{if(hV(n))return}catch{}_n(t,"unauthorized-domain")}function hV(t){const e=Fp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cV.test(n))return!1;if(uV.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const fV=new Fl(3e4,6e4);function _w(){const t=kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pV(t){return new Promise((e,n)=>{var r,i,s;function o(){_w(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_w(),n(Rn(t,"network-request-failed"))},timeout:fV.get()})}if(!((i=(r=kn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=kn().gapi)===null||s===void 0)&&s.load)o();else{const a=iD("iframefcb");return kn()[a]=()=>{gapi.load?o():n(Rn(t,"network-request-failed"))},iS(`${rD()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw fc=null,e})}let fc=null;function mV(t){return fc=fc||pV(t),fc}/**
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
 */const gV=new Fl(5e3,15e3),yV="__/auth/iframe",_V="emulator/auth/iframe",vV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EV(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pg(e,_V):`https://${t.config.authDomain}/${yV}`,r={apiKey:e.apiKey,appName:t.name,v:Lo},i=wV.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ll(r).slice(1)}`}async function IV(t){const e=await mV(t),n=kn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:EV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vV,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),a=kn().setTimeout(()=>{s(o)},gV.get());function l(){kn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const TV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SV=500,xV=600,AV="_blank",PV="http://localhost";class vw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bV(t,e,n,r=SV,i=xV){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},TV),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Qe().toLowerCase();n&&(a=JT(c)?AV:n),QT(c)&&(e=e||PV,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[_,x])=>`${m}${_}=${x},`,"");if(HN(c)&&a!=="_self")return RV(e||"",a),new vw(null);const f=window.open(e||"",a,d);J(f,t,"popup-blocked");try{f.focus()}catch{}return new vw(f)}function RV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const kV="__/auth/handler",CV="emulator/auth/handler",NV=encodeURIComponent("fac");async function ww(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Lo,eventId:i};if(e instanceof oS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_C(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Ul){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${NV}=${encodeURIComponent(l)}`:"";return`${DV(t)}?${Ll(a).slice(1)}${c}`}function DV({config:t}){return t.emulator?pg(t,CV):`https://${t.authDomain}/${kV}`}/**
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
 */const Af="webStorageSupport";class VV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fS,this._completeRedirectFn=iV,this._overrideRedirectResult=tV}async _openPopup(e,n,r,i){var s;ir((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ww(e,n,r,Fp(),i);return bV(e,o,vg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ww(e,n,r,Fp(),i);return LD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await IV(e),r=new oV(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Af,{type:Af},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Af];o!==void 0&&n(!!o),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nS()||YT()||gg()}}const OV=VV;var Ew="@firebase/auth",Iw="1.7.9";/**
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
 */class MV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function LV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function FV(t){Dn(new yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rS(t)},c=new eD(r,i,s,l);return uD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dn(new yn("auth-internal",e=>{const n=fs(e.getProvider("auth").getImmediate());return(r=>new MV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(Ew,Iw,LV(t)),nn(Ew,Iw,"esm2017")}/**
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
 */const jV=5*60,UV=NT("authIdTokenMaxAge")||jV;let Tw=null;const BV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>UV)return;const i=n==null?void 0:n.token;Tw!==i&&(Tw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zV(t=dg()){const e=fi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lD(t,{popupRedirectResolver:OV,persistence:[KD,VD,fS]}),r=NT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=BV(s.toString());RD(n,o,()=>o(n.currentUser)),bD(n,a=>o(a))}}const i=kT("auth");return i&&cD(n,`http://${i}`),n}function $V(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}tD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",$V().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});FV("Browser");var Sw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $i,wS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,w){function A(){}A.prototype=w.prototype,T.D=w.prototype,T.prototype=new A,T.prototype.constructor=T,T.C=function(b,C,D){for(var R=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)R[kt-2]=arguments[kt];return w.prototype[C].apply(b,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,w,A){A||(A=0);var b=Array(16);if(typeof w=="string")for(var C=0;16>C;++C)b[C]=w.charCodeAt(A++)|w.charCodeAt(A++)<<8|w.charCodeAt(A++)<<16|w.charCodeAt(A++)<<24;else for(C=0;16>C;++C)b[C]=w[A++]|w[A++]<<8|w[A++]<<16|w[A++]<<24;w=T.g[0],A=T.g[1],C=T.g[2];var D=T.g[3],R=w+(D^A&(C^D))+b[0]+3614090360&4294967295;w=A+(R<<7&4294967295|R>>>25),R=D+(C^w&(A^C))+b[1]+3905402710&4294967295,D=w+(R<<12&4294967295|R>>>20),R=C+(A^D&(w^A))+b[2]+606105819&4294967295,C=D+(R<<17&4294967295|R>>>15),R=A+(w^C&(D^w))+b[3]+3250441966&4294967295,A=C+(R<<22&4294967295|R>>>10),R=w+(D^A&(C^D))+b[4]+4118548399&4294967295,w=A+(R<<7&4294967295|R>>>25),R=D+(C^w&(A^C))+b[5]+1200080426&4294967295,D=w+(R<<12&4294967295|R>>>20),R=C+(A^D&(w^A))+b[6]+2821735955&4294967295,C=D+(R<<17&4294967295|R>>>15),R=A+(w^C&(D^w))+b[7]+4249261313&4294967295,A=C+(R<<22&4294967295|R>>>10),R=w+(D^A&(C^D))+b[8]+1770035416&4294967295,w=A+(R<<7&4294967295|R>>>25),R=D+(C^w&(A^C))+b[9]+2336552879&4294967295,D=w+(R<<12&4294967295|R>>>20),R=C+(A^D&(w^A))+b[10]+4294925233&4294967295,C=D+(R<<17&4294967295|R>>>15),R=A+(w^C&(D^w))+b[11]+2304563134&4294967295,A=C+(R<<22&4294967295|R>>>10),R=w+(D^A&(C^D))+b[12]+1804603682&4294967295,w=A+(R<<7&4294967295|R>>>25),R=D+(C^w&(A^C))+b[13]+4254626195&4294967295,D=w+(R<<12&4294967295|R>>>20),R=C+(A^D&(w^A))+b[14]+2792965006&4294967295,C=D+(R<<17&4294967295|R>>>15),R=A+(w^C&(D^w))+b[15]+1236535329&4294967295,A=C+(R<<22&4294967295|R>>>10),R=w+(C^D&(A^C))+b[1]+4129170786&4294967295,w=A+(R<<5&4294967295|R>>>27),R=D+(A^C&(w^A))+b[6]+3225465664&4294967295,D=w+(R<<9&4294967295|R>>>23),R=C+(w^A&(D^w))+b[11]+643717713&4294967295,C=D+(R<<14&4294967295|R>>>18),R=A+(D^w&(C^D))+b[0]+3921069994&4294967295,A=C+(R<<20&4294967295|R>>>12),R=w+(C^D&(A^C))+b[5]+3593408605&4294967295,w=A+(R<<5&4294967295|R>>>27),R=D+(A^C&(w^A))+b[10]+38016083&4294967295,D=w+(R<<9&4294967295|R>>>23),R=C+(w^A&(D^w))+b[15]+3634488961&4294967295,C=D+(R<<14&4294967295|R>>>18),R=A+(D^w&(C^D))+b[4]+3889429448&4294967295,A=C+(R<<20&4294967295|R>>>12),R=w+(C^D&(A^C))+b[9]+568446438&4294967295,w=A+(R<<5&4294967295|R>>>27),R=D+(A^C&(w^A))+b[14]+3275163606&4294967295,D=w+(R<<9&4294967295|R>>>23),R=C+(w^A&(D^w))+b[3]+4107603335&4294967295,C=D+(R<<14&4294967295|R>>>18),R=A+(D^w&(C^D))+b[8]+1163531501&4294967295,A=C+(R<<20&4294967295|R>>>12),R=w+(C^D&(A^C))+b[13]+2850285829&4294967295,w=A+(R<<5&4294967295|R>>>27),R=D+(A^C&(w^A))+b[2]+4243563512&4294967295,D=w+(R<<9&4294967295|R>>>23),R=C+(w^A&(D^w))+b[7]+1735328473&4294967295,C=D+(R<<14&4294967295|R>>>18),R=A+(D^w&(C^D))+b[12]+2368359562&4294967295,A=C+(R<<20&4294967295|R>>>12),R=w+(A^C^D)+b[5]+4294588738&4294967295,w=A+(R<<4&4294967295|R>>>28),R=D+(w^A^C)+b[8]+2272392833&4294967295,D=w+(R<<11&4294967295|R>>>21),R=C+(D^w^A)+b[11]+1839030562&4294967295,C=D+(R<<16&4294967295|R>>>16),R=A+(C^D^w)+b[14]+4259657740&4294967295,A=C+(R<<23&4294967295|R>>>9),R=w+(A^C^D)+b[1]+2763975236&4294967295,w=A+(R<<4&4294967295|R>>>28),R=D+(w^A^C)+b[4]+1272893353&4294967295,D=w+(R<<11&4294967295|R>>>21),R=C+(D^w^A)+b[7]+4139469664&4294967295,C=D+(R<<16&4294967295|R>>>16),R=A+(C^D^w)+b[10]+3200236656&4294967295,A=C+(R<<23&4294967295|R>>>9),R=w+(A^C^D)+b[13]+681279174&4294967295,w=A+(R<<4&4294967295|R>>>28),R=D+(w^A^C)+b[0]+3936430074&4294967295,D=w+(R<<11&4294967295|R>>>21),R=C+(D^w^A)+b[3]+3572445317&4294967295,C=D+(R<<16&4294967295|R>>>16),R=A+(C^D^w)+b[6]+76029189&4294967295,A=C+(R<<23&4294967295|R>>>9),R=w+(A^C^D)+b[9]+3654602809&4294967295,w=A+(R<<4&4294967295|R>>>28),R=D+(w^A^C)+b[12]+3873151461&4294967295,D=w+(R<<11&4294967295|R>>>21),R=C+(D^w^A)+b[15]+530742520&4294967295,C=D+(R<<16&4294967295|R>>>16),R=A+(C^D^w)+b[2]+3299628645&4294967295,A=C+(R<<23&4294967295|R>>>9),R=w+(C^(A|~D))+b[0]+4096336452&4294967295,w=A+(R<<6&4294967295|R>>>26),R=D+(A^(w|~C))+b[7]+1126891415&4294967295,D=w+(R<<10&4294967295|R>>>22),R=C+(w^(D|~A))+b[14]+2878612391&4294967295,C=D+(R<<15&4294967295|R>>>17),R=A+(D^(C|~w))+b[5]+4237533241&4294967295,A=C+(R<<21&4294967295|R>>>11),R=w+(C^(A|~D))+b[12]+1700485571&4294967295,w=A+(R<<6&4294967295|R>>>26),R=D+(A^(w|~C))+b[3]+2399980690&4294967295,D=w+(R<<10&4294967295|R>>>22),R=C+(w^(D|~A))+b[10]+4293915773&4294967295,C=D+(R<<15&4294967295|R>>>17),R=A+(D^(C|~w))+b[1]+2240044497&4294967295,A=C+(R<<21&4294967295|R>>>11),R=w+(C^(A|~D))+b[8]+1873313359&4294967295,w=A+(R<<6&4294967295|R>>>26),R=D+(A^(w|~C))+b[15]+4264355552&4294967295,D=w+(R<<10&4294967295|R>>>22),R=C+(w^(D|~A))+b[6]+2734768916&4294967295,C=D+(R<<15&4294967295|R>>>17),R=A+(D^(C|~w))+b[13]+1309151649&4294967295,A=C+(R<<21&4294967295|R>>>11),R=w+(C^(A|~D))+b[4]+4149444226&4294967295,w=A+(R<<6&4294967295|R>>>26),R=D+(A^(w|~C))+b[11]+3174756917&4294967295,D=w+(R<<10&4294967295|R>>>22),R=C+(w^(D|~A))+b[2]+718787259&4294967295,C=D+(R<<15&4294967295|R>>>17),R=A+(D^(C|~w))+b[9]+3951481745&4294967295,T.g[0]=T.g[0]+w&4294967295,T.g[1]=T.g[1]+(C+(R<<21&4294967295|R>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+D&4294967295}r.prototype.u=function(T,w){w===void 0&&(w=T.length);for(var A=w-this.blockSize,b=this.B,C=this.h,D=0;D<w;){if(C==0)for(;D<=A;)i(this,T,D),D+=this.blockSize;if(typeof T=="string"){for(;D<w;)if(b[C++]=T.charCodeAt(D++),C==this.blockSize){i(this,b),C=0;break}}else for(;D<w;)if(b[C++]=T[D++],C==this.blockSize){i(this,b),C=0;break}}this.h=C,this.o+=w},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var w=1;w<T.length-8;++w)T[w]=0;var A=8*this.o;for(w=T.length-8;w<T.length;++w)T[w]=A&255,A/=256;for(this.u(T),T=Array(16),w=A=0;4>w;++w)for(var b=0;32>b;b+=8)T[A++]=this.g[w]>>>b&255;return T};function s(T,w){var A=a;return Object.prototype.hasOwnProperty.call(A,T)?A[T]:A[T]=w(T)}function o(T,w){this.h=w;for(var A=[],b=!0,C=T.length-1;0<=C;C--){var D=T[C]|0;b&&D==w||(A[C]=D,b=!1)}this.g=A}var a={};function l(T){return-128<=T&&128>T?s(T,function(w){return new o([w|0],0>w?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return k(c(-T));for(var w=[],A=1,b=0;T>=A;b++)w[b]=T/A|0,A*=4294967296;return new o(w,0)}function d(T,w){if(T.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(T.charAt(0)=="-")return k(d(T.substring(1),w));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=c(Math.pow(w,8)),b=f,C=0;C<T.length;C+=8){var D=Math.min(8,T.length-C),R=parseInt(T.substring(C,C+D),w);8>D?(D=c(Math.pow(w,D)),b=b.j(D).add(c(R))):(b=b.j(A),b=b.add(c(R)))}return b}var f=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(S(this))return-k(this).m();for(var T=0,w=1,A=0;A<this.g.length;A++){var b=this.i(A);T+=(0<=b?b:4294967296+b)*w,w*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(x(this))return"0";if(S(this))return"-"+k(this).toString(T);for(var w=c(Math.pow(T,6)),A=this,b="";;){var C=P(A,w).g;A=v(A,C.j(w));var D=((0<A.g.length?A.g[0]:A.h)>>>0).toString(T);if(A=C,x(A))return D+b;for(;6>D.length;)D="0"+D;b=D+b}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function x(T){if(T.h!=0)return!1;for(var w=0;w<T.g.length;w++)if(T.g[w]!=0)return!1;return!0}function S(T){return T.h==-1}t.l=function(T){return T=v(this,T),S(T)?-1:x(T)?0:1};function k(T){for(var w=T.g.length,A=[],b=0;b<w;b++)A[b]=~T.g[b];return new o(A,~T.h).add(m)}t.abs=function(){return S(this)?k(this):this},t.add=function(T){for(var w=Math.max(this.g.length,T.g.length),A=[],b=0,C=0;C<=w;C++){var D=b+(this.i(C)&65535)+(T.i(C)&65535),R=(D>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);b=R>>>16,D&=65535,R&=65535,A[C]=R<<16|D}return new o(A,A[A.length-1]&-2147483648?-1:0)};function v(T,w){return T.add(k(w))}t.j=function(T){if(x(this)||x(T))return f;if(S(this))return S(T)?k(this).j(k(T)):k(k(this).j(T));if(S(T))return k(this.j(k(T)));if(0>this.l(_)&&0>T.l(_))return c(this.m()*T.m());for(var w=this.g.length+T.g.length,A=[],b=0;b<2*w;b++)A[b]=0;for(b=0;b<this.g.length;b++)for(var C=0;C<T.g.length;C++){var D=this.i(b)>>>16,R=this.i(b)&65535,kt=T.i(C)>>>16,Ln=T.i(C)&65535;A[2*b+2*C]+=R*Ln,g(A,2*b+2*C),A[2*b+2*C+1]+=D*Ln,g(A,2*b+2*C+1),A[2*b+2*C+1]+=R*kt,g(A,2*b+2*C+1),A[2*b+2*C+2]+=D*kt,g(A,2*b+2*C+2)}for(b=0;b<w;b++)A[b]=A[2*b+1]<<16|A[2*b];for(b=w;b<2*w;b++)A[b]=0;return new o(A,0)};function g(T,w){for(;(T[w]&65535)!=T[w];)T[w+1]+=T[w]>>>16,T[w]&=65535,w++}function I(T,w){this.g=T,this.h=w}function P(T,w){if(x(w))throw Error("division by zero");if(x(T))return new I(f,f);if(S(T))return w=P(k(T),w),new I(k(w.g),k(w.h));if(S(w))return w=P(T,k(w)),new I(k(w.g),w.h);if(30<T.g.length){if(S(T)||S(w))throw Error("slowDivide_ only works with positive integers.");for(var A=m,b=w;0>=b.l(T);)A=L(A),b=L(b);var C=F(A,1),D=F(b,1);for(b=F(b,2),A=F(A,2);!x(b);){var R=D.add(b);0>=R.l(T)&&(C=C.add(A),D=R),b=F(b,1),A=F(A,1)}return w=v(T,C.j(w)),new I(C,w)}for(C=f;0<=T.l(w);){for(A=Math.max(1,Math.floor(T.m()/w.m())),b=Math.ceil(Math.log(A)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),D=c(A),R=D.j(w);S(R)||0<R.l(T);)A-=b,D=c(A),R=D.j(w);x(D)&&(D=m),C=C.add(D),T=v(T,R)}return new I(C,T)}t.A=function(T){return P(this,T).h},t.and=function(T){for(var w=Math.max(this.g.length,T.g.length),A=[],b=0;b<w;b++)A[b]=this.i(b)&T.i(b);return new o(A,this.h&T.h)},t.or=function(T){for(var w=Math.max(this.g.length,T.g.length),A=[],b=0;b<w;b++)A[b]=this.i(b)|T.i(b);return new o(A,this.h|T.h)},t.xor=function(T){for(var w=Math.max(this.g.length,T.g.length),A=[],b=0;b<w;b++)A[b]=this.i(b)^T.i(b);return new o(A,this.h^T.h)};function L(T){for(var w=T.g.length+1,A=[],b=0;b<w;b++)A[b]=T.i(b)<<1|T.i(b-1)>>>31;return new o(A,T.h)}function F(T,w){var A=w>>5;w%=32;for(var b=T.g.length-A,C=[],D=0;D<b;D++)C[D]=0<w?T.i(D+A)>>>w|T.i(D+A+1)<<32-w:T.i(D+A);return new o(C,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,wS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,$i=o}).apply(typeof Sw<"u"?Sw:typeof self<"u"?self:typeof window<"u"?window:{});var qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ES,ka,IS,pc,zp,TS,SS,xS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,h,p){return u==Array.prototype||u==Object.prototype||(u[h]=p.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof qu=="object"&&qu];for(var h=0;h<u.length;++h){var p=u[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(u,h){if(h)e:{var p=r;u=u.split(".");for(var y=0;y<u.length-1;y++){var V=u[y];if(!(V in p))break e;p=p[V]}u=u[u.length-1],y=p[u],h=h(y),h!=y&&h!=null&&e(p,u,{configurable:!0,writable:!0,value:h})}}function s(u,h){u instanceof String&&(u+="");var p=0,y=!1,V={next:function(){if(!y&&p<u.length){var M=p++;return{value:h(M,u[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(u){return u||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var h=typeof u;return h=h!="object"?h:u?Array.isArray(u)?"array":h:"null",h=="array"||h=="object"&&typeof u.length=="number"}function c(u){var h=typeof u;return h=="object"&&u!=null||h=="function"}function d(u,h,p){return u.call.apply(u.bind,arguments)}function f(u,h,p){if(!u)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,y),u.apply(h,V)}}return function(){return u.apply(h,arguments)}}function m(u,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function _(u,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),u.apply(this,y)}}function x(u,h){function p(){}p.prototype=h.prototype,u.aa=h.prototype,u.prototype=new p,u.prototype.constructor=u,u.Qb=function(y,V,M){for(var q=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)q[ve-2]=arguments[ve];return h.prototype[V].apply(y,q)}}function S(u){const h=u.length;if(0<h){const p=Array(h);for(let y=0;y<h;y++)p[y]=u[y];return p}return[]}function k(u,h){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(l(y)){const V=u.length||0,M=y.length||0;u.length=V+M;for(let q=0;q<M;q++)u[V+q]=y[q]}else u.push(y)}}class v{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function g(u){return/^[\s\xa0]*$/.test(u)}function I(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function P(u){return P[" "](u),u}P[" "]=function(){};var L=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function F(u,h,p){for(const y in u)h.call(p,u[y],y,u)}function T(u,h){for(const p in u)h.call(void 0,u[p],p,u)}function w(u){const h={};for(const p in u)h[p]=u[p];return h}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(u,h){let p,y;for(let V=1;V<arguments.length;V++){y=arguments[V];for(p in y)u[p]=y[p];for(let M=0;M<A.length;M++)p=A[M],Object.prototype.hasOwnProperty.call(y,p)&&(u[p]=y[p])}}function C(u){var h=1;u=u.split(":");const p=[];for(;0<h&&u.length;)p.push(u.shift()),h--;return u.length&&p.push(u.join(":")),p}function D(u){a.setTimeout(()=>{throw u},0)}function R(){var u=X;let h=null;return u.g&&(h=u.g,u.g=u.g.next,u.g||(u.h=null),h.next=null),h}class kt{constructor(){this.h=this.g=null}add(h,p){const y=Ln.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var Ln=new v(()=>new ue,u=>u.reset());class ue{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Jt,K=!1,X=new kt,ee=()=>{const u=a.Promise.resolve(void 0);Jt=()=>{u.then(Ie)}};var Ie=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(p){D(p)}var h=Ln;h.j(u),100>h.h&&(h.h++,u.next=h.g,h.g=u)}K=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(u,h){this.type=u,this.g=this.target=h,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var jt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,h=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return u}();function Ut(u,h){if(be.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var p=this.type=u.type,y=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=h,h=u.relatedTarget){if(L){e:{try{P(h.nodeName);var V=!0;break e}catch{}V=!1}V||(h=null)}}else p=="mouseover"?h=u.fromElement:p=="mouseout"&&(h=u.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Bt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ut.aa.h.call(this)}}x(Ut,be);var Bt={2:"touch",3:"pen",4:"mouse"};Ut.prototype.h=function(){Ut.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var an="closure_listenable_"+(1e6*Math.random()|0),wh=0;function Eh(u,h,p,y,V){this.listener=u,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=V,this.key=++wh,this.da=this.fa=!1}function lu(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function uu(u){this.src=u,this.g={},this.h=0}uu.prototype.add=function(u,h,p,y,V){var M=u.toString();u=this.g[M],u||(u=this.g[M]=[],this.h++);var q=Th(u,h,y,V);return-1<q?(h=u[q],p||(h.fa=!1)):(h=new Eh(h,this.src,M,!!y,V),h.fa=p,u.push(h)),h};function Ih(u,h){var p=h.type;if(p in u.g){var y=u.g[p],V=Array.prototype.indexOf.call(y,h,void 0),M;(M=0<=V)&&Array.prototype.splice.call(y,V,1),M&&(lu(h),u.g[p].length==0&&(delete u.g[p],u.h--))}}function Th(u,h,p,y){for(var V=0;V<u.length;++V){var M=u[V];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==y)return V}return-1}var Sh="closure_lm_"+(1e6*Math.random()|0),xh={};function Ny(u,h,p,y,V){if(Array.isArray(h)){for(var M=0;M<h.length;M++)Ny(u,h[M],p,y,V);return null}return p=Oy(p),u&&u[an]?u.K(h,p,c(y)?!!y.capture:!1,V):zP(u,h,p,!1,y,V)}function zP(u,h,p,y,V,M){if(!h)throw Error("Invalid event type");var q=c(V)?!!V.capture:!!V,ve=Ph(u);if(ve||(u[Sh]=ve=new uu(u)),p=ve.add(h,p,y,q,M),p.proxy)return p;if(y=$P(),p.proxy=y,y.src=u,y.listener=p,u.addEventListener)jt||(V=q),V===void 0&&(V=!1),u.addEventListener(h.toString(),y,V);else if(u.attachEvent)u.attachEvent(Vy(h.toString()),y);else if(u.addListener&&u.removeListener)u.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function $P(){function u(p){return h.call(u.src,u.listener,p)}const h=qP;return u}function Dy(u,h,p,y,V){if(Array.isArray(h))for(var M=0;M<h.length;M++)Dy(u,h[M],p,y,V);else y=c(y)?!!y.capture:!!y,p=Oy(p),u&&u[an]?(u=u.i,h=String(h).toString(),h in u.g&&(M=u.g[h],p=Th(M,p,y,V),-1<p&&(lu(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete u.g[h],u.h--)))):u&&(u=Ph(u))&&(h=u.g[h.toString()],u=-1,h&&(u=Th(h,p,y,V)),(p=-1<u?h[u]:null)&&Ah(p))}function Ah(u){if(typeof u!="number"&&u&&!u.da){var h=u.src;if(h&&h[an])Ih(h.i,u);else{var p=u.type,y=u.proxy;h.removeEventListener?h.removeEventListener(p,y,u.capture):h.detachEvent?h.detachEvent(Vy(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=Ph(h))?(Ih(p,u),p.h==0&&(p.src=null,h[Sh]=null)):lu(u)}}}function Vy(u){return u in xh?xh[u]:xh[u]="on"+u}function qP(u,h){if(u.da)u=!0;else{h=new Ut(h,this);var p=u.listener,y=u.ha||u.src;u.fa&&Ah(u),u=p.call(y,h)}return u}function Ph(u){return u=u[Sh],u instanceof uu?u:null}var bh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oy(u){return typeof u=="function"?u:(u[bh]||(u[bh]=function(h){return u.handleEvent(h)}),u[bh])}function dt(){fe.call(this),this.i=new uu(this),this.M=this,this.F=null}x(dt,fe),dt.prototype[an]=!0,dt.prototype.removeEventListener=function(u,h,p,y){Dy(this,u,h,p,y)};function Tt(u,h){var p,y=u.F;if(y)for(p=[];y;y=y.F)p.push(y);if(u=u.M,y=h.type||h,typeof h=="string")h=new be(h,u);else if(h instanceof be)h.target=h.target||u;else{var V=h;h=new be(y,u),b(h,V)}if(V=!0,p)for(var M=p.length-1;0<=M;M--){var q=h.g=p[M];V=cu(q,y,!0,h)&&V}if(q=h.g=u,V=cu(q,y,!0,h)&&V,V=cu(q,y,!1,h)&&V,p)for(M=0;M<p.length;M++)q=h.g=p[M],V=cu(q,y,!1,h)&&V}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var u=this.i,h;for(h in u.g){for(var p=u.g[h],y=0;y<p.length;y++)lu(p[y]);delete u.g[h],u.h--}}this.F=null},dt.prototype.K=function(u,h,p,y){return this.i.add(String(u),h,!1,p,y)},dt.prototype.L=function(u,h,p,y){return this.i.add(String(u),h,!0,p,y)};function cu(u,h,p,y){if(h=u.i.g[String(h)],!h)return!0;h=h.concat();for(var V=!0,M=0;M<h.length;++M){var q=h[M];if(q&&!q.da&&q.capture==p){var ve=q.listener,st=q.ha||q.src;q.fa&&Ih(u.i,q),V=ve.call(st,y)!==!1&&V}}return V&&!y.defaultPrevented}function My(u,h,p){if(typeof u=="function")p&&(u=m(u,p));else if(u&&typeof u.handleEvent=="function")u=m(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(u,h||0)}function Ly(u){u.g=My(()=>{u.g=null,u.i&&(u.i=!1,Ly(u))},u.l);const h=u.h;u.h=null,u.m.apply(null,h)}class WP extends fe{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ly(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jo(u){fe.call(this),this.h=u,this.g={}}x(Jo,fe);var Fy=[];function jy(u){F(u.g,function(h,p){this.g.hasOwnProperty(p)&&Ah(h)},u),u.g={}}Jo.prototype.N=function(){Jo.aa.N.call(this),jy(this)},Jo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rh=a.JSON.stringify,KP=a.JSON.parse,GP=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function kh(){}kh.prototype.h=null;function Uy(u){return u.h||(u.h=u.i())}function By(){}var Xo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ch(){be.call(this,"d")}x(Ch,be);function Nh(){be.call(this,"c")}x(Nh,be);var Ti={},zy=null;function du(){return zy=zy||new dt}Ti.La="serverreachability";function $y(u){be.call(this,Ti.La,u)}x($y,be);function Zo(u){const h=du();Tt(h,new $y(h))}Ti.STAT_EVENT="statevent";function qy(u,h){be.call(this,Ti.STAT_EVENT,u),this.stat=h}x(qy,be);function St(u){const h=du();Tt(h,new qy(h,u))}Ti.Ma="timingevent";function Wy(u,h){be.call(this,Ti.Ma,u),this.size=h}x(Wy,be);function ea(u,h){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},h)}function ta(){this.g=!0}ta.prototype.xa=function(){this.g=!1};function HP(u,h,p,y,V,M){u.info(function(){if(u.g)if(M)for(var q="",ve=M.split("&"),st=0;st<ve.length;st++){var ce=ve[st].split("=");if(1<ce.length){var ht=ce[0];ce=ce[1];var ft=ht.split("_");q=2<=ft.length&&ft[1]=="type"?q+(ht+"="+ce+"&"):q+(ht+"=redacted&")}}else q=null;else q=M;return"XMLHTTP REQ ("+y+") [attempt "+V+"]: "+h+`
`+p+`
`+q})}function QP(u,h,p,y,V,M,q){u.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+V+"]: "+h+`
`+p+`
`+M+" "+q})}function _s(u,h,p,y){u.info(function(){return"XMLHTTP TEXT ("+h+"): "+JP(u,p)+(y?" "+y:"")})}function YP(u,h){u.info(function(){return"TIMEOUT: "+h})}ta.prototype.info=function(){};function JP(u,h){if(!u.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(u=0;u<p.length;u++)if(Array.isArray(p[u])){var y=p[u];if(!(2>y.length)){var V=y[1];if(Array.isArray(V)&&!(1>V.length)){var M=V[0];if(M!="noop"&&M!="stop"&&M!="close")for(var q=1;q<V.length;q++)V[q]=""}}}}return Rh(p)}catch{return h}}var hu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ky={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dh;function fu(){}x(fu,kh),fu.prototype.g=function(){return new XMLHttpRequest},fu.prototype.i=function(){return{}},Dh=new fu;function gr(u,h,p,y){this.j=u,this.i=h,this.l=p,this.R=y||1,this.U=new Jo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gy}function Gy(){this.i=null,this.g="",this.h=!1}var Hy={},Vh={};function Oh(u,h,p){u.L=1,u.v=yu(Fn(h)),u.m=p,u.P=!0,Qy(u,null)}function Qy(u,h){u.F=Date.now(),pu(u),u.A=Fn(u.v);var p=u.A,y=u.R;Array.isArray(y)||(y=[String(y)]),u_(p.i,"t",y),u.C=0,p=u.j.J,u.h=new Gy,u.g=P_(u.j,p?h:null,!u.m),0<u.O&&(u.M=new WP(m(u.Y,u,u.g),u.O)),h=u.U,p=u.g,y=u.ca;var V="readystatechange";Array.isArray(V)||(V&&(Fy[0]=V.toString()),V=Fy);for(var M=0;M<V.length;M++){var q=Ny(p,V[M],y||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=u.H?w(u.H):{},u.m?(u.u||(u.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,h)):(u.u="GET",u.g.ea(u.A,u.u,null,h)),Zo(),HP(u.i,u.u,u.A,u.l,u.R,u.m)}gr.prototype.ca=function(u){u=u.target;const h=this.M;h&&jn(u)==3?h.j():this.Y(u)},gr.prototype.Y=function(u){try{if(u==this.g)e:{const ft=jn(this.g);var h=this.g.Ba();const Es=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||g_(this.g)))){this.J||ft!=4||h==7||(h==8||0>=Es?Zo(3):Zo(2)),Mh(this);var p=this.g.Z();this.X=p;t:if(Yy(this)){var y=g_(this.g);u="";var V=y.length,M=jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Si(this),na(this);var q="";break t}this.h.i=new a.TextDecoder}for(h=0;h<V;h++)this.h.h=!0,u+=this.h.i.decode(y[h],{stream:!(M&&h==V-1)});y.length=0,this.h.g+=u,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=p==200,QP(this.i,this.u,this.A,this.l,this.R,ft,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,st=this.g;if((ve=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(ve)){var ce=ve;break t}}ce=null}if(p=ce)_s(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lh(this,p);else{this.o=!1,this.s=3,St(12),Si(this),na(this);break e}}if(this.P){p=!0;let ln;for(;!this.J&&this.C<q.length;)if(ln=XP(this,q),ln==Vh){ft==4&&(this.s=4,St(14),p=!1),_s(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==Hy){this.s=4,St(15),_s(this.i,this.l,q,"[Invalid Chunk]"),p=!1;break}else _s(this.i,this.l,ln,null),Lh(this,ln);if(Yy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||q.length!=0||this.h.h||(this.s=1,St(16),p=!1),this.o=this.o&&p,!p)_s(this.i,this.l,q,"[Invalid Chunked Response]"),Si(this),na(this);else if(0<q.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),$h(ht),ht.M=!0,St(11))}}else _s(this.i,this.l,q,null),Lh(this,q);ft==4&&Si(this),this.o&&!this.J&&(ft==4?T_(this.j,this):(this.o=!1,pu(this)))}else mb(this.g),p==400&&0<q.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Si(this),na(this)}}}catch{}finally{}};function Yy(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function XP(u,h){var p=u.C,y=h.indexOf(`
`,p);return y==-1?Vh:(p=Number(h.substring(p,y)),isNaN(p)?Hy:(y+=1,y+p>h.length?Vh:(h=h.slice(y,y+p),u.C=y+p,h)))}gr.prototype.cancel=function(){this.J=!0,Si(this)};function pu(u){u.S=Date.now()+u.I,Jy(u,u.I)}function Jy(u,h){if(u.B!=null)throw Error("WatchDog timer not null");u.B=ea(m(u.ba,u),h)}function Mh(u){u.B&&(a.clearTimeout(u.B),u.B=null)}gr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(YP(this.i,this.A),this.L!=2&&(Zo(),St(17)),Si(this),this.s=2,na(this)):Jy(this,this.S-u)};function na(u){u.j.G==0||u.J||T_(u.j,u)}function Si(u){Mh(u);var h=u.M;h&&typeof h.ma=="function"&&h.ma(),u.M=null,jy(u.U),u.g&&(h=u.g,u.g=null,h.abort(),h.ma())}function Lh(u,h){try{var p=u.j;if(p.G!=0&&(p.g==u||Fh(p.h,u))){if(!u.K&&Fh(p.h,u)&&p.G==3){try{var y=p.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var V=y;if(V[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<u.F)Tu(p),Eu(p);else break e;zh(p),St(18)}}else p.za=V[1],0<p.za-p.T&&37500>V[2]&&p.F&&p.v==0&&!p.C&&(p.C=ea(m(p.Za,p),6e3));if(1>=e_(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Ai(p,11)}else if((u.K||p.g==u)&&Tu(p),!g(h))for(V=p.Da.g.parse(h),h=0;h<V.length;h++){let ce=V[h];if(p.T=ce[0],ce=ce[1],p.G==2)if(ce[0]=="c"){p.K=ce[1],p.ia=ce[2];const ht=ce[3];ht!=null&&(p.la=ht,p.j.info("VER="+p.la));const ft=ce[4];ft!=null&&(p.Aa=ft,p.j.info("SVER="+p.Aa));const Es=ce[5];Es!=null&&typeof Es=="number"&&0<Es&&(y=1.5*Es,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const ln=u.g;if(ln){const xu=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xu){var M=y.h;M.g||xu.indexOf("spdy")==-1&&xu.indexOf("quic")==-1&&xu.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(jh(M,M.h),M.h=null))}if(y.D){const qh=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;qh&&(y.ya=qh,Te(y.I,y.D,qh))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-u.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var q=u;if(y.qa=A_(y,y.J?y.ia:null,y.W),q.K){t_(y.h,q);var ve=q,st=y.L;st&&(ve.I=st),ve.B&&(Mh(ve),pu(ve)),y.g=q}else E_(y);0<p.i.length&&Iu(p)}else ce[0]!="stop"&&ce[0]!="close"||Ai(p,7);else p.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Ai(p,7):Bh(p):ce[0]!="noop"&&p.l&&p.l.ta(ce),p.v=0)}}Zo(4)}catch{}}var ZP=class{constructor(u,h){this.g=u,this.map=h}};function Xy(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zy(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function e_(u){return u.h?1:u.g?u.g.size:0}function Fh(u,h){return u.h?u.h==h:u.g?u.g.has(h):!1}function jh(u,h){u.g?u.g.add(h):u.h=h}function t_(u,h){u.h&&u.h==h?u.h=null:u.g&&u.g.has(h)&&u.g.delete(h)}Xy.prototype.cancel=function(){if(this.i=n_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function n_(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let h=u.i;for(const p of u.g.values())h=h.concat(p.D);return h}return S(u.i)}function eb(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var h=[],p=u.length,y=0;y<p;y++)h.push(u[y]);return h}h=[],p=0;for(y in u)h[p++]=u[y];return h}function tb(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var h=[];u=u.length;for(var p=0;p<u;p++)h.push(p);return h}h=[],p=0;for(const y in u)h[p++]=y;return h}}}function r_(u,h){if(u.forEach&&typeof u.forEach=="function")u.forEach(h,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,h,void 0);else for(var p=tb(u),y=eb(u),V=y.length,M=0;M<V;M++)h.call(void 0,y[M],p&&p[M],u)}var i_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nb(u,h){if(u){u=u.split("&");for(var p=0;p<u.length;p++){var y=u[p].indexOf("="),V=null;if(0<=y){var M=u[p].substring(0,y);V=u[p].substring(y+1)}else M=u[p];h(M,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function xi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof xi){this.h=u.h,mu(this,u.j),this.o=u.o,this.g=u.g,gu(this,u.s),this.l=u.l;var h=u.i,p=new sa;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),s_(this,p),this.m=u.m}else u&&(h=String(u).match(i_))?(this.h=!1,mu(this,h[1]||"",!0),this.o=ra(h[2]||""),this.g=ra(h[3]||"",!0),gu(this,h[4]),this.l=ra(h[5]||"",!0),s_(this,h[6]||"",!0),this.m=ra(h[7]||"")):(this.h=!1,this.i=new sa(null,this.h))}xi.prototype.toString=function(){var u=[],h=this.j;h&&u.push(ia(h,o_,!0),":");var p=this.g;return(p||h=="file")&&(u.push("//"),(h=this.o)&&u.push(ia(h,o_,!0),"@"),u.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&u.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&u.push("/"),u.push(ia(p,p.charAt(0)=="/"?sb:ib,!0))),(p=this.i.toString())&&u.push("?",p),(p=this.m)&&u.push("#",ia(p,ab)),u.join("")};function Fn(u){return new xi(u)}function mu(u,h,p){u.j=p?ra(h,!0):h,u.j&&(u.j=u.j.replace(/:$/,""))}function gu(u,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);u.s=h}else u.s=null}function s_(u,h,p){h instanceof sa?(u.i=h,lb(u.i,u.h)):(p||(h=ia(h,ob)),u.i=new sa(h,u.h))}function Te(u,h,p){u.i.set(h,p)}function yu(u){return Te(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function ra(u,h){return u?h?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ia(u,h,p){return typeof u=="string"?(u=encodeURI(u).replace(h,rb),p&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function rb(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var o_=/[#\/\?@]/g,ib=/[#\?:]/g,sb=/[#\?]/g,ob=/[#\?@]/g,ab=/#/g;function sa(u,h){this.h=this.g=null,this.i=u||null,this.j=!!h}function yr(u){u.g||(u.g=new Map,u.h=0,u.i&&nb(u.i,function(h,p){u.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=sa.prototype,t.add=function(u,h){yr(this),this.i=null,u=vs(this,u);var p=this.g.get(u);return p||this.g.set(u,p=[]),p.push(h),this.h+=1,this};function a_(u,h){yr(u),h=vs(u,h),u.g.has(h)&&(u.i=null,u.h-=u.g.get(h).length,u.g.delete(h))}function l_(u,h){return yr(u),h=vs(u,h),u.g.has(h)}t.forEach=function(u,h){yr(this),this.g.forEach(function(p,y){p.forEach(function(V){u.call(h,V,y,this)},this)},this)},t.na=function(){yr(this);const u=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let y=0;y<h.length;y++){const V=u[y];for(let M=0;M<V.length;M++)p.push(h[y])}return p},t.V=function(u){yr(this);let h=[];if(typeof u=="string")l_(this,u)&&(h=h.concat(this.g.get(vs(this,u))));else{u=Array.from(this.g.values());for(let p=0;p<u.length;p++)h=h.concat(u[p])}return h},t.set=function(u,h){return yr(this),this.i=null,u=vs(this,u),l_(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[h]),this.h+=1,this},t.get=function(u,h){return u?(u=this.V(u),0<u.length?String(u[0]):h):h};function u_(u,h,p){a_(u,h),0<p.length&&(u.i=null,u.g.set(vs(u,h),S(p)),u.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var y=h[p];const M=encodeURIComponent(String(y)),q=this.V(y);for(y=0;y<q.length;y++){var V=M;q[y]!==""&&(V+="="+encodeURIComponent(String(q[y]))),u.push(V)}}return this.i=u.join("&")};function vs(u,h){return h=String(h),u.j&&(h=h.toLowerCase()),h}function lb(u,h){h&&!u.j&&(yr(u),u.i=null,u.g.forEach(function(p,y){var V=y.toLowerCase();y!=V&&(a_(this,y),u_(this,V,p))},u)),u.j=h}function ub(u,h){const p=new ta;if(a.Image){const y=new Image;y.onload=_(_r,p,"TestLoadImage: loaded",!0,h,y),y.onerror=_(_r,p,"TestLoadImage: error",!1,h,y),y.onabort=_(_r,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=_(_r,p,"TestLoadImage: timeout",!1,h,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=u}else h(!1)}function cb(u,h){const p=new ta,y=new AbortController,V=setTimeout(()=>{y.abort(),_r(p,"TestPingServer: timeout",!1,h)},1e4);fetch(u,{signal:y.signal}).then(M=>{clearTimeout(V),M.ok?_r(p,"TestPingServer: ok",!0,h):_r(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(V),_r(p,"TestPingServer: error",!1,h)})}function _r(u,h,p,y,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),y(p)}catch{}}function db(){this.g=new GP}function hb(u,h,p){const y=p||"";try{r_(u,function(V,M){let q=V;c(V)&&(q=Rh(V)),h.push(y+M+"="+encodeURIComponent(q))})}catch(V){throw h.push(y+"type="+encodeURIComponent("_badmap")),V}}function _u(u){this.l=u.Ub||null,this.j=u.eb||!1}x(_u,kh),_u.prototype.g=function(){return new vu(this.l,this.j)},_u.prototype.i=function(u){return function(){return u}}({});function vu(u,h){dt.call(this),this.D=u,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(vu,dt),t=vu.prototype,t.open=function(u,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=h,this.readyState=1,aa(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(h.body=u),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oa(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,aa(this)),this.g&&(this.readyState=3,aa(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;c_(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function c_(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var h=u.value?u.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!u.done}))&&(this.response=this.responseText+=h)}u.done?oa(this):aa(this),this.readyState==3&&c_(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,oa(this))},t.Qa=function(u){this.g&&(this.response=u,oa(this))},t.ga=function(){this.g&&oa(this)};function oa(u){u.readyState=4,u.l=null,u.j=null,u.v=null,aa(u)}t.setRequestHeader=function(u,h){this.u.append(u,h)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,u.push(p[0]+": "+p[1]),p=h.next();return u.join(`\r
`)};function aa(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(vu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function d_(u){let h="";return F(u,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function Uh(u,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=d_(p),typeof u=="string"?p!=null&&encodeURIComponent(String(p)):Te(u,h,p))}function je(u){dt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(je,dt);var fb=/^https?$/i,pb=["POST","PUT"];t=je.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);h=h?h.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dh.g(),this.v=this.o?Uy(this.o):Uy(Dh),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(u),!0),this.B=!1}catch(M){h_(this,M);return}if(u=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var V in y)p.set(V,y[V]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())p.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),V=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(pb,h,void 0))||y||V||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,q]of p)this.g.setRequestHeader(M,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{m_(this),this.u=!0,this.g.send(u),this.u=!1}catch(M){h_(this,M)}};function h_(u,h){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=h,u.m=5,f_(u),wu(u)}function f_(u){u.A||(u.A=!0,Tt(u,"complete"),Tt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Tt(this,"complete"),Tt(this,"abort"),wu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wu(this,!0)),je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?p_(this):this.bb())},t.bb=function(){p_(this)};function p_(u){if(u.h&&typeof o<"u"&&(!u.v[1]||jn(u)!=4||u.Z()!=2)){if(u.u&&jn(u)==4)My(u.Ea,0,u);else if(Tt(u,"readystatechange"),jn(u)==4){u.h=!1;try{const q=u.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=q===0){var V=String(u.D).match(i_)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),y=!fb.test(V?V.toLowerCase():"")}p=y}if(p)Tt(u,"complete"),Tt(u,"success");else{u.m=6;try{var M=2<jn(u)?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.Z()+"]",f_(u)}}finally{wu(u)}}}}function wu(u,h){if(u.g){m_(u);const p=u.g,y=u.v[0]?()=>{}:null;u.g=null,u.v=null,h||Tt(u,"ready");try{p.onreadystatechange=y}catch{}}}function m_(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function jn(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<jn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var h=this.g.responseText;return u&&h.indexOf(u)==0&&(h=h.substring(u.length)),KP(h)}};function g_(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function mb(u){const h={};u=(u.g&&2<=jn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<u.length;y++){if(g(u[y]))continue;var p=C(u[y]);const V=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[V]||[];h[V]=M,M.push(p)}T(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function la(u,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[u]||h}function y_(u){this.Aa=0,this.i=[],this.j=new ta,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=la("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=la("baseRetryDelayMs",5e3,u),this.cb=la("retryDelaySeedMs",1e4,u),this.Wa=la("forwardChannelMaxRetries",2,u),this.wa=la("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Xy(u&&u.concurrentRequestLimit),this.Da=new db,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=y_.prototype,t.la=8,t.G=1,t.connect=function(u,h,p,y){St(0),this.W=u,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=A_(this,null,this.W),Iu(this)};function Bh(u){if(__(u),u.G==3){var h=u.U++,p=Fn(u.I);if(Te(p,"SID",u.K),Te(p,"RID",h),Te(p,"TYPE","terminate"),ua(u,p),h=new gr(u,u.j,h),h.L=2,h.v=yu(Fn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=P_(h.j,null),h.g.ea(h.v)),h.F=Date.now(),pu(h)}x_(u)}function Eu(u){u.g&&($h(u),u.g.cancel(),u.g=null)}function __(u){Eu(u),u.u&&(a.clearTimeout(u.u),u.u=null),Tu(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Iu(u){if(!Zy(u.h)&&!u.s){u.s=!0;var h=u.Ga;Jt||ee(),K||(Jt(),K=!0),X.add(h,u),u.B=0}}function gb(u,h){return e_(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=h.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=ea(m(u.Ga,u,h),S_(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const V=new gr(this,this.j,u);let M=this.o;if(this.S&&(M?(M=w(M),b(M,this.S)):M=this.S),this.m!==null||this.O||(V.H=M,M=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=w_(this,V,h),p=Fn(this.I),Te(p,"RID",u),Te(p,"CVER",22),this.D&&Te(p,"X-HTTP-Session-Id",this.D),ua(this,p),M&&(this.O?h="headers="+encodeURIComponent(String(d_(M)))+"&"+h:this.m&&Uh(p,this.m,M)),jh(this.h,V),this.Ua&&Te(p,"TYPE","init"),this.P?(Te(p,"$req",h),Te(p,"SID","null"),V.T=!0,Oh(V,p,null)):Oh(V,p,h),this.G=2}}else this.G==3&&(u?v_(this,u):this.i.length==0||Zy(this.h)||v_(this))};function v_(u,h){var p;h?p=h.l:p=u.U++;const y=Fn(u.I);Te(y,"SID",u.K),Te(y,"RID",p),Te(y,"AID",u.T),ua(u,y),u.m&&u.o&&Uh(y,u.m,u.o),p=new gr(u,u.j,p,u.B+1),u.m===null&&(p.H=u.o),h&&(u.i=h.D.concat(u.i)),h=w_(u,p,1e3),p.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),jh(u.h,p),Oh(p,y,h)}function ua(u,h){u.H&&F(u.H,function(p,y){Te(h,y,p)}),u.l&&r_({},function(p,y){Te(h,y,p)})}function w_(u,h,p){p=Math.min(u.i.length,p);var y=u.l?m(u.l.Na,u.l,u):null;e:{var V=u.i;let M=-1;for(;;){const q=["count="+p];M==-1?0<p?(M=V[0].g,q.push("ofs="+M)):M=0:q.push("ofs="+M);let ve=!0;for(let st=0;st<p;st++){let ce=V[st].g;const ht=V[st].map;if(ce-=M,0>ce)M=Math.max(0,V[st].g-100),ve=!1;else try{hb(ht,q,"req"+ce+"_")}catch{y&&y(ht)}}if(ve){y=q.join("&");break e}}}return u=u.i.splice(0,p),h.D=u,y}function E_(u){if(!u.g&&!u.u){u.Y=1;var h=u.Fa;Jt||ee(),K||(Jt(),K=!0),X.add(h,u),u.v=0}}function zh(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=ea(m(u.Fa,u),S_(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,I_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=ea(m(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),Eu(this),I_(this))};function $h(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function I_(u){u.g=new gr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var h=Fn(u.qa);Te(h,"RID","rpc"),Te(h,"SID",u.K),Te(h,"AID",u.T),Te(h,"CI",u.F?"0":"1"),!u.F&&u.ja&&Te(h,"TO",u.ja),Te(h,"TYPE","xmlhttp"),ua(u,h),u.m&&u.o&&Uh(h,u.m,u.o),u.L&&(u.g.I=u.L);var p=u.g;u=u.ia,p.L=1,p.v=yu(Fn(h)),p.m=null,p.P=!0,Qy(p,u)}t.Za=function(){this.C!=null&&(this.C=null,Eu(this),zh(this),St(19))};function Tu(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function T_(u,h){var p=null;if(u.g==h){Tu(u),$h(u),u.g=null;var y=2}else if(Fh(u.h,h))p=h.D,t_(u.h,h),y=1;else return;if(u.G!=0){if(h.o)if(y==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var V=u.B;y=du(),Tt(y,new Wy(y,p)),Iu(u)}else E_(u);else if(V=h.s,V==3||V==0&&0<h.X||!(y==1&&gb(u,h)||y==2&&zh(u)))switch(p&&0<p.length&&(h=u.h,h.i=h.i.concat(p)),V){case 1:Ai(u,5);break;case 4:Ai(u,10);break;case 3:Ai(u,6);break;default:Ai(u,2)}}}function S_(u,h){let p=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(p*=2),p*h}function Ai(u,h){if(u.j.info("Error code "+h),h==2){var p=m(u.fb,u),y=u.Xa;const V=!y;y=new xi(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||mu(y,"https"),yu(y),V?ub(y.toString(),p):cb(y.toString(),p)}else St(2);u.G=0,u.l&&u.l.sa(h),x_(u),__(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function x_(u){if(u.G=0,u.ka=[],u.l){const h=n_(u.h);(h.length!=0||u.i.length!=0)&&(k(u.ka,h),k(u.ka,u.i),u.h.i.length=0,S(u.i),u.i.length=0),u.l.ra()}}function A_(u,h,p){var y=p instanceof xi?Fn(p):new xi(p);if(y.g!="")h&&(y.g=h+"."+y.g),gu(y,y.s);else{var V=a.location;y=V.protocol,h=h?h+"."+V.hostname:V.hostname,V=+V.port;var M=new xi(null);y&&mu(M,y),h&&(M.g=h),V&&gu(M,V),p&&(M.l=p),y=M}return p=u.D,h=u.ya,p&&h&&Te(y,p,h),Te(y,"VER",u.la),ua(u,y),y}function P_(u,h,p){if(h&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=u.Ca&&!u.pa?new je(new _u({eb:p})):new je(u.pa),h.Ha(u.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function b_(){}t=b_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Su(){}Su.prototype.g=function(u,h){return new zt(u,h)};function zt(u,h){dt.call(this),this.g=new y_(h),this.l=u,this.h=h&&h.messageUrlParams||null,u=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(u?u["X-WebChannel-Content-Type"]=h.messageContentType:u={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(u?u["X-WebChannel-Client-Profile"]=h.va:u={"X-WebChannel-Client-Profile":h.va}),this.g.S=u,(u=h&&h.Sb)&&!g(u)&&(this.g.m=u),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!g(h)&&(this.g.D=h,u=this.h,u!==null&&h in u&&(u=this.h,h in u&&delete u[h])),this.j=new ws(this)}x(zt,dt),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){Bh(this.g)},zt.prototype.o=function(u){var h=this.g;if(typeof u=="string"){var p={};p.__data__=u,u=p}else this.u&&(p={},p.__data__=Rh(u),u=p);h.i.push(new ZP(h.Ya++,u)),h.G==3&&Iu(h)},zt.prototype.N=function(){this.g.l=null,delete this.j,Bh(this.g),delete this.g,zt.aa.N.call(this)};function R_(u){Ch.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var h=u.__sm__;if(h){e:{for(const p in h){u=p;break e}u=void 0}(this.i=u)&&(u=this.i,h=h!==null&&u in h?h[u]:void 0),this.data=h}else this.data=u}x(R_,Ch);function k_(){Nh.call(this),this.status=1}x(k_,Nh);function ws(u){this.g=u}x(ws,b_),ws.prototype.ua=function(){Tt(this.g,"a")},ws.prototype.ta=function(u){Tt(this.g,new R_(u))},ws.prototype.sa=function(u){Tt(this.g,new k_)},ws.prototype.ra=function(){Tt(this.g,"b")},Su.prototype.createWebChannel=Su.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,xS=function(){return new Su},SS=function(){return du()},TS=Ti,zp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},hu.NO_ERROR=0,hu.TIMEOUT=8,hu.HTTP_ERROR=6,pc=hu,Ky.COMPLETE="complete",IS=Ky,By.EventType=Xo,Xo.OPEN="a",Xo.CLOSE="b",Xo.ERROR="c",Xo.MESSAGE="d",dt.prototype.listen=dt.prototype.K,ka=By,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,ES=je}).apply(typeof qu<"u"?qu:typeof self<"u"?self:typeof window<"u"?window:{});const xw="@firebase/firestore";/**
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
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
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
 */let jo="10.14.0";/**
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
 */const Zr=new ug("@firebase/firestore");function Rs(){return Zr.logLevel}function qV(t){Zr.setLogLevel(t)}function B(t,...e){if(Zr.logLevel<=ie.DEBUG){const n=e.map(Eg);Zr.debug(`Firestore (${jo}): ${t}`,...n)}}function $e(t,...e){if(Zr.logLevel<=ie.ERROR){const n=e.map(Eg);Zr.error(`Firestore (${jo}): ${t}`,...n)}}function Gt(t,...e){if(Zr.logLevel<=ie.WARN){const n=e.map(Eg);Zr.warn(`Firestore (${jo}): ${t}`,...n)}}function Eg(t){if(typeof t=="string")return t;try{/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${jo}) INTERNAL ASSERTION FAILED: `+t;throw $e(e),new Error(e)}function Q(t,e){t||G()}function WV(t,e){t||G()}function $(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends On{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class tt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class AS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class KV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GV{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Q(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new tt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new AS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string"),new Ze(e)}}class HV{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class QV{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new HV(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YV{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Q(this.o===void 0);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Q(typeof n.token=="string"),this.R=n.token,new bS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class JV{getToken(){return Promise.resolve(new bS(""))}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */function XV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Ig{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=XV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function mo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function RS(t){return t+"\0"}/**
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
 */class de{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new de(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class yl{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends yl{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const ZV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends yl{construct(e,n,r){return new Ae(e,n,r)}static isValidIdentifier(e){return ZV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ae(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new U(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new U(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new U(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(n)}static emptyPath(){return new Ae([])}}/**
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
 */class go{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function $p(t){return t.fields.find(e=>e.kind===2)}function Ci(t){return t.fields.filter(e=>e.kind!==2)}function e2(t,e){let n=Z(t.collectionGroup,e.collectionGroup);if(n!==0)return n;for(let r=0;r<Math.min(t.fields.length,e.fields.length);++r)if(n=t2(t.fields[r],e.fields[r]),n!==0)return n;return Z(t.fields.length,e.fields.length)}go.UNKNOWN_ID=-1;class qi{constructor(e,n){this.fieldPath=e,this.kind=n}}function t2(t,e){const n=Ae.comparator(t.fieldPath,e.fieldPath);return n!==0?n:Z(t.kind,e.kind)}class yo{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new yo(0,Ht.min())}}function kS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new de(n+1,0):new de(n,r));return new Ht(i,W.empty(),e)}function CS(t){return new Ht(t.readTime,t.key,-1)}class Ht{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ht(Y.min(),W.empty(),-1)}static max(){return new Ht(Y.max(),W.empty(),-1)}}function Tg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
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
 */const NS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function mi(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==NS)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(i=>i?N.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new N((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new N((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Wd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new tt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new qa(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Sg(r.target.error);this.V.reject(new qa(e,i))}}static open(e,n,r,i){try{return new Wd(n,e.transaction(i,r))}catch(s){throw new qa(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(B("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new r2(n)}}class Cn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Cn.S(Qe())===12.2&&$e("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return B("SimpleDb","Removing database:",e),Di(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!lg())return!1;if(Cn.v())return!0;const e=Qe(),n=Cn.S(e),r=0<n&&n<10,i=VS(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(B("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new qa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new U(O.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new U(O.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new qa(e,o))},i.onupgradeneeded=s=>{B("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{B("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Wd.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),N.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(B("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function VS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class n2{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Di(this.B.delete())}}class qa extends U{constructor(e,n){super(O.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function gi(t){return t.name==="IndexedDbTransactionError"}class r2{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(B("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(B("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Di(r)}add(e){return B("SimpleDb","ADD",this.store.name,e,e),Di(this.store.add(e))}get(e){return Di(this.store.get(e)).next(n=>(n===void 0&&(n=null),B("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return B("SimpleDb","DELETE",this.store.name,e),Di(this.store.delete(e))}count(){return B("SimpleDb","COUNT",this.store.name),Di(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new N((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new N((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){B("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new N((r,i)=>{n.onerror=s=>{const o=Sg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new N((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new n2(a),c=n(a.primaryKey,a.value,l);if(c instanceof N){const d=c.catch(f=>(l.done(),N.reject(f)));r.push(d)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>N.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Di(t){return new N((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Sg(r.target.error);n(i)}})}let Aw=!1;function Sg(t){const e=Cn.S(Qe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new U("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Aw||(Aw=!0,setTimeout(()=>{throw r},0)),r}}return t}class i2{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){B("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{B("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){gi(n)?B("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await mi(n)}await this.X(6e4)})}}class s2{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return N.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return B("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(B("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=CS(s);Tg(o,r)>0&&(r=o)}),new Ht(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Dt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Dt.oe=-1;function zl(t){return t==null}function _l(t){return t===0&&1/t==-1/0}function OS(t){return typeof t=="number"&&Number.isInteger(t)&&!_l(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function vt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Pw(e)),e=o2(t.get(n),e);return Pw(e)}function o2(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Pw(t){return t+""}function xn(t){const e=t.length;if(Q(e>=2),e===2)return Q(t.charAt(0)===""&&t.charAt(1)===""),se.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&G(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:G()}s=o+2}return new se(r)}/**
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
 */const bw=["userId","batchId"];/**
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
 */function mc(t,e){return[t,vt(e)]}function MS(t,e,n){return[t,vt(e),n]}const a2={},l2=["prefixPath","collectionGroup","readTime","documentId"],u2=["prefixPath","collectionGroup","documentId"],c2=["collectionGroup","readTime","prefixPath","documentId"],d2=["canonicalId","targetId"],h2=["targetId","path"],f2=["path","targetId"],p2=["collectionId","parent"],m2=["indexId","uid"],g2=["uid","sequenceNumber"],y2=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],_2=["indexId","uid","orderedDocumentKey"],v2=["userId","collectionPath","documentId"],w2=["userId","collectionPath","largestBatchId"],E2=["userId","collectionGroup","largestBatchId"],LS=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],I2=[...LS,"documentOverlays"],FS=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],jS=FS,xg=[...jS,"indexConfiguration","indexState","indexEntries"],T2=xg,S2=[...xg,"globals"];/**
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
 */class qp extends DS{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function Ye(t,e){const n=$(t);return Cn.F(n._e,e)}/**
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
 */function Rw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function US(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function BS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wu(this.root,e,this.comparator,!0)}}class Wu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=s??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new at(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ye{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kw(this.data.getIterator())}getIteratorFrom(e){return new kw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ye(this.comparator);return n.data=e,n}}class kw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ts(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Vt{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new ye(Ae.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class zS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function x2(){return typeof atob<"u"}/**
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
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new zS("Invalid base64 string: "+s):s}}(e);return new Fe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Fe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const A2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sr(t){if(Q(!!t),typeof t=="string"){let e=0;const n=A2.exec(t);if(Q(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function or(t){return typeof t=="string"?Fe.fromBase64String(t):Fe.fromUint8Array(t)}/**
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
 */function Kd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gd(t){const e=t.mapValue.fields.__previous_value__;return Kd(e)?Gd(e):e}function vl(t){const e=sr(t.mapValue.fields.__local_write_time__.timestampValue);return new de(e.seconds,e.nanos)}/**
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
 */class P2{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ei{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ei("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ei&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Fr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},gc={nullValue:"NULL_VALUE"};function ti(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kd(t)?4:$S(t)?9007199254740991:Hd(t)?10:11:G()}function Vn(t,e){if(t===e)return!0;const n=ti(t);if(n!==ti(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vl(t).isEqual(vl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=sr(i.timestampValue),a=sr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return or(i.bytesValue).isEqual(or(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Re(i.geoPointValue.latitude)===Re(s.geoPointValue.latitude)&&Re(i.geoPointValue.longitude)===Re(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Re(i.integerValue)===Re(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Re(i.doubleValue),a=Re(s.doubleValue);return o===a?_l(o)===_l(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return mo(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Rw(o)!==Rw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Vn(o[l],a[l])))return!1;return!0}(t,e);default:return G()}}function wl(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function ni(t,e){if(t===e)return 0;const n=ti(t),r=ti(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Re(s.integerValue||s.doubleValue),l=Re(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Cw(t.timestampValue,e.timestampValue);case 4:return Cw(vl(t),vl(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(s,o){const a=or(s),l=or(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const d=Z(a[c],l[c]);if(d!==0)return d}return Z(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Z(Re(s.latitude),Re(o.latitude));return a!==0?a:Z(Re(s.longitude),Re(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Nw(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,d;const f=s.fields||{},m=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,x=(l=m.value)===null||l===void 0?void 0:l.arrayValue,S=Z(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((d=x==null?void 0:x.values)===null||d===void 0?void 0:d.length)||0);return S!==0?S:Nw(_,x)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Fr.mapValue&&o===Fr.mapValue)return 0;if(s===Fr.mapValue)return 1;if(o===Fr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},d=Object.keys(c);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const m=Z(l[f],d[f]);if(m!==0)return m;const _=ni(a[l[f]],c[d[f]]);if(_!==0)return _}return Z(l.length,d.length)}(t.mapValue,e.mapValue);default:throw G()}}function Cw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=sr(t),r=sr(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function Nw(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ni(n[i],r[i]);if(s)return s}return Z(n.length,r.length)}function _o(t){return Wp(t)}function Wp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return or(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Wp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Wp(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function yc(t){switch(ti(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gd(t);return e?16+yc(e):16;case 5:return 2*t.stringValue.length;case 6:return or(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+yc(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return yi(r.fields,(s,o)=>{i+=s.length+yc(o)}),i}(t.mapValue);default:throw G()}}function Xi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kp(t){return!!t&&"integerValue"in t}function El(t){return!!t&&"arrayValue"in t}function Dw(t){return!!t&&"nullValue"in t}function Vw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _c(t){return!!t&&"mapValue"in t}function Hd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Wa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return yi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Wa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $S(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const qS={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function b2(t){return"nullValue"in t?gc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Xi(ei.empty(),W.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?Hd(t)?qS:{mapValue:{}}:G()}function R2(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Xi(ei.empty(),W.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?qS:"mapValue"in t?Hd(t)?{mapValue:{}}:Fr:G()}function Ow(t,e){const n=ni(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Mw(t,e){const n=ni(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class lt{constructor(e){this.value=e}static empty(){return new lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!_c(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wa(n)}setAll(e){let n=Ae.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Wa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());_c(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];_c(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){yi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new lt(Wa(this.value))}}function WS(t){const e=[];return yi(t.fields,(n,r)=>{const i=new Ae([n]);if(_c(r)){const s=WS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Vt(e)}/**
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
 */class xe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new xe(e,0,Y.min(),Y.min(),Y.min(),lt.empty(),0)}static newFoundDocument(e,n,r,i){return new xe(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new xe(e,2,n,Y.min(),Y.min(),lt.empty(),0)}static newUnknownDocument(e,n){return new xe(e,3,n,Y.min(),Y.min(),lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ri{constructor(e,n){this.position=e,this.inclusive=n}}function Lw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=ni(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Il{constructor(e,n="asc"){this.field=e,this.dir=n}}function k2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */let KS=class{};class oe extends KS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new C2(e,n,r):n==="array-contains"?new V2(e,r):n==="in"?new XS(e,r):n==="not-in"?new O2(e,r):n==="array-contains-any"?new M2(e,r):new oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new N2(e,r):new D2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ni(n,this.value)):n!==null&&ti(this.value)===ti(n)&&this.matchesComparison(ni(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class me extends KS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new me(e,n)}matches(e){return vo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vo(t){return t.op==="and"}function Gp(t){return t.op==="or"}function Ag(t){return GS(t)&&vo(t)}function GS(t){for(const e of t.filters)if(e instanceof me)return!1;return!0}function Hp(t){if(t instanceof oe)return t.field.canonicalString()+t.op.toString()+_o(t.value);if(Ag(t))return t.filters.map(e=>Hp(e)).join(",");{const e=t.filters.map(n=>Hp(n)).join(",");return`${t.op}(${e})`}}function HS(t,e){return t instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.field.isEqual(i.field)&&Vn(r.value,i.value)}(t,e):t instanceof me?function(r,i){return i instanceof me&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&HS(o,i.filters[a]),!0):!1}(t,e):void G()}function QS(t,e){const n=t.filters.concat(e);return me.create(n,t.op)}function YS(t){return t instanceof oe?function(n){return`${n.field.canonicalString()} ${n.op} ${_o(n.value)}`}(t):t instanceof me?function(n){return n.op.toString()+" {"+n.getFilters().map(YS).join(" ,")+"}"}(t):"Filter"}class C2 extends oe{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class N2 extends oe{constructor(e,n){super(e,"in",n),this.keys=JS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class D2 extends oe{constructor(e,n){super(e,"not-in",n),this.keys=JS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function JS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class V2 extends oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return El(n)&&wl(n.arrayValue,this.value)}}class XS extends oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wl(this.value.arrayValue,n)}}class O2 extends oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(wl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wl(this.value.arrayValue,n)}}class M2 extends oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!El(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wl(this.value.arrayValue,r))}}/**
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
 */class L2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Qp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new L2(t,e,n,r,i,s,o)}function Zi(t){const e=$(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),zl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_o(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_o(r)).join(",")),e.ue=n}return e.ue}function $l(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!k2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!HS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fw(t.startAt,e.startAt)&&Fw(t.endAt,e.endAt)}function nd(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function rd(t,e){return t.filters.filter(n=>n instanceof oe&&n.field.isEqual(e))}function jw(t,e,n){let r=gc,i=!0;for(const s of rd(t,e)){let o=gc,a=!0;switch(s.op){case"<":case"<=":o=b2(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=gc}Ow({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Ow({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function Uw(t,e,n){let r=Fr,i=!0;for(const s of rd(t,e)){let o=Fr,a=!0;switch(s.op){case">=":case">":o=R2(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Fr}Mw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Mw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class hr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ZS(t,e,n,r,i,s,o,a){return new hr(t,e,n,r,i,s,o,a)}function Uo(t){return new hr(t)}function Bw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Pg(t){return t.collectionGroup!==null}function no(t){const e=$(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ye(Ae.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Il(s,r))}),n.has(Ae.keyField().canonicalString())||e.ce.push(new Il(Ae.keyField(),r))}return e.ce}function wt(t){const e=$(t);return e.le||(e.le=tx(e,no(t))),e.le}function ex(t){const e=$(t);return e.he||(e.he=tx(e,t.explicitOrderBy)),e.he}function tx(t,e){if(t.limitType==="F")return Qp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Il(i.field,s)});const n=t.endAt?new ri(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ri(t.startAt.position,t.startAt.inclusive):null;return Qp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yp(t,e){const n=t.filters.concat([e]);return new hr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function id(t,e,n){return new hr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ql(t,e){return $l(wt(t),wt(e))&&t.limitType===e.limitType}function nx(t){return`${Zi(wt(t))}|lt:${t.limitType}`}function ks(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>YS(i)).join(", ")}]`),zl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>_o(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>_o(i)).join(",")),`Target(${r})`}(wt(t))}; limitType=${t.limitType})`}function Wl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of no(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=Lw(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,no(r),i)||r.endAt&&!function(o,a,l){const c=Lw(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,no(r),i))}(t,e)}function rx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ix(t){return(e,n)=>{let r=!1;for(const i of no(t)){const s=F2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function F2(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?ni(l,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class fr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){yi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return BS(this.inner)}size(){return this.innerSize}}/**
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
 */const j2=new Ee(W.comparator);function Ot(){return j2}const sx=new Ee(W.comparator);function Ca(...t){let e=sx;for(const n of t)e=e.insert(n.key,n);return e}function ox(t){let e=sx;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function An(){return Ka()}function ax(){return Ka()}function Ka(){return new fr(t=>t.toString(),(t,e)=>t.isEqual(e))}const U2=new Ee(W.comparator),B2=new ye(W.comparator);function te(...t){let e=B2;for(const n of t)e=e.add(n);return e}const z2=new ye(Z);function bg(){return z2}/**
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
 */function Rg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_l(e)?"-0":e}}function lx(t){return{integerValue:""+t}}function ux(t,e){return OS(e)?lx(e):Rg(t,e)}/**
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
 */class Qd{constructor(){this._=void 0}}function $2(t,e,n){return t instanceof wo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Kd(s)&&(s=Gd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof es?dx(t,e):t instanceof ts?hx(t,e):function(i,s){const o=cx(i,s),a=zw(o)+zw(i.Pe);return Kp(o)&&Kp(i.Pe)?lx(a):Rg(i.serializer,a)}(t,e)}function q2(t,e,n){return t instanceof es?dx(t,e):t instanceof ts?hx(t,e):n}function cx(t,e){return t instanceof Eo?function(r){return Kp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class wo extends Qd{}class es extends Qd{constructor(e){super(),this.elements=e}}function dx(t,e){const n=fx(e);for(const r of t.elements)n.some(i=>Vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ts extends Qd{constructor(e){super(),this.elements=e}}function hx(t,e){let n=fx(e);for(const r of t.elements)n=n.filter(i=>!Vn(i,r));return{arrayValue:{values:n}}}class Eo extends Qd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function zw(t){return Re(t.integerValue||t.doubleValue)}function fx(t){return El(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Kl{constructor(e,n){this.field=e,this.transform=n}}function W2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof es&&i instanceof es||r instanceof ts&&i instanceof ts?mo(r.elements,i.elements,Vn):r instanceof Eo&&i instanceof Eo?Vn(r.Pe,i.Pe):r instanceof wo&&i instanceof wo}(t.transform,e.transform)}class K2{constructor(e,n){this.version=e,this.transformResults=n}}class Ce{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ce}static exists(e){return new Ce(void 0,e)}static updateTime(e){return new Ce(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yd{}function px(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zo(t.key,Ce.none()):new Bo(t.key,t.data,Ce.none());{const n=t.data,r=lt.empty();let i=new ye(Ae.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new pr(t.key,r,new Vt(i.toArray()),Ce.none())}}function G2(t,e,n){t instanceof Bo?function(i,s,o){const a=i.value.clone(),l=qw(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof pr?function(i,s,o){if(!vc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=qw(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(mx(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ga(t,e,n,r){return t instanceof Bo?function(s,o,a,l){if(!vc(s.precondition,o))return a;const c=s.value.clone(),d=Ww(s.fieldTransforms,l,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof pr?function(s,o,a,l){if(!vc(s.precondition,o))return a;const c=Ww(s.fieldTransforms,l,o),d=o.data;return d.setAll(mx(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return vc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function H2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=cx(r.transform,i||null);s!=null&&(n===null&&(n=lt.empty()),n.set(r.field,s))}return n||null}function $w(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&mo(r,i,(s,o)=>W2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bo extends Yd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pr extends Yd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mx(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function qw(t,e,n){const r=new Map;Q(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,q2(o,a,n[i]))}return r}function Ww(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,$2(s,o,e))}return r}class zo extends Yd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kg extends Yd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Cg{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&G2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ga(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ga(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ax();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=px(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&mo(this.mutations,e.mutations,(n,r)=>$w(n,r))&&mo(this.baseMutations,e.baseMutations,(n,r)=>$w(n,r))}}class Ng{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Q(e.mutations.length===r.length);let i=function(){return U2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ng(e,n,r,i)}}/**
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
 */class Dg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gx{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
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
 */class Q2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var We,ae;function yx(t){switch(t){default:return G();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function _x(t){if(t===void 0)return $e("GRPC error has no .code"),O.UNKNOWN;switch(t){case We.OK:return O.OK;case We.CANCELLED:return O.CANCELLED;case We.UNKNOWN:return O.UNKNOWN;case We.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case We.INTERNAL:return O.INTERNAL;case We.UNAVAILABLE:return O.UNAVAILABLE;case We.UNAUTHENTICATED:return O.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case We.NOT_FOUND:return O.NOT_FOUND;case We.ALREADY_EXISTS:return O.ALREADY_EXISTS;case We.PERMISSION_DENIED:return O.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case We.ABORTED:return O.ABORTED;case We.OUT_OF_RANGE:return O.OUT_OF_RANGE;case We.UNIMPLEMENTED:return O.UNIMPLEMENTED;case We.DATA_LOSS:return O.DATA_LOSS;default:return G()}}(ae=We||(We={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let sd=null;/**
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
 */function vx(){return new TextEncoder}/**
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
 */const Y2=new $i([4294967295,4294967295],0);function Kw(t){const e=vx().encode(t),n=new wS;return n.update(e),new Uint8Array(n.digest())}function Gw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new $i([n,r],0),new $i([i,s],0)]}class Vg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Na(`Invalid padding: ${n}`);if(r<0)throw new Na(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Na(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Na(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=$i.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply($i.fromNumber(r)));return i.compare(Y2)===1&&(i=new $i([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Kw(e),[r,i]=Gw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Vg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Kw(e),[r,i]=Gw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Na extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Hl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Gl(Y.min(),i,new Ee(Z),Ot(),te())}}class Hl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Hl(r,n,te(),te(),te())}}/**
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
 */class wc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class wx{constructor(e,n){this.targetId=e,this.me=n}}class Ex{constructor(e,n,r=Fe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Hw{constructor(){this.fe=0,this.ge=Yw(),this.pe=Fe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Hl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Yw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class J2{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ot(),this.qe=Qw(),this.Qe=new Ee(Z)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(nd(s))if(r===0){const o=new W(s.path);this.Ue(n,o,xe.newNoDocument(o,Y.min()))}else Q(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}sd==null||sd.et(function(d,f,m,_,x){var S,k,v,g,I,P;const L={localCacheCount:d,existenceFilterCount:f.count,databaseId:m.database,projectId:m.projectId},F=f.unchangedNames;return F&&(L.bloomFilter={applied:x===0,hashCount:(S=F==null?void 0:F.hashCount)!==null&&S!==void 0?S:0,bitmapLength:(g=(v=(k=F==null?void 0:F.bits)===null||k===void 0?void 0:k.bitmap)===null||v===void 0?void 0:v.length)!==null&&g!==void 0?g:0,padding:(P=(I=F==null?void 0:F.bits)===null||I===void 0?void 0:I.padding)!==null&&P!==void 0?P:0,mightContain:T=>{var w;return(w=_==null?void 0:_.mightContain(T))!==null&&w!==void 0&&w}}),L}(o,e.me,this.Le.tt(),a,l))}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=or(r).toUint8Array()}catch(l){if(l instanceof zS)return Gt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Vg(o,i,s)}catch(l){return Gt(l instanceof Na?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&nd(a.target)){const l=new W(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,xe.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Gl(e,n,this.Qe,this.ke,r);return this.ke=Ot(),this.qe=Qw(),this.Qe=new Ee(Z),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Hw,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ye(Z),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Hw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Qw(){return new Ee(W.comparator)}function Yw(){return new Ee(W.comparator)}const X2={asc:"ASCENDING",desc:"DESCENDING"},Z2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eO={and:"AND",or:"OR"};class tO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Jp(t,e){return t.useProto3Json||zl(e)?e:{value:e}}function Io(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ix(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nO(t,e){return Io(t,e.toTimestamp())}function qe(t){return Q(!!t),Y.fromTimestamp(function(n){const r=sr(n);return new de(r.seconds,r.nanos)}(t))}function Og(t,e){return Xp(t,e).canonicalString()}function Xp(t,e){const n=function(i){return new se(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Tx(t){const e=se.fromString(t);return Q(Dx(e)),e}function Tl(t,e){return Og(t.databaseId,e.path)}function Nn(t,e){const n=Tx(e);if(n.get(1)!==t.databaseId.projectId)throw new U(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(Ax(n))}function Sx(t,e){return Og(t.databaseId,e)}function xx(t){const e=Tx(t);return e.length===4?se.emptyPath():Ax(e)}function Zp(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ax(t){return Q(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Jw(t,e,n){return{name:Tl(t,e),fields:n.value.mapValue.fields}}function Px(t,e,n){const r=Nn(t,e.name),i=qe(e.updateTime),s=e.createTime?qe(e.createTime):Y.min(),o=new lt({mapValue:{fields:e.fields}}),a=xe.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function rO(t,e){return"found"in e?function(r,i){Q(!!i.found),i.found.name,i.found.updateTime;const s=Nn(r,i.found.name),o=qe(i.found.updateTime),a=i.found.createTime?qe(i.found.createTime):Y.min(),l=new lt({mapValue:{fields:i.found.fields}});return xe.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){Q(!!i.missing),Q(!!i.readTime);const s=Nn(r,i.missing),o=qe(i.readTime);return xe.newNoDocument(s,o)}(t,e):G()}function iO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Q(d===void 0||typeof d=="string"),Fe.fromBase64String(d||"")):(Q(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Fe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?O.UNKNOWN:_x(c.code);return new U(d,c.message||"")}(o);n=new Ex(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Nn(t,r.document.name),s=qe(r.document.updateTime),o=r.document.createTime?qe(r.document.createTime):Y.min(),a=new lt({mapValue:{fields:r.document.fields}}),l=xe.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new wc(c,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Nn(t,r.document),s=r.readTime?qe(r.readTime):Y.min(),o=xe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new wc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Nn(t,r.document),s=r.removedTargetIds||[];n=new wc([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Q2(i,s),a=r.targetId;n=new wx(a,o)}}return n}function Sl(t,e){let n;if(e instanceof Bo)n={update:Jw(t,e.key,e.value)};else if(e instanceof zo)n={delete:Tl(t,e.key)};else if(e instanceof pr)n={update:Jw(t,e.key,e.data),updateMask:cO(e.fieldMask)};else{if(!(e instanceof kg))return G();n={verify:Tl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof wo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof es)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ts)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Eo)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:nO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function em(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Ce.updateTime(qe(s.updateTime)):s.exists!==void 0?Ce.exists(s.exists):Ce.none()}(e.currentDocument):Ce.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)Q(a.setToServerValue==="REQUEST_TIME"),l=new wo;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];l=new es(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];l=new ts(d)}else"increment"in a?l=new Eo(o,a.increment):G();const c=Ae.fromServerFormat(a.fieldPath);return new Kl(c,l)}(t,i)):[];if(e.update){e.update.name;const i=Nn(t,e.update.name),s=new lt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new Vt(c.map(d=>Ae.fromServerFormat(d)))}(e.updateMask);return new pr(i,s,o,n,r)}return new Bo(i,s,n,r)}if(e.delete){const i=Nn(t,e.delete);return new zo(i,n)}if(e.verify){const i=Nn(t,e.verify);return new kg(i,n)}return G()}function sO(t,e){return t&&t.length>0?(Q(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?qe(i.updateTime):qe(s);return o.isEqual(Y.min())&&(o=qe(s)),new K2(o,i.transformResults||[])}(n,e))):[]}function bx(t,e){return{documents:[Sx(t,e.path)]}}function Jd(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Sx(t,i);const s=function(c){if(c.length!==0)return Nx(me.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Nr(m.field),direction:aO(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Jp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function Rx(t,e,n,r){const{_t:i,parent:s}=Jd(t,e),o={},a=[];let l=0;return n.forEach(c=>{const d=r?c.alias:"aggregate_"+l++;o[d]=c.alias,c.aggregateType==="count"?a.push({alias:d,count:{}}):c.aggregateType==="avg"?a.push({alias:d,avg:{field:Nr(c.fieldPath)}}):c.aggregateType==="sum"&&a.push({alias:d,sum:{field:Nr(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:i.structuredQuery},parent:i.parent},ut:o,parent:s}}function kx(t){let e=xx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Q(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=Cx(f);return m instanceof me&&Ag(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(x){return new Il(Cs(x.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,zl(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,_=f.values||[];return new ri(_,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,_=f.values||[];return new ri(_,m)}(n.endAt)),ZS(e,i,o,s,a,"F",l,c)}function oO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Cx(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Cs(n.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Cs(n.unaryFilter.field);return oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Cs(n.unaryFilter.field);return oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Cs(n.unaryFilter.field);return oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return oe.create(Cs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return me.create(n.compositeFilter.filters.map(r=>Cx(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function aO(t){return X2[t]}function lO(t){return Z2[t]}function uO(t){return eO[t]}function Nr(t){return{fieldPath:t.canonicalString()}}function Cs(t){return Ae.fromServerFormat(t.fieldPath)}function Nx(t){return t instanceof oe?function(n){if(n.op==="=="){if(Vw(n.value))return{unaryFilter:{field:Nr(n.field),op:"IS_NAN"}};if(Dw(n.value))return{unaryFilter:{field:Nr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Vw(n.value))return{unaryFilter:{field:Nr(n.field),op:"IS_NOT_NAN"}};if(Dw(n.value))return{unaryFilter:{field:Nr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nr(n.field),op:lO(n.op),value:n.value}}}(t):t instanceof me?function(n){const r=n.getFilters().map(i=>Nx(i));return r.length===1?r[0]:{compositeFilter:{op:uO(n.op),filters:r}}}(t):G()}function cO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Dx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Qn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),a=Fe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Vx{constructor(e){this.ct=e}}function dO(t,e){let n;if(e.document)n=Px(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=W.fromSegments(e.noDocument.path),i=rs(e.noDocument.readTime);n=xe.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return G();{const r=W.fromSegments(e.unknownDocument.path),i=rs(e.unknownDocument.version);n=xe.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new de(i[0],i[1]);return Y.fromTimestamp(s)}(e.readTime)),n}function Xw(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:od(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Tl(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Io(s,o.version.toTimestamp()),createTime:Io(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ns(e.version)};else{if(!e.isUnknownDocument())return G();r.unknownDocument={path:n.path.toArray(),version:ns(e.version)}}return r}function od(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ns(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function rs(t){const e=new de(t.seconds,t.nanoseconds);return Y.fromTimestamp(e)}function Vi(t,e){const n=(e.baseMutations||[]).map(s=>em(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>em(t.ct,s)),i=de.fromMillis(e.localWriteTimeMs);return new Cg(e.batchId,i,n,r)}function Da(t){const e=rs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?rs(t.lastLimboFreeSnapshotVersion):Y.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return Q(s.documents.length===1),wt(Uo(xx(s.documents[0])))}(t.query):function(s){return wt(kx(s))}(t.query),new Qn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Fe.fromBase64String(t.resumeToken))}function Ox(t,e){const n=ns(e.snapshotVersion),r=ns(e.lastLimboFreeSnapshotVersion);let i;i=nd(e.target)?bx(t.ct,e.target):Jd(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Zi(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Mg(t){const e=kx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?id(e,e.limit,"L"):e}function Pf(t,e){return new Dg(e.largestBatchId,em(t.ct,e.overlayMutation))}function Zw(t,e){const n=e.path.lastSegment();return[t,vt(e.path.popLast()),n]}function e0(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:ns(r.readTime),documentKey:vt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class hO{getBundleMetadata(e,n){return t0(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:rs(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return t0(e).put(function(i){return{bundleId:i.id,createTime:ns(qe(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return n0(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Mg(s.bundledQuery),readTime:rs(s.readTime)}}(r)})}saveNamedQuery(e,n){return n0(e).put(function(i){return{name:i.name,readTime:ns(qe(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function t0(t){return Ye(t,"bundles")}function n0(t){return Ye(t,"namedQueries")}/**
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
 */class Xd{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Xd(e,r)}getOverlay(e,n){return _a(e).get(Zw(this.userId,n)).next(r=>r?Pf(this.serializer,r):null)}getOverlays(e,n){const r=An();return N.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Dg(n,o);i.push(this.ht(e,a))}),N.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(vt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(_a(e).j("collectionPathOverlayIndex",a))}),N.waitFor(s)}getOverlaysForCollection(e,n,r){const i=An(),s=vt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return _a(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=Pf(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=An();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return _a(e).J({index:"collectionGroupOverlayIndex",range:a},(l,c,d)=>{const f=Pf(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):d.done()}).next(()=>s)}ht(e,n){return _a(e).put(function(i,s,o){const[a,l,c]=Zw(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Sl(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function _a(t){return Ye(t,"documentOverlays")}/**
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
 */class fO{Pt(e){return Ye(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?Fe.fromUint8Array(r):Fe.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.Pt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
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
 */class Oi{constructor(){}It(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.dt(n,5);else if("booleanValue"in e)this.dt(n,10),n.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(n,15),n.At(Re(e.integerValue));else if("doubleValue"in e){const r=Re(e.doubleValue);isNaN(r)?this.dt(n,13):(this.dt(n,15),_l(r)?n.At(0):n.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(n,20),typeof r=="string"&&(r=sr(r)),n.Rt(`${r.seconds||""}`),n.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,n),this.ft(n);else if("bytesValue"in e)this.dt(n,30),n.gt(or(e.bytesValue)),this.ft(n);else if("referenceValue"in e)this.yt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(n,45),n.At(r.latitude||0),n.At(r.longitude||0)}else"mapValue"in e?$S(e)?this.dt(n,Number.MAX_SAFE_INTEGER):Hd(e)?this.wt(e.mapValue,n):(this.St(e.mapValue,n),this.ft(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.ft(n)):G()}Vt(e,n){this.dt(n,25),this.Dt(e,n)}Dt(e,n){n.Rt(e)}St(e,n){const r=e.fields||{};this.dt(n,55);for(const i of Object.keys(r))this.Vt(i,n),this.Tt(r[i],n)}wt(e,n){var r,i;const s=e.fields||{};this.dt(n,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(n,15),n.At(Re(a)),this.Vt(o,n),this.Tt(s[o],n)}bt(e,n){const r=e.values||[];this.dt(n,50);for(const i of r)this.Tt(i,n)}yt(e,n){this.dt(n,37),W.fromName(e).path.forEach(r=>{this.dt(n,60),this.Dt(r,n)})}dt(e,n){e.At(n)}ft(e){e.At(2)}}Oi.vt=new Oi;function pO(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function r0(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=pO(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class mO{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=r0(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=r0(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class gO{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class yO{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class va{constructor(){this.jt=new mO,this.Ht=new gO(this.jt),this.Jt=new yO(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class Mi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Mi(this.indexId,this.documentKey,this.arrayValue,r)}}function Er(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=i0(t.arrayValue,e.arrayValue),n!==0?n:(n=i0(t.directionalValue,e.directionalValue),n!==0?n:W.comparator(t.documentKey,e.documentKey)))}function i0(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class s0{constructor(e){this.Xt=new ye((n,r)=>Ae.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(Q(e.collectionGroup===this.collectionId),this.nn)return!1;const n=$p(e);if(n!==void 0&&!this.sn(n))return!1;const r=Ci(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.on(a,l)||!this._n(this.en[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new ye(Ae.comparator);const n=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new qi(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new qi(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new qi(r.field,r.dir==="asc"?0:1)));return new go(go.UNKNOWN_ID,this.collectionId,n,yo.empty())}sn(e){for(const n of this.tn)if(this.on(n,e))return!0;return!1}on(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}_n(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function Mx(t){var e,n;if(Q(t instanceof oe||t instanceof me),t instanceof oe){if(t instanceof XS){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>oe.create(t.field,"==",s)))||[];return me.create(i,"or")}return t}const r=t.filters.map(i=>Mx(i));return me.create(r,t.op)}function _O(t){if(t.getFilters().length===0)return[];const e=rm(Mx(t));return Q(Lx(e)),tm(e)||nm(e)?[e]:e.getFilters()}function tm(t){return t instanceof oe}function nm(t){return t instanceof me&&Ag(t)}function Lx(t){return tm(t)||nm(t)||function(n){if(n instanceof me&&Gp(n)){for(const r of n.getFilters())if(!tm(r)&&!nm(r))return!1;return!0}return!1}(t)}function rm(t){if(Q(t instanceof oe||t instanceof me),t instanceof oe)return t;if(t.filters.length===1)return rm(t.filters[0]);const e=t.filters.map(r=>rm(r));let n=me.create(e,t.op);return n=ad(n),Lx(n)?n:(Q(n instanceof me),Q(vo(n)),Q(n.filters.length>1),n.filters.reduce((r,i)=>Lg(r,i)))}function Lg(t,e){let n;return Q(t instanceof oe||t instanceof me),Q(e instanceof oe||e instanceof me),n=t instanceof oe?e instanceof oe?function(i,s){return me.create([i,s],"and")}(t,e):o0(t,e):e instanceof oe?o0(e,t):function(i,s){if(Q(i.filters.length>0&&s.filters.length>0),vo(i)&&vo(s))return QS(i,s.getFilters());const o=Gp(i)?i:s,a=Gp(i)?s:i,l=o.filters.map(c=>Lg(c,a));return me.create(l,"or")}(t,e),ad(n)}function o0(t,e){if(vo(e))return QS(e,t.getFilters());{const n=e.filters.map(r=>Lg(t,r));return me.create(n,"or")}}function ad(t){if(Q(t instanceof oe||t instanceof me),t instanceof oe)return t;const e=t.getFilters();if(e.length===1)return ad(e[0]);if(GS(t))return t;const n=e.map(i=>ad(i)),r=[];return n.forEach(i=>{i instanceof oe?r.push(i):i instanceof me&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:me.create(r,t.op)}/**
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
 */class vO{constructor(){this.un=new Fg}addToCollectionParentIndex(e,n){return this.un.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Ht.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Ht.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class Fg{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ye(se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ye(se.comparator)).toArray()}}/**
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
 */const Ku=new Uint8Array(0);class wO{constructor(e,n){this.databaseId=n,this.cn=new Fg,this.ln=new fr(r=>Zi(r),(r,i)=>$l(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.cn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.cn.add(n)});const s={collectionId:r,parent:vt(i)};return a0(e).put(s)}return N.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[RS(n),""],!1,!0);return a0(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(xn(o.parent))}return r})}addFieldIndex(e,n){const r=wa(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=xs(e);return s.next(a=>{o.put(e0(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=wa(e),i=xs(e),s=Ss(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=wa(e),r=Ss(e),i=xs(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return N.forEach(this.hn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new s0(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Ss(e);let i=!0;const s=new Map;return N.forEach(this.hn(n),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=te();const a=[];return N.forEach(s,(l,c)=>{B("IndexedDbIndexManager",`Using index ${function(I){return`id=${I.indexId}|cg=${I.collectionGroup}|f=${I.fields.map(P=>`${P.fieldPath}:${P.kind}`).join(",")}`}(l)} to execute ${Zi(n)}`);const d=function(I,P){const L=$p(P);if(L===void 0)return null;for(const F of rd(I,L.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(c,l),f=function(I,P){const L=new Map;for(const F of Ci(P))for(const T of rd(I,F.fieldPath))switch(T.op){case"==":case"in":L.set(F.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return L.set(F.fieldPath.canonicalString(),T.value),Array.from(L.values())}return null}(c,l),m=function(I,P){const L=[];let F=!0;for(const T of Ci(P)){const w=T.kind===0?jw(I,T.fieldPath,I.startAt):Uw(I,T.fieldPath,I.startAt);L.push(w.value),F&&(F=w.inclusive)}return new ri(L,F)}(c,l),_=function(I,P){const L=[];let F=!0;for(const T of Ci(P)){const w=T.kind===0?Uw(I,T.fieldPath,I.endAt):jw(I,T.fieldPath,I.endAt);L.push(w.value),F&&(F=w.inclusive)}return new ri(L,F)}(c,l),x=this.In(l,c,m),S=this.In(l,c,_),k=this.Tn(l,c,f),v=this.En(l.indexId,d,x,m.inclusive,S,_.inclusive,k);return N.forEach(v,g=>r.G(g,n.limit).next(I=>{I.forEach(P=>{const L=W.fromSegments(P.documentKey);o.has(L)||(o=o.add(L),a.push(L))})}))}).next(()=>a)}return N.resolve(null)})}hn(e){let n=this.ln.get(e);return n||(e.filters.length===0?n=[e]:n=_O(me.create(e.filters,"and")).map(r=>Qp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,n),n)}En(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),d=[];for(let f=0;f<l;++f){const m=n?this.dn(n[f/c]):Ku,_=this.An(e,m,r[f%c],i),x=this.Rn(e,m,s[f%c],o),S=a.map(k=>this.An(e,m,k,!0));d.push(...this.createRange(_,x,S))}return d}An(e,n,r,i){const s=new Mi(e,W.empty(),n,r);return i?s:s.Zt()}Rn(e,n,r,i){const s=new Mi(e,W.empty(),n,r);return i?s.Zt():s}Pn(e,n){const r=new s0(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.hn(n);return N.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new ye(Ae.comparator),d=!1;for(const f of l.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:c=c.add(m.field));for(const f of l.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Vn(e,n){const r=new va;for(const i of Ci(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);Oi.vt.It(s,o)}return r.zt()}dn(e){const n=new va;return Oi.vt.It(e,n.Yt(0)),n.zt()}mn(e,n){const r=new va;return Oi.vt.It(Xi(this.databaseId,n),r.Yt(function(s){const o=Ci(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,n,r){if(r===null)return[];let i=[];i.push(new va);let s=0;for(const o of Ci(e)){const a=r[s++];for(const l of i)if(this.fn(n,o.fieldPath)&&El(a))i=this.gn(i,o,a);else{const c=l.Yt(o.kind);Oi.vt.It(a,c)}}return this.pn(i)}In(e,n,r){return this.Tn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}gn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new va;l.seed(a.zt()),Oi.vt.It(o,l.Yt(n.kind)),s.push(l)}return s}fn(e,n){return!!e.filters.find(r=>r instanceof oe&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=wa(e),i=xs(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return N.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(d,f){const m=f?new yo(f.sequenceNumber,new Ht(rs(f.readTime),new W(xn(f.documentKey)),f.largestBatchId)):yo.empty(),_=d.fields.map(([x,S])=>new qi(Ae.fromServerFormat(x),S));return new go(d.indexId,d.collectionGroup,_,m)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Z(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=wa(e),s=xs(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>N.forEach(a,l=>s.put(e0(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return N.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?N.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),N.forEach(a,l=>this.wn(e,i,l).next(c=>{const d=this.Sn(s,l);return c.isEqual(d)?N.resolve():this.bn(e,s,l,c,d)}))))})}Dn(e,n,r,i){return Ss(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return Ss(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=Ss(e);let s=new ye(Er);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{s=s.add(new Mi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,n){let r=new ye(Er);const i=this.Vn(n,e);if(i==null)return r;const s=$p(n);if(s!=null){const o=e.data.field(s.fieldPath);if(El(o))for(const a of o.arrayValue.values||[])r=r.add(new Mi(n.indexId,e.key,this.dn(a),i))}else r=r.add(new Mi(n.indexId,e.key,Ku,i));return r}bn(e,n,r,i,s){B("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,c,d,f,m){const _=l.getIterator(),x=c.getIterator();let S=Ts(_),k=Ts(x);for(;S||k;){let v=!1,g=!1;if(S&&k){const I=d(S,k);I<0?g=!0:I>0&&(v=!0)}else S!=null?g=!0:v=!0;v?(f(k),k=Ts(x)):g?(m(S),S=Ts(_)):(S=Ts(_),k=Ts(x))}}(i,s,Er,a=>{o.push(this.Dn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),N.waitFor(o)}yn(e){let n=1;return xs(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Er(o,a)).filter((o,a,l)=>!a||Er(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Er(o,e),l=Er(o,n);if(a===0)i[0]=e.Zt();else if(a>0&&l<0)i.push(o),i.push(o.Zt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Ku,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Ku,[]];s.push(IDBKeyRange.bound(a,l))}return s}Cn(e,n){return Er(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(l0)}getMinOffset(e,n){return N.mapArray(this.hn(n),r=>this.Pn(e,r).next(i=>i||G())).next(l0)}}function a0(t){return Ye(t,"collectionParents")}function Ss(t){return Ye(t,"indexEntries")}function wa(t){return Ye(t,"indexConfiguration")}function xs(t){return Ye(t,"indexState")}function l0(t){Q(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Tg(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Ht(e.readTime,e.documentKey,n)}/**
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
 */const u0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class yt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function Fx(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(d,f,m)=>(a++,m.delete()));s.push(l.next(()=>{Q(a===1)}));const c=[];for(const d of n.mutations){const f=MS(e,d.key.path,n.batchId);s.push(i.delete(f)),c.push(d.key)}return N.waitFor(s).next(()=>c)}function ld(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw G();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(41943040,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);class Zd{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,n,r,i){Q(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Zd(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ir(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Ns(e),o=Ir(e);return o.add({}).next(a=>{Q(typeof a=="number");const l=new Cg(a,n,r,i),c=function(_,x,S){const k=S.baseMutations.map(g=>Sl(_.ct,g)),v=S.mutations.map(g=>Sl(_.ct,g));return{userId:x,batchId:S.batchId,localWriteTimeMs:S.localWriteTime.toMillis(),baseMutations:k,mutations:v}}(this.serializer,this.userId,l),d=[];let f=new ye((m,_)=>Z(m.canonicalString(),_.canonicalString()));for(const m of i){const _=MS(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),d.push(o.put(c)),d.push(s.put(_,a2))}return f.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Fn[a]=l.keys()}),N.waitFor(d).next(()=>l)})}lookupMutationBatch(e,n){return Ir(e).get(n).next(r=>r?(Q(r.userId===this.userId),Vi(this.serializer,r)):null)}Mn(e,n){return this.Fn[n]?N.resolve(this.Fn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Fn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Ir(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(Q(a.batchId>=r),s=Vi(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Ir(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ir(e).U("userMutationsIndex",n).next(r=>r.map(i=>Vi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=mc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Ns(e).J({range:i},(o,a,l)=>{const[c,d,f]=o,m=xn(d);if(c===this.userId&&n.path.isEqual(m))return Ir(e).get(f).next(_=>{if(!_)throw G();Q(_.userId===this.userId),s.push(Vi(this.serializer,_))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ye(Z);const i=[];return n.forEach(s=>{const o=mc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=Ns(e).J({range:a},(c,d,f)=>{const[m,_,x]=c,S=xn(_);m===this.userId&&s.path.isEqual(S)?r=r.add(x):f.done()});i.push(l)}),N.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=mc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ye(Z);return Ns(e).J({range:o},(l,c,d)=>{const[f,m,_]=l,x=xn(m);f===this.userId&&r.isPrefixOf(x)?x.length===i&&(a=a.add(_)):d.done()}).next(()=>this.xn(e,a))}xn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Ir(e).get(s).next(o=>{if(o===null)throw G();Q(o.userId===this.userId),r.push(Vi(this.serializer,o))}))}),N.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return Fx(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.On(n.batchId)}),N.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return N.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Ns(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=xn(s[1]);i.push(l)}else a.done()}).next(()=>{Q(i.length===0)})})}containsKey(e,n){return jx(e,this.userId,n)}Nn(e){return Ux(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function jx(t,e,n){const r=mc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ns(t).J({range:s,H:!0},(a,l,c)=>{const[d,f,m]=a;d===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function Ir(t){return Ye(t,"mutations")}function Ns(t){return Ye(t,"documentMutations")}function Ux(t){return Ye(t,"mutationQueues")}/**
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
 */class is{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new is(0)}static kn(){return new is(-1)}}/**
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
 */class EO{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.qn(e).next(n=>{const r=new is(n.highestTargetId);return n.highestTargetId=r.next(),this.Qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(n=>Y.fromTimestamp(new de(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Qn(e,i)))}addTargetData(e,n){return this.Kn(e,n).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(n,r),this.Qn(e,r))))}updateTargetData(e,n){return this.Kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>As(e).delete(n.targetId)).next(()=>this.qn(e)).next(r=>(Q(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return As(e).J((o,a)=>{const l=Da(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>N.waitFor(s)).next(()=>i)}forEachTarget(e,n){return As(e).J((r,i)=>{const s=Da(i);n(s)})}qn(e){return c0(e).get("targetGlobalKey").next(n=>(Q(n!==null),n))}Qn(e,n){return c0(e).put("targetGlobalKey",n)}Kn(e,n){return As(e).put(Ox(this.serializer,n))}$n(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Zi(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return As(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=Da(a);$l(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Dr(e);return n.forEach(o=>{const a=vt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),N.waitFor(i)}removeMatchingKeys(e,n,r){const i=Dr(e);return N.forEach(n,s=>{const o=vt(s.path);return N.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Dr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Dr(e);let s=te();return i.J({range:r,H:!0},(o,a,l)=>{const c=xn(o[1]),d=new W(c);s=s.add(d)}).next(()=>s)}containsKey(e,n){const r=vt(n.path),i=IDBKeyRange.bound([r],[RS(r)],!1,!0);let s=0;return Dr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return As(e).get(n).next(r=>r?Da(r):null)}}function As(t){return Ye(t,"targets")}function c0(t){return Ye(t,"targetGlobal")}function Dr(t){return Ye(t,"targetDocuments")}/**
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
 */function d0([t,e],[n,r]){const i=Z(t,n);return i===0?Z(e,r):i}class IO{constructor(e){this.Un=e,this.buffer=new ye(d0),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();d0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Bx{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){B("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){gi(n)?B("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await mi(n)}await this.Hn(3e5)})}}class TO{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return N.resolve(Dt.oe);const r=new IO(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(u0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),u0):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,a,l,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Rs()<=ie.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-d}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function zx(t,e){return new TO(t,e)}/**
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
 */class SO{constructor(e,n){this.db=e,this.garbageCollector=zx(this,n)}Yn(e){const n=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Zn(e,n){return this.tr(e,(r,i)=>n(i))}addReference(e,n,r){return Gu(e,r)}removeReference(e,n,r){return Gu(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Gu(e,n)}nr(e,n){return function(i,s){let o=!1;return Ux(i).Y(a=>jx(i,a,s).next(l=>(l&&(o=!0),N.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=n){const l=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Y.min()),Dr(e).delete(function(f){return[0,vt(f.path)]}(o))))});i.push(l)}}).next(()=>N.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Gu(e,n)}tr(e,n){const r=Dr(e);let i,s=Dt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==Dt.oe&&n(new W(xn(i)),s),s=c,i=l):s=Dt.oe}).next(()=>{s!==Dt.oe&&n(new W(xn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Gu(t,e){return Dr(t).put(function(r,i){return{targetId:0,path:vt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class $x{constructor(){this.changes=new fr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class xO{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Pi(e).put(r)}removeEntry(e,n,r){return Pi(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],od(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.rr(e,r)))}getEntry(e,n){let r=xe.newInvalidDocument(n);return Pi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Ea(n))},(i,s)=>{r=this.ir(n,s)}).next(()=>r)}sr(e,n){let r={size:0,document:xe.newInvalidDocument(n)};return Pi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Ea(n))},(i,s)=>{r={document:this.ir(n,s),size:ld(s)}}).next(()=>r)}getEntries(e,n){let r=Ot();return this._r(e,n,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,n){let r=Ot(),i=new Ee(W.comparator);return this._r(e,n,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,ld(o))}).next(()=>({documents:r,ur:i}))}_r(e,n,r){if(n.isEmpty())return N.resolve();let i=new ye(p0);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Ea(i.first()),Ea(i.last())),o=i.getIterator();let a=o.getNext();return Pi(e).J({index:"documentKeyIndex",range:s},(l,c,d)=>{const f=W.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&p0(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.$(Ea(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),od(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Pi(e).U(IDBKeyRange.bound(a,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=Ot();for(const f of c){const m=this.ir(W.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(Wl(n,m)||i.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,n,r,i){let s=Ot();const o=f0(n,r),a=f0(n,Ht.max());return Pi(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,d)=>{const f=this.ir(W.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new AO(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return h0(e).get("remoteDocumentGlobalKey").next(n=>(Q(!!n),n))}rr(e,n){return h0(e).put("remoteDocumentGlobalKey",n)}ir(e,n){if(n){const r=dO(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(Y.min())))return r}return xe.newInvalidDocument(e)}}function qx(t){return new xO(t)}class AO extends $x{constructor(e,n){super(),this.cr=e,this.trackRemovals=n,this.lr=new fr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ye((s,o)=>Z(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(n.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=Xw(this.cr.serializer,o);i=i.add(s.path.popLast());const c=ld(l);r+=c-a.size,n.push(this.cr.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=Xw(this.cr.serializer,o.convertToNoDocument(Y.min()));n.push(this.cr.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.cr.updateMetadata(e,r)),N.waitFor(n)}getFromCache(e,n){return this.cr.sr(e,n).next(r=>(this.lr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.cr.ar(e,n).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function h0(t){return Ye(t,"remoteDocumentGlobal")}function Pi(t){return Ye(t,"remoteDocumentsV14")}function Ea(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function f0(t,e){const n=e.documentKey.path.toArray();return[t,od(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function p0(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Z(n[s],r[s]),i)return i;return i=Z(n.length,r.length),i||(i=Z(n[n.length-2],r[r.length-2]),i||Z(n[n.length-1],r[r.length-1]))}/**
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
 */class PO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Wx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ga(r.mutation,i,Vt.empty(),de.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=An();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ca();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=An();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Ot();const o=Ka(),a=function(){return Ka()}();return n.forEach((l,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof pr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Ga(d.mutation,c,d.mutation.getFieldMask(),de.now())):o.set(c.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new PO(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ka();let i=new Ee((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let d=r.get(l)||Vt.empty();d=a.applyToLocalView(c,d),r.set(l,d);const f=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,d=l.value,f=ax();d.forEach(m=>{if(!s.has(m)){const _=px(n.get(m),r.get(m));_!==null&&f.set(m,_),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Pg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):N.resolve(An());let a=-1,l=s;return o.next(c=>N.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?N.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,te())).next(d=>({batchId:a,changes:ox(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Ca();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ca();return this.indexManager.getCollectionParents(e,s).next(a=>N.forEach(a,l=>{const c=function(f,m){return new hr(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,xe.newInvalidDocument(d)))});let a=Ca();return o.forEach((l,c)=>{const d=s.get(l);d!==void 0&&Ga(d.mutation,c,Vt.empty(),de.now()),Wl(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class bO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return N.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:qe(i.createTime)}}(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Mg(i.bundledQuery),readTime:qe(i.readTime)}}(n)),N.resolve()}}/**
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
 */class RO{constructor(){this.overlays=new Ee(W.comparator),this.Ir=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=An();return N.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const i=An(),s=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=An(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=An(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return N.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Dg(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class kO{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,N.resolve()}}/**
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
 */class jg{constructor(){this.Tr=new ye(Je.Er),this.dr=new ye(Je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Je(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new W(new se([])),r=new Je(n,e),i=new Je(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new W(new se([])),r=new Je(n,e),i=new Je(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Je(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return W.comparator(e.key,n.key)||Z(e.wr,n.wr)}static Ar(e,n){return Z(e.wr,n.wr)||W.comparator(e.key,n.key)}}/**
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
 */class CO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ye(Je.Er)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Cg(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Je(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ye(Z);return n.forEach(i=>{const s=new Je(i,0),o=new Je(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),N.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Je(new W(s),0);let a=new ye(Z);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.wr)),!0)},o),N.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Q(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return N.forEach(n.mutations,i=>{const s=new Je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Je(n,0),i=this.br.firstAfterOrEqual(r);return N.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class NO{constructor(e){this.Mr=e,this.docs=function(){return new Ee(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():xe.newInvalidDocument(n))}getEntries(e,n){let r=Ot();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():xe.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ot();const o=n.path,a=new W(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:d}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Tg(CS(d),r)<=0||(i.has(d.key)||Wl(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Or(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new DO(this)}getSize(e){return N.resolve(this.size)}}class DO extends $x{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class VO{constructor(e){this.persistence=e,this.Nr=new fr(n=>Zi(n),$l),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new jg,this.targetCount=0,this.kr=is.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),N.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new is(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Kn(n),N.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.Br.containsKey(n))}}/**
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
 */class Ug{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Dt(0),this.Kr=!1,this.Kr=!0,this.$r=new kO,this.referenceDelegate=e(this),this.Ur=new VO(this),this.indexManager=new vO,this.remoteDocumentCache=function(i){return new NO(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Vx(n),this.Gr=new bO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new RO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new CO(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new OO(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return N.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class OO extends DS{constructor(e){super(),this.currentSequenceNumber=e}}class eh{constructor(e){this.persistence=e,this.Jr=new jg,this.Yr=null}static Zr(e){return new eh(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),N.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Xr,r=>{const i=W.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return N.or([()=>N.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}class ud{constructor(e,n){this.persistence=e,this.ti=new fr(r=>vt(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=zx(this,n)}static Zr(e,n){return new ud(e,n)}zr(){}jr(e){return N.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Yn(e){const n=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}Zn(e,n){return N.forEach(this.ti,(r,i)=>this.nr(e,r,i).next(s=>s?N.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Or(e,o=>this.nr(e,o,n).next(a=>{a||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ti.set(n,e.currentSequenceNumber),N.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,n){return this.ti.set(n,e.currentSequenceNumber),N.resolve()}Wr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=yc(e.data.value)),n}nr(e,n,r){return N.or([()=>this.persistence.Hr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ti.get(n);return N.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class MO{constructor(e){this.serializer=e}O(e,n,r,i){const s=new Wd("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",bw,{unique:!0}),l.createObjectStore("documentMutations")}(e),m0(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=N.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),m0(e)),o=o.next(()=>function(l){const c=l.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Y.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store("mutations").U().next(d=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",bw,{unique:!0});const f=c.store("mutations"),m=d.map(_=>f.put(_));return N.waitFor(m)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:v2});c.createIndex("collectionPathOverlayIndex",w2,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",E2,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:l2});c.createIndex("documentKeyIndex",u2),c.createIndex("collectionGroupIndex",c2)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:m2}).createIndex("sequenceNumberIndex",g2,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:y2}).createIndex("documentKeyIndex",_2,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=ld(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>N.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>N.forEach(a,l=>{Q(l.userId===s.userId);const c=Vi(this.serializer,l);return Fx(e,s.userId,c).next(()=>{})}))}))}ii(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new se(o),c=function(f){return[0,vt(f)]}(l);s.push(n.get(c).next(d=>d?N.resolve():(f=>n.put({targetId:0,path:vt(f),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>N.waitFor(s))})}si(e,n){e.createObjectStore("collectionParents",{keyPath:p2});const r=n.store("collectionParents"),i=new Fg,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:vt(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new se(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],c)=>{const d=xn(a);return s(d.popLast())}))}oi(e){const n=e.store("targets");return n.J((r,i)=>{const s=Da(i),o=Ox(this.serializer,s);return n.put(o)})}_i(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(f){return f.document?new W(se.fromString(f.document.name).popFirst(5)):f.noDocument?W.fromSegments(f.noDocument.path):f.unknownDocument?W.fromSegments(f.unknownDocument.path):G()}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>N.waitFor(i))}ai(e,n){const r=n.store("mutations"),i=qx(this.serializer),s=new Ug(eh.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var c;let d=(c=a.get(l.userId))!==null&&c!==void 0?c:te();Vi(this.serializer,l).keys().forEach(f=>d=d.add(f)),a.set(l.userId,d)}),N.forEach(a,(l,c)=>{const d=new Ze(c),f=Xd.lt(this.serializer,d),m=s.getIndexManager(d),_=Zd.lt(d,this.serializer,m,s.referenceDelegate);return new Wx(i,_,f,m).recalculateAndSaveOverlaysForDocumentKeys(new qp(n,Dt.oe),l).next()})})}}function m0(t){t.createObjectStore("targetDocuments",{keyPath:h2}).createIndex("documentTargetsIndex",f2,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",d2,{unique:!0}),t.createObjectStore("targetGlobal")}const bf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Bg{constructor(e,n,r,i,s,o,a,l,c,d,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=d,this.hi=f,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=m=>Promise.resolve(),!Bg.D())throw new U(O.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new SO(this,i),this.Ai=n+"main",this.serializer=new Vx(l),this.Ri=new Cn(this.Ai,this.hi,new MO(this.serializer)),this.$r=new fO,this.Ur=new EO(this.referenceDelegate,this.serializer),this.remoteDocumentCache=qx(this.serializer),this.Gr=new hO,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,d===!1&&$e("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new U(O.FAILED_PRECONDITION,bf);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Dt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Hu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(n=>{n||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(n=>this.isPrimary&&!n?this.bi(e).next(()=>!1):!!n&&this.Di(e).next(()=>!0))).catch(e=>{if(gi(e))return B("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return B("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Ia(e).get("owner").next(n=>N.resolve(this.vi(n)))}Ci(e){return Hu(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Ye(n,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return N.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const n of e)this.Vi.removeItem(this.Oi(n.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?N.resolve(!0):Ia(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)){if(this.vi(n)&&this.networkEnabled)return!0;if(!this.vi(n)){if(!n.allowTabSynchronization)throw new U(O.FAILED_PRECONDITION,bf);return!1}}return!(!this.networkEnabled||!this.inForeground)||Hu(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&B("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new qp(e,Dt.oe);return this.bi(n).next(()=>this.Ci(n))}),this.Ri.close(),this.qi()}xi(e,n){return e.filter(r=>this.Mi(r.updateTimeMs,n)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Hu(e).U().next(n=>this.xi(n,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,n){return Zd.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new wO(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Xd.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,n,r){B("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===17?S2:l===16?T2:l===15?xg:l===14?jS:l===13?FS:l===12?I2:l===11?LS:void G()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new qp(a,this.Qr?this.Qr.next():Dt.oe),n==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw $e(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new U(O.FAILED_PRECONDITION,NS);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return Ia(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)&&!this.vi(n)&&!(this.li||this.allowTabSynchronization&&n.allowTabSynchronization))throw new U(O.FAILED_PRECONDITION,bf)})}Di(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ia(e).put("owner",n)}static D(){return Cn.D()}bi(e){const n=Ia(e);return n.get("owner").next(r=>this.vi(r)?(B("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):N.resolve())}Mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||($e(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const n=/(?:Version|Mobile)\/1[456]/;DT()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var n;try{const r=((n=this.Vi)===null||n===void 0?void 0:n.getItem(this.Oi(e)))!==null;return B("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return $e("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){$e("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ia(t){return Ye(t,"owner")}function Hu(t){return Ye(t,"clientMetadata")}function zg(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class $g{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new $g(e,n.fromCache,r,i)}}/**
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
 */class LO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Kx{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return DT()?8:VS(Qe())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new LO;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Rs()<=ie.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",ks(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),N.resolve()):(Rs()<=ie.DEBUG&&B("QueryEngine","Query:",ks(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Rs()<=ie.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",ks(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wt(n))):N.resolve())}Yi(e,n){if(Bw(n))return N.resolve(null);let r=wt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=id(n,null,"F"),r=wt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,a);return this.ns(n,c,o,l.readTime)?this.Yi(e,id(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return Bw(n)||i.isEqual(Y.min())?N.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?N.resolve(null):(Rs()<=ie.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ks(n)),this.rs(e,o,n,kS(i,-1)).next(a=>a))})}ts(e,n){let r=new ye(ix(e));return n.forEach((i,s)=>{Wl(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Rs()<=ie.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",ks(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ht.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class FO{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ee(Z),this._s=new fr(s=>Zi(s),$l),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Wx(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Gx(t,e,n,r){return new FO(t,e,n,r)}async function Hx(t,e){const n=$(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=te();for(const c of i){o.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function jO(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,d){const f=c.batch,m=f.keys();let _=N.resolve();return m.forEach(x=>{_=_.next(()=>d.getEntry(l,x)).next(S=>{const k=c.docVersions.get(x);Q(k!==null),S.version.compareTo(k)<0&&(f.applyToRemoteDocument(S,c),S.isValidDocument()&&(S.setReadTime(c.commitVersion),d.addEntry(S)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=te();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Qx(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function UO(t,e){const n=$(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,f)));let _=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(Fe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(f,_),function(S,k,v){return S.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(m,_,d)&&a.push(n.Ur.updateTargetData(s,_))});let l=Ot(),c=te();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(Yx(s,o,e.documentUpdates).next(d=>{l=d.Ps,c=d.Is})),!r.isEqual(Y.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return N.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.os=i,s))}function Yx(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ot();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function BO(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function To(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function So(t,e,n){const r=$(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!gi(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function cd(t,e,n){const r=$(t);let i=Y.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,d){const f=$(l),m=f._s.get(d);return m!==void 0?N.resolve(f.os.get(m)):f.Ur.getTargetData(c,d)}(r,o,wt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:te())).next(a=>(Zx(r,rx(e),a),{documents:a,Ts:s})))}function Jx(t,e){const n=$(t),r=$(n.Ur),i=n.os.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function Xx(t,e){const n=$(t),r=n.us.get(e)||Y.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.cs.getAllFromCollectionGroup(i,e,kS(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(Zx(n,e,i),i))}function Zx(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}async function zO(t,e,n,r){const i=$(t);let s=te(),o=Ot();for(const c of n){const d=e.Es(c.metadata.name);c.document&&(s=s.add(d));const f=e.ds(c);f.setReadTime(e.As(c.metadata.readTime)),o=o.insert(d,f)}const a=i.cs.newChangeBuffer({trackRemovals:!0}),l=await To(i,function(d){return wt(Uo(se.fromString(`__bundle__/docs/${d}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>Yx(c,a,o).next(d=>(a.apply(c),d)).next(d=>i.Ur.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.Ur.addMatchingKeys(c,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,d.Ps,d.Is)).next(()=>d.Ps)))}async function $O(t,e,n=te()){const r=await To(t,wt(Mg(e.bundledQuery))),i=$(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=qe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Gr.saveNamedQuery(s,e);const a=r.withResumeToken(Fe.EMPTY_BYTE_STRING,o);return i.os=i.os.insert(a.targetId,a),i.Ur.updateTargetData(s,a).next(()=>i.Ur.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ur.addMatchingKeys(s,n,r.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function g0(t,e){return`firestore_clients_${t}_${e}`}function y0(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Rf(t,e){return`firestore_targets_${t}_${e}`}class dd{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Rs(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new U(i.error.code,i.error.message))),o?new dd(e,n,i.state,s):($e("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ha{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Rs(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new U(r.error.code,r.error.message))),s?new Ha(e,r.state,i):($e("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class hd{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Rs(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=bg();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=OS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new hd(e,s):($e("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class qg{constructor(e,n){this.clientId=e,this.onlineState=n}static Rs(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new qg(n.clientId,n.onlineState):($e("SharedClientState",`Failed to parse online state: ${e}`),null)}}class im{constructor(){this.activeTargetIds=bg()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kf{constructor(e,n,r,i,s){this.window=e,this.ui=n,this.persistenceKey=r,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new Ee(Z),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=g0(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new im),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const i=this.getItem(g0(this.persistenceKey,r));if(i){const s=hd.Rs(r,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const n=this.storage.getItem(this.xs);if(n){const r=this.Ls(n);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let n=!1;return this.Ss.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,n,r){this.qs(e,n,r),this.Qs(e)}addLocalQueryTarget(e,n=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Rf(this.persistenceKey,e));if(i){const s=Ha.Rs(e,i);s&&(r=s.state)}}return n&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Rf(this.persistenceKey,e))}updateQueryState(e,n,r){this.$s(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Qs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return B("SharedClientState","READ",e,n),n}setItem(e,n){B("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){B("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const n=e;if(n.storageArea===this.storage){if(B("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Ds)return void $e("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Cs.test(n.key)){if(n.newValue==null){const r=this.Gs(n.key);return this.zs(r,null)}{const r=this.js(n.key,n.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(n.key)){if(n.newValue!==null){const r=this.Hs(n.key,n.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(n.key)){if(n.newValue!==null){const r=this.Ys(n.key,n.newValue);if(r)return this.Zs(r)}}else if(n.key===this.xs){if(n.newValue!==null){const r=this.Ls(n.newValue);if(r)return this.Bs(r)}}else if(n.key===this.vs){const r=function(s){let o=Dt.oe;if(s!=null)try{const a=JSON.parse(s);Q(typeof a=="number"),o=a}catch(a){$e("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Dt.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Os){const r=this.Xs(n.newValue);await Promise.all(r.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(n)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,n,r){const i=new dd(this.currentUser,e,n,r),s=y0(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const n=y0(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Us(e){const n={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(n))}$s(e,n,r){const i=Rf(this.persistenceKey,e),s=new Ha(e,n,r);this.setItem(i,s.Vs())}Ws(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Os,n)}Gs(e){const n=this.Cs.exec(e);return n?n[1]:null}js(e,n){const r=this.Gs(e);return hd.Rs(r,n)}Hs(e,n){const r=this.Fs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return dd.Rs(new Ze(s),i,n)}Ys(e,n){const r=this.Ms.exec(e),i=Number(r[1]);return Ha.Rs(i,n)}Ls(e){return qg.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);B("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,n){const r=n?this.Ss.insert(e,n):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let n=bg();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class eA{constructor(){this.so=new im,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new im,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class qO{_o(e){}shutdown(){}}/**
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
 */class _0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qu=null;function Cf(){return Qu===null?Qu=function(){return 268435456+Math.round(2147483648*Math.random())}():Qu++,"0x"+Qu.toString(16)}/**
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
 */const WO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class KO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const gt="WebChannelConnection";class GO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Cf(),l=this.xo(n,r.toUriEncodedString());B("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,l,c,i).then(d=>(B("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Gt("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+jo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=WO[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Cf();return new Promise((o,a)=>{const l=new ES;l.setWithCredentials(!0),l.listenOnce(IS.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case pc.NO_ERROR:const d=l.getResponseJson();B(gt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case pc.TIMEOUT:B(gt,`RPC '${e}' ${s} timed out`),a(new U(O.DEADLINE_EXCEEDED,"Request time out"));break;case pc.HTTP_ERROR:const f=l.getStatus();if(B(gt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const x=function(k){const v=k.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(v)>=0?v:O.UNKNOWN}(_.status);a(new U(x,_.message))}else a(new U(O.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new U(O.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{B(gt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);B(gt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Cf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=xS(),a=SS(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");B(gt,`Creating RPC '${e}' stream ${i}: ${d}`,l);const f=o.createWebChannel(d,l);let m=!1,_=!1;const x=new KO({Io:k=>{_?B(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(m||(B(gt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),B(gt,`RPC '${e}' stream ${i} sending:`,k),f.send(k))},To:()=>f.close()}),S=(k,v,g)=>{k.listen(v,I=>{try{g(I)}catch(P){setTimeout(()=>{throw P},0)}})};return S(f,ka.EventType.OPEN,()=>{_||(B(gt,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),S(f,ka.EventType.CLOSE,()=>{_||(_=!0,B(gt,`RPC '${e}' stream ${i} transport closed`),x.So())}),S(f,ka.EventType.ERROR,k=>{_||(_=!0,Gt(gt,`RPC '${e}' stream ${i} transport errored:`,k),x.So(new U(O.UNAVAILABLE,"The operation could not be completed")))}),S(f,ka.EventType.MESSAGE,k=>{var v;if(!_){const g=k.data[0];Q(!!g);const I=g,P=I.error||((v=I[0])===null||v===void 0?void 0:v.error);if(P){B(gt,`RPC '${e}' stream ${i} received error:`,P);const L=P.status;let F=function(A){const b=We[A];if(b!==void 0)return _x(b)}(L),T=P.message;F===void 0&&(F=O.INTERNAL,T="Unknown error status: "+L+" with message "+P.message),_=!0,x.So(new U(F,T)),f.close()}else B(gt,`RPC '${e}' stream ${i} received:`,g),x.bo(g)}}),S(a,TS.STAT_EVENT,k=>{k.stat===zp.PROXY?B(gt,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===zp.NOPROXY&&B(gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}/**
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
 */function tA(){return typeof window<"u"?window:null}function Ec(){return typeof document<"u"?document:null}/**
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
 */function Ql(t){return new tO(t,!0)}/**
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
 */class Wg{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class nA{constructor(e,n,r,i,s,o,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Wg(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?($e(n.toString()),$e("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new U(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HO extends nA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=iO(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?qe(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Zp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=nd(l)?{documents:bx(s,l)}:{query:Jd(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Ix(s,o.resumeToken);const c=Jp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=Io(s,o.snapshotVersion.toTimestamp());const c=Jp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=oO(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Zp(this.serializer),n.removeTarget=e,this.a_(n)}}class QO extends nA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Q(!!e.streamToken),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=sO(e.writeResults,e.commitTime),r=qe(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Zp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Sl(this.serializer,r))};this.a_(n)}}/**
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
 */class YO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new U(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Xp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(O.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Xp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(O.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class JO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class XO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{_i(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=$(l);c.L_.add(4),await $o(c),c.q_.set("Unknown"),c.L_.delete(4),await Yl(c)}(this))})}),this.q_=new JO(r,i)}}async function Yl(t){if(_i(t))for(const e of t.B_)await e(!0)}async function $o(t){for(const e of t.B_)await e(!1)}function th(t,e){const n=$(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Hg(n)?Gg(n):Wo(n).r_()&&Kg(n,e))}function xo(t,e){const n=$(t),r=Wo(n);n.N_.delete(e),r.r_()&&rA(n,e),n.N_.size===0&&(r.r_()?r.o_():_i(n)&&n.q_.set("Unknown"))}function Kg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Wo(t).A_(e)}function rA(t,e){t.Q_.xe(e),Wo(t).R_(e)}function Gg(t){t.Q_=new J2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Wo(t).start(),t.q_.v_()}function Hg(t){return _i(t)&&!Wo(t).n_()&&t.N_.size>0}function _i(t){return $(t).L_.size===0}function iA(t){t.Q_=void 0}async function ZO(t){t.q_.set("Online")}async function eM(t){t.N_.forEach((e,n)=>{Kg(t,e)})}async function tM(t,e){iA(t),Hg(t)?(t.q_.M_(e),Gg(t)):t.q_.set("Unknown")}async function nM(t,e,n){if(t.q_.set("Online"),e instanceof Ex&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fd(t,r)}else if(e instanceof wc?t.Q_.Ke(e):e instanceof wx?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await Qx(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const d=s.N_.get(l);if(!d)return;s.N_.set(l,d.withResumeToken(Fe.EMPTY_BYTE_STRING,d.snapshotVersion)),rA(s,l);const f=new Qn(d.target,l,c,d.sequenceNumber);Kg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await fd(t,r)}}async function fd(t,e,n){if(!gi(e))throw e;t.L_.add(1),await $o(t),t.q_.set("Offline"),n||(n=()=>Qx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Yl(t)})}function sA(t,e){return e().catch(n=>fd(t,n,e))}async function qo(t){const e=$(t),n=ii(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;rM(e);)try{const i=await BO(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,iM(e,i)}catch(i){await fd(e,i)}oA(e)&&aA(e)}function rM(t){return _i(t)&&t.O_.length<10}function iM(t,e){t.O_.push(e);const n=ii(t);n.r_()&&n.V_&&n.m_(e.mutations)}function oA(t){return _i(t)&&!ii(t).n_()&&t.O_.length>0}function aA(t){ii(t).start()}async function sM(t){ii(t).p_()}async function oM(t){const e=ii(t);for(const n of t.O_)e.m_(n.mutations)}async function aM(t,e,n){const r=t.O_.shift(),i=Ng.from(r,e,n);await sA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await qo(t)}async function lM(t,e){e&&ii(t).V_&&await async function(r,i){if(function(o){return yx(o)&&o!==O.ABORTED}(i.code)){const s=r.O_.shift();ii(r).s_(),await sA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await qo(r)}}(t,e),oA(t)&&aA(t)}async function v0(t,e){const n=$(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=_i(n);n.L_.add(3),await $o(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Yl(n)}async function sm(t,e){const n=$(t);e?(n.L_.delete(2),await Yl(n)):e||(n.L_.add(2),await $o(n),n.q_.set("Unknown"))}function Wo(t){return t.K_||(t.K_=function(n,r,i){const s=$(n);return s.w_(),new HO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:ZO.bind(null,t),Ro:eM.bind(null,t),mo:tM.bind(null,t),d_:nM.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Hg(t)?Gg(t):t.q_.set("Unknown")):(await t.K_.stop(),iA(t))})),t.K_}function ii(t){return t.U_||(t.U_=function(n,r,i){const s=$(n);return s.w_(),new QO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:sM.bind(null,t),mo:lM.bind(null,t),f_:oM.bind(null,t),g_:aM.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await qo(t)):(await t.U_.stop(),t.O_.length>0&&(B("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Qg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Qg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ko(t,e){if($e("AsyncQueue",`${e}: ${t}`),gi(t))return new U(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ro{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Ca(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new ro(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ro)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ro;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class w0{constructor(){this.W_=new Ee(W.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ao{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ao(e,n,ro.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ql(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class uM{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class cM{constructor(){this.queries=E0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=$(n),s=i.queries;i.queries=E0(),s.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new U(O.ABORTED,"Firestore shutting down"))}}function E0(){return new fr(t=>nx(t),ql)}async function Yg(t,e){const n=$(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new uM,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Ko(o,`Initialization of query '${ks(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Xg(n)}async function Jg(t,e){const n=$(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function dM(t,e){const n=$(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Xg(n)}function hM(t,e,n){const r=$(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Xg(t){t.Y_.forEach(e=>{e.next()})}var om,I0;(I0=om||(om={})).ea="default",I0.Cache="cache";class Zg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ao(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==om.Cache}}/**
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
 */class fM{constructor(e,n){this.aa=e,this.byteLength=n}ua(){return"metadata"in this.aa}}/**
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
 */class T0{constructor(e){this.serializer=e}Es(e){return Nn(this.serializer,e)}ds(e){return e.metadata.exists?Px(this.serializer,e.document,!1):xe.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return qe(e)}}class pM{constructor(e,n,r){this.ca=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=lA(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++n;const r=se.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ha(e){const n=new Map,r=new T0(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Es(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||te()).add(s);n.set(o,a)}}return n}async complete(){const e=await zO(this.localStore,new T0(this.serializer),this.documents,this.ca.id),n=this.ha(this.documents);for(const r of this.queries)await $O(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function lA(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class uA{constructor(e){this.key=e}}class cA{constructor(e){this.key=e}}class dA{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=ix(e),this.Ra=new ro(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new w0,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),_=Wl(this.query,f)?f:null,x=!!m&&this.mutatedKeys.has(m.key),S=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let k=!1;m&&_?m.data.isEqual(_.data)?x!==S&&(r.track({type:3,doc:_}),k=!0):this.ga(m,_)||(r.track({type:2,doc:_}),k=!0,(l&&this.Aa(_,l)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!m&&_?(r.track({type:0,doc:_}),k=!0):m&&!_&&(r.track({type:1,doc:m}),k=!0,(l||c)&&(a=!0)),k&&(_?(o=o.add(_),s=S?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(_,x){const S=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return S(_)-S(x)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,o.length!==0||c?{snapshot:new Ao(this.query,e.Ra,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new w0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new cA(r))}),this.da.forEach(r=>{e.has(r)||n.push(new uA(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ao.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class mM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gM{constructor(e){this.key=e,this.va=!1}}class yM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new fr(a=>nx(a),ql),this.Ma=new Map,this.xa=new Set,this.Oa=new Ee(W.comparator),this.Na=new Map,this.La=new jg,this.Ba={},this.ka=new Map,this.qa=is.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function _M(t,e,n=!0){const r=nh(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await hA(r,e,n,!0),i}async function vM(t,e){const n=nh(t);await hA(n,e,!0,!1)}async function hA(t,e,n,r){const i=await To(t.localStore,wt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await ey(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&th(t.remoteStore,i),a}async function ey(t,e,n,r,i){t.Ka=(f,m,_)=>async function(S,k,v,g){let I=k.view.ma(v);I.ns&&(I=await cd(S.localStore,k.query,!1).then(({documents:T})=>k.view.ma(T,I)));const P=g&&g.targetChanges.get(k.targetId),L=g&&g.targetMismatches.get(k.targetId)!=null,F=k.view.applyChanges(I,S.isPrimaryClient,P,L);return am(S,k.targetId,F.wa),F.snapshot}(t,f,m,_);const s=await cd(t.localStore,e,!0),o=new dA(e,s.Ts),a=o.ma(s.documents),l=Hl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);am(t,n,c.wa);const d=new mM(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function wM(t,e,n){const r=$(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!ql(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await So(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&xo(r.remoteStore,i.targetId),Po(r,i.targetId)}).catch(mi)):(Po(r,i.targetId),await So(r.localStore,i.targetId,!0))}async function EM(t,e){const n=$(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),xo(n.remoteStore,r.targetId))}async function IM(t,e,n){const r=iy(t);try{const i=await function(o,a){const l=$(o),c=de.now(),d=a.reduce((_,x)=>_.add(x.key),te());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let x=Ot(),S=te();return l.cs.getEntries(_,d).next(k=>{x=k,x.forEach((v,g)=>{g.isValidDocument()||(S=S.add(v))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,x)).next(k=>{f=k;const v=[];for(const g of a){const I=H2(g,f.get(g.key).overlayedDocument);I!=null&&v.push(new pr(g.key,I,WS(I.value.mapValue),Ce.exists(!0)))}return l.mutationQueue.addMutationBatch(_,c,v,a)}).next(k=>{m=k;const v=k.applyToLocalDocumentSet(f,S);return l.documentOverlayCache.saveOverlays(_,k.batchId,v)})}).then(()=>({batchId:m.batchId,changes:ox(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ee(Z)),c=c.insert(a,l),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await mr(r,i.changes),await qo(r.remoteStore)}catch(i){const s=Ko(i,"Failed to persist write");n.reject(s)}}async function fA(t,e){const n=$(t);try{const r=await UO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Q(o.va):i.removedDocuments.size>0&&(Q(o.va),o.va=!1))}),await mr(n,r,e)}catch(r){await mi(r)}}function S0(t,e,n){const r=$(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=$(o);l.onlineState=a;let c=!1;l.queries.forEach((d,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&Xg(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TM(t,e,n){const r=$(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ee(W.comparator);o=o.insert(s,xe.newNoDocument(s,Y.min()));const a=te().add(s),l=new Gl(Y.min(),new Map,new Ee(Z),o,a);await fA(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),ry(r)}else await So(r.localStore,e,!1).then(()=>Po(r,e,n)).catch(mi)}async function SM(t,e){const n=$(t),r=e.batch.batchId;try{const i=await jO(n.localStore,e);ny(n,r,null),ty(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mr(n,i)}catch(i){await mi(i)}}async function xM(t,e,n){const r=$(t);try{const i=await function(o,a){const l=$(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(Q(f!==null),d=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>l.localDocuments.getDocuments(c,d))})}(r.localStore,e);ny(r,e,n),ty(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await mr(r,i)}catch(i){await mi(i)}}async function AM(t,e){const n=$(t);_i(n.remoteStore)||B("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=$(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.ka.get(r)||[];i.push(e),n.ka.set(r,i)}catch(r){const i=Ko(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function ty(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function ny(t,e,n){const r=$(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Po(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||pA(t,r)})}function pA(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(xo(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),ry(t))}function am(t,e,n){for(const r of n)r instanceof uA?(t.La.addReference(r.key,e),PM(t,r)):r instanceof cA?(B("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||pA(t,r.key)):G()}function PM(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(B("SyncEngine","New document in limbo: "+n),t.xa.add(r),ry(t))}function ry(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new W(se.fromString(e)),r=t.qa.next();t.Na.set(r,new gM(n)),t.Oa=t.Oa.insert(n,r),th(t.remoteStore,new Qn(wt(Uo(n.path)),r,"TargetPurposeLimboResolution",Dt.oe))}}async function mr(t,e,n){const r=$(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=$g.Wi(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,c){const d=$(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>N.forEach(c,m=>N.forEach(m.$i,_=>d.persistence.referenceDelegate.addReference(f,m.targetId,_)).next(()=>N.forEach(m.Ui,_=>d.persistence.referenceDelegate.removeReference(f,m.targetId,_)))))}catch(f){if(!gi(f))throw f;B("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const _=d.os.get(m),x=_.snapshotVersion,S=_.withLastLimboFreeSnapshotVersion(x);d.os=d.os.insert(m,S)}}}(r.localStore,s))}async function bM(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await Hx(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(l=>{l.reject(new U(O.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mr(n,r.hs)}}function RM(t,e){const n=$(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}async function kM(t,e){const n=$(t),r=await cd(n.localStore,e.query,!0),i=e.view.ba(r);return n.isPrimaryClient&&am(n,e.targetId,i.wa),i}async function CM(t,e){const n=$(t);return Xx(n.localStore,e).then(r=>mr(n,r))}async function NM(t,e,n,r){const i=$(t),s=await function(a,l){const c=$(a),d=$(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>d.Mn(f,l).next(m=>m?c.localDocuments.getDocuments(f,m):N.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await qo(i.remoteStore):n==="acknowledged"||n==="rejected"?(ny(i,e,r||null),ty(i,e),function(a,l){$($(a).mutationQueue).On(l)}(i.localStore,e)):G(),await mr(i,s)):B("SyncEngine","Cannot apply mutation batch with id: "+e)}async function DM(t,e){const n=$(t);if(nh(n),iy(n),e===!0&&n.Qa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await x0(n,r.toArray());n.Qa=!0,await sm(n.remoteStore,!0);for(const s of i)th(n.remoteStore,s)}else if(e===!1&&n.Qa!==!1){const r=[];let i=Promise.resolve();n.Ma.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Po(n,o),So(n.localStore,o,!0))),xo(n.remoteStore,o)}),await i,await x0(n,r),function(o){const a=$(o);a.Na.forEach((l,c)=>{xo(a.remoteStore,c)}),a.La.pr(),a.Na=new Map,a.Oa=new Ee(W.comparator)}(n),n.Qa=!1,await sm(n.remoteStore,!1)}}async function x0(t,e,n){const r=$(t),i=[],s=[];for(const o of e){let a;const l=r.Ma.get(o);if(l&&l.length!==0){a=await To(r.localStore,wt(l[0]));for(const c of l){const d=r.Fa.get(c),f=await kM(r,d);f.snapshot&&s.push(f.snapshot)}}else{const c=await Jx(r.localStore,o);a=await To(r.localStore,c),await ey(r,mA(c),o,!1,a.resumeToken)}i.push(a)}return r.Ca.d_(s),i}function mA(t){return ZS(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function VM(t){return function(n){return $($(n).persistence).Qi()}($(t).localStore)}async function OM(t,e,n,r){const i=$(t);if(i.Qa)return void B("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await Xx(i.localStore,rx(s[0])),a=Gl.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Fe.EMPTY_BYTE_STRING);await mr(i,o,a);break}case"rejected":await So(i.localStore,e,!0),Po(i,e,r);break;default:G()}}async function MM(t,e,n){const r=nh(t);if(r.Qa){for(const i of e){if(r.Ma.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){B("SyncEngine","Adding an already active target "+i);continue}const s=await Jx(r.localStore,i),o=await To(r.localStore,s);await ey(r,mA(s),o.targetId,!1,o.resumeToken),th(r.remoteStore,o)}for(const i of n)r.Ma.has(i)&&await So(r.localStore,i,!1).then(()=>{xo(r.remoteStore,i),Po(r,i)}).catch(mi)}}function nh(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TM.bind(null,e),e.Ca.d_=dM.bind(null,e.eventManager),e.Ca.$a=hM.bind(null,e.eventManager),e}function iy(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xM.bind(null,e),e}function LM(t,e,n){const r=$(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(_,x){const S=$(_),k=qe(x.createTime);return S.persistence.runTransaction("hasNewerBundle","readonly",v=>S.Gr.getBundleMetadata(v,x.id)).then(v=>!!v&&v.createTime.compareTo(k)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(_){return{taskState:"Success",documentsLoaded:_.totalDocuments,bytesLoaded:_.totalBytes,totalDocuments:_.totalDocuments,totalBytes:_.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(lA(l));const c=new pM(l,s.localStore,o.serializer);let d=await o.Ua();for(;d;){const m=await c.la(d);m&&a._updateProgress(m),d=await o.Ua()}const f=await c.complete();return await mr(s,f.Ia,void 0),await function(_,x){const S=$(_);return S.persistence.runTransaction("Save bundle","readwrite",k=>S.Gr.saveBundleMetadata(k,x))}(s.localStore,l),a._completeWith(f.progress),Promise.resolve(f.Pa)}catch(l){return Gt("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class si{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ql(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Gx(this.persistence,new Kx,e.initialUser,this.serializer)}Ga(e){return new Ug(eh.Zr,this.serializer)}Wa(e){return new eA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}si.provider={build:()=>new si};class FM extends si{constructor(e){super(),this.cacheSizeBytes=e}ja(e,n){Q(this.persistence.referenceDelegate instanceof ud);const r=this.persistence.referenceDelegate.garbageCollector;return new Bx(r,e.asyncQueue,n)}Ga(e){const n=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new Ug(r=>ud.Zr(r,n),this.serializer)}}class sy extends si{constructor(e,n,r){super(),this.Ja=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await iy(this.Ja.syncEngine),await qo(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Gx(this.persistence,new Kx,e.initialUser,this.serializer)}ja(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new Bx(r,e.asyncQueue,n)}Ha(e,n){const r=new s2(n,this.persistence);return new i2(e.asyncQueue,r)}Ga(e){const n=zg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new Bg(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,tA(),Ec(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new eA}}class gA extends sy{constructor(e,n){super(e,n,!1),this.Ja=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ja.syncEngine;this.sharedClientState instanceof kf&&(this.sharedClientState.syncEngine={no:NM.bind(null,n),ro:OM.bind(null,n),io:MM.bind(null,n),Qi:VM.bind(null,n),eo:CM.bind(null,n)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await DM(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const n=tA();if(!kf.D(n))throw new U(O.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=zg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new kf(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class oi{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>S0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bM.bind(null,this.syncEngine),await sm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new cM}()}createDatastore(e){const n=Ql(e.databaseInfo.databaseId),r=function(s){return new GO(s)}(e.databaseInfo);return function(s,o,a,l){return new YO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new XO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>S0(this.syncEngine,n,0),function(){return _0.D()?new _0:new qO}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,d){const f=new yM(i,s,o,a,l,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=$(i);B("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await $o(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}oi.provider={build:()=>new oi};function A0(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class rh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):$e("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class jM{constructor(e,n){this.Xa=e,this.serializer=n,this.metadata=new tt,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.aa)}`))},r=>this.metadata.reject(r))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const n=this.eu.decode(e),r=Number(n);isNaN(r)&&this.ru(`length string (${n}) is not valid number`);const i=await this.iu(r);return new fM(JSON.parse(i),e.length+r)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const n=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class UM{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new U(O.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=$(i),a={documents:s.map(f=>Tl(o.serializer,f))},l=await o.Lo("BatchGetDocuments",o.serializer.databaseId,se.emptyPath(),a,s.length),c=new Map;l.forEach(f=>{const m=rO(o.serializer,f);c.set(m.key.toString(),m)});const d=[];return s.forEach(f=>{const m=c.get(f.toString());Q(!!m),d.push(m)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new zo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=W.fromPath(r);this.mutations.push(new kg(i,this.precondition(i)))}),await async function(r,i){const s=$(r),o={writes:i.map(a=>Sl(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,se.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw G();n=Y.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new U(O.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(Y.min())?Ce.exists(!1):Ce.updateTime(n):Ce.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Y.min()))throw new U(O.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ce.updateTime(n)}return Ce.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class BM{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new Wg(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new UM(this.datastore),n=this.cu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const n=this.updateFunction(e);return!zl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!yx(n)}return!1}}/**
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
 */class zM{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ze.UNAUTHENTICATED,this.clientId=Ig.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{B("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ko(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nf(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Hx(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function P0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oy(t);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>v0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>v0(e.remoteStore,i)),t._onlineComponents=e}async function oy(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Gt("Error using user provided cache. Falling back to memory cache: "+n),await Nf(t,new si)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Nf(t,new si);return t._offlineComponents}async function ih(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await P0(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await P0(t,new oi))),t._onlineComponents}function yA(t){return oy(t).then(e=>e.persistence)}function Go(t){return oy(t).then(e=>e.localStore)}function _A(t){return ih(t).then(e=>e.remoteStore)}function ay(t){return ih(t).then(e=>e.syncEngine)}function vA(t){return ih(t).then(e=>e.datastore)}async function bo(t){const e=await ih(t),n=e.eventManager;return n.onListen=_M.bind(null,e.syncEngine),n.onUnlisten=wM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=vM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=EM.bind(null,e.syncEngine),n}function $M(t){return t.asyncQueue.enqueue(async()=>{const e=await yA(t),n=await _A(t);return e.setNetworkEnabled(!0),function(i){const s=$(i);return s.L_.delete(0),Yl(s)}(n)})}function qM(t){return t.asyncQueue.enqueue(async()=>{const e=await yA(t),n=await _A(t);return e.setNetworkEnabled(!1),async function(i){const s=$(i);s.L_.add(0),await $o(s),s.q_.set("Offline")}(n)})}function WM(t,e){const n=new tt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,d){const f=$(c);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,d))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new U(O.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Ko(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await Go(t),e,n)),n.promise}function wA(t,e,n={}){const r=new tt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new rh({next:m=>{d.Za(),o.enqueueAndForget(()=>Jg(s,f));const _=m.docs.has(a);!_&&m.fromCache?c.reject(new U(O.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?c.reject(new U(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Zg(Uo(a.path),d,{includeMetadataChanges:!0,_a:!0});return Yg(s,f)}(await bo(t),t.asyncQueue,e,n,r)),r.promise}function KM(t,e){const n=new tt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await cd(i,s,!0),l=new dA(s,a.Ts),c=l.ma(a.documents),d=l.applyChanges(c,!1);o.resolve(d.snapshot)}catch(a){const l=Ko(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await Go(t),e,n)),n.promise}function EA(t,e,n={}){const r=new tt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new rh({next:m=>{d.Za(),o.enqueueAndForget(()=>Jg(s,f)),m.fromCache&&l.source==="server"?c.reject(new U(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Zg(a,d,{includeMetadataChanges:!0,_a:!0});return Yg(s,f)}(await bo(t),t.asyncQueue,e,n,r)),r.promise}function GM(t,e,n){const r=new tt;return t.asyncQueue.enqueueAndForget(async()=>{try{const i=await vA(t);r.resolve(async function(o,a,l){var c;const d=$(o),{request:f,ut:m,parent:_}=Rx(d.serializer,ex(a),l);d.connection.Fo||delete f.parent;const x=(await d.Lo("RunAggregationQuery",d.serializer.databaseId,_,f,1)).filter(k=>!!k.result);Q(x.length===1);const S=(c=x[0].result)===null||c===void 0?void 0:c.aggregateFields;return Object.keys(S).reduce((k,v)=>(k[m[v]]=S[v],k),{})}(i,e,n))}catch(i){r.reject(i)}}),r.promise}function HM(t,e){const n=new rh(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){$(i).Y_.add(s),s.next()}(await bo(t),n)),()=>{n.Za(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){$(i).Y_.delete(s)}(await bo(t),n))}}function QM(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?vx().encode(o):o,function(d,f){return new jM(d,f)}(function(d,f){if(d instanceof Uint8Array)return A0(d,f);if(d instanceof ArrayBuffer)return A0(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,Ql(e));t.asyncQueue.enqueueAndForget(async()=>{LM(await ay(t),i,r)})}function YM(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=$(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Gr.getNamedQuery(o,i))}(await Go(t),e))}function JM(t,e){return t.asyncQueue.enqueue(async()=>async function(r,i){const s=$(r),o=s.indexManager,a=[];return s.persistence.runTransaction("Configure indexes","readwrite",l=>o.getFieldIndexes(l).next(c=>function(f,m,_,x,S){f=[...f],m=[...m],f.sort(_),m.sort(_);const k=f.length,v=m.length;let g=0,I=0;for(;g<v&&I<k;){const P=_(f[I],m[g]);P<0?S(f[I++]):P>0?x(m[g++]):(g++,I++)}for(;g<v;)x(m[g++]);for(;I<k;)S(f[I++])}(c,i,e2,d=>{a.push(o.addFieldIndex(l,d))},d=>{a.push(o.deleteFieldIndex(l,d))})).next(()=>N.waitFor(a)))}(await Go(t),e))}function XM(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){$(r).ss.zi=i}(await Go(t),e))}function ZM(t){return t.asyncQueue.enqueue(async()=>function(n){const r=$(n),i=r.indexManager;return r.persistence.runTransaction("Delete All Indexes","readwrite",s=>i.deleteAllFieldIndexes(s))}(await Go(t)))}/**
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
 */function IA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const b0=new Map;/**
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
 */function ly(t,e,n){if(!n)throw new U(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function TA(t,e,n,r){if(e===!0&&r===!0)throw new U(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function R0(t){if(!W.isDocumentKey(t))throw new U(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function k0(t){if(W.isDocumentKey(t))throw new U(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function ne(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sh(t);throw new U(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function SA(t,e){if(e<=0)throw new U(O.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class C0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}TA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=IA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new C0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new C0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new PS;switch(r.type){case"firstParty":return new QV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=b0.get(n);r&&(B("ComponentProvider","Removing Datastore"),b0.delete(n),r.terminate())}(this),Promise.resolve()}}function xA(t,e,n,r={}){var i;const s=(t=ne(t,Jl))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Gt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ze.MOCK_USER;else{a=aC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new U(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ze(c)}t._authCredentials=new KV(new AS(a,l))}}/**
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
 */class rt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rt(this.firestore,e,this._query)}}class Be{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}}class mn extends rt{constructor(e,n,r){super(e,n,Uo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new W(e))}withConverter(e){return new mn(this.firestore,e,this._path)}}function Xl(t,e,...n){if(t=he(t),ly("collection","path",e),t instanceof Jl){const r=se.fromString(e,...n);return k0(r),new mn(t,null,r)}{if(!(t instanceof Be||t instanceof mn))throw new U(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return k0(r),new mn(t.firestore,null,r)}}function eL(t,e){if(t=ne(t,Jl),ly("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new U(O.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new rt(t,null,function(r){return new hr(se.emptyPath(),r)}(e))}function Pt(t,e,...n){if(t=he(t),arguments.length===1&&(e=Ig.newId()),ly("doc","path",e),t instanceof Jl){const r=se.fromString(e,...n);return R0(r),new Be(t,null,new W(r))}{if(!(t instanceof Be||t instanceof mn))throw new U(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return R0(r),new Be(t.firestore,t instanceof mn?t.converter:null,new W(r))}}function tL(t,e){return t=he(t),e=he(e),(t instanceof Be||t instanceof mn)&&(e instanceof Be||e instanceof mn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function uy(t,e){return t=he(t),e=he(e),t instanceof rt&&e instanceof rt&&t.firestore===e.firestore&&ql(t._query,e._query)&&t.converter===e.converter}/**
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
 */class N0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Wg(this,"async_queue_retry"),this.Vu=()=>{const r=Ec();r&&B("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Ec();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new tt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!gi(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw $e("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Qg.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function lm(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class AA{constructor(){this._progressObserver={},this._taskCompletionResolver=new tt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const nL=-1;class _e extends Jl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new N0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new N0(e),this._firestoreClient=void 0,await e}}}function rL(t,e,n){n||(n="(default)");const r=fi(t,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(Xr(s,e))return i;throw new U(O.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new U(O.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:n})}function PA(t,e){const n=typeof t=="object"?t:dg(),r=typeof t=="string"?t:e||"(default)",i=fi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=sC("firestore");s&&xA(i,...s)}return i}function Ne(t){if(t._terminated)throw new U(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||bA(t),t._firestoreClient}function bA(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,d){return new P2(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,IA(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new zM(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}function iL(t,e){Gt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return RA(t,oi.provider,{build:r=>new sy(r,n.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function sL(t){Gt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=t._freezeSettings();RA(t,oi.provider,{build:n=>new gA(n,e.cacheSizeBytes)})}function RA(t,e,n){if((t=ne(t,_e))._firestoreClient||t._terminated)throw new U(O.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new U(O.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},bA(t)}function oL(t){if(t._initialized&&!t._terminated)throw new U(O.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new tt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Cn.D())return Promise.resolve();const i=r+"main";await Cn.delete(i)}(zg(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function aL(t){return function(n){const r=new tt;return n.asyncQueue.enqueueAndForget(async()=>AM(await ay(n),r)),r.promise}(Ne(t=ne(t,_e)))}function lL(t){return $M(Ne(t=ne(t,_e)))}function uL(t){return qM(Ne(t=ne(t,_e)))}function cL(t){return yN(t.app,"firestore",t._databaseId.database),t._delete()}function dL(t,e){const n=Ne(t=ne(t,_e)),r=new AA;return QM(n,t._databaseId,e,r),r}function hL(t,e){return YM(Ne(t=ne(t,_e)),e).then(n=>n?new rt(t,null,n.query):null)}/**
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
 */class Ro{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class kA{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class ai{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ai(Fe.fromBase64String(e))}catch(n){throw new U(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ai(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class vi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function fL(){return new vi("__name__")}/**
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
 */class wi{constructor(e){this._methodName=e}}/**
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
 */class oh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
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
 */class Zl{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const pL=/^__.*__$/;class mL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bo(e,this.data,n,this.fieldTransforms)}}class CA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new pr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function NA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class ah{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ah(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return pd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(NA(this.Cu)&&pL.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class gL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ql(e)}Qu(e,n,r,i=!1){return new ah({Cu:e,methodName:n,qu:r,path:Ae.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ps(t){const e=t._freezeSettings(),n=Ql(t._databaseId);return new gL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lh(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);gy("Data must be an object, but it was:",o,r);const a=OA(r,o);let l,c;if(s.merge)l=new Vt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=xl(e,f,n);if(!o.contains(m))throw new U(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);LA(d,m)||d.push(m)}l=new Vt(d),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new mL(new lt(a),l,c)}class eu extends wi{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof eu}}function DA(t,e,n){return new ah({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class cy extends wi{_toFieldTransform(e){return new Kl(e.path,new wo)}isEqual(e){return e instanceof cy}}class dy extends wi{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=DA(this,e,!0),r=this.Ku.map(s=>ms(s,n)),i=new es(r);return new Kl(e.path,i)}isEqual(e){return e instanceof dy&&Xr(this.Ku,e.Ku)}}class hy extends wi{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=DA(this,e,!0),r=this.Ku.map(s=>ms(s,n)),i=new ts(r);return new Kl(e.path,i)}isEqual(e){return e instanceof hy&&Xr(this.Ku,e.Ku)}}class fy extends wi{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new Eo(e.serializer,ux(e.serializer,this.$u));return new Kl(e.path,n)}isEqual(e){return e instanceof fy&&this.$u===e.$u}}function py(t,e,n,r){const i=t.Qu(1,e,n);gy("Data must be an object, but it was:",i,r);const s=[],o=lt.empty();yi(r,(l,c)=>{const d=uh(e,l,n);c=he(c);const f=i.Nu(d);if(c instanceof eu)s.push(d);else{const m=ms(c,f);m!=null&&(s.push(d),o.set(d,m))}});const a=new Vt(s);return new CA(o,a,i.fieldTransforms)}function my(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[xl(e,r,n)],l=[i];if(s.length%2!=0)throw new U(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(xl(e,s[m])),l.push(s[m+1]);const c=[],d=lt.empty();for(let m=a.length-1;m>=0;--m)if(!LA(c,a[m])){const _=a[m];let x=l[m];x=he(x);const S=o.Nu(_);if(x instanceof eu)c.push(_);else{const k=ms(x,S);k!=null&&(c.push(_),d.set(_,k))}}const f=new Vt(c);return new CA(d,f,o.fieldTransforms)}function VA(t,e,n,r=!1){return ms(n,t.Qu(r?4:3,e))}function ms(t,e){if(MA(t=he(t)))return gy("Unsupported field value:",e,t),OA(t,e);if(t instanceof wi)return function(r,i){if(!NA(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ms(a,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=he(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ux(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=de.fromDate(r);return{timestampValue:Io(i.serializer,s)}}if(r instanceof de){const s=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Io(i.serializer,s)}}if(r instanceof oh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ai)return{bytesValue:Ix(i.serializer,r._byteString)};if(r instanceof Be){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Og(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Zl)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return Rg(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${sh(r)}`)}(t,e)}function OA(t,e){const n={};return BS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yi(t,(r,i)=>{const s=ms(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function MA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof de||t instanceof oh||t instanceof ai||t instanceof Be||t instanceof wi||t instanceof Zl)}function gy(t,e,n){if(!MA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=sh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function xl(t,e,n){if((e=he(e))instanceof vi)return e._internalPath;if(typeof e=="string")return uh(t,e);throw pd("Field path arguments must be of type string or ",t,!1,void 0,n)}const yL=new RegExp("[~\\*/\\[\\]]");function uh(t,e,n){if(e.search(yL)>=0)throw pd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vi(...e.split("."))._internalPath}catch{throw pd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new U(O.INVALID_ARGUMENT,a+t+l)}function LA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Al{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _L(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ch("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _L extends Al{data(){return super.data()}}function ch(t,e){return typeof e=="string"?uh(t,e):e instanceof vi?e._internalPath:e._delegate._internalPath}/**
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
 */function FA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yy{}class Ho extends yy{}function dh(t,e,...n){let r=[];e instanceof yy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof gs).length,a=s.filter(l=>l instanceof Qo).length;if(o>1||o>0&&a>0)throw new U(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Qo extends Ho{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Qo(e,n,r)}_apply(e){const n=this._parse(e);return BA(e._query,n),new rt(e.firestore,e.converter,Yp(e._query,n))}_parse(e){const n=ps(e.firestore);return function(s,o,a,l,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new U(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){V0(f,d);const _=[];for(const x of f)_.push(D0(l,s,x));m={arrayValue:{values:_}}}else m=D0(l,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||V0(f,d),m=VA(a,o,f,d==="in"||d==="not-in");return oe.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function vL(t,e,n){const r=e,i=ch("where",t);return Qo._create(i,r,n)}class gs extends yy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new gs(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:me.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)BA(o,l),o=Yp(o,l)}(e._query,n),new rt(e.firestore,e.converter,Yp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function wL(...t){return t.forEach(e=>zA("or",e)),gs._create("or",t)}function EL(...t){return t.forEach(e=>zA("and",e)),gs._create("and",t)}class hh extends Ho{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new hh(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new U(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new U(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Il(s,o)}(e._query,this._field,this._direction);return new rt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new hr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function fh(t,e="asc"){const n=e,r=ch("orderBy",t);return hh._create(r,n)}class tu extends Ho{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new tu(e,n,r)}_apply(e){return new rt(e.firestore,e.converter,id(e._query,this._limit,this._limitType))}}function jA(t){return SA("limit",t),tu._create("limit",t,"F")}function IL(t){return SA("limitToLast",t),tu._create("limitToLast",t,"L")}class nu extends Ho{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new nu(e,n,r)}_apply(e){const n=UA(e,this.type,this._docOrFields,this._inclusive);return new rt(e.firestore,e.converter,function(i,s){return new hr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function TL(...t){return nu._create("startAt",t,!0)}function SL(...t){return nu._create("startAfter",t,!1)}class ru extends Ho{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new ru(e,n,r)}_apply(e){const n=UA(e,this.type,this._docOrFields,this._inclusive);return new rt(e.firestore,e.converter,function(i,s){return new hr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function xL(...t){return ru._create("endBefore",t,!1)}function AL(...t){return ru._create("endAt",t,!0)}function UA(t,e,n,r){if(n[0]=he(n[0]),n[0]instanceof Al)return function(s,o,a,l,c){if(!l)throw new U(O.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of no(s))if(f.field.isKeyField())d.push(Xi(o,l.key));else{const m=l.data.field(f.field);if(Kd(m))throw new U(O.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const _=f.field.canonicalString();throw new U(O.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${_}' (used as the orderBy) does not exist.`)}d.push(m)}return new ri(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=ps(t.firestore);return function(o,a,l,c,d,f){const m=o.explicitOrderBy;if(d.length>m.length)throw new U(O.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const _=[];for(let x=0;x<d.length;x++){const S=d[x];if(m[x].field.isKeyField()){if(typeof S!="string")throw new U(O.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof S}`);if(!Pg(o)&&S.indexOf("/")!==-1)throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${S}' contains a slash.`);const k=o.path.child(se.fromString(S));if(!W.isDocumentKey(k))throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);const v=new W(k);_.push(Xi(a,v))}else{const k=VA(l,c,S);_.push(k)}}return new ri(_,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function D0(t,e,n){if(typeof(n=he(n))=="string"){if(n==="")throw new U(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pg(e)&&n.indexOf("/")!==-1)throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(se.fromString(n));if(!W.isDocumentKey(r))throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xi(t,new W(r))}if(n instanceof Be)return Xi(t,n._key);throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sh(n)}.`)}function V0(t,e){if(!Array.isArray(t)||t.length===0)throw new U(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function BA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function zA(t,e){if(!(e instanceof Qo||e instanceof gs))throw new U(O.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class _y{convertValue(e,n="none"){switch(ti(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return yi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Re(o.doubleValue));return new Zl(s)}convertGeoPoint(e){return new oh(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vl(e));default:return null}}convertTimestamp(e){const n=sr(e);return new de(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);Q(Dx(r));const i=new ei(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||$e(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function ph(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class PL extends _y{constructor(e){super(),this.firestore=e}convertBytes(e){return new ai(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}/**
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
 */function bL(t){return new Ro("sum",xl("sum",t))}function RL(t){return new Ro("avg",xl("average",t))}function $A(){return new Ro("count")}function kL(t,e){var n,r;return t instanceof Ro&&e instanceof Ro&&t.aggregateType===e.aggregateType&&((n=t._internalFieldPath)===null||n===void 0?void 0:n.canonicalString())===((r=e._internalFieldPath)===null||r===void 0?void 0:r.canonicalString())}function CL(t,e){return uy(t.query,e.query)&&Xr(t.data(),e.data())}/**
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
 */class jr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ss extends Al{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ch("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Qa extends ss{data(e={}){return super.data(e)}}class os{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new jr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Qa(this._firestore,this._userDataWriter,r.key,r,new jr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Qa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new jr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Qa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new jr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:NL(a.type),doc:l,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function NL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}function DL(t,e){return t instanceof ss&&e instanceof ss?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof os&&e instanceof os&&t._firestore===e._firestore&&uy(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function vy(t){t=ne(t,Be);const e=ne(t.firestore,_e);return wA(Ne(e),t._key).then(n=>wy(e,t,n))}class Ei extends _y{constructor(e){super(),this.firestore=e}convertBytes(e){return new ai(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}function VL(t){t=ne(t,Be);const e=ne(t.firestore,_e),n=Ne(e),r=new Ei(e);return WM(n,t._key).then(i=>new ss(e,r,t._key,i,new jr(i!==null&&i.hasLocalMutations,!0),t.converter))}function OL(t){t=ne(t,Be);const e=ne(t.firestore,_e);return wA(Ne(e),t._key,{source:"server"}).then(n=>wy(e,t,n))}function qA(t){t=ne(t,rt);const e=ne(t.firestore,_e),n=Ne(e),r=new Ei(e);return FA(t._query),EA(n,t._query).then(i=>new os(e,r,t,i))}function ML(t){t=ne(t,rt);const e=ne(t.firestore,_e),n=Ne(e),r=new Ei(e);return KM(n,t._query).then(i=>new os(e,r,t,i))}function LL(t){t=ne(t,rt);const e=ne(t.firestore,_e),n=Ne(e),r=new Ei(e);return EA(n,t._query,{source:"server"}).then(i=>new os(e,r,t,i))}function WA(t,e,n){t=ne(t,Be);const r=ne(t.firestore,_e),i=ph(t.converter,e,n);return Yo(r,[lh(ps(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ce.none())])}function ko(t,e,n,...r){t=ne(t,Be);const i=ne(t.firestore,_e),s=ps(i);let o;return o=typeof(e=he(e))=="string"||e instanceof vi?my(s,"updateDoc",t._key,e,n,r):py(s,"updateDoc",t._key,e),Yo(i,[o.toMutation(t._key,Ce.exists(!0))])}function mh(t){return Yo(ne(t.firestore,_e),[new zo(t._key,Ce.none())])}function iu(t,e){const n=ne(t.firestore,_e),r=Pt(t),i=ph(t.converter,e);return Yo(n,[lh(ps(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ce.exists(!1))]).then(()=>r)}function Co(t,...e){var n,r,i;t=he(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||lm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(lm(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,d;if(t instanceof Be)c=ne(t.firestore,_e),d=Uo(t._key.path),l={next:f=>{e[o]&&e[o](wy(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=ne(t,rt);c=ne(f.firestore,_e),d=f._query;const m=new Ei(c);l={next:_=>{e[o]&&e[o](new os(c,m,f,_))},error:e[o+1],complete:e[o+2]},FA(t._query)}return function(m,_,x,S){const k=new rh(S),v=new Zg(_,k,x);return m.asyncQueue.enqueueAndForget(async()=>Yg(await bo(m),v)),()=>{k.Za(),m.asyncQueue.enqueueAndForget(async()=>Jg(await bo(m),v))}}(Ne(c),d,a,l)}function FL(t,e){return HM(Ne(t=ne(t,_e)),lm(e)?e:{next:e})}function Yo(t,e){return function(r,i){const s=new tt;return r.asyncQueue.enqueueAndForget(async()=>IM(await ay(r),i,s)),s.promise}(Ne(t),e)}function wy(t,e,n){const r=n.docs.get(e._key),i=new Ei(t);return new ss(t,i,e._key,r,new jr(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function jL(t){return KA(t,{count:$A()})}function KA(t,e){const n=ne(t.firestore,_e),r=Ne(n),i=US(e,(s,o)=>new gx(o,s.aggregateType,s._internalFieldPath));return GM(r,t._query,i).then(s=>function(a,l,c){const d=new Ei(a);return new kA(l,d,c)}(n,t,s))}class UL{constructor(e){this.kind="memory",this._onlineComponentProvider=oi.provider,e!=null&&e.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=si.provider}toJSON(){return{kind:this.kind}}}class BL{constructor(e){let n;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),n=e.tabManager):(n=GA(void 0),n._initialize(e)),this._onlineComponentProvider=n._onlineComponentProvider,this._offlineComponentProvider=n._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class zL{constructor(){this.kind="memoryEager",this._offlineComponentProvider=si.provider}toJSON(){return{kind:this.kind}}}class $L{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new FM(e)}}toJSON(){return{kind:this.kind}}}function qL(){return new zL}function WL(t){return new $L(t==null?void 0:t.cacheSizeBytes)}function KL(t){return new UL(t)}function GL(t){return new BL(t)}class HL{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=oi.provider,this._offlineComponentProvider={build:n=>new sy(n,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class QL{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=oi.provider,this._offlineComponentProvider={build:n=>new gA(n,e==null?void 0:e.cacheSizeBytes)}}}function GA(t){return new HL(t==null?void 0:t.forceOwnership)}function YL(){return new QL}/**
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
 */const JL={maxAttempts:5};/**
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
 */class HA{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ps(e)}set(e,n,r){this._verifyNotCommitted();const i=Vr(e,this._firestore),s=ph(i.converter,n,r),o=lh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ce.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Vr(e,this._firestore);let o;return o=typeof(n=he(n))=="string"||n instanceof vi?my(this._dataReader,"WriteBatch.update",s._key,n,r,i):py(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ce.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Vr(e,this._firestore);return this._mutations=this._mutations.concat(new zo(n._key,Ce.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new U(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Vr(t,e){if((t=he(t)).firestore!==e)throw new U(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class QA extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=ps(n)}get(n){const r=Vr(n,this._firestore),i=new PL(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return G();const o=s[0];if(o.isFoundDocument())return new Al(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Al(this._firestore,i,r._key,null,r.converter);throw G()})}set(n,r,i){const s=Vr(n,this._firestore),o=ph(s.converter,r,i),a=lh(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Vr(n,this._firestore);let a;return a=typeof(r=he(r))=="string"||r instanceof vi?my(this._dataReader,"Transaction.update",o._key,r,i,s):py(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Vr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Vr(e,this._firestore),r=new Ei(this._firestore);return super.get(e).then(i=>new ss(this._firestore,r,n._key,i._document,new jr(!1,!1),n.converter))}}function XL(t,e,n){t=ne(t,_e);const r=Object.assign(Object.assign({},JL),n);return function(s){if(s.maxAttempts<1)throw new U(O.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new tt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await vA(s);new BM(s.asyncQueue,c,a,o,l).au()}),l.promise}(Ne(t),i=>e(new QA(t,i)),r)}/**
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
 */function ZL(){return new eu("deleteField")}function ys(){return new cy("serverTimestamp")}function eF(...t){return new dy("arrayUnion",t)}function tF(...t){return new hy("arrayRemove",t)}function nF(t){return new fy("increment",t)}function rF(t){return new Zl(t)}/**
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
 */function YA(t){return Ne(t=ne(t,_e)),new HA(t,e=>Yo(t,e))}/**
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
 */function iF(t,e){const n=Ne(t=ne(t,_e));if(!n._uninitializedComponentsProvider||n._uninitializedComponentsProvider._offline.kind==="memory")return Gt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=function(s){const o=typeof s=="string"?function(c){try{return JSON.parse(c)}catch(d){throw new U(O.INVALID_ARGUMENT,"Failed to parse JSON: "+(d==null?void 0:d.message))}}(s):s,a=[];if(Array.isArray(o.indexes))for(const l of o.indexes){const c=O0(l,"collectionGroup"),d=[];if(Array.isArray(l.fields))for(const f of l.fields){const m=uh("setIndexConfiguration",O0(f,"fieldPath"));f.arrayConfig==="CONTAINS"?d.push(new qi(m,2)):f.order==="ASCENDING"?d.push(new qi(m,0)):f.order==="DESCENDING"&&d.push(new qi(m,1))}a.push(new go(go.UNKNOWN_ID,c,d,yo.empty()))}return a}(e);return JM(n,r)}function O0(t,e){if(typeof t[e]!="string")throw new U(O.INVALID_ARGUMENT,"Missing string value for: "+e);return t[e]}/**
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
 */class JA{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function sF(t){var e;t=ne(t,_e);const n=M0.get(t);if(n)return n;if(((e=Ne(t)._uninitializedComponentsProvider)===null||e===void 0?void 0:e._offline.kind)!=="persistent")return null;const r=new JA(t);return M0.set(t,r),r}function oF(t){XA(t,!0)}function aF(t){XA(t,!1)}function lF(t){ZM(Ne(t._firestore)).then(e=>B("deleting all persistent cache indexes succeeded")).catch(e=>Gt("deleting all persistent cache indexes failed",e))}function XA(t,e){XM(Ne(t._firestore),e).then(n=>B(`setting persistent cache index auto creation isEnabled=${e} succeeded`)).catch(n=>Gt(`setting persistent cache index auto creation isEnabled=${e} failed`,n))}const M0=new WeakMap;/**
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
 */function uF(t){var e;const n=(e=Ne(ne(t.firestore,_e))._onlineComponents)===null||e===void 0?void 0:e.datastore.serializer;return n===void 0?null:Jd(n,wt(t._query))._t}function cF(t,e){var n;const r=US(e,(s,o)=>new gx(o,s.aggregateType,s._internalFieldPath)),i=(n=Ne(ne(t.firestore,_e))._onlineComponents)===null||n===void 0?void 0:n.datastore.serializer;return i===void 0?null:Rx(i,ex(t._query),r,!0).request}/**
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
 */class dF{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return Ey.instance.onExistenceFilterMismatch(e)}}class Ey{constructor(){this.Uu=new Map}static get instance(){return Yu||(Yu=new Ey,function(n){if(sd)throw new Error("a TestingHooksSpi instance is already set");sd=n}(Yu)),Yu}et(e){this.Uu.forEach(n=>n(e))}onExistenceFilterMismatch(e){const n=Symbol(),r=this.Uu;return r.set(n,e),()=>r.delete(n)}}let Yu=null;(function(e,n=!0){(function(i){jo=i})(Lo),Dn(new yn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new _e(new GV(r.getProvider("auth-internal")),new YV(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new U(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ei(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),nn(xw,"4.7.3",e),nn(xw,"4.7.3","esm2017")})();const hF=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:_y,AggregateField:Ro,AggregateQuerySnapshot:kA,Bytes:ai,CACHE_SIZE_UNLIMITED:nL,CollectionReference:mn,DocumentReference:Be,DocumentSnapshot:ss,FieldPath:vi,FieldValue:wi,Firestore:_e,FirestoreError:U,GeoPoint:oh,LoadBundleTask:AA,PersistentCacheIndexManager:JA,Query:rt,QueryCompositeFilterConstraint:gs,QueryConstraint:Ho,QueryDocumentSnapshot:Qa,QueryEndAtConstraint:ru,QueryFieldFilterConstraint:Qo,QueryLimitConstraint:tu,QueryOrderByConstraint:hh,QuerySnapshot:os,QueryStartAtConstraint:nu,SnapshotMetadata:jr,Timestamp:de,Transaction:QA,VectorValue:Zl,WriteBatch:HA,_AutoId:Ig,_ByteString:Fe,_DatabaseId:ei,_DocumentKey:W,_EmptyAppCheckTokenProvider:JV,_EmptyAuthCredentialsProvider:PS,_FieldPath:Ae,_TestingHooks:dF,_cast:ne,_debugAssert:WV,_internalAggregationQueryToProtoRunAggregationQueryRequest:cF,_internalQueryToProtoQueryTarget:uF,_isBase64Available:x2,_logWarn:Gt,_validateIsNotUsedTogether:TA,addDoc:iu,aggregateFieldEqual:kL,aggregateQuerySnapshotEqual:CL,and:EL,arrayRemove:tF,arrayUnion:eF,average:RL,clearIndexedDbPersistence:oL,collection:Xl,collectionGroup:eL,connectFirestoreEmulator:xA,count:$A,deleteAllPersistentCacheIndexes:lF,deleteDoc:mh,deleteField:ZL,disableNetwork:uL,disablePersistentCacheIndexAutoCreation:aF,doc:Pt,documentId:fL,enableIndexedDbPersistence:iL,enableMultiTabIndexedDbPersistence:sL,enableNetwork:lL,enablePersistentCacheIndexAutoCreation:oF,endAt:AL,endBefore:xL,ensureFirestoreConfigured:Ne,executeWrite:Yo,getAggregateFromServer:KA,getCountFromServer:jL,getDoc:vy,getDocFromCache:VL,getDocFromServer:OL,getDocs:qA,getDocsFromCache:ML,getDocsFromServer:LL,getFirestore:PA,getPersistentCacheIndexManager:sF,increment:nF,initializeFirestore:rL,limit:jA,limitToLast:IL,loadBundle:dL,memoryEagerGarbageCollector:qL,memoryLocalCache:KL,memoryLruGarbageCollector:WL,namedQuery:hL,onSnapshot:Co,onSnapshotsInSync:FL,or:wL,orderBy:fh,persistentLocalCache:GL,persistentMultipleTabManager:YL,persistentSingleTabManager:GA,query:dh,queryEqual:uy,refEqual:tL,runTransaction:XL,serverTimestamp:ys,setDoc:WA,setIndexConfiguration:iF,setLogLevel:qV,snapshotEqual:DL,startAfter:SL,startAt:TL,sum:bL,terminate:cL,updateDoc:ko,vector:rF,waitForPendingWrites:aL,where:vL,writeBatch:YA},Symbol.toStringTag,{value:"Module"}));var fF="firebase",pF="10.14.1";/**
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
 */nn(fF,pF,"app");const ZA="@firebase/installations",Iy="0.6.9";/**
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
 */const eP=1e4,tP=`w:${Iy}`,nP="FIS_v2",mF="https://firebaseinstallations.googleapis.com/v1",gF=60*60*1e3,yF="installations",_F="Installations";/**
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
 */const vF={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},as=new hs(yF,_F,vF);function rP(t){return t instanceof On&&t.code.includes("request-failed")}/**
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
 */function iP({projectId:t}){return`${mF}/projects/${t}/installations`}function sP(t){return{token:t.token,requestStatus:2,expiresIn:EF(t.expiresIn),creationTime:Date.now()}}async function oP(t,e){const r=(await e.json()).error;return as.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function aP({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function wF(t,{refreshToken:e}){const n=aP(t);return n.append("Authorization",IF(e)),n}async function lP(t){const e=await t();return e.status>=500&&e.status<600?t():e}function EF(t){return Number(t.replace("s","000"))}function IF(t){return`${nP} ${t}`}/**
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
 */async function TF({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=iP(t),i=aP(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:nP,appId:t.appId,sdkVersion:tP},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await lP(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:sP(c.authToken)}}else throw await oP("Create Installation",l)}/**
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
 */function uP(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function SF(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const xF=/^[cdef][\w-]{21}$/,um="";function AF(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=PF(t);return xF.test(n)?n:um}catch{return um}}function PF(t){return SF(t).substr(0,22)}/**
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
 */function gh(t){return`${t.appName}!${t.appId}`}/**
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
 */const cP=new Map;function dP(t,e){const n=gh(t);hP(n,e),bF(n,e)}function hP(t,e){const n=cP.get(t);if(n)for(const r of n)r(e)}function bF(t,e){const n=RF();n&&n.postMessage({key:t,fid:e}),kF()}let Ui=null;function RF(){return!Ui&&"BroadcastChannel"in self&&(Ui=new BroadcastChannel("[Firebase] FID Change"),Ui.onmessage=t=>{hP(t.data.key,t.data.fid)}),Ui}function kF(){cP.size===0&&Ui&&(Ui.close(),Ui=null)}/**
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
 */const CF="firebase-installations-database",NF=1,ls="firebase-installations-store";let Df=null;function Ty(){return Df||(Df=Bd(CF,NF,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ls)}}})),Df}async function md(t,e){const n=gh(t),i=(await Ty()).transaction(ls,"readwrite"),s=i.objectStore(ls),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&dP(t,e.fid),e}async function fP(t){const e=gh(t),r=(await Ty()).transaction(ls,"readwrite");await r.objectStore(ls).delete(e),await r.done}async function yh(t,e){const n=gh(t),i=(await Ty()).transaction(ls,"readwrite"),s=i.objectStore(ls),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&dP(t,a.fid),a}/**
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
 */async function Sy(t){let e;const n=await yh(t.appConfig,r=>{const i=DF(r),s=VF(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===um?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function DF(t){const e=t||{fid:AF(),registrationStatus:0};return pP(e)}function VF(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(as.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=OF(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:MF(t)}:{installationEntry:e}}async function OF(t,e){try{const n=await TF(t,e);return md(t.appConfig,n)}catch(n){throw rP(n)&&n.customData.serverCode===409?await fP(t.appConfig):await md(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function MF(t){let e=await L0(t.appConfig);for(;e.registrationStatus===1;)await uP(100),e=await L0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Sy(t);return r||n}return e}function L0(t){return yh(t,e=>{if(!e)throw as.create("installation-not-found");return pP(e)})}function pP(t){return LF(t)?{fid:t.fid,registrationStatus:0}:t}function LF(t){return t.registrationStatus===1&&t.registrationTime+eP<Date.now()}/**
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
 */async function FF({appConfig:t,heartbeatServiceProvider:e},n){const r=jF(t,n),i=wF(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:tP,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await lP(()=>fetch(r,a));if(l.ok){const c=await l.json();return sP(c)}else throw await oP("Generate Auth Token",l)}function jF(t,{fid:e}){return`${iP(t)}/${e}/authTokens:generate`}/**
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
 */async function xy(t,e=!1){let n;const r=await yh(t.appConfig,s=>{if(!mP(s))throw as.create("not-registered");const o=s.authToken;if(!e&&zF(o))return s;if(o.requestStatus===1)return n=UF(t,e),s;{if(!navigator.onLine)throw as.create("app-offline");const a=qF(s);return n=BF(t,a),a}});return n?await n:r.authToken}async function UF(t,e){let n=await F0(t.appConfig);for(;n.authToken.requestStatus===1;)await uP(100),n=await F0(t.appConfig);const r=n.authToken;return r.requestStatus===0?xy(t,e):r}function F0(t){return yh(t,e=>{if(!mP(e))throw as.create("not-registered");const n=e.authToken;return WF(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function BF(t,e){try{const n=await FF(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await md(t.appConfig,r),n}catch(n){if(rP(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await fP(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await md(t.appConfig,r)}throw n}}function mP(t){return t!==void 0&&t.registrationStatus===2}function zF(t){return t.requestStatus===2&&!$F(t)}function $F(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+gF}function qF(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function WF(t){return t.requestStatus===1&&t.requestTime+eP<Date.now()}/**
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
 */async function KF(t){const e=t,{installationEntry:n,registrationPromise:r}=await Sy(e);return r?r.catch(console.error):xy(e).catch(console.error),n.fid}/**
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
 */async function GF(t,e=!1){const n=t;return await HF(n),(await xy(n,e)).token}async function HF(t){const{registrationPromise:e}=await Sy(t);e&&await e}/**
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
 */function QF(t){if(!t||!t.options)throw Vf("App Configuration");if(!t.name)throw Vf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Vf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Vf(t){return as.create("missing-app-config-values",{valueName:t})}/**
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
 */const gP="installations",YF="installations-internal",JF=t=>{const e=t.getProvider("app").getImmediate(),n=QF(e),r=fi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},XF=t=>{const e=t.getProvider("app").getImmediate(),n=fi(e,gP).getImmediate();return{getId:()=>KF(n),getToken:i=>GF(n,i)}};function ZF(){Dn(new yn(gP,JF,"PUBLIC")),Dn(new yn(YF,XF,"PRIVATE"))}ZF();nn(ZA,Iy);nn(ZA,Iy,"esm2017");/**
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
 */const e4="/firebase-messaging-sw.js",t4="/firebase-cloud-messaging-push-scope",yP="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",n4="https://fcmregistrations.googleapis.com/v1",_P="google.c.a.c_id",r4="google.c.a.c_l",i4="google.c.a.ts",s4="google.c.a.e";var j0;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(j0||(j0={}));/**
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
 */var Pl;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Pl||(Pl={}));/**
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
 */function zn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function o4(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const Of="fcm_token_details_db",a4=5,U0="fcm_token_object_Store";async function l4(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Of))return null;let e=null;return(await Bd(Of,a4,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(U0))return;const l=o.objectStore(U0),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(i===2){const d=c;if(!d.auth||!d.p256dh||!d.endpoint)return;e={token:d.fcmToken,createTime:(a=d.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:zn(d.vapidKey)}}}else if(i===3){const d=c;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:zn(d.auth),p256dh:zn(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:zn(d.vapidKey)}}}else if(i===4){const d=c;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:zn(d.auth),p256dh:zn(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:zn(d.vapidKey)}}}}}})).close(),await If(Of),await If("fcm_vapid_details_db"),await If("undefined"),u4(e)?e:null}function u4(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const c4="firebase-messaging-database",d4=1,bl="firebase-messaging-store";let Mf=null;function vP(){return Mf||(Mf=Bd(c4,d4,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bl)}}})),Mf}async function h4(t){const e=wP(t),r=await(await vP()).transaction(bl).objectStore(bl).get(e);if(r)return r;{const i=await l4(t.appConfig.senderId);if(i)return await Ay(t,i),i}}async function Ay(t,e){const n=wP(t),i=(await vP()).transaction(bl,"readwrite");return await i.objectStore(bl).put(e,n),await i.done,e}function wP({appConfig:t}){return t.appId}/**
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
 */const f4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Et=new hs("messaging","Messaging",f4);/**
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
 */async function p4(t,e){const n=await by(t),r=EP(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Py(t.appConfig),i)).json()}catch(o){throw Et.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Et.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Et.create("token-subscribe-no-token");return s.token}async function m4(t,e){const n=await by(t),r=EP(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Py(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Et.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Et.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Et.create("token-update-no-token");return s.token}async function g4(t,e){const r={method:"DELETE",headers:await by(t)};try{const s=await(await fetch(`${Py(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Et.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Et.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Py({projectId:t}){return`${n4}/projects/${t}/registrations`}async function by({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function EP({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==yP&&(i.web.applicationPubKey=r),i}/**
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
 */const y4=7*24*60*60*1e3;async function _4(t){const e=await w4(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:zn(e.getKey("auth")),p256dh:zn(e.getKey("p256dh"))},r=await h4(t.firebaseDependencies);if(r){if(E4(r.subscriptionOptions,n))return Date.now()>=r.createTime+y4?v4(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await g4(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return B0(t.firebaseDependencies,n)}else return B0(t.firebaseDependencies,n)}async function v4(t,e){try{const n=await m4(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Ay(t.firebaseDependencies,r),n}catch(n){throw n}}async function B0(t,e){const r={token:await p4(t,e),createTime:Date.now(),subscriptionOptions:e};return await Ay(t,r),r.token}async function w4(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:o4(e)})}function E4(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function z0(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return I4(e,t),T4(e,t),S4(e,t),e}function I4(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function T4(t,e){e.data&&(t.data=e.data)}function S4(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function x4(t){return typeof t=="object"&&!!t&&_P in t}/**
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
 */function A4(t){if(!t||!t.options)throw Lf("App Configuration Object");if(!t.name)throw Lf("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Lf(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Lf(t){return Et.create("missing-app-config-values",{valueName:t})}/**
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
 */class P4{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=A4(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function b4(t){try{t.swRegistration=await navigator.serviceWorker.register(e4,{scope:t4}),t.swRegistration.update().catch(()=>{})}catch(e){throw Et.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function R4(t,e){if(!e&&!t.swRegistration&&await b4(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Et.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function k4(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=yP)}/**
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
 */async function IP(t,e){if(!navigator)throw Et.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Et.create("permission-blocked");return await k4(t,e==null?void 0:e.vapidKey),await R4(t,e==null?void 0:e.serviceWorkerRegistration),_4(t)}/**
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
 */async function C4(t,e,n){const r=N4(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[_P],message_name:n[r4],message_time:n[i4],message_device_time:Math.floor(Date.now()/1e3)})}function N4(t){switch(t){case Pl.NOTIFICATION_CLICKED:return"notification_open";case Pl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function D4(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Pl.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(z0(n)):t.onMessageHandler.next(z0(n)));const r=n.data;x4(r)&&r[s4]==="1"&&await C4(t,n.messageType,r)}const $0="@firebase/messaging",q0="0.12.12";/**
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
 */const V4=t=>{const e=new P4(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>D4(e,n)),e},O4=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>IP(e,r)}};function M4(){Dn(new yn("messaging",V4,"PUBLIC")),Dn(new yn("messaging-internal",O4,"PRIVATE")),nn($0,q0),nn($0,q0,"esm2017")}/**
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
 */async function TP(){try{await VT()}catch{return!1}return typeof window<"u"&&lg()&&pC()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function L4(t,e){if(!navigator)throw Et.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function F4(t=dg()){return TP().then(e=>{if(!e)throw Et.create("unsupported-browser")},e=>{throw Et.create("indexed-db-unsupported")}),fi(he(t),"messaging").getImmediate()}async function j4(t,e){return t=he(t),IP(t,e)}function U4(t,e){return t=he(t),L4(t,e)}M4();const B4={apiKey:"AIzaSyAYr-SX1BaUG_PWF31H1uvTspY-rq5arGg",authDomain:"home-collab.firebaseapp.com",projectId:"home-collab",storageBucket:"home-collab.firebasestorage.app",messagingSenderId:"803047926601",appId:"1:803047926601:web:b84b6334215b55f9cac898"},_h=LT(B4),su=zV(_h),nt=PA(_h);let Ju=null;async function Ry(){return Ju||(await TP()&&(Ju=F4(_h)),Ju)}const z4=Object.freeze(Object.defineProperty({__proto__:null,auth:su,db:nt,default:_h,getMessagingInstance:Ry},Symbol.toStringTag,{value:"Module"}));async function $4(t,e){return xD(su,t,e)}async function q4(t,e,n){const r=await SD(su,t,e);return await PD(r.user,{displayName:n}),await WA(Pt(nt,"users",r.user.uid),{displayName:n,email:t,familyId:null,fcmTokens:[],notificationsEnabled:!0,createdAt:ys()}),r}async function W4(){return CD(su)}async function K4(t){const e=await vy(Pt(nt,"users",t));return e.exists()?{id:e.id,...e.data()}:null}async function G4(t,e){return ko(Pt(nt,"users",t),e)}async function H4(t,e){const n=Pt(nt,"users",t),r=await vy(n);if(!r.exists())return;const{fcmTokens:i=[]}=r.data();i.includes(e)||await ko(n,{fcmTokens:[...i,e]})}const W0=t=>{let e;const n=new Set,r=(c,d)=>{const f=typeof c=="function"?c(e):c;if(!Object.is(f,e)){const m=e;e=d??(typeof f!="object"||f===null)?f:Object.assign({},e,f),n.forEach(_=>_(e,m))}},i=()=>e,a={setState:r,getState:i,getInitialState:()=>l,subscribe:c=>(n.add(c),()=>n.delete(c))},l=e=t(r,i,a);return a},Q4=t=>t?W0(t):W0,Y4=t=>t;function J4(t,e=Y4){const n=Ta.useSyncExternalStore(t.subscribe,Ta.useCallback(()=>e(t.getState()),[t,e]),Ta.useCallback(()=>e(t.getInitialState()),[t,e]));return Ta.useDebugValue(n),n}const K0=t=>{const e=Q4(t),n=r=>J4(e,r);return Object.assign(n,e),n},SP=t=>t?K0(t):K0,Mn=SP(t=>({currentUser:null,userProfile:null,partnerProfile:null,familyId:null,familyData:null,isLoading:!0,setCurrentUser:e=>t({currentUser:e}),setUserProfile:e=>t({userProfile:e}),setPartnerProfile:e=>t({partnerProfile:e}),setFamilyId:e=>t({familyId:e}),setFamilyData:e=>t({familyData:e}),setLoading:e=>t({isLoading:e}),reset:()=>t({currentUser:null,userProfile:null,partnerProfile:null,familyId:null,familyData:null,isLoading:!1})}));function X4(){const{setCurrentUser:t,setUserProfile:e,setPartnerProfile:n,setFamilyId:r,setFamilyData:i,setLoading:s,reset:o}=Mn(),a=j.useRef(null),l=j.useRef(null);j.useEffect(()=>{const c=kD(su,d=>{var f,m;if((f=l.current)==null||f.call(l),(m=a.current)==null||m.call(a),!d){o();return}t(d),a.current=Co(Pt(nt,"users",d.uid),_=>{if(!_.exists()){s(!1);return}const x={id:_.id,..._.data()};e(x),x.familyId?(r(x.familyId),l.current=Co(Pt(nt,"families",x.familyId),async S=>{if(!S.exists()){s(!1);return}const k={id:S.id,...S.data()};i(k);const v=k.members.find(g=>g!==d.uid);if(v){const g=await K4(v);n(g)}s(!1)})):s(!1)})});return()=>{var d,f;c(),(d=l.current)==null||d.call(l),(f=a.current)==null||f.call(a)}},[])}function xP(t){return Xl(nt,"families",t,"tasks")}function Z4(t,e){const n=dh(xP(t),fh("createdAt","desc"));return Co(n,r=>{const i=r.docs.map(s=>({id:s.id,...s.data()}));e(i)})}async function ej(t,e){var i;const n={...e,isActive:!0,createdAt:ys()};return(i=e.recurrence)!=null&&i.startDate&&!(e.recurrence.startDate instanceof de)&&(n.recurrence={...e.recurrence,startDate:de.fromDate(new Date(e.recurrence.startDate))}),e.dueDate&&!(e.dueDate instanceof de)&&(n.dueDate=de.fromDate(new Date(e.dueDate))),(await iu(xP(t),n)).id}async function tj(t,e,n){var i;const r={...n};return(i=n.recurrence)!=null&&i.startDate&&!(n.recurrence.startDate instanceof de)&&(r.recurrence={...n.recurrence,startDate:de.fromDate(new Date(n.recurrence.startDate))}),n.dueDate&&!(n.dueDate instanceof de)&&(r.dueDate=de.fromDate(new Date(n.dueDate))),ko(Pt(nt,"families",t,"tasks",e),r)}async function nj(t,e){return mh(Pt(nt,"families",t,"tasks",e))}function AP(t){return Xl(nt,"families",t,"completions")}function rj(t,e){const n=dh(AP(t),fh("completedAt","desc"),jA(500));return Co(n,r=>{const i=r.docs.map(s=>({id:s.id,...s.data()}));e(i)})}async function ij(t,e){return iu(AP(t),{...e,completedAt:ys()})}async function sj(t,e){return mh(Pt(nt,"families",t,"completions",e))}const oj=[{name:"청소",color:"#3b82f6",icon:"🧹",order:0},{name:"주방",color:"#f97316",icon:"🍳",order:1},{name:"장보기",color:"#22c55e",icon:"🛒",order:2},{name:"집관리",color:"#a855f7",icon:"🔧",order:3},{name:"기타",color:"#6b7280",icon:"📌",order:4}];function gd(t){return Xl(nt,"families",t,"categories")}async function aj(t){if(!(await qA(gd(t))).empty)return;const n=YA(nt);oj.forEach(r=>{n.set(Pt(gd(t)),{...r,isDefault:!0,createdAt:ys()})}),await n.commit()}function lj(t,e){const n=dh(gd(t),fh("order","asc"));return Co(n,r=>{e(r.docs.map(i=>({id:i.id,...i.data()})))})}async function uj(t,e){return iu(gd(t),{...e,createdAt:ys()})}async function cj(t,e){return mh(Pt(nt,"families",t,"categories",e))}const Ii=SP((t,e)=>({tasks:[],categories:[],completions:[],setTasks:n=>t({tasks:n}),setCategories:n=>t({categories:n}),setCompletions:n=>t({completions:n}),getCategoryById:n=>e().categories.find(r=>r.id===n),isCompleted:(n,r)=>e().completions.some(i=>i.taskId===n&&i.periodKey===r),getCompletionForPeriod:(n,r)=>e().completions.find(i=>i.taskId===n&&i.periodKey===r)}));function dj(t){const{setTasks:e,setCompletions:n,setCategories:r}=Ii();j.useEffect(()=>{if(!t)return;aj(t);const i=Z4(t,e),s=rj(t,n),o=lj(t,r);return()=>{i(),s(),o()}},[t])}async function hj(t){if(!("Notification"in window)||await Notification.requestPermission()!=="granted")return null;const n=await Ry();if(!n)return null;try{return await j4(n,{vapidKey:t})}catch(r){return console.error("FCM 토큰 발급 실패:",r),null}}async function fj(t){const e=await Ry();return e?U4(e,n=>{t(n)}):()=>{}}async function PP({tokens:t,title:e,body:n,data:r}){const i="https://your-app.netlify.app/.netlify/functions/send-notification";if(!(!t||t.length===0))try{await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tokens:t,title:e,body:n,data:r})})}catch(s){console.error("알림 전송 실패:",s)}}function pj(){const{currentUser:t,userProfile:e}=Mn();j.useEffect(()=>{if(!t||!(e!=null&&e.notificationsEnabled))return;const n="your_vapid_key";let r=()=>{};return(async()=>{const i=await hj(n);i&&await H4(t.uid,i),r=await fj(s=>{var o,a;Notification.permission==="granted"&&new Notification(((o=s.notification)==null?void 0:o.title)||"홈콜라보",{body:((a=s.notification)==null?void 0:a.body)||"",icon:"/home-collab/icons/icon-192.png"})})})(),()=>r()},[t==null?void 0:t.uid,e==null?void 0:e.notificationsEnabled])}function bP({fullScreen:t}){const e=E.jsxs("div",{className:"flex flex-col items-center gap-3",children:[E.jsx("div",{className:"w-10 h-10 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"}),E.jsx("p",{className:"text-sm text-slate-400",children:"불러오는 중..."})]});return t?E.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-white z-50",children:e}):E.jsx("div",{className:"flex justify-center py-12",children:e})}function mj(){const[t,e]=j.useState("login"),[n,r]=j.useState(""),[i,s]=j.useState(""),[o,a]=j.useState(""),[l,c]=j.useState(""),[d,f]=j.useState(!1);async function m(_){_.preventDefault(),c(""),f(!0);try{if(t==="login")await $4(n,i);else{if(!o.trim()){c("이름을 입력해주세요."),f(!1);return}await q4(n,i,o.trim())}}catch(x){c({"auth/user-not-found":"등록되지 않은 이메일입니다.","auth/wrong-password":"비밀번호가 올바르지 않습니다.","auth/invalid-credential":"이메일 또는 비밀번호가 올바르지 않습니다.","auth/email-already-in-use":"이미 사용 중인 이메일입니다.","auth/weak-password":"비밀번호는 6자 이상이어야 합니다.","auth/invalid-email":"올바른 이메일 형식이 아닙니다."}[x.code]||"오류가 발생했습니다. 다시 시도해주세요.")}finally{f(!1)}}return E.jsx("div",{className:"min-h-screen bg-gradient-to-br from-primary-50 to-white flex flex-col items-center justify-center px-6",children:E.jsxs("div",{className:"w-full max-w-sm",children:[E.jsxs("div",{className:"text-center mb-8",children:[E.jsx("div",{className:"text-5xl mb-3",children:"🏠"}),E.jsx("h1",{className:"text-2xl font-bold text-slate-800",children:"홈콜라보"}),E.jsx("p",{className:"text-slate-500 text-sm mt-1",children:"우리 가족 집안일 협업 앱"})]}),E.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-6",children:[E.jsx("div",{className:"flex bg-slate-100 rounded-xl p-1 mb-6",children:["login","signup"].map(_=>E.jsx("button",{onClick:()=>{e(_),c("")},className:`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${t===_?"bg-white text-slate-800 shadow-sm":"text-slate-500"}`,children:_==="login"?"로그인":"회원가입"},_))}),E.jsxs("form",{onSubmit:m,className:"space-y-4",children:[t==="signup"&&E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"이름"}),E.jsx("input",{type:"text",value:o,onChange:_=>a(_.target.value),placeholder:"홍길동",className:"w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 text-slate-800",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"이메일"}),E.jsx("input",{type:"email",value:n,onChange:_=>r(_.target.value),placeholder:"example@email.com",className:"w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 text-slate-800",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"비밀번호"}),E.jsx("input",{type:"password",value:i,onChange:_=>s(_.target.value),placeholder:"6자 이상",className:"w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 text-slate-800",required:!0})]}),l&&E.jsx("p",{className:"text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl",children:l}),E.jsx("button",{type:"submit",disabled:d,className:"w-full py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 active:scale-95 transition-all disabled:opacity-60",children:d?"처리 중...":t==="login"?"로그인":"가입하기"})]})]})]})})}function Me(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function ar(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function RP(t,e){const n=Me(t);return isNaN(e)?ar(t,NaN):(e&&n.setDate(n.getDate()+e),n)}const kP=6048e5,gj=864e5;let yj={};function vh(){return yj}function li(t,e){var a,l,c,d;const n=vh(),r=(e==null?void 0:e.weekStartsOn)??((l=(a=e==null?void 0:e.locale)==null?void 0:a.options)==null?void 0:l.weekStartsOn)??n.weekStartsOn??((d=(c=n.locale)==null?void 0:c.options)==null?void 0:d.weekStartsOn)??0,i=Me(t),s=i.getDay(),o=(s<r?7:0)+s-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function yd(t){return li(t,{weekStartsOn:1})}function CP(t){const e=Me(t),n=e.getFullYear(),r=ar(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=yd(r),s=ar(t,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const o=yd(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function Rl(t){const e=Me(t);return e.setHours(0,0,0,0),e}function G0(t){const e=Me(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function _j(t,e){const n=Rl(t),r=Rl(e),i=+n-G0(n),s=+r-G0(r);return Math.round((i-s)/gj)}function vj(t){const e=CP(t),n=ar(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),yd(n)}function ky(t){return ar(t,Date.now())}function kl(t,e){const n=Rl(t),r=Rl(e);return+n==+r}function wj(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Ej(t){if(!wj(t)&&typeof t!="number")return!1;const e=Me(t);return!isNaN(Number(e))}function Ij(t){const e=Me(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function Tj(t,e){const n=Me(t.start),r=Me(t.end);let i=+n>+r;const s=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0);let a=1;const l=[];for(;+o<=s;)l.push(Me(o)),o.setDate(o.getDate()+a),o.setHours(0,0,0,0);return i?l.reverse():l}function Sj(t){const e=Me(t);return e.setDate(1),e.setHours(0,0,0,0),e}function xj(t){const e=Me(t),n=ar(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}function Aj(t,e){const n=e==null?void 0:e.weekStartsOn,r=Me(t),i=r.getDay(),s=(i<n?-7:0)+6-(i-n);return r.setDate(r.getDate()+s),r.setHours(23,59,59,999),r}const Pj={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},bj=(t,e,n)=>{let r;const i=Pj[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function io(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const Rj={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},kj={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Cj={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Nj={date:io({formats:Rj,defaultWidth:"full"}),time:io({formats:kj,defaultWidth:"full"}),dateTime:io({formats:Cj,defaultWidth:"full"})},Dj={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Vj=(t,e,n,r)=>Dj[t];function In(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,a=n!=null&&n.width?String(n.width):o;i=t.formattingValues[a]||t.formattingValues[o]}else{const o=t.defaultWidth,a=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[a]||t.values[o]}const s=t.argumentCallback?t.argumentCallback(e):e;return i[s]}}const Oj={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Mj={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Lj={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Fj={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},jj={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Uj={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Bj=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},zj={ordinalNumber:Bj,era:In({values:Oj,defaultWidth:"wide"}),quarter:In({values:Mj,defaultWidth:"wide",argumentCallback:t=>t-1}),month:In({values:Lj,defaultWidth:"wide"}),day:In({values:Fj,defaultWidth:"wide"}),dayPeriod:In({values:jj,defaultWidth:"wide",formattingValues:Uj,defaultFormattingWidth:"wide"})};function Tn(t){return(e,n={})=>{const r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;const o=s[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?qj(a,f=>f.test(o)):$j(a,f=>f.test(o));let c;c=t.valueCallback?t.valueCallback(l):l,c=n.valueCallback?n.valueCallback(c):c;const d=e.slice(o.length);return{value:c,rest:d}}}function $j(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function qj(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function NP(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const i=r[0],s=e.match(t.parsePattern);if(!s)return null;let o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;const a=e.slice(i.length);return{value:o,rest:a}}}const Wj=/^(\d+)(th|st|nd|rd)?/i,Kj=/\d+/i,Gj={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Hj={any:[/^b/i,/^(a|c)/i]},Qj={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Yj={any:[/1/i,/2/i,/3/i,/4/i]},Jj={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Xj={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Zj={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},eU={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},tU={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},nU={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},rU={ordinalNumber:NP({matchPattern:Wj,parsePattern:Kj,valueCallback:t=>parseInt(t,10)}),era:Tn({matchPatterns:Gj,defaultMatchWidth:"wide",parsePatterns:Hj,defaultParseWidth:"any"}),quarter:Tn({matchPatterns:Qj,defaultMatchWidth:"wide",parsePatterns:Yj,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Tn({matchPatterns:Jj,defaultMatchWidth:"wide",parsePatterns:Xj,defaultParseWidth:"any"}),day:Tn({matchPatterns:Zj,defaultMatchWidth:"wide",parsePatterns:eU,defaultParseWidth:"any"}),dayPeriod:Tn({matchPatterns:tU,defaultMatchWidth:"any",parsePatterns:nU,defaultParseWidth:"any"})},iU={code:"en-US",formatDistance:bj,formatLong:Nj,formatRelative:Vj,localize:zj,match:rU,options:{weekStartsOn:0,firstWeekContainsDate:1}};function sU(t){const e=Me(t);return _j(e,xj(e))+1}function oU(t){const e=Me(t),n=+yd(e)-+vj(e);return Math.round(n/kP)+1}function DP(t,e){var d,f,m,_;const n=Me(t),r=n.getFullYear(),i=vh(),s=(e==null?void 0:e.firstWeekContainsDate)??((f=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??i.firstWeekContainsDate??((_=(m=i.locale)==null?void 0:m.options)==null?void 0:_.firstWeekContainsDate)??1,o=ar(t,0);o.setFullYear(r+1,0,s),o.setHours(0,0,0,0);const a=li(o,e),l=ar(t,0);l.setFullYear(r,0,s),l.setHours(0,0,0,0);const c=li(l,e);return n.getTime()>=a.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function aU(t,e){var a,l,c,d;const n=vh(),r=(e==null?void 0:e.firstWeekContainsDate)??((l=(a=e==null?void 0:e.locale)==null?void 0:a.options)==null?void 0:l.firstWeekContainsDate)??n.firstWeekContainsDate??((d=(c=n.locale)==null?void 0:c.options)==null?void 0:d.firstWeekContainsDate)??1,i=DP(t,e),s=ar(t,0);return s.setFullYear(i,0,r),s.setHours(0,0,0,0),li(s,e)}function lU(t,e){const n=Me(t),r=+li(n,e)-+aU(n,e);return Math.round(r/kP)+1}function pe(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const Tr={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return pe(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):pe(n+1,2)},d(t,e){return pe(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return pe(t.getHours()%12||12,e.length)},H(t,e){return pe(t.getHours(),e.length)},m(t,e){return pe(t.getMinutes(),e.length)},s(t,e){return pe(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),i=Math.trunc(r*Math.pow(10,n-3));return pe(i,e.length)}},Ps={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},H0={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return Tr.y(t,e)},Y:function(t,e,n,r){const i=DP(t,r),s=i>0?i:1-i;if(e==="YY"){const o=s%100;return pe(o,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):pe(s,e.length)},R:function(t,e){const n=CP(t);return pe(n,e.length)},u:function(t,e){const n=t.getFullYear();return pe(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return pe(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return pe(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return Tr.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return pe(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const i=lU(t,r);return e==="wo"?n.ordinalNumber(i,{unit:"week"}):pe(i,e.length)},I:function(t,e,n){const r=oU(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):pe(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Tr.d(t,e)},D:function(t,e,n){const r=sU(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):pe(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const i=t.getDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return pe(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const i=t.getDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return pe(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),i=r===0?7:r;switch(e){case"i":return String(i);case"ii":return pe(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const i=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let i;switch(r===12?i=Ps.noon:r===0?i=Ps.midnight:i=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let i;switch(r>=17?i=Ps.evening:r>=12?i=Ps.afternoon:r>=4?i=Ps.morning:i=Ps.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Tr.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Tr.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):pe(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):pe(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Tr.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Tr.s(t,e)},S:function(t,e){return Tr.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return Y0(r);case"XXXX":case"XX":return Ni(r);case"XXXXX":case"XXX":default:return Ni(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return Y0(r);case"xxxx":case"xx":return Ni(r);case"xxxxx":case"xxx":default:return Ni(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Q0(r,":");case"OOOO":default:return"GMT"+Ni(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Q0(r,":");case"zzzz":default:return"GMT"+Ni(r,":")}},t:function(t,e,n){const r=Math.trunc(t.getTime()/1e3);return pe(r,e.length)},T:function(t,e,n){const r=t.getTime();return pe(r,e.length)}};function Q0(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=Math.trunc(r/60),s=r%60;return s===0?n+String(i):n+String(i)+e+pe(s,2)}function Y0(t,e){return t%60===0?(t>0?"-":"+")+pe(Math.abs(t)/60,2):Ni(t,e)}function Ni(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=pe(Math.trunc(r/60),2),s=pe(r%60,2);return n+i+e+s}const J0=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},VP=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},uU=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return J0(t,e);let s;switch(r){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",J0(r,e)).replace("{{time}}",VP(i,e))},cU={p:VP,P:uU},dU=/^D+$/,hU=/^Y+$/,fU=["D","DD","YY","YYYY"];function pU(t){return dU.test(t)}function mU(t){return hU.test(t)}function gU(t,e,n){const r=yU(t,e,n);if(console.warn(r),fU.includes(t))throw new RangeError(r)}function yU(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const _U=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,vU=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,wU=/^'([^]*?)'?$/,EU=/''/g,IU=/[a-zA-Z]/;function rn(t,e,n){var d,f,m,_,x,S,k,v;const r=vh(),i=(n==null?void 0:n.locale)??r.locale??iU,s=(n==null?void 0:n.firstWeekContainsDate)??((f=(d=n==null?void 0:n.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??r.firstWeekContainsDate??((_=(m=r.locale)==null?void 0:m.options)==null?void 0:_.firstWeekContainsDate)??1,o=(n==null?void 0:n.weekStartsOn)??((S=(x=n==null?void 0:n.locale)==null?void 0:x.options)==null?void 0:S.weekStartsOn)??r.weekStartsOn??((v=(k=r.locale)==null?void 0:k.options)==null?void 0:v.weekStartsOn)??0,a=Me(t);if(!Ej(a))throw new RangeError("Invalid time value");let l=e.match(vU).map(g=>{const I=g[0];if(I==="p"||I==="P"){const P=cU[I];return P(g,i.formatLong)}return g}).join("").match(_U).map(g=>{if(g==="''")return{isToken:!1,value:"'"};const I=g[0];if(I==="'")return{isToken:!1,value:TU(g)};if(H0[I])return{isToken:!0,value:g};if(I.match(IU))throw new RangeError("Format string contains an unescaped latin alphabet character `"+I+"`");return{isToken:!1,value:g}});i.localize.preprocessor&&(l=i.localize.preprocessor(a,l));const c={firstWeekContainsDate:s,weekStartsOn:o,locale:i};return l.map(g=>{if(!g.isToken)return g.value;const I=g.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&mU(I)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&pU(I))&&gU(I,e,String(t));const P=H0[I[0]];return P(a,I,i.localize,c)}).join("")}function TU(t){const e=t.match(wU);return e?e[1].replace(EU,"'"):t}function bs(t){return Me(t).getDate()}function X0(t){return Me(t).getDay()}function SU(t,e){const n=Me(t),r=Me(e);return+n<+r}function xU(t){return+Me(t)<Date.now()}function Cy(t){return kl(t,ky(t))}function AU(t){return kl(t,RP(ky(t),1))}function PU(t,e){return RP(t,-1)}function bU(t){return kl(t,PU(ky(t)))}const RU={lessThanXSeconds:{one:"1초 미만",other:"{{count}}초 미만"},xSeconds:{one:"1초",other:"{{count}}초"},halfAMinute:"30초",lessThanXMinutes:{one:"1분 미만",other:"{{count}}분 미만"},xMinutes:{one:"1분",other:"{{count}}분"},aboutXHours:{one:"약 1시간",other:"약 {{count}}시간"},xHours:{one:"1시간",other:"{{count}}시간"},xDays:{one:"1일",other:"{{count}}일"},aboutXWeeks:{one:"약 1주",other:"약 {{count}}주"},xWeeks:{one:"1주",other:"{{count}}주"},aboutXMonths:{one:"약 1개월",other:"약 {{count}}개월"},xMonths:{one:"1개월",other:"{{count}}개월"},aboutXYears:{one:"약 1년",other:"약 {{count}}년"},xYears:{one:"1년",other:"{{count}}년"},overXYears:{one:"1년 이상",other:"{{count}}년 이상"},almostXYears:{one:"거의 1년",other:"거의 {{count}}년"}},kU=(t,e,n)=>{let r;const i=RU[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?r+" 후":r+" 전":r},CU={full:"y년 M월 d일 EEEE",long:"y년 M월 d일",medium:"y.MM.dd",short:"y.MM.dd"},NU={full:"a H시 mm분 ss초 zzzz",long:"a H:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},DU={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},VU={date:io({formats:CU,defaultWidth:"full"}),time:io({formats:NU,defaultWidth:"full"}),dateTime:io({formats:DU,defaultWidth:"full"})},OU={lastWeek:"'지난' eeee p",yesterday:"'어제' p",today:"'오늘' p",tomorrow:"'내일' p",nextWeek:"'다음' eeee p",other:"P"},MU=(t,e,n,r)=>OU[t],LU={narrow:["BC","AD"],abbreviated:["BC","AD"],wide:["기원전","서기"]},FU={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1분기","2분기","3분기","4분기"]},jU={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],wide:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]},UU={narrow:["일","월","화","수","목","금","토"],short:["일","월","화","수","목","금","토"],abbreviated:["일","월","화","수","목","금","토"],wide:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]},BU={narrow:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},abbreviated:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},wide:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"}},zU={narrow:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},abbreviated:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},wide:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"}},$U=(t,e)=>{const n=Number(t);switch(String(e==null?void 0:e.unit)){case"minute":case"second":return String(n);case"date":return n+"일";default:return n+"번째"}},qU={ordinalNumber:$U,era:In({values:LU,defaultWidth:"wide"}),quarter:In({values:FU,defaultWidth:"wide",argumentCallback:t=>t-1}),month:In({values:jU,defaultWidth:"wide"}),day:In({values:UU,defaultWidth:"wide"}),dayPeriod:In({values:BU,defaultWidth:"wide",formattingValues:zU,defaultFormattingWidth:"wide"})},WU=/^(\d+)(일|번째)?/i,KU=/\d+/i,GU={narrow:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(기원전|서기)/i},HU={any:[/^(bc|기원전)/i,/^(ad|서기)/i]},QU={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]사?분기/i},YU={any:[/1/i,/2/i,/3/i,/4/i]},JU={narrow:/^(1[012]|[123456789])/,abbreviated:/^(1[012]|[123456789])월/i,wide:/^(1[012]|[123456789])월/i},XU={any:[/^1월?$/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},ZU={narrow:/^[일월화수목금토]/,short:/^[일월화수목금토]/,abbreviated:/^[일월화수목금토]/,wide:/^[일월화수목금토]요일/},eB={any:[/^일/,/^월/,/^화/,/^수/,/^목/,/^금/,/^토/]},tB={any:/^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i},nB={any:{am:/^(am|오전)/i,pm:/^(pm|오후)/i,midnight:/^자정/i,noon:/^정오/i,morning:/^아침/i,afternoon:/^오후/i,evening:/^저녁/i,night:/^밤/i}},rB={ordinalNumber:NP({matchPattern:WU,parsePattern:KU,valueCallback:t=>parseInt(t,10)}),era:Tn({matchPatterns:GU,defaultMatchWidth:"wide",parsePatterns:HU,defaultParseWidth:"any"}),quarter:Tn({matchPatterns:QU,defaultMatchWidth:"wide",parsePatterns:YU,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Tn({matchPatterns:JU,defaultMatchWidth:"wide",parsePatterns:XU,defaultParseWidth:"any"}),day:Tn({matchPatterns:ZU,defaultMatchWidth:"wide",parsePatterns:eB,defaultParseWidth:"any"}),dayPeriod:Tn({matchPatterns:tB,defaultMatchWidth:"any",parsePatterns:nB,defaultParseWidth:"any"})},ou={code:"ko",formatDistance:kU,formatLong:VU,formatRelative:MU,localize:qU,match:rB,options:{weekStartsOn:0,firstWeekContainsDate:1}};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iB=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),OP=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sB={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oB=j.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>j.createElement("svg",{ref:l,...sB,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:OP("lucide",i),...a},[...o.map(([c,d])=>j.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=(t,e)=>{const n=j.forwardRef(({className:r,...i},s)=>j.createElement(oB,{ref:s,iconNode:e,className:OP(`lucide-${iB(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aB=it("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lB=it("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uB=it("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cB=it("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=it("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=it("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dB=it("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hB=it("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fB=it("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pB=it("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mB=it("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gB=it("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yB=it("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=it("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _B=it("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FP=it("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vB=it("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wB=it("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Z0=[{to:"/",icon:mB,label:"홈"},{to:"/calendar",icon:uB,label:"캘린더"},{to:"/tasks",icon:hB,label:"태스크"},{to:"/settings",icon:_B,label:"설정"}];function EB(){const t=hi();return E.jsx("nav",{className:"fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 safe-bottom",children:E.jsxs("div",{className:"flex items-center justify-around h-16 max-w-lg mx-auto px-2",children:[Z0.slice(0,2).map(({to:e,icon:n,label:r})=>E.jsxs(Gv,{to:e,end:e==="/",className:({isActive:i})=>`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors ${i?"text-primary-600":"text-slate-400"}`,children:[E.jsx(n,{size:22}),E.jsx("span",{className:"text-xs",children:r})]},e)),E.jsx("button",{onClick:()=>t("/tasks/new"),className:"flex items-center justify-center w-14 h-14 rounded-full bg-primary-600 text-white shadow-lg -mt-6 active:scale-95 transition-transform","aria-label":"태스크 추가",children:E.jsx(Cl,{size:28})}),Z0.slice(2).map(({to:e,icon:n,label:r})=>E.jsxs(Gv,{to:e,className:({isActive:i})=>`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors ${i?"text-primary-600":"text-slate-400"}`,children:[E.jsx(n,{size:22}),E.jsx("span",{className:"text-xs",children:r})]},e))]})})}function au({children:t,title:e,headerRight:n,noPadding:r}){return E.jsxs("div",{className:"flex flex-col min-h-screen bg-slate-50",children:[e&&E.jsxs("header",{className:"sticky top-0 z-30 bg-white border-b border-slate-100 px-4 h-14 flex items-center justify-between",children:[E.jsx("h1",{className:"text-lg font-bold text-slate-800",children:e}),n&&E.jsx("div",{children:n})]}),E.jsx("main",{className:`flex-1 pb-20 ${r?"":"px-4 py-4"}`,children:t}),E.jsx(EB,{})]})}function jP(t,e){var o;if(t.type!=="routine"||!t.isActive)return!1;const{recurrence:n}=t;if(!n)return!1;const r=(o=n.startDate)!=null&&o.toDate?n.startDate.toDate():new Date(n.startDate),i=new Date(e.getFullYear(),e.getMonth(),e.getDate()),s=new Date(r.getFullYear(),r.getMonth(),r.getDate());if(SU(i,s))return!1;switch(n.type){case"daily":return!0;case"weekly":return(n.daysOfWeek||[]).includes(X0(e));case"biweekly":{if(!(n.daysOfWeek||[]).includes(X0(e)))return!1;const a=li(s,{weekStartsOn:0}),l=li(i,{weekStartsOn:0});return Math.round((l.getTime()-a.getTime())/(7*24*60*60*1e3))%2===0}case"monthly":return bs(e)===(n.dayOfMonth||bs(s));case"quarterly":{const a=s.getMonth(),l=e.getMonth();return((e.getFullYear()-s.getFullYear())*12+(l-a))%3===0&&bs(e)===bs(s)}case"yearly":return e.getMonth()===s.getMonth()&&bs(e)===bs(s);default:return!1}}function cm(t,e){var r;if(t.type!=="one-time"||!t.isActive||!t.dueDate)return!1;const n=(r=t.dueDate)!=null&&r.toDate?t.dueDate.toDate():new Date(t.dueDate);return n.getFullYear()===e.getFullYear()&&n.getMonth()===e.getMonth()&&n.getDate()===e.getDate()}function _d(t){return rn(t,"yyyy-MM-dd")}const UP={daily:"매일",weekly:"매주",biweekly:"격주",monthly:"매달",quarterly:"분기",yearly:"매년"},IB=["일","월","화","수","목","금","토"];function Ks(t){return t?t!=null&&t.toDate?t.toDate():t instanceof Date?t:new Date(t):null}function TB(t){const e=Ks(t);return e?Cy(e)?"오늘":AU(e)?"내일":bU(e)?"어제":rn(e,"M월 d일 (E)",{locale:ou}):""}function BP(t){const e=Ks(t);return e?xU(Rl(e))&&!Cy(e):!1}function SB(t,e){return rn(new Date(t,e,1),"yyyy년 M월",{locale:ou})}function xB({category:t}){return t?E.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full font-medium",style:{backgroundColor:t.color+"20",color:t.color},children:[t.icon," ",t.name]}):null}function AB({name:t,uid:e,currentUid:n}){const r=e===n,i=e==="together",s=i?"bg-purple-100 text-purple-700":r?"bg-blue-100 text-blue-700":"bg-pink-100 text-pink-700";return E.jsxs("span",{className:`text-xs px-2 py-0.5 rounded-full font-medium ${s}`,children:[i?"👫 ":"👤 ",t]})}function vd({task:t,date:e,showActions:n=!0}){const r=hi(),{currentUser:i,userProfile:s,partnerProfile:o,familyId:a}=Mn(),{isCompleted:l,getCompletionForPeriod:c,getCategoryById:d}=Ii(),f=_d(e||new Date),m=l(t.id,f),_=c(t.id,f),x=d(t.categoryId),S=t.type==="one-time"&&t.dueDate&&BP(t.dueDate)&&!m;function k(I){return I==="together"?"함께":I===(i==null?void 0:i.uid)?(s==null?void 0:s.displayName)||"나":(o==null?void 0:o.displayName)||"상대방"}async function v(){var I;if(m){_&&await sj(a,_.id);return}if(await ij(a,{taskId:t.id,taskTitle:t.title,categoryId:t.categoryId||null,completedBy:i.uid,completedByName:(s==null?void 0:s.displayName)||"",periodKey:f,isAssist:t.assigneeId!==i.uid&&t.assigneeId!=="together"}),o!=null&&o.notificationsEnabled&&((I=o==null?void 0:o.fcmTokens)==null?void 0:I.length)>0){const P=(s==null?void 0:s.displayName)||"상대방";PP({tokens:o.fcmTokens,title:"✅ 태스크 완료!",body:`${P}님이 "${t.title}"을(를) 완료했어요.`,data:{taskId:t.id}})}}async function g(){window.confirm(`"${t.title}" 태스크를 삭제할까요?`)&&await nj(a,t.id)}return E.jsx("div",{className:`bg-white rounded-xl shadow-sm border transition-all ${S?"border-red-200 bg-red-50":"border-slate-100"} ${m?"opacity-60":""}`,children:E.jsxs("div",{className:"flex items-start gap-3 p-4",children:[E.jsx("button",{onClick:v,className:`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${m?"bg-primary-600 border-primary-600 text-white":"border-slate-300 hover:border-primary-400"}`,children:m&&E.jsx(cB,{size:14,strokeWidth:3})}),E.jsxs("div",{className:"flex-1 min-w-0",children:[E.jsx("p",{className:`font-medium text-slate-800 ${m?"line-through text-slate-400":""}`,children:t.title}),t.description&&E.jsx("p",{className:"text-sm text-slate-500 mt-0.5 truncate",children:t.description}),E.jsxs("div",{className:"flex flex-wrap items-center gap-2 mt-2",children:[x&&E.jsx(xB,{category:x}),E.jsx(AB,{name:k(t.assigneeId),uid:t.assigneeId,currentUid:i==null?void 0:i.uid}),t.type==="routine"&&t.recurrence&&E.jsx("span",{className:"text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full",children:UP[t.recurrence.type]||t.recurrence.type}),t.type==="one-time"&&t.dueDate&&E.jsxs("span",{className:`text-xs px-2 py-0.5 rounded-full ${S?"text-red-600 bg-red-100":"text-slate-400 bg-slate-100"}`,children:[S?"⚠️ ":"",TB(t.dueDate),"까지"]})]}),m&&_&&E.jsxs("p",{className:"text-xs text-slate-400 mt-1",children:[_.completedByName,"님이 완료",_.isAssist&&" (도움)"]})]}),n&&E.jsxs("div",{className:"flex items-center gap-1 flex-shrink-0",children:[E.jsx("button",{onClick:()=>r(`/tasks/${t.id}/edit`),className:"p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100",children:E.jsx(yB,{size:16})}),E.jsx("button",{onClick:g,className:"p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50",children:E.jsx(FP,{size:16})})]})]})})}function PB(){const t=hi(),{currentUser:e,userProfile:n,partnerProfile:r,isLoading:i}=Mn(),{tasks:s,completions:o}=Ii(),a=new Date,l=_d(a),{todayTasks:c,overdueTasks:d}=j.useMemo(()=>{const S=s.filter(g=>g.isActive),k=S.filter(g=>g.type==="routine"?jP(g,a):g.type==="one-time"?cm(g,a):!1),v=S.filter(g=>g.type!=="one-time"?!1:!o.some(P=>P.taskId===g.id)&&g.dueDate&&BP(g.dueDate)&&!cm(g,a));return{todayTasks:k,overdueTasks:v}},[s,o]),{myCount:f,togetherCount:m,completedCount:_}=j.useMemo(()=>{c.filter(k=>k.assigneeId===(e==null?void 0:e.uid)||k.assigneeId==="together");const S=c.filter(k=>o.some(v=>v.taskId===k.id&&v.periodKey===l)).length;return{myCount:c.filter(k=>k.assigneeId===(e==null?void 0:e.uid)).length,togetherCount:c.filter(k=>k.assigneeId==="together").length,completedCount:S}},[c,o,e==null?void 0:e.uid,l]);if(i)return E.jsx(bP,{fullScreen:!0});const x=()=>{const S=a.getHours();return S<12?"좋은 아침이에요":S<18?"좋은 오후예요":"좋은 저녁이에요"};return E.jsxs(au,{children:[E.jsxs("div",{className:"bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-5 mb-5 text-white",children:[E.jsxs("p",{className:"text-primary-100 text-sm",children:[x(),","]}),E.jsxs("h2",{className:"text-xl font-bold mt-0.5",children:[(n==null?void 0:n.displayName)||"","님 👋"]}),E.jsxs("p",{className:"text-primary-200 text-sm mt-1",children:[rn(a,"M월 d일 (E)",{locale:ou}),r&&` · ${r.displayName}님과 협업 중`]}),E.jsx("div",{className:"flex gap-3 mt-4",children:[{label:"내 할 일",value:f,color:"bg-white/20"},{label:"함께",value:m,color:"bg-white/20"},{label:"완료",value:_,color:"bg-white/30"}].map(({label:S,value:k,color:v})=>E.jsxs("div",{className:`flex-1 ${v} rounded-xl p-2.5 text-center`,children:[E.jsx("p",{className:"text-2xl font-bold",children:k}),E.jsx("p",{className:"text-xs text-primary-100 mt-0.5",children:S})]},S))})]}),d.length>0&&E.jsxs("section",{className:"mb-5",children:[E.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[E.jsx(dB,{size:16,className:"text-red-500"}),E.jsxs("h3",{className:"text-sm font-semibold text-red-600",children:["기한 초과 (",d.length,")"]})]}),E.jsx("div",{className:"space-y-2",children:d.map(S=>E.jsx(vd,{task:S,date:a},S.id))})]}),E.jsxs("section",{children:[E.jsxs("h3",{className:"text-sm font-semibold text-slate-700 mb-3",children:["오늘의 할 일 (",c.length,")"]}),c.length===0?E.jsxs("div",{className:"text-center py-12",children:[E.jsx("p",{className:"text-4xl mb-3",children:"🎉"}),E.jsx("p",{className:"text-slate-500",children:"오늘 할 일이 없어요!"}),E.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"새 태스크를 추가해보세요"}),E.jsxs("button",{onClick:()=>t("/tasks/new"),className:"mt-4 flex items-center gap-2 mx-auto px-4 py-2 bg-primary-600 text-white rounded-xl text-sm font-medium",children:[E.jsx(Cl,{size:16})," 태스크 추가"]})]}):E.jsx("div",{className:"space-y-2",children:c.map(S=>E.jsx(vd,{task:S,date:a},S.id))})]})]})}function dm({isOpen:t,onClose:e,title:n,children:r}){return j.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]),t?E.jsxs("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center",children:[E.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm",onClick:e}),E.jsxs("div",{className:"relative w-full sm:max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto",children:[E.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-slate-100",children:[E.jsx("h2",{className:"text-base font-bold text-slate-800",children:n}),E.jsx("button",{onClick:e,className:"p-1.5 rounded-lg text-slate-400 hover:bg-slate-100",children:E.jsx(wB,{size:20})})]}),E.jsx("div",{className:"p-4",children:r})]})]}):null}const bB=["일","월","화","수","목","금","토"];function RB(){const t=new Date,[e,n]=j.useState(t.getFullYear()),[r,i]=j.useState(t.getMonth()),[s,o]=j.useState(null),[a,l]=j.useState({me:!0,partner:!0,together:!0,completed:!0}),{currentUser:c}=Mn(),{tasks:d,completions:f}=Ii();function m(){r===0?(n(v=>v-1),i(11)):i(v=>v-1)}function _(){r===11?(n(v=>v+1),i(0)):i(v=>v+1)}const x=j.useMemo(()=>{const v=Sj(new Date(e,r,1)),g=Ij(v),I=li(v,{weekStartsOn:0}),P=Aj(g,{weekStartsOn:0});return Tj({start:I,end:P})},[e,r]);function S(v){return d.filter(g=>{if(!g.isActive||!(g.type==="routine"?jP(g,v):cm(g,v)))return!1;const P=_d(v),L=f.some(A=>A.taskId===g.id&&A.periodKey===P),F=g.assigneeId===(c==null?void 0:c.uid),T=g.assigneeId==="together",w=!F&&!T;return!(F&&!a.me||w&&!a.partner||T&&!a.together||L&&!a.completed)})}const k=s?S(s):[];return E.jsxs(au,{title:SB(e,r),children:[E.jsxs("div",{className:"flex items-center justify-between mb-4",children:[E.jsx("button",{onClick:m,className:"p-2 rounded-xl hover:bg-slate-100",children:E.jsx(MP,{size:20,className:"text-slate-600"})}),E.jsx("button",{onClick:()=>{n(t.getFullYear()),i(t.getMonth())},className:"text-sm font-medium text-primary-600 px-3 py-1 rounded-lg hover:bg-primary-50",children:"오늘"}),E.jsx("button",{onClick:_,className:"p-2 rounded-xl hover:bg-slate-100",children:E.jsx(LP,{size:20,className:"text-slate-600"})})]}),E.jsx("div",{className:"flex gap-2 mb-4 flex-wrap",children:[{key:"me",label:"나"},{key:"partner",label:"상대방"},{key:"together",label:"함께"},{key:"completed",label:"완료"}].map(({key:v,label:g})=>E.jsx("button",{onClick:()=>l(I=>({...I,[v]:!I[v]})),className:`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${a[v]?"bg-primary-600 text-white border-primary-600":"bg-white text-slate-400 border-slate-200"}`,children:g},v))}),E.jsx("div",{className:"grid grid-cols-7 mb-1",children:bB.map((v,g)=>E.jsx("div",{className:`text-center text-xs font-medium py-2 ${g===0?"text-red-400":g===6?"text-blue-400":"text-slate-400"}`,children:v},v))}),E.jsx("div",{className:"grid grid-cols-7 gap-px bg-slate-100 rounded-xl overflow-hidden border border-slate-100",children:x.map(v=>{const g=v.getMonth()===r,I=g?S(v):[],P=s&&kl(v,s),L=Cy(v);return E.jsxs("button",{onClick:()=>g&&o(kl(v,s)?null:v),className:`bg-white p-1.5 min-h-[56px] flex flex-col items-center transition-colors ${g?"hover:bg-primary-50":"opacity-30 cursor-default"} ${P?"bg-primary-50 ring-2 ring-inset ring-primary-300":""}`,children:[E.jsx("span",{className:`w-7 h-7 flex items-center justify-center text-sm rounded-full mb-1 ${L?"bg-primary-600 text-white font-bold":v.getDay()===0?"text-red-400":v.getDay()===6?"text-blue-400":"text-slate-700"}`,children:v.getDate()}),E.jsxs("div",{className:"flex flex-wrap justify-center gap-0.5 max-w-full",children:[I.slice(0,4).map((F,T)=>{const w=f.some(A=>A.taskId===F.id&&A.periodKey===_d(v));return E.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${w?"bg-green-400":"bg-primary-400"}`},T)}),I.length>4&&E.jsxs("span",{className:"text-[9px] text-slate-400",children:["+",I.length-4]})]})]},v.toISOString())})}),E.jsx(dm,{isOpen:!!s,onClose:()=>o(null),title:s?rn(s,"M월 d일 (E) 할 일",{locale:ou}):"",children:k.length===0?E.jsx("p",{className:"text-center text-slate-400 py-6",children:"이 날 할 일이 없어요"}):E.jsx("div",{className:"space-y-2",children:k.map(v=>E.jsx(vd,{task:v,date:s,showActions:!1},v.id))})})]})}function kB(){const t=hi(),[e,n]=j.useState("routine"),[r,i]=j.useState("all"),[s,o]=j.useState("all"),{currentUser:a}=Mn(),{tasks:l,categories:c}=Ii(),d=j.useMemo(()=>l.filter(m=>!(m.type!==e||!m.isActive||r!=="all"&&(r==="me"&&m.assigneeId!==(a==null?void 0:a.uid)||r==="together"&&m.assigneeId!=="together"||r==="partner"&&(m.assigneeId===(a==null?void 0:a.uid)||m.assigneeId==="together"))||s!=="all"&&m.categoryId!==s)),[l,e,r,s,a==null?void 0:a.uid]),f=new Date;return E.jsxs(au,{title:"태스크 목록",headerRight:E.jsxs("button",{onClick:()=>t("/tasks/new"),className:"flex items-center gap-1 px-3 py-1.5 bg-primary-600 text-white rounded-xl text-sm font-medium",children:[E.jsx(Cl,{size:16})," 추가"]}),children:[E.jsx("div",{className:"flex bg-slate-100 rounded-xl p-1 mb-4",children:[{key:"routine",label:"루틴"},{key:"one-time",label:"일회성"}].map(({key:m,label:_})=>E.jsx("button",{onClick:()=>n(m),className:`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${e===m?"bg-white text-slate-800 shadow-sm":"text-slate-500"}`,children:_},m))}),E.jsxs("div",{className:"flex gap-2 mb-4 overflow-x-auto pb-1",children:[E.jsx("div",{className:"flex items-center gap-1.5 flex-shrink-0",children:E.jsx(fB,{size:14,className:"text-slate-400"})}),[{key:"all",label:"전체"},{key:"me",label:"나"},{key:"partner",label:"상대방"},{key:"together",label:"함께"}].map(({key:m,label:_})=>E.jsx("button",{onClick:()=>i(m),className:`px-3 py-1 rounded-full text-xs font-medium border flex-shrink-0 transition-colors ${r===m?"bg-primary-600 text-white border-primary-600":"bg-white text-slate-500 border-slate-200"}`,children:_},m)),E.jsx("div",{className:"w-px bg-slate-200 flex-shrink-0"}),E.jsx("button",{onClick:()=>o("all"),className:`px-3 py-1 rounded-full text-xs font-medium border flex-shrink-0 transition-colors ${s==="all"?"bg-slate-700 text-white border-slate-700":"bg-white text-slate-500 border-slate-200"}`,children:"전체 카테고리"}),c.map(m=>E.jsxs("button",{onClick:()=>o(m.id),className:`px-3 py-1 rounded-full text-xs font-medium border flex-shrink-0 transition-colors ${s===m.id?"text-white border-transparent":"bg-white text-slate-500 border-slate-200"}`,style:s===m.id?{backgroundColor:m.color}:{},children:[m.icon," ",m.name]},m.id))]}),d.length===0?E.jsxs("div",{className:"text-center py-16",children:[E.jsx("p",{className:"text-3xl mb-3",children:"📋"}),E.jsx("p",{className:"text-slate-500",children:"태스크가 없어요"}),E.jsxs("button",{onClick:()=>t("/tasks/new"),className:"mt-4 flex items-center gap-2 mx-auto px-4 py-2 bg-primary-600 text-white rounded-xl text-sm font-medium",children:[E.jsx(Cl,{size:16})," 태스크 추가"]})]}):E.jsx("div",{className:"space-y-2",children:d.map(m=>E.jsx(vd,{task:m,date:f},m.id))})]})}const CB=["daily","weekly","biweekly","monthly","quarterly","yearly"],eE={title:"",description:"",type:"routine",assigneeId:"together",categoryId:"",recurrence:{type:"weekly",daysOfWeek:[],dayOfMonth:1,startDate:rn(new Date,"yyyy-MM-dd")},dueDate:""};function tE(){const t=hi(),{id:e}=wk(),n=!!e&&e!=="new",{currentUser:r,userProfile:i,partnerProfile:s,familyId:o}=Mn(),{tasks:a,categories:l}=Ii(),[c,d]=j.useState(eE),[f,m]=j.useState(!1),[_,x]=j.useState("");j.useEffect(()=>{var L,F;if(!n)return;const P=a.find(T=>T.id===e);P&&d({title:P.title||"",description:P.description||"",type:P.type||"routine",assigneeId:P.assigneeId||"together",categoryId:P.categoryId||"",recurrence:P.recurrence?{type:P.recurrence.type||"weekly",daysOfWeek:P.recurrence.daysOfWeek||[],dayOfMonth:P.recurrence.dayOfMonth||1,startDate:(L=P.recurrence.startDate)!=null&&L.toDate?rn(P.recurrence.startDate.toDate(),"yyyy-MM-dd"):P.recurrence.startDate||rn(new Date,"yyyy-MM-dd")}:eE.recurrence,dueDate:(F=P.dueDate)!=null&&F.toDate?rn(P.dueDate.toDate(),"yyyy-MM-dd"):P.dueDate||""})},[e,a]);function S(P,L){d(F=>({...F,[P]:L}))}function k(P,L){d(F=>({...F,recurrence:{...F.recurrence,[P]:L}}))}function v(P){const L=c.recurrence.daysOfWeek||[],F=L.includes(P)?L.filter(T=>T!==P):[...L,P].sort();k("daysOfWeek",F)}async function g(P){var L;if(P.preventDefault(),!c.title.trim()){x("제목을 입력해주세요.");return}if(c.type==="routine"&&["weekly","biweekly"].includes(c.recurrence.type)&&c.recurrence.daysOfWeek.length===0){x("요일을 하나 이상 선택해주세요.");return}x(""),m(!0);try{const F={title:c.title.trim(),description:c.description.trim(),type:c.type,assigneeId:c.assigneeId,categoryId:c.categoryId||null,createdBy:r.uid};c.type==="routine"?F.recurrence={...c.recurrence}:(F.dueDate=c.dueDate||null,F.recurrence=null),n?await tj(o,e,F):(await ej(o,F),s!=null&&s.notificationsEnabled&&((L=s==null?void 0:s.fcmTokens)==null?void 0:L.length)>0&&PP({tokens:s.fcmTokens,title:"📋 새 태스크가 추가됐어요!",body:`"${F.title}" 태스크가 추가됐습니다.`})),t(-1)}catch(F){x("저장 중 오류가 발생했습니다."),console.error(F)}finally{m(!1)}}const I=[{value:r==null?void 0:r.uid,label:`${(i==null?void 0:i.displayName)||"나"} (나)`},{value:s==null?void 0:s.id,label:`${(s==null?void 0:s.displayName)||"상대방"} (상대방)`},{value:"together",label:"👫 함께"}].filter(P=>P.value);return E.jsxs("div",{className:"min-h-screen bg-slate-50",children:[E.jsxs("header",{className:"sticky top-0 z-30 bg-white border-b border-slate-100 px-4 h-14 flex items-center gap-3",children:[E.jsx("button",{onClick:()=>t(-1),className:"p-1.5 rounded-lg hover:bg-slate-100",children:E.jsx(MP,{size:22,className:"text-slate-600"})}),E.jsx("h1",{className:"text-lg font-bold text-slate-800",children:n?"태스크 수정":"새 태스크"})]}),E.jsxs("form",{onSubmit:g,className:"px-4 py-4 space-y-5 pb-32",children:[E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1.5",children:"제목 *"}),E.jsx("input",{type:"text",value:c.title,onChange:P=>S("title",P.target.value),placeholder:"태스크 이름",className:"w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1.5",children:"메모"}),E.jsx("textarea",{value:c.description,onChange:P=>S("description",P.target.value),placeholder:"추가 설명 (선택)",rows:2,className:"w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 resize-none"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1.5",children:"유형"}),E.jsx("div",{className:"flex bg-slate-100 rounded-xl p-1",children:[{v:"routine",l:"🔁 루틴"},{v:"one-time",l:"📌 일회성"}].map(({v:P,l:L})=>E.jsx("button",{type:"button",onClick:()=>S("type",P),className:`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${c.type===P?"bg-white text-slate-800 shadow-sm":"text-slate-500"}`,children:L},P))})]}),c.type==="routine"&&E.jsxs("div",{className:"space-y-4 bg-white rounded-2xl p-4 border border-slate-100",children:[E.jsx("h3",{className:"text-sm font-semibold text-slate-700",children:"반복 설정"}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs text-slate-500 mb-1.5",children:"반복 주기"}),E.jsx("div",{className:"grid grid-cols-3 gap-2",children:CB.map(P=>E.jsx("button",{type:"button",onClick:()=>k("type",P),className:`py-2 rounded-xl text-sm font-medium border transition-colors ${c.recurrence.type===P?"bg-primary-600 text-white border-primary-600":"bg-white text-slate-600 border-slate-200"}`,children:UP[P]},P))})]}),["weekly","biweekly"].includes(c.recurrence.type)&&E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs text-slate-500 mb-1.5",children:"요일 선택"}),E.jsx("div",{className:"flex gap-2",children:IB.map((P,L)=>E.jsx("button",{type:"button",onClick:()=>v(L),className:`flex-1 py-2 rounded-xl text-sm font-medium border transition-colors ${(c.recurrence.daysOfWeek||[]).includes(L)?"bg-primary-600 text-white border-primary-600":"bg-white border-slate-200 text-slate-600"}`,children:P},L))})]}),c.recurrence.type==="monthly"&&E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs text-slate-500 mb-1.5",children:"매달 몇 일"}),E.jsx("input",{type:"number",min:1,max:31,value:c.recurrence.dayOfMonth,onChange:P=>k("dayOfMonth",Number(P.target.value)),className:"w-24 px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs text-slate-500 mb-1.5",children:"시작일"}),E.jsx("input",{type:"date",value:c.recurrence.startDate,onChange:P=>k("startDate",P.target.value),className:"px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400"})]})]}),c.type==="one-time"&&E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1.5",children:"마감일 (선택)"}),E.jsx("input",{type:"date",value:c.dueDate,onChange:P=>S("dueDate",P.target.value),className:"px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1.5",children:"담당자"}),E.jsx("div",{className:"space-y-2",children:I.map(({value:P,label:L})=>E.jsxs("button",{type:"button",onClick:()=>S("assigneeId",P),className:`w-full flex items-center px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${c.assigneeId===P?"bg-primary-50 border-primary-400 text-primary-700":"bg-white border-slate-200 text-slate-700"}`,children:[c.assigneeId===P&&E.jsx("span",{className:"mr-2 text-primary-500",children:"✓"}),L]},P))})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1.5",children:"카테고리"}),E.jsxs("div",{className:"flex flex-wrap gap-2",children:[E.jsx("button",{type:"button",onClick:()=>S("categoryId",""),className:`px-3 py-1.5 rounded-xl text-sm border transition-colors ${c.categoryId?"bg-white border-slate-200 text-slate-600":"bg-slate-700 text-white border-slate-700"}`,children:"없음"}),l.map(P=>E.jsxs("button",{type:"button",onClick:()=>S("categoryId",P.id),className:`px-3 py-1.5 rounded-xl text-sm border transition-colors font-medium ${c.categoryId===P.id?"text-white border-transparent":"bg-white border-slate-200 text-slate-600"}`,style:c.categoryId===P.id?{backgroundColor:P.color}:{},children:[P.icon," ",P.name]},P.id))]})]}),_&&E.jsx("p",{className:"text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl",children:_}),E.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100",children:E.jsx("button",{type:"submit",disabled:f,className:"w-full py-4 bg-primary-600 text-white rounded-xl font-semibold text-base hover:bg-primary-700 active:scale-[0.98] transition-all disabled:opacity-60",children:f?"저장 중...":n?"수정 완료":"태스크 추가"})})]})]})}function NB(){const[t,e]=j.useState("all"),{currentUser:n,userProfile:r,partnerProfile:i}=Mn(),{completions:s,getCategoryById:o}=Ii(),a=j.useMemo(()=>[...s].sort((d,f)=>{var x,S;const m=((x=Ks(d.completedAt))==null?void 0:x.getTime())||0;return(((S=Ks(f.completedAt))==null?void 0:S.getTime())||0)-m}).filter(d=>t==="me"?d.completedBy===(n==null?void 0:n.uid):t==="partner"?d.completedBy!==(n==null?void 0:n.uid):!0),[s,t,n==null?void 0:n.uid]),l=j.useMemo(()=>{const c={};return a.forEach(d=>{const f=Ks(d.completedAt);if(!f)return;const m=rn(f,"yyyy-MM");c[m]||(c[m]={label:rn(f,"yyyy년 M월",{locale:ou}),items:[]}),c[m].items.push(d)}),Object.values(c)},[a]);return E.jsxs(au,{title:"히스토리",children:[E.jsx("div",{className:"flex gap-2 mb-4",children:[{key:"all",label:"전체"},{key:"me",label:`${(r==null?void 0:r.displayName)||"나"}`},{key:"partner",label:`${(i==null?void 0:i.displayName)||"상대방"}`}].map(({key:c,label:d})=>E.jsx("button",{onClick:()=>e(c),className:`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${t===c?"bg-primary-600 text-white border-primary-600":"bg-white text-slate-500 border-slate-200"}`,children:d},c))}),l.length===0?E.jsxs("div",{className:"text-center py-16",children:[E.jsx("p",{className:"text-4xl mb-3",children:"📝"}),E.jsx("p",{className:"text-slate-500",children:"완료 기록이 없어요"})]}):E.jsx("div",{className:"space-y-6",children:l.map(({label:c,items:d})=>E.jsxs("section",{children:[E.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[E.jsx("h3",{className:"text-sm font-bold text-slate-600",children:c}),E.jsxs("span",{className:"text-xs text-slate-400",children:[d.length,"개"]})]}),E.jsx("div",{className:"space-y-2",children:d.map(f=>{const m=Ks(f.completedAt),_=f.completedBy===(n==null?void 0:n.uid),x=o(f.categoryId);return E.jsxs("div",{className:"bg-white rounded-xl border border-slate-100 px-4 py-3 flex items-start gap-3",children:[E.jsx("span",{className:"text-lg flex-shrink-0 mt-0.5",children:(x==null?void 0:x.icon)||"✅"}),E.jsxs("div",{className:"flex-1 min-w-0",children:[E.jsx("p",{className:"font-medium text-slate-800 truncate",children:f.taskTitle}),E.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[E.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full font-medium ${_?"bg-blue-100 text-blue-700":"bg-pink-100 text-pink-700"}`,children:f.completedByName}),f.isAssist&&E.jsx("span",{className:"text-xs text-slate-400",children:"도움"}),x&&E.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full font-medium",style:{backgroundColor:x.color+"20",color:x.color},children:x.name})]})]}),E.jsx("p",{className:"text-xs text-slate-400 flex-shrink-0 mt-0.5",children:m?rn(m,"M/d HH:mm"):""})]},f.id)})})]},c))})]})}const DB="modulepreload",VB=function(t){return"/home-collab/"+t},nE={},rE=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=VB(l),l in nE)return;nE[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":DB,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,_)=>{f.addEventListener("load",m),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};async function OB(t,e,n,r){const i=await iu(Xl(nt,"families"),{members:[t,n],memberNames:{[t]:e,[n]:r},createdAt:ys()});return await ko(Pt(nt,"users",t),{familyId:i.id}),await ko(Pt(nt,"users",n),{familyId:i.id}),i.id}function MB(){const t=hi(),{currentUser:e,userProfile:n,partnerProfile:r,familyId:i}=Mn(),{categories:s}=Ii(),[o,a]=j.useState(""),[l,c]=j.useState(!1),[d,f]=j.useState(""),[m,_]=j.useState(""),[x,S]=j.useState(!1),[k,v]=j.useState(!1),[g,I]=j.useState(""),[P,L]=j.useState("📌"),[F,T]=j.useState("#6b7280"),[w,A]=j.useState(!1);async function b(){e&&await G4(e.uid,{notificationsEnabled:!(n!=null&&n.notificationsEnabled)})}async function C(ue){ue.preventDefault(),f(""),_(""),c(!0);try{const{getDocs:Jt,query:K,collection:X,where:ee}=await rE(async()=>{const{getDocs:Bt,query:an,collection:wh,where:Eh}=await Promise.resolve().then(()=>hF);return{getDocs:Bt,query:an,collection:wh,where:Eh}},void 0),{db:Ie}=await rE(async()=>{const{db:Bt}=await Promise.resolve().then(()=>z4);return{db:Bt}},void 0),fe=K(X(Ie,"users"),ee("email","==",o.trim())),be=await Jt(fe);if(be.empty){f("해당 이메일로 가입된 사용자가 없어요.");return}const jt=be.docs[0],Ut=jt.data();if(jt.id===e.uid){f("자신의 이메일은 입력할 수 없어요.");return}if(Ut.familyId){f("상대방이 이미 다른 가족과 연결되어 있어요.");return}await OB(e.uid,(n==null?void 0:n.displayName)||"",jt.id,Ut.displayName||""),_(`${Ut.displayName}님과 연결됐어요! 🎉`),a(""),setTimeout(()=>S(!1),1500)}catch{f("연결 중 오류가 발생했습니다.")}finally{c(!1)}}async function D(ue){if(ue.preventDefault(),!!g.trim()){A(!0);try{await uj(i,{name:g.trim(),icon:P,color:F,order:s.length,isDefault:!1}),I(""),v(!1)}finally{A(!1)}}}async function R(ue){window.confirm("이 카테고리를 삭제할까요?")&&await cj(i,ue)}const kt=["#3b82f6","#f97316","#22c55e","#a855f7","#6b7280","#ef4444","#eab308","#06b6d4"],Ln=["🧹","🍳","🛒","🔧","📌","🧺","🐶","🌿","🔑","💊","📦","🚗"];return E.jsxs(au,{title:"설정",children:[E.jsxs("div",{className:"space-y-4",children:[E.jsxs("section",{className:"bg-white rounded-2xl border border-slate-100 overflow-hidden",children:[E.jsx("div",{className:"px-4 py-3 border-b border-slate-50",children:E.jsx("h2",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wide",children:"프로필"})}),E.jsx("div",{className:"p-4",children:E.jsxs("div",{className:"flex items-center gap-4",children:[E.jsx("div",{className:"w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center text-2xl",children:"👤"}),E.jsxs("div",{children:[E.jsx("p",{className:"font-bold text-slate-800",children:(n==null?void 0:n.displayName)||"–"}),E.jsx("p",{className:"text-sm text-slate-400",children:n==null?void 0:n.email})]})]})}),r&&E.jsx("div",{className:"px-4 pb-4",children:E.jsxs("div",{className:"flex items-center gap-3 bg-slate-50 rounded-xl p-3",children:[E.jsx("div",{className:"w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-sm",children:"👤"}),E.jsxs("div",{children:[E.jsx("p",{className:"text-sm font-medium text-slate-700",children:r.displayName}),E.jsx("p",{className:"text-xs text-slate-400",children:"파트너"})]})]})})]}),!i&&E.jsxs("section",{className:"bg-amber-50 border border-amber-200 rounded-2xl p-4",children:[E.jsx("p",{className:"text-sm font-medium text-amber-800 mb-2",children:"⚠️ 파트너와 아직 연결되지 않았어요"}),E.jsx("p",{className:"text-xs text-amber-600 mb-3",children:"파트너가 먼저 앱에 가입한 후, 이메일로 연결하세요."}),E.jsxs("button",{onClick:()=>S(!0),className:"flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-xl text-sm font-medium",children:[E.jsx(vB,{size:16})," 파트너 연결하기"]})]}),E.jsxs("section",{className:"bg-white rounded-2xl border border-slate-100 overflow-hidden",children:[E.jsx("div",{className:"px-4 py-3 border-b border-slate-50",children:E.jsx("h2",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wide",children:"알림"})}),E.jsxs("button",{onClick:b,className:"w-full flex items-center justify-between px-4 py-4 hover:bg-slate-50",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[n!=null&&n.notificationsEnabled?E.jsx(lB,{size:20,className:"text-primary-600"}):E.jsx(aB,{size:20,className:"text-slate-400"}),E.jsxs("div",{className:"text-left",children:[E.jsx("p",{className:"text-sm font-medium text-slate-800",children:"푸시 알림"}),E.jsx("p",{className:"text-xs text-slate-400",children:"태스크 완료/추가 시 알림 받기"})]})]}),E.jsx("div",{className:`w-12 h-6 rounded-full transition-colors ${n!=null&&n.notificationsEnabled?"bg-primary-600":"bg-slate-300"}`,children:E.jsx("div",{className:`w-5 h-5 bg-white rounded-full shadow-sm mt-0.5 transition-transform ${n!=null&&n.notificationsEnabled?"translate-x-6":"translate-x-0.5"}`})})]})]}),i&&E.jsxs("section",{className:"bg-white rounded-2xl border border-slate-100 overflow-hidden",children:[E.jsxs("div",{className:"px-4 py-3 border-b border-slate-50 flex items-center justify-between",children:[E.jsx("h2",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wide",children:"카테고리"}),E.jsxs("button",{onClick:()=>v(!0),className:"flex items-center gap-1 text-xs text-primary-600 font-medium",children:[E.jsx(Cl,{size:14})," 추가"]})]}),E.jsx("div",{className:"divide-y divide-slate-50",children:s.map(ue=>E.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("span",{className:"w-8 h-8 rounded-full flex items-center justify-center text-sm",style:{backgroundColor:ue.color+"20"},children:ue.icon}),E.jsx("span",{className:"text-sm font-medium text-slate-800",children:ue.name})]}),!ue.isDefault&&E.jsx("button",{onClick:()=>R(ue.id),className:"p-1.5 text-slate-400 hover:text-red-500 rounded-lg",children:E.jsx(FP,{size:15})})]},ue.id))})]}),E.jsxs("button",{onClick:()=>t("/history"),className:"w-full flex items-center justify-between bg-white rounded-2xl border border-slate-100 px-4 py-4 hover:bg-slate-50",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx(pB,{size:20,className:"text-slate-500"}),E.jsx("span",{className:"text-sm font-medium text-slate-800",children:"완료 히스토리"})]}),E.jsx(LP,{size:18,className:"text-slate-300"})]}),E.jsxs("button",{onClick:()=>W4(),className:"w-full flex items-center gap-3 bg-white rounded-2xl border border-slate-100 px-4 py-4 text-red-500 hover:bg-red-50",children:[E.jsx(gB,{size:20}),E.jsx("span",{className:"text-sm font-medium",children:"로그아웃"})]})]}),E.jsx(dm,{isOpen:x,onClose:()=>S(!1),title:"파트너 연결",children:E.jsxs("form",{onSubmit:C,className:"space-y-4",children:[E.jsx("p",{className:"text-sm text-slate-500",children:"파트너의 이메일을 입력하세요. 상대방이 먼저 앱에 가입되어 있어야 합니다."}),E.jsx("input",{type:"email",value:o,onChange:ue=>a(ue.target.value),placeholder:"partner@email.com",className:"w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400",required:!0}),d&&E.jsx("p",{className:"text-red-500 text-sm",children:d}),m&&E.jsx("p",{className:"text-green-600 text-sm",children:m}),E.jsx("button",{type:"submit",disabled:l,className:"w-full py-3 bg-primary-600 text-white rounded-xl font-medium disabled:opacity-60",children:l?"연결 중...":"연결하기"})]})}),E.jsx(dm,{isOpen:k,onClose:()=>v(!1),title:"카테고리 추가",children:E.jsxs("form",{onSubmit:D,className:"space-y-4",children:[E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1.5",children:"이름"}),E.jsx("input",{type:"text",value:g,onChange:ue=>I(ue.target.value),placeholder:"카테고리 이름",className:"w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1.5",children:"아이콘"}),E.jsx("div",{className:"flex flex-wrap gap-2",children:Ln.map(ue=>E.jsx("button",{type:"button",onClick:()=>L(ue),className:`w-10 h-10 rounded-xl text-xl flex items-center justify-center border-2 transition-colors ${P===ue?"border-primary-400 bg-primary-50":"border-transparent hover:bg-slate-100"}`,children:ue},ue))})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1.5",children:"색상"}),E.jsx("div",{className:"flex flex-wrap gap-2",children:kt.map(ue=>E.jsx("button",{type:"button",onClick:()=>T(ue),className:`w-8 h-8 rounded-full border-2 transition-all ${F===ue?"border-slate-800 scale-110":"border-transparent"}`,style:{backgroundColor:ue}},ue))})]}),E.jsx("button",{type:"submit",disabled:w||!g.trim(),className:"w-full py-3 bg-primary-600 text-white rounded-xl font-medium disabled:opacity-60",children:w?"추가 중...":"카테고리 추가"})]})})]})}function LB(){const{currentUser:t,familyId:e,isLoading:n}=Mn();return dj(e),pj(),n?E.jsx(bP,{fullScreen:!0}):t?E.jsxs(Lk,{children:[E.jsx(Un,{path:"/",element:E.jsx(PB,{})}),E.jsx(Un,{path:"/calendar",element:E.jsx(RB,{})}),E.jsx(Un,{path:"/tasks",element:E.jsx(kB,{})}),E.jsx(Un,{path:"/tasks/new",element:E.jsx(tE,{})}),E.jsx(Un,{path:"/tasks/:id/edit",element:E.jsx(tE,{})}),E.jsx(Un,{path:"/history",element:E.jsx(NB,{})}),E.jsx(Un,{path:"/settings",element:E.jsx(MB,{})}),E.jsx(Un,{path:"*",element:E.jsx(Ok,{to:"/",replace:!0})})]}):E.jsx(mj,{})}function FB(){return X4(),E.jsx(Wk,{children:E.jsx(LB,{})})}gT(document.getElementById("root")).render(E.jsx(j.StrictMode,{children:E.jsx(FB,{})}));
