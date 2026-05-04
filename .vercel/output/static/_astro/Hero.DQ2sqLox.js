import{j as V}from"./jsx-runtime.D_zvdyIk.js";import{r as nt}from"./index.DtoOFyvK.js";import{A as Bo}from"./index.qu8G_yDq.js";import{m as _e}from"./proxy.QRn0W1ao.js";const Bl=()=>V.jsx("svg",{className:"w-3 h-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:V.jsx("path",{stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),$l=()=>{};var Ui={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},ql=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],c=n[e++],u=n[e++],d=((i&7)<<18|(o&63)<<12|(c&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],c=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|c&63)}}return t.join("")},qo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],c=i+1<n.length,u=c?n[i+1]:0,d=i+2<n.length,m=d?n[i+2]:0,I=o>>2,A=(o&3)<<4|u>>4;let R=(u&15)<<2|m>>6,x=m&63;d||(x=64,c||(R=64)),r.push(e[I],e[A],e[R],e[x])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray($o(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ql(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],u=i<n.length?e[n.charAt(i)]:0;++i;const m=i<n.length?e[n.charAt(i)]:64;++i;const A=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||u==null||m==null||A==null)throw new zl;const R=o<<2|u>>4;if(r.push(R),m!==64){const x=u<<4&240|m>>2;if(r.push(x),A!==64){const P=m<<6&192|A;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class zl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hl=function(n){const t=$o(n);return qo.encodeByteArray(t,!0)},zn=function(n){return Hl(n).replace(/\./g,"")},Gl=function(n){try{return qo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Kl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Wl=()=>Kl().__FIREBASE_DEFAULTS__,Ql=()=>{if(typeof process>"u"||typeof Ui>"u")return;const n=Ui.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Xl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Gl(n[1]);return t&&JSON.parse(t)},ds=()=>{try{return $l()||Wl()||Ql()||Xl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jl=n=>ds()?.emulatorHosts?.[n],Yl=n=>{const t=Jl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},zo=()=>ds()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function tc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function ec(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[zn(JSON.stringify(e)),zn(JSON.stringify(c)),""].join(".")}const We={};function nc(){const n={prod:[],emulator:[]};for(const t of Object.keys(We))We[t]?n.emulator.push(t):n.prod.push(t);return n}function rc(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let ji=!1;function sc(n,t){if(typeof window>"u"||typeof document>"u"||!fs(window.location.host)||We[n]===t||We[n]||ji)return;We[n]=t;function e(R){return`__firebase__banner__${R}`}const r="__firebase__banner",o=nc().prod.length>0;function c(){const R=document.getElementById(r);R&&R.remove()}function u(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function d(R,x){R.setAttribute("width","24"),R.setAttribute("id",x),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function m(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{ji=!0,c()},R}function I(R,x){R.setAttribute("id",x),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function A(){const R=rc(r),x=e("text"),P=document.getElementById(x)||document.createElement("span"),O=e("learnmore"),N=document.getElementById(O)||document.createElement("a"),z=e("preprendIcon"),j=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const $=R.element;u($),I(N,O);const et=m();d(j,z),$.append(j,P,N,et),document.body.appendChild($)}o?(P.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oc(){const n=ds()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ac(){return!oc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lc(){try{return typeof indexedDB=="object"}catch{return!1}}function cc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="FirebaseError";class be extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=uc,Object.setPrototypeOf(this,be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ho.prototype.create)}}class Ho{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],c=o?hc(o,r):"Error",u=`${this.serviceName}: ${c} (${i}).`;return new be(i,u,r)}}function hc(n,t){return n.replace(dc,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const dc=/\{\$([^}]+)}/g;function Hn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],c=t[i];if(Bi(o)&&Bi(c)){if(!Hn(o,c))return!1}else if(o!==c)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Bi(n){return n!==null&&typeof n=="object"}/**
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
 */function Gn(n){return n&&n._delegate?n._delegate:n}class tn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ee="[DEFAULT]";/**
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
 */class fc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Zl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(pc(t))try{this.getOrInitializeService({instanceIdentifier:ee})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ee){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ee){return this.instances.has(t)}getOptions(t=ee){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,c]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&c.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ee){return this.component?this.component.multipleInstances?t:ee:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mc(n){return n===ee?void 0:n}function pc(n){return n.instantiationMode==="EAGER"}/**
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
 */class gc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new fc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const _c={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},yc=U.INFO,Ec={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},vc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Ec[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Go{constructor(t){this.name=t,this._logLevel=yc,this._logHandler=vc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?_c[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const Tc=(n,t)=>t.some(e=>n instanceof e);let $i,qi;function Ic(){return $i||($i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wc(){return qi||(qi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ko=new WeakMap,Wr=new WeakMap,Wo=new WeakMap,Ur=new WeakMap,ms=new WeakMap;function Ac(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",c)},o=()=>{e(Ht(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",c)});return t.then(e=>{e instanceof IDBCursor&&Ko.set(e,n)}).catch(()=>{}),ms.set(t,n),t}function Rc(n){if(Wr.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",c),n.removeEventListener("abort",c)},o=()=>{e(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",c),n.addEventListener("abort",c)});Wr.set(n,t)}let Qr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Wr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Wo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ht(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function bc(n){Qr=n(Qr)}function Sc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(jr(this),t,...e);return Wo.set(r,t.sort?t.sort():[t]),Ht(r)}:wc().includes(n)?function(...t){return n.apply(jr(this),t),Ht(Ko.get(this))}:function(...t){return Ht(n.apply(jr(this),t))}}function Cc(n){return typeof n=="function"?Sc(n):(n instanceof IDBTransaction&&Rc(n),Tc(n,Ic())?new Proxy(n,Qr):n)}function Ht(n){if(n instanceof IDBRequest)return Ac(n);if(Ur.has(n))return Ur.get(n);const t=Cc(n);return t!==n&&(Ur.set(n,t),ms.set(t,n)),t}const jr=n=>ms.get(n);function Pc(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const c=indexedDB.open(n,t),u=Ht(c);return r&&c.addEventListener("upgradeneeded",d=>{r(Ht(c.result),d.oldVersion,d.newVersion,Ht(c.transaction),d)}),e&&c.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),u.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",m=>i(m.oldVersion,m.newVersion,m))}).catch(()=>{}),u}const Vc=["get","getKey","getAll","getAllKeys","count"],xc=["put","add","delete","clear"],Br=new Map;function zi(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Br.get(t))return Br.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=xc.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Vc.includes(e)))return;const o=async function(c,...u){const d=this.transaction(c,i?"readwrite":"readonly");let m=d.store;return r&&(m=m.index(u.shift())),(await Promise.all([m[e](...u),i&&d.done]))[0]};return Br.set(t,o),o}bc(n=>({...n,get:(t,e,r)=>zi(t,e)||n.get(t,e,r),has:(t,e)=>!!zi(t,e)||n.has(t,e)}));/**
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
 */class Dc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Nc(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Nc(n){return n.getComponent()?.type==="VERSION"}const Xr="@firebase/app",Hi="0.14.2";/**
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
 */const jt=new Go("@firebase/app"),kc="@firebase/app-compat",Oc="@firebase/analytics-compat",Mc="@firebase/analytics",Lc="@firebase/app-check-compat",Fc="@firebase/app-check",Uc="@firebase/auth",jc="@firebase/auth-compat",Bc="@firebase/database",$c="@firebase/data-connect",qc="@firebase/database-compat",zc="@firebase/functions",Hc="@firebase/functions-compat",Gc="@firebase/installations",Kc="@firebase/installations-compat",Wc="@firebase/messaging",Qc="@firebase/messaging-compat",Xc="@firebase/performance",Jc="@firebase/performance-compat",Yc="@firebase/remote-config",Zc="@firebase/remote-config-compat",tu="@firebase/storage",eu="@firebase/storage-compat",nu="@firebase/firestore",ru="@firebase/ai",su="@firebase/firestore-compat",iu="firebase",ou="12.2.0";/**
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
 */const Jr="[DEFAULT]",au={[Xr]:"fire-core",[kc]:"fire-core-compat",[Mc]:"fire-analytics",[Oc]:"fire-analytics-compat",[Fc]:"fire-app-check",[Lc]:"fire-app-check-compat",[Uc]:"fire-auth",[jc]:"fire-auth-compat",[Bc]:"fire-rtdb",[$c]:"fire-data-connect",[qc]:"fire-rtdb-compat",[zc]:"fire-fn",[Hc]:"fire-fn-compat",[Gc]:"fire-iid",[Kc]:"fire-iid-compat",[Wc]:"fire-fcm",[Qc]:"fire-fcm-compat",[Xc]:"fire-perf",[Jc]:"fire-perf-compat",[Yc]:"fire-rc",[Zc]:"fire-rc-compat",[tu]:"fire-gcs",[eu]:"fire-gcs-compat",[nu]:"fire-fst",[su]:"fire-fst-compat",[ru]:"fire-vertex","fire-js":"fire-js",[iu]:"fire-js-all"};/**
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
 */const Kn=new Map,lu=new Map,Yr=new Map;function Gi(n,t){try{n.container.addComponent(t)}catch(e){jt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Wn(n){const t=n.name;if(Yr.has(t))return jt.debug(`There were multiple attempts to register component ${t}.`),!1;Yr.set(t,n);for(const e of Kn.values())Gi(e,n);for(const e of lu.values())Gi(e,n);return!0}function cu(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function uu(n){return n==null?!1:n.settings!==void 0}/**
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
 */const hu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gt=new Ho("app","Firebase",hu);/**
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
 */class du{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
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
 */const fu=ou;function Qo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:Jr,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw Gt.create("bad-app-name",{appName:String(i)});if(e||(e=zo()),!e)throw Gt.create("no-options");const o=Kn.get(i);if(o){if(Hn(e,o.options)&&Hn(r,o.config))return o;throw Gt.create("duplicate-app",{appName:i})}const c=new gc(i);for(const d of Yr.values())c.addComponent(d);const u=new du(e,r,c);return Kn.set(i,u),u}function mu(n=Jr){const t=Kn.get(n);if(!t&&n===Jr&&zo())return Qo();if(!t)throw Gt.create("no-app",{appName:n});return t}function ye(n,t,e){let r=au[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const c=[`Unable to register library "${r}" with version "${t}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),jt.warn(c.join(" "));return}Wn(new tn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const pu="firebase-heartbeat-database",gu=1,en="firebase-heartbeat-store";let $r=null;function Xo(){return $r||($r=Pc(pu,gu,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(en)}catch(e){console.warn(e)}}}}).catch(n=>{throw Gt.create("idb-open",{originalErrorMessage:n.message})})),$r}async function _u(n){try{const e=(await Xo()).transaction(en),r=await e.objectStore(en).get(Jo(n));return await e.done,r}catch(t){if(t instanceof be)jt.warn(t.message);else{const e=Gt.create("idb-get",{originalErrorMessage:t?.message});jt.warn(e.message)}}}async function Ki(n,t){try{const r=(await Xo()).transaction(en,"readwrite");await r.objectStore(en).put(t,Jo(n)),await r.done}catch(e){if(e instanceof be)jt.warn(e.message);else{const r=Gt.create("idb-set",{originalErrorMessage:e?.message});jt.warn(r.message)}}}function Jo(n){return`${n.name}!${n.options.appId}`}/**
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
 */const yu=1024,Eu=30;class vu{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Iu(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wi();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>Eu){const i=wu(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){jt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wi(),{heartbeatsToSend:e,unsentEntries:r}=Tu(this._heartbeatsCache.heartbeats),i=zn(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return jt.warn(t),""}}}function Wi(){return new Date().toISOString().substring(0,10)}function Tu(n,t=yu){const e=[];let r=n.slice();for(const i of n){const o=e.find(c=>c.agent===i.agent);if(o){if(o.dates.push(i.date),Qi(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Qi(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Iu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lc()?cc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await _u(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ki(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ki(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Qi(n){return zn(JSON.stringify({version:2,heartbeats:n})).length}function wu(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Au(n){Wn(new tn("platform-logger",t=>new Dc(t),"PRIVATE")),Wn(new tn("heartbeat",t=>new vu(t),"PRIVATE")),ye(Xr,Hi,n),ye(Xr,Hi,"esm2020"),ye("fire-js","")}Au("");var Ru="firebase",bu="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ye(Ru,bu,"app");var Xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ps;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,f){function p(){}p.prototype=f.prototype,E.D=f.prototype,E.prototype=new p,E.prototype.constructor=E,E.C=function(_,y,T){for(var g=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)g[kt-2]=arguments[kt];return f.prototype[y].apply(_,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,f,p){p||(p=0);var _=Array(16);if(typeof f=="string")for(var y=0;16>y;++y)_[y]=f.charCodeAt(p++)|f.charCodeAt(p++)<<8|f.charCodeAt(p++)<<16|f.charCodeAt(p++)<<24;else for(y=0;16>y;++y)_[y]=f[p++]|f[p++]<<8|f[p++]<<16|f[p++]<<24;f=E.g[0],p=E.g[1],y=E.g[2];var T=E.g[3],g=f+(T^p&(y^T))+_[0]+3614090360&4294967295;f=p+(g<<7&4294967295|g>>>25),g=T+(y^f&(p^y))+_[1]+3905402710&4294967295,T=f+(g<<12&4294967295|g>>>20),g=y+(p^T&(f^p))+_[2]+606105819&4294967295,y=T+(g<<17&4294967295|g>>>15),g=p+(f^y&(T^f))+_[3]+3250441966&4294967295,p=y+(g<<22&4294967295|g>>>10),g=f+(T^p&(y^T))+_[4]+4118548399&4294967295,f=p+(g<<7&4294967295|g>>>25),g=T+(y^f&(p^y))+_[5]+1200080426&4294967295,T=f+(g<<12&4294967295|g>>>20),g=y+(p^T&(f^p))+_[6]+2821735955&4294967295,y=T+(g<<17&4294967295|g>>>15),g=p+(f^y&(T^f))+_[7]+4249261313&4294967295,p=y+(g<<22&4294967295|g>>>10),g=f+(T^p&(y^T))+_[8]+1770035416&4294967295,f=p+(g<<7&4294967295|g>>>25),g=T+(y^f&(p^y))+_[9]+2336552879&4294967295,T=f+(g<<12&4294967295|g>>>20),g=y+(p^T&(f^p))+_[10]+4294925233&4294967295,y=T+(g<<17&4294967295|g>>>15),g=p+(f^y&(T^f))+_[11]+2304563134&4294967295,p=y+(g<<22&4294967295|g>>>10),g=f+(T^p&(y^T))+_[12]+1804603682&4294967295,f=p+(g<<7&4294967295|g>>>25),g=T+(y^f&(p^y))+_[13]+4254626195&4294967295,T=f+(g<<12&4294967295|g>>>20),g=y+(p^T&(f^p))+_[14]+2792965006&4294967295,y=T+(g<<17&4294967295|g>>>15),g=p+(f^y&(T^f))+_[15]+1236535329&4294967295,p=y+(g<<22&4294967295|g>>>10),g=f+(y^T&(p^y))+_[1]+4129170786&4294967295,f=p+(g<<5&4294967295|g>>>27),g=T+(p^y&(f^p))+_[6]+3225465664&4294967295,T=f+(g<<9&4294967295|g>>>23),g=y+(f^p&(T^f))+_[11]+643717713&4294967295,y=T+(g<<14&4294967295|g>>>18),g=p+(T^f&(y^T))+_[0]+3921069994&4294967295,p=y+(g<<20&4294967295|g>>>12),g=f+(y^T&(p^y))+_[5]+3593408605&4294967295,f=p+(g<<5&4294967295|g>>>27),g=T+(p^y&(f^p))+_[10]+38016083&4294967295,T=f+(g<<9&4294967295|g>>>23),g=y+(f^p&(T^f))+_[15]+3634488961&4294967295,y=T+(g<<14&4294967295|g>>>18),g=p+(T^f&(y^T))+_[4]+3889429448&4294967295,p=y+(g<<20&4294967295|g>>>12),g=f+(y^T&(p^y))+_[9]+568446438&4294967295,f=p+(g<<5&4294967295|g>>>27),g=T+(p^y&(f^p))+_[14]+3275163606&4294967295,T=f+(g<<9&4294967295|g>>>23),g=y+(f^p&(T^f))+_[3]+4107603335&4294967295,y=T+(g<<14&4294967295|g>>>18),g=p+(T^f&(y^T))+_[8]+1163531501&4294967295,p=y+(g<<20&4294967295|g>>>12),g=f+(y^T&(p^y))+_[13]+2850285829&4294967295,f=p+(g<<5&4294967295|g>>>27),g=T+(p^y&(f^p))+_[2]+4243563512&4294967295,T=f+(g<<9&4294967295|g>>>23),g=y+(f^p&(T^f))+_[7]+1735328473&4294967295,y=T+(g<<14&4294967295|g>>>18),g=p+(T^f&(y^T))+_[12]+2368359562&4294967295,p=y+(g<<20&4294967295|g>>>12),g=f+(p^y^T)+_[5]+4294588738&4294967295,f=p+(g<<4&4294967295|g>>>28),g=T+(f^p^y)+_[8]+2272392833&4294967295,T=f+(g<<11&4294967295|g>>>21),g=y+(T^f^p)+_[11]+1839030562&4294967295,y=T+(g<<16&4294967295|g>>>16),g=p+(y^T^f)+_[14]+4259657740&4294967295,p=y+(g<<23&4294967295|g>>>9),g=f+(p^y^T)+_[1]+2763975236&4294967295,f=p+(g<<4&4294967295|g>>>28),g=T+(f^p^y)+_[4]+1272893353&4294967295,T=f+(g<<11&4294967295|g>>>21),g=y+(T^f^p)+_[7]+4139469664&4294967295,y=T+(g<<16&4294967295|g>>>16),g=p+(y^T^f)+_[10]+3200236656&4294967295,p=y+(g<<23&4294967295|g>>>9),g=f+(p^y^T)+_[13]+681279174&4294967295,f=p+(g<<4&4294967295|g>>>28),g=T+(f^p^y)+_[0]+3936430074&4294967295,T=f+(g<<11&4294967295|g>>>21),g=y+(T^f^p)+_[3]+3572445317&4294967295,y=T+(g<<16&4294967295|g>>>16),g=p+(y^T^f)+_[6]+76029189&4294967295,p=y+(g<<23&4294967295|g>>>9),g=f+(p^y^T)+_[9]+3654602809&4294967295,f=p+(g<<4&4294967295|g>>>28),g=T+(f^p^y)+_[12]+3873151461&4294967295,T=f+(g<<11&4294967295|g>>>21),g=y+(T^f^p)+_[15]+530742520&4294967295,y=T+(g<<16&4294967295|g>>>16),g=p+(y^T^f)+_[2]+3299628645&4294967295,p=y+(g<<23&4294967295|g>>>9),g=f+(y^(p|~T))+_[0]+4096336452&4294967295,f=p+(g<<6&4294967295|g>>>26),g=T+(p^(f|~y))+_[7]+1126891415&4294967295,T=f+(g<<10&4294967295|g>>>22),g=y+(f^(T|~p))+_[14]+2878612391&4294967295,y=T+(g<<15&4294967295|g>>>17),g=p+(T^(y|~f))+_[5]+4237533241&4294967295,p=y+(g<<21&4294967295|g>>>11),g=f+(y^(p|~T))+_[12]+1700485571&4294967295,f=p+(g<<6&4294967295|g>>>26),g=T+(p^(f|~y))+_[3]+2399980690&4294967295,T=f+(g<<10&4294967295|g>>>22),g=y+(f^(T|~p))+_[10]+4293915773&4294967295,y=T+(g<<15&4294967295|g>>>17),g=p+(T^(y|~f))+_[1]+2240044497&4294967295,p=y+(g<<21&4294967295|g>>>11),g=f+(y^(p|~T))+_[8]+1873313359&4294967295,f=p+(g<<6&4294967295|g>>>26),g=T+(p^(f|~y))+_[15]+4264355552&4294967295,T=f+(g<<10&4294967295|g>>>22),g=y+(f^(T|~p))+_[6]+2734768916&4294967295,y=T+(g<<15&4294967295|g>>>17),g=p+(T^(y|~f))+_[13]+1309151649&4294967295,p=y+(g<<21&4294967295|g>>>11),g=f+(y^(p|~T))+_[4]+4149444226&4294967295,f=p+(g<<6&4294967295|g>>>26),g=T+(p^(f|~y))+_[11]+3174756917&4294967295,T=f+(g<<10&4294967295|g>>>22),g=y+(f^(T|~p))+_[2]+718787259&4294967295,y=T+(g<<15&4294967295|g>>>17),g=p+(T^(y|~f))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+f&4294967295,E.g[1]=E.g[1]+(y+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+T&4294967295}r.prototype.u=function(E,f){f===void 0&&(f=E.length);for(var p=f-this.blockSize,_=this.B,y=this.h,T=0;T<f;){if(y==0)for(;T<=p;)i(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<f;)if(_[y++]=E.charCodeAt(T++),y==this.blockSize){i(this,_),y=0;break}}else for(;T<f;)if(_[y++]=E[T++],y==this.blockSize){i(this,_),y=0;break}}this.h=y,this.o+=f},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var f=1;f<E.length-8;++f)E[f]=0;var p=8*this.o;for(f=E.length-8;f<E.length;++f)E[f]=p&255,p/=256;for(this.u(E),E=Array(16),f=p=0;4>f;++f)for(var _=0;32>_;_+=8)E[p++]=this.g[f]>>>_&255;return E};function o(E,f){var p=u;return Object.prototype.hasOwnProperty.call(p,E)?p[E]:p[E]=f(E)}function c(E,f){this.h=f;for(var p=[],_=!0,y=E.length-1;0<=y;y--){var T=E[y]|0;_&&T==f||(p[y]=T,_=!1)}this.g=p}var u={};function d(E){return-128<=E&&128>E?o(E,function(f){return new c([f|0],0>f?-1:0)}):new c([E|0],0>E?-1:0)}function m(E){if(isNaN(E)||!isFinite(E))return A;if(0>E)return N(m(-E));for(var f=[],p=1,_=0;E>=p;_++)f[_]=E/p|0,p*=4294967296;return new c(f,0)}function I(E,f){if(E.length==0)throw Error("number format error: empty string");if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(E.charAt(0)=="-")return N(I(E.substring(1),f));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=m(Math.pow(f,8)),_=A,y=0;y<E.length;y+=8){var T=Math.min(8,E.length-y),g=parseInt(E.substring(y,y+T),f);8>T?(T=m(Math.pow(f,T)),_=_.j(T).add(m(g))):(_=_.j(p),_=_.add(m(g)))}return _}var A=d(0),R=d(1),x=d(16777216);n=c.prototype,n.m=function(){if(O(this))return-N(this).m();for(var E=0,f=1,p=0;p<this.g.length;p++){var _=this.i(p);E+=(0<=_?_:4294967296+_)*f,f*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(O(this))return"-"+N(this).toString(E);for(var f=m(Math.pow(E,6)),p=this,_="";;){var y=et(p,f).g;p=z(p,y.j(f));var T=((0<p.g.length?p.g[0]:p.h)>>>0).toString(E);if(p=y,P(p))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var f=0;f<E.g.length;f++)if(E.g[f]!=0)return!1;return!0}function O(E){return E.h==-1}n.l=function(E){return E=z(this,E),O(E)?-1:P(E)?0:1};function N(E){for(var f=E.g.length,p=[],_=0;_<f;_++)p[_]=~E.g[_];return new c(p,~E.h).add(R)}n.abs=function(){return O(this)?N(this):this},n.add=function(E){for(var f=Math.max(this.g.length,E.g.length),p=[],_=0,y=0;y<=f;y++){var T=_+(this.i(y)&65535)+(E.i(y)&65535),g=(T>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);_=g>>>16,T&=65535,g&=65535,p[y]=g<<16|T}return new c(p,p[p.length-1]&-2147483648?-1:0)};function z(E,f){return E.add(N(f))}n.j=function(E){if(P(this)||P(E))return A;if(O(this))return O(E)?N(this).j(N(E)):N(N(this).j(E));if(O(E))return N(this.j(N(E)));if(0>this.l(x)&&0>E.l(x))return m(this.m()*E.m());for(var f=this.g.length+E.g.length,p=[],_=0;_<2*f;_++)p[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<E.g.length;y++){var T=this.i(_)>>>16,g=this.i(_)&65535,kt=E.i(y)>>>16,Pe=E.i(y)&65535;p[2*_+2*y]+=g*Pe,j(p,2*_+2*y),p[2*_+2*y+1]+=T*Pe,j(p,2*_+2*y+1),p[2*_+2*y+1]+=g*kt,j(p,2*_+2*y+1),p[2*_+2*y+2]+=T*kt,j(p,2*_+2*y+2)}for(_=0;_<f;_++)p[_]=p[2*_+1]<<16|p[2*_];for(_=f;_<2*f;_++)p[_]=0;return new c(p,0)};function j(E,f){for(;(E[f]&65535)!=E[f];)E[f+1]+=E[f]>>>16,E[f]&=65535,f++}function $(E,f){this.g=E,this.h=f}function et(E,f){if(P(f))throw Error("division by zero");if(P(E))return new $(A,A);if(O(E))return f=et(N(E),f),new $(N(f.g),N(f.h));if(O(f))return f=et(E,N(f)),new $(N(f.g),f.h);if(30<E.g.length){if(O(E)||O(f))throw Error("slowDivide_ only works with positive integers.");for(var p=R,_=f;0>=_.l(E);)p=Rt(p),_=Rt(_);var y=Et(p,1),T=Et(_,1);for(_=Et(_,2),p=Et(p,2);!P(_);){var g=T.add(_);0>=g.l(E)&&(y=y.add(p),T=g),_=Et(_,1),p=Et(p,1)}return f=z(E,y.j(f)),new $(y,f)}for(y=A;0<=E.l(f);){for(p=Math.max(1,Math.floor(E.m()/f.m())),_=Math.ceil(Math.log(p)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=m(p),g=T.j(f);O(g)||0<g.l(E);)p-=_,T=m(p),g=T.j(f);P(T)&&(T=R),y=y.add(T),E=z(E,g)}return new $(y,E)}n.A=function(E){return et(this,E).h},n.and=function(E){for(var f=Math.max(this.g.length,E.g.length),p=[],_=0;_<f;_++)p[_]=this.i(_)&E.i(_);return new c(p,this.h&E.h)},n.or=function(E){for(var f=Math.max(this.g.length,E.g.length),p=[],_=0;_<f;_++)p[_]=this.i(_)|E.i(_);return new c(p,this.h|E.h)},n.xor=function(E){for(var f=Math.max(this.g.length,E.g.length),p=[],_=0;_<f;_++)p[_]=this.i(_)^E.i(_);return new c(p,this.h^E.h)};function Rt(E){for(var f=E.g.length+1,p=[],_=0;_<f;_++)p[_]=E.i(_)<<1|E.i(_-1)>>>31;return new c(p,E.h)}function Et(E,f){var p=f>>5;f%=32;for(var _=E.g.length-p,y=[],T=0;T<_;T++)y[T]=0<f?E.i(T+p)>>>f|E.i(T+p+1)<<32-f:E.i(T+p);return new c(y,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=m,c.fromString=I,ps=c}).apply(typeof Xi<"u"?Xi:typeof self<"u"?self:typeof window<"u"?window:{});var Nn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yo,Ke,Zo,Un,Zr,ta,ea,na;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nn=="object"&&Nn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var l=r;s=s.split(".");for(var h=0;h<s.length-1;h++){var v=s[h];if(!(v in l))break t;l=l[v]}s=s[s.length-1],h=l[s],a=a(h),a!=h&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,h=!1,v={next:function(){if(!h&&l<s.length){var w=l++;return{value:a(w,s[w]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},u=this||self;function d(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function m(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function I(s,a,l){return s.call.apply(s.bind,arguments)}function A(s,a,l){if(!s)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),s.apply(a,v)}}return function(){return s.apply(a,arguments)}}function R(s,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:A,R.apply(null,arguments)}function x(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function P(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(h,v,w){for(var C=Array(arguments.length-2),H=2;H<arguments.length;H++)C[H-2]=arguments[H];return a.prototype[v].apply(h,C)}}function O(s){const a=s.length;if(0<a){const l=Array(a);for(let h=0;h<a;h++)l[h]=s[h];return l}return[]}function N(s,a){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(d(h)){const v=s.length||0,w=h.length||0;s.length=v+w;for(let C=0;C<w;C++)s[v+C]=h[C]}else s.push(h)}}class z{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function j(s){return/^[\s\xa0]*$/.test(s)}function $(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function et(s){return et[" "](s),s}et[" "]=function(){};var Rt=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function Et(s,a,l){for(const h in s)a.call(l,s[h],h,s)}function E(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function f(s){const a={};for(const l in s)a[l]=s[l];return a}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(s,a){let l,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(l in h)s[l]=h[l];for(let w=0;w<p.length;w++)l=p[w],Object.prototype.hasOwnProperty.call(h,l)&&(s[l]=h[l])}}function y(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function T(s){u.setTimeout(()=>{throw s},0)}function g(){var s=pr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class kt{constructor(){this.h=this.g=null}add(a,l){const h=Pe.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var Pe=new z(()=>new ol,s=>s.reset());class ol{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Ve,xe=!1,pr=new kt,Us=()=>{const s=u.Promise.resolve(void 0);Ve=()=>{s.then(al)}};var al=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){T(l)}var a=Pe;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}xe=!1};function Bt(){this.s=this.s,this.C=this.C}Bt.prototype.s=!1,Bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var ll=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};u.addEventListener("test",l,a),u.removeEventListener("test",l,a)}catch{}return s})();function De(s,a){if(ht.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Rt){t:{try{et(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:cl[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&De.aa.h.call(this)}}P(De,ht);var cl={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var mn="closure_listenable_"+(1e6*Math.random()|0),ul=0;function hl(s,a,l,h,v){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=v,this.key=++ul,this.da=this.fa=!1}function pn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function gn(s){this.src=s,this.g={},this.h=0}gn.prototype.add=function(s,a,l,h,v){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var C=_r(s,a,h,v);return-1<C?(a=s[C],l||(a.fa=!1)):(a=new hl(a,this.src,w,!!h,v),a.fa=l,s.push(a)),a};function gr(s,a){var l=a.type;if(l in s.g){var h=s.g[l],v=Array.prototype.indexOf.call(h,a,void 0),w;(w=0<=v)&&Array.prototype.splice.call(h,v,1),w&&(pn(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function _r(s,a,l,h){for(var v=0;v<s.length;++v){var w=s[v];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==h)return v}return-1}var yr="closure_lm_"+(1e6*Math.random()|0),Er={};function js(s,a,l,h,v){if(Array.isArray(a)){for(var w=0;w<a.length;w++)js(s,a[w],l,h,v);return null}return l=qs(l),s&&s[mn]?s.K(a,l,m(h)?!!h.capture:!1,v):dl(s,a,l,!1,h,v)}function dl(s,a,l,h,v,w){if(!a)throw Error("Invalid event type");var C=m(v)?!!v.capture:!!v,H=Tr(s);if(H||(s[yr]=H=new gn(s)),l=H.add(a,l,h,C,w),l.proxy)return l;if(h=fl(),l.proxy=h,h.src=s,h.listener=l,s.addEventListener)ll||(v=C),v===void 0&&(v=!1),s.addEventListener(a.toString(),h,v);else if(s.attachEvent)s.attachEvent($s(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function fl(){function s(l){return a.call(s.src,s.listener,l)}const a=ml;return s}function Bs(s,a,l,h,v){if(Array.isArray(a))for(var w=0;w<a.length;w++)Bs(s,a[w],l,h,v);else h=m(h)?!!h.capture:!!h,l=qs(l),s&&s[mn]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],l=_r(w,l,h,v),-1<l&&(pn(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=Tr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=_r(a,l,h,v)),(l=-1<s?a[s]:null)&&vr(l))}function vr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[mn])gr(a.i,s);else{var l=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(l,h,s.capture):a.detachEvent?a.detachEvent($s(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=Tr(a))?(gr(l,s),l.h==0&&(l.src=null,a[yr]=null)):pn(s)}}}function $s(s){return s in Er?Er[s]:Er[s]="on"+s}function ml(s,a){if(s.da)s=!0;else{a=new De(a,this);var l=s.listener,h=s.ha||s.src;s.fa&&vr(s),s=l.call(h,a)}return s}function Tr(s){return s=s[yr],s instanceof gn?s:null}var Ir="__closure_events_fn_"+(1e9*Math.random()>>>0);function qs(s){return typeof s=="function"?s:(s[Ir]||(s[Ir]=function(a){return s.handleEvent(a)}),s[Ir])}function dt(){Bt.call(this),this.i=new gn(this),this.M=this,this.F=null}P(dt,Bt),dt.prototype[mn]=!0,dt.prototype.removeEventListener=function(s,a,l,h){Bs(this,s,a,l,h)};function vt(s,a){var l,h=s.F;if(h)for(l=[];h;h=h.F)l.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new ht(a,s);else if(a instanceof ht)a.target=a.target||s;else{var v=a;a=new ht(h,s),_(a,v)}if(v=!0,l)for(var w=l.length-1;0<=w;w--){var C=a.g=l[w];v=_n(C,h,!0,a)&&v}if(C=a.g=s,v=_n(C,h,!0,a)&&v,v=_n(C,h,!1,a)&&v,l)for(w=0;w<l.length;w++)C=a.g=l[w],v=_n(C,h,!1,a)&&v}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],h=0;h<l.length;h++)pn(l[h]);delete s.g[a],s.h--}}this.F=null},dt.prototype.K=function(s,a,l,h){return this.i.add(String(s),a,!1,l,h)},dt.prototype.L=function(s,a,l,h){return this.i.add(String(s),a,!0,l,h)};function _n(s,a,l,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,w=0;w<a.length;++w){var C=a[w];if(C&&!C.da&&C.capture==l){var H=C.listener,it=C.ha||C.src;C.fa&&gr(s.i,C),v=H.call(it,h)!==!1&&v}}return v&&!h.defaultPrevented}function zs(s,a,l){if(typeof s=="function")l&&(s=R(s,l));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(s,a||0)}function Hs(s){s.g=zs(()=>{s.g=null,s.i&&(s.i=!1,Hs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class pl extends Bt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Hs(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ne(s){Bt.call(this),this.h=s,this.g={}}P(Ne,Bt);var Gs=[];function Ks(s){Et(s.g,function(a,l){this.g.hasOwnProperty(l)&&vr(a)},s),s.g={}}Ne.prototype.N=function(){Ne.aa.N.call(this),Ks(this)},Ne.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wr=u.JSON.stringify,gl=u.JSON.parse,_l=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function Ar(){}Ar.prototype.h=null;function Ws(s){return s.h||(s.h=s.i())}function Qs(){}var ke={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Rr(){ht.call(this,"d")}P(Rr,ht);function br(){ht.call(this,"c")}P(br,ht);var Jt={},Xs=null;function yn(){return Xs=Xs||new dt}Jt.La="serverreachability";function Js(s){ht.call(this,Jt.La,s)}P(Js,ht);function Oe(s){const a=yn();vt(a,new Js(a))}Jt.STAT_EVENT="statevent";function Ys(s,a){ht.call(this,Jt.STAT_EVENT,s),this.stat=a}P(Ys,ht);function Tt(s){const a=yn();vt(a,new Ys(a,s))}Jt.Ma="timingevent";function Zs(s,a){ht.call(this,Jt.Ma,s),this.size=a}P(Zs,ht);function Me(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},a)}function Le(){this.g=!0}Le.prototype.xa=function(){this.g=!1};function yl(s,a,l,h,v,w){s.info(function(){if(s.g)if(w)for(var C="",H=w.split("&"),it=0;it<H.length;it++){var B=H[it].split("=");if(1<B.length){var ft=B[0];B=B[1];var mt=ft.split("_");C=2<=mt.length&&mt[1]=="type"?C+(ft+"="+B+"&"):C+(ft+"=redacted&")}}else C=null;else C=w;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+a+`
`+l+`
`+C})}function El(s,a,l,h,v,w,C){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+a+`
`+l+`
`+w+" "+C})}function he(s,a,l,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Tl(s,l)+(h?" "+h:"")})}function vl(s,a){s.info(function(){return"TIMEOUT: "+a})}Le.prototype.info=function(){};function Tl(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var h=l[s];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var w=v[0];if(w!="noop"&&w!="stop"&&w!="close")for(var C=1;C<v.length;C++)v[C]=""}}}}return wr(l)}catch{return a}}var En={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ti={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sr;function vn(){}P(vn,Ar),vn.prototype.g=function(){return new XMLHttpRequest},vn.prototype.i=function(){return{}},Sr=new vn;function $t(s,a,l,h){this.j=s,this.i=a,this.l=l,this.R=h||1,this.U=new Ne(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ei}function ei(){this.i=null,this.g="",this.h=!1}var ni={},Cr={};function Pr(s,a,l){s.L=1,s.v=An(Ot(a)),s.m=l,s.P=!0,ri(s,null)}function ri(s,a){s.F=Date.now(),Tn(s),s.A=Ot(s.v);var l=s.A,h=s.R;Array.isArray(h)||(h=[String(h)]),_i(l.i,"t",h),s.C=0,l=s.j.J,s.h=new ei,s.g=Oi(s.j,l?a:null,!s.m),0<s.O&&(s.M=new pl(R(s.Y,s,s.g),s.O)),a=s.U,l=s.g,h=s.ca;var v="readystatechange";Array.isArray(v)||(v&&(Gs[0]=v.toString()),v=Gs);for(var w=0;w<v.length;w++){var C=js(l,v[w],h||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=s.H?f(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Oe(),yl(s.i,s.u,s.A,s.l,s.R,s.m)}$t.prototype.ca=function(s){s=s.target;const a=this.M;a&&Mt(s)==3?a.j():this.Y(s)},$t.prototype.Y=function(s){try{if(s==this.g)t:{const mt=Mt(this.g);var a=this.g.Ba();const me=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Ai(this.g)))){this.J||mt!=4||a==7||(a==8||0>=me?Oe(3):Oe(2)),Vr(this);var l=this.g.Z();this.X=l;e:if(si(this)){var h=Ai(this.g);s="";var v=h.length,w=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),Fe(this);var C="";break e}this.h.i=new u.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,s+=this.h.i.decode(h[a],{stream:!(w&&a==v-1)});h.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,El(this.i,this.u,this.A,this.l,this.R,mt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var H,it=this.g;if((H=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(H)){var B=H;break e}}B=null}if(l=B)he(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xr(this,l);else{this.o=!1,this.s=3,Tt(12),Yt(this),Fe(this);break t}}if(this.P){l=!0;let bt;for(;!this.J&&this.C<C.length;)if(bt=Il(this,C),bt==Cr){mt==4&&(this.s=4,Tt(14),l=!1),he(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==ni){this.s=4,Tt(15),he(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else he(this.i,this.l,bt,null),xr(this,bt);if(si(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||C.length!=0||this.h.h||(this.s=1,Tt(16),l=!1),this.o=this.o&&l,!l)he(this.i,this.l,C,"[Invalid Chunked Response]"),Yt(this),Fe(this);else if(0<C.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Lr(ft),ft.M=!0,Tt(11))}}else he(this.i,this.l,C,null),xr(this,C);mt==4&&Yt(this),this.o&&!this.J&&(mt==4?xi(this.j,this):(this.o=!1,Tn(this)))}else Ul(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),Yt(this),Fe(this)}}}catch{}finally{}};function si(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Il(s,a){var l=s.C,h=a.indexOf(`
`,l);return h==-1?Cr:(l=Number(a.substring(l,h)),isNaN(l)?ni:(h+=1,h+l>a.length?Cr:(a=a.slice(h,h+l),s.C=h+l,a)))}$t.prototype.cancel=function(){this.J=!0,Yt(this)};function Tn(s){s.S=Date.now()+s.I,ii(s,s.I)}function ii(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Me(R(s.ba,s),a)}function Vr(s){s.B&&(u.clearTimeout(s.B),s.B=null)}$t.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(vl(this.i,this.A),this.L!=2&&(Oe(),Tt(17)),Yt(this),this.s=2,Fe(this)):ii(this,this.S-s)};function Fe(s){s.j.G==0||s.J||xi(s.j,s)}function Yt(s){Vr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Ks(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function xr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||Dr(l.h,s))){if(!s.K&&Dr(l.h,s)&&l.G==3){try{var h=l.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Vn(l),Cn(l);else break t;Mr(l),Tt(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=Me(R(l.Za,l),6e3));if(1>=li(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else te(l,11)}else if((s.K||l.g==s)&&Vn(l),!j(a))for(v=l.Da.g.parse(a),a=0;a<v.length;a++){let B=v[a];if(l.T=B[0],B=B[1],l.G==2)if(B[0]=="c"){l.K=B[1],l.ia=B[2];const ft=B[3];ft!=null&&(l.la=ft,l.j.info("VER="+l.la));const mt=B[4];mt!=null&&(l.Aa=mt,l.j.info("SVER="+l.Aa));const me=B[5];me!=null&&typeof me=="number"&&0<me&&(h=1.5*me,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const bt=s.g;if(bt){const Dn=bt.g?bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Dn){var w=h.h;w.g||Dn.indexOf("spdy")==-1&&Dn.indexOf("quic")==-1&&Dn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Nr(w,w.h),w.h=null))}if(h.D){const Fr=bt.g?bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Fr&&(h.ya=Fr,K(h.I,h.D,Fr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var C=s;if(h.qa=ki(h,h.J?h.ia:null,h.W),C.K){ci(h.h,C);var H=C,it=h.L;it&&(H.I=it),H.B&&(Vr(H),Tn(H)),h.g=C}else Pi(h);0<l.i.length&&Pn(l)}else B[0]!="stop"&&B[0]!="close"||te(l,7);else l.G==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?te(l,7):Or(l):B[0]!="noop"&&l.l&&l.l.ta(B),l.v=0)}}Oe(4)}catch{}}var wl=class{constructor(s,a){this.g=s,this.map=a}};function oi(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ai(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function li(s){return s.h?1:s.g?s.g.size:0}function Dr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Nr(s,a){s.g?s.g.add(a):s.h=a}function ci(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}oi.prototype.cancel=function(){if(this.i=ui(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ui(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return O(s.i)}function Al(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var a=[],l=s.length,h=0;h<l;h++)a.push(s[h]);return a}a=[],l=0;for(h in s)a[l++]=s[h];return a}function Rl(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const h in s)a[l++]=h;return a}}}function hi(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=Rl(s),h=Al(s),v=h.length,w=0;w<v;w++)a.call(void 0,h[w],l&&l[w],s)}var di=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bl(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var h=s[l].indexOf("="),v=null;if(0<=h){var w=s[l].substring(0,h);v=s[l].substring(h+1)}else w=s[l];a(w,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Zt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Zt){this.h=s.h,In(this,s.j),this.o=s.o,this.g=s.g,wn(this,s.s),this.l=s.l;var a=s.i,l=new Be;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),fi(this,l),this.m=s.m}else s&&(a=String(s).match(di))?(this.h=!1,In(this,a[1]||"",!0),this.o=Ue(a[2]||""),this.g=Ue(a[3]||"",!0),wn(this,a[4]),this.l=Ue(a[5]||"",!0),fi(this,a[6]||"",!0),this.m=Ue(a[7]||"")):(this.h=!1,this.i=new Be(null,this.h))}Zt.prototype.toString=function(){var s=[],a=this.j;a&&s.push(je(a,mi,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(je(a,mi,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(je(l,l.charAt(0)=="/"?Pl:Cl,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",je(l,xl)),s.join("")};function Ot(s){return new Zt(s)}function In(s,a,l){s.j=l?Ue(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function wn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function fi(s,a,l){a instanceof Be?(s.i=a,Dl(s.i,s.h)):(l||(a=je(a,Vl)),s.i=new Be(a,s.h))}function K(s,a,l){s.i.set(a,l)}function An(s){return K(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Ue(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function je(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,Sl),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Sl(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var mi=/[#\/\?@]/g,Cl=/[#\?:]/g,Pl=/[#\?]/g,Vl=/[#\?@]/g,xl=/#/g;function Be(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function qt(s){s.g||(s.g=new Map,s.h=0,s.i&&bl(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=Be.prototype,n.add=function(s,a){qt(this),this.i=null,s=de(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function pi(s,a){qt(s),a=de(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function gi(s,a){return qt(s),a=de(s,a),s.g.has(a)}n.forEach=function(s,a){qt(this),this.g.forEach(function(l,h){l.forEach(function(v){s.call(a,v,h,this)},this)},this)},n.na=function(){qt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let h=0;h<a.length;h++){const v=s[h];for(let w=0;w<v.length;w++)l.push(a[h])}return l},n.V=function(s){qt(this);let a=[];if(typeof s=="string")gi(this,s)&&(a=a.concat(this.g.get(de(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},n.set=function(s,a){return qt(this),this.i=null,s=de(this,s),gi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function _i(s,a,l){pi(s,a),0<l.length&&(s.i=null,s.g.set(de(s,a),O(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var h=a[l];const w=encodeURIComponent(String(h)),C=this.V(h);for(h=0;h<C.length;h++){var v=w;C[h]!==""&&(v+="="+encodeURIComponent(String(C[h]))),s.push(v)}}return this.i=s.join("&")};function de(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Dl(s,a){a&&!s.j&&(qt(s),s.i=null,s.g.forEach(function(l,h){var v=h.toLowerCase();h!=v&&(pi(this,h),_i(this,v,l))},s)),s.j=a}function Nl(s,a){const l=new Le;if(u.Image){const h=new Image;h.onload=x(zt,l,"TestLoadImage: loaded",!0,a,h),h.onerror=x(zt,l,"TestLoadImage: error",!1,a,h),h.onabort=x(zt,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=x(zt,l,"TestLoadImage: timeout",!1,a,h),u.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function kl(s,a){const l=new Le,h=new AbortController,v=setTimeout(()=>{h.abort(),zt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(w=>{clearTimeout(v),w.ok?zt(l,"TestPingServer: ok",!0,a):zt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),zt(l,"TestPingServer: error",!1,a)})}function zt(s,a,l,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(l)}catch{}}function Ol(){this.g=new _l}function Ml(s,a,l){const h=l||"";try{hi(s,function(v,w){let C=v;m(v)&&(C=wr(v)),a.push(h+w+"="+encodeURIComponent(C))})}catch(v){throw a.push(h+"type="+encodeURIComponent("_badmap")),v}}function Rn(s){this.l=s.Ub||null,this.j=s.eb||!1}P(Rn,Ar),Rn.prototype.g=function(){return new bn(this.l,this.j)},Rn.prototype.i=(function(s){return function(){return s}})({});function bn(s,a){dt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(bn,dt),n=bn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,qe(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$e(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,qe(this)),this.g&&(this.readyState=3,qe(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;yi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function yi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?$e(this):qe(this),this.readyState==3&&yi(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,$e(this))},n.Qa=function(s){this.g&&(this.response=s,$e(this))},n.ga=function(){this.g&&$e(this)};function $e(s){s.readyState=4,s.l=null,s.j=null,s.v=null,qe(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function qe(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(bn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Ei(s){let a="";return Et(s,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function kr(s,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=Ei(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):K(s,a,l))}function X(s){dt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(X,dt);var Ll=/^https?$/i,Fl=["POST","PUT"];n=X.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sr.g(),this.v=this.o?Ws(this.o):Ws(Sr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){vi(this,w);return}if(s=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)l.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())l.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),v=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Fl,a,void 0))||h||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,C]of l)this.g.setRequestHeader(w,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wi(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){vi(this,w)}};function vi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Ti(s),Sn(s)}function Ti(s){s.A||(s.A=!0,vt(s,"complete"),vt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,vt(this,"complete"),vt(this,"abort"),Sn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sn(this,!0)),X.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ii(this):this.bb())},n.bb=function(){Ii(this)};function Ii(s){if(s.h&&typeof c<"u"&&(!s.v[1]||Mt(s)!=4||s.Z()!=2)){if(s.u&&Mt(s)==4)zs(s.Ea,0,s);else if(vt(s,"readystatechange"),Mt(s)==4){s.h=!1;try{const C=s.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=C===0){var v=String(s.D).match(di)[1]||null;!v&&u.self&&u.self.location&&(v=u.self.location.protocol.slice(0,-1)),h=!Ll.test(v?v.toLowerCase():"")}l=h}if(l)vt(s,"complete"),vt(s,"success");else{s.m=6;try{var w=2<Mt(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",Ti(s)}}finally{Sn(s)}}}}function Sn(s,a){if(s.g){wi(s);const l=s.g,h=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||vt(s,"ready");try{l.onreadystatechange=h}catch{}}}function wi(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Mt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),gl(a)}};function Ai(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ul(s){const a={};s=(s.g&&2<=Mt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(j(s[h]))continue;var l=y(s[h]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[v]||[];a[v]=w,w.push(l)}E(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ze(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Ri(s){this.Aa=0,this.i=[],this.j=new Le,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ze("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ze("baseRetryDelayMs",5e3,s),this.cb=ze("retryDelaySeedMs",1e4,s),this.Wa=ze("forwardChannelMaxRetries",2,s),this.wa=ze("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new oi(s&&s.concurrentRequestLimit),this.Da=new Ol,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ri.prototype,n.la=8,n.G=1,n.connect=function(s,a,l,h){Tt(0),this.W=s,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=ki(this,null,this.W),Pn(this)};function Or(s){if(bi(s),s.G==3){var a=s.U++,l=Ot(s.I);if(K(l,"SID",s.K),K(l,"RID",a),K(l,"TYPE","terminate"),He(s,l),a=new $t(s,s.j,a),a.L=2,a.v=An(Ot(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=a.v,l=!0),l||(a.g=Oi(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Tn(a)}Ni(s)}function Cn(s){s.g&&(Lr(s),s.g.cancel(),s.g=null)}function bi(s){Cn(s),s.u&&(u.clearTimeout(s.u),s.u=null),Vn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function Pn(s){if(!ai(s.h)&&!s.s){s.s=!0;var a=s.Ga;Ve||Us(),xe||(Ve(),xe=!0),pr.add(a,s),s.B=0}}function jl(s,a){return li(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Me(R(s.Ga,s,a),Di(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const v=new $t(this,this.j,s);let w=this.o;if(this.S&&(w?(w=f(w),_(w,this.S)):w=this.S),this.m!==null||this.O||(v.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Ci(this,v,a),l=Ot(this.I),K(l,"RID",s),K(l,"CVER",22),this.D&&K(l,"X-HTTP-Session-Id",this.D),He(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(Ei(w)))+"&"+a:this.m&&kr(l,this.m,w)),Nr(this.h,v),this.Ua&&K(l,"TYPE","init"),this.P?(K(l,"$req",a),K(l,"SID","null"),v.T=!0,Pr(v,l,null)):Pr(v,l,a),this.G=2}}else this.G==3&&(s?Si(this,s):this.i.length==0||ai(this.h)||Si(this))};function Si(s,a){var l;a?l=a.l:l=s.U++;const h=Ot(s.I);K(h,"SID",s.K),K(h,"RID",l),K(h,"AID",s.T),He(s,h),s.m&&s.o&&kr(h,s.m,s.o),l=new $t(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Ci(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Nr(s.h,l),Pr(l,h,a)}function He(s,a){s.H&&Et(s.H,function(l,h){K(a,h,l)}),s.l&&hi({},function(l,h){K(a,h,l)})}function Ci(s,a,l){l=Math.min(s.i.length,l);var h=s.l?R(s.l.Na,s.l,s):null;t:{var v=s.i;let w=-1;for(;;){const C=["count="+l];w==-1?0<l?(w=v[0].g,C.push("ofs="+w)):w=0:C.push("ofs="+w);let H=!0;for(let it=0;it<l;it++){let B=v[it].g;const ft=v[it].map;if(B-=w,0>B)w=Math.max(0,v[it].g-100),H=!1;else try{Ml(ft,C,"req"+B+"_")}catch{h&&h(ft)}}if(H){h=C.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,h}function Pi(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Ve||Us(),xe||(Ve(),xe=!0),pr.add(a,s),s.v=0}}function Mr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Me(R(s.Fa,s),Di(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Vi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Me(R(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),Cn(this),Vi(this))};function Lr(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function Vi(s){s.g=new $t(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Ot(s.qa);K(a,"RID","rpc"),K(a,"SID",s.K),K(a,"AID",s.T),K(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&K(a,"TO",s.ja),K(a,"TYPE","xmlhttp"),He(s,a),s.m&&s.o&&kr(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=An(Ot(a)),l.m=null,l.P=!0,ri(l,s)}n.Za=function(){this.C!=null&&(this.C=null,Cn(this),Mr(this),Tt(19))};function Vn(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function xi(s,a){var l=null;if(s.g==a){Vn(s),Lr(s),s.g=null;var h=2}else if(Dr(s.h,a))l=a.D,ci(s.h,a),h=1;else return;if(s.G!=0){if(a.o)if(h==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var v=s.B;h=yn(),vt(h,new Zs(h,l)),Pn(s)}else Pi(s);else if(v=a.s,v==3||v==0&&0<a.X||!(h==1&&jl(s,a)||h==2&&Mr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),v){case 1:te(s,5);break;case 4:te(s,10);break;case 3:te(s,6);break;default:te(s,2)}}}function Di(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function te(s,a){if(s.j.info("Error code "+a),a==2){var l=R(s.fb,s),h=s.Xa;const v=!h;h=new Zt(h||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||In(h,"https"),An(h),v?Nl(h.toString(),l):kl(h.toString(),l)}else Tt(2);s.G=0,s.l&&s.l.sa(a),Ni(s),bi(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Ni(s){if(s.G=0,s.ka=[],s.l){const a=ui(s.h);(a.length!=0||s.i.length!=0)&&(N(s.ka,a),N(s.ka,s.i),s.h.i.length=0,O(s.i),s.i.length=0),s.l.ra()}}function ki(s,a,l){var h=l instanceof Zt?Ot(l):new Zt(l);if(h.g!="")a&&(h.g=a+"."+h.g),wn(h,h.s);else{var v=u.location;h=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var w=new Zt(null);h&&In(w,h),a&&(w.g=a),v&&wn(w,v),l&&(w.l=l),h=w}return l=s.D,a=s.ya,l&&a&&K(h,l,a),K(h,"VER",s.la),He(s,h),h}function Oi(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new X(new Rn({eb:l})):new X(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mi(){}n=Mi.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function xn(){}xn.prototype.g=function(s,a){return new At(s,a)};function At(s,a){dt.call(this),this.g=new Ri(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!j(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!j(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new fe(this)}P(At,dt),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Or(this.g)},At.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=wr(s),s=l);a.i.push(new wl(a.Ya++,s)),a.G==3&&Pn(a)},At.prototype.N=function(){this.g.l=null,delete this.j,Or(this.g),delete this.g,At.aa.N.call(this)};function Li(s){Rr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}P(Li,Rr);function Fi(){br.call(this),this.status=1}P(Fi,br);function fe(s){this.g=s}P(fe,Mi),fe.prototype.ua=function(){vt(this.g,"a")},fe.prototype.ta=function(s){vt(this.g,new Li(s))},fe.prototype.sa=function(s){vt(this.g,new Fi)},fe.prototype.ra=function(){vt(this.g,"b")},xn.prototype.createWebChannel=xn.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,na=function(){return new xn},ea=function(){return yn()},ta=Jt,Zr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},En.NO_ERROR=0,En.TIMEOUT=8,En.HTTP_ERROR=6,Un=En,ti.COMPLETE="complete",Zo=ti,Qs.EventType=ke,ke.OPEN="a",ke.CLOSE="b",ke.ERROR="c",ke.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Ke=Qs,X.prototype.listenOnce=X.prototype.L,X.prototype.getLastError=X.prototype.Ka,X.prototype.getLastErrorCode=X.prototype.Ba,X.prototype.getStatus=X.prototype.Z,X.prototype.getResponseJson=X.prototype.Oa,X.prototype.getResponseText=X.prototype.oa,X.prototype.send=X.prototype.ea,X.prototype.setWithCredentials=X.prototype.Ha,Yo=X}).apply(typeof Nn<"u"?Nn:typeof self<"u"?self:typeof window<"u"?window:{});const Ji="@firebase/firestore",Yi="4.9.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Se="12.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new Go("@firebase/firestore");function pe(){return ie.logLevel}function D(n,...t){if(ie.logLevel<=U.DEBUG){const e=t.map(gs);ie.debug(`Firestore (${Se}): ${n}`,...e)}}function oe(n,...t){if(ie.logLevel<=U.ERROR){const e=t.map(gs);ie.error(`Firestore (${Se}): ${n}`,...e)}}function ar(n,...t){if(ie.logLevel<=U.WARN){const e=t.map(gs);ie.warn(`Firestore (${Se}): ${n}`,...e)}}function gs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,ra(n,r,e)}function ra(n,t,e){let r=`FIRESTORE (${Se}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw oe(r),new Error(r)}function J(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||ra(t,i,r)}function G(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends be{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Su{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(gt.UNAUTHENTICATED)))}shutdown(){}}class Cu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Pu{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){J(this.o===void 0,42304);let r=this.i;const i=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new re;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new re,t.enqueueRetryable((()=>i(this.currentUser)))};const c=()=>{const d=o;t.enqueueRetryable((async()=>{await d.promise,await i(this.currentUser)}))},u=d=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((d=>u(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?u(d):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new re)}}),0),c()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string",31837,{l:r}),new sa(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return J(t===null||typeof t=="string",2055,{h:t}),new gt(t)}}class Vu{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class xu{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Vu(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(gt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Zi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Du{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,uu(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){J(this.o===void 0,3512);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const c=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Zi(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(J(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Zi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Nu(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function q(n,t){return n<t?-1:n>t?1:0}function ts(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return qr(i)===qr(o)?q(i,o):qr(i)?1:-1}return q(n.length,t.length)}const ku=55296,Ou=57343;function qr(n){const t=n.charCodeAt(0);return t>=ku&&t<=Ou}function Te(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to="__name__";class xt{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&L(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return xt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof xt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=xt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return q(t.length,e.length)}static compareSegments(t,e){const r=xt.isNumericId(t),i=xt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?xt.extractNumericId(t).compare(xt.extractNumericId(e)):ts(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ps.fromString(t.substring(4,t.length-2))}}class Y extends xt{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new k(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new Y(e)}static emptyPath(){return new Y([])}}const Mu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends xt{construct(t,e,r){return new ct(t,e,r)}static isValidIdentifier(t){return Mu.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===to}static keyField(){return new ct([to])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new k(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let c=!1;for(;i<t.length;){const u=t[i];if(u==="\\"){if(i+1===t.length)throw new k(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new k(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,i+=2}else u==="`"?(c=!c,i++):u!=="."||c?(r+=u,i++):(o(),i++)}if(o(),c)throw new k(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(Y.fromString(t))}static fromName(t){return new M(Y.fromString(t).popFirst(5))}static empty(){return new M(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new Y(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(n,t,e){if(!e)throw new k(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Fu(n,t,e,r){if(t===!0&&r===!0)throw new k(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function eo(n){if(!M.isDocumentKey(n))throw new k(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ia(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ys(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function es(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ys(n);throw new k(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n,t){const e={typeString:n};return t&&(e.value=t),e}function ln(n,t){if(!ia(n))throw new k(S.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const c=n[r];if(i&&typeof c!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&c!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new k(S.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=-62135596800,ro=1e6;class Q{static now(){return Q.fromMillis(Date.now())}static fromDate(t){return Q.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*ro);return new Q(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<no)throw new k(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ro}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Q._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(ln(t,Q._jsonSchema))return new Q(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-no;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Q._jsonSchemaVersion="firestore/timestamp/1.0",Q._jsonSchema={type:tt("string",Q._jsonSchemaVersion),seconds:tt("number"),nanoseconds:tt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static fromTimestamp(t){return new W(t)}static min(){return new W(new Q(0,0))}static max(){return new W(new Q(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const nn=-1;function Uu(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new Q(e+1,0):new Q(e,r));return new Kt(i,M.empty(),t)}function ju(n){return new Kt(n.readTime,n.key,nn)}class Kt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Kt(W.min(),M.empty(),nn)}static max(){return new Kt(W.max(),M.empty(),nn)}}function Bu(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:q(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==$u)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new b(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof b?e:b.resolve(e)}catch(e){return b.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):b.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):b.reject(e)}static resolve(t){return new b(((e,r)=>{e(t)}))}static reject(t){return new b(((e,r)=>{r(t)}))}static waitFor(t){return new b(((e,r)=>{let i=0,o=0,c=!1;t.forEach((u=>{++i,u.next((()=>{++o,c&&o===i&&e()}),(d=>r(d)))})),c=!0,o===i&&e()}))}static or(t){let e=b.resolve(!1);for(const r of t)e=e.next((i=>i?b.resolve(i):r()));return e}static forEach(t,e){const r=[];return t.forEach(((i,o)=>{r.push(e.call(this,i,o))})),this.waitFor(r)}static mapArray(t,e){return new b(((r,i)=>{const o=t.length,c=new Array(o);let u=0;for(let d=0;d<o;d++){const m=d;e(t[m]).next((I=>{c[m]=I,++u,u===o&&r(c)}),(I=>i(I)))}}))}static doWhile(t,e){return new b(((r,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):r()};o()}))}}function zu(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function cn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class vs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}vs.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=-1;function Is(n){return n==null}function Qn(n){return n===0&&1/n==-1/0}function Hu(n){return typeof n=="number"&&Number.isInteger(n)&&!Qn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="";function Gu(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=so(t)),t=Ku(n.get(e),t);return so(t)}function Ku(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case oa:e+="";break;default:e+=o}}return e}function so(n){return n+oa+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ce(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function aa(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new wt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new wt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new kn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new kn(this.root,t,this.comparator,!1)}getReverseIterator(){return new kn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new kn(this.root,t,this.comparator,!0)}}class kn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new at(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.comparator=t,this.data=new wt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new oo(this.data.getIterator())}getIteratorFrom(t){return new oo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof ut)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ut(this.comparator);return e.data=t,e}}class oo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new Vt([])}unionWith(t){let e=new ut(ct.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Vt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Te(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
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
 */class Wu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Wu("Invalid base64 string: "+o):o}})(t);return new Dt(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let c=0;c<i.length;++c)o+=String.fromCharCode(i[c]);return o})(t);return new Dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const Qu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ae(n){if(J(!!n,39018),typeof n=="string"){let t=0;const e=Qu.exec(n);if(J(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:lt(n.seconds),nanos:lt(n.nanos)}}function lt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ie(n){return typeof n=="string"?Dt.fromBase64String(n):Dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="server_timestamp",ca="__type__",ua="__previous_value__",ha="__local_write_time__";function ws(n){return(n?.mapValue?.fields||{})[ca]?.stringValue===la}function As(n){const t=n.mapValue.fields[ua];return ws(t)?As(t):t}function Xn(n){const t=ae(n.mapValue.fields[ha].timestampValue);return new Q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(t,e,r,i,o,c,u,d,m,I){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=c,this.autoDetectLongPolling=u,this.longPollingOptions=d,this.useFetchStreams=m,this.isUsingEmulator=I}}const Jn="(default)";class Yn{constructor(t,e){this.projectId=t,this.database=e||Jn}static empty(){return new Yn("","")}get isDefaultDatabase(){return this.database===Jn}isEqual(t){return t instanceof Yn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="__type__",Ju="__max__",On={mapValue:{}},fa="__vector__",ns="value";function le(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ws(n)?4:Zu(n)?9007199254740991:Yu(n)?10:11:L(28295,{value:n})}function Nt(n,t){if(n===t)return!0;const e=le(n);if(e!==le(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Xn(n).isEqual(Xn(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const c=ae(i.timestampValue),u=ae(o.timestampValue);return c.seconds===u.seconds&&c.nanos===u.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,o){return Ie(i.bytesValue).isEqual(Ie(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,o){return lt(i.geoPointValue.latitude)===lt(o.geoPointValue.latitude)&&lt(i.geoPointValue.longitude)===lt(o.geoPointValue.longitude)})(n,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return lt(i.integerValue)===lt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const c=lt(i.doubleValue),u=lt(o.doubleValue);return c===u?Qn(c)===Qn(u):isNaN(c)&&isNaN(u)}return!1})(n,t);case 9:return Te(n.arrayValue.values||[],t.arrayValue.values||[],Nt);case 10:case 11:return(function(i,o){const c=i.mapValue.fields||{},u=o.mapValue.fields||{};if(io(c)!==io(u))return!1;for(const d in c)if(c.hasOwnProperty(d)&&(u[d]===void 0||!Nt(c[d],u[d])))return!1;return!0})(n,t);default:return L(52216,{left:n})}}function rn(n,t){return(n.values||[]).find((e=>Nt(e,t)))!==void 0}function we(n,t){if(n===t)return 0;const e=le(n),r=le(t);if(e!==r)return q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,t.booleanValue);case 2:return(function(o,c){const u=lt(o.integerValue||o.doubleValue),d=lt(c.integerValue||c.doubleValue);return u<d?-1:u>d?1:u===d?0:isNaN(u)?isNaN(d)?0:-1:1})(n,t);case 3:return ao(n.timestampValue,t.timestampValue);case 4:return ao(Xn(n),Xn(t));case 5:return ts(n.stringValue,t.stringValue);case 6:return(function(o,c){const u=Ie(o),d=Ie(c);return u.compareTo(d)})(n.bytesValue,t.bytesValue);case 7:return(function(o,c){const u=o.split("/"),d=c.split("/");for(let m=0;m<u.length&&m<d.length;m++){const I=q(u[m],d[m]);if(I!==0)return I}return q(u.length,d.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,c){const u=q(lt(o.latitude),lt(c.latitude));return u!==0?u:q(lt(o.longitude),lt(c.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return lo(n.arrayValue,t.arrayValue);case 10:return(function(o,c){const u=o.fields||{},d=c.fields||{},m=u[ns]?.arrayValue,I=d[ns]?.arrayValue,A=q(m?.values?.length||0,I?.values?.length||0);return A!==0?A:lo(m,I)})(n.mapValue,t.mapValue);case 11:return(function(o,c){if(o===On.mapValue&&c===On.mapValue)return 0;if(o===On.mapValue)return 1;if(c===On.mapValue)return-1;const u=o.fields||{},d=Object.keys(u),m=c.fields||{},I=Object.keys(m);d.sort(),I.sort();for(let A=0;A<d.length&&A<I.length;++A){const R=ts(d[A],I[A]);if(R!==0)return R;const x=we(u[d[A]],m[I[A]]);if(x!==0)return x}return q(d.length,I.length)})(n.mapValue,t.mapValue);default:throw L(23264,{he:e})}}function ao(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return q(n,t);const e=ae(n),r=ae(t),i=q(e.seconds,r.seconds);return i!==0?i:q(e.nanos,r.nanos)}function lo(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=we(e[i],r[i]);if(o)return o}return q(e.length,r.length)}function Ae(n){return rs(n)}function rs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=ae(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Ie(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return M.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=rs(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const c of r)o?o=!1:i+=",",i+=`${c}:${rs(e.fields[c])}`;return i+"}"})(n.mapValue):L(61005,{value:n})}function jn(n){switch(le(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=As(n);return t?16+jn(t):16;case 5:return 2*n.stringValue.length;case 6:return Ie(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,o)=>i+jn(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Ce(r.fields,((o,c)=>{i+=o.length+jn(c)})),i})(n.mapValue);default:throw L(13486,{value:n})}}function ss(n){return!!n&&"integerValue"in n}function Rs(n){return!!n&&"arrayValue"in n}function Bn(n){return!!n&&"mapValue"in n}function Yu(n){return(n?.mapValue?.fields||{})[da]?.stringValue===fa}function Qe(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Ce(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=Qe(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Qe(n.arrayValue.values[e]);return t}return{...n}}function Zu(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ju}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.value=t}static empty(){return new Ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Bn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Qe(e)}setAll(t){let e=ct.emptyPath(),r={},i=[];t.forEach(((c,u)=>{if(!e.isImmediateParentOf(u)){const d=this.getFieldsMap(e);this.applyChanges(d,r,i),r={},i=[],e=u.popLast()}c?r[u.lastSegment()]=Qe(c):i.push(u.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Bn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Nt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Bn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Ce(e,((i,o)=>t[i]=o));for(const i of r)delete t[i]}clone(){return new Ct(Qe(this.value))}}function ma(n){const t=[];return Ce(n.fields,((e,r)=>{const i=new ct([e]);if(Bn(r)){const o=ma(r.mapValue).fields;if(o.length===0)t.push(i);else for(const c of o)t.push(i.child(c))}else t.push(i)})),new Vt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,e,r,i,o,c,u){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=c,this.documentState=u}static newInvalidDocument(t){return new St(t,0,W.min(),W.min(),W.min(),Ct.empty(),0)}static newFoundDocument(t,e,r,i){return new St(t,1,e,W.min(),r,i,0)}static newNoDocument(t,e){return new St(t,2,e,W.min(),W.min(),Ct.empty(),0)}static newUnknownDocument(t,e){return new St(t,3,e,W.min(),W.min(),Ct.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof St&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zn{constructor(t,e){this.position=t,this.inclusive=e}}function co(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],c=n.position[i];if(o.field.isKeyField()?r=M.comparator(M.fromName(c.referenceValue),e.key):r=we(c,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function uo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Nt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class tr{constructor(t,e="asc"){this.field=t,this.dir=e}}function th(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class pa{}class st extends pa{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new nh(t,e,r):e==="array-contains"?new ih(t,r):e==="in"?new oh(t,r):e==="not-in"?new ah(t,r):e==="array-contains-any"?new lh(t,r):new st(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new rh(t,r):new sh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(we(e,this.value)):e!==null&&le(this.value)===le(e)&&this.matchesComparison(we(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends pa{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Wt(t,e)}matches(t){return ga(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ga(n){return n.op==="and"}function _a(n){return eh(n)&&ga(n)}function eh(n){for(const t of n.filters)if(t instanceof Wt)return!1;return!0}function is(n){if(n instanceof st)return n.field.canonicalString()+n.op.toString()+Ae(n.value);if(_a(n))return n.filters.map((t=>is(t))).join(",");{const t=n.filters.map((e=>is(e))).join(",");return`${n.op}(${t})`}}function ya(n,t){return n instanceof st?(function(r,i){return i instanceof st&&r.op===i.op&&r.field.isEqual(i.field)&&Nt(r.value,i.value)})(n,t):n instanceof Wt?(function(r,i){return i instanceof Wt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,c,u)=>o&&ya(c,i.filters[u])),!0):!1})(n,t):void L(19439)}function Ea(n){return n instanceof st?(function(e){return`${e.field.canonicalString()} ${e.op} ${Ae(e.value)}`})(n):n instanceof Wt?(function(e){return e.op.toString()+" {"+e.getFilters().map(Ea).join(" ,")+"}"})(n):"Filter"}class nh extends st{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class rh extends st{constructor(t,e){super(t,"in",e),this.keys=va("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class sh extends st{constructor(t,e){super(t,"not-in",e),this.keys=va("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function va(n,t){return(t.arrayValue?.values||[]).map((e=>M.fromName(e.referenceValue)))}class ih extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Rs(e)&&rn(e.arrayValue,this.value)}}class oh extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&rn(this.value.arrayValue,e)}}class ah extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(rn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!rn(this.value.arrayValue,e)}}class lh extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Rs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>rn(this.value.arrayValue,r)))}}/**
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
 */class ch{constructor(t,e=null,r=[],i=[],o=null,c=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=c,this.endAt=u,this.Te=null}}function ho(n,t=null,e=[],r=[],i=null,o=null,c=null){return new ch(n,t,e,r,i,o,c)}function bs(n){const t=G(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>is(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),Is(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Ae(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Ae(r))).join(",")),t.Te=e}return t.Te}function Ss(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!th(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ya(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!uo(n.startAt,t.startAt)&&uo(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t,e=null,r=[],i=[],o=null,c="F",u=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=c,this.startAt=u,this.endAt=d,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function uh(n,t,e,r,i,o,c,u){return new lr(n,t,e,r,i,o,c,u)}function hh(n){return new lr(n)}function fo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function dh(n){return n.collectionGroup!==null}function Xe(n){const t=G(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(c){let u=new ut(ct.comparator);return c.filters.forEach((d=>{d.getFlattenedFilters().forEach((m=>{m.isInequality()&&(u=u.add(m.field))}))})),u})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new tr(o,r))})),e.has(ct.keyField().canonicalString())||t.Ie.push(new tr(ct.keyField(),r))}return t.Ie}function se(n){const t=G(n);return t.Ee||(t.Ee=fh(t,Xe(n))),t.Ee}function fh(n,t){if(n.limitType==="F")return ho(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new tr(i.field,o)}));const e=n.endAt?new Zn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Zn(n.startAt.position,n.startAt.inclusive):null;return ho(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function os(n,t,e){return new lr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ta(n,t){return Ss(se(n),se(t))&&n.limitType===t.limitType}function Ia(n){return`${bs(se(n))}|lt:${n.limitType}`}function Ge(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((i=>Ea(i))).join(", ")}]`),Is(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((i=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(i))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((i=>Ae(i))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((i=>Ae(i))).join(",")),`Target(${r})`})(se(n))}; limitType=${n.limitType})`}function Cs(n,t){return t.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,i){for(const o of Xe(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,t)&&(function(r,i){return!(r.startAt&&!(function(c,u,d){const m=co(c,u,d);return c.inclusive?m<=0:m<0})(r.startAt,Xe(r),i)||r.endAt&&!(function(c,u,d){const m=co(c,u,d);return c.inclusive?m>=0:m>0})(r.endAt,Xe(r),i))})(n,t)}function mh(n){return(t,e)=>{let r=!1;for(const i of Xe(n)){const o=ph(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function ph(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):(function(o,c,u){const d=c.data.field(o),m=u.data.field(o);return d!==null&&m!==null?we(d,m):L(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ce(this.inner,((e,r)=>{for(const[i,o]of r)t(i,o)}))}isEmpty(){return aa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=new wt(M.comparator);function er(){return gh}const wa=new wt(M.comparator);function Mn(...n){let t=wa;for(const e of n)t=t.insert(e.key,e);return t}function Aa(n){let t=wa;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function ne(){return Je()}function Ra(){return Je()}function Je(){return new ce((n=>n.toString()),((n,t)=>n.isEqual(t)))}const _h=new wt(M.comparator),yh=new ut(M.comparator);function _t(...n){let t=yh;for(const e of n)t=t.add(e);return t}const Eh=new ut(q);function vh(){return Eh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qn(t)?"-0":t}}function ba(n){return{integerValue:""+n}}function Th(n,t){return Hu(t)?ba(t):Ps(n,t)}/**
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
 */class cr{constructor(){this._=void 0}}function Ih(n,t,e){return n instanceof nr?(function(i,o){const c={fields:{[ca]:{stringValue:la},[ha]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ws(o)&&(o=As(o)),o&&(c.fields[ua]=o),{mapValue:c}})(e,t):n instanceof sn?Ca(n,t):n instanceof on?Pa(n,t):(function(i,o){const c=Sa(i,o),u=mo(c)+mo(i.Ae);return ss(c)&&ss(i.Ae)?ba(u):Ps(i.serializer,u)})(n,t)}function wh(n,t,e){return n instanceof sn?Ca(n,t):n instanceof on?Pa(n,t):e}function Sa(n,t){return n instanceof rr?(function(r){return ss(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class nr extends cr{}class sn extends cr{constructor(t){super(),this.elements=t}}function Ca(n,t){const e=Va(t);for(const r of n.elements)e.some((i=>Nt(i,r)))||e.push(r);return{arrayValue:{values:e}}}class on extends cr{constructor(t){super(),this.elements=t}}function Pa(n,t){let e=Va(t);for(const r of n.elements)e=e.filter((i=>!Nt(i,r)));return{arrayValue:{values:e}}}class rr extends cr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function mo(n){return lt(n.integerValue||n.doubleValue)}function Va(n){return Rs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Ah(n,t){return n.field.isEqual(t.field)&&(function(r,i){return r instanceof sn&&i instanceof sn||r instanceof on&&i instanceof on?Te(r.elements,i.elements,Nt):r instanceof rr&&i instanceof rr?Nt(r.Ae,i.Ae):r instanceof nr&&i instanceof nr})(n.transform,t.transform)}class Rh{constructor(t,e){this.version=t,this.transformResults=e}}class Lt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Lt}static exists(t){return new Lt(void 0,t)}static updateTime(t){return new Lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function $n(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ur{}function xa(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Na(n.key,Lt.none()):new un(n.key,n.data,Lt.none());{const e=n.data,r=Ct.empty();let i=new ut(ct.comparator);for(let o of t.fields)if(!i.has(o)){let c=e.field(o);c===null&&o.length>1&&(o=o.popLast(),c=e.field(o)),c===null?r.delete(o):r.set(o,c),i=i.add(o)}return new ue(n.key,r,new Vt(i.toArray()),Lt.none())}}function bh(n,t,e){n instanceof un?(function(i,o,c){const u=i.value.clone(),d=go(i.fieldTransforms,o,c.transformResults);u.setAll(d),o.convertToFoundDocument(c.version,u).setHasCommittedMutations()})(n,t,e):n instanceof ue?(function(i,o,c){if(!$n(i.precondition,o))return void o.convertToUnknownDocument(c.version);const u=go(i.fieldTransforms,o,c.transformResults),d=o.data;d.setAll(Da(i)),d.setAll(u),o.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,t,e):(function(i,o,c){o.convertToNoDocument(c.version).setHasCommittedMutations()})(0,t,e)}function Ye(n,t,e,r){return n instanceof un?(function(o,c,u,d){if(!$n(o.precondition,c))return u;const m=o.value.clone(),I=_o(o.fieldTransforms,d,c);return m.setAll(I),c.convertToFoundDocument(c.version,m).setHasLocalMutations(),null})(n,t,e,r):n instanceof ue?(function(o,c,u,d){if(!$n(o.precondition,c))return u;const m=_o(o.fieldTransforms,d,c),I=c.data;return I.setAll(Da(o)),I.setAll(m),c.convertToFoundDocument(c.version,I).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((A=>A.field)))})(n,t,e,r):(function(o,c,u){return $n(o.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):u})(n,t,e)}function Sh(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=Sa(r.transform,i||null);o!=null&&(e===null&&(e=Ct.empty()),e.set(r.field,o))}return e||null}function po(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Te(r,i,((o,c)=>Ah(o,c)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class un extends ur{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ue extends ur{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Da(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function go(n,t,e){const r=new Map;J(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let i=0;i<e.length;i++){const o=n[i],c=o.transform,u=t.data.field(o.field);r.set(o.field,wh(c,u,e[i]))}return r}function _o(n,t,e){const r=new Map;for(const i of n){const o=i.transform,c=e.data.field(i.field);r.set(i.field,Ih(o,c,t))}return r}class Na extends ur{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ch extends ur{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&bh(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Ye(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Ye(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ra();return this.mutations.forEach((i=>{const o=t.get(i.key),c=o.overlayedDocument;let u=this.applyToLocalView(c,o.mutatedFields);u=e.has(i.key)?null:u;const d=xa(c,u);d!==null&&r.set(i.key,d),c.isValidDocument()||c.convertToNoDocument(W.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),_t())}isEqual(t){return this.batchId===t.batchId&&Te(this.mutations,t.mutations,((e,r)=>po(e,r)))&&Te(this.baseMutations,t.baseMutations,((e,r)=>po(e,r)))}}class Vs{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){J(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=(function(){return _h})();const o=t.mutations;for(let c=0;c<o.length;c++)i=i.insert(o[c].key,r[c].version);return new Vs(t,e,r,i)}}/**
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
 */class Vh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var Z,F;function xh(n){switch(n){case S.OK:return L(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function Dh(n){if(n===void 0)return oe("GRPC error has no .code"),S.UNKNOWN;switch(n){case Z.OK:return S.OK;case Z.CANCELLED:return S.CANCELLED;case Z.UNKNOWN:return S.UNKNOWN;case Z.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Z.INTERNAL:return S.INTERNAL;case Z.UNAVAILABLE:return S.UNAVAILABLE;case Z.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Z.NOT_FOUND:return S.NOT_FOUND;case Z.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Z.ABORTED:return S.ABORTED;case Z.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Z.DATA_LOSS:return S.DATA_LOSS;default:return L(39323,{code:n})}}(F=Z||(Z={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ps([4294967295,4294967295],0);class Nh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function as(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function kh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Oh(n,t){return as(n,t.toTimestamp())}function Ee(n){return J(!!n,49232),W.fromTimestamp((function(e){const r=ae(e);return new Q(r.seconds,r.nanos)})(n))}function ka(n,t){return ls(n,t).canonicalString()}function ls(n,t){const e=(function(i){return new Y(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Mh(n){const t=Y.fromString(n);return J(zh(t),10190,{key:t.toString()}),t}function cs(n,t){return ka(n.databaseId,t.path)}function Lh(n){const t=Mh(n);return t.length===4?Y.emptyPath():Uh(t)}function Fh(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Uh(n){return J(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function yo(n,t,e){return{name:cs(n,t),fields:e.value.mapValue.fields}}function jh(n,t){let e;if(t instanceof un)e={update:yo(n,t.key,t.value)};else if(t instanceof Na)e={delete:cs(n,t.key)};else if(t instanceof ue)e={update:yo(n,t.key,t.data),updateMask:qh(t.fieldMask)};else{if(!(t instanceof Ch))return L(16599,{Vt:t.type});e={verify:cs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,c){const u=c.transform;if(u instanceof nr)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof sn)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof on)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof rr)return{fieldPath:c.field.canonicalString(),increment:u.Ae};throw L(20930,{transform:c.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:Oh(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L(27497)})(n,t.precondition)),e}function Bh(n,t){return n&&n.length>0?(J(t!==void 0,14353),n.map((e=>(function(i,o){let c=i.updateTime?Ee(i.updateTime):Ee(o);return c.isEqual(W.min())&&(c=Ee(o)),new Rh(c,i.transformResults||[])})(e,t)))):[]}function $h(n){let t=Lh(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){J(r===1,65062);const I=e.from[0];I.allDescendants?i=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=(function(A){const R=Oa(A);return R instanceof Wt&&_a(R)?R.getFilters():[R]})(e.where));let c=[];e.orderBy&&(c=(function(A){return A.map((R=>(function(P){return new tr(ge(P.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(R)))})(e.orderBy));let u=null;e.limit&&(u=(function(A){let R;return R=typeof A=="object"?A.value:A,Is(R)?null:R})(e.limit));let d=null;e.startAt&&(d=(function(A){const R=!!A.before,x=A.values||[];return new Zn(x,R)})(e.startAt));let m=null;return e.endAt&&(m=(function(A){const R=!A.before,x=A.values||[];return new Zn(x,R)})(e.endAt)),uh(t,i,c,o,u,"F",d,m)}function Oa(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ge(e.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ge(e.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ge(e.unaryFilter.field);return st.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=ge(e.unaryFilter.field);return st.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(n):n.fieldFilter!==void 0?(function(e){return st.create(ge(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Wt.create(e.compositeFilter.filters.map((r=>Oa(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(e.compositeFilter.op))})(n):L(30097,{filter:n})}function ge(n){return ct.fromServerFormat(n.fieldPath)}function qh(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function zh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t){this.yt=t}}function Gh(n){const t=$h({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?os(t,t.limit,"L"):t}/**
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
 */class Kh{constructor(){this.Cn=new Wh}addToCollectionParentIndex(t,e){return this.Cn.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(Kt.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(Kt.min())}updateCollectionGroup(t,e,r){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class Wh{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ut(Y.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ut(Y.comparator)).toArray()}}/**
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
 */const Eo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ma=41943040;class It{static withCacheSize(t){return new It(t,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(Ma,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Re(0)}static cr(){return new Re(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo="LruGarbageCollector",Qh=1048576;function To([n,t],[e,r]){const i=q(n,e);return i===0?q(t,r):i}class Xh{constructor(t){this.Ir=t,this.buffer=new ut(To),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();To(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Jh{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){D(vo,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){cn(e)?D(vo,"Ignoring IndexedDB error during garbage collection: ",e):await Es(e)}await this.Vr(3e5)}))}}class Yh{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return b.resolve(vs.ce);const r=new Xh(e);return this.mr.forEachTarget(t,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(t,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Eo)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Eo):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,i,o,c,u,d,m;const I=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),i=this.params.maximumSequenceNumbersToCollect):i=A,c=Date.now(),this.nthSequenceNumber(t,i)))).next((A=>(r=A,u=Date.now(),this.removeTargets(t,r,e)))).next((A=>(o=A,d=Date.now(),this.removeOrphanedDocuments(t,r)))).next((A=>(m=Date.now(),pe()<=U.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-I}ms
	Determined least recently used ${i} in `+(u-c)+`ms
	Removed ${o} targets in `+(d-u)+`ms
	Removed ${A} documents in `+(m-d)+`ms
Total Duration: ${m-I}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:A}))))}}function Zh(n,t){return new Yh(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this.changes=new ce((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,St.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?b.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ed{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(r=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(r!==null&&Ye(r.mutation,i,Vt.empty(),Q.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,_t()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=_t()){const i=ne();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,r).next((o=>{let c=Mn();return o.forEach(((u,d)=>{c=c.insert(u,d.overlayedDocument)})),c}))))}getOverlayedDocuments(t,e){const r=ne();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,_t())))}populateOverlays(t,e,r){const i=[];return r.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((c,u)=>{e.set(c,u)}))}))}computeViews(t,e,r,i){let o=er();const c=Je(),u=(function(){return Je()})();return e.forEach(((d,m)=>{const I=r.get(m.key);i.has(m.key)&&(I===void 0||I.mutation instanceof ue)?o=o.insert(m.key,m):I!==void 0?(c.set(m.key,I.mutation.getFieldMask()),Ye(I.mutation,m,I.mutation.getFieldMask(),Q.now())):c.set(m.key,Vt.empty())})),this.recalculateAndSaveOverlays(t,o).next((d=>(d.forEach(((m,I)=>c.set(m,I))),e.forEach(((m,I)=>u.set(m,new ed(I,c.get(m)??null)))),u)))}recalculateAndSaveOverlays(t,e){const r=Je();let i=new wt(((c,u)=>c-u)),o=_t();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((c=>{for(const u of c)u.keys().forEach((d=>{const m=e.get(d);if(m===null)return;let I=r.get(d)||Vt.empty();I=u.applyToLocalView(m,I),r.set(d,I);const A=(i.get(u.batchId)||_t()).add(d);i=i.insert(u.batchId,A)}))})).next((()=>{const c=[],u=i.getReverseIterator();for(;u.hasNext();){const d=u.getNext(),m=d.key,I=d.value,A=Ra();I.forEach((R=>{if(!o.has(R)){const x=xa(e.get(R),r.get(R));x!==null&&A.set(R,x),o=o.add(R)}})),c.push(this.documentOverlayCache.saveOverlays(t,m,A))}return b.waitFor(c)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,i){return(function(c){return M.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):dh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next((o=>{const c=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):b.resolve(ne());let u=nn,d=o;return c.next((m=>b.forEach(m,((I,A)=>(u<A.largestBatchId&&(u=A.largestBatchId),o.get(I)?b.resolve():this.remoteDocumentCache.getEntry(t,I).next((R=>{d=d.insert(I,R)}))))).next((()=>this.populateOverlays(t,m,o))).next((()=>this.computeViews(t,d,m,_t()))).next((I=>({batchId:u,changes:Aa(I)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next((r=>{let i=Mn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let c=Mn();return this.indexManager.getCollectionParents(t,o).next((u=>b.forEach(u,(d=>{const m=(function(A,R){return new lr(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,m,r,i).next((I=>{I.forEach(((A,R)=>{c=c.insert(A,R)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((c=>(o=c,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i)))).next((c=>{o.forEach(((d,m)=>{const I=m.getKey();c.get(I)===null&&(c=c.insert(I,St.newInvalidDocument(I)))}));let u=Mn();return c.forEach(((d,m)=>{const I=o.get(d);I!==void 0&&Ye(I.mutation,m,Vt.empty(),Q.now()),Cs(e,m)&&(u=u.insert(d,m))})),u}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return b.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:Ee(i.createTime)}})(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(i){return{name:i.name,query:Gh(i.bundledQuery),readTime:Ee(i.readTime)}})(e)),b.resolve()}}/**
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
 */class sd{constructor(){this.overlays=new wt(M.comparator),this.qr=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ne();return b.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((i,o)=>{this.St(t,e,o)})),b.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),b.resolve()}getOverlaysForCollection(t,e,r){const i=ne(),o=e.length+1,c=new M(e.child("")),u=this.overlays.getIteratorFrom(c);for(;u.hasNext();){const d=u.getNext().value,m=d.getKey();if(!e.isPrefixOf(m.path))break;m.path.length===o&&d.largestBatchId>r&&i.set(d.getKey(),d)}return b.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new wt(((m,I)=>m-I));const c=this.overlays.getIterator();for(;c.hasNext();){const m=c.getNext().value;if(m.getKey().getCollectionGroup()===e&&m.largestBatchId>r){let I=o.get(m.largestBatchId);I===null&&(I=ne(),o=o.insert(m.largestBatchId,I)),I.set(m.getKey(),m)}}const u=ne(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach(((m,I)=>u.set(m,I))),!(u.size()>=i)););return b.resolve(u)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new Vh(e,r));let o=this.qr.get(e);o===void 0&&(o=_t(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
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
 */class id{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(t){return b.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.Qr=new ut(rt.$r),this.Ur=new ut(rt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new rt(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new rt(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new M(new Y([])),r=new rt(e,t),i=new rt(e,t+1),o=[];return this.Ur.forEachInRange([r,i],(c=>{this.Gr(c),o.push(c.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new M(new Y([])),r=new rt(e,t),i=new rt(e,t+1);let o=_t();return this.Ur.forEachInRange([r,i],(c=>{o=o.add(c.key)})),o}containsKey(t){const e=new rt(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class rt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return M.comparator(t.key,e.key)||q(t.Yr,e.Yr)}static Kr(t,e){return q(t.Yr,e.Yr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new ut(rt.$r)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new Ph(o,e,r,i);this.mutationQueue.push(c);for(const u of i)this.Zr=this.Zr.add(new rt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return b.resolve(c)}lookupMutationBatch(t,e){return b.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ei(r),o=i<0?0:i;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Ts:this.tr-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new rt(e,0),i=new rt(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,i],(c=>{const u=this.Xr(c.Yr);o.push(u)})),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ut(q);return e.forEach((i=>{const o=new rt(i,0),c=new rt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,c],(u=>{r=r.add(u.Yr)}))})),b.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const c=new rt(new M(o),0);let u=new ut(q);return this.Zr.forEachWhile((d=>{const m=d.key.path;return!!r.isPrefixOf(m)&&(m.length===i&&(u=u.add(d.Yr)),!0)}),c),b.resolve(this.ti(u))}ti(t){const e=[];return t.forEach((r=>{const i=this.Xr(r);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){J(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return b.forEach(e.mutations,(i=>{const o=new rt(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new rt(e,0),i=this.Zr.firstAfterOrEqual(r);return b.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(t){this.ri=t,this.docs=(function(){return new wt(M.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,c=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:c}),this.size+=c-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return b.resolve(r?r.document.mutableCopy():St.newInvalidDocument(e))}getEntries(t,e){let r=er();return e.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():St.newInvalidDocument(i))})),b.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=er();const c=e.path,u=new M(c.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(u);for(;d.hasNext();){const{key:m,value:{document:I}}=d.getNext();if(!c.isPrefixOf(m.path))break;m.path.length>c.length+1||Bu(ju(I),r)<=0||(i.has(I.key)||Cs(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(t,e,r,i){L(9500)}ii(t,e){return b.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new ld(this)}getSize(t){return b.resolve(this.size)}}class ld extends td{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(r)})),b.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(t){this.persistence=t,this.si=new ce((e=>bs(e)),Ss),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.oi=0,this._i=new xs,this.targetCount=0,this.ai=Re.ur()}forEachTarget(t,e){return this.si.forEach(((r,i)=>e(i))),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),b.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Re(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.Pr(e),b.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.si.forEach(((c,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.si.delete(c),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),i++)})),b.waitFor(o).next((()=>i))}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return b.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),b.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((c=>{o.push(i.markPotentiallyOrphaned(t,c))})),b.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),b.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return b.resolve(r)}containsKey(t,e){return b.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t,e){this.ui={},this.overlays={},this.ci=new vs(0),this.li=!1,this.li=!0,this.hi=new id,this.referenceDelegate=t(this),this.Pi=new cd(this),this.indexManager=new Kh,this.remoteDocumentCache=(function(i){return new ad(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Hh(e),this.Ii=new rd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new sd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new od(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const i=new ud(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ai(t,e){return b.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class ud extends qu{constructor(t){super(),this.currentSequenceNumber=t}}class Ds{constructor(t){this.persistence=t,this.Ri=new xs,this.Vi=null}static mi(t){return new Ds(t)}get fi(){if(this.Vi)return this.Vi;throw L(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),b.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),b.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.fi,(r=>{const i=M.fromPath(r);return this.gi(t,i).next((o=>{o||e.removeEntry(i,W.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return b.or([()=>b.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class sr{constructor(t,e){this.persistence=t,this.pi=new ce((r=>Gu(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=Zh(this,e)}static mi(t,e){return new sr(t,e)}Ei(){}di(t){return b.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((i=>r+i))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return b.forEach(this.pi,((r,i)=>this.br(t,r,i).next((o=>o?b.resolve():e(i)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,(c=>this.br(t,c,e).next((u=>{u||(r++,o.removeEntry(c,W.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),b.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),b.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),b.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),b.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=jn(t.data.value)),e}br(t,e,r){return b.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=i}static As(t,e){let r=_t(),i=_t();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ns(t,e.fromCache,r,i)}}/**
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
 */class hd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class dd{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return ac()?8:zu(ic())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ys(t,e).next((c=>{o.result=c})).next((()=>{if(!o.result)return this.ws(t,e,i,r).next((c=>{o.result=c}))})).next((()=>{if(o.result)return;const c=new hd;return this.Ss(t,e,c).next((u=>{if(o.result=u,this.Vs)return this.bs(t,e,c,u.size)}))})).next((()=>o.result))}bs(t,e,r,i){return r.documentReadCount<this.fs?(pe()<=U.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Ge(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),b.resolve()):(pe()<=U.DEBUG&&D("QueryEngine","Query:",Ge(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(pe()<=U.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Ge(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,se(e))):b.resolve())}ys(t,e){if(fo(e))return b.resolve(null);let r=se(e);return this.indexManager.getIndexType(t,r).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=os(e,null,"F"),r=se(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const c=_t(...o);return this.ps.getDocuments(t,c).next((u=>this.indexManager.getMinOffset(t,r).next((d=>{const m=this.Ds(e,u);return this.Cs(e,m,c,d.readTime)?this.ys(t,os(e,null,"F")):this.vs(t,m,e,d)}))))})))))}ws(t,e,r,i){return fo(e)||i.isEqual(W.min())?b.resolve(null):this.ps.getDocuments(t,r).next((o=>{const c=this.Ds(e,o);return this.Cs(e,c,r,i)?b.resolve(null):(pe()<=U.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ge(e)),this.vs(t,c,e,Uu(i,nn)).next((u=>u)))}))}Ds(t,e){let r=new ut(mh(t));return e.forEach(((i,o)=>{Cs(t,o)&&(r=r.add(o))})),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,r){return pe()<=U.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Ge(e)),this.ps.getDocumentsMatchingQuery(t,e,Kt.min(),r)}vs(t,e,r,i){return this.ps.getDocumentsMatchingQuery(t,r,i).next((o=>(e.forEach((c=>{o=o.insert(c.key,c)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="LocalStore";class md{constructor(t,e,r,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new wt(q),this.xs=new ce((o=>bs(o)),Ss),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new nd(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function pd(n,t,e,r){return new md(n,t,e,r)}async function Fa(n,t){const e=G(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const c=[],u=[];let d=_t();for(const m of i){c.push(m.batchId);for(const I of m.mutations)d=d.add(I.key)}for(const m of o){u.push(m.batchId);for(const I of m.mutations)d=d.add(I.key)}return e.localDocuments.getDocuments(r,d).next((m=>({Ls:m,removedBatchIds:c,addedBatchIds:u})))}))}))}function gd(n,t){const e=G(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(u,d,m,I){const A=m.batch,R=A.keys();let x=b.resolve();return R.forEach((P=>{x=x.next((()=>I.getEntry(d,P))).next((O=>{const N=m.docVersions.get(P);J(N!==null,48541),O.version.compareTo(N)<0&&(A.applyToRemoteDocument(O,m),O.isValidDocument()&&(O.setReadTime(m.commitVersion),I.addEntry(O)))}))})),x.next((()=>u.mutationQueue.removeMutationBatch(d,A)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(u){let d=_t();for(let m=0;m<u.mutationResults.length;++m)u.mutationResults[m].transformResults.length>0&&(d=d.add(u.batch.mutations[m].key));return d})(t)))).next((()=>e.localDocuments.getDocuments(r,i)))}))}function _d(n){const t=G(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function yd(n,t){const e=G(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Ts),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}class Io{constructor(){this.activeTargetIds=vh()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ed{constructor(){this.Mo=new Io,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Io,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class vd{Oo(t){}shutdown(){}}/**
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
 */const wo="ConnectivityMonitor";class Ao{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){D(wo,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){D(wo,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ln=null;function us(){return Ln===null?Ln=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ln++,"0x"+Ln.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="RestConnection",Td={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Id{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Jn?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(t,e,r,i,o){const c=us(),u=this.zo(t,e.toUriEncodedString());D(zr,`Sending RPC '${t}' ${c}:`,u,r);const d={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(d,i,o);const{host:m}=new URL(u),I=fs(m);return this.Jo(t,u,d,r,I).then((A=>(D(zr,`Received RPC '${t}' ${c}: `,A),A)),(A=>{throw ar(zr,`RPC '${t}' ${c} failed with error: `,A,"url: ",u,"request:",r),A}))}Ho(t,e,r,i,o,c){return this.Go(t,e,r,i,o)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Se})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),r&&r.headers.forEach(((i,o)=>t[o]=i))}zo(t,e){const r=Td[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class Ad extends Id{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,o){const c=us();return new Promise(((u,d)=>{const m=new Yo;m.setWithCredentials(!0),m.listenOnce(Zo.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case Un.NO_ERROR:const A=m.getResponseJson();D(pt,`XHR for RPC '${t}' ${c} received:`,JSON.stringify(A)),u(A);break;case Un.TIMEOUT:D(pt,`RPC '${t}' ${c} timed out`),d(new k(S.DEADLINE_EXCEEDED,"Request time out"));break;case Un.HTTP_ERROR:const R=m.getStatus();if(D(pt,`RPC '${t}' ${c} failed with status:`,R,"response text:",m.getResponseText()),R>0){let x=m.getResponseJson();Array.isArray(x)&&(x=x[0]);const P=x?.error;if(P&&P.status&&P.message){const O=(function(z){const j=z.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(j)>=0?j:S.UNKNOWN})(P.status);d(new k(O,P.message))}else d(new k(S.UNKNOWN,"Server responded with status "+m.getStatus()))}else d(new k(S.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:t,streamId:c,h_:m.getLastErrorCode(),P_:m.getLastError()})}}finally{D(pt,`RPC '${t}' ${c} completed.`)}}));const I=JSON.stringify(i);D(pt,`RPC '${t}' ${c} sending request:`,i),m.send(e,"POST",I,r,15)}))}T_(t,e,r){const i=us(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],c=na(),u=ea(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(d.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(d.useFetchStreams=!0),this.jo(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const I=o.join("");D(pt,`Creating RPC '${t}' stream ${i}: ${I}`,d);const A=c.createWebChannel(I,d);this.I_(A);let R=!1,x=!1;const P=new wd({Yo:N=>{x?D(pt,`Not sending because RPC '${t}' stream ${i} is closed:`,N):(R||(D(pt,`Opening RPC '${t}' stream ${i} transport.`),A.open(),R=!0),D(pt,`RPC '${t}' stream ${i} sending:`,N),A.send(N))},Zo:()=>A.close()}),O=(N,z,j)=>{N.listen(z,($=>{try{j($)}catch(et){setTimeout((()=>{throw et}),0)}}))};return O(A,Ke.EventType.OPEN,(()=>{x||(D(pt,`RPC '${t}' stream ${i} transport opened.`),P.o_())})),O(A,Ke.EventType.CLOSE,(()=>{x||(x=!0,D(pt,`RPC '${t}' stream ${i} transport closed`),P.a_(),this.E_(A))})),O(A,Ke.EventType.ERROR,(N=>{x||(x=!0,ar(pt,`RPC '${t}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),P.a_(new k(S.UNAVAILABLE,"The operation could not be completed")))})),O(A,Ke.EventType.MESSAGE,(N=>{if(!x){const z=N.data[0];J(!!z,16349);const j=z,$=j?.error||j[0]?.error;if($){D(pt,`RPC '${t}' stream ${i} received error:`,$);const et=$.status;let Rt=(function(f){const p=Z[f];if(p!==void 0)return Dh(p)})(et),Et=$.message;Rt===void 0&&(Rt=S.INTERNAL,Et="Unknown error status: "+et+" with message "+$.message),x=!0,P.a_(new k(Rt,Et)),A.close()}else D(pt,`RPC '${t}' stream ${i} received:`,z),P.u_(z)}})),O(u,ta.STAT_EVENT,(N=>{N.stat===Zr.PROXY?D(pt,`RPC '${t}' stream ${i} detected buffering proxy`):N.stat===Zr.NOPROXY&&D(pt,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{P.__()}),0),P}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function Hr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n){return new Nh(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="PersistentStream";class Rd{constructor(t,e,r,i,o,c,u,d){this.Mi=t,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=u,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ua(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(oe(e.toString()),oe("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===e&&this.G_(r,i)}),(r=>{t((()=>{const i=new k(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return D(Ro,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(D(Ro,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class bd extends Rd{constructor(t,e,r,i,o,c){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,c),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return J(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,J(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){J(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Bh(t.writeResults,t.commitTime),r=Ee(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Fh(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>jh(this.serializer,r)))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{}class Cd extends Sd{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new k(S.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Go(t,ls(e,r),i,o,c))).catch((o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(S.UNKNOWN,o.toString())}))}Ho(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,u])=>this.connection.Ho(t,ls(e,r),i,c,u,o))).catch((c=>{throw c.name==="FirebaseError"?(c.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new k(S.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Pd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(oe(e),this.aa=!1):D("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="RemoteStore";class Vd{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((c=>{r.enqueueAndForget((async()=>{fn(this)&&(D(hn,"Restarting streams for network reachability change."),await(async function(d){const m=G(d);m.Ea.add(4),await dn(m),m.Ra.set("Unknown"),m.Ea.delete(4),await dr(m)})(this))}))})),this.Ra=new Pd(r,i)}}async function dr(n){if(fn(n))for(const t of n.da)await t(!0)}async function dn(n){for(const t of n.da)await t(!1)}function fn(n){return G(n).Ea.size===0}async function ja(n,t,e){if(!cn(t))throw t;n.Ea.add(1),await dn(n),n.Ra.set("Offline"),e||(e=()=>_d(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{D(hn,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await dr(n)}))}function Ba(n,t){return t().catch((e=>ja(n,e,t)))}async function fr(n){const t=G(n),e=Qt(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Ts;for(;xd(t);)try{const i=await yd(t.localStore,r);if(i===null){t.Ta.length===0&&e.L_();break}r=i.batchId,Dd(t,i)}catch(i){await ja(t,i)}$a(t)&&qa(t)}function xd(n){return fn(n)&&n.Ta.length<10}function Dd(n,t){n.Ta.push(t);const e=Qt(n);e.O_()&&e.X_&&e.ea(t.mutations)}function $a(n){return fn(n)&&!Qt(n).x_()&&n.Ta.length>0}function qa(n){Qt(n).start()}async function Nd(n){Qt(n).ra()}async function kd(n){const t=Qt(n);for(const e of n.Ta)t.ea(e.mutations)}async function Od(n,t,e){const r=n.Ta.shift(),i=Vs.from(r,t,e);await Ba(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await fr(n)}async function Md(n,t){t&&Qt(n).X_&&await(async function(r,i){if((function(c){return xh(c)&&c!==S.ABORTED})(i.code)){const o=r.Ta.shift();Qt(r).B_(),await Ba(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i))),await fr(r)}})(n,t),$a(n)&&qa(n)}async function bo(n,t){const e=G(n);e.asyncQueue.verifyOperationInProgress(),D(hn,"RemoteStore received new credentials");const r=fn(e);e.Ea.add(3),await dn(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await dr(e)}async function Ld(n,t){const e=G(n);t?(e.Ea.delete(2),await dr(e)):t||(e.Ea.add(2),await dn(e),e.Ra.set("Unknown"))}function Qt(n){return n.fa||(n.fa=(function(e,r,i){const o=G(e);return o.sa(),new bd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Nd.bind(null,n),r_:Md.bind(null,n),ta:kd.bind(null,n),na:Od.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await fr(n)):(await n.fa.stop(),n.Ta.length>0&&(D(hn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const c=Date.now()+r,u=new ks(t,e,c,i,o);return u.start(r),u}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function za(n,t){if(oe("AsyncQueue",`${t}: ${n}`),cn(n))return new k(S.UNAVAILABLE,`${t}: ${n}`);throw n}class Fd{constructor(){this.queries=So(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=G(e),o=i.queries;i.queries=So(),o.forEach(((c,u)=>{for(const d of u.Sa)d.onError(r)}))})(this,new k(S.ABORTED,"Firestore shutting down"))}}function So(){return new ce((n=>Ia(n)),Ta)}function Ud(n){n.Ca.forEach((t=>{t.next()}))}var Co,Po;(Po=Co||(Co={})).Ma="default",Po.Cache="cache";const jd="SyncEngine";class Bd{constructor(t,e,r,i,o,c){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new ce((u=>Ia(u)),Ta),this.Iu=new Map,this.Eu=new Set,this.du=new wt(M.comparator),this.Au=new Map,this.Ru=new xs,this.Vu={},this.mu=new Map,this.fu=Re.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function $d(n,t,e){const r=Gd(n);try{const i=await(function(c,u){const d=G(c),m=Q.now(),I=u.reduce(((x,P)=>x.add(P.key)),_t());let A,R;return d.persistence.runTransaction("Locally write mutations","readwrite",(x=>{let P=er(),O=_t();return d.Ns.getEntries(x,I).next((N=>{P=N,P.forEach(((z,j)=>{j.isValidDocument()||(O=O.add(z))}))})).next((()=>d.localDocuments.getOverlayedDocuments(x,P))).next((N=>{A=N;const z=[];for(const j of u){const $=Sh(j,A.get(j.key).overlayedDocument);$!=null&&z.push(new ue(j.key,$,ma($.value.mapValue),Lt.exists(!0)))}return d.mutationQueue.addMutationBatch(x,m,z,u)})).next((N=>{R=N;const z=N.applyToLocalDocumentSet(A,O);return d.documentOverlayCache.saveOverlays(x,N.batchId,z)}))})).then((()=>({batchId:R.batchId,changes:Aa(A)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),(function(c,u,d){let m=c.Vu[c.currentUser.toKey()];m||(m=new wt(q)),m=m.insert(u,d),c.Vu[c.currentUser.toKey()]=m})(r,i.batchId,e),await mr(r,i.changes),await fr(r.remoteStore)}catch(i){const o=za(i,"Failed to persist write");e.reject(o)}}function Vo(n,t,e){const r=G(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach(((o,c)=>{const u=c.view.va(t);u.snapshot&&i.push(u.snapshot)})),(function(c,u){const d=G(c);d.onlineState=u;let m=!1;d.queries.forEach(((I,A)=>{for(const R of A.Sa)R.va(u)&&(m=!0)})),m&&Ud(d)})(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function qd(n,t){const e=G(n),r=t.batch.batchId;try{const i=await gd(e.localStore,t);Ga(e,r,null),Ha(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await mr(e,i)}catch(i){await Es(i)}}async function zd(n,t,e){const r=G(n);try{const i=await(function(c,u){const d=G(c);return d.persistence.runTransaction("Reject batch","readwrite-primary",(m=>{let I;return d.mutationQueue.lookupMutationBatch(m,u).next((A=>(J(A!==null,37113),I=A.keys(),d.mutationQueue.removeMutationBatch(m,A)))).next((()=>d.mutationQueue.performConsistencyCheck(m))).next((()=>d.documentOverlayCache.removeOverlaysForBatchId(m,I,u))).next((()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,I))).next((()=>d.localDocuments.getDocuments(m,I)))}))})(r.localStore,t);Ga(r,t,e),Ha(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await mr(r,i)}catch(i){await Es(i)}}function Ha(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function Ga(n,t,e){const r=G(n);let i=r.Vu[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Vu[r.currentUser.toKey()]=i}}async function mr(n,t,e){const r=G(n),i=[],o=[],c=[];r.Tu.isEmpty()||(r.Tu.forEach(((u,d)=>{c.push(r.pu(d,t,e).then((m=>{if((m||e)&&r.isPrimaryClient){const I=m?!m.fromCache:e?.targetChanges.get(d.targetId)?.current;r.sharedClientState.updateQueryState(d.targetId,I?"current":"not-current")}if(m){i.push(m);const I=Ns.As(d.targetId,m);o.push(I)}})))})),await Promise.all(c),r.Pu.H_(i),await(async function(d,m){const I=G(d);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>b.forEach(m,(R=>b.forEach(R.Es,(x=>I.persistence.referenceDelegate.addReference(A,R.targetId,x))).next((()=>b.forEach(R.ds,(x=>I.persistence.referenceDelegate.removeReference(A,R.targetId,x)))))))))}catch(A){if(!cn(A))throw A;D(fd,"Failed to update sequence numbers: "+A)}for(const A of m){const R=A.targetId;if(!A.fromCache){const x=I.Ms.get(R),P=x.snapshotVersion,O=x.withLastLimboFreeSnapshotVersion(P);I.Ms=I.Ms.insert(R,O)}}})(r.localStore,o))}async function Hd(n,t){const e=G(n);if(!e.currentUser.isEqual(t)){D(jd,"User change. New user:",t.toKey());const r=await Fa(e.localStore,t);e.currentUser=t,(function(o,c){o.mu.forEach((u=>{u.forEach((d=>{d.reject(new k(S.CANCELLED,c))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await mr(e,r.Ls)}}function Gd(n){const t=G(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=qd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=zd.bind(null,t),t}class ir{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=hr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return pd(this.persistence,new dd,t.initialUser,this.serializer)}Cu(t){return new La(Ds.mi,this.serializer)}Du(t){return new Ed}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ir.provider={build:()=>new ir};class Kd extends ir{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){J(this.persistence.referenceDelegate instanceof sr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Jh(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new La((r=>sr.mi(r,e)),this.serializer)}}class hs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hd.bind(null,this.syncEngine),await Ld(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Fd})()}createDatastore(t){const e=hr(t.databaseInfo.databaseId),r=(function(o){return new Ad(o)})(t.databaseInfo);return(function(o,c,u,d){return new Cd(o,c,u,d)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,i,o,c,u){return new Vd(r,i,o,c,u)})(this.localStore,this.datastore,t.asyncQueue,(e=>Vo(this.syncEngine,e,0)),(function(){return Ao.v()?new Ao:new vd})())}createSyncEngine(t,e){return(function(i,o,c,u,d,m,I){const A=new Bd(i,o,c,u,d,m);return I&&(A.gu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const r=G(e);D(hn,"RemoteStore shutting down."),r.Ea.add(5),await dn(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}hs.provider={build:()=>new hs};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="FirestoreClient";class Wd{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=_s.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async c=>{D(Xt,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(r,(c=>(D(Xt,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new re;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=za(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Gr(n,t){n.asyncQueue.verifyOperationInProgress(),D(Xt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Fa(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function xo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Qd(n);D(Xt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>bo(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>bo(t.remoteStore,i))),n._onlineComponents=t}async function Qd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(Xt,"Using user provided OfflineComponentProvider");try{await Gr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;ar("Error using user provided cache. Falling back to memory cache: "+e),await Gr(n,new ir)}}else D(Xt,"Using default OfflineComponentProvider"),await Gr(n,new Kd(void 0));return n._offlineComponents}async function Xd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(Xt,"Using user provided OnlineComponentProvider"),await xo(n,n._uninitializedComponentsProvider._online)):(D(Xt,"Using default OnlineComponentProvider"),await xo(n,new hs))),n._onlineComponents}function Jd(n){return Xd(n).then((t=>t.syncEngine))}/**
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
 */function Ka(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="firestore.googleapis.com",No=!0;class ko{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new k(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wa,this.ssl=No}else this.host=t.host,this.ssl=t.ssl??No;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Ma;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Qh)throw new k(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Fu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ka(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Os{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ko({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ko(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Su;switch(r.type){case"firstParty":return new xu(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Do.get(e);r&&(D("ComponentProvider","Removing Datastore"),Do.delete(e),r.terminate())})(this),Promise.resolve()}}function Yd(n,t,e,r={}){n=es(n,Os);const i=fs(t),o=n._getSettings(),c={...o,emulatorOptions:n._getEmulatorOptions()},u=`${t}:${e}`;i&&(tc(`https://${u}`),sc("Firestore",!0)),o.host!==Wa&&o.host!==u&&ar("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...o,host:u,ssl:i,emulatorOptions:r};if(!Hn(d,c)&&(n._setSettings(d),r.mockUserToken)){let m,I;if(typeof r.mockUserToken=="string")m=r.mockUserToken,I=gt.MOCK_USER;else{m=ec(r.mockUserToken,n._app?.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new k(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new gt(A)}n._authCredentials=new Cu(new sa(m,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ms(this.firestore,t,this._query)}}class yt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new an(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yt(this.firestore,t,this._key)}toJSON(){return{type:yt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(ln(e,yt._jsonSchema))return new yt(t,r||null,new M(Y.fromString(e.referencePath)))}}yt._jsonSchemaVersion="firestore/documentReference/1.0",yt._jsonSchema={type:tt("string",yt._jsonSchemaVersion),referencePath:tt("string")};class an extends Ms{constructor(t,e,r){super(t,e,hh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yt(this.firestore,null,new M(t))}withConverter(t){return new an(this.firestore,t,this._path)}}function Zd(n,t,...e){if(n=Gn(n),arguments.length===1&&(t=_s.newId()),Lu("doc","path",t),n instanceof Os){const r=Y.fromString(t,...e);return eo(r),new yt(n,null,new M(r))}{if(!(n instanceof yt||n instanceof an))throw new k(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return eo(r),new yt(n.firestore,n instanceof an?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="AsyncQueue";class Mo{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ua(this,"async_queue_retry"),this._c=()=>{const r=Hr();r&&D(Oo,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Hr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Hr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new re;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!cn(t))throw t;D(Oo,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,oe("INTERNAL UNHANDLED ERROR: ",Lo(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=ks.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&L(47125,{Pc:Lo(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Lo(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Qa extends Os{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Mo,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Mo(t),this._firestoreClient=void 0,await t}}}function tf(n,t){const e=typeof n=="object"?n:mu(),r=typeof n=="string"?n:Jn,i=cu(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Yl("firestore");o&&Yd(i,...o)}return i}function ef(n){if(n._terminated)throw new k(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||nf(n),n._firestoreClient}function nf(n){const t=n._freezeSettings(),e=(function(i,o,c,u){return new Xu(i,o,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Ka(u.experimentalLongPollingOptions),u.useFetchStreams,u.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Wd(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(i){const o=i?._online.build();return{_offline:i?._offline.build(o),_online:o}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pt(Dt.fromBase64String(t))}catch(e){throw new k(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Pt(Dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(ln(t,Pt._jsonSchema))return Pt.fromBase64String(t.bytes)}}Pt._jsonSchemaVersion="firestore/bytes/1.0",Pt._jsonSchema={type:tt("string",Pt._jsonSchemaVersion),bytes:tt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ft._jsonSchemaVersion}}static fromJSON(t){if(ln(t,Ft._jsonSchema))return new Ft(t.latitude,t.longitude)}}Ft._jsonSchemaVersion="firestore/geoPoint/1.0",Ft._jsonSchema={type:tt("string",Ft._jsonSchemaVersion),latitude:tt("number"),longitude:tt("number")};/**
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
 */class Ut{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ut._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(ln(t,Ut._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Ut(t.vectorValues);throw new k(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ut._jsonSchemaVersion="firestore/vectorValue/1.0",Ut._jsonSchema={type:tt("string",Ut._jsonSchemaVersion),vectorValues:tt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=/^__.*__$/;class sf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ue(t,this.data,this.fieldMask,e,this.fieldTransforms):new un(t,this.data,e,this.fieldTransforms)}}function Ja(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{Ac:n})}}class Fs{constructor(t,e,r,i,o,c){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Fs({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return or(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Ja(this.Ac)&&rf.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class of{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||hr(t)}Cc(t,e,r,i=!1){return new Fs({Ac:t,methodName:e,Dc:r,path:ct.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function af(n){const t=n._freezeSettings(),e=hr(n._databaseId);return new of(n._databaseId,!!t.ignoreUndefinedProperties,e)}function lf(n,t,e,r,i,o={}){const c=n.Cc(o.merge||o.mergeFields?2:0,t,e,i);el("Data must be an object, but it was:",c,r);const u=Za(r,c);let d,m;if(o.merge)d=new Vt(c.fieldMask),m=c.fieldTransforms;else if(o.mergeFields){const I=[];for(const A of o.mergeFields){const R=cf(t,A,e);if(!c.contains(R))throw new k(S.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);hf(I,R)||I.push(R)}d=new Vt(I),m=c.fieldTransforms.filter((A=>d.covers(A.field)))}else d=null,m=c.fieldTransforms;return new sf(new Ct(u),d,m)}function Ya(n,t){if(tl(n=Gn(n)))return el("Unsupported field value:",t,n),Za(n,t);if(n instanceof Xa)return(function(r,i){if(!Ja(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,i){const o=[];let c=0;for(const u of r){let d=Ya(u,i.wc(c));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),c++}return{arrayValue:{values:o}}})(n,t)}return(function(r,i){if((r=Gn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Th(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Q.fromDate(r);return{timestampValue:as(i.serializer,o)}}if(r instanceof Q){const o=new Q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:as(i.serializer,o)}}if(r instanceof Ft)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pt)return{bytesValue:kh(i.serializer,r._byteString)};if(r instanceof yt){const o=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(o))throw i.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ka(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ut)return(function(c,u){return{mapValue:{fields:{[da]:{stringValue:fa},[ns]:{arrayValue:{values:c.toArray().map((m=>{if(typeof m!="number")throw u.Sc("VectorValues must only contain numeric values.");return Ps(u.serializer,m)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${ys(r)}`)})(n,t)}function Za(n,t){const e={};return aa(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ce(n,((r,i)=>{const o=Ya(i,t.mc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function tl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Q||n instanceof Ft||n instanceof Pt||n instanceof yt||n instanceof Xa||n instanceof Ut)}function el(n,t,e){if(!tl(e)||!ia(e)){const r=ys(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function cf(n,t,e){if((t=Gn(t))instanceof Ls)return t._internalPath;if(typeof t=="string")return nl(n,t);throw or("Field path arguments must be of type string or ",n,!1,void 0,e)}const uf=new RegExp("[~\\*/\\[\\]]");function nl(n,t,e){if(t.search(uf)>=0)throw or(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ls(...t.split("."))._internalPath}catch{throw or(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function or(n,t,e,r,i){const o=r&&!r.isEmpty(),c=i!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let d="";return(o||c)&&(d+=" (found",o&&(d+=` in field ${r}`),c&&(d+=` in document ${i}`),d+=")"),new k(S.INVALID_ARGUMENT,u+n+d)}function hf(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new df(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(sl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class df extends rl{data(){return super.data()}}function sl(n,t){return typeof t=="string"?nl(n,t):t instanceof Ls?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Fn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ve extends rl{constructor(t,e,r,i,o,c){super(t,e,r,i,c),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(sl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=ve._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}ve._jsonSchemaVersion="firestore/documentSnapshot/1.0",ve._jsonSchema={type:tt("string",ve._jsonSchemaVersion),bundleSource:tt("string","DocumentSnapshot"),bundleName:tt("string"),bundle:tt("string")};class qn extends ve{data(t={}){return super.data(t)}}class Ze{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Fn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new qn(this._firestore,this._userDataWriter,r.key,r,new Fn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map((u=>{const d=new qn(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Fn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:d,oldIndex:-1,newIndex:c++}}))}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((u=>o||u.type!==3)).map((u=>{const d=new qn(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Fn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let m=-1,I=-1;return u.type!==0&&(m=c.indexOf(u.doc.key),c=c.delete(u.doc.key)),u.type!==1&&(c=c.add(u.doc),I=c.indexOf(u.doc.key)),{type:mf(u.type),doc:d,oldIndex:m,newIndex:I}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ze._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=_s.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function mf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}Ze._jsonSchemaVersion="firestore/querySnapshot/1.0",Ze._jsonSchema={type:tt("string",Ze._jsonSchemaVersion),bundleSource:tt("string","QuerySnapshot"),bundleName:tt("string"),bundle:tt("string")};function pf(n,t,e){n=es(n,yt);const r=es(n.firestore,Qa),i=ff(n.converter,t);return gf(r,[lf(af(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Lt.none())])}function gf(n,t){return(function(r,i){const o=new re;return r.asyncQueue.enqueueAndForget((async()=>$d(await Jd(r),i,o))),o.promise})(ef(n),t)}(function(t,e=!0){(function(i){Se=i})(fu),Wn(new tn("firestore",((r,{instanceIdentifier:i,options:o})=>{const c=r.getProvider("app").getImmediate(),u=new Qa(new Pu(r.getProvider("auth-internal")),new Du(c,r.getProvider("app-check-internal")),(function(m,I){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new k(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yn(m.options.projectId,I)})(c,i),c);return o={useFetchStreams:e,...o},u._setSettings(o),u}),"PUBLIC").setMultipleInstances(!0)),ye(Ji,Yi,t),ye(Ji,Yi,"esm2020")})();const _f={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0,measurementId:void 0},yf=Qo(_f),Ef=tf(yf),il=n=>n!=null&&typeof n=="string"&&n.trim().length>0,vf=n=>il(n)&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.trim()),ot=[];for(let n=0;n<256;++n)ot.push((n+256).toString(16).slice(1));function Tf(n,t=0){return(ot[n[t+0]]+ot[n[t+1]]+ot[n[t+2]]+ot[n[t+3]]+"-"+ot[n[t+4]]+ot[n[t+5]]+"-"+ot[n[t+6]]+ot[n[t+7]]+"-"+ot[n[t+8]]+ot[n[t+9]]+"-"+ot[n[t+10]]+ot[n[t+11]]+ot[n[t+12]]+ot[n[t+13]]+ot[n[t+14]]+ot[n[t+15]]).toLowerCase()}let Kr;const If=new Uint8Array(16);function wf(){if(!Kr){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Kr=crypto.getRandomValues.bind(crypto)}return Kr(If)}const Af=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Fo={randomUUID:Af};function Rf(n,t,e){n=n||{};const r=n.random??n.rng?.()??wf();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,Tf(r)}function bf(n,t,e){return Fo.randomUUID&&!n?Fo.randomUUID():Rf(n)}const Sf=async(n,t,e,r,i)=>{if(il(n)&&vf(t)&&r>0)try{const o=bf(),c=Zd(Ef,"clients",o);return await pf(c,{customerName:n,customerEmail:t,customerCountry:e,customerPhone:r,message:i,createdAt:new Date().toISOString()}),!0}catch{return!1}return!1};function Cf({toast:n}){return V.jsx(Bo,{children:n&&V.jsx(_e.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.22},className:"pointer-events-none fixed inset-0 z-[999] flex items-center justify-center",role:"status","aria-live":"polite",children:V.jsxs("div",{className:`pointer-events-auto rounded-2xl px-5 py-4 shadow-2xl text-center backdrop-blur-md
            ${n.type==="success"?"bg-green-900/90 text-green-50 border border-green-500/60":"bg-red-900/90 text-red-50 border border-red-500/60"}`,children:[V.jsx("div",{className:"text-3xl mb-1",children:n.type==="success"?"✅":"⚠️"}),V.jsx("p",{className:"text-base font-semibold",children:n.text}),n.sub&&V.jsx("p",{className:"text-sm opacity-90 mt-1",children:n.sub})]})})})}const Uo=n=>`https://flagcdn.com/24x18/${n.toLowerCase()}.png`,jo=[{id:1,name:"Afganistán",dial:"+93",iso2:"AF"},{id:2,name:"Albania",dial:"+355",iso2:"AL"},{id:3,name:"Alemania",dial:"+49",iso2:"DE"},{id:4,name:"Andorra",dial:"+376",iso2:"AD"},{id:5,name:"Angola",dial:"+244",iso2:"AO"},{id:6,name:"Argentina",dial:"+54",iso2:"AR"},{id:7,name:"Armenia",dial:"+374",iso2:"AM"},{id:8,name:"Australia",dial:"+61",iso2:"AU"},{id:9,name:"Austria",dial:"+43",iso2:"AT"},{id:10,name:"Bélgica",dial:"+32",iso2:"BE"},{id:11,name:"Bolivia",dial:"+591",iso2:"BO"},{id:12,name:"Brasil",dial:"+55",iso2:"BR"},{id:13,name:"Canadá",dial:"+1",iso2:"CA"},{id:14,name:"Chile",dial:"+56",iso2:"CL"},{id:15,name:"China",dial:"+86",iso2:"CN"},{id:16,name:"Colombia",dial:"+57",iso2:"CO"},{id:17,name:"Corea del Sur",dial:"+82",iso2:"KR"},{id:18,name:"Costa Rica",dial:"+506",iso2:"CR"},{id:19,name:"Cuba",dial:"+53",iso2:"CU"},{id:20,name:"Dinamarca",dial:"+45",iso2:"DK"},{id:21,name:"Ecuador",dial:"+593",iso2:"EC"},{id:22,name:"Egipto",dial:"+20",iso2:"EG"},{id:23,name:"El Salvador",dial:"+503",iso2:"SV"},{id:24,name:"España",dial:"+34",iso2:"ES"},{id:25,name:"Estados Unidos",dial:"+1",iso2:"US"},{id:26,name:"Estonia",dial:"+372",iso2:"EE"},{id:27,name:"Filipinas",dial:"+63",iso2:"PH"},{id:28,name:"Finlandia",dial:"+358",iso2:"FI"},{id:29,name:"Francia",dial:"+33",iso2:"FR"},{id:30,name:"Grecia",dial:"+30",iso2:"GR"},{id:31,name:"Guatemala",dial:"+502",iso2:"GT"},{id:32,name:"Honduras",dial:"+504",iso2:"HN"},{id:33,name:"Hungría",dial:"+36",iso2:"HU"},{id:34,name:"India",dial:"+91",iso2:"IN"},{id:35,name:"Indonesia",dial:"+62",iso2:"ID"},{id:36,name:"Irlanda",dial:"+353",iso2:"IE"},{id:37,name:"Israel",dial:"+972",iso2:"IL"},{id:38,name:"Italia",dial:"+39",iso2:"IT"},{id:39,name:"Japón",dial:"+81",iso2:"JP"},{id:40,name:"México",dial:"+52",iso2:"MX"},{id:41,name:"Nicaragua",dial:"+505",iso2:"NI"},{id:42,name:"Noruega",dial:"+47",iso2:"NO"},{id:43,name:"Nueva Zelanda",dial:"+64",iso2:"NZ"},{id:44,name:"Panamá",dial:"+507",iso2:"PA"},{id:45,name:"Paraguay",dial:"+595",iso2:"PY"},{id:46,name:"Perú",dial:"+51",iso2:"PE"},{id:47,name:"Polonia",dial:"+48",iso2:"PL"},{id:48,name:"Portugal",dial:"+351",iso2:"PT"},{id:49,name:"Reino Unido",dial:"+44",iso2:"GB"},{id:50,name:"República Dominicana",dial:"+1",iso2:"DO"},{id:51,name:"Rusia",dial:"+7",iso2:"RU"},{id:52,name:"Suecia",dial:"+46",iso2:"SE"},{id:53,name:"Suiza",dial:"+41",iso2:"CH"},{id:54,name:"Turquía",dial:"+90",iso2:"TR"},{id:55,name:"Ucrania",dial:"+380",iso2:"UA"},{id:56,name:"Uruguay",dial:"+598",iso2:"UY"},{id:57,name:"Venezuela",dial:"+58",iso2:"VE"},{id:58,name:"Vietnam",dial:"+84",iso2:"VN"},{id:59,name:"Sudáfrica",dial:"+27",iso2:"ZA"}];function Pf({value:n,onChange:t,countries:e,defaultCountry:r="CO"}){const[i,o]=nt.useState(!1),c=nt.useRef(null),u=nt.useMemo(()=>e?.length?typeof n=="string"?e.find(d=>d.iso2===n)||e.find(d=>d.iso2===r)||null:n?.iso2?e.find(d=>d.iso2===n.iso2)||e.find(d=>d.iso2===r)||null:e.find(d=>d.iso2===r)||null:null,[e,n,r]);return nt.useEffect(()=>{const d=e.find(m=>m.iso2===r)||null;!n&&d&&t(d)},[]),nt.useEffect(()=>{const d=m=>c.current&&!c.current.contains(m.target)&&o(!1);return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]),V.jsxs("div",{ref:c,className:"relative w-full",children:[V.jsx("button",{type:"button",onClick:()=>o(d=>!d),className:"w-full bg-gray-600 text-white text-left p-2.5 rounded-lg border border-gray-300 focus:outline-none text-base md:text-sm",children:u?V.jsxs("span",{className:"flex items-center gap-2",children:[V.jsx("img",{src:Uo(u.iso2),alt:`Bandera de ${u.name}`,className:"inline-block h-4 w-6 rounded-sm object-cover",loading:"lazy",onError:d=>d.currentTarget.style.display="none"}),V.jsx("span",{children:u.name})]}):V.jsx("span",{className:"text-gray-300",children:"Seleccione una opción"})}),i&&V.jsx("ul",{role:"listbox",className:"absolute top-full mt-1 w-full z-50 max-h-56 overflow-y-auto bg-gray-700 border border-gray-600 rounded-lg shadow-lg",children:e.map(d=>V.jsxs("li",{role:"option","aria-selected":u?.iso2===d.iso2,onClick:()=>{t(d),o(!1)},className:`px-3 py-2 cursor-pointer flex items-center gap-2 text-white hover:bg-gray-600 ${u?.iso2===d.iso2?"bg-gray-600":""}`,children:[V.jsx("img",{src:Uo(d.iso2),alt:`Bandera de ${d.name}`,className:"inline-block h-4 w-6 rounded-sm object-cover",loading:"lazy",onError:m=>m.currentTarget.style.display="none"}),V.jsx("span",{children:d.name})]},d.id))})]})}const Vf=({setIsOpen:n})=>{const[t,e]=nt.useState(null),[r,i]=nt.useState(""),[o,c]=nt.useState(""),[u,d]=nt.useState(""),[m,I]=nt.useState(""),[A,R]=nt.useState(!1),[x,P]=nt.useState(null),O=nt.useRef(null),N=nt.useRef(null),z=nt.useRef(null),j=nt.useRef(null);nt.useEffect(()=>{N.current?.focus();const f=_=>_.key==="Escape"&&n(!1);window.addEventListener("keydown",f);const p=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",f),document.body.style.overflow=p}},[n]);const $=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o),et=/^\d{7,15}$/.test(u),Rt=r.trim()&&$&&t?.name&&et,Et=()=>{i(""),c(""),d(""),I("");const f=jo.find(p=>p.iso2==="CO");e(f||null)},E=async()=>{if(!Rt||A)return;R(!0);const f={customerName:r.trim(),customerEmail:o.trim(),customerCountry:t.name,customerPhone:`${t.dial} ${u}`,message:m.trim()},p=new Promise(_=>setTimeout(_,600));try{const[_]=await Promise.all([Promise.allSettled([Sf(r,o,t.name,u,m),fetch("/api/MailService",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)})]),p]);_.every(T=>T.status==="fulfilled")?(Et(),O.current?.scrollTo({top:0,behavior:"smooth"}),P({type:"success",text:"¡Enviado con éxito!",sub:"Te contactaremos pronto."}),setTimeout(()=>P(null),1800)):(P({type:"error",text:"No pudimos enviar",sub:"Inténtalo nuevamente."}),setTimeout(()=>P(null),2e3))}catch(_){console.error("Error al enviar:",_),P({type:"error",text:"Ocurrió un error inesperado",sub:"Vuelve a intentarlo."}),setTimeout(()=>P(null),2e3)}finally{R(!1)}};return V.jsx(Bo,{children:V.jsx(_e.div,{initial:{opacity:0,zIndex:50},animate:{opacity:1,zIndex:50},transition:{duration:.25},exit:{opacity:0},children:V.jsx("div",{id:"crud-modal",role:"dialog","aria-modal":"true","aria-labelledby":"contact-title",tabIndex:-1,className:"fixed inset-0 z-50 flex justify-center items-center overscroll-contain",onClick:()=>n(!1),children:V.jsx("div",{className:"relative p-4 w-full max-w-md max-h-[100dvh]",onClick:f=>f.stopPropagation(),children:V.jsxs("div",{className:"relative rounded-2xl shadow-sm bg-gray-800",children:[V.jsxs("div",{className:"sticky top-0 z-20 flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600 bg-gray-800/95 backdrop-blur",children:[V.jsx("h3",{id:"contact-title",className:"text-lg font-semibold text-white",children:"Ingresa tus datos de contacto"}),V.jsx("button",{type:"button","aria-label":"Cerrar",className:`text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg
                  w-8 h-8 inline-flex cursor-pointer justify-center items-center md:hover:bg-gray-600 md:hover:text-white`,onClick:()=>n(!1),children:V.jsx(Bl,{})})]}),V.jsx(Cf,{toast:x}),V.jsxs("div",{ref:O,className:"p-4 md:p-5 max-h-[calc(100dvh-10rem)] overflow-y-auto overscroll-contain",style:{WebkitOverflowScrolling:"touch"},children:[V.jsxs("div",{className:"grid gap-4 mb-4 grid-cols-2",children:[V.jsxs("div",{className:"col-span-2",children:[V.jsx("label",{htmlFor:"contact-name",className:"block mb-2 text-left text-sm font-medium text-white",children:"Nombre (*):"}),V.jsx("input",{ref:N,type:"text",id:"contact-name",autoComplete:"name",enterKeyHint:"next",onKeyDown:f=>f.key==="Enter"&&z.current?.focus(),className:"bg-gray-50 border border-gray-300 text-gray-900 text-base md:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white scroll-mt-24",placeholder:"Ingresa tu nombre",value:r,onChange:f=>i(f.target.value),required:!0})]}),V.jsxs("div",{className:"col-span-2",children:[V.jsx("label",{htmlFor:"contact-email",className:"block mb-2 text-left text-sm font-medium text-white",children:"Correo electrónico (*):"}),V.jsx("input",{ref:z,type:"email",id:"contact-email",autoComplete:"email",enterKeyHint:"next",onKeyDown:f=>f.key==="Enter"&&j.current?.focus(),className:"bg-gray-600 border border-gray-300 text-white text-base md:text-sm rounded-lg block w-full p-2.5 scroll-mt-24",placeholder:"Ingresa tu correo electrónico",value:o,onChange:f=>c(f.target.value),required:!0}),o&&!$&&V.jsx("p",{className:"text-xs text-red-400 mt-1",children:"Formato de correo no válido."})]}),V.jsxs("div",{className:"col-span-2",children:[V.jsx("label",{htmlFor:"contact-country",className:"block mb-2 text-left text-sm font-medium text-white",children:"País (*):"}),V.jsx(Pf,{value:t,onChange:e,countries:jo,defaultCountry:"CO"})]}),V.jsxs("div",{className:"col-span-2",children:[V.jsx("label",{htmlFor:"contact-phone",className:"block mb-2 text-left text-sm font-medium text-white",children:"Número de contacto (*):"}),V.jsxs("div",{className:"flex rounded-lg overflow-hidden border border-gray-300",children:[V.jsx("span",{className:"bg-gray-700 text-white px-3 py-2 text-base md:text-sm flex items-center",children:t?.dial||"+57"}),V.jsx("input",{ref:j,type:"tel",id:"contact-phone",className:"flex-1 min-w-0 bg-gray-600 text-white text-base md:text-sm p-2.5 scroll-mt-24",placeholder:"Ingresa tu número de contacto",value:u,onChange:f=>d(f.target.value.replace(/\D/g,"")),inputMode:"numeric",pattern:"\\d*",autoComplete:"tel",required:!0})]}),u&&!et&&V.jsx("p",{className:"text-xs text-red-400 mt-1",children:"El número debe tener entre 7 y 15 dígitos."})]}),V.jsxs("div",{className:"col-span-2",children:[V.jsx("label",{htmlFor:"contact-message",className:"block mb-2 text-left text-sm font-medium text-white",children:"Déjanos un mensaje:"}),V.jsx("textarea",{id:"contact-message",rows:4,className:"block p-2.5 w-full text-white bg-gray-600 rounded-lg border border-gray-300 text-base md:text-sm scroll-mt-24",placeholder:"Escribe un mensaje",value:m,onChange:f=>I(f.target.value)})]})]}),V.jsx("button",{type:"button",disabled:!Rt||A,className:`text-white inline-flex items-center
                    ${!Rt||A?"bg-gray-500 cursor-not-allowed":"bg-[rgb(42,75,155)] md:hover:scale-110"}
                    outline-none font-medium rounded-lg transition-transform duration-300 text-base md:text-sm px-5 py-2.5 text-center`,onClick:E,children:A?"Enviando...":"Enviar"})]})]})})})})})},Mf=()=>{const[n,t]=nt.useState(!1);return V.jsx("section",{className:"w-screen flex justify-center items-center bg-gray-900 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0",id:"home",children:V.jsxs("div",{className:"w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center",children:[V.jsx(_e.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5},children:V.jsx("h3",{className:" text-sm sm:text-2xl mb-6 sm:mt-32 mt-16  font-bold"})}),V.jsxs(_e.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.05},children:[V.jsxs("div",{className:"text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-white px-8 sm:px-8 md:px-20 lg:px-4",children:[V.jsxs("h1",{className:"inline md:hidden text-[rgb(42,75,155)]",children:[" ",'"Kodificamos tus ideas"']}),V.jsx("h1",{className:"hidden md:inline text-[rgb(42,75,155)]",children:'"Kodificamos tus ideas"'})]}),V.jsx("h1",{className:"mt-2 sm:mt-2 text-xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold tracking-wide text-white px-8 sm:px-20 md:px-24 lg:px-24",children:"Desarrollamos el crecimiento de tu empresa Kodificando tus ideas."})]}),V.jsx(_e.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:V.jsx("h2",{className:"text-white text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ",children:"Unifica tus procesos y obtén la información que tu negocio necesita para avanzar."})}),V.jsx(_e.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.15},children:V.jsx("div",{className:`flex flex-col sm:flex-row mt-14  sm:mb-40 justify-center
          transition-transform duration-300 hover:scale-110`,children:V.jsx("button",{className:`contained-button text-black rounded-xl font-bold cursor-pointer bg-gray-300 w-52 sm:w-52 h-12 
              mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0`,onClick:()=>t(!0),"aria-label":"ContactMe",children:"Contactanos"})})}),n&&V.jsx(Vf,{isOpen:n,setIsOpen:t})]})})};export{Mf as Hero};
