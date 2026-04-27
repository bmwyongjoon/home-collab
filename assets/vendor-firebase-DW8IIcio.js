import{o as Fr,_ as Yn}from"./vendor-HlPAR_8t.js";var hr={};/**
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
 */const Hr=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},Ro=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const a=i[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const c=i[n++];e[s++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=i[n++],h=i[n++],g=i[n++],w=((a&7)<<18|(c&63)<<12|(h&63)<<6|g&63)-65536;e[s++]=String.fromCharCode(55296+(w>>10)),e[s++]=String.fromCharCode(56320+(w&1023))}else{const c=i[n++],h=i[n++];e[s++]=String.fromCharCode((a&15)<<12|(c&63)<<6|h&63)}}return e.join("")},Br={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const c=i[a],h=a+1<i.length,g=h?i[a+1]:0,w=a+2<i.length,E=w?i[a+2]:0,b=c>>2,A=(c&3)<<4|g>>4;let k=(g&15)<<2|E>>6,U=E&63;w||(U=64,h||(k=64)),s.push(n[b],n[A],n[k],n[U])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Hr(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Ro(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const c=n[i.charAt(a++)],g=a<i.length?n[i.charAt(a)]:0;++a;const E=a<i.length?n[i.charAt(a)]:64;++a;const A=a<i.length?n[i.charAt(a)]:64;if(++a,c==null||g==null||E==null||A==null)throw new Po;const k=c<<2|g>>4;if(s.push(k),E!==64){const U=g<<4&240|E>>2;if(s.push(U),A!==64){const C=E<<6&192|A;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Po extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Oo=function(i){const e=Hr(i);return Br.encodeByteArray(e,!0)},Yt=function(i){return Oo(i).replace(/\./g,"")},$r=function(i){try{return Br.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function No(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Do=()=>No().__FIREBASE_DEFAULTS__,Lo=()=>{if(typeof process>"u"||typeof hr>"u")return;const i=hr.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Mo=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&$r(i[1]);return e&&JSON.parse(e)},cn=()=>{try{return Do()||Lo()||Mo()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Vr=i=>{var e,n;return(n=(e=cn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},iu=i=>{const e=Vr(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Wr=()=>{var i;return(i=cn())===null||i===void 0?void 0:i.config},zr=i=>{var e;return(e=cn())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class Uo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ru(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Yt(JSON.stringify(n)),Yt(JSON.stringify(h)),""].join(".")}/**
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
 */function z(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(z())}function jo(){var i;const e=(i=cn())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fo(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ho(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Bo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $o(){const i=z();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function su(){return!jo()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vo(){try{return typeof indexedDB=="object"}catch{return!1}}function Wo(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var c;e(((c=a.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}function ou(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const zo="FirebaseError";class de extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=zo,Object.setPrototypeOf(this,de.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Je.prototype.create)}}class Je{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,c=this.errors[e],h=c?qo(c,s):"Error",g=`${this.serviceName}: ${h} (${a}).`;return new de(a,g,s)}}function qo(i,e){return i.replace(Go,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const Go=/\{\$([^}]+)}/g;function Ko(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Qt(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const c=i[a],h=e[a];if(ur(c)&&ur(h)){if(!Qt(c,h))return!1}else if(c!==h)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function ur(i){return i!==null&&typeof i=="object"}/**
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
 */function _t(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function pt(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,c]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(c)}}),e}function gt(i){const e=i.indexOf("?");if(!e)return"";const n=i.indexOf("#",e);return i.substring(e,n>0?n:void 0)}function Jo(i,e){const n=new Xo(i,e);return n.subscribe.bind(n)}class Xo{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let a;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Yo(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:s},a.next===void 0&&(a.next=jn),a.error===void 0&&(a.error=jn),a.complete===void 0&&(a.complete=jn);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yo(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function jn(){}/**
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
 */function te(i){return i&&i._delegate?i._delegate:i}class be{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ne="[DEFAULT]";/**
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
 */class Qo{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Uo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(a)return null;throw c}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ea(e))try{this.getOrInitializeService({instanceIdentifier:Ne})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:a});s.resolve(c)}catch{}}}}clearInstance(e=Ne){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ne){return this.instances.has(e)}getOptions(e=Ne){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,h]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);s===g&&h.resolve(a)}return a}onInit(e,n){var s;const a=this.normalizeInstanceIdentifier(n),c=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;c.add(e),this.onInitCallbacks.set(a,c);const h=this.instances.get(a);return h&&e(h,a),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Zo(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ne){return this.component?this.component.multipleInstances?e:Ne:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zo(i){return i===Ne?void 0:i}function ea(i){return i.instantiationMode==="EAGER"}/**
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
 */class ta{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qo(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var O;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(O||(O={}));const na={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},ia=O.INFO,ra={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},sa=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=ra[e];if(a)console[a](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qr{constructor(e){this.name=e,this._logLevel=ia,this._logHandler=sa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?na[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}/**
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
 */class oa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aa(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function aa(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wn="@firebase/app",dr="0.10.13";/**
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
 */const he=new qr("@firebase/app"),ca="@firebase/app-compat",la="@firebase/analytics-compat",ha="@firebase/analytics",ua="@firebase/app-check-compat",da="@firebase/app-check",fa="@firebase/auth",pa="@firebase/auth-compat",ga="@firebase/database",ma="@firebase/data-connect",va="@firebase/database-compat",ya="@firebase/functions",_a="@firebase/functions-compat",wa="@firebase/installations",Ia="@firebase/installations-compat",Ea="@firebase/messaging",Ta="@firebase/messaging-compat",Sa="@firebase/performance",ba="@firebase/performance-compat",Aa="@firebase/remote-config",Ca="@firebase/remote-config-compat",ka="@firebase/storage",Ra="@firebase/storage-compat",Pa="@firebase/firestore",Oa="@firebase/vertexai-preview",Na="@firebase/firestore-compat",Da="firebase",La="10.14.1";/**
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
 */const Zt="[DEFAULT]",Ma={[Wn]:"fire-core",[ca]:"fire-core-compat",[ha]:"fire-analytics",[la]:"fire-analytics-compat",[da]:"fire-app-check",[ua]:"fire-app-check-compat",[fa]:"fire-auth",[pa]:"fire-auth-compat",[ga]:"fire-rtdb",[ma]:"fire-data-connect",[va]:"fire-rtdb-compat",[ya]:"fire-fn",[_a]:"fire-fn-compat",[wa]:"fire-iid",[Ia]:"fire-iid-compat",[Ea]:"fire-fcm",[Ta]:"fire-fcm-compat",[Sa]:"fire-perf",[ba]:"fire-perf-compat",[Aa]:"fire-rc",[Ca]:"fire-rc-compat",[ka]:"fire-gcs",[Ra]:"fire-gcs-compat",[Pa]:"fire-fst",[Na]:"fire-fst-compat",[Oa]:"fire-vertex","fire-js":"fire-js",[Da]:"fire-js-all"};/**
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
 */const en=new Map,Ua=new Map,zn=new Map;function fr(i,e){try{i.container.addComponent(e)}catch(n){he.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Le(i){const e=i.name;if(zn.has(e))return he.debug(`There were multiple attempts to register component ${e}.`),!1;zn.set(e,i);for(const n of en.values())fr(n,i);for(const n of Ua.values())fr(n,i);return!0}function wt(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function au(i,e,n=Zt){wt(i,e).clearInstance(n)}function Q(i){return i.settings!==void 0}/**
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
 */const xa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Te=new Je("app","Firebase",xa);/**
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
 */class ja{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Te.create("app-deleted",{appName:this._name})}}/**
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
 */const It=La;function Fa(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Zt,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw Te.create("bad-app-name",{appName:String(a)});if(n||(n=Wr()),!n)throw Te.create("no-options");const c=en.get(a);if(c){if(Qt(n,c.options)&&Qt(s,c.config))return c;throw Te.create("duplicate-app",{appName:a})}const h=new ta(a);for(const w of zn.values())h.addComponent(w);const g=new ja(n,s,h);return en.set(a,g),g}function Ha(i=Zt){const e=en.get(i);if(!e&&i===Zt&&Wr())return Fa();if(!e)throw Te.create("no-app",{appName:i});return e}function Se(i,e,n){var s;let a=(s=Ma[i])!==null&&s!==void 0?s:i;n&&(a+=`-${n}`);const c=a.match(/\s|\//),h=e.match(/\s|\//);if(c||h){const g=[`Unable to register library "${a}" with version "${e}":`];c&&g.push(`library name "${a}" contains illegal characters (whitespace or "/")`),c&&h&&g.push("and"),h&&g.push(`version name "${e}" contains illegal characters (whitespace or "/")`),he.warn(g.join(" "));return}Le(new be(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const Ba="firebase-heartbeat-database",$a=1,vt="firebase-heartbeat-store";let Fn=null;function Gr(){return Fn||(Fn=Fr(Ba,$a,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(vt)}catch(n){console.warn(n)}}}}).catch(i=>{throw Te.create("idb-open",{originalErrorMessage:i.message})})),Fn}async function Va(i){try{const n=(await Gr()).transaction(vt),s=await n.objectStore(vt).get(Kr(i));return await n.done,s}catch(e){if(e instanceof de)he.warn(e.message);else{const n=Te.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});he.warn(n.message)}}}async function pr(i,e){try{const s=(await Gr()).transaction(vt,"readwrite");await s.objectStore(vt).put(e,Kr(i)),await s.done}catch(n){if(n instanceof de)he.warn(n.message);else{const s=Te.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});he.warn(s.message)}}}function Kr(i){return`${i.name}!${i.options.appId}`}/**
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
 */const Wa=1024,za=30*24*60*60*1e3;class qa{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ka(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=gr();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c)?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const g=new Date(h.date).valueOf();return Date.now()-g<=za}),this._storage.overwrite(this._heartbeatsCache))}catch(s){he.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gr(),{heartbeatsToSend:s,unsentEntries:a}=Ga(this._heartbeatsCache.heartbeats),c=Yt(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return he.warn(n),""}}}function gr(){return new Date().toISOString().substring(0,10)}function Ga(i,e=Wa){const n=[];let s=i.slice();for(const a of i){const c=n.find(h=>h.agent===a.agent);if(c){if(c.dates.push(a.date),mr(n)>e){c.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),mr(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ka{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vo()?Wo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Va(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return pr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return pr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function mr(i){return Yt(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function Ja(i){Le(new be("platform-logger",e=>new oa(e),"PRIVATE")),Le(new be("heartbeat",e=>new qa(e),"PRIVATE")),Se(Wn,dr,i),Se(Wn,dr,"esm2017"),Se("fire-js","")}Ja("");function Jr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xa=Jr,Xr=new Je("auth","Firebase",Jr());/**
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
 */const tn=new qr("@firebase/auth");function Ya(i,...e){tn.logLevel<=O.WARN&&tn.warn(`Auth (${It}): ${i}`,...e)}function Gt(i,...e){tn.logLevel<=O.ERROR&&tn.error(`Auth (${It}): ${i}`,...e)}/**
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
 */function Y(i,...e){throw Qn(i,...e)}function Z(i,...e){return Qn(i,...e)}function Yr(i,e,n){const s=Object.assign(Object.assign({},Xa()),{[e]:n});return new Je("auth","Firebase",s).create(e,{appName:i.name})}function le(i){return Yr(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qn(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return Xr.create(i,...e)}function S(i,e,...n){if(!i)throw Qn(e,...n)}function oe(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Gt(e),new Error(e)}function ue(i,e){i||oe(e)}/**
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
 */function qn(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Qa(){return vr()==="http:"||vr()==="https:"}function vr(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function Za(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qa()||Ho()||"connection"in navigator)?navigator.onLine:!0}function ec(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Et{constructor(e,n){this.shortDelay=e,this.longDelay=n,ue(n>e,"Short delay should be less than long delay!"),this.isMobile=xo()||Bo()}get(){return Za()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zn(i,e){ue(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Qr{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;oe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;oe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;oe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nc=new Et(3e4,6e4);function Ae(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function fe(i,e,n,s,a={}){return Zr(i,a,async()=>{let c={},h={};s&&(e==="GET"?h=s:c={body:JSON.stringify(s)});const g=_t(Object.assign({key:i.config.apiKey},h)).slice(1),w=await i._getAdditionalHeaders();w["Content-Type"]="application/json",i.languageCode&&(w["X-Firebase-Locale"]=i.languageCode);const E=Object.assign({method:e,headers:w},c);return Fo()||(E.referrerPolicy="no-referrer"),Qr.fetch()(es(i,i.config.apiHost,n,g),E)})}async function Zr(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},tc),e);try{const a=new rc(i),c=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw zt(i,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const g=c.ok?h.errorMessage:h.error.message,[w,E]=g.split(" : ");if(w==="FEDERATED_USER_ID_ALREADY_LINKED")throw zt(i,"credential-already-in-use",h);if(w==="EMAIL_EXISTS")throw zt(i,"email-already-in-use",h);if(w==="USER_DISABLED")throw zt(i,"user-disabled",h);const b=s[w]||w.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw Yr(i,b,E);Y(i,b)}}catch(a){if(a instanceof de)throw a;Y(i,"network-request-failed",{message:String(a)})}}async function Tt(i,e,n,s,a={}){const c=await fe(i,e,n,s,a);return"mfaPendingCredential"in c&&Y(i,"multi-factor-auth-required",{_serverResponse:c}),c}function es(i,e,n,s){const a=`${e}${n}?${s}`;return i.config.emulator?Zn(i.config,a):`${i.config.apiScheme}://${a}`}function ic(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Z(this.auth,"network-request-failed")),nc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zt(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const a=Z(i,e,s);return a.customData._tokenResponse=n,a}function yr(i){return i!==void 0&&i.enterprise!==void 0}class sc{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ic(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function oc(i,e){return fe(i,"GET","/v2/recaptchaConfig",Ae(i,e))}/**
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
 */async function ac(i,e){return fe(i,"POST","/v1/accounts:delete",e)}async function ts(i,e){return fe(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function mt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cc(i,e=!1){const n=te(i),s=await n.getIdToken(e),a=ei(s);S(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,h=c==null?void 0:c.sign_in_provider;return{claims:a,token:s,authTime:mt(Hn(a.auth_time)),issuedAtTime:mt(Hn(a.iat)),expirationTime:mt(Hn(a.exp)),signInProvider:h||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Hn(i){return Number(i)*1e3}function ei(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return Gt("JWT malformed, contained fewer than 3 sections"),null;try{const a=$r(n);return a?JSON.parse(a):(Gt("Failed to decode base64 JWT payload"),null)}catch(a){return Gt("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function _r(i){const e=ei(i);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ke(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof de&&lc(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function lc({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class hc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mt(this.lastLoginAt),this.creationTime=mt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nn(i){var e;const n=i.auth,s=await i.getIdToken(),a=await Ke(i,ts(n,{idToken:s}));S(a==null?void 0:a.users.length,n,"internal-error");const c=a.users[0];i._notifyReloadListener(c);const h=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?ns(c.providerUserInfo):[],g=dc(i.providerData,h),w=i.isAnonymous,E=!(i.email&&c.passwordHash)&&!(g!=null&&g.length),b=w?E:!1,A={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:g,metadata:new Gn(c.createdAt,c.lastLoginAt),isAnonymous:b};Object.assign(i,A)}async function uc(i){const e=te(i);await nn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dc(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function ns(i){return i.map(e=>{var{providerId:n}=e,s=Yn(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function fc(i,e){const n=await Zr(i,{},async()=>{const s=_t({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:c}=i.config,h=es(i,a,"/v1/token",`key=${c}`),g=await i._getAdditionalHeaders();return g["Content-Type"]="application/x-www-form-urlencoded",Qr.fetch()(h,{method:"POST",headers:g,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pc(i,e){return fe(i,"POST","/v2/accounts:revokeToken",Ae(i,e))}/**
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
 */class ze{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_r(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){S(e.length!==0,"internal-error");const n=_r(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(S(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:a,expiresIn:c}=await fc(e,n);this.updateTokensAndExpiration(s,a,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:a,expirationTime:c}=n,h=new ze;return s&&(S(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),a&&(S(typeof a=="string","internal-error",{appName:e}),h.accessToken=a),c&&(S(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ze,this.toJSON())}_performRefresh(){return oe("not implemented")}}/**
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
 */function ye(i,e){S(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ae{constructor(e){var{uid:n,auth:s,stsTokenManager:a}=e,c=Yn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Gn(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const n=await Ke(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cc(this,e)}reload(){return uc(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ae(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await nn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Q(this.auth.app))return Promise.reject(le(this.auth));const e=await this.getIdToken();return await Ke(this,ac(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,a,c,h,g,w,E,b;const A=(s=n.displayName)!==null&&s!==void 0?s:void 0,k=(a=n.email)!==null&&a!==void 0?a:void 0,U=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,C=(h=n.photoURL)!==null&&h!==void 0?h:void 0,M=(g=n.tenantId)!==null&&g!==void 0?g:void 0,D=(w=n._redirectEventId)!==null&&w!==void 0?w:void 0,ne=(E=n.createdAt)!==null&&E!==void 0?E:void 0,G=(b=n.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:j,emailVerified:J,isAnonymous:Ce,providerData:q,stsTokenManager:v}=n;S(j&&v,e,"internal-error");const u=ze.fromJSON(this.name,v);S(typeof j=="string",e,"internal-error"),ye(A,e.name),ye(k,e.name),S(typeof J=="boolean",e,"internal-error"),S(typeof Ce=="boolean",e,"internal-error"),ye(U,e.name),ye(C,e.name),ye(M,e.name),ye(D,e.name),ye(ne,e.name),ye(G,e.name);const f=new ae({uid:j,auth:e,email:k,emailVerified:J,displayName:A,isAnonymous:Ce,photoURL:C,phoneNumber:U,tenantId:M,stsTokenManager:u,createdAt:ne,lastLoginAt:G});return q&&Array.isArray(q)&&(f.providerData=q.map(p=>Object.assign({},p))),D&&(f._redirectEventId=D),f}static async _fromIdTokenResponse(e,n,s=!1){const a=new ze;a.updateFromServerResponse(n);const c=new ae({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await nn(c),c}static async _fromGetAccountInfoResponse(e,n,s){const a=n.users[0];S(a.localId!==void 0,"internal-error");const c=a.providerUserInfo!==void 0?ns(a.providerUserInfo):[],h=!(a.email&&a.passwordHash)&&!(c!=null&&c.length),g=new ze;g.updateFromIdToken(s);const w=new ae({uid:a.localId,auth:e,stsTokenManager:g,isAnonymous:h}),E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Gn(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(c!=null&&c.length)};return Object.assign(w,E),w}}/**
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
 */const wr=new Map;function ce(i){ue(i instanceof Function,"Expected a class definition");let e=wr.get(i);return e?(ue(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,wr.set(i,e),e)}/**
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
 */class is{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}is.type="NONE";const Ir=is;/**
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
 */function Kt(i,e,n){return`firebase:${i}:${e}:${n}`}class qe{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:a,name:c}=this.auth;this.fullUserKey=Kt(this.userKey,a.apiKey,c),this.fullPersistenceKey=Kt("persistence",a.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ae._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new qe(ce(Ir),e,s);const a=(await Promise.all(n.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=a[0]||ce(Ir);const h=Kt(s,e.config.apiKey,e.name);let g=null;for(const E of n)try{const b=await E._get(h);if(b){const A=ae._fromJSON(e,b);E!==c&&(g=A),c=E;break}}catch{}const w=a.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!w.length?new qe(c,e,s):(c=w[0],g&&await c._set(h,g.toJSON()),await Promise.all(n.map(async E=>{if(E!==c)try{await E._remove(h)}catch{}})),new qe(c,e,s))}}/**
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
 */function Er(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(as(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rs(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ls(e))return"Blackberry";if(hs(e))return"Webos";if(ss(e))return"Safari";if((e.includes("chrome/")||os(e))&&!e.includes("edge/"))return"Chrome";if(cs(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function rs(i=z()){return/firefox\//i.test(i)}function ss(i=z()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function os(i=z()){return/crios\//i.test(i)}function as(i=z()){return/iemobile/i.test(i)}function cs(i=z()){return/android/i.test(i)}function ls(i=z()){return/blackberry/i.test(i)}function hs(i=z()){return/webos/i.test(i)}function ti(i=z()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function gc(i=z()){var e;return ti(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mc(){return $o()&&document.documentMode===10}function us(i=z()){return ti(i)||cs(i)||hs(i)||ls(i)||/windows phone/i.test(i)||as(i)}/**
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
 */function ds(i,e=[]){let n;switch(i){case"Browser":n=Er(z());break;case"Worker":n=`${Er(z())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${It}/${s}`}/**
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
 */class vc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((h,g)=>{try{const w=e(c);h(w)}catch(w){g(w)}});s.onAbort=n,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function yc(i,e={}){return fe(i,"GET","/v2/passwordPolicy",Ae(i,e))}/**
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
 */const _c=6;class wc{constructor(e){var n,s,a,c;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=h.minPasswordLength)!==null&&n!==void 0?n:_c,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,a,c,h,g;const w={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,w),this.validatePasswordCharacterOptions(e,w),w.isValid&&(w.isValid=(n=w.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),w.isValid&&(w.isValid=(s=w.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),w.isValid&&(w.isValid=(a=w.containsLowercaseLetter)!==null&&a!==void 0?a:!0),w.isValid&&(w.isValid=(c=w.containsUppercaseLetter)!==null&&c!==void 0?c:!0),w.isValid&&(w.isValid=(h=w.containsNumericCharacter)!==null&&h!==void 0?h:!0),w.isValid&&(w.isValid=(g=w.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),w}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,a,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class Ic{constructor(e,n,s,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tr(this),this.idTokenSubscription=new Tr(this),this.beforeStateQueue=new vc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ce(n)),this._initializationPromise=this.queue(async()=>{var s,a;if(!this._deleted&&(this.persistenceManager=await qe.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ts(this,{idToken:e}),s=await ae._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Q(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(g,g))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,g=a==null?void 0:a._redirectEventId,w=await this.tryRedirectSignIn(e);(!h||h===g)&&(w!=null&&w.user)&&(a=w.user,c=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(a)}catch(h){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ec()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Q(this.app))return Promise.reject(le(this));const n=e?te(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Q(this.app)?Promise.reject(le(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Q(this.app)?Promise.reject(le(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ce(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yc(this),n=new wc(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Je("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await pc(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ce(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await qe.create(this,[ce(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,a){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let h=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(S(g,this,"internal-error"),g.then(()=>{h||c(this.currentUser)}),typeof n=="function"){const w=e.addObserver(n,s,a);return()=>{h=!0,w()}}else{const w=e.addObserver(n);return()=>{h=!0,w()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ds(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(n["X-Firebase-AppCheck"]=a),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ya(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fe(i){return te(i)}class Tr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jo(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ln={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ec(i){ln=i}function fs(i){return ln.loadJS(i)}function Tc(){return ln.recaptchaEnterpriseScript}function Sc(){return ln.gapiScript}function bc(i){return`__${i}${Math.floor(Math.random()*1e6)}`}const Ac="recaptcha-enterprise",Cc="NO_RECAPTCHA";class kc{constructor(e){this.type=Ac,this.auth=Fe(e)}async verify(e="verify",n=!1){async function s(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,g)=>{oc(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(w=>{if(w.recaptchaKey===void 0)g(new Error("recaptcha Enterprise site key undefined"));else{const E=new sc(w);return c.tenantId==null?c._agentRecaptchaConfig=E:c._tenantRecaptchaConfigs[c.tenantId]=E,h(E.siteKey)}}).catch(w=>{g(w)})})}function a(c,h,g){const w=window.grecaptcha;yr(w)?w.enterprise.ready(()=>{w.enterprise.execute(c,{action:e}).then(E=>{h(E)}).catch(()=>{h(Cc)})}):g(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((c,h)=>{s(this.auth).then(g=>{if(!n&&yr(window.grecaptcha))a(g,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let w=Tc();w.length!==0&&(w+=g),fs(w).then(()=>{a(g,c,h)}).catch(E=>{h(E)})}}).catch(g=>{h(g)})})}}async function Sr(i,e,n,s=!1){const a=new kc(i);let c;try{c=await a.verify(n)}catch{c=await a.verify(n,!0)}const h=Object.assign({},e);return s?Object.assign(h,{captchaResp:c}):Object.assign(h,{captchaResponse:c}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Kn(i,e,n,s){var a;if(!((a=i._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Sr(i,e,n,n==="getOobCode");return s(i,c)}else return s(i,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Sr(i,e,n,n==="getOobCode");return s(i,h)}else return Promise.reject(c)})}/**
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
 */function Rc(i,e){const n=wt(i,"auth");if(n.isInitialized()){const a=n.getImmediate(),c=n.getOptions();if(Qt(c,e??{}))return a;Y(a,"already-initialized")}return n.initialize({options:e})}function Pc(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ce);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Oc(i,e,n){const s=Fe(i);S(s._canInitEmulator,s,"emulator-config-failed"),S(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,c=ps(e),{host:h,port:g}=Nc(e),w=g===null?"":`:${g}`;s.config.emulator={url:`${c}//${h}${w}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:a})}),Dc()}function ps(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Nc(i){const e=ps(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const c=a[1];return{host:c,port:br(s.substr(c.length+1))}}else{const[c,h]=s.split(":");return{host:c,port:br(h)}}}function br(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Dc(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class ni{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return oe("not implemented")}_getIdTokenResponse(e){return oe("not implemented")}_linkToIdToken(e,n){return oe("not implemented")}_getReauthenticationResolver(e){return oe("not implemented")}}async function Lc(i,e){return fe(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Mc(i,e){return Tt(i,"POST","/v1/accounts:signInWithPassword",Ae(i,e))}/**
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
 */async function Uc(i,e){return Tt(i,"POST","/v1/accounts:signInWithEmailLink",Ae(i,e))}async function xc(i,e){return Tt(i,"POST","/v1/accounts:signInWithEmailLink",Ae(i,e))}/**
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
 */class yt extends ni{constructor(e,n,s,a=null){super("password",s),this._email=e,this._password=n,this._tenantId=a}static _fromEmailAndPassword(e,n){return new yt(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new yt(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kn(e,n,"signInWithPassword",Mc);case"emailLink":return Uc(e,{email:this._email,oobCode:this._password});default:Y(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kn(e,s,"signUpPassword",Lc);case"emailLink":return xc(e,{idToken:n,email:this._email,oobCode:this._password});default:Y(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ge(i,e){return Tt(i,"POST","/v1/accounts:signInWithIdp",Ae(i,e))}/**
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
 */const jc="http://localhost";class Me extends ni{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Me(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Y("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=n,c=Yn(n,["providerId","signInMethod"]);if(!s||!a)return null;const h=new Me(s,a);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const n=this.buildRequest();return Ge(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ge(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ge(e,n)}buildRequest(){const e={requestUri:jc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_t(n)}return e}}/**
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
 */function Fc(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Hc(i){const e=pt(gt(i)).link,n=e?pt(gt(e)).deep_link_id:null,s=pt(gt(i)).deep_link_id;return(s?pt(gt(s)).link:null)||s||n||e||i}class ii{constructor(e){var n,s,a,c,h,g;const w=pt(gt(e)),E=(n=w.apiKey)!==null&&n!==void 0?n:null,b=(s=w.oobCode)!==null&&s!==void 0?s:null,A=Fc((a=w.mode)!==null&&a!==void 0?a:null);S(E&&b&&A,"argument-error"),this.apiKey=E,this.operation=A,this.code=b,this.continueUrl=(c=w.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(h=w.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(g=w.tenantId)!==null&&g!==void 0?g:null}static parseLink(e){const n=Hc(e);try{return new ii(n)}catch{return null}}}/**
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
 */class Xe{constructor(){this.providerId=Xe.PROVIDER_ID}static credential(e,n){return yt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ii.parseLink(n);return S(s,"argument-error"),yt._fromEmailAndCode(e,s.code,s.tenantId)}}Xe.PROVIDER_ID="password";Xe.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class gs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class St extends gs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class _e extends St{constructor(){super("facebook.com")}static credential(e){return Me._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _e.credentialFromTaggedObject(e)}static credentialFromError(e){return _e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _e.credential(e.oauthAccessToken)}catch{return null}}}_e.FACEBOOK_SIGN_IN_METHOD="facebook.com";_e.PROVIDER_ID="facebook.com";/**
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
 */class we extends St{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Me._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return we.credentialFromTaggedObject(e)}static credentialFromError(e){return we.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return we.credential(n,s)}catch{return null}}}we.GOOGLE_SIGN_IN_METHOD="google.com";we.PROVIDER_ID="google.com";/**
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
 */class Ie extends St{constructor(){super("github.com")}static credential(e){return Me._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ie.credential(e.oauthAccessToken)}catch{return null}}}Ie.GITHUB_SIGN_IN_METHOD="github.com";Ie.PROVIDER_ID="github.com";/**
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
 */class Ee extends St{constructor(){super("twitter.com")}static credential(e,n){return Me._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ee.credential(n,s)}catch{return null}}}Ee.TWITTER_SIGN_IN_METHOD="twitter.com";Ee.PROVIDER_ID="twitter.com";/**
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
 */async function Bc(i,e){return Tt(i,"POST","/v1/accounts:signUp",Ae(i,e))}/**
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
 */class Ue{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,a=!1){const c=await ae._fromIdTokenResponse(e,s,a),h=Ar(s);return new Ue({user:c,providerId:h,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const a=Ar(s);return new Ue({user:e,providerId:a,_tokenResponse:s,operationType:n})}}function Ar(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class rn extends de{constructor(e,n,s,a){var c;super(n.code,n.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,rn.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,a){return new rn(e,n,s,a)}}function ms(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?rn._fromErrorAndOperation(i,c,e,s):c})}async function $c(i,e,n=!1){const s=await Ke(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return Ue._forOperation(i,"link",s)}/**
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
 */async function Vc(i,e,n=!1){const{auth:s}=i;if(Q(s.app))return Promise.reject(le(s));const a="reauthenticate";try{const c=await Ke(i,ms(s,a,e,i),n);S(c.idToken,s,"internal-error");const h=ei(c.idToken);S(h,s,"internal-error");const{sub:g}=h;return S(i.uid===g,s,"user-mismatch"),Ue._forOperation(i,a,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&Y(s,"user-mismatch"),c}}/**
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
 */async function vs(i,e,n=!1){if(Q(i.app))return Promise.reject(le(i));const s="signIn",a=await ms(i,s,e),c=await Ue._fromIdTokenResponse(i,s,a);return n||await i._updateCurrentUser(c.user),c}async function Wc(i,e){return vs(Fe(i),e)}/**
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
 */async function ys(i){const e=Fe(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cu(i,e,n){if(Q(i.app))return Promise.reject(le(i));const s=Fe(i),h=await Kn(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Bc).catch(w=>{throw w.code==="auth/password-does-not-meet-requirements"&&ys(i),w}),g=await Ue._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(g.user),g}function lu(i,e,n){return Q(i.app)?Promise.reject(le(i)):Wc(te(i),Xe.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&ys(i),s})}/**
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
 */async function zc(i,e){return fe(i,"POST","/v1/accounts:update",e)}/**
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
 */async function hu(i,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=te(i),c={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},h=await Ke(s,zc(s.auth,c));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const g=s.providerData.find(({providerId:w})=>w==="password");g&&(g.displayName=s.displayName,g.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function qc(i,e,n,s){return te(i).onIdTokenChanged(e,n,s)}function Gc(i,e,n){return te(i).beforeAuthStateChanged(e,n)}function uu(i,e,n,s){return te(i).onAuthStateChanged(e,n,s)}function du(i){return te(i).signOut()}const sn="__sak";/**
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
 */class _s{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sn,"1"),this.storage.removeItem(sn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Kc=1e3,Jc=10;class ws extends _s{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=us(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),a=this.localCache[n];s!==a&&e(n,a,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((h,g,w)=>{this.notifyListeners(h,w)});return}const s=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const h=this.storage.getItem(s);!n&&this.localCache[s]===h||this.notifyListeners(s,h)},c=this.storage.getItem(s);mc()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,Jc):a()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Kc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ws.type="LOCAL";const Xc=ws;/**
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
 */class Is extends _s{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Is.type="SESSION";const Es=Is;/**
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
 */function Yc(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const s=new hn(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:a,data:c}=n.data,h=this.handlersMap[a];if(!(h!=null&&h.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const g=Array.from(h).map(async E=>E(n.origin,c)),w=await Yc(g);n.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:w})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hn.receivers=[];/**
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
 */function ri(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class Qc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let c,h;return new Promise((g,w)=>{const E=ri("",20);a.port1.start();const b=setTimeout(()=>{w(new Error("unsupported_event"))},s);h={messageChannel:a,onMessage(A){const k=A;if(k.data.eventId===E)switch(k.data.status){case"ack":clearTimeout(b),c=setTimeout(()=>{w(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(k.data.response);break;default:clearTimeout(b),clearTimeout(c),w(new Error("invalid_response"));break}}},this.handlers.add(h),a.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:E,data:n},[a.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function ee(){return window}function Zc(i){ee().location.href=i}/**
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
 */function Ts(){return typeof ee().WorkerGlobalScope<"u"&&typeof ee().importScripts=="function"}async function el(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tl(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function nl(){return Ts()?self:null}/**
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
 */const Ss="firebaseLocalStorageDb",il=1,on="firebaseLocalStorage",bs="fbase_key";class bt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function un(i,e){return i.transaction([on],e?"readwrite":"readonly").objectStore(on)}function rl(){const i=indexedDB.deleteDatabase(Ss);return new bt(i).toPromise()}function Jn(){const i=indexedDB.open(Ss,il);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(on,{keyPath:bs})}catch(a){n(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(on)?e(s):(s.close(),await rl(),e(await Jn()))})})}async function Cr(i,e,n){const s=un(i,!0).put({[bs]:e,value:n});return new bt(s).toPromise()}async function sl(i,e){const n=un(i,!1).get(e),s=await new bt(n).toPromise();return s===void 0?null:s.value}function kr(i,e){const n=un(i,!0).delete(e);return new bt(n).toPromise()}const ol=800,al=3;class As{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>al)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ts()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hn._getInstance(nl()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await el(),!this.activeServiceWorker)return;this.sender=new Qc(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jn();return await Cr(e,sn,"1"),await kr(e,sn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Cr(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>sl(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const c=un(a,!1).getAll();return new bt(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:c}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(c)&&(this.notifyListeners(a,c),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ol)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}As.type="LOCAL";const cl=As;new Et(3e4,6e4);/**
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
 */function ll(i,e){return e?ce(e):(S(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class si extends ni{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ge(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ge(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ge(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hl(i){return vs(i.auth,new si(i),i.bypassAuthState)}function ul(i){const{auth:e,user:n}=i;return S(n,e,"internal-error"),Vc(n,new si(i),i.bypassAuthState)}async function dl(i){const{auth:e,user:n}=i;return S(n,e,"internal-error"),$c(n,new si(i),i.bypassAuthState)}/**
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
 */class Cs{constructor(e,n,s,a,c=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:a,tenantId:c,error:h,type:g}=e;if(h){this.reject(h);return}const w={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(w))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hl;case"linkViaPopup":case"linkViaRedirect":return dl;case"reauthViaPopup":case"reauthViaRedirect":return ul;default:Y(this.auth,"internal-error")}}resolve(e){ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fl=new Et(2e3,1e4);class We extends Cs{constructor(e,n,s,a,c){super(e,n,a,c),this.provider=s,this.authWindow=null,this.pollId=null,We.currentPopupAction&&We.currentPopupAction.cancel(),We.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){ue(this.filter.length===1,"Popup operations only handle one event");const e=ri();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Z(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Z(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,We.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Z(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fl.get())};e()}}We.currentPopupAction=null;/**
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
 */const pl="pendingRedirect",Jt=new Map;class gl extends Cs{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Jt.get(this.auth._key());if(!e){try{const s=await ml(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Jt.set(this.auth._key(),e)}return this.bypassAuthState||Jt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ml(i,e){const n=_l(e),s=yl(i);if(!await s._isAvailable())return!1;const a=await s._get(n)==="true";return await s._remove(n),a}function vl(i,e){Jt.set(i._key(),e)}function yl(i){return ce(i._redirectPersistence)}function _l(i){return Kt(pl,i.config.apiKey,i.name)}async function wl(i,e,n=!1){if(Q(i.app))return Promise.reject(le(i));const s=Fe(i),a=ll(s,e),h=await new gl(s,a,n).execute();return h&&!n&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const Il=10*60*1e3;class El{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tl(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ks(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Z(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Il&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rr(e))}saveEventToCache(e){this.cachedEventUids.add(Rr(e)),this.lastProcessedEventTime=Date.now()}}function Rr(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function ks({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Tl(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ks(i);default:return!1}}/**
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
 */async function Sl(i,e={}){return fe(i,"GET","/v1/projects",e)}/**
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
 */const bl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Al=/^https?/;async function Cl(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Sl(i);for(const n of e)try{if(kl(n))return}catch{}Y(i,"unauthorized-domain")}function kl(i){const e=qn(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&h.hostname===s}if(!Al.test(n))return!1;if(bl.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const Rl=new Et(3e4,6e4);function Pr(){const i=ee().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function Pl(i){return new Promise((e,n)=>{var s,a,c;function h(){Pr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pr(),n(Z(i,"network-request-failed"))},timeout:Rl.get()})}if(!((a=(s=ee().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((c=ee().gapi)===null||c===void 0)&&c.load)h();else{const g=bc("iframefcb");return ee()[g]=()=>{gapi.load?h():n(Z(i,"network-request-failed"))},fs(`${Sc()}?onload=${g}`).catch(w=>n(w))}}).catch(e=>{throw Xt=null,e})}let Xt=null;function Ol(i){return Xt=Xt||Pl(i),Xt}/**
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
 */const Nl=new Et(5e3,15e3),Dl="__/auth/iframe",Ll="emulator/auth/iframe",Ml={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ul=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xl(i){const e=i.config;S(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Zn(e,Ll):`https://${i.config.authDomain}/${Dl}`,s={apiKey:e.apiKey,appName:i.name,v:It},a=Ul.get(i.config.apiHost);a&&(s.eid=a);const c=i._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${_t(s).slice(1)}`}async function jl(i){const e=await Ol(i),n=ee().gapi;return S(n,i,"internal-error"),e.open({where:document.body,url:xl(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ml,dontclear:!0},s=>new Promise(async(a,c)=>{await s.restyle({setHideOnLeave:!1});const h=Z(i,"network-request-failed"),g=ee().setTimeout(()=>{c(h)},Nl.get());function w(){ee().clearTimeout(g),a(s)}s.ping(w).then(w,()=>{c(h)})}))}/**
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
 */const Fl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hl=500,Bl=600,$l="_blank",Vl="http://localhost";class Or{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wl(i,e,n,s=Hl,a=Bl){const c=Math.max((window.screen.availHeight-a)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const w=Object.assign(Object.assign({},Fl),{width:s.toString(),height:a.toString(),top:c,left:h}),E=z().toLowerCase();n&&(g=os(E)?$l:n),rs(E)&&(e=e||Vl,w.scrollbars="yes");const b=Object.entries(w).reduce((k,[U,C])=>`${k}${U}=${C},`,"");if(gc(E)&&g!=="_self")return zl(e||"",g),new Or(null);const A=window.open(e||"",g,b);S(A,i,"popup-blocked");try{A.focus()}catch{}return new Or(A)}function zl(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const ql="__/auth/handler",Gl="emulator/auth/handler",Kl=encodeURIComponent("fac");async function Nr(i,e,n,s,a,c){S(i.config.authDomain,i,"auth-domain-config-required"),S(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:It,eventId:a};if(e instanceof gs){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Ko(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,A]of Object.entries({}))h[b]=A}if(e instanceof St){const b=e.getScopes().filter(A=>A!=="");b.length>0&&(h.scopes=b.join(","))}i.tenantId&&(h.tid=i.tenantId);const g=h;for(const b of Object.keys(g))g[b]===void 0&&delete g[b];const w=await i._getAppCheckToken(),E=w?`#${Kl}=${encodeURIComponent(w)}`:"";return`${Jl(i)}?${_t(g).slice(1)}${E}`}function Jl({config:i}){return i.emulator?Zn(i,Gl):`https://${i.authDomain}/${ql}`}/**
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
 */const Bn="webStorageSupport";class Xl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Es,this._completeRedirectFn=wl,this._overrideRedirectResult=vl}async _openPopup(e,n,s,a){var c;ue((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await Nr(e,n,s,qn(),a);return Wl(e,h,ri())}async _openRedirect(e,n,s,a){await this._originValidation(e);const c=await Nr(e,n,s,qn(),a);return Zc(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:c}=this.eventManagers[n];return a?Promise.resolve(a):(ue(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await jl(e),s=new El(e);return n.register("authEvent",a=>(S(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bn,{type:Bn},a=>{var c;const h=(c=a==null?void 0:a[0])===null||c===void 0?void 0:c[Bn];h!==void 0&&n(!!h),Y(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Cl(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return us()||ss()||ti()}}const Yl=Xl;var Dr="@firebase/auth",Lr="1.7.9";/**
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
 */class Ql{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Zl(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eh(i){Le(new be("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:g}=s.options;S(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const w={apiKey:h,authDomain:g,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ds(i)},E=new Ic(s,a,c,w);return Pc(E,n),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Le(new be("auth-internal",e=>{const n=Fe(e.getProvider("auth").getImmediate());return(s=>new Ql(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Se(Dr,Lr,Zl(i)),Se(Dr,Lr,"esm2017")}/**
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
 */const th=5*60,nh=zr("authIdTokenMaxAge")||th;let Mr=null;const ih=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>nh)return;const a=n==null?void 0:n.token;Mr!==a&&(Mr=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function fu(i=Ha()){const e=wt(i,"auth");if(e.isInitialized())return e.getImmediate();const n=Rc(i,{popupRedirectResolver:Yl,persistence:[cl,Xc,Es]}),s=zr("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const h=ih(c.toString());Gc(n,h,()=>h(n.currentUser)),qc(n,g=>h(g))}}const a=Vr("auth");return a&&Oc(n,`http://${a}`),n}function rh(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Ec({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const c=Z("internal-error");c.customData=a,n(c)},s.type="text/javascript",s.charset="UTF-8",rh().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eh("Browser");var Ur=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sh,oh;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,u){function f(){}f.prototype=u.prototype,v.D=u.prototype,v.prototype=new f,v.prototype.constructor=v,v.C=function(p,m,_){for(var d=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)d[ie-2]=arguments[ie];return u.prototype[m].apply(p,d)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(v,u,f){f||(f=0);var p=Array(16);if(typeof u=="string")for(var m=0;16>m;++m)p[m]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(m=0;16>m;++m)p[m]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=v.g[0],f=v.g[1],m=v.g[2];var _=v.g[3],d=u+(_^f&(m^_))+p[0]+3614090360&4294967295;u=f+(d<<7&4294967295|d>>>25),d=_+(m^u&(f^m))+p[1]+3905402710&4294967295,_=u+(d<<12&4294967295|d>>>20),d=m+(f^_&(u^f))+p[2]+606105819&4294967295,m=_+(d<<17&4294967295|d>>>15),d=f+(u^m&(_^u))+p[3]+3250441966&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(_^f&(m^_))+p[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=_+(m^u&(f^m))+p[5]+1200080426&4294967295,_=u+(d<<12&4294967295|d>>>20),d=m+(f^_&(u^f))+p[6]+2821735955&4294967295,m=_+(d<<17&4294967295|d>>>15),d=f+(u^m&(_^u))+p[7]+4249261313&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(_^f&(m^_))+p[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=_+(m^u&(f^m))+p[9]+2336552879&4294967295,_=u+(d<<12&4294967295|d>>>20),d=m+(f^_&(u^f))+p[10]+4294925233&4294967295,m=_+(d<<17&4294967295|d>>>15),d=f+(u^m&(_^u))+p[11]+2304563134&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(_^f&(m^_))+p[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=_+(m^u&(f^m))+p[13]+4254626195&4294967295,_=u+(d<<12&4294967295|d>>>20),d=m+(f^_&(u^f))+p[14]+2792965006&4294967295,m=_+(d<<17&4294967295|d>>>15),d=f+(u^m&(_^u))+p[15]+1236535329&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(m^_&(f^m))+p[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^m&(u^f))+p[6]+3225465664&4294967295,_=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(_^u))+p[11]+643717713&4294967295,m=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(m^_))+p[0]+3921069994&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^_&(f^m))+p[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^m&(u^f))+p[10]+38016083&4294967295,_=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(_^u))+p[15]+3634488961&4294967295,m=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(m^_))+p[4]+3889429448&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^_&(f^m))+p[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^m&(u^f))+p[14]+3275163606&4294967295,_=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(_^u))+p[3]+4107603335&4294967295,m=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(m^_))+p[8]+1163531501&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^_&(f^m))+p[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^m&(u^f))+p[2]+4243563512&4294967295,_=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(_^u))+p[7]+1735328473&4294967295,m=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(m^_))+p[12]+2368359562&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(f^m^_)+p[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^m)+p[8]+2272392833&4294967295,_=u+(d<<11&4294967295|d>>>21),d=m+(_^u^f)+p[11]+1839030562&4294967295,m=_+(d<<16&4294967295|d>>>16),d=f+(m^_^u)+p[14]+4259657740&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^_)+p[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^m)+p[4]+1272893353&4294967295,_=u+(d<<11&4294967295|d>>>21),d=m+(_^u^f)+p[7]+4139469664&4294967295,m=_+(d<<16&4294967295|d>>>16),d=f+(m^_^u)+p[10]+3200236656&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^_)+p[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^m)+p[0]+3936430074&4294967295,_=u+(d<<11&4294967295|d>>>21),d=m+(_^u^f)+p[3]+3572445317&4294967295,m=_+(d<<16&4294967295|d>>>16),d=f+(m^_^u)+p[6]+76029189&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^_)+p[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^m)+p[12]+3873151461&4294967295,_=u+(d<<11&4294967295|d>>>21),d=m+(_^u^f)+p[15]+530742520&4294967295,m=_+(d<<16&4294967295|d>>>16),d=f+(m^_^u)+p[2]+3299628645&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(m^(f|~_))+p[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~m))+p[7]+1126891415&4294967295,_=u+(d<<10&4294967295|d>>>22),d=m+(u^(_|~f))+p[14]+2878612391&4294967295,m=_+(d<<15&4294967295|d>>>17),d=f+(_^(m|~u))+p[5]+4237533241&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~_))+p[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~m))+p[3]+2399980690&4294967295,_=u+(d<<10&4294967295|d>>>22),d=m+(u^(_|~f))+p[10]+4293915773&4294967295,m=_+(d<<15&4294967295|d>>>17),d=f+(_^(m|~u))+p[1]+2240044497&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~_))+p[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~m))+p[15]+4264355552&4294967295,_=u+(d<<10&4294967295|d>>>22),d=m+(u^(_|~f))+p[6]+2734768916&4294967295,m=_+(d<<15&4294967295|d>>>17),d=f+(_^(m|~u))+p[13]+1309151649&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~_))+p[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~m))+p[11]+3174756917&4294967295,_=u+(d<<10&4294967295|d>>>22),d=m+(u^(_|~f))+p[2]+718787259&4294967295,m=_+(d<<15&4294967295|d>>>17),d=f+(_^(m|~u))+p[9]+3951481745&4294967295,v.g[0]=v.g[0]+u&4294967295,v.g[1]=v.g[1]+(m+(d<<21&4294967295|d>>>11))&4294967295,v.g[2]=v.g[2]+m&4294967295,v.g[3]=v.g[3]+_&4294967295}s.prototype.u=function(v,u){u===void 0&&(u=v.length);for(var f=u-this.blockSize,p=this.B,m=this.h,_=0;_<u;){if(m==0)for(;_<=f;)a(this,v,_),_+=this.blockSize;if(typeof v=="string"){for(;_<u;)if(p[m++]=v.charCodeAt(_++),m==this.blockSize){a(this,p),m=0;break}}else for(;_<u;)if(p[m++]=v[_++],m==this.blockSize){a(this,p),m=0;break}}this.h=m,this.o+=u},s.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var u=1;u<v.length-8;++u)v[u]=0;var f=8*this.o;for(u=v.length-8;u<v.length;++u)v[u]=f&255,f/=256;for(this.u(v),v=Array(16),u=f=0;4>u;++u)for(var p=0;32>p;p+=8)v[f++]=this.g[u]>>>p&255;return v};function c(v,u){var f=g;return Object.prototype.hasOwnProperty.call(f,v)?f[v]:f[v]=u(v)}function h(v,u){this.h=u;for(var f=[],p=!0,m=v.length-1;0<=m;m--){var _=v[m]|0;p&&_==u||(f[m]=_,p=!1)}this.g=f}var g={};function w(v){return-128<=v&&128>v?c(v,function(u){return new h([u|0],0>u?-1:0)}):new h([v|0],0>v?-1:0)}function E(v){if(isNaN(v)||!isFinite(v))return A;if(0>v)return D(E(-v));for(var u=[],f=1,p=0;v>=f;p++)u[p]=v/f|0,f*=4294967296;return new h(u,0)}function b(v,u){if(v.length==0)throw Error("number format error: empty string");if(u=u||10,2>u||36<u)throw Error("radix out of range: "+u);if(v.charAt(0)=="-")return D(b(v.substring(1),u));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=E(Math.pow(u,8)),p=A,m=0;m<v.length;m+=8){var _=Math.min(8,v.length-m),d=parseInt(v.substring(m,m+_),u);8>_?(_=E(Math.pow(u,_)),p=p.j(_).add(E(d))):(p=p.j(f),p=p.add(E(d)))}return p}var A=w(0),k=w(1),U=w(16777216);i=h.prototype,i.m=function(){if(M(this))return-D(this).m();for(var v=0,u=1,f=0;f<this.g.length;f++){var p=this.i(f);v+=(0<=p?p:4294967296+p)*u,u*=4294967296}return v},i.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(M(this))return"-"+D(this).toString(v);for(var u=E(Math.pow(v,6)),f=this,p="";;){var m=J(f,u).g;f=ne(f,m.j(u));var _=((0<f.g.length?f.g[0]:f.h)>>>0).toString(v);if(f=m,C(f))return _+p;for(;6>_.length;)_="0"+_;p=_+p}},i.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(var u=0;u<v.g.length;u++)if(v.g[u]!=0)return!1;return!0}function M(v){return v.h==-1}i.l=function(v){return v=ne(this,v),M(v)?-1:C(v)?0:1};function D(v){for(var u=v.g.length,f=[],p=0;p<u;p++)f[p]=~v.g[p];return new h(f,~v.h).add(k)}i.abs=function(){return M(this)?D(this):this},i.add=function(v){for(var u=Math.max(this.g.length,v.g.length),f=[],p=0,m=0;m<=u;m++){var _=p+(this.i(m)&65535)+(v.i(m)&65535),d=(_>>>16)+(this.i(m)>>>16)+(v.i(m)>>>16);p=d>>>16,_&=65535,d&=65535,f[m]=d<<16|_}return new h(f,f[f.length-1]&-2147483648?-1:0)};function ne(v,u){return v.add(D(u))}i.j=function(v){if(C(this)||C(v))return A;if(M(this))return M(v)?D(this).j(D(v)):D(D(this).j(v));if(M(v))return D(this.j(D(v)));if(0>this.l(U)&&0>v.l(U))return E(this.m()*v.m());for(var u=this.g.length+v.g.length,f=[],p=0;p<2*u;p++)f[p]=0;for(p=0;p<this.g.length;p++)for(var m=0;m<v.g.length;m++){var _=this.i(p)>>>16,d=this.i(p)&65535,ie=v.i(m)>>>16,Ye=v.i(m)&65535;f[2*p+2*m]+=d*Ye,G(f,2*p+2*m),f[2*p+2*m+1]+=_*Ye,G(f,2*p+2*m+1),f[2*p+2*m+1]+=d*ie,G(f,2*p+2*m+1),f[2*p+2*m+2]+=_*ie,G(f,2*p+2*m+2)}for(p=0;p<u;p++)f[p]=f[2*p+1]<<16|f[2*p];for(p=u;p<2*u;p++)f[p]=0;return new h(f,0)};function G(v,u){for(;(v[u]&65535)!=v[u];)v[u+1]+=v[u]>>>16,v[u]&=65535,u++}function j(v,u){this.g=v,this.h=u}function J(v,u){if(C(u))throw Error("division by zero");if(C(v))return new j(A,A);if(M(v))return u=J(D(v),u),new j(D(u.g),D(u.h));if(M(u))return u=J(v,D(u)),new j(D(u.g),u.h);if(30<v.g.length){if(M(v)||M(u))throw Error("slowDivide_ only works with positive integers.");for(var f=k,p=u;0>=p.l(v);)f=Ce(f),p=Ce(p);var m=q(f,1),_=q(p,1);for(p=q(p,2),f=q(f,2);!C(p);){var d=_.add(p);0>=d.l(v)&&(m=m.add(f),_=d),p=q(p,1),f=q(f,1)}return u=ne(v,m.j(u)),new j(m,u)}for(m=A;0<=v.l(u);){for(f=Math.max(1,Math.floor(v.m()/u.m())),p=Math.ceil(Math.log(f)/Math.LN2),p=48>=p?1:Math.pow(2,p-48),_=E(f),d=_.j(u);M(d)||0<d.l(v);)f-=p,_=E(f),d=_.j(u);C(_)&&(_=k),m=m.add(_),v=ne(v,d)}return new j(m,v)}i.A=function(v){return J(this,v).h},i.and=function(v){for(var u=Math.max(this.g.length,v.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)&v.i(p);return new h(f,this.h&v.h)},i.or=function(v){for(var u=Math.max(this.g.length,v.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)|v.i(p);return new h(f,this.h|v.h)},i.xor=function(v){for(var u=Math.max(this.g.length,v.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)^v.i(p);return new h(f,this.h^v.h)};function Ce(v){for(var u=v.g.length+1,f=[],p=0;p<u;p++)f[p]=v.i(p)<<1|v.i(p-1)>>>31;return new h(f,v.h)}function q(v,u){var f=u>>5;u%=32;for(var p=v.g.length-f,m=[],_=0;_<p;_++)m[_]=0<u?v.i(_+f)>>>u|v.i(_+f+1)<<32-u:v.i(_+f);return new h(m,v.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,oh=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=E,h.fromString=b,sh=h}).apply(typeof Ur<"u"?Ur:typeof self<"u"?self:typeof window<"u"?window:{});var qt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ah,ch,lh,hh,uh,dh,fh,ph;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,r,o){return t==Array.prototype||t==Object.prototype||(t[r]=o.value),t};function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof qt=="object"&&qt];for(var r=0;r<t.length;++r){var o=t[r];if(o&&o.Math==Math)return o}throw Error("Cannot find global object")}var s=n(this);function a(t,r){if(r)e:{var o=s;t=t.split(".");for(var l=0;l<t.length-1;l++){var y=t[l];if(!(y in o))break e;o=o[y]}t=t[t.length-1],l=o[t],r=r(l),r!=l&&r!=null&&e(o,t,{configurable:!0,writable:!0,value:r})}}function c(t,r){t instanceof String&&(t+="");var o=0,l=!1,y={next:function(){if(!l&&o<t.length){var I=o++;return{value:r(I,t[I]),done:!1}}return l=!0,{done:!0,value:void 0}}};return y[Symbol.iterator]=function(){return y},y}a("Array.prototype.values",function(t){return t||function(){return c(this,function(r,o){return o})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},g=this||self;function w(t){var r=typeof t;return r=r!="object"?r:t?Array.isArray(t)?"array":r:"null",r=="array"||r=="object"&&typeof t.length=="number"}function E(t){var r=typeof t;return r=="object"&&t!=null||r=="function"}function b(t,r,o){return t.call.apply(t.bind,arguments)}function A(t,r,o){if(!t)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(y,l),t.apply(r,y)}}return function(){return t.apply(r,arguments)}}function k(t,r,o){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:A,k.apply(null,arguments)}function U(t,r){var o=Array.prototype.slice.call(arguments,1);return function(){var l=o.slice();return l.push.apply(l,arguments),t.apply(this,l)}}function C(t,r){function o(){}o.prototype=r.prototype,t.aa=r.prototype,t.prototype=new o,t.prototype.constructor=t,t.Qb=function(l,y,I){for(var T=Array(arguments.length-2),P=2;P<arguments.length;P++)T[P-2]=arguments[P];return r.prototype[y].apply(l,T)}}function M(t){const r=t.length;if(0<r){const o=Array(r);for(let l=0;l<r;l++)o[l]=t[l];return o}return[]}function D(t,r){for(let o=1;o<arguments.length;o++){const l=arguments[o];if(w(l)){const y=t.length||0,I=l.length||0;t.length=y+I;for(let T=0;T<I;T++)t[y+T]=l[T]}else t.push(l)}}class ne{constructor(r,o){this.i=r,this.j=o,this.h=0,this.g=null}get(){let r;return 0<this.h?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function G(t){return/^[\s\xa0]*$/.test(t)}function j(){var t=g.navigator;return t&&(t=t.userAgent)?t:""}function J(t){return J[" "](t),t}J[" "]=function(){};var Ce=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function q(t,r,o){for(const l in t)r.call(o,t[l],l,t)}function v(t,r){for(const o in t)r.call(void 0,t[o],o,t)}function u(t){const r={};for(const o in t)r[o]=t[o];return r}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function p(t,r){let o,l;for(let y=1;y<arguments.length;y++){l=arguments[y];for(o in l)t[o]=l[o];for(let I=0;I<f.length;I++)o=f[I],Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o])}}function m(t){var r=1;t=t.split(":");const o=[];for(;0<r&&t.length;)o.push(t.shift()),r--;return t.length&&o.push(t.join(":")),o}function _(t){g.setTimeout(()=>{throw t},0)}function d(){var t=pn;let r=null;return t.g&&(r=t.g,t.g=t.g.next,t.g||(t.h=null),r.next=null),r}class ie{constructor(){this.h=this.g=null}add(r,o){const l=Ye.get();l.set(r,o),this.h?this.h.next=l:this.g=l,this.h=l}}var Ye=new ne(()=>new Gs,t=>t.reset());class Gs{constructor(){this.next=this.g=this.h=null}set(r,o){this.h=r,this.g=o,this.next=null}reset(){this.next=this.g=this.h=null}}let Qe,Ze=!1,pn=new ie,hi=()=>{const t=g.Promise.resolve(void 0);Qe=()=>{t.then(Ks)}};var Ks=()=>{for(var t;t=d();){try{t.h.call(t.g)}catch(o){_(o)}var r=Ye;r.j(t),100>r.h&&(r.h++,t.next=r.g,r.g=t)}Ze=!1};function pe(){this.s=this.s,this.C=this.C}pe.prototype.s=!1,pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function F(t,r){this.type=t,this.g=this.target=r,this.defaultPrevented=!1}F.prototype.h=function(){this.defaultPrevented=!0};var Js=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var t=!1,r=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const o=()=>{};g.addEventListener("test",o,r),g.removeEventListener("test",o,r)}catch{}return t}();function et(t,r){if(F.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var o=this.type=t.type,l=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=r,r=t.relatedTarget){if(Ce){e:{try{J(r.nodeName);var y=!0;break e}catch{}y=!1}y||(r=null)}}else o=="mouseover"?r=t.fromElement:o=="mouseout"&&(r=t.toElement);this.relatedTarget=r,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Xs[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&et.aa.h.call(this)}}C(et,F);var Xs={2:"touch",3:"pen",4:"mouse"};et.prototype.h=function(){et.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var At="closure_listenable_"+(1e6*Math.random()|0),Ys=0;function Qs(t,r,o,l,y){this.listener=t,this.proxy=null,this.src=r,this.type=o,this.capture=!!l,this.ha=y,this.key=++Ys,this.da=this.fa=!1}function Ct(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function kt(t){this.src=t,this.g={},this.h=0}kt.prototype.add=function(t,r,o,l,y){var I=t.toString();t=this.g[I],t||(t=this.g[I]=[],this.h++);var T=mn(t,r,l,y);return-1<T?(r=t[T],o||(r.fa=!1)):(r=new Qs(r,this.src,I,!!l,y),r.fa=o,t.push(r)),r};function gn(t,r){var o=r.type;if(o in t.g){var l=t.g[o],y=Array.prototype.indexOf.call(l,r,void 0),I;(I=0<=y)&&Array.prototype.splice.call(l,y,1),I&&(Ct(r),t.g[o].length==0&&(delete t.g[o],t.h--))}}function mn(t,r,o,l){for(var y=0;y<t.length;++y){var I=t[y];if(!I.da&&I.listener==r&&I.capture==!!o&&I.ha==l)return y}return-1}var vn="closure_lm_"+(1e6*Math.random()|0),yn={};function ui(t,r,o,l,y){if(Array.isArray(r)){for(var I=0;I<r.length;I++)ui(t,r[I],o,l,y);return null}return o=pi(o),t&&t[At]?t.K(r,o,E(l)?!!l.capture:!1,y):Zs(t,r,o,!1,l,y)}function Zs(t,r,o,l,y,I){if(!r)throw Error("Invalid event type");var T=E(y)?!!y.capture:!!y,P=wn(t);if(P||(t[vn]=P=new kt(t)),o=P.add(r,o,l,T,I),o.proxy)return o;if(l=eo(),o.proxy=l,l.src=t,l.listener=o,t.addEventListener)Js||(y=T),y===void 0&&(y=!1),t.addEventListener(r.toString(),l,y);else if(t.attachEvent)t.attachEvent(fi(r.toString()),l);else if(t.addListener&&t.removeListener)t.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return o}function eo(){function t(o){return r.call(t.src,t.listener,o)}const r=to;return t}function di(t,r,o,l,y){if(Array.isArray(r))for(var I=0;I<r.length;I++)di(t,r[I],o,l,y);else l=E(l)?!!l.capture:!!l,o=pi(o),t&&t[At]?(t=t.i,r=String(r).toString(),r in t.g&&(I=t.g[r],o=mn(I,o,l,y),-1<o&&(Ct(I[o]),Array.prototype.splice.call(I,o,1),I.length==0&&(delete t.g[r],t.h--)))):t&&(t=wn(t))&&(r=t.g[r.toString()],t=-1,r&&(t=mn(r,o,l,y)),(o=-1<t?r[t]:null)&&_n(o))}function _n(t){if(typeof t!="number"&&t&&!t.da){var r=t.src;if(r&&r[At])gn(r.i,t);else{var o=t.type,l=t.proxy;r.removeEventListener?r.removeEventListener(o,l,t.capture):r.detachEvent?r.detachEvent(fi(o),l):r.addListener&&r.removeListener&&r.removeListener(l),(o=wn(r))?(gn(o,t),o.h==0&&(o.src=null,r[vn]=null)):Ct(t)}}}function fi(t){return t in yn?yn[t]:yn[t]="on"+t}function to(t,r){if(t.da)t=!0;else{r=new et(r,this);var o=t.listener,l=t.ha||t.src;t.fa&&_n(t),t=o.call(l,r)}return t}function wn(t){return t=t[vn],t instanceof kt?t:null}var In="__closure_events_fn_"+(1e9*Math.random()>>>0);function pi(t){return typeof t=="function"?t:(t[In]||(t[In]=function(r){return t.handleEvent(r)}),t[In])}function H(){pe.call(this),this.i=new kt(this),this.M=this,this.F=null}C(H,pe),H.prototype[At]=!0,H.prototype.removeEventListener=function(t,r,o,l){di(this,t,r,o,l)};function V(t,r){var o,l=t.F;if(l)for(o=[];l;l=l.F)o.push(l);if(t=t.M,l=r.type||r,typeof r=="string")r=new F(r,t);else if(r instanceof F)r.target=r.target||t;else{var y=r;r=new F(l,t),p(r,y)}if(y=!0,o)for(var I=o.length-1;0<=I;I--){var T=r.g=o[I];y=Rt(T,l,!0,r)&&y}if(T=r.g=t,y=Rt(T,l,!0,r)&&y,y=Rt(T,l,!1,r)&&y,o)for(I=0;I<o.length;I++)T=r.g=o[I],y=Rt(T,l,!1,r)&&y}H.prototype.N=function(){if(H.aa.N.call(this),this.i){var t=this.i,r;for(r in t.g){for(var o=t.g[r],l=0;l<o.length;l++)Ct(o[l]);delete t.g[r],t.h--}}this.F=null},H.prototype.K=function(t,r,o,l){return this.i.add(String(t),r,!1,o,l)},H.prototype.L=function(t,r,o,l){return this.i.add(String(t),r,!0,o,l)};function Rt(t,r,o,l){if(r=t.i.g[String(r)],!r)return!0;r=r.concat();for(var y=!0,I=0;I<r.length;++I){var T=r[I];if(T&&!T.da&&T.capture==o){var P=T.listener,x=T.ha||T.src;T.fa&&gn(t.i,T),y=P.call(x,l)!==!1&&y}}return y&&!l.defaultPrevented}function gi(t,r,o){if(typeof t=="function")o&&(t=k(t,o));else if(t&&typeof t.handleEvent=="function")t=k(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(r)?-1:g.setTimeout(t,r||0)}function mi(t){t.g=gi(()=>{t.g=null,t.i&&(t.i=!1,mi(t))},t.l);const r=t.h;t.h=null,t.m.apply(null,r)}class no extends pe{constructor(r,o){super(),this.m=r,this.l=o,this.h=null,this.i=!1,this.g=null}j(r){this.h=arguments,this.g?this.i=!0:mi(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(t){pe.call(this),this.h=t,this.g={}}C(tt,pe);var vi=[];function yi(t){q(t.g,function(r,o){this.g.hasOwnProperty(o)&&_n(r)},t),t.g={}}tt.prototype.N=function(){tt.aa.N.call(this),yi(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var En=g.JSON.stringify,io=g.JSON.parse,ro=class{stringify(t){return g.JSON.stringify(t,void 0)}parse(t){return g.JSON.parse(t,void 0)}};function Tn(){}Tn.prototype.h=null;function _i(t){return t.h||(t.h=t.i())}function wi(){}var nt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sn(){F.call(this,"d")}C(Sn,F);function bn(){F.call(this,"c")}C(bn,F);var ke={},Ii=null;function Pt(){return Ii=Ii||new H}ke.La="serverreachability";function Ei(t){F.call(this,ke.La,t)}C(Ei,F);function it(t){const r=Pt();V(r,new Ei(r))}ke.STAT_EVENT="statevent";function Ti(t,r){F.call(this,ke.STAT_EVENT,t),this.stat=r}C(Ti,F);function W(t){const r=Pt();V(r,new Ti(r,t))}ke.Ma="timingevent";function Si(t,r){F.call(this,ke.Ma,t),this.size=r}C(Si,F);function rt(t,r){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){t()},r)}function st(){this.g=!0}st.prototype.xa=function(){this.g=!1};function so(t,r,o,l,y,I){t.info(function(){if(t.g)if(I)for(var T="",P=I.split("&"),x=0;x<P.length;x++){var R=P[x].split("=");if(1<R.length){var B=R[0];R=R[1];var $=B.split("_");T=2<=$.length&&$[1]=="type"?T+(B+"="+R+"&"):T+(B+"=redacted&")}}else T=null;else T=I;return"XMLHTTP REQ ("+l+") [attempt "+y+"]: "+r+`
`+o+`
`+T})}function oo(t,r,o,l,y,I,T){t.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+y+"]: "+r+`
`+o+`
`+I+" "+T})}function He(t,r,o,l){t.info(function(){return"XMLHTTP TEXT ("+r+"): "+co(t,o)+(l?" "+l:"")})}function ao(t,r){t.info(function(){return"TIMEOUT: "+r})}st.prototype.info=function(){};function co(t,r){if(!t.g)return r;if(!r)return null;try{var o=JSON.parse(r);if(o){for(t=0;t<o.length;t++)if(Array.isArray(o[t])){var l=o[t];if(!(2>l.length)){var y=l[1];if(Array.isArray(y)&&!(1>y.length)){var I=y[0];if(I!="noop"&&I!="stop"&&I!="close")for(var T=1;T<y.length;T++)y[T]=""}}}}return En(o)}catch{return r}}var Ot={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},An;function Nt(){}C(Nt,Tn),Nt.prototype.g=function(){return new XMLHttpRequest},Nt.prototype.i=function(){return{}},An=new Nt;function ge(t,r,o,l){this.j=t,this.i=r,this.l=o,this.R=l||1,this.U=new tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ai}function Ai(){this.i=null,this.g="",this.h=!1}var Ci={},Cn={};function kn(t,r,o){t.L=1,t.v=Ut(re(r)),t.m=o,t.P=!0,ki(t,null)}function ki(t,r){t.F=Date.now(),Dt(t),t.A=re(t.v);var o=t.A,l=t.R;Array.isArray(l)||(l=[String(l)]),$i(o.i,"t",l),t.C=0,o=t.j.J,t.h=new Ai,t.g=or(t.j,o?r:null,!t.m),0<t.O&&(t.M=new no(k(t.Y,t,t.g),t.O)),r=t.U,o=t.g,l=t.ca;var y="readystatechange";Array.isArray(y)||(y&&(vi[0]=y.toString()),y=vi);for(var I=0;I<y.length;I++){var T=ui(o,y[I],l||r.handleEvent,!1,r.h||r);if(!T)break;r.g[T.key]=T}r=t.H?u(t.H):{},t.m?(t.u||(t.u="POST"),r["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,r)):(t.u="GET",t.g.ea(t.A,t.u,null,r)),it(),so(t.i,t.u,t.A,t.l,t.R,t.m)}ge.prototype.ca=function(t){t=t.target;const r=this.M;r&&se(t)==3?r.j():this.Y(t)},ge.prototype.Y=function(t){try{if(t==this.g)e:{const $=se(this.g);var r=this.g.Ba();const Ve=this.g.Z();if(!(3>$)&&($!=3||this.g&&(this.h.h||this.g.oa()||Ji(this.g)))){this.J||$!=4||r==7||(r==8||0>=Ve?it(3):it(2)),Rn(this);var o=this.g.Z();this.X=o;t:if(Ri(this)){var l=Ji(this.g);t="";var y=l.length,I=se(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Re(this),ot(this);var T="";break t}this.h.i=new g.TextDecoder}for(r=0;r<y;r++)this.h.h=!0,t+=this.h.i.decode(l[r],{stream:!(I&&r==y-1)});l.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=o==200,oo(this.i,this.u,this.A,this.l,this.R,$,o),this.o){if(this.T&&!this.K){t:{if(this.g){var P,x=this.g;if((P=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(P)){var R=P;break t}}R=null}if(o=R)He(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pn(this,o);else{this.o=!1,this.s=3,W(12),Re(this),ot(this);break e}}if(this.P){o=!0;let X;for(;!this.J&&this.C<T.length;)if(X=lo(this,T),X==Cn){$==4&&(this.s=4,W(14),o=!1),He(this.i,this.l,null,"[Incomplete Response]");break}else if(X==Ci){this.s=4,W(15),He(this.i,this.l,T,"[Invalid Chunk]"),o=!1;break}else He(this.i,this.l,X,null),Pn(this,X);if(Ri(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$!=4||T.length!=0||this.h.h||(this.s=1,W(16),o=!1),this.o=this.o&&o,!o)He(this.i,this.l,T,"[Invalid Chunked Response]"),Re(this),ot(this);else if(0<T.length&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.ba&&!B.M&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),Un(B),B.M=!0,W(11))}}else He(this.i,this.l,T,null),Pn(this,T);$==4&&Re(this),this.o&&!this.J&&($==4?nr(this.j,this):(this.o=!1,Dt(this)))}else Co(this.g),o==400&&0<T.indexOf("Unknown SID")?(this.s=3,W(12)):(this.s=0,W(13)),Re(this),ot(this)}}}catch{}finally{}};function Ri(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function lo(t,r){var o=t.C,l=r.indexOf(`
`,o);return l==-1?Cn:(o=Number(r.substring(o,l)),isNaN(o)?Ci:(l+=1,l+o>r.length?Cn:(r=r.slice(l,l+o),t.C=l+o,r)))}ge.prototype.cancel=function(){this.J=!0,Re(this)};function Dt(t){t.S=Date.now()+t.I,Pi(t,t.I)}function Pi(t,r){if(t.B!=null)throw Error("WatchDog timer not null");t.B=rt(k(t.ba,t),r)}function Rn(t){t.B&&(g.clearTimeout(t.B),t.B=null)}ge.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(ao(this.i,this.A),this.L!=2&&(it(),W(17)),Re(this),this.s=2,ot(this)):Pi(this,this.S-t)};function ot(t){t.j.G==0||t.J||nr(t.j,t)}function Re(t){Rn(t);var r=t.M;r&&typeof r.ma=="function"&&r.ma(),t.M=null,yi(t.U),t.g&&(r=t.g,t.g=null,r.abort(),r.ma())}function Pn(t,r){try{var o=t.j;if(o.G!=0&&(o.g==t||On(o.h,t))){if(!t.K&&On(o.h,t)&&o.G==3){try{var l=o.Da.g.parse(r)}catch{l=null}if(Array.isArray(l)&&l.length==3){var y=l;if(y[0]==0){e:if(!o.u){if(o.g)if(o.g.F+3e3<t.F)$t(o),Ht(o);else break e;Mn(o),W(18)}}else o.za=y[1],0<o.za-o.T&&37500>y[2]&&o.F&&o.v==0&&!o.C&&(o.C=rt(k(o.Za,o),6e3));if(1>=Di(o.h)&&o.ca){try{o.ca()}catch{}o.ca=void 0}}else Oe(o,11)}else if((t.K||o.g==t)&&$t(o),!G(r))for(y=o.Da.g.parse(r),r=0;r<y.length;r++){let R=y[r];if(o.T=R[0],R=R[1],o.G==2)if(R[0]=="c"){o.K=R[1],o.ia=R[2];const B=R[3];B!=null&&(o.la=B,o.j.info("VER="+o.la));const $=R[4];$!=null&&(o.Aa=$,o.j.info("SVER="+o.Aa));const Ve=R[5];Ve!=null&&typeof Ve=="number"&&0<Ve&&(l=1.5*Ve,o.L=l,o.j.info("backChannelRequestTimeoutMs_="+l)),l=o;const X=t.g;if(X){const Wt=X.g?X.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wt){var I=l.h;I.g||Wt.indexOf("spdy")==-1&&Wt.indexOf("quic")==-1&&Wt.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Nn(I,I.h),I.h=null))}if(l.D){const xn=X.g?X.g.getResponseHeader("X-HTTP-Session-Id"):null;xn&&(l.ya=xn,N(l.I,l.D,xn))}}o.G=3,o.l&&o.l.ua(),o.ba&&(o.R=Date.now()-t.F,o.j.info("Handshake RTT: "+o.R+"ms")),l=o;var T=t;if(l.qa=sr(l,l.J?l.ia:null,l.W),T.K){Li(l.h,T);var P=T,x=l.L;x&&(P.I=x),P.B&&(Rn(P),Dt(P)),l.g=T}else er(l);0<o.i.length&&Bt(o)}else R[0]!="stop"&&R[0]!="close"||Oe(o,7);else o.G==3&&(R[0]=="stop"||R[0]=="close"?R[0]=="stop"?Oe(o,7):Ln(o):R[0]!="noop"&&o.l&&o.l.ta(R),o.v=0)}}it(4)}catch{}}var ho=class{constructor(t,r){this.g=t,this.map=r}};function Oi(t){this.l=t||10,g.PerformanceNavigationTiming?(t=g.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ni(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Di(t){return t.h?1:t.g?t.g.size:0}function On(t,r){return t.h?t.h==r:t.g?t.g.has(r):!1}function Nn(t,r){t.g?t.g.add(r):t.h=r}function Li(t,r){t.h&&t.h==r?t.h=null:t.g&&t.g.has(r)&&t.g.delete(r)}Oi.prototype.cancel=function(){if(this.i=Mi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Mi(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let r=t.i;for(const o of t.g.values())r=r.concat(o.D);return r}return M(t.i)}function uo(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(w(t)){for(var r=[],o=t.length,l=0;l<o;l++)r.push(t[l]);return r}r=[],o=0;for(l in t)r[o++]=t[l];return r}function fo(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(w(t)||typeof t=="string"){var r=[];t=t.length;for(var o=0;o<t;o++)r.push(o);return r}r=[],o=0;for(const l in t)r[o++]=l;return r}}}function Ui(t,r){if(t.forEach&&typeof t.forEach=="function")t.forEach(r,void 0);else if(w(t)||typeof t=="string")Array.prototype.forEach.call(t,r,void 0);else for(var o=fo(t),l=uo(t),y=l.length,I=0;I<y;I++)r.call(void 0,l[I],o&&o[I],t)}var xi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function po(t,r){if(t){t=t.split("&");for(var o=0;o<t.length;o++){var l=t[o].indexOf("="),y=null;if(0<=l){var I=t[o].substring(0,l);y=t[o].substring(l+1)}else I=t[o];r(I,y?decodeURIComponent(y.replace(/\+/g," ")):"")}}}function Pe(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Pe){this.h=t.h,Lt(this,t.j),this.o=t.o,this.g=t.g,Mt(this,t.s),this.l=t.l;var r=t.i,o=new lt;o.i=r.i,r.g&&(o.g=new Map(r.g),o.h=r.h),ji(this,o),this.m=t.m}else t&&(r=String(t).match(xi))?(this.h=!1,Lt(this,r[1]||"",!0),this.o=at(r[2]||""),this.g=at(r[3]||"",!0),Mt(this,r[4]),this.l=at(r[5]||"",!0),ji(this,r[6]||"",!0),this.m=at(r[7]||"")):(this.h=!1,this.i=new lt(null,this.h))}Pe.prototype.toString=function(){var t=[],r=this.j;r&&t.push(ct(r,Fi,!0),":");var o=this.g;return(o||r=="file")&&(t.push("//"),(r=this.o)&&t.push(ct(r,Fi,!0),"@"),t.push(encodeURIComponent(String(o)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o=this.s,o!=null&&t.push(":",String(o))),(o=this.l)&&(this.g&&o.charAt(0)!="/"&&t.push("/"),t.push(ct(o,o.charAt(0)=="/"?vo:mo,!0))),(o=this.i.toString())&&t.push("?",o),(o=this.m)&&t.push("#",ct(o,_o)),t.join("")};function re(t){return new Pe(t)}function Lt(t,r,o){t.j=o?at(r,!0):r,t.j&&(t.j=t.j.replace(/:$/,""))}function Mt(t,r){if(r){if(r=Number(r),isNaN(r)||0>r)throw Error("Bad port number "+r);t.s=r}else t.s=null}function ji(t,r,o){r instanceof lt?(t.i=r,wo(t.i,t.h)):(o||(r=ct(r,yo)),t.i=new lt(r,t.h))}function N(t,r,o){t.i.set(r,o)}function Ut(t){return N(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function at(t,r){return t?r?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ct(t,r,o){return typeof t=="string"?(t=encodeURI(t).replace(r,go),o&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function go(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Fi=/[#\/\?@]/g,mo=/[#\?:]/g,vo=/[#\?]/g,yo=/[#\?@]/g,_o=/#/g;function lt(t,r){this.h=this.g=null,this.i=t||null,this.j=!!r}function me(t){t.g||(t.g=new Map,t.h=0,t.i&&po(t.i,function(r,o){t.add(decodeURIComponent(r.replace(/\+/g," ")),o)}))}i=lt.prototype,i.add=function(t,r){me(this),this.i=null,t=Be(this,t);var o=this.g.get(t);return o||this.g.set(t,o=[]),o.push(r),this.h+=1,this};function Hi(t,r){me(t),r=Be(t,r),t.g.has(r)&&(t.i=null,t.h-=t.g.get(r).length,t.g.delete(r))}function Bi(t,r){return me(t),r=Be(t,r),t.g.has(r)}i.forEach=function(t,r){me(this),this.g.forEach(function(o,l){o.forEach(function(y){t.call(r,y,l,this)},this)},this)},i.na=function(){me(this);const t=Array.from(this.g.values()),r=Array.from(this.g.keys()),o=[];for(let l=0;l<r.length;l++){const y=t[l];for(let I=0;I<y.length;I++)o.push(r[l])}return o},i.V=function(t){me(this);let r=[];if(typeof t=="string")Bi(this,t)&&(r=r.concat(this.g.get(Be(this,t))));else{t=Array.from(this.g.values());for(let o=0;o<t.length;o++)r=r.concat(t[o])}return r},i.set=function(t,r){return me(this),this.i=null,t=Be(this,t),Bi(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[r]),this.h+=1,this},i.get=function(t,r){return t?(t=this.V(t),0<t.length?String(t[0]):r):r};function $i(t,r,o){Hi(t,r),0<o.length&&(t.i=null,t.g.set(Be(t,r),M(o)),t.h+=o.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],r=Array.from(this.g.keys());for(var o=0;o<r.length;o++){var l=r[o];const I=encodeURIComponent(String(l)),T=this.V(l);for(l=0;l<T.length;l++){var y=I;T[l]!==""&&(y+="="+encodeURIComponent(String(T[l]))),t.push(y)}}return this.i=t.join("&")};function Be(t,r){return r=String(r),t.j&&(r=r.toLowerCase()),r}function wo(t,r){r&&!t.j&&(me(t),t.i=null,t.g.forEach(function(o,l){var y=l.toLowerCase();l!=y&&(Hi(this,l),$i(this,y,o))},t)),t.j=r}function Io(t,r){const o=new st;if(g.Image){const l=new Image;l.onload=U(ve,o,"TestLoadImage: loaded",!0,r,l),l.onerror=U(ve,o,"TestLoadImage: error",!1,r,l),l.onabort=U(ve,o,"TestLoadImage: abort",!1,r,l),l.ontimeout=U(ve,o,"TestLoadImage: timeout",!1,r,l),g.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=t}else r(!1)}function Eo(t,r){const o=new st,l=new AbortController,y=setTimeout(()=>{l.abort(),ve(o,"TestPingServer: timeout",!1,r)},1e4);fetch(t,{signal:l.signal}).then(I=>{clearTimeout(y),I.ok?ve(o,"TestPingServer: ok",!0,r):ve(o,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(y),ve(o,"TestPingServer: error",!1,r)})}function ve(t,r,o,l,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),l(o)}catch{}}function To(){this.g=new ro}function So(t,r,o){const l=o||"";try{Ui(t,function(y,I){let T=y;E(y)&&(T=En(y)),r.push(l+I+"="+encodeURIComponent(T))})}catch(y){throw r.push(l+"type="+encodeURIComponent("_badmap")),y}}function xt(t){this.l=t.Ub||null,this.j=t.eb||!1}C(xt,Tn),xt.prototype.g=function(){return new jt(this.l,this.j)},xt.prototype.i=function(t){return function(){return t}}({});function jt(t,r){H.call(this),this.D=t,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(jt,H),i=jt.prototype,i.open=function(t,r){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=r,this.readyState=1,ut(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const r={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(r.body=t),(this.D||g).fetch(new Request(this.A,r)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ht(this)),this.readyState=0},i.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ut(this)),this.g&&(this.readyState=3,ut(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vi(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vi(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}i.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var r=t.value?t.value:new Uint8Array(0);(r=this.v.decode(r,{stream:!t.done}))&&(this.response=this.responseText+=r)}t.done?ht(this):ut(this),this.readyState==3&&Vi(this)}},i.Ra=function(t){this.g&&(this.response=this.responseText=t,ht(this))},i.Qa=function(t){this.g&&(this.response=t,ht(this))},i.ga=function(){this.g&&ht(this)};function ht(t){t.readyState=4,t.l=null,t.j=null,t.v=null,ut(t)}i.setRequestHeader=function(t,r){this.u.append(t,r)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],r=this.h.entries();for(var o=r.next();!o.done;)o=o.value,t.push(o[0]+": "+o[1]),o=r.next();return t.join(`\r
`)};function ut(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(jt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Wi(t){let r="";return q(t,function(o,l){r+=l,r+=":",r+=o,r+=`\r
`}),r}function Dn(t,r,o){e:{for(l in o){var l=!1;break e}l=!0}l||(o=Wi(o),typeof t=="string"?o!=null&&encodeURIComponent(String(o)):N(t,r,o))}function L(t){H.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(L,H);var bo=/^https?$/i,Ao=["POST","PUT"];i=L.prototype,i.Ha=function(t){this.J=t},i.ea=function(t,r,o,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);r=r?r.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():An.g(),this.v=this.o?_i(this.o):_i(An),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(r,String(t),!0),this.B=!1}catch(I){zi(this,I);return}if(t=o||"",o=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var y in l)o.set(y,l[y]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const I of l.keys())o.set(I,l.get(I));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(o.keys()).find(I=>I.toLowerCase()=="content-type"),y=g.FormData&&t instanceof g.FormData,!(0<=Array.prototype.indexOf.call(Ao,r,void 0))||l||y||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,T]of o)this.g.setRequestHeader(I,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ki(this),this.u=!0,this.g.send(t),this.u=!1}catch(I){zi(this,I)}};function zi(t,r){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=r,t.m=5,qi(t),Ft(t)}function qi(t){t.A||(t.A=!0,V(t,"complete"),V(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,V(this,"complete"),V(this,"abort"),Ft(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ft(this,!0)),L.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Gi(this):this.bb())},i.bb=function(){Gi(this)};function Gi(t){if(t.h&&typeof h<"u"&&(!t.v[1]||se(t)!=4||t.Z()!=2)){if(t.u&&se(t)==4)gi(t.Ea,0,t);else if(V(t,"readystatechange"),se(t)==4){t.h=!1;try{const T=t.Z();e:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}var o;if(!(o=r)){var l;if(l=T===0){var y=String(t.D).match(xi)[1]||null;!y&&g.self&&g.self.location&&(y=g.self.location.protocol.slice(0,-1)),l=!bo.test(y?y.toLowerCase():"")}o=l}if(o)V(t,"complete"),V(t,"success");else{t.m=6;try{var I=2<se(t)?t.g.statusText:""}catch{I=""}t.l=I+" ["+t.Z()+"]",qi(t)}}finally{Ft(t)}}}}function Ft(t,r){if(t.g){Ki(t);const o=t.g,l=t.v[0]?()=>{}:null;t.g=null,t.v=null,r||V(t,"ready");try{o.onreadystatechange=l}catch{}}}function Ki(t){t.I&&(g.clearTimeout(t.I),t.I=null)}i.isActive=function(){return!!this.g};function se(t){return t.g?t.g.readyState:0}i.Z=function(){try{return 2<se(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(t){if(this.g){var r=this.g.responseText;return t&&r.indexOf(t)==0&&(r=r.substring(t.length)),io(r)}};function Ji(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Co(t){const r={};t=(t.g&&2<=se(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<t.length;l++){if(G(t[l]))continue;var o=m(t[l]);const y=o[0];if(o=o[1],typeof o!="string")continue;o=o.trim();const I=r[y]||[];r[y]=I,I.push(o)}v(r,function(l){return l.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function dt(t,r,o){return o&&o.internalChannelParams&&o.internalChannelParams[t]||r}function Xi(t){this.Aa=0,this.i=[],this.j=new st,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=dt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=dt("baseRetryDelayMs",5e3,t),this.cb=dt("retryDelaySeedMs",1e4,t),this.Wa=dt("forwardChannelMaxRetries",2,t),this.wa=dt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Oi(t&&t.concurrentRequestLimit),this.Da=new To,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Xi.prototype,i.la=8,i.G=1,i.connect=function(t,r,o,l){W(0),this.W=t,this.H=r||{},o&&l!==void 0&&(this.H.OSID=o,this.H.OAID=l),this.F=this.X,this.I=sr(this,null,this.W),Bt(this)};function Ln(t){if(Yi(t),t.G==3){var r=t.U++,o=re(t.I);if(N(o,"SID",t.K),N(o,"RID",r),N(o,"TYPE","terminate"),ft(t,o),r=new ge(t,t.j,r),r.L=2,r.v=Ut(re(o)),o=!1,g.navigator&&g.navigator.sendBeacon)try{o=g.navigator.sendBeacon(r.v.toString(),"")}catch{}!o&&g.Image&&(new Image().src=r.v,o=!0),o||(r.g=or(r.j,null),r.g.ea(r.v)),r.F=Date.now(),Dt(r)}rr(t)}function Ht(t){t.g&&(Un(t),t.g.cancel(),t.g=null)}function Yi(t){Ht(t),t.u&&(g.clearTimeout(t.u),t.u=null),$t(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&g.clearTimeout(t.s),t.s=null)}function Bt(t){if(!Ni(t.h)&&!t.s){t.s=!0;var r=t.Ga;Qe||hi(),Ze||(Qe(),Ze=!0),pn.add(r,t),t.B=0}}function ko(t,r){return Di(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=r.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=rt(k(t.Ga,t,r),ir(t,t.B)),t.B++,!0)}i.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const y=new ge(this,this.j,t);let I=this.o;if(this.S&&(I?(I=u(I),p(I,this.S)):I=this.S),this.m!==null||this.O||(y.H=I,I=null),this.P)e:{for(var r=0,o=0;o<this.i.length;o++){t:{var l=this.i[o];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break t}l=void 0}if(l===void 0)break;if(r+=l,4096<r){r=o;break e}if(r===4096||o===this.i.length-1){r=o+1;break e}}r=1e3}else r=1e3;r=Zi(this,y,r),o=re(this.I),N(o,"RID",t),N(o,"CVER",22),this.D&&N(o,"X-HTTP-Session-Id",this.D),ft(this,o),I&&(this.O?r="headers="+encodeURIComponent(String(Wi(I)))+"&"+r:this.m&&Dn(o,this.m,I)),Nn(this.h,y),this.Ua&&N(o,"TYPE","init"),this.P?(N(o,"$req",r),N(o,"SID","null"),y.T=!0,kn(y,o,null)):kn(y,o,r),this.G=2}}else this.G==3&&(t?Qi(this,t):this.i.length==0||Ni(this.h)||Qi(this))};function Qi(t,r){var o;r?o=r.l:o=t.U++;const l=re(t.I);N(l,"SID",t.K),N(l,"RID",o),N(l,"AID",t.T),ft(t,l),t.m&&t.o&&Dn(l,t.m,t.o),o=new ge(t,t.j,o,t.B+1),t.m===null&&(o.H=t.o),r&&(t.i=r.D.concat(t.i)),r=Zi(t,o,1e3),o.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Nn(t.h,o),kn(o,l,r)}function ft(t,r){t.H&&q(t.H,function(o,l){N(r,l,o)}),t.l&&Ui({},function(o,l){N(r,l,o)})}function Zi(t,r,o){o=Math.min(t.i.length,o);var l=t.l?k(t.l.Na,t.l,t):null;e:{var y=t.i;let I=-1;for(;;){const T=["count="+o];I==-1?0<o?(I=y[0].g,T.push("ofs="+I)):I=0:T.push("ofs="+I);let P=!0;for(let x=0;x<o;x++){let R=y[x].g;const B=y[x].map;if(R-=I,0>R)I=Math.max(0,y[x].g-100),P=!1;else try{So(B,T,"req"+R+"_")}catch{l&&l(B)}}if(P){l=T.join("&");break e}}}return t=t.i.splice(0,o),r.D=t,l}function er(t){if(!t.g&&!t.u){t.Y=1;var r=t.Fa;Qe||hi(),Ze||(Qe(),Ze=!0),pn.add(r,t),t.v=0}}function Mn(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=rt(k(t.Fa,t),ir(t,t.v)),t.v++,!0)}i.Fa=function(){if(this.u=null,tr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=rt(k(this.ab,this),t)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,W(10),Ht(this),tr(this))};function Un(t){t.A!=null&&(g.clearTimeout(t.A),t.A=null)}function tr(t){t.g=new ge(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var r=re(t.qa);N(r,"RID","rpc"),N(r,"SID",t.K),N(r,"AID",t.T),N(r,"CI",t.F?"0":"1"),!t.F&&t.ja&&N(r,"TO",t.ja),N(r,"TYPE","xmlhttp"),ft(t,r),t.m&&t.o&&Dn(r,t.m,t.o),t.L&&(t.g.I=t.L);var o=t.g;t=t.ia,o.L=1,o.v=Ut(re(r)),o.m=null,o.P=!0,ki(o,t)}i.Za=function(){this.C!=null&&(this.C=null,Ht(this),Mn(this),W(19))};function $t(t){t.C!=null&&(g.clearTimeout(t.C),t.C=null)}function nr(t,r){var o=null;if(t.g==r){$t(t),Un(t),t.g=null;var l=2}else if(On(t.h,r))o=r.D,Li(t.h,r),l=1;else return;if(t.G!=0){if(r.o)if(l==1){o=r.m?r.m.length:0,r=Date.now()-r.F;var y=t.B;l=Pt(),V(l,new Si(l,o)),Bt(t)}else er(t);else if(y=r.s,y==3||y==0&&0<r.X||!(l==1&&ko(t,r)||l==2&&Mn(t)))switch(o&&0<o.length&&(r=t.h,r.i=r.i.concat(o)),y){case 1:Oe(t,5);break;case 4:Oe(t,10);break;case 3:Oe(t,6);break;default:Oe(t,2)}}}function ir(t,r){let o=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(o*=2),o*r}function Oe(t,r){if(t.j.info("Error code "+r),r==2){var o=k(t.fb,t),l=t.Xa;const y=!l;l=new Pe(l||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||Lt(l,"https"),Ut(l),y?Io(l.toString(),o):Eo(l.toString(),o)}else W(2);t.G=0,t.l&&t.l.sa(r),rr(t),Yi(t)}i.fb=function(t){t?(this.j.info("Successfully pinged google.com"),W(2)):(this.j.info("Failed to ping google.com"),W(1))};function rr(t){if(t.G=0,t.ka=[],t.l){const r=Mi(t.h);(r.length!=0||t.i.length!=0)&&(D(t.ka,r),D(t.ka,t.i),t.h.i.length=0,M(t.i),t.i.length=0),t.l.ra()}}function sr(t,r,o){var l=o instanceof Pe?re(o):new Pe(o);if(l.g!="")r&&(l.g=r+"."+l.g),Mt(l,l.s);else{var y=g.location;l=y.protocol,r=r?r+"."+y.hostname:y.hostname,y=+y.port;var I=new Pe(null);l&&Lt(I,l),r&&(I.g=r),y&&Mt(I,y),o&&(I.l=o),l=I}return o=t.D,r=t.ya,o&&r&&N(l,o,r),N(l,"VER",t.la),ft(t,l),l}function or(t,r,o){if(r&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return r=t.Ca&&!t.pa?new L(new xt({eb:o})):new L(t.pa),r.Ha(t.J),r}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function ar(){}i=ar.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Vt(){}Vt.prototype.g=function(t,r){return new K(t,r)};function K(t,r){H.call(this),this.g=new Xi(r),this.l=t,this.h=r&&r.messageUrlParams||null,t=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(t?t["X-WebChannel-Content-Type"]=r.messageContentType:t={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.va&&(t?t["X-WebChannel-Client-Profile"]=r.va:t={"X-WebChannel-Client-Profile":r.va}),this.g.S=t,(t=r&&r.Sb)&&!G(t)&&(this.g.m=t),this.v=r&&r.supportsCrossDomainXhr||!1,this.u=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!G(r)&&(this.g.D=r,t=this.h,t!==null&&r in t&&(t=this.h,r in t&&delete t[r])),this.j=new $e(this)}C(K,H),K.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},K.prototype.close=function(){Ln(this.g)},K.prototype.o=function(t){var r=this.g;if(typeof t=="string"){var o={};o.__data__=t,t=o}else this.u&&(o={},o.__data__=En(t),t=o);r.i.push(new ho(r.Ya++,t)),r.G==3&&Bt(r)},K.prototype.N=function(){this.g.l=null,delete this.j,Ln(this.g),delete this.g,K.aa.N.call(this)};function cr(t){Sn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var r=t.__sm__;if(r){e:{for(const o in r){t=o;break e}t=void 0}(this.i=t)&&(t=this.i,r=r!==null&&t in r?r[t]:void 0),this.data=r}else this.data=t}C(cr,Sn);function lr(){bn.call(this),this.status=1}C(lr,bn);function $e(t){this.g=t}C($e,ar),$e.prototype.ua=function(){V(this.g,"a")},$e.prototype.ta=function(t){V(this.g,new cr(t))},$e.prototype.sa=function(t){V(this.g,new lr)},$e.prototype.ra=function(){V(this.g,"b")},Vt.prototype.createWebChannel=Vt.prototype.g,K.prototype.send=K.prototype.o,K.prototype.open=K.prototype.m,K.prototype.close=K.prototype.close,ph=function(){return new Vt},fh=function(){return Pt()},dh=ke,uh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ot.NO_ERROR=0,Ot.TIMEOUT=8,Ot.HTTP_ERROR=6,hh=Ot,bi.COMPLETE="complete",lh=bi,wi.EventType=nt,nt.OPEN="a",nt.CLOSE="b",nt.ERROR="c",nt.MESSAGE="d",H.prototype.listen=H.prototype.K,ch=wi,L.prototype.listenOnce=L.prototype.L,L.prototype.getLastError=L.prototype.Ka,L.prototype.getLastErrorCode=L.prototype.Ba,L.prototype.getStatus=L.prototype.Z,L.prototype.getResponseJson=L.prototype.Oa,L.prototype.getResponseText=L.prototype.oa,L.prototype.send=L.prototype.ea,L.prototype.setWithCredentials=L.prototype.Ha,ah=L}).apply(typeof qt<"u"?qt:typeof self<"u"?self:typeof window<"u"?window:{});var gh="firebase",mh="10.14.1";/**
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
 */Se(gh,mh,"app");const Rs="@firebase/installations",oi="0.6.9";/**
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
 */const Ps=1e4,Os=`w:${oi}`,Ns="FIS_v2",vh="https://firebaseinstallations.googleapis.com/v1",yh=60*60*1e3,_h="installations",wh="Installations";/**
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
 */const Ih={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},xe=new Je(_h,wh,Ih);function Ds(i){return i instanceof de&&i.code.includes("request-failed")}/**
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
 */function Ls({projectId:i}){return`${vh}/projects/${i}/installations`}function Ms(i){return{token:i.token,requestStatus:2,expiresIn:Th(i.expiresIn),creationTime:Date.now()}}async function Us(i,e){const s=(await e.json()).error;return xe.create("request-failed",{requestName:i,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function xs({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function Eh(i,{refreshToken:e}){const n=xs(i);return n.append("Authorization",Sh(e)),n}async function js(i){const e=await i();return e.status>=500&&e.status<600?i():e}function Th(i){return Number(i.replace("s","000"))}function Sh(i){return`${Ns} ${i}`}/**
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
 */async function bh({appConfig:i,heartbeatServiceProvider:e},{fid:n}){const s=Ls(i),a=xs(i),c=e.getImmediate({optional:!0});if(c){const E=await c.getHeartbeatsHeader();E&&a.append("x-firebase-client",E)}const h={fid:n,authVersion:Ns,appId:i.appId,sdkVersion:Os},g={method:"POST",headers:a,body:JSON.stringify(h)},w=await js(()=>fetch(s,g));if(w.ok){const E=await w.json();return{fid:E.fid||n,registrationStatus:2,refreshToken:E.refreshToken,authToken:Ms(E.authToken)}}else throw await Us("Create Installation",w)}/**
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
 */function Fs(i){return new Promise(e=>{setTimeout(e,i)})}/**
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
 */function Ah(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ch=/^[cdef][\w-]{21}$/,Xn="";function kh(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const n=Rh(i);return Ch.test(n)?n:Xn}catch{return Xn}}function Rh(i){return Ah(i).substr(0,22)}/**
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
 */function dn(i){return`${i.appName}!${i.appId}`}/**
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
 */const Hs=new Map;function Bs(i,e){const n=dn(i);$s(n,e),Ph(n,e)}function $s(i,e){const n=Hs.get(i);if(n)for(const s of n)s(e)}function Ph(i,e){const n=Oh();n&&n.postMessage({key:i,fid:e}),Nh()}let De=null;function Oh(){return!De&&"BroadcastChannel"in self&&(De=new BroadcastChannel("[Firebase] FID Change"),De.onmessage=i=>{$s(i.data.key,i.data.fid)}),De}function Nh(){Hs.size===0&&De&&(De.close(),De=null)}/**
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
 */const Dh="firebase-installations-database",Lh=1,je="firebase-installations-store";let $n=null;function ai(){return $n||($n=Fr(Dh,Lh,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(je)}}})),$n}async function an(i,e){const n=dn(i),a=(await ai()).transaction(je,"readwrite"),c=a.objectStore(je),h=await c.get(n);return await c.put(e,n),await a.done,(!h||h.fid!==e.fid)&&Bs(i,e.fid),e}async function Vs(i){const e=dn(i),s=(await ai()).transaction(je,"readwrite");await s.objectStore(je).delete(e),await s.done}async function fn(i,e){const n=dn(i),a=(await ai()).transaction(je,"readwrite"),c=a.objectStore(je),h=await c.get(n),g=e(h);return g===void 0?await c.delete(n):await c.put(g,n),await a.done,g&&(!h||h.fid!==g.fid)&&Bs(i,g.fid),g}/**
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
 */async function ci(i){let e;const n=await fn(i.appConfig,s=>{const a=Mh(s),c=Uh(i,a);return e=c.registrationPromise,c.installationEntry});return n.fid===Xn?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Mh(i){const e=i||{fid:kh(),registrationStatus:0};return Ws(e)}function Uh(i,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(xe.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=xh(i,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:jh(i)}:{installationEntry:e}}async function xh(i,e){try{const n=await bh(i,e);return an(i.appConfig,n)}catch(n){throw Ds(n)&&n.customData.serverCode===409?await Vs(i.appConfig):await an(i.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function jh(i){let e=await xr(i.appConfig);for(;e.registrationStatus===1;)await Fs(100),e=await xr(i.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await ci(i);return s||n}return e}function xr(i){return fn(i,e=>{if(!e)throw xe.create("installation-not-found");return Ws(e)})}function Ws(i){return Fh(i)?{fid:i.fid,registrationStatus:0}:i}function Fh(i){return i.registrationStatus===1&&i.registrationTime+Ps<Date.now()}/**
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
 */async function Hh({appConfig:i,heartbeatServiceProvider:e},n){const s=Bh(i,n),a=Eh(i,n),c=e.getImmediate({optional:!0});if(c){const E=await c.getHeartbeatsHeader();E&&a.append("x-firebase-client",E)}const h={installation:{sdkVersion:Os,appId:i.appId}},g={method:"POST",headers:a,body:JSON.stringify(h)},w=await js(()=>fetch(s,g));if(w.ok){const E=await w.json();return Ms(E)}else throw await Us("Generate Auth Token",w)}function Bh(i,{fid:e}){return`${Ls(i)}/${e}/authTokens:generate`}/**
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
 */async function li(i,e=!1){let n;const s=await fn(i.appConfig,c=>{if(!zs(c))throw xe.create("not-registered");const h=c.authToken;if(!e&&Wh(h))return c;if(h.requestStatus===1)return n=$h(i,e),c;{if(!navigator.onLine)throw xe.create("app-offline");const g=qh(c);return n=Vh(i,g),g}});return n?await n:s.authToken}async function $h(i,e){let n=await jr(i.appConfig);for(;n.authToken.requestStatus===1;)await Fs(100),n=await jr(i.appConfig);const s=n.authToken;return s.requestStatus===0?li(i,e):s}function jr(i){return fn(i,e=>{if(!zs(e))throw xe.create("not-registered");const n=e.authToken;return Gh(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Vh(i,e){try{const n=await Hh(i,e),s=Object.assign(Object.assign({},e),{authToken:n});return await an(i.appConfig,s),n}catch(n){if(Ds(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Vs(i.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await an(i.appConfig,s)}throw n}}function zs(i){return i!==void 0&&i.registrationStatus===2}function Wh(i){return i.requestStatus===2&&!zh(i)}function zh(i){const e=Date.now();return e<i.creationTime||i.creationTime+i.expiresIn<e+yh}function qh(i){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},i),{authToken:e})}function Gh(i){return i.requestStatus===1&&i.requestTime+Ps<Date.now()}/**
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
 */async function Kh(i){const e=i,{installationEntry:n,registrationPromise:s}=await ci(e);return s?s.catch(console.error):li(e).catch(console.error),n.fid}/**
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
 */async function Jh(i,e=!1){const n=i;return await Xh(n),(await li(n,e)).token}async function Xh(i){const{registrationPromise:e}=await ci(i);e&&await e}/**
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
 */function Yh(i){if(!i||!i.options)throw Vn("App Configuration");if(!i.name)throw Vn("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!i.options[n])throw Vn(n);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function Vn(i){return xe.create("missing-app-config-values",{valueName:i})}/**
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
 */const qs="installations",Qh="installations-internal",Zh=i=>{const e=i.getProvider("app").getImmediate(),n=Yh(e),s=wt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},eu=i=>{const e=i.getProvider("app").getImmediate(),n=wt(e,qs).getImmediate();return{getId:()=>Kh(n),getToken:a=>Jh(n,a)}};function tu(){Le(new be(qs,Zh,"PUBLIC")),Le(new be(Qh,eu,"PRIVATE"))}tu();Se(Rs,oi);Se(Rs,oi,"esm2017");export{uu as A,be as C,lh as E,de as F,sh as I,qr as L,oh as M,uh as S,ch as W,ah as X,Le as _,O as a,wt as b,iu as c,ru as d,te as e,Qt as f,Ha as g,au as h,z as i,Vo as j,su as k,hh as l,ph as m,fh as n,dh as o,It as p,Je as q,Se as r,ou as s,Fa as t,fu as u,Wo as v,du as w,lu as x,cu as y,hu as z};
