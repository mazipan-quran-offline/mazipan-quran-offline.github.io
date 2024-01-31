import{s as Xn,n as zt,b as Ge,e as Ke,c as Ve}from"../chunks/scheduler.y1IYj0lG.js";import{S as Zn,i as tr,v as Ie,w as we,b as V,h as E,k as N,l as W,m as _,A as wl,e as k,a as D,g as Gt,t as J,f as X,o as pt,c as Lt,s as q,u as dp,j as Mt,d as G,n as xt,q as mt,z as sh,p as ht,r as Ft,C as ih}from"../chunks/index.SZ3OBICS.js";import{B as fp}from"../chunks/Breadcrumb.gkW4B4Pr.js";import{B as Br}from"../chunks/Button.9D0fjuX9.js";import{a as Al,s as Rl,b as Sl,c as Pl,f as Cl,d as bl,l as kl,p as Dl}from"../chunks/index.OMXWm-Ct.js";import{t as Yt}from"../chunks/toast.KCUS8uco.js";import{f as Nl,u as pp,G as mp,T as Uo,C as R}from"../chunks/constants.EMDSxYEh.js";import{C as ze}from"../chunks/utils.qPwj6JBm.js";import{M as gp}from"../chunks/MetaTag.et-WB6it.js";const _p="AIzaSyChBEY5EioADQmnfs3B28M3y1boTuGQmyQ",yp="baca-quran-id.firebaseapp.com",Ep="baca-quran-id",vp="baca-quran-id.appspot.com",Tp="1022678905567",Ip="1:1022678905567:web:18b62c4d8d12dabb9caf6a",wp="G-SFVBG4QWNG";var Ol={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Ap=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[e++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[e++],o=n[e++],a=n[e++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[e++],o=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},ah={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(e[u],e[h],e[d],e[f])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(oh(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ap(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=e[n.charAt(s++)],a=s<n.length?e[n.charAt(s)]:0;++s;const l=s<n.length?e[n.charAt(s)]:64;++s;const h=s<n.length?e[n.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new Rp;const d=i<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Rp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sp=function(n){const t=oh(n);return ah.encodeByteArray(t,!0)},pi=function(n){return Sp(n).replace(/\./g,"")},ch=function(n){try{return ah.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Pp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cp=()=>Pp().__FIREBASE_DEFAULTS__,bp=()=>{if(typeof process>"u"||typeof Ol>"u")return;const n=Ol.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ch(n[1]);return t&&JSON.parse(t)},Mi=()=>{try{return Cp()||bp()||kp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},lh=n=>{var t,e;return(e=(t=Mi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Dp=n=>{const t=lh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},uh=()=>{var n;return(n=Mi())===null||n===void 0?void 0:n.config},hh=n=>{var t;return(t=Mi())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Op(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[pi(JSON.stringify(e)),pi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function Lp(){var n;const t=(n=Mi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Mp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function xp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fp(){const n=ft();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Up(){return!Lp()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dh(){try{return typeof indexedDB=="object"}catch{return!1}}function Bp(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="FirebaseError";class Ce extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=$p,Object.setPrototypeOf(this,Ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?jp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ce(s,a,r)}}function jp(n,t){return n.replace(qp,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const qp=/\{\$([^}]+)}/g;function Gp(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function mi(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const i=n[s],o=t[s];if(Vl(i)&&Vl(o)){if(!mi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Vl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Kp(n,t){const e=new zp(n,t);return e.subscribe.bind(e)}class zp{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Hp(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=Bo),s.error===void 0&&(s.error=Bo),s.complete===void 0&&(s.complete=Bo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hp(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Bo(){}/**
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
 */function Pt(n){return n&&n._delegate?n._delegate:n}class un{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Wp{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Np;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Yp(t))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=tn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=tn){return this.instances.has(t)}getOptions(t=tn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qp(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=tn){return this.component?this.component.multipleInstances?t:tn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qp(n){return n===tn?void 0:n}function Yp(n){return n.instantiationMode==="EAGER"}/**
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
 */class Jp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Wp(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Xp={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Zp=K.INFO,tm={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},em=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=tm[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ba{constructor(t){this.name=t,this._logLevel=Zp,this._logHandler=em,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Xp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const nm=(n,t)=>t.some(e=>n instanceof e);let Ll,Ml;function rm(){return Ll||(Ll=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sm(){return Ml||(Ml=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fh=new WeakMap,ca=new WeakMap,ph=new WeakMap,$o=new WeakMap,$a=new WeakMap;function im(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{e(Be(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&fh.set(e,n)}).catch(()=>{}),$a.set(t,n),t}function om(n){if(ca.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{e(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});ca.set(n,t)}let la={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ca.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ph.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Be(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function am(n){la=n(la)}function cm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(jo(this),t,...e);return ph.set(r,t.sort?t.sort():[t]),Be(r)}:sm().includes(n)?function(...t){return n.apply(jo(this),t),Be(fh.get(this))}:function(...t){return Be(n.apply(jo(this),t))}}function lm(n){return typeof n=="function"?cm(n):(n instanceof IDBTransaction&&om(n),nm(n,rm())?new Proxy(n,la):n)}function Be(n){if(n instanceof IDBRequest)return im(n);if($o.has(n))return $o.get(n);const t=lm(n);return t!==n&&($o.set(n,t),$a.set(t,n)),t}const jo=n=>$a.get(n);function um(n,t,{blocked:e,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,t),a=Be(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Be(o.result),c.oldVersion,c.newVersion,Be(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const hm=["get","getKey","getAll","getAllKeys","count"],dm=["put","add","delete","clear"],qo=new Map;function xl(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(qo.get(t))return qo.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=dm.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hm.includes(e)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[e](...a),s&&c.done]))[0]};return qo.set(t,i),i}am(n=>({...n,get:(t,e,r)=>xl(t,e)||n.get(t,e,r),has:(t,e)=>!!xl(t,e)||n.has(t,e)}));/**
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
 */class fm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(pm(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function pm(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ua="@firebase/app",Fl="0.9.26";/**
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
 */const hn=new Ba("@firebase/app"),mm="@firebase/app-compat",gm="@firebase/analytics-compat",_m="@firebase/analytics",ym="@firebase/app-check-compat",Em="@firebase/app-check",vm="@firebase/auth",Tm="@firebase/auth-compat",Im="@firebase/database",wm="@firebase/database-compat",Am="@firebase/functions",Rm="@firebase/functions-compat",Sm="@firebase/installations",Pm="@firebase/installations-compat",Cm="@firebase/messaging",bm="@firebase/messaging-compat",km="@firebase/performance",Dm="@firebase/performance-compat",Nm="@firebase/remote-config",Om="@firebase/remote-config-compat",Vm="@firebase/storage",Lm="@firebase/storage-compat",Mm="@firebase/firestore",xm="@firebase/firestore-compat",Fm="firebase",Um="10.7.2";/**
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
 */const ha="[DEFAULT]",Bm={[ua]:"fire-core",[mm]:"fire-core-compat",[_m]:"fire-analytics",[gm]:"fire-analytics-compat",[Em]:"fire-app-check",[ym]:"fire-app-check-compat",[vm]:"fire-auth",[Tm]:"fire-auth-compat",[Im]:"fire-rtdb",[wm]:"fire-rtdb-compat",[Am]:"fire-fn",[Rm]:"fire-fn-compat",[Sm]:"fire-iid",[Pm]:"fire-iid-compat",[Cm]:"fire-fcm",[bm]:"fire-fcm-compat",[km]:"fire-perf",[Dm]:"fire-perf-compat",[Nm]:"fire-rc",[Om]:"fire-rc-compat",[Vm]:"fire-gcs",[Lm]:"fire-gcs-compat",[Mm]:"fire-fst",[xm]:"fire-fst-compat","fire-js":"fire-js",[Fm]:"fire-js-all"};/**
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
 */const gi=new Map,da=new Map;function $m(n,t){try{n.container.addComponent(t)}catch(e){hn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function $n(n){const t=n.name;if(da.has(t))return hn.debug(`There were multiple attempts to register component ${t}.`),!1;da.set(t,n);for(const e of gi.values())$m(e,n);return!0}function ja(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const jm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$e=new ms("app","Firebase",jm);/**
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
 */class qm{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $e.create("app-deleted",{appName:this._name})}}/**
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
 */const er=Um;function mh(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ha,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw $e.create("bad-app-name",{appName:String(s)});if(e||(e=uh()),!e)throw $e.create("no-options");const i=gi.get(s);if(i){if(mi(e,i.options)&&mi(r,i.config))return i;throw $e.create("duplicate-app",{appName:s})}const o=new Jp(s);for(const c of da.values())o.addComponent(c);const a=new qm(e,r,o);return gi.set(s,a),a}function gh(n=ha){const t=gi.get(n);if(!t&&n===ha&&uh())return mh();if(!t)throw $e.create("no-app",{appName:n});return t}function je(n,t,e){var r;let s=(r=Bm[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}$n(new un(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Gm="firebase-heartbeat-database",Km=1,Xr="firebase-heartbeat-store";let Go=null;function _h(){return Go||(Go=um(Gm,Km,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Xr)}catch(e){console.warn(e)}}}}).catch(n=>{throw $e.create("idb-open",{originalErrorMessage:n.message})})),Go}async function zm(n){try{return await(await _h()).transaction(Xr).objectStore(Xr).get(yh(n))}catch(t){if(t instanceof Ce)hn.warn(t.message);else{const e=$e.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});hn.warn(e.message)}}}async function Ul(n,t){try{const r=(await _h()).transaction(Xr,"readwrite");await r.objectStore(Xr).put(t,yh(n)),await r.done}catch(e){if(e instanceof Ce)hn.warn(e.message);else{const r=$e.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});hn.warn(r.message)}}}function yh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Hm=1024,Wm=30*24*60*60*1e3;class Qm{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Jm(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Bl();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Wm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bl(),{heartbeatsToSend:r,unsentEntries:s}=Ym(this._heartbeatsCache.heartbeats),i=pi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Bl(){return new Date().toISOString().substring(0,10)}function Ym(n,t=Hm){const e=[];let r=n.slice();for(const s of n){const i=e.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),$l(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),$l(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Jm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dh()?Bp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await zm(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ul(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ul(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function $l(n){return pi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Xm(n){$n(new un("platform-logger",t=>new fm(t),"PRIVATE")),$n(new un("heartbeat",t=>new Qm(t),"PRIVATE")),je(ua,Fl,n),je(ua,Fl,"esm2017"),je("fire-js","")}Xm("");var Zm="firebase",tg="10.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je(Zm,tg,"app");var eg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I,qa=qa||{},x=eg||self;function xi(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function _s(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function ng(n){return Object.prototype.hasOwnProperty.call(n,Ko)&&n[Ko]||(n[Ko]=++rg)}var Ko="closure_uid_"+(1e9*Math.random()>>>0),rg=0;function sg(n,t,e){return n.call.apply(n.bind,arguments)}function ig(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(t,s)}}return function(){return n.apply(t,arguments)}}function Nt(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Nt=sg:Nt=ig,Nt.apply(null,arguments)}function Ws(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function vt(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Ye(){this.s=this.s,this.o=this.o}var og=0;Ye.prototype.s=!1;Ye.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),og!=0)&&ng(this)};Ye.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Eh=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function Ga(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function jl(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(xi(r)){const s=n.length||0,i=r.length||0;n.length=s+i;for(let o=0;o<i;o++)n[s+o]=r[o]}else n.push(r)}}function Ot(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}Ot.prototype.h=function(){this.defaultPrevented=!0};var ag=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const e=()=>{};x.addEventListener("test",e,t),x.removeEventListener("test",e,t)}catch{}return n}();function Zr(n){return/^[\s\xa0]*$/.test(n)}function Fi(){var n=x.navigator;return n&&(n=n.userAgent)?n:""}function Jt(n){return Fi().indexOf(n)!=-1}function Ka(n){return Ka[" "](n),n}Ka[" "]=function(){};function cg(n,t){var e=t_;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var lg=Jt("Opera"),jn=Jt("Trident")||Jt("MSIE"),vh=Jt("Edge"),fa=vh||jn,Th=Jt("Gecko")&&!(Fi().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge"))&&!(Jt("Trident")||Jt("MSIE"))&&!Jt("Edge"),ug=Fi().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge");function Ih(){var n=x.document;return n?n.documentMode:void 0}var pa;t:{var zo="",Ho=function(){var n=Fi();if(Th)return/rv:([^\);]+)(\)|;)/.exec(n);if(vh)return/Edge\/([\d\.]+)/.exec(n);if(jn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(ug)return/WebKit\/(\S+)/.exec(n);if(lg)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ho&&(zo=Ho?Ho[1]:""),jn){var Wo=Ih();if(Wo!=null&&Wo>parseFloat(zo)){pa=String(Wo);break t}}pa=zo}var ma;if(x.document&&jn){var ql=Ih();ma=ql||parseInt(pa,10)||void 0}else ma=void 0;var hg=ma;function ts(n,t){if(Ot.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(Th){t:{try{Ka(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:dg[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&ts.$.h.call(this)}}vt(ts,Ot);var dg={2:"touch",3:"pen",4:"mouse"};ts.prototype.h=function(){ts.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var ys="closure_listenable_"+(1e6*Math.random()|0),fg=0;function pg(n,t,e,r,s){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=s,this.key=++fg,this.fa=this.ia=!1}function Ui(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function za(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function mg(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function wh(n){const t={};for(const e in n)t[e]=n[e];return t}const Gl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ah(n,t){let e,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(e in r)n[e]=r[e];for(let i=0;i<Gl.length;i++)e=Gl[i],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Bi(n){this.src=n,this.g={},this.h=0}Bi.prototype.add=function(n,t,e,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=_a(n,t,r,s);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new pg(t,this.src,i,!!r,s),t.ia=e,n.push(t)),t};function ga(n,t){var e=t.type;if(e in n.g){var r=n.g[e],s=Eh(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ui(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function _a(n,t,e,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.fa&&i.listener==t&&i.capture==!!e&&i.la==r)return s}return-1}var Ha="closure_lm_"+(1e6*Math.random()|0),Qo={};function Rh(n,t,e,r,s){if(r&&r.once)return Ph(n,t,e,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Rh(n,t[i],e,r,s);return null}return e=Ya(e),n&&n[ys]?n.O(t,e,_s(r)?!!r.capture:!!r,s):Sh(n,t,e,!1,r,s)}function Sh(n,t,e,r,s,i){if(!t)throw Error("Invalid event type");var o=_s(s)?!!s.capture:!!s,a=Qa(n);if(a||(n[Ha]=a=new Bi(n)),e=a.add(t,e,r,o,i),e.proxy)return e;if(r=gg(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)ag||(s=o),s===void 0&&(s=!1),n.addEventListener(t.toString(),r,s);else if(n.attachEvent)n.attachEvent(bh(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function gg(){function n(e){return t.call(n.src,n.listener,e)}const t=_g;return n}function Ph(n,t,e,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ph(n,t[i],e,r,s);return null}return e=Ya(e),n&&n[ys]?n.P(t,e,_s(r)?!!r.capture:!!r,s):Sh(n,t,e,!0,r,s)}function Ch(n,t,e,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Ch(n,t[i],e,r,s);else r=_s(r)?!!r.capture:!!r,e=Ya(e),n&&n[ys]?(n=n.i,t=String(t).toString(),t in n.g&&(i=n.g[t],e=_a(i,e,r,s),-1<e&&(Ui(i[e]),Array.prototype.splice.call(i,e,1),i.length==0&&(delete n.g[t],n.h--)))):n&&(n=Qa(n))&&(t=n.g[t.toString()],n=-1,t&&(n=_a(t,e,r,s)),(e=-1<n?t[n]:null)&&Wa(e))}function Wa(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[ys])ga(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(bh(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=Qa(t))?(ga(e,n),e.h==0&&(e.src=null,t[Ha]=null)):Ui(n)}}}function bh(n){return n in Qo?Qo[n]:Qo[n]="on"+n}function _g(n,t){if(n.fa)n=!0;else{t=new ts(t,this);var e=n.listener,r=n.la||n.src;n.ia&&Wa(n),n=e.call(r,t)}return n}function Qa(n){return n=n[Ha],n instanceof Bi?n:null}var Yo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ya(n){return typeof n=="function"?n:(n[Yo]||(n[Yo]=function(t){return n.handleEvent(t)}),n[Yo])}function Et(){Ye.call(this),this.i=new Bi(this),this.S=this,this.J=null}vt(Et,Ye);Et.prototype[ys]=!0;Et.prototype.removeEventListener=function(n,t,e,r){Ch(this,n,t,e,r)};function Rt(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new Ot(t,n);else if(t instanceof Ot)t.target=t.target||n;else{var s=t;t=new Ot(r,n),Ah(t,s)}if(s=!0,e)for(var i=e.length-1;0<=i;i--){var o=t.g=e[i];s=Qs(o,r,!0,t)&&s}if(o=t.g=n,s=Qs(o,r,!0,t)&&s,s=Qs(o,r,!1,t)&&s,e)for(i=0;i<e.length;i++)o=t.g=e[i],s=Qs(o,r,!1,t)&&s}Et.prototype.N=function(){if(Et.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)Ui(e[r]);delete n.g[t],n.h--}}this.J=null};Et.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};Et.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function Qs(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==e){var a=o.listener,c=o.la||o.src;o.ia&&ga(n.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ja=x.JSON.stringify;class yg{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Eg(){var n=Xa;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class vg{constructor(){this.h=this.g=null}add(t,e){const r=kh.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var kh=new yg(()=>new Tg,n=>n.reset());class Tg{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ig(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function wg(n){x.setTimeout(()=>{throw n},0)}let es,ns=!1,Xa=new vg,Dh=()=>{const n=x.Promise.resolve(void 0);es=()=>{n.then(Ag)}};var Ag=()=>{for(var n;n=Eg();){try{n.h.call(n.g)}catch(e){wg(e)}var t=kh;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}ns=!1};function $i(n,t){Et.call(this),this.h=n||1,this.g=t||x,this.j=Nt(this.qb,this),this.l=Date.now()}vt($i,Et);I=$i.prototype;I.ga=!1;I.T=null;I.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Rt(this,"tick"),this.ga&&(Za(this),this.start()))}};I.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Za(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}I.N=function(){$i.$.N.call(this),Za(this),delete this.g};function tc(n,t,e){if(typeof n=="function")e&&(n=Nt(n,e));else if(n&&typeof n.handleEvent=="function")n=Nt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:x.setTimeout(n,t||0)}function Nh(n){n.g=tc(()=>{n.g=null,n.i&&(n.i=!1,Nh(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class Rg extends Ye{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Nh(this)}N(){super.N(),this.g&&(x.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rs(n){Ye.call(this),this.h=n,this.g={}}vt(rs,Ye);var Kl=[];function Oh(n,t,e,r){Array.isArray(e)||(e&&(Kl[0]=e.toString()),e=Kl);for(var s=0;s<e.length;s++){var i=Rh(t,e[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function Vh(n){za(n.g,function(t,e){this.g.hasOwnProperty(e)&&Wa(t)},n),n.g={}}rs.prototype.N=function(){rs.$.N.call(this),Vh(this)};rs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ji(){this.g=!0}ji.prototype.Ea=function(){this.g=!1};function Sg(n,t,e,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+e+`
`+o})}function Pg(n,t,e,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+e+`
`+i+" "+o})}function Ln(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+bg(n,e)+(r?" "+r:"")})}function Cg(n,t){n.info(function(){return"TIMEOUT: "+t})}ji.prototype.info=function(){};function bg(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ja(e)}catch{return t}}var gn={},zl=null;function qi(){return zl=zl||new Et}gn.Ta="serverreachability";function Lh(n){Ot.call(this,gn.Ta,n)}vt(Lh,Ot);function ss(n){const t=qi();Rt(t,new Lh(t))}gn.STAT_EVENT="statevent";function Mh(n,t){Ot.call(this,gn.STAT_EVENT,n),this.stat=t}vt(Mh,Ot);function Ut(n){const t=qi();Rt(t,new Mh(t,n))}gn.Ua="timingevent";function xh(n,t){Ot.call(this,gn.Ua,n),this.size=t}vt(xh,Ot);function Es(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return x.setTimeout(function(){n()},t)}var Gi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Fh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ec(){}ec.prototype.h=null;function Hl(n){return n.h||(n.h=n.i())}function Uh(){}var vs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function nc(){Ot.call(this,"d")}vt(nc,Ot);function rc(){Ot.call(this,"c")}vt(rc,Ot);var ya;function Ki(){}vt(Ki,ec);Ki.prototype.g=function(){return new XMLHttpRequest};Ki.prototype.i=function(){return{}};ya=new Ki;function Ts(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new rs(this),this.P=kg,n=fa?125:void 0,this.V=new $i(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Bh}function Bh(){this.i=null,this.g="",this.h=!1}var kg=45e3,$h={},Ea={};I=Ts.prototype;I.setTimeout=function(n){this.P=n};function va(n,t,e){n.L=1,n.A=Hi(Re(t)),n.u=e,n.S=!0,jh(n,null)}function jh(n,t){n.G=Date.now(),Is(n),n.B=Re(n.A);var e=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),Yh(e.i,"t",r),n.o=0,e=n.l.J,n.h=new Bh,n.g=_d(n.l,e?t:null,!n.u),0<n.O&&(n.M=new Rg(Nt(n.Pa,n,n.g),n.O)),Oh(n.U,n.g,"readystatechange",n.nb),t=n.I?wh(n.I):{},n.u?(n.v||(n.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,t)):(n.v="GET",n.g.ha(n.B,n.v,null,t)),ss(),Sg(n.j,n.v,n.B,n.m,n.W,n.u)}I.nb=function(n){n=n.target;const t=this.M;t&&Xt(n)==3?t.l():this.Pa(n)};I.Pa=function(n){try{if(n==this.g)t:{const u=Xt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||fa||this.g&&(this.h.h||this.g.ja()||Jl(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?ss(3):ss(2)),zi(this);var e=this.g.da();this.ca=e;e:if(qh(this)){var r=Jl(this.g);n="";var s=r.length,i=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nn(this),Kr(this);var o="";break e}this.h.i=new x.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,Pg(this.j,this.v,this.B,this.m,this.W,u,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Zr(a)){var l=a;break e}}l=null}if(e=l)Ln(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ta(this,e);else{this.i=!1,this.s=3,Ut(12),nn(this),Kr(this);break t}}this.S?(Gh(this,u,o),fa&&this.i&&u==3&&(Oh(this.U,this.V,"tick",this.mb),this.V.start())):(Ln(this.j,this.m,o,null),Ta(this,o)),u==4&&nn(this),this.i&&!this.J&&(u==4?fd(this.l,this):(this.i=!1,Is(this)))}else Jg(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ut(12)):(this.s=0,Ut(13)),nn(this),Kr(this)}}}catch{}finally{}};function qh(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function Gh(n,t,e){let r=!0,s;for(;!n.J&&n.o<e.length;)if(s=Dg(n,e),s==Ea){t==4&&(n.s=4,Ut(14),r=!1),Ln(n.j,n.m,null,"[Incomplete Response]");break}else if(s==$h){n.s=4,Ut(15),Ln(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else Ln(n.j,n.m,s,null),Ta(n,s);qh(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),t!=4||e.length!=0||n.h.h||(n.s=1,Ut(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),lc(t),t.M=!0,Ut(11))):(Ln(n.j,n.m,e,"[Invalid Chunked Response]"),nn(n),Kr(n))}I.mb=function(){if(this.g){var n=Xt(this.g),t=this.g.ja();this.o<t.length&&(zi(this),Gh(this,n,t),this.i&&n!=4&&Is(this))}};function Dg(n,t){var e=n.o,r=t.indexOf(`
`,e);return r==-1?Ea:(e=Number(t.substring(e,r)),isNaN(e)?$h:(r+=1,r+e>t.length?Ea:(t=t.slice(r,r+e),n.o=r+e,t)))}I.cancel=function(){this.J=!0,nn(this)};function Is(n){n.Y=Date.now()+n.P,Kh(n,n.P)}function Kh(n,t){if(n.C!=null)throw Error("WatchDog timer not null");n.C=Es(Nt(n.lb,n),t)}function zi(n){n.C&&(x.clearTimeout(n.C),n.C=null)}I.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(Cg(this.j,this.B),this.L!=2&&(ss(),Ut(17)),nn(this),this.s=2,Kr(this)):Kh(this,this.Y-n)};function Kr(n){n.l.H==0||n.J||fd(n.l,n)}function nn(n){zi(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,Za(n.V),Vh(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function Ta(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||Ia(e.i,n))){if(!n.K&&Ia(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)Ei(e),Ji(e);else break t;cc(e),Ut(18)}}else e.Fa=s[1],0<e.Fa-e.V&&37500>s[2]&&e.G&&e.A==0&&!e.v&&(e.v=Es(Nt(e.ib,e),6e3));if(1>=Zh(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else rn(e,11)}else if((n.K||e.g==n)&&Ei(e),!Zr(t))for(s=e.Ja.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(e.V=l[0],l=l[1],e.H==2)if(l[0]=="c"){e.K=l[1],e.pa=l[2];const u=l[3];u!=null&&(e.ra=u,e.l.info("VER="+e.ra));const h=l[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const f=n.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(sc(i,i.h),i.h=null))}if(r.F){const P=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;P&&(r.Da=P,tt(r.I,r.F,P))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=gd(r,r.J?r.pa:null,r.Y),o.K){td(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(zi(a),Is(a)),r.g=o}else hd(r);0<e.j.length&&Xi(e)}else l[0]!="stop"&&l[0]!="close"||rn(e,7);else e.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?rn(e,7):ac(e):l[0]!="noop"&&e.h&&e.h.Aa(l),e.A=0)}}ss(4)}catch{}}function Ng(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(xi(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function Og(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(xi(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function zh(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(xi(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=Og(n),r=Ng(n),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],e&&e[i],n)}var Hh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vg(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),s=null;if(0<=r){var i=n[e].substring(0,r);s=n[e].substring(r+1)}else i=n[e];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function cn(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof cn){this.h=n.h,_i(this,n.j),this.s=n.s,this.g=n.g,yi(this,n.m),this.l=n.l;var t=n.i,e=new is;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),Wl(this,e),this.o=n.o}else n&&(t=String(n).match(Hh))?(this.h=!1,_i(this,t[1]||"",!0),this.s=$r(t[2]||""),this.g=$r(t[3]||"",!0),yi(this,t[4]),this.l=$r(t[5]||"",!0),Wl(this,t[6]||"",!0),this.o=$r(t[7]||"")):(this.h=!1,this.i=new is(null,this.h))}cn.prototype.toString=function(){var n=[],t=this.j;t&&n.push(jr(t,Ql,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(jr(t,Ql,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(jr(e,e.charAt(0)=="/"?xg:Mg,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",jr(e,Ug)),n.join("")};function Re(n){return new cn(n)}function _i(n,t,e){n.j=e?$r(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function yi(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function Wl(n,t,e){t instanceof is?(n.i=t,Bg(n.i,n.h)):(e||(t=jr(t,Fg)),n.i=new is(t,n.h))}function tt(n,t,e){n.i.set(t,e)}function Hi(n){return tt(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function $r(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function jr(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,Lg),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Lg(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Ql=/[#\/\?@]/g,Mg=/[#\?:]/g,xg=/[#\?]/g,Fg=/[#\?@]/g,Ug=/#/g;function is(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function Je(n){n.g||(n.g=new Map,n.h=0,n.i&&Vg(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}I=is.prototype;I.add=function(n,t){Je(this),this.i=null,n=nr(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function Wh(n,t){Je(n),t=nr(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function Qh(n,t){return Je(n),t=nr(n,t),n.g.has(t)}I.forEach=function(n,t){Je(this),this.g.forEach(function(e,r){e.forEach(function(s){n.call(t,s,r,this)},this)},this)};I.ta=function(){Je(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const s=n[r];for(let i=0;i<s.length;i++)e.push(t[r])}return e};I.Z=function(n){Je(this);let t=[];if(typeof n=="string")Qh(this,n)&&(t=t.concat(this.g.get(nr(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};I.set=function(n,t){return Je(this),this.i=null,n=nr(this,n),Qh(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};I.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function Yh(n,t,e){Wh(n,t),0<e.length&&(n.i=null,n.g.set(nr(n,t),Ga(e)),n.h+=e.length)}I.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),n.push(s)}}return this.i=n.join("&")};function nr(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Bg(n,t){t&&!n.j&&(Je(n),n.i=null,n.g.forEach(function(e,r){var s=r.toLowerCase();r!=s&&(Wh(this,r),Yh(this,s,e))},n)),n.j=t}var $g=class{constructor(n,t){this.g=n,this.map=t}};function Jh(n){this.l=n||jg,x.PerformanceNavigationTiming?(n=x.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(x.g&&x.g.Ka&&x.g.Ka()&&x.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var jg=10;function Xh(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Zh(n){return n.h?1:n.g?n.g.size:0}function Ia(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function sc(n,t){n.g?n.g.add(t):n.h=t}function td(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}Jh.prototype.cancel=function(){if(this.i=ed(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function ed(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return Ga(n.i)}var qg=class{stringify(n){return x.JSON.stringify(n,void 0)}parse(n){return x.JSON.parse(n,void 0)}};function Gg(){this.g=new qg}function Kg(n,t,e){const r=e||"";try{zh(n,function(s,i){let o=s;_s(s)&&(o=Ja(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function zg(n,t){const e=new ji;if(x.Image){const r=new Image;r.onload=Ws(Ys,e,r,"TestLoadImage: loaded",!0,t),r.onerror=Ws(Ys,e,r,"TestLoadImage: error",!1,t),r.onabort=Ws(Ys,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ws(Ys,e,r,"TestLoadImage: timeout",!1,t),x.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function Ys(n,t,e,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Wi(n){this.l=n.ec||null,this.j=n.ob||!1}vt(Wi,ec);Wi.prototype.g=function(){return new Qi(this.l,this.j)};Wi.prototype.i=function(n){return function(){return n}}({});function Qi(n,t){Et.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=ic,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vt(Qi,Et);var ic=0;I=Qi.prototype;I.open=function(n,t){if(this.readyState!=ic)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,os(this)};I.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||x).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};I.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ws(this)),this.readyState=ic};I.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,os(this)),this.g&&(this.readyState=3,os(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof x.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;nd(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function nd(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}I.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?ws(this):os(this),this.readyState==3&&nd(this)}};I.Za=function(n){this.g&&(this.response=this.responseText=n,ws(this))};I.Ya=function(n){this.g&&(this.response=n,ws(this))};I.ka=function(){this.g&&ws(this)};function ws(n){n.readyState=4,n.l=null,n.j=null,n.A=null,os(n)}I.setRequestHeader=function(n,t){this.v.append(n,t)};I.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};I.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function os(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Hg=x.JSON.parse;function ot(n){Et.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=rd,this.L=this.M=!1}vt(ot,Et);var rd="",Wg=/^https?$/i,Qg=["POST","PUT"];I=ot.prototype;I.Oa=function(n){this.M=n};I.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ya.g(),this.C=this.u?Hl(this.u):Hl(ya),this.g.onreadystatechange=Nt(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(i){Yl(this,i);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)e.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())e.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(i=>i.toLowerCase()=="content-type"),s=x.FormData&&n instanceof x.FormData,!(0<=Eh(Qg,t))||r||s||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of e)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{od(this),0<this.B&&((this.L=Yg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Nt(this.ua,this)):this.A=tc(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){Yl(this,i)}};function Yg(n){return jn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}I.ua=function(){typeof qa<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Rt(this,"timeout"),this.abort(8))};function Yl(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,sd(n),Yi(n)}function sd(n){n.F||(n.F=!0,Rt(n,"complete"),Rt(n,"error"))}I.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Rt(this,"complete"),Rt(this,"abort"),Yi(this))};I.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yi(this,!0)),ot.$.N.call(this)};I.La=function(){this.s||(this.G||this.v||this.l?id(this):this.kb())};I.kb=function(){id(this)};function id(n){if(n.h&&typeof qa<"u"&&(!n.C[1]||Xt(n)!=4||n.da()!=2)){if(n.v&&Xt(n)==4)tc(n.La,0,n);else if(Rt(n,"readystatechange"),Xt(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var s=String(n.I).match(Hh)[1]||null;!s&&x.self&&x.self.location&&(s=x.self.location.protocol.slice(0,-1)),r=!Wg.test(s?s.toLowerCase():"")}e=r}if(e)Rt(n,"complete"),Rt(n,"success");else{n.m=6;try{var i=2<Xt(n)?n.g.statusText:""}catch{i=""}n.j=i+" ["+n.da()+"]",sd(n)}}finally{Yi(n)}}}}function Yi(n,t){if(n.g){od(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||Rt(n,"ready");try{e.onreadystatechange=r}catch{}}}function od(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(x.clearTimeout(n.A),n.A=null)}I.isActive=function(){return!!this.g};function Xt(n){return n.g?n.g.readyState:0}I.da=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};I.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};I.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),Hg(t)}};function Jl(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case rd:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Jg(n){const t={};n=(n.g&&2<=Xt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Zr(n[r]))continue;var e=Ig(n[r]);const s=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const i=t[s]||[];t[s]=i,i.push(e)}mg(t,function(r){return r.join(", ")})}I.Ia=function(){return this.m};I.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ad(n){let t="";return za(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function oc(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=ad(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):tt(n,t,e))}function xr(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function cd(n){this.Ga=0,this.j=[],this.l=new ji,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=xr("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=xr("baseRetryDelayMs",5e3,n),this.hb=xr("retryDelaySeedMs",1e4,n),this.eb=xr("forwardChannelMaxRetries",2,n),this.xa=xr("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Jh(n&&n.concurrentRequestLimit),this.Ja=new Gg,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}I=cd.prototype;I.ra=8;I.H=1;function ac(n){if(ld(n),n.H==3){var t=n.W++,e=Re(n.I);if(tt(e,"SID",n.K),tt(e,"RID",t),tt(e,"TYPE","terminate"),As(n,e),t=new Ts(n,n.l,t),t.L=2,t.A=Hi(Re(e)),e=!1,x.navigator&&x.navigator.sendBeacon)try{e=x.navigator.sendBeacon(t.A.toString(),"")}catch{}!e&&x.Image&&(new Image().src=t.A,e=!0),e||(t.g=_d(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Is(t)}md(n)}function Ji(n){n.g&&(lc(n),n.g.cancel(),n.g=null)}function ld(n){Ji(n),n.u&&(x.clearTimeout(n.u),n.u=null),Ei(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&x.clearTimeout(n.m),n.m=null)}function Xi(n){if(!Xh(n.i)&&!n.m){n.m=!0;var t=n.Na;es||Dh(),ns||(es(),ns=!0),Xa.add(t,n),n.C=0}}function Xg(n,t){return Zh(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Es(Nt(n.Na,n,t),pd(n,n.C)),n.C++,!0)}I.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new Ts(this,this.l,n);let i=this.s;if(this.U&&(i?(i=wh(i),Ah(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=ud(this,s,t),e=Re(this.I),tt(e,"RID",n),tt(e,"CVER",22),this.F&&tt(e,"X-HTTP-Session-Id",this.F),As(this,e),i&&(this.O?t="headers="+encodeURIComponent(String(ad(i)))+"&"+t:this.o&&oc(e,this.o,i)),sc(this.i,s),this.bb&&tt(e,"TYPE","init"),this.P?(tt(e,"$req",t),tt(e,"SID","null"),s.aa=!0,va(s,e,null)):va(s,e,t),this.H=2}}else this.H==3&&(n?Xl(this,n):this.j.length==0||Xh(this.i)||Xl(this))};function Xl(n,t){var e;t?e=t.m:e=n.W++;const r=Re(n.I);tt(r,"SID",n.K),tt(r,"RID",e),tt(r,"AID",n.V),As(n,r),n.o&&n.s&&oc(r,n.o,n.s),e=new Ts(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=ud(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),sc(n.i,e),va(e,r,t)}function As(n,t){n.na&&za(n.na,function(e,r){tt(t,r,e)}),n.h&&zh({},function(e,r){tt(t,r,e)})}function ud(n,t,e){e=Math.min(n.j.length,e);var r=n.h?Nt(n.h.Va,n.h,n):null;t:{var s=n.j;let i=-1;for(;;){const o=["count="+e];i==-1?0<e?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<e;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{Kg(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function hd(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;es||Dh(),ns||(es(),ns=!0),Xa.add(t,n),n.A=0}}function cc(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Es(Nt(n.Ma,n),pd(n,n.A)),n.A++,!0)}I.Ma=function(){if(this.u=null,dd(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Es(Nt(this.jb,this),n)}};I.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ut(10),Ji(this),dd(this))};function lc(n){n.B!=null&&(x.clearTimeout(n.B),n.B=null)}function dd(n){n.g=new Ts(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=Re(n.wa);tt(t,"RID","rpc"),tt(t,"SID",n.K),tt(t,"AID",n.V),tt(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&tt(t,"TO",n.qa),tt(t,"TYPE","xmlhttp"),As(n,t),n.o&&n.s&&oc(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.A=Hi(Re(t)),e.u=null,e.S=!0,jh(e,n)}I.ib=function(){this.v!=null&&(this.v=null,Ji(this),cc(this),Ut(19))};function Ei(n){n.v!=null&&(x.clearTimeout(n.v),n.v=null)}function fd(n,t){var e=null;if(n.g==t){Ei(n),lc(n),n.g=null;var r=2}else if(Ia(n.i,t))e=t.F,td(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.u?t.u.length:0,t=Date.now()-t.G;var s=n.C;r=qi(),Rt(r,new xh(r,e)),Xi(n)}else hd(n);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&Xg(n,t)||r==2&&cc(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),s){case 1:rn(n,5);break;case 4:rn(n,10);break;case 3:rn(n,6);break;default:rn(n,2)}}}function pd(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function rn(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=Nt(n.pb,n);e||(e=new cn("//www.google.com/images/cleardot.gif"),x.location&&x.location.protocol=="http"||_i(e,"https"),Hi(e)),zg(e.toString(),r)}else Ut(2);n.H=0,n.h&&n.h.za(t),md(n),ld(n)}I.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Ut(2)):(this.l.info("Failed to ping google.com"),Ut(1))};function md(n){if(n.H=0,n.ma=[],n.h){const t=ed(n.i);(t.length!=0||n.j.length!=0)&&(jl(n.ma,t),jl(n.ma,n.j),n.i.i.length=0,Ga(n.j),n.j.length=0),n.h.ya()}}function gd(n,t,e){var r=e instanceof cn?Re(e):new cn(e);if(r.g!="")t&&(r.g=t+"."+r.g),yi(r,r.m);else{var s=x.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new cn(null);r&&_i(i,r),t&&(i.g=t),s&&yi(i,s),e&&(i.l=e),r=i}return e=n.F,t=n.Da,e&&t&&tt(r,e,t),tt(r,"VER",n.ra),As(n,r),r}function _d(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n.Ha&&!n.va?new ot(new Wi({ob:e})):new ot(n.va),t.Oa(n.J),t}I.isActive=function(){return!!this.h&&this.h.isActive(this)};function yd(){}I=yd.prototype;I.Ba=function(){};I.Aa=function(){};I.za=function(){};I.ya=function(){};I.isActive=function(){return!0};I.Va=function(){};function vi(){if(jn&&!(10<=Number(hg)))throw Error("Environmental error: no available transport.")}vi.prototype.g=function(n,t){return new qt(n,t)};function qt(n,t){Et.call(this),this.g=new cd(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!Zr(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Zr(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new rr(this)}vt(qt,Et);qt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;Ut(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=gd(n,null,n.Y),Xi(n)};qt.prototype.close=function(){ac(this.g)};qt.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=Ja(n),n=e);t.j.push(new $g(t.fb++,n)),t.H==3&&Xi(t)};qt.prototype.N=function(){this.g.h=null,delete this.j,ac(this.g),delete this.g,qt.$.N.call(this)};function Ed(n){nc.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}vt(Ed,nc);function vd(){rc.call(this),this.status=1}vt(vd,rc);function rr(n){this.g=n}vt(rr,yd);rr.prototype.Ba=function(){Rt(this.g,"a")};rr.prototype.Aa=function(n){Rt(this.g,new Ed(n))};rr.prototype.za=function(n){Rt(this.g,new vd)};rr.prototype.ya=function(){Rt(this.g,"b")};function Zg(){this.blockSize=-1}function Ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}vt(Ht,Zg);Ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Jo(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(s=0;16>s;++s)r[s]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],s=n.g[2];var i=n.g[3],o=t+(i^e&(s^i))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[3]+3250441966&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[7]+4249261313&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[11]+2304563134&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[15]+1236535329&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(e^s))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[0]+3921069994&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[4]+3889429448&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[8]+1163531501&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[12]+2368359562&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(e^s^i)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[14]+4259657740&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[10]+3200236656&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[6]+76029189&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[2]+3299628645&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(s^(e|~i))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[5]+4237533241&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[1]+2240044497&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[13]+1309151649&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+i&4294967295}Ht.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=e;)Jo(this,n,i),i+=this.blockSize;if(typeof n=="string"){for(;i<t;)if(r[s++]=n.charCodeAt(i++),s==this.blockSize){Jo(this,r),s=0;break}}else for(;i<t;)if(r[s++]=n[i++],s==this.blockSize){Jo(this,r),s=0;break}}this.h=s,this.i+=t};Ht.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function Y(n,t){this.h=t;for(var e=[],r=!0,s=n.length-1;0<=s;s--){var i=n[s]|0;r&&i==t||(e[s]=i,r=!1)}this.g=e}var t_={};function uc(n){return-128<=n&&128>n?cg(n,function(t){return new Y([t|0],0>t?-1:0)}):new Y([n|0],0>n?-1:0)}function Zt(n){if(isNaN(n)||!isFinite(n))return Mn;if(0>n)return wt(Zt(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=wa;return new Y(t,0)}function Td(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return wt(Td(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=Zt(Math.pow(t,8)),r=Mn,s=0;s<n.length;s+=8){var i=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+i),t);8>i?(i=Zt(Math.pow(t,i)),r=r.R(i).add(Zt(o))):(r=r.R(e),r=r.add(Zt(o)))}return r}var wa=4294967296,Mn=uc(0),Aa=uc(1),Zl=uc(16777216);I=Y.prototype;I.ea=function(){if(Kt(this))return-wt(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:wa+r)*t,t*=wa}return n};I.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Ee(this))return"0";if(Kt(this))return"-"+wt(this).toString(n);for(var t=Zt(Math.pow(n,6)),e=this,r="";;){var s=Ii(e,t).g;e=Ti(e,s.R(t));var i=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=s,Ee(e))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};I.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Ee(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function Kt(n){return n.h==-1}I.X=function(n){return n=Ti(this,n),Kt(n)?-1:Ee(n)?0:1};function wt(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new Y(e,~n.h).add(Aa)}I.abs=function(){return Kt(this)?wt(this):this};I.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(n.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,e[s]=o<<16|i}return new Y(e,e[e.length-1]&-2147483648?-1:0)};function Ti(n,t){return n.add(wt(t))}I.R=function(n){if(Ee(this)||Ee(n))return Mn;if(Kt(this))return Kt(n)?wt(this).R(wt(n)):wt(wt(this).R(n));if(Kt(n))return wt(this.R(wt(n)));if(0>this.X(Zl)&&0>n.X(Zl))return Zt(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<n.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(s)>>>16,c=n.D(s)&65535;e[2*r+2*s]+=o*c,Js(e,2*r+2*s),e[2*r+2*s+1]+=i*c,Js(e,2*r+2*s+1),e[2*r+2*s+1]+=o*a,Js(e,2*r+2*s+1),e[2*r+2*s+2]+=i*a,Js(e,2*r+2*s+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new Y(e,0)};function Js(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function Fr(n,t){this.g=n,this.h=t}function Ii(n,t){if(Ee(t))throw Error("division by zero");if(Ee(n))return new Fr(Mn,Mn);if(Kt(n))return t=Ii(wt(n),t),new Fr(wt(t.g),wt(t.h));if(Kt(t))return t=Ii(n,wt(t)),new Fr(wt(t.g),t.h);if(30<n.g.length){if(Kt(n)||Kt(t))throw Error("slowDivide_ only works with positive integers.");for(var e=Aa,r=t;0>=r.X(n);)e=tu(e),r=tu(r);var s=Dn(e,1),i=Dn(r,1);for(r=Dn(r,2),e=Dn(e,2);!Ee(r);){var o=i.add(r);0>=o.X(n)&&(s=s.add(e),i=o),r=Dn(r,1),e=Dn(e,1)}return t=Ti(n,s.R(t)),new Fr(s,t)}for(s=Mn;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Zt(e),o=i.R(t);Kt(o)||0<o.X(n);)e-=r,i=Zt(e),o=i.R(t);Ee(i)&&(i=Aa),s=s.add(i),n=Ti(n,o)}return new Fr(s,n)}I.gb=function(n){return Ii(this,n).h};I.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new Y(e,this.h&n.h)};I.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new Y(e,this.h|n.h)};I.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new Y(e,this.h^n.h)};function tu(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new Y(e,n.h)}function Dn(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,s=[],i=0;i<r;i++)s[i]=0<t?n.D(i+e)>>>t|n.D(i+e+1)<<32-t:n.D(i+e);return new Y(s,n.h)}vi.prototype.createWebChannel=vi.prototype.g;qt.prototype.send=qt.prototype.u;qt.prototype.open=qt.prototype.m;qt.prototype.close=qt.prototype.close;Gi.NO_ERROR=0;Gi.TIMEOUT=8;Gi.HTTP_ERROR=6;Fh.COMPLETE="complete";Uh.EventType=vs;vs.OPEN="a";vs.CLOSE="b";vs.ERROR="c";vs.MESSAGE="d";Et.prototype.listen=Et.prototype.O;ot.prototype.listenOnce=ot.prototype.P;ot.prototype.getLastError=ot.prototype.Sa;ot.prototype.getLastErrorCode=ot.prototype.Ia;ot.prototype.getStatus=ot.prototype.da;ot.prototype.getResponseJson=ot.prototype.Wa;ot.prototype.getResponseText=ot.prototype.ja;ot.prototype.send=ot.prototype.ha;ot.prototype.setWithCredentials=ot.prototype.Oa;Ht.prototype.digest=Ht.prototype.l;Ht.prototype.reset=Ht.prototype.reset;Ht.prototype.update=Ht.prototype.j;Y.prototype.add=Y.prototype.add;Y.prototype.multiply=Y.prototype.R;Y.prototype.modulo=Y.prototype.gb;Y.prototype.compare=Y.prototype.X;Y.prototype.toNumber=Y.prototype.ea;Y.prototype.toString=Y.prototype.toString;Y.prototype.getBits=Y.prototype.D;Y.fromNumber=Zt;Y.fromString=Td;var e_=function(){return new vi},n_=function(){return qi()},Xo=Gi,r_=Fh,s_=gn,eu={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Xs=Uh,i_=ot,o_=Ht,xn=Y;const nu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}kt.UNAUTHENTICATED=new kt(null),kt.GOOGLE_CREDENTIALS=new kt("google-credentials-uid"),kt.FIRST_PARTY=new kt("first-party-uid"),kt.MOCK_USER=new kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr="10.7.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new Ba("@firebase/firestore");function Ur(){return dn.logLevel}function T(n,...t){if(dn.logLevel<=K.DEBUG){const e=t.map(hc);dn.debug(`Firestore (${sr}): ${n}`,...e)}}function ie(n,...t){if(dn.logLevel<=K.ERROR){const e=t.map(hc);dn.error(`Firestore (${sr}): ${n}`,...e)}}function qn(n,...t){if(dn.logLevel<=K.WARN){const e=t.map(hc);dn.warn(`Firestore (${sr}): ${n}`,...e)}}function hc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function M(n="Unexpected state"){const t=`FIRESTORE (${sr}) INTERNAL ASSERTION FAILED: `+n;throw ie(t),new Error(t)}function Z(n,t){n||M()}function B(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends Ce{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class a_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(kt.UNAUTHENTICATED))}shutdown(){}}class c_{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class l_{constructor(t){this.t=t,this.currentUser=kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=c=>this.i!==r?(r=this.i,e(c)):Promise.resolve();let i=new Ae;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ae,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{T("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(T("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ae)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(T("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new Id(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Z(t===null||typeof t=="string"),new kt(t)}}class u_{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=kt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class h_{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new u_(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class d_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class f_{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=i=>{i.error!=null&&T("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,T("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{T("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):T("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Z(typeof e.token=="string"),this.R=e.token,new d_(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=p_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%t.length))}return r}}function H(n,t){return n<t?-1:n>t?1:0}function Gn(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new S(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new S(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new S(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new S(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return gt.fromMillis(Date.now())}static fromDate(t){return gt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new gt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?H(this.nanoseconds,t.nanoseconds):H(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.timestamp=t}static fromTimestamp(t){return new F(t)}static min(){return new F(new gt(0,0))}static max(){return new F(new gt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(),r===void 0?r=t.length-e:r>t.length-e&&M(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return as.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof as?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=t.get(s),o=e.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class et extends as{construct(t,e,r){return new et(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new S(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new et(e)}static emptyPath(){return new et([])}}const m_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class At extends as{construct(t,e,r){return new At(t,e,r)}static isValidIdentifier(t){return m_.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),At.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new At(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new S(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new S(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new S(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new S(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new At(e)}static emptyPath(){return new At([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(et.fromString(t))}static fromName(t){return new O(et.fromString(t).popFirst(5))}static empty(){return new O(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new et(t.slice()))}}function g_(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new gt(e+1,0):new gt(e,r));return new He(s,O.empty(),t)}function __(n){return new He(n.readTime,n.key,-1)}class He{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new He(F.min(),O.empty(),-1)}static max(){return new He(F.max(),O.empty(),-1)}}function y_(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:H(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class v_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rs(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==E_)throw n;T("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new m((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof m?e:m.resolve(e)}catch(e){return m.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):m.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):m.reject(e)}static resolve(t){return new m((e,r)=>{e(t)})}static reject(t){return new m((e,r)=>{r(t)})}static waitFor(t){return new m((e,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&e()},c=>r(c))}),o=!0,i===s&&e()})}static or(t){let e=m.resolve(!1);for(const r of t)e=e.next(s=>s?m.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,i)=>{r.push(e.call(this,s,i))}),this.waitFor(r)}static mapArray(t,e){return new m((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;e(t[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(t,e){return new m((r,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new Ae,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new zr(t,e.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=fc(r.target.error);this.V.reject(new zr(t,s))}}static open(t,e,r,s){try{return new dc(e,t.transaction(s,r))}catch(i){throw new zr(e,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(T("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new I_(e)}}class sn{constructor(t,e,r){this.name=t,this.version=e,this.p=r,sn.S(ft())===12.2&&ie("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return T("SimpleDb","Removing database:",t),en(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!dh())return!1;if(sn.C())return!0;const t=ft(),e=sn.S(t),r=0<e&&e<10,s=sn.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(T("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;e(o)},s.onblocked=()=>{r(new zr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new S(p.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new S(p.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new zr(t,o))},s.onupgradeneeded=i=>{T("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{T("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,r,s){const i=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=dc.open(this.db,t,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),m.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(T("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class T_{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return en(this.k.delete())}}class zr extends S{constructor(t,e){super(p.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Ss(n){return n.name==="IndexedDbTransactionError"}class I_{constructor(t){this.store=t}put(t,e){let r;return e!==void 0?(T("SimpleDb","PUT",this.store.name,t,e),r=this.store.put(e,t)):(T("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),en(r)}add(t){return T("SimpleDb","ADD",this.store.name,t,t),en(this.store.add(t))}get(t){return en(this.store.get(t)).next(e=>(e===void 0&&(e=null),T("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return T("SimpleDb","DELETE",this.store.name,t),en(this.store.delete(t))}count(){return T("SimpleDb","COUNT",this.store.name),en(this.store.count())}W(t,e){const r=this.options(t,e),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new m((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(t,e){const r=this.store.getAll(t,e===null?void 0:e);return new m((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,e){T("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,e);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,e){let r;e?r=t:(r={},e=t);const s=this.cursor(r);return this.G(s,e)}Z(t){const e=this.cursor({});return new m((r,s)=>{e.onerror=i=>{const o=fc(i.target.error);s(o)},e.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,e){const r=[];return new m((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new T_(a),l=e(a.primaryKey,a.value,c);if(l instanceof m){const u=l.catch(h=>(c.done(),m.reject(h)));r.push(u)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>m.waitFor(r))}options(t,e){let r;return t!==void 0&&(typeof t=="string"?r=t:e=t),{index:r,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,e):r.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function en(n){return new m((t,e)=>{n.onsuccess=r=>{const s=r.target.result;t(s)},n.onerror=r=>{const s=fc(r.target.error);e(s)}})}let ru=!1;function fc(n){const t=sn.S(ft());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const r=new S("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ru||(ru=!0,setTimeout(()=>{throw r},0)),r}}return n}/**
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
 */class pc{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}pc._e=-1;function Zi(n){return n==null}function wi(n){return n===0&&1/n==-1/0}function w_(n){return typeof n=="number"&&Number.isInteger(n)&&!wi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function _n(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ad(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,e){this.comparator=t,this.root=e||It.EMPTY}insert(t,e){return new st(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,It.BLACK,null,null))}remove(t){return new st(this.comparator,this.root.remove(t,this.comparator).copy(null,null,It.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Zs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Zs(this.root,t,this.comparator,!1)}getReverseIterator(){return new Zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Zs(this.root,t,this.comparator,!0)}}class Zs{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class It{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??It.RED,this.left=s??It.EMPTY,this.right=i??It.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new It(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return It.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return It.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,It.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,It.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}It.EMPTY=null,It.RED=!0,It.BLACK=!1;It.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,r,s,i){return this}insert(t,e,r){return new It(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.comparator=t,this.data=new st(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new iu(this.data.getIterator())}getIteratorFrom(t){return new iu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof St)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new St(this.comparator);return e.data=t,e}}class iu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.fields=t,t.sort(At.comparator)}static empty(){return new $t([])}unionWith(t){let e=new St(At.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new $t(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Gn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Rd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Rd("Invalid base64 string: "+i):i}}(t);return new Vt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return H(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const A_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function We(n){if(Z(!!n),typeof n=="string"){let t=0;const e=A_.exec(n);if(Z(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ut(n.seconds),nanos:ut(n.nanos)}}function ut(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fn(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function gc(n){const t=n.mapValue.fields.__previous_value__;return mc(t)?gc(t):t}function cs(n){const t=We(n.mapValue.fields.__local_write_time__.timestampValue);return new gt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t,e,r,s,i,o,a,c,l){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class ls{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ls("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ls&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?mc(n)?4:S_(n)?9007199254740991:10:M()}function oe(n,t){if(n===t)return!0;const e=pn(n);if(e!==pn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return cs(n).isEqual(cs(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=We(s.timestampValue),a=We(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,i){return fn(s.bytesValue).isEqual(fn(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,i){return ut(s.geoPointValue.latitude)===ut(i.geoPointValue.latitude)&&ut(s.geoPointValue.longitude)===ut(i.geoPointValue.longitude)}(n,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ut(s.integerValue)===ut(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ut(s.doubleValue),a=ut(i.doubleValue);return o===a?wi(o)===wi(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Gn(n.arrayValue.values||[],t.arrayValue.values||[],oe);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(su(o)!==su(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!oe(o[c],a[c])))return!1;return!0}(n,t);default:return M()}}function us(n,t){return(n.values||[]).find(e=>oe(e,t))!==void 0}function Kn(n,t){if(n===t)return 0;const e=pn(n),r=pn(t);if(e!==r)return H(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,t.booleanValue);case 2:return function(i,o){const a=ut(i.integerValue||i.doubleValue),c=ut(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,t);case 3:return ou(n.timestampValue,t.timestampValue);case 4:return ou(cs(n),cs(t));case 5:return H(n.stringValue,t.stringValue);case 6:return function(i,o){const a=fn(i),c=fn(o);return a.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=H(a[l],c[l]);if(u!==0)return u}return H(a.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,o){const a=H(ut(i.latitude),ut(o.latitude));return a!==0?a:H(ut(i.longitude),ut(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Kn(a[l],c[l]);if(u)return u}return H(a.length,c.length)}(n.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===ti.mapValue&&o===ti.mapValue)return 0;if(i===ti.mapValue)return 1;if(o===ti.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=H(c[h],u[h]);if(d!==0)return d;const f=Kn(a[c[h]],l[u[h]]);if(f!==0)return f}return H(c.length,u.length)}(n.mapValue,t.mapValue);default:throw M()}}function ou(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return H(n,t);const e=We(n),r=We(t),s=H(e.seconds,r.seconds);return s!==0?s:H(e.nanos,r.nanos)}function zn(n){return Ra(n)}function Ra(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=We(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return fn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const i of e.values||[])s?s=!1:r+=",",r+=Ra(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ra(e.fields[o])}`;return s+"}"}(n.mapValue):M()}function au(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Sa(n){return!!n&&"integerValue"in n}function _c(n){return!!n&&"arrayValue"in n}function cu(n){return!!n&&"nullValue"in n}function lu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function oi(n){return!!n&&"mapValue"in n}function Hr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return _n(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Hr(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Hr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function S_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this.value=t}static empty(){return new Bt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!oi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Hr(e)}setAll(t){let e=At.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,r,s),r={},s=[],e=a.popLast()}o?r[a.lastSegment()]=Hr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());oi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return oe(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];oi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){_n(e,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Bt(Hr(this.value))}}function Sd(n){const t=[];return _n(n.fields,(e,r)=>{const s=new At([e]);if(oi(r)){const i=Sd(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new $t(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,e,r,s,i,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Dt(t,0,F.min(),F.min(),F.min(),Bt.empty(),0)}static newFoundDocument(t,e,r,s){return new Dt(t,1,e,F.min(),r,s,0)}static newNoDocument(t,e){return new Dt(t,2,e,F.min(),F.min(),Bt.empty(),0)}static newUnknownDocument(t,e){return new Dt(t,3,e,F.min(),F.min(),Bt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Dt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ai{constructor(t,e){this.position=t,this.inclusive=e}}function uu(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const i=t[s],o=n.position[s];if(i.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),e.key):r=Kn(o,e.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function hu(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!oe(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Ri{constructor(t,e="asc"){this.field=t,this.dir=e}}function P_(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Pd{}class dt extends Pd{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new b_(t,e,r):e==="array-contains"?new N_(t,r):e==="in"?new O_(t,r):e==="not-in"?new V_(t,r):e==="array-contains-any"?new L_(t,r):new dt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new k_(t,r):new D_(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Kn(e,this.value)):e!==null&&pn(this.value)===pn(e)&&this.matchesComparison(Kn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends Pd{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new Wt(t,e)}matches(t){return Cd(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Cd(n){return n.op==="and"}function bd(n){return C_(n)&&Cd(n)}function C_(n){for(const t of n.filters)if(t instanceof Wt)return!1;return!0}function Pa(n){if(n instanceof dt)return n.field.canonicalString()+n.op.toString()+zn(n.value);if(bd(n))return n.filters.map(t=>Pa(t)).join(",");{const t=n.filters.map(e=>Pa(e)).join(",");return`${n.op}(${t})`}}function kd(n,t){return n instanceof dt?function(r,s){return s instanceof dt&&r.op===s.op&&r.field.isEqual(s.field)&&oe(r.value,s.value)}(n,t):n instanceof Wt?function(r,s){return s instanceof Wt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&kd(o,s.filters[a]),!0):!1}(n,t):void M()}function Dd(n){return n instanceof dt?function(e){return`${e.field.canonicalString()} ${e.op} ${zn(e.value)}`}(n):n instanceof Wt?function(e){return e.op.toString()+" {"+e.getFilters().map(Dd).join(" ,")+"}"}(n):"Filter"}class b_ extends dt{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class k_ extends dt{constructor(t,e){super(t,"in",e),this.keys=Nd("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class D_ extends dt{constructor(t,e){super(t,"not-in",e),this.keys=Nd("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Nd(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class N_ extends dt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return _c(e)&&us(e.arrayValue,this.value)}}class O_ extends dt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&us(this.value.arrayValue,e)}}class V_ extends dt{constructor(t,e){super(t,"not-in",e)}matches(t){if(us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!us(this.value.arrayValue,e)}}class L_ extends dt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!_c(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>us(this.value.arrayValue,r))}}/**
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
 */class M_{constructor(t,e=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function du(n,t=null,e=[],r=[],s=null,i=null,o=null){return new M_(n,t,e,r,s,i,o)}function yc(n){const t=B(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Pa(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Zi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>zn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>zn(r)).join(",")),t.ce=e}return t.ce}function Ec(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!P_(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!kd(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!hu(n.startAt,t.startAt)&&hu(n.endAt,t.endAt)}function Ca(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t,e=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function x_(n,t,e,r,s,i,o,a){return new Ps(n,t,e,r,s,i,o,a)}function Od(n){return new Ps(n)}function fu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Vd(n){return n.collectionGroup!==null}function Wr(n){const t=B(n);if(t.le===null){t.le=[];const e=new Set;for(const i of t.explicitOrderBy)t.le.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new St(At.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.le.push(new Ri(i,r))}),e.has(At.keyField().canonicalString())||t.le.push(new Ri(At.keyField(),r))}return t.le}function te(n){const t=B(n);return t.he||(t.he=F_(t,Wr(n))),t.he}function F_(n,t){if(n.limitType==="F")return du(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ri(s.field,i)});const e=n.endAt?new Ai(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ai(n.startAt.position,n.startAt.inclusive):null;return du(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ba(n,t){const e=n.filters.concat([t]);return new Ps(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function ka(n,t,e){return new Ps(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function to(n,t){return Ec(te(n),te(t))&&n.limitType===t.limitType}function Ld(n){return`${yc(te(n))}|lt:${n.limitType}`}function Nn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Dd(s)).join(", ")}]`),Zi(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>zn(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>zn(s)).join(",")),`Target(${r})`}(te(n))}; limitType=${n.limitType})`}function eo(n,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):O.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,t)&&function(r,s){for(const i of Wr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=uu(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Wr(r),s)||r.endAt&&!function(o,a,c){const l=uu(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Wr(r),s))}(n,t)}function U_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Md(n){return(t,e)=>{let r=!1;for(const s of Wr(n)){const i=B_(s,t,e);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function B_(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Kn(c,l):M()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){_n(this.inner,(e,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Ad(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=new st(O.comparator);function Se(){return $_}const xd=new st(O.comparator);function qr(...n){let t=xd;for(const e of n)t=t.insert(e.key,e);return t}function Fd(n){let t=xd;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function on(){return Qr()}function Ud(){return Qr()}function Qr(){return new ir(n=>n.toString(),(n,t)=>n.isEqual(t))}const j_=new st(O.comparator),q_=new St(O.comparator);function j(...n){let t=q_;for(const e of n)t=t.add(e);return t}const G_=new St(H);function K_(){return G_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wi(t)?"-0":t}}function $d(n){return{integerValue:""+n}}function z_(n,t){return w_(t)?$d(t):Bd(n,t)}/**
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
 */class no{constructor(){this._=void 0}}function H_(n,t,e){return n instanceof Si?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&mc(i)&&(i=gc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(e,t):n instanceof hs?qd(n,t):n instanceof ds?Gd(n,t):function(s,i){const o=jd(s,i),a=pu(o)+pu(s.Ie);return Sa(o)&&Sa(s.Ie)?$d(a):Bd(s.serializer,a)}(n,t)}function W_(n,t,e){return n instanceof hs?qd(n,t):n instanceof ds?Gd(n,t):e}function jd(n,t){return n instanceof Pi?function(r){return Sa(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Si extends no{}class hs extends no{constructor(t){super(),this.elements=t}}function qd(n,t){const e=Kd(t);for(const r of n.elements)e.some(s=>oe(s,r))||e.push(r);return{arrayValue:{values:e}}}class ds extends no{constructor(t){super(),this.elements=t}}function Gd(n,t){let e=Kd(t);for(const r of n.elements)e=e.filter(s=>!oe(s,r));return{arrayValue:{values:e}}}class Pi extends no{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function pu(n){return ut(n.integerValue||n.doubleValue)}function Kd(n){return _c(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Q_(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof hs&&s instanceof hs||r instanceof ds&&s instanceof ds?Gn(r.elements,s.elements,oe):r instanceof Pi&&s instanceof Pi?oe(r.Ie,s.Ie):r instanceof Si&&s instanceof Si}(n.transform,t.transform)}class Y_{constructor(t,e){this.version=t,this.transformResults=e}}class ee{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ee}static exists(t){return new ee(void 0,t)}static updateTime(t){return new ee(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ai(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ro{}function zd(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Wd(n.key,ee.none()):new Cs(n.key,n.data,ee.none());{const e=n.data,r=Bt.empty();let s=new St(At.comparator);for(let i of t.fields)if(!s.has(i)){let o=e.field(i);o===null&&i.length>1&&(i=i.popLast(),o=e.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Xe(n.key,r,new $t(s.toArray()),ee.none())}}function J_(n,t,e){n instanceof Cs?function(s,i,o){const a=s.value.clone(),c=gu(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Xe?function(s,i,o){if(!ai(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=gu(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Hd(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Yr(n,t,e,r){return n instanceof Cs?function(i,o,a,c){if(!ai(i.precondition,o))return a;const l=i.value.clone(),u=_u(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,t,e,r):n instanceof Xe?function(i,o,a,c){if(!ai(i.precondition,o))return a;const l=_u(i.fieldTransforms,c,o),u=o.data;return u.setAll(Hd(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(i,o,a){return ai(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function X_(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),i=jd(r.transform,s||null);i!=null&&(e===null&&(e=Bt.empty()),e.set(r.field,i))}return e||null}function mu(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Gn(r,s,(i,o)=>Q_(i,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Cs extends ro{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Xe extends ro{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Hd(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function gu(n,t,e){const r=new Map;Z(n.length===e.length);for(let s=0;s<e.length;s++){const i=n[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,W_(o,a,e[s]))}return r}function _u(n,t,e){const r=new Map;for(const s of n){const i=s.transform,o=e.data.field(s.field);r.set(s.field,H_(i,o,t))}return r}class Wd extends ro{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Z_ extends ro{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&J_(i,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Yr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Yr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ud();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=e.has(s.key)?null:a;const c=zd(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&Gn(this.mutations,t.mutations,(e,r)=>mu(e,r))&&Gn(this.baseMutations,t.baseMutations,(e,r)=>mu(e,r))}}class vc{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Z(t.mutations.length===r.length);let s=function(){return j_}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new vc(t,e,r,s)}}/**
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
 */class ey{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class ny{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,z;function ry(n){switch(n){default:return M();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Qd(n){if(n===void 0)return ie("GRPC error has no .code"),p.UNKNOWN;switch(n){case lt.OK:return p.OK;case lt.CANCELLED:return p.CANCELLED;case lt.UNKNOWN:return p.UNKNOWN;case lt.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case lt.INTERNAL:return p.INTERNAL;case lt.UNAVAILABLE:return p.UNAVAILABLE;case lt.UNAUTHENTICATED:return p.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case lt.NOT_FOUND:return p.NOT_FOUND;case lt.ALREADY_EXISTS:return p.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return p.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case lt.ABORTED:return p.ABORTED;case lt.OUT_OF_RANGE:return p.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return p.UNIMPLEMENTED;case lt.DATA_LOSS:return p.DATA_LOSS;default:return M()}}(z=lt||(lt={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function sy(){return new TextEncoder}/**
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
 */const iy=new xn([4294967295,4294967295],0);function yu(n){const t=sy().encode(n),e=new o_;return e.update(t),new Uint8Array(e.digest())}function Eu(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new xn([e,r],0),new xn([s,i],0)]}class Tc{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Gr(`Invalid padding: ${e}`);if(r<0)throw new Gr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Gr(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Gr(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=xn.fromNumber(this.Te)}de(t,e,r){let s=t.add(e.multiply(xn.fromNumber(r)));return s.compare(iy)===1&&(s=new xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=yu(t),[r,s]=Eu(e);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Tc(i,s,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=yu(t),[r,s]=Eu(e);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Gr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,e,r,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,bs.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new so(F.min(),s,new st(H),Se(),j())}}class bs{constructor(t,e,r,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new bs(r,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e,r,s){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=s}}class Yd{constructor(t,e){this.targetId=t,this.fe=e}}class Jd{constructor(t,e,r=Vt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class vu{constructor(){this.ge=0,this.pe=Iu(),this.ye=Vt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=j(),e=j(),r=j();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:M()}}),new bs(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=Iu()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,Z(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class oy{constructor(t){this.Le=t,this.ke=new Map,this.qe=Se(),this.Qe=Tu(),this.Ke=new st(H)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:M()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,s)=>{this.je(s)&&e(s)})}Je(t){const e=t.targetId,r=t.fe.count,s=this.Ye(e);if(s){const i=s.target;if(Ca(i))if(r===0){const o=new O(i.path);this.We(e,o,Dt.newNoDocument(o,F.min()))}else Z(r===1);else{const o=this.Ze(e);if(o!==r){const a=this.Xe(t),c=a?this.et(a,t,o):1;if(c!==0){this.He(e);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,l)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=e;let o,a;try{o=fn(r).toUint8Array()}catch(c){if(c instanceof Rd)return qn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Tc(o,s,i)}catch(c){return qn(c instanceof Gr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(e,i,null),s++)}),s}it(t){const e=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Ca(a.target)){const c=new O(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,Dt.newNoDocument(c,t))}i.De&&(e.set(o,i.ve()),i.Fe())}});let r=j();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new so(t,e,this.Ke,this.qe,r);return this.qe=Se(),this.Qe=Tu(),this.Ke=new st(H),s}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,e)?s.Me(e,1):s.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new vu,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new St(H),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||T("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new vu),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Tu(){return new st(O.comparator)}function Iu(){return new st(O.comparator)}const ay={asc:"ASCENDING",desc:"DESCENDING"},cy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ly={and:"AND",or:"OR"};class uy{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Da(n,t){return n.useProto3Json||Zi(t)?t:{value:t}}function Ci(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Xd(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function hy(n,t){return Ci(n,t.toTimestamp())}function ne(n){return Z(!!n),F.fromTimestamp(function(e){const r=We(e);return new gt(r.seconds,r.nanos)}(n))}function Ic(n,t){return Na(n,t).canonicalString()}function Na(n,t){const e=function(s){return new et(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Zd(n){const t=et.fromString(n);return Z(sf(t)),t}function Oa(n,t){return Ic(n.databaseId,t.path)}function Zo(n,t){const e=Zd(t);if(e.get(1)!==n.databaseId.projectId)throw new S(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new S(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(ef(e))}function tf(n,t){return Ic(n.databaseId,t)}function dy(n){const t=Zd(n);return t.length===4?et.emptyPath():ef(t)}function Va(n){return new et(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ef(n){return Z(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function wu(n,t,e){return{name:Oa(n,t),fields:e.value.mapValue.fields}}function fy(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Z(u===void 0||typeof u=="string"),Vt.fromBase64String(u||"")):(Z(u===void 0||u instanceof Uint8Array),Vt.fromUint8Array(u||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?p.UNKNOWN:Qd(l.code);return new S(u,l.message||"")}(o);e=new Jd(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Zo(n,r.document.name),i=ne(r.document.updateTime),o=r.document.createTime?ne(r.document.createTime):F.min(),a=new Bt({mapValue:{fields:r.document.fields}}),c=Dt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];e=new ci(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Zo(n,r.document),i=r.readTime?ne(r.readTime):F.min(),o=Dt.newNoDocument(s,i),a=r.removedTargetIds||[];e=new ci([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Zo(n,r.document),i=r.removedTargetIds||[];e=new ci([],i,s,null)}else{if(!("filter"in t))return M();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new ny(s,i),a=r.targetId;e=new Yd(a,o)}}return e}function py(n,t){let e;if(t instanceof Cs)e={update:wu(n,t.key,t.value)};else if(t instanceof Wd)e={delete:Oa(n,t.key)};else if(t instanceof Xe)e={update:wu(n,t.key,t.data),updateMask:wy(t.fieldMask)};else{if(!(t instanceof Z_))return M();e={verify:Oa(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Si)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof hs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ds)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Pi)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw M()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:hy(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M()}(n,t.precondition)),e}function my(n,t){return n&&n.length>0?(Z(t!==void 0),n.map(e=>function(s,i){let o=s.updateTime?ne(s.updateTime):ne(i);return o.isEqual(F.min())&&(o=ne(i)),new Y_(o,s.transformResults||[])}(e,t))):[]}function gy(n,t){return{documents:[tf(n,t.path)]}}function _y(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=tf(n,s);const i=function(l){if(l.length!==0)return rf(Wt.create(l,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:On(d.field),direction:vy(d.dir)}}(u))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=Da(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),{ut:e,parent:s}}function yy(n){let t=dy(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Z(r===1);const u=e.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];e.where&&(i=function(h){const d=nf(h);return d instanceof Wt&&bd(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(y){return new Ri(Vn(y.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Zi(d)?null:d}(e.limit));let c=null;e.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Ai(f,d)}(e.startAt));let l=null;return e.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new Ai(f,d)}(e.endAt)),x_(t,s,o,i,a,"F",c,l)}function Ey(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function nf(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Vn(e.unaryFilter.field);return dt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Vn(e.unaryFilter.field);return dt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vn(e.unaryFilter.field);return dt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Vn(e.unaryFilter.field);return dt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return dt.create(Vn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Wt.create(e.compositeFilter.filters.map(r=>nf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function vy(n){return ay[n]}function Ty(n){return cy[n]}function Iy(n){return ly[n]}function On(n){return{fieldPath:n.canonicalString()}}function Vn(n){return At.fromServerFormat(n.fieldPath)}function rf(n){return n instanceof dt?function(e){if(e.op==="=="){if(lu(e.value))return{unaryFilter:{field:On(e.field),op:"IS_NAN"}};if(cu(e.value))return{unaryFilter:{field:On(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(lu(e.value))return{unaryFilter:{field:On(e.field),op:"IS_NOT_NAN"}};if(cu(e.value))return{unaryFilter:{field:On(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:On(e.field),op:Ty(e.op),value:e.value}}}(n):n instanceof Wt?function(e){const r=e.getFilters().map(s=>rf(s));return r.length===1?r[0]:{compositeFilter:{op:Iy(e.op),filters:r}}}(n):M()}function wy(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function sf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t,e,r,s,i=F.min(),o=F.min(),a=Vt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Ue(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ue(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ue(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ue(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(t){this.ct=t}}function Ry(n){const t=yy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ka(t,t.limit,"L"):t}/**
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
 */class Sy{constructor(){this._n=new Py}addToCollectionParentIndex(t,e){return this._n.add(e),m.resolve()}getCollectionParents(t,e){return m.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return m.resolve()}deleteFieldIndex(t,e){return m.resolve()}deleteAllFieldIndexes(t){return m.resolve()}createTargetIndexes(t,e){return m.resolve()}getDocumentsMatchingTarget(t,e){return m.resolve(null)}getIndexType(t,e){return m.resolve(0)}getFieldIndexes(t,e){return m.resolve([])}getNextCollectionGroupToUpdate(t){return m.resolve(null)}getMinOffset(t,e){return m.resolve(He.min())}getMinOffsetFromCollectionGroup(t,e){return m.resolve(He.min())}updateCollectionGroup(t,e,r){return m.resolve()}updateIndexEntries(t,e){return m.resolve()}}class Py{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new St(et.comparator),i=!s.has(r);return this.index[e]=s.add(r),i}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new St(et.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Hn(0)}static Bn(){return new Hn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(){this.changes=new ir(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Dt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?m.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class by{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Yr(r.mutation,s,$t.empty(),gt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,j()).next(()=>r))}getLocalViewOfDocuments(t,e,r=j()){const s=on();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(i=>{let o=qr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=on();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,j()))}populateOverlays(t,e,r){const s=[];return r.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,s){let i=Se();const o=Qr(),a=function(){return Qr()}();return e.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Xe)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Yr(u.mutation,l,u.mutation.getFieldMask(),gt.now())):o.set(l.key,$t.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),e.forEach((l,u)=>{var h;return a.set(l,new by(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=Qr();let s=new st((o,a)=>o-a),i=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=e.get(c);if(l===null)return;let u=r.get(c)||$t.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||j()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Ud();u.forEach(d=>{if(!i.has(d)){const f=zd(e.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(o){return O.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Vd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-i.size):m.resolve(on());let a=-1,c=i;return o.next(l=>m.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?m.resolve():this.remoteDocumentCache.getEntry(t,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,c,l,j())).next(u=>({batchId:a,changes:Fd(u)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let s=qr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const i=e.collectionGroup;let o=qr();return this.indexManager.getCollectionParents(t,i).next(a=>m.forEach(a,c=>{const l=function(h,d){return new Ps(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Dt.newInvalidDocument(u)))});let a=qr();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Yr(u.mutation,l,$t.empty(),gt.now()),eo(e,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return m.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:ne(s.createTime)}}(e)),m.resolve()}getNamedQuery(t,e){return m.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:Ry(s.bundledQuery),readTime:ne(s.readTime)}}(e)),m.resolve()}}/**
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
 */class Ny{constructor(){this.overlays=new st(O.comparator),this.hr=new Map}getOverlay(t,e){return m.resolve(this.overlays.get(e))}getOverlays(t,e){const r=on();return m.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,i)=>{this.ht(t,e,i)}),m.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),m.resolve()}getOverlaysForCollection(t,e,r){const s=on(),i=e.length+1,o=new O(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return m.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let i=new st((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=on(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=on(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return m.resolve(a)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ey(e,r));let i=this.hr.get(e);i===void 0&&(i=j(),this.hr.set(e,i)),this.hr.set(e,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.Pr=new St(yt.Ir),this.Tr=new St(yt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new yt(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new yt(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new O(new et([])),r=new yt(e,t),s=new yt(e,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new O(new et([])),r=new yt(e,t),s=new yt(e,t+1);let i=j();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const e=new yt(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class yt{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return O.comparator(t.key,e.key)||H(t.pr,e.pr)}static Er(t,e){return H(t.pr,e.pr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new St(yt.Ir)}checkEmpty(t){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ty(i,e,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new yt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(t,e){return m.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),i=s<0?0:s;return m.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new yt(e,0),s=new yt(e,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),m.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new St(H);return e.forEach(s=>{const i=new yt(s,0),o=new yt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),m.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let i=r;O.isDocumentKey(i)||(i=i.child(""));const o=new yt(new O(i),0);let a=new St(H);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),m.resolve(this.Dr(a))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Z(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return m.forEach(e.mutations,s=>{const i=new yt(s.key,e.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new yt(e,0),s=this.wr.firstAfterOrEqual(r);return m.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,m.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(t){this.vr=t,this.docs=function(){return new st(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return m.resolve(r?r.document.mutableCopy():Dt.newInvalidDocument(e))}getEntries(t,e){let r=Se();return e.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Dt.newInvalidDocument(s))}),m.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let i=Se();const o=e.path,a=new O(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||y_(__(u),r)<=0||(s.has(u.key)||eo(e,u))&&(i=i.insert(u.key,u.mutableCopy()))}return m.resolve(i)}getAllFromCollectionGroup(t,e,r,s){M()}Fr(t,e){return m.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Ly(this)}getSize(t){return m.resolve(this.size)}}class Ly extends Cy{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),m.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(t){this.persistence=t,this.Mr=new ir(e=>yc(e),Ec),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Or=0,this.Nr=new wc,this.targetCount=0,this.Br=Hn.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),m.resolve()}getLastRemoteSnapshotVersion(t){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return m.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),m.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new Hn(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,m.resolve()}updateTargetData(t,e){return this.qn(e),m.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,m.resolve()}removeTargets(t,e,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),m.waitFor(i).next(()=>s)}getTargetCount(t){return m.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return m.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),m.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),m.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),m.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return m.resolve(r)}containsKey(t,e){return m.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(t,e){this.Lr={},this.overlays={},this.kr=new pc(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new My(this),this.indexManager=new Sy,this.remoteDocumentCache=function(s){return new Vy(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Ay(e),this.$r=new Dy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ny,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Lr[t.toKey()];return r||(r=new Oy(e,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){T("MemoryPersistence","Starting transaction:",t);const s=new Fy(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,e){return m.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,e)))}}class Fy extends v_{constructor(t){super(),this.currentSequenceNumber=t}}class Ac{constructor(t){this.persistence=t,this.zr=new wc,this.jr=null}static Hr(t){return new Ac(t)}get Jr(){if(this.jr)return this.jr;throw M()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),m.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),m.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Jr,r=>{const s=O.fromPath(r);return this.Yr(t,s).next(i=>{i||e.removeEntry(s,F.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return m.or([()=>m.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=j(),s=j();for(const i of e.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Rc(t,e.fromCache,r,s)}}/**
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
 */class Uy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class By{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Up()?8:sn.v(ft())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const i={result:null};return this.ji(t,e).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,e,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Uy;return this.Ji(t,e,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,e,o,a.size)})}).next(()=>i.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(Ur()<=K.DEBUG&&T("QueryEngine","SDK will not create cache indexes for query:",Nn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),m.resolve()):(Ur()<=K.DEBUG&&T("QueryEngine","Query:",Nn(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Ur()<=K.DEBUG&&T("QueryEngine","The SDK decides to create cache indexes for query:",Nn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,te(e))):m.resolve())}ji(t,e){if(fu(e))return m.resolve(null);let r=te(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ka(e,null,"F"),r=te(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=j(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const l=this.Zi(e,a);return this.Xi(e,l,o,c.readTime)?this.ji(t,ka(e,null,"F")):this.es(t,l,e,c)}))})))}Hi(t,e,r,s){return fu(e)||s.isEqual(F.min())?m.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(e,i);return this.Xi(e,o,r,s)?m.resolve(null):(Ur()<=K.DEBUG&&T("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Nn(e)),this.es(t,o,e,g_(s,-1)).next(a=>a))})}Zi(t,e){let r=new St(Md(t));return e.forEach((s,i)=>{eo(t,i)&&(r=r.add(i))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,e,r){return Ur()<=K.DEBUG&&T("QueryEngine","Using full collection scan to execute query:",Nn(e)),this.zi.getDocumentsMatchingQuery(t,e,He.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(e.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new st(H),this.rs=new ir(i=>yc(i),Ec),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ky(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function jy(n,t,e,r){return new $y(n,t,e,r)}async function of(n,t){const e=B(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=j();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return e.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function qy(n,t){const e=B(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=e.os.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=m.resolve();return d.forEach(y=>{f=f.next(()=>u.getEntry(c,y)).next(P=>{const g=l.docVersions.get(y);Z(g!==null),P.version.compareTo(g)<0&&(h.applyToRemoteDocument(P,l),P.isValidDocument()&&(P.setReadTime(l.commitVersion),u.addEntry(P)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(e,r,t,i).next(()=>i.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=j();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function af(n){const t=B(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Gy(n,t){const e=B(n),r=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const a=[];t.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(e.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>e.Qr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(Vt.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(P,g,b){return P.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,f,u)&&a.push(e.Qr.updateTargetData(i,f))});let c=Se(),l=j();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Ky(i,o,t.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(F.min())){const u=e.Qr.getLastRemoteSnapshotVersion(i).next(h=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return m.waitFor(a).next(()=>o.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(e.ns=s,i))}function Ky(n,t,e){let r=j(),s=j();return e.forEach(i=>r=r.add(i)),t.getEntries(n,r).next(i=>{let o=Se();return e.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(F.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):T("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function zy(n,t){const e=B(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Hy(n,t){const e=B(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Qr.getTargetData(r,t).next(i=>i?(s=i,m.resolve(s)):e.Qr.allocateTargetId(r).next(o=>(s=new Ue(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function La(n,t,e){const r=B(n),s=r.ns.get(t),i=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ss(o))throw o;T("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function Au(n,t,e){const r=B(n);let s=F.min(),i=j();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=B(c),d=h.rs.get(u);return d!==void 0?m.resolve(h.ns.get(d)):h.Qr.getTargetData(l,u)}(r,o,te(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,e?s:F.min(),e?i:j())).next(a=>(Wy(r,U_(t),a),{documents:a,hs:i})))}function Wy(n,t,e){let r=n.ss.get(t)||F.min();e.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ss.set(t,r)}class Ru{constructor(){this.activeTargetIds=K_()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Qy{constructor(){this.no=new Ru,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Ru,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Yy{io(t){}shutdown(){}}/**
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
 */class Su{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){T("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){T("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ei=null;function ta(){return ei===null?ei=function(){return 268435456+Math.round(2147483648*Math.random())}():ei++,"0x"+ei.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class Zy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+e.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(e,r,s,i,o){const a=ta(),c=this.bo(e,r.toUriEncodedString());T("RestConnection",`Sending RPC '${e}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,i,o),this.Co(e,c,l,s).then(u=>(T("RestConnection",`Received RPC '${e}' ${a}: `,u),u),u=>{throw qn("RestConnection",`RPC '${e}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(e,r,s,i,o,a){return this.So(e,r,s,i,o)}Do(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+sr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>e[o]=i),s&&s.headers.forEach((i,o)=>e[o]=i)}bo(e,r){const s=Jy[e];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,r,s){const i=ta();return new Promise((o,a)=>{const c=new i_;c.setWithCredentials(!0),c.listenOnce(r_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Xo.NO_ERROR:const u=c.getResponseJson();T(bt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case Xo.TIMEOUT:T(bt,`RPC '${t}' ${i} timed out`),a(new S(p.DEADLINE_EXCEEDED,"Request time out"));break;case Xo.HTTP_ERROR:const h=c.getStatus();if(T(bt,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(g){const b=g.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(b)>=0?b:p.UNKNOWN}(f.status);a(new S(y,f.message))}else a(new S(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new S(p.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{T(bt,`RPC '${t}' ${i} completed.`)}});const l=JSON.stringify(s);T(bt,`RPC '${t}' ${i} sending request:`,s),c.send(e,"POST",l,r,15)})}Fo(t,e,r){const s=ta(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=e_(),a=n_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,e,r),c.encodeInitMessageHeaders=!0;const u=i.join("");T(bt,`Creating RPC '${t}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const y=new Xy({lo:g=>{f?T(bt,`Not sending because RPC '${t}' stream ${s} is closed:`,g):(d||(T(bt,`Opening RPC '${t}' stream ${s} transport.`),h.open(),d=!0),T(bt,`RPC '${t}' stream ${s} sending:`,g),h.send(g))},ho:()=>h.close()}),P=(g,b,A)=>{g.listen(b,v=>{try{A(v)}catch(L){setTimeout(()=>{throw L},0)}})};return P(h,Xs.EventType.OPEN,()=>{f||T(bt,`RPC '${t}' stream ${s} transport opened.`)}),P(h,Xs.EventType.CLOSE,()=>{f||(f=!0,T(bt,`RPC '${t}' stream ${s} transport closed`),y.Vo())}),P(h,Xs.EventType.ERROR,g=>{f||(f=!0,qn(bt,`RPC '${t}' stream ${s} transport errored:`,g),y.Vo(new S(p.UNAVAILABLE,"The operation could not be completed")))}),P(h,Xs.EventType.MESSAGE,g=>{var b;if(!f){const A=g.data[0];Z(!!A);const v=A,L=v.error||((b=v[0])===null||b===void 0?void 0:b.error);if(L){T(bt,`RPC '${t}' stream ${s} received error:`,L);const nt=L.status;let Q=function(ct){const _t=lt[ct];if(_t!==void 0)return Qd(_t)}(nt),C=L.message;Q===void 0&&(Q=p.INTERNAL,C="Unknown error status: "+nt+" with message "+L.message),f=!0,y.Vo(new S(Q,C)),h.close()}else T(bt,`RPC '${t}' stream ${s} received:`,A),y.mo(A)}}),P(a,s_.STAT_EVENT,g=>{g.stat===eu.PROXY?T(bt,`RPC '${t}' stream ${s} detected buffering proxy`):g.stat===eu.NOPROXY&&T(bt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.Ro()},0),y}}function ea(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(n){return new uy(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t,e,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=e,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,e-r);s>0&&T("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t,e,r,s,i,o,a,c){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new cf(t,e)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():e&&e.code===p.RESOURCE_EXHAUSTED?(ie(e.toString()),ie("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===e&&this.o_(r,s)},r=>{t(()=>{const s=new S(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,e){const r=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return T("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget(()=>this.Wo===t?e():(T("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tE extends lf{constructor(t,e,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,o),this.serializer=i}a_(t,e){return this.connection.Fo("Listen",t,e)}onMessage(t){this.jo.reset();const e=fy(this.serializer,t),r=function(i){if(!("targetChange"in i))return F.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?F.min():o.readTime?ne(o.readTime):F.min()}(t);return this.listener.u_(e,r)}c_(t){const e={};e.database=Va(this.serializer),e.addTarget=function(i,o){let a;const c=o.target;if(a=Ca(c)?{documents:gy(i,c)}:{query:_y(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Xd(i,o.resumeToken);const l=Da(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(F.min())>0){a.readTime=Ci(i,o.snapshotVersion.toTimestamp());const l=Da(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=Ey(this.serializer,t);r&&(e.labels=r),this.t_(e)}l_(t){const e={};e.database=Va(this.serializer),e.removeTarget=t,this.t_(e)}}class eE extends lf{constructor(t,e,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,e){return this.connection.Fo("Write",t,e)}onMessage(t){if(Z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const e=my(t.writeResults,t.commitTime),r=ne(t.commitTime);return this.listener.T_(r,e)}return Z(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=Va(this.serializer),this.t_(t)}I_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>py(this.serializer,r))};this.t_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new S(p.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,Na(e,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(p.UNKNOWN,i.toString())})}vo(t,e,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,Na(e,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new S(p.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class rE{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(ie(e),this.g_=!1):T("OnlineStateTracker",e)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(t,e,r,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{yn(this)&&(T("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=B(c);l.v_.add(4),await ks(l),l.x_.set("Unknown"),l.v_.delete(4),await oo(l)}(this))})}),this.x_=new rE(r,s)}}async function oo(n){if(yn(n))for(const t of n.F_)await t(!0)}async function ks(n){for(const t of n.F_)await t(!1)}function uf(n,t){const e=B(n);e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),Cc(e)?Pc(e):or(e).Jo()&&Sc(e,t))}function hf(n,t){const e=B(n),r=or(e);e.C_.delete(t),r.Jo()&&df(e,t),e.C_.size===0&&(r.Jo()?r.Xo():yn(e)&&e.x_.set("Unknown"))}function Sc(n,t){if(n.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}or(n).c_(t)}function df(n,t){n.O_.Oe(t),or(n).l_(t)}function Pc(n){n.O_=new oy({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.C_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),or(n).start(),n.x_.p_()}function Cc(n){return yn(n)&&!or(n).Ho()&&n.C_.size>0}function yn(n){return B(n).v_.size===0}function ff(n){n.O_=void 0}async function iE(n){n.C_.forEach((t,e)=>{Sc(n,t)})}async function oE(n,t){ff(n),Cc(n)?(n.x_.S_(t),Pc(n)):n.x_.set("Unknown")}async function aE(n,t,e){if(n.x_.set("Online"),t instanceof Jd&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(n,t)}catch(r){T("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await bi(n,r)}else if(t instanceof ci?n.O_.$e(t):t instanceof Yd?n.O_.Je(t):n.O_.Ge(t),!e.isEqual(F.min()))try{const r=await af(n.localStore);e.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.C_.get(l);u&&i.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.C_.get(c);if(!u)return;i.C_.set(c,u.withResumeToken(Vt.EMPTY_BYTE_STRING,u.snapshotVersion)),df(i,c);const h=new Ue(u.target,c,l,u.sequenceNumber);Sc(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){T("RemoteStore","Failed to raise snapshot:",r),await bi(n,r)}}async function bi(n,t,e){if(!Ss(t))throw t;n.v_.add(1),await ks(n),n.x_.set("Offline"),e||(e=()=>af(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{T("RemoteStore","Retrying IndexedDB access"),await e(),n.v_.delete(1),await oo(n)})}function pf(n,t){return t().catch(e=>bi(n,e,t))}async function ao(n){const t=B(n),e=Qe(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;cE(t);)try{const s=await zy(t.localStore,r);if(s===null){t.D_.length===0&&e.Xo();break}r=s.batchId,lE(t,s)}catch(s){await bi(t,s)}mf(t)&&gf(t)}function cE(n){return yn(n)&&n.D_.length<10}function lE(n,t){n.D_.push(t);const e=Qe(n);e.Jo()&&e.P_&&e.I_(t.mutations)}function mf(n){return yn(n)&&!Qe(n).Ho()&&n.D_.length>0}function gf(n){Qe(n).start()}async function uE(n){Qe(n).d_()}async function hE(n){const t=Qe(n);for(const e of n.D_)t.I_(e.mutations)}async function dE(n,t,e){const r=n.D_.shift(),s=vc.from(r,t,e);await pf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ao(n)}async function fE(n,t){t&&Qe(n).P_&&await async function(r,s){if(function(o){return ry(o)&&o!==p.ABORTED}(s.code)){const i=r.D_.shift();Qe(r).Zo(),await pf(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ao(r)}}(n,t),mf(n)&&gf(n)}async function Pu(n,t){const e=B(n);e.asyncQueue.verifyOperationInProgress(),T("RemoteStore","RemoteStore received new credentials");const r=yn(e);e.v_.add(3),await ks(e),r&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await oo(e)}async function pE(n,t){const e=B(n);t?(e.v_.delete(2),await oo(e)):t||(e.v_.add(2),await ks(e),e.x_.set("Unknown"))}function or(n){return n.N_||(n.N_=function(e,r,s){const i=B(e);return i.R_(),new tE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:iE.bind(null,n),To:oE.bind(null,n),u_:aE.bind(null,n)}),n.F_.push(async t=>{t?(n.N_.Zo(),Cc(n)?Pc(n):n.x_.set("Unknown")):(await n.N_.stop(),ff(n))})),n.N_}function Qe(n){return n.B_||(n.B_=function(e,r,s){const i=B(e);return i.R_(),new eE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:uE.bind(null,n),To:fE.bind(null,n),E_:hE.bind(null,n),T_:dE.bind(null,n)}),n.F_.push(async t=>{t?(n.B_.Zo(),await ao(n)):(await n.B_.stop(),n.D_.length>0&&(T("RemoteStore",`Stopping write stream with ${n.D_.length} pending writes`),n.D_=[]))})),n.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const o=Date.now()+r,a=new bc(t,e,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new S(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kc(n,t){if(ie("AsyncQueue",`${t}: ${n}`),Ss(n))return new S(p.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=qr(),this.sortedSet=new st(this.comparator)}static emptySet(t){return new Fn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Fn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Fn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this.L_=new st(O.comparator)}track(t){const e=t.doc.key,r=this.L_.get(e);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(e,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(e):t.type===1&&r.type===2?this.L_=this.L_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):M():this.L_=this.L_.insert(e,t)}k_(){const t=[];return this.L_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Wn{constructor(t,e,r,s,i,o,a,c,l){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,e,r,s,i){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Wn(t,e,Fn.emptySet(e),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&to(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.q_=void 0,this.Q_=[]}}class gE{constructor(){this.queries=new ir(t=>Ld(t),to),this.onlineState="Unknown",this.K_=new Set}}async function _E(n,t){const e=B(n),r=t.query;let s=!1,i=e.queries.get(r);if(i||(s=!0,i=new mE),s)try{i.q_=await e.onListen(r)}catch(o){const a=kc(o,`Initialization of query '${Nn(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,i),i.Q_.push(t),t.U_(e.onlineState),i.q_&&t.W_(i.q_)&&Dc(e)}async function yE(n,t){const e=B(n),r=t.query;let s=!1;const i=e.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),s=i.Q_.length===0)}if(s)return e.queries.delete(r),e.onUnlisten(r)}function EE(n,t){const e=B(n);let r=!1;for(const s of t){const i=s.query,o=e.queries.get(i);if(o){for(const a of o.Q_)a.W_(s)&&(r=!0);o.q_=s}}r&&Dc(e)}function vE(n,t,e){const r=B(n),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(e);r.queries.delete(t)}function Dc(n){n.K_.forEach(t=>{t.next()})}class TE{constructor(t,e,r){this.query=t,this.G_=e,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Wn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.z_?this.H_(t)&&(this.G_.next(t),e=!0):this.J_(t,this.onlineState)&&(this.Y_(t),e=!0),this.j_=t,e}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let e=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),e=!0),e}J_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const e=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Y_(t){t=Wn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t){this.key=t}}class yf{constructor(t){this.key=t}}class IE{constructor(t,e){this.query=t,this.oa=e,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=j(),this.mutatedKeys=j(),this.ua=Md(t),this.ca=new Fn(this.ua)}get la(){return this.oa}ha(t,e){const r=e?e.Pa:new Cu,s=e?e.ca:this.ca;let i=e?e.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const d=s.get(u),f=eo(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),P=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let g=!1;d&&f?d.data.isEqual(f.data)?y!==P&&(r.track({type:3,doc:f}),g=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),g=!0,(c&&this.ua(f,c)>0||l&&this.ua(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),g=!0):d&&!f&&(r.track({type:1,doc:d}),g=!0,(c||l)&&(a=!0)),g&&(f?(o=o.add(f),i=P?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,Xi:a,mutatedKeys:i}}Ia(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const i=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((u,h)=>function(f,y){const P=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return P(f)-P(y)}(u.type,h.type)||this.ua(u.doc,h.doc)),this.Ta(r),s=s!=null&&s;const a=e&&!s?this.Ea():[],c=this.aa.size===0&&this.current&&!s?1:0,l=c!==this._a;return this._a=c,o.length!==0||l?{snapshot:new Wn(this.query,t.ca,i,o,t.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Cu,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=j(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const e=[];return t.forEach(r=>{this.aa.has(r)||e.push(new yf(r))}),this.aa.forEach(r=>{t.has(r)||e.push(new _f(r))}),e}Ra(t){this.oa=t.hs,this.aa=j();const e=this.ha(t.documents);return this.applyChanges(e,!0)}Va(){return Wn.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class wE{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class AE{constructor(t){this.key=t,this.ma=!1}}class RE{constructor(t,e,r,s,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new ir(a=>Ld(a),to),this.pa=new Map,this.ya=new Set,this.wa=new st(O.comparator),this.Sa=new Map,this.ba=new wc,this.Da={},this.Ca=new Map,this.va=Hn.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function SE(n,t){const e=ME(n);let r,s;const i=e.ga.get(t);if(i)r=i.targetId,e.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await Hy(e.localStore,te(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await PE(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&uf(e.remoteStore,o)}return s}async function PE(n,t,e,r,s){n.Ma=(h,d,f)=>async function(P,g,b,A){let v=g.view.ha(b);v.Xi&&(v=await Au(P.localStore,g.query,!1).then(({documents:C})=>g.view.ha(C,v)));const L=A&&A.targetChanges.get(g.targetId),nt=A&&A.targetMismatches.get(g.targetId)!=null,Q=g.view.applyChanges(v,P.isPrimaryClient,L,nt);return ku(P,g.targetId,Q.da),Q.snapshot}(n,h,d,f);const i=await Au(n.localStore,t,!0),o=new IE(t,i.hs),a=o.ha(i.documents),c=bs.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),l=o.applyChanges(a,n.isPrimaryClient,c);ku(n,e,l.da);const u=new wE(t,e,o);return n.ga.set(t,u),n.pa.has(e)?n.pa.get(e).push(t):n.pa.set(e,[t]),l.snapshot}async function CE(n,t){const e=B(n),r=e.ga.get(t),s=e.pa.get(r.targetId);if(s.length>1)return e.pa.set(r.targetId,s.filter(i=>!to(i,t))),void e.ga.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await La(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),hf(e.remoteStore,r.targetId),Ma(e,r.targetId)}).catch(Rs)):(Ma(e,r.targetId),await La(e.localStore,r.targetId,!0))}async function bE(n,t,e){const r=xE(n);try{const s=await function(o,a){const c=B(o),l=gt.now(),u=a.reduce((f,y)=>f.add(y.key),j());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=Se(),P=j();return c.os.getEntries(f,u).next(g=>{y=g,y.forEach((b,A)=>{A.isValidDocument()||(P=P.add(b))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,y)).next(g=>{h=g;const b=[];for(const A of a){const v=X_(A,h.get(A.key).overlayedDocument);v!=null&&b.push(new Xe(A.key,v,Sd(v.value.mapValue),ee.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,b,a)}).next(g=>{d=g;const b=g.applyToLocalDocumentSet(h,P);return c.documentOverlayCache.saveOverlays(f,g.batchId,b)})}).then(()=>({batchId:d.batchId,changes:Fd(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new st(H)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,s.batchId,e),await Ds(r,s.changes),await ao(r.remoteStore)}catch(s){const i=kc(s,"Failed to persist write");e.reject(i)}}async function Ef(n,t){const e=B(n);try{const r=await Gy(e.localStore,t);t.targetChanges.forEach((s,i)=>{const o=e.Sa.get(i);o&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?Z(o.ma):s.removedDocuments.size>0&&(Z(o.ma),o.ma=!1))}),await Ds(e,r,t)}catch(r){await Rs(r)}}function bu(n,t,e){const r=B(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=B(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.Q_)d.U_(a)&&(l=!0)}),l&&Dc(c)}(r.eventManager,t),s.length&&r.fa.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function kE(n,t,e){const r=B(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Sa.get(t),i=s&&s.key;if(i){let o=new st(O.comparator);o=o.insert(i,Dt.newNoDocument(i,F.min()));const a=j().add(i),c=new so(F.min(),new Map,new st(H),o,a);await Ef(r,c),r.wa=r.wa.remove(i),r.Sa.delete(t),Nc(r)}else await La(r.localStore,t,!1).then(()=>Ma(r,t,e)).catch(Rs)}async function DE(n,t){const e=B(n),r=t.batch.batchId;try{const s=await qy(e.localStore,t);Tf(e,r,null),vf(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Ds(e,s)}catch(s){await Rs(s)}}async function NE(n,t,e){const r=B(n);try{const s=await function(o,a){const c=B(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Z(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,t);Tf(r,t,e),vf(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Ds(r,s)}catch(s){await Rs(s)}}function vf(n,t){(n.Ca.get(t)||[]).forEach(e=>{e.resolve()}),n.Ca.delete(t)}function Tf(n,t,e){const r=B(n);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),r.Da[r.currentUser.toKey()]=s}}function Ma(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.pa.get(t))n.ga.delete(r),e&&n.fa.xa(r,e);n.pa.delete(t),n.isPrimaryClient&&n.ba.Vr(t).forEach(r=>{n.ba.containsKey(r)||If(n,r)})}function If(n,t){n.ya.delete(t.path.canonicalString());const e=n.wa.get(t);e!==null&&(hf(n.remoteStore,e),n.wa=n.wa.remove(t),n.Sa.delete(e),Nc(n))}function ku(n,t,e){for(const r of e)r instanceof _f?(n.ba.addReference(r.key,t),OE(n,r)):r instanceof yf?(T("SyncEngine","Document no longer in limbo: "+r.key),n.ba.removeReference(r.key,t),n.ba.containsKey(r.key)||If(n,r.key)):M()}function OE(n,t){const e=t.key,r=e.path.canonicalString();n.wa.get(e)||n.ya.has(r)||(T("SyncEngine","New document in limbo: "+e),n.ya.add(r),Nc(n))}function Nc(n){for(;n.ya.size>0&&n.wa.size<n.maxConcurrentLimboResolutions;){const t=n.ya.values().next().value;n.ya.delete(t);const e=new O(et.fromString(t)),r=n.va.next();n.Sa.set(r,new AE(e)),n.wa=n.wa.insert(e,r),uf(n.remoteStore,new Ue(te(Od(e.path)),r,"TargetPurposeLimboResolution",pc._e))}}async function Ds(n,t,e){const r=B(n),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,t,e).then(l=>{if((l||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Rc.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.fa.u_(s),await async function(c,l){const u=B(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(l,d=>m.forEach(d.qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.Qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Ss(h))throw h;T("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.ns.get(d),y=f.snapshotVersion,P=f.withLastLimboFreeSnapshotVersion(y);u.ns=u.ns.insert(d,P)}}}(r.localStore,i))}async function VE(n,t){const e=B(n);if(!e.currentUser.isEqual(t)){T("SyncEngine","User change. New user:",t.toKey());const r=await of(e.localStore,t);e.currentUser=t,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new S(p.CANCELLED,o))})}),i.Ca.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ds(e,r.us)}}function LE(n,t){const e=B(n),r=e.Sa.get(t);if(r&&r.ma)return j().add(r.key);{let s=j();const i=e.pa.get(t);if(!i)return s;for(const o of i){const a=e.ga.get(o);s=s.unionWith(a.view.la)}return s}}function ME(n){const t=B(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ef.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=LE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=kE.bind(null,t),t.fa.u_=EE.bind(null,t.eventManager),t.fa.xa=vE.bind(null,t.eventManager),t}function xE(n){const t=B(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=DE.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=NE.bind(null,t),t}class Du{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=io(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return jy(this.persistence,new By,t.initialUser,this.serializer)}createPersistence(t){return new xy(Ac.Hr,this.serializer)}createSharedClientState(t){return new Qy}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class FE{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VE.bind(null,this.syncEngine),await pE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new gE}()}createDatastore(t){const e=io(t.databaseInfo.databaseId),r=function(i){return new Zy(i)}(t.databaseInfo);return function(i,o,a,c){return new nE(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,i,o,a){return new sE(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>bu(this.syncEngine,e,0),function(){return Su.D()?new Su:new Yy}())}createSyncEngine(t,e){return function(s,i,o,a,c,l,u){const h=new RE(s,i,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=B(r);T("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await ks(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class UE{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):ie("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=kt.UNAUTHENTICATED,this.clientId=wd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{T("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(T("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=kc(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function na(n,t){n.asyncQueue.verifyOperationInProgress(),T("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await of(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Nu(n,t){n.asyncQueue.verifyOperationInProgress();const e=await jE(n);T("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Pu(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Pu(t.remoteStore,s)),n._onlineComponents=t}function $E(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function jE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){T("FirestoreClient","Using user provided OfflineComponentProvider");try{await na(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!$E(e))throw e;qn("Error using user provided cache. Falling back to memory cache: "+e),await na(n,new Du)}}else T("FirestoreClient","Using default OfflineComponentProvider"),await na(n,new Du);return n._offlineComponents}async function wf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(T("FirestoreClient","Using user provided OnlineComponentProvider"),await Nu(n,n._uninitializedComponentsProvider._online)):(T("FirestoreClient","Using default OnlineComponentProvider"),await Nu(n,new FE))),n._onlineComponents}function qE(n){return wf(n).then(t=>t.syncEngine)}async function GE(n){const t=await wf(n),e=t.eventManager;return e.onListen=SE.bind(null,t.syncEngine),e.onUnlisten=CE.bind(null,t.syncEngine),e}function KE(n,t,e={}){const r=new Ae;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new UE({next:d=>{o.enqueueAndForget(()=>yE(i,h)),d.fromCache&&c.source==="server"?l.reject(new S(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new TE(a,u,{includeMetadataChanges:!0,Z_:!0});return _E(i,h)}(await GE(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Af(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(n,t,e){if(!e)throw new S(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function zE(n,t,e,r){if(t===!0&&r===!0)throw new S(p.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Vu(n){if(!O.isDocumentKey(n))throw new S(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Lu(n){if(O.isDocumentKey(n))throw new S(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function co(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function Qn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new S(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=co(n);throw new S(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new S(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new S(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}zE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Af((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new S(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new S(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new S(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class lo{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new S(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mu(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new a_;switch(r.type){case"firstParty":return new h_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new S(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ou.get(e);r&&(T("ComponentProvider","Removing Datastore"),Ou.delete(e),r.terminate())}(this),Promise.resolve()}}function HE(n,t,e,r={}){var s;const i=(n=Qn(n,lo))._getSettings(),o=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&qn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=kt.MOCK_USER;else{a=Op(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new S(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new kt(l)}n._authCredentials=new c_(new Id(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ar(this.firestore,t,this._query)}}class jt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new jt(this.firestore,t,this._key)}}class qe extends ar{constructor(t,e,r){super(t,e,Od(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new jt(this.firestore,null,new O(t))}withConverter(t){return new qe(this.firestore,t,this._path)}}function ni(n,t,...e){if(n=Pt(n),Rf("collection","path",t),n instanceof lo){const r=et.fromString(t,...e);return Lu(r),new qe(n,null,r)}{if(!(n instanceof jt||n instanceof qe))throw new S(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return Lu(r),new qe(n.firestore,null,r)}}function WE(n,t,...e){if(n=Pt(n),arguments.length===1&&(t=wd.newId()),Rf("doc","path",t),n instanceof lo){const r=et.fromString(t,...e);return Vu(r),new jt(n,null,new O(r))}{if(!(n instanceof jt||n instanceof qe))throw new S(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return Vu(r),new jt(n.firestore,n instanceof qe?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new cf(this,"async_queue_retry"),this._u=()=>{const e=ea();e&&T("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const t=ea();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const e=ea();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const e=new Ae;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!Ss(t))throw t;T("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const e=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ie("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.iu=!1,r))));return this.Xa=e,e}enqueueAfterDelay(t,e,r){this.au(),this.ou.indexOf(t)>-1&&(e=0);const s=bc.createAndSchedule(this,t,e,r,i=>this.lu(i));return this.nu.push(s),s}au(){this.ru&&M()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const e of this.nu)if(e.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.nu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const e=this.nu.indexOf(t);this.nu.splice(e,1)}}class uo extends lo{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new QE}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pf(this),this._firestoreClient.terminate()}}function YE(n,t){const e=typeof n=="object"?n:gh(),r=typeof n=="string"?n:t||"(default)",s=ja(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Dp("firestore");i&&HE(s,...i)}return s}function Sf(n){return n._firestoreClient||Pf(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Pf(n){var t,e,r;const s=n._freezeSettings(),i=function(a,c,l,u){return new R_(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Af(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new BE(n._authCredentials,n._appCheckCredentials,n._queue,i),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Yn(Vt.fromBase64String(t))}catch(e){throw new S(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Yn(Vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new S(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new At(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new S(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new S(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return H(this._lat,t._lat)||H(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=/^__.*__$/;class XE{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Xe(t,this.data,this.fieldMask,e,this.fieldTransforms):new Cs(t,this.data,e,this.fieldTransforms)}}class Cf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Xe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function bf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Lc{constructor(t,e,r,s,i,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new Lc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Au({path:r,Vu:!1});return s.mu(t),s}fu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Au({path:r,Vu:!1});return s.Eu(),s}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return ki(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(t.length===0)throw this.pu("Document fields must not be empty");if(bf(this.du)&&JE.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class ZE{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||io(t)}Su(t,e,r,s=!1){return new Lc({du:t,methodName:e,wu:r,path:At.emptyPath(),Vu:!1,yu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mc(n){const t=n._freezeSettings(),e=io(n._databaseId);return new ZE(n._databaseId,!!t.ignoreUndefinedProperties,e)}function tv(n,t,e,r,s,i={}){const o=n.Su(i.merge||i.mergeFields?2:0,t,e,s);xc("Data must be an object, but it was:",o,r);const a=kf(r,o);let c,l;if(i.merge)c=new $t(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=xa(t,h,e);if(!o.contains(d))throw new S(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Nf(u,d)||u.push(d)}c=new $t(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new XE(new Bt(a),c,l)}class fo extends Oc{_toFieldTransform(t){if(t.du!==2)throw t.du===1?t.pu(`${this._methodName}() can only appear at the top level of your update data`):t.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof fo}}function ev(n,t,e,r){const s=n.Su(1,t,e);xc("Data must be an object, but it was:",s,r);const i=[],o=Bt.empty();_n(r,(c,l)=>{const u=Fc(t,c,e);l=Pt(l);const h=s.fu(u);if(l instanceof fo)i.push(u);else{const d=Ns(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new $t(i);return new Cf(o,a,s.fieldTransforms)}function nv(n,t,e,r,s,i){const o=n.Su(1,t,e),a=[xa(t,r,e)],c=[s];if(i.length%2!=0)throw new S(p.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(xa(t,i[d])),c.push(i[d+1]);const l=[],u=Bt.empty();for(let d=a.length-1;d>=0;--d)if(!Nf(l,a[d])){const f=a[d];let y=c[d];y=Pt(y);const P=o.fu(f);if(y instanceof fo)l.push(f);else{const g=Ns(y,P);g!=null&&(l.push(f),u.set(f,g))}}const h=new $t(l);return new Cf(u,h,o.fieldTransforms)}function rv(n,t,e,r=!1){return Ns(e,n.Su(r?4:3,t))}function Ns(n,t){if(Df(n=Pt(n)))return xc("Unsupported field value:",t,n),kf(n,t);if(n instanceof Oc)return function(r,s){if(!bf(s.du))throw s.pu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.pu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Vu&&t.du!==4)throw t.pu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Ns(a,s.gu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,t)}return function(r,s){if((r=Pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return z_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=gt.fromDate(r);return{timestampValue:Ci(s.serializer,i)}}if(r instanceof gt){const i=new gt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ci(s.serializer,i)}}if(r instanceof Vc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yn)return{bytesValue:Xd(s.serializer,r._byteString)};if(r instanceof jt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ic(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.pu(`Unsupported field value: ${co(r)}`)}(n,t)}function kf(n,t){const e={};return Ad(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):_n(n,(r,s)=>{const i=Ns(s,t.Ru(r));i!=null&&(e[r]=i)}),{mapValue:{fields:e}}}function Df(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof gt||n instanceof Vc||n instanceof Yn||n instanceof jt||n instanceof Oc)}function xc(n,t,e){if(!Df(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=co(e);throw r==="an object"?t.pu(n+" a custom object"):t.pu(n+" "+r)}}function xa(n,t,e){if((t=Pt(t))instanceof ho)return t._internalPath;if(typeof t=="string")return Fc(n,t);throw ki("Field path arguments must be of type string or ",n,!1,void 0,e)}const sv=new RegExp("[~\\*/\\[\\]]");function Fc(n,t,e){if(t.search(sv)>=0)throw ki(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ho(...t.split("."))._internalPath}catch{throw ki(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ki(n,t,e,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new S(p.INVALID_ARGUMENT,a+n+c)}function Nf(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new iv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Uc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class iv extends Of{data(){return super.data()}}function Uc(n,t){return typeof t=="string"?Fc(n,t):t instanceof ho?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new S(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bc{}class av extends Bc{}function ra(n,t,...e){let r=[];t instanceof Bc&&r.push(t),r=r.concat(e),function(i){const o=i.filter(c=>c instanceof $c).length,a=i.filter(c=>c instanceof po).length;if(o>1||o>0&&a>0)throw new S(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class po extends av{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new po(t,e,r)}_apply(t){const e=this._parse(t);return Vf(t._query,e),new ar(t.firestore,t.converter,ba(t._query,e))}_parse(t){const e=Mc(t.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new S(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Fu(h,u);const f=[];for(const y of h)f.push(xu(c,i,y));d={arrayValue:{values:f}}}else d=xu(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Fu(h,u),d=rv(a,o,h,u==="in"||u==="not-in");return dt.create(l,u,d)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function sa(n,t,e){const r=t,s=Uc("where",n);return po._create(s,r,e)}class $c extends Bc{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new $c(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Wt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Vf(o,c),o=ba(o,c)}(t._query,e),new ar(t.firestore,t.converter,ba(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function xu(n,t,e){if(typeof(e=Pt(e))=="string"){if(e==="")throw new S(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vd(t)&&e.indexOf("/")!==-1)throw new S(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(et.fromString(e));if(!O.isDocumentKey(r))throw new S(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return au(n,new O(r))}if(e instanceof jt)return au(n,e._key);throw new S(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${co(e)}.`)}function Fu(n,t){if(!Array.isArray(n)||n.length===0)throw new S(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Vf(n,t){const e=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new S(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new S(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class cv{convertValue(t,e="none"){switch(pn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ut(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(fn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return _n(t,(s,i)=>{r[s]=this.convertValue(i,e)}),r}convertGeoPoint(t){return new Vc(ut(t.latitude),ut(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=gc(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(cs(t));default:return null}}convertTimestamp(t){const e=We(t);return new gt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=et.fromString(t);Z(sf(r));const s=new ls(r.get(1),r.get(3)),i=new O(r.popFirst(5));return s.isEqual(e)||ie(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class uv extends Of{constructor(t,e,r,s,i,o){super(t,e,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new li(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Uc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class li extends uv{data(t={}){return super.data(t)}}class hv{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new ri(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new li(this._firestore,this._userDataWriter,r.key,r,new ri(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new S(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new li(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ri(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new li(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ri(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:dv(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function dv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class fv extends cv{constructor(t){super(),this.firestore=t}convertBytes(t){return new Yn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new jt(this.firestore,null,e)}}function ia(n){n=Qn(n,ar);const t=Qn(n.firestore,uo),e=Sf(t),r=new fv(t);return ov(n._query),KE(e,n._query).then(s=>new hv(t,r,n,s))}function pv(n,t,e,...r){n=Qn(n,jt);const s=Qn(n.firestore,uo),i=Mc(s);let o;return o=typeof(t=Pt(t))=="string"||t instanceof ho?nv(i,"updateDoc",n._key,t,e,r):ev(i,"updateDoc",n._key,t),Lf(s,[o.toMutation(n._key,ee.exists(!0))])}function mv(n,t){const e=Qn(n.firestore,uo),r=WE(n),s=lv(n.converter,t);return Lf(e,[tv(Mc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,ee.exists(!1))]).then(()=>r)}function Lf(n,t){return function(r,s){const i=new Ae;return r.asyncQueue.enqueueAndForget(async()=>bE(await qE(r),s,i)),i.promise}(Sf(n),t)}(function(t,e=!0){(function(s){sr=s})(er),$n(new un("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new uo(new l_(r.getProvider("auth-internal")),new f_(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new S(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ls(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:e},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),je(nu,"4.4.1",t),je(nu,"4.4.1","esm2017")})();function jc(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(e[r[s]]=n[r[s]]);return e}function Mf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gv=Mf,xf=new ms("auth","Firebase",Mf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new Ba("@firebase/auth");function _v(n,...t){Di.logLevel<=K.WARN&&Di.warn(`Auth (${er}): ${n}`,...t)}function ui(n,...t){Di.logLevel<=K.ERROR&&Di.error(`Auth (${er}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(n,...t){throw qc(n,...t)}function re(n,...t){return qc(n,...t)}function Ff(n,t,e){const r=Object.assign(Object.assign({},gv()),{[t]:e});return new ms("auth","Firebase",r).create(t,{appName:n.name})}function yv(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&ae(n,"argument-error"),Ff(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qc(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return xf.create(n,...t)}function U(n,t,...e){if(!n)throw qc(t,...e)}function ve(n){const t="INTERNAL ASSERTION FAILED: "+n;throw ui(t),new Error(t)}function Pe(n,t){n||ve(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ev(){return Uu()==="http:"||Uu()==="https:"}function Uu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ev()||Mp()||"connection"in navigator)?navigator.onLine:!0}function Tv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t,e){this.shortDelay=t,this.longDelay=e,Pe(e>t,"Short delay should be less than long delay!"),this.isMobile=Vp()||xp()}get(){return vv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(n,t){Pe(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=new Os(3e4,6e4);function Kc(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function cr(n,t,e,r,s={}){return Bf(n,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=gs(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Uf.fetch()($f(n,n.config.apiHost,e,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function Bf(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Iv),t);try{const s=new Rv(n),i=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw si(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw si(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw si(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw si(n,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ff(n,u,l);ae(n,u)}}catch(s){if(s instanceof Ce)throw s;ae(n,"network-request-failed",{message:String(s)})}}async function Av(n,t,e,r,s={}){const i=await cr(n,t,e,r,s);return"mfaPendingCredential"in i&&ae(n,"multi-factor-auth-required",{_serverResponse:i}),i}function $f(n,t,e,r){const s=`${t}${e}?${r}`;return n.config.emulator?Gc(n.config,s):`${n.config.apiScheme}://${s}`}class Rv{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(re(this.auth,"network-request-failed")),wv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function si(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=re(n,t,r);return s.customData._tokenResponse=e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sv(n,t){return cr(n,"POST","/v1/accounts:delete",t)}async function Pv(n,t){return cr(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Cv(n,t=!1){const e=Pt(n),r=await e.getIdToken(t),s=zc(r);U(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Jr(oa(s.auth_time)),issuedAtTime:Jr(oa(s.iat)),expirationTime:Jr(oa(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function oa(n){return Number(n)*1e3}function zc(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return ui("JWT malformed, contained fewer than 3 sections"),null;try{const s=ch(e);return s?JSON.parse(s):(ui("Failed to decode base64 JWT payload"),null)}catch(s){return ui("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bv(n){const t=zc(n);return U(t,"internal-error"),U(typeof t.exp<"u","internal-error"),U(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Ce&&kv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function kv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jr(this.lastLoginAt),this.creationTime=Jr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ni(n){var t;const e=n.auth,r=await n.getIdToken(),s=await fs(n,Pv(e,{idToken:r}));U(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Vv(i.providerUserInfo):[],a=Ov(n.providerData,o),c=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new jf(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Nv(n){const t=Pt(n);await Ni(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ov(n,t){return[...n.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Vv(n){return n.map(t=>{var{providerId:e}=t,r=jc(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lv(n,t){const e=await Bf(n,{},async()=>{const r=gs({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=$f(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Uf.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function Mv(n,t){return cr(n,"POST","/v2/accounts:revokeToken",Kc(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){U(t.idToken,"internal-error"),U(typeof t.idToken<"u","internal-error"),U(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):bv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return U(!this.accessToken||this.refreshToken,t,"user-token-expired"),!e&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:i}=await Lv(t,e);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:i}=e,o=new ps;return r&&(U(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ps,this.toJSON())}_performRefresh(){return ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(n,t){U(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class ln{constructor(t){var{uid:e,auth:r,stsTokenManager:s}=t,i=jc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Dv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new jf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await fs(this,this.stsTokenManager.getToken(this.auth,t));return U(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Cv(this,t)}reload(){return Nv(this)}_assign(t){this!==t&&(U(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ln(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Ni(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await fs(this,Sv(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,s,i,o,a,c,l,u;const h=(r=e.displayName)!==null&&r!==void 0?r:void 0,d=(s=e.email)!==null&&s!==void 0?s:void 0,f=(i=e.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=e.photoURL)!==null&&o!==void 0?o:void 0,P=(a=e.tenantId)!==null&&a!==void 0?a:void 0,g=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=e.createdAt)!==null&&l!==void 0?l:void 0,A=(u=e.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:L,isAnonymous:nt,providerData:Q,stsTokenManager:C}=e;U(v&&C,t,"internal-error");const at=ps.fromJSON(this.name,C);U(typeof v=="string",t,"internal-error"),Le(h,t.name),Le(d,t.name),U(typeof L=="boolean",t,"internal-error"),U(typeof nt=="boolean",t,"internal-error"),Le(f,t.name),Le(y,t.name),Le(P,t.name),Le(g,t.name),Le(b,t.name),Le(A,t.name);const ct=new ln({uid:v,auth:t,email:d,emailVerified:L,displayName:h,isAnonymous:nt,photoURL:y,phoneNumber:f,tenantId:P,stsTokenManager:at,createdAt:b,lastLoginAt:A});return Q&&Array.isArray(Q)&&(ct.providerData=Q.map(_t=>Object.assign({},_t))),g&&(ct._redirectEventId=g),ct}static async _fromIdTokenResponse(t,e,r=!1){const s=new ps;s.updateFromServerResponse(e);const i=new ln({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Ni(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new Map;function Te(n){Pe(n instanceof Function,"Expected a class definition");let t=Bu.get(n);return t?(Pe(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Bu.set(n,t),t)}/**
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
 */class qf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}qf.type="NONE";const $u=qf;/**
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
 */function hi(n,t,e){return`firebase:${n}:${t}:${e}`}class Un{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=hi(this.userKey,s.apiKey,i),this.fullPersistenceKey=hi("persistence",s.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ln._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new Un(Te($u),t,r);const s=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Te($u);const o=hi(r,t.config.apiKey,t.name);let a=null;for(const l of e)try{const u=await l._get(o);if(u){const h=ln._fromJSON(t,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Un(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Un(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(zf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Gf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Wf(t))return"Blackberry";if(Qf(t))return"Webos";if(Hc(t))return"Safari";if((t.includes("chrome/")||Kf(t))&&!t.includes("edge/"))return"Chrome";if(Hf(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gf(n=ft()){return/firefox\//i.test(n)}function Hc(n=ft()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Kf(n=ft()){return/crios\//i.test(n)}function zf(n=ft()){return/iemobile/i.test(n)}function Hf(n=ft()){return/android/i.test(n)}function Wf(n=ft()){return/blackberry/i.test(n)}function Qf(n=ft()){return/webos/i.test(n)}function mo(n=ft()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function xv(n=ft()){var t;return mo(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Fv(){return Fp()&&document.documentMode===10}function Yf(n=ft()){return mo(n)||Hf(n)||Qf(n)||Wf(n)||/windows phone/i.test(n)||zf(n)}function Uv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(n,t=[]){let e;switch(n){case"Browser":e=ju(ft());break;case"Worker":e=`${ju(ft())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${er}/${r}`}/**
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
 */class Bv{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $v(n,t={}){return cr(n,"GET","/v2/passwordPolicy",Kc(n,t))}/**
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
 */const jv=6;class qv{constructor(t){var e,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:jv,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qu(this),this.idTokenSubscription=new qu(this),this.beforeStateQueue=new Bv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Te(e)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Un.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var e;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Ni(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Tv()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Pt(t):null;return e&&U(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&U(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Te(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await $v(this),e=new qv(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ms("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await Mv(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Te(t)||this._popupRedirectResolver;U(e,this,"argument-error"),this.redirectPersistenceManager=await Un.create(this,[Te(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const i=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Jf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&_v(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function go(n){return Pt(n)}class qu{constructor(t){this.auth=t,this.observer=null,this.addObserver=Kp(e=>this.observer=e)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}function zv(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=s=>{const i=re("internal-error");i.customData=s,e(i)},r.type="text/javascript",r.charset="UTF-8",Kv().appendChild(r)})}function Hv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(n,t){const e=ja(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),i=e.getOptions();if(mi(i,t??{}))return s;ae(s,"already-initialized")}return e.initialize({options:t})}function Qv(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(Te);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Yv(n,t,e){const r=go(n);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(e!=null&&e.disableWarnings),i=Xf(t),{host:o,port:a}=Jv(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Xv()}function Xf(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Jv(n){const t=Xf(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gu(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gu(o)}}}function Gu(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Xv(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ve("not implemented")}_getIdTokenResponse(t){return ve("not implemented")}_linkToIdToken(t,e){return ve("not implemented")}_getReauthenticationResolver(t){return ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(n,t){return Av(n,"POST","/v1/accounts:signInWithIdp",Kc(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="http://localhost";class mn extends Zf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new mn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):ae("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=e,i=jc(e,["providerId","signInMethod"]);if(!r||!s)return null;const o=new mn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Bn(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Bn(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Bn(t,e)}buildRequest(){const t={requestUri:Zv,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=gs(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vs extends Wc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends Vs{constructor(){super("facebook.com")}static credential(t){return mn._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Me.credentialFromTaggedObject(t)}static credentialFromError(t){return Me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Me.credential(t.oauthAccessToken)}catch{return null}}}Me.FACEBOOK_SIGN_IN_METHOD="facebook.com";Me.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends Vs{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return mn._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ye.credentialFromTaggedObject(t)}static credentialFromError(t){return ye.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return ye.credential(e,r)}catch{return null}}}ye.GOOGLE_SIGN_IN_METHOD="google.com";ye.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends Vs{constructor(){super("github.com")}static credential(t){return mn._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xe.credentialFromTaggedObject(t)}static credentialFromError(t){return xe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xe.credential(t.oauthAccessToken)}catch{return null}}}xe.GITHUB_SIGN_IN_METHOD="github.com";xe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends Vs{constructor(){super("twitter.com")}static credential(t,e){return mn._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Fe.credentialFromTaggedObject(t)}static credentialFromError(t){return Fe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Fe.credential(e,r)}catch{return null}}}Fe.TWITTER_SIGN_IN_METHOD="twitter.com";Fe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const i=await ln._fromIdTokenResponse(t,r,s),o=Ku(r);return new Jn({user:i,providerId:o,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=Ku(r);return new Jn({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function Ku(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends Ce{constructor(t,e,r,s){var i;super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Oi.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new Oi(t,e,r,s)}}function tp(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Oi._fromErrorAndOperation(n,i,t,r):i})}async function tT(n,t,e=!1){const r=await fs(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Jn._forOperation(n,"link",r)}/**
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
 */async function eT(n,t,e=!1){const{auth:r}=n,s="reauthenticate";try{const i=await fs(n,tp(r,s,t,n),e);U(i.idToken,r,"internal-error");const o=zc(i.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(n.uid===a,r,"user-mismatch"),Jn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ae(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(n,t,e=!1){const r="signIn",s=await tp(n,r,t),i=await Jn._fromIdTokenResponse(n,r,s);return e||await n._updateCurrentUser(i.user),i}function rT(n,t,e,r){return Pt(n).onIdTokenChanged(t,e,r)}function sT(n,t,e){return Pt(n).beforeAuthStateChanged(t,e)}function iT(n,t,e,r){return Pt(n).onAuthStateChanged(t,e,r)}function oT(n){return Pt(n).signOut()}const Vi="__sak";/**
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
 */class ep{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Vi,"1"),this.storage.removeItem(Vi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(){const n=ft();return Hc(n)||mo(n)}const cT=1e3,lT=10;class np extends ep{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aT()&&Uv(),this.fallbackToPolling=Yf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),s=this.localCache[e];r!==s&&t(e,s,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!e)return}const s=()=>{const o=this.storage.getItem(r);!e&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Fv()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,lT):s()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},cT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}np.type="LOCAL";const uT=np;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp extends ep{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}rp.type="SESSION";const sp=rp;/**
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
 */function hT(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class _o{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const r=new _o(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:s,data:i}=e.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(e.origin,i)),c=await hT(a);e.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_o.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class dT{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Qc("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return window}function fT(n){se().location.href=n}/**
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
 */function ip(){return typeof se().WorkerGlobalScope<"u"&&typeof se().importScripts=="function"}async function pT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function gT(){return ip()?self:null}/**
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
 */const op="firebaseLocalStorageDb",_T=1,Li="firebaseLocalStorage",ap="fbase_key";class Ls{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function yo(n,t){return n.transaction([Li],t?"readwrite":"readonly").objectStore(Li)}function yT(){const n=indexedDB.deleteDatabase(op);return new Ls(n).toPromise()}function Ua(){const n=indexedDB.open(op,_T);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Li,{keyPath:ap})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Li)?t(r):(r.close(),await yT(),t(await Ua()))})})}async function zu(n,t,e){const r=yo(n,!0).put({[ap]:t,value:e});return new Ls(r).toPromise()}async function ET(n,t){const e=yo(n,!1).get(t),r=await new Ls(e).toPromise();return r===void 0?null:r.value}function Hu(n,t){const e=yo(n,!0).delete(t);return new Ls(e).toPromise()}const vT=800,TT=3;class cp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ua(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>TT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ip()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_o._getInstance(gT()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await pT(),!this.activeServiceWorker)return;this.sender=new dT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||mT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ua();return await zu(t,Vi,"1"),await Hu(t,Vi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>zu(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>ET(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Hu(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=yo(s,!1).getAll();return new Ls(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cp.type="LOCAL";const IT=cp;new Os(3e4,6e4);/**
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
 */function lp(n,t){return t?Te(t):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Yc extends Zf{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Bn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Bn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Bn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function wT(n){return nT(n.auth,new Yc(n),n.bypassAuthState)}function AT(n){const{auth:t,user:e}=n;return U(e,t,"internal-error"),eT(e,new Yc(n),n.bypassAuthState)}async function RT(n){const{auth:t,user:e}=n;return U(e,t,"internal-error"),tT(e,new Yc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(t,e,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return wT;case"linkViaPopup":case"linkViaRedirect":return RT;case"reauthViaPopup":case"reauthViaRedirect":return AT;default:ae(this.auth,"internal-error")}}resolve(t){Pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=new Os(2e3,1e4);async function PT(n,t,e){const r=go(n);yv(n,t,Wc);const s=lp(r,e);return new an(r,"signInViaPopup",t,s).executeNotNull()}class an extends up{constructor(t,e,r,s,i){super(t,e,s,i),this.provider=r,this.authWindow=null,this.pollId=null,an.currentPopupAction&&an.currentPopupAction.cancel(),an.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return U(t,this.auth,"internal-error"),t}async onExecution(){Pe(this.filter.length===1,"Popup operations only handle one event");const t=Qc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(re(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,an.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(re(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,ST.get())};t()}}an.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT="pendingRedirect",di=new Map;class bT extends up{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=di.get(this.auth._key());if(!t){try{const r=await kT(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}di.set(this.auth._key(),t)}return this.bypassAuthState||di.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kT(n,t){const e=OT(t),r=NT(n);if(!await r._isAvailable())return!1;const s=await r._get(e)==="true";return await r._remove(e),s}function DT(n,t){di.set(n._key(),t)}function NT(n){return Te(n._redirectPersistence)}function OT(n){return hi(CT,n.config.apiKey,n.name)}async function VT(n,t,e=!1){const r=go(n),s=lp(r,t),o=await new bT(r,s,e).execute();return o&&!e&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=10*60*1e3;class MT{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!xT(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!hp(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(re(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=LT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wu(t))}saveEventToCache(t){this.cachedEventUids.add(Wu(t)),this.lastProcessedEventTime=Date.now()}}function Wu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function hp({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function xT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(n,t={}){return cr(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BT=/^https?/;async function $T(n){if(n.config.emulator)return;const{authorizedDomains:t}=await FT(n);for(const e of t)try{if(jT(e))return}catch{}ae(n,"unauthorized-domain")}function jT(n){const t=Fa(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===r}if(!BT.test(e))return!1;if(UT.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const qT=new Os(3e4,6e4);function Qu(){const n=se().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function GT(n){return new Promise((t,e)=>{var r,s,i;function o(){Qu(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Qu(),e(re(n,"network-request-failed"))},timeout:qT.get()})}if(!((s=(r=se().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=se().gapi)===null||i===void 0)&&i.load)o();else{const a=Hv("iframefcb");return se()[a]=()=>{gapi.load?o():e(re(n,"network-request-failed"))},zv(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw fi=null,t})}let fi=null;function KT(n){return fi=fi||GT(n),fi}/**
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
 */const zT=new Os(5e3,15e3),HT="__/auth/iframe",WT="emulator/auth/iframe",QT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JT(n){const t=n.config;U(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Gc(t,WT):`https://${n.config.authDomain}/${HT}`,r={apiKey:t.apiKey,appName:n.name,v:er},s=YT.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${e}?${gs(r).slice(1)}`}async function XT(n){const t=await KT(n),e=se().gapi;return U(e,n,"internal-error"),t.open({where:document.body,url:JT(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=re(n,"network-request-failed"),a=se().setTimeout(()=>{i(o)},zT.get());function c(){se().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const ZT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tI=500,eI=600,nI="_blank",rI="http://localhost";class Yu{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sI(n,t,e,r=tI,s=eI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ZT),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ft().toLowerCase();e&&(a=Kf(l)?nI:e),Gf(l)&&(t=t||rI,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(xv(l)&&a!=="_self")return iI(t||"",a),new Yu(null);const h=window.open(t||"",a,u);U(h,n,"popup-blocked");try{h.focus()}catch{}return new Yu(h)}function iI(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const oI="__/auth/handler",aI="emulator/auth/handler",cI=encodeURIComponent("fac");async function Ju(n,t,e,r,s,i){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:er,eventId:s};if(t instanceof Wc){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",Gp(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(t instanceof Vs){const u=t.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${cI}=${encodeURIComponent(c)}`:"";return`${lI(n)}?${gs(a).slice(1)}${l}`}function lI({config:n}){return n.emulator?Gc(n,aI):`https://${n.authDomain}/${oI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="webStorageSupport";class uI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sp,this._completeRedirectFn=VT,this._overrideRedirectResult=DT}async _openPopup(t,e,r,s){var i;Pe((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ju(t,e,r,Fa(),s);return sI(t,o,Qc())}async _openRedirect(t,e,r,s){await this._originValidation(t);const i=await Ju(t,e,r,Fa(),s);return fT(i),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:i}=this.eventManagers[e];return s?Promise.resolve(s):(Pe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await XT(t),r=new MT(t);return e.register("authEvent",s=>(U(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(aa,{type:aa},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[aa];o!==void 0&&e(!!o),ae(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=$T(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Yf()||Hc()||mo()}}const hI=uI;var Xu="@firebase/auth",Zu="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function pI(n){$n(new un("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jf(n)},l=new Gv(r,s,i,c);return Qv(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),$n(new un("auth-internal",t=>{const e=go(t.getProvider("auth").getImmediate());return(r=>new dI(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),je(Xu,Zu,fI(n)),je(Xu,Zu,"esm2017")}/**
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
 */const mI=5*60,gI=hh("authIdTokenMaxAge")||mI;let th=null;const _I=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>gI)return;const s=e==null?void 0:e.token;th!==s&&(th=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function yI(n=gh()){const t=ja(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Wv(n,{popupRedirectResolver:hI,persistence:[IT,uT,sp]}),r=hh("authTokenSyncURL");if(r){const i=_I(r);sT(e,i,()=>i(e.currentUser)),rT(e,o=>i(o))}const s=lh("auth");return s&&Yv(e,`http://${s}`),e}pI("Browser");function EI(n){let t,e,r,s;return{c(){t=Ie("svg"),e=Ie("path"),r=Ie("path"),this.h()},l(i){t=we(i,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var o=V(t);e=we(o,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),V(e).forEach(E),r=we(o,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),V(r).forEach(E),o.forEach(E),this.h()},h(){N(e,"stroke-linecap","round"),N(e,"stroke-linejoin","round"),N(e,"d","M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"),N(r,"stroke-linecap","round"),N(r,"stroke-linejoin","round"),N(r,"d","M15 12a3 3 0 11-6 0 3 3 0 016 0z"),N(t,"xmlns","http://www.w3.org/2000/svg"),N(t,"fill","none"),N(t,"viewBox","0 0 24 24"),N(t,"stroke-width","1.5"),N(t,"stroke","currentColor"),N(t,"class",s=n[1].class||ze[n[0]])},m(i,o){W(i,t,o),_(t,e),_(t,r)},p(i,[o]){o&3&&s!==(s=i[1].class||ze[i[0]])&&N(t,"class",s)},i:zt,o:zt,d(i){i&&E(t)}}}function vI(n,t,e){let{size:r="md"}=t;return n.$$set=s=>{e(1,t=Ge(Ge({},t),Ke(s))),"size"in s&&e(0,r=s.size)},t=Ke(t),[r,t]}class TI extends Zn{constructor(t){super(),tr(this,t,vI,EI,Xn,{size:0})}}function II(n){let t,e,r;return{c(){t=Ie("svg"),e=Ie("path"),this.h()},l(s){t=we(s,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var i=V(t);e=we(i,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),V(e).forEach(E),i.forEach(E),this.h()},h(){N(e,"stroke-linecap","round"),N(e,"stroke-linejoin","round"),N(e,"d","M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"),N(t,"xmlns","http://www.w3.org/2000/svg"),N(t,"fill","none"),N(t,"viewBox","0 0 24 24"),N(t,"stroke-width","1.5"),N(t,"stroke","currentColor"),N(t,"class",r=n[1].class||ze[n[0]])},m(s,i){W(s,t,i),_(t,e)},p(s,[i]){i&3&&r!==(r=s[1].class||ze[s[0]])&&N(t,"class",r)},i:zt,o:zt,d(s){s&&E(t)}}}function wI(n,t,e){let{size:r="md"}=t;return n.$$set=s=>{e(1,t=Ge(Ge({},t),Ke(s))),"size"in s&&e(0,r=s.size)},t=Ke(t),[r,t]}class AI extends Zn{constructor(t){super(),tr(this,t,wI,II,Xn,{size:0})}}function RI(n){let t,e,r;return{c(){t=Ie("svg"),e=Ie("path"),this.h()},l(s){t=we(s,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var i=V(t);e=we(i,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),V(e).forEach(E),i.forEach(E),this.h()},h(){N(e,"stroke-linecap","round"),N(e,"stroke-linejoin","round"),N(e,"d","M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"),N(t,"xmlns","http://www.w3.org/2000/svg"),N(t,"fill","none"),N(t,"viewBox","0 0 24 24"),N(t,"stroke-width","1.5"),N(t,"stroke","currentColor"),N(t,"class",r=n[1].class||ze[n[0]])},m(s,i){W(s,t,i),_(t,e)},p(s,[i]){i&3&&r!==(r=s[1].class||ze[s[0]])&&N(t,"class",r)},i:zt,o:zt,d(s){s&&E(t)}}}function SI(n,t,e){let{size:r="md"}=t;return n.$$set=s=>{e(1,t=Ge(Ge({},t),Ke(s))),"size"in s&&e(0,r=s.size)},t=Ke(t),[r,t]}class PI extends Zn{constructor(t){super(),tr(this,t,SI,RI,Xn,{size:0})}}function CI(n){let t,e,r;return{c(){t=Ie("svg"),e=Ie("path"),this.h()},l(s){t=we(s,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var i=V(t);e=we(i,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),V(e).forEach(E),i.forEach(E),this.h()},h(){N(e,"stroke-linecap","round"),N(e,"stroke-linejoin","round"),N(e,"d","M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"),N(t,"xmlns","http://www.w3.org/2000/svg"),N(t,"fill","none"),N(t,"viewBox","0 0 24 24"),N(t,"stroke-width","1.5"),N(t,"stroke","currentColor"),N(t,"class",r=n[1].class||ze[n[0]])},m(s,i){W(s,t,i),_(t,e)},p(s,[i]){i&3&&r!==(r=s[1].class||ze[s[0]])&&N(t,"class",r)},i:zt,o:zt,d(s){s&&E(t)}}}function bI(n,t,e){let{size:r="md"}=t;return n.$$set=s=>{e(1,t=Ge(Ge({},t),Ke(s))),"size"in s&&e(0,r=s.size)},t=Ke(t),[r,t]}class kI extends Zn{constructor(t){super(),tr(this,t,bI,CI,Xn,{size:0})}}function eh(n,t,e){const r=n.slice();return r[1]=t[e],r}function DI(n){let t,e="N/A";return{c(){t=k("span"),t.textContent=e},l(r){t=D(r,"SPAN",{"data-svelte-h":!0}),Gt(t)!=="svelte-mgbc10"&&(t.textContent=e)},m(r,s){W(r,t,s)},p:zt,d(r){r&&E(t)}}}function NI(n){let t,e=[],r=new Map,s=Nl(n[0]);const i=o=>o[1].l;for(let o=0;o<s.length;o+=1){let a=eh(n,s,o),c=i(a);r.set(c,e[o]=nh(c,a))}return{c(){t=k("ul");for(let o=0;o<e.length;o+=1)e[o].c();this.h()},l(o){t=D(o,"UL",{class:!0});var a=V(t);for(let c=0;c<e.length;c+=1)e[c].l(a);a.forEach(E),this.h()},h(){N(t,"class","flex flex-col gap-2")},m(o,a){W(o,t,a);for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(t,null)},p(o,a){a&1&&(s=Nl(o[0]),e=pp(e,a,i,1,o,s,r,t,mp,nh,null,eh))},d(o){o&&E(t);for(let a=0;a<e.length;a+=1)e[a].d()}}}function nh(n,t){let e,r=t[1].l+"",s;return{key:n,first:null,c(){e=k("li"),s=J(r),this.h()},l(i){e=D(i,"LI",{});var o=V(e);s=X(o,r),o.forEach(E),this.h()},h(){this.first=e},m(i,o){W(i,e,o),_(e,s)},p(i,o){t=i,o&1&&r!==(r=t[1].l+"")&&pt(s,r)},d(i){i&&E(e)}}}function OI(n){let t,e;function r(o,a){return a&1&&(t=null),t==null&&(t=!!Array.isArray(o[0])),t?NI:DI}let s=r(n,-1),i=s(n);return{c(){i.c(),e=wl()},l(o){i.l(o),e=wl()},m(o,a){i.m(o,a),W(o,e,a)},p(o,[a]){s===(s=r(o,a))&&i?i.p(o,a):(i.d(1),i=s(o),i&&(i.c(),i.m(e.parentNode,e)))},i:zt,o:zt,d(o){o&&E(e),i.d(o)}}}function VI(n,t,e){let{jsonArrayObject:r=[]}=t;return n.$$set=s=>{"jsonArrayObject"in s&&e(0,r=s.jsonArrayObject)},[r]}class ii extends Zn{constructor(t){super(),tr(this,t,VI,OI,Xn,{jsonArrayObject:0})}}function LI(n){let t,e="Masuk ke Akun Google untuk melakukan sync",r,s,i,o;return i=new Br({props:{variant:"subtle",onClick:n[10],$$slots:{default:[xI]},$$scope:{ctx:n}}}),{c(){t=k("p"),t.textContent=e,r=q(),s=k("div"),Lt(i.$$.fragment),this.h()},l(a){t=D(a,"P",{"data-svelte-h":!0}),Gt(t)!=="svelte-ucobge"&&(t.textContent=e),r=G(a),s=D(a,"DIV",{class:!0});var c=V(s);Mt(i.$$.fragment,c),c.forEach(E),this.h()},h(){N(s,"class","flex gap-2 mt-4")},m(a,c){W(a,t,c),W(a,r,c),W(a,s,c),xt(i,s,null),o=!0},p(a,c){const l={};c&1048576&&(l.$$scope={dirty:c,ctx:a}),i.$set(l)},i(a){o||(ht(i.$$.fragment,a),o=!0)},o(a){mt(i.$$.fragment,a),o=!1},d(a){a&&(E(t),E(r),E(s)),Ft(i)}}}function MI(n){let t,e,r,s=n[0].displayName+"",i,o,a,c,l,u,h,d,f,y,P,g,b;c=new Br({props:{variant:"subtle",onClick:n[12],$$slots:{default:[FI]},$$scope:{ctx:n}}}),u=new Br({props:{variant:"subtle",onClick:n[13],$$slots:{default:[UI]},$$scope:{ctx:n}}}),d=new Br({props:{variant:"subtle",onClick:n[14],$$slots:{default:[BI]},$$scope:{ctx:n}}});let A=n[1]&&rh(n);return g=new Br({props:{variant:"subtle",onClick:n[11],$$slots:{default:[qI]},$$scope:{ctx:n}}}),{c(){t=k("p"),e=J("Kamu telah login sebagai: "),r=k("b"),i=J(s),o=q(),a=k("div"),Lt(c.$$.fragment),l=q(),Lt(u.$$.fragment),h=q(),Lt(d.$$.fragment),f=q(),A&&A.c(),y=q(),P=k("div"),Lt(g.$$.fragment),this.h()},l(v){t=D(v,"P",{});var L=V(t);e=X(L,"Kamu telah login sebagai: "),r=D(L,"B",{});var nt=V(r);i=X(nt,s),nt.forEach(E),L.forEach(E),o=G(v),a=D(v,"DIV",{class:!0});var Q=V(a);Mt(c.$$.fragment,Q),l=G(Q),Mt(u.$$.fragment,Q),h=G(Q),Mt(d.$$.fragment,Q),Q.forEach(E),f=G(v),A&&A.l(v),y=G(v),P=D(v,"DIV",{class:!0});var C=V(P);Mt(g.$$.fragment,C),C.forEach(E),this.h()},h(){N(a,"class","flex flex-col flex-wrap gap-2 my-4"),N(P,"class","flex flex-col flex-wrap gap-2 mt-4")},m(v,L){W(v,t,L),_(t,e),_(t,r),_(r,i),W(v,o,L),W(v,a,L),xt(c,a,null),_(a,l),xt(u,a,null),_(a,h),xt(d,a,null),W(v,f,L),A&&A.m(v,L),W(v,y,L),W(v,P,L),xt(g,P,null),b=!0},p(v,L){(!b||L&1)&&s!==(s=v[0].displayName+"")&&pt(i,s);const nt={};L&1048576&&(nt.$$scope={dirty:L,ctx:v}),c.$set(nt);const Q={};L&1048576&&(Q.$$scope={dirty:L,ctx:v}),u.$set(Q);const C={};L&1048576&&(C.$$scope={dirty:L,ctx:v}),d.$set(C),v[1]?A?(A.p(v,L),L&2&&ht(A,1)):(A=rh(v),A.c(),ht(A,1),A.m(y.parentNode,y)):A&&(ih(),mt(A,1,1,()=>{A=null}),sh());const at={};L&1048576&&(at.$$scope={dirty:L,ctx:v}),g.$set(at)},i(v){b||(ht(c.$$.fragment,v),ht(u.$$.fragment,v),ht(d.$$.fragment,v),ht(A),ht(g.$$.fragment,v),b=!0)},o(v){mt(c.$$.fragment,v),mt(u.$$.fragment,v),mt(d.$$.fragment,v),mt(A),mt(g.$$.fragment,v),b=!1},d(v){v&&(E(t),E(o),E(a),E(f),E(y),E(P)),Ft(c),Ft(u),Ft(d),A&&A.d(v),Ft(g)}}}function xI(n){let t;return{c(){t=J("Sign In")},l(e){t=X(e,"Sign In")},m(e,r){W(e,t,r)},d(e){e&&E(t)}}}function FI(n){let t,e,r;return t=new TI({}),{c(){Lt(t.$$.fragment),e=J(`
				Bandingkan remote & local data`)},l(s){Mt(t.$$.fragment,s),e=X(s,`
				Bandingkan remote & local data`)},m(s,i){xt(t,s,i),W(s,e,i),r=!0},i(s){r||(ht(t.$$.fragment,s),r=!0)},o(s){mt(t.$$.fragment,s),r=!1},d(s){s&&E(e),Ft(t,s)}}}function UI(n){let t,e,r;return t=new PI({}),{c(){Lt(t.$$.fragment),e=J(`
				Upload local data to the remote`)},l(s){Mt(t.$$.fragment,s),e=X(s,`
				Upload local data to the remote`)},m(s,i){xt(t,s,i),W(s,e,i),r=!0},i(s){r||(ht(t.$$.fragment,s),r=!0)},o(s){mt(t.$$.fragment,s),r=!1},d(s){s&&E(e),Ft(t,s)}}}function BI(n){let t,e,r;return t=new kI({}),{c(){Lt(t.$$.fragment),e=J(`
				Sync local with remote data`)},l(s){Mt(t.$$.fragment,s),e=X(s,`
				Sync local with remote data`)},m(s,i){xt(t,s,i),W(s,e,i),r=!0},i(s){r||(ht(t.$$.fragment,s),r=!0)},o(s){mt(t.$$.fragment,s),r=!1},d(s){s&&E(e),Ft(t,s)}}}function rh(n){var sl,il,ol,al,cl,ll,ul,hl,dl,fl;let t,e,r,s='<tr><th scope="col">Field</th> <th scope="col">Remote</th> <th scope="col">Local</th></tr>',i,o,a,c,l="Audio",u,h,d=((sl=n[1])==null?void 0:sl[R.STORAGE_KEY.AUDIO])+"",f,y,P,g,b,A,v,L="Auto Next",nt,Q,C=((il=n[1])==null?void 0:il[R.STORAGE_KEY.AUTO_NEXT])+"",at,ct,_t,w=(n[8]?1:0)+"",Ms,Eo,ce,En,Jc="Tafsir",vo,lr,ur=((ol=n[1])==null?void 0:ol[R.STORAGE_KEY.TAFSIR])+"",xs,To,hr,dr=(n[7]?1:0)+"",Fs,Io,le,vn,Xc="Translation",wo,fr,pr=((al=n[1])==null?void 0:al[R.STORAGE_KEY.TRANSLATION])+"",Us,Ao,mr,gr=(n[6]?1:0)+"",Bs,Ro,ue,Tn,Zc="Theme",So,_r,yr=((cl=n[1])==null?void 0:cl[R.STORAGE_KEY.THEME])+"",$s,Po,Er,js,Co,he,In,tl="Location",bo,wn,ko,vr,be,Ze,Tr=(((ll=n[4])==null?void 0:ll.lt)||"N/A")+"",qs,Do,Ir=(((ul=n[4])==null?void 0:ul.lg)||"N/A")+"",Gs,No,wr,Ar=(((hl=n[4])==null?void 0:hl.district)||"N/A")+"",Ks,Oo,de,An,el="Last Read",Vo,Rr,ke,Lo,Sr,De,Mo,fe,Rn,nl="Pinned Surah",xo,Pr,Ne,Fo,Cr,Oe,Tt;function rl($,rt){var Qt,it;if(typeof((Qt=$[1])==null?void 0:Qt[R.STORAGE_KEY.LOCATION])=="string")return jI;if(typeof((it=$[1])==null?void 0:it[R.STORAGE_KEY.LOCATION])=="object")return $I}let Sn=rl(n),Ct=Sn&&Sn(n);return ke=new ii({props:{jsonArrayObject:(dl=n[1])==null?void 0:dl[R.STORAGE_KEY.LAST_VERSES]}}),De=new ii({props:{jsonArrayObject:n[3]}}),Ne=new ii({props:{jsonArrayObject:(fl=n[1])==null?void 0:fl[R.STORAGE_KEY.PINNED_SURAH]}}),Oe=new ii({props:{jsonArrayObject:n[2]}}),{c(){t=k("div"),e=k("table"),r=k("thead"),r.innerHTML=s,i=q(),o=k("tbody"),a=k("tr"),c=k("td"),c.textContent=l,u=q(),h=k("td"),f=J(d),y=q(),P=k("td"),g=J(n[9]),b=q(),A=k("tr"),v=k("td"),v.textContent=L,nt=q(),Q=k("td"),at=J(C),ct=q(),_t=k("td"),Ms=J(w),Eo=q(),ce=k("tr"),En=k("td"),En.textContent=Jc,vo=q(),lr=k("td"),xs=J(ur),To=q(),hr=k("td"),Fs=J(dr),Io=q(),le=k("tr"),vn=k("td"),vn.textContent=Xc,wo=q(),fr=k("td"),Us=J(pr),Ao=q(),mr=k("td"),Bs=J(gr),Ro=q(),ue=k("tr"),Tn=k("td"),Tn.textContent=Zc,So=q(),_r=k("td"),$s=J(yr),Po=q(),Er=k("td"),js=J(n[5]),Co=q(),he=k("tr"),In=k("td"),In.textContent=tl,bo=q(),wn=k("td"),Ct&&Ct.c(),ko=q(),vr=k("td"),be=k("ul"),Ze=k("li"),qs=J(Tr),Do=J(", "),Gs=J(Ir),No=q(),wr=k("li"),Ks=J(Ar),Oo=q(),de=k("tr"),An=k("td"),An.textContent=el,Vo=q(),Rr=k("td"),Lt(ke.$$.fragment),Lo=q(),Sr=k("td"),Lt(De.$$.fragment),Mo=q(),fe=k("tr"),Rn=k("td"),Rn.textContent=nl,xo=q(),Pr=k("td"),Lt(Ne.$$.fragment),Fo=q(),Cr=k("td"),Lt(Oe.$$.fragment),this.h()},l($){t=D($,"DIV",{class:!0});var rt=V(t);e=D(rt,"TABLE",{class:!0});var Qt=V(e);r=D(Qt,"THEAD",{"data-svelte-h":!0}),Gt(r)!=="svelte-3stuni"&&(r.innerHTML=s),i=G(Qt),o=D(Qt,"TBODY",{});var it=V(o);a=D(it,"TR",{});var pe=V(a);c=D(pe,"TD",{"data-svelte-h":!0}),Gt(c)!=="svelte-1x3ujqo"&&(c.textContent=l),u=G(pe),h=D(pe,"TD",{});var br=V(h);f=X(br,d),br.forEach(E),y=G(pe),P=D(pe,"TD",{});var kr=V(P);g=X(kr,n[9]),kr.forEach(E),pe.forEach(E),b=G(it),A=D(it,"TR",{});var me=V(A);v=D(me,"TD",{"data-svelte-h":!0}),Gt(v)!=="svelte-1u1iu5y"&&(v.textContent=L),nt=G(me),Q=D(me,"TD",{});var Dr=V(Q);at=X(Dr,C),Dr.forEach(E),ct=G(me),_t=D(me,"TD",{});var Nr=V(_t);Ms=X(Nr,w),Nr.forEach(E),me.forEach(E),Eo=G(it),ce=D(it,"TR",{});var ge=V(ce);En=D(ge,"TD",{"data-svelte-h":!0}),Gt(En)!=="svelte-1p9aljd"&&(En.textContent=Jc),vo=G(ge),lr=D(ge,"TD",{});var Or=V(lr);xs=X(Or,ur),Or.forEach(E),To=G(ge),hr=D(ge,"TD",{});var Vr=V(hr);Fs=X(Vr,dr),Vr.forEach(E),ge.forEach(E),Io=G(it),le=D(it,"TR",{});var _e=V(le);vn=D(_e,"TD",{"data-svelte-h":!0}),Gt(vn)!=="svelte-1f95xjb"&&(vn.textContent=Xc),wo=G(_e),fr=D(_e,"TD",{});var Lr=V(fr);Us=X(Lr,pr),Lr.forEach(E),Ao=G(_e),mr=D(_e,"TD",{});var Mr=V(mr);Bs=X(Mr,gr),Mr.forEach(E),_e.forEach(E),Ro=G(it),ue=D(it,"TR",{});var Pn=V(ue);Tn=D(Pn,"TD",{"data-svelte-h":!0}),Gt(Tn)!=="svelte-2ua869"&&(Tn.textContent=Zc),So=G(Pn),_r=D(Pn,"TD",{});var pl=V(_r);$s=X(pl,yr),pl.forEach(E),Po=G(Pn),Er=D(Pn,"TD",{});var ml=V(Er);js=X(ml,n[5]),ml.forEach(E),Pn.forEach(E),Co=G(it),he=D(it,"TR",{});var Cn=V(he);In=D(Cn,"TD",{"data-svelte-h":!0}),Gt(In)!=="svelte-6o32y9"&&(In.textContent=tl),bo=G(Cn),wn=D(Cn,"TD",{});var gl=V(wn);Ct&&Ct.l(gl),gl.forEach(E),ko=G(Cn),vr=D(Cn,"TD",{});var _l=V(vr);be=D(_l,"UL",{class:!0});var zs=V(be);Ze=D(zs,"LI",{});var Hs=V(Ze);qs=X(Hs,Tr),Do=X(Hs,", "),Gs=X(Hs,Ir),Hs.forEach(E),No=G(zs),wr=D(zs,"LI",{});var yl=V(wr);Ks=X(yl,Ar),yl.forEach(E),zs.forEach(E),_l.forEach(E),Cn.forEach(E),Oo=G(it),de=D(it,"TR",{});var bn=V(de);An=D(bn,"TD",{"data-svelte-h":!0}),Gt(An)!=="svelte-r4w2ci"&&(An.textContent=el),Vo=G(bn),Rr=D(bn,"TD",{});var El=V(Rr);Mt(ke.$$.fragment,El),El.forEach(E),Lo=G(bn),Sr=D(bn,"TD",{});var vl=V(Sr);Mt(De.$$.fragment,vl),vl.forEach(E),bn.forEach(E),Mo=G(it),fe=D(it,"TR",{});var kn=V(fe);Rn=D(kn,"TD",{"data-svelte-h":!0}),Gt(Rn)!=="svelte-uy1aw3"&&(Rn.textContent=nl),xo=G(kn),Pr=D(kn,"TD",{});var Tl=V(Pr);Mt(Ne.$$.fragment,Tl),Tl.forEach(E),Fo=G(kn),Cr=D(kn,"TD",{});var Il=V(Cr);Mt(Oe.$$.fragment,Il),Il.forEach(E),kn.forEach(E),it.forEach(E),Qt.forEach(E),rt.forEach(E),this.h()},h(){N(be,"class","flex flex-col gap-2"),N(e,"class","table-stripped"),N(t,"class","mt-4 relative overflow-x-auto shadow-md rounded-lg border-2 border-secondary")},m($,rt){W($,t,rt),_(t,e),_(e,r),_(e,i),_(e,o),_(o,a),_(a,c),_(a,u),_(a,h),_(h,f),_(a,y),_(a,P),_(P,g),_(o,b),_(o,A),_(A,v),_(A,nt),_(A,Q),_(Q,at),_(A,ct),_(A,_t),_(_t,Ms),_(o,Eo),_(o,ce),_(ce,En),_(ce,vo),_(ce,lr),_(lr,xs),_(ce,To),_(ce,hr),_(hr,Fs),_(o,Io),_(o,le),_(le,vn),_(le,wo),_(le,fr),_(fr,Us),_(le,Ao),_(le,mr),_(mr,Bs),_(o,Ro),_(o,ue),_(ue,Tn),_(ue,So),_(ue,_r),_(_r,$s),_(ue,Po),_(ue,Er),_(Er,js),_(o,Co),_(o,he),_(he,In),_(he,bo),_(he,wn),Ct&&Ct.m(wn,null),_(he,ko),_(he,vr),_(vr,be),_(be,Ze),_(Ze,qs),_(Ze,Do),_(Ze,Gs),_(be,No),_(be,wr),_(wr,Ks),_(o,Oo),_(o,de),_(de,An),_(de,Vo),_(de,Rr),xt(ke,Rr,null),_(de,Lo),_(de,Sr),xt(De,Sr,null),_(o,Mo),_(o,fe),_(fe,Rn),_(fe,xo),_(fe,Pr),xt(Ne,Pr,null),_(fe,Fo),_(fe,Cr),xt(Oe,Cr,null),Tt=!0},p($,rt){var kr,me,Dr,Nr,ge,Or,Vr,_e,Lr,Mr;(!Tt||rt&2)&&d!==(d=((kr=$[1])==null?void 0:kr[R.STORAGE_KEY.AUDIO])+"")&&pt(f,d),(!Tt||rt&512)&&pt(g,$[9]),(!Tt||rt&2)&&C!==(C=((me=$[1])==null?void 0:me[R.STORAGE_KEY.AUTO_NEXT])+"")&&pt(at,C),(!Tt||rt&256)&&w!==(w=($[8]?1:0)+"")&&pt(Ms,w),(!Tt||rt&2)&&ur!==(ur=((Dr=$[1])==null?void 0:Dr[R.STORAGE_KEY.TAFSIR])+"")&&pt(xs,ur),(!Tt||rt&128)&&dr!==(dr=($[7]?1:0)+"")&&pt(Fs,dr),(!Tt||rt&2)&&pr!==(pr=((Nr=$[1])==null?void 0:Nr[R.STORAGE_KEY.TRANSLATION])+"")&&pt(Us,pr),(!Tt||rt&64)&&gr!==(gr=($[6]?1:0)+"")&&pt(Bs,gr),(!Tt||rt&2)&&yr!==(yr=((ge=$[1])==null?void 0:ge[R.STORAGE_KEY.THEME])+"")&&pt($s,yr),(!Tt||rt&32)&&pt(js,$[5]),Sn===(Sn=rl($))&&Ct?Ct.p($,rt):(Ct&&Ct.d(1),Ct=Sn&&Sn($),Ct&&(Ct.c(),Ct.m(wn,null))),(!Tt||rt&16)&&Tr!==(Tr=(((Or=$[4])==null?void 0:Or.lt)||"N/A")+"")&&pt(qs,Tr),(!Tt||rt&16)&&Ir!==(Ir=(((Vr=$[4])==null?void 0:Vr.lg)||"N/A")+"")&&pt(Gs,Ir),(!Tt||rt&16)&&Ar!==(Ar=(((_e=$[4])==null?void 0:_e.district)||"N/A")+"")&&pt(Ks,Ar);const Qt={};rt&2&&(Qt.jsonArrayObject=(Lr=$[1])==null?void 0:Lr[R.STORAGE_KEY.LAST_VERSES]),ke.$set(Qt);const it={};rt&8&&(it.jsonArrayObject=$[3]),De.$set(it);const pe={};rt&2&&(pe.jsonArrayObject=(Mr=$[1])==null?void 0:Mr[R.STORAGE_KEY.PINNED_SURAH]),Ne.$set(pe);const br={};rt&4&&(br.jsonArrayObject=$[2]),Oe.$set(br)},i($){Tt||(ht(ke.$$.fragment,$),ht(De.$$.fragment,$),ht(Ne.$$.fragment,$),ht(Oe.$$.fragment,$),Tt=!0)},o($){mt(ke.$$.fragment,$),mt(De.$$.fragment,$),mt(Ne.$$.fragment,$),mt(Oe.$$.fragment,$),Tt=!1},d($){$&&E(t),Ct&&Ct.d(),Ft(ke),Ft(De),Ft(Ne),Ft(Oe)}}}function $I(n){var d,f,y,P,g,b;let t,e,r=(((f=(d=n[1])==null?void 0:d[R.STORAGE_KEY.LOCATION])==null?void 0:f.lt)||"N/A")+"",s,i,o=(((P=(y=n[1])==null?void 0:y[R.STORAGE_KEY.LOCATION])==null?void 0:P.lg)||"N/A")+"",a,c,l,u=(((b=(g=n[1])==null?void 0:g[R.STORAGE_KEY.LOCATION])==null?void 0:b.district)||"N/A")+"",h;return{c(){t=k("ul"),e=k("li"),s=J(r),i=J(", "),a=J(o),c=q(),l=k("li"),h=J(u),this.h()},l(A){t=D(A,"UL",{class:!0});var v=V(t);e=D(v,"LI",{});var L=V(e);s=X(L,r),i=X(L,", "),a=X(L,o),L.forEach(E),c=G(v),l=D(v,"LI",{});var nt=V(l);h=X(nt,u),nt.forEach(E),v.forEach(E),this.h()},h(){N(t,"class","flex flex-col gap-2")},m(A,v){W(A,t,v),_(t,e),_(e,s),_(e,i),_(e,a),_(t,c),_(t,l),_(l,h)},p(A,v){var L,nt,Q,C,at,ct;v&2&&r!==(r=(((nt=(L=A[1])==null?void 0:L[R.STORAGE_KEY.LOCATION])==null?void 0:nt.lt)||"N/A")+"")&&pt(s,r),v&2&&o!==(o=(((C=(Q=A[1])==null?void 0:Q[R.STORAGE_KEY.LOCATION])==null?void 0:C.lg)||"N/A")+"")&&pt(a,o),v&2&&u!==(u=(((ct=(at=A[1])==null?void 0:at[R.STORAGE_KEY.LOCATION])==null?void 0:ct.district)||"N/A")+"")&&pt(h,u)},d(A){A&&E(t)}}}function jI(n){var s;let t,e=((s=n[1])==null?void 0:s[R.STORAGE_KEY.LOCATION])+"",r;return{c(){t=k("span"),r=J(e)},l(i){t=D(i,"SPAN",{});var o=V(t);r=X(o,e),o.forEach(E)},m(i,o){W(i,t,o),_(t,r)},p(i,o){var a;o&2&&e!==(e=((a=i[1])==null?void 0:a[R.STORAGE_KEY.LOCATION])+"")&&pt(r,e)},d(i){i&&E(t)}}}function qI(n){let t,e,r;return t=new AI({}),{c(){Lt(t.$$.fragment),e=J(`
				Sign Out`)},l(s){Mt(t.$$.fragment,s),e=X(s,`
				Sign Out`)},m(s,i){xt(t,s,i),W(s,e,i),r=!0},i(s){r||(ht(t.$$.fragment,s),r=!0)},o(s){mt(t.$$.fragment,s),r=!1},d(s){s&&E(e),Ft(t,s)}}}function GI(n){let t,e,r,s='<h1 class="text-3xl font-bold">🔄 Sync Data</h1>',i,o,a,c,l,u,h,d;t=new gp({props:{title:`Sync Data | ${Uo.TITLE_META}`,desc:`Sync Data ${Uo.TITLE_META}`,url:`${Uo.PATH}sync/`}}),a=new fp({props:{items:[{text:"🏠 Beranda",href:"/"}]}});const f=[MI,LI],y=[];function P(g,b){return g[0]?0:1}return u=P(n),h=y[u]=f[u](n),{c(){Lt(t.$$.fragment),e=q(),r=k("div"),r.innerHTML=s,i=q(),o=k("div"),Lt(a.$$.fragment),c=q(),l=k("div"),h.c(),this.h()},l(g){const b=dp("svelte-1n8wbxu",document.head);Mt(t.$$.fragment,b),b.forEach(E),e=G(g),r=D(g,"DIV",{class:!0,"data-svelte-h":!0}),Gt(r)!=="svelte-18n6kr7"&&(r.innerHTML=s),i=G(g),o=D(g,"DIV",{class:!0});var A=V(o);Mt(a.$$.fragment,A),A.forEach(E),c=G(g),l=D(g,"DIV",{class:!0});var v=V(l);h.l(v),v.forEach(E),this.h()},h(){N(r,"class","flex gap-2 px-4 mb-4"),N(o,"class","px-4 mb-4"),N(l,"class","px-4")},m(g,b){xt(t,document.head,null),W(g,e,b),W(g,r,b),W(g,i,b),W(g,o,b),xt(a,o,null),W(g,c,b),W(g,l,b),y[u].m(l,null),d=!0},p(g,[b]){let A=u;u=P(g),u===A?y[u].p(g,b):(ih(),mt(y[A],1,1,()=>{y[A]=null}),sh(),h=y[u],h?h.p(g,b):(h=y[u]=f[u](g),h.c()),ht(h,1),h.m(l,null))},i(g){d||(ht(t.$$.fragment,g),ht(a.$$.fragment,g),ht(h),d=!0)},o(g){mt(t.$$.fragment,g),mt(a.$$.fragment,g),mt(h),d=!1},d(g){g&&(E(e),E(r),E(i),E(o),E(c),E(l)),Ft(t),Ft(a),y[u].d()}}}function KI(n,t,e){let r,s,i,o,a,c,l,u;Ve(n,Dl,C=>e(2,r=C)),Ve(n,kl,C=>e(3,s=C)),Ve(n,bl,C=>e(4,i=C)),Ve(n,Cl,C=>e(5,o=C)),Ve(n,Rl,C=>e(6,a=C)),Ve(n,Al,C=>e(7,c=C)),Ve(n,Sl,C=>e(8,l=C)),Ve(n,Pl,C=>e(9,u=C));const d=mh({apiKey:_p,authDomain:yp,projectId:Ep,storageBucket:vp,messagingSenderId:Tp,appId:Ip,measurementId:wp}),f=YE(d);let y=null,P=null;const g=new ye;g.addScope("https://www.googleapis.com/auth/userinfo.profile"),g.addScope("https://www.googleapis.com/auth/userinfo.email"),g.setCustomParameters({login_hint:"user@example.com"});const b=yI();return iT(b,C=>{C?e(0,y=C):e(0,y=null)}),[y,P,r,s,i,o,a,c,l,u,()=>{PT(b,g).then(C=>{const at=C.user;Yt.show({message:`Berhasil login. Selamat datang ${at.displayName}!`,type:"success"})}).catch(C=>{Yt.show({message:`Gagal login: ${C.message}`,type:"error"})})},()=>{oT(b).then(()=>{Yt.show({message:"Berhasil logout!",type:"success"})}).catch(C=>{Yt.show({message:`Gagal logout: ${C.message}`,type:"error"})})},async()=>{const C=ni(f,"progress"),at=ra(C,sa("uid","==",y==null?void 0:y.uid)),ct=await ia(at);ct.size>0?ct.forEach(_t=>{e(1,P=_t.data())}):e(1,P={uid:y==null?void 0:y.uid,[R.STORAGE_KEY.AUDIO]:"N/A",[R.STORAGE_KEY.AUTO_NEXT]:"N/A",[R.STORAGE_KEY.TAFSIR]:"N/A",[R.STORAGE_KEY.TRANSLATION]:"N/A",[R.STORAGE_KEY.THEME]:"N/A",[R.STORAGE_KEY.LOCATION]:{lt:"N/A",lg:"N/A",district:"N/A"},[R.STORAGE_KEY.LAST_VERSES]:[],[R.STORAGE_KEY.PINNED_SURAH]:[]})},async()=>{const C={uid:y==null?void 0:y.uid,[R.STORAGE_KEY.AUDIO]:u,[R.STORAGE_KEY.AUTO_NEXT]:l?1:0,[R.STORAGE_KEY.TAFSIR]:c?1:0,[R.STORAGE_KEY.TRANSLATION]:a?1:0,[R.STORAGE_KEY.THEME]:o||"",[R.STORAGE_KEY.LOCATION]:i||null,[R.STORAGE_KEY.LAST_VERSES]:s||null,[R.STORAGE_KEY.PINNED_SURAH]:r||null},at=ni(f,"progress"),ct=ra(at,sa("uid","==",y==null?void 0:y.uid)),_t=await ia(ct);if(_t.size>0)try{_t.forEach(async w=>{await pv(w.ref,C)}),Yt.show({message:"Berhasil memperbarui data remote dengan data lokal",type:"success"})}catch(w){console.error("Error updating document: ",C,w),Yt.show({message:"Gagal memperbarui data lokal ke remote",type:"error"})}else try{await mv(ni(f,"progress"),C),Yt.show({message:"Berhasil mengunggah data lokal ke remote",type:"success"})}catch(w){console.error("Error adding new document: ",C,w),Yt.show({message:"Gagal mengunggah data lokal ke remote",type:"error"})}},async()=>{const C=ni(f,"progress"),at=ra(C,sa("uid","==",y==null?void 0:y.uid)),ct=await ia(at);ct.size>0?(ct.forEach(_t=>{const w=_t.data();w&&(Al.set((w==null?void 0:w[R.STORAGE_KEY.TAFSIR])===1),localStorage.setItem(R.STORAGE_KEY.TAFSIR,(w==null?void 0:w[R.STORAGE_KEY.TAFSIR])===1?"y":"n"),Rl.set((w==null?void 0:w[R.STORAGE_KEY.TRANSLATION])===1),localStorage.setItem(R.STORAGE_KEY.TRANSLATION,(w==null?void 0:w[R.STORAGE_KEY.TRANSLATION])===1?"y":"n"),Sl.set((w==null?void 0:w[R.STORAGE_KEY.AUTO_NEXT])===1),localStorage.setItem(R.STORAGE_KEY.AUTO_NEXT,(w==null?void 0:w[R.STORAGE_KEY.AUTO_NEXT])===1?"y":"n"),Pl.set(w==null?void 0:w[R.STORAGE_KEY.AUDIO]),localStorage.setItem(R.STORAGE_KEY.AUDIO,(w==null?void 0:w[R.STORAGE_KEY.AUDIO])||"1"),w!=null&&w[R.STORAGE_KEY.THEME]&&(Cl.set(w==null?void 0:w[R.STORAGE_KEY.THEME]),localStorage.setItem(R.STORAGE_KEY.THEME,(w==null?void 0:w[R.STORAGE_KEY.THEME])||"light")),w!=null&&w[R.STORAGE_KEY.LOCATION]&&(bl.set(w==null?void 0:w[R.STORAGE_KEY.LOCATION]),localStorage.setItem(R.STORAGE_KEY.LOCATION,JSON.stringify((w==null?void 0:w[R.STORAGE_KEY.LOCATION])||{}))),w!=null&&w[R.STORAGE_KEY.LAST_VERSES]&&(kl.set(w==null?void 0:w[R.STORAGE_KEY.LAST_VERSES]),localStorage.setItem(R.STORAGE_KEY.LAST_VERSES,JSON.stringify((w==null?void 0:w[R.STORAGE_KEY.LAST_VERSES])||[]))),w!=null&&w[R.STORAGE_KEY.PINNED_SURAH]&&(Dl.set(w==null?void 0:w[R.STORAGE_KEY.PINNED_SURAH]),localStorage.setItem(R.STORAGE_KEY.PINNED_SURAH,JSON.stringify((w==null?void 0:w[R.STORAGE_KEY.PINNED_SURAH])||[]))),e(1,P=_t.data()))}),Yt.show({message:"Data di lokal berhasil diperbarui!",type:"success"})):Yt.show({message:"Kamu belum memiliki data apapun di remote. Data di lokal tidak akan diperbarui!",type:"error"})}]}class sw extends Zn{constructor(t){super(),tr(this,t,KI,GI,Xn,{})}}export{sw as component};
