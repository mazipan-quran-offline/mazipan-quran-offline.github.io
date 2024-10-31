import{p as Hr,a as de,n as hs,e as Vu,i as kr,t as Ke,s as Se,h as od,b as bi,f as ad}from"../chunks/disclose-version.CS-10NNO.js";import{p as Wr,t as _t,a as Qr,f as mt,b as q,c as $,g as te,s as W,j as Sr,i as Pr,h as oc,n as br}from"../chunks/runtime.O72gEqfx.js";import{s as cd,a as pt}from"../chunks/store.DA6PSWZh.js";import{B as ud}from"../chunks/Breadcrumb.BRxOAG7R.js";import{B as Cr}from"../chunks/Button.CH9Srj0a.js";import{a as ac,s as cc,b as uc,c as lc,e as hc,f as dc,d as fc,p as pc,l as mc}from"../chunks/index.Bl5MHnTT.js";import{t as rt}from"../chunks/toast.CCuypzoY.js";import{f as ld,T as Ys,C as M}from"../chunks/constants.SPnxFkzr.js";import{s as ds,C as fs}from"../chunks/utils.qET_AhXf.js";import{M as hd}from"../chunks/MetaTag.BBElpLyV.js";const dd=!1,fd=!0,Yv=Object.freeze(Object.defineProperty({__proto__:null,csr:fd,ssr:dd},Symbol.toStringTag,{value:"Module"})),pd="1022678905567",md="G-SFVBG4QWNG",gd="baca-quran-id.appspot.com",_d="baca-quran-id.firebaseapp.com",yd="baca-quran-id",vd="1:1022678905567:web:18b62c4d8d12dabb9caf6a",Ed="AIzaSyChBEY5EioADQmnfs3B28M3y1boTuGQmyQ";var gc={};/**
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
 */const Du=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Td=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],u=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Ou={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,u=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,p=o>>2,T=(o&3)<<4|u>>4;let A=(u&15)<<2|d>>6,b=d&63;h||(b=64,a||(A=64)),r.push(t[p],t[T],t[A],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Du(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Td(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const T=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||u==null||d==null||T==null)throw new Id;const A=o<<2|u>>4;if(r.push(A),d!==64){const b=u<<4&240|d>>2;if(r.push(b),T!==64){const V=d<<6&192|T;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Id extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wd=function(n){const e=Du(n);return Ou.encodeByteArray(e,!0)},Hi=function(n){return wd(n).replace(/\./g,"")},Lu=function(n){try{return Ou.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ad(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Rd=()=>Ad().__FIREBASE_DEFAULTS__,Sd=()=>{if(typeof process>"u"||typeof gc>"u")return;const n=gc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Pd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Lu(n[1]);return e&&JSON.parse(e)},ps=()=>{try{return Rd()||Sd()||Pd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mu=n=>{var e,t;return(t=(e=ps())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},bd=n=>{const e=Mu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},xu=()=>{var n;return(n=ps())===null||n===void 0?void 0:n.config},Uu=n=>{var e;return(e=ps())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Cd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function kd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Hi(JSON.stringify(t)),Hi(JSON.stringify(a)),""].join(".")}/**
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
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Vd(){var n;const e=(n=ps())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Od(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ld(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Md(){const n=xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function xd(){return!Vd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ud(){try{return typeof indexedDB=="object"}catch{return!1}}function Fd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const Bd="FirebaseError";class St extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Bd,Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yr.prototype.create)}}class Yr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?jd(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new St(i,u,r)}}function jd(n,e){return n.replace(qd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qd=/\{\$([^}]+)}/g;function $d(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Wi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(_c(o)&&_c(a)){if(!Wi(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function _c(n){return n!==null&&typeof n=="object"}/**
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
 */function Jr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gd(n,e){const t=new zd(n,e);return t.subscribe.bind(t)}class zd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Kd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Js),i.error===void 0&&(i.error=Js),i.complete===void 0&&(i.complete=Js);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Kd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Js(){}/**
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
 */function Ce(n){return n&&n._delegate?n._delegate:n}class mn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ln="[DEFAULT]";/**
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
 */class Hd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Cd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qd(e))try{this.getOrInitializeService({instanceIdentifier:ln})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ln){return this.instances.has(e)}getOptions(e=ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ln){return this.component?this.component.multipleInstances?e:ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wd(n){return n===ln?void 0:n}function Qd(n){return n.instantiationMode==="EAGER"}/**
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
 */class Yd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Hd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Jd={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Xd=z.INFO,Zd={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},ef=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Zd[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mo{constructor(e){this.name=e,this._logLevel=Xd,this._logHandler=ef,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const tf=(n,e)=>e.some(t=>n instanceof t);let yc,vc;function nf(){return yc||(yc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rf(){return vc||(vc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fu=new WeakMap,ho=new WeakMap,Bu=new WeakMap,Xs=new WeakMap,xo=new WeakMap;function sf(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Bt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Fu.set(t,n)}).catch(()=>{}),xo.set(e,n),e}function of(n){if(ho.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ho.set(n,e)}let fo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ho.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Bu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Bt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function af(n){fo=n(fo)}function cf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Zs(this),e,...t);return Bu.set(r,e.sort?e.sort():[e]),Bt(r)}:rf().includes(n)?function(...e){return n.apply(Zs(this),e),Bt(Fu.get(this))}:function(...e){return Bt(n.apply(Zs(this),e))}}function uf(n){return typeof n=="function"?cf(n):(n instanceof IDBTransaction&&of(n),tf(n,nf())?new Proxy(n,fo):n)}function Bt(n){if(n instanceof IDBRequest)return sf(n);if(Xs.has(n))return Xs.get(n);const e=uf(n);return e!==n&&(Xs.set(n,e),xo.set(e,n)),e}const Zs=n=>xo.get(n);function lf(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),u=Bt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Bt(a.result),h.oldVersion,h.newVersion,Bt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const hf=["get","getKey","getAll","getAllKeys","count"],df=["put","add","delete","clear"],eo=new Map;function Ec(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(eo.get(e))return eo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=df.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hf.includes(t)))return;const o=async function(a,...u){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&h.done]))[0]};return eo.set(e,o),o}af(n=>({...n,get:(e,t,r)=>Ec(e,t)||n.get(e,t,r),has:(e,t)=>!!Ec(e,t)||n.has(e,t)}));/**
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
 */class ff{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function pf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const po="@firebase/app",Tc="0.10.15";/**
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
 */const It=new Mo("@firebase/app"),mf="@firebase/app-compat",gf="@firebase/analytics-compat",_f="@firebase/analytics",yf="@firebase/app-check-compat",vf="@firebase/app-check",Ef="@firebase/auth",Tf="@firebase/auth-compat",If="@firebase/database",wf="@firebase/data-connect",Af="@firebase/database-compat",Rf="@firebase/functions",Sf="@firebase/functions-compat",Pf="@firebase/installations",bf="@firebase/installations-compat",Cf="@firebase/messaging",kf="@firebase/messaging-compat",Nf="@firebase/performance",Vf="@firebase/performance-compat",Df="@firebase/remote-config",Of="@firebase/remote-config-compat",Lf="@firebase/storage",Mf="@firebase/storage-compat",xf="@firebase/firestore",Uf="@firebase/vertexai",Ff="@firebase/firestore-compat",Bf="firebase",jf="11.0.1";/**
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
 */const mo="[DEFAULT]",qf={[po]:"fire-core",[mf]:"fire-core-compat",[_f]:"fire-analytics",[gf]:"fire-analytics-compat",[vf]:"fire-app-check",[yf]:"fire-app-check-compat",[Ef]:"fire-auth",[Tf]:"fire-auth-compat",[If]:"fire-rtdb",[wf]:"fire-data-connect",[Af]:"fire-rtdb-compat",[Rf]:"fire-fn",[Sf]:"fire-fn-compat",[Pf]:"fire-iid",[bf]:"fire-iid-compat",[Cf]:"fire-fcm",[kf]:"fire-fcm-compat",[Nf]:"fire-perf",[Vf]:"fire-perf-compat",[Df]:"fire-rc",[Of]:"fire-rc-compat",[Lf]:"fire-gcs",[Mf]:"fire-gcs-compat",[xf]:"fire-fst",[Ff]:"fire-fst-compat",[Uf]:"fire-vertex","fire-js":"fire-js",[Bf]:"fire-js-all"};/**
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
 */const Qi=new Map,$f=new Map,go=new Map;function Ic(n,e){try{n.container.addComponent(e)}catch(t){It.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Gn(n){const e=n.name;if(go.has(e))return It.debug(`There were multiple attempts to register component ${e}.`),!1;go.set(e,n);for(const t of Qi.values())Ic(t,n);for(const t of $f.values())Ic(t,n);return!0}function Uo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function yt(n){return n.settings!==void 0}/**
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
 */const Gf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jt=new Yr("app","Firebase",Gf);/**
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
 */class zf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
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
 */const er=jf;function ju(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw jt.create("bad-app-name",{appName:String(i)});if(t||(t=xu()),!t)throw jt.create("no-options");const o=Qi.get(i);if(o){if(Wi(t,o.options)&&Wi(r,o.config))return o;throw jt.create("duplicate-app",{appName:i})}const a=new Yd(i);for(const h of go.values())a.addComponent(h);const u=new zf(t,r,a);return Qi.set(i,u),u}function qu(n=mo){const e=Qi.get(n);if(!e&&n===mo&&xu())return ju();if(!e)throw jt.create("no-app",{appName:n});return e}function qt(n,e,t){var r;let i=(r=qf[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),It.warn(u.join(" "));return}Gn(new mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Kf="firebase-heartbeat-database",Hf=1,Fr="firebase-heartbeat-store";let to=null;function $u(){return to||(to=lf(Kf,Hf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Fr)}catch(t){console.warn(t)}}}}).catch(n=>{throw jt.create("idb-open",{originalErrorMessage:n.message})})),to}async function Wf(n){try{const t=(await $u()).transaction(Fr),r=await t.objectStore(Fr).get(Gu(n));return await t.done,r}catch(e){if(e instanceof St)It.warn(e.message);else{const t=jt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});It.warn(t.message)}}}async function wc(n,e){try{const r=(await $u()).transaction(Fr,"readwrite");await r.objectStore(Fr).put(e,Gu(n)),await r.done}catch(t){if(t instanceof St)It.warn(t.message);else{const r=jt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});It.warn(r.message)}}}function Gu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Qf=1024,Yf=30*24*60*60*1e3;class Jf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Zf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ac();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=Yf}),this._storage.overwrite(this._heartbeatsCache))}catch(r){It.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ac(),{heartbeatsToSend:r,unsentEntries:i}=Xf(this._heartbeatsCache.heartbeats),o=Hi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return It.warn(t),""}}}function Ac(){return new Date().toISOString().substring(0,10)}function Xf(n,e=Qf){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Rc(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Rc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Zf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ud()?Fd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Wf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return wc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return wc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Rc(n){return Hi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function ep(n){Gn(new mn("platform-logger",e=>new ff(e),"PRIVATE")),Gn(new mn("heartbeat",e=>new Jf(e),"PRIVATE")),qt(po,Tc,n),qt(po,Tc,"esm2017"),qt("fire-js","")}ep("");var tp="firebase",np="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(tp,np,"app");var Sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fn,zu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function _(){}_.prototype=g.prototype,E.D=g.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(y,v,w){for(var m=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)m[ne-2]=arguments[ne];return g.prototype[v].apply(y,m)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,_){_||(_=0);var y=Array(16);if(typeof g=="string")for(var v=0;16>v;++v)y[v]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(v=0;16>v;++v)y[v]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=E.g[0],_=E.g[1],v=E.g[2];var w=E.g[3],m=g+(w^_&(v^w))+y[0]+3614090360&4294967295;g=_+(m<<7&4294967295|m>>>25),m=w+(v^g&(_^v))+y[1]+3905402710&4294967295,w=g+(m<<12&4294967295|m>>>20),m=v+(_^w&(g^_))+y[2]+606105819&4294967295,v=w+(m<<17&4294967295|m>>>15),m=_+(g^v&(w^g))+y[3]+3250441966&4294967295,_=v+(m<<22&4294967295|m>>>10),m=g+(w^_&(v^w))+y[4]+4118548399&4294967295,g=_+(m<<7&4294967295|m>>>25),m=w+(v^g&(_^v))+y[5]+1200080426&4294967295,w=g+(m<<12&4294967295|m>>>20),m=v+(_^w&(g^_))+y[6]+2821735955&4294967295,v=w+(m<<17&4294967295|m>>>15),m=_+(g^v&(w^g))+y[7]+4249261313&4294967295,_=v+(m<<22&4294967295|m>>>10),m=g+(w^_&(v^w))+y[8]+1770035416&4294967295,g=_+(m<<7&4294967295|m>>>25),m=w+(v^g&(_^v))+y[9]+2336552879&4294967295,w=g+(m<<12&4294967295|m>>>20),m=v+(_^w&(g^_))+y[10]+4294925233&4294967295,v=w+(m<<17&4294967295|m>>>15),m=_+(g^v&(w^g))+y[11]+2304563134&4294967295,_=v+(m<<22&4294967295|m>>>10),m=g+(w^_&(v^w))+y[12]+1804603682&4294967295,g=_+(m<<7&4294967295|m>>>25),m=w+(v^g&(_^v))+y[13]+4254626195&4294967295,w=g+(m<<12&4294967295|m>>>20),m=v+(_^w&(g^_))+y[14]+2792965006&4294967295,v=w+(m<<17&4294967295|m>>>15),m=_+(g^v&(w^g))+y[15]+1236535329&4294967295,_=v+(m<<22&4294967295|m>>>10),m=g+(v^w&(_^v))+y[1]+4129170786&4294967295,g=_+(m<<5&4294967295|m>>>27),m=w+(_^v&(g^_))+y[6]+3225465664&4294967295,w=g+(m<<9&4294967295|m>>>23),m=v+(g^_&(w^g))+y[11]+643717713&4294967295,v=w+(m<<14&4294967295|m>>>18),m=_+(w^g&(v^w))+y[0]+3921069994&4294967295,_=v+(m<<20&4294967295|m>>>12),m=g+(v^w&(_^v))+y[5]+3593408605&4294967295,g=_+(m<<5&4294967295|m>>>27),m=w+(_^v&(g^_))+y[10]+38016083&4294967295,w=g+(m<<9&4294967295|m>>>23),m=v+(g^_&(w^g))+y[15]+3634488961&4294967295,v=w+(m<<14&4294967295|m>>>18),m=_+(w^g&(v^w))+y[4]+3889429448&4294967295,_=v+(m<<20&4294967295|m>>>12),m=g+(v^w&(_^v))+y[9]+568446438&4294967295,g=_+(m<<5&4294967295|m>>>27),m=w+(_^v&(g^_))+y[14]+3275163606&4294967295,w=g+(m<<9&4294967295|m>>>23),m=v+(g^_&(w^g))+y[3]+4107603335&4294967295,v=w+(m<<14&4294967295|m>>>18),m=_+(w^g&(v^w))+y[8]+1163531501&4294967295,_=v+(m<<20&4294967295|m>>>12),m=g+(v^w&(_^v))+y[13]+2850285829&4294967295,g=_+(m<<5&4294967295|m>>>27),m=w+(_^v&(g^_))+y[2]+4243563512&4294967295,w=g+(m<<9&4294967295|m>>>23),m=v+(g^_&(w^g))+y[7]+1735328473&4294967295,v=w+(m<<14&4294967295|m>>>18),m=_+(w^g&(v^w))+y[12]+2368359562&4294967295,_=v+(m<<20&4294967295|m>>>12),m=g+(_^v^w)+y[5]+4294588738&4294967295,g=_+(m<<4&4294967295|m>>>28),m=w+(g^_^v)+y[8]+2272392833&4294967295,w=g+(m<<11&4294967295|m>>>21),m=v+(w^g^_)+y[11]+1839030562&4294967295,v=w+(m<<16&4294967295|m>>>16),m=_+(v^w^g)+y[14]+4259657740&4294967295,_=v+(m<<23&4294967295|m>>>9),m=g+(_^v^w)+y[1]+2763975236&4294967295,g=_+(m<<4&4294967295|m>>>28),m=w+(g^_^v)+y[4]+1272893353&4294967295,w=g+(m<<11&4294967295|m>>>21),m=v+(w^g^_)+y[7]+4139469664&4294967295,v=w+(m<<16&4294967295|m>>>16),m=_+(v^w^g)+y[10]+3200236656&4294967295,_=v+(m<<23&4294967295|m>>>9),m=g+(_^v^w)+y[13]+681279174&4294967295,g=_+(m<<4&4294967295|m>>>28),m=w+(g^_^v)+y[0]+3936430074&4294967295,w=g+(m<<11&4294967295|m>>>21),m=v+(w^g^_)+y[3]+3572445317&4294967295,v=w+(m<<16&4294967295|m>>>16),m=_+(v^w^g)+y[6]+76029189&4294967295,_=v+(m<<23&4294967295|m>>>9),m=g+(_^v^w)+y[9]+3654602809&4294967295,g=_+(m<<4&4294967295|m>>>28),m=w+(g^_^v)+y[12]+3873151461&4294967295,w=g+(m<<11&4294967295|m>>>21),m=v+(w^g^_)+y[15]+530742520&4294967295,v=w+(m<<16&4294967295|m>>>16),m=_+(v^w^g)+y[2]+3299628645&4294967295,_=v+(m<<23&4294967295|m>>>9),m=g+(v^(_|~w))+y[0]+4096336452&4294967295,g=_+(m<<6&4294967295|m>>>26),m=w+(_^(g|~v))+y[7]+1126891415&4294967295,w=g+(m<<10&4294967295|m>>>22),m=v+(g^(w|~_))+y[14]+2878612391&4294967295,v=w+(m<<15&4294967295|m>>>17),m=_+(w^(v|~g))+y[5]+4237533241&4294967295,_=v+(m<<21&4294967295|m>>>11),m=g+(v^(_|~w))+y[12]+1700485571&4294967295,g=_+(m<<6&4294967295|m>>>26),m=w+(_^(g|~v))+y[3]+2399980690&4294967295,w=g+(m<<10&4294967295|m>>>22),m=v+(g^(w|~_))+y[10]+4293915773&4294967295,v=w+(m<<15&4294967295|m>>>17),m=_+(w^(v|~g))+y[1]+2240044497&4294967295,_=v+(m<<21&4294967295|m>>>11),m=g+(v^(_|~w))+y[8]+1873313359&4294967295,g=_+(m<<6&4294967295|m>>>26),m=w+(_^(g|~v))+y[15]+4264355552&4294967295,w=g+(m<<10&4294967295|m>>>22),m=v+(g^(w|~_))+y[6]+2734768916&4294967295,v=w+(m<<15&4294967295|m>>>17),m=_+(w^(v|~g))+y[13]+1309151649&4294967295,_=v+(m<<21&4294967295|m>>>11),m=g+(v^(_|~w))+y[4]+4149444226&4294967295,g=_+(m<<6&4294967295|m>>>26),m=w+(_^(g|~v))+y[11]+3174756917&4294967295,w=g+(m<<10&4294967295|m>>>22),m=v+(g^(w|~_))+y[2]+718787259&4294967295,v=w+(m<<15&4294967295|m>>>17),m=_+(w^(v|~g))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(v+(m<<21&4294967295|m>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+w&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var _=g-this.blockSize,y=this.B,v=this.h,w=0;w<g;){if(v==0)for(;w<=_;)i(this,E,w),w+=this.blockSize;if(typeof E=="string"){for(;w<g;)if(y[v++]=E.charCodeAt(w++),v==this.blockSize){i(this,y),v=0;break}}else for(;w<g;)if(y[v++]=E[w++],v==this.blockSize){i(this,y),v=0;break}}this.h=v,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var _=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=_&255,_/=256;for(this.u(E),E=Array(16),g=_=0;4>g;++g)for(var y=0;32>y;y+=8)E[_++]=this.g[g]>>>y&255;return E};function o(E,g){var _=u;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=g(E)}function a(E,g){this.h=g;for(var _=[],y=!0,v=E.length-1;0<=v;v--){var w=E[v]|0;y&&w==g||(_[v]=w,y=!1)}this.g=_}var u={};function h(E){return-128<=E&&128>E?o(E,function(g){return new a([g|0],0>g?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return T;if(0>E)return C(d(-E));for(var g=[],_=1,y=0;E>=_;y++)g[y]=E/_|0,_*=4294967296;return new a(g,0)}function p(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return C(p(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(g,8)),y=T,v=0;v<E.length;v+=8){var w=Math.min(8,E.length-v),m=parseInt(E.substring(v,v+w),g);8>w?(w=d(Math.pow(g,w)),y=y.j(w).add(d(m))):(y=y.j(_),y=y.add(d(m)))}return y}var T=h(0),A=h(1),b=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-C(this).m();for(var E=0,g=1,_=0;_<this.g.length;_++){var y=this.i(_);E+=(0<=y?y:4294967296+y)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(V(this))return"0";if(O(this))return"-"+C(this).toString(E);for(var g=d(Math.pow(E,6)),_=this,y="";;){var v=se(_,g).g;_=G(_,v.j(g));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=v,V(_))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function V(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function O(E){return E.h==-1}n.l=function(E){return E=G(this,E),O(E)?-1:V(E)?0:1};function C(E){for(var g=E.g.length,_=[],y=0;y<g;y++)_[y]=~E.g[y];return new a(_,~E.h).add(A)}n.abs=function(){return O(this)?C(this):this},n.add=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],y=0,v=0;v<=g;v++){var w=y+(this.i(v)&65535)+(E.i(v)&65535),m=(w>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);y=m>>>16,w&=65535,m&=65535,_[v]=m<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function G(E,g){return E.add(C(g))}n.j=function(E){if(V(this)||V(E))return T;if(O(this))return O(E)?C(this).j(C(E)):C(C(this).j(E));if(O(E))return C(this.j(C(E)));if(0>this.l(b)&&0>E.l(b))return d(this.m()*E.m());for(var g=this.g.length+E.g.length,_=[],y=0;y<2*g;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<E.g.length;v++){var w=this.i(y)>>>16,m=this.i(y)&65535,ne=E.i(v)>>>16,ce=E.i(v)&65535;_[2*y+2*v]+=m*ce,H(_,2*y+2*v),_[2*y+2*v+1]+=w*ce,H(_,2*y+2*v+1),_[2*y+2*v+1]+=m*ne,H(_,2*y+2*v+1),_[2*y+2*v+2]+=w*ne,H(_,2*y+2*v+2)}for(y=0;y<g;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=g;y<2*g;y++)_[y]=0;return new a(_,0)};function H(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function J(E,g){this.g=E,this.h=g}function se(E,g){if(V(g))throw Error("division by zero");if(V(E))return new J(T,T);if(O(E))return g=se(C(E),g),new J(C(g.g),C(g.h));if(O(g))return g=se(E,C(g)),new J(C(g.g),g.h);if(30<E.g.length){if(O(E)||O(g))throw Error("slowDivide_ only works with positive integers.");for(var _=A,y=g;0>=y.l(E);)_=Fe(_),y=Fe(y);var v=oe(_,1),w=oe(y,1);for(y=oe(y,2),_=oe(_,2);!V(y);){var m=w.add(y);0>=m.l(E)&&(v=v.add(_),w=m),y=oe(y,1),_=oe(_,1)}return g=G(E,v.j(g)),new J(v,g)}for(v=T;0<=E.l(g);){for(_=Math.max(1,Math.floor(E.m()/g.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=d(_),m=w.j(g);O(m)||0<m.l(E);)_-=y,w=d(_),m=w.j(g);V(w)&&(w=A),v=v.add(w),E=G(E,m)}return new J(v,E)}n.A=function(E){return se(this,E).h},n.and=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],y=0;y<g;y++)_[y]=this.i(y)&E.i(y);return new a(_,this.h&E.h)},n.or=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],y=0;y<g;y++)_[y]=this.i(y)|E.i(y);return new a(_,this.h|E.h)},n.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],y=0;y<g;y++)_[y]=this.i(y)^E.i(y);return new a(_,this.h^E.h)};function Fe(E){for(var g=E.g.length+1,_=[],y=0;y<g;y++)_[y]=E.i(y)<<1|E.i(y-1)>>>31;return new a(_,E.h)}function oe(E,g){var _=g>>5;g%=32;for(var y=E.g.length-_,v=[],w=0;w<y;w++)v[w]=0<g?E.i(w+_)>>>g|E.i(w+_+1)<<32-g:E.i(w+_);return new a(v,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,zu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,fn=a}).apply(typeof Sc<"u"?Sc:typeof self<"u"?self:typeof window<"u"?window:{});var Ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ku,Nr,Hu,xi,_o,Wu,Qu,Yu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,l){return s==Array.prototype||s==Object.prototype||(s[c]=l.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ci=="object"&&Ci];for(var c=0;c<s.length;++c){var l=s[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var l=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var I=s[f];if(!(I in l))break e;l=l[I]}s=s[s.length-1],f=l[s],c=c(f),c!=f&&c!=null&&e(l,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var l=0,f=!1,I={next:function(){if(!f&&l<s.length){var R=l++;return{value:c(R,s[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function d(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function p(s,c,l){return s.call.apply(s.bind,arguments)}function T(s,c,l){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),s.apply(c,I)}}return function(){return s.apply(c,arguments)}}function A(s,c,l){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:T,A.apply(null,arguments)}function b(s,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function V(s,c){function l(){}l.prototype=c.prototype,s.aa=c.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(f,I,R){for(var N=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)N[ee-2]=arguments[ee];return c.prototype[I].apply(f,N)}}function O(s){const c=s.length;if(0<c){const l=Array(c);for(let f=0;f<c;f++)l[f]=s[f];return l}return[]}function C(s,c){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const I=s.length||0,R=f.length||0;s.length=I+R;for(let N=0;N<R;N++)s[I+N]=f[N]}else s.push(f)}}class G{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function H(s){return/^[\s\xa0]*$/.test(s)}function J(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function se(s){return se[" "](s),s}se[" "]=function(){};var Fe=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function oe(s,c,l){for(const f in s)c.call(l,s[f],f,s)}function E(s,c){for(const l in s)c.call(void 0,s[l],l,s)}function g(s){const c={};for(const l in s)c[l]=s[l];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,c){let l,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(l in f)s[l]=f[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}}function v(s){var c=1;s=s.split(":");const l=[];for(;0<c&&s.length;)l.push(s.shift()),c--;return s.length&&l.push(s.join(":")),l}function w(s){u.setTimeout(()=>{throw s},0)}function m(){var s=Be;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class ne{constructor(){this.h=this.g=null}add(c,l){const f=ce.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var ce=new G(()=>new we,s=>s.reset());class we{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,k=!1,Be=new ne,ar=()=>{const s=u.Promise.resolve(void 0);ye=()=>{s.then(Ls)}};var Ls=()=>{for(var s;s=m();){try{s.h.call(s.g)}catch(l){w(l)}var c=ce;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}k=!1};function Qe(){this.s=this.s,this.C=this.C}Qe.prototype.s=!1,Qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Ms=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};u.addEventListener("test",l,c),u.removeEventListener("test",l,c)}catch{}return s}();function Ue(s,c){if(pe.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(Fe){e:{try{se(c.nodeName);var I=!0;break e}catch{}I=!1}I||(c=null)}}else l=="mouseover"?c=s.fromElement:l=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:lt[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ue.aa.h.call(this)}}V(Ue,pe);var lt={2:"touch",3:"pen",4:"mouse"};Ue.prototype.h=function(){Ue.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var me="closure_listenable_"+(1e6*Math.random()|0),He=0;function cr(s,c,l,f,I){this.listener=s,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=I,this.key=++He,this.da=this.fa=!1}function Pt(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function En(s){this.src=s,this.g={},this.h=0}En.prototype.add=function(s,c,l,f,I){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var N=ur(s,c,f,I);return-1<N?(c=s[N],l||(c.fa=!1)):(c=new cr(c,this.src,R,!!f,I),c.fa=l,s.push(c)),c};function Tn(s,c){var l=c.type;if(l in s.g){var f=s.g[l],I=Array.prototype.indexOf.call(f,c,void 0),R;(R=0<=I)&&Array.prototype.splice.call(f,I,1),R&&(Pt(c),s.g[l].length==0&&(delete s.g[l],s.h--))}}function ur(s,c,l,f){for(var I=0;I<s.length;++I){var R=s[I];if(!R.da&&R.listener==c&&R.capture==!!l&&R.ha==f)return I}return-1}var Xt="closure_lm_"+(1e6*Math.random()|0),Zt={};function ai(s,c,l,f,I){if(Array.isArray(c)){for(var R=0;R<c.length;R++)ai(s,c[R],l,f,I);return null}return l=wn(l),s&&s[me]?s.K(c,l,d(f)?!!f.capture:!!f,I):ci(s,c,l,!1,f,I)}function ci(s,c,l,f,I,R){if(!c)throw Error("Invalid event type");var N=d(I)?!!I.capture:!!I,ee=lr(s);if(ee||(s[Xt]=ee=new En(s)),l=ee.add(c,l,f,N,R),l.proxy)return l;if(f=xs(),l.proxy=f,f.src=s,f.listener=l,s.addEventListener)Ms||(I=N),I===void 0&&(I=!1),s.addEventListener(c.toString(),f,I);else if(s.attachEvent)s.attachEvent(ui(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function xs(){function s(l){return c.call(s.src,s.listener,l)}const c=li;return s}function In(s,c,l,f,I){if(Array.isArray(c))for(var R=0;R<c.length;R++)In(s,c[R],l,f,I);else f=d(f)?!!f.capture:!!f,l=wn(l),s&&s[me]?(s=s.i,c=String(c).toString(),c in s.g&&(R=s.g[c],l=ur(R,l,f,I),-1<l&&(Pt(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete s.g[c],s.h--)))):s&&(s=lr(s))&&(c=s.g[c.toString()],s=-1,c&&(s=ur(c,l,f,I)),(l=-1<s?c[s]:null)&&en(l))}function en(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[me])Tn(c.i,s);else{var l=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(l,f,s.capture):c.detachEvent?c.detachEvent(ui(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=lr(c))?(Tn(l,s),l.h==0&&(l.src=null,c[Xt]=null)):Pt(s)}}}function ui(s){return s in Zt?Zt[s]:Zt[s]="on"+s}function li(s,c){if(s.da)s=!0;else{c=new Ue(c,this);var l=s.listener,f=s.ha||s.src;s.fa&&en(s),s=l.call(f,c)}return s}function lr(s){return s=s[Xt],s instanceof En?s:null}var tn="__closure_events_fn_"+(1e9*Math.random()>>>0);function wn(s){return typeof s=="function"?s:(s[tn]||(s[tn]=function(c){return s.handleEvent(c)}),s[tn])}function ve(){Qe.call(this),this.i=new En(this),this.M=this,this.F=null}V(ve,Qe),ve.prototype[me]=!0,ve.prototype.removeEventListener=function(s,c,l,f){In(this,s,c,l,f)};function Ee(s,c){var l,f=s.F;if(f)for(l=[];f;f=f.F)l.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new pe(c,s);else if(c instanceof pe)c.target=c.target||s;else{var I=c;c=new pe(f,s),y(c,I)}if(I=!0,l)for(var R=l.length-1;0<=R;R--){var N=c.g=l[R];I=An(N,f,!0,c)&&I}if(N=c.g=s,I=An(N,f,!0,c)&&I,I=An(N,f,!1,c)&&I,l)for(R=0;R<l.length;R++)N=c.g=l[R],I=An(N,f,!1,c)&&I}ve.prototype.N=function(){if(ve.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var l=s.g[c],f=0;f<l.length;f++)Pt(l[f]);delete s.g[c],s.h--}}this.F=null},ve.prototype.K=function(s,c,l,f){return this.i.add(String(s),c,!1,l,f)},ve.prototype.L=function(s,c,l,f){return this.i.add(String(s),c,!0,l,f)};function An(s,c,l,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var I=!0,R=0;R<c.length;++R){var N=c[R];if(N&&!N.da&&N.capture==l){var ee=N.listener,Re=N.ha||N.src;N.fa&&Tn(s.i,N),I=ee.call(Re,f)!==!1&&I}}return I&&!f.defaultPrevented}function Rn(s,c,l){if(typeof s=="function")l&&(s=A(s,l));else if(s&&typeof s.handleEvent=="function")s=A(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(s,c||0)}function Sn(s){s.g=Rn(()=>{s.g=null,s.i&&(s.i=!1,Sn(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class Us extends Qe{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Sn(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bt(s){Qe.call(this),this.h=s,this.g={}}V(bt,Qe);var hi=[];function Pn(s){oe(s.g,function(c,l){this.g.hasOwnProperty(l)&&en(c)},s),s.g={}}bt.prototype.N=function(){bt.aa.N.call(this),Pn(this)},bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nn=u.JSON.stringify,Fs=u.JSON.parse,di=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function bn(){}bn.prototype.h=null;function Cn(s){return s.h||(s.h=s.i())}function fi(){}var Ct={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function hr(){pe.call(this,"d")}V(hr,pe);function rn(){pe.call(this,"c")}V(rn,pe);var Ye={},pi=null;function kn(){return pi=pi||new ve}Ye.La="serverreachability";function dr(s){pe.call(this,Ye.La,s)}V(dr,pe);function sn(s){const c=kn();Ee(c,new dr(c))}Ye.STAT_EVENT="statevent";function fr(s,c){pe.call(this,Ye.STAT_EVENT,s),this.stat=c}V(fr,pe);function ge(s){const c=kn();Ee(c,new fr(c,s))}Ye.Ma="timingevent";function mi(s,c){pe.call(this,Ye.Ma,s),this.size=c}V(mi,pe);function on(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},c)}function kt(){this.g=!0}kt.prototype.xa=function(){this.g=!1};function Bs(s,c,l,f,I,R){s.info(function(){if(s.g)if(R)for(var N="",ee=R.split("&"),Re=0;Re<ee.length;Re++){var X=ee[Re].split("=");if(1<X.length){var Ve=X[0];X=X[1];var De=Ve.split("_");N=2<=De.length&&De[1]=="type"?N+(Ve+"="+X+"&"):N+(Ve+"=redacted&")}}else N=null;else N=R;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+c+`
`+l+`
`+N})}function Ae(s,c,l,f,I,R,N){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+c+`
`+l+`
`+R+" "+N})}function Ne(s,c,l,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+We(s,l)+(f?" "+f:"")})}function Nt(s,c){s.info(function(){return"TIMEOUT: "+c})}kt.prototype.info=function(){};function We(s,c){if(!s.g)return c;if(!c)return null;try{var l=JSON.parse(c);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var f=l[s];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var N=1;N<I.length;N++)I[N]=""}}}}return nn(l)}catch{return c}}var Je={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ht={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vt;function tt(){}V(tt,bn),tt.prototype.g=function(){return new XMLHttpRequest},tt.prototype.i=function(){return{}},Vt=new tt;function nt(s,c,l,f){this.j=s,this.i=c,this.l=l,this.R=f||1,this.U=new bt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pr}function pr(){this.i=null,this.g="",this.h=!1}var mr={},Nn={};function Vn(s,c,l){s.L=1,s.v=vi(dt(c)),s.m=l,s.P=!0,gr(s,null)}function gr(s,c){s.F=Date.now(),gi(s),s.A=dt(s.v);var l=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),Ua(l.i,"t",f),s.C=0,l=s.j.J,s.h=new pr,s.g=nc(s.j,l?c:null,!s.m),0<s.O&&(s.M=new Us(A(s.Y,s,s.g),s.O)),c=s.U,l=s.g,f=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(hi[0]=I.toString()),I=hi);for(var R=0;R<I.length;R++){var N=ai(l,I[R],f||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=s.H?g(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),sn(),Bs(s.i,s.u,s.A,s.l,s.R,s.m)}nt.prototype.ca=function(s){s=s.target;const c=this.M;c&&ft(s)==3?c.j():this.Y(s)},nt.prototype.Y=function(s){try{if(s==this.g)e:{const De=ft(this.g);var c=this.g.Ba();const Ln=this.g.Z();if(!(3>De)&&(De!=3||this.g&&(this.h.h||this.g.oa()||za(this.g)))){this.J||De!=4||c==7||(c==8||0>=Ln?sn(3):sn(2)),js(this);var l=this.g.Z();this.X=l;t:if(_r(this)){var f=za(this.g);s="";var I=f.length,R=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),yr(this);var N="";break t}this.h.i=new u.TextDecoder}for(c=0;c<I;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(R&&c==I-1)});f.length=0,this.h.g+=s,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=l==200,Ae(this.i,this.u,this.A,this.l,this.R,De,l),this.o){if(this.T&&!this.K){t:{if(this.g){var ee,Re=this.g;if((ee=Re.g?Re.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(ee)){var X=ee;break t}}X=null}if(l=X)Ne(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qs(this,l);else{this.o=!1,this.s=3,ge(12),an(this),yr(this);break e}}if(this.P){l=!0;let Xe;for(;!this.J&&this.C<N.length;)if(Xe=jh(this,N),Xe==Nn){De==4&&(this.s=4,ge(14),l=!1),Ne(this.i,this.l,null,"[Incomplete Response]");break}else if(Xe==mr){this.s=4,ge(15),Ne(this.i,this.l,N,"[Invalid Chunk]"),l=!1;break}else Ne(this.i,this.l,Xe,null),qs(this,Xe);if(_r(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),De!=4||N.length!=0||this.h.h||(this.s=1,ge(16),l=!1),this.o=this.o&&l,!l)Ne(this.i,this.l,N,"[Invalid Chunked Response]"),an(this),yr(this);else if(0<N.length&&!this.W){this.W=!0;var Ve=this.j;Ve.g==this&&Ve.ba&&!Ve.M&&(Ve.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),Ws(Ve),Ve.M=!0,ge(11))}}else Ne(this.i,this.l,N,null),qs(this,N);De==4&&an(this),this.o&&!this.J&&(De==4?Xa(this.j,this):(this.o=!1,gi(this)))}else id(this.g),l==400&&0<N.indexOf("Unknown SID")?(this.s=3,ge(12)):(this.s=0,ge(13)),an(this),yr(this)}}}catch{}finally{}};function _r(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function jh(s,c){var l=s.C,f=c.indexOf(`
`,l);return f==-1?Nn:(l=Number(c.substring(l,f)),isNaN(l)?mr:(f+=1,f+l>c.length?Nn:(c=c.slice(f,f+l),s.C=f+l,c)))}nt.prototype.cancel=function(){this.J=!0,an(this)};function gi(s){s.S=Date.now()+s.I,Sa(s,s.I)}function Sa(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=on(A(s.ba,s),c)}function js(s){s.B&&(u.clearTimeout(s.B),s.B=null)}nt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Nt(this.i,this.A),this.L!=2&&(sn(),ge(17)),an(this),this.s=2,yr(this)):Sa(this,this.S-s)};function yr(s){s.j.G==0||s.J||Xa(s.j,s)}function an(s){js(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,Pn(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function qs(s,c){try{var l=s.j;if(l.G!=0&&(l.g==s||$s(l.h,s))){if(!s.K&&$s(l.h,s)&&l.G==3){try{var f=l.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){e:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Ri(l),wi(l);else break e;Hs(l),ge(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=on(A(l.Za,l),6e3));if(1>=Ca(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else un(l,11)}else if((s.K||l.g==s)&&Ri(l),!H(c))for(I=l.Da.g.parse(c),c=0;c<I.length;c++){let X=I[c];if(l.T=X[0],X=X[1],l.G==2)if(X[0]=="c"){l.K=X[1],l.ia=X[2];const Ve=X[3];Ve!=null&&(l.la=Ve,l.j.info("VER="+l.la));const De=X[4];De!=null&&(l.Aa=De,l.j.info("SVER="+l.Aa));const Ln=X[5];Ln!=null&&typeof Ln=="number"&&0<Ln&&(f=1.5*Ln,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Xe=s.g;if(Xe){const Pi=Xe.g?Xe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pi){var R=f.h;R.g||Pi.indexOf("spdy")==-1&&Pi.indexOf("quic")==-1&&Pi.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Gs(R,R.h),R.h=null))}if(f.D){const Qs=Xe.g?Xe.g.getResponseHeader("X-HTTP-Session-Id"):null;Qs&&(f.ya=Qs,re(f.I,f.D,Qs))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var N=s;if(f.qa=tc(f,f.J?f.ia:null,f.W),N.K){ka(f.h,N);var ee=N,Re=f.L;Re&&(ee.I=Re),ee.B&&(js(ee),gi(ee)),f.g=N}else Ya(f);0<l.i.length&&Ai(l)}else X[0]!="stop"&&X[0]!="close"||un(l,7);else l.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?un(l,7):Ks(l):X[0]!="noop"&&l.l&&l.l.ta(X),l.v=0)}}sn(4)}catch{}}var qh=class{constructor(s,c){this.g=s,this.map=c}};function Pa(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ba(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Ca(s){return s.h?1:s.g?s.g.size:0}function $s(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Gs(s,c){s.g?s.g.add(c):s.h=c}function ka(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Pa.prototype.cancel=function(){if(this.i=Na(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Na(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const l of s.g.values())c=c.concat(l.D);return c}return O(s.i)}function $h(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var c=[],l=s.length,f=0;f<l;f++)c.push(s[f]);return c}c=[],l=0;for(f in s)c[l++]=s[f];return c}function Gh(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var c=[];s=s.length;for(var l=0;l<s;l++)c.push(l);return c}c=[],l=0;for(const f in s)c[l++]=f;return c}}}function Va(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var l=Gh(s),f=$h(s),I=f.length,R=0;R<I;R++)c.call(void 0,f[R],l&&l[R],s)}var Da=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zh(s,c){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var f=s[l].indexOf("="),I=null;if(0<=f){var R=s[l].substring(0,f);I=s[l].substring(f+1)}else R=s[l];c(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function cn(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof cn){this.h=s.h,_i(this,s.j),this.o=s.o,this.g=s.g,yi(this,s.s),this.l=s.l;var c=s.i,l=new Tr;l.i=c.i,c.g&&(l.g=new Map(c.g),l.h=c.h),Oa(this,l),this.m=s.m}else s&&(c=String(s).match(Da))?(this.h=!1,_i(this,c[1]||"",!0),this.o=vr(c[2]||""),this.g=vr(c[3]||"",!0),yi(this,c[4]),this.l=vr(c[5]||"",!0),Oa(this,c[6]||"",!0),this.m=vr(c[7]||"")):(this.h=!1,this.i=new Tr(null,this.h))}cn.prototype.toString=function(){var s=[],c=this.j;c&&s.push(Er(c,La,!0),":");var l=this.g;return(l||c=="file")&&(s.push("//"),(c=this.o)&&s.push(Er(c,La,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Er(l,l.charAt(0)=="/"?Wh:Hh,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Er(l,Yh)),s.join("")};function dt(s){return new cn(s)}function _i(s,c,l){s.j=l?vr(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function yi(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function Oa(s,c,l){c instanceof Tr?(s.i=c,Jh(s.i,s.h)):(l||(c=Er(c,Qh)),s.i=new Tr(c,s.h))}function re(s,c,l){s.i.set(c,l)}function vi(s){return re(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function vr(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Er(s,c,l){return typeof s=="string"?(s=encodeURI(s).replace(c,Kh),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Kh(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var La=/[#\/\?@]/g,Hh=/[#\?:]/g,Wh=/[#\?]/g,Qh=/[#\?@]/g,Yh=/#/g;function Tr(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function Dt(s){s.g||(s.g=new Map,s.h=0,s.i&&zh(s.i,function(c,l){s.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=Tr.prototype,n.add=function(s,c){Dt(this),this.i=null,s=Dn(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(c),this.h+=1,this};function Ma(s,c){Dt(s),c=Dn(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function xa(s,c){return Dt(s),c=Dn(s,c),s.g.has(c)}n.forEach=function(s,c){Dt(this),this.g.forEach(function(l,f){l.forEach(function(I){s.call(c,I,f,this)},this)},this)},n.na=function(){Dt(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),l=[];for(let f=0;f<c.length;f++){const I=s[f];for(let R=0;R<I.length;R++)l.push(c[f])}return l},n.V=function(s){Dt(this);let c=[];if(typeof s=="string")xa(this,s)&&(c=c.concat(this.g.get(Dn(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)c=c.concat(s[l])}return c},n.set=function(s,c){return Dt(this),this.i=null,s=Dn(this,s),xa(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function Ua(s,c,l){Ma(s,c),0<l.length&&(s.i=null,s.g.set(Dn(s,c),O(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var l=0;l<c.length;l++){var f=c[l];const R=encodeURIComponent(String(f)),N=this.V(f);for(f=0;f<N.length;f++){var I=R;N[f]!==""&&(I+="="+encodeURIComponent(String(N[f]))),s.push(I)}}return this.i=s.join("&")};function Dn(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function Jh(s,c){c&&!s.j&&(Dt(s),s.i=null,s.g.forEach(function(l,f){var I=f.toLowerCase();f!=I&&(Ma(this,f),Ua(this,I,l))},s)),s.j=c}function Xh(s,c){const l=new kt;if(u.Image){const f=new Image;f.onload=b(Ot,l,"TestLoadImage: loaded",!0,c,f),f.onerror=b(Ot,l,"TestLoadImage: error",!1,c,f),f.onabort=b(Ot,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=b(Ot,l,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function Zh(s,c){const l=new kt,f=new AbortController,I=setTimeout(()=>{f.abort(),Ot(l,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(R=>{clearTimeout(I),R.ok?Ot(l,"TestPingServer: ok",!0,c):Ot(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(I),Ot(l,"TestPingServer: error",!1,c)})}function Ot(s,c,l,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(l)}catch{}}function ed(){this.g=new di}function td(s,c,l){const f=l||"";try{Va(s,function(I,R){let N=I;d(I)&&(N=nn(I)),c.push(f+R+"="+encodeURIComponent(N))})}catch(I){throw c.push(f+"type="+encodeURIComponent("_badmap")),I}}function Ei(s){this.l=s.Ub||null,this.j=s.eb||!1}V(Ei,bn),Ei.prototype.g=function(){return new Ti(this.l,this.j)},Ei.prototype.i=function(s){return function(){return s}}({});function Ti(s,c){ve.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Ti,ve),n=Ti.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,wr(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ir(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,wr(this)),this.g&&(this.readyState=3,wr(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fa(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fa(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Ir(this):wr(this),this.readyState==3&&Fa(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Ir(this))},n.Qa=function(s){this.g&&(this.response=s,Ir(this))},n.ga=function(){this.g&&Ir(this)};function Ir(s){s.readyState=4,s.l=null,s.j=null,s.v=null,wr(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=c.next();return s.join(`\r
`)};function wr(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Ti.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Ba(s){let c="";return oe(s,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function zs(s,c,l){e:{for(f in l){var f=!1;break e}f=!0}f||(l=Ba(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):re(s,c,l))}function ue(s){ve.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(ue,ve);var nd=/^https?$/i,rd=["POST","PUT"];n=ue.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vt.g(),this.v=this.o?Cn(this.o):Cn(Vt),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(R){ja(this,R);return}if(s=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)l.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())l.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),I=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(rd,c,void 0))||f||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,N]of l)this.g.setRequestHeader(R,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ga(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){ja(this,R)}};function ja(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,qa(s),Ii(s)}function qa(s){s.A||(s.A=!0,Ee(s,"complete"),Ee(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Ee(this,"complete"),Ee(this,"abort"),Ii(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ii(this,!0)),ue.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?$a(this):this.bb())},n.bb=function(){$a(this)};function $a(s){if(s.h&&typeof a<"u"&&(!s.v[1]||ft(s)!=4||s.Z()!=2)){if(s.u&&ft(s)==4)Rn(s.Ea,0,s);else if(Ee(s,"readystatechange"),ft(s)==4){s.h=!1;try{const N=s.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var l;if(!(l=c)){var f;if(f=N===0){var I=String(s.D).match(Da)[1]||null;!I&&u.self&&u.self.location&&(I=u.self.location.protocol.slice(0,-1)),f=!nd.test(I?I.toLowerCase():"")}l=f}if(l)Ee(s,"complete"),Ee(s,"success");else{s.m=6;try{var R=2<ft(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",qa(s)}}finally{Ii(s)}}}}function Ii(s,c){if(s.g){Ga(s);const l=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||Ee(s,"ready");try{l.onreadystatechange=f}catch{}}}function Ga(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function ft(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),Fs(c)}};function za(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function id(s){const c={};s=(s.g&&2<=ft(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(H(s[f]))continue;var l=v(s[f]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=c[I]||[];c[I]=R,R.push(l)}E(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ar(s,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||c}function Ka(s){this.Aa=0,this.i=[],this.j=new kt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ar("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ar("baseRetryDelayMs",5e3,s),this.cb=Ar("retryDelaySeedMs",1e4,s),this.Wa=Ar("forwardChannelMaxRetries",2,s),this.wa=Ar("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Pa(s&&s.concurrentRequestLimit),this.Da=new ed,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ka.prototype,n.la=8,n.G=1,n.connect=function(s,c,l,f){ge(0),this.W=s,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=tc(this,null,this.W),Ai(this)};function Ks(s){if(Ha(s),s.G==3){var c=s.U++,l=dt(s.I);if(re(l,"SID",s.K),re(l,"RID",c),re(l,"TYPE","terminate"),Rr(s,l),c=new nt(s,s.j,c),c.L=2,c.v=vi(dt(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=c.v,l=!0),l||(c.g=nc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),gi(c)}ec(s)}function wi(s){s.g&&(Ws(s),s.g.cancel(),s.g=null)}function Ha(s){wi(s),s.u&&(u.clearTimeout(s.u),s.u=null),Ri(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function Ai(s){if(!ba(s.h)&&!s.s){s.s=!0;var c=s.Ga;ye||ar(),k||(ye(),k=!0),Be.add(c,s),s.B=0}}function sd(s,c){return Ca(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=on(A(s.Ga,s,c),Za(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new nt(this,this.j,s);let R=this.o;if(this.S&&(R?(R=g(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)e:{for(var c=0,l=0;l<this.i.length;l++){t:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=l;break e}if(c===4096||l===this.i.length-1){c=l+1;break e}}c=1e3}else c=1e3;c=Qa(this,I,c),l=dt(this.I),re(l,"RID",s),re(l,"CVER",22),this.D&&re(l,"X-HTTP-Session-Id",this.D),Rr(this,l),R&&(this.O?c="headers="+encodeURIComponent(String(Ba(R)))+"&"+c:this.m&&zs(l,this.m,R)),Gs(this.h,I),this.Ua&&re(l,"TYPE","init"),this.P?(re(l,"$req",c),re(l,"SID","null"),I.T=!0,Vn(I,l,null)):Vn(I,l,c),this.G=2}}else this.G==3&&(s?Wa(this,s):this.i.length==0||ba(this.h)||Wa(this))};function Wa(s,c){var l;c?l=c.l:l=s.U++;const f=dt(s.I);re(f,"SID",s.K),re(f,"RID",l),re(f,"AID",s.T),Rr(s,f),s.m&&s.o&&zs(f,s.m,s.o),l=new nt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),c&&(s.i=c.D.concat(s.i)),c=Qa(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Gs(s.h,l),Vn(l,f,c)}function Rr(s,c){s.H&&oe(s.H,function(l,f){re(c,f,l)}),s.l&&Va({},function(l,f){re(c,f,l)})}function Qa(s,c,l){l=Math.min(s.i.length,l);var f=s.l?A(s.l.Na,s.l,s):null;e:{var I=s.i;let R=-1;for(;;){const N=["count="+l];R==-1?0<l?(R=I[0].g,N.push("ofs="+R)):R=0:N.push("ofs="+R);let ee=!0;for(let Re=0;Re<l;Re++){let X=I[Re].g;const Ve=I[Re].map;if(X-=R,0>X)R=Math.max(0,I[Re].g-100),ee=!1;else try{td(Ve,N,"req"+X+"_")}catch{f&&f(Ve)}}if(ee){f=N.join("&");break e}}}return s=s.i.splice(0,l),c.D=s,f}function Ya(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;ye||ar(),k||(ye(),k=!0),Be.add(c,s),s.v=0}}function Hs(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=on(A(s.Fa,s),Za(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Ja(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=on(A(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ge(10),wi(this),Ja(this))};function Ws(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function Ja(s){s.g=new nt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=dt(s.qa);re(c,"RID","rpc"),re(c,"SID",s.K),re(c,"AID",s.T),re(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&re(c,"TO",s.ja),re(c,"TYPE","xmlhttp"),Rr(s,c),s.m&&s.o&&zs(c,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=vi(dt(c)),l.m=null,l.P=!0,gr(l,s)}n.Za=function(){this.C!=null&&(this.C=null,wi(this),Hs(this),ge(19))};function Ri(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function Xa(s,c){var l=null;if(s.g==c){Ri(s),Ws(s),s.g=null;var f=2}else if($s(s.h,c))l=c.D,ka(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){l=c.m?c.m.length:0,c=Date.now()-c.F;var I=s.B;f=kn(),Ee(f,new mi(f,l)),Ai(s)}else Ya(s);else if(I=c.s,I==3||I==0&&0<c.X||!(f==1&&sd(s,c)||f==2&&Hs(s)))switch(l&&0<l.length&&(c=s.h,c.i=c.i.concat(l)),I){case 1:un(s,5);break;case 4:un(s,10);break;case 3:un(s,6);break;default:un(s,2)}}}function Za(s,c){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*c}function un(s,c){if(s.j.info("Error code "+c),c==2){var l=A(s.fb,s),f=s.Xa;const I=!f;f=new cn(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||_i(f,"https"),vi(f),I?Xh(f.toString(),l):Zh(f.toString(),l)}else ge(2);s.G=0,s.l&&s.l.sa(c),ec(s),Ha(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),ge(2)):(this.j.info("Failed to ping google.com"),ge(1))};function ec(s){if(s.G=0,s.ka=[],s.l){const c=Na(s.h);(c.length!=0||s.i.length!=0)&&(C(s.ka,c),C(s.ka,s.i),s.h.i.length=0,O(s.i),s.i.length=0),s.l.ra()}}function tc(s,c,l){var f=l instanceof cn?dt(l):new cn(l);if(f.g!="")c&&(f.g=c+"."+f.g),yi(f,f.s);else{var I=u.location;f=I.protocol,c=c?c+"."+I.hostname:I.hostname,I=+I.port;var R=new cn(null);f&&_i(R,f),c&&(R.g=c),I&&yi(R,I),l&&(R.l=l),f=R}return l=s.D,c=s.ya,l&&c&&re(f,l,c),re(f,"VER",s.la),Rr(s,f),f}function nc(s,c,l){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new ue(new Ei({eb:l})):new ue(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function rc(){}n=rc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Si(){}Si.prototype.g=function(s,c){return new $e(s,c)};function $e(s,c){ve.call(this),this.g=new Ka(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!H(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!H(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new On(this)}V($e,ve),$e.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){Ks(this.g)},$e.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=nn(s),s=l);c.i.push(new qh(c.Ya++,s)),c.G==3&&Ai(c)},$e.prototype.N=function(){this.g.l=null,delete this.j,Ks(this.g),delete this.g,$e.aa.N.call(this)};function ic(s){hr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const l in c){s=l;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}V(ic,hr);function sc(){rn.call(this),this.status=1}V(sc,rn);function On(s){this.g=s}V(On,rc),On.prototype.ua=function(){Ee(this.g,"a")},On.prototype.ta=function(s){Ee(this.g,new ic(s))},On.prototype.sa=function(s){Ee(this.g,new sc)},On.prototype.ra=function(){Ee(this.g,"b")},Si.prototype.createWebChannel=Si.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,Yu=function(){return new Si},Qu=function(){return kn()},Wu=Ye,_o={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Je.NO_ERROR=0,Je.TIMEOUT=8,Je.HTTP_ERROR=6,xi=Je,ht.COMPLETE="complete",Hu=ht,fi.EventType=Ct,Ct.OPEN="a",Ct.CLOSE="b",Ct.ERROR="c",Ct.MESSAGE="d",ve.prototype.listen=ve.prototype.K,Nr=fi,ue.prototype.listenOnce=ue.prototype.L,ue.prototype.getLastError=ue.prototype.Ka,ue.prototype.getLastErrorCode=ue.prototype.Ba,ue.prototype.getStatus=ue.prototype.Z,ue.prototype.getResponseJson=ue.prototype.Oa,ue.prototype.getResponseText=ue.prototype.oa,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Ha,Ku=ue}).apply(typeof Ci<"u"?Ci:typeof self<"u"?self:typeof window<"u"?window:{});const Pc="@firebase/firestore";/**
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
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
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
 */let tr="11.0.0";/**
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
 */const gn=new Mo("@firebase/firestore");function Mn(){return gn.logLevel}function D(n,...e){if(gn.logLevel<=z.DEBUG){const t=e.map(Fo);gn.debug(`Firestore (${tr}): ${n}`,...t)}}function wt(n,...e){if(gn.logLevel<=z.ERROR){const t=e.map(Fo);gn.error(`Firestore (${tr}): ${n}`,...t)}}function zn(n,...e){if(gn.logLevel<=z.WARN){const t=e.map(Fo);gn.warn(`Firestore (${tr}): ${n}`,...t)}}function Fo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function U(n="Unexpected state"){const e=`FIRESTORE (${tr}) INTERNAL ASSERTION FAILED: `+n;throw wt(e),new Error(e)}function Z(n,e){n||U()}function j(n,e){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends St{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $t{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Ju{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Le.UNAUTHENTICATED))}shutdown(){}}class ip{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class sp{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new $t,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new $t)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new Ju(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string"),new Le(e)}}class op{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ap{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new op(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class up{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Z(this.o===void 0);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Z(typeof t.token=="string"),this.R=t.token,new cp(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Xu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=lp(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%e.length))}return r}}function Y(n,e){return n<e?-1:n>e?1:0}function Kn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class _e{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new _e(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new _e(0,0))}static max(){return new B(new _e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Br{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(),r===void 0?r=e.length-t:r>e.length-t&&U(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Br.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Br?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=e.get(i),a=t.get(i);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ie extends Br{construct(e,t,r){return new ie(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ie(t)}static emptyPath(){return new ie([])}}const hp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class be extends Br{construct(e,t,r){return new be(e,t,r)}static isValidIdentifier(e){return hp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new be(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new L(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new L(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new L(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new L(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new be(t)}static emptyPath(){return new be([])}}/**
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
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(ie.fromString(e))}static fromName(e){return new x(ie.fromString(e).popFirst(5))}static empty(){return new x(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new ie(e.slice()))}}function dp(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new _e(t+1,0):new _e(t,r));return new zt(i,x.empty(),e)}function fp(n){return new zt(n.readTime,n.key,-1)}class zt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new zt(B.min(),x.empty(),-1)}static max(){return new zt(B.max(),x.empty(),-1)}}function pp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function nr(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==mp)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,r)=>{t(e)})}static reject(e){return new S((t,r)=>{r(e)})}static waitFor(e){return new S((t,r)=>{let i=0,o=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next(i=>i?S.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new S((r,i)=>{const o=e.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(p=>{a[d]=p,++u,u===o&&r(a)},p=>i(p))}})}static doWhile(e,t){return new S((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function _p(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function rr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ms{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ms.oe=-1;function gs(n){return n==null}function Yi(n){return n===0&&1/n==-1/0}function yp(n){return typeof n=="number"&&Number.isInteger(n)&&!Yi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function vp(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=bc(e)),e=Ep(n.get(t),e);return bc(e)}function Ep(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case"":t+="";break;default:t+=o}}return t}function bc(n){return n+""}/**
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
 */function Cc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Yt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Zu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ae{constructor(e,t){this.comparator=e,this.root=t||Pe.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ki(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ki(this.root,e,this.comparator,!1)}getReverseIterator(){return new ki(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ki(this.root,e,this.comparator,!0)}}class ki{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??Pe.RED,this.left=i??Pe.EMPTY,this.right=o??Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new Pe(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Pe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,t,r,i,o){return this}insert(e,t,r){return new Pe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ie{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new kc(this.data.getIterator())}getIteratorFrom(e){return new kc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ie(this.comparator);return t.data=e,t}}class kc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new Ge([])}unionWith(e){let t=new Ie(be.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ge(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Kn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class el extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new el("Invalid base64 string: "+o):o}}(e);return new ke(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new ke(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ke.EMPTY_BYTE_STRING=new ke("");const Tp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kt(n){if(Z(!!n),typeof n=="string"){let e=0;const t=Tp.exec(n);if(Z(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ht(n){return typeof n=="string"?ke.fromBase64String(n):ke.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function _s(n){const e=n.mapValue.fields.__previous_value__;return Bo(e)?_s(e):e}function jr(n){const e=Kt(n.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */class Ip{constructor(e,t,r,i,o,a,u,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}}class qr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new qr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Bo(n)?4:Ap(n)?9007199254740991:wp(n)?10:11:U()}function ct(n,e){if(n===e)return!0;const t=Wt(n);if(t!==Wt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return jr(n).isEqual(jr(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Kt(i.timestampValue),u=Kt(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return Ht(i.bytesValue).isEqual(Ht(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return le(i.geoPointValue.latitude)===le(o.geoPointValue.latitude)&&le(i.geoPointValue.longitude)===le(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return le(i.integerValue)===le(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=le(i.doubleValue),u=le(o.doubleValue);return a===u?Yi(a)===Yi(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return Kn(n.arrayValue.values||[],e.arrayValue.values||[],ct);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Cc(a)!==Cc(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!ct(a[h],u[h])))return!1;return!0}(n,e);default:return U()}}function $r(n,e){return(n.values||[]).find(t=>ct(t,e))!==void 0}function Hn(n,e){if(n===e)return 0;const t=Wt(n),r=Wt(e);if(t!==r)return Y(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return function(o,a){const u=le(o.integerValue||o.doubleValue),h=le(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return Nc(n.timestampValue,e.timestampValue);case 4:return Nc(jr(n),jr(e));case 5:return Y(n.stringValue,e.stringValue);case 6:return function(o,a){const u=Ht(o),h=Ht(a);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const p=Y(u[d],h[d]);if(p!==0)return p}return Y(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const u=Y(le(o.latitude),le(a.latitude));return u!==0?u:Y(le(o.longitude),le(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Vc(n.arrayValue,e.arrayValue);case 10:return function(o,a){var u,h,d,p;const T=o.fields||{},A=a.fields||{},b=(u=T.value)===null||u===void 0?void 0:u.arrayValue,V=(h=A.value)===null||h===void 0?void 0:h.arrayValue,O=Y(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((p=V==null?void 0:V.values)===null||p===void 0?void 0:p.length)||0);return O!==0?O:Vc(b,V)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Ni.mapValue&&a===Ni.mapValue)return 0;if(o===Ni.mapValue)return 1;if(a===Ni.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let T=0;T<h.length&&T<p.length;++T){const A=Y(h[T],p[T]);if(A!==0)return A;const b=Hn(u[h[T]],d[p[T]]);if(b!==0)return b}return Y(h.length,p.length)}(n.mapValue,e.mapValue);default:throw U()}}function Nc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=Kt(n),r=Kt(e),i=Y(t.seconds,r.seconds);return i!==0?i:Y(t.nanos,r.nanos)}function Vc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=Hn(t[i],r[i]);if(o)return o}return Y(t.length,r.length)}function Wn(n){return yo(n)}function yo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Kt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ht(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return x.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=yo(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${yo(t.fields[a])}`;return i+"}"}(n.mapValue):U()}function Ui(n){switch(Wt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_s(n);return e?16+Ui(e):16;case 5:return 2*n.stringValue.length;case 6:return Ht(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Ui(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Yt(r.fields,(o,a)=>{i+=o.length+Ui(a)}),i}(n.mapValue);default:throw U()}}function Dc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function vo(n){return!!n&&"integerValue"in n}function jo(n){return!!n&&"arrayValue"in n}function Oc(n){return!!n&&"nullValue"in n}function Lc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fi(n){return!!n&&"mapValue"in n}function wp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Or(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Yt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Or(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Or(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Ap(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Fi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Or(t)}setAll(e){let t=be.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=Or(a):i.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Fi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ct(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Fi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Yt(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new qe(Or(this.value))}}function tl(n){const e=[];return Yt(n.fields,(t,r)=>{const i=new be([t]);if(Fi(r)){const o=tl(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new Ge(e)}/**
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
 */class Me{constructor(e,t,r,i,o,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Me(e,0,B.min(),B.min(),B.min(),qe.empty(),0)}static newFoundDocument(e,t,r,i){return new Me(e,1,t,B.min(),r,i,0)}static newNoDocument(e,t){return new Me(e,2,t,B.min(),B.min(),qe.empty(),0)}static newUnknownDocument(e,t){return new Me(e,3,t,B.min(),B.min(),qe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ji{constructor(e,t){this.position=e,this.inclusive=t}}function Mc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),t.key):r=Hn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function xc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ct(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Xi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Rp(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class nl{}class fe extends nl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Pp(e,t,r):t==="array-contains"?new kp(e,r):t==="in"?new Np(e,r):t==="not-in"?new Vp(e,r):t==="array-contains-any"?new Dp(e,r):new fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new bp(e,r):new Cp(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Hn(t,this.value)):t!==null&&Wt(this.value)===Wt(t)&&this.matchesComparison(Hn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class et extends nl{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new et(e,t)}matches(e){return rl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function rl(n){return n.op==="and"}function il(n){return Sp(n)&&rl(n)}function Sp(n){for(const e of n.filters)if(e instanceof et)return!1;return!0}function Eo(n){if(n instanceof fe)return n.field.canonicalString()+n.op.toString()+Wn(n.value);if(il(n))return n.filters.map(e=>Eo(e)).join(",");{const e=n.filters.map(t=>Eo(t)).join(",");return`${n.op}(${e})`}}function sl(n,e){return n instanceof fe?function(r,i){return i instanceof fe&&r.op===i.op&&r.field.isEqual(i.field)&&ct(r.value,i.value)}(n,e):n instanceof et?function(r,i){return i instanceof et&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,u)=>o&&sl(a,i.filters[u]),!0):!1}(n,e):void U()}function ol(n){return n instanceof fe?function(t){return`${t.field.canonicalString()} ${t.op} ${Wn(t.value)}`}(n):n instanceof et?function(t){return t.op.toString()+" {"+t.getFilters().map(ol).join(" ,")+"}"}(n):"Filter"}class Pp extends fe{constructor(e,t,r){super(e,t,r),this.key=x.fromName(r.referenceValue)}matches(e){const t=x.comparator(e.key,this.key);return this.matchesComparison(t)}}class bp extends fe{constructor(e,t){super(e,"in",t),this.keys=al("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Cp extends fe{constructor(e,t){super(e,"not-in",t),this.keys=al("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function al(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>x.fromName(r.referenceValue))}class kp extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return jo(t)&&$r(t.arrayValue,this.value)}}class Np extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$r(this.value.arrayValue,t)}}class Vp extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if($r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!$r(this.value.arrayValue,t)}}class Dp extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!jo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>$r(this.value.arrayValue,r))}}/**
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
 */class Op{constructor(e,t=null,r=[],i=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function Uc(n,e=null,t=[],r=[],i=null,o=null,a=null){return new Op(n,e,t,r,i,o,a)}function qo(n){const e=j(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Eo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),gs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Wn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Wn(r)).join(",")),e.ue=t}return e.ue}function $o(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Rp(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!sl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!xc(n.startAt,e.startAt)&&xc(n.endAt,e.endAt)}function To(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Xr{constructor(e,t=null,r=[],i=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Lp(n,e,t,r,i,o,a,u){return new Xr(n,e,t,r,i,o,a,u)}function cl(n){return new Xr(n)}function Fc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ul(n){return n.collectionGroup!==null}function Lr(n){const e=j(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Ie(be.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Xi(o,r))}),t.has(be.keyField().canonicalString())||e.ce.push(new Xi(be.keyField(),r))}return e.ce}function it(n){const e=j(n);return e.le||(e.le=Mp(e,Lr(n))),e.le}function Mp(n,e){if(n.limitType==="F")return Uc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Xi(i.field,o)});const t=n.endAt?new Ji(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ji(n.startAt.position,n.startAt.inclusive):null;return Uc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Io(n,e){const t=n.filters.concat([e]);return new Xr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function wo(n,e,t){return new Xr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ys(n,e){return $o(it(n),it(e))&&n.limitType===e.limitType}function ll(n){return`${qo(it(n))}|lt:${n.limitType}`}function xn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>ol(i)).join(", ")}]`),gs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Wn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Wn(i)).join(",")),`Target(${r})`}(it(n))}; limitType=${n.limitType})`}function vs(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of Lr(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,h){const d=Mc(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,Lr(r),i)||r.endAt&&!function(a,u,h){const d=Mc(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,Lr(r),i))}(n,e)}function xp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function hl(n){return(e,t)=>{let r=!1;for(const i of Lr(n)){const o=Up(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Up(n,e,t){const r=n.field.isKeyField()?x.comparator(e.key,t.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?Hn(h,d):U()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
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
 */class yn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yt(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return Zu(this.inner)}size(){return this.innerSize}}/**
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
 */const Fp=new ae(x.comparator);function At(){return Fp}const dl=new ae(x.comparator);function Vr(...n){let e=dl;for(const t of n)e=e.insert(t.key,t);return e}function fl(n){let e=dl;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function hn(){return Mr()}function pl(){return Mr()}function Mr(){return new yn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Bp=new ae(x.comparator),jp=new Ie(x.comparator);function K(...n){let e=jp;for(const t of n)e=e.add(t);return e}const qp=new Ie(Y);function $p(){return qp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yi(e)?"-0":e}}function ml(n){return{integerValue:""+n}}function Gp(n,e){return yp(e)?ml(e):Go(n,e)}/**
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
 */class Es{constructor(){this._=void 0}}function zp(n,e,t){return n instanceof Zi?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Bo(o)&&(o=_s(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof Gr?_l(n,e):n instanceof zr?yl(n,e):function(i,o){const a=gl(i,o),u=Bc(a)+Bc(i.Pe);return vo(a)&&vo(i.Pe)?ml(u):Go(i.serializer,u)}(n,e)}function Kp(n,e,t){return n instanceof Gr?_l(n,e):n instanceof zr?yl(n,e):t}function gl(n,e){return n instanceof es?function(r){return vo(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Zi extends Es{}class Gr extends Es{constructor(e){super(),this.elements=e}}function _l(n,e){const t=vl(e);for(const r of n.elements)t.some(i=>ct(i,r))||t.push(r);return{arrayValue:{values:t}}}class zr extends Es{constructor(e){super(),this.elements=e}}function yl(n,e){let t=vl(e);for(const r of n.elements)t=t.filter(i=>!ct(i,r));return{arrayValue:{values:t}}}class es extends Es{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Bc(n){return le(n.integerValue||n.doubleValue)}function vl(n){return jo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Hp(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Gr&&i instanceof Gr||r instanceof zr&&i instanceof zr?Kn(r.elements,i.elements,ct):r instanceof es&&i instanceof es?ct(r.Pe,i.Pe):r instanceof Zi&&i instanceof Zi}(n.transform,e.transform)}class Wp{constructor(e,t){this.version=e,this.transformResults=t}}class st{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new st}static exists(e){return new st(void 0,e)}static updateTime(e){return new st(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ts{}function El(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Il(n.key,st.none()):new Zr(n.key,n.data,st.none());{const t=n.data,r=qe.empty();let i=new Ie(be.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Jt(n.key,r,new Ge(i.toArray()),st.none())}}function Qp(n,e,t){n instanceof Zr?function(i,o,a){const u=i.value.clone(),h=qc(i.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof Jt?function(i,o,a){if(!Bi(i.precondition,o))return void o.convertToUnknownDocument(a.version);const u=qc(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Tl(i)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function xr(n,e,t,r){return n instanceof Zr?function(o,a,u,h){if(!Bi(o.precondition,a))return u;const d=o.value.clone(),p=$c(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Jt?function(o,a,u,h){if(!Bi(o.precondition,a))return u;const d=$c(o.fieldTransforms,h,a),p=a.data;return p.setAll(Tl(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,e,t,r):function(o,a,u){return Bi(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function Yp(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=gl(r.transform,i||null);o!=null&&(t===null&&(t=qe.empty()),t.set(r.field,o))}return t||null}function jc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Kn(r,i,(o,a)=>Hp(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Zr extends Ts{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Jt extends Ts{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Tl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function qc(n,e,t){const r=new Map;Z(n.length===t.length);for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,u=e.data.field(o.field);r.set(o.field,Kp(a,u,t[i]))}return r}function $c(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,zp(o,a,e))}return r}class Il extends Ts{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jp extends Ts{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Xp{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Qp(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=xr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=xr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=pl();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(i.key)?null:u;const h=El(a,u);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),K())}isEqual(e){return this.batchId===e.batchId&&Kn(this.mutations,e.mutations,(t,r)=>jc(t,r))&&Kn(this.baseMutations,e.baseMutations,(t,r)=>jc(t,r))}}class zo{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Z(e.mutations.length===r.length);let i=function(){return Bp}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new zo(e,t,r,i)}}/**
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
 */class Zp{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class em{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var he,Q;function tm(n){switch(n){default:return U();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function wl(n){if(n===void 0)return wt("GRPC error has no .code"),P.UNKNOWN;switch(n){case he.OK:return P.OK;case he.CANCELLED:return P.CANCELLED;case he.UNKNOWN:return P.UNKNOWN;case he.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case he.INTERNAL:return P.INTERNAL;case he.UNAVAILABLE:return P.UNAVAILABLE;case he.UNAUTHENTICATED:return P.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case he.NOT_FOUND:return P.NOT_FOUND;case he.ALREADY_EXISTS:return P.ALREADY_EXISTS;case he.PERMISSION_DENIED:return P.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case he.ABORTED:return P.ABORTED;case he.OUT_OF_RANGE:return P.OUT_OF_RANGE;case he.UNIMPLEMENTED:return P.UNIMPLEMENTED;case he.DATA_LOSS:return P.DATA_LOSS;default:return U()}}(Q=he||(he={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function nm(){return new TextEncoder}/**
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
 */const rm=new fn([4294967295,4294967295],0);function Gc(n){const e=nm().encode(n),t=new zu;return t.update(e),new Uint8Array(t.digest())}function zc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new fn([t,r],0),new fn([i,o],0)]}class Ko{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Dr(`Invalid padding: ${t}`);if(r<0)throw new Dr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Dr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Dr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=fn.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(fn.fromNumber(r)));return i.compare(rm)===1&&(i=new fn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Gc(e),[r,i]=zc(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Ko(o,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.Ie===0)return;const t=Gc(e),[r,i]=zc(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Dr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Is{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ei.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Is(B.min(),i,new ae(Y),At(),K())}}class ei{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ei(r,t,K(),K(),K())}}/**
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
 */class ji{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Al{constructor(e,t){this.targetId=e,this.me=t}}class Rl{constructor(e,t,r=ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Kc{constructor(){this.fe=0,this.ge=Wc(),this.pe=ke.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=K(),t=K(),r=K();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:U()}}),new ei(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Wc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class im{constructor(e){this.Le=e,this.Be=new Map,this.ke=At(),this.qe=Hc(),this.Qe=new ae(Y)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:U()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const o=i.target;if(To(o))if(r===0){const a=new x(o.path);this.Ue(t,a,Me.newNoDocument(a,B.min()))}else Z(r===1);else{const a=this.Ye(t);if(a!==r){const u=this.Ze(e),h=u?this.Xe(u,e,a):1;if(h!==0){this.je(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let a,u;try{a=Ht(r).toUint8Array()}catch(h){if(h instanceof el)return zn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Ko(a,i,o)}catch(h){return zn(h instanceof Dr?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(o=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.Ue(t,o,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((o,a)=>{const u=this.Je(a);if(u){if(o.current&&To(u.target)){const h=new x(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,Me.newNoDocument(h,e))}o.be&&(t.set(a,o.ve()),o.Ce())}});let r=K();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const i=new Is(e,t,this.Qe,this.ke,r);return this.ke=At(),this.qe=Hc(),this.Qe=new ae(Y),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Kc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ie(Y),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Kc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Hc(){return new ae(x.comparator)}function Wc(){return new ae(x.comparator)}const sm={asc:"ASCENDING",desc:"DESCENDING"},om={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},am={and:"AND",or:"OR"};class cm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ao(n,e){return n.useProto3Json||gs(e)?e:{value:e}}function ts(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sl(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function um(n,e){return ts(n,e.toTimestamp())}function ot(n){return Z(!!n),B.fromTimestamp(function(t){const r=Kt(t);return new _e(r.seconds,r.nanos)}(n))}function Ho(n,e){return Ro(n,e).canonicalString()}function Ro(n,e){const t=function(i){return new ie(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Pl(n){const e=ie.fromString(n);return Z(Vl(e)),e}function So(n,e){return Ho(n.databaseId,e.path)}function no(n,e){const t=Pl(e);if(t.get(1)!==n.databaseId.projectId)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new x(Cl(t))}function bl(n,e){return Ho(n.databaseId,e)}function lm(n){const e=Pl(n);return e.length===4?ie.emptyPath():Cl(e)}function Po(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Cl(n){return Z(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Qc(n,e,t){return{name:So(n,e),fields:t.value.mapValue.fields}}function hm(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(Z(p===void 0||typeof p=="string"),ke.fromBase64String(p||"")):(Z(p===void 0||p instanceof Buffer||p instanceof Uint8Array),ke.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const p=d.code===void 0?P.UNKNOWN:wl(d.code);return new L(p,d.message||"")}(a);t=new Rl(r,i,o,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=no(n,r.document.name),o=ot(r.document.updateTime),a=r.document.createTime?ot(r.document.createTime):B.min(),u=new qe({mapValue:{fields:r.document.fields}}),h=Me.newFoundDocument(i,o,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new ji(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=no(n,r.document),o=r.readTime?ot(r.readTime):B.min(),a=Me.newNoDocument(i,o),u=r.removedTargetIds||[];t=new ji([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=no(n,r.document),o=r.removedTargetIds||[];t=new ji([],o,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new em(i,o),u=r.targetId;t=new Al(u,a)}}return t}function dm(n,e){let t;if(e instanceof Zr)t={update:Qc(n,e.key,e.value)};else if(e instanceof Il)t={delete:So(n,e.key)};else if(e instanceof Jt)t={update:Qc(n,e.key,e.data),updateMask:Tm(e.fieldMask)};else{if(!(e instanceof Jp))return U();t={verify:So(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof Zi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Gr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof zr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof es)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw U()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:um(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:U()}(n,e.precondition)),t}function fm(n,e){return n&&n.length>0?(Z(e!==void 0),n.map(t=>function(i,o){let a=i.updateTime?ot(i.updateTime):ot(o);return a.isEqual(B.min())&&(a=ot(o)),new Wp(a,i.transformResults||[])}(t,e))):[]}function pm(n,e){return{documents:[bl(n,e.path)]}}function mm(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=bl(n,i);const o=function(d){if(d.length!==0)return Nl(et.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(A){return{field:Un(A.field),direction:ym(A.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=Ao(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function gm(n){let e=lm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Z(r===1);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(T){const A=kl(T);return A instanceof et&&il(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(T){return T.map(A=>function(V){return new Xi(Fn(V.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(A))}(t.orderBy));let u=null;t.limit&&(u=function(T){let A;return A=typeof T=="object"?T.value:T,gs(A)?null:A}(t.limit));let h=null;t.startAt&&(h=function(T){const A=!!T.before,b=T.values||[];return new Ji(b,A)}(t.startAt));let d=null;return t.endAt&&(d=function(T){const A=!T.before,b=T.values||[];return new Ji(b,A)}(t.endAt)),Lp(e,i,a,o,u,"F",h,d)}function _m(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kl(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Fn(t.unaryFilter.field);return fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Fn(t.unaryFilter.field);return fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Fn(t.unaryFilter.field);return fe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Fn(t.unaryFilter.field);return fe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(n):n.fieldFilter!==void 0?function(t){return fe.create(Fn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return et.create(t.compositeFilter.filters.map(r=>kl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U()}}(t.compositeFilter.op))}(n):U()}function ym(n){return sm[n]}function vm(n){return om[n]}function Em(n){return am[n]}function Un(n){return{fieldPath:n.canonicalString()}}function Fn(n){return be.fromServerFormat(n.fieldPath)}function Nl(n){return n instanceof fe?function(t){if(t.op==="=="){if(Lc(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NAN"}};if(Oc(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Lc(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NOT_NAN"}};if(Oc(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Un(t.field),op:vm(t.op),value:t.value}}}(n):n instanceof et?function(t){const r=t.getFilters().map(i=>Nl(i));return r.length===1?r[0]:{compositeFilter:{op:Em(t.op),filters:r}}}(n):U()}function Tm(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Vl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ft{constructor(e,t,r,i,o=B.min(),a=B.min(),u=ke.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new Ft(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Im{constructor(e){this.ct=e}}function wm(n){const e=gm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?wo(e,e.limit,"L"):e}/**
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
 */class Am{constructor(){this.un=new Rm}addToCollectionParentIndex(e,t){return this.un.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(zt.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(zt.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class Rm{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ie(ie.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ie(ie.comparator)).toArray()}}/**
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
 */const Yc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class je{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new je(e,je.DEFAULT_COLLECTION_PERCENTILE,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */je.DEFAULT_COLLECTION_PERCENTILE=10,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,je.DEFAULT=new je(41943040,je.DEFAULT_COLLECTION_PERCENTILE,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),je.DISABLED=new je(-1,0,0);/**
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
 */class Qn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Qn(0)}static kn(){return new Qn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc([n,e],[t,r]){const i=Y(n,t);return i===0?Y(e,r):i}class Sm{constructor(e){this.Un=e,this.buffer=new Ie(Jc),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Jc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Pm{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){D("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rr(t)?D("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await nr(t)}await this.Hn(3e5)})}}class bm{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return S.resolve(ms.oe);const r=new Sm(t);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Yc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yc):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,i,o,a,u,h,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),i=this.params.maximumSequenceNumbersToCollect):i=T,a=Date.now(),this.nthSequenceNumber(e,i))).next(T=>(r=T,u=Date.now(),this.removeTargets(e,r,t))).next(T=>(o=T,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(T=>(d=Date.now(),Mn()<=z.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${T} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:T})))}}function Cm(n,e){return new bm(n,e)}/**
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
 */class km{constructor(){this.changes=new yn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Nm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Vm{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&xr(r.mutation,i,Ge.empty(),_e.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,K()).next(()=>r))}getLocalViewOfDocuments(e,t,r=K()){const i=hn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=Vr();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=hn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,K()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let o=At();const a=Mr(),u=function(){return Mr()}();return t.forEach((h,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Jt)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),xr(p.mutation,d,p.mutation.getFieldMask(),_e.now())):a.set(d.key,Ge.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var T;return u.set(d,new Nm(p,(T=a.get(d))!==null&&T!==void 0?T:null))}),u))}recalculateAndSaveOverlays(e,t){const r=Mr();let i=new ae((a,u)=>a-u),o=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let p=r.get(h)||Ge.empty();p=u.applyToLocalView(d,p),r.set(h,p);const T=(i.get(u.batchId)||K()).add(h);i=i.insert(u.batchId,T)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,p=h.value,T=pl();p.forEach(A=>{if(!o.has(A)){const b=El(t.get(A),r.get(A));b!==null&&T.set(A,b),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,T))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ul(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):S.resolve(hn());let u=-1,h=o;return a.next(d=>S.forEach(d,(p,T)=>(u<T.largestBatchId&&(u=T.largestBatchId),o.get(p)?S.resolve():this.remoteDocumentCache.getEntry(e,p).next(A=>{h=h.insert(p,A)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,K())).next(p=>({batchId:u,changes:fl(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next(r=>{let i=Vr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=Vr();return this.indexManager.getCollectionParents(e,o).next(u=>S.forEach(u,h=>{const d=function(T,A){return new Xr(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((T,A)=>{a=a.insert(T,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Me.newInvalidDocument(p)))});let u=Vr();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&xr(p.mutation,d,Ge.empty(),_e.now()),vs(t,d)&&(u=u.insert(h,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return S.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ot(i.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:wm(i.bundledQuery),readTime:ot(i.readTime)}}(t)),S.resolve()}}/**
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
 */class Om{constructor(){this.overlays=new ae(x.comparator),this.Ir=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=hn();return S.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.ht(e,t,o)}),S.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const i=hn(),o=t.length+1,a=new x(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return S.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new ae((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=hn(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=hn(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=i)););return S.resolve(u)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Zp(t,r));let o=this.Ir.get(t);o===void 0&&(o=K(),this.Ir.set(t,o)),this.Ir.set(t,o.add(r.key))}}/**
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
 */class Lm{constructor(){this.sessionToken=ke.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
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
 */class Wo{constructor(){this.Tr=new Ie(Te.Er),this.dr=new Ie(Te.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Te(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Te(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new x(new ie([])),r=new Te(t,e),i=new Te(t,e+1),o=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new x(new ie([])),r=new Te(t,e),i=new Te(t,e+1);let o=K();return this.dr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new Te(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Te{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return x.comparator(e.key,t.key)||Y(e.wr,t.wr)}static Ar(e,t){return Y(e.wr,t.wr)||x.comparator(e.key,t.key)}}/**
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
 */class Mm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ie(Te.Er)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Xp(o,t,r,i);this.mutationQueue.push(a);for(const u of i)this.br=this.br.add(new Te(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return S.resolve(a)}lookupMutationBatch(e,t){return S.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Te(t,0),i=new Te(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],a=>{const u=this.Dr(a.wr);o.push(u)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ie(Y);return t.forEach(i=>{const o=new Te(i,0),a=new Te(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],u=>{r=r.add(u.wr)})}),S.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const a=new Te(new x(o),0);let u=new Ie(Y);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(h.wr)),!0)},a),S.resolve(this.Cr(u))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Z(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return S.forEach(t.mutations,i=>{const o=new Te(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Te(t,0),i=this.br.firstAfterOrEqual(r);return S.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class xm{constructor(e){this.Mr=e,this.docs=function(){return new ae(x.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():Me.newInvalidDocument(t))}getEntries(e,t){let r=At();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Me.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=At();const a=t.path,u=new x(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||pp(fp(p),r)<=0||(i.has(p.key)||vs(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(e,t,r,i){U()}Or(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Um(this)}getSize(e){return S.resolve(this.size)}}class Um extends km{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class Fm{constructor(e){this.persistence=e,this.Nr=new yn(t=>qo(t),$o),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Wo,this.targetCount=0,this.kr=Qn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),S.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Qn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Kn(t),S.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),S.waitFor(o).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this.Br.containsKey(t))}}/**
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
 */class Dl{constructor(e,t){this.qr={},this.overlays={},this.Qr=new ms(0),this.Kr=!1,this.Kr=!0,this.$r=new Lm,this.referenceDelegate=e(this),this.Ur=new Fm(this),this.indexManager=new Am,this.remoteDocumentCache=function(i){return new xm(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Im(t),this.Gr=new Dm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Om,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Mm(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){D("MemoryPersistence","Starting transaction:",e);const i=new Bm(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,t){return S.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class Bm extends gp{constructor(e){super(),this.currentSequenceNumber=e}}class Qo{constructor(e){this.persistence=e,this.Jr=new Wo,this.Yr=null}static Zr(e){return new Qo(e)}get Xr(){if(this.Yr)return this.Yr;throw U()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),S.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Xr,r=>{const i=x.fromPath(r);return this.ei(e,i).next(o=>{o||t.removeEntry(i,B.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return S.or([()=>S.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}class ns{constructor(e,t){this.persistence=e,this.ti=new yn(r=>vp(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Cm(this,t)}static Zr(e,t){return new ns(e,t)}zr(){}jr(e){return S.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Yn(e){const t=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}Zn(e,t){return S.forEach(this.ti,(r,i)=>this.nr(e,r,i).next(o=>o?S.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Or(e,a=>this.nr(e,a,t).next(u=>{u||(r++,o.removeEntry(a,B.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ti.set(t,e.currentSequenceNumber),S.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ti.set(r,e.currentSequenceNumber),S.resolve()}removeReference(e,t,r){return this.ti.set(r,e.currentSequenceNumber),S.resolve()}updateLimboDocument(e,t){return this.ti.set(t,e.currentSequenceNumber),S.resolve()}Wr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ui(e.data.value)),t}nr(e,t,r){return S.or([()=>this.persistence.Hr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.ti.get(t);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Yo{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=K(),i=K();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Yo(e,t.fromCache,r,i)}}/**
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
 */class jm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class qm{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return xd()?8:_p(xe())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.Yi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new jm;return this.Xi(e,t,a).next(u=>{if(o.result=u,this.zi)return this.es(e,t,a,u.size)})}).next(()=>o.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Mn()<=z.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",xn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),S.resolve()):(Mn()<=z.DEBUG&&D("QueryEngine","Query:",xn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Mn()<=z.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",xn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,it(t))):S.resolve())}Yi(e,t){if(Fc(t))return S.resolve(null);let r=it(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=wo(t,null,"F"),r=it(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=K(...o);return this.Ji.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.ts(t,u);return this.ns(t,d,a,h.readTime)?this.Yi(e,wo(t,null,"F")):this.rs(e,d,t,h)}))})))}Zi(e,t,r,i){return Fc(t)||i.isEqual(B.min())?S.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const a=this.ts(t,o);return this.ns(t,a,r,i)?S.resolve(null):(Mn()<=z.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xn(t)),this.rs(e,a,t,dp(i,-1)).next(u=>u))})}ts(e,t){let r=new Ie(hl(e));return t.forEach((i,o)=>{vs(e,o)&&(r=r.add(o))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,t,r){return Mn()<=z.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",xn(t)),this.Ji.getDocumentsMatchingQuery(e,t,zt.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new ae(Y),this._s=new yn(o=>qo(o),$o),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Vm(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Gm(n,e,t,r){return new $m(n,e,t,r)}async function Ol(n,e){const t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=K();for(const d of i){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:u}))})})}function zm(n,e){const t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.cs.newChangeBuffer({trackRemovals:!0});return function(u,h,d,p){const T=d.batch,A=T.keys();let b=S.resolve();return A.forEach(V=>{b=b.next(()=>p.getEntry(h,V)).next(O=>{const C=d.docVersions.get(V);Z(C!==null),O.version.compareTo(C)<0&&(T.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),p.addEntry(O)))})}),b.next(()=>u.mutationQueue.removeMutationBatch(h,T))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=K();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Ll(n){const e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Km(n,e){const t=j(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const u=[];e.targetChanges.forEach((p,T)=>{const A=i.get(T);if(!A)return;u.push(t.Ur.removeMatchingKeys(o,p.removedDocuments,T).next(()=>t.Ur.addMatchingKeys(o,p.addedDocuments,T)));let b=A.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(T)!==null?b=b.withResumeToken(ke.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):p.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(p.resumeToken,r)),i=i.insert(T,b),function(O,C,G){return O.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(A,b,p)&&u.push(t.Ur.updateTargetData(o,b))});let h=At(),d=K();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(Hm(o,a,e.documentUpdates).next(p=>{h=p.Ps,d=p.Is})),!r.isEqual(B.min())){const p=t.Ur.getLastRemoteSnapshotVersion(o).next(T=>t.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(p)}return S.waitFor(u).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.os=i,o))}function Hm(n,e,t){let r=K(),i=K();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=At();return t.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),h.isNoDocument()&&h.version.isEqual(B.min())?(e.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(u,h)):D("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:i}})}function Wm(n,e){const t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Qm(n,e){const t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(o=>o?(i=o,S.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new Ft(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function bo(n,e,t){const r=j(n),i=r.os.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!rr(a))throw a;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Xc(n,e,t){const r=j(n);let i=B.min(),o=K();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const T=j(h),A=T._s.get(p);return A!==void 0?S.resolve(T.os.get(A)):T.Ur.getTargetData(d,p)}(r,a,it(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:B.min(),t?o:K())).next(u=>(Ym(r,xp(e),u),{documents:u,Ts:o})))}function Ym(n,e,t){let r=n.us.get(e)||B.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(e,r)}class Zc{constructor(){this.activeTargetIds=$p()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jm{constructor(){this.so=new Zc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Zc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Xm{_o(e){}shutdown(){}}/**
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
 */class eu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vi=null;function ro(){return Vi===null?Vi=function(){return 268435456+Math.round(2147483648*Math.random())}():Vi++,"0x"+Vi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class eg{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Oe="WebChannelConnection";class tg extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(t,r,i,o,a){const u=ro(),h=this.xo(t,r.toUriEncodedString());D("RestConnection",`Sending RPC '${t}' ${u}:`,h,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(t,h,d,i).then(p=>(D("RestConnection",`Received RPC '${t}' ${u}: `,p),p),p=>{throw zn("RestConnection",`RPC '${t}' ${u} failed with error: `,p,"url: ",h,"request:",i),p})}Lo(t,r,i,o,a,u){return this.Mo(t,r,i,o,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+tr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),i&&i.headers.forEach((o,a)=>t[a]=o)}xo(t,r){const i=Zm[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const o=ro();return new Promise((a,u)=>{const h=new Ku;h.setWithCredentials(!0),h.listenOnce(Hu.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case xi.NO_ERROR:const p=h.getResponseJson();D(Oe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case xi.TIMEOUT:D(Oe,`RPC '${e}' ${o} timed out`),u(new L(P.DEADLINE_EXCEEDED,"Request time out"));break;case xi.HTTP_ERROR:const T=h.getStatus();if(D(Oe,`RPC '${e}' ${o} failed with status:`,T,"response text:",h.getResponseText()),T>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const b=A==null?void 0:A.error;if(b&&b.status&&b.message){const V=function(C){const G=C.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(G)>=0?G:P.UNKNOWN}(b.status);u(new L(V,b.message))}else u(new L(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new L(P.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{D(Oe,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);D(Oe,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",d,r,15)})}Bo(e,t,r){const i=ro(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Yu(),u=Qu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const p=o.join("");D(Oe,`Creating RPC '${e}' stream ${i}: ${p}`,h);const T=a.createWebChannel(p,h);let A=!1,b=!1;const V=new eg({Io:C=>{b?D(Oe,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(A||(D(Oe,`Opening RPC '${e}' stream ${i} transport.`),T.open(),A=!0),D(Oe,`RPC '${e}' stream ${i} sending:`,C),T.send(C))},To:()=>T.close()}),O=(C,G,H)=>{C.listen(G,J=>{try{H(J)}catch(se){setTimeout(()=>{throw se},0)}})};return O(T,Nr.EventType.OPEN,()=>{b||(D(Oe,`RPC '${e}' stream ${i} transport opened.`),V.yo())}),O(T,Nr.EventType.CLOSE,()=>{b||(b=!0,D(Oe,`RPC '${e}' stream ${i} transport closed`),V.So())}),O(T,Nr.EventType.ERROR,C=>{b||(b=!0,zn(Oe,`RPC '${e}' stream ${i} transport errored:`,C),V.So(new L(P.UNAVAILABLE,"The operation could not be completed")))}),O(T,Nr.EventType.MESSAGE,C=>{var G;if(!b){const H=C.data[0];Z(!!H);const J=H,se=J.error||((G=J[0])===null||G===void 0?void 0:G.error);if(se){D(Oe,`RPC '${e}' stream ${i} received error:`,se);const Fe=se.status;let oe=function(_){const y=he[_];if(y!==void 0)return wl(y)}(Fe),E=se.message;oe===void 0&&(oe=P.INTERNAL,E="Unknown error status: "+Fe+" with message "+se.message),b=!0,V.So(new L(oe,E)),T.close()}else D(Oe,`RPC '${e}' stream ${i} received:`,H),V.bo(H)}}),O(u,Wu.STAT_EVENT,C=>{C.stat===_o.PROXY?D(Oe,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===_o.NOPROXY&&D(Oe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function io(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(n){return new cm(n,!0)}/**
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
 */class Ml{constructor(e,t,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class xl{constructor(e,t,r,i,o,a,u,h){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ml(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(wt(t.toString()),wt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new L(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ng extends xl{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=hm(this.serializer,e),r=function(o){if(!("targetChange"in o))return B.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?ot(a.readTime):B.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Po(this.serializer),t.addTarget=function(o,a){let u;const h=a.target;if(u=To(h)?{documents:pm(o,h)}:{query:mm(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Sl(o,a.resumeToken);const d=Ao(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){u.readTime=ts(o,a.snapshotVersion.toTimestamp());const d=Ao(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=_m(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Po(this.serializer),t.removeTarget=e,this.a_(t)}}class rg extends xl{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Z(!!e.streamToken),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=fm(e.writeResults,e.commitTime),r=ot(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Po(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>dm(this.serializer,r))};this.a_(t)}}/**
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
 */class ig extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,Ro(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(P.UNKNOWN,o.toString())})}Lo(e,t,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(e,Ro(t,r),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(P.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class sg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(wt(t),this.D_=!1):D("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class og{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{vn(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=j(h);d.L_.add(4),await ti(d),d.q_.set("Unknown"),d.L_.delete(4),await As(d)}(this))})}),this.q_=new sg(r,i)}}async function As(n){if(vn(n))for(const e of n.B_)await e(!0)}async function ti(n){for(const e of n.B_)await e(!1)}function Ul(n,e){const t=j(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),ea(t)?Zo(t):ir(t).r_()&&Xo(t,e))}function Jo(n,e){const t=j(n),r=ir(t);t.N_.delete(e),r.r_()&&Fl(t,e),t.N_.size===0&&(r.r_()?r.o_():vn(t)&&t.q_.set("Unknown"))}function Xo(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ir(n).A_(e)}function Fl(n,e){n.Q_.xe(e),ir(n).R_(e)}function Zo(n){n.Q_=new im({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),ir(n).start(),n.q_.v_()}function ea(n){return vn(n)&&!ir(n).n_()&&n.N_.size>0}function vn(n){return j(n).L_.size===0}function Bl(n){n.Q_=void 0}async function ag(n){n.q_.set("Online")}async function cg(n){n.N_.forEach((e,t)=>{Xo(n,e)})}async function ug(n,e){Bl(n),ea(n)?(n.q_.M_(e),Zo(n)):n.q_.set("Unknown")}async function lg(n,e,t){if(n.q_.set("Online"),e instanceof Rl&&e.state===2&&e.cause)try{await async function(i,o){const a=o.cause;for(const u of o.targetIds)i.N_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.N_.delete(u),i.Q_.removeTarget(u))}(n,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await rs(n,r)}else if(e instanceof ji?n.Q_.Ke(e):e instanceof Al?n.Q_.He(e):n.Q_.We(e),!t.isEqual(B.min()))try{const r=await Ll(n.localStore);t.compareTo(r)>=0&&await function(o,a){const u=o.Q_.rt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.N_.get(d);p&&o.N_.set(d,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const p=o.N_.get(h);if(!p)return;o.N_.set(h,p.withResumeToken(ke.EMPTY_BYTE_STRING,p.snapshotVersion)),Fl(o,h);const T=new Ft(p.target,h,d,p.sequenceNumber);Xo(o,T)}),o.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await rs(n,r)}}async function rs(n,e,t){if(!rr(e))throw e;n.L_.add(1),await ti(n),n.q_.set("Offline"),t||(t=()=>Ll(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await As(n)})}function jl(n,e){return e().catch(t=>rs(n,t,e))}async function Rs(n){const e=j(n),t=Qt(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;hg(e);)try{const i=await Wm(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,dg(e,i)}catch(i){await rs(e,i)}ql(e)&&$l(e)}function hg(n){return vn(n)&&n.O_.length<10}function dg(n,e){n.O_.push(e);const t=Qt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function ql(n){return vn(n)&&!Qt(n).n_()&&n.O_.length>0}function $l(n){Qt(n).start()}async function fg(n){Qt(n).p_()}async function pg(n){const e=Qt(n);for(const t of n.O_)e.m_(t.mutations)}async function mg(n,e,t){const r=n.O_.shift(),i=zo.from(r,e,t);await jl(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Rs(n)}async function gg(n,e){e&&Qt(n).V_&&await async function(r,i){if(function(a){return tm(a)&&a!==P.ABORTED}(i.code)){const o=r.O_.shift();Qt(r).s_(),await jl(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Rs(r)}}(n,e),ql(n)&&$l(n)}async function tu(n,e){const t=j(n);t.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=vn(t);t.L_.add(3),await ti(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await As(t)}async function _g(n,e){const t=j(n);e?(t.L_.delete(2),await As(t)):e||(t.L_.add(2),await ti(t),t.q_.set("Unknown"))}function ir(n){return n.K_||(n.K_=function(t,r,i){const o=j(t);return o.w_(),new ng(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:ag.bind(null,n),Ro:cg.bind(null,n),mo:ug.bind(null,n),d_:lg.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),ea(n)?Zo(n):n.q_.set("Unknown")):(await n.K_.stop(),Bl(n))})),n.K_}function Qt(n){return n.U_||(n.U_=function(t,r,i){const o=j(t);return o.w_(),new rg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:fg.bind(null,n),mo:gg.bind(null,n),f_:pg.bind(null,n),g_:mg.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Rs(n)):(await n.U_.stop(),n.O_.length>0&&(D("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class ta{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,u=new ta(e,t,a,i,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function na(n,e){if(wt("AsyncQueue",`${e}: ${n}`),rr(n))return new L(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Bn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||x.comparator(t.key,r.key):(t,r)=>x.comparator(t.key,r.key),this.keyedMap=Vr(),this.sortedSet=new ae(this.comparator)}static emptySet(e){return new Bn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Bn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Bn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class nu{constructor(){this.W_=new ae(x.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):U():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Yn{constructor(e,t,r,i,o,a,u,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,o){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new Yn(e,t,Bn.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ys(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class yg{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class vg{constructor(){this.queries=ru(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=j(t),o=i.queries;i.queries=ru(),o.forEach((a,u)=>{for(const h of u.j_)h.onError(r)})})(this,new L(P.ABORTED,"Firestore shutting down"))}}function ru(){return new yn(n=>ll(n),ys)}async function Eg(n,e){const t=j(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new yg,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await t.onListen(i,!0);break;case 1:o.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const u=na(a,`Initialization of query '${xn(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,o),o.j_.push(e),e.Z_(t.onlineState),o.z_&&e.X_(o.z_)&&ra(t)}async function Tg(n,e){const t=j(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const a=o.j_.indexOf(e);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Ig(n,e){const t=j(n);let r=!1;for(const i of e){const o=i.query,a=t.queries.get(o);if(a){for(const u of a.j_)u.X_(i)&&(r=!0);a.z_=i}}r&&ra(t)}function wg(n,e,t){const r=j(n),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(t);r.queries.delete(e)}function ra(n){n.Y_.forEach(e=>{e.next()})}var Co,iu;(iu=Co||(Co={})).ea="default",iu.Cache="cache";class Ag{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Yn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Yn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Co.Cache}}/**
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
 */class Gl{constructor(e){this.key=e}}class zl{constructor(e){this.key=e}}class Rg{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=K(),this.mutatedKeys=K(),this.Aa=hl(e),this.Ra=new Bn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new nu,i=t?t.Ra:this.Ra;let o=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,T)=>{const A=i.get(p),b=vs(this.query,T)?T:null,V=!!A&&this.mutatedKeys.has(A.key),O=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let C=!1;A&&b?A.data.isEqual(b.data)?V!==O&&(r.track({type:3,doc:b}),C=!0):this.ga(A,b)||(r.track({type:2,doc:b}),C=!0,(h&&this.Aa(b,h)>0||d&&this.Aa(b,d)<0)&&(u=!0)):!A&&b?(r.track({type:0,doc:b}),C=!0):A&&!b&&(r.track({type:1,doc:A}),C=!0,(h||d)&&(u=!0)),C&&(b?(a=a.add(b),o=O?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:u,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((p,T)=>function(b,V){const O=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return O(b)-O(V)}(p.type,T.type)||this.Aa(p.doc,T.doc)),this.pa(r),i=i!=null&&i;const u=t&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new Yn(this.query,e.Ra,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new nu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=K(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new zl(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Gl(r))}),t}ba(e){this.Ta=e.Ts,this.da=K();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Yn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Sg{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Pg{constructor(e){this.key=e,this.va=!1}}class bg{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new yn(u=>ll(u),ys),this.Ma=new Map,this.xa=new Set,this.Oa=new ae(x.comparator),this.Na=new Map,this.La=new Wo,this.Ba={},this.ka=new Map,this.qa=Qn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Cg(n,e,t=!0){const r=Jl(n);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await Kl(r,e,t,!0),i}async function kg(n,e){const t=Jl(n);await Kl(t,e,!0,!1)}async function Kl(n,e,t,r){const i=await Qm(n.localStore,it(e)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let u;return r&&(u=await Ng(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Ul(n.remoteStore,i),u}async function Ng(n,e,t,r,i){n.Ka=(T,A,b)=>async function(O,C,G,H){let J=C.view.ma(G);J.ns&&(J=await Xc(O.localStore,C.query,!1).then(({documents:E})=>C.view.ma(E,J)));const se=H&&H.targetChanges.get(C.targetId),Fe=H&&H.targetMismatches.get(C.targetId)!=null,oe=C.view.applyChanges(J,O.isPrimaryClient,se,Fe);return ou(O,C.targetId,oe.wa),oe.snapshot}(n,T,A,b);const o=await Xc(n.localStore,e,!0),a=new Rg(e,o.Ts),u=a.ma(o.documents),h=ei.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,h);ou(n,t,d.wa);const p=new Sg(e,t,a);return n.Fa.set(e,p),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function Vg(n,e,t){const r=j(n),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(a=>!ys(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await bo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Jo(r.remoteStore,i.targetId),ko(r,i.targetId)}).catch(nr)):(ko(r,i.targetId),await bo(r.localStore,i.targetId,!0))}async function Dg(n,e){const t=j(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Jo(t.remoteStore,r.targetId))}async function Og(n,e,t){const r=jg(n);try{const i=await function(a,u){const h=j(a),d=_e.now(),p=u.reduce((b,V)=>b.add(V.key),K());let T,A;return h.persistence.runTransaction("Locally write mutations","readwrite",b=>{let V=At(),O=K();return h.cs.getEntries(b,p).next(C=>{V=C,V.forEach((G,H)=>{H.isValidDocument()||(O=O.add(G))})}).next(()=>h.localDocuments.getOverlayedDocuments(b,V)).next(C=>{T=C;const G=[];for(const H of u){const J=Yp(H,T.get(H.key).overlayedDocument);J!=null&&G.push(new Jt(H.key,J,tl(J.value.mapValue),st.exists(!0)))}return h.mutationQueue.addMutationBatch(b,d,G,u)}).next(C=>{A=C;const G=C.applyToLocalDocumentSet(T,O);return h.documentOverlayCache.saveOverlays(b,C.batchId,G)})}).then(()=>({batchId:A.batchId,changes:fl(T)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new ae(Y)),d=d.insert(u,h),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,t),await ni(r,i.changes),await Rs(r.remoteStore)}catch(i){const o=na(i,"Failed to persist write");t.reject(o)}}async function Hl(n,e){const t=j(n);try{const r=await Km(t.localStore,e);e.targetChanges.forEach((i,o)=>{const a=t.Na.get(o);a&&(Z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?Z(a.va):i.removedDocuments.size>0&&(Z(a.va),a.va=!1))}),await ni(t,r,e)}catch(r){await nr(r)}}function su(n,e,t){const r=j(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((o,a)=>{const u=a.view.Z_(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const h=j(a);h.onlineState=u;let d=!1;h.queries.forEach((p,T)=>{for(const A of T.j_)A.Z_(u)&&(d=!0)}),d&&ra(h)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Lg(n,e,t){const r=j(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),o=i&&i.key;if(o){let a=new ae(x.comparator);a=a.insert(o,Me.newNoDocument(o,B.min()));const u=K().add(o),h=new Is(B.min(),new Map,new ae(Y),a,u);await Hl(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(e),ia(r)}else await bo(r.localStore,e,!1).then(()=>ko(r,e,t)).catch(nr)}async function Mg(n,e){const t=j(n),r=e.batch.batchId;try{const i=await zm(t.localStore,e);Ql(t,r,null),Wl(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ni(t,i)}catch(i){await nr(i)}}async function xg(n,e,t){const r=j(n);try{const i=await function(a,u){const h=j(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,u).next(T=>(Z(T!==null),p=T.keys(),h.mutationQueue.removeMutationBatch(d,T))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,e);Ql(r,e,t),Wl(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ni(r,i)}catch(i){await nr(i)}}function Wl(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Ql(n,e,t){const r=j(n);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function ko(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Yl(n,r)})}function Yl(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Jo(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),ia(n))}function ou(n,e,t){for(const r of t)r instanceof Gl?(n.La.addReference(r.key,e),Ug(n,r)):r instanceof zl?(D("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Yl(n,r.key)):U()}function Ug(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(D("SyncEngine","New document in limbo: "+t),n.xa.add(r),ia(n))}function ia(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new x(ie.fromString(e)),r=n.qa.next();n.Na.set(r,new Pg(t)),n.Oa=n.Oa.insert(t,r),Ul(n.remoteStore,new Ft(it(cl(t.path)),r,"TargetPurposeLimboResolution",ms.oe))}}async function ni(n,e,t){const r=j(n),i=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((u,h)=>{a.push(r.Ka(h,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const T=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(d){i.push(d);const T=Yo.Wi(h.targetId,d);o.push(T)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(h,d){const p=j(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>S.forEach(d,A=>S.forEach(A.$i,b=>p.persistence.referenceDelegate.addReference(T,A.targetId,b)).next(()=>S.forEach(A.Ui,b=>p.persistence.referenceDelegate.removeReference(T,A.targetId,b)))))}catch(T){if(!rr(T))throw T;D("LocalStore","Failed to update sequence numbers: "+T)}for(const T of d){const A=T.targetId;if(!T.fromCache){const b=p.os.get(A),V=b.snapshotVersion,O=b.withLastLimboFreeSnapshotVersion(V);p.os=p.os.insert(A,O)}}}(r.localStore,o))}async function Fg(n,e){const t=j(n);if(!t.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await Ol(t.localStore,e);t.currentUser=e,function(o,a){o.ka.forEach(u=>{u.forEach(h=>{h.reject(new L(P.CANCELLED,a))})}),o.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ni(t,r.hs)}}function Bg(n,e){const t=j(n),r=t.Na.get(e);if(r&&r.va)return K().add(r.key);{let i=K();const o=t.Ma.get(e);if(!o)return i;for(const a of o){const u=t.Fa.get(a);i=i.unionWith(u.view.Va)}return i}}function Jl(n){const e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Lg.bind(null,e),e.Ca.d_=Ig.bind(null,e.eventManager),e.Ca.$a=wg.bind(null,e.eventManager),e}function jg(n){const e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Mg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xg.bind(null,e),e}class is{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ws(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Gm(this.persistence,new qm,e.initialUser,this.serializer)}Ga(e){return new Dl(Qo.Zr,this.serializer)}Wa(e){return new Jm}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}is.provider={build:()=>new is};class qg extends is{constructor(e){super(),this.cacheSizeBytes=e}ja(e,t){Z(this.persistence.referenceDelegate instanceof ns);const r=this.persistence.referenceDelegate.garbageCollector;return new Pm(r,e.asyncQueue,t)}Ga(e){const t=this.cacheSizeBytes!==void 0?je.withCacheSize(this.cacheSizeBytes):je.DEFAULT;return new Dl(r=>ns.Zr(r,t),this.serializer)}}class No{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>su(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fg.bind(null,this.syncEngine),await _g(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vg}()}createDatastore(e){const t=ws(e.databaseInfo.databaseId),r=function(o){return new tg(o)}(e.databaseInfo);return function(o,a,u,h){return new ig(o,a,u,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,u){return new og(r,i,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>su(this.syncEngine,t,0),function(){return eu.D()?new eu:new Xm}())}createSyncEngine(e,t){return function(i,o,a,u,h,d,p){const T=new bg(i,o,a,u,h,d);return p&&(T.Qa=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=j(i);D("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await ti(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}No.provider={build:()=>new No};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $g{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):wt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Gg{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Le.UNAUTHENTICATED,this.clientId=Xu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{D("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(D("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=na(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function so(n,e){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ol(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function au(n,e){n.asyncQueue.verifyOperationInProgress();const t=await zg(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>tu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>tu(e.remoteStore,i)),n._onlineComponents=e}async function zg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await so(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;zn("Error using user provided cache. Falling back to memory cache: "+t),await so(n,new is)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await so(n,new qg(void 0));return n._offlineComponents}async function Xl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await au(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await au(n,new No))),n._onlineComponents}function Kg(n){return Xl(n).then(e=>e.syncEngine)}async function Hg(n){const e=await Xl(n),t=e.eventManager;return t.onListen=Cg.bind(null,e.syncEngine),t.onUnlisten=Vg.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=kg.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Dg.bind(null,e.syncEngine),t}function Wg(n,e,t={}){const r=new $t;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const p=new $g({next:A=>{p.Za(),a.enqueueAndForget(()=>Tg(o,T)),A.fromCache&&h.source==="server"?d.reject(new L(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(A)},error:A=>d.reject(A)}),T=new Ag(u,p,{includeMetadataChanges:!0,_a:!0});return Eg(o,T)}(await Hg(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Zl(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=new Map;/**
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
 */function eh(n,e,t){if(!t)throw new L(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Qg(n,e,t,r){if(e===!0&&r===!0)throw new L(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function uu(n){if(!x.isDocumentKey(n))throw new L(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function lu(n){if(x.isDocumentKey(n))throw new L(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ss(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U()}function Jn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ss(n);throw new L(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Qg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zl((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ps{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rp;switch(r.type){case"firstParty":return new ap(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=cu.get(t);r&&(D("ComponentProvider","Removing Datastore"),cu.delete(t),r.terminate())}(this),Promise.resolve()}}function Yg(n,e,t,r={}){var i;const o=(n=Jn(n,Ps))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&zn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=Le.MOCK_USER;else{u=kd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new L(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Le(d)}n._authCredentials=new ip(new Ju(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new sr(this.firestore,e,this._query)}}class ze{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}}class Gt extends sr{constructor(e,t,r){super(e,t,cl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new x(e))}withConverter(e){return new Gt(this.firestore,e,this._path)}}function Di(n,e,...t){if(n=Ce(n),eh("collection","path",e),n instanceof Ps){const r=ie.fromString(e,...t);return lu(r),new Gt(n,null,r)}{if(!(n instanceof ze||n instanceof Gt))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return lu(r),new Gt(n.firestore,null,r)}}function Jg(n,e,...t){if(n=Ce(n),arguments.length===1&&(e=Xu.newId()),eh("doc","path",e),n instanceof Ps){const r=ie.fromString(e,...t);return uu(r),new ze(n,null,new x(r))}{if(!(n instanceof ze||n instanceof Gt))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return uu(r),new ze(n.firestore,n instanceof Gt?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ml(this,"async_queue_retry"),this.Vu=()=>{const r=io();r&&D("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=io();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=io();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new $t;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!rr(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw wt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=ta.createAndSchedule(this,e,t,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&U()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class bs extends Ps{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new du,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new du(e),this._firestoreClient=void 0,await e}}}function Xg(n,e){const t=typeof n=="object"?n:qu(),r=typeof n=="string"?n:"(default)",i=Uo(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=bd("firestore");o&&Yg(i,...o)}return i}function th(n){if(n._terminated)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Zg(n),n._firestoreClient}function Zg(n){var e,t,r;const i=n._freezeSettings(),o=function(u,h,d,p){return new Ip(u,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Zl(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Gg(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xn(ke.fromBase64String(e))}catch(t){throw new L(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xn(ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this._methodName=e}}/**
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
 */class oa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
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
 */class aa{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const e_=/^__.*__$/;class t_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Jt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Zr(e,this.data,t,this.fieldTransforms)}}class nh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Jt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class ca{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ca(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ss(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(rh(this.Cu)&&e_.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class n_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ws(e)}Qu(e,t,r,i=!1){return new ca({Cu:e,methodName:t,qu:r,path:be.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ua(n){const e=n._freezeSettings(),t=ws(n._databaseId);return new n_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function r_(n,e,t,r,i,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,e,t,i);la("Data must be an object, but it was:",a,r);const u=ih(r,a);let h,d;if(o.merge)h=new Ge(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const T of o.mergeFields){const A=Vo(e,T,t);if(!a.contains(A))throw new L(P.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);oh(p,A)||p.push(A)}h=new Ge(p),d=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,d=a.fieldTransforms;return new t_(new qe(u),h,d)}class ks extends sa{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ks}}function i_(n,e,t,r){const i=n.Qu(1,e,t);la("Data must be an object, but it was:",i,r);const o=[],a=qe.empty();Yt(r,(h,d)=>{const p=ha(e,h,t);d=Ce(d);const T=i.Nu(p);if(d instanceof ks)o.push(p);else{const A=ri(d,T);A!=null&&(o.push(p),a.set(p,A))}});const u=new Ge(o);return new nh(a,u,i.fieldTransforms)}function s_(n,e,t,r,i,o){const a=n.Qu(1,e,t),u=[Vo(e,r,t)],h=[i];if(o.length%2!=0)throw new L(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)u.push(Vo(e,o[A])),h.push(o[A+1]);const d=[],p=qe.empty();for(let A=u.length-1;A>=0;--A)if(!oh(d,u[A])){const b=u[A];let V=h[A];V=Ce(V);const O=a.Nu(b);if(V instanceof ks)d.push(b);else{const C=ri(V,O);C!=null&&(d.push(b),p.set(b,C))}}const T=new Ge(d);return new nh(p,T,a.fieldTransforms)}function o_(n,e,t,r=!1){return ri(t,n.Qu(r?4:3,e))}function ri(n,e){if(sh(n=Ce(n)))return la("Unsupported field value:",e,n),ih(n,e);if(n instanceof sa)return function(r,i){if(!rh(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const u of r){let h=ri(u,i.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=Ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Gp(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=_e.fromDate(r);return{timestampValue:ts(i.serializer,o)}}if(r instanceof _e){const o=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ts(i.serializer,o)}}if(r instanceof oa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xn)return{bytesValue:Sl(i.serializer,r._byteString)};if(r instanceof ze){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ho(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof aa)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.Bu("VectorValues must only contain numeric values.");return Go(u.serializer,h)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Ss(r)}`)}(n,e)}function ih(n,e){const t={};return Zu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yt(n,(r,i)=>{const o=ri(i,e.Mu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function sh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _e||n instanceof oa||n instanceof Xn||n instanceof ze||n instanceof sa||n instanceof aa)}function la(n,e,t){if(!sh(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Ss(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Vo(n,e,t){if((e=Ce(e))instanceof Cs)return e._internalPath;if(typeof e=="string")return ha(n,e);throw ss("Field path arguments must be of type string or ",n,!1,void 0,t)}const a_=new RegExp("[~\\*/\\[\\]]");function ha(n,e,t){if(e.search(a_)>=0)throw ss(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Cs(...e.split("."))._internalPath}catch{throw ss(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ss(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new L(P.INVALID_ARGUMENT,u+n+h)}function oh(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new c_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(da("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class c_ extends ah{data(){return super.data()}}function da(n,e){return typeof e=="string"?ha(n,e):e instanceof Cs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fa{}class l_ extends fa{}function oo(n,e,...t){let r=[];e instanceof fa&&r.push(e),r=r.concat(t),function(o){const a=o.filter(h=>h instanceof pa).length,u=o.filter(h=>h instanceof Ns).length;if(a>1||a>0&&u>0)throw new L(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Ns extends l_{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ns(e,t,r)}_apply(e){const t=this._parse(e);return ch(e._query,t),new sr(e.firestore,e.converter,Io(e._query,t))}_parse(e){const t=ua(e.firestore);return function(o,a,u,h,d,p,T){let A;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new L(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){pu(T,p);const b=[];for(const V of T)b.push(fu(h,o,V));A={arrayValue:{values:b}}}else A=fu(h,o,T)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||pu(T,p),A=o_(u,a,T,p==="in"||p==="not-in");return fe.create(d,p,A)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ao(n,e,t){const r=e,i=da("where",n);return Ns._create(i,r,t)}class pa extends fa{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new pa(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:et.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,o){let a=i;const u=o.getFlattenedFilters();for(const h of u)ch(a,h),a=Io(a,h)}(e._query,t),new sr(e.firestore,e.converter,Io(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function fu(n,e,t){if(typeof(t=Ce(t))=="string"){if(t==="")throw new L(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ul(e)&&t.indexOf("/")!==-1)throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ie.fromString(t));if(!x.isDocumentKey(r))throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Dc(n,new x(r))}if(t instanceof ze)return Dc(n,t._key);throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ss(t)}.`)}function pu(n,e){if(!Array.isArray(n)||n.length===0)throw new L(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ch(n,e){const t=function(i,o){for(const a of i)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class h_{convertValue(e,t="none"){switch(Wt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ht(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Yt(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,i;const o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>le(a.doubleValue));return new aa(o)}convertGeoPoint(e){return new oa(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=_s(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(jr(e));default:return null}}convertTimestamp(e){const t=Kt(e);return new _e(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ie.fromString(e);Z(Vl(r));const i=new qr(r.get(1),r.get(3)),o=new x(r.popFirst(5));return i.isEqual(t)||wt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class f_ extends ah{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(da("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class qi extends f_{data(e={}){return super.data(e)}}class p_{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Oi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new qi(this._firestore,this._userDataWriter,r.key,r,new Oi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const h=new qi(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Oi(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new qi(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Oi(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:m_(u.type),doc:h,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function m_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}class g_ extends h_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,t)}}function co(n){n=Jn(n,sr);const e=Jn(n.firestore,bs),t=th(e),r=new g_(e);return u_(n._query),Wg(t,n._query).then(i=>new p_(e,r,n,i))}function __(n,e,t,...r){n=Jn(n,ze);const i=Jn(n.firestore,bs),o=ua(i);let a;return a=typeof(e=Ce(e))=="string"||e instanceof Cs?s_(o,"updateDoc",n._key,e,t,r):i_(o,"updateDoc",n._key,e),uh(i,[a.toMutation(n._key,st.exists(!0))])}function y_(n,e){const t=Jn(n.firestore,bs),r=Jg(n),i=d_(n.converter,e);return uh(t,[r_(ua(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,st.exists(!1))]).then(()=>r)}function uh(n,e){return function(r,i){const o=new $t;return r.asyncQueue.enqueueAndForget(async()=>Og(await Kg(r),i,o)),o.promise}(th(n),e)}(function(e,t=!0){(function(i){tr=i})(er),Gn(new mn("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new bs(new sp(r.getProvider("auth-internal")),new up(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new L(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qr(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),qt(Pc,"4.7.4",e),qt(Pc,"4.7.4","esm2017")})();function ma(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function lh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const v_=lh,hh=new Yr("auth","Firebase",lh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new Mo("@firebase/auth");function E_(n,...e){os.logLevel<=z.WARN&&os.warn(`Auth (${er}): ${n}`,...e)}function $i(n,...e){os.logLevel<=z.ERROR&&os.error(`Auth (${er}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(n,...e){throw _a(n,...e)}function Ze(n,...e){return _a(n,...e)}function ga(n,e,t){const r=Object.assign(Object.assign({},v_()),{[e]:t});return new Yr("auth","Firebase",r).create(e,{appName:n.name})}function pn(n){return ga(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function T_(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ut(n,"argument-error"),ga(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _a(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return hh.create(n,...e)}function F(n,e,...t){if(!n)throw _a(e,...t)}function vt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw $i(e),new Error(e)}function Rt(n,e){n||vt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function I_(){return mu()==="http:"||mu()==="https:"}function mu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(I_()||Od()||"connection"in navigator)?navigator.onLine:!0}function A_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rt(t>e,"Short delay should be less than long delay!"),this.isMobile=Nd()||Ld()}get(){return w_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(n,e){Rt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=new ii(3e4,6e4);function va(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function or(n,e,t,r,i={}){return fh(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const u=Jr(Object.assign({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:h},o);return Dd()||(d.referrerPolicy="no-referrer"),dh.fetch()(ph(n,n.config.apiHost,t,u),d)})}async function fh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},R_),e);try{const i=new b_(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Li(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const u=o.ok?a.errorMessage:a.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Li(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Li(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Li(n,"user-disabled",a);const p=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ga(n,p,d);ut(n,p)}}catch(i){if(i instanceof St)throw i;ut(n,"network-request-failed",{message:String(i)})}}async function P_(n,e,t,r,i={}){const o=await or(n,e,t,r,i);return"mfaPendingCredential"in o&&ut(n,"multi-factor-auth-required",{_serverResponse:o}),o}function ph(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?ya(n.config,i):`${n.config.apiScheme}://${i}`}class b_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ze(this.auth,"network-request-failed")),S_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Li(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ze(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C_(n,e){return or(n,"POST","/v1/accounts:delete",e)}async function mh(n,e){return or(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function k_(n,e=!1){const t=Ce(n),r=await t.getIdToken(e),i=Ea(r);F(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ur(uo(i.auth_time)),issuedAtTime:Ur(uo(i.iat)),expirationTime:Ur(uo(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function uo(n){return Number(n)*1e3}function Ea(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return $i("JWT malformed, contained fewer than 3 sections"),null;try{const i=Lu(t);return i?JSON.parse(i):($i("Failed to decode base64 JWT payload"),null)}catch(i){return $i("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gu(n){const e=Ea(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof St&&N_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function N_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ur(this.lastLoginAt),this.creationTime=Ur(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function as(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Kr(n,mh(t,{idToken:r}));F(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?gh(o.providerUserInfo):[],u=O_(n.providerData,a),h=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!(u!=null&&u.length),p=h?d:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Oo(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(n,T)}async function D_(n){const e=Ce(n);await as(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function O_(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gh(n){return n.map(e=>{var{providerId:t}=e,r=ma(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(n,e){const t=await fh(n,{},async()=>{const r=Jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=ph(n,i,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",dh.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function M_(n,e){return or(n,"POST","/v2/accounts:revokeToken",va(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=gu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await L_(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new jn;return r&&(F(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(F(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jn,this.toJSON())}_performRefresh(){return vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Et{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=ma(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new V_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Oo(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Kr(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return k_(this,e)}reload(){return D_(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Et(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await as(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yt(this.auth.app))return Promise.reject(pn(this.auth));const e=await this.getIdToken();return await Kr(this,C_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,u,h,d,p;const T=(r=t.displayName)!==null&&r!==void 0?r:void 0,A=(i=t.email)!==null&&i!==void 0?i:void 0,b=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,V=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(u=t.tenantId)!==null&&u!==void 0?u:void 0,C=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,G=(d=t.createdAt)!==null&&d!==void 0?d:void 0,H=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:J,emailVerified:se,isAnonymous:Fe,providerData:oe,stsTokenManager:E}=t;F(J&&E,e,"internal-error");const g=jn.fromJSON(this.name,E);F(typeof J=="string",e,"internal-error"),Lt(T,e.name),Lt(A,e.name),F(typeof se=="boolean",e,"internal-error"),F(typeof Fe=="boolean",e,"internal-error"),Lt(b,e.name),Lt(V,e.name),Lt(O,e.name),Lt(C,e.name),Lt(G,e.name),Lt(H,e.name);const _=new Et({uid:J,auth:e,email:A,emailVerified:se,displayName:T,isAnonymous:Fe,photoURL:V,phoneNumber:b,tenantId:O,stsTokenManager:g,createdAt:G,lastLoginAt:H});return oe&&Array.isArray(oe)&&(_.providerData=oe.map(y=>Object.assign({},y))),C&&(_._redirectEventId=C),_}static async _fromIdTokenResponse(e,t,r=!1){const i=new jn;i.updateFromServerResponse(t);const o=new Et({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await as(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];F(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?gh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),u=new jn;u.updateFromIdToken(r);const h=new Et({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Oo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=new Map;function Tt(n){Rt(n instanceof Function,"Expected a class definition");let e=_u.get(n);return e?(Rt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,_u.set(n,e),e)}/**
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
 */class _h{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}_h.type="NONE";const yu=_h;/**
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
 */function Gi(n,e,t){return`firebase:${n}:${e}:${t}`}class qn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Gi(this.userKey,i.apiKey,o),this.fullPersistenceKey=Gi("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Et._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new qn(Tt(yu),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||Tt(yu);const a=Gi(r,e.config.apiKey,e.name);let u=null;for(const d of t)try{const p=await d._get(a);if(p){const T=Et._fromJSON(e,p);d!==o&&(u=T),o=d;break}}catch{}const h=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new qn(o,e,r):(o=h[0],u&&await o._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new qn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Th(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wh(e))return"Blackberry";if(Ah(e))return"Webos";if(vh(e))return"Safari";if((e.includes("chrome/")||Eh(e))&&!e.includes("edge/"))return"Chrome";if(Ih(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yh(n=xe()){return/firefox\//i.test(n)}function vh(n=xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Eh(n=xe()){return/crios\//i.test(n)}function Th(n=xe()){return/iemobile/i.test(n)}function Ih(n=xe()){return/android/i.test(n)}function wh(n=xe()){return/blackberry/i.test(n)}function Ah(n=xe()){return/webos/i.test(n)}function Ta(n=xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function x_(n=xe()){var e;return Ta(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function U_(){return Md()&&document.documentMode===10}function Rh(n=xe()){return Ta(n)||Ih(n)||Ah(n)||wh(n)||/windows phone/i.test(n)||Th(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(n,e=[]){let t;switch(n){case"Browser":t=vu(xe());break;case"Worker":t=`${vu(xe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${er}/${r}`}/**
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
 */class F_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,u)=>{try{const h=e(o);a(h)}catch(h){u(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function B_(n,e={}){return or(n,"GET","/v2/passwordPolicy",va(n,e))}/**
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
 */const j_=6;class q_{constructor(e){var t,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:j_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Eu(this),this.idTokenSubscription=new Eu(this),this.beforeStateQueue=new F_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Tt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await qn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await mh(this,{idToken:e}),r=await Et._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(yt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===u)&&(h!=null&&h.user)&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await as(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yt(this.app))return Promise.reject(pn(this));const t=e?Ce(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yt(this.app)?Promise.reject(pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yt(this.app)?Promise.reject(pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await B_(this),t=new q_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await M_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Tt(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await qn.create(this,[Tt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&E_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Vs(n){return Ce(n)}class Eu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gd(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ia={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function G_(n){Ia=n}function z_(n){return Ia.loadJS(n)}function K_(){return Ia.gapiScript}function H_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(n,e){const t=Uo(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(Wi(o,e??{}))return i;ut(i,"already-initialized")}return t.initialize({options:e})}function Q_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Tt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Y_(n,e,t){const r=Vs(n);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Ph(e),{host:a,port:u}=J_(e),h=u===null?"":`:${u}`;r.config.emulator={url:`${o}//${a}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),X_()}function Ph(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function J_(n){const e=Ph(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Tu(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Tu(a)}}}function Tu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function X_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return vt("not implemented")}_getIdTokenResponse(e){return vt("not implemented")}_linkToIdToken(e,t){return vt("not implemented")}_getReauthenticationResolver(e){return vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $n(n,e){return P_(n,"POST","/v1/accounts:signInWithIdp",va(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="http://localhost";class _n extends bh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ut("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=ma(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new _n(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return $n(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,$n(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$n(e,t)}buildRequest(){const e={requestUri:Z_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Jr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class si extends wa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends si{constructor(){super("facebook.com")}static credential(e){return _n._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends si{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _n._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return gt.credential(t,r)}catch{return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com";gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends si{constructor(){super("github.com")}static credential(e){return _n._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.GITHUB_SIGN_IN_METHOD="github.com";xt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends si{constructor(){super("twitter.com")}static credential(e,t){return _n._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ut.credential(t,r)}catch{return null}}}Ut.TWITTER_SIGN_IN_METHOD="twitter.com";Ut.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Et._fromIdTokenResponse(e,r,i),a=Iu(r);return new Zn({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Iu(r);return new Zn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Iu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends St{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cs.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new cs(e,t,r,i)}}function Ch(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?cs._fromErrorAndOperation(n,o,e,r):o})}async function ey(n,e,t=!1){const r=await Kr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Zn._forOperation(n,"link",r)}/**
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
 */async function ty(n,e,t=!1){const{auth:r}=n;if(yt(r.app))return Promise.reject(pn(r));const i="reauthenticate";try{const o=await Kr(n,Ch(r,i,e,n),t);F(o.idToken,r,"internal-error");const a=Ea(o.idToken);F(a,r,"internal-error");const{sub:u}=a;return F(n.uid===u,r,"user-mismatch"),Zn._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&ut(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny(n,e,t=!1){if(yt(n.app))return Promise.reject(pn(n));const r="signIn",i=await Ch(n,r,e),o=await Zn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}function ry(n,e,t,r){return Ce(n).onIdTokenChanged(e,t,r)}function iy(n,e,t){return Ce(n).beforeAuthStateChanged(e,t)}function sy(n,e,t,r){return Ce(n).onAuthStateChanged(e,t,r)}function oy(n){return Ce(n).signOut()}const us="__sak";/**
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
 */class kh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(us,"1"),this.storage.removeItem(us),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=1e3,cy=10;class Nh extends kh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Rh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);U_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cy):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ay)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nh.type="LOCAL";const uy=Nh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh extends kh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Vh.type="SESSION";const Dh=Vh;/**
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
 */function ly(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ds{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Ds(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async d=>d(t.origin,o)),h=await ly(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ds.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class hy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((u,h)=>{const d=Aa("",20);i.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(T){const A=T;if(A.data.eventId===d)switch(A.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(A.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return window}function dy(n){at().location.href=n}/**
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
 */function Oh(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function fy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function py(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function my(){return Oh()?self:null}/**
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
 */const Lh="firebaseLocalStorageDb",gy=1,ls="firebaseLocalStorage",Mh="fbase_key";class oi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Os(n,e){return n.transaction([ls],e?"readwrite":"readonly").objectStore(ls)}function _y(){const n=indexedDB.deleteDatabase(Lh);return new oi(n).toPromise()}function Lo(){const n=indexedDB.open(Lh,gy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ls,{keyPath:Mh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ls)?e(r):(r.close(),await _y(),e(await Lo()))})})}async function wu(n,e,t){const r=Os(n,!0).put({[Mh]:e,value:t});return new oi(r).toPromise()}async function yy(n,e){const t=Os(n,!1).get(e),r=await new oi(t).toPromise();return r===void 0?null:r.value}function Au(n,e){const t=Os(n,!0).delete(e);return new oi(t).toPromise()}const vy=800,Ey=3;class xh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ey)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Oh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ds._getInstance(my()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await fy(),!this.activeServiceWorker)return;this.sender=new hy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||py()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lo();return await wu(e,us,"1"),await Au(e,us),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>wu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>yy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Au(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Os(i,!1).getAll();return new oi(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xh.type="LOCAL";const Ty=xh;new ii(3e4,6e4);/**
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
 */function Uh(n,e){return e?Tt(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ra extends bh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $n(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $n(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $n(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Iy(n){return ny(n.auth,new Ra(n),n.bypassAuthState)}function wy(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),ty(t,new Ra(n),n.bypassAuthState)}async function Ay(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),ey(t,new Ra(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Iy;case"linkViaPopup":case"linkViaRedirect":return Ay;case"reauthViaPopup":case"reauthViaRedirect":return wy;default:ut(this.auth,"internal-error")}}resolve(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=new ii(2e3,1e4);async function Sy(n,e,t){if(yt(n.app))return Promise.reject(Ze(n,"operation-not-supported-in-this-environment"));const r=Vs(n);T_(n,e,wa);const i=Uh(r,t);return new dn(r,"signInViaPopup",e,i).executeNotNull()}class dn extends Fh{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,dn.currentPopupAction&&dn.currentPopupAction.cancel(),dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Rt(this.filter.length===1,"Popup operations only handle one event");const e=Aa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ry.get())};e()}}dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py="pendingRedirect",zi=new Map;class by extends Fh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=zi.get(this.auth._key());if(!e){try{const r=await Cy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}zi.set(this.auth._key(),e)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cy(n,e){const t=Vy(e),r=Ny(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function ky(n,e){zi.set(n._key(),e)}function Ny(n){return Tt(n._redirectPersistence)}function Vy(n){return Gi(Py,n.config.apiKey,n.name)}async function Dy(n,e,t=!1){if(yt(n.app))return Promise.reject(pn(n));const r=Vs(n),i=Uh(r,e),a=await new by(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=10*60*1e3;class Ly{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!My(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Bh(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ze(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Oy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ru(e))}saveEventToCache(e){this.cachedEventUids.add(Ru(e)),this.lastProcessedEventTime=Date.now()}}function Ru(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Bh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function My(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xy(n,e={}){return or(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fy=/^https?/;async function By(n){if(n.config.emulator)return;const{authorizedDomains:e}=await xy(n);for(const t of e)try{if(jy(t))return}catch{}ut(n,"unauthorized-domain")}function jy(n){const e=Do(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Fy.test(t))return!1;if(Uy.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const qy=new ii(3e4,6e4);function Su(){const n=at().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function $y(n){return new Promise((e,t)=>{var r,i,o;function a(){Su(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Su(),t(Ze(n,"network-request-failed"))},timeout:qy.get()})}if(!((i=(r=at().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=at().gapi)===null||o===void 0)&&o.load)a();else{const u=H_("iframefcb");return at()[u]=()=>{gapi.load?a():t(Ze(n,"network-request-failed"))},z_(`${K_()}?onload=${u}`).catch(h=>t(h))}}).catch(e=>{throw Ki=null,e})}let Ki=null;function Gy(n){return Ki=Ki||$y(n),Ki}/**
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
 */const zy=new ii(5e3,15e3),Ky="__/auth/iframe",Hy="emulator/auth/iframe",Wy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yy(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ya(e,Hy):`https://${n.config.authDomain}/${Ky}`,r={apiKey:e.apiKey,appName:n.name,v:er},i=Qy.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Jr(r).slice(1)}`}async function Jy(n){const e=await Gy(n),t=at().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:Yy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wy,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=Ze(n,"network-request-failed"),u=at().setTimeout(()=>{o(a)},zy.get());function h(){at().clearTimeout(u),i(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
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
 */const Xy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zy=500,ev=600,tv="_blank",nv="http://localhost";class Pu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rv(n,e,t,r=Zy,i=ev){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h=Object.assign(Object.assign({},Xy),{width:r.toString(),height:i.toString(),top:o,left:a}),d=xe().toLowerCase();t&&(u=Eh(d)?tv:t),yh(d)&&(e=e||nv,h.scrollbars="yes");const p=Object.entries(h).reduce((A,[b,V])=>`${A}${b}=${V},`,"");if(x_(d)&&u!=="_self")return iv(e||"",u),new Pu(null);const T=window.open(e||"",u,p);F(T,n,"popup-blocked");try{T.focus()}catch{}return new Pu(T)}function iv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const sv="__/auth/handler",ov="emulator/auth/handler",av=encodeURIComponent("fac");async function bu(n,e,t,r,i,o){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:er,eventId:i};if(e instanceof wa){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",$d(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,T]of Object.entries({}))a[p]=T}if(e instanceof si){const p=e.getScopes().filter(T=>T!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const h=await n._getAppCheckToken(),d=h?`#${av}=${encodeURIComponent(h)}`:"";return`${cv(n)}?${Jr(u).slice(1)}${d}`}function cv({config:n}){return n.emulator?ya(n,ov):`https://${n.authDomain}/${sv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="webStorageSupport";class uv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dh,this._completeRedirectFn=Dy,this._overrideRedirectResult=ky}async _openPopup(e,t,r,i){var o;Rt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await bu(e,t,r,Do(),i);return rv(e,a,Aa())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await bu(e,t,r,Do(),i);return dy(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(Rt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Jy(e),r=new Ly(e);return t.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(lo,{type:lo},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[lo];a!==void 0&&t(!!a),ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=By(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Rh()||vh()||Ta()}}const lv=uv;var Cu="@firebase/auth",ku="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fv(n){Gn(new mn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sh(n)},d=new $_(r,i,o,h);return Q_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Gn(new mn("auth-internal",e=>{const t=Vs(e.getProvider("auth").getImmediate());return(r=>new hv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(Cu,ku,dv(n)),qt(Cu,ku,"esm2017")}/**
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
 */const pv=5*60,mv=Uu("authIdTokenMaxAge")||pv;let Nu=null;const gv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>mv)return;const i=t==null?void 0:t.token;Nu!==i&&(Nu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _v(n=qu()){const e=Uo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=W_(n,{popupRedirectResolver:lv,persistence:[Ty,uy,Dh]}),r=Uu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=gv(o.toString());iy(t,a,()=>a(t.currentUser)),ry(t,u=>a(u))}}const i=Mu("auth");return i&&Y_(t,`http://${i}`),t}function yv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}G_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=Ze("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",yv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fv("Browser");var vv=hs('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>');function Ev(n,e){Wr(e,!0);let t=Hr(e,"size",3,"md");var r=vv();_t(()=>ds(r,e.class||fs[t()])),de(n,r),Qr()}var Tv=hs('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"></path></svg>');function Iv(n,e){Wr(e,!0);let t=Hr(e,"size",3,"md");var r=Tv();_t(()=>ds(r,e.class||fs[t()])),de(n,r),Qr()}var wv=hs('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"></path></svg>');function Av(n,e){Wr(e,!0);let t=Hr(e,"size",3,"md");var r=wv();_t(()=>ds(r,e.class||fs[t()])),de(n,r),Qr()}var Rv=hs('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path></svg>');function Sv(n,e){Wr(e,!0);let t=Hr(e,"size",3,"md");var r=Rv();_t(()=>ds(r,e.class||fs[t()])),de(n,r),Qr()}var Pv=Ke("<li> </li>"),bv=Ke('<ul class="flex flex-col gap-2"></ul>'),Cv=Ke("<span>N/A</span>");function Mi(n,e){let t=Hr(e,"jsonArrayObject",19,()=>[]);var r=Vu(),i=mt(r);kr(i,()=>Array.isArray(t()),o=>{var a=bv();ld(a,21,t,u=>u.l,(u,h)=>{var d=Pv(),p=$(d);q(d),_t(()=>Se(p,te(h).l)),de(u,d)}),q(a),de(o,a)},o=>{var a=Cv();de(o,a)}),de(n,r)}var kv=Ke("<!> Bandingkan remote & local data",1),Nv=Ke("<!> Upload local data to the remote",1),Vv=Ke("<!> Sync local with remote data",1),Dv=Ke("<span> </span>"),Ov=Ke('<ul class="flex flex-col gap-2"><li> </li> <li> </li></ul>'),Lv=Ke('<div class="mt-4 relative overflow-x-auto shadow-md rounded-lg border-2 border-secondary"><table class="table-stripped"><thead><tr><th scope="col">Field</th><th scope="col">Remote</th><th scope="col">Local</th></tr></thead><tbody><tr><td>Audio</td><td> </td><td> </td></tr><tr><td>Auto Next</td><td> </td><td> </td></tr><tr><td>Tafsir</td><td> </td><td> </td></tr><tr><td>Translation</td><td> </td><td> </td></tr><tr><td>Theme</td><td> </td><td> </td></tr><tr><td>Location</td><td><!></td><td><ul class="flex flex-col gap-2"><li> </li> <li> </li></ul></td></tr><tr><td>Last Read</td><td><!></td><td><!></td></tr><tr><td>Pinned Surah</td><td><!></td><td><!></td></tr></tbody></table></div>'),Mv=Ke("<!> Sign Out",1),xv=Ke('<p>Kamu telah login sebagai: <b> </b></p> <div class="flex flex-col flex-wrap gap-2 my-4"><!> <!> <!></div> <!> <div class="flex flex-wrap gap-2 mt-4"><!></div>',1),Uv=Ke('<p>Masuk ke Akun Google untuk melakukan sync</p> <div class="flex gap-2 mt-4"><!></div>',1),Fv=Ke('<div class="flex gap-2 px-4 mb-4"><h1 class="text-3xl font-bold">🔄 Sync Data</h1></div> <div class="px-4 mb-4"><!></div> <div class="px-4"><!></div>',1);function eE(n,e){Wr(e,!0);const t=cd(),r=()=>pt(lc,"$settingAudio",t),i=()=>pt(uc,"$settingAutoNext",t),o=()=>pt(ac,"$settingTafsir",t),a=()=>pt(cc,"$settingTranslation",t),u=()=>pt(hc,"$activeTheme",t),h=()=>pt(dc,"$settingLocation",t),d=()=>pt(fc,"$lastReadVerses",t),p=()=>pt(pc,"$pinnedSurah",t),T=()=>pt(mc,"$logPrayer",t),b=ju({apiKey:Ed,authDomain:_d,projectId:yd,storageBucket:gd,messagingSenderId:pd,appId:vd,measurementId:md}),V=Xg(b);let O=oc(null),C=oc(null);const G=new gt;G.addScope("https://www.googleapis.com/auth/userinfo.profile"),G.addScope("https://www.googleapis.com/auth/userinfo.email"),G.setCustomParameters({login_hint:"user@example.com"});const H=_v();sy(H,m=>{m?Sr(O,bi(m)):Sr(O,null)});const J=()=>{Sy(H,G).then(m=>{const ne=m.user;rt.show({message:`Berhasil login. Selamat datang ${ne.displayName}!`,type:"success"})}).catch(m=>{rt.show({message:`Gagal login: ${m.message}`,type:"error"})})},se=()=>{oy(H).then(()=>{rt.show({message:"Berhasil logout!",type:"success"})}).catch(m=>{rt.show({message:`Gagal logout: ${m.message}`,type:"error"})})},Fe=async()=>{var we,ye;const m=Di(V,"progress"),ne=oo(m,ao("uid","==",(we=te(O))==null?void 0:we.uid)),ce=await co(ne);ce.size>0?ce.forEach(k=>{Sr(C,bi(k.data()))}):Sr(C,bi({uid:(ye=te(O))==null?void 0:ye.uid,[M.STORAGE_KEY.AUDIO]:"N/A",[M.STORAGE_KEY.AUTO_NEXT]:"N/A",[M.STORAGE_KEY.TAFSIR]:"N/A",[M.STORAGE_KEY.TRANSLATION]:"N/A",[M.STORAGE_KEY.THEME]:"N/A",[M.STORAGE_KEY.LOCATION]:{lt:"N/A",lg:"N/A",district:"N/A"},[M.STORAGE_KEY.LAST_VERSES]:[],[M.STORAGE_KEY.PINNED_SURAH]:[],[M.STORAGE_KEY.LOG_PRAYER]:{}}))},oe=async()=>{var ye,k;const m={uid:(ye=te(O))==null?void 0:ye.uid,[M.STORAGE_KEY.AUDIO]:r(),[M.STORAGE_KEY.AUTO_NEXT]:i()?1:0,[M.STORAGE_KEY.TAFSIR]:o()?1:0,[M.STORAGE_KEY.TRANSLATION]:a()?1:0,[M.STORAGE_KEY.THEME]:u()||"",[M.STORAGE_KEY.LOCATION]:h()||null,[M.STORAGE_KEY.LAST_VERSES]:d()||null,[M.STORAGE_KEY.PINNED_SURAH]:p()||null,[M.STORAGE_KEY.LOG_PRAYER]:T()||null},ne=Di(V,"progress"),ce=oo(ne,ao("uid","==",(k=te(O))==null?void 0:k.uid)),we=await co(ce);if(we.size>0)try{we.forEach(async Be=>{await __(Be.ref,m)}),rt.show({message:"Berhasil memperbarui data remote dengan data lokal",type:"success"})}catch(Be){console.error("Error updating document: ",m,Be),rt.show({message:"Gagal memperbarui data lokal ke remote",type:"error"})}else try{await y_(Di(V,"progress"),m),rt.show({message:"Berhasil mengunggah data lokal ke remote",type:"success"})}catch(Be){console.error("Error adding new document: ",m,Be),rt.show({message:"Gagal mengunggah data lokal ke remote",type:"error"})}},E=async()=>{var we;const m=Di(V,"progress"),ne=oo(m,ao("uid","==",(we=te(O))==null?void 0:we.uid)),ce=await co(ne);ce.size>0?(ce.forEach(ye=>{const k=ye.data();k&&(ac.set((k==null?void 0:k[M.STORAGE_KEY.TAFSIR])===1),localStorage.setItem(M.STORAGE_KEY.TAFSIR,(k==null?void 0:k[M.STORAGE_KEY.TAFSIR])===1?"y":"n"),cc.set((k==null?void 0:k[M.STORAGE_KEY.TRANSLATION])===1),localStorage.setItem(M.STORAGE_KEY.TRANSLATION,(k==null?void 0:k[M.STORAGE_KEY.TRANSLATION])===1?"y":"n"),uc.set((k==null?void 0:k[M.STORAGE_KEY.AUTO_NEXT])===1),localStorage.setItem(M.STORAGE_KEY.AUTO_NEXT,(k==null?void 0:k[M.STORAGE_KEY.AUTO_NEXT])===1?"y":"n"),lc.set(k==null?void 0:k[M.STORAGE_KEY.AUDIO]),localStorage.setItem(M.STORAGE_KEY.AUDIO,(k==null?void 0:k[M.STORAGE_KEY.AUDIO])||"1"),k!=null&&k[M.STORAGE_KEY.THEME]&&(hc.set(k==null?void 0:k[M.STORAGE_KEY.THEME]),localStorage.setItem(M.STORAGE_KEY.THEME,(k==null?void 0:k[M.STORAGE_KEY.THEME])||"light")),k!=null&&k[M.STORAGE_KEY.LOCATION]&&(dc.set(k==null?void 0:k[M.STORAGE_KEY.LOCATION]),localStorage.setItem(M.STORAGE_KEY.LOCATION,JSON.stringify((k==null?void 0:k[M.STORAGE_KEY.LOCATION])||{}))),k!=null&&k[M.STORAGE_KEY.LAST_VERSES]&&(fc.set(k==null?void 0:k[M.STORAGE_KEY.LAST_VERSES]),localStorage.setItem(M.STORAGE_KEY.LAST_VERSES,JSON.stringify((k==null?void 0:k[M.STORAGE_KEY.LAST_VERSES])||[]))),k!=null&&k[M.STORAGE_KEY.PINNED_SURAH]&&(pc.set(k==null?void 0:k[M.STORAGE_KEY.PINNED_SURAH]),localStorage.setItem(M.STORAGE_KEY.PINNED_SURAH,JSON.stringify((k==null?void 0:k[M.STORAGE_KEY.PINNED_SURAH])||[]))),k!=null&&k[M.STORAGE_KEY.LOG_PRAYER]&&(mc.set(k==null?void 0:k[M.STORAGE_KEY.LOG_PRAYER]),localStorage.setItem(M.STORAGE_KEY.LOG_PRAYER,JSON.stringify((k==null?void 0:k[M.STORAGE_KEY.LOG_PRAYER])||[]))),Sr(C,bi(ye.data())))}),rt.show({message:"Data di lokal berhasil diperbarui!",type:"success"})):rt.show({message:"Kamu belum memiliki data apapun di remote. Data di lokal tidak akan diperbarui!",type:"error"})};var g=Fv();od(m=>{var ne=Pr(()=>`Sync Data | ${Ys.TITLE_META}`),ce=Pr(()=>`Sync Data ${Ys.TITLE_META}`),we=Pr(()=>`${Ys.PATH}sync/`);hd(m,{get title(){return te(ne)},get desc(){return te(ce)},get url(){return te(we)}})});var _=W(mt(g),2),y=$(_);ud(y,{items:[{text:"🏠 Beranda",href:"/"}]}),q(_);var v=W(_,2),w=$(v);kr(w,()=>te(O),m=>{var ne=xv(),ce=mt(ne),we=W($(ce)),ye=$(we);q(we),q(ce);var k=W(ce,2),Be=$(k);Cr(Be,{variant:"subtle",onClick:Fe,children:(Ue,lt)=>{var me=kv(),He=mt(me);Ev(He,{}),br(),de(Ue,me)},$$slots:{default:!0}});var ar=W(Be,2);Cr(ar,{variant:"subtle",onClick:oe,children:(Ue,lt)=>{var me=Nv(),He=mt(me);Av(He,{}),br(),de(Ue,me)},$$slots:{default:!0}});var Ls=W(ar,2);Cr(Ls,{variant:"subtle",onClick:E,children:(Ue,lt)=>{var me=Vv(),He=mt(me);Sv(He,{}),br(),de(Ue,me)},$$slots:{default:!0}}),q(k);var Qe=W(k,2);kr(Qe,()=>te(C),Ue=>{var lt=Lv(),me=$(lt),He=W($(me)),cr=$(He),Pt=W($(cr)),En=$(Pt);q(Pt);var Tn=W(Pt),ur=$(Tn);q(Tn),q(cr);var Xt=W(cr),Zt=W($(Xt)),ai=$(Zt);q(Zt);var ci=W(Zt),xs=$(ci);q(ci),q(Xt);var In=W(Xt),en=W($(In)),ui=$(en);q(en);var li=W(en),lr=$(li);q(li),q(In);var tn=W(In),wn=W($(tn)),ve=$(wn);q(wn);var Ee=W(wn),An=$(Ee);q(Ee),q(tn);var Rn=W(tn),Sn=W($(Rn)),Us=$(Sn);q(Sn);var bt=W(Sn),hi=$(bt);q(bt),q(Rn);var Pn=W(Rn),nn=W($(Pn)),Fs=$(nn);kr(Fs,()=>{var Ae;return typeof((Ae=te(C))==null?void 0:Ae[M.STORAGE_KEY.LOCATION])=="string"},Ae=>{var Ne=Dv(),Nt=$(Ne);q(Ne),_t(()=>{var We;return Se(Nt,(We=te(C))==null?void 0:We[M.STORAGE_KEY.LOCATION])}),de(Ae,Ne)},Ae=>{var Ne=Vu(),Nt=mt(Ne);kr(Nt,()=>{var We;return typeof((We=te(C))==null?void 0:We[M.STORAGE_KEY.LOCATION])=="object"},We=>{var Je=Ov(),ht=$(Je),Vt=$(ht);q(ht);var tt=W(ht,2),nt=$(tt);q(tt),q(Je),_t(()=>{var pr,mr,Nn,Vn,gr,_r;Se(Vt,`${(((mr=(pr=te(C))==null?void 0:pr[M.STORAGE_KEY.LOCATION])==null?void 0:mr.lt)||"N/A")??""}, ${(((Vn=(Nn=te(C))==null?void 0:Nn[M.STORAGE_KEY.LOCATION])==null?void 0:Vn.lg)||"N/A")??""}`),Se(nt,((_r=(gr=te(C))==null?void 0:gr[M.STORAGE_KEY.LOCATION])==null?void 0:_r.district)||"N/A")}),de(We,Je)},null,!0),de(Ae,Ne)}),q(nn);var di=W(nn),bn=$(di),Cn=$(bn),fi=$(Cn);q(Cn);var Ct=W(Cn,2),hr=$(Ct);q(Ct),q(bn),q(di),q(Pn);var rn=W(Pn),Ye=W($(rn)),pi=$(Ye),kn=Pr(()=>{var Ae;return(Ae=te(C))==null?void 0:Ae[M.STORAGE_KEY.LAST_VERSES]});Mi(pi,{get jsonArrayObject(){return te(kn)}}),q(Ye);var dr=W(Ye),sn=$(dr);Mi(sn,{get jsonArrayObject(){return d()}}),q(dr),q(rn);var fr=W(rn),ge=W($(fr)),mi=$(ge),on=Pr(()=>{var Ae;return(Ae=te(C))==null?void 0:Ae[M.STORAGE_KEY.PINNED_SURAH]});Mi(mi,{get jsonArrayObject(){return te(on)}}),q(ge);var kt=W(ge),Bs=$(kt);Mi(Bs,{get jsonArrayObject(){return p()}}),q(kt),q(fr),q(He),q(me),q(lt),_t(()=>{var Ae,Ne,Nt,We,Je,ht,Vt,tt;Se(En,(Ae=te(C))==null?void 0:Ae[M.STORAGE_KEY.AUDIO]),Se(ur,r()),Se(ai,(Ne=te(C))==null?void 0:Ne[M.STORAGE_KEY.AUTO_NEXT]),Se(xs,i()?1:0),Se(ui,(Nt=te(C))==null?void 0:Nt[M.STORAGE_KEY.TAFSIR]),Se(lr,o()?1:0),Se(ve,(We=te(C))==null?void 0:We[M.STORAGE_KEY.TRANSLATION]),Se(An,a()?1:0),Se(Us,(Je=te(C))==null?void 0:Je[M.STORAGE_KEY.THEME]),Se(hi,u()),Se(fi,`${(((ht=h())==null?void 0:ht.lt)||"N/A")??""}, ${(((Vt=h())==null?void 0:Vt.lg)||"N/A")??""}`),Se(hr,((tt=h())==null?void 0:tt.district)||"N/A")}),de(Ue,lt)});var pe=W(Qe,2),Ms=$(pe);Cr(Ms,{variant:"subtle",onClick:se,children:(Ue,lt)=>{var me=Mv(),He=mt(me);Iv(He,{}),br(),de(Ue,me)},$$slots:{default:!0}}),q(pe),_t(()=>Se(ye,te(O).displayName)),de(m,ne)},m=>{var ne=Uv(),ce=W(mt(ne),2),we=$(ce);Cr(we,{variant:"subtle",onClick:J,children:(ye,k)=>{br();var Be=ad("Sign In");de(ye,Be)},$$slots:{default:!0}}),q(ce),de(m,ne)}),q(v),de(n,g),Qr()}export{eE as component,Yv as universal};
