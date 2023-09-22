import{s as Qn,n as zt,c as Ke,e as Ge,f as Ve}from"../chunks/scheduler.3e05c3cd.js";import{S as Xn,i as Jn,x as Te,y as Ie,j as O,f as E,k as D,a as W,z as _,e as El,g as k,h as b,A as Kt,m as X,n as J,o as ft,r as Lt,s as q,E as sp,u as Mt,c as K,v as xt,t as pt,b as Ju,d as ht,w as Ft,p as Zu}from"../chunks/index.57359ccf.js";import{B as op}from"../chunks/Breadcrumb.2ccbd940.js";import{B as xr}from"../chunks/Button.0706cf6d.js";import{f as vl,g as Tl,s as Il,b as wl,a as Al,h as Rl,l as Sl,p as Pl}from"../chunks/index.be254848.js";import{t as Qt}from"../chunks/toast.67f04502.js";import{e as Cl,u as ap,d as cp,b as Mo,C as w}from"../chunks/constants.1124097c.js";import{C as ze}from"../chunks/utils.df4df21e.js";import{M as lp}from"../chunks/MetaTag.b6be9998.js";const up="AIzaSyChBEY5EioADQmnfs3B28M3y1boTuGQmyQ",hp="baca-quran-id.firebaseapp.com",dp="baca-quran-id",fp="baca-quran-id.appspot.com",pp="1022678905567",mp="1:1022678905567:web:18b62c4d8d12dabb9caf6a",gp="G-SFVBG4QWNG";/**
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
 */const th=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},_p=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],o=n[e++],a=n[e++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[e++],o=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},eh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(e[u],e[h],e[d],e[f])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(th(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):_p(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const l=i<n.length?e[n.charAt(i)]:64;++i;const h=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new yp;const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class yp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ep=function(n){const t=th(n);return eh.encodeByteArray(t,!0)},ds=function(n){return Ep(n).replace(/\./g,"")},nh=function(n){try{return eh.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function vp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tp=()=>vp().__FIREBASE_DEFAULTS__,Ip=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&nh(n[1]);return t&&JSON.parse(t)},xa=()=>{try{return Tp()||Ip()||wp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},rh=n=>{var t,e;return(e=(t=xa())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Ap=n=>{const t=rh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},ih=()=>{var n;return(n=xa())===null||n===void 0?void 0:n.config},sh=n=>{var t;return(t=xa())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */class Rp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Sp(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[ds(JSON.stringify(e)),ds(JSON.stringify(o)),a].join(".")}/**
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
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function Cp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function kp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bp(){const n=Vt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Np(){try{return typeof indexedDB=="object"}catch{return!1}}function Dp(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
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
 */const Vp="FirebaseError";class Pe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Vp,Object.setPrototypeOf(this,Pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,di.prototype.create)}}class di{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Op(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Pe(i,a,r)}}function Op(n,t){return n.replace(Lp,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Lp=/\{\$([^}]+)}/g;function Mp(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function fs(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],o=t[i];if(kl(s)&&kl(o)){if(!fs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function kl(n){return n!==null&&typeof n=="object"}/**
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
 */function fi(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function xp(n,t){const e=new Fp(n,t);return e.subscribe.bind(e)}class Fp{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Up(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=xo),i.error===void 0&&(i.error=xo),i.complete===void 0&&(i.complete=xo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Up(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function xo(){}/**
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
 */function At(n){return n&&n._delegate?n._delegate:n}class cn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const tn="[DEFAULT]";/**
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
 */class Bp{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Rp;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jp(t))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=tn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=tn){return this.instances.has(t)}getOptions(t=tn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$p(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=tn){return this.component?this.component.multipleInstances?t:tn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $p(n){return n===tn?void 0:n}function jp(n){return n.instantiationMode==="EAGER"}/**
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
 */class qp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Bp(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const Kp={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Gp=G.INFO,zp={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Hp=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=zp[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Fa{constructor(t){this.name=t,this._logLevel=Gp,this._logHandler=Hp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in G))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Kp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...t),this._logHandler(this,G.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...t),this._logHandler(this,G.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,G.INFO,...t),this._logHandler(this,G.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,G.WARN,...t),this._logHandler(this,G.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...t),this._logHandler(this,G.ERROR,...t)}}const Wp=(n,t)=>t.some(e=>n instanceof e);let bl,Nl;function Yp(){return bl||(bl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qp(){return Nl||(Nl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oh=new WeakMap,sa=new WeakMap,ah=new WeakMap,Fo=new WeakMap,Ua=new WeakMap;function Xp(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{e(Ue(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&oh.set(e,n)}).catch(()=>{}),Ua.set(t,n),t}function Jp(n){if(sa.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{e(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});sa.set(n,t)}let oa={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return sa.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ah.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ue(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Zp(n){oa=n(oa)}function tm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Uo(this),t,...e);return ah.set(r,t.sort?t.sort():[t]),Ue(r)}:Qp().includes(n)?function(...t){return n.apply(Uo(this),t),Ue(oh.get(this))}:function(...t){return Ue(n.apply(Uo(this),t))}}function em(n){return typeof n=="function"?tm(n):(n instanceof IDBTransaction&&Jp(n),Wp(n,Yp())?new Proxy(n,oa):n)}function Ue(n){if(n instanceof IDBRequest)return Xp(n);if(Fo.has(n))return Fo.get(n);const t=em(n);return t!==n&&(Fo.set(n,t),Ua.set(t,n)),t}const Uo=n=>Ua.get(n);function nm(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,t),a=Ue(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ue(o.result),c.oldVersion,c.newVersion,Ue(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const rm=["get","getKey","getAll","getAllKeys","count"],im=["put","add","delete","clear"],Bo=new Map;function Dl(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Bo.get(t))return Bo.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=im.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rm.includes(e)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[e](...a),i&&c.done]))[0]};return Bo.set(t,s),s}Zp(n=>({...n,get:(t,e,r)=>Dl(t,e)||n.get(t,e,r),has:(t,e)=>!!Dl(t,e)||n.has(t,e)}));/**
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
 */class sm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(om(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function om(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const aa="@firebase/app",Vl="0.9.19";/**
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
 */const ln=new Fa("@firebase/app"),am="@firebase/app-compat",cm="@firebase/analytics-compat",lm="@firebase/analytics",um="@firebase/app-check-compat",hm="@firebase/app-check",dm="@firebase/auth",fm="@firebase/auth-compat",pm="@firebase/database",mm="@firebase/database-compat",gm="@firebase/functions",_m="@firebase/functions-compat",ym="@firebase/installations",Em="@firebase/installations-compat",vm="@firebase/messaging",Tm="@firebase/messaging-compat",Im="@firebase/performance",wm="@firebase/performance-compat",Am="@firebase/remote-config",Rm="@firebase/remote-config-compat",Sm="@firebase/storage",Pm="@firebase/storage-compat",Cm="@firebase/firestore",km="@firebase/firestore-compat",bm="firebase",Nm="10.4.0";/**
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
 */const ca="[DEFAULT]",Dm={[aa]:"fire-core",[am]:"fire-core-compat",[lm]:"fire-analytics",[cm]:"fire-analytics-compat",[hm]:"fire-app-check",[um]:"fire-app-check-compat",[dm]:"fire-auth",[fm]:"fire-auth-compat",[pm]:"fire-rtdb",[mm]:"fire-rtdb-compat",[gm]:"fire-fn",[_m]:"fire-fn-compat",[ym]:"fire-iid",[Em]:"fire-iid-compat",[vm]:"fire-fcm",[Tm]:"fire-fcm-compat",[Im]:"fire-perf",[wm]:"fire-perf-compat",[Am]:"fire-rc",[Rm]:"fire-rc-compat",[Sm]:"fire-gcs",[Pm]:"fire-gcs-compat",[Cm]:"fire-fst",[km]:"fire-fst-compat","fire-js":"fire-js",[bm]:"fire-js-all"};/**
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
 */const ps=new Map,la=new Map;function Vm(n,t){try{n.container.addComponent(t)}catch(e){ln.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Un(n){const t=n.name;if(la.has(t))return ln.debug(`There were multiple attempts to register component ${t}.`),!1;la.set(t,n);for(const e of ps.values())Vm(e,n);return!0}function Ba(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Om={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Be=new di("app","Firebase",Om);/**
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
 */class Lm{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Be.create("app-deleted",{appName:this._name})}}/**
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
 */const Zn=Nm;function ch(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ca,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Be.create("bad-app-name",{appName:String(i)});if(e||(e=ih()),!e)throw Be.create("no-options");const s=ps.get(i);if(s){if(fs(e,s.options)&&fs(r,s.config))return s;throw Be.create("duplicate-app",{appName:i})}const o=new qp(i);for(const c of la.values())o.addComponent(c);const a=new Lm(e,r,o);return ps.set(i,a),a}function lh(n=ca){const t=ps.get(n);if(!t&&n===ca&&ih())return ch();if(!t)throw Be.create("no-app",{appName:n});return t}function $e(n,t,e){var r;let i=(r=Dm[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ln.warn(a.join(" "));return}Un(new cn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Mm="firebase-heartbeat-database",xm=1,Yr="firebase-heartbeat-store";let $o=null;function uh(){return $o||($o=nm(Mm,xm,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Yr)}}}).catch(n=>{throw Be.create("idb-open",{originalErrorMessage:n.message})})),$o}async function Fm(n){try{return await(await uh()).transaction(Yr).objectStore(Yr).get(hh(n))}catch(t){if(t instanceof Pe)ln.warn(t.message);else{const e=Be.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ln.warn(e.message)}}}async function Ol(n,t){try{const r=(await uh()).transaction(Yr,"readwrite");await r.objectStore(Yr).put(t,hh(n)),await r.done}catch(e){if(e instanceof Pe)ln.warn(e.message);else{const r=Be.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ln.warn(r.message)}}}function hh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Um=1024,Bm=30*24*60*60*1e3;class $m{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new qm(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ll();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Bm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ll(),{heartbeatsToSend:e,unsentEntries:r}=jm(this._heartbeatsCache.heartbeats),i=ds(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ll(){return new Date().toISOString().substring(0,10)}function jm(n,t=Um){const e=[];let r=n.slice();for(const i of n){const s=e.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ml(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Ml(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class qm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Np()?Dp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Fm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ol(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ol(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ml(n){return ds(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Km(n){Un(new cn("platform-logger",t=>new sm(t),"PRIVATE")),Un(new cn("heartbeat",t=>new $m(t),"PRIVATE")),$e(aa,Vl,n),$e(aa,Vl,"esm2017"),$e("fire-js","")}Km("");var Gm="firebase",zm="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$e(Gm,zm,"app");var Hm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,$a=$a||{},x=Hm||self;function Os(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function pi(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function Wm(n){return Object.prototype.hasOwnProperty.call(n,jo)&&n[jo]||(n[jo]=++Ym)}var jo="closure_uid_"+(1e9*Math.random()>>>0),Ym=0;function Qm(n,t,e){return n.call.apply(n.bind,arguments)}function Xm(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function bt(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?bt=Qm:bt=Xm,bt.apply(null,arguments)}function zi(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function Et(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Qe(){this.s=this.s,this.o=this.o}var Jm=0;Qe.prototype.s=!1;Qe.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Jm!=0)&&Wm(this)};Qe.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const dh=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function ja(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function xl(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(Os(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Nt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}Nt.prototype.h=function(){this.defaultPrevented=!0};var Zm=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{x.addEventListener("test",()=>{},t),x.removeEventListener("test",()=>{},t)}catch{}return n}();function Qr(n){return/^[\s\xa0]*$/.test(n)}function Ls(){var n=x.navigator;return n&&(n=n.userAgent)?n:""}function Xt(n){return Ls().indexOf(n)!=-1}function qa(n){return qa[" "](n),n}qa[" "]=function(){};function tg(n,t){var e=zg;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var eg=Xt("Opera"),Bn=Xt("Trident")||Xt("MSIE"),fh=Xt("Edge"),ua=fh||Bn,ph=Xt("Gecko")&&!(Ls().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge"))&&!(Xt("Trident")||Xt("MSIE"))&&!Xt("Edge"),ng=Ls().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge");function mh(){var n=x.document;return n?n.documentMode:void 0}var ha;t:{var qo="",Ko=function(){var n=Ls();if(ph)return/rv:([^\);]+)(\)|;)/.exec(n);if(fh)return/Edge\/([\d\.]+)/.exec(n);if(Bn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(ng)return/WebKit\/(\S+)/.exec(n);if(eg)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ko&&(qo=Ko?Ko[1]:""),Bn){var Go=mh();if(Go!=null&&Go>parseFloat(qo)){ha=String(Go);break t}}ha=qo}var da;if(x.document&&Bn){var Fl=mh();da=Fl||parseInt(ha,10)||void 0}else da=void 0;var rg=da;function Xr(n,t){if(Nt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(ph){t:{try{qa(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:ig[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Xr.$.h.call(this)}}Et(Xr,Nt);var ig={2:"touch",3:"pen",4:"mouse"};Xr.prototype.h=function(){Xr.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var mi="closure_listenable_"+(1e6*Math.random()|0),sg=0;function og(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++sg,this.fa=this.ia=!1}function Ms(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Ka(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function ag(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function gh(n){const t={};for(const e in n)t[e]=n[e];return t}const Ul="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _h(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<Ul.length;s++)e=Ul[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function xs(n){this.src=n,this.g={},this.h=0}xs.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=pa(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new og(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function fa(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=dh(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ms(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function pa(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var Ga="closure_lm_"+(1e6*Math.random()|0),zo={};function yh(n,t,e,r,i){if(r&&r.once)return vh(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)yh(n,t[s],e,r,i);return null}return e=Wa(e),n&&n[mi]?n.O(t,e,pi(r)?!!r.capture:!!r,i):Eh(n,t,e,!1,r,i)}function Eh(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=pi(i)?!!i.capture:!!i,a=Ha(n);if(a||(n[Ga]=a=new xs(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=cg(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)Zm||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(Ih(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function cg(){function n(e){return t.call(n.src,n.listener,e)}const t=lg;return n}function vh(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)vh(n,t[s],e,r,i);return null}return e=Wa(e),n&&n[mi]?n.P(t,e,pi(r)?!!r.capture:!!r,i):Eh(n,t,e,!0,r,i)}function Th(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Th(n,t[s],e,r,i);else r=pi(r)?!!r.capture:!!r,e=Wa(e),n&&n[mi]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=pa(s,e,r,i),-1<e&&(Ms(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=Ha(n))&&(t=n.g[t.toString()],n=-1,t&&(n=pa(t,e,r,i)),(e=-1<n?t[n]:null)&&za(e))}function za(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[mi])fa(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(Ih(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=Ha(t))?(fa(e,n),e.h==0&&(e.src=null,t[Ga]=null)):Ms(n)}}}function Ih(n){return n in zo?zo[n]:zo[n]="on"+n}function lg(n,t){if(n.fa)n=!0;else{t=new Xr(t,this);var e=n.listener,r=n.la||n.src;n.ia&&za(n),n=e.call(r,t)}return n}function Ha(n){return n=n[Ga],n instanceof xs?n:null}var Ho="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wa(n){return typeof n=="function"?n:(n[Ho]||(n[Ho]=function(t){return n.handleEvent(t)}),n[Ho])}function yt(){Qe.call(this),this.i=new xs(this),this.S=this,this.J=null}Et(yt,Qe);yt.prototype[mi]=!0;yt.prototype.removeEventListener=function(n,t,e,r){Th(this,n,t,e,r)};function wt(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new Nt(t,n);else if(t instanceof Nt)t.target=t.target||n;else{var i=t;t=new Nt(r,n),_h(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=Hi(o,r,!0,t)&&i}if(o=t.g=n,i=Hi(o,r,!0,t)&&i,i=Hi(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=Hi(o,r,!1,t)&&i}yt.prototype.N=function(){if(yt.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)Ms(e[r]);delete n.g[t],n.h--}}this.J=null};yt.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};yt.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function Hi(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,c=o.la||o.src;o.ia&&fa(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ya=x.JSON.stringify;class ug{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function hg(){var n=Qa;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class dg{constructor(){this.h=this.g=null}add(t,e){const r=wh.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var wh=new ug(()=>new fg,n=>n.reset());class fg{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function pg(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function mg(n){x.setTimeout(()=>{throw n},0)}let Jr,Zr=!1,Qa=new dg,Ah=()=>{const n=x.Promise.resolve(void 0);Jr=()=>{n.then(gg)}};var gg=()=>{for(var n;n=hg();){try{n.h.call(n.g)}catch(e){mg(e)}var t=wh;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}Zr=!1};function Fs(n,t){yt.call(this),this.h=n||1,this.g=t||x,this.j=bt(this.qb,this),this.l=Date.now()}Et(Fs,yt);T=Fs.prototype;T.ga=!1;T.T=null;T.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),wt(this,"tick"),this.ga&&(Xa(this),this.start()))}};T.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xa(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}T.N=function(){Fs.$.N.call(this),Xa(this),delete this.g};function Ja(n,t,e){if(typeof n=="function")e&&(n=bt(n,e));else if(n&&typeof n.handleEvent=="function")n=bt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:x.setTimeout(n,t||0)}function Rh(n){n.g=Ja(()=>{n.g=null,n.i&&(n.i=!1,Rh(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class _g extends Qe{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Rh(this)}N(){super.N(),this.g&&(x.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ti(n){Qe.call(this),this.h=n,this.g={}}Et(ti,Qe);var Bl=[];function Sh(n,t,e,r){Array.isArray(e)||(e&&(Bl[0]=e.toString()),e=Bl);for(var i=0;i<e.length;i++){var s=yh(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Ph(n){Ka(n.g,function(t,e){this.g.hasOwnProperty(e)&&za(t)},n),n.g={}}ti.prototype.N=function(){ti.$.N.call(this),Ph(this)};ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Us(){this.g=!0}Us.prototype.Ea=function(){this.g=!1};function yg(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function Eg(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function Vn(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+Tg(n,e)+(r?" "+r:"")})}function vg(n,t){n.info(function(){return"TIMEOUT: "+t})}Us.prototype.info=function(){};function Tg(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ya(e)}catch{return t}}var pn={},$l=null;function Bs(){return $l=$l||new yt}pn.Ta="serverreachability";function Ch(n){Nt.call(this,pn.Ta,n)}Et(Ch,Nt);function ei(n){const t=Bs();wt(t,new Ch(t))}pn.STAT_EVENT="statevent";function kh(n,t){Nt.call(this,pn.STAT_EVENT,n),this.stat=t}Et(kh,Nt);function Ut(n){const t=Bs();wt(t,new kh(t,n))}pn.Ua="timingevent";function bh(n,t){Nt.call(this,pn.Ua,n),this.size=t}Et(bh,Nt);function gi(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return x.setTimeout(function(){n()},t)}var $s={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Nh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Za(){}Za.prototype.h=null;function jl(n){return n.h||(n.h=n.i())}function Dh(){}var _i={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function tc(){Nt.call(this,"d")}Et(tc,Nt);function ec(){Nt.call(this,"c")}Et(ec,Nt);var ma;function js(){}Et(js,Za);js.prototype.g=function(){return new XMLHttpRequest};js.prototype.i=function(){return{}};ma=new js;function yi(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new ti(this),this.P=Ig,n=ua?125:void 0,this.V=new Fs(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Vh}function Vh(){this.i=null,this.g="",this.h=!1}var Ig=45e3,ga={},ms={};T=yi.prototype;T.setTimeout=function(n){this.P=n};function _a(n,t,e){n.L=1,n.v=Ks(we(t)),n.s=e,n.S=!0,Oh(n,null)}function Oh(n,t){n.G=Date.now(),Ei(n),n.A=we(n.v);var e=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),jh(e.i,"t",r),n.C=0,e=n.l.J,n.h=new Vh,n.g=ld(n.l,e?t:null,!n.s),0<n.O&&(n.M=new _g(bt(n.Pa,n,n.g),n.O)),Sh(n.U,n.g,"readystatechange",n.nb),t=n.I?gh(n.I):{},n.s?(n.u||(n.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,t)):(n.u="GET",n.g.ha(n.A,n.u,null,t)),ei(),yg(n.j,n.u,n.A,n.m,n.W,n.s)}T.nb=function(n){n=n.target;const t=this.M;t&&Jt(n)==3?t.l():this.Pa(n)};T.Pa=function(n){try{if(n==this.g)t:{const u=Jt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ua||this.g&&(this.h.h||this.g.ja()||zl(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?ei(3):ei(2)),qs(this);var e=this.g.da();this.ca=e;e:if(Lh(this)){var r=zl(this.g);n="";var i=r.length,s=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){en(this),jr(this);var o="";break e}this.h.i=new x.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,Eg(this.j,this.u,this.A,this.m,this.W,u,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Qr(a)){var l=a;break e}}l=null}if(e=l)Vn(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ya(this,e);else{this.i=!1,this.o=3,Ut(12),en(this),jr(this);break t}}this.S?(Mh(this,u,o),ua&&this.i&&u==3&&(Sh(this.U,this.V,"tick",this.mb),this.V.start())):(Vn(this.j,this.m,o,null),ya(this,o)),u==4&&en(this),this.i&&!this.J&&(u==4?sd(this.l,this):(this.i=!1,Ei(this)))}else qg(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ut(12)):(this.o=0,Ut(13)),en(this),jr(this)}}}catch{}finally{}};function Lh(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Mh(n,t,e){let r=!0,i;for(;!n.J&&n.C<e.length;)if(i=wg(n,e),i==ms){t==4&&(n.o=4,Ut(14),r=!1),Vn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==ga){n.o=4,Ut(15),Vn(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else Vn(n.j,n.m,i,null),ya(n,i);Lh(n)&&i!=ms&&i!=ga&&(n.h.g="",n.C=0),t!=4||e.length!=0||n.h.h||(n.o=1,Ut(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),ac(t),t.M=!0,Ut(11))):(Vn(n.j,n.m,e,"[Invalid Chunked Response]"),en(n),jr(n))}T.mb=function(){if(this.g){var n=Jt(this.g),t=this.g.ja();this.C<t.length&&(qs(this),Mh(this,n,t),this.i&&n!=4&&Ei(this))}};function wg(n,t){var e=n.C,r=t.indexOf(`
`,e);return r==-1?ms:(e=Number(t.substring(e,r)),isNaN(e)?ga:(r+=1,r+e>t.length?ms:(t=t.slice(r,r+e),n.C=r+e,t)))}T.cancel=function(){this.J=!0,en(this)};function Ei(n){n.Y=Date.now()+n.P,xh(n,n.P)}function xh(n,t){if(n.B!=null)throw Error("WatchDog timer not null");n.B=gi(bt(n.lb,n),t)}function qs(n){n.B&&(x.clearTimeout(n.B),n.B=null)}T.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(vg(this.j,this.A),this.L!=2&&(ei(),Ut(17)),en(this),this.o=2,jr(this)):xh(this,this.Y-n)};function jr(n){n.l.H==0||n.J||sd(n.l,n)}function en(n){qs(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,Xa(n.V),Ph(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function ya(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||Ea(e.i,n))){if(!n.K&&Ea(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)ys(e),Ws(e);else break t;oc(e),Ut(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=gi(bt(e.ib,e),6e3));if(1>=Gh(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else nn(e,11)}else if((n.K||e.g==n)&&ys(e),!Qr(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(e.V=l[0],l=l[1],e.H==2)if(l[0]=="c"){e.K=l[1],e.pa=l[2];const u=l[3];u!=null&&(e.ra=u,e.l.info("VER="+e.ra));const h=l[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const f=n.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(nc(s,s.h),s.h=null))}if(r.F){const R=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,tt(r.I,r.F,R))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=cd(r,r.J?r.pa:null,r.Y),o.K){zh(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(qs(a),Ei(a)),r.g=o}else rd(r);0<e.j.length&&Ys(e)}else l[0]!="stop"&&l[0]!="close"||nn(e,7);else e.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?nn(e,7):sc(e):l[0]!="noop"&&e.h&&e.h.Aa(l),e.A=0)}}ei(4)}catch{}}function Ag(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Os(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function Rg(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Os(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function Fh(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Os(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=Rg(n),r=Ag(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var Uh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sg(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function on(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof on){this.h=n.h,gs(this,n.j),this.s=n.s,this.g=n.g,_s(this,n.m),this.l=n.l;var t=n.i,e=new ni;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),ql(this,e),this.o=n.o}else n&&(t=String(n).match(Uh))?(this.h=!1,gs(this,t[1]||"",!0),this.s=Fr(t[2]||""),this.g=Fr(t[3]||"",!0),_s(this,t[4]),this.l=Fr(t[5]||"",!0),ql(this,t[6]||"",!0),this.o=Fr(t[7]||"")):(this.h=!1,this.i=new ni(null,this.h))}on.prototype.toString=function(){var n=[],t=this.j;t&&n.push(Ur(t,Kl,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(Ur(t,Kl,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(Ur(e,e.charAt(0)=="/"?kg:Cg,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",Ur(e,Ng)),n.join("")};function we(n){return new on(n)}function gs(n,t,e){n.j=e?Fr(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function _s(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function ql(n,t,e){t instanceof ni?(n.i=t,Dg(n.i,n.h)):(e||(t=Ur(t,bg)),n.i=new ni(t,n.h))}function tt(n,t,e){n.i.set(t,e)}function Ks(n){return tt(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Fr(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Ur(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,Pg),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Pg(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Kl=/[#\/\?@]/g,Cg=/[#\?:]/g,kg=/[#\?]/g,bg=/[#\?@]/g,Ng=/#/g;function ni(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function Xe(n){n.g||(n.g=new Map,n.h=0,n.i&&Sg(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}T=ni.prototype;T.add=function(n,t){Xe(this),this.i=null,n=tr(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function Bh(n,t){Xe(n),t=tr(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function $h(n,t){return Xe(n),t=tr(n,t),n.g.has(t)}T.forEach=function(n,t){Xe(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};T.ta=function(){Xe(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};T.Z=function(n){Xe(this);let t=[];if(typeof n=="string")$h(this,n)&&(t=t.concat(this.g.get(tr(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};T.set=function(n,t){return Xe(this),this.i=null,n=tr(this,n),$h(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};T.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function jh(n,t,e){Bh(n,t),0<e.length&&(n.i=null,n.g.set(tr(n,t),ja(e)),n.h+=e.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function tr(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Dg(n,t){t&&!n.j&&(Xe(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(Bh(this,r),jh(this,i,e))},n)),n.j=t}var Vg=class{constructor(n,t){this.g=n,this.map=t}};function qh(n){this.l=n||Og,x.PerformanceNavigationTiming?(n=x.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(x.g&&x.g.Ka&&x.g.Ka()&&x.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Og=10;function Kh(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Gh(n){return n.h?1:n.g?n.g.size:0}function Ea(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function nc(n,t){n.g?n.g.add(t):n.h=t}function zh(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}qh.prototype.cancel=function(){if(this.i=Hh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Hh(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return ja(n.i)}var Lg=class{stringify(n){return x.JSON.stringify(n,void 0)}parse(n){return x.JSON.parse(n,void 0)}};function Mg(){this.g=new Lg}function xg(n,t,e){const r=e||"";try{Fh(n,function(i,s){let o=i;pi(i)&&(o=Ya(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Fg(n,t){const e=new Us;if(x.Image){const r=new Image;r.onload=zi(Wi,e,r,"TestLoadImage: loaded",!0,t),r.onerror=zi(Wi,e,r,"TestLoadImage: error",!1,t),r.onabort=zi(Wi,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=zi(Wi,e,r,"TestLoadImage: timeout",!1,t),x.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function Wi(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Gs(n){this.l=n.ec||null,this.j=n.ob||!1}Et(Gs,Za);Gs.prototype.g=function(){return new zs(this.l,this.j)};Gs.prototype.i=function(n){return function(){return n}}({});function zs(n,t){yt.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=rc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Et(zs,yt);var rc=0;T=zs.prototype;T.open=function(n,t){if(this.readyState!=rc)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,ri(this)};T.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||x).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vi(this)),this.readyState=rc};T.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ri(this)),this.g&&(this.readyState=3,ri(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof x.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wh(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Wh(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}T.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?vi(this):ri(this),this.readyState==3&&Wh(this)}};T.Za=function(n){this.g&&(this.response=this.responseText=n,vi(this))};T.Ya=function(n){this.g&&(this.response=n,vi(this))};T.ka=function(){this.g&&vi(this)};function vi(n){n.readyState=4,n.l=null,n.j=null,n.A=null,ri(n)}T.setRequestHeader=function(n,t){this.v.append(n,t)};T.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function ri(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(zs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Ug=x.JSON.parse;function ot(n){yt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Yh,this.L=this.M=!1}Et(ot,yt);var Yh="",Bg=/^https?$/i,$g=["POST","PUT"];T=ot.prototype;T.Oa=function(n){this.M=n};T.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ma.g(),this.C=this.u?jl(this.u):jl(ma),this.g.onreadystatechange=bt(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){Gl(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=x.FormData&&n instanceof x.FormData,!(0<=dh($g,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Jh(this),0<this.B&&((this.L=jg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=bt(this.ua,this)):this.A=Ja(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Gl(this,s)}};function jg(n){return Bn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}T.ua=function(){typeof $a<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,wt(this,"timeout"),this.abort(8))};function Gl(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,Qh(n),Hs(n)}function Qh(n){n.F||(n.F=!0,wt(n,"complete"),wt(n,"error"))}T.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,wt(this,"complete"),wt(this,"abort"),Hs(this))};T.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Hs(this,!0)),ot.$.N.call(this)};T.La=function(){this.s||(this.G||this.v||this.l?Xh(this):this.kb())};T.kb=function(){Xh(this)};function Xh(n){if(n.h&&typeof $a<"u"&&(!n.C[1]||Jt(n)!=4||n.da()!=2)){if(n.v&&Jt(n)==4)Ja(n.La,0,n);else if(wt(n,"readystatechange"),Jt(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(Uh)[1]||null;!i&&x.self&&x.self.location&&(i=x.self.location.protocol.slice(0,-1)),r=!Bg.test(i?i.toLowerCase():"")}e=r}if(e)wt(n,"complete"),wt(n,"success");else{n.m=6;try{var s=2<Jt(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Qh(n)}}finally{Hs(n)}}}}function Hs(n,t){if(n.g){Jh(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||wt(n,"ready");try{e.onreadystatechange=r}catch{}}}function Jh(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(x.clearTimeout(n.A),n.A=null)}T.isActive=function(){return!!this.g};function Jt(n){return n.g?n.g.readyState:0}T.da=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}};T.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),Ug(t)}};function zl(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Yh:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function qg(n){const t={};n=(n.g&&2<=Jt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Qr(n[r]))continue;var e=pg(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}ag(t,function(r){return r.join(", ")})}T.Ia=function(){return this.m};T.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Zh(n){let t="";return Ka(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function ic(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=Zh(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):tt(n,t,e))}function Or(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function td(n){this.Ga=0,this.j=[],this.l=new Us,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Or("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Or("baseRetryDelayMs",5e3,n),this.hb=Or("retryDelaySeedMs",1e4,n),this.eb=Or("forwardChannelMaxRetries",2,n),this.xa=Or("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new qh(n&&n.concurrentRequestLimit),this.Ja=new Mg,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}T=td.prototype;T.ra=8;T.H=1;function sc(n){if(ed(n),n.H==3){var t=n.W++,e=we(n.I);if(tt(e,"SID",n.K),tt(e,"RID",t),tt(e,"TYPE","terminate"),Ti(n,e),t=new yi(n,n.l,t),t.L=2,t.v=Ks(we(e)),e=!1,x.navigator&&x.navigator.sendBeacon)try{e=x.navigator.sendBeacon(t.v.toString(),"")}catch{}!e&&x.Image&&(new Image().src=t.v,e=!0),e||(t.g=ld(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Ei(t)}ad(n)}function Ws(n){n.g&&(ac(n),n.g.cancel(),n.g=null)}function ed(n){Ws(n),n.u&&(x.clearTimeout(n.u),n.u=null),ys(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&x.clearTimeout(n.m),n.m=null)}function Ys(n){if(!Kh(n.i)&&!n.m){n.m=!0;var t=n.Na;Jr||Ah(),Zr||(Jr(),Zr=!0),Qa.add(t,n),n.C=0}}function Kg(n,t){return Gh(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=gi(bt(n.Na,n,t),od(n,n.C)),n.C++,!0)}T.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new yi(this,this.l,n);let s=this.s;if(this.U&&(s?(s=gh(s),_h(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=nd(this,i,t),e=we(this.I),tt(e,"RID",n),tt(e,"CVER",22),this.F&&tt(e,"X-HTTP-Session-Id",this.F),Ti(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(Zh(s)))+"&"+t:this.o&&ic(e,this.o,s)),nc(this.i,i),this.bb&&tt(e,"TYPE","init"),this.P?(tt(e,"$req",t),tt(e,"SID","null"),i.aa=!0,_a(i,e,null)):_a(i,e,t),this.H=2}}else this.H==3&&(n?Hl(this,n):this.j.length==0||Kh(this.i)||Hl(this))};function Hl(n,t){var e;t?e=t.m:e=n.W++;const r=we(n.I);tt(r,"SID",n.K),tt(r,"RID",e),tt(r,"AID",n.V),Ti(n,r),n.o&&n.s&&ic(r,n.o,n.s),e=new yi(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=nd(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),nc(n.i,e),_a(e,r,t)}function Ti(n,t){n.na&&Ka(n.na,function(e,r){tt(t,r,e)}),n.h&&Fh({},function(e,r){tt(t,r,e)})}function nd(n,t,e){e=Math.min(n.j.length,e);var r=n.h?bt(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<e;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{xg(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function rd(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;Jr||Ah(),Zr||(Jr(),Zr=!0),Qa.add(t,n),n.A=0}}function oc(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=gi(bt(n.Ma,n),od(n,n.A)),n.A++,!0)}T.Ma=function(){if(this.u=null,id(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=gi(bt(this.jb,this),n)}};T.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ut(10),Ws(this),id(this))};function ac(n){n.B!=null&&(x.clearTimeout(n.B),n.B=null)}function id(n){n.g=new yi(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=we(n.wa);tt(t,"RID","rpc"),tt(t,"SID",n.K),tt(t,"AID",n.V),tt(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&tt(t,"TO",n.qa),tt(t,"TYPE","xmlhttp"),Ti(n,t),n.o&&n.s&&ic(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.v=Ks(we(t)),e.s=null,e.S=!0,Oh(e,n)}T.ib=function(){this.v!=null&&(this.v=null,Ws(this),oc(this),Ut(19))};function ys(n){n.v!=null&&(x.clearTimeout(n.v),n.v=null)}function sd(n,t){var e=null;if(n.g==t){ys(n),ac(n),n.g=null;var r=2}else if(Ea(n.i,t))e=t.F,zh(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.s?t.s.length:0,t=Date.now()-t.G;var i=n.C;r=Bs(),wt(r,new bh(r,e)),Ys(n)}else rd(n);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&Kg(n,t)||r==2&&oc(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:nn(n,5);break;case 4:nn(n,10);break;case 3:nn(n,6);break;default:nn(n,2)}}}function od(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function nn(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=bt(n.pb,n);e||(e=new on("//www.google.com/images/cleardot.gif"),x.location&&x.location.protocol=="http"||gs(e,"https"),Ks(e)),Fg(e.toString(),r)}else Ut(2);n.H=0,n.h&&n.h.za(t),ad(n),ed(n)}T.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Ut(2)):(this.l.info("Failed to ping google.com"),Ut(1))};function ad(n){if(n.H=0,n.ma=[],n.h){const t=Hh(n.i);(t.length!=0||n.j.length!=0)&&(xl(n.ma,t),xl(n.ma,n.j),n.i.i.length=0,ja(n.j),n.j.length=0),n.h.ya()}}function cd(n,t,e){var r=e instanceof on?we(e):new on(e);if(r.g!="")t&&(r.g=t+"."+r.g),_s(r,r.m);else{var i=x.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new on(null);r&&gs(s,r),t&&(s.g=t),i&&_s(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&tt(r,e,t),tt(r,"VER",n.ra),Ti(n,r),r}function ld(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e&&n.Ha&&!n.va?new ot(new Gs({ob:!0})):new ot(n.va),t.Oa(n.J),t}T.isActive=function(){return!!this.h&&this.h.isActive(this)};function ud(){}T=ud.prototype;T.Ba=function(){};T.Aa=function(){};T.za=function(){};T.ya=function(){};T.isActive=function(){return!0};T.Va=function(){};function Es(){if(Bn&&!(10<=Number(rg)))throw Error("Environmental error: no available transport.")}Es.prototype.g=function(n,t){return new qt(n,t)};function qt(n,t){yt.call(this),this.g=new td(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!Qr(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Qr(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new er(this)}Et(qt,yt);qt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;Ut(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=cd(n,null,n.Y),Ys(n)};qt.prototype.close=function(){sc(this.g)};qt.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=Ya(n),n=e);t.j.push(new Vg(t.fb++,n)),t.H==3&&Ys(t)};qt.prototype.N=function(){this.g.h=null,delete this.j,sc(this.g),delete this.g,qt.$.N.call(this)};function hd(n){tc.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}Et(hd,tc);function dd(){ec.call(this),this.status=1}Et(dd,ec);function er(n){this.g=n}Et(er,ud);er.prototype.Ba=function(){wt(this.g,"a")};er.prototype.Aa=function(n){wt(this.g,new hd(n))};er.prototype.za=function(n){wt(this.g,new dd)};er.prototype.ya=function(){wt(this.g,"b")};function Gg(){this.blockSize=-1}function Ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Et(Ht,Gg);Ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Wo(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Ht.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)Wo(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Wo(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){Wo(this,r),i=0;break}}this.h=i,this.i+=t};Ht.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function Q(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var zg={};function cc(n){return-128<=n&&128>n?tg(n,function(t){return new Q([t|0],0>t?-1:0)}):new Q([n|0],0>n?-1:0)}function Zt(n){if(isNaN(n)||!isFinite(n))return On;if(0>n)return It(Zt(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=va;return new Q(t,0)}function fd(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return It(fd(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=Zt(Math.pow(t,8)),r=On,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=Zt(Math.pow(t,s)),r=r.R(s).add(Zt(o))):(r=r.R(e),r=r.add(Zt(o)))}return r}var va=4294967296,On=cc(0),Ta=cc(1),Wl=cc(16777216);T=Q.prototype;T.ea=function(){if(Gt(this))return-It(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:va+r)*t,t*=va}return n};T.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(ye(this))return"0";if(Gt(this))return"-"+It(this).toString(n);for(var t=Zt(Math.pow(n,6)),e=this,r="";;){var i=Ts(e,t).g;e=vs(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,ye(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};T.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function ye(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function Gt(n){return n.h==-1}T.X=function(n){return n=vs(this,n),Gt(n)?-1:ye(n)?0:1};function It(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new Q(e,~n.h).add(Ta)}T.abs=function(){return Gt(this)?It(this):this};T.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new Q(e,e[e.length-1]&-2147483648?-1:0)};function vs(n,t){return n.add(It(t))}T.R=function(n){if(ye(this)||ye(n))return On;if(Gt(this))return Gt(n)?It(this).R(It(n)):It(It(this).R(n));if(Gt(n))return It(this.R(It(n)));if(0>this.X(Wl)&&0>n.X(Wl))return Zt(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;e[2*r+2*i]+=o*c,Yi(e,2*r+2*i),e[2*r+2*i+1]+=s*c,Yi(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,Yi(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,Yi(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new Q(e,0)};function Yi(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function Lr(n,t){this.g=n,this.h=t}function Ts(n,t){if(ye(t))throw Error("division by zero");if(ye(n))return new Lr(On,On);if(Gt(n))return t=Ts(It(n),t),new Lr(It(t.g),It(t.h));if(Gt(t))return t=Ts(n,It(t)),new Lr(It(t.g),t.h);if(30<n.g.length){if(Gt(n)||Gt(t))throw Error("slowDivide_ only works with positive integers.");for(var e=Ta,r=t;0>=r.X(n);)e=Yl(e),r=Yl(r);var i=kn(e,1),s=kn(r,1);for(r=kn(r,2),e=kn(e,2);!ye(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=kn(r,1),e=kn(e,1)}return t=vs(n,i.R(t)),new Lr(i,t)}for(i=On;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Zt(e),o=s.R(t);Gt(o)||0<o.X(n);)e-=r,s=Zt(e),o=s.R(t);ye(s)&&(s=Ta),i=i.add(s),n=vs(n,o)}return new Lr(i,n)}T.gb=function(n){return Ts(this,n).h};T.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new Q(e,this.h&n.h)};T.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new Q(e,this.h|n.h)};T.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new Q(e,this.h^n.h)};function Yl(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new Q(e,n.h)}function kn(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new Q(i,n.h)}Es.prototype.createWebChannel=Es.prototype.g;qt.prototype.send=qt.prototype.u;qt.prototype.open=qt.prototype.m;qt.prototype.close=qt.prototype.close;$s.NO_ERROR=0;$s.TIMEOUT=8;$s.HTTP_ERROR=6;Nh.COMPLETE="complete";Dh.EventType=_i;_i.OPEN="a";_i.CLOSE="b";_i.ERROR="c";_i.MESSAGE="d";yt.prototype.listen=yt.prototype.O;ot.prototype.listenOnce=ot.prototype.P;ot.prototype.getLastError=ot.prototype.Sa;ot.prototype.getLastErrorCode=ot.prototype.Ia;ot.prototype.getStatus=ot.prototype.da;ot.prototype.getResponseJson=ot.prototype.Wa;ot.prototype.getResponseText=ot.prototype.ja;ot.prototype.send=ot.prototype.ha;ot.prototype.setWithCredentials=ot.prototype.Oa;Ht.prototype.digest=Ht.prototype.l;Ht.prototype.reset=Ht.prototype.reset;Ht.prototype.update=Ht.prototype.j;Q.prototype.add=Q.prototype.add;Q.prototype.multiply=Q.prototype.R;Q.prototype.modulo=Q.prototype.gb;Q.prototype.compare=Q.prototype.X;Q.prototype.toNumber=Q.prototype.ea;Q.prototype.toString=Q.prototype.toString;Q.prototype.getBits=Q.prototype.D;Q.fromNumber=Zt;Q.fromString=fd;var Hg=function(){return new Es},Wg=function(){return Bs()},Yo=$s,Yg=Nh,Qg=pn,Ql={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Qi=Dh,Xg=ot,Jg=Ht,Ln=Q;const Xl="@firebase/firestore";/**
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
 */class Pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
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
 */let nr="10.4.0";/**
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
 */const un=new Fa("@firebase/firestore");function Mr(){return un.logLevel}function P(n,...t){if(un.logLevel<=G.DEBUG){const e=t.map(lc);un.debug(`Firestore (${nr}): ${n}`,...e)}}function Ae(n,...t){if(un.logLevel<=G.ERROR){const e=t.map(lc);un.error(`Firestore (${nr}): ${n}`,...e)}}function $n(n,...t){if(un.logLevel<=G.WARN){const e=t.map(lc);un.warn(`Firestore (${nr}): ${n}`,...e)}}function lc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function M(n="Unexpected state"){const t=`FIRESTORE (${nr}) INTERNAL ASSERTION FAILED: `+n;throw Ae(t),new Error(t)}function nt(n,t){n||M()}function B(n,t){return n}/**
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
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends Pe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class je{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class pd{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Zg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Pt.UNAUTHENTICATED))}shutdown(){}}class t_{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class e_{constructor(t){this.t=t,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=c=>this.i!==r?(r=this.i,e(c)):Promise.resolve();let s=new je;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new je,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new je)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(nt(typeof r.accessToken=="string"),new pd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return nt(t===null||typeof t=="string"),new Pt(t)}}class n_{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class r_{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new n_(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class i_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class s_{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(nt(typeof e.token=="string"),this.R=e.token,new i_(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class md{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=o_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function H(n,t){return n<t?-1:n>t?1:0}function jn(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */class mt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new S(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new S(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new S(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new S(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return mt.fromMillis(Date.now())}static fromDate(t){return mt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new mt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?H(this.nanoseconds,t.nanoseconds):H(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class F{constructor(t){this.timestamp=t}static fromTimestamp(t){return new F(t)}static min(){return new F(new mt(0,0))}static max(){return new F(new mt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ii{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(),r===void 0?r=t.length-e:r>t.length-e&&M(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return ii.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ii?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class et extends ii{construct(t,e,r){return new et(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new S(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new et(e)}static emptyPath(){return new et([])}}const a_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends ii{construct(t,e,r){return new kt(t,e,r)}static isValidIdentifier(t){return a_.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new S(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new S(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new S(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new S(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new kt(e)}static emptyPath(){return new kt([])}}/**
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
 */class V{constructor(t){this.path=t}static fromPath(t){return new V(et.fromString(t))}static fromName(t){return new V(et.fromString(t).popFirst(5))}static empty(){return new V(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new V(new et(t.slice()))}}function c_(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new mt(e+1,0):new mt(e,r));return new He(i,V.empty(),t)}function l_(n){return new He(n.readTime,n.key,-1)}class He{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new He(F.min(),V.empty(),-1)}static max(){return new He(F.max(),V.empty(),-1)}}function u_(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=V.comparator(n.documentKey,t.documentKey),e!==0?e:H(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class d_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Ii(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==h_)throw n;P("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new g((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof g?e:g.resolve(e)}catch(e){return g.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):g.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):g.reject(e)}static resolve(t){return new g((e,r)=>{e(t)})}static reject(t){return new g((e,r)=>{r(t)})}static waitFor(t){return new g((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},c=>r(c))}),o=!0,s===i&&e()})}static or(t){let e=g.resolve(!1);for(const r of t)e=e.next(i=>i?g.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new g((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;e(t[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(t,e){return new g((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}function wi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class uc{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}uc.ae=-1;function Qs(n){return n==null}function Is(n){return n===0&&1/n==-1/0}function f_(n){return typeof n=="number"&&Number.isInteger(n)&&!Is(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Jl(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function mn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function gd(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class it{constructor(t,e){this.comparator=t,this.root=e||Tt.EMPTY}insert(t,e){return new it(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(t){return new it(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xi(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xi(this.root,t,this.comparator,!0)}}class Xi{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Tt{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??Tt.RED,this.left=i??Tt.EMPTY,this.right=s??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new Tt(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,r,i,s){return this}insert(t,e,r){return new Tt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Dt{constructor(t){this.comparator=t,this.data=new it(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Zl(this.data.getIterator())}getIteratorFrom(t){return new Zl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Dt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Dt(this.comparator);return e.data=t,e}}class Zl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.fields=t,t.sort(kt.comparator)}static empty(){return new $t([])}unionWith(t){let e=new Dt(kt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new $t(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return jn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class _d extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new _d("Invalid base64 string: "+s):s}}(t);return new Ot(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new Ot(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return H(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const p_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function We(n){if(nt(!!n),typeof n=="string"){let t=0;const e=p_.exec(n);if(nt(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ut(n.seconds),nanos:ut(n.nanos)}}function ut(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function hn(n){return typeof n=="string"?Ot.fromBase64String(n):Ot.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function dc(n){const t=n.mapValue.fields.__previous_value__;return hc(t)?dc(t):t}function si(n){const t=We(n.mapValue.fields.__local_write_time__.timestampValue);return new mt(t.seconds,t.nanos)}/**
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
 */class m_{constructor(t,e,r,i,s,o,a,c,l){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class oi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new oi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof oi&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function dn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?hc(n)?4:g_(n)?9007199254740991:10:M()}function se(n,t){if(n===t)return!0;const e=dn(n);if(e!==dn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return si(n).isEqual(si(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=We(i.timestampValue),a=We(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return hn(i.bytesValue).isEqual(hn(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return ut(i.geoPointValue.latitude)===ut(s.geoPointValue.latitude)&&ut(i.geoPointValue.longitude)===ut(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ut(i.integerValue)===ut(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ut(i.doubleValue),a=ut(s.doubleValue);return o===a?Is(o)===Is(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return jn(n.arrayValue.values||[],t.arrayValue.values||[],se);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Jl(o)!==Jl(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!se(o[c],a[c])))return!1;return!0}(n,t);default:return M()}}function ai(n,t){return(n.values||[]).find(e=>se(e,t))!==void 0}function qn(n,t){if(n===t)return 0;const e=dn(n),r=dn(t);if(e!==r)return H(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=ut(s.integerValue||s.doubleValue),c=ut(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,t);case 3:return tu(n.timestampValue,t.timestampValue);case 4:return tu(si(n),si(t));case 5:return H(n.stringValue,t.stringValue);case 6:return function(s,o){const a=hn(s),c=hn(o);return a.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=H(a[l],c[l]);if(u!==0)return u}return H(a.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=H(ut(s.latitude),ut(o.latitude));return a!==0?a:H(ut(s.longitude),ut(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=qn(a[l],c[l]);if(u)return u}return H(a.length,c.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Ji.mapValue&&o===Ji.mapValue)return 0;if(s===Ji.mapValue)return 1;if(o===Ji.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=H(c[h],u[h]);if(d!==0)return d;const f=qn(a[c[h]],l[u[h]]);if(f!==0)return f}return H(c.length,u.length)}(n.mapValue,t.mapValue);default:throw M()}}function tu(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return H(n,t);const e=We(n),r=We(t),i=H(e.seconds,r.seconds);return i!==0?i:H(e.nanos,r.nanos)}function Kn(n){return Ia(n)}function Ia(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=We(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return hn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return V.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=Ia(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ia(e.fields[o])}`;return i+"}"}(n.mapValue):M()}function eu(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function wa(n){return!!n&&"integerValue"in n}function fc(n){return!!n&&"arrayValue"in n}function nu(n){return!!n&&"nullValue"in n}function ru(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function is(n){return!!n&&"mapValue"in n}function qr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return mn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=qr(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=qr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function g_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Bt{constructor(t){this.value=t}static empty(){return new Bt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!is(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=qr(e)}setAll(t){let e=kt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=qr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());is(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return se(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];is(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){mn(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Bt(qr(this.value))}}function yd(n){const t=[];return mn(n.fields,(e,r)=>{const i=new kt([e]);if(is(r)){const s=yd(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new $t(t)}/**
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
 */class Ct{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Ct(t,0,F.min(),F.min(),F.min(),Bt.empty(),0)}static newFoundDocument(t,e,r,i){return new Ct(t,1,e,F.min(),r,i,0)}static newNoDocument(t,e){return new Ct(t,2,e,F.min(),F.min(),Bt.empty(),0)}static newUnknownDocument(t,e){return new Ct(t,3,e,F.min(),F.min(),Bt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ct&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ws{constructor(t,e){this.position=t,this.inclusive=e}}function iu(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),e.key):r=qn(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function su(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!se(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Kr{constructor(t,e="asc"){this.field=t,this.dir=e}}function __(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ed{}class dt extends Ed{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new E_(t,e,r):e==="array-contains"?new I_(t,r):e==="in"?new w_(t,r):e==="not-in"?new A_(t,r):e==="array-contains-any"?new R_(t,r):new dt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new v_(t,r):new T_(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(qn(e,this.value)):e!==null&&dn(this.value)===dn(e)&&this.matchesComparison(qn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Wt extends Ed{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Wt(t,e)}matches(t){return vd(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(e=>e.isInequality());return t!==null?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function vd(n){return n.op==="and"}function Td(n){return y_(n)&&vd(n)}function y_(n){for(const t of n.filters)if(t instanceof Wt)return!1;return!0}function Aa(n){if(n instanceof dt)return n.field.canonicalString()+n.op.toString()+Kn(n.value);if(Td(n))return n.filters.map(t=>Aa(t)).join(",");{const t=n.filters.map(e=>Aa(e)).join(",");return`${n.op}(${t})`}}function Id(n,t){return n instanceof dt?function(r,i){return i instanceof dt&&r.op===i.op&&r.field.isEqual(i.field)&&se(r.value,i.value)}(n,t):n instanceof Wt?function(r,i){return i instanceof Wt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Id(o,i.filters[a]),!0):!1}(n,t):void M()}function wd(n){return n instanceof dt?function(e){return`${e.field.canonicalString()} ${e.op} ${Kn(e.value)}`}(n):n instanceof Wt?function(e){return e.op.toString()+" {"+e.getFilters().map(wd).join(" ,")+"}"}(n):"Filter"}class E_ extends dt{constructor(t,e,r){super(t,e,r),this.key=V.fromName(r.referenceValue)}matches(t){const e=V.comparator(t.key,this.key);return this.matchesComparison(e)}}class v_ extends dt{constructor(t,e){super(t,"in",e),this.keys=Ad("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class T_ extends dt{constructor(t,e){super(t,"not-in",e),this.keys=Ad("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ad(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>V.fromName(r.referenceValue))}class I_ extends dt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return fc(e)&&ai(e.arrayValue,this.value)}}class w_ extends dt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ai(this.value.arrayValue,e)}}class A_ extends dt{constructor(t,e){super(t,"not-in",e)}matches(t){if(ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!ai(this.value.arrayValue,e)}}class R_ extends dt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!fc(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>ai(this.value.arrayValue,r))}}/**
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
 */class S_{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function ou(n,t=null,e=[],r=[],i=null,s=null,o=null){return new S_(n,t,e,r,i,s,o)}function pc(n){const t=B(n);if(t.he===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Aa(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Qs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Kn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Kn(r)).join(",")),t.he=e}return t.he}function mc(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!__(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Id(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!su(n.startAt,t.startAt)&&su(n.endAt,t.endAt)}function Ra(n){return V.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ai{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function P_(n,t,e,r,i,s,o,a){return new Ai(n,t,e,r,i,s,o,a)}function Rd(n){return new Ai(n)}function au(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Sd(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function gc(n){for(const t of n.filters){const e=t.getFirstInequalityField();if(e!==null)return e}return null}function Pd(n){return n.collectionGroup!==null}function Gr(n){const t=B(n);if(t.Pe===null){t.Pe=[];const e=gc(t),r=Sd(t);if(e!==null&&r===null)e.isKeyField()||t.Pe.push(new Kr(e)),t.Pe.push(new Kr(kt.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Kr(kt.keyField(),s))}}}return t.Pe}function te(n){const t=B(n);return t.Ie||(t.Ie=C_(t,Gr(n))),t.Ie}function C_(n,t){if(n.limitType==="F")return ou(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Kr(i.field,s)});const e=n.endAt?new ws(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ws(n.startAt.position,n.startAt.inclusive):null;return ou(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Sa(n,t){t.getFirstInequalityField(),gc(n);const e=n.filters.concat([t]);return new Ai(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Pa(n,t,e){return new Ai(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Xs(n,t){return mc(te(n),te(t))&&n.limitType===t.limitType}function Cd(n){return`${pc(te(n))}|lt:${n.limitType}`}function bn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>wd(i)).join(", ")}]`),Qs(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Kn(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Kn(i)).join(",")),`Target(${r})`}(te(n))}; limitType=${n.limitType})`}function Js(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):V.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of Gr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=iu(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Gr(r),i)||r.endAt&&!function(o,a,c){const l=iu(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Gr(r),i))}(n,t)}function k_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function kd(n){return(t,e)=>{let r=!1;for(const i of Gr(n)){const s=b_(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function b_(n,t,e){const r=n.field.isKeyField()?V.comparator(t.key,e.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?qn(c,l):M()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
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
 */class rr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){mn(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return gd(this.inner)}size(){return this.innerSize}}/**
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
 */const N_=new it(V.comparator);function Re(){return N_}const bd=new it(V.comparator);function Br(...n){let t=bd;for(const e of n)t=t.insert(e.key,e);return t}function Nd(n){let t=bd;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function rn(){return zr()}function Dd(){return zr()}function zr(){return new rr(n=>n.toString(),(n,t)=>n.isEqual(t))}const D_=new it(V.comparator),V_=new Dt(V.comparator);function j(...n){let t=V_;for(const e of n)t=t.add(e);return t}const O_=new Dt(H);function L_(){return O_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Is(t)?"-0":t}}function Od(n){return{integerValue:""+n}}function M_(n,t){return f_(t)?Od(t):Vd(n,t)}/**
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
 */class Zs{constructor(){this._=void 0}}function x_(n,t,e){return n instanceof As?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&hc(s)&&(s=dc(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof ci?Md(n,t):n instanceof li?xd(n,t):function(i,s){const o=Ld(i,s),a=cu(o)+cu(i.Te);return wa(o)&&wa(i.Te)?Od(a):Vd(i.serializer,a)}(n,t)}function F_(n,t,e){return n instanceof ci?Md(n,t):n instanceof li?xd(n,t):e}function Ld(n,t){return n instanceof Rs?function(r){return wa(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class As extends Zs{}class ci extends Zs{constructor(t){super(),this.elements=t}}function Md(n,t){const e=Fd(t);for(const r of n.elements)e.some(i=>se(i,r))||e.push(r);return{arrayValue:{values:e}}}class li extends Zs{constructor(t){super(),this.elements=t}}function xd(n,t){let e=Fd(t);for(const r of n.elements)e=e.filter(i=>!se(i,r));return{arrayValue:{values:e}}}class Rs extends Zs{constructor(t,e){super(),this.serializer=t,this.Te=e}}function cu(n){return ut(n.integerValue||n.doubleValue)}function Fd(n){return fc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function U_(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof ci&&i instanceof ci||r instanceof li&&i instanceof li?jn(r.elements,i.elements,se):r instanceof Rs&&i instanceof Rs?se(r.Te,i.Te):r instanceof As&&i instanceof As}(n.transform,t.transform)}class B_{constructor(t,e){this.version=t,this.transformResults=e}}class ee{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ee}static exists(t){return new ee(void 0,t)}static updateTime(t){return new ee(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ss(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class to{}function Ud(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new $d(n.key,ee.none()):new Ri(n.key,n.data,ee.none());{const e=n.data,r=Bt.empty();let i=new Dt(kt.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Je(n.key,r,new $t(i.toArray()),ee.none())}}function $_(n,t,e){n instanceof Ri?function(i,s,o){const a=i.value.clone(),c=uu(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Je?function(i,s,o){if(!ss(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=uu(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Bd(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Hr(n,t,e,r){return n instanceof Ri?function(s,o,a,c){if(!ss(s.precondition,o))return a;const l=s.value.clone(),u=hu(s.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,t,e,r):n instanceof Je?function(s,o,a,c){if(!ss(s.precondition,o))return a;const l=hu(s.fieldTransforms,c,o),u=o.data;return u.setAll(Bd(s)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(s,o,a){return ss(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function j_(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=Ld(r.transform,i||null);s!=null&&(e===null&&(e=Bt.empty()),e.set(r.field,s))}return e||null}function lu(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&jn(r,i,(s,o)=>U_(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ri extends to{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Je extends to{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Bd(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function uu(n,t,e){const r=new Map;nt(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,F_(o,a,e[i]))}return r}function hu(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,x_(s,o,t))}return r}class $d extends to{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class q_ extends to{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class K_{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&$_(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Hr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Hr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Dd();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const c=Ud(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&jn(this.mutations,t.mutations,(e,r)=>lu(e,r))&&jn(this.baseMutations,t.baseMutations,(e,r)=>lu(e,r))}}class _c{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){nt(t.mutations.length===r.length);let i=function(){return D_}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new _c(t,e,r,i)}}/**
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
 */class G_{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class z_{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var lt,z;function H_(n){switch(n){default:return M();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function jd(n){if(n===void 0)return Ae("GRPC error has no .code"),p.UNKNOWN;switch(n){case lt.OK:return p.OK;case lt.CANCELLED:return p.CANCELLED;case lt.UNKNOWN:return p.UNKNOWN;case lt.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case lt.INTERNAL:return p.INTERNAL;case lt.UNAVAILABLE:return p.UNAVAILABLE;case lt.UNAUTHENTICATED:return p.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case lt.NOT_FOUND:return p.NOT_FOUND;case lt.ALREADY_EXISTS:return p.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return p.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case lt.ABORTED:return p.ABORTED;case lt.OUT_OF_RANGE:return p.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return p.UNIMPLEMENTED;case lt.DATA_LOSS:return p.DATA_LOSS;default:return M()}}(z=lt||(lt={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function W_(){return new TextEncoder}/**
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
 */const Y_=new Ln([4294967295,4294967295],0);function du(n){const t=W_().encode(n),e=new Jg;return e.update(t),new Uint8Array(e.digest())}function fu(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Ln([e,r],0),new Ln([i,s],0)]}class yc{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new $r(`Invalid padding: ${e}`);if(r<0)throw new $r(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new $r(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new $r(`Invalid padding when bitmap length is 0: ${e}`);this.Ae=8*t.length-e,this.Re=Ln.fromNumber(this.Ae)}Ve(t,e,r){let i=t.add(e.multiply(Ln.fromNumber(r)));return i.compare(Y_)===1&&(i=new Ln([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ae===0)return!1;const e=du(t),[r,i]=fu(e);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new yc(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Ae===0)return;const e=du(t),[r,i]=fu(e);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class $r extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class eo{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Si.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new eo(F.min(),i,new it(H),Re(),j())}}class Si{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Si(r,e,j(),j(),j())}}/**
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
 */class os{constructor(t,e,r,i){this.ge=t,this.removedTargetIds=e,this.key=r,this.pe=i}}class qd{constructor(t,e){this.targetId=t,this.ye=e}}class Kd{constructor(t,e,r=Ot.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class pu{constructor(){this.we=0,this.Se=gu(),this.be=Ot.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(t){t.approximateByteSize()>0&&(this.Ce=!0,this.be=t)}xe(){let t=j(),e=j(),r=j();return this.Se.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:M()}}),new Si(this.be,this.De,t,e,r)}Oe(){this.Ce=!1,this.Se=gu()}Ne(t,e){this.Ce=!0,this.Se=this.Se.insert(t,e)}Be(t){this.Ce=!0,this.Se=this.Se.remove(t)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class Q_{constructor(t){this.Qe=t,this.Ke=new Map,this.$e=Re(),this.Ue=mu(),this.We=new it(H)}Ge(t){for(const e of t.ge)t.pe&&t.pe.isFoundDocument()?this.ze(e,t.pe):this.je(e,t.key,t.pe);for(const e of t.removedTargetIds)this.je(e,t.key,t.pe)}He(t){this.forEachTarget(t,e=>{const r=this.Je(e);switch(t.state){case 0:this.Ye(e)&&r.Me(t.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(t.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(e);break;case 3:this.Ye(e)&&(r.qe(),r.Me(t.resumeToken));break;case 4:this.Ye(e)&&(this.Ze(e),r.Me(t.resumeToken));break;default:M()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ke.forEach((r,i)=>{this.Ye(i)&&e(i)})}Xe(t){const e=t.targetId,r=t.ye.count,i=this.et(e);if(i){const s=i.target;if(Ra(s))if(r===0){const o=new V(s.path);this.je(e,o,Ct.newNoDocument(o,F.min()))}else nt(r===1);else{const o=this.tt(e);if(o!==r){const a=this.nt(t),c=a?this.rt(a,t,o):1;if(c!==0){this.Ze(e);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(e,l)}}}}}nt(t){const e=t.ye.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let o,a;try{o=hn(r).toUint8Array()}catch(c){if(c instanceof _d)return $n("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new yc(o,i,s)}catch(c){return $n(c instanceof $r?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(t,e,r){return e.ye.count===r-this.ot(t,e.targetId)?0:2}ot(t,e){const r=this.Qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.je(e,s,null),i++)}),i}_t(t){const e=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&Ra(a.target)){const c=new V(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,Ct.newNoDocument(c,t))}s.Fe&&(e.set(o,s.xe()),s.Oe())}});let r=j();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(t));const i=new eo(t,e,this.We,this.$e,r);return this.$e=Re(),this.Ue=mu(),this.We=new it(H),i}ze(t,e){if(!this.Ye(t))return;const r=this.ut(t,e.key)?2:0;this.Je(t).Ne(e.key,r),this.$e=this.$e.insert(e.key,e),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}je(t,e,r){if(!this.Ye(t))return;const i=this.Je(t);this.ut(t,e)?i.Ne(e,1):i.Be(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),r&&(this.$e=this.$e.insert(e,r))}removeTarget(t){this.Ke.delete(t)}tt(t){const e=this.Je(t).xe();return this.Qe.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Le(t){this.Je(t).Le()}Je(t){let e=this.Ke.get(t);return e||(e=new pu,this.Ke.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new Dt(H),this.Ue=this.Ue.insert(t,e)),e}Ye(t){const e=this.et(t)!==null;return e||P("WatchChangeAggregator","Detected inactive target",t),e}et(t){const e=this.Ke.get(t);return e&&e.ve?null:this.Qe.lt(t)}Ze(t){this.Ke.set(t,new pu),this.Qe.getRemoteKeysForTarget(t).forEach(e=>{this.je(t,e,null)})}ut(t,e){return this.Qe.getRemoteKeysForTarget(t).has(e)}}function mu(){return new it(V.comparator)}function gu(){return new it(V.comparator)}const X_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),J_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Z_=(()=>({and:"AND",or:"OR"}))();class ty{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ca(n,t){return n.useProto3Json||Qs(t)?t:{value:t}}function Ss(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Gd(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ey(n,t){return Ss(n,t.toTimestamp())}function ne(n){return nt(!!n),F.fromTimestamp(function(e){const r=We(e);return new mt(r.seconds,r.nanos)}(n))}function Ec(n,t){return function(r){return new et(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(t).canonicalString()}function zd(n){const t=et.fromString(n);return nt(Qd(t)),t}function ka(n,t){return Ec(n.databaseId,t.path)}function Qo(n,t){const e=zd(t);if(e.get(1)!==n.databaseId.projectId)throw new S(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new S(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new V(Hd(e))}function ba(n,t){return Ec(n.databaseId,t)}function ny(n){const t=zd(n);return t.length===4?et.emptyPath():Hd(t)}function Na(n){return new et(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Hd(n){return nt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function _u(n,t,e){return{name:ka(n,t),fields:e.value.mapValue.fields}}function ry(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(nt(u===void 0||typeof u=="string"),Ot.fromBase64String(u||"")):(nt(u===void 0||u instanceof Uint8Array),Ot.fromUint8Array(u||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?p.UNKNOWN:jd(l.code);return new S(u,l.message||"")}(o);e=new Kd(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qo(n,r.document.name),s=ne(r.document.updateTime),o=r.document.createTime?ne(r.document.createTime):F.min(),a=new Bt({mapValue:{fields:r.document.fields}}),c=Ct.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];e=new os(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Qo(n,r.document),s=r.readTime?ne(r.readTime):F.min(),o=Ct.newNoDocument(i,s),a=r.removedTargetIds||[];e=new os([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Qo(n,r.document),s=r.removedTargetIds||[];e=new os([],s,i,null)}else{if(!("filter"in t))return M();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new z_(i,s),a=r.targetId;e=new qd(a,o)}}return e}function iy(n,t){let e;if(t instanceof Ri)e={update:_u(n,t.key,t.value)};else if(t instanceof $d)e={delete:ka(n,t.key)};else if(t instanceof Je)e={update:_u(n,t.key,t.data),updateMask:fy(t.fieldMask)};else{if(!(t instanceof q_))return M();e={verify:ka(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof As)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ci)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof li)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Rs)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw M()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ey(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M()}(n,t.precondition)),e}function sy(n,t){return n&&n.length>0?(nt(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?ne(i.updateTime):ne(s);return o.isEqual(F.min())&&(o=ne(s)),new B_(o,i.transformResults||[])}(e,t))):[]}function oy(n,t){return{documents:[ba(n,t.path)]}}function ay(n,t){const e={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(e.parent=ba(n,r),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=ba(n,r.popLast()),e.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Yd(Wt.create(c,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Nn(h.field),direction:uy(h.dir)}}(l))}(t.orderBy);s&&(e.structuredQuery.orderBy=s);const o=Ca(n,t.limit);return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),e}function cy(n){let t=ny(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){nt(r===1);const u=e.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let s=[];e.where&&(s=function(h){const d=Wd(h);return d instanceof Wt&&Td(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(y){return new Kr(Dn(y.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Qs(d)?null:d}(e.limit));let c=null;e.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new ws(f,d)}(e.startAt));let l=null;return e.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new ws(f,d)}(e.endAt)),P_(t,i,o,s,a,"F",c,l)}function ly(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Wd(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Dn(e.unaryFilter.field);return dt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Dn(e.unaryFilter.field);return dt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Dn(e.unaryFilter.field);return dt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Dn(e.unaryFilter.field);return dt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return dt.create(Dn(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Wt.create(e.compositeFilter.filters.map(r=>Wd(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function uy(n){return X_[n]}function hy(n){return J_[n]}function dy(n){return Z_[n]}function Nn(n){return{fieldPath:n.canonicalString()}}function Dn(n){return kt.fromServerFormat(n.fieldPath)}function Yd(n){return n instanceof dt?function(e){if(e.op==="=="){if(ru(e.value))return{unaryFilter:{field:Nn(e.field),op:"IS_NAN"}};if(nu(e.value))return{unaryFilter:{field:Nn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ru(e.value))return{unaryFilter:{field:Nn(e.field),op:"IS_NOT_NAN"}};if(nu(e.value))return{unaryFilter:{field:Nn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nn(e.field),op:hy(e.op),value:e.value}}}(n):n instanceof Wt?function(e){const r=e.getFilters().map(i=>Yd(i));return r.length===1?r[0]:{compositeFilter:{op:dy(e.op),filters:r}}}(n):M()}function fy(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Qd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Fe{constructor(t,e,r,i,s=F.min(),o=F.min(),a=Ot.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Fe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Fe(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Fe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Fe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class py{constructor(t){this.ht=t}}function my(n){const t=cy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Pa(t,t.limit,"L"):t}/**
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
 */class gy{constructor(){this.an=new _y}addToCollectionParentIndex(t,e){return this.an.add(e),g.resolve()}getCollectionParents(t,e){return g.resolve(this.an.getEntries(e))}addFieldIndex(t,e){return g.resolve()}deleteFieldIndex(t,e){return g.resolve()}deleteAllFieldIndexes(t){return g.resolve()}createTargetIndexes(t,e){return g.resolve()}getDocumentsMatchingTarget(t,e){return g.resolve(null)}getIndexType(t,e){return g.resolve(0)}getFieldIndexes(t,e){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,e){return g.resolve(He.min())}getMinOffsetFromCollectionGroup(t,e){return g.resolve(He.min())}updateCollectionGroup(t,e,r){return g.resolve()}updateIndexEntries(t,e){return g.resolve()}}class _y{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new Dt(et.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Dt(et.comparator)).toArray()}}/**
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
 */class Gn{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static Bn(){return new Gn(0)}static Ln(){return new Gn(-1)}}/**
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
 */class yy{constructor(){this.changes=new rr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ct.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?g.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Ey{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class vy{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Hr(r.mutation,i,$t.empty(),mt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,j()).next(()=>r))}getLocalViewOfDocuments(t,e,r=j()){const i=rn();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=Br();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=rn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,j()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=Re();const o=zr(),a=function(){return zr()}();return e.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Je)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Hr(u.mutation,l,u.mutation.getFieldMask(),mt.now())):o.set(l.key,$t.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),e.forEach((l,u)=>{var h;return a.set(l,new Ey(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=zr();let i=new it((o,a)=>o-a),s=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=e.get(c);if(l===null)return;let u=r.get(c)||$t.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||j()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Dd();u.forEach(d=>{if(!s.has(d)){const f=Ud(e.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(o){return V.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Pd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):g.resolve(rn());let a=-1,c=s;return o.next(l=>g.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?g.resolve():this.remoteDocumentCache.getEntry(t,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(t,l,s)).next(()=>this.computeViews(t,c,l,j())).next(u=>({batchId:a,changes:Nd(u)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new V(e)).next(r=>{let i=Br();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let o=Br();return this.indexManager.getCollectionParents(t,s).next(a=>g.forEach(a,c=>{const l=function(h,d){return new Ai(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,c.child(s));return this.getDocumentsMatchingCollectionQuery(t,l,r,i).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(o=>{s.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Ct.newInvalidDocument(u)))});let a=Br();return o.forEach((c,l)=>{const u=s.get(c);u!==void 0&&Hr(u.mutation,l,$t.empty(),mt.now()),Js(e,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(t){this.serializer=t,this.lr=new Map,this.hr=new Map}getBundleMetadata(t,e){return g.resolve(this.lr.get(e))}saveBundleMetadata(t,e){return this.lr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:ne(i.createTime)}}(e)),g.resolve()}getNamedQuery(t,e){return g.resolve(this.hr.get(e))}saveNamedQuery(t,e){return this.hr.set(e.name,function(i){return{name:i.name,query:my(i.bundledQuery),readTime:ne(i.readTime)}}(e)),g.resolve()}}/**
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
 */class Iy{constructor(){this.overlays=new it(V.comparator),this.Pr=new Map}getOverlay(t,e){return g.resolve(this.overlays.get(e))}getOverlays(t,e){const r=rn();return g.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.It(t,e,s)}),g.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),g.resolve()}getOverlaysForCollection(t,e,r){const i=rn(),s=e.length+1,o=new V(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return g.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new it((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=rn(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=rn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return g.resolve(a)}It(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new G_(e,r));let s=this.Pr.get(e);s===void 0&&(s=j(),this.Pr.set(e,s)),this.Pr.set(e,s.add(r.key))}}/**
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
 */class vc{constructor(){this.Ir=new Dt(_t.dr),this.Tr=new Dt(_t.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(t,e){const r=new _t(t,e);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Rr(new _t(t,e))}Vr(t,e){t.forEach(r=>this.removeReference(r,e))}mr(t){const e=new V(new et([])),r=new _t(e,t),i=new _t(e,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(t=>this.Rr(t))}Rr(t){this.Ir=this.Ir.delete(t),this.Tr=this.Tr.delete(t)}pr(t){const e=new V(new et([])),r=new _t(e,t),i=new _t(e,t+1);let s=j();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new _t(t,0),r=this.Ir.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class _t{constructor(t,e){this.key=t,this.yr=e}static dr(t,e){return V.comparator(t.key,e.key)||H(t.yr,e.yr)}static Er(t,e){return H(t.yr,e.yr)||V.comparator(t.key,e.key)}}/**
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
 */class wy{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.wr=1,this.Sr=new Dt(_t.dr)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new K_(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new _t(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,e){return g.resolve(this.br(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Dr(r),s=i<0?0:i;return g.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new _t(e,0),i=new _t(e,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),g.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Dt(H);return e.forEach(i=>{const s=new _t(i,0),o=new _t(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),g.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new _t(new V(s),0);let a=new Dt(H);return this.Sr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.yr)),!0)},o),g.resolve(this.Cr(a))}Cr(t){const e=[];return t.forEach(r=>{const i=this.br(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){nt(this.vr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return g.forEach(e.mutations,i=>{const s=new _t(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Sr=r})}xn(t){}containsKey(t,e){const r=new _t(e,0),i=this.Sr.firstAfterOrEqual(r);return g.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}vr(t,e){return this.Dr(t)}Dr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}br(t){const e=this.Dr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Ay{constructor(t){this.Fr=t,this.docs=function(){return new it(V.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return g.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(e))}getEntries(t,e){let r=Re();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ct.newInvalidDocument(i))}),g.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=Re();const o=e.path,a=new V(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||u_(l_(u),r)<=0||(i.has(u.key)||Js(e,u))&&(s=s.insert(u.key,u.mutableCopy()))}return g.resolve(s)}getAllFromCollectionGroup(t,e,r,i){M()}Mr(t,e){return g.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Ry(this)}getSize(t){return g.resolve(this.size)}}class Ry extends yy{constructor(t){super(),this.ur=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ur.addEntry(t,i)):this.ur.removeEntry(r)}),g.waitFor(e)}getFromCache(t,e){return this.ur.getEntry(t,e)}getAllFromCache(t,e){return this.ur.getEntries(t,e)}}/**
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
 */class Sy{constructor(t){this.persistence=t,this.Or=new rr(e=>pc(e),mc),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Nr=0,this.Br=new vc,this.targetCount=0,this.Lr=Gn.Bn()}forEachTarget(t,e){return this.Or.forEach((r,i)=>e(i)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Nr)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Nr&&(this.Nr=e),g.resolve()}Qn(t){this.Or.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Gn(e),this.highestTargetId=e),t.sequenceNumber>this.Nr&&(this.Nr=t.sequenceNumber)}addTargetData(t,e){return this.Qn(e),this.targetCount+=1,g.resolve()}updateTargetData(t,e){return this.Qn(e),g.resolve()}removeTargetData(t,e){return this.Or.delete(e.target),this.Br.mr(e.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),g.waitFor(s).next(()=>i)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,e){const r=this.Or.get(e)||null;return g.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Ar(e,r),g.resolve()}removeMatchingKeys(t,e,r){this.Br.Vr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),g.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.mr(e),g.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.pr(e);return g.resolve(r)}containsKey(t,e){return g.resolve(this.Br.containsKey(e))}}/**
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
 */class Py{constructor(t,e){this.kr={},this.overlays={},this.qr=new uc(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=t(this),this.Kr=new Sy(this),this.indexManager=new gy,this.remoteDocumentCache=function(i){return new Ay(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new py(e),this.Ur=new Ty(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Iy,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.kr[t.toKey()];return r||(r=new wy(e,this.referenceDelegate),this.kr[t.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(t,e,r){P("MemoryPersistence","Starting transaction:",t);const i=new Cy(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(t,e){return g.or(Object.values(this.kr).map(r=>()=>r.containsKey(t,e)))}}class Cy extends d_{constructor(t){super(),this.currentSequenceNumber=t}}class Tc{constructor(t){this.persistence=t,this.jr=new vc,this.Hr=null}static Jr(t){return new Tc(t)}get Yr(){if(this.Hr)return this.Hr;throw M()}addReference(t,e,r){return this.jr.addReference(r,e),this.Yr.delete(r.toString()),g.resolve()}removeReference(t,e,r){return this.jr.removeReference(r,e),this.Yr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(t,e){return this.Yr.add(e.toString()),g.resolve()}removeTarget(t,e){this.jr.mr(e.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}Wr(){this.Hr=new Set}Gr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Yr,r=>{const i=V.fromPath(r);return this.Zr(t,i).next(s=>{s||e.removeEntry(i,F.min())})}).next(()=>(this.Hr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Zr(t,e).next(r=>{r?this.Yr.delete(e.toString()):this.Yr.add(e.toString())})}$r(t){return 0}Zr(t,e){return g.or([()=>g.resolve(this.jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.zr(t,e)])}}/**
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
 */class Ic{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Qi=r,this.Ki=i}static $i(t,e){let r=j(),i=j();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ic(t,e.fromCache,r,i)}}/**
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
 */class ky{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class by{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(t,e){this.ji=t,this.indexManager=e,this.Ui=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.Hi(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(t,e,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new ky;return this.Yi(t,e,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(t,e,o,a.size)})}).next(()=>s.result)}Zi(t,e,r,i){return r.documentReadCount<this.Gi?(Mr()<=G.DEBUG&&P("QueryEngine","SDK will not create cache indexes for query:",bn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),g.resolve()):(Mr()<=G.DEBUG&&P("QueryEngine","Query:",bn(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(Mr()<=G.DEBUG&&P("QueryEngine","The SDK decides to create cache indexes for query:",bn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,te(e))):g.resolve())}Hi(t,e){if(au(e))return g.resolve(null);let r=te(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Pa(e,null,"F"),r=te(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=j(...s);return this.ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const l=this.Xi(e,a);return this.es(e,l,o,c.readTime)?this.Hi(t,Pa(e,null,"F")):this.ts(t,l,e,c)}))})))}Ji(t,e,r,i){return au(e)||i.isEqual(F.min())?g.resolve(null):this.ji.getDocuments(t,r).next(s=>{const o=this.Xi(e,s);return this.es(e,o,r,i)?g.resolve(null):(Mr()<=G.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),bn(e)),this.ts(t,o,e,c_(i,-1)).next(a=>a))})}Xi(t,e){let r=new Dt(kd(t));return e.forEach((i,s)=>{Js(t,s)&&(r=r.add(s))}),r}es(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(t,e,r){return Mr()<=G.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",bn(e)),this.ji.getDocumentsMatchingQuery(t,e,He.min(),r)}ts(t,e,r,i){return this.ji.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(t,e,r,i){this.persistence=t,this.ns=e,this.serializer=i,this.rs=new it(H),this.ss=new rr(s=>pc(s),mc),this.os=new Map,this._s=t.getRemoteDocumentCache(),this.Kr=t.getTargetCache(),this.Ur=t.getBundleCache(),this.us(r)}us(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new vy(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.rs))}}function Dy(n,t,e,r){return new Ny(n,t,e,r)}async function Xd(n,t){const e=B(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.us(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=j();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return e.localDocuments.getDocuments(r,c).next(l=>({cs:l,removedBatchIds:o,addedBatchIds:a}))})})}function Vy(n,t){const e=B(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e._s.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=g.resolve();return d.forEach(y=>{f=f.next(()=>u.getEntry(c,y)).next(R=>{const m=l.docVersions.get(y);nt(m!==null),R.version.compareTo(m)<0&&(h.applyToRemoteDocument(R,l),R.isValidDocument()&&(R.setReadTime(l.commitVersion),u.addEntry(R)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=j();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Jd(n){const t=B(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Kr.getLastRemoteSnapshotVersion(e))}function Oy(n,t){const e=B(n),r=t.snapshotVersion;let i=e.rs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e._s.newChangeBuffer({trackRemovals:!0});i=e.rs;const a=[];t.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(e.Kr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>e.Kr.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(Ot.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(R,m,C){return R.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,f,u)&&a.push(e.Kr.updateTargetData(s,f))});let c=Re(),l=j();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(Ly(s,o,t.documentUpdates).next(u=>{c=u.ls,l=u.hs})),!r.isEqual(F.min())){const u=e.Kr.getLastRemoteSnapshotVersion(s).next(h=>e.Kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return g.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(e.rs=i,s))}function Ly(n,t,e){let r=j(),i=j();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=Re();return e.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(F.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ls:o,hs:i}})}function My(n,t){const e=B(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function xy(n,t){const e=B(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Kr.getTargetData(r,t).next(s=>s?(i=s,g.resolve(i)):e.Kr.allocateTargetId(r).next(o=>(i=new Fe(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.Kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.rs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.rs=e.rs.insert(r.targetId,r),e.ss.set(t,r.targetId)),r})}async function Da(n,t,e){const r=B(n),i=r.rs.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wi(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.rs=r.rs.remove(t),r.ss.delete(i.target)}function yu(n,t,e){const r=B(n);let i=F.min(),s=j();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=B(c),d=h.ss.get(u);return d!==void 0?g.resolve(h.rs.get(d)):h.Kr.getTargetData(l,u)}(r,o,te(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.ns.getDocumentsMatchingQuery(o,t,e?i:F.min(),e?s:j())).next(a=>(Fy(r,k_(t),a),{documents:a,Ps:s})))}function Fy(n,t,e){let r=n.os.get(t)||F.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.os.set(t,r)}class Eu{constructor(){this.activeTargetIds=L_()}Rs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}As(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Uy{constructor(){this.ro=new Eu,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.ro.Rs(t),this.io[t]||"not-current"}updateQueryState(t,e,r){this.io[t]=e}removeLocalQueryTarget(t){this.ro.Vs(t)}isLocalQueryTarget(t){return this.ro.activeTargetIds.has(t)}clearQueryState(t){delete this.io[t]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(t){return this.ro.activeTargetIds.has(t)}start(){return this.ro=new Eu,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class By{so(t){}shutdown(){}}/**
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
 */class vu{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(t){this.co.push(t)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.co)t(0)}uo(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.co)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zi=null;function Xo(){return Zi===null?Zi=function(){return 268435456+Math.round(2147483648*Math.random())}():Zi++,"0x"+Zi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class jy{constructor(t){this.ho=t.ho,this.Po=t.Po}Io(t){this.To=t}Eo(t){this.Ao=t}onMessage(t){this.Ro=t}close(){this.Po()}send(t){this.ho(t)}Vo(){this.To()}mo(t){this.Ao(t)}fo(t){this.Ro(t)}}/**
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
 */const St="WebChannelConnection";class qy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+e.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(e,r,i,s,o){const a=Xo(),c=this.Do(e,r);P("RestConnection",`Sending RPC '${e}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(l,s,o),this.vo(e,c,l,i).then(u=>(P("RestConnection",`Received RPC '${e}' ${a}: `,u),u),u=>{throw $n("RestConnection",`RPC '${e}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}Fo(e,r,i,s,o,a){return this.bo(e,r,i,s,o)}Co(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+nr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}Do(e,r){const i=$y[e];return`${this.po}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,r,i){const s=Xo();return new Promise((o,a)=>{const c=new Xg;c.setWithCredentials(!0),c.listenOnce(Yg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Yo.NO_ERROR:const u=c.getResponseJson();P(St,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(u)),o(u);break;case Yo.TIMEOUT:P(St,`RPC '${t}' ${s} timed out`),a(new S(p.DEADLINE_EXCEEDED,"Request time out"));break;case Yo.HTTP_ERROR:const h=c.getStatus();if(P(St,`RPC '${t}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(m){const C=m.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(C)>=0?C:p.UNKNOWN}(f.status);a(new S(y,f.message))}else a(new S(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new S(p.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{P(St,`RPC '${t}' ${s} completed.`)}});const l=JSON.stringify(i);P(St,`RPC '${t}' ${s} sending request:`,i),c.send(e,"POST",l,r,15)})}Mo(t,e,r){const i=Xo(),s=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Hg(),a=Wg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Co(c.initMessageHeaders,e,r),c.encodeInitMessageHeaders=!0;const u=s.join("");P(St,`Creating RPC '${t}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const y=new jy({ho:m=>{f?P(St,`Not sending because RPC '${t}' stream ${i} is closed:`,m):(d||(P(St,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),P(St,`RPC '${t}' stream ${i} sending:`,m),h.send(m))},Po:()=>h.close()}),R=(m,C,A)=>{m.listen(C,v=>{try{A(v)}catch(L){setTimeout(()=>{throw L},0)}})};return R(h,Qi.EventType.OPEN,()=>{f||P(St,`RPC '${t}' stream ${i} transport opened.`)}),R(h,Qi.EventType.CLOSE,()=>{f||(f=!0,P(St,`RPC '${t}' stream ${i} transport closed`),y.mo())}),R(h,Qi.EventType.ERROR,m=>{f||(f=!0,$n(St,`RPC '${t}' stream ${i} transport errored:`,m),y.mo(new S(p.UNAVAILABLE,"The operation could not be completed")))}),R(h,Qi.EventType.MESSAGE,m=>{var C;if(!f){const A=m.data[0];nt(!!A);const v=A,L=v.error||((C=v[0])===null||C===void 0?void 0:C.error);if(L){P(St,`RPC '${t}' stream ${i} received error:`,L);const Z=L.status;let Y=function(ct){const gt=lt[ct];if(gt!==void 0)return jd(gt)}(Z),N=L.message;Y===void 0&&(Y=p.INTERNAL,N="Unknown error status: "+Z+" with message "+L.message),f=!0,y.mo(new S(Y,N)),h.close()}else P(St,`RPC '${t}' stream ${i} received:`,A),y.fo(A)}}),R(a,Qg.STAT_EVENT,m=>{m.stat===Ql.PROXY?P(St,`RPC '${t}' stream ${i} detected buffering proxy`):m.stat===Ql.NOPROXY&&P(St,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Vo()},0),y}}function Jo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(n){return new ty(n,!0)}/**
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
 */class Zd{constructor(t,e,r=1e3,i=1.5,s=6e4){this._i=t,this.timerId=e,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(t){this.cancel();const e=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,e-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),t())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class tf{constructor(t,e,r,i,s,o,a,c){this._i=t,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new Zd(t,e)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(t){this.r_(),this.stream.send(t)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(t,e){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,t!==4?this.Ho.reset():e&&e.code===p.RESOURCE_EXHAUSTED?(Ae(e.toString()),Ae("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):e&&e.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Eo(e)}s_(){}auth(){this.state=1;const t=this.o_(this.Go),e=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===e&&this.__(r,i)},r=>{t(()=>{const i=new S(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(t,e){const r=this.o_(this.Go);this.stream=this.u_(t,e),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(t){return P("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}o_(t){return e=>{this._i.enqueueAndForget(()=>this.Go===t?e():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ky extends tf{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}u_(t,e){return this.connection.Mo("Listen",t,e)}onMessage(t){this.Ho.reset();const e=ry(this.serializer,t),r=function(s){if(!("targetChange"in s))return F.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?F.min():o.readTime?ne(o.readTime):F.min()}(t);return this.listener.c_(e,r)}l_(t){const e={};e.database=Na(this.serializer),e.addTarget=function(s,o){let a;const c=o.target;if(a=Ra(c)?{documents:oy(s,c)}:{query:ay(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Gd(s,o.resumeToken);const l=Ca(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(F.min())>0){a.readTime=Ss(s,o.snapshotVersion.toTimestamp());const l=Ca(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=ly(this.serializer,t);r&&(e.labels=r),this.n_(e)}h_(t){const e={};e.database=Na(this.serializer),e.removeTarget=t,this.n_(e)}}class Gy extends tf{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(t,e){return this.connection.Mo("Write",t,e)}onMessage(t){if(nt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.P_){this.Ho.reset();const e=sy(t.writeResults,t.commitTime),r=ne(t.commitTime);return this.listener.T_(r,e)}return nt(!t.writeResults||t.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const t={};t.database=Na(this.serializer),this.n_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>iy(this.serializer,r))};this.n_(e)}}/**
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
 */class zy extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new S(p.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,e,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(t,e,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(p.UNKNOWN,i.toString())})}Fo(t,e,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(t,e,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new S(p.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class Hy{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(t){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.w_("Offline")))}set(t){this.D_(),this.f_=0,t==="Online"&&(this.p_=!1),this.w_(t)}w_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}S_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(Ae(e),this.p_=!1):P("OnlineStateTracker",e)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class Wy{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{gn(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=B(c);l.F_.add(4),await Pi(l),l.O_.set("Unknown"),l.F_.delete(4),await ro(l)}(this))})}),this.O_=new Hy(r,i)}}async function ro(n){if(gn(n))for(const t of n.M_)await t(!0)}async function Pi(n){for(const t of n.M_)await t(!1)}function ef(n,t){const e=B(n);e.v_.has(t.targetId)||(e.v_.set(t.targetId,t),Rc(e)?Ac(e):ir(e).Yo()&&wc(e,t))}function nf(n,t){const e=B(n),r=ir(e);e.v_.delete(t),r.Yo()&&rf(e,t),e.v_.size===0&&(r.Yo()?r.e_():gn(e)&&e.O_.set("Unknown"))}function wc(n,t){if(n.N_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ir(n).l_(t)}function rf(n,t){n.N_.Le(t),ir(n).h_(t)}function Ac(n){n.N_=new Q_({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>n.v_.get(t)||null,st:()=>n.datastore.serializer.databaseId}),ir(n).start(),n.O_.y_()}function Rc(n){return gn(n)&&!ir(n).Jo()&&n.v_.size>0}function gn(n){return B(n).F_.size===0}function sf(n){n.N_=void 0}async function Yy(n){n.v_.forEach((t,e)=>{wc(n,t)})}async function Qy(n,t){sf(n),Rc(n)?(n.O_.b_(t),Ac(n)):n.O_.set("Unknown")}async function Xy(n,t,e){if(n.O_.set("Online"),t instanceof Kd&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.v_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.v_.delete(a),i.N_.removeTarget(a))}(n,t)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ps(n,r)}else if(t instanceof os?n.N_.Ge(t):t instanceof qd?n.N_.Xe(t):n.N_.He(t),!e.isEqual(F.min()))try{const r=await Jd(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.N_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=s.v_.get(l);u&&s.v_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=s.v_.get(c);if(!u)return;s.v_.set(c,u.withResumeToken(Ot.EMPTY_BYTE_STRING,u.snapshotVersion)),rf(s,c);const h=new Fe(u.target,c,l,u.sequenceNumber);wc(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await Ps(n,r)}}async function Ps(n,t,e){if(!wi(t))throw t;n.F_.add(1),await Pi(n),n.O_.set("Offline"),e||(e=()=>Jd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await e(),n.F_.delete(1),await ro(n)})}function of(n,t){return t().catch(e=>Ps(n,e,t))}async function io(n){const t=B(n),e=Ye(t);let r=t.C_.length>0?t.C_[t.C_.length-1].batchId:-1;for(;Jy(t);)try{const i=await My(t.localStore,r);if(i===null){t.C_.length===0&&e.e_();break}r=i.batchId,Zy(t,i)}catch(i){await Ps(t,i)}af(t)&&cf(t)}function Jy(n){return gn(n)&&n.C_.length<10}function Zy(n,t){n.C_.push(t);const e=Ye(n);e.Yo()&&e.I_&&e.d_(t.mutations)}function af(n){return gn(n)&&!Ye(n).Jo()&&n.C_.length>0}function cf(n){Ye(n).start()}async function tE(n){Ye(n).A_()}async function eE(n){const t=Ye(n);for(const e of n.C_)t.d_(e.mutations)}async function nE(n,t,e){const r=n.C_.shift(),i=_c.from(r,t,e);await of(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await io(n)}async function rE(n,t){t&&Ye(n).I_&&await async function(r,i){if(function(o){return H_(o)&&o!==p.ABORTED}(i.code)){const s=r.C_.shift();Ye(r).Xo(),await of(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await io(r)}}(n,t),af(n)&&cf(n)}async function Tu(n,t){const e=B(n);e.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=gn(e);e.F_.add(3),await Pi(e),r&&e.O_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.F_.delete(3),await ro(e)}async function iE(n,t){const e=B(n);t?(e.F_.delete(2),await ro(e)):t||(e.F_.add(2),await Pi(e),e.O_.set("Unknown"))}function ir(n){return n.B_||(n.B_=function(e,r,i){const s=B(e);return s.V_(),new Ky(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Io:Yy.bind(null,n),Eo:Qy.bind(null,n),c_:Xy.bind(null,n)}),n.M_.push(async t=>{t?(n.B_.Xo(),Rc(n)?Ac(n):n.O_.set("Unknown")):(await n.B_.stop(),sf(n))})),n.B_}function Ye(n){return n.L_||(n.L_=function(e,r,i){const s=B(e);return s.V_(),new Gy(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Io:tE.bind(null,n),Eo:rE.bind(null,n),E_:eE.bind(null,n),T_:nE.bind(null,n)}),n.M_.push(async t=>{t?(n.L_.Xo(),await io(n)):(await n.L_.stop(),n.C_.length>0&&(P("RemoteStore",`Stopping write stream with ${n.C_.length} pending writes`),n.C_=[]))})),n.L_}/**
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
 */class Sc{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new Sc(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new S(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pc(n,t){if(Ae("AsyncQueue",`${t}: ${n}`),wi(n))return new S(p.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Mn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||V.comparator(e.key,r.key):(e,r)=>V.comparator(e.key,r.key),this.keyedMap=Br(),this.sortedSet=new it(this.comparator)}static emptySet(t){return new Mn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Mn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Mn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Iu{constructor(){this.k_=new it(V.comparator)}track(t){const e=t.doc.key,r=this.k_.get(e);r?t.type!==0&&r.type===3?this.k_=this.k_.insert(e,t):t.type===3&&r.type!==1?this.k_=this.k_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.k_=this.k_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.k_=this.k_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.k_=this.k_.remove(e):t.type===1&&r.type===2?this.k_=this.k_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.k_=this.k_.insert(e,{type:2,doc:t.doc}):M():this.k_=this.k_.insert(e,t)}q_(){const t=[];return this.k_.inorderTraversal((e,r)=>{t.push(r)}),t}}class zn{constructor(t,e,r,i,s,o,a,c,l){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new zn(t,e,Mn.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Xs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class sE{constructor(){this.Q_=void 0,this.listeners=[]}}class oE{constructor(){this.queries=new rr(t=>Cd(t),Xs),this.onlineState="Unknown",this.K_=new Set}}async function aE(n,t){const e=B(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new sE),i)try{s.Q_=await e.onListen(r)}catch(o){const a=Pc(o,`Initialization of query '${bn(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.listeners.push(t),t.U_(e.onlineState),s.Q_&&t.W_(s.Q_)&&Cc(e)}async function cE(n,t){const e=B(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function lE(n,t){const e=B(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.listeners)a.W_(i)&&(r=!0);o.Q_=i}}r&&Cc(e)}function uE(n,t,e){const r=B(n),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(e);r.queries.delete(t)}function Cc(n){n.K_.forEach(t=>{t.next()})}class hE{constructor(t,e,r){this.query=t,this.G_=e,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new zn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.z_?this.H_(t)&&(this.G_.next(t),e=!0):this.J_(t,this.onlineState)&&(this.Y_(t),e=!0),this.j_=t,e}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let e=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),e=!0),e}J_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const e=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Y_(t){t=zn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
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
 */class lf{constructor(t){this.key=t}}class uf{constructor(t){this.key=t}}class dE{constructor(t,e){this.query=t,this.oa=e,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=j(),this.mutatedKeys=j(),this.ua=kd(t),this.ca=new Mn(this.ua)}get la(){return this.oa}ha(t,e){const r=e?e.Pa:new Iu,i=e?e.ca:this.ca;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((u,h)=>{const d=i.get(u),f=Js(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),R=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let m=!1;d&&f?d.data.isEqual(f.data)?y!==R&&(r.track({type:3,doc:f}),m=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),m=!0,(c&&this.ua(f,c)>0||l&&this.ua(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),m=!0):d&&!f&&(r.track({type:1,doc:d}),m=!0,(c||l)&&(a=!0)),m&&(f?(o=o.add(f),s=R?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:s}}Ia(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r){const i=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const s=t.Pa.q_();s.sort((l,u)=>function(d,f){const y=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return y(d)-y(f)}(l.type,u.type)||this.ua(l.doc,u.doc)),this.da(r);const o=e?this.Ta():[],a=this.aa.size===0&&this.current?1:0,c=a!==this._a;return this._a=a,s.length!==0||c?{snapshot:new zn(this.query,t.ca,i,s,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Iu,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}da(t){t&&(t.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=t.current)}Ta(){if(!this.current)return[];const t=this.aa;this.aa=j(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const e=[];return t.forEach(r=>{this.aa.has(r)||e.push(new uf(r))}),this.aa.forEach(r=>{t.has(r)||e.push(new lf(r))}),e}Ra(t){this.oa=t.Ps,this.aa=j();const e=this.ha(t.documents);return this.applyChanges(e,!0)}Va(){return zn.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class fE{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class pE{constructor(t){this.key=t,this.ma=!1}}class mE{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new rr(a=>Cd(a),Xs),this.pa=new Map,this.ya=new Set,this.wa=new it(V.comparator),this.Sa=new Map,this.ba=new vc,this.Da={},this.Ca=new Map,this.va=Gn.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function gE(n,t){const e=SE(n);let r,i;const s=e.ga.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await xy(e.localStore,te(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await _E(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&ef(e.remoteStore,o)}return i}async function _E(n,t,e,r,i){n.Ma=(h,d,f)=>async function(R,m,C,A){let v=m.view.ha(C);v.es&&(v=await yu(R.localStore,m.query,!1).then(({documents:Y})=>m.view.ha(Y,v)));const L=A&&A.targetChanges.get(m.targetId),Z=m.view.applyChanges(v,R.isPrimaryClient,L);return Au(R,m.targetId,Z.Ea),Z.snapshot}(n,h,d,f);const s=await yu(n.localStore,t,!0),o=new dE(t,s.Ps),a=o.ha(s.documents),c=Si.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,c);Au(n,e,l.Ea);const u=new fE(t,e,o);return n.ga.set(t,u),n.pa.has(e)?n.pa.get(e).push(t):n.pa.set(e,[t]),l.snapshot}async function yE(n,t){const e=B(n),r=e.ga.get(t),i=e.pa.get(r.targetId);if(i.length>1)return e.pa.set(r.targetId,i.filter(s=>!Xs(s,t))),void e.ga.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await Da(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),nf(e.remoteStore,r.targetId),Va(e,r.targetId)}).catch(Ii)):(Va(e,r.targetId),await Da(e.localStore,r.targetId,!0))}async function EE(n,t,e){const r=PE(n);try{const i=await function(o,a){const c=B(o),l=mt.now(),u=a.reduce((f,y)=>f.add(y.key),j());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=Re(),R=j();return c._s.getEntries(f,u).next(m=>{y=m,y.forEach((C,A)=>{A.isValidDocument()||(R=R.add(C))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,y)).next(m=>{h=m;const C=[];for(const A of a){const v=j_(A,h.get(A.key).overlayedDocument);v!=null&&C.push(new Je(A.key,v,yd(v.value.mapValue),ee.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,C,a)}).next(m=>{d=m;const C=m.applyToLocalDocumentSet(h,R);return c.documentOverlayCache.saveOverlays(f,m.batchId,C)})}).then(()=>({batchId:d.batchId,changes:Nd(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new it(H)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,i.batchId,e),await Ci(r,i.changes),await io(r.remoteStore)}catch(i){const s=Pc(i,"Failed to persist write");e.reject(s)}}async function hf(n,t){const e=B(n);try{const r=await Oy(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.Sa.get(s);o&&(nt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?nt(o.ma):i.removedDocuments.size>0&&(nt(o.ma),o.ma=!1))}),await Ci(e,r,t)}catch(r){await Ii(r)}}function wu(n,t,e){const r=B(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=B(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.U_(a)&&(l=!0)}),l&&Cc(c)}(r.eventManager,t),i.length&&r.fa.c_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function vE(n,t,e){const r=B(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Sa.get(t),s=i&&i.key;if(s){let o=new it(V.comparator);o=o.insert(s,Ct.newNoDocument(s,F.min()));const a=j().add(s),c=new eo(F.min(),new Map,new it(H),o,a);await hf(r,c),r.wa=r.wa.remove(s),r.Sa.delete(t),kc(r)}else await Da(r.localStore,t,!1).then(()=>Va(r,t,e)).catch(Ii)}async function TE(n,t){const e=B(n),r=t.batch.batchId;try{const i=await Vy(e.localStore,t);ff(e,r,null),df(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Ci(e,i)}catch(i){await Ii(i)}}async function IE(n,t,e){const r=B(n);try{const i=await function(o,a){const c=B(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(nt(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,t);ff(r,t,e),df(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Ci(r,i)}catch(i){await Ii(i)}}function df(n,t){(n.Ca.get(t)||[]).forEach(e=>{e.resolve()}),n.Ca.delete(t)}function ff(n,t,e){const r=B(n);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.Da[r.currentUser.toKey()]=i}}function Va(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.pa.get(t))n.ga.delete(r),e&&n.fa.xa(r,e);n.pa.delete(t),n.isPrimaryClient&&n.ba.mr(t).forEach(r=>{n.ba.containsKey(r)||pf(n,r)})}function pf(n,t){n.ya.delete(t.path.canonicalString());const e=n.wa.get(t);e!==null&&(nf(n.remoteStore,e),n.wa=n.wa.remove(t),n.Sa.delete(e),kc(n))}function Au(n,t,e){for(const r of e)r instanceof lf?(n.ba.addReference(r.key,t),wE(n,r)):r instanceof uf?(P("SyncEngine","Document no longer in limbo: "+r.key),n.ba.removeReference(r.key,t),n.ba.containsKey(r.key)||pf(n,r.key)):M()}function wE(n,t){const e=t.key,r=e.path.canonicalString();n.wa.get(e)||n.ya.has(r)||(P("SyncEngine","New document in limbo: "+e),n.ya.add(r),kc(n))}function kc(n){for(;n.ya.size>0&&n.wa.size<n.maxConcurrentLimboResolutions;){const t=n.ya.values().next().value;n.ya.delete(t);const e=new V(et.fromString(t)),r=n.va.next();n.Sa.set(r,new pE(e)),n.wa=n.wa.insert(e,r),ef(n.remoteStore,new Fe(te(Rd(e.path)),r,"TargetPurposeLimboResolution",uc.ae))}}async function Ci(n,t,e){const r=B(n),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,t,e).then(l=>{if((l||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=Ic.$i(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.fa.c_(i),await async function(c,l){const u=B(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(l,d=>g.forEach(d.Qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>g.forEach(d.Ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!wi(h))throw h;P("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.rs.get(d),y=f.snapshotVersion,R=f.withLastLimboFreeSnapshotVersion(y);u.rs=u.rs.insert(d,R)}}}(r.localStore,s))}async function AE(n,t){const e=B(n);if(!e.currentUser.isEqual(t)){P("SyncEngine","User change. New user:",t.toKey());const r=await Xd(e.localStore,t);e.currentUser=t,function(s,o){s.Ca.forEach(a=>{a.forEach(c=>{c.reject(new S(p.CANCELLED,o))})}),s.Ca.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ci(e,r.cs)}}function RE(n,t){const e=B(n),r=e.Sa.get(t);if(r&&r.ma)return j().add(r.key);{let i=j();const s=e.pa.get(t);if(!s)return i;for(const o of s){const a=e.ga.get(o);i=i.unionWith(a.view.la)}return i}}function SE(n){const t=B(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=hf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=RE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=vE.bind(null,t),t.fa.c_=lE.bind(null,t.eventManager),t.fa.xa=uE.bind(null,t.eventManager),t}function PE(n){const t=B(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=TE.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=IE.bind(null,t),t}class Ru{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=no(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Dy(this.persistence,new by,t.initialUser,this.serializer)}createPersistence(t){return new Py(Tc.Jr,this.serializer)}createSharedClientState(t){return new Uy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class CE{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AE.bind(null,this.syncEngine),await iE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new oE}()}createDatastore(t){const e=no(t.databaseInfo.databaseId),r=function(s){return new qy(s)}(t.databaseInfo);return function(s,o,a,c){return new zy(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new Wy(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>wu(this.syncEngine,e,0),function(){return vu.C()?new vu:new By}())}createSyncEngine(t,e){return function(i,s,o,a,c,l,u){const h=new mE(i,s,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(e){const r=B(e);P("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await Pi(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kE{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):Ae("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class bE{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Pt.UNAUTHENTICATED,this.clientId=md.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new je;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Pc(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Zo(n,t){n.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const e=await n.getConfiguration();await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Xd(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Su(n,t){n.asyncQueue.verifyOperationInProgress();const e=await DE(n);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await t.initialize(e,r),n.setCredentialChangeListener(i=>Tu(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Tu(t.remoteStore,s)),n._onlineComponents=t}function NE(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function DE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zo(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!NE(e))throw e;$n("Error using user provided cache. Falling back to memory cache: "+e),await Zo(n,new Ru)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await Zo(n,new Ru);return n._offlineComponents}async function mf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await Su(n,n._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await Su(n,new CE))),n._onlineComponents}function VE(n){return mf(n).then(t=>t.syncEngine)}async function OE(n){const t=await mf(n),e=t.eventManager;return e.onListen=gE.bind(null,t.syncEngine),e.onUnlisten=yE.bind(null,t.syncEngine),e}function LE(n,t,e={}){const r=new je;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new kE({next:d=>{o.enqueueAndForget(()=>cE(s,h)),d.fromCache&&c.source==="server"?l.reject(new S(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new hE(a,u,{includeMetadataChanges:!0,Z_:!0});return aE(s,h)}(await OE(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function gf(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=new Map;/**
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
 */function _f(n,t,e){if(!e)throw new S(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function ME(n,t,e,r){if(t===!0&&r===!0)throw new S(p.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Cu(n){if(!V.isDocumentKey(n))throw new S(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ku(n){if(V.isDocumentKey(n))throw new S(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function so(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function Hn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new S(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=so(n);throw new S(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new S(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new S(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ME("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gf((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new S(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new S(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new S(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class oo{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new S(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bu(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Zg;switch(r.type){case"firstParty":return new r_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new S(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Pu.get(e);r&&(P("ComponentProvider","Removing Datastore"),Pu.delete(e),r.terminate())}(this),Promise.resolve()}}function xE(n,t,e,r={}){var i;const s=(n=Hn(n,oo))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&$n("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Pt.MOCK_USER;else{a=Sp(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new S(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Pt(l)}n._authCredentials=new t_(new pd(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new sr(this.firestore,t,this._query)}}class jt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new jt(this.firestore,t,this._key)}}class qe extends sr{constructor(t,e,r){super(t,e,Rd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new jt(this.firestore,null,new V(t))}withConverter(t){return new qe(this.firestore,t,this._path)}}function ts(n,t,...e){if(n=At(n),_f("collection","path",t),n instanceof oo){const r=et.fromString(t,...e);return ku(r),new qe(n,null,r)}{if(!(n instanceof jt||n instanceof qe))throw new S(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return ku(r),new qe(n.firestore,null,r)}}function FE(n,t,...e){if(n=At(n),arguments.length===1&&(t=md.V()),_f("doc","path",t),n instanceof oo){const r=et.fromString(t,...e);return Cu(r),new jt(n,null,new V(r))}{if(!(n instanceof jt||n instanceof qe))throw new S(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return Cu(r),new jt(n.firestore,n instanceof qe?n.converter:null,new V(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new Zd(this,"async_queue_retry"),this.ou=()=>{const e=Jo();e&&P("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ho.$o()};const t=Jo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this._u(),this.au(t)}enterRestrictedMode(t){if(!this.eu){this.eu=!0,this.iu=t||!1;const e=Jo();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.ou)}}enqueue(t){if(this._u(),this.eu)return new Promise(()=>{});const e=new je;return this.au(()=>this.eu&&this.iu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xa.push(t),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(t){if(!wi(t))throw t;P("AsyncQueue","Operation failed with retryable error: "+t)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(t){const e=this.Za.then(()=>(this.ru=!0,t().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ae("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=e,e}enqueueAfterDelay(t,e,r){this._u(),this.su.indexOf(t)>-1&&(e=0);const i=Sc.createAndSchedule(this,t,e,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&M()}verifyOperationInProgress(){}async lu(){let t;do t=this.Za,await t;while(t!==this.Za)}hu(t){for(const e of this.tu)if(e.timerId===t)return!0;return!1}Pu(t){return this.lu().then(()=>{this.tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.lu()})}Iu(t){this.su.push(t)}cu(t){const e=this.tu.indexOf(t);this.tu.splice(e,1)}}class ao extends oo{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new UE}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ef(this),this._firestoreClient.terminate()}}function BE(n,t){const e=typeof n=="object"?n:lh(),r=typeof n=="string"?n:t||"(default)",i=Ba(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ap("firestore");s&&xE(i,...s)}return i}function yf(n){return n._firestoreClient||Ef(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ef(n){var t,e,r;const i=n._freezeSettings(),s=function(a,c,l,u){return new m_(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,gf(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new bE(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Wn(Ot.fromBase64String(t))}catch(e){throw new S(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Wn(Ot.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new S(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t){this._methodName=t}}/**
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
 */class Nc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new S(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new S(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return H(this._lat,t._lat)||H(this._long,t._long)}}/**
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
 */const $E=/^__.*__$/;class jE{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Je(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ri(t,this.data,e,this.fieldTransforms)}}class vf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Je(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Tf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Dc{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(t){return new Dc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Eu({path:r,Ru:!1});return i.Vu(t),i}mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(t){return this.Eu({path:void 0,Ru:!0})}gu(t){return Cs(t,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}du(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vu(this.path.get(t))}Vu(t){if(t.length===0)throw this.gu("Document fields must not be empty");if(Tf(this.Tu)&&$E.test(t))throw this.gu('Document fields cannot begin and end with "__"')}}class qE{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||no(t)}wu(t,e,r,i=!1){return new Dc({Tu:t,methodName:e,yu:r,path:kt.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vc(n){const t=n._freezeSettings(),e=no(n._databaseId);return new qE(n._databaseId,!!t.ignoreUndefinedProperties,e)}function KE(n,t,e,r,i,s={}){const o=n.wu(s.merge||s.mergeFields?2:0,t,e,i);Oc("Data must be an object, but it was:",o,r);const a=If(r,o);let c,l;if(s.merge)c=new $t(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=Oa(t,h,e);if(!o.contains(d))throw new S(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Af(u,d)||u.push(d)}c=new $t(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new jE(new Bt(a),c,l)}class lo extends bc{_toFieldTransform(t){if(t.Tu!==2)throw t.Tu===1?t.gu(`${this._methodName}() can only appear at the top level of your update data`):t.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof lo}}function GE(n,t,e,r){const i=n.wu(1,t,e);Oc("Data must be an object, but it was:",i,r);const s=[],o=Bt.empty();mn(r,(c,l)=>{const u=Lc(t,c,e);l=At(l);const h=i.mu(u);if(l instanceof lo)s.push(u);else{const d=ki(l,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new $t(s);return new vf(o,a,i.fieldTransforms)}function zE(n,t,e,r,i,s){const o=n.wu(1,t,e),a=[Oa(t,r,e)],c=[i];if(s.length%2!=0)throw new S(p.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Oa(t,s[d])),c.push(s[d+1]);const l=[],u=Bt.empty();for(let d=a.length-1;d>=0;--d)if(!Af(l,a[d])){const f=a[d];let y=c[d];y=At(y);const R=o.mu(f);if(y instanceof lo)l.push(f);else{const m=ki(y,R);m!=null&&(l.push(f),u.set(f,m))}}const h=new $t(l);return new vf(u,h,o.fieldTransforms)}function HE(n,t,e,r=!1){return ki(e,n.wu(r?4:3,t))}function ki(n,t){if(wf(n=At(n)))return Oc("Unsupported field value:",t,n),If(n,t);if(n instanceof bc)return function(r,i){if(!Tf(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Ru&&t.Tu!==4)throw t.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=ki(a,i.fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=At(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return M_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=mt.fromDate(r);return{timestampValue:Ss(i.serializer,s)}}if(r instanceof mt){const s=new mt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ss(i.serializer,s)}}if(r instanceof Nc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wn)return{bytesValue:Gd(i.serializer,r._byteString)};if(r instanceof jt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ec(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${so(r)}`)}(n,t)}function If(n,t){const e={};return gd(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):mn(n,(r,i)=>{const s=ki(i,t.Au(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function wf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof mt||n instanceof Nc||n instanceof Wn||n instanceof jt||n instanceof bc)}function Oc(n,t,e){if(!wf(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=so(e);throw r==="an object"?t.gu(n+" a custom object"):t.gu(n+" "+r)}}function Oa(n,t,e){if((t=At(t))instanceof co)return t._internalPath;if(typeof t=="string")return Lc(n,t);throw Cs("Field path arguments must be of type string or ",n,!1,void 0,e)}const WE=new RegExp("[~\\*/\\[\\]]");function Lc(n,t,e){if(t.search(WE)>=0)throw Cs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new co(...t.split("."))._internalPath}catch{throw Cs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Cs(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new S(p.INVALID_ARGUMENT,a+n+c)}function Af(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new YE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Mc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class YE extends Rf{data(){return super.data()}}function Mc(n,t){return typeof t=="string"?Lc(n,t):t instanceof co?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new S(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xc{}class XE extends xc{}function ta(n,t,...e){let r=[];t instanceof xc&&r.push(t),r=r.concat(e),function(s){const o=s.filter(c=>c instanceof Fc).length,a=s.filter(c=>c instanceof uo).length;if(o>1||o>0&&a>0)throw new S(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class uo extends XE{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new uo(t,e,r)}_apply(t){const e=this._parse(t);return Sf(t._query,e),new sr(t.firestore,t.converter,Sa(t._query,e))}_parse(t){const e=Vc(t.firestore);return function(s,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new S(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Du(h,u);const f=[];for(const y of h)f.push(Nu(c,s,y));d={arrayValue:{values:f}}}else d=Nu(c,s,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Du(h,u),d=HE(a,o,h,u==="in"||u==="not-in");return dt.create(l,u,d)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function ea(n,t,e){const r=t,i=Mc("where",n);return uo._create(i,r,e)}class Fc extends xc{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Fc(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Wt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)Sf(o,c),o=Sa(o,c)}(t._query,e),new sr(t.firestore,t.converter,Sa(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Nu(n,t,e){if(typeof(e=At(e))=="string"){if(e==="")throw new S(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pd(t)&&e.indexOf("/")!==-1)throw new S(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(et.fromString(e));if(!V.isDocumentKey(r))throw new S(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return eu(n,new V(r))}if(e instanceof jt)return eu(n,e._key);throw new S(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${so(e)}.`)}function Du(n,t){if(!Array.isArray(n)||n.length===0)throw new S(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Sf(n,t){if(t.isInequality()){const r=gc(n),i=t.field;if(r!==null&&!r.isEqual(i))throw new S(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Sd(n);s!==null&&JE(n,i,s)}const e=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new S(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new S(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function JE(n,t,e){if(!e.isEqual(t))throw new S(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${e.toString()}' instead.`)}class ZE{convertValue(t,e="none"){switch(dn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ut(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(hn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return mn(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new Nc(ut(t.latitude),ut(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=dc(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(si(t));default:return null}}convertTimestamp(t){const e=We(t);return new mt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=et.fromString(t);nt(Qd(r));const i=new oi(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(e)||Ae(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ev extends Rf{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new as(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Mc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class as extends ev{data(t={}){return super.data(t)}}class nv{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new es(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new as(this._firestore,this._userDataWriter,r.key,r,new es(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new S(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new as(i._firestore,i._userDataWriter,a.doc.key,a.doc,new es(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new as(i._firestore,i._userDataWriter,a.doc.key,a.doc,new es(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:rv(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function rv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class iv extends ZE{constructor(t){super(),this.firestore=t}convertBytes(t){return new Wn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new jt(this.firestore,null,e)}}function na(n){n=Hn(n,sr);const t=Hn(n.firestore,ao),e=yf(t),r=new iv(t);return QE(n._query),LE(e,n._query).then(i=>new nv(t,r,n,i))}function sv(n,t,e,...r){n=Hn(n,jt);const i=Hn(n.firestore,ao),s=Vc(i);let o;return o=typeof(t=At(t))=="string"||t instanceof co?zE(s,"updateDoc",n._key,t,e,r):GE(s,"updateDoc",n._key,t),Pf(i,[o.toMutation(n._key,ee.exists(!0))])}function ov(n,t){const e=Hn(n.firestore,ao),r=FE(n),i=tv(n.converter,t);return Pf(e,[KE(Vc(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,ee.exists(!1))]).then(()=>r)}function Pf(n,t){return function(r,i){const s=new je;return r.asyncQueue.enqueueAndForget(async()=>EE(await VE(r),i,s)),s.promise}(yf(n),t)}(function(t,e=!0){(function(i){nr=i})(Zn),Un(new cn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ao(new e_(r.getProvider("auth-internal")),new s_(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new S(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oi(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),$e(Xl,"4.2.0",t),$e(Xl,"4.2.0","esm2017")})();function Uc(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e}function Cf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const av=Cf,kf=new di("auth","Firebase",Cf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new Fa("@firebase/auth");function cv(n,...t){ks.logLevel<=G.WARN&&ks.warn(`Auth (${Zn}): ${n}`,...t)}function cs(n,...t){ks.logLevel<=G.ERROR&&ks.error(`Auth (${Zn}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(n,...t){throw Bc(n,...t)}function re(n,...t){return Bc(n,...t)}function bf(n,t,e){const r=Object.assign(Object.assign({},av()),{[t]:e});return new di("auth","Firebase",r).create(t,{appName:n.name})}function lv(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&oe(n,"argument-error"),bf(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bc(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return kf.create(n,...t)}function U(n,t,...e){if(!n)throw Bc(t,...e)}function Ee(n){const t="INTERNAL ASSERTION FAILED: "+n;throw cs(t),new Error(t)}function Se(n,t){n||Ee(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function uv(){return Vu()==="http:"||Vu()==="https:"}function Vu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uv()||Cp()||"connection"in navigator)?navigator.onLine:!0}function dv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t,e){this.shortDelay=t,this.longDelay=e,Se(e>t,"Short delay should be less than long delay!"),this.isMobile=Pp()||kp()}get(){return hv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(n,t){Se(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ee("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ee("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ee("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=new bi(3e4,6e4);function Df(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Ni(n,t,e,r,i={}){return Vf(n,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=fi(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Nf.fetch()(Of(n,n.config.apiHost,e,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function Vf(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},fv),t);try{const i=new gv(n),s=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ns(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ns(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ns(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ns(n,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw bf(n,u,l);oe(n,u)}}catch(i){if(i instanceof Pe)throw i;oe(n,"network-request-failed",{message:String(i)})}}async function mv(n,t,e,r,i={}){const s=await Ni(n,t,e,r,i);return"mfaPendingCredential"in s&&oe(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Of(n,t,e,r){const i=`${t}${e}?${r}`;return n.config.emulator?$c(n.config,i):`${n.config.apiScheme}://${i}`}class gv{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(re(this.auth,"network-request-failed")),pv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ns(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const i=re(n,t,r);return i.customData._tokenResponse=e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _v(n,t){return Ni(n,"POST","/v1/accounts:delete",t)}async function yv(n,t){return Ni(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Ev(n,t=!1){const e=At(n),r=await e.getIdToken(t),i=jc(r);U(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Wr(ra(i.auth_time)),issuedAtTime:Wr(ra(i.iat)),expirationTime:Wr(ra(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ra(n){return Number(n)*1e3}function jc(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return cs("JWT malformed, contained fewer than 3 sections"),null;try{const i=nh(e);return i?JSON.parse(i):(cs("Failed to decode base64 JWT payload"),null)}catch(i){return cs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function vv(n){const t=jc(n);return U(t,"internal-error"),U(typeof t.exp<"u","internal-error"),U(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Pe&&Tv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Tv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wr(this.lastLoginAt),this.creationTime=Wr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bs(n){var t;const e=n.auth,r=await n.getIdToken(),i=await ui(n,yv(e,{idToken:r}));U(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Rv(s.providerUserInfo):[],a=Av(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Lf(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function wv(n){const t=At(n);await bs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Av(n,t){return[...n.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Rv(n){return n.map(t=>{var{providerId:e}=t,r=Uc(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sv(n,t){const e=await Vf(n,{},async()=>{const r=fi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Of(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Nf.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){U(t.idToken,"internal-error"),U(typeof t.idToken<"u","internal-error"),U(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):vv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return U(!this.accessToken||this.refreshToken,t,"user-token-expired"),!e&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:i,expiresIn:s}=await Sv(t,e);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:i,expirationTime:s}=e,o=new hi;return r&&(U(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return Ee("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n,t){U(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class an{constructor(t){var{uid:e,auth:r,stsTokenManager:i}=t,s=Uc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Iv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await ui(this,this.stsTokenManager.getToken(this.auth,t));return U(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Ev(this,t)}reload(){return wv(this)}_assign(t){this!==t&&(U(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new an(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await bs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await ui(this,_v(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,i,s,o,a,c,l,u;const h=(r=e.displayName)!==null&&r!==void 0?r:void 0,d=(i=e.email)!==null&&i!==void 0?i:void 0,f=(s=e.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=e.photoURL)!==null&&o!==void 0?o:void 0,R=(a=e.tenantId)!==null&&a!==void 0?a:void 0,m=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=e.createdAt)!==null&&l!==void 0?l:void 0,A=(u=e.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:L,isAnonymous:Z,providerData:Y,stsTokenManager:N}=e;U(v&&N,t,"internal-error");const at=hi.fromJSON(this.name,N);U(typeof v=="string",t,"internal-error"),Oe(h,t.name),Oe(d,t.name),U(typeof L=="boolean",t,"internal-error"),U(typeof Z=="boolean",t,"internal-error"),Oe(f,t.name),Oe(y,t.name),Oe(R,t.name),Oe(m,t.name),Oe(C,t.name),Oe(A,t.name);const ct=new an({uid:v,auth:t,email:d,emailVerified:L,displayName:h,isAnonymous:Z,photoURL:y,phoneNumber:f,tenantId:R,stsTokenManager:at,createdAt:C,lastLoginAt:A});return Y&&Array.isArray(Y)&&(ct.providerData=Y.map(gt=>Object.assign({},gt))),m&&(ct._redirectEventId=m),ct}static async _fromIdTokenResponse(t,e,r=!1){const i=new hi;i.updateFromServerResponse(e);const s=new an({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await bs(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=new Map;function ve(n){Se(n instanceof Function,"Expected a class definition");let t=Ou.get(n);return t?(Se(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Ou.set(n,t),t)}/**
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
 */class Mf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Mf.type="NONE";const Lu=Mf;/**
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
 */function ls(n,t,e){return`firebase:${n}:${t}:${e}`}class xn{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ls(this.userKey,i.apiKey,s),this.fullPersistenceKey=ls("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?an._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new xn(ve(Lu),t,r);const i=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||ve(Lu);const o=ls(r,t.config.apiKey,t.name);let a=null;for(const l of e)try{const u=await l._get(o);if(u){const h=an._fromJSON(t,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new xn(s,t,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new xn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Uf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(xf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if($f(t))return"Blackberry";if(jf(t))return"Webos";if(qc(t))return"Safari";if((t.includes("chrome/")||Ff(t))&&!t.includes("edge/"))return"Chrome";if(Bf(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xf(n=Vt()){return/firefox\//i.test(n)}function qc(n=Vt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ff(n=Vt()){return/crios\//i.test(n)}function Uf(n=Vt()){return/iemobile/i.test(n)}function Bf(n=Vt()){return/android/i.test(n)}function $f(n=Vt()){return/blackberry/i.test(n)}function jf(n=Vt()){return/webos/i.test(n)}function ho(n=Vt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Pv(n=Vt()){var t;return ho(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Cv(){return bp()&&document.documentMode===10}function qf(n=Vt()){return ho(n)||Bf(n)||jf(n)||$f(n)||/windows phone/i.test(n)||Uf(n)}function kv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(n,t=[]){let e;switch(n){case"Browser":e=Mu(Vt());break;case"Worker":e=`${Mu(Vt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Zn}/${r}`}/**
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
 */class bv{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=s=>new Promise((o,a)=>{try{const c=t(s);o(c)}catch(c){a(c)}});r.onAbort=e,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Nv(n,t={}){return Ni(n,"GET","/v2/passwordPolicy",Df(n,t))}/**
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
 */const Dv=6;class Vv{constructor(t){var e,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:Dv,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(t,e,r,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xu(this),this.idTokenSubscription=new xu(this),this.beforeStateQueue=new bv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ve(e)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var e;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await bs(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=dv()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?At(t):null;return e&&U(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&U(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ve(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Nv(this),e=new Vv(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new di("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ve(t)||this._popupRedirectResolver;U(e,this,"argument-error"),this.redirectPersistenceManager=await xn.create(this,[ve(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,i){if(this._deleted)return()=>{};const s=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,r,i);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Kf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&cv(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function fo(n){return At(n)}class xu{constructor(t){this.auth=t,this.observer=null,this.addObserver=xp(e=>this.observer=e)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}function Mv(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=i=>{const s=re("internal-error");s.customData=i,e(s)},r.type="text/javascript",r.charset="UTF-8",Lv().appendChild(r)})}function xv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(n,t){const e=Ba(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),s=e.getOptions();if(fs(s,t??{}))return i;oe(i,"already-initialized")}return e.initialize({options:t})}function Uv(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(ve);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Bv(n,t,e){const r=fo(n);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(e!=null&&e.disableWarnings),s=Gf(t),{host:o,port:a}=$v(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||jv()}function Gf(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function $v(n){const t=Gf(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Fu(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Fu(o)}}}function Fu(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function jv(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Ee("not implemented")}_getIdTokenResponse(t){return Ee("not implemented")}_linkToIdToken(t,e){return Ee("not implemented")}_getReauthenticationResolver(t){return Ee("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(n,t){return mv(n,"POST","/v1/accounts:signInWithIdp",Df(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv="http://localhost";class fn extends zf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new fn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):oe("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=e,s=Uc(e,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Fn(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Fn(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Fn(t,e)}buildRequest(){const t={requestUri:qv,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=fi(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Di extends Kc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Di{constructor(){super("facebook.com")}static credential(t){return fn._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Le.credentialFromTaggedObject(t)}static credentialFromError(t){return Le.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Le.credential(t.oauthAccessToken)}catch{return null}}}Le.FACEBOOK_SIGN_IN_METHOD="facebook.com";Le.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends Di{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return fn._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return _e.credentialFromTaggedObject(t)}static credentialFromError(t){return _e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return _e.credential(e,r)}catch{return null}}}_e.GOOGLE_SIGN_IN_METHOD="google.com";_e.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends Di{constructor(){super("github.com")}static credential(t){return fn._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Me.credentialFromTaggedObject(t)}static credentialFromError(t){return Me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Me.credential(t.oauthAccessToken)}catch{return null}}}Me.GITHUB_SIGN_IN_METHOD="github.com";Me.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends Di{constructor(){super("twitter.com")}static credential(t,e){return fn._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return xe.credentialFromTaggedObject(t)}static credentialFromError(t){return xe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return xe.credential(e,r)}catch{return null}}}xe.TWITTER_SIGN_IN_METHOD="twitter.com";xe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,i=!1){const s=await an._fromIdTokenResponse(t,r,i),o=Uu(r);return new Yn({user:s,providerId:o,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const i=Uu(r);return new Yn({user:t,providerId:i,_tokenResponse:r,operationType:e})}}function Uu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends Pe{constructor(t,e,r,i){var s;super(e.code,e.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ns.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,i){return new Ns(t,e,r,i)}}function Hf(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ns._fromErrorAndOperation(n,s,t,r):s})}async function Kv(n,t,e=!1){const r=await ui(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Yn._forOperation(n,"link",r)}/**
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
 */async function Gv(n,t,e=!1){const{auth:r}=n,i="reauthenticate";try{const s=await ui(n,Hf(r,i,t,n),e);U(s.idToken,r,"internal-error");const o=jc(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(n.uid===a,r,"user-mismatch"),Yn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&oe(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zv(n,t,e=!1){const r="signIn",i=await Hf(n,r,t),s=await Yn._fromIdTokenResponse(n,r,i);return e||await n._updateCurrentUser(s.user),s}function Hv(n,t,e,r){return At(n).onIdTokenChanged(t,e,r)}function Wv(n,t,e){return At(n).beforeAuthStateChanged(t,e)}function Yv(n,t,e,r){return At(n).onAuthStateChanged(t,e,r)}function Qv(n){return At(n).signOut()}const Ds="__sak";/**
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
 */class Wf{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ds,"1"),this.storage.removeItem(Ds),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(){const n=Vt();return qc(n)||ho(n)}const Jv=1e3,Zv=10;class Yf extends Wf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Xv()&&kv(),this.fallbackToPolling=qf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),i=this.localCache[e];r!==i&&t(e,i,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!e)return}const i=()=>{const o=this.storage.getItem(r);!e&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Cv()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Zv):i()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},Jv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Yf.type="LOCAL";const tT=Yf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf extends Wf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Qf.type="SESSION";const Xf=Qf;/**
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
 */function eT(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class po{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const r=new po(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:i,data:s}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(e.origin,s)),c=await eT(a);e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}po.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class nT{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Gc("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(){return window}function rT(n){ie().location.href=n}/**
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
 */function Jf(){return typeof ie().WorkerGlobalScope<"u"&&typeof ie().importScripts=="function"}async function iT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function oT(){return Jf()?self:null}/**
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
 */const Zf="firebaseLocalStorageDb",aT=1,Vs="firebaseLocalStorage",tp="fbase_key";class Vi{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function mo(n,t){return n.transaction([Vs],t?"readwrite":"readonly").objectStore(Vs)}function cT(){const n=indexedDB.deleteDatabase(Zf);return new Vi(n).toPromise()}function Ma(){const n=indexedDB.open(Zf,aT);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Vs,{keyPath:tp})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Vs)?t(r):(r.close(),await cT(),t(await Ma()))})})}async function Bu(n,t,e){const r=mo(n,!0).put({[tp]:t,value:e});return new Vi(r).toPromise()}async function lT(n,t){const e=mo(n,!1).get(t),r=await new Vi(e).toPromise();return r===void 0?null:r.value}function $u(n,t){const e=mo(n,!0).delete(t);return new Vi(e).toPromise()}const uT=800,hT=3;class ep{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ma(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>hT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=po._getInstance(oT()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await iT(),!this.activeServiceWorker)return;this.sender=new nT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||sT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ma();return await Bu(t,Ds,"1"),await $u(t,Ds),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bu(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>lT(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>$u(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=mo(i,!1).getAll();return new Vi(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ep.type="LOCAL";const dT=ep;new bi(3e4,6e4);/**
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
 */function np(n,t){return t?ve(t):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class zc extends zf{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Fn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Fn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Fn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function fT(n){return zv(n.auth,new zc(n),n.bypassAuthState)}function pT(n){const{auth:t,user:e}=n;return U(e,t,"internal-error"),Gv(e,new zc(n),n.bypassAuthState)}async function mT(n){const{auth:t,user:e}=n;return U(e,t,"internal-error"),Kv(e,new zc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(t,e,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return fT;case"linkViaPopup":case"linkViaRedirect":return mT;case"reauthViaPopup":case"reauthViaRedirect":return pT;default:oe(this.auth,"internal-error")}}resolve(t){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=new bi(2e3,1e4);async function _T(n,t,e){const r=fo(n);lv(n,t,Kc);const i=np(r,e);return new sn(r,"signInViaPopup",t,i).executeNotNull()}class sn extends rp{constructor(t,e,r,i,s){super(t,e,i,s),this.provider=r,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return U(t,this.auth,"internal-error"),t}async onExecution(){Se(this.filter.length===1,"Popup operations only handle one event");const t=Gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(re(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(re(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,gT.get())};t()}}sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT="pendingRedirect",us=new Map;class ET extends rp{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=us.get(this.auth._key());if(!t){try{const r=await vT(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}us.set(this.auth._key(),t)}return this.bypassAuthState||us.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vT(n,t){const e=wT(t),r=IT(n);if(!await r._isAvailable())return!1;const i=await r._get(e)==="true";return await r._remove(e),i}function TT(n,t){us.set(n._key(),t)}function IT(n){return ve(n._redirectPersistence)}function wT(n){return ls(yT,n.config.apiKey,n.name)}async function AT(n,t,e=!1){const r=fo(n),i=np(r,t),o=await new ET(r,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=10*60*1e3;class ST{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!PT(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!ip(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(re(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=RT&&this.cachedEventUids.clear(),this.cachedEventUids.has(ju(t))}saveEventToCache(t){this.cachedEventUids.add(ju(t)),this.lastProcessedEventTime=Date.now()}}function ju(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function ip({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function PT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ip(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CT(n,t={}){return Ni(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bT=/^https?/;async function NT(n){if(n.config.emulator)return;const{authorizedDomains:t}=await CT(n);for(const e of t)try{if(DT(e))return}catch{}oe(n,"unauthorized-domain")}function DT(n){const t=La(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===r}if(!bT.test(e))return!1;if(kT.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const VT=new bi(3e4,6e4);function qu(){const n=ie().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function OT(n){return new Promise((t,e)=>{var r,i,s;function o(){qu(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{qu(),e(re(n,"network-request-failed"))},timeout:VT.get()})}if(!((i=(r=ie().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=ie().gapi)===null||s===void 0)&&s.load)o();else{const a=xv("iframefcb");return ie()[a]=()=>{gapi.load?o():e(re(n,"network-request-failed"))},Mv(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw hs=null,t})}let hs=null;function LT(n){return hs=hs||OT(n),hs}/**
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
 */const MT=new bi(5e3,15e3),xT="__/auth/iframe",FT="emulator/auth/iframe",UT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $T(n){const t=n.config;U(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?$c(t,FT):`https://${n.config.authDomain}/${xT}`,r={apiKey:t.apiKey,appName:n.name,v:Zn},i=BT.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${e}?${fi(r).slice(1)}`}async function jT(n){const t=await LT(n),e=ie().gapi;return U(e,n,"internal-error"),t.open({where:document.body,url:$T(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=re(n,"network-request-failed"),a=ie().setTimeout(()=>{s(o)},MT.get());function c(){ie().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const qT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KT=500,GT=600,zT="_blank",HT="http://localhost";class Ku{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WT(n,t,e,r=KT,i=GT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},qT),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Vt().toLowerCase();e&&(a=Ff(l)?zT:e),xf(l)&&(t=t||HT,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(Pv(l)&&a!=="_self")return YT(t||"",a),new Ku(null);const h=window.open(t||"",a,u);U(h,n,"popup-blocked");try{h.focus()}catch{}return new Ku(h)}function YT(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const QT="__/auth/handler",XT="emulator/auth/handler",JT=encodeURIComponent("fac");async function Gu(n,t,e,r,i,s){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Zn,eventId:i};if(t instanceof Kc){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",Mp(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(t instanceof Di){const u=t.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${JT}=${encodeURIComponent(c)}`:"";return`${ZT(n)}?${fi(a).slice(1)}${l}`}function ZT({config:n}){return n.emulator?$c(n,XT):`https://${n.authDomain}/${QT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="webStorageSupport";class tI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xf,this._completeRedirectFn=AT,this._overrideRedirectResult=TT}async _openPopup(t,e,r,i){var s;Se((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Gu(t,e,r,La(),i);return WT(t,o,Gc())}async _openRedirect(t,e,r,i){await this._originValidation(t);const s=await Gu(t,e,r,La(),i);return rT(s),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:s}=this.eventManagers[e];return i?Promise.resolve(i):(Se(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await jT(t),r=new ST(t);return e.register("authEvent",i=>(U(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(ia,{type:ia},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ia];o!==void 0&&e(!!o),oe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=NT(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return qf()||qc()||ho()}}const eI=tI;var zu="@firebase/auth",Hu="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function iI(n){Un(new cn("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kf(n)},l=new Ov(r,i,s,c);return Uv(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Un(new cn("auth-internal",t=>{const e=fo(t.getProvider("auth").getImmediate());return(r=>new nI(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),$e(zu,Hu,rI(n)),$e(zu,Hu,"esm2017")}/**
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
 */const sI=5*60,oI=sh("authIdTokenMaxAge")||sI;let Wu=null;const aI=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>oI)return;const i=e==null?void 0:e.token;Wu!==i&&(Wu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function cI(n=lh()){const t=Ba(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Fv(n,{popupRedirectResolver:eI,persistence:[dT,tT,Xf]}),r=sh("authTokenSyncURL");if(r){const s=aI(r);Wv(e,s,()=>s(e.currentUser)),Hv(e,o=>s(o))}const i=rh("auth");return i&&Bv(e,`http://${i}`),e}iI("Browser");function lI(n){let t,e,r,i;return{c(){t=Te("svg"),e=Te("path"),r=Te("path"),this.h()},l(s){t=Ie(s,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var o=O(t);e=Ie(o,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),O(e).forEach(E),r=Ie(o,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),O(r).forEach(E),o.forEach(E),this.h()},h(){D(e,"stroke-linecap","round"),D(e,"stroke-linejoin","round"),D(e,"d","M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"),D(r,"stroke-linecap","round"),D(r,"stroke-linejoin","round"),D(r,"d","M15 12a3 3 0 11-6 0 3 3 0 016 0z"),D(t,"xmlns","http://www.w3.org/2000/svg"),D(t,"fill","none"),D(t,"viewBox","0 0 24 24"),D(t,"stroke-width","1.5"),D(t,"stroke","currentColor"),D(t,"class",i=n[1].class||ze[n[0]])},m(s,o){W(s,t,o),_(t,e),_(t,r)},p(s,[o]){o&3&&i!==(i=s[1].class||ze[s[0]])&&D(t,"class",i)},i:zt,o:zt,d(s){s&&E(t)}}}function uI(n,t,e){let{size:r="md"}=t;return n.$$set=i=>{e(1,t=Ke(Ke({},t),Ge(i))),"size"in i&&e(0,r=i.size)},t=Ge(t),[r,t]}class hI extends Xn{constructor(t){super(),Jn(this,t,uI,lI,Qn,{size:0})}}function dI(n){let t,e,r;return{c(){t=Te("svg"),e=Te("path"),this.h()},l(i){t=Ie(i,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var s=O(t);e=Ie(s,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),O(e).forEach(E),s.forEach(E),this.h()},h(){D(e,"stroke-linecap","round"),D(e,"stroke-linejoin","round"),D(e,"d","M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"),D(t,"xmlns","http://www.w3.org/2000/svg"),D(t,"fill","none"),D(t,"viewBox","0 0 24 24"),D(t,"stroke-width","1.5"),D(t,"stroke","currentColor"),D(t,"class",r=n[1].class||ze[n[0]])},m(i,s){W(i,t,s),_(t,e)},p(i,[s]){s&3&&r!==(r=i[1].class||ze[i[0]])&&D(t,"class",r)},i:zt,o:zt,d(i){i&&E(t)}}}function fI(n,t,e){let{size:r="md"}=t;return n.$$set=i=>{e(1,t=Ke(Ke({},t),Ge(i))),"size"in i&&e(0,r=i.size)},t=Ge(t),[r,t]}class pI extends Xn{constructor(t){super(),Jn(this,t,fI,dI,Qn,{size:0})}}function mI(n){let t,e,r;return{c(){t=Te("svg"),e=Te("path"),this.h()},l(i){t=Ie(i,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var s=O(t);e=Ie(s,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),O(e).forEach(E),s.forEach(E),this.h()},h(){D(e,"stroke-linecap","round"),D(e,"stroke-linejoin","round"),D(e,"d","M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"),D(t,"xmlns","http://www.w3.org/2000/svg"),D(t,"fill","none"),D(t,"viewBox","0 0 24 24"),D(t,"stroke-width","1.5"),D(t,"stroke","currentColor"),D(t,"class",r=n[1].class||ze[n[0]])},m(i,s){W(i,t,s),_(t,e)},p(i,[s]){s&3&&r!==(r=i[1].class||ze[i[0]])&&D(t,"class",r)},i:zt,o:zt,d(i){i&&E(t)}}}function gI(n,t,e){let{size:r="md"}=t;return n.$$set=i=>{e(1,t=Ke(Ke({},t),Ge(i))),"size"in i&&e(0,r=i.size)},t=Ge(t),[r,t]}class _I extends Xn{constructor(t){super(),Jn(this,t,gI,mI,Qn,{size:0})}}function yI(n){let t,e,r;return{c(){t=Te("svg"),e=Te("path"),this.h()},l(i){t=Ie(i,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var s=O(t);e=Ie(s,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),O(e).forEach(E),s.forEach(E),this.h()},h(){D(e,"stroke-linecap","round"),D(e,"stroke-linejoin","round"),D(e,"d","M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"),D(t,"xmlns","http://www.w3.org/2000/svg"),D(t,"fill","none"),D(t,"viewBox","0 0 24 24"),D(t,"stroke-width","1.5"),D(t,"stroke","currentColor"),D(t,"class",r=n[1].class||ze[n[0]])},m(i,s){W(i,t,s),_(t,e)},p(i,[s]){s&3&&r!==(r=i[1].class||ze[i[0]])&&D(t,"class",r)},i:zt,o:zt,d(i){i&&E(t)}}}function EI(n,t,e){let{size:r="md"}=t;return n.$$set=i=>{e(1,t=Ke(Ke({},t),Ge(i))),"size"in i&&e(0,r=i.size)},t=Ge(t),[r,t]}class vI extends Xn{constructor(t){super(),Jn(this,t,EI,yI,Qn,{size:0})}}function Yu(n,t,e){const r=n.slice();return r[1]=t[e],r}function TI(n){let t,e="N/A";return{c(){t=k("span"),t.textContent=e},l(r){t=b(r,"SPAN",{"data-svelte-h":!0}),Kt(t)!=="svelte-mgbc10"&&(t.textContent=e)},m(r,i){W(r,t,i)},p:zt,d(r){r&&E(t)}}}function II(n){let t,e=[],r=new Map,i=Cl(n[0]);const s=o=>o[1].l;for(let o=0;o<i.length;o+=1){let a=Yu(n,i,o),c=s(a);r.set(c,e[o]=Qu(c,a))}return{c(){t=k("ul");for(let o=0;o<e.length;o+=1)e[o].c();this.h()},l(o){t=b(o,"UL",{class:!0});var a=O(t);for(let c=0;c<e.length;c+=1)e[c].l(a);a.forEach(E),this.h()},h(){D(t,"class","flex flex-col gap-2")},m(o,a){W(o,t,a);for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(t,null)},p(o,a){a&1&&(i=Cl(o[0]),e=ap(e,a,s,1,o,i,r,t,cp,Qu,null,Yu))},d(o){o&&E(t);for(let a=0;a<e.length;a+=1)e[a].d()}}}function Qu(n,t){let e,r=t[1].l+"",i;return{key:n,first:null,c(){e=k("li"),i=X(r),this.h()},l(s){e=b(s,"LI",{});var o=O(e);i=J(o,r),o.forEach(E),this.h()},h(){this.first=e},m(s,o){W(s,e,o),_(e,i)},p(s,o){t=s,o&1&&r!==(r=t[1].l+"")&&ft(i,r)},d(s){s&&E(e)}}}function wI(n){let t,e;function r(o,a){return a&1&&(t=null),t==null&&(t=!!Array.isArray(o[0])),t?II:TI}let i=r(n,-1),s=i(n);return{c(){s.c(),e=El()},l(o){s.l(o),e=El()},m(o,a){s.m(o,a),W(o,e,a)},p(o,[a]){i===(i=r(o,a))&&s?s.p(o,a):(s.d(1),s=i(o),s&&(s.c(),s.m(e.parentNode,e)))},i:zt,o:zt,d(o){o&&E(e),s.d(o)}}}function AI(n,t,e){let{jsonArrayObject:r=[]}=t;return n.$$set=i=>{"jsonArrayObject"in i&&e(0,r=i.jsonArrayObject)},[r]}class rs extends Xn{constructor(t){super(),Jn(this,t,AI,wI,Qn,{jsonArrayObject:0})}}function RI(n){let t,e="Masuk ke Akun Google untuk melakukan sync",r,i,s,o;return s=new xr({props:{variant:"subtle",onClick:n[10],$$slots:{default:[PI]},$$scope:{ctx:n}}}),{c(){t=k("p"),t.textContent=e,r=q(),i=k("div"),Lt(s.$$.fragment),this.h()},l(a){t=b(a,"P",{"data-svelte-h":!0}),Kt(t)!=="svelte-ucobge"&&(t.textContent=e),r=K(a),i=b(a,"DIV",{class:!0});var c=O(i);Mt(s.$$.fragment,c),c.forEach(E),this.h()},h(){D(i,"class","flex gap-2 mt-4")},m(a,c){W(a,t,c),W(a,r,c),W(a,i,c),xt(s,i,null),o=!0},p(a,c){const l={};c&1048576&&(l.$$scope={dirty:c,ctx:a}),s.$set(l)},i(a){o||(ht(s.$$.fragment,a),o=!0)},o(a){pt(s.$$.fragment,a),o=!1},d(a){a&&(E(t),E(r),E(i)),Ft(s)}}}function SI(n){let t,e,r,i=n[0].displayName+"",s,o,a,c,l,u,h,d,f,y,R,m,C;c=new xr({props:{variant:"subtle",onClick:n[12],$$slots:{default:[CI]},$$scope:{ctx:n}}}),u=new xr({props:{variant:"subtle",onClick:n[13],$$slots:{default:[kI]},$$scope:{ctx:n}}}),d=new xr({props:{variant:"subtle",onClick:n[14],$$slots:{default:[bI]},$$scope:{ctx:n}}});let A=n[1]&&Xu(n);return m=new xr({props:{variant:"subtle",onClick:n[11],$$slots:{default:[VI]},$$scope:{ctx:n}}}),{c(){t=k("p"),e=X("Kamu telah login sebagai: "),r=k("b"),s=X(i),o=q(),a=k("div"),Lt(c.$$.fragment),l=q(),Lt(u.$$.fragment),h=q(),Lt(d.$$.fragment),f=q(),A&&A.c(),y=q(),R=k("div"),Lt(m.$$.fragment),this.h()},l(v){t=b(v,"P",{});var L=O(t);e=J(L,"Kamu telah login sebagai: "),r=b(L,"B",{});var Z=O(r);s=J(Z,i),Z.forEach(E),L.forEach(E),o=K(v),a=b(v,"DIV",{class:!0});var Y=O(a);Mt(c.$$.fragment,Y),l=K(Y),Mt(u.$$.fragment,Y),h=K(Y),Mt(d.$$.fragment,Y),Y.forEach(E),f=K(v),A&&A.l(v),y=K(v),R=b(v,"DIV",{class:!0});var N=O(R);Mt(m.$$.fragment,N),N.forEach(E),this.h()},h(){D(a,"class","flex flex-col flex-wrap gap-2 my-4"),D(R,"class","flex flex-col flex-wrap gap-2 mt-4")},m(v,L){W(v,t,L),_(t,e),_(t,r),_(r,s),W(v,o,L),W(v,a,L),xt(c,a,null),_(a,l),xt(u,a,null),_(a,h),xt(d,a,null),W(v,f,L),A&&A.m(v,L),W(v,y,L),W(v,R,L),xt(m,R,null),C=!0},p(v,L){(!C||L&1)&&i!==(i=v[0].displayName+"")&&ft(s,i);const Z={};L&1048576&&(Z.$$scope={dirty:L,ctx:v}),c.$set(Z);const Y={};L&1048576&&(Y.$$scope={dirty:L,ctx:v}),u.$set(Y);const N={};L&1048576&&(N.$$scope={dirty:L,ctx:v}),d.$set(N),v[1]?A?(A.p(v,L),L&2&&ht(A,1)):(A=Xu(v),A.c(),ht(A,1),A.m(y.parentNode,y)):A&&(Zu(),pt(A,1,1,()=>{A=null}),Ju());const at={};L&1048576&&(at.$$scope={dirty:L,ctx:v}),m.$set(at)},i(v){C||(ht(c.$$.fragment,v),ht(u.$$.fragment,v),ht(d.$$.fragment,v),ht(A),ht(m.$$.fragment,v),C=!0)},o(v){pt(c.$$.fragment,v),pt(u.$$.fragment,v),pt(d.$$.fragment,v),pt(A),pt(m.$$.fragment,v),C=!1},d(v){v&&(E(t),E(o),E(a),E(f),E(y),E(R)),Ft(c),Ft(u),Ft(d),A&&A.d(v),Ft(m)}}}function PI(n){let t;return{c(){t=X("Sign In")},l(e){t=J(e,"Sign In")},m(e,r){W(e,t,r)},d(e){e&&E(t)}}}function CI(n){let t,e,r;return t=new hI({}),{c(){Lt(t.$$.fragment),e=X(`
				Bandingkan remote & local data`)},l(i){Mt(t.$$.fragment,i),e=J(i,`
				Bandingkan remote & local data`)},m(i,s){xt(t,i,s),W(i,e,s),r=!0},i(i){r||(ht(t.$$.fragment,i),r=!0)},o(i){pt(t.$$.fragment,i),r=!1},d(i){i&&E(e),Ft(t,i)}}}function kI(n){let t,e,r;return t=new _I({}),{c(){Lt(t.$$.fragment),e=X(`
				Upload local data to the remote`)},l(i){Mt(t.$$.fragment,i),e=J(i,`
				Upload local data to the remote`)},m(i,s){xt(t,i,s),W(i,e,s),r=!0},i(i){r||(ht(t.$$.fragment,i),r=!0)},o(i){pt(t.$$.fragment,i),r=!1},d(i){i&&E(e),Ft(t,i)}}}function bI(n){let t,e,r;return t=new vI({}),{c(){Lt(t.$$.fragment),e=X(`
				Sync local with remote data`)},l(i){Mt(t.$$.fragment,i),e=J(i,`
				Sync local with remote data`)},m(i,s){xt(t,i,s),W(i,e,s),r=!0},i(i){r||(ht(t.$$.fragment,i),r=!0)},o(i){pt(t.$$.fragment,i),r=!1},d(i){i&&E(e),Ft(t,i)}}}function Xu(n){var tl,el,nl,rl,il,sl,ol,al,cl,ll;let t,e,r,i='<tr><th scope="col">Field</th> <th scope="col">Remote</th> <th scope="col">Local</th></tr>',s,o,a,c,l="Audio",u,h,d=((tl=n[1])==null?void 0:tl[w.STORAGE_KEY.AUDIO])+"",f,y,R,m,C,A,v,L="Auto Next",Z,Y,N=((el=n[1])==null?void 0:el[w.STORAGE_KEY.AUTO_NEXT])+"",at,ct,gt,I=(n[8]?1:0)+"",Oi,go,ae,_n,Hc="Tafsir",_o,or,ar=((nl=n[1])==null?void 0:nl[w.STORAGE_KEY.TAFSIR])+"",Li,yo,cr,lr=(n[7]?1:0)+"",Mi,Eo,ce,yn,Wc="Translation",vo,ur,hr=((rl=n[1])==null?void 0:rl[w.STORAGE_KEY.TRANSLATION])+"",xi,To,dr,fr=(n[6]?1:0)+"",Fi,Io,le,En,Yc="Theme",wo,pr,mr=((il=n[1])==null?void 0:il[w.STORAGE_KEY.THEME])+"",Ui,Ao,gr,Bi,Ro,ue,vn,Qc="Location",So,Tn,Po,_r,Ce,Ze,yr=(((sl=n[4])==null?void 0:sl.lt)||"N/A")+"",$i,Co,Er=(((ol=n[4])==null?void 0:ol.lg)||"N/A")+"",ji,ko,vr,Tr=(((al=n[4])==null?void 0:al.district)||"N/A")+"",qi,bo,he,In,Xc="Last Read",No,Ir,ke,Do,wr,be,Vo,de,wn,Jc="Pinned Surah",Oo,Ar,Ne,Lo,Rr,De,vt;function Zc($,rt){var Yt,st;if(typeof((Yt=$[1])==null?void 0:Yt[w.STORAGE_KEY.LOCATION])=="string")return DI;if(typeof((st=$[1])==null?void 0:st[w.STORAGE_KEY.LOCATION])=="object")return NI}let An=Zc(n),Rt=An&&An(n);return ke=new rs({props:{jsonArrayObject:(cl=n[1])==null?void 0:cl[w.STORAGE_KEY.LAST_VERSES]}}),be=new rs({props:{jsonArrayObject:n[3]}}),Ne=new rs({props:{jsonArrayObject:(ll=n[1])==null?void 0:ll[w.STORAGE_KEY.PINNED_SURAH]}}),De=new rs({props:{jsonArrayObject:n[2]}}),{c(){t=k("div"),e=k("table"),r=k("thead"),r.innerHTML=i,s=q(),o=k("tbody"),a=k("tr"),c=k("td"),c.textContent=l,u=q(),h=k("td"),f=X(d),y=q(),R=k("td"),m=X(n[9]),C=q(),A=k("tr"),v=k("td"),v.textContent=L,Z=q(),Y=k("td"),at=X(N),ct=q(),gt=k("td"),Oi=X(I),go=q(),ae=k("tr"),_n=k("td"),_n.textContent=Hc,_o=q(),or=k("td"),Li=X(ar),yo=q(),cr=k("td"),Mi=X(lr),Eo=q(),ce=k("tr"),yn=k("td"),yn.textContent=Wc,vo=q(),ur=k("td"),xi=X(hr),To=q(),dr=k("td"),Fi=X(fr),Io=q(),le=k("tr"),En=k("td"),En.textContent=Yc,wo=q(),pr=k("td"),Ui=X(mr),Ao=q(),gr=k("td"),Bi=X(n[5]),Ro=q(),ue=k("tr"),vn=k("td"),vn.textContent=Qc,So=q(),Tn=k("td"),Rt&&Rt.c(),Po=q(),_r=k("td"),Ce=k("ul"),Ze=k("li"),$i=X(yr),Co=X(", "),ji=X(Er),ko=q(),vr=k("li"),qi=X(Tr),bo=q(),he=k("tr"),In=k("td"),In.textContent=Xc,No=q(),Ir=k("td"),Lt(ke.$$.fragment),Do=q(),wr=k("td"),Lt(be.$$.fragment),Vo=q(),de=k("tr"),wn=k("td"),wn.textContent=Jc,Oo=q(),Ar=k("td"),Lt(Ne.$$.fragment),Lo=q(),Rr=k("td"),Lt(De.$$.fragment),this.h()},l($){t=b($,"DIV",{class:!0});var rt=O(t);e=b(rt,"TABLE",{class:!0});var Yt=O(e);r=b(Yt,"THEAD",{"data-svelte-h":!0}),Kt(r)!=="svelte-3stuni"&&(r.innerHTML=i),s=K(Yt),o=b(Yt,"TBODY",{});var st=O(o);a=b(st,"TR",{});var fe=O(a);c=b(fe,"TD",{"data-svelte-h":!0}),Kt(c)!=="svelte-1x3ujqo"&&(c.textContent=l),u=K(fe),h=b(fe,"TD",{});var Sr=O(h);f=J(Sr,d),Sr.forEach(E),y=K(fe),R=b(fe,"TD",{});var Pr=O(R);m=J(Pr,n[9]),Pr.forEach(E),fe.forEach(E),C=K(st),A=b(st,"TR",{});var pe=O(A);v=b(pe,"TD",{"data-svelte-h":!0}),Kt(v)!=="svelte-1u1iu5y"&&(v.textContent=L),Z=K(pe),Y=b(pe,"TD",{});var Cr=O(Y);at=J(Cr,N),Cr.forEach(E),ct=K(pe),gt=b(pe,"TD",{});var kr=O(gt);Oi=J(kr,I),kr.forEach(E),pe.forEach(E),go=K(st),ae=b(st,"TR",{});var me=O(ae);_n=b(me,"TD",{"data-svelte-h":!0}),Kt(_n)!=="svelte-1p9aljd"&&(_n.textContent=Hc),_o=K(me),or=b(me,"TD",{});var br=O(or);Li=J(br,ar),br.forEach(E),yo=K(me),cr=b(me,"TD",{});var Nr=O(cr);Mi=J(Nr,lr),Nr.forEach(E),me.forEach(E),Eo=K(st),ce=b(st,"TR",{});var ge=O(ce);yn=b(ge,"TD",{"data-svelte-h":!0}),Kt(yn)!=="svelte-1f95xjb"&&(yn.textContent=Wc),vo=K(ge),ur=b(ge,"TD",{});var Dr=O(ur);xi=J(Dr,hr),Dr.forEach(E),To=K(ge),dr=b(ge,"TD",{});var Vr=O(dr);Fi=J(Vr,fr),Vr.forEach(E),ge.forEach(E),Io=K(st),le=b(st,"TR",{});var Rn=O(le);En=b(Rn,"TD",{"data-svelte-h":!0}),Kt(En)!=="svelte-2ua869"&&(En.textContent=Yc),wo=K(Rn),pr=b(Rn,"TD",{});var ul=O(pr);Ui=J(ul,mr),ul.forEach(E),Ao=K(Rn),gr=b(Rn,"TD",{});var hl=O(gr);Bi=J(hl,n[5]),hl.forEach(E),Rn.forEach(E),Ro=K(st),ue=b(st,"TR",{});var Sn=O(ue);vn=b(Sn,"TD",{"data-svelte-h":!0}),Kt(vn)!=="svelte-6o32y9"&&(vn.textContent=Qc),So=K(Sn),Tn=b(Sn,"TD",{});var dl=O(Tn);Rt&&Rt.l(dl),dl.forEach(E),Po=K(Sn),_r=b(Sn,"TD",{});var fl=O(_r);Ce=b(fl,"UL",{class:!0});var Ki=O(Ce);Ze=b(Ki,"LI",{});var Gi=O(Ze);$i=J(Gi,yr),Co=J(Gi,", "),ji=J(Gi,Er),Gi.forEach(E),ko=K(Ki),vr=b(Ki,"LI",{});var pl=O(vr);qi=J(pl,Tr),pl.forEach(E),Ki.forEach(E),fl.forEach(E),Sn.forEach(E),bo=K(st),he=b(st,"TR",{});var Pn=O(he);In=b(Pn,"TD",{"data-svelte-h":!0}),Kt(In)!=="svelte-r4w2ci"&&(In.textContent=Xc),No=K(Pn),Ir=b(Pn,"TD",{});var ml=O(Ir);Mt(ke.$$.fragment,ml),ml.forEach(E),Do=K(Pn),wr=b(Pn,"TD",{});var gl=O(wr);Mt(be.$$.fragment,gl),gl.forEach(E),Pn.forEach(E),Vo=K(st),de=b(st,"TR",{});var Cn=O(de);wn=b(Cn,"TD",{"data-svelte-h":!0}),Kt(wn)!=="svelte-uy1aw3"&&(wn.textContent=Jc),Oo=K(Cn),Ar=b(Cn,"TD",{});var _l=O(Ar);Mt(Ne.$$.fragment,_l),_l.forEach(E),Lo=K(Cn),Rr=b(Cn,"TD",{});var yl=O(Rr);Mt(De.$$.fragment,yl),yl.forEach(E),Cn.forEach(E),st.forEach(E),Yt.forEach(E),rt.forEach(E),this.h()},h(){D(Ce,"class","flex flex-col gap-2"),D(e,"class","table-stripped"),D(t,"class","mt-4 relative overflow-x-auto shadow-md rounded-lg border-2 border-secondary")},m($,rt){W($,t,rt),_(t,e),_(e,r),_(e,s),_(e,o),_(o,a),_(a,c),_(a,u),_(a,h),_(h,f),_(a,y),_(a,R),_(R,m),_(o,C),_(o,A),_(A,v),_(A,Z),_(A,Y),_(Y,at),_(A,ct),_(A,gt),_(gt,Oi),_(o,go),_(o,ae),_(ae,_n),_(ae,_o),_(ae,or),_(or,Li),_(ae,yo),_(ae,cr),_(cr,Mi),_(o,Eo),_(o,ce),_(ce,yn),_(ce,vo),_(ce,ur),_(ur,xi),_(ce,To),_(ce,dr),_(dr,Fi),_(o,Io),_(o,le),_(le,En),_(le,wo),_(le,pr),_(pr,Ui),_(le,Ao),_(le,gr),_(gr,Bi),_(o,Ro),_(o,ue),_(ue,vn),_(ue,So),_(ue,Tn),Rt&&Rt.m(Tn,null),_(ue,Po),_(ue,_r),_(_r,Ce),_(Ce,Ze),_(Ze,$i),_(Ze,Co),_(Ze,ji),_(Ce,ko),_(Ce,vr),_(vr,qi),_(o,bo),_(o,he),_(he,In),_(he,No),_(he,Ir),xt(ke,Ir,null),_(he,Do),_(he,wr),xt(be,wr,null),_(o,Vo),_(o,de),_(de,wn),_(de,Oo),_(de,Ar),xt(Ne,Ar,null),_(de,Lo),_(de,Rr),xt(De,Rr,null),vt=!0},p($,rt){var Pr,pe,Cr,kr,me,br,Nr,ge,Dr,Vr;(!vt||rt&2)&&d!==(d=((Pr=$[1])==null?void 0:Pr[w.STORAGE_KEY.AUDIO])+"")&&ft(f,d),(!vt||rt&512)&&ft(m,$[9]),(!vt||rt&2)&&N!==(N=((pe=$[1])==null?void 0:pe[w.STORAGE_KEY.AUTO_NEXT])+"")&&ft(at,N),(!vt||rt&256)&&I!==(I=($[8]?1:0)+"")&&ft(Oi,I),(!vt||rt&2)&&ar!==(ar=((Cr=$[1])==null?void 0:Cr[w.STORAGE_KEY.TAFSIR])+"")&&ft(Li,ar),(!vt||rt&128)&&lr!==(lr=($[7]?1:0)+"")&&ft(Mi,lr),(!vt||rt&2)&&hr!==(hr=((kr=$[1])==null?void 0:kr[w.STORAGE_KEY.TRANSLATION])+"")&&ft(xi,hr),(!vt||rt&64)&&fr!==(fr=($[6]?1:0)+"")&&ft(Fi,fr),(!vt||rt&2)&&mr!==(mr=((me=$[1])==null?void 0:me[w.STORAGE_KEY.THEME])+"")&&ft(Ui,mr),(!vt||rt&32)&&ft(Bi,$[5]),An===(An=Zc($))&&Rt?Rt.p($,rt):(Rt&&Rt.d(1),Rt=An&&An($),Rt&&(Rt.c(),Rt.m(Tn,null))),(!vt||rt&16)&&yr!==(yr=(((br=$[4])==null?void 0:br.lt)||"N/A")+"")&&ft($i,yr),(!vt||rt&16)&&Er!==(Er=(((Nr=$[4])==null?void 0:Nr.lg)||"N/A")+"")&&ft(ji,Er),(!vt||rt&16)&&Tr!==(Tr=(((ge=$[4])==null?void 0:ge.district)||"N/A")+"")&&ft(qi,Tr);const Yt={};rt&2&&(Yt.jsonArrayObject=(Dr=$[1])==null?void 0:Dr[w.STORAGE_KEY.LAST_VERSES]),ke.$set(Yt);const st={};rt&8&&(st.jsonArrayObject=$[3]),be.$set(st);const fe={};rt&2&&(fe.jsonArrayObject=(Vr=$[1])==null?void 0:Vr[w.STORAGE_KEY.PINNED_SURAH]),Ne.$set(fe);const Sr={};rt&4&&(Sr.jsonArrayObject=$[2]),De.$set(Sr)},i($){vt||(ht(ke.$$.fragment,$),ht(be.$$.fragment,$),ht(Ne.$$.fragment,$),ht(De.$$.fragment,$),vt=!0)},o($){pt(ke.$$.fragment,$),pt(be.$$.fragment,$),pt(Ne.$$.fragment,$),pt(De.$$.fragment,$),vt=!1},d($){$&&E(t),Rt&&Rt.d(),Ft(ke),Ft(be),Ft(Ne),Ft(De)}}}function NI(n){var d,f,y,R,m,C;let t,e,r=(((f=(d=n[1])==null?void 0:d[w.STORAGE_KEY.LOCATION])==null?void 0:f.lt)||"N/A")+"",i,s,o=(((R=(y=n[1])==null?void 0:y[w.STORAGE_KEY.LOCATION])==null?void 0:R.lg)||"N/A")+"",a,c,l,u=(((C=(m=n[1])==null?void 0:m[w.STORAGE_KEY.LOCATION])==null?void 0:C.district)||"N/A")+"",h;return{c(){t=k("ul"),e=k("li"),i=X(r),s=X(", "),a=X(o),c=q(),l=k("li"),h=X(u),this.h()},l(A){t=b(A,"UL",{class:!0});var v=O(t);e=b(v,"LI",{});var L=O(e);i=J(L,r),s=J(L,", "),a=J(L,o),L.forEach(E),c=K(v),l=b(v,"LI",{});var Z=O(l);h=J(Z,u),Z.forEach(E),v.forEach(E),this.h()},h(){D(t,"class","flex flex-col gap-2")},m(A,v){W(A,t,v),_(t,e),_(e,i),_(e,s),_(e,a),_(t,c),_(t,l),_(l,h)},p(A,v){var L,Z,Y,N,at,ct;v&2&&r!==(r=(((Z=(L=A[1])==null?void 0:L[w.STORAGE_KEY.LOCATION])==null?void 0:Z.lt)||"N/A")+"")&&ft(i,r),v&2&&o!==(o=(((N=(Y=A[1])==null?void 0:Y[w.STORAGE_KEY.LOCATION])==null?void 0:N.lg)||"N/A")+"")&&ft(a,o),v&2&&u!==(u=(((ct=(at=A[1])==null?void 0:at[w.STORAGE_KEY.LOCATION])==null?void 0:ct.district)||"N/A")+"")&&ft(h,u)},d(A){A&&E(t)}}}function DI(n){var i;let t,e=((i=n[1])==null?void 0:i[w.STORAGE_KEY.LOCATION])+"",r;return{c(){t=k("span"),r=X(e)},l(s){t=b(s,"SPAN",{});var o=O(t);r=J(o,e),o.forEach(E)},m(s,o){W(s,t,o),_(t,r)},p(s,o){var a;o&2&&e!==(e=((a=s[1])==null?void 0:a[w.STORAGE_KEY.LOCATION])+"")&&ft(r,e)},d(s){s&&E(t)}}}function VI(n){let t,e,r;return t=new pI({}),{c(){Lt(t.$$.fragment),e=X(`
				Sign Out`)},l(i){Mt(t.$$.fragment,i),e=J(i,`
				Sign Out`)},m(i,s){xt(t,i,s),W(i,e,s),r=!0},i(i){r||(ht(t.$$.fragment,i),r=!0)},o(i){pt(t.$$.fragment,i),r=!1},d(i){i&&E(e),Ft(t,i)}}}function OI(n){let t,e,r,i='<h1 class="text-3xl font-bold">🔄 Sync Data</h1>',s,o,a,c,l,u,h,d;t=new lp({props:{title:`Sync Data | ${Mo.TITLE_META}`,desc:`Sync Data ${Mo.TITLE_META}`,url:`${Mo.PATH}sync/`}}),a=new op({props:{items:[{text:"🏠 Beranda",href:"/"}]}});const f=[SI,RI],y=[];function R(m,C){return m[0]?0:1}return u=R(n),h=y[u]=f[u](n),{c(){Lt(t.$$.fragment),e=q(),r=k("div"),r.innerHTML=i,s=q(),o=k("div"),Lt(a.$$.fragment),c=q(),l=k("div"),h.c(),this.h()},l(m){const C=sp("svelte-1n8wbxu",document.head);Mt(t.$$.fragment,C),C.forEach(E),e=K(m),r=b(m,"DIV",{class:!0,"data-svelte-h":!0}),Kt(r)!=="svelte-18n6kr7"&&(r.innerHTML=i),s=K(m),o=b(m,"DIV",{class:!0});var A=O(o);Mt(a.$$.fragment,A),A.forEach(E),c=K(m),l=b(m,"DIV",{class:!0});var v=O(l);h.l(v),v.forEach(E),this.h()},h(){D(r,"class","flex gap-2 px-4 mb-4"),D(o,"class","px-4 mb-4"),D(l,"class","px-4")},m(m,C){xt(t,document.head,null),W(m,e,C),W(m,r,C),W(m,s,C),W(m,o,C),xt(a,o,null),W(m,c,C),W(m,l,C),y[u].m(l,null),d=!0},p(m,[C]){let A=u;u=R(m),u===A?y[u].p(m,C):(Zu(),pt(y[A],1,1,()=>{y[A]=null}),Ju(),h=y[u],h?h.p(m,C):(h=y[u]=f[u](m),h.c()),ht(h,1),h.m(l,null))},i(m){d||(ht(t.$$.fragment,m),ht(a.$$.fragment,m),ht(h),d=!0)},o(m){pt(t.$$.fragment,m),pt(a.$$.fragment,m),pt(h),d=!1},d(m){m&&(E(e),E(r),E(s),E(o),E(c),E(l)),Ft(t),Ft(a),y[u].d()}}}function LI(n,t,e){let r,i,s,o,a,c,l,u;Ve(n,Pl,N=>e(2,r=N)),Ve(n,Sl,N=>e(3,i=N)),Ve(n,Rl,N=>e(4,s=N)),Ve(n,Al,N=>e(5,o=N)),Ve(n,Tl,N=>e(6,a=N)),Ve(n,vl,N=>e(7,c=N)),Ve(n,Il,N=>e(8,l=N)),Ve(n,wl,N=>e(9,u=N));const d=ch({apiKey:up,authDomain:hp,projectId:dp,storageBucket:fp,messagingSenderId:pp,appId:mp,measurementId:gp}),f=BE(d);let y=null,R=null;const m=new _e;m.addScope("https://www.googleapis.com/auth/userinfo.profile"),m.addScope("https://www.googleapis.com/auth/userinfo.email"),m.setCustomParameters({login_hint:"user@example.com"});const C=cI();return Yv(C,N=>{N?e(0,y=N):e(0,y=null)}),[y,R,r,i,s,o,a,c,l,u,()=>{_T(C,m).then(N=>{const at=N.user;Qt.show({message:`Berhasil login. Selamat datang ${at.displayName}!`,type:"success"})}).catch(N=>{Qt.show({message:`Gagal login: ${N.message}`,type:"error"})})},()=>{Qv(C).then(()=>{Qt.show({message:"Berhasil logout!",type:"success"})}).catch(N=>{Qt.show({message:`Gagal logout: ${N.message}`,type:"error"})})},async()=>{const N=ts(f,"progress"),at=ta(N,ea("uid","==",y==null?void 0:y.uid)),ct=await na(at);ct.size>0?ct.forEach(gt=>{e(1,R=gt.data())}):e(1,R={uid:y==null?void 0:y.uid,[w.STORAGE_KEY.AUDIO]:"N/A",[w.STORAGE_KEY.AUTO_NEXT]:"N/A",[w.STORAGE_KEY.TAFSIR]:"N/A",[w.STORAGE_KEY.TRANSLATION]:"N/A",[w.STORAGE_KEY.THEME]:"N/A",[w.STORAGE_KEY.LOCATION]:{lt:"N/A",lg:"N/A",district:"N/A"},[w.STORAGE_KEY.LAST_VERSES]:[],[w.STORAGE_KEY.PINNED_SURAH]:[]})},async()=>{const N={uid:y==null?void 0:y.uid,[w.STORAGE_KEY.AUDIO]:u,[w.STORAGE_KEY.AUTO_NEXT]:l?1:0,[w.STORAGE_KEY.TAFSIR]:c?1:0,[w.STORAGE_KEY.TRANSLATION]:a?1:0,[w.STORAGE_KEY.THEME]:o||"",[w.STORAGE_KEY.LOCATION]:s||null,[w.STORAGE_KEY.LAST_VERSES]:i||null,[w.STORAGE_KEY.PINNED_SURAH]:r||null},at=ts(f,"progress"),ct=ta(at,ea("uid","==",y==null?void 0:y.uid)),gt=await na(ct);if(gt.size>0)try{gt.forEach(async I=>{await sv(I.ref,N)}),Qt.show({message:"Berhasil memperbarui data remote dengan data lokal",type:"success"})}catch(I){console.error("Error updating document: ",N,I),Qt.show({message:"Gagal memperbarui data lokal ke remote",type:"error"})}else try{await ov(ts(f,"progress"),N),Qt.show({message:"Berhasil mengunggah data lokal ke remote",type:"success"})}catch(I){console.error("Error adding new document: ",N,I),Qt.show({message:"Gagal mengunggah data lokal ke remote",type:"error"})}},async()=>{const N=ts(f,"progress"),at=ta(N,ea("uid","==",y==null?void 0:y.uid)),ct=await na(at);ct.size>0?(ct.forEach(gt=>{const I=gt.data();I&&(vl.set((I==null?void 0:I[w.STORAGE_KEY.TAFSIR])===1),localStorage.setItem(w.STORAGE_KEY.TAFSIR,(I==null?void 0:I[w.STORAGE_KEY.TAFSIR])===1?"y":"n"),Tl.set((I==null?void 0:I[w.STORAGE_KEY.TRANSLATION])===1),localStorage.setItem(w.STORAGE_KEY.TRANSLATION,(I==null?void 0:I[w.STORAGE_KEY.TRANSLATION])===1?"y":"n"),Il.set((I==null?void 0:I[w.STORAGE_KEY.AUTO_NEXT])===1),localStorage.setItem(w.STORAGE_KEY.AUTO_NEXT,(I==null?void 0:I[w.STORAGE_KEY.AUTO_NEXT])===1?"y":"n"),wl.set(I==null?void 0:I[w.STORAGE_KEY.AUDIO]),localStorage.setItem(w.STORAGE_KEY.AUDIO,(I==null?void 0:I[w.STORAGE_KEY.AUDIO])||"1"),I!=null&&I[w.STORAGE_KEY.THEME]&&(Al.set(I==null?void 0:I[w.STORAGE_KEY.THEME]),localStorage.setItem(w.STORAGE_KEY.THEME,(I==null?void 0:I[w.STORAGE_KEY.THEME])||"light")),I!=null&&I[w.STORAGE_KEY.LOCATION]&&(Rl.set(I==null?void 0:I[w.STORAGE_KEY.LOCATION]),localStorage.setItem(w.STORAGE_KEY.LOCATION,JSON.stringify((I==null?void 0:I[w.STORAGE_KEY.LOCATION])||{}))),I!=null&&I[w.STORAGE_KEY.LAST_VERSES]&&(Sl.set(I==null?void 0:I[w.STORAGE_KEY.LAST_VERSES]),localStorage.setItem(w.STORAGE_KEY.LAST_VERSES,JSON.stringify((I==null?void 0:I[w.STORAGE_KEY.LAST_VERSES])||[]))),I!=null&&I[w.STORAGE_KEY.PINNED_SURAH]&&(Pl.set(I==null?void 0:I[w.STORAGE_KEY.PINNED_SURAH]),localStorage.setItem(w.STORAGE_KEY.PINNED_SURAH,JSON.stringify((I==null?void 0:I[w.STORAGE_KEY.PINNED_SURAH])||[]))),e(1,R=gt.data()))}),Qt.show({message:"Data di lokal berhasil diperbarui!",type:"success"})):Qt.show({message:"Kamu belum memiliki data apapun di remote. Data di lokal tidak akan diperbarui!",type:"error"})}]}class WI extends Xn{constructor(t){super(),Jn(this,t,LI,OI,Qn,{})}}export{WI as component};
