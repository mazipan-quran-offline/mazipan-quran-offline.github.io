import{s as Qn,n as zt,c as Ge,e as Ke,g as Ve}from"../chunks/scheduler.ce7a804c.js";import{S as Yn,i as Jn,x as ve,y as Te,j as O,f as E,k as D,a as W,z as g,e as yl,g as b,h as k,A as Gt,m as J,n as X,o as ft,r as Mt,s as q,E as sp,u as Lt,c as G,v as xt,t as pt,b as Xu,d as ht,w as Ft,p as Zu}from"../chunks/index.5be8079f.js";import{B as op}from"../chunks/Breadcrumb.4a0f0bf8.js";import{B as Mr}from"../chunks/Button.d93880ff.js";import{f as El,g as vl,s as Tl,b as Il,a as wl,h as Al,l as Rl,p as Sl}from"../chunks/index.8fa12a7a.js";import{t as Yt}from"../chunks/toast.df1a3cb2.js";import{e as Pl,u as ap,d as cp,b as Oo,C as w}from"../chunks/constants.62a7df6e.js";import{C as ze}from"../chunks/utils.df4df21e.js";import{M as lp}from"../chunks/MetaTag.25e0a506.js";const up="AIzaSyChBEY5EioADQmnfs3B28M3y1boTuGQmyQ",hp="baca-quran-id.firebaseapp.com",dp="baca-quran-id",fp="baca-quran-id.appspot.com",pp="1022678905567",mp="1:1022678905567:web:18b62c4d8d12dabb9caf6a",gp="G-SFVBG4QWNG";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const th=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},_p=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],o=n[e++],a=n[e++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[e++],o=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},eh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(e[u],e[h],e[d],e[f])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(th(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):_p(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const l=i<n.length?e[n.charAt(i)]:64;++i;const h=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new yp;const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class yp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ep=function(n){const t=th(n);return eh.encodeByteArray(t,!0)},us=function(n){return Ep(n).replace(/\./g,"")},nh=function(n){try{return eh.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const Tp=()=>vp().__FIREBASE_DEFAULTS__,Ip=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&nh(n[1]);return t&&JSON.parse(t)},La=()=>{try{return Tp()||Ip()||wp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},rh=n=>{var t,e;return(e=(t=La())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Ap=n=>{const t=rh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},ih=()=>{var n;return(n=La())===null||n===void 0?void 0:n.config},sh=n=>{var t;return(t=La())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Sp(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[us(JSON.stringify(e)),us(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function Cp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function bp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kp(){const n=Vt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Np(){try{return typeof indexedDB=="object"}catch{return!1}}function Dp(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="FirebaseError";class Pe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Vp,Object.setPrototypeOf(this,Pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Op(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Pe(i,a,r)}}function Op(n,t){return n.replace(Mp,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Mp=/\{\$([^}]+)}/g;function Lp(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function hs(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],o=t[i];if(Cl(s)&&Cl(o)){if(!hs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Cl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function xp(n,t){const e=new Fp(n,t);return e.subscribe.bind(e)}class Fp{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Up(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=Mo),i.error===void 0&&(i.error=Mo),i.complete===void 0&&(i.complete=Mo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Up(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Mo(){}/**
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
 */class $p{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Rp;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jp(t))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=tn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=tn){return this.instances.has(t)}getOptions(t=tn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bp(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=tn){return this.component?this.component.multipleInstances?t:tn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bp(n){return n===tn?void 0:n}function jp(n){return n.instantiationMode==="EAGER"}/**
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
 */class qp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new $p(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Gp={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Kp=z.INFO,zp={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Hp=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=zp[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class xa{constructor(t){this.name=t,this._logLevel=Kp,this._logHandler=Hp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Gp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const Wp=(n,t)=>t.some(e=>n instanceof e);let bl,kl;function Qp(){return bl||(bl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yp(){return kl||(kl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oh=new WeakMap,ra=new WeakMap,ah=new WeakMap,Lo=new WeakMap,Fa=new WeakMap;function Jp(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{e(Ue(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&oh.set(e,n)}).catch(()=>{}),Fa.set(t,n),t}function Xp(n){if(ra.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{e(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});ra.set(n,t)}let ia={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ra.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ah.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ue(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Zp(n){ia=n(ia)}function tm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(xo(this),t,...e);return ah.set(r,t.sort?t.sort():[t]),Ue(r)}:Yp().includes(n)?function(...t){return n.apply(xo(this),t),Ue(oh.get(this))}:function(...t){return Ue(n.apply(xo(this),t))}}function em(n){return typeof n=="function"?tm(n):(n instanceof IDBTransaction&&Xp(n),Wp(n,Qp())?new Proxy(n,ia):n)}function Ue(n){if(n instanceof IDBRequest)return Jp(n);if(Lo.has(n))return Lo.get(n);const t=em(n);return t!==n&&(Lo.set(n,t),Fa.set(t,n)),t}const xo=n=>Fa.get(n);function nm(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,t),a=Ue(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ue(o.result),c.oldVersion,c.newVersion,Ue(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const rm=["get","getKey","getAll","getAllKeys","count"],im=["put","add","delete","clear"],Fo=new Map;function Nl(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Fo.get(t))return Fo.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=im.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rm.includes(e)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[e](...a),i&&c.done]))[0]};return Fo.set(t,s),s}Zp(n=>({...n,get:(t,e,r)=>Nl(t,e)||n.get(t,e,r),has:(t,e)=>!!Nl(t,e)||n.has(t,e)}));/**
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
 */class sm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(om(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function om(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const sa="@firebase/app",Dl="0.9.17";/**
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
 */const ln=new xa("@firebase/app"),am="@firebase/app-compat",cm="@firebase/analytics-compat",lm="@firebase/analytics",um="@firebase/app-check-compat",hm="@firebase/app-check",dm="@firebase/auth",fm="@firebase/auth-compat",pm="@firebase/database",mm="@firebase/database-compat",gm="@firebase/functions",_m="@firebase/functions-compat",ym="@firebase/installations",Em="@firebase/installations-compat",vm="@firebase/messaging",Tm="@firebase/messaging-compat",Im="@firebase/performance",wm="@firebase/performance-compat",Am="@firebase/remote-config",Rm="@firebase/remote-config-compat",Sm="@firebase/storage",Pm="@firebase/storage-compat",Cm="@firebase/firestore",bm="@firebase/firestore-compat",km="firebase",Nm="10.3.0";/**
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
 */const oa="[DEFAULT]",Dm={[sa]:"fire-core",[am]:"fire-core-compat",[lm]:"fire-analytics",[cm]:"fire-analytics-compat",[hm]:"fire-app-check",[um]:"fire-app-check-compat",[dm]:"fire-auth",[fm]:"fire-auth-compat",[pm]:"fire-rtdb",[mm]:"fire-rtdb-compat",[gm]:"fire-fn",[_m]:"fire-fn-compat",[ym]:"fire-iid",[Em]:"fire-iid-compat",[vm]:"fire-fcm",[Tm]:"fire-fcm-compat",[Im]:"fire-perf",[wm]:"fire-perf-compat",[Am]:"fire-rc",[Rm]:"fire-rc-compat",[Sm]:"fire-gcs",[Pm]:"fire-gcs-compat",[Cm]:"fire-fst",[bm]:"fire-fst-compat","fire-js":"fire-js",[km]:"fire-js-all"};/**
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
 */const ds=new Map,aa=new Map;function Vm(n,t){try{n.container.addComponent(t)}catch(e){ln.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Fn(n){const t=n.name;if(aa.has(t))return ln.debug(`There were multiple attempts to register component ${t}.`),!1;aa.set(t,n);for(const e of ds.values())Vm(e,n);return!0}function Ua(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Om={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$e=new ui("app","Firebase",Om);/**
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
 */class Mm{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $e.create("app-deleted",{appName:this._name})}}/**
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
 */const Xn=Nm;function ch(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:oa,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw $e.create("bad-app-name",{appName:String(i)});if(e||(e=ih()),!e)throw $e.create("no-options");const s=ds.get(i);if(s){if(hs(e,s.options)&&hs(r,s.config))return s;throw $e.create("duplicate-app",{appName:i})}const o=new qp(i);for(const c of aa.values())o.addComponent(c);const a=new Mm(e,r,o);return ds.set(i,a),a}function lh(n=oa){const t=ds.get(n);if(!t&&n===oa&&ih())return ch();if(!t)throw $e.create("no-app",{appName:n});return t}function Be(n,t,e){var r;let i=(r=Dm[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ln.warn(a.join(" "));return}Fn(new cn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Lm="firebase-heartbeat-database",xm=1,Hr="firebase-heartbeat-store";let Uo=null;function uh(){return Uo||(Uo=nm(Lm,xm,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Hr)}}}).catch(n=>{throw $e.create("idb-open",{originalErrorMessage:n.message})})),Uo}async function Fm(n){try{return await(await uh()).transaction(Hr).objectStore(Hr).get(hh(n))}catch(t){if(t instanceof Pe)ln.warn(t.message);else{const e=$e.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ln.warn(e.message)}}}async function Vl(n,t){try{const r=(await uh()).transaction(Hr,"readwrite");await r.objectStore(Hr).put(t,hh(n)),await r.done}catch(e){if(e instanceof Pe)ln.warn(e.message);else{const r=$e.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ln.warn(r.message)}}}function hh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Um=1024,$m=30*24*60*60*1e3;class Bm{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new qm(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ol();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=$m}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ol(),{heartbeatsToSend:e,unsentEntries:r}=jm(this._heartbeatsCache.heartbeats),i=us(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ol(){return new Date().toISOString().substring(0,10)}function jm(n,t=Um){const e=[];let r=n.slice();for(const i of n){const s=e.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ml(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Ml(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class qm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Np()?Dp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Fm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vl(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vl(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ml(n){return us(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Gm(n){Fn(new cn("platform-logger",t=>new sm(t),"PRIVATE")),Fn(new cn("heartbeat",t=>new Bm(t),"PRIVATE")),Be(sa,Dl,n),Be(sa,Dl,"esm2017"),Be("fire-js","")}Gm("");var Km="firebase",zm="10.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be(Km,zm,"app");var Hm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,$a=$a||{},x=Hm||self;function Ds(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function di(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function Wm(n){return Object.prototype.hasOwnProperty.call(n,$o)&&n[$o]||(n[$o]=++Qm)}var $o="closure_uid_"+(1e9*Math.random()>>>0),Qm=0;function Ym(n,t,e){return n.call.apply(n.bind,arguments)}function Jm(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function kt(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?kt=Ym:kt=Jm,kt.apply(null,arguments)}function Gi(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function Et(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Ye(){this.s=this.s,this.o=this.o}var Xm=0;Ye.prototype.s=!1;Ye.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Xm!=0)&&Wm(this)};Ye.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const dh=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function Ba(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function Ll(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(Ds(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Nt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}Nt.prototype.h=function(){this.defaultPrevented=!0};var Zm=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{x.addEventListener("test",()=>{},t),x.removeEventListener("test",()=>{},t)}catch{}return n}();function Wr(n){return/^[\s\xa0]*$/.test(n)}function Vs(){var n=x.navigator;return n&&(n=n.userAgent)?n:""}function Jt(n){return Vs().indexOf(n)!=-1}function ja(n){return ja[" "](n),n}ja[" "]=function(){};function tg(n,t){var e=zg;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var eg=Jt("Opera"),Un=Jt("Trident")||Jt("MSIE"),fh=Jt("Edge"),ca=fh||Un,ph=Jt("Gecko")&&!(Vs().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge"))&&!(Jt("Trident")||Jt("MSIE"))&&!Jt("Edge"),ng=Vs().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge");function mh(){var n=x.document;return n?n.documentMode:void 0}var la;t:{var Bo="",jo=function(){var n=Vs();if(ph)return/rv:([^\);]+)(\)|;)/.exec(n);if(fh)return/Edge\/([\d\.]+)/.exec(n);if(Un)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(ng)return/WebKit\/(\S+)/.exec(n);if(eg)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(jo&&(Bo=jo?jo[1]:""),Un){var qo=mh();if(qo!=null&&qo>parseFloat(Bo)){la=String(qo);break t}}la=Bo}var ua;if(x.document&&Un){var xl=mh();ua=xl||parseInt(la,10)||void 0}else ua=void 0;var rg=ua;function Qr(n,t){if(Nt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(ph){t:{try{ja(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:ig[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Qr.$.h.call(this)}}Et(Qr,Nt);var ig={2:"touch",3:"pen",4:"mouse"};Qr.prototype.h=function(){Qr.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var fi="closure_listenable_"+(1e6*Math.random()|0),sg=0;function og(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++sg,this.fa=this.ia=!1}function Os(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function qa(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function ag(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function gh(n){const t={};for(const e in n)t[e]=n[e];return t}const Fl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _h(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<Fl.length;s++)e=Fl[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Ms(n){this.src=n,this.g={},this.h=0}Ms.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=da(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new og(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function ha(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=dh(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Os(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function da(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var Ga="closure_lm_"+(1e6*Math.random()|0),Go={};function yh(n,t,e,r,i){if(r&&r.once)return vh(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)yh(n,t[s],e,r,i);return null}return e=Ha(e),n&&n[fi]?n.O(t,e,di(r)?!!r.capture:!!r,i):Eh(n,t,e,!1,r,i)}function Eh(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=di(i)?!!i.capture:!!i,a=za(n);if(a||(n[Ga]=a=new Ms(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=cg(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)Zm||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(Ih(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function cg(){function n(e){return t.call(n.src,n.listener,e)}const t=lg;return n}function vh(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)vh(n,t[s],e,r,i);return null}return e=Ha(e),n&&n[fi]?n.P(t,e,di(r)?!!r.capture:!!r,i):Eh(n,t,e,!0,r,i)}function Th(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Th(n,t[s],e,r,i);else r=di(r)?!!r.capture:!!r,e=Ha(e),n&&n[fi]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=da(s,e,r,i),-1<e&&(Os(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=za(n))&&(t=n.g[t.toString()],n=-1,t&&(n=da(t,e,r,i)),(e=-1<n?t[n]:null)&&Ka(e))}function Ka(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[fi])ha(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(Ih(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=za(t))?(ha(e,n),e.h==0&&(e.src=null,t[Ga]=null)):Os(n)}}}function Ih(n){return n in Go?Go[n]:Go[n]="on"+n}function lg(n,t){if(n.fa)n=!0;else{t=new Qr(t,this);var e=n.listener,r=n.la||n.src;n.ia&&Ka(n),n=e.call(r,t)}return n}function za(n){return n=n[Ga],n instanceof Ms?n:null}var Ko="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ha(n){return typeof n=="function"?n:(n[Ko]||(n[Ko]=function(t){return n.handleEvent(t)}),n[Ko])}function yt(){Ye.call(this),this.i=new Ms(this),this.S=this,this.J=null}Et(yt,Ye);yt.prototype[fi]=!0;yt.prototype.removeEventListener=function(n,t,e,r){Th(this,n,t,e,r)};function wt(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new Nt(t,n);else if(t instanceof Nt)t.target=t.target||n;else{var i=t;t=new Nt(r,n),_h(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=Ki(o,r,!0,t)&&i}if(o=t.g=n,i=Ki(o,r,!0,t)&&i,i=Ki(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=Ki(o,r,!1,t)&&i}yt.prototype.N=function(){if(yt.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)Os(e[r]);delete n.g[t],n.h--}}this.J=null};yt.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};yt.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function Ki(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,c=o.la||o.src;o.ia&&ha(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Wa=x.JSON.stringify;class ug{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function hg(){var n=Qa;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class dg{constructor(){this.h=this.g=null}add(t,e){const r=wh.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var wh=new ug(()=>new fg,n=>n.reset());class fg{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function pg(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function mg(n){x.setTimeout(()=>{throw n},0)}let Yr,Jr=!1,Qa=new dg,Ah=()=>{const n=x.Promise.resolve(void 0);Yr=()=>{n.then(gg)}};var gg=()=>{for(var n;n=hg();){try{n.h.call(n.g)}catch(e){mg(e)}var t=wh;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}Jr=!1};function Ls(n,t){yt.call(this),this.h=n||1,this.g=t||x,this.j=kt(this.qb,this),this.l=Date.now()}Et(Ls,yt);T=Ls.prototype;T.ga=!1;T.T=null;T.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),wt(this,"tick"),this.ga&&(Ya(this),this.start()))}};T.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ya(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}T.N=function(){Ls.$.N.call(this),Ya(this),delete this.g};function Ja(n,t,e){if(typeof n=="function")e&&(n=kt(n,e));else if(n&&typeof n.handleEvent=="function")n=kt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:x.setTimeout(n,t||0)}function Rh(n){n.g=Ja(()=>{n.g=null,n.i&&(n.i=!1,Rh(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class _g extends Ye{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Rh(this)}N(){super.N(),this.g&&(x.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xr(n){Ye.call(this),this.h=n,this.g={}}Et(Xr,Ye);var Ul=[];function Sh(n,t,e,r){Array.isArray(e)||(e&&(Ul[0]=e.toString()),e=Ul);for(var i=0;i<e.length;i++){var s=yh(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Ph(n){qa(n.g,function(t,e){this.g.hasOwnProperty(e)&&Ka(t)},n),n.g={}}Xr.prototype.N=function(){Xr.$.N.call(this),Ph(this)};Xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xs(){this.g=!0}xs.prototype.Ea=function(){this.g=!1};function yg(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function Eg(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function Dn(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+Tg(n,e)+(r?" "+r:"")})}function vg(n,t){n.info(function(){return"TIMEOUT: "+t})}xs.prototype.info=function(){};function Tg(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Wa(e)}catch{return t}}var pn={},$l=null;function Fs(){return $l=$l||new yt}pn.Ta="serverreachability";function Ch(n){Nt.call(this,pn.Ta,n)}Et(Ch,Nt);function Zr(n){const t=Fs();wt(t,new Ch(t))}pn.STAT_EVENT="statevent";function bh(n,t){Nt.call(this,pn.STAT_EVENT,n),this.stat=t}Et(bh,Nt);function Ut(n){const t=Fs();wt(t,new bh(t,n))}pn.Ua="timingevent";function kh(n,t){Nt.call(this,pn.Ua,n),this.size=t}Et(kh,Nt);function pi(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return x.setTimeout(function(){n()},t)}var Us={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Nh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xa(){}Xa.prototype.h=null;function Bl(n){return n.h||(n.h=n.i())}function Dh(){}var mi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Za(){Nt.call(this,"d")}Et(Za,Nt);function tc(){Nt.call(this,"c")}Et(tc,Nt);var fa;function $s(){}Et($s,Xa);$s.prototype.g=function(){return new XMLHttpRequest};$s.prototype.i=function(){return{}};fa=new $s;function gi(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new Xr(this),this.P=Ig,n=ca?125:void 0,this.V=new Ls(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Vh}function Vh(){this.i=null,this.g="",this.h=!1}var Ig=45e3,pa={},fs={};T=gi.prototype;T.setTimeout=function(n){this.P=n};function ma(n,t,e){n.L=1,n.v=js(Ie(t)),n.s=e,n.S=!0,Oh(n,null)}function Oh(n,t){n.G=Date.now(),_i(n),n.A=Ie(n.v);var e=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),jh(e.i,"t",r),n.C=0,e=n.l.J,n.h=new Vh,n.g=ld(n.l,e?t:null,!n.s),0<n.O&&(n.M=new _g(kt(n.Pa,n,n.g),n.O)),Sh(n.U,n.g,"readystatechange",n.nb),t=n.I?gh(n.I):{},n.s?(n.u||(n.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,t)):(n.u="GET",n.g.ha(n.A,n.u,null,t)),Zr(),yg(n.j,n.u,n.A,n.m,n.W,n.s)}T.nb=function(n){n=n.target;const t=this.M;t&&Xt(n)==3?t.l():this.Pa(n)};T.Pa=function(n){try{if(n==this.g)t:{const u=Xt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ca||this.g&&(this.h.h||this.g.ja()||Kl(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?Zr(3):Zr(2)),Bs(this);var e=this.g.da();this.ca=e;e:if(Mh(this)){var r=Kl(this.g);n="";var i=r.length,s=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){en(this),$r(this);var o="";break e}this.h.i=new x.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,Eg(this.j,this.u,this.A,this.m,this.W,u,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Wr(a)){var l=a;break e}}l=null}if(e=l)Dn(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ga(this,e);else{this.i=!1,this.o=3,Ut(12),en(this),$r(this);break t}}this.S?(Lh(this,u,o),ca&&this.i&&u==3&&(Sh(this.U,this.V,"tick",this.mb),this.V.start())):(Dn(this.j,this.m,o,null),ga(this,o)),u==4&&en(this),this.i&&!this.J&&(u==4?sd(this.l,this):(this.i=!1,_i(this)))}else qg(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ut(12)):(this.o=0,Ut(13)),en(this),$r(this)}}}catch{}finally{}};function Mh(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Lh(n,t,e){let r=!0,i;for(;!n.J&&n.C<e.length;)if(i=wg(n,e),i==fs){t==4&&(n.o=4,Ut(14),r=!1),Dn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==pa){n.o=4,Ut(15),Dn(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else Dn(n.j,n.m,i,null),ga(n,i);Mh(n)&&i!=fs&&i!=pa&&(n.h.g="",n.C=0),t!=4||e.length!=0||n.h.h||(n.o=1,Ut(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),oc(t),t.M=!0,Ut(11))):(Dn(n.j,n.m,e,"[Invalid Chunked Response]"),en(n),$r(n))}T.mb=function(){if(this.g){var n=Xt(this.g),t=this.g.ja();this.C<t.length&&(Bs(this),Lh(this,n,t),this.i&&n!=4&&_i(this))}};function wg(n,t){var e=n.C,r=t.indexOf(`
`,e);return r==-1?fs:(e=Number(t.substring(e,r)),isNaN(e)?pa:(r+=1,r+e>t.length?fs:(t=t.slice(r,r+e),n.C=r+e,t)))}T.cancel=function(){this.J=!0,en(this)};function _i(n){n.Y=Date.now()+n.P,xh(n,n.P)}function xh(n,t){if(n.B!=null)throw Error("WatchDog timer not null");n.B=pi(kt(n.lb,n),t)}function Bs(n){n.B&&(x.clearTimeout(n.B),n.B=null)}T.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(vg(this.j,this.A),this.L!=2&&(Zr(),Ut(17)),en(this),this.o=2,$r(this)):xh(this,this.Y-n)};function $r(n){n.l.H==0||n.J||sd(n.l,n)}function en(n){Bs(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,Ya(n.V),Ph(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function ga(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||_a(e.i,n))){if(!n.K&&_a(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)gs(e),zs(e);else break t;sc(e),Ut(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=pi(kt(e.ib,e),6e3));if(1>=Kh(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else nn(e,11)}else if((n.K||e.g==n)&&gs(e),!Wr(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(e.V=l[0],l=l[1],e.H==2)if(l[0]=="c"){e.K=l[1],e.pa=l[2];const u=l[3];u!=null&&(e.ra=u,e.l.info("VER="+e.ra));const h=l[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const f=n.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ec(s,s.h),s.h=null))}if(r.F){const R=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,tt(r.I,r.F,R))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=cd(r,r.J?r.pa:null,r.Y),o.K){zh(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Bs(a),_i(a)),r.g=o}else rd(r);0<e.j.length&&Hs(e)}else l[0]!="stop"&&l[0]!="close"||nn(e,7);else e.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?nn(e,7):ic(e):l[0]!="noop"&&e.h&&e.h.Aa(l),e.A=0)}}Zr(4)}catch{}}function Ag(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Ds(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function Rg(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Ds(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function Fh(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Ds(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=Rg(n),r=Ag(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var Uh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sg(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function on(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof on){this.h=n.h,ps(this,n.j),this.s=n.s,this.g=n.g,ms(this,n.m),this.l=n.l;var t=n.i,e=new ti;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),jl(this,e),this.o=n.o}else n&&(t=String(n).match(Uh))?(this.h=!1,ps(this,t[1]||"",!0),this.s=Lr(t[2]||""),this.g=Lr(t[3]||"",!0),ms(this,t[4]),this.l=Lr(t[5]||"",!0),jl(this,t[6]||"",!0),this.o=Lr(t[7]||"")):(this.h=!1,this.i=new ti(null,this.h))}on.prototype.toString=function(){var n=[],t=this.j;t&&n.push(xr(t,ql,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(xr(t,ql,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(xr(e,e.charAt(0)=="/"?bg:Cg,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",xr(e,Ng)),n.join("")};function Ie(n){return new on(n)}function ps(n,t,e){n.j=e?Lr(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function ms(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function jl(n,t,e){t instanceof ti?(n.i=t,Dg(n.i,n.h)):(e||(t=xr(t,kg)),n.i=new ti(t,n.h))}function tt(n,t,e){n.i.set(t,e)}function js(n){return tt(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Lr(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function xr(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,Pg),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Pg(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var ql=/[#\/\?@]/g,Cg=/[#\?:]/g,bg=/[#\?]/g,kg=/[#\?@]/g,Ng=/#/g;function ti(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function Je(n){n.g||(n.g=new Map,n.h=0,n.i&&Sg(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}T=ti.prototype;T.add=function(n,t){Je(this),this.i=null,n=Zn(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function $h(n,t){Je(n),t=Zn(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function Bh(n,t){return Je(n),t=Zn(n,t),n.g.has(t)}T.forEach=function(n,t){Je(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};T.ta=function(){Je(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};T.Z=function(n){Je(this);let t=[];if(typeof n=="string")Bh(this,n)&&(t=t.concat(this.g.get(Zn(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};T.set=function(n,t){return Je(this),this.i=null,n=Zn(this,n),Bh(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};T.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function jh(n,t,e){$h(n,t),0<e.length&&(n.i=null,n.g.set(Zn(n,t),Ba(e)),n.h+=e.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Zn(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Dg(n,t){t&&!n.j&&(Je(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&($h(this,r),jh(this,i,e))},n)),n.j=t}var Vg=class{constructor(n,t){this.g=n,this.map=t}};function qh(n){this.l=n||Og,x.PerformanceNavigationTiming?(n=x.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(x.g&&x.g.Ka&&x.g.Ka()&&x.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Og=10;function Gh(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Kh(n){return n.h?1:n.g?n.g.size:0}function _a(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function ec(n,t){n.g?n.g.add(t):n.h=t}function zh(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}qh.prototype.cancel=function(){if(this.i=Hh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Hh(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return Ba(n.i)}var Mg=class{stringify(n){return x.JSON.stringify(n,void 0)}parse(n){return x.JSON.parse(n,void 0)}};function Lg(){this.g=new Mg}function xg(n,t,e){const r=e||"";try{Fh(n,function(i,s){let o=i;di(i)&&(o=Wa(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Fg(n,t){const e=new xs;if(x.Image){const r=new Image;r.onload=Gi(zi,e,r,"TestLoadImage: loaded",!0,t),r.onerror=Gi(zi,e,r,"TestLoadImage: error",!1,t),r.onabort=Gi(zi,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=Gi(zi,e,r,"TestLoadImage: timeout",!1,t),x.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function zi(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function qs(n){this.l=n.fc||null,this.j=n.ob||!1}Et(qs,Xa);qs.prototype.g=function(){return new Gs(this.l,this.j)};qs.prototype.i=function(n){return function(){return n}}({});function Gs(n,t){yt.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=nc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Et(Gs,yt);var nc=0;T=Gs.prototype;T.open=function(n,t){if(this.readyState!=nc)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,ei(this)};T.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||x).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yi(this)),this.readyState=nc};T.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof x.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wh(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Wh(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}T.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?yi(this):ei(this),this.readyState==3&&Wh(this)}};T.Za=function(n){this.g&&(this.response=this.responseText=n,yi(this))};T.Ya=function(n){this.g&&(this.response=n,yi(this))};T.ka=function(){this.g&&yi(this)};function yi(n){n.readyState=4,n.l=null,n.j=null,n.A=null,ei(n)}T.setRequestHeader=function(n,t){this.v.append(n,t)};T.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function ei(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Gs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Ug=x.JSON.parse;function ot(n){yt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Qh,this.L=this.M=!1}Et(ot,yt);var Qh="",$g=/^https?$/i,Bg=["POST","PUT"];T=ot.prototype;T.Oa=function(n){this.M=n};T.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fa.g(),this.C=this.u?Bl(this.u):Bl(fa),this.g.onreadystatechange=kt(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){Gl(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=x.FormData&&n instanceof x.FormData,!(0<=dh(Bg,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Xh(this),0<this.B&&((this.L=jg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=kt(this.ua,this)):this.A=Ja(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Gl(this,s)}};function jg(n){return Un&&typeof n.timeout=="number"&&n.ontimeout!==void 0}T.ua=function(){typeof $a<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,wt(this,"timeout"),this.abort(8))};function Gl(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,Yh(n),Ks(n)}function Yh(n){n.F||(n.F=!0,wt(n,"complete"),wt(n,"error"))}T.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,wt(this,"complete"),wt(this,"abort"),Ks(this))};T.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ks(this,!0)),ot.$.N.call(this)};T.La=function(){this.s||(this.G||this.v||this.l?Jh(this):this.kb())};T.kb=function(){Jh(this)};function Jh(n){if(n.h&&typeof $a<"u"&&(!n.C[1]||Xt(n)!=4||n.da()!=2)){if(n.v&&Xt(n)==4)Ja(n.La,0,n);else if(wt(n,"readystatechange"),Xt(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(Uh)[1]||null;!i&&x.self&&x.self.location&&(i=x.self.location.protocol.slice(0,-1)),r=!$g.test(i?i.toLowerCase():"")}e=r}if(e)wt(n,"complete"),wt(n,"success");else{n.m=6;try{var s=2<Xt(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Yh(n)}}finally{Ks(n)}}}}function Ks(n,t){if(n.g){Xh(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||wt(n,"ready");try{e.onreadystatechange=r}catch{}}}function Xh(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(x.clearTimeout(n.A),n.A=null)}T.isActive=function(){return!!this.g};function Xt(n){return n.g?n.g.readyState:0}T.da=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};T.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),Ug(t)}};function Kl(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Qh:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function qg(n){const t={};n=(n.g&&2<=Xt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Wr(n[r]))continue;var e=pg(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}ag(t,function(r){return r.join(", ")})}T.Ia=function(){return this.m};T.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Zh(n){let t="";return qa(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function rc(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=Zh(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):tt(n,t,e))}function Vr(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function td(n){this.Ga=0,this.j=[],this.l=new xs,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Vr("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Vr("baseRetryDelayMs",5e3,n),this.hb=Vr("retryDelaySeedMs",1e4,n),this.eb=Vr("forwardChannelMaxRetries",2,n),this.xa=Vr("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new qh(n&&n.concurrentRequestLimit),this.Ja=new Lg,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}T=td.prototype;T.ra=8;T.H=1;function ic(n){if(ed(n),n.H==3){var t=n.W++,e=Ie(n.I);if(tt(e,"SID",n.K),tt(e,"RID",t),tt(e,"TYPE","terminate"),Ei(n,e),t=new gi(n,n.l,t),t.L=2,t.v=js(Ie(e)),e=!1,x.navigator&&x.navigator.sendBeacon)try{e=x.navigator.sendBeacon(t.v.toString(),"")}catch{}!e&&x.Image&&(new Image().src=t.v,e=!0),e||(t.g=ld(t.l,null),t.g.ha(t.v)),t.G=Date.now(),_i(t)}ad(n)}function zs(n){n.g&&(oc(n),n.g.cancel(),n.g=null)}function ed(n){zs(n),n.u&&(x.clearTimeout(n.u),n.u=null),gs(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&x.clearTimeout(n.m),n.m=null)}function Hs(n){if(!Gh(n.i)&&!n.m){n.m=!0;var t=n.Na;Yr||Ah(),Jr||(Yr(),Jr=!0),Qa.add(t,n),n.C=0}}function Gg(n,t){return Kh(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=pi(kt(n.Na,n,t),od(n,n.C)),n.C++,!0)}T.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new gi(this,this.l,n);let s=this.s;if(this.U&&(s?(s=gh(s),_h(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=nd(this,i,t),e=Ie(this.I),tt(e,"RID",n),tt(e,"CVER",22),this.F&&tt(e,"X-HTTP-Session-Id",this.F),Ei(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(Zh(s)))+"&"+t:this.o&&rc(e,this.o,s)),ec(this.i,i),this.bb&&tt(e,"TYPE","init"),this.P?(tt(e,"$req",t),tt(e,"SID","null"),i.aa=!0,ma(i,e,null)):ma(i,e,t),this.H=2}}else this.H==3&&(n?zl(this,n):this.j.length==0||Gh(this.i)||zl(this))};function zl(n,t){var e;t?e=t.m:e=n.W++;const r=Ie(n.I);tt(r,"SID",n.K),tt(r,"RID",e),tt(r,"AID",n.V),Ei(n,r),n.o&&n.s&&rc(r,n.o,n.s),e=new gi(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=nd(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),ec(n.i,e),ma(e,r,t)}function Ei(n,t){n.na&&qa(n.na,function(e,r){tt(t,r,e)}),n.h&&Fh({},function(e,r){tt(t,r,e)})}function nd(n,t,e){e=Math.min(n.j.length,e);var r=n.h?kt(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<e;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{xg(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function rd(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;Yr||Ah(),Jr||(Yr(),Jr=!0),Qa.add(t,n),n.A=0}}function sc(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=pi(kt(n.Ma,n),od(n,n.A)),n.A++,!0)}T.Ma=function(){if(this.u=null,id(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=pi(kt(this.jb,this),n)}};T.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ut(10),zs(this),id(this))};function oc(n){n.B!=null&&(x.clearTimeout(n.B),n.B=null)}function id(n){n.g=new gi(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=Ie(n.wa);tt(t,"RID","rpc"),tt(t,"SID",n.K),tt(t,"AID",n.V),tt(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&tt(t,"TO",n.qa),tt(t,"TYPE","xmlhttp"),Ei(n,t),n.o&&n.s&&rc(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.v=js(Ie(t)),e.s=null,e.S=!0,Oh(e,n)}T.ib=function(){this.v!=null&&(this.v=null,zs(this),sc(this),Ut(19))};function gs(n){n.v!=null&&(x.clearTimeout(n.v),n.v=null)}function sd(n,t){var e=null;if(n.g==t){gs(n),oc(n),n.g=null;var r=2}else if(_a(n.i,t))e=t.F,zh(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.s?t.s.length:0,t=Date.now()-t.G;var i=n.C;r=Fs(),wt(r,new kh(r,e)),Hs(n)}else rd(n);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&Gg(n,t)||r==2&&sc(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:nn(n,5);break;case 4:nn(n,10);break;case 3:nn(n,6);break;default:nn(n,2)}}}function od(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function nn(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=kt(n.pb,n);e||(e=new on("//www.google.com/images/cleardot.gif"),x.location&&x.location.protocol=="http"||ps(e,"https"),js(e)),Fg(e.toString(),r)}else Ut(2);n.H=0,n.h&&n.h.za(t),ad(n),ed(n)}T.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Ut(2)):(this.l.info("Failed to ping google.com"),Ut(1))};function ad(n){if(n.H=0,n.ma=[],n.h){const t=Hh(n.i);(t.length!=0||n.j.length!=0)&&(Ll(n.ma,t),Ll(n.ma,n.j),n.i.i.length=0,Ba(n.j),n.j.length=0),n.h.ya()}}function cd(n,t,e){var r=e instanceof on?Ie(e):new on(e);if(r.g!="")t&&(r.g=t+"."+r.g),ms(r,r.m);else{var i=x.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new on(null);r&&ps(s,r),t&&(s.g=t),i&&ms(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&tt(r,e,t),tt(r,"VER",n.ra),Ei(n,r),r}function ld(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e&&n.Ha&&!n.va?new ot(new qs({ob:!0})):new ot(n.va),t.Oa(n.J),t}T.isActive=function(){return!!this.h&&this.h.isActive(this)};function ud(){}T=ud.prototype;T.Ba=function(){};T.Aa=function(){};T.za=function(){};T.ya=function(){};T.isActive=function(){return!0};T.Va=function(){};function _s(){if(Un&&!(10<=Number(rg)))throw Error("Environmental error: no available transport.")}_s.prototype.g=function(n,t){return new qt(n,t)};function qt(n,t){yt.call(this),this.g=new td(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!Wr(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Wr(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new tr(this)}Et(qt,yt);qt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;Ut(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=cd(n,null,n.Y),Hs(n)};qt.prototype.close=function(){ic(this.g)};qt.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=Wa(n),n=e);t.j.push(new Vg(t.fb++,n)),t.H==3&&Hs(t)};qt.prototype.N=function(){this.g.h=null,delete this.j,ic(this.g),delete this.g,qt.$.N.call(this)};function hd(n){Za.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}Et(hd,Za);function dd(){tc.call(this),this.status=1}Et(dd,tc);function tr(n){this.g=n}Et(tr,ud);tr.prototype.Ba=function(){wt(this.g,"a")};tr.prototype.Aa=function(n){wt(this.g,new hd(n))};tr.prototype.za=function(n){wt(this.g,new dd)};tr.prototype.ya=function(){wt(this.g,"b")};function Kg(){this.blockSize=-1}function Ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Et(Ht,Kg);Ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function zo(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Ht.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)zo(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){zo(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){zo(this,r),i=0;break}}this.h=i,this.i+=t};Ht.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function Y(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var zg={};function ac(n){return-128<=n&&128>n?tg(n,function(t){return new Y([t|0],0>t?-1:0)}):new Y([n|0],0>n?-1:0)}function Zt(n){if(isNaN(n)||!isFinite(n))return Vn;if(0>n)return It(Zt(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=ya;return new Y(t,0)}function fd(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return It(fd(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=Zt(Math.pow(t,8)),r=Vn,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=Zt(Math.pow(t,s)),r=r.R(s).add(Zt(o))):(r=r.R(e),r=r.add(Zt(o)))}return r}var ya=4294967296,Vn=ac(0),Ea=ac(1),Hl=ac(16777216);T=Y.prototype;T.ea=function(){if(Kt(this))return-It(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:ya+r)*t,t*=ya}return n};T.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(_e(this))return"0";if(Kt(this))return"-"+It(this).toString(n);for(var t=Zt(Math.pow(n,6)),e=this,r="";;){var i=Es(e,t).g;e=ys(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,_e(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};T.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function _e(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function Kt(n){return n.h==-1}T.X=function(n){return n=ys(this,n),Kt(n)?-1:_e(n)?0:1};function It(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new Y(e,~n.h).add(Ea)}T.abs=function(){return Kt(this)?It(this):this};T.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new Y(e,e[e.length-1]&-2147483648?-1:0)};function ys(n,t){return n.add(It(t))}T.R=function(n){if(_e(this)||_e(n))return Vn;if(Kt(this))return Kt(n)?It(this).R(It(n)):It(It(this).R(n));if(Kt(n))return It(this.R(It(n)));if(0>this.X(Hl)&&0>n.X(Hl))return Zt(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;e[2*r+2*i]+=o*c,Hi(e,2*r+2*i),e[2*r+2*i+1]+=s*c,Hi(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,Hi(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,Hi(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new Y(e,0)};function Hi(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function Or(n,t){this.g=n,this.h=t}function Es(n,t){if(_e(t))throw Error("division by zero");if(_e(n))return new Or(Vn,Vn);if(Kt(n))return t=Es(It(n),t),new Or(It(t.g),It(t.h));if(Kt(t))return t=Es(n,It(t)),new Or(It(t.g),t.h);if(30<n.g.length){if(Kt(n)||Kt(t))throw Error("slowDivide_ only works with positive integers.");for(var e=Ea,r=t;0>=r.X(n);)e=Wl(e),r=Wl(r);var i=bn(e,1),s=bn(r,1);for(r=bn(r,2),e=bn(e,2);!_e(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=bn(r,1),e=bn(e,1)}return t=ys(n,i.R(t)),new Or(i,t)}for(i=Vn;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Zt(e),o=s.R(t);Kt(o)||0<o.X(n);)e-=r,s=Zt(e),o=s.R(t);_e(s)&&(s=Ea),i=i.add(s),n=ys(n,o)}return new Or(i,n)}T.gb=function(n){return Es(this,n).h};T.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new Y(e,this.h&n.h)};T.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new Y(e,this.h|n.h)};T.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new Y(e,this.h^n.h)};function Wl(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new Y(e,n.h)}function bn(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new Y(i,n.h)}_s.prototype.createWebChannel=_s.prototype.g;qt.prototype.send=qt.prototype.u;qt.prototype.open=qt.prototype.m;qt.prototype.close=qt.prototype.close;Us.NO_ERROR=0;Us.TIMEOUT=8;Us.HTTP_ERROR=6;Nh.COMPLETE="complete";Dh.EventType=mi;mi.OPEN="a";mi.CLOSE="b";mi.ERROR="c";mi.MESSAGE="d";yt.prototype.listen=yt.prototype.O;ot.prototype.listenOnce=ot.prototype.P;ot.prototype.getLastError=ot.prototype.Sa;ot.prototype.getLastErrorCode=ot.prototype.Ia;ot.prototype.getStatus=ot.prototype.da;ot.prototype.getResponseJson=ot.prototype.Wa;ot.prototype.getResponseText=ot.prototype.ja;ot.prototype.send=ot.prototype.ha;ot.prototype.setWithCredentials=ot.prototype.Oa;Ht.prototype.digest=Ht.prototype.l;Ht.prototype.reset=Ht.prototype.reset;Ht.prototype.update=Ht.prototype.j;Y.prototype.add=Y.prototype.add;Y.prototype.multiply=Y.prototype.R;Y.prototype.modulo=Y.prototype.gb;Y.prototype.compare=Y.prototype.X;Y.prototype.toNumber=Y.prototype.ea;Y.prototype.toString=Y.prototype.toString;Y.prototype.getBits=Y.prototype.D;Y.fromNumber=Zt;Y.fromString=fd;var Hg=function(){return new _s},Wg=function(){return Fs()},Ho=Us,Qg=Nh,Yg=pn,Ql={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Wi=Dh,Jg=ot,Xg=Ht,On=Y;const Yl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let er="10.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new xa("@firebase/firestore");function Jl(){return un.logLevel}function P(n,...t){if(un.logLevel<=z.DEBUG){const e=t.map(cc);un.debug(`Firestore (${er}): ${n}`,...e)}}function we(n,...t){if(un.logLevel<=z.ERROR){const e=t.map(cc);un.error(`Firestore (${er}): ${n}`,...e)}}function $n(n,...t){if(un.logLevel<=z.WARN){const e=t.map(cc);un.warn(`Firestore (${er}): ${n}`,...e)}}function cc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function L(n="Unexpected state"){const t=`FIRESTORE (${er}) INTERNAL ASSERTION FAILED: `+n;throw we(t),new Error(t)}function nt(n,t){n||L()}function $(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class md{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=o_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function H(n,t){return n<t?-1:n>t?1:0}function Bn(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ni{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(),r===void 0?r=t.length-e:r>t.length-e&&L(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return ni.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ni?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class et extends ni{construct(t,e,r){return new et(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new S(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new et(e)}static emptyPath(){return new et([])}}const a_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends ni{construct(t,e,r){return new bt(t,e,r)}static isValidIdentifier(t){return a_.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new S(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new S(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new S(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new S(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new bt(e)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function vi(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==h_)throw n;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof _?e:_.resolve(e)}catch(e){return _.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):_.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):_.reject(e)}static resolve(t){return new _((e,r)=>{e(t)})}static reject(t){return new _((e,r)=>{r(t)})}static waitFor(t){return new _((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},c=>r(c))}),o=!0,s===i&&e()})}static or(t){let e=_.resolve(!1);for(const r of t)e=e.next(i=>i?_.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new _((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;e(t[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(t,e){return new _((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}function Ti(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class lc{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}lc.ae=-1;function Ws(n){return n==null}function vs(n){return n===0&&1/n==-1/0}function f_(n){return typeof n=="number"&&Number.isInteger(n)&&!vs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function mn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function gd(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e){this.comparator=t,this.root=e||Tt.EMPTY}insert(t,e){return new it(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(t){return new it(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qi(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qi(this.root,t,this.comparator,!0)}}class Qi{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Tt{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??Tt.RED,this.left=i??Tt.EMPTY,this.right=s??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new Tt(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,r,i,s){return this}insert(t,e,r){return new Tt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Bt{constructor(t){this.fields=t,t.sort(bt.comparator)}static empty(){return new Bt([])}unionWith(t){let e=new Dt(bt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Bt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Bn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */function uc(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function hc(n){const t=n.mapValue.fields.__previous_value__;return uc(t)?hc(t):t}function ri(n){const t=We(n.mapValue.fields.__local_write_time__.timestampValue);return new mt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(t,e,r,i,s,o,a,c,l){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class ii{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ii("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ii&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function dn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?uc(n)?4:g_(n)?9007199254740991:10:L()}function ie(n,t){if(n===t)return!0;const e=dn(n);if(e!==dn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return ri(n).isEqual(ri(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=We(i.timestampValue),a=We(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return hn(i.bytesValue).isEqual(hn(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return ut(i.geoPointValue.latitude)===ut(s.geoPointValue.latitude)&&ut(i.geoPointValue.longitude)===ut(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ut(i.integerValue)===ut(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ut(i.doubleValue),a=ut(s.doubleValue);return o===a?vs(o)===vs(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Bn(n.arrayValue.values||[],t.arrayValue.values||[],ie);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Xl(o)!==Xl(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!ie(o[c],a[c])))return!1;return!0}(n,t);default:return L()}}function si(n,t){return(n.values||[]).find(e=>ie(e,t))!==void 0}function jn(n,t){if(n===t)return 0;const e=dn(n),r=dn(t);if(e!==r)return H(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=ut(s.integerValue||s.doubleValue),c=ut(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,t);case 3:return tu(n.timestampValue,t.timestampValue);case 4:return tu(ri(n),ri(t));case 5:return H(n.stringValue,t.stringValue);case 6:return function(s,o){const a=hn(s),c=hn(o);return a.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=H(a[l],c[l]);if(u!==0)return u}return H(a.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=H(ut(s.latitude),ut(o.latitude));return a!==0?a:H(ut(s.longitude),ut(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=jn(a[l],c[l]);if(u)return u}return H(a.length,c.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Yi.mapValue&&o===Yi.mapValue)return 0;if(s===Yi.mapValue)return 1;if(o===Yi.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=H(c[h],u[h]);if(d!==0)return d;const f=jn(a[c[h]],l[u[h]]);if(f!==0)return f}return H(c.length,u.length)}(n.mapValue,t.mapValue);default:throw L()}}function tu(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return H(n,t);const e=We(n),r=We(t),i=H(e.seconds,r.seconds);return i!==0?i:H(e.nanos,r.nanos)}function qn(n){return va(n)}function va(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=We(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return hn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return V.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=va(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${va(e.fields[o])}`;return i+"}"}(n.mapValue):L()}function eu(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Ta(n){return!!n&&"integerValue"in n}function dc(n){return!!n&&"arrayValue"in n}function nu(n){return!!n&&"nullValue"in n}function ru(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ns(n){return!!n&&"mapValue"in n}function Br(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return mn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Br(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Br(n.arrayValue.values[e]);return t}return Object.assign({},n)}function g_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.value=t}static empty(){return new $t({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ns(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Br(e)}setAll(t){let e=bt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=Br(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());ns(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ie(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];ns(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){mn(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new $t(Br(this.value))}}function yd(n){const t=[];return mn(n.fields,(e,r)=>{const i=new bt([e]);if(ns(r)){const s=yd(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Bt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Ct(t,0,F.min(),F.min(),F.min(),$t.empty(),0)}static newFoundDocument(t,e,r,i){return new Ct(t,1,e,F.min(),r,i,0)}static newNoDocument(t,e){return new Ct(t,2,e,F.min(),F.min(),$t.empty(),0)}static newUnknownDocument(t,e){return new Ct(t,3,e,F.min(),F.min(),$t.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ct&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ts{constructor(t,e){this.position=t,this.inclusive=e}}function iu(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),e.key):r=jn(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function su(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ie(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class jr{constructor(t,e="asc"){this.field=t,this.dir=e}}function __(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ed{}class dt extends Ed{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new E_(t,e,r):e==="array-contains"?new I_(t,r):e==="in"?new w_(t,r):e==="not-in"?new A_(t,r):e==="array-contains-any"?new R_(t,r):new dt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new v_(t,r):new T_(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(jn(e,this.value)):e!==null&&dn(this.value)===dn(e)&&this.matchesComparison(jn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Wt extends Ed{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Wt(t,e)}matches(t){return vd(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(e=>e.isInequality());return t!==null?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function vd(n){return n.op==="and"}function Td(n){return y_(n)&&vd(n)}function y_(n){for(const t of n.filters)if(t instanceof Wt)return!1;return!0}function Ia(n){if(n instanceof dt)return n.field.canonicalString()+n.op.toString()+qn(n.value);if(Td(n))return n.filters.map(t=>Ia(t)).join(",");{const t=n.filters.map(e=>Ia(e)).join(",");return`${n.op}(${t})`}}function Id(n,t){return n instanceof dt?function(r,i){return i instanceof dt&&r.op===i.op&&r.field.isEqual(i.field)&&ie(r.value,i.value)}(n,t):n instanceof Wt?function(r,i){return i instanceof Wt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Id(o,i.filters[a]),!0):!1}(n,t):void L()}function wd(n){return n instanceof dt?function(e){return`${e.field.canonicalString()} ${e.op} ${qn(e.value)}`}(n):n instanceof Wt?function(e){return e.op.toString()+" {"+e.getFilters().map(wd).join(" ,")+"}"}(n):"Filter"}class E_ extends dt{constructor(t,e,r){super(t,e,r),this.key=V.fromName(r.referenceValue)}matches(t){const e=V.comparator(t.key,this.key);return this.matchesComparison(e)}}class v_ extends dt{constructor(t,e){super(t,"in",e),this.keys=Ad("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class T_ extends dt{constructor(t,e){super(t,"not-in",e),this.keys=Ad("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ad(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>V.fromName(r.referenceValue))}class I_ extends dt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return dc(e)&&si(e.arrayValue,this.value)}}class w_ extends dt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&si(this.value.arrayValue,e)}}class A_ extends dt{constructor(t,e){super(t,"not-in",e)}matches(t){if(si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!si(this.value.arrayValue,e)}}class R_ extends dt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!dc(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>si(this.value.arrayValue,r))}}/**
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
 */class S_{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function ou(n,t=null,e=[],r=[],i=null,s=null,o=null){return new S_(n,t,e,r,i,s,o)}function fc(n){const t=$(n);if(t.he===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ia(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ws(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>qn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>qn(r)).join(",")),t.he=e}return t.he}function pc(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!__(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Id(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!su(n.startAt,t.startAt)&&su(n.endAt,t.endAt)}function wa(n){return V.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function P_(n,t,e,r,i,s,o,a){return new Ii(n,t,e,r,i,s,o,a)}function Rd(n){return new Ii(n)}function au(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Sd(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function mc(n){for(const t of n.filters){const e=t.getFirstInequalityField();if(e!==null)return e}return null}function Pd(n){return n.collectionGroup!==null}function qr(n){const t=$(n);if(t.Pe===null){t.Pe=[];const e=mc(t),r=Sd(t);if(e!==null&&r===null)e.isKeyField()||t.Pe.push(new jr(e)),t.Pe.push(new jr(bt.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new jr(bt.keyField(),s))}}}return t.Pe}function Ae(n){const t=$(n);return t.Ie||(t.Ie=C_(t,qr(n))),t.Ie}function C_(n,t){if(n.limitType==="F")return ou(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new jr(i.field,s)});const e=n.endAt?new Ts(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ts(n.startAt.position,n.startAt.inclusive):null;return ou(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Aa(n,t){t.getFirstInequalityField(),mc(n);const e=n.filters.concat([t]);return new Ii(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ra(n,t,e){return new Ii(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Qs(n,t){return pc(Ae(n),Ae(t))&&n.limitType===t.limitType}function Cd(n){return`${fc(Ae(n))}|lt:${n.limitType}`}function Sa(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>wd(i)).join(", ")}]`),Ws(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>qn(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>qn(i)).join(",")),`Target(${r})`}(Ae(n))}; limitType=${n.limitType})`}function Ys(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):V.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of qr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=iu(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,qr(r),i)||r.endAt&&!function(o,a,c){const l=iu(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,qr(r),i))}(n,t)}function b_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function bd(n){return(t,e)=>{let r=!1;for(const i of qr(n)){const s=k_(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function k_(n,t,e){const r=n.field.isKeyField()?V.comparator(t.key,e.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?jn(c,l):L()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){mn(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return gd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=new it(V.comparator);function Re(){return N_}const kd=new it(V.comparator);function Fr(...n){let t=kd;for(const e of n)t=t.insert(e.key,e);return t}function Nd(n){let t=kd;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function rn(){return Gr()}function Dd(){return Gr()}function Gr(){return new nr(n=>n.toString(),(n,t)=>n.isEqual(t))}const D_=new it(V.comparator),V_=new Dt(V.comparator);function j(...n){let t=V_;for(const e of n)t=t.add(e);return t}const O_=new Dt(H);function M_(){return O_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vs(t)?"-0":t}}function Od(n){return{integerValue:""+n}}function L_(n,t){return f_(t)?Od(t):Vd(n,t)}/**
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
 */class Js{constructor(){this._=void 0}}function x_(n,t,e){return n instanceof Is?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&uc(s)&&(s=hc(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof oi?Ld(n,t):n instanceof ai?xd(n,t):function(i,s){const o=Md(i,s),a=cu(o)+cu(i.Ee);return Ta(o)&&Ta(i.Ee)?Od(a):Vd(i.serializer,a)}(n,t)}function F_(n,t,e){return n instanceof oi?Ld(n,t):n instanceof ai?xd(n,t):e}function Md(n,t){return n instanceof ws?function(r){return Ta(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Is extends Js{}class oi extends Js{constructor(t){super(),this.elements=t}}function Ld(n,t){const e=Fd(t);for(const r of n.elements)e.some(i=>ie(i,r))||e.push(r);return{arrayValue:{values:e}}}class ai extends Js{constructor(t){super(),this.elements=t}}function xd(n,t){let e=Fd(t);for(const r of n.elements)e=e.filter(i=>!ie(i,r));return{arrayValue:{values:e}}}class ws extends Js{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function cu(n){return ut(n.integerValue||n.doubleValue)}function Fd(n){return dc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function U_(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof oi&&i instanceof oi||r instanceof ai&&i instanceof ai?Bn(r.elements,i.elements,ie):r instanceof ws&&i instanceof ws?ie(r.Ee,i.Ee):r instanceof Is&&i instanceof Is}(n.transform,t.transform)}class $_{constructor(t,e){this.version=t,this.transformResults=e}}class te{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new te}static exists(t){return new te(void 0,t)}static updateTime(t){return new te(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function rs(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Xs{}function Ud(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Bd(n.key,te.none()):new wi(n.key,n.data,te.none());{const e=n.data,r=$t.empty();let i=new Dt(bt.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Xe(n.key,r,new Bt(i.toArray()),te.none())}}function B_(n,t,e){n instanceof wi?function(i,s,o){const a=i.value.clone(),c=uu(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Xe?function(i,s,o){if(!rs(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=uu(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll($d(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Kr(n,t,e,r){return n instanceof wi?function(s,o,a,c){if(!rs(s.precondition,o))return a;const l=s.value.clone(),u=hu(s.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,t,e,r):n instanceof Xe?function(s,o,a,c){if(!rs(s.precondition,o))return a;const l=hu(s.fieldTransforms,c,o),u=o.data;return u.setAll($d(s)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(s,o,a){return rs(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function j_(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=Md(r.transform,i||null);s!=null&&(e===null&&(e=$t.empty()),e.set(r.field,s))}return e||null}function lu(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Bn(r,i,(s,o)=>U_(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class wi extends Xs{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xe extends Xs{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function $d(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function uu(n,t,e){const r=new Map;nt(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,F_(o,a,e[i]))}return r}function hu(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,x_(s,o,t))}return r}class Bd extends Xs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class q_ extends Xs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&B_(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Kr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Kr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Dd();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const c=Ud(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&Bn(this.mutations,t.mutations,(e,r)=>lu(e,r))&&Bn(this.baseMutations,t.baseMutations,(e,r)=>lu(e,r))}}class gc{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){nt(t.mutations.length===r.length);let i=function(){return D_}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new gc(t,e,r,i)}}/**
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
 */class K_{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var lt,K;function H_(n){switch(n){default:return L();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function jd(n){if(n===void 0)return we("GRPC error has no .code"),p.UNKNOWN;switch(n){case lt.OK:return p.OK;case lt.CANCELLED:return p.CANCELLED;case lt.UNKNOWN:return p.UNKNOWN;case lt.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case lt.INTERNAL:return p.INTERNAL;case lt.UNAVAILABLE:return p.UNAVAILABLE;case lt.UNAUTHENTICATED:return p.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case lt.NOT_FOUND:return p.NOT_FOUND;case lt.ALREADY_EXISTS:return p.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return p.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case lt.ABORTED:return p.ABORTED;case lt.OUT_OF_RANGE:return p.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return p.UNIMPLEMENTED;case lt.DATA_LOSS:return p.DATA_LOSS;default:return L()}}(K=lt||(lt={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Q_=new On([4294967295,4294967295],0);function du(n){const t=W_().encode(n),e=new Xg;return e.update(t),new Uint8Array(e.digest())}function fu(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new On([e,r],0),new On([i,s],0)]}class _c{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Ur(`Invalid padding: ${e}`);if(r<0)throw new Ur(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ur(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Ur(`Invalid padding when bitmap length is 0: ${e}`);this.Ae=8*t.length-e,this.Re=On.fromNumber(this.Ae)}Ve(t,e,r){let i=t.add(e.multiply(On.fromNumber(r)));return i.compare(Q_)===1&&(i=new On([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ae===0)return!1;const e=du(t),[r,i]=fu(e);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new _c(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Ae===0)return;const e=du(t),[r,i]=fu(e);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Ur extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Ai.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Zs(F.min(),i,new it(H),Re(),j())}}class Ai{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Ai(r,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t,e,r,i){this.ge=t,this.removedTargetIds=e,this.key=r,this.pe=i}}class qd{constructor(t,e){this.targetId=t,this.ye=e}}class Gd{constructor(t,e,r=Ot.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class pu{constructor(){this.we=0,this.Se=gu(),this.be=Ot.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(t){t.approximateByteSize()>0&&(this.ve=!0,this.be=t)}xe(){let t=j(),e=j(),r=j();return this.Se.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:L()}}),new Ai(this.be,this.De,t,e,r)}Oe(){this.ve=!1,this.Se=gu()}Ne(t,e){this.ve=!0,this.Se=this.Se.insert(t,e)}Be(t){this.ve=!0,this.Se=this.Se.remove(t)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class Y_{constructor(t){this.Qe=t,this.Ke=new Map,this.$e=Re(),this.Ue=mu(),this.We=new it(H)}Ge(t){for(const e of t.ge)t.pe&&t.pe.isFoundDocument()?this.ze(e,t.pe):this.je(e,t.key,t.pe);for(const e of t.removedTargetIds)this.je(e,t.key,t.pe)}He(t){this.forEachTarget(t,e=>{const r=this.Je(e);switch(t.state){case 0:this.Ye(e)&&r.Me(t.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(t.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(e);break;case 3:this.Ye(e)&&(r.qe(),r.Me(t.resumeToken));break;case 4:this.Ye(e)&&(this.Ze(e),r.Me(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ke.forEach((r,i)=>{this.Ye(i)&&e(i)})}Xe(t){const e=t.targetId,r=t.ye.count,i=this.et(e);if(i){const s=i.target;if(wa(s))if(r===0){const o=new V(s.path);this.je(e,o,Ct.newNoDocument(o,F.min()))}else nt(r===1);else{const o=this.tt(e);if(o!==r){const a=this.nt(t),c=a?this.rt(a,t,o):1;if(c!==0){this.Ze(e);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(e,l)}}}}}nt(t){const e=t.ye.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let o,a;try{o=hn(r).toUint8Array()}catch(c){if(c instanceof _d)return $n("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new _c(o,i,s)}catch(c){return $n(c instanceof Ur?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(t,e,r){return e.ye.count===r-this.ot(t,e.targetId)?0:2}ot(t,e){const r=this.Qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.je(e,s,null),i++)}),i}_t(t){const e=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&wa(a.target)){const c=new V(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,Ct.newNoDocument(c,t))}s.Fe&&(e.set(o,s.xe()),s.Oe())}});let r=j();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(t));const i=new Zs(t,e,this.We,this.$e,r);return this.$e=Re(),this.Ue=mu(),this.We=new it(H),i}ze(t,e){if(!this.Ye(t))return;const r=this.ut(t,e.key)?2:0;this.Je(t).Ne(e.key,r),this.$e=this.$e.insert(e.key,e),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}je(t,e,r){if(!this.Ye(t))return;const i=this.Je(t);this.ut(t,e)?i.Ne(e,1):i.Be(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),r&&(this.$e=this.$e.insert(e,r))}removeTarget(t){this.Ke.delete(t)}tt(t){const e=this.Je(t).xe();return this.Qe.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Le(t){this.Je(t).Le()}Je(t){let e=this.Ke.get(t);return e||(e=new pu,this.Ke.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new Dt(H),this.Ue=this.Ue.insert(t,e)),e}Ye(t){const e=this.et(t)!==null;return e||P("WatchChangeAggregator","Detected inactive target",t),e}et(t){const e=this.Ke.get(t);return e&&e.Ce?null:this.Qe.lt(t)}Ze(t){this.Ke.set(t,new pu),this.Qe.getRemoteKeysForTarget(t).forEach(e=>{this.je(t,e,null)})}ut(t,e){return this.Qe.getRemoteKeysForTarget(t).has(e)}}function mu(){return new it(V.comparator)}function gu(){return new it(V.comparator)}const J_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),X_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Z_=(()=>({and:"AND",or:"OR"}))();class ty{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Pa(n,t){return n.useProto3Json||Ws(t)?t:{value:t}}function As(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Kd(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ey(n,t){return As(n,t.toTimestamp())}function ee(n){return nt(!!n),F.fromTimestamp(function(e){const r=We(e);return new mt(r.seconds,r.nanos)}(n))}function yc(n,t){return function(r){return new et(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(t).canonicalString()}function zd(n){const t=et.fromString(n);return nt(Yd(t)),t}function Ca(n,t){return yc(n.databaseId,t.path)}function Wo(n,t){const e=zd(t);if(e.get(1)!==n.databaseId.projectId)throw new S(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new S(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new V(Hd(e))}function ba(n,t){return yc(n.databaseId,t)}function ny(n){const t=zd(n);return t.length===4?et.emptyPath():Hd(t)}function ka(n){return new et(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Hd(n){return nt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function _u(n,t,e){return{name:Ca(n,t),fields:e.value.mapValue.fields}}function ry(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(nt(u===void 0||typeof u=="string"),Ot.fromBase64String(u||"")):(nt(u===void 0||u instanceof Uint8Array),Ot.fromUint8Array(u||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?p.UNKNOWN:jd(l.code);return new S(u,l.message||"")}(o);e=new Gd(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wo(n,r.document.name),s=ee(r.document.updateTime),o=r.document.createTime?ee(r.document.createTime):F.min(),a=new $t({mapValue:{fields:r.document.fields}}),c=Ct.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];e=new is(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Wo(n,r.document),s=r.readTime?ee(r.readTime):F.min(),o=Ct.newNoDocument(i,s),a=r.removedTargetIds||[];e=new is([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Wo(n,r.document),s=r.removedTargetIds||[];e=new is([],s,i,null)}else{if(!("filter"in t))return L();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new z_(i,s),a=r.targetId;e=new qd(a,o)}}return e}function iy(n,t){let e;if(t instanceof wi)e={update:_u(n,t.key,t.value)};else if(t instanceof Bd)e={delete:Ca(n,t.key)};else if(t instanceof Xe)e={update:_u(n,t.key,t.data),updateMask:fy(t.fieldMask)};else{if(!(t instanceof q_))return L();e={verify:Ca(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Is)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof oi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ai)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ws)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw L()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ey(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:L()}(n,t.precondition)),e}function sy(n,t){return n&&n.length>0?(nt(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?ee(i.updateTime):ee(s);return o.isEqual(F.min())&&(o=ee(s)),new $_(o,i.transformResults||[])}(e,t))):[]}function oy(n,t){return{documents:[ba(n,t.path)]}}function ay(n,t){const e={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(e.parent=ba(n,r),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=ba(n,r.popLast()),e.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Qd(Wt.create(c,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:kn(h.field),direction:uy(h.dir)}}(l))}(t.orderBy);s&&(e.structuredQuery.orderBy=s);const o=Pa(n,t.limit);return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),e}function cy(n){let t=ny(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){nt(r===1);const u=e.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let s=[];e.where&&(s=function(h){const d=Wd(h);return d instanceof Wt&&Td(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(y){return new jr(Nn(y.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ws(d)?null:d}(e.limit));let c=null;e.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Ts(f,d)}(e.startAt));let l=null;return e.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new Ts(f,d)}(e.endAt)),P_(t,i,o,s,a,"F",c,l)}function ly(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Wd(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Nn(e.unaryFilter.field);return dt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Nn(e.unaryFilter.field);return dt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Nn(e.unaryFilter.field);return dt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Nn(e.unaryFilter.field);return dt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(n):n.fieldFilter!==void 0?function(e){return dt.create(Nn(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Wt.create(e.compositeFilter.filters.map(r=>Wd(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(n):L()}function uy(n){return J_[n]}function hy(n){return X_[n]}function dy(n){return Z_[n]}function kn(n){return{fieldPath:n.canonicalString()}}function Nn(n){return bt.fromServerFormat(n.fieldPath)}function Qd(n){return n instanceof dt?function(e){if(e.op==="=="){if(ru(e.value))return{unaryFilter:{field:kn(e.field),op:"IS_NAN"}};if(nu(e.value))return{unaryFilter:{field:kn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ru(e.value))return{unaryFilter:{field:kn(e.field),op:"IS_NOT_NAN"}};if(nu(e.value))return{unaryFilter:{field:kn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kn(e.field),op:hy(e.op),value:e.value}}}(n):n instanceof Wt?function(e){const r=e.getFilters().map(i=>Qd(i));return r.length===1?r[0]:{compositeFilter:{op:dy(e.op),filters:r}}}(n):L()}function fy(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Yd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class py{constructor(t){this.ht=t}}function my(n){const t=cy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ra(t,t.limit,"L"):t}/**
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
 */class gy{constructor(){this._n=new _y}addToCollectionParentIndex(t,e){return this._n.add(e),_.resolve()}getCollectionParents(t,e){return _.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return _.resolve()}deleteFieldIndex(t,e){return _.resolve()}getDocumentsMatchingTarget(t,e){return _.resolve(null)}getIndexType(t,e){return _.resolve(0)}getFieldIndexes(t,e){return _.resolve([])}getNextCollectionGroupToUpdate(t){return _.resolve(null)}getMinOffset(t,e){return _.resolve(He.min())}getMinOffsetFromCollectionGroup(t,e){return _.resolve(He.min())}updateCollectionGroup(t,e,r){return _.resolve()}updateIndexEntries(t,e){return _.resolve()}}class _y{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new Dt(et.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Dt(et.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Gn(0)}static Bn(){return new Gn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(){this.changes=new nr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ct.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?_.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vy{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Kr(r.mutation,i,Bt.empty(),mt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,j()).next(()=>r))}getLocalViewOfDocuments(t,e,r=j()){const i=rn();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=Fr();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=rn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,j()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=Re();const o=Gr(),a=function(){return Gr()}();return e.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Xe)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Kr(u.mutation,l,u.mutation.getFieldMask(),mt.now())):o.set(l.key,Bt.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),e.forEach((l,u)=>{var h;return a.set(l,new Ey(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=Gr();let i=new it((o,a)=>o-a),s=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=e.get(c);if(l===null)return;let u=r.get(c)||Bt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||j()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Dd();u.forEach(d=>{if(!s.has(d)){const f=Ud(e.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r){return function(s){return V.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Pd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r):this.getDocumentsMatchingCollectionQuery(t,e,r)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):_.resolve(rn());let a=-1,c=s;return o.next(l=>_.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?_.resolve():this.remoteDocumentCache.getEntry(t,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(t,l,s)).next(()=>this.computeViews(t,c,l,j())).next(u=>({batchId:a,changes:Nd(u)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new V(e)).next(r=>{let i=Fr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r){const i=e.collectionGroup;let s=Fr();return this.indexManager.getCollectionParents(t,i).next(o=>_.forEach(o,a=>{const c=function(u,h){return new Ii(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(e,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,e,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i))).next(s=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,Ct.newInvalidDocument(l)))});let o=Fr();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Kr(l.mutation,c,Bt.empty(),mt.now()),Ys(e,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return _.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:ee(i.createTime)}}(e)),_.resolve()}getNamedQuery(t,e){return _.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:my(i.bundledQuery),readTime:ee(i.readTime)}}(e)),_.resolve()}}/**
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
 */class Iy{constructor(){this.overlays=new it(V.comparator),this.hr=new Map}getOverlay(t,e){return _.resolve(this.overlays.get(e))}getOverlays(t,e){const r=rn();return _.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.It(t,e,s)}),_.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),_.resolve()}getOverlaysForCollection(t,e,r){const i=rn(),s=e.length+1,o=new V(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return _.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new it((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=rn(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=rn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return _.resolve(a)}It(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new K_(e,r));let s=this.hr.get(e);s===void 0&&(s=j(),this.hr.set(e,s)),this.hr.set(e,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this.Pr=new Dt(_t.Ir),this.Tr=new Dt(_t.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new _t(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new _t(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new V(new et([])),r=new _t(e,t),i=new _t(e,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new V(new et([])),r=new _t(e,t),i=new _t(e,t+1);let s=j();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new _t(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class _t{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return V.comparator(t.key,e.key)||H(t.pr,e.pr)}static Er(t,e){return H(t.pr,e.pr)||V.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new Dt(_t.Ir)}checkEmpty(t){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new G_(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new _t(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(t,e){return _.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.br(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new _t(e,0),i=new _t(e,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Dt(H);return e.forEach(i=>{const s=new _t(i,0),o=new _t(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),_.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new _t(new V(s),0);let a=new Dt(H);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.pr)),!0)},o),_.resolve(this.Dr(a))}Dr(t){const e=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){nt(this.vr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return _.forEach(e.mutations,i=>{const s=new _t(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new _t(e,0),i=this.wr.firstAfterOrEqual(r);return _.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,_.resolve()}vr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(t){this.Cr=t,this.docs=function(){return new it(V.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return _.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(e))}getEntries(t,e){let r=Re();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ct.newInvalidDocument(i))}),_.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=Re();const o=e.path,a=new V(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||u_(l_(u),r)<=0||(i.has(u.key)||Ys(e,u))&&(s=s.insert(u.key,u.mutableCopy()))}return _.resolve(s)}getAllFromCollectionGroup(t,e,r,i){L()}Fr(t,e){return _.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Ry(this)}getSize(t){return _.resolve(this.size)}}class Ry extends yy{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),_.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(t){this.persistence=t,this.Mr=new nr(e=>fc(e),pc),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ec,this.targetCount=0,this.Br=Gn.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,i)=>e(i)),_.resolve()}getLastRemoteSnapshotVersion(t){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return _.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),_.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new Gn(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,_.resolve()}updateTargetData(t,e){return this.qn(e),_.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,_.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(t){return _.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return _.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),_.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),_.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return _.resolve(r)}containsKey(t,e){return _.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(t,e){this.Lr={},this.overlays={},this.kr=new lc(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Sy(this),this.indexManager=new gy,this.remoteDocumentCache=function(i){return new Ay(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new py(e),this.$r=new Ty(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Iy,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Lr[t.toKey()];return r||(r=new wy(e,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){P("MemoryPersistence","Starting transaction:",t);const i=new Cy(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,e){return _.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,e)))}}class Cy extends d_{constructor(t){super(),this.currentSequenceNumber=t}}class vc{constructor(t){this.persistence=t,this.zr=new Ec,this.jr=null}static Hr(t){return new vc(t)}get Jr(){if(this.jr)return this.jr;throw L()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),_.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),_.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),_.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Jr,r=>{const i=V.fromPath(r);return this.Yr(t,i).next(s=>{s||e.removeEntry(i,F.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return _.or([()=>_.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=i}static Ki(t,e){let r=j(),i=j();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Tc(t,e.fromCache,r,i)}}/**
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
 */class by{constructor(){this.$i=!1}initialize(t,e){this.Ui=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,i){return this.Wi(t,e).next(s=>s||this.Gi(t,e,i,r)).next(s=>s||this.zi(t,e))}Wi(t,e){if(au(e))return _.resolve(null);let r=Ae(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Ra(e,null,"F"),r=Ae(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=j(...s);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const l=this.ji(e,a);return this.Hi(e,l,o,c.readTime)?this.Wi(t,Ra(e,null,"F")):this.Ji(t,l,e,c)}))})))}Gi(t,e,r,i){return au(e)||i.isEqual(F.min())?this.zi(t,e):this.Ui.getDocuments(t,r).next(s=>{const o=this.ji(e,s);return this.Hi(e,o,r,i)?this.zi(t,e):(Jl()<=z.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Sa(e)),this.Ji(t,o,e,c_(i,-1)))})}ji(t,e){let r=new Dt(bd(t));return e.forEach((i,s)=>{Ys(t,s)&&(r=r.add(s))}),r}Hi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}zi(t,e){return Jl()<=z.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",Sa(e)),this.Ui.getDocumentsMatchingQuery(t,e,He.min())}Ji(t,e,r,i){return this.Ui.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(t,e,r,i){this.persistence=t,this.Yi=e,this.serializer=i,this.Zi=new it(H),this.Xi=new nr(s=>fc(s),pc),this.es=new Map,this.ts=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this.ns(r)}ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new vy(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Zi))}}function Ny(n,t,e,r){return new ky(n,t,e,r)}async function Jd(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.ns(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=j();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return e.localDocuments.getDocuments(r,c).next(l=>({rs:l,removedBatchIds:o,addedBatchIds:a}))})})}function Dy(n,t){const e=$(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.ts.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=_.resolve();return d.forEach(y=>{f=f.next(()=>u.getEntry(c,y)).next(R=>{const m=l.docVersions.get(y);nt(m!==null),R.version.compareTo(m)<0&&(h.applyToRemoteDocument(R,l),R.isValidDocument()&&(R.setReadTime(l.commitVersion),u.addEntry(R)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=j();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Xd(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Vy(n,t){const e=$(n),r=t.snapshotVersion;let i=e.Zi;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.ts.newChangeBuffer({trackRemovals:!0});i=e.Zi;const a=[];t.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(e.Qr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>e.Qr.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(Ot.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(R,m,C){return R.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,f,u)&&a.push(e.Qr.updateTargetData(s,f))});let c=Re(),l=j();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(Oy(s,o,t.documentUpdates).next(u=>{c=u.ss,l=u.os})),!r.isEqual(F.min())){const u=e.Qr.getLastRemoteSnapshotVersion(s).next(h=>e.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(e.Zi=i,s))}function Oy(n,t,e){let r=j(),i=j();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=Re();return e.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(F.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ss:o,os:i}})}function My(n,t){const e=$(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Ly(n,t){const e=$(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Qr.getTargetData(r,t).next(s=>s?(i=s,_.resolve(i)):e.Qr.allocateTargetId(r).next(o=>(i=new Fe(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.Zi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Zi=e.Zi.insert(r.targetId,r),e.Xi.set(t,r.targetId)),r})}async function Na(n,t,e){const r=$(n),i=r.Zi.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ti(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Zi=r.Zi.remove(t),r.Xi.delete(i.target)}function yu(n,t,e){const r=$(n);let i=F.min(),s=j();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=$(c),d=h.Xi.get(u);return d!==void 0?_.resolve(h.Zi.get(d)):h.Qr.getTargetData(l,u)}(r,o,Ae(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,t,e?i:F.min(),e?s:j())).next(a=>(xy(r,b_(t),a),{documents:a,_s:s})))}function xy(n,t,e){let r=n.es.get(t)||F.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.es.set(t,r)}class Eu{constructor(){this.activeTargetIds=M_()}Is(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ts(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ps(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Fy{constructor(){this.Ys=new Eu,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.Ys.Is(t),this.Zs[t]||"not-current"}updateQueryState(t,e,r){this.Zs[t]=e}removeLocalQueryTarget(t){this.Ys.Ts(t)}isLocalQueryTarget(t){return this.Ys.activeTargetIds.has(t)}clearQueryState(t){delete this.Zs[t]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(t){return this.Ys.activeTargetIds.has(t)}start(){return this.Ys=new Eu,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Uy{Xs(t){}shutdown(){}}/**
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
 */class vu{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}io(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ji=null;function Qo(){return Ji===null?Ji=function(){return 268435456+Math.round(2147483648*Math.random())}():Ji++,"0x"+Ji.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class By{constructor(t){this._o=t._o,this.ao=t.ao}uo(t){this.co=t}lo(t){this.ho=t}onMessage(t){this.Po=t}close(){this.ao()}send(t){this._o(t)}Io(){this.co()}To(t){this.ho(t)}Eo(t){this.Po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="WebChannelConnection";class jy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+e.host,this.Ro=`projects/${i}/databases/${s}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get mo(){return!1}fo(e,r,i,s,o){const a=Qo(),c=this.po(e,r);P("RestConnection",`Sending RPC '${e}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(l,s,o),this.wo(e,c,l,i).then(u=>(P("RestConnection",`Received RPC '${e}' ${a}: `,u),u),u=>{throw $n("RestConnection",`RPC '${e}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}So(e,r,i,s,o,a){return this.fo(e,r,i,s,o)}yo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+er}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}po(e,r){const i=$y[e];return`${this.Ao}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}wo(t,e,r,i){const s=Qo();return new Promise((o,a)=>{const c=new Jg;c.setWithCredentials(!0),c.listenOnce(Qg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ho.NO_ERROR:const u=c.getResponseJson();P(St,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(u)),o(u);break;case Ho.TIMEOUT:P(St,`RPC '${t}' ${s} timed out`),a(new S(p.DEADLINE_EXCEEDED,"Request time out"));break;case Ho.HTTP_ERROR:const h=c.getStatus();if(P(St,`RPC '${t}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(m){const C=m.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(C)>=0?C:p.UNKNOWN}(f.status);a(new S(y,f.message))}else a(new S(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new S(p.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{P(St,`RPC '${t}' ${s} completed.`)}});const l=JSON.stringify(i);P(St,`RPC '${t}' ${s} sending request:`,i),c.send(e,"POST",l,r,15)})}bo(t,e,r){const i=Qo(),s=[this.Ao,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Hg(),a=Wg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.yo(c.initMessageHeaders,e,r),c.encodeInitMessageHeaders=!0;const u=s.join("");P(St,`Creating RPC '${t}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const y=new By({_o:m=>{f?P(St,`Not sending because RPC '${t}' stream ${i} is closed:`,m):(d||(P(St,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),P(St,`RPC '${t}' stream ${i} sending:`,m),h.send(m))},ao:()=>h.close()}),R=(m,C,A)=>{m.listen(C,v=>{try{A(v)}catch(M){setTimeout(()=>{throw M},0)}})};return R(h,Wi.EventType.OPEN,()=>{f||P(St,`RPC '${t}' stream ${i} transport opened.`)}),R(h,Wi.EventType.CLOSE,()=>{f||(f=!0,P(St,`RPC '${t}' stream ${i} transport closed`),y.To())}),R(h,Wi.EventType.ERROR,m=>{f||(f=!0,$n(St,`RPC '${t}' stream ${i} transport errored:`,m),y.To(new S(p.UNAVAILABLE,"The operation could not be completed")))}),R(h,Wi.EventType.MESSAGE,m=>{var C;if(!f){const A=m.data[0];nt(!!A);const v=A,M=v.error||((C=v[0])===null||C===void 0?void 0:C.error);if(M){P(St,`RPC '${t}' stream ${i} received error:`,M);const Z=M.status;let Q=function(ct){const gt=lt[ct];if(gt!==void 0)return jd(gt)}(Z),N=M.message;Q===void 0&&(Q=p.INTERNAL,N="Unknown error status: "+Z+" with message "+M.message),f=!0,y.To(new S(Q,N)),h.close()}else P(St,`RPC '${t}' stream ${i} received:`,A),y.Eo(A)}}),R(a,Yg.STAT_EVENT,m=>{m.stat===Ql.PROXY?P(St,`RPC '${t}' stream ${i} detected buffering proxy`):m.stat===Ql.NOPROXY&&P(St,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Io()},0),y}}function Yo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n){return new ty(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t,e,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=e,this.Do=r,this.vo=i,this.Co=s,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(t){this.cancel();const e=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),i=Math.max(0,e-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Fo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.xo=Date.now(),t())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t,e,r,i,s,o,a,c){this.oi=t,this.ko=r,this.qo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new Zd(t,e)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(t){this.Zo(),this.stream.send(t)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(t,e){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,t!==4?this.Uo.reset():e&&e.code===p.RESOURCE_EXHAUSTED?(we(e.toString()),we("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):e&&e.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.lo(e)}e_(){}auth(){this.state=1;const t=this.t_(this.Qo),e=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Qo===e&&this.n_(r,i)},r=>{t(()=>{const i=new S(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(i)})})}n_(t,e){const r=this.t_(this.Qo);this.stream=this.i_(t,e),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(i=>{r(()=>this.r_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(t){return P("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}t_(t){return e=>{this.oi.enqueueAndForget(()=>this.Qo===t?e():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qy extends tf{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}i_(t,e){return this.connection.bo("Listen",t,e)}onMessage(t){this.Uo.reset();const e=ry(this.serializer,t),r=function(s){if(!("targetChange"in s))return F.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?F.min():o.readTime?ee(o.readTime):F.min()}(t);return this.listener.s_(e,r)}o_(t){const e={};e.database=ka(this.serializer),e.addTarget=function(s,o){let a;const c=o.target;if(a=wa(c)?{documents:oy(s,c)}:{query:ay(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Kd(s,o.resumeToken);const l=Pa(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(F.min())>0){a.readTime=As(s,o.snapshotVersion.toTimestamp());const l=Pa(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=ly(this.serializer,t);r&&(e.labels=r),this.Yo(e)}__(t){const e={};e.database=ka(this.serializer),e.removeTarget=t,this.Yo(e)}}class Gy extends tf{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(t,e){return this.connection.bo("Write",t,e)}onMessage(t){if(nt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_){this.Uo.reset();const e=sy(t.writeResults,t.commitTime),r=ee(t.commitTime);return this.listener.l_(r,e)}return nt(!t.writeResults||t.writeResults.length===0),this.a_=!0,this.listener.h_()}P_(){const t={};t.database=ka(this.serializer),this.Yo(t)}c_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>iy(this.serializer,r))};this.Yo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.I_=!1}T_(){if(this.I_)throw new S(p.FAILED_PRECONDITION,"The client has already been terminated.")}fo(t,e,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.fo(t,e,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(p.UNKNOWN,i.toString())})}So(t,e,r,i){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(t,e,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new S(p.UNKNOWN,s.toString())})}terminate(){this.I_=!0}}class zy{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(t){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.m_("Offline")))}set(t){this.p_(),this.d_=0,t==="Online"&&(this.R_=!1),this.m_(t)}m_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}f_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(we(e),this.R_=!1):P("OnlineStateTracker",e)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=s,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{gn(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=$(c);l.S_.add(4),await Ri(l),l.v_.set("Unknown"),l.S_.delete(4),await eo(l)}(this))})}),this.v_=new zy(r,i)}}async function eo(n){if(gn(n))for(const t of n.b_)await t(!0)}async function Ri(n){for(const t of n.b_)await t(!1)}function ef(n,t){const e=$(n);e.w_.has(t.targetId)||(e.w_.set(t.targetId,t),Ac(e)?wc(e):rr(e).Go()&&Ic(e,t))}function nf(n,t){const e=$(n),r=rr(e);e.w_.delete(t),r.Go()&&rf(e,t),e.w_.size===0&&(r.Go()?r.Ho():gn(e)&&e.v_.set("Unknown"))}function Ic(n,t){if(n.C_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}rr(n).o_(t)}function rf(n,t){n.C_.Le(t),rr(n).__(t)}function wc(n){n.C_=new Y_({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>n.w_.get(t)||null,st:()=>n.datastore.serializer.databaseId}),rr(n).start(),n.v_.V_()}function Ac(n){return gn(n)&&!rr(n).Wo()&&n.w_.size>0}function gn(n){return $(n).S_.size===0}function sf(n){n.C_=void 0}async function Wy(n){n.w_.forEach((t,e)=>{Ic(n,t)})}async function Qy(n,t){sf(n),Ac(n)?(n.v_.g_(t),wc(n)):n.v_.set("Unknown")}async function Yy(n,t,e){if(n.v_.set("Online"),t instanceof Gd&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.w_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.w_.delete(a),i.C_.removeTarget(a))}(n,t)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Rs(n,r)}else if(t instanceof is?n.C_.Ge(t):t instanceof qd?n.C_.Xe(t):n.C_.He(t),!e.isEqual(F.min()))try{const r=await Xd(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.C_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=s.w_.get(l);u&&s.w_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=s.w_.get(c);if(!u)return;s.w_.set(c,u.withResumeToken(Ot.EMPTY_BYTE_STRING,u.snapshotVersion)),rf(s,c);const h=new Fe(u.target,c,l,u.sequenceNumber);Ic(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await Rs(n,r)}}async function Rs(n,t,e){if(!Ti(t))throw t;n.S_.add(1),await Ri(n),n.v_.set("Offline"),e||(e=()=>Xd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await e(),n.S_.delete(1),await eo(n)})}function of(n,t){return t().catch(e=>Rs(n,e,t))}async function no(n){const t=$(n),e=Qe(t);let r=t.y_.length>0?t.y_[t.y_.length-1].batchId:-1;for(;Jy(t);)try{const i=await My(t.localStore,r);if(i===null){t.y_.length===0&&e.Ho();break}r=i.batchId,Xy(t,i)}catch(i){await Rs(t,i)}af(t)&&cf(t)}function Jy(n){return gn(n)&&n.y_.length<10}function Xy(n,t){n.y_.push(t);const e=Qe(n);e.Go()&&e.u_&&e.c_(t.mutations)}function af(n){return gn(n)&&!Qe(n).Wo()&&n.y_.length>0}function cf(n){Qe(n).start()}async function Zy(n){Qe(n).P_()}async function tE(n){const t=Qe(n);for(const e of n.y_)t.c_(e.mutations)}async function eE(n,t,e){const r=n.y_.shift(),i=gc.from(r,t,e);await of(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await no(n)}async function nE(n,t){t&&Qe(n).u_&&await async function(r,i){if(function(o){return H_(o)&&o!==p.ABORTED}(i.code)){const s=r.y_.shift();Qe(r).jo(),await of(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await no(r)}}(n,t),af(n)&&cf(n)}async function Tu(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=gn(e);e.S_.add(3),await Ri(e),r&&e.v_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.S_.delete(3),await eo(e)}async function rE(n,t){const e=$(n);t?(e.S_.delete(2),await eo(e)):t||(e.S_.add(2),await Ri(e),e.v_.set("Unknown"))}function rr(n){return n.F_||(n.F_=function(e,r,i){const s=$(e);return s.T_(),new qy(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{uo:Wy.bind(null,n),lo:Qy.bind(null,n),s_:Yy.bind(null,n)}),n.b_.push(async t=>{t?(n.F_.jo(),Ac(n)?wc(n):n.v_.set("Unknown")):(await n.F_.stop(),sf(n))})),n.F_}function Qe(n){return n.M_||(n.M_=function(e,r,i){const s=$(e);return s.T_(),new Gy(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{uo:Zy.bind(null,n),lo:nE.bind(null,n),h_:tE.bind(null,n),l_:eE.bind(null,n)}),n.b_.push(async t=>{t?(n.M_.jo(),await no(n)):(await n.M_.stop(),n.y_.length>0&&(P("RemoteStore",`Stopping write stream with ${n.y_.length} pending writes`),n.y_=[]))})),n.M_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new Rc(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new S(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sc(n,t){if(we("AsyncQueue",`${t}: ${n}`),Ti(n))return new S(p.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||V.comparator(e.key,r.key):(e,r)=>V.comparator(e.key,r.key),this.keyedMap=Fr(),this.sortedSet=new it(this.comparator)}static emptySet(t){return new Mn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Mn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Iu{constructor(){this.x_=new it(V.comparator)}track(t){const e=t.doc.key,r=this.x_.get(e);r?t.type!==0&&r.type===3?this.x_=this.x_.insert(e,t):t.type===3&&r.type!==1?this.x_=this.x_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.x_=this.x_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.x_=this.x_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.x_=this.x_.remove(e):t.type===1&&r.type===2?this.x_=this.x_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.x_=this.x_.insert(e,{type:2,doc:t.doc}):L():this.x_=this.x_.insert(e,t)}O_(){const t=[];return this.x_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Kn{constructor(t,e,r,i,s,o,a,c,l){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Kn(t,e,Mn.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Qs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(){this.N_=void 0,this.listeners=[]}}class sE{constructor(){this.queries=new nr(t=>Cd(t),Qs),this.onlineState="Unknown",this.B_=new Set}}async function oE(n,t){const e=$(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new iE),i)try{s.N_=await e.onListen(r)}catch(o){const a=Sc(o,`Initialization of query '${Sa(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.listeners.push(t),t.L_(e.onlineState),s.N_&&t.k_(s.N_)&&Pc(e)}async function aE(n,t){const e=$(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function cE(n,t){const e=$(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.listeners)a.k_(i)&&(r=!0);o.N_=i}}r&&Pc(e)}function lE(n,t,e){const r=$(n),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(e);r.queries.delete(t)}function Pc(n){n.B_.forEach(t=>{t.next()})}class uE{constructor(t,e,r){this.query=t,this.q_=e,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Kn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Q_?this.U_(t)&&(this.q_.next(t),e=!0):this.W_(t,this.onlineState)&&(this.G_(t),e=!0),this.K_=t,e}onError(t){this.q_.error(t)}L_(t){this.onlineState=t;let e=!1;return this.K_&&!this.Q_&&this.W_(this.K_,t)&&(this.G_(this.K_),e=!0),e}W_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}U_(t){if(t.docChanges.length>0)return!0;const e=this.K_&&this.K_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}G_(t){t=Kn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Q_=!0,this.q_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t){this.key=t}}class uf{constructor(t){this.key=t}}class hE{constructor(t,e){this.query=t,this.ta=e,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=j(),this.mutatedKeys=j(),this.ia=bd(t),this.sa=new Mn(this.ia)}get oa(){return this.ta}_a(t,e){const r=e?e.aa:new Iu,i=e?e.sa:this.sa;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((u,h)=>{const d=i.get(u),f=Ys(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),R=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let m=!1;d&&f?d.data.isEqual(f.data)?y!==R&&(r.track({type:3,doc:f}),m=!0):this.ua(d,f)||(r.track({type:2,doc:f}),m=!0,(c&&this.ia(f,c)>0||l&&this.ia(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),m=!0):d&&!f&&(r.track({type:1,doc:d}),m=!0,(c||l)&&(a=!0)),m&&(f?(o=o.add(f),s=R?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{sa:o,aa:r,Hi:a,mutatedKeys:s}}ua(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r){const i=this.sa;this.sa=t.sa,this.mutatedKeys=t.mutatedKeys;const s=t.aa.O_();s.sort((l,u)=>function(d,f){const y=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return y(d)-y(f)}(l.type,u.type)||this.ia(l.doc,u.doc)),this.ca(r);const o=e?this.la():[],a=this.ra.size===0&&this.current?1:0,c=a!==this.na;return this.na=a,s.length!==0||c?{snapshot:new Kn(this.query,t.sa,i,s,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new Iu,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(t){return!this.ta.has(t)&&!!this.sa.has(t)&&!this.sa.get(t).hasLocalMutations}ca(t){t&&(t.addedDocuments.forEach(e=>this.ta=this.ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.ta=this.ta.delete(e)),this.current=t.current)}la(){if(!this.current)return[];const t=this.ra;this.ra=j(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const e=[];return t.forEach(r=>{this.ra.has(r)||e.push(new uf(r))}),this.ra.forEach(r=>{t.has(r)||e.push(new lf(r))}),e}Ia(t){this.ta=t._s,this.ra=j();const e=this._a(t.documents);return this.applyChanges(e,!0)}Ta(){return Kn.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class dE{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class fE{constructor(t){this.key=t,this.Ea=!1}}class pE{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new nr(a=>Cd(a),Qs),this.Ra=new Map,this.Va=new Set,this.ma=new it(V.comparator),this.fa=new Map,this.ga=new Ec,this.pa={},this.ya=new Map,this.wa=Gn.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function mE(n,t){const e=RE(n);let r,i;const s=e.Aa.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.Ta();else{const o=await Ly(e.localStore,Ae(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await gE(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&ef(e.remoteStore,o)}return i}async function gE(n,t,e,r,i){n.ba=(h,d,f)=>async function(R,m,C,A){let v=m.view._a(C);v.Hi&&(v=await yu(R.localStore,m.query,!1).then(({documents:Q})=>m.view._a(Q,v)));const M=A&&A.targetChanges.get(m.targetId),Z=m.view.applyChanges(v,R.isPrimaryClient,M);return Au(R,m.targetId,Z.ha),Z.snapshot}(n,h,d,f);const s=await yu(n.localStore,t,!0),o=new hE(t,s._s),a=o._a(s.documents),c=Ai.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,c);Au(n,e,l.ha);const u=new dE(t,e,o);return n.Aa.set(t,u),n.Ra.has(e)?n.Ra.get(e).push(t):n.Ra.set(e,[t]),l.snapshot}async function _E(n,t){const e=$(n),r=e.Aa.get(t),i=e.Ra.get(r.targetId);if(i.length>1)return e.Ra.set(r.targetId,i.filter(s=>!Qs(s,t))),void e.Aa.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await Na(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),nf(e.remoteStore,r.targetId),Da(e,r.targetId)}).catch(vi)):(Da(e,r.targetId),await Na(e.localStore,r.targetId,!0))}async function yE(n,t,e){const r=SE(n);try{const i=await function(o,a){const c=$(o),l=mt.now(),u=a.reduce((f,y)=>f.add(y.key),j());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=Re(),R=j();return c.ts.getEntries(f,u).next(m=>{y=m,y.forEach((C,A)=>{A.isValidDocument()||(R=R.add(C))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,y)).next(m=>{h=m;const C=[];for(const A of a){const v=j_(A,h.get(A.key).overlayedDocument);v!=null&&C.push(new Xe(A.key,v,yd(v.value.mapValue),te.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,C,a)}).next(m=>{d=m;const C=m.applyToLocalDocumentSet(h,R);return c.documentOverlayCache.saveOverlays(f,m.batchId,C)})}).then(()=>({batchId:d.batchId,changes:Nd(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.pa[o.currentUser.toKey()];l||(l=new it(H)),l=l.insert(a,c),o.pa[o.currentUser.toKey()]=l}(r,i.batchId,e),await Si(r,i.changes),await no(r.remoteStore)}catch(i){const s=Sc(i,"Failed to persist write");e.reject(s)}}async function hf(n,t){const e=$(n);try{const r=await Vy(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.fa.get(s);o&&(nt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ea=!0:i.modifiedDocuments.size>0?nt(o.Ea):i.removedDocuments.size>0&&(nt(o.Ea),o.Ea=!1))}),await Si(e,r,t)}catch(r){await vi(r)}}function wu(n,t,e){const r=$(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Aa.forEach((s,o)=>{const a=o.view.L_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=$(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.L_(a)&&(l=!0)}),l&&Pc(c)}(r.eventManager,t),i.length&&r.da.s_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function EE(n,t,e){const r=$(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.fa.get(t),s=i&&i.key;if(s){let o=new it(V.comparator);o=o.insert(s,Ct.newNoDocument(s,F.min()));const a=j().add(s),c=new Zs(F.min(),new Map,new it(H),o,a);await hf(r,c),r.ma=r.ma.remove(s),r.fa.delete(t),Cc(r)}else await Na(r.localStore,t,!1).then(()=>Da(r,t,e)).catch(vi)}async function vE(n,t){const e=$(n),r=t.batch.batchId;try{const i=await Dy(e.localStore,t);ff(e,r,null),df(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Si(e,i)}catch(i){await vi(i)}}async function TE(n,t,e){const r=$(n);try{const i=await function(o,a){const c=$(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(nt(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,t);ff(r,t,e),df(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Si(r,i)}catch(i){await vi(i)}}function df(n,t){(n.ya.get(t)||[]).forEach(e=>{e.resolve()}),n.ya.delete(t)}function ff(n,t,e){const r=$(n);let i=r.pa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.pa[r.currentUser.toKey()]=i}}function Da(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ra.get(t))n.Aa.delete(r),e&&n.da.Da(r,e);n.Ra.delete(t),n.isPrimaryClient&&n.ga.Vr(t).forEach(r=>{n.ga.containsKey(r)||pf(n,r)})}function pf(n,t){n.Va.delete(t.path.canonicalString());const e=n.ma.get(t);e!==null&&(nf(n.remoteStore,e),n.ma=n.ma.remove(t),n.fa.delete(e),Cc(n))}function Au(n,t,e){for(const r of e)r instanceof lf?(n.ga.addReference(r.key,t),IE(n,r)):r instanceof uf?(P("SyncEngine","Document no longer in limbo: "+r.key),n.ga.removeReference(r.key,t),n.ga.containsKey(r.key)||pf(n,r.key)):L()}function IE(n,t){const e=t.key,r=e.path.canonicalString();n.ma.get(e)||n.Va.has(r)||(P("SyncEngine","New document in limbo: "+e),n.Va.add(r),Cc(n))}function Cc(n){for(;n.Va.size>0&&n.ma.size<n.maxConcurrentLimboResolutions;){const t=n.Va.values().next().value;n.Va.delete(t);const e=new V(et.fromString(t)),r=n.wa.next();n.fa.set(r,new fE(e)),n.ma=n.ma.insert(e,r),ef(n.remoteStore,new Fe(Ae(Rd(e.path)),r,"TargetPurposeLimboResolution",lc.ae))}}async function Si(n,t,e){const r=$(n),i=[],s=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,c)=>{o.push(r.ba(c,t,e).then(l=>{if((l||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=Tc.Ki(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.da.s_(i),await async function(c,l){const u=$(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>_.forEach(l,d=>_.forEach(d.qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>_.forEach(d.Qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Ti(h))throw h;P("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.Zi.get(d),y=f.snapshotVersion,R=f.withLastLimboFreeSnapshotVersion(y);u.Zi=u.Zi.insert(d,R)}}}(r.localStore,s))}async function wE(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){P("SyncEngine","User change. New user:",t.toKey());const r=await Jd(e.localStore,t);e.currentUser=t,function(s,o){s.ya.forEach(a=>{a.forEach(c=>{c.reject(new S(p.CANCELLED,o))})}),s.ya.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Si(e,r.rs)}}function AE(n,t){const e=$(n),r=e.fa.get(t);if(r&&r.Ea)return j().add(r.key);{let i=j();const s=e.Ra.get(t);if(!s)return i;for(const o of s){const a=e.Aa.get(o);i=i.unionWith(a.view.oa)}return i}}function RE(n){const t=$(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=hf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=AE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=EE.bind(null,t),t.da.s_=cE.bind(null,t.eventManager),t.da.Da=lE.bind(null,t.eventManager),t}function SE(n){const t=$(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=vE.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=TE.bind(null,t),t}class Ru{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=to(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Ny(this.persistence,new by,t.initialUser,this.serializer)}createPersistence(t){return new Py(vc.Hr,this.serializer)}createSharedClientState(t){return new Fy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class PE{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wE.bind(null,this.syncEngine),await rE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new sE}()}createDatastore(t){const e=to(t.databaseInfo.databaseId),r=function(s){return new jy(s)}(t.databaseInfo);return function(s,o,a,c){return new Ky(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new Hy(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>wu(this.syncEngine,e,0),function(){return vu.v()?new vu:new Uy}())}createSyncEngine(t,e){return function(i,s,o,a,c,l,u){const h=new pE(i,s,o,a,c,l);return u&&(h.Sa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(e){const r=$(e);P("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await Ri(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class CE{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Fa(this.observer.next,t)}error(t){this.observer.error?this.Fa(this.observer.error,t):we("Uncaught Error in snapshot listener:",t.toString())}Ma(){this.muted=!0}Fa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Pt.UNAUTHENTICATED,this.clientId=md.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new je;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Sc(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Jo(n,t){n.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const e=await n.getConfiguration();await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Jd(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Su(n,t){n.asyncQueue.verifyOperationInProgress();const e=await NE(n);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await t.initialize(e,r),n.setCredentialChangeListener(i=>Tu(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Tu(t.remoteStore,s)),n._onlineComponents=t}function kE(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function NE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jo(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!kE(e))throw e;$n("Error using user provided cache. Falling back to memory cache: "+e),await Jo(n,new Ru)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await Jo(n,new Ru);return n._offlineComponents}async function mf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await Su(n,n._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await Su(n,new PE))),n._onlineComponents}function DE(n){return mf(n).then(t=>t.syncEngine)}async function VE(n){const t=await mf(n),e=t.eventManager;return e.onListen=mE.bind(null,t.syncEngine),e.onUnlisten=_E.bind(null,t.syncEngine),e}function OE(n,t,e={}){const r=new je;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new CE({next:d=>{o.enqueueAndForget(()=>aE(s,h)),d.fromCache&&c.source==="server"?l.reject(new S(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new uE(a,u,{includeMetadataChanges:!0,z_:!0});return oE(s,h)}(await VE(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function _f(n,t,e){if(!e)throw new S(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function ME(n,t,e,r){if(t===!0&&r===!0)throw new S(p.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Cu(n){if(!V.isDocumentKey(n))throw new S(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function bu(n){if(V.isDocumentKey(n))throw new S(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ro(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L()}function zn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new S(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ro(n);throw new S(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new S(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new S(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ME("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gf((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new S(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new S(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new S(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class io{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ku({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new S(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ku(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Zg;switch(r.type){case"firstParty":return new r_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new S(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Pu.get(e);r&&(P("ComponentProvider","Removing Datastore"),Pu.delete(e),r.terminate())}(this),Promise.resolve()}}function LE(n,t,e,r={}){var i;const s=(n=zn(n,io))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&$n("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Pt.MOCK_USER;else{a=Sp(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new S(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Pt(l)}n._authCredentials=new t_(new pd(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ir(this.firestore,t,this._query)}}class jt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new jt(this.firestore,t,this._key)}}class qe extends ir{constructor(t,e,r){super(t,e,Rd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new jt(this.firestore,null,new V(t))}withConverter(t){return new qe(this.firestore,t,this._path)}}function Xi(n,t,...e){if(n=At(n),_f("collection","path",t),n instanceof io){const r=et.fromString(t,...e);return bu(r),new qe(n,null,r)}{if(!(n instanceof jt||n instanceof qe))throw new S(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return bu(r),new qe(n.firestore,null,r)}}function xE(n,t,...e){if(n=At(n),arguments.length===1&&(t=md.V()),_f("doc","path",t),n instanceof io){const r=et.fromString(t,...e);return Cu(r),new jt(n,null,new V(r))}{if(!(n instanceof jt||n instanceof qe))throw new S(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return Cu(r),new jt(n.firestore,n instanceof qe?n.converter:null,new V(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new Zd(this,"async_queue_retry"),this.tu=()=>{const e=Yo();e&&P("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Uo.Lo()};const t=Yo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.nu(),this.ru(t)}enterRestrictedMode(t){if(!this.Ha){this.Ha=!0,this.Xa=t||!1;const e=Yo();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.tu)}}enqueue(t){if(this.nu(),this.Ha)return new Promise(()=>{});const e=new je;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ja.push(t),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(t){if(!Ti(t))throw t;P("AsyncQueue","Operation failed with retryable error: "+t)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(t){const e=this.za.then(()=>(this.Za=!0,t().catch(r=>{this.Ya=r,this.Za=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw we("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Za=!1,r))));return this.za=e,e}enqueueAfterDelay(t,e,r){this.nu(),this.eu.indexOf(t)>-1&&(e=0);const i=Rc.createAndSchedule(this,t,e,r,s=>this.su(s));return this.Ja.push(i),i}nu(){this.Ya&&L()}verifyOperationInProgress(){}async ou(){let t;do t=this.za,await t;while(t!==this.za)}_u(t){for(const e of this.Ja)if(e.timerId===t)return!0;return!1}au(t){return this.ou().then(()=>{this.Ja.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Ja)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.ou()})}uu(t){this.eu.push(t)}su(t){const e=this.Ja.indexOf(t);this.Ja.splice(e,1)}}class so extends io{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new FE}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ef(this),this._firestoreClient.terminate()}}function UE(n,t){const e=typeof n=="object"?n:lh(),r=typeof n=="string"?n:t||"(default)",i=Ua(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ap("firestore");s&&LE(i,...s)}return i}function yf(n){return n._firestoreClient||Ef(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ef(n){var t,e,r;const i=n._freezeSettings(),s=function(a,c,l,u){return new m_(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,gf(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new bE(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Hn(Ot.fromBase64String(t))}catch(e){throw new S(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Hn(Ot.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new S(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new S(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new S(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return H(this._lat,t._lat)||H(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=/^__.*__$/;class BE{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Xe(t,this.data,this.fieldMask,e,this.fieldTransforms):new wi(t,this.data,e,this.fieldTransforms)}}class vf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Xe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Tf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Nc{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.cu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(t){return new Nc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.hu({path:r,Iu:!1});return i.Tu(t),i}Eu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.hu({path:r,Iu:!1});return i.cu(),i}du(t){return this.hu({path:void 0,Iu:!0})}Au(t){return Ss(t,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}cu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Tu(this.path.get(t))}Tu(t){if(t.length===0)throw this.Au("Document fields must not be empty");if(Tf(this.lu)&&$E.test(t))throw this.Au('Document fields cannot begin and end with "__"')}}class jE{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||to(t)}mu(t,e,r,i=!1){return new Nc({lu:t,methodName:e,Vu:r,path:bt.emptyPath(),Iu:!1,Ru:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dc(n){const t=n._freezeSettings(),e=to(n._databaseId);return new jE(n._databaseId,!!t.ignoreUndefinedProperties,e)}function qE(n,t,e,r,i,s={}){const o=n.mu(s.merge||s.mergeFields?2:0,t,e,i);Vc("Data must be an object, but it was:",o,r);const a=If(r,o);let c,l;if(s.merge)c=new Bt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=Va(t,h,e);if(!o.contains(d))throw new S(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Af(u,d)||u.push(d)}c=new Bt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new BE(new $t(a),c,l)}class ao extends bc{_toFieldTransform(t){if(t.lu!==2)throw t.lu===1?t.Au(`${this._methodName}() can only appear at the top level of your update data`):t.Au(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ao}}function GE(n,t,e,r){const i=n.mu(1,t,e);Vc("Data must be an object, but it was:",i,r);const s=[],o=$t.empty();mn(r,(c,l)=>{const u=Oc(t,c,e);l=At(l);const h=i.Eu(u);if(l instanceof ao)s.push(u);else{const d=Pi(l,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new Bt(s);return new vf(o,a,i.fieldTransforms)}function KE(n,t,e,r,i,s){const o=n.mu(1,t,e),a=[Va(t,r,e)],c=[i];if(s.length%2!=0)throw new S(p.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Va(t,s[d])),c.push(s[d+1]);const l=[],u=$t.empty();for(let d=a.length-1;d>=0;--d)if(!Af(l,a[d])){const f=a[d];let y=c[d];y=At(y);const R=o.Eu(f);if(y instanceof ao)l.push(f);else{const m=Pi(y,R);m!=null&&(l.push(f),u.set(f,m))}}const h=new Bt(l);return new vf(u,h,o.fieldTransforms)}function zE(n,t,e,r=!1){return Pi(e,n.mu(r?4:3,t))}function Pi(n,t){if(wf(n=At(n)))return Vc("Unsupported field value:",t,n),If(n,t);if(n instanceof bc)return function(r,i){if(!Tf(i.lu))throw i.Au(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Au(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Iu&&t.lu!==4)throw t.Au("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=Pi(a,i.du(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=At(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return L_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=mt.fromDate(r);return{timestampValue:As(i.serializer,s)}}if(r instanceof mt){const s=new mt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:As(i.serializer,s)}}if(r instanceof kc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Hn)return{bytesValue:Kd(i.serializer,r._byteString)};if(r instanceof jt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:yc(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Au(`Unsupported field value: ${ro(r)}`)}(n,t)}function If(n,t){const e={};return gd(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):mn(n,(r,i)=>{const s=Pi(i,t.Pu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function wf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof mt||n instanceof kc||n instanceof Hn||n instanceof jt||n instanceof bc)}function Vc(n,t,e){if(!wf(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=ro(e);throw r==="an object"?t.Au(n+" a custom object"):t.Au(n+" "+r)}}function Va(n,t,e){if((t=At(t))instanceof oo)return t._internalPath;if(typeof t=="string")return Oc(n,t);throw Ss("Field path arguments must be of type string or ",n,!1,void 0,e)}const HE=new RegExp("[~\\*/\\[\\]]");function Oc(n,t,e){if(t.search(HE)>=0)throw Ss(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new oo(...t.split("."))._internalPath}catch{throw Ss(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ss(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new S(p.INVALID_ARGUMENT,a+n+c)}function Af(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new WE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Mc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class WE extends Rf{data(){return super.data()}}function Mc(n,t){return typeof t=="string"?Oc(n,t):t instanceof oo?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new S(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lc{}class YE extends Lc{}function Xo(n,t,...e){let r=[];t instanceof Lc&&r.push(t),r=r.concat(e),function(s){const o=s.filter(c=>c instanceof xc).length,a=s.filter(c=>c instanceof co).length;if(o>1||o>0&&a>0)throw new S(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class co extends YE{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new co(t,e,r)}_apply(t){const e=this._parse(t);return Sf(t._query,e),new ir(t.firestore,t.converter,Aa(t._query,e))}_parse(t){const e=Dc(t.firestore);return function(s,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new S(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Du(h,u);const f=[];for(const y of h)f.push(Nu(c,s,y));d={arrayValue:{values:f}}}else d=Nu(c,s,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Du(h,u),d=zE(a,o,h,u==="in"||u==="not-in");return dt.create(l,u,d)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Zo(n,t,e){const r=t,i=Mc("where",n);return co._create(i,r,e)}class xc extends Lc{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new xc(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Wt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)Sf(o,c),o=Aa(o,c)}(t._query,e),new ir(t.firestore,t.converter,Aa(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Nu(n,t,e){if(typeof(e=At(e))=="string"){if(e==="")throw new S(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pd(t)&&e.indexOf("/")!==-1)throw new S(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(et.fromString(e));if(!V.isDocumentKey(r))throw new S(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return eu(n,new V(r))}if(e instanceof jt)return eu(n,e._key);throw new S(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ro(e)}.`)}function Du(n,t){if(!Array.isArray(n)||n.length===0)throw new S(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Sf(n,t){if(t.isInequality()){const r=mc(n),i=t.field;if(r!==null&&!r.isEqual(i))throw new S(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Sd(n);s!==null&&JE(n,i,s)}const e=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new S(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new S(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function JE(n,t,e){if(!e.isEqual(t))throw new S(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${e.toString()}' instead.`)}class XE{convertValue(t,e="none"){switch(dn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ut(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(hn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return mn(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new kc(ut(t.latitude),ut(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=hc(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(ri(t));default:return null}}convertTimestamp(t){const e=We(t);return new mt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=et.fromString(t);nt(Yd(r));const i=new ii(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(e)||we(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class tv extends Rf{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ss(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Mc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class ss extends tv{data(t={}){return super.data(t)}}class ev{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Zi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new ss(this._firestore,this._userDataWriter,r.key,r,new Zi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new S(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new ss(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Zi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new ss(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Zi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:nv(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function nv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class rv extends XE{constructor(t){super(),this.firestore=t}convertBytes(t){return new Hn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new jt(this.firestore,null,e)}}function ta(n){n=zn(n,ir);const t=zn(n.firestore,so),e=yf(t),r=new rv(t);return QE(n._query),OE(e,n._query).then(i=>new ev(t,r,n,i))}function iv(n,t,e,...r){n=zn(n,jt);const i=zn(n.firestore,so),s=Dc(i);let o;return o=typeof(t=At(t))=="string"||t instanceof oo?KE(s,"updateDoc",n._key,t,e,r):GE(s,"updateDoc",n._key,t),Pf(i,[o.toMutation(n._key,te.exists(!0))])}function sv(n,t){const e=zn(n.firestore,so),r=xE(n),i=ZE(n.converter,t);return Pf(e,[qE(Dc(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,te.exists(!1))]).then(()=>r)}function Pf(n,t){return function(r,i){const s=new je;return r.asyncQueue.enqueueAndForget(async()=>yE(await DE(r),i,s)),s.promise}(yf(n),t)}(function(t,e=!0){(function(i){er=i})(Xn),Fn(new cn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new so(new e_(r.getProvider("auth-internal")),new s_(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new S(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ii(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Be(Yl,"4.1.2",t),Be(Yl,"4.1.2","esm2017")})();function Fc(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e}function Cf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ov=Cf,bf=new ui("auth","Firebase",Cf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new xa("@firebase/auth");function av(n,...t){Ps.logLevel<=z.WARN&&Ps.warn(`Auth (${Xn}): ${n}`,...t)}function os(n,...t){Ps.logLevel<=z.ERROR&&Ps.error(`Auth (${Xn}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(n,...t){throw Uc(n,...t)}function ne(n,...t){return Uc(n,...t)}function kf(n,t,e){const r=Object.assign(Object.assign({},ov()),{[t]:e});return new ui("auth","Firebase",r).create(t,{appName:n.name})}function cv(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&se(n,"argument-error"),kf(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Uc(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return bf.create(n,...t)}function U(n,t,...e){if(!n)throw Uc(t,...e)}function ye(n){const t="INTERNAL ASSERTION FAILED: "+n;throw os(t),new Error(t)}function Se(n,t){n||ye(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function lv(){return Vu()==="http:"||Vu()==="https:"}function Vu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lv()||Cp()||"connection"in navigator)?navigator.onLine:!0}function hv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,e){this.shortDelay=t,this.longDelay=e,Se(e>t,"Short delay should be less than long delay!"),this.isMobile=Pp()||bp()}get(){return uv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Nf{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=new Ci(3e4,6e4);function Df(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function bi(n,t,e,r,i={}){return Vf(n,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=hi(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Nf.fetch()(Of(n,n.config.apiHost,e,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function Vf(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},dv),t);try{const i=new mv(n),s=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ts(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ts(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ts(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ts(n,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw kf(n,u,l);se(n,u)}}catch(i){if(i instanceof Pe)throw i;se(n,"network-request-failed",{message:String(i)})}}async function pv(n,t,e,r,i={}){const s=await bi(n,t,e,r,i);return"mfaPendingCredential"in s&&se(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Of(n,t,e,r){const i=`${t}${e}?${r}`;return n.config.emulator?$c(n.config,i):`${n.config.apiScheme}://${i}`}class mv{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(ne(this.auth,"network-request-failed")),fv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ts(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const i=ne(n,t,r);return i.customData._tokenResponse=e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gv(n,t){return bi(n,"POST","/v1/accounts:delete",t)}async function _v(n,t){return bi(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function yv(n,t=!1){const e=At(n),r=await e.getIdToken(t),i=Bc(r);U(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zr(ea(i.auth_time)),issuedAtTime:zr(ea(i.iat)),expirationTime:zr(ea(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ea(n){return Number(n)*1e3}function Bc(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return os("JWT malformed, contained fewer than 3 sections"),null;try{const i=nh(e);return i?JSON.parse(i):(os("Failed to decode base64 JWT payload"),null)}catch(i){return os("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ev(n){const t=Bc(n);return U(t,"internal-error"),U(typeof t.exp<"u","internal-error"),U(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Pe&&vv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function vv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=zr(this.lastLoginAt),this.creationTime=zr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Cs(n){var t;const e=n.auth,r=await n.getIdToken(),i=await ci(n,_v(e,{idToken:r}));U(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Av(s.providerUserInfo):[],a=wv(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Mf(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Iv(n){const t=At(n);await Cs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function wv(n,t){return[...n.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Av(n){return n.map(t=>{var{providerId:e}=t,r=Fc(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rv(n,t){const e=await Vf(n,{},async()=>{const r=hi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Of(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Nf.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){U(t.idToken,"internal-error"),U(typeof t.idToken<"u","internal-error"),U(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ev(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return U(!this.accessToken||this.refreshToken,t,"user-token-expired"),!e&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:i,expiresIn:s}=await Rv(t,e);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:i,expirationTime:s}=e,o=new li;return r&&(U(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return ye("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n,t){U(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class an{constructor(t){var{uid:e,auth:r,stsTokenManager:i}=t,s=Fc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Mf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await ci(this,this.stsTokenManager.getToken(this.auth,t));return U(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return yv(this,t)}reload(){return Iv(this)}_assign(t){this!==t&&(U(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new an(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Cs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await ci(this,gv(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,i,s,o,a,c,l,u;const h=(r=e.displayName)!==null&&r!==void 0?r:void 0,d=(i=e.email)!==null&&i!==void 0?i:void 0,f=(s=e.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=e.photoURL)!==null&&o!==void 0?o:void 0,R=(a=e.tenantId)!==null&&a!==void 0?a:void 0,m=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=e.createdAt)!==null&&l!==void 0?l:void 0,A=(u=e.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:M,isAnonymous:Z,providerData:Q,stsTokenManager:N}=e;U(v&&N,t,"internal-error");const at=li.fromJSON(this.name,N);U(typeof v=="string",t,"internal-error"),Oe(h,t.name),Oe(d,t.name),U(typeof M=="boolean",t,"internal-error"),U(typeof Z=="boolean",t,"internal-error"),Oe(f,t.name),Oe(y,t.name),Oe(R,t.name),Oe(m,t.name),Oe(C,t.name),Oe(A,t.name);const ct=new an({uid:v,auth:t,email:d,emailVerified:M,displayName:h,isAnonymous:Z,photoURL:y,phoneNumber:f,tenantId:R,stsTokenManager:at,createdAt:C,lastLoginAt:A});return Q&&Array.isArray(Q)&&(ct.providerData=Q.map(gt=>Object.assign({},gt))),m&&(ct._redirectEventId=m),ct}static async _fromIdTokenResponse(t,e,r=!1){const i=new li;i.updateFromServerResponse(e);const s=new an({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Cs(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=new Map;function Ee(n){Se(n instanceof Function,"Expected a class definition");let t=Ou.get(n);return t?(Se(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Ou.set(n,t),t)}/**
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
 */class Lf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Lf.type="NONE";const Mu=Lf;/**
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
 */function as(n,t,e){return`firebase:${n}:${t}:${e}`}class Ln{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=as(this.userKey,i.apiKey,s),this.fullPersistenceKey=as("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?an._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new Ln(Ee(Mu),t,r);const i=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Ee(Mu);const o=as(r,t.config.apiKey,t.name);let a=null;for(const l of e)try{const u=await l._get(o);if(u){const h=an._fromJSON(t,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ln(s,t,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Ln(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Uf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(xf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Bf(t))return"Blackberry";if(jf(t))return"Webos";if(jc(t))return"Safari";if((t.includes("chrome/")||Ff(t))&&!t.includes("edge/"))return"Chrome";if($f(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xf(n=Vt()){return/firefox\//i.test(n)}function jc(n=Vt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ff(n=Vt()){return/crios\//i.test(n)}function Uf(n=Vt()){return/iemobile/i.test(n)}function $f(n=Vt()){return/android/i.test(n)}function Bf(n=Vt()){return/blackberry/i.test(n)}function jf(n=Vt()){return/webos/i.test(n)}function lo(n=Vt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Sv(n=Vt()){var t;return lo(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Pv(){return kp()&&document.documentMode===10}function qf(n=Vt()){return lo(n)||$f(n)||jf(n)||Bf(n)||/windows phone/i.test(n)||Uf(n)}function Cv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(n,t=[]){let e;switch(n){case"Browser":e=Lu(Vt());break;case"Worker":e=`${Lu(Vt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Xn}/${r}`}/**
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
 */async function kv(n,t={}){return bi(n,"GET","/v2/passwordPolicy",Df(n,t))}/**
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
 */const Nv=6;class Dv{constructor(t){var e,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:Nv,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(t,e,r,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xu(this),this.idTokenSubscription=new xu(this),this.beforeStateQueue=new bv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Ee(e)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ln.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var e;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Cs(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=hv()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?At(t):null;return e&&U(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&U(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ee(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await kv(this),e=new Dv(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ui("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Ee(t)||this._popupRedirectResolver;U(e,this,"argument-error"),this.redirectPersistenceManager=await Ln.create(this,[Ee(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,i){if(this._deleted)return()=>{};const s=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,r,i);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Gf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&av(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function uo(n){return At(n)}class xu{constructor(t){this.auth=t,this.observer=null,this.addObserver=xp(e=>this.observer=e)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}function Mv(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=i=>{const s=ne("internal-error");s.customData=i,e(s)},r.type="text/javascript",r.charset="UTF-8",Ov().appendChild(r)})}function Lv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(n,t){const e=Ua(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),s=e.getOptions();if(hs(s,t??{}))return i;se(i,"already-initialized")}return e.initialize({options:t})}function Fv(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(Ee);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Uv(n,t,e){const r=uo(n);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(e!=null&&e.disableWarnings),s=Kf(t),{host:o,port:a}=$v(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Bv()}function Kf(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function $v(n){const t=Kf(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Fu(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Fu(o)}}}function Fu(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Bv(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ye("not implemented")}_getIdTokenResponse(t){return ye("not implemented")}_linkToIdToken(t,e){return ye("not implemented")}_getReauthenticationResolver(t){return ye("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(n,t){return pv(n,"POST","/v1/accounts:signInWithIdp",Df(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="http://localhost";class fn extends zf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new fn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):se("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=e,s=Fc(e,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return xn(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,xn(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,xn(t,e)}buildRequest(){const t={requestUri:jv,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=hi(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ki extends qc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends ki{constructor(){super("facebook.com")}static credential(t){return fn._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Me.credentialFromTaggedObject(t)}static credentialFromError(t){return Me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Me.credential(t.oauthAccessToken)}catch{return null}}}Me.FACEBOOK_SIGN_IN_METHOD="facebook.com";Me.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge extends ki{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return fn._fromParams({providerId:ge.PROVIDER_ID,signInMethod:ge.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ge.credentialFromTaggedObject(t)}static credentialFromError(t){return ge.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return ge.credential(e,r)}catch{return null}}}ge.GOOGLE_SIGN_IN_METHOD="google.com";ge.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends ki{constructor(){super("github.com")}static credential(t){return fn._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Le.credentialFromTaggedObject(t)}static credentialFromError(t){return Le.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Le.credential(t.oauthAccessToken)}catch{return null}}}Le.GITHUB_SIGN_IN_METHOD="github.com";Le.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends ki{constructor(){super("twitter.com")}static credential(t,e){return fn._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return xe.credentialFromTaggedObject(t)}static credentialFromError(t){return xe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return xe.credential(e,r)}catch{return null}}}xe.TWITTER_SIGN_IN_METHOD="twitter.com";xe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,i=!1){const s=await an._fromIdTokenResponse(t,r,i),o=Uu(r);return new Wn({user:s,providerId:o,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const i=Uu(r);return new Wn({user:t,providerId:i,_tokenResponse:r,operationType:e})}}function Uu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends Pe{constructor(t,e,r,i){var s;super(e.code,e.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bs.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,i){return new bs(t,e,r,i)}}function Hf(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?bs._fromErrorAndOperation(n,s,t,r):s})}async function qv(n,t,e=!1){const r=await ci(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Wn._forOperation(n,"link",r)}/**
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
 */async function Gv(n,t,e=!1){const{auth:r}=n,i="reauthenticate";try{const s=await ci(n,Hf(r,i,t,n),e);U(s.idToken,r,"internal-error");const o=Bc(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(n.uid===a,r,"user-mismatch"),Wn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&se(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kv(n,t,e=!1){const r="signIn",i=await Hf(n,r,t),s=await Wn._fromIdTokenResponse(n,r,i);return e||await n._updateCurrentUser(s.user),s}function zv(n,t,e,r){return At(n).onIdTokenChanged(t,e,r)}function Hv(n,t,e){return At(n).beforeAuthStateChanged(t,e)}function Wv(n,t,e,r){return At(n).onAuthStateChanged(t,e,r)}function Qv(n){return At(n).signOut()}const ks="__sak";/**
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
 */class Wf{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(ks,"1"),this.storage.removeItem(ks),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(){const n=Vt();return jc(n)||lo(n)}const Jv=1e3,Xv=10;class Qf extends Wf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Yv()&&Cv(),this.fallbackToPolling=qf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),i=this.localCache[e];r!==i&&t(e,i,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!e)return}const i=()=>{const o=this.storage.getItem(r);!e&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Pv()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Xv):i()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},Jv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Qf.type="LOCAL";const Zv=Qf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf extends Wf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Yf.type="SESSION";const Jf=Yf;/**
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
 */function tT(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class ho{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const r=new ho(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:i,data:s}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(e.origin,s)),c=await tT(a);e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ho.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class eT{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Gc("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(){return window}function nT(n){re().location.href=n}/**
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
 */function Xf(){return typeof re().WorkerGlobalScope<"u"&&typeof re().importScripts=="function"}async function rT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function sT(){return Xf()?self:null}/**
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
 */const Zf="firebaseLocalStorageDb",oT=1,Ns="firebaseLocalStorage",tp="fbase_key";class Ni{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function fo(n,t){return n.transaction([Ns],t?"readwrite":"readonly").objectStore(Ns)}function aT(){const n=indexedDB.deleteDatabase(Zf);return new Ni(n).toPromise()}function Ma(){const n=indexedDB.open(Zf,oT);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ns,{keyPath:tp})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ns)?t(r):(r.close(),await aT(),t(await Ma()))})})}async function $u(n,t,e){const r=fo(n,!0).put({[tp]:t,value:e});return new Ni(r).toPromise()}async function cT(n,t){const e=fo(n,!1).get(t),r=await new Ni(e).toPromise();return r===void 0?null:r.value}function Bu(n,t){const e=fo(n,!0).delete(t);return new Ni(e).toPromise()}const lT=800,uT=3;class ep{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ma(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>uT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ho._getInstance(sT()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await rT(),!this.activeServiceWorker)return;this.sender=new eT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||iT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ma();return await $u(t,ks,"1"),await Bu(t,ks),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>$u(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>cT(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Bu(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=fo(i,!1).getAll();return new Ni(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ep.type="LOCAL";const hT=ep;new Ci(3e4,6e4);/**
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
 */function np(n,t){return t?Ee(t):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Kc extends zf{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return xn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return xn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return xn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function dT(n){return Kv(n.auth,new Kc(n),n.bypassAuthState)}function fT(n){const{auth:t,user:e}=n;return U(e,t,"internal-error"),Gv(e,new Kc(n),n.bypassAuthState)}async function pT(n){const{auth:t,user:e}=n;return U(e,t,"internal-error"),qv(e,new Kc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(t,e,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return dT;case"linkViaPopup":case"linkViaRedirect":return pT;case"reauthViaPopup":case"reauthViaRedirect":return fT;default:se(this.auth,"internal-error")}}resolve(t){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=new Ci(2e3,1e4);async function gT(n,t,e){const r=uo(n);cv(n,t,qc);const i=np(r,e);return new sn(r,"signInViaPopup",t,i).executeNotNull()}class sn extends rp{constructor(t,e,r,i,s){super(t,e,i,s),this.provider=r,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return U(t,this.auth,"internal-error"),t}async onExecution(){Se(this.filter.length===1,"Popup operations only handle one event");const t=Gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ne(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ne(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ne(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,mT.get())};t()}}sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T="pendingRedirect",cs=new Map;class yT extends rp{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=cs.get(this.auth._key());if(!t){try{const r=await ET(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}cs.set(this.auth._key(),t)}return this.bypassAuthState||cs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ET(n,t){const e=IT(t),r=TT(n);if(!await r._isAvailable())return!1;const i=await r._get(e)==="true";return await r._remove(e),i}function vT(n,t){cs.set(n._key(),t)}function TT(n){return Ee(n._redirectPersistence)}function IT(n){return as(_T,n.config.apiKey,n.name)}async function wT(n,t,e=!1){const r=uo(n),i=np(r,t),o=await new yT(r,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=10*60*1e3;class RT{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!ST(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!ip(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(ne(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=AT&&this.cachedEventUids.clear(),this.cachedEventUids.has(ju(t))}saveEventToCache(t){this.cachedEventUids.add(ju(t)),this.lastProcessedEventTime=Date.now()}}function ju(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function ip({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function ST(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ip(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT(n,t={}){return bi(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bT=/^https?/;async function kT(n){if(n.config.emulator)return;const{authorizedDomains:t}=await PT(n);for(const e of t)try{if(NT(e))return}catch{}se(n,"unauthorized-domain")}function NT(n){const t=Oa(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===r}if(!bT.test(e))return!1;if(CT.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const DT=new Ci(3e4,6e4);function qu(){const n=re().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function VT(n){return new Promise((t,e)=>{var r,i,s;function o(){qu(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{qu(),e(ne(n,"network-request-failed"))},timeout:DT.get()})}if(!((i=(r=re().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=re().gapi)===null||s===void 0)&&s.load)o();else{const a=Lv("iframefcb");return re()[a]=()=>{gapi.load?o():e(ne(n,"network-request-failed"))},Mv(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw ls=null,t})}let ls=null;function OT(n){return ls=ls||VT(n),ls}/**
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
 */const MT=new Ci(5e3,15e3),LT="__/auth/iframe",xT="emulator/auth/iframe",FT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $T(n){const t=n.config;U(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?$c(t,xT):`https://${n.config.authDomain}/${LT}`,r={apiKey:t.apiKey,appName:n.name,v:Xn},i=UT.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${e}?${hi(r).slice(1)}`}async function BT(n){const t=await OT(n),e=re().gapi;return U(e,n,"internal-error"),t.open({where:document.body,url:$T(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ne(n,"network-request-failed"),a=re().setTimeout(()=>{s(o)},MT.get());function c(){re().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const jT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qT=500,GT=600,KT="_blank",zT="http://localhost";class Gu{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HT(n,t,e,r=qT,i=GT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},jT),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Vt().toLowerCase();e&&(a=Ff(l)?KT:e),xf(l)&&(t=t||zT,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(Sv(l)&&a!=="_self")return WT(t||"",a),new Gu(null);const h=window.open(t||"",a,u);U(h,n,"popup-blocked");try{h.focus()}catch{}return new Gu(h)}function WT(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const QT="__/auth/handler",YT="emulator/auth/handler",JT=encodeURIComponent("fac");async function Ku(n,t,e,r,i,s){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Xn,eventId:i};if(t instanceof qc){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",Lp(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(t instanceof ki){const u=t.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${JT}=${encodeURIComponent(c)}`:"";return`${XT(n)}?${hi(a).slice(1)}${l}`}function XT({config:n}){return n.emulator?$c(n,YT):`https://${n.authDomain}/${QT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="webStorageSupport";class ZT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jf,this._completeRedirectFn=wT,this._overrideRedirectResult=vT}async _openPopup(t,e,r,i){var s;Se((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ku(t,e,r,Oa(),i);return HT(t,o,Gc())}async _openRedirect(t,e,r,i){await this._originValidation(t);const s=await Ku(t,e,r,Oa(),i);return nT(s),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:s}=this.eventManagers[e];return i?Promise.resolve(i):(Se(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await BT(t),r=new RT(t);return e.register("authEvent",i=>(U(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(na,{type:na},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[na];o!==void 0&&e(!!o),se(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=kT(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return qf()||jc()||lo()}}const tI=ZT;var zu="@firebase/auth",Hu="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rI(n){Fn(new cn("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gf(n)},l=new Vv(r,i,s,c);return Fv(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Fn(new cn("auth-internal",t=>{const e=uo(t.getProvider("auth").getImmediate());return(r=>new eI(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Be(zu,Hu,nI(n)),Be(zu,Hu,"esm2017")}/**
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
 */const iI=5*60,sI=sh("authIdTokenMaxAge")||iI;let Wu=null;const oI=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>sI)return;const i=e==null?void 0:e.token;Wu!==i&&(Wu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function aI(n=lh()){const t=Ua(n,"auth");if(t.isInitialized())return t.getImmediate();const e=xv(n,{popupRedirectResolver:tI,persistence:[hT,Zv,Jf]}),r=sh("authTokenSyncURL");if(r){const s=oI(r);Hv(e,s,()=>s(e.currentUser)),zv(e,o=>s(o))}const i=rh("auth");return i&&Uv(e,`http://${i}`),e}rI("Browser");function cI(n){let t,e,r,i;return{c(){t=ve("svg"),e=ve("path"),r=ve("path"),this.h()},l(s){t=Te(s,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var o=O(t);e=Te(o,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),O(e).forEach(E),r=Te(o,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),O(r).forEach(E),o.forEach(E),this.h()},h(){D(e,"stroke-linecap","round"),D(e,"stroke-linejoin","round"),D(e,"d","M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"),D(r,"stroke-linecap","round"),D(r,"stroke-linejoin","round"),D(r,"d","M15 12a3 3 0 11-6 0 3 3 0 016 0z"),D(t,"xmlns","http://www.w3.org/2000/svg"),D(t,"fill","none"),D(t,"viewBox","0 0 24 24"),D(t,"stroke-width","1.5"),D(t,"stroke","currentColor"),D(t,"class",i=n[1].class||ze[n[0]])},m(s,o){W(s,t,o),g(t,e),g(t,r)},p(s,[o]){o&3&&i!==(i=s[1].class||ze[s[0]])&&D(t,"class",i)},i:zt,o:zt,d(s){s&&E(t)}}}function lI(n,t,e){let{size:r="md"}=t;return n.$$set=i=>{e(1,t=Ge(Ge({},t),Ke(i))),"size"in i&&e(0,r=i.size)},t=Ke(t),[r,t]}class uI extends Yn{constructor(t){super(),Jn(this,t,lI,cI,Qn,{size:0})}}function hI(n){let t,e,r;return{c(){t=ve("svg"),e=ve("path"),this.h()},l(i){t=Te(i,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var s=O(t);e=Te(s,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),O(e).forEach(E),s.forEach(E),this.h()},h(){D(e,"stroke-linecap","round"),D(e,"stroke-linejoin","round"),D(e,"d","M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"),D(t,"xmlns","http://www.w3.org/2000/svg"),D(t,"fill","none"),D(t,"viewBox","0 0 24 24"),D(t,"stroke-width","1.5"),D(t,"stroke","currentColor"),D(t,"class",r=n[1].class||ze[n[0]])},m(i,s){W(i,t,s),g(t,e)},p(i,[s]){s&3&&r!==(r=i[1].class||ze[i[0]])&&D(t,"class",r)},i:zt,o:zt,d(i){i&&E(t)}}}function dI(n,t,e){let{size:r="md"}=t;return n.$$set=i=>{e(1,t=Ge(Ge({},t),Ke(i))),"size"in i&&e(0,r=i.size)},t=Ke(t),[r,t]}class fI extends Yn{constructor(t){super(),Jn(this,t,dI,hI,Qn,{size:0})}}function pI(n){let t,e,r;return{c(){t=ve("svg"),e=ve("path"),this.h()},l(i){t=Te(i,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var s=O(t);e=Te(s,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),O(e).forEach(E),s.forEach(E),this.h()},h(){D(e,"stroke-linecap","round"),D(e,"stroke-linejoin","round"),D(e,"d","M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"),D(t,"xmlns","http://www.w3.org/2000/svg"),D(t,"fill","none"),D(t,"viewBox","0 0 24 24"),D(t,"stroke-width","1.5"),D(t,"stroke","currentColor"),D(t,"class",r=n[1].class||ze[n[0]])},m(i,s){W(i,t,s),g(t,e)},p(i,[s]){s&3&&r!==(r=i[1].class||ze[i[0]])&&D(t,"class",r)},i:zt,o:zt,d(i){i&&E(t)}}}function mI(n,t,e){let{size:r="md"}=t;return n.$$set=i=>{e(1,t=Ge(Ge({},t),Ke(i))),"size"in i&&e(0,r=i.size)},t=Ke(t),[r,t]}class gI extends Yn{constructor(t){super(),Jn(this,t,mI,pI,Qn,{size:0})}}function _I(n){let t,e,r;return{c(){t=ve("svg"),e=ve("path"),this.h()},l(i){t=Te(i,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var s=O(t);e=Te(s,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),O(e).forEach(E),s.forEach(E),this.h()},h(){D(e,"stroke-linecap","round"),D(e,"stroke-linejoin","round"),D(e,"d","M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"),D(t,"xmlns","http://www.w3.org/2000/svg"),D(t,"fill","none"),D(t,"viewBox","0 0 24 24"),D(t,"stroke-width","1.5"),D(t,"stroke","currentColor"),D(t,"class",r=n[1].class||ze[n[0]])},m(i,s){W(i,t,s),g(t,e)},p(i,[s]){s&3&&r!==(r=i[1].class||ze[i[0]])&&D(t,"class",r)},i:zt,o:zt,d(i){i&&E(t)}}}function yI(n,t,e){let{size:r="md"}=t;return n.$$set=i=>{e(1,t=Ge(Ge({},t),Ke(i))),"size"in i&&e(0,r=i.size)},t=Ke(t),[r,t]}class EI extends Yn{constructor(t){super(),Jn(this,t,yI,_I,Qn,{size:0})}}function Qu(n,t,e){const r=n.slice();return r[1]=t[e],r}function vI(n){let t,e="N/A";return{c(){t=b("span"),t.textContent=e},l(r){t=k(r,"SPAN",{"data-svelte-h":!0}),Gt(t)!=="svelte-mgbc10"&&(t.textContent=e)},m(r,i){W(r,t,i)},p:zt,d(r){r&&E(t)}}}function TI(n){let t,e=[],r=new Map,i=Pl(n[0]);const s=o=>o[1].l;for(let o=0;o<i.length;o+=1){let a=Qu(n,i,o),c=s(a);r.set(c,e[o]=Yu(c,a))}return{c(){t=b("ul");for(let o=0;o<e.length;o+=1)e[o].c();this.h()},l(o){t=k(o,"UL",{class:!0});var a=O(t);for(let c=0;c<e.length;c+=1)e[c].l(a);a.forEach(E),this.h()},h(){D(t,"class","flex flex-col gap-2")},m(o,a){W(o,t,a);for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(t,null)},p(o,a){a&1&&(i=Pl(o[0]),e=ap(e,a,s,1,o,i,r,t,cp,Yu,null,Qu))},d(o){o&&E(t);for(let a=0;a<e.length;a+=1)e[a].d()}}}function Yu(n,t){let e,r=t[1].l+"",i;return{key:n,first:null,c(){e=b("li"),i=J(r),this.h()},l(s){e=k(s,"LI",{});var o=O(e);i=X(o,r),o.forEach(E),this.h()},h(){this.first=e},m(s,o){W(s,e,o),g(e,i)},p(s,o){t=s,o&1&&r!==(r=t[1].l+"")&&ft(i,r)},d(s){s&&E(e)}}}function II(n){let t,e;function r(o,a){return a&1&&(t=null),t==null&&(t=!!Array.isArray(o[0])),t?TI:vI}let i=r(n,-1),s=i(n);return{c(){s.c(),e=yl()},l(o){s.l(o),e=yl()},m(o,a){s.m(o,a),W(o,e,a)},p(o,[a]){i===(i=r(o,a))&&s?s.p(o,a):(s.d(1),s=i(o),s&&(s.c(),s.m(e.parentNode,e)))},i:zt,o:zt,d(o){o&&E(e),s.d(o)}}}function wI(n,t,e){let{jsonArrayObject:r=[]}=t;return n.$$set=i=>{"jsonArrayObject"in i&&e(0,r=i.jsonArrayObject)},[r]}class es extends Yn{constructor(t){super(),Jn(this,t,wI,II,Qn,{jsonArrayObject:0})}}function AI(n){let t,e="Masuk ke Akun Google untuk melakukan sync",r,i,s,o;return s=new Mr({props:{variant:"subtle",onClick:n[10],$$slots:{default:[SI]},$$scope:{ctx:n}}}),{c(){t=b("p"),t.textContent=e,r=q(),i=b("div"),Mt(s.$$.fragment),this.h()},l(a){t=k(a,"P",{"data-svelte-h":!0}),Gt(t)!=="svelte-ucobge"&&(t.textContent=e),r=G(a),i=k(a,"DIV",{class:!0});var c=O(i);Lt(s.$$.fragment,c),c.forEach(E),this.h()},h(){D(i,"class","flex gap-2 mt-4")},m(a,c){W(a,t,c),W(a,r,c),W(a,i,c),xt(s,i,null),o=!0},p(a,c){const l={};c&1048576&&(l.$$scope={dirty:c,ctx:a}),s.$set(l)},i(a){o||(ht(s.$$.fragment,a),o=!0)},o(a){pt(s.$$.fragment,a),o=!1},d(a){a&&(E(t),E(r),E(i)),Ft(s)}}}function RI(n){let t,e,r,i=n[0].displayName+"",s,o,a,c,l,u,h,d,f,y,R,m,C;c=new Mr({props:{variant:"subtle",onClick:n[12],$$slots:{default:[PI]},$$scope:{ctx:n}}}),u=new Mr({props:{variant:"subtle",onClick:n[13],$$slots:{default:[CI]},$$scope:{ctx:n}}}),d=new Mr({props:{variant:"subtle",onClick:n[14],$$slots:{default:[bI]},$$scope:{ctx:n}}});let A=n[1]&&Ju(n);return m=new Mr({props:{variant:"subtle",onClick:n[11],$$slots:{default:[DI]},$$scope:{ctx:n}}}),{c(){t=b("p"),e=J("Kamu telah login sebagai: "),r=b("b"),s=J(i),o=q(),a=b("div"),Mt(c.$$.fragment),l=q(),Mt(u.$$.fragment),h=q(),Mt(d.$$.fragment),f=q(),A&&A.c(),y=q(),R=b("div"),Mt(m.$$.fragment),this.h()},l(v){t=k(v,"P",{});var M=O(t);e=X(M,"Kamu telah login sebagai: "),r=k(M,"B",{});var Z=O(r);s=X(Z,i),Z.forEach(E),M.forEach(E),o=G(v),a=k(v,"DIV",{class:!0});var Q=O(a);Lt(c.$$.fragment,Q),l=G(Q),Lt(u.$$.fragment,Q),h=G(Q),Lt(d.$$.fragment,Q),Q.forEach(E),f=G(v),A&&A.l(v),y=G(v),R=k(v,"DIV",{class:!0});var N=O(R);Lt(m.$$.fragment,N),N.forEach(E),this.h()},h(){D(a,"class","flex flex-col flex-wrap gap-2 my-4"),D(R,"class","flex flex-col flex-wrap gap-2 mt-4")},m(v,M){W(v,t,M),g(t,e),g(t,r),g(r,s),W(v,o,M),W(v,a,M),xt(c,a,null),g(a,l),xt(u,a,null),g(a,h),xt(d,a,null),W(v,f,M),A&&A.m(v,M),W(v,y,M),W(v,R,M),xt(m,R,null),C=!0},p(v,M){(!C||M&1)&&i!==(i=v[0].displayName+"")&&ft(s,i);const Z={};M&1048576&&(Z.$$scope={dirty:M,ctx:v}),c.$set(Z);const Q={};M&1048576&&(Q.$$scope={dirty:M,ctx:v}),u.$set(Q);const N={};M&1048576&&(N.$$scope={dirty:M,ctx:v}),d.$set(N),v[1]?A?(A.p(v,M),M&2&&ht(A,1)):(A=Ju(v),A.c(),ht(A,1),A.m(y.parentNode,y)):A&&(Zu(),pt(A,1,1,()=>{A=null}),Xu());const at={};M&1048576&&(at.$$scope={dirty:M,ctx:v}),m.$set(at)},i(v){C||(ht(c.$$.fragment,v),ht(u.$$.fragment,v),ht(d.$$.fragment,v),ht(A),ht(m.$$.fragment,v),C=!0)},o(v){pt(c.$$.fragment,v),pt(u.$$.fragment,v),pt(d.$$.fragment,v),pt(A),pt(m.$$.fragment,v),C=!1},d(v){v&&(E(t),E(o),E(a),E(f),E(y),E(R)),Ft(c),Ft(u),Ft(d),A&&A.d(v),Ft(m)}}}function SI(n){let t;return{c(){t=J("Sign In")},l(e){t=X(e,"Sign In")},m(e,r){W(e,t,r)},d(e){e&&E(t)}}}function PI(n){let t,e,r;return t=new uI({}),{c(){Mt(t.$$.fragment),e=J(`
				Bandingkan remote & local data`)},l(i){Lt(t.$$.fragment,i),e=X(i,`
				Bandingkan remote & local data`)},m(i,s){xt(t,i,s),W(i,e,s),r=!0},i(i){r||(ht(t.$$.fragment,i),r=!0)},o(i){pt(t.$$.fragment,i),r=!1},d(i){i&&E(e),Ft(t,i)}}}function CI(n){let t,e,r;return t=new gI({}),{c(){Mt(t.$$.fragment),e=J(`
				Upload local data to the remote`)},l(i){Lt(t.$$.fragment,i),e=X(i,`
				Upload local data to the remote`)},m(i,s){xt(t,i,s),W(i,e,s),r=!0},i(i){r||(ht(t.$$.fragment,i),r=!0)},o(i){pt(t.$$.fragment,i),r=!1},d(i){i&&E(e),Ft(t,i)}}}function bI(n){let t,e,r;return t=new EI({}),{c(){Mt(t.$$.fragment),e=J(`
				Sync local with remote data`)},l(i){Lt(t.$$.fragment,i),e=X(i,`
				Sync local with remote data`)},m(i,s){xt(t,i,s),W(i,e,s),r=!0},i(i){r||(ht(t.$$.fragment,i),r=!0)},o(i){pt(t.$$.fragment,i),r=!1},d(i){i&&E(e),Ft(t,i)}}}function Ju(n){var Zc,tl,el,nl,rl,il,sl,ol,al,cl;let t,e,r,i='<tr><th scope="col">Field</th> <th scope="col">Remote</th> <th scope="col">Local</th></tr>',s,o,a,c,l="Audio",u,h,d=((Zc=n[1])==null?void 0:Zc[w.STORAGE_KEY.AUDIO])+"",f,y,R,m,C,A,v,M="Auto Next",Z,Q,N=((tl=n[1])==null?void 0:tl[w.STORAGE_KEY.AUTO_NEXT])+"",at,ct,gt,I=(n[8]?1:0)+"",Di,po,oe,_n,zc="Tafsir",mo,sr,or=((el=n[1])==null?void 0:el[w.STORAGE_KEY.TAFSIR])+"",Vi,go,ar,cr=(n[7]?1:0)+"",Oi,_o,ae,yn,Hc="Translation",yo,lr,ur=((nl=n[1])==null?void 0:nl[w.STORAGE_KEY.TRANSLATION])+"",Mi,Eo,hr,dr=(n[6]?1:0)+"",Li,vo,ce,En,Wc="Theme",To,fr,pr=((rl=n[1])==null?void 0:rl[w.STORAGE_KEY.THEME])+"",xi,Io,mr,Fi,wo,le,vn,Qc="Location",Ao,Tn,Ro,gr,Ce,Ze,_r=(((il=n[4])==null?void 0:il.lt)||"N/A")+"",Ui,So,yr=(((sl=n[4])==null?void 0:sl.lg)||"N/A")+"",$i,Po,Er,vr=(((ol=n[4])==null?void 0:ol.district)||"N/A")+"",Bi,Co,ue,In,Yc="Last Read",bo,Tr,be,ko,Ir,ke,No,he,wn,Jc="Pinned Surah",Do,wr,Ne,Vo,Ar,De,vt;function Xc(B,rt){var Qt,st;if(typeof((Qt=B[1])==null?void 0:Qt[w.STORAGE_KEY.LOCATION])=="string")return NI;if(typeof((st=B[1])==null?void 0:st[w.STORAGE_KEY.LOCATION])=="object")return kI}let An=Xc(n),Rt=An&&An(n);return be=new es({props:{jsonArrayObject:(al=n[1])==null?void 0:al[w.STORAGE_KEY.LAST_VERSES]}}),ke=new es({props:{jsonArrayObject:n[3]}}),Ne=new es({props:{jsonArrayObject:(cl=n[1])==null?void 0:cl[w.STORAGE_KEY.PINNED_SURAH]}}),De=new es({props:{jsonArrayObject:n[2]}}),{c(){t=b("div"),e=b("table"),r=b("thead"),r.innerHTML=i,s=q(),o=b("tbody"),a=b("tr"),c=b("td"),c.textContent=l,u=q(),h=b("td"),f=J(d),y=q(),R=b("td"),m=J(n[9]),C=q(),A=b("tr"),v=b("td"),v.textContent=M,Z=q(),Q=b("td"),at=J(N),ct=q(),gt=b("td"),Di=J(I),po=q(),oe=b("tr"),_n=b("td"),_n.textContent=zc,mo=q(),sr=b("td"),Vi=J(or),go=q(),ar=b("td"),Oi=J(cr),_o=q(),ae=b("tr"),yn=b("td"),yn.textContent=Hc,yo=q(),lr=b("td"),Mi=J(ur),Eo=q(),hr=b("td"),Li=J(dr),vo=q(),ce=b("tr"),En=b("td"),En.textContent=Wc,To=q(),fr=b("td"),xi=J(pr),Io=q(),mr=b("td"),Fi=J(n[5]),wo=q(),le=b("tr"),vn=b("td"),vn.textContent=Qc,Ao=q(),Tn=b("td"),Rt&&Rt.c(),Ro=q(),gr=b("td"),Ce=b("ul"),Ze=b("li"),Ui=J(_r),So=J(", "),$i=J(yr),Po=q(),Er=b("li"),Bi=J(vr),Co=q(),ue=b("tr"),In=b("td"),In.textContent=Yc,bo=q(),Tr=b("td"),Mt(be.$$.fragment),ko=q(),Ir=b("td"),Mt(ke.$$.fragment),No=q(),he=b("tr"),wn=b("td"),wn.textContent=Jc,Do=q(),wr=b("td"),Mt(Ne.$$.fragment),Vo=q(),Ar=b("td"),Mt(De.$$.fragment),this.h()},l(B){t=k(B,"DIV",{class:!0});var rt=O(t);e=k(rt,"TABLE",{class:!0});var Qt=O(e);r=k(Qt,"THEAD",{"data-svelte-h":!0}),Gt(r)!=="svelte-3stuni"&&(r.innerHTML=i),s=G(Qt),o=k(Qt,"TBODY",{});var st=O(o);a=k(st,"TR",{});var de=O(a);c=k(de,"TD",{"data-svelte-h":!0}),Gt(c)!=="svelte-1x3ujqo"&&(c.textContent=l),u=G(de),h=k(de,"TD",{});var Rr=O(h);f=X(Rr,d),Rr.forEach(E),y=G(de),R=k(de,"TD",{});var Sr=O(R);m=X(Sr,n[9]),Sr.forEach(E),de.forEach(E),C=G(st),A=k(st,"TR",{});var fe=O(A);v=k(fe,"TD",{"data-svelte-h":!0}),Gt(v)!=="svelte-1u1iu5y"&&(v.textContent=M),Z=G(fe),Q=k(fe,"TD",{});var Pr=O(Q);at=X(Pr,N),Pr.forEach(E),ct=G(fe),gt=k(fe,"TD",{});var Cr=O(gt);Di=X(Cr,I),Cr.forEach(E),fe.forEach(E),po=G(st),oe=k(st,"TR",{});var pe=O(oe);_n=k(pe,"TD",{"data-svelte-h":!0}),Gt(_n)!=="svelte-1p9aljd"&&(_n.textContent=zc),mo=G(pe),sr=k(pe,"TD",{});var br=O(sr);Vi=X(br,or),br.forEach(E),go=G(pe),ar=k(pe,"TD",{});var kr=O(ar);Oi=X(kr,cr),kr.forEach(E),pe.forEach(E),_o=G(st),ae=k(st,"TR",{});var me=O(ae);yn=k(me,"TD",{"data-svelte-h":!0}),Gt(yn)!=="svelte-1f95xjb"&&(yn.textContent=Hc),yo=G(me),lr=k(me,"TD",{});var Nr=O(lr);Mi=X(Nr,ur),Nr.forEach(E),Eo=G(me),hr=k(me,"TD",{});var Dr=O(hr);Li=X(Dr,dr),Dr.forEach(E),me.forEach(E),vo=G(st),ce=k(st,"TR",{});var Rn=O(ce);En=k(Rn,"TD",{"data-svelte-h":!0}),Gt(En)!=="svelte-2ua869"&&(En.textContent=Wc),To=G(Rn),fr=k(Rn,"TD",{});var ll=O(fr);xi=X(ll,pr),ll.forEach(E),Io=G(Rn),mr=k(Rn,"TD",{});var ul=O(mr);Fi=X(ul,n[5]),ul.forEach(E),Rn.forEach(E),wo=G(st),le=k(st,"TR",{});var Sn=O(le);vn=k(Sn,"TD",{"data-svelte-h":!0}),Gt(vn)!=="svelte-6o32y9"&&(vn.textContent=Qc),Ao=G(Sn),Tn=k(Sn,"TD",{});var hl=O(Tn);Rt&&Rt.l(hl),hl.forEach(E),Ro=G(Sn),gr=k(Sn,"TD",{});var dl=O(gr);Ce=k(dl,"UL",{class:!0});var ji=O(Ce);Ze=k(ji,"LI",{});var qi=O(Ze);Ui=X(qi,_r),So=X(qi,", "),$i=X(qi,yr),qi.forEach(E),Po=G(ji),Er=k(ji,"LI",{});var fl=O(Er);Bi=X(fl,vr),fl.forEach(E),ji.forEach(E),dl.forEach(E),Sn.forEach(E),Co=G(st),ue=k(st,"TR",{});var Pn=O(ue);In=k(Pn,"TD",{"data-svelte-h":!0}),Gt(In)!=="svelte-r4w2ci"&&(In.textContent=Yc),bo=G(Pn),Tr=k(Pn,"TD",{});var pl=O(Tr);Lt(be.$$.fragment,pl),pl.forEach(E),ko=G(Pn),Ir=k(Pn,"TD",{});var ml=O(Ir);Lt(ke.$$.fragment,ml),ml.forEach(E),Pn.forEach(E),No=G(st),he=k(st,"TR",{});var Cn=O(he);wn=k(Cn,"TD",{"data-svelte-h":!0}),Gt(wn)!=="svelte-uy1aw3"&&(wn.textContent=Jc),Do=G(Cn),wr=k(Cn,"TD",{});var gl=O(wr);Lt(Ne.$$.fragment,gl),gl.forEach(E),Vo=G(Cn),Ar=k(Cn,"TD",{});var _l=O(Ar);Lt(De.$$.fragment,_l),_l.forEach(E),Cn.forEach(E),st.forEach(E),Qt.forEach(E),rt.forEach(E),this.h()},h(){D(Ce,"class","flex flex-col gap-2"),D(e,"class","table-stripped"),D(t,"class","mt-4 relative overflow-x-auto shadow-md rounded-lg border-2 border-secondary")},m(B,rt){W(B,t,rt),g(t,e),g(e,r),g(e,s),g(e,o),g(o,a),g(a,c),g(a,u),g(a,h),g(h,f),g(a,y),g(a,R),g(R,m),g(o,C),g(o,A),g(A,v),g(A,Z),g(A,Q),g(Q,at),g(A,ct),g(A,gt),g(gt,Di),g(o,po),g(o,oe),g(oe,_n),g(oe,mo),g(oe,sr),g(sr,Vi),g(oe,go),g(oe,ar),g(ar,Oi),g(o,_o),g(o,ae),g(ae,yn),g(ae,yo),g(ae,lr),g(lr,Mi),g(ae,Eo),g(ae,hr),g(hr,Li),g(o,vo),g(o,ce),g(ce,En),g(ce,To),g(ce,fr),g(fr,xi),g(ce,Io),g(ce,mr),g(mr,Fi),g(o,wo),g(o,le),g(le,vn),g(le,Ao),g(le,Tn),Rt&&Rt.m(Tn,null),g(le,Ro),g(le,gr),g(gr,Ce),g(Ce,Ze),g(Ze,Ui),g(Ze,So),g(Ze,$i),g(Ce,Po),g(Ce,Er),g(Er,Bi),g(o,Co),g(o,ue),g(ue,In),g(ue,bo),g(ue,Tr),xt(be,Tr,null),g(ue,ko),g(ue,Ir),xt(ke,Ir,null),g(o,No),g(o,he),g(he,wn),g(he,Do),g(he,wr),xt(Ne,wr,null),g(he,Vo),g(he,Ar),xt(De,Ar,null),vt=!0},p(B,rt){var Sr,fe,Pr,Cr,pe,br,kr,me,Nr,Dr;(!vt||rt&2)&&d!==(d=((Sr=B[1])==null?void 0:Sr[w.STORAGE_KEY.AUDIO])+"")&&ft(f,d),(!vt||rt&512)&&ft(m,B[9]),(!vt||rt&2)&&N!==(N=((fe=B[1])==null?void 0:fe[w.STORAGE_KEY.AUTO_NEXT])+"")&&ft(at,N),(!vt||rt&256)&&I!==(I=(B[8]?1:0)+"")&&ft(Di,I),(!vt||rt&2)&&or!==(or=((Pr=B[1])==null?void 0:Pr[w.STORAGE_KEY.TAFSIR])+"")&&ft(Vi,or),(!vt||rt&128)&&cr!==(cr=(B[7]?1:0)+"")&&ft(Oi,cr),(!vt||rt&2)&&ur!==(ur=((Cr=B[1])==null?void 0:Cr[w.STORAGE_KEY.TRANSLATION])+"")&&ft(Mi,ur),(!vt||rt&64)&&dr!==(dr=(B[6]?1:0)+"")&&ft(Li,dr),(!vt||rt&2)&&pr!==(pr=((pe=B[1])==null?void 0:pe[w.STORAGE_KEY.THEME])+"")&&ft(xi,pr),(!vt||rt&32)&&ft(Fi,B[5]),An===(An=Xc(B))&&Rt?Rt.p(B,rt):(Rt&&Rt.d(1),Rt=An&&An(B),Rt&&(Rt.c(),Rt.m(Tn,null))),(!vt||rt&16)&&_r!==(_r=(((br=B[4])==null?void 0:br.lt)||"N/A")+"")&&ft(Ui,_r),(!vt||rt&16)&&yr!==(yr=(((kr=B[4])==null?void 0:kr.lg)||"N/A")+"")&&ft($i,yr),(!vt||rt&16)&&vr!==(vr=(((me=B[4])==null?void 0:me.district)||"N/A")+"")&&ft(Bi,vr);const Qt={};rt&2&&(Qt.jsonArrayObject=(Nr=B[1])==null?void 0:Nr[w.STORAGE_KEY.LAST_VERSES]),be.$set(Qt);const st={};rt&8&&(st.jsonArrayObject=B[3]),ke.$set(st);const de={};rt&2&&(de.jsonArrayObject=(Dr=B[1])==null?void 0:Dr[w.STORAGE_KEY.PINNED_SURAH]),Ne.$set(de);const Rr={};rt&4&&(Rr.jsonArrayObject=B[2]),De.$set(Rr)},i(B){vt||(ht(be.$$.fragment,B),ht(ke.$$.fragment,B),ht(Ne.$$.fragment,B),ht(De.$$.fragment,B),vt=!0)},o(B){pt(be.$$.fragment,B),pt(ke.$$.fragment,B),pt(Ne.$$.fragment,B),pt(De.$$.fragment,B),vt=!1},d(B){B&&E(t),Rt&&Rt.d(),Ft(be),Ft(ke),Ft(Ne),Ft(De)}}}function kI(n){var d,f,y,R,m,C;let t,e,r=(((f=(d=n[1])==null?void 0:d[w.STORAGE_KEY.LOCATION])==null?void 0:f.lt)||"N/A")+"",i,s,o=(((R=(y=n[1])==null?void 0:y[w.STORAGE_KEY.LOCATION])==null?void 0:R.lg)||"N/A")+"",a,c,l,u=(((C=(m=n[1])==null?void 0:m[w.STORAGE_KEY.LOCATION])==null?void 0:C.district)||"N/A")+"",h;return{c(){t=b("ul"),e=b("li"),i=J(r),s=J(", "),a=J(o),c=q(),l=b("li"),h=J(u),this.h()},l(A){t=k(A,"UL",{class:!0});var v=O(t);e=k(v,"LI",{});var M=O(e);i=X(M,r),s=X(M,", "),a=X(M,o),M.forEach(E),c=G(v),l=k(v,"LI",{});var Z=O(l);h=X(Z,u),Z.forEach(E),v.forEach(E),this.h()},h(){D(t,"class","flex flex-col gap-2")},m(A,v){W(A,t,v),g(t,e),g(e,i),g(e,s),g(e,a),g(t,c),g(t,l),g(l,h)},p(A,v){var M,Z,Q,N,at,ct;v&2&&r!==(r=(((Z=(M=A[1])==null?void 0:M[w.STORAGE_KEY.LOCATION])==null?void 0:Z.lt)||"N/A")+"")&&ft(i,r),v&2&&o!==(o=(((N=(Q=A[1])==null?void 0:Q[w.STORAGE_KEY.LOCATION])==null?void 0:N.lg)||"N/A")+"")&&ft(a,o),v&2&&u!==(u=(((ct=(at=A[1])==null?void 0:at[w.STORAGE_KEY.LOCATION])==null?void 0:ct.district)||"N/A")+"")&&ft(h,u)},d(A){A&&E(t)}}}function NI(n){var i;let t,e=((i=n[1])==null?void 0:i[w.STORAGE_KEY.LOCATION])+"",r;return{c(){t=b("span"),r=J(e)},l(s){t=k(s,"SPAN",{});var o=O(t);r=X(o,e),o.forEach(E)},m(s,o){W(s,t,o),g(t,r)},p(s,o){var a;o&2&&e!==(e=((a=s[1])==null?void 0:a[w.STORAGE_KEY.LOCATION])+"")&&ft(r,e)},d(s){s&&E(t)}}}function DI(n){let t,e,r;return t=new fI({}),{c(){Mt(t.$$.fragment),e=J(`
				Sign Out`)},l(i){Lt(t.$$.fragment,i),e=X(i,`
				Sign Out`)},m(i,s){xt(t,i,s),W(i,e,s),r=!0},i(i){r||(ht(t.$$.fragment,i),r=!0)},o(i){pt(t.$$.fragment,i),r=!1},d(i){i&&E(e),Ft(t,i)}}}function VI(n){let t,e,r,i='<h1 class="text-3xl font-bold">🔄 Sync Data</h1>',s,o,a,c,l,u,h,d;t=new lp({props:{title:`Sync Data | ${Oo.TITLE_META}`,desc:`Sync Data ${Oo.TITLE_META}`,url:`${Oo.PATH}sync/`}}),a=new op({props:{items:[{text:"🏠 Beranda",href:"/"}]}});const f=[RI,AI],y=[];function R(m,C){return m[0]?0:1}return u=R(n),h=y[u]=f[u](n),{c(){Mt(t.$$.fragment),e=q(),r=b("div"),r.innerHTML=i,s=q(),o=b("div"),Mt(a.$$.fragment),c=q(),l=b("div"),h.c(),this.h()},l(m){const C=sp("svelte-1n8wbxu",document.head);Lt(t.$$.fragment,C),C.forEach(E),e=G(m),r=k(m,"DIV",{class:!0,"data-svelte-h":!0}),Gt(r)!=="svelte-18n6kr7"&&(r.innerHTML=i),s=G(m),o=k(m,"DIV",{class:!0});var A=O(o);Lt(a.$$.fragment,A),A.forEach(E),c=G(m),l=k(m,"DIV",{class:!0});var v=O(l);h.l(v),v.forEach(E),this.h()},h(){D(r,"class","flex gap-2 px-4 mb-4"),D(o,"class","px-4 mb-4"),D(l,"class","px-4")},m(m,C){xt(t,document.head,null),W(m,e,C),W(m,r,C),W(m,s,C),W(m,o,C),xt(a,o,null),W(m,c,C),W(m,l,C),y[u].m(l,null),d=!0},p(m,[C]){let A=u;u=R(m),u===A?y[u].p(m,C):(Zu(),pt(y[A],1,1,()=>{y[A]=null}),Xu(),h=y[u],h?h.p(m,C):(h=y[u]=f[u](m),h.c()),ht(h,1),h.m(l,null))},i(m){d||(ht(t.$$.fragment,m),ht(a.$$.fragment,m),ht(h),d=!0)},o(m){pt(t.$$.fragment,m),pt(a.$$.fragment,m),pt(h),d=!1},d(m){m&&(E(e),E(r),E(s),E(o),E(c),E(l)),Ft(t),Ft(a),y[u].d()}}}function OI(n,t,e){let r,i,s,o,a,c,l,u;Ve(n,Sl,N=>e(2,r=N)),Ve(n,Rl,N=>e(3,i=N)),Ve(n,Al,N=>e(4,s=N)),Ve(n,wl,N=>e(5,o=N)),Ve(n,vl,N=>e(6,a=N)),Ve(n,El,N=>e(7,c=N)),Ve(n,Tl,N=>e(8,l=N)),Ve(n,Il,N=>e(9,u=N));const d=ch({apiKey:up,authDomain:hp,projectId:dp,storageBucket:fp,messagingSenderId:pp,appId:mp,measurementId:gp}),f=UE(d);let y=null,R=null;const m=new ge;m.addScope("https://www.googleapis.com/auth/userinfo.profile"),m.addScope("https://www.googleapis.com/auth/userinfo.email"),m.setCustomParameters({login_hint:"user@example.com"});const C=aI();return Wv(C,N=>{N?e(0,y=N):e(0,y=null)}),[y,R,r,i,s,o,a,c,l,u,()=>{gT(C,m).then(N=>{const at=N.user;Yt.show({message:`Berhasil login. Selamat datang ${at.displayName}!`,type:"success"})}).catch(N=>{Yt.show({message:`Gagal login: ${N.message}`,type:"error"})})},()=>{Qv(C).then(()=>{Yt.show({message:"Berhasil logout!",type:"success"})}).catch(N=>{Yt.show({message:`Gagal logout: ${N.message}`,type:"error"})})},async()=>{const N=Xi(f,"progress"),at=Xo(N,Zo("uid","==",y==null?void 0:y.uid)),ct=await ta(at);ct.size>0?ct.forEach(gt=>{e(1,R=gt.data())}):e(1,R={uid:y==null?void 0:y.uid,[w.STORAGE_KEY.AUDIO]:"N/A",[w.STORAGE_KEY.AUTO_NEXT]:"N/A",[w.STORAGE_KEY.TAFSIR]:"N/A",[w.STORAGE_KEY.TRANSLATION]:"N/A",[w.STORAGE_KEY.THEME]:"N/A",[w.STORAGE_KEY.LOCATION]:{lt:"N/A",lg:"N/A",district:"N/A"},[w.STORAGE_KEY.LAST_VERSES]:[],[w.STORAGE_KEY.PINNED_SURAH]:[]})},async()=>{const N={uid:y==null?void 0:y.uid,[w.STORAGE_KEY.AUDIO]:u,[w.STORAGE_KEY.AUTO_NEXT]:l?1:0,[w.STORAGE_KEY.TAFSIR]:c?1:0,[w.STORAGE_KEY.TRANSLATION]:a?1:0,[w.STORAGE_KEY.THEME]:o||"",[w.STORAGE_KEY.LOCATION]:s||null,[w.STORAGE_KEY.LAST_VERSES]:i||null,[w.STORAGE_KEY.PINNED_SURAH]:r||null},at=Xi(f,"progress"),ct=Xo(at,Zo("uid","==",y==null?void 0:y.uid)),gt=await ta(ct);if(gt.size>0)try{gt.forEach(async I=>{await iv(I.ref,N)}),Yt.show({message:"Berhasil memperbarui data remote dengan data lokal",type:"success"})}catch(I){console.error("Error updating document: ",N,I),Yt.show({message:"Gagal memperbarui data lokal ke remote",type:"error"})}else try{await sv(Xi(f,"progress"),N),Yt.show({message:"Berhasil mengunggah data lokal ke remote",type:"success"})}catch(I){console.error("Error adding new document: ",N,I),Yt.show({message:"Gagal mengunggah data lokal ke remote",type:"error"})}},async()=>{const N=Xi(f,"progress"),at=Xo(N,Zo("uid","==",y==null?void 0:y.uid)),ct=await ta(at);ct.size>0?(ct.forEach(gt=>{const I=gt.data();I&&(El.set((I==null?void 0:I[w.STORAGE_KEY.TAFSIR])===1),localStorage.setItem(w.STORAGE_KEY.TAFSIR,(I==null?void 0:I[w.STORAGE_KEY.TAFSIR])===1?"y":"n"),vl.set((I==null?void 0:I[w.STORAGE_KEY.TRANSLATION])===1),localStorage.setItem(w.STORAGE_KEY.TRANSLATION,(I==null?void 0:I[w.STORAGE_KEY.TRANSLATION])===1?"y":"n"),Tl.set((I==null?void 0:I[w.STORAGE_KEY.AUTO_NEXT])===1),localStorage.setItem(w.STORAGE_KEY.AUTO_NEXT,(I==null?void 0:I[w.STORAGE_KEY.AUTO_NEXT])===1?"y":"n"),Il.set(I==null?void 0:I[w.STORAGE_KEY.AUDIO]),localStorage.setItem(w.STORAGE_KEY.AUDIO,(I==null?void 0:I[w.STORAGE_KEY.AUDIO])||"1"),I!=null&&I[w.STORAGE_KEY.THEME]&&(wl.set(I==null?void 0:I[w.STORAGE_KEY.THEME]),localStorage.setItem(w.STORAGE_KEY.THEME,(I==null?void 0:I[w.STORAGE_KEY.THEME])||"light")),I!=null&&I[w.STORAGE_KEY.LOCATION]&&(Al.set(I==null?void 0:I[w.STORAGE_KEY.LOCATION]),localStorage.setItem(w.STORAGE_KEY.LOCATION,JSON.stringify((I==null?void 0:I[w.STORAGE_KEY.LOCATION])||{}))),I!=null&&I[w.STORAGE_KEY.LAST_VERSES]&&(Rl.set(I==null?void 0:I[w.STORAGE_KEY.LAST_VERSES]),localStorage.setItem(w.STORAGE_KEY.LAST_VERSES,JSON.stringify((I==null?void 0:I[w.STORAGE_KEY.LAST_VERSES])||[]))),I!=null&&I[w.STORAGE_KEY.PINNED_SURAH]&&(Sl.set(I==null?void 0:I[w.STORAGE_KEY.PINNED_SURAH]),localStorage.setItem(w.STORAGE_KEY.PINNED_SURAH,JSON.stringify((I==null?void 0:I[w.STORAGE_KEY.PINNED_SURAH])||[]))),e(1,R=gt.data()))}),Yt.show({message:"Data di lokal berhasil diperbarui!",type:"success"})):Yt.show({message:"Kamu belum memiliki data apapun di remote. Data di lokal tidak akan diperbarui!",type:"error"})}]}class HI extends Yn{constructor(t){super(),Jn(this,t,OI,VI,Qn,{})}}export{HI as component};
