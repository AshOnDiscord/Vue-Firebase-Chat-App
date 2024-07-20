(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ya(n,e){const t=new Set(n.split(","));return r=>t.has(r)}const Se={},wr=[],It=()=>{},jg=()=>!1,ro=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Za=n=>n.startsWith("onUpdate:"),at=Object.assign,el=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},qg=Object.prototype.hasOwnProperty,ge=(n,e)=>qg.call(n,e),se=Array.isArray,Ar=n=>so(n)==="[object Map]",td=n=>so(n)==="[object Set]",ce=n=>typeof n=="function",Fe=n=>typeof n=="string",Rn=n=>typeof n=="symbol",Pe=n=>n!==null&&typeof n=="object",nd=n=>(Pe(n)||ce(n))&&ce(n.then)&&ce(n.catch),rd=Object.prototype.toString,so=n=>rd.call(n),Hg=n=>so(n).slice(8,-1),sd=n=>so(n)==="[object Object]",tl=n=>Fe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,gs=Ya(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),io=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},zg=/-(\w)/g,tr=io(n=>n.replace(zg,(e,t)=>t?t.toUpperCase():"")),Kg=/\B([A-Z])/g,Sn=io(n=>n.replace(Kg,"-$1").toLowerCase()),id=io(n=>n.charAt(0).toUpperCase()+n.slice(1)),Qo=io(n=>n?`on${id(n)}`:""),nr=(n,e)=>!Object.is(n,e),Jo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},od=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Wg=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let iu;const ad=()=>iu||(iu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nl(n){if(se(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Fe(r)?Xg(r):nl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Fe(n)||Pe(n))return n}const Gg=/;(?![^(]*\))/g,Qg=/:([^]+)/,Jg=/\/\*[^]*?\*\//g;function Xg(n){const e={};return n.replace(Jg,"").split(Gg).forEach(t=>{if(t){const r=t.split(Qg);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Tn(n){let e="";if(Fe(n))e=n;else if(se(n))for(let t=0;t<n.length;t++){const r=Tn(n[t]);r&&(e+=r+" ")}else if(Pe(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Yg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zg=Ya(Yg);function ld(n){return!!n||n===""}const cd=n=>!!(n&&n.__v_isRef===!0),ct=n=>Fe(n)?n:n==null?"":se(n)||Pe(n)&&(n.toString===rd||!ce(n.toString))?cd(n)?ct(n.value):JSON.stringify(n,ud,2):String(n),ud=(n,e)=>cd(e)?ud(n,e.value):Ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Xo(r,i)+" =>"]=s,t),{})}:td(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Xo(t))}:Rn(e)?Xo(e):Pe(e)&&!se(e)&&!sd(e)?String(e):e,Xo=(n,e="")=>{var t;return Rn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bt;class em{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=bt;try{return bt=this,e()}finally{bt=t}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function tm(n,e=bt){e&&e.active&&e.effects.push(n)}function nm(){return bt}let Qn;class rl{constructor(e,t,r,s){this.fn=e,this.trigger=t,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,tm(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Pn();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(rm(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Cn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=mn,t=Qn;try{return mn=!0,Qn=this,this._runnings++,ou(this),this.fn()}finally{au(this),this._runnings--,Qn=t,mn=e}}stop(){this.active&&(ou(this),au(this),this.onStop&&this.onStop(),this.active=!1)}}function rm(n){return n.value}function ou(n){n._trackId++,n._depsLength=0}function au(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)hd(n.deps[e],n);n.deps.length=n._depsLength}}function hd(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let mn=!0,va=0;const dd=[];function Pn(){dd.push(mn),mn=!1}function Cn(){const n=dd.pop();mn=n===void 0?!0:n}function sl(){va++}function il(){for(va--;!va&&Ea.length;)Ea.shift()()}function fd(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const r=n.deps[n._depsLength];r!==e?(r&&hd(r,n),n.deps[n._depsLength++]=e):n._depsLength++}}const Ea=[];function pd(n,e,t){sl();for(const r of n.keys()){let s;r._dirtyLevel<e&&(s??(s=n.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=n.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Ea.push(r.scheduler)))}il()}const gd=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},Ia=new WeakMap,Jn=Symbol(""),Ta=Symbol("");function ht(n,e,t){if(mn&&Qn){let r=Ia.get(n);r||Ia.set(n,r=new Map);let s=r.get(t);s||r.set(t,s=gd(()=>r.delete(t))),fd(Qn,s)}}function Jt(n,e,t,r,s,i){const a=Ia.get(n);if(!a)return;let l=[];if(e==="clear")l=[...a.values()];else if(t==="length"&&se(n)){const u=Number(r);a.forEach((d,f)=>{(f==="length"||!Rn(f)&&f>=u)&&l.push(d)})}else switch(t!==void 0&&l.push(a.get(t)),e){case"add":se(n)?tl(t)&&l.push(a.get("length")):(l.push(a.get(Jn)),Ar(n)&&l.push(a.get(Ta)));break;case"delete":se(n)||(l.push(a.get(Jn)),Ar(n)&&l.push(a.get(Ta)));break;case"set":Ar(n)&&l.push(a.get(Jn));break}sl();for(const u of l)u&&pd(u,4);il()}const sm=Ya("__proto__,__v_isRef,__isVue"),md=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Rn)),lu=im();function im(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const r=Ie(this);for(let i=0,a=this.length;i<a;i++)ht(r,"get",i+"");const s=r[e](...t);return s===-1||s===!1?r[e](...t.map(Ie)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Pn(),sl();const r=Ie(this)[e].apply(this,t);return il(),Cn(),r}}),n}function om(n){Rn(n)||(n=String(n));const e=Ie(this);return ht(e,"has",n),e.hasOwnProperty(n)}class _d{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?vm:Id:i?Ed:vd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=se(e);if(!s){if(a&&ge(lu,t))return Reflect.get(lu,t,r);if(t==="hasOwnProperty")return om}const l=Reflect.get(e,t,r);return(Rn(t)?md.has(t):sm(t))||(s||ht(e,"get",t),i)?l:_t(l)?a&&tl(t)?l:l.value:Pe(l)?s?Td(l):ll(l):l}}class yd extends _d{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const u=kr(i);if(!bs(r)&&!kr(r)&&(i=Ie(i),r=Ie(r)),!se(e)&&_t(i)&&!_t(r))return u?!1:(i.value=r,!0)}const a=se(e)&&tl(t)?Number(t)<e.length:ge(e,t),l=Reflect.set(e,t,r,s);return e===Ie(s)&&(a?nr(r,i)&&Jt(e,"set",t,r):Jt(e,"add",t,r)),l}deleteProperty(e,t){const r=ge(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&Jt(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!Rn(t)||!md.has(t))&&ht(e,"has",t),r}ownKeys(e){return ht(e,"iterate",se(e)?"length":Jn),Reflect.ownKeys(e)}}class am extends _d{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const lm=new yd,cm=new am,um=new yd(!0);const ol=n=>n,oo=n=>Reflect.getPrototypeOf(n);function di(n,e,t=!1,r=!1){n=n.__v_raw;const s=Ie(n),i=Ie(e);t||(nr(e,i)&&ht(s,"get",e),ht(s,"get",i));const{has:a}=oo(s),l=r?ol:t?hl:ul;if(a.call(s,e))return l(n.get(e));if(a.call(s,i))return l(n.get(i));n!==s&&n.get(e)}function fi(n,e=!1){const t=this.__v_raw,r=Ie(t),s=Ie(n);return e||(nr(n,s)&&ht(r,"has",n),ht(r,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function pi(n,e=!1){return n=n.__v_raw,!e&&ht(Ie(n),"iterate",Jn),Reflect.get(n,"size",n)}function cu(n,e=!1){!e&&!bs(n)&&!kr(n)&&(n=Ie(n));const t=Ie(this);return oo(t).has.call(t,n)||(t.add(n),Jt(t,"add",n,n)),this}function uu(n,e,t=!1){!t&&!bs(e)&&!kr(e)&&(e=Ie(e));const r=Ie(this),{has:s,get:i}=oo(r);let a=s.call(r,n);a||(n=Ie(n),a=s.call(r,n));const l=i.call(r,n);return r.set(n,e),a?nr(e,l)&&Jt(r,"set",n,e):Jt(r,"add",n,e),this}function hu(n){const e=Ie(this),{has:t,get:r}=oo(e);let s=t.call(e,n);s||(n=Ie(n),s=t.call(e,n)),r&&r.call(e,n);const i=e.delete(n);return s&&Jt(e,"delete",n,void 0),i}function du(){const n=Ie(this),e=n.size!==0,t=n.clear();return e&&Jt(n,"clear",void 0,void 0),t}function gi(n,e){return function(r,s){const i=this,a=i.__v_raw,l=Ie(a),u=e?ol:n?hl:ul;return!n&&ht(l,"iterate",Jn),a.forEach((d,f)=>r.call(s,u(d),u(f),i))}}function mi(n,e,t){return function(...r){const s=this.__v_raw,i=Ie(s),a=Ar(i),l=n==="entries"||n===Symbol.iterator&&a,u=n==="keys"&&a,d=s[n](...r),f=t?ol:e?hl:ul;return!e&&ht(i,"iterate",u?Ta:Jn),{next(){const{value:g,done:E}=d.next();return E?{value:g,done:E}:{value:l?[f(g[0]),f(g[1])]:f(g),done:E}},[Symbol.iterator](){return this}}}}function ln(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function hm(){const n={get(i){return di(this,i)},get size(){return pi(this)},has:fi,add:cu,set:uu,delete:hu,clear:du,forEach:gi(!1,!1)},e={get(i){return di(this,i,!1,!0)},get size(){return pi(this)},has:fi,add(i){return cu.call(this,i,!0)},set(i,a){return uu.call(this,i,a,!0)},delete:hu,clear:du,forEach:gi(!1,!0)},t={get(i){return di(this,i,!0)},get size(){return pi(this,!0)},has(i){return fi.call(this,i,!0)},add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear"),forEach:gi(!0,!1)},r={get(i){return di(this,i,!0,!0)},get size(){return pi(this,!0)},has(i){return fi.call(this,i,!0)},add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear"),forEach:gi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=mi(i,!1,!1),t[i]=mi(i,!0,!1),e[i]=mi(i,!1,!0),r[i]=mi(i,!0,!0)}),[n,t,e,r]}const[dm,fm,pm,gm]=hm();function al(n,e){const t=e?n?gm:pm:n?fm:dm;return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(ge(t,s)&&s in r?t:r,s,i)}const mm={get:al(!1,!1)},_m={get:al(!1,!0)},ym={get:al(!0,!1)};const vd=new WeakMap,Ed=new WeakMap,Id=new WeakMap,vm=new WeakMap;function Em(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Im(n){return n.__v_skip||!Object.isExtensible(n)?0:Em(Hg(n))}function ll(n){return kr(n)?n:cl(n,!1,lm,mm,vd)}function Tm(n){return cl(n,!1,um,_m,Ed)}function Td(n){return cl(n,!0,cm,ym,Id)}function cl(n,e,t,r,s){if(!Pe(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=s.get(n);if(i)return i;const a=Im(n);if(a===0)return n;const l=new Proxy(n,a===2?r:t);return s.set(n,l),l}function ms(n){return kr(n)?ms(n.__v_raw):!!(n&&n.__v_isReactive)}function kr(n){return!!(n&&n.__v_isReadonly)}function bs(n){return!!(n&&n.__v_isShallow)}function wd(n){return n?!!n.__v_raw:!1}function Ie(n){const e=n&&n.__v_raw;return e?Ie(e):n}function wm(n){return Object.isExtensible(n)&&od(n,"__v_skip",!0),n}const ul=n=>Pe(n)?ll(n):n,hl=n=>Pe(n)?Td(n):n;class Ad{constructor(e,t,r,s){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new rl(()=>e(this._value),()=>Yo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ie(this);return(!e._cacheable||e.effect.dirty)&&nr(e._value,e._value=e.effect.run())&&Yo(e,4),bm(e),e.effect._dirtyLevel>=2&&Yo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Am(n,e,t=!1){let r,s;const i=ce(n);return i?(r=n,s=It):(r=n.get,s=n.set),new Ad(r,s,i||!s,t)}function bm(n){var e;mn&&Qn&&(n=Ie(n),fd(Qn,(e=n.dep)!=null?e:n.dep=gd(()=>n.dep=void 0,n instanceof Ad?n:void 0)))}function Yo(n,e=4,t,r){n=Ie(n);const s=n.dep;s&&pd(s,e)}function _t(n){return!!(n&&n.__v_isRef===!0)}function bd(n){return _t(n)?n.value:n}const Rm={get:(n,e,t)=>bd(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return _t(s)&&!_t(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function Rd(n){return ms(n)?n:new Proxy(n,Rm)}/**
* @vue/runtime-core v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _n(n,e,t,r){try{return r?n(...r):n()}catch(s){ao(s,e,t)}}function Rt(n,e,t,r){if(ce(n)){const s=_n(n,e,t,r);return s&&nd(s)&&s.catch(i=>{ao(i,e,t)}),s}if(se(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Rt(n[i],e,t,r));return s}}function ao(n,e,t,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const a=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;i;){const d=i.ec;if(d){for(let f=0;f<d.length;f++)if(d[f](n,a,l)===!1)return}i=i.parent}const u=e.appContext.config.errorHandler;if(u){Pn(),_n(u,null,10,[n,a,l]),Cn();return}}Sm(n,t,s,r)}function Sm(n,e,t,r=!0){console.error(n)}let Rs=!1,wa=!1;const Ze=[];let Ot=0;const br=[];let un=null,qn=0;const Sd=Promise.resolve();let dl=null;function Pm(n){const e=dl||Sd;return n?e.then(this?n.bind(this):n):e}function Cm(n){let e=Ot+1,t=Ze.length;for(;e<t;){const r=e+t>>>1,s=Ze[r],i=Ss(s);i<n||i===n&&s.pre?e=r+1:t=r}return e}function fl(n){(!Ze.length||!Ze.includes(n,Rs&&n.allowRecurse?Ot+1:Ot))&&(n.id==null?Ze.push(n):Ze.splice(Cm(n.id),0,n),Pd())}function Pd(){!Rs&&!wa&&(wa=!0,dl=Sd.then(kd))}function km(n){const e=Ze.indexOf(n);e>Ot&&Ze.splice(e,1)}function Dm(n){se(n)?br.push(...n):(!un||!un.includes(n,n.allowRecurse?qn+1:qn))&&br.push(n),Pd()}function fu(n,e,t=Rs?Ot+1:0){for(;t<Ze.length;t++){const r=Ze[t];if(r&&r.pre){if(n&&r.id!==n.uid)continue;Ze.splice(t,1),t--,r()}}}function Cd(n){if(br.length){const e=[...new Set(br)].sort((t,r)=>Ss(t)-Ss(r));if(br.length=0,un){un.push(...e);return}for(un=e,qn=0;qn<un.length;qn++){const t=un[qn];t.active!==!1&&t()}un=null,qn=0}}const Ss=n=>n.id==null?1/0:n.id,Om=(n,e)=>{const t=Ss(n)-Ss(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function kd(n){wa=!1,Rs=!0,Ze.sort(Om);try{for(Ot=0;Ot<Ze.length;Ot++){const e=Ze[Ot];e&&e.active!==!1&&_n(e,e.i,e.i?15:14)}}finally{Ot=0,Ze.length=0,Cd(),Rs=!1,dl=null,(Ze.length||br.length)&&kd()}}let Vt=null,Dd=null;function Fi(n){const e=Vt;return Vt=n,Dd=n&&n.type.__scopeId||null,e}function Nm(n,e=Vt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Au(-1);const i=Fi(e);let a;try{a=n(...s)}finally{Fi(i),r._d&&Au(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function $n(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let u=l.dir[r];u&&(Pn(),Rt(u,t,8,[n.el,l,n,e]),Cn())}}function Od(n,e){n.shapeFlag&6&&n.component?Od(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}const bi=n=>!!n.type.__asyncLoader,Nd=n=>n.type.__isKeepAlive;function Vm(n,e){Vd(n,"a",e)}function Mm(n,e){Vd(n,"da",e)}function Vd(n,e,t=it){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(lo(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Nd(s.parent.vnode)&&xm(r,e,t,s),s=s.parent}}function xm(n,e,t,r){const s=lo(e,n,r,!0);Md(()=>{el(r[e],s)},t)}function lo(n,e,t=it,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{Pn();const l=Fs(t),u=Rt(e,t,n,a);return l(),Cn(),u});return r?s.unshift(i):s.push(i),i}}const en=n=>(e,t=it)=>{(!ho||n==="sp")&&lo(n,(...r)=>e(...r),t)},Lm=en("bm"),Fm=en("m"),Um=en("bu"),$m=en("u"),Bm=en("bum"),Md=en("um"),jm=en("sp"),qm=en("rtg"),Hm=en("rtc");function zm(n,e=it){lo("ec",n,e)}const Km=Symbol.for("v-ndc");function Xn(n,e,t,r){let s;const i=t;if(se(n)||Fe(n)){s=new Array(n.length);for(let a=0,l=n.length;a<l;a++)s[a]=e(n[a],a,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,i)}else if(Pe(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const d=a[l];s[l]=e(n[d],d,l,i)}}else s=[];return s}const Aa=n=>n?ef(n)?yl(n):Aa(n.parent):null,_s=at(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Aa(n.parent),$root:n=>Aa(n.root),$emit:n=>n.emit,$options:n=>pl(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,fl(n.update)}),$nextTick:n=>n.n||(n.n=Pm.bind(n.proxy)),$watch:n=>m_.bind(n)}),Zo=(n,e)=>n!==Se&&!n.__isScriptSetup&&ge(n,e),Wm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:u}=n;let d;if(e[0]!=="$"){const S=a[e];if(S!==void 0)switch(S){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Zo(r,e))return a[e]=1,r[e];if(s!==Se&&ge(s,e))return a[e]=2,s[e];if((d=n.propsOptions[0])&&ge(d,e))return a[e]=3,i[e];if(t!==Se&&ge(t,e))return a[e]=4,t[e];ba&&(a[e]=0)}}const f=_s[e];let g,E;if(f)return e==="$attrs"&&ht(n.attrs,"get",""),f(n);if((g=l.__cssModules)&&(g=g[e]))return g;if(t!==Se&&ge(t,e))return a[e]=4,t[e];if(E=u.config.globalProperties,ge(E,e))return E[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Zo(s,e)?(s[e]=t,!0):r!==Se&&ge(r,e)?(r[e]=t,!0):ge(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!t[a]||n!==Se&&ge(n,a)||Zo(e,a)||(l=i[0])&&ge(l,a)||ge(r,a)||ge(_s,a)||ge(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ge(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function pu(n){return se(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ba=!0;function Gm(n){const e=pl(n),t=n.proxy,r=n.ctx;ba=!1,e.beforeCreate&&gu(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:l,provide:u,inject:d,created:f,beforeMount:g,mounted:E,beforeUpdate:S,updated:M,activated:F,deactivated:L,beforeDestroy:X,beforeUnmount:ee,destroyed:Q,unmounted:le,render:Ae,renderTracked:Y,renderTriggered:w,errorCaptured:m,serverPrefetch:v,expose:I,inheritAttrs:A,components:R,directives:y,filters:dt}=e;if(d&&Qm(d,r,null),a)for(const Ee in a){const me=a[Ee];ce(me)&&(r[Ee]=me.bind(t))}if(s){const Ee=s.call(t,t);Pe(Ee)&&(n.data=ll(Ee))}if(ba=!0,i)for(const Ee in i){const me=i[Ee],wt=ce(me)?me.bind(t,t):ce(me.get)?me.get.bind(t,t):It,On=!ce(me)&&ce(me.set)?me.set.bind(t):It,Bt=F_({get:wt,set:On});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>Bt.value,set:Me=>Bt.value=Me})}if(l)for(const Ee in l)xd(l[Ee],r,t,Ee);if(u){const Ee=ce(u)?u.call(t):u;Reflect.ownKeys(Ee).forEach(me=>{t_(me,Ee[me])})}f&&gu(f,n,"c");function $e(Ee,me){se(me)?me.forEach(wt=>Ee(wt.bind(t))):me&&Ee(me.bind(t))}if($e(Lm,g),$e(Fm,E),$e(Um,S),$e($m,M),$e(Vm,F),$e(Mm,L),$e(zm,m),$e(Hm,Y),$e(qm,w),$e(Bm,ee),$e(Md,le),$e(jm,v),se(I))if(I.length){const Ee=n.exposed||(n.exposed={});I.forEach(me=>{Object.defineProperty(Ee,me,{get:()=>t[me],set:wt=>t[me]=wt})})}else n.exposed||(n.exposed={});Ae&&n.render===It&&(n.render=Ae),A!=null&&(n.inheritAttrs=A),R&&(n.components=R),y&&(n.directives=y)}function Qm(n,e,t=It){se(n)&&(n=Ra(n));for(const r in n){const s=n[r];let i;Pe(s)?"default"in s?i=Ri(s.from||r,s.default,!0):i=Ri(s.from||r):i=Ri(s),_t(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function gu(n,e,t){Rt(se(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function xd(n,e,t,r){const s=r.includes(".")?Jd(t,r):()=>t[r];if(Fe(n)){const i=e[n];ce(i)&&ta(s,i)}else if(ce(n))ta(s,n.bind(t));else if(Pe(n))if(se(n))n.forEach(i=>xd(i,e,t,r));else{const i=ce(n.handler)?n.handler.bind(t):e[n.handler];ce(i)&&ta(s,i,n)}}function pl(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,l=i.get(e);let u;return l?u=l:!s.length&&!t&&!r?u=e:(u={},s.length&&s.forEach(d=>Ui(u,d,a,!0)),Ui(u,e,a)),Pe(e)&&i.set(e,u),u}function Ui(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Ui(n,i,t,!0),s&&s.forEach(a=>Ui(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const l=Jm[a]||t&&t[a];n[a]=l?l(n[a],e[a]):e[a]}return n}const Jm={data:mu,props:_u,emits:_u,methods:us,computed:us,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:us,directives:us,watch:Ym,provide:mu,inject:Xm};function mu(n,e){return e?n?function(){return at(ce(n)?n.call(this,this):n,ce(e)?e.call(this,this):e)}:e:n}function Xm(n,e){return us(Ra(n),Ra(e))}function Ra(n){if(se(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function st(n,e){return n?[...new Set([].concat(n,e))]:e}function us(n,e){return n?at(Object.create(null),n,e):e}function _u(n,e){return n?se(n)&&se(e)?[...new Set([...n,...e])]:at(Object.create(null),pu(n),pu(e??{})):e}function Ym(n,e){if(!n)return e;if(!e)return n;const t=at(Object.create(null),n);for(const r in e)t[r]=st(n[r],e[r]);return t}function Ld(){return{app:null,config:{isNativeTag:jg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zm=0;function e_(n,e){return function(r,s=null){ce(r)||(r=at({},r)),s!=null&&!Pe(s)&&(s=null);const i=Ld(),a=new WeakSet;let l=!1;const u=i.app={_uid:Zm++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:U_,get config(){return i.config},set config(d){},use(d,...f){return a.has(d)||(d&&ce(d.install)?(a.add(d),d.install(u,...f)):ce(d)&&(a.add(d),d(u,...f))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,f){return f?(i.components[d]=f,u):i.components[d]},directive(d,f){return f?(i.directives[d]=f,u):i.directives[d]},mount(d,f,g){if(!l){const E=et(r,s);return E.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),f&&e?e(E,d):n(E,d,g),l=!0,u._container=d,d.__vue_app__=u,yl(E.component)}},unmount(){l&&(n(null,u._container),delete u._container.__vue_app__)},provide(d,f){return i.provides[d]=f,u},runWithContext(d){const f=ys;ys=u;try{return d()}finally{ys=f}}};return u}}let ys=null;function t_(n,e){if(it){let t=it.provides;const r=it.parent&&it.parent.provides;r===t&&(t=it.provides=Object.create(r)),t[n]=e}}function Ri(n,e,t=!1){const r=it||Vt;if(r||ys){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ys._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ce(e)?e.call(r&&r.proxy):e}}const Fd={},Ud=()=>Object.create(Fd),$d=n=>Object.getPrototypeOf(n)===Fd;function n_(n,e,t,r=!1){const s={},i=Ud();n.propsDefaults=Object.create(null),Bd(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:Tm(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function r_(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,l=Ie(s),[u]=n.propsOptions;let d=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=n.vnode.dynamicProps;for(let g=0;g<f.length;g++){let E=f[g];if(co(n.emitsOptions,E))continue;const S=e[E];if(u)if(ge(i,E))S!==i[E]&&(i[E]=S,d=!0);else{const M=tr(E);s[M]=Sa(u,l,M,S,n,!1)}else S!==i[E]&&(i[E]=S,d=!0)}}}else{Bd(n,e,s,i)&&(d=!0);let f;for(const g in l)(!e||!ge(e,g)&&((f=Sn(g))===g||!ge(e,f)))&&(u?t&&(t[g]!==void 0||t[f]!==void 0)&&(s[g]=Sa(u,l,g,void 0,n,!0)):delete s[g]);if(i!==l)for(const g in i)(!e||!ge(e,g))&&(delete i[g],d=!0)}d&&Jt(n.attrs,"set","")}function Bd(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,l;if(e)for(let u in e){if(gs(u))continue;const d=e[u];let f;s&&ge(s,f=tr(u))?!i||!i.includes(f)?t[f]=d:(l||(l={}))[f]=d:co(n.emitsOptions,u)||(!(u in r)||d!==r[u])&&(r[u]=d,a=!0)}if(i){const u=Ie(t),d=l||Se;for(let f=0;f<i.length;f++){const g=i[f];t[g]=Sa(s,u,g,d[g],n,!ge(d,g))}}return a}function Sa(n,e,t,r,s,i){const a=n[t];if(a!=null){const l=ge(a,"default");if(l&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&ce(u)){const{propsDefaults:d}=s;if(t in d)r=d[t];else{const f=Fs(s);r=d[t]=u.call(null,e),f()}}else r=u}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Sn(t))&&(r=!0))}return r}const s_=new WeakMap;function jd(n,e,t=!1){const r=t?s_:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},l=[];let u=!1;if(!ce(n)){const f=g=>{u=!0;const[E,S]=jd(g,e,!0);at(a,E),S&&l.push(...S)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!i&&!u)return Pe(n)&&r.set(n,wr),wr;if(se(i))for(let f=0;f<i.length;f++){const g=tr(i[f]);yu(g)&&(a[g]=Se)}else if(i)for(const f in i){const g=tr(f);if(yu(g)){const E=i[f],S=a[g]=se(E)||ce(E)?{type:E}:at({},E);if(S){const M=Iu(Boolean,S.type),F=Iu(String,S.type);S[0]=M>-1,S[1]=F<0||M<F,(M>-1||ge(S,"default"))&&l.push(g)}}}const d=[a,l];return Pe(n)&&r.set(n,d),d}function yu(n){return n[0]!=="$"&&!gs(n)}function vu(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function Eu(n,e){return vu(n)===vu(e)}function Iu(n,e){return se(e)?e.findIndex(t=>Eu(t,n)):ce(e)&&Eu(e,n)?0:-1}const qd=n=>n[0]==="_"||n==="$stable",gl=n=>se(n)?n.map(Dt):[Dt(n)],i_=(n,e,t)=>{if(e._n)return e;const r=Nm((...s)=>gl(e(...s)),t);return r._c=!1,r},Hd=(n,e,t)=>{const r=n._ctx;for(const s in n){if(qd(s))continue;const i=n[s];if(ce(i))e[s]=i_(s,i,r);else if(i!=null){const a=gl(i);e[s]=()=>a}}},zd=(n,e)=>{const t=gl(e);n.slots.default=()=>t},Kd=(n,e,t)=>{for(const r in e)(t||r!=="_")&&(n[r]=e[r])},o_=(n,e,t)=>{const r=n.slots=Ud();if(n.vnode.shapeFlag&32){const s=e._;s?(Kd(r,e,t),t&&od(r,"_",s,!0)):Hd(e,r)}else e&&zd(n,e)},a_=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Se;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:Kd(s,e,t):(i=!e.$stable,Hd(e,s)),a=e}else e&&(zd(n,e),a={default:1});if(i)for(const l in s)!qd(l)&&a[l]==null&&delete s[l]};function Pa(n,e,t,r,s=!1){if(se(n)){n.forEach((E,S)=>Pa(E,e&&(se(e)?e[S]:e),t,r,s));return}if(bi(r)&&!s)return;const i=r.shapeFlag&4?yl(r.component):r.el,a=s?null:i,{i:l,r:u}=n,d=e&&e.r,f=l.refs===Se?l.refs={}:l.refs,g=l.setupState;if(d!=null&&d!==u&&(Fe(d)?(f[d]=null,ge(g,d)&&(g[d]=null)):_t(d)&&(d.value=null)),ce(u))_n(u,l,12,[a,f]);else{const E=Fe(u),S=_t(u);if(E||S){const M=()=>{if(n.f){const F=E?ge(g,u)?g[u]:f[u]:u.value;s?se(F)&&el(F,i):se(F)?F.includes(i)||F.push(i):E?(f[u]=[i],ge(g,u)&&(g[u]=f[u])):(u.value=[i],n.k&&(f[n.k]=u.value))}else E?(f[u]=a,ge(g,u)&&(g[u]=a)):S&&(u.value=a,n.k&&(f[n.k]=a))};a?(M.id=-1,lt(M,t)):M()}}}const l_=Symbol("_vte"),c_=n=>n.__isTeleport,lt=A_;function u_(n){return h_(n)}function h_(n,e){const t=ad();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:u,setText:d,setElementText:f,parentNode:g,nextSibling:E,setScopeId:S=It,insertStaticContent:M}=n,F=(_,T,C,O=null,D=null,x=null,j=void 0,U=null,B=!!T.dynamicChildren)=>{if(_===T)return;_&&!ls(_,T)&&(O=jt(_),Me(_,D,x,!0),_=null),T.patchFlag===-2&&(B=!1,T.dynamicChildren=null);const{type:N,ref:q,shapeFlag:G}=T;switch(N){case uo:L(_,T,C,O);break;case rr:X(_,T,C,O);break;case ra:_==null&&ee(T,C,O,j);break;case Xe:R(_,T,C,O,D,x,j,U,B);break;default:G&1?Ae(_,T,C,O,D,x,j,U,B):G&6?y(_,T,C,O,D,x,j,U,B):(G&64||G&128)&&N.process(_,T,C,O,D,x,j,U,B,Ct)}q!=null&&D&&Pa(q,_&&_.ref,x,T||_,!T)},L=(_,T,C,O)=>{if(_==null)r(T.el=l(T.children),C,O);else{const D=T.el=_.el;T.children!==_.children&&d(D,T.children)}},X=(_,T,C,O)=>{_==null?r(T.el=u(T.children||""),C,O):T.el=_.el},ee=(_,T,C,O)=>{[_.el,_.anchor]=M(_.children,T,C,O,_.el,_.anchor)},Q=({el:_,anchor:T},C,O)=>{let D;for(;_&&_!==T;)D=E(_),r(_,C,O),_=D;r(T,C,O)},le=({el:_,anchor:T})=>{let C;for(;_&&_!==T;)C=E(_),s(_),_=C;s(T)},Ae=(_,T,C,O,D,x,j,U,B)=>{T.type==="svg"?j="svg":T.type==="math"&&(j="mathml"),_==null?Y(T,C,O,D,x,j,U,B):v(_,T,D,x,j,U,B)},Y=(_,T,C,O,D,x,j,U)=>{let B,N;const{props:q,shapeFlag:G,transition:W,dirs:K}=_;if(B=_.el=a(_.type,x,q&&q.is,q),G&8?f(B,_.children):G&16&&m(_.children,B,null,O,D,ea(_,x),j,U),K&&$n(_,null,O,"created"),w(B,_,_.scopeId,j,O),q){for(const ve in q)ve!=="value"&&!gs(ve)&&i(B,ve,null,q[ve],x,O);"value"in q&&i(B,"value",null,q.value,x),(N=q.onVnodeBeforeMount)&&kt(N,O,_)}K&&$n(_,null,O,"beforeMount");const Z=d_(D,W);Z&&W.beforeEnter(B),r(B,T,C),((N=q&&q.onVnodeMounted)||Z||K)&&lt(()=>{N&&kt(N,O,_),Z&&W.enter(B),K&&$n(_,null,O,"mounted")},D)},w=(_,T,C,O,D)=>{if(C&&S(_,C),O)for(let x=0;x<O.length;x++)S(_,O[x]);if(D){let x=D.subTree;if(T===x){const j=D.vnode;w(_,j,j.scopeId,j.slotScopeIds,D.parent)}}},m=(_,T,C,O,D,x,j,U,B=0)=>{for(let N=B;N<_.length;N++){const q=_[N]=U?hn(_[N]):Dt(_[N]);F(null,q,T,C,O,D,x,j,U)}},v=(_,T,C,O,D,x,j)=>{const U=T.el=_.el;let{patchFlag:B,dynamicChildren:N,dirs:q}=T;B|=_.patchFlag&16;const G=_.props||Se,W=T.props||Se;let K;if(C&&Bn(C,!1),(K=W.onVnodeBeforeUpdate)&&kt(K,C,T,_),q&&$n(T,_,C,"beforeUpdate"),C&&Bn(C,!0),(G.innerHTML&&W.innerHTML==null||G.textContent&&W.textContent==null)&&f(U,""),N?I(_.dynamicChildren,N,U,C,O,ea(T,D),x):j||me(_,T,U,null,C,O,ea(T,D),x,!1),B>0){if(B&16)A(U,G,W,C,D);else if(B&2&&G.class!==W.class&&i(U,"class",null,W.class,D),B&4&&i(U,"style",G.style,W.style,D),B&8){const Z=T.dynamicProps;for(let ve=0;ve<Z.length;ve++){const pe=Z[ve],De=G[pe],ft=W[pe];(ft!==De||pe==="value")&&i(U,pe,De,ft,D,C)}}B&1&&_.children!==T.children&&f(U,T.children)}else!j&&N==null&&A(U,G,W,C,D);((K=W.onVnodeUpdated)||q)&&lt(()=>{K&&kt(K,C,T,_),q&&$n(T,_,C,"updated")},O)},I=(_,T,C,O,D,x,j)=>{for(let U=0;U<T.length;U++){const B=_[U],N=T[U],q=B.el&&(B.type===Xe||!ls(B,N)||B.shapeFlag&70)?g(B.el):C;F(B,N,q,null,O,D,x,j,!0)}},A=(_,T,C,O,D)=>{if(T!==C){if(T!==Se)for(const x in T)!gs(x)&&!(x in C)&&i(_,x,T[x],null,D,O);for(const x in C){if(gs(x))continue;const j=C[x],U=T[x];j!==U&&x!=="value"&&i(_,x,U,j,D,O)}"value"in C&&i(_,"value",T.value,C.value,D)}},R=(_,T,C,O,D,x,j,U,B)=>{const N=T.el=_?_.el:l(""),q=T.anchor=_?_.anchor:l("");let{patchFlag:G,dynamicChildren:W,slotScopeIds:K}=T;K&&(U=U?U.concat(K):K),_==null?(r(N,C,O),r(q,C,O),m(T.children||[],C,q,D,x,j,U,B)):G>0&&G&64&&W&&_.dynamicChildren?(I(_.dynamicChildren,W,C,D,x,j,U),(T.key!=null||D&&T===D.subTree)&&Wd(_,T,!0)):me(_,T,C,q,D,x,j,U,B)},y=(_,T,C,O,D,x,j,U,B)=>{T.slotScopeIds=U,_==null?T.shapeFlag&512?D.ctx.activate(T,C,O,j,B):dt(T,C,O,D,x,j,B):nn(_,T,B)},dt=(_,T,C,O,D,x,j)=>{const U=_.component=O_(_,O,D);if(Nd(_)&&(U.ctx.renderer=Ct),N_(U,!1,j),U.asyncDep){if(D&&D.registerDep(U,$e,j),!_.el){const B=U.subTree=et(rr);X(null,B,T,C)}}else $e(U,_,T,C,D,x,j)},nn=(_,T,C)=>{const O=T.component=_.component;if(I_(_,T,C))if(O.asyncDep&&!O.asyncResolved){Ee(O,T,C);return}else O.next=T,km(O.update),O.effect.dirty=!0,O.update();else T.el=_.el,O.vnode=T},$e=(_,T,C,O,D,x,j)=>{const U=()=>{if(_.isMounted){let{next:q,bu:G,u:W,parent:K,vnode:Z}=_;{const yt=Gd(_);if(yt){q&&(q.el=Z.el,Ee(_,q,j)),yt.asyncDep.then(()=>{_.isUnmounted||U()});return}}let ve=q,pe;Bn(_,!1),q?(q.el=Z.el,Ee(_,q,j)):q=Z,G&&Jo(G),(pe=q.props&&q.props.onVnodeBeforeUpdate)&&kt(pe,K,q,Z),Bn(_,!0);const De=na(_),ft=_.subTree;_.subTree=De,F(ft,De,g(ft.el),jt(ft),_,D,x),q.el=De.el,ve===null&&T_(_,De.el),W&&lt(W,D),(pe=q.props&&q.props.onVnodeUpdated)&&lt(()=>kt(pe,K,q,Z),D)}else{let q;const{el:G,props:W}=T,{bm:K,m:Z,parent:ve}=_,pe=bi(T);if(Bn(_,!1),K&&Jo(K),!pe&&(q=W&&W.onVnodeBeforeMount)&&kt(q,ve,T),Bn(_,!0),G&&fr){const De=()=>{_.subTree=na(_),fr(G,_.subTree,_,D,null)};pe?T.type.__asyncLoader().then(()=>!_.isUnmounted&&De()):De()}else{const De=_.subTree=na(_);F(null,De,C,O,_,D,x),T.el=De.el}if(Z&&lt(Z,D),!pe&&(q=W&&W.onVnodeMounted)){const De=T;lt(()=>kt(q,ve,De),D)}(T.shapeFlag&256||ve&&bi(ve.vnode)&&ve.vnode.shapeFlag&256)&&_.a&&lt(_.a,D),_.isMounted=!0,T=C=O=null}},B=_.effect=new rl(U,It,()=>fl(N),_.scope),N=_.update=()=>{B.dirty&&B.run()};N.i=_,N.id=_.uid,Bn(_,!0),N()},Ee=(_,T,C)=>{T.component=_;const O=_.vnode.props;_.vnode=T,_.next=null,r_(_,T.props,O,C),a_(_,T.children,C),Pn(),fu(_),Cn()},me=(_,T,C,O,D,x,j,U,B=!1)=>{const N=_&&_.children,q=_?_.shapeFlag:0,G=T.children,{patchFlag:W,shapeFlag:K}=T;if(W>0){if(W&128){On(N,G,C,O,D,x,j,U,B);return}else if(W&256){wt(N,G,C,O,D,x,j,U,B);return}}K&8?(q&16&&Vn(N,D,x),G!==N&&f(C,G)):q&16?K&16?On(N,G,C,O,D,x,j,U,B):Vn(N,D,x,!0):(q&8&&f(C,""),K&16&&m(G,C,O,D,x,j,U,B))},wt=(_,T,C,O,D,x,j,U,B)=>{_=_||wr,T=T||wr;const N=_.length,q=T.length,G=Math.min(N,q);let W;for(W=0;W<G;W++){const K=T[W]=B?hn(T[W]):Dt(T[W]);F(_[W],K,C,null,D,x,j,U,B)}N>q?Vn(_,D,x,!0,!1,G):m(T,C,O,D,x,j,U,B,G)},On=(_,T,C,O,D,x,j,U,B)=>{let N=0;const q=T.length;let G=_.length-1,W=q-1;for(;N<=G&&N<=W;){const K=_[N],Z=T[N]=B?hn(T[N]):Dt(T[N]);if(ls(K,Z))F(K,Z,C,null,D,x,j,U,B);else break;N++}for(;N<=G&&N<=W;){const K=_[G],Z=T[W]=B?hn(T[W]):Dt(T[W]);if(ls(K,Z))F(K,Z,C,null,D,x,j,U,B);else break;G--,W--}if(N>G){if(N<=W){const K=W+1,Z=K<q?T[K].el:O;for(;N<=W;)F(null,T[N]=B?hn(T[N]):Dt(T[N]),C,Z,D,x,j,U,B),N++}}else if(N>W)for(;N<=G;)Me(_[N],D,x,!0),N++;else{const K=N,Z=N,ve=new Map;for(N=Z;N<=W;N++){const nt=T[N]=B?hn(T[N]):Dt(T[N]);nt.key!=null&&ve.set(nt.key,N)}let pe,De=0;const ft=W-Z+1;let yt=!1,Gr=0;const rn=new Array(ft);for(N=0;N<ft;N++)rn[N]=0;for(N=K;N<=G;N++){const nt=_[N];if(De>=ft){Me(nt,D,x,!0);continue}let vt;if(nt.key!=null)vt=ve.get(nt.key);else for(pe=Z;pe<=W;pe++)if(rn[pe-Z]===0&&ls(nt,T[pe])){vt=pe;break}vt===void 0?Me(nt,D,x,!0):(rn[vt-Z]=N+1,vt>=Gr?Gr=vt:yt=!0,F(nt,T[vt],C,null,D,x,j,U,B),De++)}const pr=yt?f_(rn):wr;for(pe=pr.length-1,N=ft-1;N>=0;N--){const nt=Z+N,vt=T[nt],gr=nt+1<q?T[nt+1].el:O;rn[N]===0?F(null,vt,C,gr,D,x,j,U,B):yt&&(pe<0||N!==pr[pe]?Bt(vt,C,gr,2):pe--)}}},Bt=(_,T,C,O,D=null)=>{const{el:x,type:j,transition:U,children:B,shapeFlag:N}=_;if(N&6){Bt(_.component.subTree,T,C,O);return}if(N&128){_.suspense.move(T,C,O);return}if(N&64){j.move(_,T,C,Ct);return}if(j===Xe){r(x,T,C);for(let G=0;G<B.length;G++)Bt(B[G],T,C,O);r(_.anchor,T,C);return}if(j===ra){Q(_,T,C);return}if(O!==2&&N&1&&U)if(O===0)U.beforeEnter(x),r(x,T,C),lt(()=>U.enter(x),D);else{const{leave:G,delayLeave:W,afterLeave:K}=U,Z=()=>r(x,T,C),ve=()=>{G(x,()=>{Z(),K&&K()})};W?W(x,Z,ve):ve()}else r(x,T,C)},Me=(_,T,C,O=!1,D=!1)=>{const{type:x,props:j,ref:U,children:B,dynamicChildren:N,shapeFlag:q,patchFlag:G,dirs:W,cacheIndex:K}=_;if(G===-2&&(D=!1),U!=null&&Pa(U,null,C,_,!0),K!=null&&(T.renderCache[K]=void 0),q&256){T.ctx.deactivate(_);return}const Z=q&1&&W,ve=!bi(_);let pe;if(ve&&(pe=j&&j.onVnodeBeforeUnmount)&&kt(pe,T,_),q&6)Nn(_.component,C,O);else{if(q&128){_.suspense.unmount(C,O);return}Z&&$n(_,null,T,"beforeUnmount"),q&64?_.type.remove(_,T,C,Ct,O):N&&!N.hasOnce&&(x!==Xe||G>0&&G&64)?Vn(N,T,C,!1,!0):(x===Xe&&G&384||!D&&q&16)&&Vn(B,T,C),O&&xe(_)}(ve&&(pe=j&&j.onVnodeUnmounted)||Z)&&lt(()=>{pe&&kt(pe,T,_),Z&&$n(_,null,T,"unmounted")},C)},xe=_=>{const{type:T,el:C,anchor:O,transition:D}=_;if(T===Xe){Vo(C,O);return}if(T===ra){le(_);return}const x=()=>{s(C),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(_.shapeFlag&1&&D&&!D.persisted){const{leave:j,delayLeave:U}=D,B=()=>j(C,x);U?U(_.el,x,B):B()}else x()},Vo=(_,T)=>{let C;for(;_!==T;)C=E(_),s(_),_=C;s(T)},Nn=(_,T,C)=>{const{bum:O,scope:D,update:x,subTree:j,um:U,m:B,a:N}=_;Tu(B),Tu(N),O&&Jo(O),D.stop(),x&&(x.active=!1,Me(j,_,T,C)),U&&lt(U,T),lt(()=>{_.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Vn=(_,T,C,O=!1,D=!1,x=0)=>{for(let j=x;j<_.length;j++)Me(_[j],T,C,O,D)},jt=_=>{if(_.shapeFlag&6)return jt(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const T=E(_.anchor||_.el),C=T&&T[l_];return C?E(C):T};let Wr=!1;const Xs=(_,T,C)=>{_==null?T._vnode&&Me(T._vnode,null,null,!0):F(T._vnode||null,_,T,null,null,null,C),Wr||(Wr=!0,fu(),Cd(),Wr=!1),T._vnode=_},Ct={p:F,um:Me,m:Bt,r:xe,mt:dt,mc:m,pc:me,pbc:I,n:jt,o:n};let Mn,fr;return{render:Xs,hydrate:Mn,createApp:e_(Xs,Mn)}}function ea({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Bn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function d_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Wd(n,e,t=!1){const r=n.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=hn(s[i]),l.el=a.el),!t&&l.patchFlag!==-2&&Wd(a,l)),l.type===uo&&(l.el=a.el)}}function f_(n){const e=n.slice(),t=[0];let r,s,i,a,l;const u=n.length;for(r=0;r<u;r++){const d=n[r];if(d!==0){if(s=t[t.length-1],n[s]<d){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)l=i+a>>1,n[t[l]]<d?i=l+1:a=l;d<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function Gd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gd(e)}function Tu(n){if(n)for(let e=0;e<n.length;e++)n[e].active=!1}const p_=Symbol.for("v-scx"),g_=()=>Ri(p_),_i={};function ta(n,e,t){return Qd(n,e,t)}function Qd(n,e,{immediate:t,deep:r,flush:s,once:i,onTrack:a,onTrigger:l}=Se){if(e&&i){const Y=e;e=(...w)=>{Y(...w),Ae()}}const u=it,d=Y=>r===!0?Y:Hn(Y,r===!1?1:void 0);let f,g=!1,E=!1;if(_t(n)?(f=()=>n.value,g=bs(n)):ms(n)?(f=()=>d(n),g=!0):se(n)?(E=!0,g=n.some(Y=>ms(Y)||bs(Y)),f=()=>n.map(Y=>{if(_t(Y))return Y.value;if(ms(Y))return d(Y);if(ce(Y))return _n(Y,u,2)})):ce(n)?e?f=()=>_n(n,u,2):f=()=>(S&&S(),Rt(n,u,3,[M])):f=It,e&&r){const Y=f;f=()=>Hn(Y())}let S,M=Y=>{S=Q.onStop=()=>{_n(Y,u,4),S=Q.onStop=void 0}},F;if(ho)if(M=It,e?t&&Rt(e,u,3,[f(),E?[]:void 0,M]):f(),s==="sync"){const Y=g_();F=Y.__watcherHandles||(Y.__watcherHandles=[])}else return It;let L=E?new Array(n.length).fill(_i):_i;const X=()=>{if(!(!Q.active||!Q.dirty))if(e){const Y=Q.run();(r||g||(E?Y.some((w,m)=>nr(w,L[m])):nr(Y,L)))&&(S&&S(),Rt(e,u,3,[Y,L===_i?void 0:E&&L[0]===_i?[]:L,M]),L=Y)}else Q.run()};X.allowRecurse=!!e;let ee;s==="sync"?ee=X:s==="post"?ee=()=>lt(X,u&&u.suspense):(X.pre=!0,u&&(X.id=u.uid),ee=()=>fl(X));const Q=new rl(f,It,ee),le=nm(),Ae=()=>{Q.stop(),le&&el(le.effects,Q)};return e?t?X():L=Q.run():s==="post"?lt(Q.run.bind(Q),u&&u.suspense):Q.run(),F&&F.push(Ae),Ae}function m_(n,e,t){const r=this.proxy,s=Fe(n)?n.includes(".")?Jd(r,n):()=>r[n]:n.bind(r,r);let i;ce(e)?i=e:(i=e.handler,t=e);const a=Fs(this),l=Qd(s,i.bind(r),t);return a(),l}function Jd(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}function Hn(n,e=1/0,t){if(e<=0||!Pe(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,_t(n))Hn(n.value,e,t);else if(se(n))for(let r=0;r<n.length;r++)Hn(n[r],e,t);else if(td(n)||Ar(n))n.forEach(r=>{Hn(r,e,t)});else if(sd(n)){for(const r in n)Hn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Hn(n[r],e,t)}return n}const __=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${tr(e)}Modifiers`]||n[`${Sn(e)}Modifiers`];function y_(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Se;let s=t;const i=e.startsWith("update:"),a=i&&__(r,e.slice(7));a&&(a.trim&&(s=t.map(f=>Fe(f)?f.trim():f)),a.number&&(s=t.map(Wg)));let l,u=r[l=Qo(e)]||r[l=Qo(tr(e))];!u&&i&&(u=r[l=Qo(Sn(e))]),u&&Rt(u,n,6,s);const d=r[l+"Once"];if(d){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Rt(d,n,6,s)}}function Xd(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},l=!1;if(!ce(n)){const u=d=>{const f=Xd(d,e,!0);f&&(l=!0,at(a,f))};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!i&&!l?(Pe(n)&&r.set(n,null),null):(se(i)?i.forEach(u=>a[u]=null):at(a,i),Pe(n)&&r.set(n,a),a)}function co(n,e){return!n||!ro(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(n,e[0].toLowerCase()+e.slice(1))||ge(n,Sn(e))||ge(n,e))}function na(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:u,render:d,renderCache:f,props:g,data:E,setupState:S,ctx:M,inheritAttrs:F}=n,L=Fi(n);let X,ee;try{if(t.shapeFlag&4){const le=s||r,Ae=le;X=Dt(d.call(Ae,le,f,g,S,E,M)),ee=l}else{const le=e;X=Dt(le.length>1?le(g,{attrs:l,slots:a,emit:u}):le(g,null)),ee=e.props?l:v_(l)}}catch(le){vs.length=0,ao(le,n,1),X=et(rr)}let Q=X;if(ee&&F!==!1){const le=Object.keys(ee),{shapeFlag:Ae}=Q;le.length&&Ae&7&&(i&&le.some(Za)&&(ee=E_(ee,i)),Q=Dr(Q,ee,!1,!0))}return t.dirs&&(Q=Dr(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(t.dirs):t.dirs),t.transition&&(Q.transition=t.transition),X=Q,Fi(L),X}const v_=n=>{let e;for(const t in n)(t==="class"||t==="style"||ro(t))&&((e||(e={}))[t]=n[t]);return e},E_=(n,e)=>{const t={};for(const r in n)(!Za(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function I_(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:l,patchFlag:u}=e,d=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&u>=0){if(u&1024)return!0;if(u&16)return r?wu(r,a,d):!!a;if(u&8){const f=e.dynamicProps;for(let g=0;g<f.length;g++){const E=f[g];if(a[E]!==r[E]&&!co(d,E))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?wu(r,a,d):!0:!!a;return!1}function wu(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!co(t,i))return!0}return!1}function T_({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const w_=n=>n.__isSuspense;function A_(n,e){e&&e.pendingBranch?se(n)?e.effects.push(...n):e.effects.push(n):Dm(n)}const Xe=Symbol.for("v-fgt"),uo=Symbol.for("v-txt"),rr=Symbol.for("v-cmt"),ra=Symbol.for("v-stc"),vs=[];let gt=null;function ae(n=!1){vs.push(gt=n?null:[])}function b_(){vs.pop(),gt=vs[vs.length-1]||null}let Ps=1;function Au(n){Ps+=n,n<0&&gt&&(gt.hasOnce=!0)}function Yd(n){return n.dynamicChildren=Ps>0?gt||wr:null,b_(),Ps>0&&gt&&gt.push(n),n}function ue(n,e,t,r,s,i){return Yd(oe(n,e,t,r,s,i,!0))}function ml(n,e,t,r,s){return Yd(et(n,e,t,r,s,!0))}function R_(n){return n?n.__v_isVNode===!0:!1}function ls(n,e){return n.type===e.type&&n.key===e.key}const Zd=({key:n})=>n??null,Si=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Fe(n)||_t(n)||ce(n)?{i:Vt,r:n,k:e,f:!!t}:n:null);function oe(n,e=null,t=null,r=0,s=null,i=n===Xe?0:1,a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Zd(e),ref:e&&Si(e),scopeId:Dd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Vt};return l?(_l(u,t),i&128&&n.normalize(u)):t&&(u.shapeFlag|=Fe(t)?8:16),Ps>0&&!a&&gt&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&gt.push(u),u}const et=S_;function S_(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===Km)&&(n=rr),R_(n)){const l=Dr(n,e,!0);return t&&_l(l,t),Ps>0&&!i&&gt&&(l.shapeFlag&6?gt[gt.indexOf(n)]=l:gt.push(l)),l.patchFlag=-2,l}if(L_(n)&&(n=n.__vccOpts),e){e=P_(e);let{class:l,style:u}=e;l&&!Fe(l)&&(e.class=Tn(l)),Pe(u)&&(wd(u)&&!se(u)&&(u=at({},u)),e.style=nl(u))}const a=Fe(n)?1:w_(n)?128:c_(n)?64:Pe(n)?4:ce(n)?2:0;return oe(n,e,t,r,s,a,i,!0)}function P_(n){return n?wd(n)||$d(n)?at({},n):n:null}function Dr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:u}=n,d=e?C_(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:d,key:d&&Zd(d),ref:e&&e.ref?t&&i?se(i)?i.concat(Si(e)):[i,Si(e)]:Si(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Xe?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:u,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Dr(n.ssContent),ssFallback:n.ssFallback&&Dr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return u&&r&&Od(f,u.clone(f)),f}function zn(n=" ",e=0){return et(uo,null,n,e)}function Et(n="",e=!1){return e?(ae(),ml(rr,null,n)):et(rr,null,n)}function Dt(n){return n==null||typeof n=="boolean"?et(rr):se(n)?et(Xe,null,n.slice()):typeof n=="object"?hn(n):et(uo,null,String(n))}function hn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Dr(n)}function _l(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(se(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),_l(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!$d(e)?e._ctx=Vt:s===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:Vt},t=32):(e=String(e),r&64?(t=16,e=[zn(e)]):t=8);n.children=e,n.shapeFlag|=t}function C_(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Tn([e.class,r.class]));else if(s==="style")e.style=nl([e.style,r.style]);else if(ro(s)){const i=e[s],a=r[s];a&&i!==a&&!(se(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function kt(n,e,t,r=null){Rt(n,e,7,[t,r])}const k_=Ld();let D_=0;function O_(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||k_,i={uid:D_++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new em(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jd(r,s),emitsOptions:Xd(r,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:r.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=y_.bind(null,i),n.ce&&n.ce(i),i}let it=null,$i,Ca;{const n=ad(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};$i=e("__VUE_INSTANCE_SETTERS__",t=>it=t),Ca=e("__VUE_SSR_SETTERS__",t=>ho=t)}const Fs=n=>{const e=it;return $i(n),n.scope.on(),()=>{n.scope.off(),$i(e)}},bu=()=>{it&&it.scope.off(),$i(null)};function ef(n){return n.vnode.shapeFlag&4}let ho=!1;function N_(n,e=!1,t=!1){e&&Ca(e);const{props:r,children:s}=n.vnode,i=ef(n);n_(n,r,i,e),o_(n,s,t);const a=i?V_(n,e):void 0;return e&&Ca(!1),a}function V_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Wm);const{setup:r}=t;if(r){const s=n.setupContext=r.length>1?x_(n):null,i=Fs(n);Pn();const a=_n(r,n,0,[n.props,s]);if(Cn(),i(),nd(a)){if(a.then(bu,bu),e)return a.then(l=>{Ru(n,l,e)}).catch(l=>{ao(l,n,0)});n.asyncDep=a}else Ru(n,a,e)}else tf(n,e)}function Ru(n,e,t){ce(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Pe(e)&&(n.setupState=Rd(e)),tf(n,t)}let Su;function tf(n,e,t){const r=n.type;if(!n.render){if(!e&&Su&&!r.render){const s=r.template||pl(n).template;if(s){const{isCustomElement:i,compilerOptions:a}=n.appContext.config,{delimiters:l,compilerOptions:u}=r,d=at(at({isCustomElement:i,delimiters:l},a),u);r.render=Su(s,d)}}n.render=r.render||It}{const s=Fs(n);Pn();try{Gm(n)}finally{Cn(),s()}}}const M_={get(n,e){return ht(n,"get",""),n[e]}};function x_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,M_),slots:n.slots,emit:n.emit,expose:e}}function yl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Rd(wm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in _s)return _s[t](n)},has(e,t){return t in e||t in _s}})):n.proxy}function L_(n){return ce(n)&&"__vccOpts"in n}const F_=(n,e)=>Am(n,e,ho),U_="3.4.33";/**
* @vue/runtime-dom v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const $_="http://www.w3.org/2000/svg",B_="http://www.w3.org/1998/Math/MathML",zt=typeof document<"u"?document:null,Pu=zt&&zt.createElement("template"),j_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?zt.createElementNS($_,n):e==="mathml"?zt.createElementNS(B_,n):t?zt.createElement(n,{is:t}):zt.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>zt.createTextNode(n),createComment:n=>zt.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>zt.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Pu.innerHTML=r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n;const l=Pu.content;if(r==="svg"||r==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}e.insertBefore(l,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},q_=Symbol("_vtc");function H_(n,e,t){const r=n[q_];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Cu=Symbol("_vod"),z_=Symbol("_vsh"),K_=Symbol(""),W_=/(^|;)\s*display\s*:/;function G_(n,e,t){const r=n.style,s=Fe(t);let i=!1;if(t&&!s){if(e)if(Fe(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&Pi(r,l,"")}else for(const a in e)t[a]==null&&Pi(r,a,"");for(const a in t)a==="display"&&(i=!0),Pi(r,a,t[a])}else if(s){if(e!==t){const a=r[K_];a&&(t+=";"+a),r.cssText=t,i=W_.test(t)}}else e&&n.removeAttribute("style");Cu in n&&(n[Cu]=i?r.display:"",n[z_]&&(r.display="none"))}const ku=/\s*!important$/;function Pi(n,e,t){if(se(t))t.forEach(r=>Pi(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Q_(n,e);ku.test(t)?n.setProperty(Sn(r),t.replace(ku,""),"important"):n[r]=t}}const Du=["Webkit","Moz","ms"],sa={};function Q_(n,e){const t=sa[e];if(t)return t;let r=tr(e);if(r!=="filter"&&r in n)return sa[e]=r;r=id(r);for(let s=0;s<Du.length;s++){const i=Du[s]+r;if(i in n)return sa[e]=i}return e}const Ou="http://www.w3.org/1999/xlink";function Nu(n,e,t,r,s,i=Zg(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Ou,e.slice(6,e.length)):n.setAttributeNS(Ou,e,t):t==null||i&&!ld(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Rn(t)?String(t):t)}function J_(n,e,t,r){if(e==="innerHTML"||e==="textContent"){if(t==null)return;n[e]=t;return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let i=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=ld(t):t==null&&a==="string"?(t="",i=!0):a==="number"&&(t=0,i=!0)}try{n[e]=t}catch{}i&&n.removeAttribute(e)}function X_(n,e,t,r){n.addEventListener(e,t,r)}function Y_(n,e,t,r){n.removeEventListener(e,t,r)}const Vu=Symbol("_vei");function Z_(n,e,t,r,s=null){const i=n[Vu]||(n[Vu]={}),a=i[e];if(r&&a)a.value=r;else{const[l,u]=ey(e);if(r){const d=i[e]=ry(r,s);X_(n,l,d,u)}else a&&(Y_(n,l,a,u),i[e]=void 0)}}const Mu=/(?:Once|Passive|Capture)$/;function ey(n){let e;if(Mu.test(n)){e={};let r;for(;r=n.match(Mu);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Sn(n.slice(2)),e]}let ia=0;const ty=Promise.resolve(),ny=()=>ia||(ty.then(()=>ia=0),ia=Date.now());function ry(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Rt(sy(r,t.value),e,5,[r])};return t.value=n,t.attached=ny(),t}function sy(n,e){if(se(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const xu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,iy=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?H_(n,r,a):e==="style"?G_(n,t,r):ro(e)?Za(e)||Z_(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):oy(n,e,r,a))?(J_(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Nu(n,e,r,a,i,e!=="value")):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Nu(n,e,r,a))};function oy(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&xu(e)&&ce(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xu(e)&&Fe(t)?!1:e in n}const ay=["ctrl","shift","alt","meta"],ly={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>ay.some(t=>n[`${t}Key`]&&!e.includes(t))},nf=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=ly[e[a]];if(l&&l(s,e))return}return n(s,...i)})},cy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Lu=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=Sn(s.key);if(e.some(a=>a===i||cy[a]===i))return n(s)})},uy=at({patchProp:iy},j_);let Fu;function hy(){return Fu||(Fu=u_(uy))}const dy=(...n)=>{const e=hy().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=py(r);if(!s)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const a=t(s,!1,fy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function fy(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function py(n){return Fe(n)?document.querySelector(n):n}const fo=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},gy={data(){return{darkMode:"false"}},methods:{toggle(){console.log(this.darkMode),this.darkMode=="true"?(this.darkMode="false",document.body.classList.remove("dark")):(this.darkMode="true",document.body.classList.add("dark")),localStorage.setItem("darkTheme",this.darkMode)}},mounted(){localStorage.getItem("darkTheme")?this.darkMode=localStorage.getItem("darkTheme"):localStorage.setItem("darkTheme","false"),this.darkMode=="true"?document.body.classList.add("dark"):document.body.classList.remove("dark")}},my={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},_y=oe("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1),yy=[_y],vy={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},Ey=oe("path",{"stroke-linecap":"round","stroke5-linejoin":"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1),Iy=[Ey];function Ty(n,e,t,r,s,i){return ae(),ue("button",{onClick:e[0]||(e[0]=a=>i.toggle()),class:"text-slate-500 dark:text-slate-400","aria-hidden":"true"},[s.darkMode=="false"?(ae(),ue("svg",my,yy)):(ae(),ue("svg",vy,Iy))])}const rf=fo(gy,[["render",Ty]]),wy={class:"flex min-h-screen w-screen justify-center items-center bg-slate-100 dark:bg-slate-900"},Ay={class:"bg-white px-8 py-8 rounded-md shadow-md flex flex-col gap-4 justify-center items-center max-w-[min(80vw,30rem)] text-center dark:bg-slate-800"},by=oe("h1",{class:"text-2xl dark:text-slate-100"},"Sign In",-1),Ry=oe("h2",{class:"text-slate-800 dark:text-slate-300"}," Sign in using Google to the App because I'm too lazy to add the other methods. Also I'll set up perms later using Firebase Auth. ",-1),Sy={emits:["response"]},sf=Object.assign(Sy,{__name:"Sign-in",setup(n){return(e,t)=>(ae(),ue("main",wy,[oe("div",Ay,[by,Ry,oe("button",{class:"px-3 rounded-md py-2 bg-indigo-500 active:bg-indigo-600 text-slate-200 active:text-slate-300 text-sm",onClick:t[0]||(t[0]=r=>e.$emit("response","logIn"))}," Sign in with Google ")]),et(rf,{class:"absolute top-0 right-0 m-4"})]))}}),Py={emits:["logOut"]};function Cy(n,e,t,r,s,i){return ae(),ue("button",{onClick:e[0]||(e[0]=a=>n.$emit("logOut","logOut"))},"Log Out")}const of=fo(Py,[["render",Cy]]),ky={props:{color:String,width:Number,height:Number}},Dy=["width","height"],Oy=oe("path",{"fill-rule":"evenodd",d:"M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"},null,-1),Ny=[Oy];function Vy(n,e,t,r,s,i){return ae(),ue("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,fill:"currentColor",class:Tn(["bi bi-arrow-90deg-right",t.color]),viewBox:"0 0 16 16"},Ny,10,Dy)}const My=fo(ky,[["render",Vy]]),xy={class:"px-2 flex flex-col items-start gap-1"},Ly={key:0,class:"flex gap-2 items-baseline"},Fy={class:"text-slate-500 text-sm dark:text-slate-400"},Uy={key:1,class:"flex gap-1 items-end pl-1 text-slate-700 dark:text-slate-400"},$y={class:"text-sm"},By=["href"],jy={class:"flex gap-2"},qy={key:0},Hy={key:0},zy=["href"],Ky={key:0,class:"text-xs text-slate-500 dark:text-slate-300"},Wy={key:2},Gy=["src"],Qy={key:3},Jy=["src"],Xy={class:"absolute hide bottom-8 left-0 bg-white rounded-md rounded-bl-none DROPDOWN-MENU flex text-sm flex-col shadow-sm border-slate-200 border transition-all opacity-100 dark:bg-slate-900 dark:border-slate-800"},Yy={key:2,class:"text-sm text-slate-600 dark:text-slate-300"},Zy={data(){return{isEditing:!1}},props:{message:Object,user:Object,messages:Object,index:Number},methods:{isLink(n){return!!(n.startsWith("https://")||n.startsWith("http://"))},isOnlyImages(){const e=this.message.data().message.split(" ");for(let t=0;t<e.length;t++)if(!this.isImage(e[t]))return!1;return!0},containsImages(){const e=this.message.data().message.split(" ");for(let t=0;t<e.length;t++)if(this.isImage(e[t]))return!0;return!1},images(){const e=this.message.data().message.split(" "),t=[];for(let r=0;r<e.length;r++)this.isImage(e[r])&&t.push(e[r]);return t},isImage(n){return/^https?:\/\/.+(\.(jpg|jpeg|png|webp|avif|gif|svg))?$/i.test(n)},formattedDate(){if(new Date(this.message.data().time).toDateString()!==new Date().toDateString())return new Date(this.message.data().time).toLocaleDateString();const n=new Date(this.message.data().time),e={hour:"numeric",minute:"numeric",hour12:!0};return n.toLocaleTimeString([],e)},findReply(){const n=this.messages.findIndex(e=>e.id==this.message.data().reply);return this.messages[n].data().message},togglePopup(n){n.currentTarget.querySelector(".DROPDOWN-MENU").classList.toggle("hide")},detailsCheck(n){return!this.messages[this.index-1]||JSON.parse(this.messages[this.index-1].data().user).uid!=JSON.parse(this.messages[this.index].data().user).uid},edit(){this.isEditing=!0,this.$emit("isEditing",!0)},submitEdit(){console.log(this.$refs.newText.innerText);const n=this.$refs.newText.innerText.trim();this.$emit("edit",n),this.isEditing=!1,this.$emit("isEditing",!1)},cancelEdit(){this.isEditing=!1,this.$emit("isEditing",!1)}},emits:["reply","delete","seeReply","edit","isEditing"]},ev=Object.assign(Zy,{__name:"Message",setup(n){return(e,t)=>(ae(),ue("div",xy,[e.detailsCheck()?(ae(),ue("div",Ly,[oe("h1",null,ct(JSON.parse(n.message.data().user).displayName),1),oe("h2",Fy,ct(e.formattedDate()),1)])):Et("",!0),n.message.data().reply?(ae(),ue("div",Uy,[et(My,{class:"pl-1",height:"16",width:"16",color:"text-slate-700"}),oe("p",$y,[zn(" Replying to "),oe("a",{onClick:t[0]||(t[0]=r=>e.$emit("seeReply")),href:"#"+n.message.data().reply},ct(e.findReply()),9,By)])])):Et("",!0),oe("div",jy,[oe("div",{class:Tn(["px-2 py-2 rounded-md",{"bg-slate-100 dark:bg-slate-700":e.isEditing,"bg-white dark:bg-slate-800":!e.isEditing,"rounded-tl-none":!e.isEditing}])},[!e.isEditing&&!e.isOnlyImages()?(ae(),ue("p",qy,[(ae(!0),ue(Xe,null,Xn(n.message.data().message.split(" "),(r,s)=>(ae(),ue("span",null,[e.isLink(r)?(ae(),ue("a",{key:1,href:r,class:"underline"},ct(r),9,zy)):(ae(),ue("span",Hy,ct(r),1)),zn(" "+ct(s!=n.message.data().message.split(" ").length-1?" ":""),1)]))),256)),n.message.data().edited?(ae(),ue("span",Ky,ct(" ")+"(edited)")):Et("",!0)])):Et("",!0),e.isEditing?(ae(),ue("p",{key:1,ref:"newText",onKeypress:t[1]||(t[1]=Lu(nf(r=>e.submitEdit(),["prevent"]),["enter"])),onKeyup:t[2]||(t[2]=Lu(r=>e.cancelEdit(),["escape"])),contenteditable:"true"},ct(n.message.data().message),545)):Et("",!0),!e.isEditing&&e.isOnlyImages()?(ae(),ue("div",Wy,[(ae(!0),ue(Xe,null,Xn(e.images(),(r,s)=>(ae(),ue("img",{class:Tn(["rounded-md max-w-80 max-h-80",{"rounded-tl-none":s==0,"mt-2":s!=0}]),src:r,alt:""},null,10,Gy))),256))])):Et("",!0),!e.isEditing&&!e.isOnlyImages()&&e.containsImages()?(ae(),ue("div",Qy,[(ae(!0),ue(Xe,null,Xn(e.images(),r=>(ae(),ue("img",{class:"rounded-md mt-2 max-w-80 max-h-80",src:r,alt:""},null,8,Jy))),256))])):Et("",!0)],2),oe("button",{class:"relative DROPDOWN-MENU-TOGGLE",onClick:t[6]||(t[6]=r=>e.togglePopup(r))},[zn(" : "),oe("div",Xy,[oe("button",{class:"px-2 py-1",onClick:t[3]||(t[3]=r=>e.$emit("reply"))},"Reply"),JSON.parse(n.message.data().user).uid==n.user.uid?(ae(),ue("button",{key:0,class:"bg-slate-50 px-2 py-1 dark:bg-slate-800/50",onClick:t[4]||(t[4]=r=>e.edit())}," Edit ")):Et("",!0),JSON.parse(n.message.data().user).uid==n.user.uid?(ae(),ue("button",{key:1,class:"px-2 py-1",onClick:t[5]||(t[5]=r=>e.$emit("delete"))}," Delete ")):Et("",!0)])])]),e.isEditing?(ae(),ue("p",Yy,[zn(" escape to "),oe("button",{class:"text-indigo-500 dark:text-indigo-400",onClick:t[7]||(t[7]=(...r)=>e.cancelEdit&&e.cancelEdit(...r))}," cancel "),zn(" • enter to "),oe("button",{class:"text-indigo-500 dark:text-indigo-400",onClick:t[8]||(t[8]=(...r)=>e.submitEdit&&e.submitEdit(...r))}," save ")])):Et("",!0)]))}}),tv=fo(ev,[["__scopeId","data-v-7a9a87fd"]]),nv={class:"px-8 py-6 bg-slate-200/75 flex flex-col items-center justify-between dark:bg-slate-900/75"},rv=oe("h1",null,"Channels",-1),sv={class:"mt-2"},iv=["onClick"],ov={class:"flex justify-center items-center gap-2"},av={props:{db:Object,channels:Array,selectedChannel:String},emits:["swap","logOut"],mounted(){console.log("STUFF:",this.channels[0]==this.selectedChannel)}},lv=Object.assign(av,{__name:"Sidebar",setup(n){return(e,t)=>(ae(),ue("aside",nv,[oe("section",null,[rv,oe("ul",sv,[(ae(!0),ue(Xe,null,Xn(n.channels,r=>(ae(),ue("li",{class:Tn([{"bg-white/75 dark:bg-slate-700/75":r==n.selectedChannel,"text-slate-700 dark:text-slate-300":r!=n.selectedChannel},"px-2 py-1 rounded-md"])},[oe("button",{onClick:s=>e.$emit("swap",r)},ct(r),9,iv)],2))),256))])]),oe("div",ov,[et(of,{class:"py-2 px-3 rounded-md bg-indigo-500 active:bg-indigo-600 text-slate-200 active:text-slate-300",onLogOut:t[0]||(t[0]=()=>e.$emit("logOut","logOut"))}),et(rf)])]))}});var Uu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},cv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},lf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let E=(l&15)<<2|d>>6,S=d&63;u||(S=64,a||(E=64)),r.push(t[f],t[g],t[E],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(af(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):cv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||d==null||g==null)throw new uv;const E=i<<2|l>>4;if(r.push(E),d!==64){const S=l<<4&240|d>>2;if(r.push(S),g!==64){const M=d<<6&192|g;r.push(M)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class uv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hv=function(n){const e=af(n);return lf.encodeByteArray(e,!0)},Bi=function(n){return hv(n).replace(/\./g,"")},cf=function(n){try{return lf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fv=()=>dv().__FIREBASE_DEFAULTS__,pv=()=>{if(typeof process>"u"||typeof Uu>"u")return;const n=Uu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&cf(n[1]);return e&&JSON.parse(e)},po=()=>{try{return fv()||pv()||gv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},uf=n=>{var e,t;return(t=(e=po())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},mv=n=>{const e=uf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},hf=()=>{var n;return(n=po())===null||n===void 0?void 0:n.config},df=n=>{var e;return(e=po())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function yv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Bi(JSON.stringify(t)),Bi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Ev(){var n;const e=(n=po())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Iv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Tv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wv(){const n=ze();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Av(){return!Ev()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bv(){try{return typeof indexedDB=="object"}catch{return!1}}function Rv(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="FirebaseError";class tn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Sv,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Us.prototype.create)}}class Us{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Pv(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new tn(s,l,r)}}function Pv(n,e){return n.replace(Cv,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Cv=/\{\$([^}]+)}/g;function kv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ji(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if($u(i)&&$u(a)){if(!ji(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function $u(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Dv(n,e){const t=new Ov(n,e);return t.subscribe.bind(t)}class Ov{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Nv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=oa),s.error===void 0&&(s.error=oa),s.complete===void 0&&(s.complete=oa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function oa(){}/**
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
 */function Ke(n){return n&&n._delegate?n._delegate:n}class sr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new _v;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xv(e))try{this.getOrInitializeService({instanceIdentifier:jn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jn){return this.instances.has(e)}getOptions(e=jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mv(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jn){return this.component?this.component.multipleInstances?e:jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mv(n){return n===jn?void 0:n}function xv(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Vv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(de||(de={}));const Fv={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},Uv=de.INFO,$v={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},Bv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=$v[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vl{constructor(e){this.name=e,this._logLevel=Uv,this._logHandler=Bv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const jv=(n,e)=>e.some(t=>n instanceof t);let Bu,ju;function qv(){return Bu||(Bu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hv(){return ju||(ju=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ff=new WeakMap,ka=new WeakMap,pf=new WeakMap,aa=new WeakMap,El=new WeakMap;function zv(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(yn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ff.set(t,n)}).catch(()=>{}),El.set(e,n),e}function Kv(n){if(ka.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});ka.set(n,e)}let Da={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ka.get(n);if(e==="objectStoreNames")return n.objectStoreNames||pf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Wv(n){Da=n(Da)}function Gv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(la(this),e,...t);return pf.set(r,e.sort?e.sort():[e]),yn(r)}:Hv().includes(n)?function(...e){return n.apply(la(this),e),yn(ff.get(this))}:function(...e){return yn(n.apply(la(this),e))}}function Qv(n){return typeof n=="function"?Gv(n):(n instanceof IDBTransaction&&Kv(n),jv(n,qv())?new Proxy(n,Da):n)}function yn(n){if(n instanceof IDBRequest)return zv(n);if(aa.has(n))return aa.get(n);const e=Qv(n);return e!==n&&(aa.set(n,e),El.set(e,n)),e}const la=n=>El.get(n);function Jv(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=yn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(yn(a.result),u.oldVersion,u.newVersion,yn(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Xv=["get","getKey","getAll","getAllKeys","count"],Yv=["put","add","delete","clear"],ca=new Map;function qu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ca.get(e))return ca.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Yv.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Xv.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return ca.set(e,i),i}Wv(n=>({...n,get:(e,t,r)=>qu(e,t)||n.get(e,t,r),has:(e,t)=>!!qu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(eE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function eE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oa="@firebase/app",Hu="0.10.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new vl("@firebase/app"),tE="@firebase/app-compat",nE="@firebase/analytics-compat",rE="@firebase/analytics",sE="@firebase/app-check-compat",iE="@firebase/app-check",oE="@firebase/auth",aE="@firebase/auth-compat",lE="@firebase/database",cE="@firebase/database-compat",uE="@firebase/functions",hE="@firebase/functions-compat",dE="@firebase/installations",fE="@firebase/installations-compat",pE="@firebase/messaging",gE="@firebase/messaging-compat",mE="@firebase/performance",_E="@firebase/performance-compat",yE="@firebase/remote-config",vE="@firebase/remote-config-compat",EE="@firebase/storage",IE="@firebase/storage-compat",TE="@firebase/firestore",wE="@firebase/vertexai-preview",AE="@firebase/firestore-compat",bE="firebase",RE="10.12.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="[DEFAULT]",SE={[Oa]:"fire-core",[tE]:"fire-core-compat",[rE]:"fire-analytics",[nE]:"fire-analytics-compat",[iE]:"fire-app-check",[sE]:"fire-app-check-compat",[oE]:"fire-auth",[aE]:"fire-auth-compat",[lE]:"fire-rtdb",[cE]:"fire-rtdb-compat",[uE]:"fire-fn",[hE]:"fire-fn-compat",[dE]:"fire-iid",[fE]:"fire-iid-compat",[pE]:"fire-fcm",[gE]:"fire-fcm-compat",[mE]:"fire-perf",[_E]:"fire-perf-compat",[yE]:"fire-rc",[vE]:"fire-rc-compat",[EE]:"fire-gcs",[IE]:"fire-gcs-compat",[TE]:"fire-fst",[AE]:"fire-fst-compat",[wE]:"fire-vertex","fire-js":"fire-js",[bE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new Map,PE=new Map,Va=new Map;function zu(n,e){try{n.container.addComponent(e)}catch(t){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Or(n){const e=n.name;if(Va.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;Va.set(e,n);for(const t of qi.values())zu(t,n);for(const t of PE.values())zu(t,n);return!0}function Il(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Kt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vn=new Us("app","Firebase",CE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=RE;function gf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Na,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw vn.create("bad-app-name",{appName:String(s)});if(t||(t=hf()),!t)throw vn.create("no-options");const i=qi.get(s);if(i){if(ji(t,i.options)&&ji(r,i.config))return i;throw vn.create("duplicate-app",{appName:s})}const a=new Lv(s);for(const u of Va.values())a.addComponent(u);const l=new kE(t,r,a);return qi.set(s,l),l}function mf(n=Na){const e=qi.get(n);if(!e&&n===Na&&hf())return gf();if(!e)throw vn.create("no-app",{appName:n});return e}function En(n,e,t){var r;let s=(r=SE[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(l.join(" "));return}Or(new sr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const DE="firebase-heartbeat-database",OE=1,Cs="firebase-heartbeat-store";let ua=null;function _f(){return ua||(ua=Jv(DE,OE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Cs)}catch(t){console.warn(t)}}}}).catch(n=>{throw vn.create("idb-open",{originalErrorMessage:n.message})})),ua}async function NE(n){try{const t=(await _f()).transaction(Cs),r=await t.objectStore(Cs).get(yf(n));return await t.done,r}catch(e){if(e instanceof tn)ir.warn(e.message);else{const t=vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(t.message)}}}async function Ku(n,e){try{const r=(await _f()).transaction(Cs,"readwrite");await r.objectStore(Cs).put(e,yf(n)),await r.done}catch(t){if(t instanceof tn)ir.warn(t.message);else{const r=vn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ir.warn(r.message)}}}function yf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const VE=1024,ME=30*24*60*60*1e3;class xE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new FE(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Wu();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=ME}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wu(),{heartbeatsToSend:r,unsentEntries:s}=LE(this._heartbeatsCache.heartbeats),i=Bi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wu(){return new Date().toISOString().substring(0,10)}function LE(n,e=VE){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Gu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Gu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class FE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bv()?Rv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await NE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ku(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ku(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Gu(n){return Bi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(n){Or(new sr("platform-logger",e=>new Zv(e),"PRIVATE")),Or(new sr("heartbeat",e=>new xE(e),"PRIVATE")),En(Oa,Hu,n),En(Oa,Hu,"esm2017"),En("fire-js","")}UE("");var Qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yn,vf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function v(){}v.prototype=m.prototype,w.D=m.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(I,A,R){for(var y=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)y[dt-2]=arguments[dt];return m.prototype[A].apply(I,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,v){v||(v=0);var I=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)I[A]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(A=0;16>A;++A)I[A]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=w.g[0],v=w.g[1],A=w.g[2];var R=w.g[3],y=m+(R^v&(A^R))+I[0]+3614090360&4294967295;m=v+(y<<7&4294967295|y>>>25),y=R+(A^m&(v^A))+I[1]+3905402710&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(v^R&(m^v))+I[2]+606105819&4294967295,A=R+(y<<17&4294967295|y>>>15),y=v+(m^A&(R^m))+I[3]+3250441966&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(R^v&(A^R))+I[4]+4118548399&4294967295,m=v+(y<<7&4294967295|y>>>25),y=R+(A^m&(v^A))+I[5]+1200080426&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(v^R&(m^v))+I[6]+2821735955&4294967295,A=R+(y<<17&4294967295|y>>>15),y=v+(m^A&(R^m))+I[7]+4249261313&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(R^v&(A^R))+I[8]+1770035416&4294967295,m=v+(y<<7&4294967295|y>>>25),y=R+(A^m&(v^A))+I[9]+2336552879&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(v^R&(m^v))+I[10]+4294925233&4294967295,A=R+(y<<17&4294967295|y>>>15),y=v+(m^A&(R^m))+I[11]+2304563134&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(R^v&(A^R))+I[12]+1804603682&4294967295,m=v+(y<<7&4294967295|y>>>25),y=R+(A^m&(v^A))+I[13]+4254626195&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(v^R&(m^v))+I[14]+2792965006&4294967295,A=R+(y<<17&4294967295|y>>>15),y=v+(m^A&(R^m))+I[15]+1236535329&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(A^R&(v^A))+I[1]+4129170786&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^A&(m^v))+I[6]+3225465664&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(R^m))+I[11]+643717713&4294967295,A=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(A^R))+I[0]+3921069994&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(v^A))+I[5]+3593408605&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^A&(m^v))+I[10]+38016083&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(R^m))+I[15]+3634488961&4294967295,A=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(A^R))+I[4]+3889429448&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(v^A))+I[9]+568446438&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^A&(m^v))+I[14]+3275163606&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(R^m))+I[3]+4107603335&4294967295,A=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(A^R))+I[8]+1163531501&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(v^A))+I[13]+2850285829&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^A&(m^v))+I[2]+4243563512&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(R^m))+I[7]+1735328473&4294967295,A=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(A^R))+I[12]+2368359562&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(v^A^R)+I[5]+4294588738&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^A)+I[8]+2272392833&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^v)+I[11]+1839030562&4294967295,A=R+(y<<16&4294967295|y>>>16),y=v+(A^R^m)+I[14]+4259657740&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^R)+I[1]+2763975236&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^A)+I[4]+1272893353&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^v)+I[7]+4139469664&4294967295,A=R+(y<<16&4294967295|y>>>16),y=v+(A^R^m)+I[10]+3200236656&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^R)+I[13]+681279174&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^A)+I[0]+3936430074&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^v)+I[3]+3572445317&4294967295,A=R+(y<<16&4294967295|y>>>16),y=v+(A^R^m)+I[6]+76029189&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^R)+I[9]+3654602809&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^A)+I[12]+3873151461&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^v)+I[15]+530742520&4294967295,A=R+(y<<16&4294967295|y>>>16),y=v+(A^R^m)+I[2]+3299628645&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(A^(v|~R))+I[0]+4096336452&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~A))+I[7]+1126891415&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~v))+I[14]+2878612391&4294967295,A=R+(y<<15&4294967295|y>>>17),y=v+(R^(A|~m))+I[5]+4237533241&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~R))+I[12]+1700485571&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~A))+I[3]+2399980690&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~v))+I[10]+4293915773&4294967295,A=R+(y<<15&4294967295|y>>>17),y=v+(R^(A|~m))+I[1]+2240044497&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~R))+I[8]+1873313359&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~A))+I[15]+4264355552&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~v))+I[6]+2734768916&4294967295,A=R+(y<<15&4294967295|y>>>17),y=v+(R^(A|~m))+I[13]+1309151649&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~R))+I[4]+4149444226&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~A))+I[11]+3174756917&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~v))+I[2]+718787259&4294967295,A=R+(y<<15&4294967295|y>>>17),y=v+(R^(A|~m))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(A+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var v=m-this.blockSize,I=this.B,A=this.h,R=0;R<m;){if(A==0)for(;R<=v;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<m;)if(I[A++]=w.charCodeAt(R++),A==this.blockSize){s(this,I),A=0;break}}else for(;R<m;)if(I[A++]=w[R++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var v=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=v&255,v/=256;for(this.u(w),w=Array(16),m=v=0;4>m;++m)for(var I=0;32>I;I+=8)w[v++]=this.g[m]>>>I&255;return w};function i(w,m){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=m(w)}function a(w,m){this.h=m;for(var v=[],I=!0,A=w.length-1;0<=A;A--){var R=w[A]|0;I&&R==m||(v[A]=R,I=!1)}this.g=v}var l={};function u(w){return-128<=w&&128>w?i(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return L(d(-w));for(var m=[],v=1,I=0;w>=v;I++)m[I]=w/v|0,v*=4294967296;return new a(m,0)}function f(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return L(f(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(m,8)),I=g,A=0;A<w.length;A+=8){var R=Math.min(8,w.length-A),y=parseInt(w.substring(A,A+R),m);8>R?(R=d(Math.pow(m,R)),I=I.j(R).add(d(y))):(I=I.j(v),I=I.add(d(y)))}return I}var g=u(0),E=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(F(this))return-L(this).m();for(var w=0,m=1,v=0;v<this.g.length;v++){var I=this.i(v);w+=(0<=I?I:4294967296+I)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(M(this))return"0";if(F(this))return"-"+L(this).toString(w);for(var m=d(Math.pow(w,6)),v=this,I="";;){var A=le(v,m).g;v=X(v,A.j(m));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=A,M(v))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function M(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function F(w){return w.h==-1}n.l=function(w){return w=X(this,w),F(w)?-1:M(w)?0:1};function L(w){for(var m=w.g.length,v=[],I=0;I<m;I++)v[I]=~w.g[I];return new a(v,~w.h).add(E)}n.abs=function(){return F(this)?L(this):this},n.add=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],I=0,A=0;A<=m;A++){var R=I+(this.i(A)&65535)+(w.i(A)&65535),y=(R>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);I=y>>>16,R&=65535,y&=65535,v[A]=y<<16|R}return new a(v,v[v.length-1]&-2147483648?-1:0)};function X(w,m){return w.add(L(m))}n.j=function(w){if(M(this)||M(w))return g;if(F(this))return F(w)?L(this).j(L(w)):L(L(this).j(w));if(F(w))return L(this.j(L(w)));if(0>this.l(S)&&0>w.l(S))return d(this.m()*w.m());for(var m=this.g.length+w.g.length,v=[],I=0;I<2*m;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<w.g.length;A++){var R=this.i(I)>>>16,y=this.i(I)&65535,dt=w.i(A)>>>16,nn=w.i(A)&65535;v[2*I+2*A]+=y*nn,ee(v,2*I+2*A),v[2*I+2*A+1]+=R*nn,ee(v,2*I+2*A+1),v[2*I+2*A+1]+=y*dt,ee(v,2*I+2*A+1),v[2*I+2*A+2]+=R*dt,ee(v,2*I+2*A+2)}for(I=0;I<m;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=m;I<2*m;I++)v[I]=0;return new a(v,0)};function ee(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function Q(w,m){this.g=w,this.h=m}function le(w,m){if(M(m))throw Error("division by zero");if(M(w))return new Q(g,g);if(F(w))return m=le(L(w),m),new Q(L(m.g),L(m.h));if(F(m))return m=le(w,L(m)),new Q(L(m.g),m.h);if(30<w.g.length){if(F(w)||F(m))throw Error("slowDivide_ only works with positive integers.");for(var v=E,I=m;0>=I.l(w);)v=Ae(v),I=Ae(I);var A=Y(v,1),R=Y(I,1);for(I=Y(I,2),v=Y(v,2);!M(I);){var y=R.add(I);0>=y.l(w)&&(A=A.add(v),R=y),I=Y(I,1),v=Y(v,1)}return m=X(w,A.j(m)),new Q(A,m)}for(A=g;0<=w.l(m);){for(v=Math.max(1,Math.floor(w.m()/m.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=d(v),y=R.j(m);F(y)||0<y.l(w);)v-=I,R=d(v),y=R.j(m);M(R)&&(R=E),A=A.add(R),w=X(w,y)}return new Q(A,w)}n.A=function(w){return le(this,w).h},n.and=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)&w.i(I);return new a(v,this.h&w.h)},n.or=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)|w.i(I);return new a(v,this.h|w.h)},n.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)^w.i(I);return new a(v,this.h^w.h)};function Ae(w){for(var m=w.g.length+1,v=[],I=0;I<m;I++)v[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(v,w.h)}function Y(w,m){var v=m>>5;m%=32;for(var I=w.g.length-v,A=[],R=0;R<I;R++)A[R]=0<m?w.i(R+v)>>>m|w.i(R+v+1)<<32-m:w.i(R+v);return new a(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,vf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Yn=a}).apply(typeof Qu<"u"?Qu:typeof self<"u"?self:typeof window<"u"?window:{});var yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ef,If,hs,Tf,Ci,Ma,wf,Af,bf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof yi=="object"&&yi];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break e;h=h[b]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,p=!1,b={next:function(){if(!p&&h<o.length){var P=h++;return{value:c(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),o.apply(c,b)}}return function(){return o.apply(c,arguments)}}function E(o,c,h){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,E.apply(null,arguments)}function S(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function M(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,b,P){for(var $=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)$[Te-2]=arguments[Te];return c.prototype[b].apply(p,$)}}function F(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function L(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const b=o.length||0,P=p.length||0;o.length=b+P;for(let $=0;$<P;$++)o[b+$]=p[$]}else o.push(p)}}class X{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function ee(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function le(o){return le[" "](o),o}le[" "]=function(){};var Ae=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function Y(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function w(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function m(o){const c={};for(const h in o)c[h]=o[h];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,c){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let P=0;P<v.length;P++)h=v[P],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function A(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function R(o){l.setTimeout(()=>{throw o},0)}function y(){var o=wt;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class dt{constructor(){this.h=this.g=null}add(c,h){const p=nn.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var nn=new X(()=>new $e,o=>o.reset());class $e{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,me=!1,wt=new dt,On=()=>{const o=l.Promise.resolve(void 0);Ee=()=>{o.then(Bt)}};var Bt=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){R(h)}var c=nn;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}me=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var Vo=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function Nn(o,c){if(xe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(Ae){e:{try{le(c.nodeName);var b=!0;break e}catch{}b=!1}b||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Vn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Nn.aa.h.call(this)}}M(Nn,xe);var Vn={2:"touch",3:"pen",4:"mouse"};Nn.prototype.h=function(){Nn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var jt="closure_listenable_"+(1e6*Math.random()|0),Wr=0;function Xs(o,c,h,p,b){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=b,this.key=++Wr,this.da=this.fa=!1}function Ct(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Mn(o){this.src=o,this.g={},this.h=0}Mn.prototype.add=function(o,c,h,p,b){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var $=_(o,c,p,b);return-1<$?(c=o[$],h||(c.fa=!1)):(c=new Xs(c,this.src,P,!!p,b),c.fa=h,o.push(c)),c};function fr(o,c){var h=c.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,c,void 0),P;(P=0<=b)&&Array.prototype.splice.call(p,b,1),P&&(Ct(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function _(o,c,h,p){for(var b=0;b<o.length;++b){var P=o[b];if(!P.da&&P.listener==c&&P.capture==!!h&&P.ha==p)return b}return-1}var T="closure_lm_"+(1e6*Math.random()|0),C={};function O(o,c,h,p,b){if(Array.isArray(c)){for(var P=0;P<c.length;P++)O(o,c[P],h,p,b);return null}return h=W(h),o&&o[jt]?o.K(c,h,d(p)?!!p.capture:!!p,b):D(o,c,h,!1,p,b)}function D(o,c,h,p,b,P){if(!c)throw Error("Invalid event type");var $=d(b)?!!b.capture:!!b,Te=q(o);if(Te||(o[T]=Te=new Mn(o)),h=Te.add(c,h,p,$,P),h.proxy)return h;if(p=x(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Vo||(b=$),b===void 0&&(b=!1),o.addEventListener(c.toString(),p,b);else if(o.attachEvent)o.attachEvent(B(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function x(){function o(h){return c.call(o.src,o.listener,h)}const c=N;return o}function j(o,c,h,p,b){if(Array.isArray(c))for(var P=0;P<c.length;P++)j(o,c[P],h,p,b);else p=d(p)?!!p.capture:!!p,h=W(h),o&&o[jt]?(o=o.i,c=String(c).toString(),c in o.g&&(P=o.g[c],h=_(P,h,p,b),-1<h&&(Ct(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete o.g[c],o.h--)))):o&&(o=q(o))&&(c=o.g[c.toString()],o=-1,c&&(o=_(c,h,p,b)),(h=-1<o?c[o]:null)&&U(h))}function U(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[jt])fr(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(B(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=q(c))?(fr(h,o),h.h==0&&(h.src=null,c[T]=null)):Ct(o)}}}function B(o){return o in C?C[o]:C[o]="on"+o}function N(o,c){if(o.da)o=!0;else{c=new Nn(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&U(o),o=h.call(p,c)}return o}function q(o){return o=o[T],o instanceof Mn?o:null}var G="__closure_events_fn_"+(1e9*Math.random()>>>0);function W(o){return typeof o=="function"?o:(o[G]||(o[G]=function(c){return o.handleEvent(c)}),o[G])}function K(){Me.call(this),this.i=new Mn(this),this.M=this,this.F=null}M(K,Me),K.prototype[jt]=!0,K.prototype.removeEventListener=function(o,c,h,p){j(this,o,c,h,p)};function Z(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new xe(c,o);else if(c instanceof xe)c.target=c.target||o;else{var b=c;c=new xe(p,o),I(c,b)}if(b=!0,h)for(var P=h.length-1;0<=P;P--){var $=c.g=h[P];b=ve($,p,!0,c)&&b}if($=c.g=o,b=ve($,p,!0,c)&&b,b=ve($,p,!1,c)&&b,h)for(P=0;P<h.length;P++)$=c.g=h[P],b=ve($,p,!1,c)&&b}K.prototype.N=function(){if(K.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)Ct(h[p]);delete o.g[c],o.h--}}this.F=null},K.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},K.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function ve(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var b=!0,P=0;P<c.length;++P){var $=c[P];if($&&!$.da&&$.capture==h){var Te=$.listener,Be=$.ha||$.src;$.fa&&fr(o.i,$),b=Te.call(Be,p)!==!1&&b}}return b&&!p.defaultPrevented}function pe(o,c,h){if(typeof o=="function")h&&(o=E(o,h));else if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function De(o){o.g=pe(()=>{o.g=null,o.i&&(o.i=!1,De(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class ft extends Me{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:De(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yt(o){Me.call(this),this.h=o,this.g={}}M(yt,Me);var Gr=[];function rn(o){Y(o.g,function(c,h){this.g.hasOwnProperty(h)&&U(c)},o),o.g={}}yt.prototype.N=function(){yt.aa.N.call(this),rn(this)},yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pr=l.JSON.stringify,nt=l.JSON.parse,vt=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function gr(){}gr.prototype.h=null;function pc(o){return o.h||(o.h=o.i())}function gc(){}var Qr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mo(){xe.call(this,"d")}M(Mo,xe);function xo(){xe.call(this,"c")}M(xo,xe);var xn={},mc=null;function Ys(){return mc=mc||new K}xn.La="serverreachability";function _c(o){xe.call(this,xn.La,o)}M(_c,xe);function Jr(o){const c=Ys();Z(c,new _c(c))}xn.STAT_EVENT="statevent";function yc(o,c){xe.call(this,xn.STAT_EVENT,o),this.stat=c}M(yc,xe);function rt(o){const c=Ys();Z(c,new yc(c,o))}xn.Ma="timingevent";function vc(o,c){xe.call(this,xn.Ma,o),this.size=c}M(vc,xe);function Xr(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Yr(){this.g=!0}Yr.prototype.xa=function(){this.g=!1};function vg(o,c,h,p,b,P){o.info(function(){if(o.g)if(P)for(var $="",Te=P.split("&"),Be=0;Be<Te.length;Be++){var _e=Te[Be].split("=");if(1<_e.length){var We=_e[0];_e=_e[1];var Ge=We.split("_");$=2<=Ge.length&&Ge[1]=="type"?$+(We+"="+_e+"&"):$+(We+"=redacted&")}}else $=null;else $=P;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+c+`
`+h+`
`+$})}function Eg(o,c,h,p,b,P,$){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+c+`
`+h+`
`+P+" "+$})}function mr(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Tg(o,h)+(p?" "+p:"")})}function Ig(o,c){o.info(function(){return"TIMEOUT: "+c})}Yr.prototype.info=function(){};function Tg(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var P=b[0];if(P!="noop"&&P!="stop"&&P!="close")for(var $=1;$<b.length;$++)b[$]=""}}}}return pr(h)}catch{return c}}var Zs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ec={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Lo;function ei(){}M(ei,gr),ei.prototype.g=function(){return new XMLHttpRequest},ei.prototype.i=function(){return{}},Lo=new ei;function sn(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new yt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ic}function Ic(){this.i=null,this.g="",this.h=!1}var Tc={},Fo={};function Uo(o,c,h){o.L=1,o.v=si(qt(c)),o.m=h,o.P=!0,wc(o,null)}function wc(o,c){o.F=Date.now(),ti(o),o.A=qt(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Lc(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Ic,o.g=tu(o.j,h?c:null,!o.m),0<o.O&&(o.M=new ft(E(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(Gr[0]=b.toString()),b=Gr);for(var P=0;P<b.length;P++){var $=O(h,b[P],p||c.handleEvent,!1,c.h||c);if(!$)break;c.g[$.key]=$}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Jr(),vg(o.i,o.u,o.A,o.l,o.R,o.m)}sn.prototype.ca=function(o){o=o.target;const c=this.M;c&&Ht(o)==3?c.j():this.Y(o)},sn.prototype.Y=function(o){try{if(o==this.g)e:{const Ge=Ht(this.g);var c=this.g.Ba();const vr=this.g.Z();if(!(3>Ge)&&(Ge!=3||this.g&&(this.h.h||this.g.oa()||Hc(this.g)))){this.J||Ge!=4||c==7||(c==8||0>=vr?Jr(3):Jr(2)),$o(this);var h=this.g.Z();this.X=h;t:if(Ac(this)){var p=Hc(this.g);o="";var b=p.length,P=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ln(this),Zr(this);var $="";break t}this.h.i=new l.TextDecoder}for(c=0;c<b;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(P&&c==b-1)});p.length=0,this.h.g+=o,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=h==200,Eg(this.i,this.u,this.A,this.l,this.R,Ge,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,Be=this.g;if((Te=Be.g?Be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(Te)){var _e=Te;break t}}_e=null}if(h=_e)mr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bo(this,h);else{this.o=!1,this.s=3,rt(12),Ln(this),Zr(this);break e}}if(this.P){h=!0;let At;for(;!this.J&&this.C<$.length;)if(At=wg(this,$),At==Fo){Ge==4&&(this.s=4,rt(14),h=!1),mr(this.i,this.l,null,"[Incomplete Response]");break}else if(At==Tc){this.s=4,rt(15),mr(this.i,this.l,$,"[Invalid Chunk]"),h=!1;break}else mr(this.i,this.l,At,null),Bo(this,At);if(Ac(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ge!=4||$.length!=0||this.h.h||(this.s=1,rt(16),h=!1),this.o=this.o&&h,!h)mr(this.i,this.l,$,"[Invalid Chunked Response]"),Ln(this),Zr(this);else if(0<$.length&&!this.W){this.W=!0;var We=this.j;We.g==this&&We.ba&&!We.M&&(We.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Wo(We),We.M=!0,rt(11))}}else mr(this.i,this.l,$,null),Bo(this,$);Ge==4&&Ln(this),this.o&&!this.J&&(Ge==4?Xc(this.j,this):(this.o=!1,ti(this)))}else $g(this.g),h==400&&0<$.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),Ln(this),Zr(this)}}}catch{}finally{}};function Ac(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function wg(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?Fo:(h=Number(c.substring(h,p)),isNaN(h)?Tc:(p+=1,p+h>c.length?Fo:(c=c.slice(p,p+h),o.C=p+h,c)))}sn.prototype.cancel=function(){this.J=!0,Ln(this)};function ti(o){o.S=Date.now()+o.I,bc(o,o.I)}function bc(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Xr(E(o.ba,o),c)}function $o(o){o.B&&(l.clearTimeout(o.B),o.B=null)}sn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Ig(this.i,this.A),this.L!=2&&(Jr(),rt(17)),Ln(this),this.s=2,Zr(this)):bc(this,this.S-o)};function Zr(o){o.j.G==0||o.J||Xc(o.j,o)}function Ln(o){$o(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,rn(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Bo(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||jo(h.h,o))){if(!o.K&&jo(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ci(h),ai(h);else break e;Ko(h),rt(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=Xr(E(h.Za,h),6e3));if(1>=Pc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Un(h,11)}else if((o.K||h.g==o)&&ci(h),!ee(c))for(b=h.Da.g.parse(c),c=0;c<b.length;c++){let _e=b[c];if(h.T=_e[0],_e=_e[1],h.G==2)if(_e[0]=="c"){h.K=_e[1],h.ia=_e[2];const We=_e[3];We!=null&&(h.la=We,h.j.info("VER="+h.la));const Ge=_e[4];Ge!=null&&(h.Aa=Ge,h.j.info("SVER="+h.Aa));const vr=_e[5];vr!=null&&typeof vr=="number"&&0<vr&&(p=1.5*vr,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const At=o.g;if(At){const hi=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hi){var P=p.h;P.g||hi.indexOf("spdy")==-1&&hi.indexOf("quic")==-1&&hi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(qo(P,P.h),P.h=null))}if(p.D){const Go=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;Go&&(p.ya=Go,be(p.I,p.D,Go))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var $=o;if(p.qa=eu(p,p.J?p.ia:null,p.W),$.K){Cc(p.h,$);var Te=$,Be=p.L;Be&&(Te.I=Be),Te.B&&($o(Te),ti(Te)),p.g=$}else Qc(p);0<h.i.length&&li(h)}else _e[0]!="stop"&&_e[0]!="close"||Un(h,7);else h.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?Un(h,7):zo(h):_e[0]!="noop"&&h.l&&h.l.ta(_e),h.v=0)}}Jr(4)}catch{}}var Ag=class{constructor(o,c){this.g=o,this.map=c}};function Rc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Pc(o){return o.h?1:o.g?o.g.size:0}function jo(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function qo(o,c){o.g?o.g.add(c):o.h=c}function Cc(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Rc.prototype.cancel=function(){if(this.i=kc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function kc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return F(o.i)}function bg(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function Rg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function Dc(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Rg(o),p=bg(o),b=p.length,P=0;P<b;P++)c.call(void 0,p[P],h&&h[P],o)}var Oc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sg(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),b=null;if(0<=p){var P=o[h].substring(0,p);b=o[h].substring(p+1)}else P=o[h];c(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Fn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Fn){this.h=o.h,ni(this,o.j),this.o=o.o,this.g=o.g,ri(this,o.s),this.l=o.l;var c=o.i,h=new ns;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Nc(this,h),this.m=o.m}else o&&(c=String(o).match(Oc))?(this.h=!1,ni(this,c[1]||"",!0),this.o=es(c[2]||""),this.g=es(c[3]||"",!0),ri(this,c[4]),this.l=es(c[5]||"",!0),Nc(this,c[6]||"",!0),this.m=es(c[7]||"")):(this.h=!1,this.i=new ns(null,this.h))}Fn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(ts(c,Vc,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(ts(c,Vc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(ts(h,h.charAt(0)=="/"?kg:Cg,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",ts(h,Og)),o.join("")};function qt(o){return new Fn(o)}function ni(o,c,h){o.j=h?es(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ri(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Nc(o,c,h){c instanceof ns?(o.i=c,Ng(o.i,o.h)):(h||(c=ts(c,Dg)),o.i=new ns(c,o.h))}function be(o,c,h){o.i.set(c,h)}function si(o){return be(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function es(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ts(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Pg),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Pg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Vc=/[#\/\?@]/g,Cg=/[#\?:]/g,kg=/[#\?]/g,Dg=/[#\?@]/g,Og=/#/g;function ns(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function on(o){o.g||(o.g=new Map,o.h=0,o.i&&Sg(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=ns.prototype,n.add=function(o,c){on(this),this.i=null,o=_r(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Mc(o,c){on(o),c=_r(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function xc(o,c){return on(o),c=_r(o,c),o.g.has(c)}n.forEach=function(o,c){on(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(c,b,p,this)},this)},this)},n.na=function(){on(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const b=o[p];for(let P=0;P<b.length;P++)h.push(c[p])}return h},n.V=function(o){on(this);let c=[];if(typeof o=="string")xc(this,o)&&(c=c.concat(this.g.get(_r(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return on(this),this.i=null,o=_r(this,o),xc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Lc(o,c,h){Mc(o,c),0<h.length&&(o.i=null,o.g.set(_r(o,c),F(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const P=encodeURIComponent(String(p)),$=this.V(p);for(p=0;p<$.length;p++){var b=P;$[p]!==""&&(b+="="+encodeURIComponent(String($[p]))),o.push(b)}}return this.i=o.join("&")};function _r(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Ng(o,c){c&&!o.j&&(on(o),o.i=null,o.g.forEach(function(h,p){var b=p.toLowerCase();p!=b&&(Mc(this,p),Lc(this,b,h))},o)),o.j=c}function Vg(o,c){const h=new Yr;if(l.Image){const p=new Image;p.onload=S(an,h,"TestLoadImage: loaded",!0,c,p),p.onerror=S(an,h,"TestLoadImage: error",!1,c,p),p.onabort=S(an,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=S(an,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function Mg(o,c){const h=new Yr,p=new AbortController,b=setTimeout(()=>{p.abort(),an(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(b),P.ok?an(h,"TestPingServer: ok",!0,c):an(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),an(h,"TestPingServer: error",!1,c)})}function an(o,c,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function xg(){this.g=new vt}function Lg(o,c,h){const p=h||"";try{Dc(o,function(b,P){let $=b;d(b)&&($=pr(b)),c.push(p+P+"="+encodeURIComponent($))})}catch(b){throw c.push(p+"type="+encodeURIComponent("_badmap")),b}}function rs(o){this.l=o.Ub||null,this.j=o.eb||!1}M(rs,gr),rs.prototype.g=function(){return new ii(this.l,this.j)},rs.prototype.i=function(o){return function(){return o}}({});function ii(o,c){K.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}M(ii,K),n=ii.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,is(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ss(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,is(this)),this.g&&(this.readyState=3,is(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?ss(this):is(this),this.readyState==3&&Fc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,ss(this))},n.Qa=function(o){this.g&&(this.response=o,ss(this))},n.ga=function(){this.g&&ss(this)};function ss(o){o.readyState=4,o.l=null,o.j=null,o.v=null,is(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function is(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ii.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Uc(o){let c="";return Y(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function Ho(o,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Uc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):be(o,c,h))}function ke(o){K.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}M(ke,K);var Fg=/^https?$/i,Ug=["POST","PUT"];n=ke.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Lo.g(),this.v=this.o?pc(this.o):pc(Lo),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(P){$c(this,P);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())h.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),b=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ug,c,void 0))||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,$]of h)this.g.setRequestHeader(P,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qc(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){$c(this,P)}};function $c(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Bc(o),oi(o)}function Bc(o){o.A||(o.A=!0,Z(o,"complete"),Z(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Z(this,"complete"),Z(this,"abort"),oi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),oi(this,!0)),ke.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?jc(this):this.bb())},n.bb=function(){jc(this)};function jc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ht(o)!=4||o.Z()!=2)){if(o.u&&Ht(o)==4)pe(o.Ea,0,o);else if(Z(o,"readystatechange"),Ht(o)==4){o.h=!1;try{const $=o.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=$===0){var b=String(o.D).match(Oc)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),p=!Fg.test(b?b.toLowerCase():"")}h=p}if(h)Z(o,"complete"),Z(o,"success");else{o.m=6;try{var P=2<Ht(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Bc(o)}}finally{oi(o)}}}}function oi(o,c){if(o.g){qc(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Z(o,"ready");try{h.onreadystatechange=p}catch{}}}function qc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ht(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),nt(c)}};function Hc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function $g(o){const c={};o=(o.g&&2<=Ht(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(ee(o[p]))continue;var h=A(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=c[b]||[];c[b]=P,P.push(h)}w(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function os(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function zc(o){this.Aa=0,this.i=[],this.j=new Yr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=os("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=os("baseRetryDelayMs",5e3,o),this.cb=os("retryDelaySeedMs",1e4,o),this.Wa=os("forwardChannelMaxRetries",2,o),this.wa=os("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Rc(o&&o.concurrentRequestLimit),this.Da=new xg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=zc.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,p){rt(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=eu(this,null,this.W),li(this)};function zo(o){if(Kc(o),o.G==3){var c=o.U++,h=qt(o.I);if(be(h,"SID",o.K),be(h,"RID",c),be(h,"TYPE","terminate"),as(o,h),c=new sn(o,o.j,c),c.L=2,c.v=si(qt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=tu(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ti(c)}Zc(o)}function ai(o){o.g&&(Wo(o),o.g.cancel(),o.g=null)}function Kc(o){ai(o),o.u&&(l.clearTimeout(o.u),o.u=null),ci(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function li(o){if(!Sc(o.h)&&!o.s){o.s=!0;var c=o.Ga;Ee||On(),me||(Ee(),me=!0),wt.add(c,o),o.B=0}}function Bg(o,c){return Pc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Xr(E(o.Ga,o,c),Yc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new sn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=m(P),I(P,this.S)):P=this.S),this.m!==null||this.O||(b.H=P,P=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Gc(this,b,c),h=qt(this.I),be(h,"RID",o),be(h,"CVER",22),this.D&&be(h,"X-HTTP-Session-Id",this.D),as(this,h),P&&(this.O?c="headers="+encodeURIComponent(String(Uc(P)))+"&"+c:this.m&&Ho(h,this.m,P)),qo(this.h,b),this.Ua&&be(h,"TYPE","init"),this.P?(be(h,"$req",c),be(h,"SID","null"),b.T=!0,Uo(b,h,null)):Uo(b,h,c),this.G=2}}else this.G==3&&(o?Wc(this,o):this.i.length==0||Sc(this.h)||Wc(this))};function Wc(o,c){var h;c?h=c.l:h=o.U++;const p=qt(o.I);be(p,"SID",o.K),be(p,"RID",h),be(p,"AID",o.T),as(o,p),o.m&&o.o&&Ho(p,o.m,o.o),h=new sn(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Gc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),qo(o.h,h),Uo(h,p,c)}function as(o,c){o.H&&Y(o.H,function(h,p){be(c,p,h)}),o.l&&Dc({},function(h,p){be(c,p,h)})}function Gc(o,c,h){h=Math.min(o.i.length,h);var p=o.l?E(o.l.Na,o.l,o):null;e:{var b=o.i;let P=-1;for(;;){const $=["count="+h];P==-1?0<h?(P=b[0].g,$.push("ofs="+P)):P=0:$.push("ofs="+P);let Te=!0;for(let Be=0;Be<h;Be++){let _e=b[Be].g;const We=b[Be].map;if(_e-=P,0>_e)P=Math.max(0,b[Be].g-100),Te=!1;else try{Lg(We,$,"req"+_e+"_")}catch{p&&p(We)}}if(Te){p=$.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,p}function Qc(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Ee||On(),me||(Ee(),me=!0),wt.add(c,o),o.v=0}}function Ko(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Xr(E(o.Fa,o),Yc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Jc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Xr(E(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),ai(this),Jc(this))};function Wo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Jc(o){o.g=new sn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=qt(o.qa);be(c,"RID","rpc"),be(c,"SID",o.K),be(c,"AID",o.T),be(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&be(c,"TO",o.ja),be(c,"TYPE","xmlhttp"),as(o,c),o.m&&o.o&&Ho(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=si(qt(c)),h.m=null,h.P=!0,wc(h,o)}n.Za=function(){this.C!=null&&(this.C=null,ai(this),Ko(this),rt(19))};function ci(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Xc(o,c){var h=null;if(o.g==c){ci(o),Wo(o),o.g=null;var p=2}else if(jo(o.h,c))h=c.D,Cc(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var b=o.B;p=Ys(),Z(p,new vc(p,h)),li(o)}else Qc(o);else if(b=c.s,b==3||b==0&&0<c.X||!(p==1&&Bg(o,c)||p==2&&Ko(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),b){case 1:Un(o,5);break;case 4:Un(o,10);break;case 3:Un(o,6);break;default:Un(o,2)}}}function Yc(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Un(o,c){if(o.j.info("Error code "+c),c==2){var h=E(o.fb,o),p=o.Xa;const b=!p;p=new Fn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ni(p,"https"),si(p),b?Vg(p.toString(),h):Mg(p.toString(),h)}else rt(2);o.G=0,o.l&&o.l.sa(c),Zc(o),Kc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Zc(o){if(o.G=0,o.ka=[],o.l){const c=kc(o.h);(c.length!=0||o.i.length!=0)&&(L(o.ka,c),L(o.ka,o.i),o.h.i.length=0,F(o.i),o.i.length=0),o.l.ra()}}function eu(o,c,h){var p=h instanceof Fn?qt(h):new Fn(h);if(p.g!="")c&&(p.g=c+"."+p.g),ri(p,p.s);else{var b=l.location;p=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;var P=new Fn(null);p&&ni(P,p),c&&(P.g=c),b&&ri(P,b),h&&(P.l=h),p=P}return h=o.D,c=o.ya,h&&c&&be(p,h,c),be(p,"VER",o.la),as(o,p),p}function tu(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ke(new rs({eb:h})):new ke(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function nu(){}n=nu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ui(){}ui.prototype.g=function(o,c){return new pt(o,c)};function pt(o,c){K.call(this),this.g=new zc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!ee(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!ee(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new yr(this)}M(pt,K),pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){zo(this.g)},pt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=pr(o),o=h);c.i.push(new Ag(c.Ya++,o)),c.G==3&&li(c)},pt.prototype.N=function(){this.g.l=null,delete this.j,zo(this.g),delete this.g,pt.aa.N.call(this)};function ru(o){Mo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}M(ru,Mo);function su(){xo.call(this),this.status=1}M(su,xo);function yr(o){this.g=o}M(yr,nu),yr.prototype.ua=function(){Z(this.g,"a")},yr.prototype.ta=function(o){Z(this.g,new ru(o))},yr.prototype.sa=function(o){Z(this.g,new su)},yr.prototype.ra=function(){Z(this.g,"b")},ui.prototype.createWebChannel=ui.prototype.g,pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,bf=function(){return new ui},Af=function(){return Ys()},wf=xn,Ma={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zs.NO_ERROR=0,Zs.TIMEOUT=8,Zs.HTTP_ERROR=6,Ci=Zs,Ec.COMPLETE="complete",Tf=Ec,gc.EventType=Qr,Qr.OPEN="a",Qr.CLOSE="b",Qr.ERROR="c",Qr.MESSAGE="d",K.prototype.listen=K.prototype.K,hs=gc,If=rs,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,Ef=ke}).apply(typeof yi<"u"?yi:typeof self<"u"?self:typeof window<"u"?window:{});const Ju="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jr="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new vl("@firebase/firestore");function cs(){return or.logLevel}function z(n,...e){if(or.logLevel<=de.DEBUG){const t=e.map(Tl);or.debug(`Firestore (${jr}): ${n}`,...t)}}function Xt(n,...e){if(or.logLevel<=de.ERROR){const t=e.map(Tl);or.error(`Firestore (${jr}): ${n}`,...t)}}function Nr(n,...e){if(or.logLevel<=de.WARN){const t=e.map(Tl);or.warn(`Firestore (${jr}): ${n}`,...t)}}function Tl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ne(n="Unexpected state"){const e=`FIRESTORE (${jr}) INTERNAL ASSERTION FAILED: `+n;throw Xt(e),new Error(e)}function we(n,e){n||ne()}function ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends tn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $E{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Je.UNAUTHENTICATED))}shutdown(){}}class BE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class jE{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new Rf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new Je(e)}}class qE{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class HE{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new qE(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(we(typeof t.token=="string"),this.R=t.token,new zE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=WE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ye(n,e){return n<e?-1:n>e?1:0}function Vr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new H(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new H(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new H(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Le(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Le(0,0))}static max(){return new re(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,r){t===void 0?t=0:t>e.length&&ne(),r===void 0?r=e.length-t:r>e.length-t&&ne(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ks.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ks?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Re extends ks{construct(e,t,r){return new Re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Re(t)}static emptyPath(){return new Re([])}}const GE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends ks{construct(e,t,r){return new qe(e,t,r)}static isValidIdentifier(e){return GE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new H(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new H(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(t)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Re.fromString(e))}static fromName(e){return new J(Re.fromString(e).popFirst(5))}static empty(){return new J(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Re(e.slice()))}}function QE(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new Le(t+1,0):new Le(t,r));return new wn(s,J.empty(),e)}function JE(n){return new wn(n.readTime,n.key,-1)}class wn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new wn(re.min(),J.empty(),-1)}static max(){return new wn(re.max(),J.empty(),-1)}}function XE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=J.comparator(n.documentKey,e.documentKey),t!==0?t:ye(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==YE)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(f=>{a[d]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new V((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function eI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function js(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class wl{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}wl.oe=-1;function go(n){return n==null}function Hi(n){return n===0&&1/n==-1/0}function tI(n){return typeof n=="number"&&Number.isInteger(n)&&!Hi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function hr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Pf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t){this.comparator=e,this.root=t||je.EMPTY}insert(e,t){return new Ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vi(this.root,e,this.comparator,!1)}getReverseIterator(){return new vi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vi(this.root,e,this.comparator,!0)}}class vi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??je.RED,this.left=s??je.EMPTY,this.right=i??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new je(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,t,r,s,i){return this}insert(e,t,r){return new je(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Yu(this.data.getIterator())}getIteratorFrom(e){return new Yu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new He(this.comparator);return t.data=e,t}}class Yu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new mt([])}unionWith(e){let t=new He(qe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new mt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Cf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Cf("Invalid base64 string: "+i):i}}(e);return new tt(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new tt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const nI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function An(n){if(we(!!n),typeof n=="string"){let e=0;const t=nI.exec(n);if(we(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(n.seconds),nanos:Ne(n.nanos)}}function Ne(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ar(n){return typeof n=="string"?tt.fromBase64String(n):tt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function bl(n){const e=n.mapValue.fields.__previous_value__;return Al(e)?bl(e):e}function Ds(n){const e=An(n.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,t,r,s,i,a,l,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Os{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Os("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Os&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function lr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Al(n)?4:sI(n)?9007199254740991:10:ne()}function Ut(n,e){if(n===e)return!0;const t=lr(n);if(t!==lr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ds(n).isEqual(Ds(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=An(s.timestampValue),l=An(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return ar(s.bytesValue).isEqual(ar(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ne(s.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(s.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ne(s.integerValue)===Ne(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ne(s.doubleValue),l=Ne(i.doubleValue);return a===l?Hi(a)===Hi(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Vr(n.arrayValue.values||[],e.arrayValue.values||[],Ut);case 10:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Xu(a)!==Xu(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Ut(a[u],l[u])))return!1;return!0}(n,e);default:return ne()}}function Ns(n,e){return(n.values||[]).find(t=>Ut(t,e))!==void 0}function Mr(n,e){if(n===e)return 0;const t=lr(n),r=lr(e);if(t!==r)return ye(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ye(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Ne(i.integerValue||i.doubleValue),u=Ne(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Zu(n.timestampValue,e.timestampValue);case 4:return Zu(Ds(n),Ds(e));case 5:return ye(n.stringValue,e.stringValue);case 6:return function(i,a){const l=ar(i),u=ar(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=ye(l[d],u[d]);if(f!==0)return f}return ye(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ye(Ne(i.latitude),Ne(a.latitude));return l!==0?l:ye(Ne(i.longitude),Ne(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,a){const l=i.values||[],u=a.values||[];for(let d=0;d<l.length&&d<u.length;++d){const f=Mr(l[d],u[d]);if(f)return f}return ye(l.length,u.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,a){if(i===Ei.mapValue&&a===Ei.mapValue)return 0;if(i===Ei.mapValue)return 1;if(a===Ei.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const E=ye(u[g],f[g]);if(E!==0)return E;const S=Mr(l[u[g]],d[f[g]]);if(S!==0)return S}return ye(u.length,f.length)}(n.mapValue,e.mapValue);default:throw ne()}}function Zu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ye(n,e);const t=An(n),r=An(e),s=ye(t.seconds,r.seconds);return s!==0?s:ye(t.nanos,r.nanos)}function xr(n){return xa(n)}function xa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=An(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ar(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return J.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=xa(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${xa(t.fields[a])}`;return s+"}"}(n.mapValue):ne()}function eh(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function La(n){return!!n&&"integerValue"in n}function Rl(n){return!!n&&"arrayValue"in n}function th(n){return!!n&&"nullValue"in n}function nh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ki(n){return!!n&&"mapValue"in n}function Es(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return hr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Es(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Es(n.arrayValue.values[t]);return e}return Object.assign({},n)}function sI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ki(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Es(t)}setAll(e){let t=qe.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Es(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ki(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ut(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ki(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){hr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ut(Es(this.value))}}function kf(n){const e=[];return hr(n.fields,(t,r)=>{const s=new qe([t]);if(ki(r)){const i=kf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ye(e,0,re.min(),re.min(),re.min(),ut.empty(),0)}static newFoundDocument(e,t,r,s){return new Ye(e,1,t,re.min(),r,s,0)}static newNoDocument(e,t){return new Ye(e,2,t,re.min(),re.min(),ut.empty(),0)}static newUnknownDocument(e,t){return new Ye(e,3,t,re.min(),re.min(),ut.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class zi{constructor(e,t){this.position=e,this.inclusive=t}}function rh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(a.referenceValue),t.key):r=Mr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function sh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ut(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Vs{constructor(e,t="asc"){this.field=e,this.dir=t}}function iI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Df{}class Ve extends Df{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new aI(e,t,r):t==="array-contains"?new uI(e,r):t==="in"?new hI(e,r):t==="not-in"?new dI(e,r):t==="array-contains-any"?new fI(e,r):new Ve(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new lI(e,r):new cI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Mr(t,this.value)):t!==null&&lr(this.value)===lr(t)&&this.matchesComparison(Mr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pt extends Df{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Pt(e,t)}matches(e){return Of(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Of(n){return n.op==="and"}function Nf(n){return oI(n)&&Of(n)}function oI(n){for(const e of n.filters)if(e instanceof Pt)return!1;return!0}function Fa(n){if(n instanceof Ve)return n.field.canonicalString()+n.op.toString()+xr(n.value);if(Nf(n))return n.filters.map(e=>Fa(e)).join(",");{const e=n.filters.map(t=>Fa(t)).join(",");return`${n.op}(${e})`}}function Vf(n,e){return n instanceof Ve?function(r,s){return s instanceof Ve&&r.op===s.op&&r.field.isEqual(s.field)&&Ut(r.value,s.value)}(n,e):n instanceof Pt?function(r,s){return s instanceof Pt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Vf(a,s.filters[l]),!0):!1}(n,e):void ne()}function Mf(n){return n instanceof Ve?function(t){return`${t.field.canonicalString()} ${t.op} ${xr(t.value)}`}(n):n instanceof Pt?function(t){return t.op.toString()+" {"+t.getFilters().map(Mf).join(" ,")+"}"}(n):"Filter"}class aI extends Ve{constructor(e,t,r){super(e,t,r),this.key=J.fromName(r.referenceValue)}matches(e){const t=J.comparator(e.key,this.key);return this.matchesComparison(t)}}class lI extends Ve{constructor(e,t){super(e,"in",t),this.keys=xf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class cI extends Ve{constructor(e,t){super(e,"not-in",t),this.keys=xf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function xf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>J.fromName(r.referenceValue))}class uI extends Ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Rl(t)&&Ns(t.arrayValue,this.value)}}class hI extends Ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ns(this.value.arrayValue,t)}}class dI extends Ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ns(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ns(this.value.arrayValue,t)}}class fI extends Ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Rl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ns(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function ih(n,e=null,t=[],r=[],s=null,i=null,a=null){return new pI(n,e,t,r,s,i,a)}function Sl(n){const e=ie(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Fa(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),go(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>xr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>xr(r)).join(",")),e.ue=t}return e.ue}function Pl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!iI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Vf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!sh(n.startAt,e.startAt)&&sh(n.endAt,e.endAt)}function Ua(n){return J.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function gI(n,e,t,r,s,i,a,l){return new qr(n,e,t,r,s,i,a,l)}function Cl(n){return new qr(n)}function oh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Lf(n){return n.collectionGroup!==null}function Is(n){const e=ie(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new He(qe.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Vs(i,r))}),t.has(qe.keyField().canonicalString())||e.ce.push(new Vs(qe.keyField(),r))}return e.ce}function Mt(n){const e=ie(n);return e.le||(e.le=mI(e,Is(n))),e.le}function mI(n,e){if(n.limitType==="F")return ih(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Vs(s.field,i)});const t=n.endAt?new zi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new zi(n.startAt.position,n.startAt.inclusive):null;return ih(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function $a(n,e){const t=n.filters.concat([e]);return new qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ki(n,e,t){return new qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function mo(n,e){return Pl(Mt(n),Mt(e))&&n.limitType===e.limitType}function Ff(n){return`${Sl(Mt(n))}|lt:${n.limitType}`}function Er(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Mf(s)).join(", ")}]`),go(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>xr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>xr(s)).join(",")),`Target(${r})`}(Mt(n))}; limitType=${n.limitType})`}function _o(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):J.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Is(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const d=rh(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,Is(r),s)||r.endAt&&!function(a,l,u){const d=rh(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,Is(r),s))}(n,e)}function _I(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Uf(n){return(e,t)=>{let r=!1;for(const s of Is(n)){const i=yI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yI(n,e,t){const r=n.field.isKeyField()?J.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?Mr(u,d):ne()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){hr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Pf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=new Ce(J.comparator);function Yt(){return vI}const $f=new Ce(J.comparator);function ds(...n){let e=$f;for(const t of n)e=e.insert(t.key,t);return e}function Bf(n){let e=$f;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Wn(){return Ts()}function jf(){return Ts()}function Ts(){return new Hr(n=>n.toString(),(n,e)=>n.isEqual(e))}const EI=new Ce(J.comparator),II=new He(J.comparator);function he(...n){let e=II;for(const t of n)e=e.add(t);return e}const TI=new He(ye);function wI(){return TI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hi(e)?"-0":e}}function Hf(n){return{integerValue:""+n}}function AI(n,e){return tI(e)?Hf(e):qf(n,e)}/**
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
 */class yo{constructor(){this._=void 0}}function bI(n,e,t){return n instanceof Wi?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Al(i)&&(i=bl(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Ms?Kf(n,e):n instanceof xs?Wf(n,e):function(s,i){const a=zf(s,i),l=ah(a)+ah(s.Pe);return La(a)&&La(s.Pe)?Hf(l):qf(s.serializer,l)}(n,e)}function RI(n,e,t){return n instanceof Ms?Kf(n,e):n instanceof xs?Wf(n,e):t}function zf(n,e){return n instanceof Gi?function(r){return La(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Wi extends yo{}class Ms extends yo{constructor(e){super(),this.elements=e}}function Kf(n,e){const t=Gf(e);for(const r of n.elements)t.some(s=>Ut(s,r))||t.push(r);return{arrayValue:{values:t}}}class xs extends yo{constructor(e){super(),this.elements=e}}function Wf(n,e){let t=Gf(e);for(const r of n.elements)t=t.filter(s=>!Ut(s,r));return{arrayValue:{values:t}}}class Gi extends yo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ah(n){return Ne(n.integerValue||n.doubleValue)}function Gf(n){return Rl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function SI(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Ms&&s instanceof Ms||r instanceof xs&&s instanceof xs?Vr(r.elements,s.elements,Ut):r instanceof Gi&&s instanceof Gi?Ut(r.Pe,s.Pe):r instanceof Wi&&s instanceof Wi}(n.transform,e.transform)}class PI{constructor(e,t){this.version=e,this.transformResults=t}}class Tt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Tt}static exists(e){return new Tt(void 0,e)}static updateTime(e){return new Tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Di(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class vo{}function Qf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new kl(n.key,Tt.none()):new qs(n.key,n.data,Tt.none());{const t=n.data,r=ut.empty();let s=new He(qe.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new kn(n.key,r,new mt(s.toArray()),Tt.none())}}function CI(n,e,t){n instanceof qs?function(s,i,a){const l=s.value.clone(),u=ch(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof kn?function(s,i,a){if(!Di(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=ch(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Jf(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ws(n,e,t,r){return n instanceof qs?function(i,a,l,u){if(!Di(i.precondition,a))return l;const d=i.value.clone(),f=uh(i.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof kn?function(i,a,l,u){if(!Di(i.precondition,a))return l;const d=uh(i.fieldTransforms,u,a),f=a.data;return f.setAll(Jf(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,l){return Di(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function kI(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=zf(r.transform,s||null);i!=null&&(t===null&&(t=ut.empty()),t.set(r.field,i))}return t||null}function lh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Vr(r,s,(i,a)=>SI(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class qs extends vo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class kn extends vo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Jf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ch(n,e,t){const r=new Map;we(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,RI(a,l,t[s]))}return r}function uh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,bI(i,a,e))}return r}class kl extends vo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DI extends vo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&CI(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ws(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ws(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=jf();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=Qf(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),he())}isEqual(e){return this.batchId===e.batchId&&Vr(this.mutations,e.mutations,(t,r)=>lh(t,r))&&Vr(this.baseMutations,e.baseMutations,(t,r)=>lh(t,r))}}class Dl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){we(e.mutations.length===r.length);let s=function(){return EI}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Dl(e,t,r,s)}}/**
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
 */class NI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class VI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,fe;function MI(n){switch(n){default:return ne();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function Xf(n){if(n===void 0)return Xt("GRPC error has no .code"),k.UNKNOWN;switch(n){case Oe.OK:return k.OK;case Oe.CANCELLED:return k.CANCELLED;case Oe.UNKNOWN:return k.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return k.INTERNAL;case Oe.UNAVAILABLE:return k.UNAVAILABLE;case Oe.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Oe.NOT_FOUND:return k.NOT_FOUND;case Oe.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Oe.ABORTED:return k.ABORTED;case Oe.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Oe.DATA_LOSS:return k.DATA_LOSS;default:return ne()}}(fe=Oe||(Oe={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function xI(){return new TextEncoder}/**
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
 */const LI=new Yn([4294967295,4294967295],0);function hh(n){const e=xI().encode(n),t=new vf;return t.update(e),new Uint8Array(t.digest())}function dh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Yn([t,r],0),new Yn([s,i],0)]}class Ol{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new fs(`Invalid padding: ${t}`);if(r<0)throw new fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new fs(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Yn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Yn.fromNumber(r)));return s.compare(LI)===1&&(s=new Yn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=hh(e),[r,s]=dh(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ol(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=hh(e),[r,s]=dh(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Hs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Eo(re.min(),s,new Ce(ye),Yt(),he())}}class Hs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Hs(r,t,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Yf{constructor(e,t){this.targetId=e,this.me=t}}class Zf{constructor(e,t,r=tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class fh{constructor(){this.fe=0,this.ge=gh(),this.pe=tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=he(),t=he(),r=he();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ne()}}),new Hs(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=gh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,we(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class FI{constructor(e){this.Le=e,this.Be=new Map,this.ke=Yt(),this.qe=ph(),this.Qe=new Ce(ye)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Ua(i))if(r===0){const a=new J(i.path);this.Ue(t,a,Ye.newNoDocument(a,re.min()))}else we(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=ar(r).toUint8Array()}catch(u){if(u instanceof Cf)return Nr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ol(a,s,i)}catch(u){return Nr(u instanceof fs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&Ua(l.target)){const u=new J(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Ye.newNoDocument(u,e))}i.be&&(t.set(a,i.Ce()),i.ve())}});let r=he();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Eo(e,t,this.Qe,this.ke,r);return this.ke=Yt(),this.qe=ph(),this.Qe=new Ce(ye),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new fh,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new He(ye),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||z("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new fh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ph(){return new Ce(J.comparator)}function gh(){return new Ce(J.comparator)}const UI={asc:"ASCENDING",desc:"DESCENDING"},$I={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},BI={and:"AND",or:"OR"};class jI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ba(n,e){return n.useProto3Json||go(e)?e:{value:e}}function Qi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ep(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function qI(n,e){return Qi(n,e.toTimestamp())}function xt(n){return we(!!n),re.fromTimestamp(function(t){const r=An(t);return new Le(r.seconds,r.nanos)}(n))}function Nl(n,e){return ja(n,e).canonicalString()}function ja(n,e){const t=function(s){return new Re(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function tp(n){const e=Re.fromString(n);return we(op(e)),e}function qa(n,e){return Nl(n.databaseId,e.path)}function ha(n,e){const t=tp(e);if(t.get(1)!==n.databaseId.projectId)throw new H(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new H(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new J(rp(t))}function np(n,e){return Nl(n.databaseId,e)}function HI(n){const e=tp(n);return e.length===4?Re.emptyPath():rp(e)}function Ha(n){return new Re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function rp(n){return we(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function mh(n,e,t){return{name:qa(n,e),fields:t.value.mapValue.fields}}function zI(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(we(f===void 0||typeof f=="string"),tt.fromBase64String(f||"")):(we(f===void 0||f instanceof Buffer||f instanceof Uint8Array),tt.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const f=d.code===void 0?k.UNKNOWN:Xf(d.code);return new H(f,d.message||"")}(a);t=new Zf(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ha(n,r.document.name),i=xt(r.document.updateTime),a=r.document.createTime?xt(r.document.createTime):re.min(),l=new ut({mapValue:{fields:r.document.fields}}),u=Ye.newFoundDocument(s,i,a,l),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Oi(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ha(n,r.document),i=r.readTime?xt(r.readTime):re.min(),a=Ye.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Oi([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ha(n,r.document),i=r.removedTargetIds||[];t=new Oi([],i,s,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new VI(s,i),l=r.targetId;t=new Yf(l,a)}}return t}function KI(n,e){let t;if(e instanceof qs)t={update:mh(n,e.key,e.value)};else if(e instanceof kl)t={delete:qa(n,e.key)};else if(e instanceof kn)t={update:mh(n,e.key,e.data),updateMask:tT(e.fieldMask)};else{if(!(e instanceof DI))return ne();t={verify:qa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Wi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ms)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof xs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Gi)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw ne()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:qI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne()}(n,e.precondition)),t}function WI(n,e){return n&&n.length>0?(we(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?xt(s.updateTime):xt(i);return a.isEqual(re.min())&&(a=xt(i)),new PI(a,s.transformResults||[])}(t,e))):[]}function GI(n,e){return{documents:[np(n,e.path)]}}function QI(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=np(n,s);const i=function(d){if(d.length!==0)return ip(Pt.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(E){return{field:Ir(E.field),direction:YI(E.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Ba(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function JI(n){let e=HI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){we(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(g){const E=sp(g);return E instanceof Pt&&Nf(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(E=>function(M){return new Vs(Tr(M.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(M.direction))}(E))}(t.orderBy));let l=null;t.limit&&(l=function(g){let E;return E=typeof g=="object"?g.value:g,go(E)?null:E}(t.limit));let u=null;t.startAt&&(u=function(g){const E=!!g.before,S=g.values||[];return new zi(S,E)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const E=!g.before,S=g.values||[];return new zi(S,E)}(t.endAt)),gI(e,s,a,i,l,"F",u,d)}function XI(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function sp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Tr(t.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Tr(t.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Tr(t.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Tr(t.unaryFilter.field);return Ve.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(n):n.fieldFilter!==void 0?function(t){return Ve.create(Tr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Pt.create(t.compositeFilter.filters.map(r=>sp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne()}}(t.compositeFilter.op))}(n):ne()}function YI(n){return UI[n]}function ZI(n){return $I[n]}function eT(n){return BI[n]}function Ir(n){return{fieldPath:n.canonicalString()}}function Tr(n){return qe.fromServerFormat(n.fieldPath)}function ip(n){return n instanceof Ve?function(t){if(t.op==="=="){if(nh(t.value))return{unaryFilter:{field:Ir(t.field),op:"IS_NAN"}};if(th(t.value))return{unaryFilter:{field:Ir(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(nh(t.value))return{unaryFilter:{field:Ir(t.field),op:"IS_NOT_NAN"}};if(th(t.value))return{unaryFilter:{field:Ir(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ir(t.field),op:ZI(t.op),value:t.value}}}(n):n instanceof Pt?function(t){const r=t.getFilters().map(s=>ip(s));return r.length===1?r[0]:{compositeFilter:{op:eT(t.op),filters:r}}}(n):ne()}function tT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function op(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t,r,s,i=re.min(),a=re.min(),l=tt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.ct=e}}function rT(n){const e=JI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ki(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){this._n=new iT}addToCollectionParentIndex(e,t){return this._n.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(wn.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(wn.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class iT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new He(Re.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new He(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Lr(0)}static Ln(){return new Lr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(){this.changes=new Hr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class aT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ws(r.mutation,s,mt.empty(),Le.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,t,r=he()){const s=Wn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=ds();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Wn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,he()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=Yt();const a=Ts(),l=function(){return Ts()}();return t.forEach((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof kn)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),ws(f.mutation,d,f.mutation.getFieldMask(),Le.now())):a.set(d.key,mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var g;return l.set(d,new aT(f,(g=a.get(d))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Ts();let s=new Ce((a,l)=>a-l),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let f=r.get(u)||mt.empty();f=l.applyToLocalView(d,f),r.set(u,f);const g=(s.get(l.batchId)||he()).add(u);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,g=jf();f.forEach(E=>{if(!i.has(E)){const S=Qf(t.get(E),r.get(E));S!==null&&g.set(E,S),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return J.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Lf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve(Wn());let l=-1,u=i;return a.next(d=>V.forEach(d,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{u=u.insert(f,E)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,he())).next(f=>({batchId:l,changes:Bf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new J(t)).next(r=>{let s=ds();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=ds();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,u=>{const d=function(g,E){return new qr(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((g,E)=>{a=a.insert(g,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Ye.newInvalidDocument(f)))});let l=ds();return a.forEach((u,d)=>{const f=i.get(u);f!==void 0&&ws(f.mutation,d,mt.empty(),Le.now()),_o(t,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return V.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:xt(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(s){return{name:s.name,query:rT(s.bundledQuery),readTime:xt(s.readTime)}}(t)),V.resolve()}}/**
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
 */class uT{constructor(){this.overlays=new Ce(J.comparator),this.hr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Wn();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=Wn(),i=t.length+1,a=new J(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ce((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=Wn(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=Wn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=s)););return V.resolve(l)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new NI(t,r));let i=this.hr.get(t);i===void 0&&(i=he(),this.hr.set(t,i)),this.hr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.Pr=new He(Ue.Ir),this.Tr=new He(Ue.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const r=new Ue(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new Ue(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){const t=new J(new Re([])),r=new Ue(t,e),s=new Ue(t,e+1),i=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),i.push(a.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new J(new Re([])),r=new Ue(t,e),s=new Ue(t,e+1);let i=he();return this.Tr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ue(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return J.comparator(e.key,t.key)||ye(e.pr,t.pr)}static Er(e,t){return ye(e.pr,t.pr)||J.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new He(Ue.Ir)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new OI(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.wr=this.wr.add(new Ue(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.br(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ue(t,0),s=new Ue(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],a=>{const l=this.Sr(a.pr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new He(ye);return t.forEach(s=>{const i=new Ue(s,0),a=new Ue(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,a],l=>{r=r.add(l.pr)})}),V.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const a=new Ue(new J(i),0);let l=new He(ye);return this.wr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.pr)),!0)},a),V.resolve(this.Dr(l))}Dr(e){const t=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){we(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return V.forEach(t.mutations,s=>{const i=new Ue(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){const r=new Ue(t,0),s=this.wr.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e){this.vr=e,this.docs=function(){return new Ce(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():Ye.newInvalidDocument(t))}getEntries(e,t){let r=Yt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ye.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Yt();const a=t.path,l=new J(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||XE(JE(f),r)<=0||(s.has(f.key)||_o(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ne()}Fr(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new fT(this)}getSize(e){return V.resolve(this.size)}}class fT extends oT{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e){this.persistence=e,this.Mr=new Hr(t=>Sl(t),Pl),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Vl,this.targetCount=0,this.Lr=Lr.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),V.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new Lr(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.qn(t),V.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Mr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.Mr.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Nr.gr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,t){this.Br={},this.overlays={},this.kr=new wl(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new pT(this),this.indexManager=new sT,this.remoteDocumentCache=function(s){return new dT(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new nT(t),this.$r=new cT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new uT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new hT(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){z("MemoryPersistence","Starting transaction:",e);const s=new mT(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,t){return V.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class mT extends ZE{constructor(e){super(),this.currentSequenceNumber=e}}class Ml{constructor(e){this.persistence=e,this.zr=new Vl,this.jr=null}static Hr(e){return new Ml(e)}get Jr(){if(this.jr)return this.jr;throw ne()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),V.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Jr,r=>{const s=J.fromPath(r);return this.Yr(e,s).next(i=>{i||t.removeEntry(s,re.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return V.or([()=>V.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=s}static Ki(e,t){let r=he(),s=he();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new xl(e,t.fromCache,r,s)}}/**
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
 */class _T{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Av()?8:eI(ze())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ji(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Hi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new _T;return this.Ji(e,t,a).next(l=>{if(i.result=l,this.Ui)return this.Yi(e,t,a,l.size)})}).next(()=>i.result)}Yi(e,t,r,s){return r.documentReadCount<this.Wi?(cs()<=de.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Er(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),V.resolve()):(cs()<=de.DEBUG&&z("QueryEngine","Query:",Er(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(cs()<=de.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Er(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mt(t))):V.resolve())}ji(e,t){if(oh(t))return V.resolve(null);let r=Mt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ki(t,null,"F"),r=Mt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=he(...i);return this.zi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.Zi(t,l);return this.Xi(t,d,a,u.readTime)?this.ji(e,Ki(t,null,"F")):this.es(e,d,t,u)}))})))}Hi(e,t,r,s){return oh(t)||s.isEqual(re.min())?V.resolve(null):this.zi.getDocuments(e,r).next(i=>{const a=this.Zi(t,i);return this.Xi(t,a,r,s)?V.resolve(null):(cs()<=de.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Er(t)),this.es(e,a,t,QE(s,-1)).next(l=>l))})}Zi(e,t){let r=new He(Uf(e));return t.forEach((s,i)=>{_o(e,i)&&(r=r.add(i))}),r}Xi(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,t,r){return cs()<=de.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Er(t)),this.zi.getDocumentsMatchingQuery(e,t,wn.min(),r)}es(e,t,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,t,r,s){this.persistence=e,this.ts=t,this.serializer=s,this.ns=new Ce(ye),this.rs=new Hr(i=>Sl(i),Pl),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lT(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function ET(n,e,t,r){return new vT(n,e,t,r)}async function ap(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=he();for(const d of s){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(d=>({us:d,removedBatchIds:a,addedBatchIds:l}))})})}function IT(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.os.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const g=d.batch,E=g.keys();let S=V.resolve();return E.forEach(M=>{S=S.next(()=>f.getEntry(u,M)).next(F=>{const L=d.docVersions.get(M);we(L!==null),F.version.compareTo(L)<0&&(g.applyToRemoteDocument(F,d),F.isValidDocument()&&(F.setReadTime(d.commitVersion),f.addEntry(F)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=he();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function lp(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function TT(n,e){const t=ie(n),r=e.snapshotVersion;let s=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.os.newChangeBuffer({trackRemovals:!0});s=t.ns;const l=[];e.targetChanges.forEach((f,g)=>{const E=s.get(g);if(!E)return;l.push(t.Qr.removeMatchingKeys(i,f.removedDocuments,g).next(()=>t.Qr.addMatchingKeys(i,f.addedDocuments,g)));let S=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(tt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),s=s.insert(g,S),function(F,L,X){return F.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=3e8?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0}(E,S,f)&&l.push(t.Qr.updateTargetData(i,S))});let u=Yt(),d=he();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(wT(i,a,e.documentUpdates).next(f=>{u=f.cs,d=f.ls})),!r.isEqual(re.min())){const f=t.Qr.getLastRemoteSnapshotVersion(i).next(g=>t.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.ns=s,i))}function wT(n,e,t){let r=he(),s=he();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Yt();return t.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(re.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{cs:a,ls:s}})}function AT(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bT(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Qr.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):t.Qr.allocateTargetId(r).next(a=>(s=new gn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function za(n,e,t){const r=ie(n),s=r.ns.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!js(a))throw a;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function _h(n,e,t){const r=ie(n);let s=re.min(),i=he();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const g=ie(u),E=g.rs.get(f);return E!==void 0?V.resolve(g.ns.get(E)):g.Qr.getTargetData(d,f)}(r,a,Mt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,t?s:re.min(),t?i:he())).next(l=>(RT(r,_I(e),l),{documents:l,hs:i})))}function RT(n,e,t){let r=n.ss.get(e)||re.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ss.set(e,r)}class yh{constructor(){this.activeTargetIds=wI()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ST{constructor(){this.no=new yh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new yh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ii=null;function da(){return Ii===null?Ii=function(){return 268435456+Math.round(2147483648*Math.random())}():Ii++,"0x"+Ii.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection";class DT extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+t.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(t,r,s,i,a){const l=da(),u=this.vo(t,r.toUriEncodedString());z("RestConnection",`Sending RPC '${t}' ${l}:`,u,s);const d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,i,a),this.Mo(t,u,d,s).then(f=>(z("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw Nr("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",u,"request:",s),f})}xo(t,r,s,i,a,l){return this.Co(t,r,s,i,a)}Fo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+jr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}vo(t,r){const s=CT[t];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,r,s){const i=da();return new Promise((a,l)=>{const u=new Ef;u.setWithCredentials(!0),u.listenOnce(Tf.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ci.NO_ERROR:const f=u.getResponseJson();z(Qe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case Ci.TIMEOUT:z(Qe,`RPC '${e}' ${i} timed out`),l(new H(k.DEADLINE_EXCEEDED,"Request time out"));break;case Ci.HTTP_ERROR:const g=u.getStatus();if(z(Qe,`RPC '${e}' ${i} failed with status:`,g,"response text:",u.getResponseText()),g>0){let E=u.getResponseJson();Array.isArray(E)&&(E=E[0]);const S=E==null?void 0:E.error;if(S&&S.status&&S.message){const M=function(L){const X=L.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(X)>=0?X:k.UNKNOWN}(S.status);l(new H(M,S.message))}else l(new H(k.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(k.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{z(Qe,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);z(Qe,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",d,r,15)})}Oo(e,t,r){const s=da(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=bf(),l=Af(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.xmlHttpFactory=new If({})),this.Fo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=i.join("");z(Qe,`Creating RPC '${e}' stream ${s}: ${f}`,u);const g=a.createWebChannel(f,u);let E=!1,S=!1;const M=new kT({lo:L=>{S?z(Qe,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(E||(z(Qe,`Opening RPC '${e}' stream ${s} transport.`),g.open(),E=!0),z(Qe,`RPC '${e}' stream ${s} sending:`,L),g.send(L))},ho:()=>g.close()}),F=(L,X,ee)=>{L.listen(X,Q=>{try{ee(Q)}catch(le){setTimeout(()=>{throw le},0)}})};return F(g,hs.EventType.OPEN,()=>{S||(z(Qe,`RPC '${e}' stream ${s} transport opened.`),M.mo())}),F(g,hs.EventType.CLOSE,()=>{S||(S=!0,z(Qe,`RPC '${e}' stream ${s} transport closed`),M.po())}),F(g,hs.EventType.ERROR,L=>{S||(S=!0,Nr(Qe,`RPC '${e}' stream ${s} transport errored:`,L),M.po(new H(k.UNAVAILABLE,"The operation could not be completed")))}),F(g,hs.EventType.MESSAGE,L=>{var X;if(!S){const ee=L.data[0];we(!!ee);const Q=ee,le=Q.error||((X=Q[0])===null||X===void 0?void 0:X.error);if(le){z(Qe,`RPC '${e}' stream ${s} received error:`,le);const Ae=le.status;let Y=function(v){const I=Oe[v];if(I!==void 0)return Xf(I)}(Ae),w=le.message;Y===void 0&&(Y=k.INTERNAL,w="Unknown error status: "+Ae+" with message "+le.message),S=!0,M.po(new H(Y,w)),g.close()}else z(Qe,`RPC '${e}' stream ${s} received:`,ee),M.yo(ee)}}),F(l,wf.STAT_EVENT,L=>{L.stat===Ma.PROXY?z(Qe,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===Ma.NOPROXY&&z(Qe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{M.fo()},0),M}}function fa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(n){return new jI(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,t,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=t,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,t-r);s>0&&z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,t,r,s,i,a,l,u){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new cp(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(Xt(t.toString()),Xt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===t&&this.u_(r,s)},r=>{e(()=>{const s=new H(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,t){const r=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OT extends up{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=zI(this.serializer,e),r=function(i){if(!("targetChange"in i))return re.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?re.min():a.readTime?xt(a.readTime):re.min()}(e);return this.listener.h_(t,r)}P_(e){const t={};t.database=Ha(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=Ua(u)?{documents:GI(i,u)}:{query:QI(i,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=ep(i,a.resumeToken);const d=Ba(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(re.min())>0){l.readTime=Qi(i,a.snapshotVersion.toTimestamp());const d=Ba(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=XI(this.serializer,e);r&&(t.labels=r),this.i_(t)}I_(e){const t={};t.database=Ha(this.serializer),t.removeTarget=e,this.i_(t)}}class NT extends up{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=WI(e.writeResults,e.commitTime),r=xt(e.commitTime);return this.listener.A_(r,t)}return we(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Ha(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>KI(this.serializer,r))};this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new H(k.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Co(e,ja(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(k.UNKNOWN,i.toString())})}xo(e,t,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(e,ja(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new H(k.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class MT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Xt(t),this.y_=!1):z("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(a=>{r.enqueueAndForget(async()=>{dr(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=ie(u);d.M_.add(4),await zs(d),d.N_.set("Unknown"),d.M_.delete(4),await To(d)}(this))})}),this.N_=new MT(r,s)}}async function To(n){if(dr(n))for(const e of n.x_)await e(!0)}async function zs(n){for(const e of n.x_)await e(!1)}function hp(n,e){const t=ie(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),$l(t)?Ul(t):zr(t).Xo()&&Fl(t,e))}function Ll(n,e){const t=ie(n),r=zr(t);t.F_.delete(e),r.Xo()&&dp(t,e),t.F_.size===0&&(r.Xo()?r.n_():dr(t)&&t.N_.set("Unknown"))}function Fl(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zr(n).P_(e)}function dp(n,e){n.L_.xe(e),zr(n).I_(e)}function Ul(n){n.L_=new FI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),zr(n).start(),n.N_.w_()}function $l(n){return dr(n)&&!zr(n).Zo()&&n.F_.size>0}function dr(n){return ie(n).M_.size===0}function fp(n){n.L_=void 0}async function LT(n){n.N_.set("Online")}async function FT(n){n.F_.forEach((e,t)=>{Fl(n,e)})}async function UT(n,e){fp(n),$l(n)?(n.N_.D_(e),Ul(n)):n.N_.set("Unknown")}async function $T(n,e,t){if(n.N_.set("Online"),e instanceof Zf&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.F_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.F_.delete(l),s.L_.removeTarget(l))}(n,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ji(n,r)}else if(e instanceof Oi?n.L_.Ke(e):e instanceof Yf?n.L_.He(e):n.L_.We(e),!t.isEqual(re.min()))try{const r=await lp(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.L_.rt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.F_.get(d);f&&i.F_.set(d,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const f=i.F_.get(u);if(!f)return;i.F_.set(u,f.withResumeToken(tt.EMPTY_BYTE_STRING,f.snapshotVersion)),dp(i,u);const g=new gn(f.target,u,d,f.sequenceNumber);Fl(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await Ji(n,r)}}async function Ji(n,e,t){if(!js(e))throw e;n.M_.add(1),await zs(n),n.N_.set("Offline"),t||(t=()=>lp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await To(n)})}function pp(n,e){return e().catch(t=>Ji(n,t,e))}async function wo(n){const e=ie(n),t=bn(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;BT(e);)try{const s=await AT(e.localStore,r);if(s===null){e.v_.length===0&&t.n_();break}r=s.batchId,jT(e,s)}catch(s){await Ji(e,s)}gp(e)&&mp(e)}function BT(n){return dr(n)&&n.v_.length<10}function jT(n,e){n.v_.push(e);const t=bn(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function gp(n){return dr(n)&&!bn(n).Zo()&&n.v_.length>0}function mp(n){bn(n).start()}async function qT(n){bn(n).V_()}async function HT(n){const e=bn(n);for(const t of n.v_)e.d_(t.mutations)}async function zT(n,e,t){const r=n.v_.shift(),s=Dl.from(r,e,t);await pp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await wo(n)}async function KT(n,e){e&&bn(n).E_&&await async function(r,s){if(function(a){return MI(a)&&a!==k.ABORTED}(s.code)){const i=r.v_.shift();bn(r).t_(),await pp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await wo(r)}}(n,e),gp(n)&&mp(n)}async function Eh(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=dr(t);t.M_.add(3),await zs(t),r&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await To(t)}async function WT(n,e){const t=ie(n);e?(t.M_.delete(2),await To(t)):e||(t.M_.add(2),await zs(t),t.N_.set("Unknown"))}function zr(n){return n.B_||(n.B_=function(t,r,s){const i=ie(t);return i.f_(),new OT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:LT.bind(null,n),To:FT.bind(null,n),Ao:UT.bind(null,n),h_:$T.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),$l(n)?Ul(n):n.N_.set("Unknown")):(await n.B_.stop(),fp(n))})),n.B_}function bn(n){return n.k_||(n.k_=function(t,r,s){const i=ie(t);return i.f_(),new NT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:qT.bind(null,n),Ao:KT.bind(null,n),R_:HT.bind(null,n),A_:zT.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await wo(n)):(await n.k_.stop(),n.v_.length>0&&(z("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Bl(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jl(n,e){if(Xt("AsyncQueue",`${e}: ${n}`),js(n))return new H(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||J.comparator(t.key,r.key):(t,r)=>J.comparator(t.key,r.key),this.keyedMap=ds(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new Rr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Rr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Rr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this.q_=new Ce(J.comparator)}track(e){const t=e.doc.key,r=this.q_.get(t);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(t,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(t):e.type===1&&r.type===2?this.q_=this.q_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):ne():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Fr{constructor(e,t,r,s,i,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Fr(e,t,Rr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class QT{constructor(){this.queries=new Hr(e=>Ff(e),mo),this.onlineState="Unknown",this.z_=new Set}}async function JT(n,e){const t=ie(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new GT,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await t.onListen(s,!0);break;case 1:i.K_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=jl(a,`Initialization of query '${Er(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.U_.push(e),e.j_(t.onlineState),i.K_&&e.H_(i.K_)&&ql(t)}async function XT(n,e){const t=ie(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.U_.indexOf(e);a>=0&&(i.U_.splice(a,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function YT(n,e){const t=ie(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.U_)l.H_(s)&&(r=!0);a.K_=s}}r&&ql(t)}function ZT(n,e,t){const r=ie(n),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(t);r.queries.delete(e)}function ql(n){n.z_.forEach(e=>{e.next()})}var Ka,Th;(Th=Ka||(Ka={})).J_="default",Th.Cache="cache";class ew{constructor(e,t,r){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Fr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const r=t!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=Fr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Ka.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e){this.key=e}}class yp{constructor(e){this.key=e}}class tw{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=he(),this.mutatedKeys=he(),this.Ia=Uf(e),this.Ta=new Rr(this.Ia)}get Ea(){return this.la}da(e,t){const r=t?t.Aa:new Ih,s=t?t.Ta:this.Ta;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const E=s.get(f),S=_o(this.query,g)?g:null,M=!!E&&this.mutatedKeys.has(E.key),F=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let L=!1;E&&S?E.data.isEqual(S.data)?M!==F&&(r.track({type:3,doc:S}),L=!0):this.Ra(E,S)||(r.track({type:2,doc:S}),L=!0,(u&&this.Ia(S,u)>0||d&&this.Ia(S,d)<0)&&(l=!0)):!E&&S?(r.track({type:0,doc:S}),L=!0):E&&!S&&(r.track({type:1,doc:E}),L=!0,(u||d)&&(l=!0)),L&&(S?(a=a.add(S),i=F?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ta:a,Aa:r,Xi:l,mutatedKeys:i}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((f,g)=>function(S,M){const F=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return F(S)-F(M)}(f.type,g.type)||this.Ia(f.doc,g.doc)),this.Va(r),s=s!=null&&s;const l=t&&!s?this.ma():[],u=this.Pa.size===0&&this.current&&!s?1:0,d=u!==this.ha;return this.ha=u,a.length!==0||d?{snapshot:new Fr(this.query,e.Ta,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Ih,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=he(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const t=[];return e.forEach(r=>{this.Pa.has(r)||t.push(new yp(r))}),this.Pa.forEach(r=>{e.has(r)||t.push(new _p(r))}),t}pa(e){this.la=e.hs,this.Pa=he();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return Fr.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class nw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class rw{constructor(e){this.key=e,this.wa=!1}}class sw{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new Hr(l=>Ff(l),mo),this.Da=new Map,this.Ca=new Set,this.va=new Ce(J.comparator),this.Fa=new Map,this.Ma=new Vl,this.xa={},this.Oa=new Map,this.Na=Lr.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function iw(n,e,t=!0){const r=Ap(n);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await vp(r,e,t,!0),s}async function ow(n,e){const t=Ap(n);await vp(t,e,!0,!1)}async function vp(n,e,t,r){const s=await bT(n.localStore,Mt(e)),i=s.targetId,a=t?n.sharedClientState.addLocalQueryTarget(i):"not-current";let l;return r&&(l=await aw(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&hp(n.remoteStore,s),l}async function aw(n,e,t,r,s){n.Ba=(g,E,S)=>async function(F,L,X,ee){let Q=L.view.da(X);Q.Xi&&(Q=await _h(F.localStore,L.query,!1).then(({documents:w})=>L.view.da(w,Q)));const le=ee&&ee.targetChanges.get(L.targetId),Ae=ee&&ee.targetMismatches.get(L.targetId)!=null,Y=L.view.applyChanges(Q,F.isPrimaryClient,le,Ae);return Ah(F,L.targetId,Y.fa),Y.snapshot}(n,g,E,S);const i=await _h(n.localStore,e,!0),a=new tw(e,i.hs),l=a.da(i.documents),u=Hs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,u);Ah(n,t,d.fa);const f=new nw(e,t,a);return n.ba.set(e,f),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),d.snapshot}async function lw(n,e,t){const r=ie(n),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(a=>!mo(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await za(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ll(r.remoteStore,s.targetId),Wa(r,s.targetId)}).catch(Bs)):(Wa(r,s.targetId),await za(r.localStore,s.targetId,!0))}async function cw(n,e){const t=ie(n),r=t.ba.get(e),s=t.Da.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ll(t.remoteStore,r.targetId))}async function uw(n,e,t){const r=_w(n);try{const s=await function(a,l){const u=ie(a),d=Le.now(),f=l.reduce((S,M)=>S.add(M.key),he());let g,E;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let M=Yt(),F=he();return u.os.getEntries(S,f).next(L=>{M=L,M.forEach((X,ee)=>{ee.isValidDocument()||(F=F.add(X))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,M)).next(L=>{g=L;const X=[];for(const ee of l){const Q=kI(ee,g.get(ee.key).overlayedDocument);Q!=null&&X.push(new kn(ee.key,Q,kf(Q.value.mapValue),Tt.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,X,l)}).next(L=>{E=L;const X=L.applyToLocalDocumentSet(g,F);return u.documentOverlayCache.saveOverlays(S,L.batchId,X)})}).then(()=>({batchId:E.batchId,changes:Bf(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let d=a.xa[a.currentUser.toKey()];d||(d=new Ce(ye)),d=d.insert(l,u),a.xa[a.currentUser.toKey()]=d}(r,s.batchId,t),await Ks(r,s.changes),await wo(r.remoteStore)}catch(s){const i=jl(s,"Failed to persist write");t.reject(i)}}async function Ep(n,e){const t=ie(n);try{const r=await TT(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Fa.get(i);a&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?we(a.wa):s.removedDocuments.size>0&&(we(a.wa),a.wa=!1))}),await Ks(t,r,e)}catch(r){await Bs(r)}}function wh(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ba.forEach((i,a)=>{const l=a.view.j_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=ie(a);u.onlineState=l;let d=!1;u.queries.forEach((f,g)=>{for(const E of g.U_)E.j_(l)&&(d=!0)}),d&&ql(u)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hw(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Fa.get(e),i=s&&s.key;if(i){let a=new Ce(J.comparator);a=a.insert(i,Ye.newNoDocument(i,re.min()));const l=he().add(i),u=new Eo(re.min(),new Map,new Ce(ye),a,l);await Ep(r,u),r.va=r.va.remove(i),r.Fa.delete(e),Hl(r)}else await za(r.localStore,e,!1).then(()=>Wa(r,e,t)).catch(Bs)}async function dw(n,e){const t=ie(n),r=e.batch.batchId;try{const s=await IT(t.localStore,e);Tp(t,r,null),Ip(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ks(t,s)}catch(s){await Bs(s)}}async function fw(n,e,t){const r=ie(n);try{const s=await function(a,l){const u=ie(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(g=>(we(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);Tp(r,e,t),Ip(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ks(r,s)}catch(s){await Bs(s)}}function Ip(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function Tp(n,e,t){const r=ie(n);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function Wa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Da.get(e))n.ba.delete(r),t&&n.Sa.ka(r,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(r=>{n.Ma.containsKey(r)||wp(n,r)})}function wp(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(Ll(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),Hl(n))}function Ah(n,e,t){for(const r of t)r instanceof _p?(n.Ma.addReference(r.key,e),pw(n,r)):r instanceof yp?(z("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,e),n.Ma.containsKey(r.key)||wp(n,r.key)):ne()}function pw(n,e){const t=e.key,r=t.path.canonicalString();n.va.get(t)||n.Ca.has(r)||(z("SyncEngine","New document in limbo: "+t),n.Ca.add(r),Hl(n))}function Hl(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new J(Re.fromString(e)),r=n.Na.next();n.Fa.set(r,new rw(t)),n.va=n.va.insert(t,r),hp(n.remoteStore,new gn(Mt(Cl(t.path)),r,"TargetPurposeLimboResolution",wl.oe))}}async function Ks(n,e,t){const r=ie(n),s=[],i=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{a.push(r.Ba(u,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){s.push(d);const g=xl.Ki(u.targetId,d);i.push(g)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(u,d){const f=ie(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>V.forEach(d,E=>V.forEach(E.qi,S=>f.persistence.referenceDelegate.addReference(g,E.targetId,S)).next(()=>V.forEach(E.Qi,S=>f.persistence.referenceDelegate.removeReference(g,E.targetId,S)))))}catch(g){if(!js(g))throw g;z("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const E=g.targetId;if(!g.fromCache){const S=f.ns.get(E),M=S.snapshotVersion,F=S.withLastLimboFreeSnapshotVersion(M);f.ns=f.ns.insert(E,F)}}}(r.localStore,i))}async function gw(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await ap(t.localStore,e);t.currentUser=e,function(i,a){i.Oa.forEach(l=>{l.forEach(u=>{u.reject(new H(k.CANCELLED,a))})}),i.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ks(t,r.us)}}function mw(n,e){const t=ie(n),r=t.Fa.get(e);if(r&&r.wa)return he().add(r.key);{let s=he();const i=t.Da.get(e);if(!i)return s;for(const a of i){const l=t.ba.get(a);s=s.unionWith(l.view.Ea)}return s}}function Ap(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ep.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hw.bind(null,e),e.Sa.h_=YT.bind(null,e.eventManager),e.Sa.ka=ZT.bind(null,e.eventManager),e}function _w(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fw.bind(null,e),e}class bh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Io(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return ET(this.persistence,new yT,e.initialUser,this.serializer)}createPersistence(e){return new gT(Ml.Hr,this.serializer)}createSharedClientState(e){return new ST}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yw{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gw.bind(null,this.syncEngine),await WT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new QT}()}createDatastore(e){const t=Io(e.databaseInfo.databaseId),r=function(i){return new DT(i)}(e.databaseInfo);return function(i,a,l,u){return new VT(i,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new xT(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>wh(this.syncEngine,t,0),function(){return vh.D()?new vh:new PT}())}createSyncEngine(e,t){return function(s,i,a,l,u,d,f){const g=new sw(s,i,a,l,u,d);return f&&(g.La=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){const s=ie(r);z("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await zs(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Xt("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Je.UNAUTHENTICATED,this.clientId=Sf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{z("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(z("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=jl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function pa(n,e){n.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ap(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Rh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Tw(n);z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Eh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Eh(e.remoteStore,s)),n._onlineComponents=e}function Iw(n){return n.name==="FirebaseError"?n.code===k.FAILED_PRECONDITION||n.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Tw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await pa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Iw(t))throw t;Nr("Error using user provided cache. Falling back to memory cache: "+t),await pa(n,new bh)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await pa(n,new bh);return n._offlineComponents}async function bp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await Rh(n,n._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await Rh(n,new yw))),n._onlineComponents}function ww(n){return bp(n).then(e=>e.syncEngine)}async function Sh(n){const e=await bp(n),t=e.eventManager;return t.onListen=iw.bind(null,e.syncEngine),t.onUnlisten=lw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ow.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=cw.bind(null,e.syncEngine),t}/**
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
 */function Rp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(n,e,t){if(!t)throw new H(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Aw(n,e,t,r){if(e===!0&&r===!0)throw new H(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ch(n){if(!J.isDocumentKey(n))throw new H(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function kh(n){if(J.isDocumentKey(n))throw new H(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ao(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ne()}function Lt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new H(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ao(n);throw new H(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Aw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $E;switch(r.type){case"firstParty":return new HE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ph.get(t);r&&(z("ComponentProvider","Removing Datastore"),Ph.delete(t),r.terminate())}(this),Promise.resolve()}}function bw(n,e,t,r={}){var s;const i=(n=Lt(n,bo))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Nr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Je.MOCK_USER;else{l=yv(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new H(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Je(d)}n._authCredentials=new BE(new Rf(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dn(this.firestore,e,this._query)}}class ot{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new In(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class In extends Dn{constructor(e,t,r){super(e,t,Cl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new J(e))}withConverter(e){return new In(this.firestore,e,this._path)}}function Ti(n,e,...t){if(n=Ke(n),Sp("collection","path",e),n instanceof bo){const r=Re.fromString(e,...t);return kh(r),new In(n,null,r)}{if(!(n instanceof ot||n instanceof In))throw new H(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return kh(r),new In(n.firestore,null,r)}}function Kn(n,e,...t){if(n=Ke(n),arguments.length===1&&(e=Sf.newId()),Sp("doc","path",e),n instanceof bo){const r=Re.fromString(e,...t);return Ch(r),new ot(n,null,new J(r))}{if(!(n instanceof ot||n instanceof In))throw new H(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return Ch(r),new ot(n.firestore,n instanceof In?n.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new cp(this,"async_queue_retry"),this.hu=()=>{const t=fa();t&&z("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=fa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=fa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new Zn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!js(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Xt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const s=Bl.createAndSchedule(this,e,t,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&ne()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}function Oh(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class cr extends bo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=function(){return new Rw}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Cp(this),this._firestoreClient.terminate()}}function Sw(n,e){const t=typeof n=="object"?n:mf(),r=typeof n=="string"?n:"(default)",s=Il(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=mv("firestore");i&&bw(s,...i)}return s}function Pp(n){return n._firestoreClient||Cp(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Cp(n){var e,t,r;const s=n._freezeSettings(),i=function(l,u,d,f){return new rI(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Rp(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Ew(n._authCredentials,n._appCheckCredentials,n._queue,i),!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ur(tt.fromBase64String(e))}catch(t){throw new H(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ur(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new H(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new H(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new H(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=/^__.*__$/;class Cw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new kn(e,this.data,this.fieldMask,t,this.fieldTransforms):new qs(e,this.data,t,this.fieldTransforms)}}class kp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new kn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Dp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class Wl{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Wl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Xi(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Dp(this.fu)&&Pw.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class kw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Io(e)}Fu(e,t,r,s=!1){return new Wl({fu:e,methodName:t,vu:r,path:qe.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function So(n){const e=n._freezeSettings(),t=Io(n._databaseId);return new kw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Op(n,e,t,r,s,i={}){const a=n.Fu(i.merge||i.mergeFields?2:0,e,t,s);Gl("Data must be an object, but it was:",a,r);const l=Np(r,a);let u,d;if(i.merge)u=new mt(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const E=Ga(e,g,t);if(!a.contains(E))throw new H(k.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);Mp(f,E)||f.push(E)}u=new mt(f),d=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=a.fieldTransforms;return new Cw(new ut(l),u,d)}class Po extends zl{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Po}}function Dw(n,e,t,r){const s=n.Fu(1,e,t);Gl("Data must be an object, but it was:",s,r);const i=[],a=ut.empty();hr(r,(u,d)=>{const f=Ql(e,u,t);d=Ke(d);const g=s.Su(f);if(d instanceof Po)i.push(f);else{const E=Ws(d,g);E!=null&&(i.push(f),a.set(f,E))}});const l=new mt(i);return new kp(a,l,s.fieldTransforms)}function Ow(n,e,t,r,s,i){const a=n.Fu(1,e,t),l=[Ga(e,r,t)],u=[s];if(i.length%2!=0)throw new H(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)l.push(Ga(e,i[E])),u.push(i[E+1]);const d=[],f=ut.empty();for(let E=l.length-1;E>=0;--E)if(!Mp(d,l[E])){const S=l[E];let M=u[E];M=Ke(M);const F=a.Su(S);if(M instanceof Po)d.push(S);else{const L=Ws(M,F);L!=null&&(d.push(S),f.set(S,L))}}const g=new mt(d);return new kp(f,g,a.fieldTransforms)}function Nw(n,e,t,r=!1){return Ws(t,n.Fu(r?4:3,e))}function Ws(n,e){if(Vp(n=Ke(n)))return Gl("Unsupported field value:",e,n),Np(n,e);if(n instanceof zl)return function(r,s){if(!Dp(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=Ws(l,s.bu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return AI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:Qi(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qi(s.serializer,i)}}if(r instanceof Kl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ur)return{bytesValue:ep(s.serializer,r._byteString)};if(r instanceof ot){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Nl(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Ao(r)}`)}(n,e)}function Np(n,e){const t={};return Pf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hr(n,(r,s)=>{const i=Ws(s,e.pu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Vp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Le||n instanceof Kl||n instanceof Ur||n instanceof ot||n instanceof zl)}function Gl(n,e,t){if(!Vp(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Ao(t);throw r==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+r)}}function Ga(n,e,t){if((e=Ke(e))instanceof Ro)return e._internalPath;if(typeof e=="string")return Ql(n,e);throw Xi("Field path arguments must be of type string or ",n,!1,void 0,t)}const Vw=new RegExp("[~\\*/\\[\\]]");function Ql(n,e,t){if(e.search(Vw)>=0)throw Xi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ro(...e.split("."))._internalPath}catch{throw Xi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Xi(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new H(k.INVALID_ARGUMENT,l+n+u)}function Mp(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Mw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Jl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Mw extends xp{data(){return super.data()}}function Jl(n,e){return typeof e=="string"?Ql(n,e):e instanceof Ro?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new H(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xl{}class Yl extends Xl{}function ga(n,e,...t){let r=[];e instanceof Xl&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof ec).length,l=i.filter(u=>u instanceof Zl).length;if(a>1||a>0&&l>0)throw new H(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Zl extends Yl{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Zl(e,t,r)}_apply(e){const t=this._parse(e);return Lp(e._query,t),new Dn(e.firestore,e.converter,$a(e._query,t))}_parse(e){const t=So(e.firestore);return function(i,a,l,u,d,f,g){let E;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new H(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){xh(g,f);const S=[];for(const M of g)S.push(Mh(u,i,M));E={arrayValue:{values:S}}}else E=Mh(u,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||xh(g,f),E=Nw(l,a,g,f==="in"||f==="not-in");return Ve.create(d,f,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class ec extends Xl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ec(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Pt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)Lp(a,u),a=$a(a,u)}(e._query,t),new Dn(e.firestore,e.converter,$a(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class tc extends Yl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new tc(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new H(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new H(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vs(i,a)}(e._query,this._field,this._direction);return new Dn(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new qr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Nh(n,e="asc"){const t=e,r=Jl("orderBy",n);return tc._create(r,t)}class nc extends Yl{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new nc(e,t,r)}_apply(e){return new Dn(e.firestore,e.converter,Ki(e._query,this._limit,this._limitType))}}function Vh(n){return nc._create("limit",n,"F")}function Mh(n,e,t){if(typeof(t=Ke(t))=="string"){if(t==="")throw new H(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Lf(e)&&t.indexOf("/")!==-1)throw new H(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Re.fromString(t));if(!J.isDocumentKey(r))throw new H(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return eh(n,new J(r))}if(t instanceof ot)return eh(n,t._key);throw new H(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ao(t)}.`)}function xh(n,e){if(!Array.isArray(n)||n.length===0)throw new H(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Lp(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new H(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Lw{convertValue(e,t="none"){switch(lr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ar(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ne()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return hr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new Kl(Ne(e.latitude),Ne(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=bl(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ds(e));default:return null}}convertTimestamp(e){const t=An(e);return new Le(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Re.fromString(e);we(op(r));const s=new Os(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(t)||Xt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Up extends xp{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ni(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Jl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ni extends Up{data(e={}){return super.data(e)}}class Fw{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ps(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ni(this._firestore,this._userDataWriter,r.key,r,new ps(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new H(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new Ni(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ps(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Ni(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ps(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:Uw(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Uw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}class $p extends Lw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ur(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}function ma(n,e,t){n=Lt(n,ot);const r=Lt(n.firestore,cr),s=Fp(n.converter,e);return Co(r,[Op(So(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Tt.none())])}function $w(n,e,t,...r){n=Lt(n,ot);const s=Lt(n.firestore,cr),i=So(s);let a;return a=typeof(e=Ke(e))=="string"||e instanceof Ro?Ow(i,"updateDoc",n._key,e,t,r):Dw(i,"updateDoc",n._key,e),Co(s,[a.toMutation(n._key,Tt.exists(!0))])}function Bw(n){return Co(Lt(n.firestore,cr),[new kl(n._key,Tt.none())])}function jw(n,e){const t=Lt(n.firestore,cr),r=Kn(n),s=Fp(n.converter,e);return Co(t,[Op(So(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Tt.exists(!1))]).then(()=>r)}function wi(n,...e){var t,r,s;n=Ke(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Oh(e[a])||(i=e[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Oh(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let u,d,f;if(n instanceof ot)d=Lt(n.firestore,cr),f=Cl(n._key.path),u={next:g=>{e[a]&&e[a](qw(d,n,g))},error:e[a+1],complete:e[a+2]};else{const g=Lt(n,Dn);d=Lt(g.firestore,cr),f=g._query;const E=new $p(d);u={next:S=>{e[a]&&e[a](new Fw(d,E,g,S))},error:e[a+1],complete:e[a+2]},xw(n._query)}return function(E,S,M,F){const L=new vw(F),X=new ew(S,L,M);return E.asyncQueue.enqueueAndForget(async()=>JT(await Sh(E),X)),()=>{L.$a(),E.asyncQueue.enqueueAndForget(async()=>XT(await Sh(E),X))}}(Pp(d),f,l,u)}function Co(n,e){return function(r,s){const i=new Zn;return r.asyncQueue.enqueueAndForget(async()=>uw(await ww(r),s,i)),i.promise}(Pp(n),e)}function qw(n,e,t){const r=t.docs.get(e._key),s=new $p(n);return new Up(n,s,e._key,r,new ps(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){jr=s})(Br),Or(new sr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new cr(new jE(r.getProvider("auth-internal")),new KE(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new H(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Os(d.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),En(Ju,"4.6.4",e),En(Ju,"4.6.4","esm2017")})();const Hw={class:"grid overflow-hidden h-[calc(calc(100vh-env(safe-area-inset-bottom))-env(safe-area-inset-top))] grid-cols-[[min-content,auto,max-content] dark:bg-slate-800"},zw={class:"grid grid-rows-[auto,max-content] h-screen"},Kw={class:"max-w-screen flex flex-col justify-between items-start overflow-y-scroll overflow-x-hidden bg-slate-100 col-start-2 col-end-3 row-start-1 row-end-2 dark:bg-slate-900",id:"chat"},Ww={class:"py-4 pt-[calc(1rem+env(safe-area-inset-top))] flex gap-2 flex-col items-start w-full"},Gw=["id"],Qw=["src"],Jw={ref:"scrollIntoView",class:"bg-red-500 w-screen"},Xw={key:0,class:"absolute top-0 -translate-y-full"},Yw={class:"bg-slate-200 px-3 py-2 rounded-t-md text-sm dark:bg-[#0c1221]"},Zw={class:"text-slate-500 dark:text-slate-400"},e0=["value"],t0=oe("button",{class:"py-2 px-3 rounded-r-md bg-indigo-500 active:bg-indigo-600 text-slate-200 active:text-slate-300 border border-l-0 border-solid border-slate-300 dark:border-slate-700",type:"submit"}," Send ",-1),n0={class:"bg-white col-start-3 col-end-4 row-start-1 row-end-3 px-4 py-3 pt-6 dark:bg-[#0a0f1c]"},r0={class:"mb-2"},s0={class:"flex flex-col items-start gap-2"},i0={class:"flex gap-2 items-center"},o0=["src"],a0={class:"whitespace-nowrap"},l0={class:"flex gap-2 items-center"},c0=["src"],u0={class:"whitespace-nowrap text-slate-500 dark:text-slate-400"},h0={data(){return{newMess:"",messages:[],selectedMessage:null,users:[],offlineUsers:[],onlineUsers:[],selectedChannel:"channel-1",channels:[]}},props:{db:Object,user:Object},emits:["logOut"],methods:{watch(){const n=ga(Ti(this.db,"messages","public",this.selectedChannel),Nh("time","desc"),Vh(25));wi(n,e=>{this.messages=[],e.forEach(t=>{this.messages.unshift(t)}),console.log(`Current messages: ${this.messages.length}`),console.log(this.messages.map(t=>t.data().message).join(" | ")),setTimeout(()=>{this.$refs.scrollIntoView.scrollIntoView({behavior:"smooth"})},100)})},watchChannels(){wi(Kn(this.db,"messages","public"),n=>{console.log("CHANNELS: ",n.data().channels),this.channels=n.data().channels})},watchStatus(){const n=ga(Ti(this.db,"users"));wi(n,e=>{this.users=[],e.forEach(t=>{this.users.unshift(t)}),this.onlineUsers=this.users.filter(t=>t.data().online).sort((t,r)=>this.sortUsers(t,r)),this.offlineUsers=this.users.filter(t=>!t.data().online).sort((t,r)=>this.sortUsers(t,r)),console.log(`Online users: ${this.onlineUsers.length}`),console.log(this.onlineUsers.map(t=>t.data().username).join(" | "))})},sortUsers(n,e){return n.data().username.toLowerCase()<e.data().username.toLowerCase()?-1:n.data().username.toLowerCase()>e.data().username.toLowerCase()?1:0},sendMessage(){const n=this.newMess.trim();if(!n)return;const e=this.selectedMessage;this.selectedMessage=null,this.newMess="",jw(Ti(this.db,"messages","public",this.selectedChannel),{user:JSON.stringify(this.user),message:n,time:Date.now(),reply:this.messages[e]?this.messages[e].id:null,edited:!1})},async deleteMessage(n){await Bw(Kn(this.db,"messages","public",this.selectedChannel,n.id))},imagify(n){const e=n.split(" ");let t=[];for(let r=0;r<e.length;r++)(e[r].startsWith("http://")||e[r].startsWith("https://"))&&this.isImage(e[r])&&t.push(e[r]);return t},isLink(n){return!!((n.startsWith("https://")||n.startsWith("http://"))&&!n.includes("javascript:"))},checkIfPfp(n){return!this.messages[n-1]||JSON.parse(this.messages[n-1].data().user).uid!=JSON.parse(this.messages[n].data().user).uid},selectMessage(n){let e=document.querySelector(`#${n} div.bg-white.px-2.py-2.rounded-md.rounded-tl-none`);e.classList.remove("selected"),e.classList.add("selected"),setTimeout(()=>{e.classList.remove("selected")},1e3)},editingMessage(n,e){n?(document.getElementById(e).classList.add("bg-slate-200"),document.getElementById(e).classList.add("dark:bg-slate-800"),document.getElementById(e).classList.add("p-2")):(document.getElementById(e).classList.remove("bg-slate-200"),document.getElementById(e).classList.remove("dark:bg-slate-800"),document.getElementById(e).classList.remove("p-2"))},editMessage(n,e){!n||!e||(ma(Kn(this.db,"messages","public",this.selectedChannel,e.id),{user:e.data().user,message:n,time:e.data().time,reply:e.data().reply?e.data().reply:null,edited:!0}),console.log("DONE"))}},mounted(){this.watch(),this.watchStatus(),this.watchChannels(),ma(Kn(this.db,"users",this.user.uid),{username:this.user.displayName,pfp:this.user.photoURL,online:!0}),window.onbeforeunload=()=>{ma(Kn(this.db,"users",this.user.uid),{username:this.user.displayName,pfp:this.user.photoURL,online:!1})},window.onclick=function(n){if(!n.target.matches(".DROPDOWN-MENU")&&!n.target.matches(".DROPDOWN-MENU-TOGGLE")){var e=document.getElementsByClassName("DROPDOWN-MENU"),t;for(t=0;t<e.length;t++){var r=e[t];r.classList.contains("hide")||r.classList.add("hide")}}}},watch:{selectedChannel(){const n=ga(Ti(this.db,"messages","public",this.selectedChannel),Nh("time","desc"),Vh(25));wi(n,e=>{this.messages=[],e.forEach(t=>{this.messages.unshift(t)}),console.log(`Current messages: ${this.messages.length}`),console.log(this.messages.map(t=>t.data().message).join(" | ")),setTimeout(()=>{this.$refs.scrollIntoView.scrollIntoView({behavior:"smooth"})},100)})}}},d0=Object.assign(h0,{__name:"Chat",setup(n){return(e,t)=>(ae(),ue("main",Hw,[et(lv,{class:"col-start-1 col-end-2 row-start-1 row-end-3",db:n.db,channels:e.channels,selectedChannel:e.selectedChannel,onSwap:t[0]||(t[0]=r=>e.selectedChannel=r),onLogOut:t[1]||(t[1]=()=>e.$emit("logOut","logOut"))},null,8,["db","channels","selectedChannel"]),oe("div",zw,[oe("section",Kw,[oe("ul",Ww,[(ae(!0),ue(Xe,null,Xn(e.messages,(r,s)=>(ae(),ue("li",{class:Tn([{"mt-2":e.checkIfPfp(s)},"grid grid-cols-[2rem,auto] w-full px-4"]),id:r.id},[e.checkIfPfp(s)?(ae(),ue("img",{key:0,referrerpolicy:"no-referrer",class:"rounded-full",src:JSON.parse(r.data().user).photoURL,alt:""},null,8,Qw)):Et("",!0),et(tv,{onReply:i=>e.selectedMessage=s,onDelete:i=>e.deleteMessage(r),onSeeReply:i=>e.selectMessage(r.data().reply),onIsEditing:i=>{e.editingMessage(i,r.id)},onEdit:i=>e.editMessage(i,r),messages:e.messages,message:r,user:n.user,index:s,class:"col-start-2 col-end-3"},null,8,["onReply","onDelete","onSeeReply","onIsEditing","onEdit","messages","message","user","index"])],10,Gw))),256))]),oe("div",Jw,null,512)]),oe("form",{class:"w-full flex bg-slate-200 px-5 py-6 items-end mb-[env(safe-area-inset-bottom)] relative col-start-2 col-end-3 row-start-2 row-end-23 dark:bg-[#0c1221]",onSubmit:t[4]||(t[4]=nf((...r)=>e.sendMessage&&e.sendMessage(...r),["prevent"])),ref:"sendForm"},[e.selectedMessage!==null?(ae(),ue("div",Xw,[oe("div",Yw,[zn(" Replying to message: "),oe("span",Zw,ct(e.messages[e.selectedMessage].data().message),1),oe("button",{type:"button",class:"underline ml-4 text-indigo-500 dark:text-indigo-300",onClick:t[2]||(t[2]=r=>e.selectedMessage=null)}," Cancel ")])])):Et("",!0),oe("input",{class:"py-2 px-3 rounded-l-md w-full outline-none border border-solid border-slate-300 dark:bg-slate-800 dark:border-slate-700",type:"text",placeholder:"Send a message",value:e.newMess,onInput:t[3]||(t[3]=r=>e.newMess=r.target.value)},null,40,e0),t0],544)]),oe("aside",n0,[oe("h1",r0,"Users - "+ct(e.users.length),1),oe("ul",s0,[(ae(!0),ue(Xe,null,Xn(e.onlineUsers,r=>(ae(),ue("li",i0,[oe("img",{referrerpolicy:"no-referrer",src:r.data().pfp,class:"h-8 w-8 rounded-full",alt:""},null,8,o0),oe("p",a0,ct(r.data().username),1)]))),256)),(ae(!0),ue(Xe,null,Xn(e.offlineUsers,r=>(ae(),ue("li",l0,[oe("img",{referrerpolicy:"no-referrer",src:r.data().pfp,class:"h-8 w-8 rounded-full brightness-75 contrast-75",alt:""},null,8,c0),oe("p",u0,ct(r.data().username),1)]))),256))])])]))}}),f0={props:{db:Object,user:Object},emits:["logOut"]},p0=Object.assign(f0,{__name:"LoggedIn",setup(n){return(e,t)=>(ae(),ml(d0,{db:n.db,user:n.user,onLogOut:t[0]||(t[0]=()=>e.$emit("logOut","logOut"))},null,8,["db","user"]))}});var g0="firebase",m0="10.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */En(g0,m0,"app");function rc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Bp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _0=Bp,jp=new Us("auth","Firebase",Bp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new vl("@firebase/auth");function y0(n,...e){Yi.logLevel<=de.WARN&&Yi.warn(`Auth (${Br}): ${n}`,...e)}function Vi(n,...e){Yi.logLevel<=de.ERROR&&Yi.error(`Auth (${Br}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(n,...e){throw ic(n,...e)}function St(n,...e){return ic(n,...e)}function sc(n,e,t){const r=Object.assign(Object.assign({},_0()),{[e]:t});return new Us("auth","Firebase",r).create(e,{appName:n.name})}function er(n){return sc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function v0(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&$t(n,"argument-error"),sc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ic(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return jp.create(n,...e)}function te(n,e,...t){if(!n)throw ic(e,...t)}function Wt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Vi(e),new Error(e)}function Zt(n,e){n||Wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function E0(){return Lh()==="http:"||Lh()==="https:"}function Lh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E0()||Iv()||"connection"in navigator)?navigator.onLine:!0}function T0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Zt(t>e,"Short delay should be less than long delay!"),this.isMobile=vv()||Tv()}get(){return I0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(n,e){Zt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=new Gs(3e4,6e4);function ac(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Kr(n,e,t,r,s={}){return Hp(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=$s(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode),qp.fetch()(zp(n,n.config.apiHost,t,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},i))})}async function Hp(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},w0),e);try{const s=new R0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ai(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ai(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ai(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ai(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw sc(n,f,d);$t(n,f)}}catch(s){if(s instanceof tn)throw s;$t(n,"network-request-failed",{message:String(s)})}}async function b0(n,e,t,r,s={}){const i=await Kr(n,e,t,r,s);return"mfaPendingCredential"in i&&$t(n,"multi-factor-auth-required",{_serverResponse:i}),i}function zp(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?oc(n.config,s):`${n.config.apiScheme}://${s}`}class R0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(St(this.auth,"network-request-failed")),A0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ai(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=St(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S0(n,e){return Kr(n,"POST","/v1/accounts:delete",e)}async function Kp(n,e){return Kr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function P0(n,e=!1){const t=Ke(n),r=await t.getIdToken(e),s=lc(r);te(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:As(_a(s.auth_time)),issuedAtTime:As(_a(s.iat)),expirationTime:As(_a(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _a(n){return Number(n)*1e3}function lc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Vi("JWT malformed, contained fewer than 3 sections"),null;try{const s=cf(t);return s?JSON.parse(s):(Vi("Failed to decode base64 JWT payload"),null)}catch(s){return Vi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Fh(n){const e=lc(n);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof tn&&C0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function C0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=As(this.lastLoginAt),this.creationTime=As(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Ls(n,Kp(t,{idToken:r}));te(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Wp(i.providerUserInfo):[],l=O0(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Ja(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function D0(n){const e=Ke(n);await Zi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function O0(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Wp(n){return n.map(e=>{var{providerId:t}=e,r=rc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N0(n,e){const t=await Hp(n,{},async()=>{const r=$s({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=zp(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",qp.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function V0(n,e){return Kr(n,"POST","/v2/accounts:revokeToken",ac(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=Fh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await N0(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Sr;return r&&(te(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Sr,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(n,e){te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Gt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=rc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new k0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ja(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ls(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return P0(this,e)}reload(){return D0(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Zi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kt(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await Ls(this,S0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,u,d,f;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,E=(s=t.email)!==null&&s!==void 0?s:void 0,S=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,M=(a=t.photoURL)!==null&&a!==void 0?a:void 0,F=(l=t.tenantId)!==null&&l!==void 0?l:void 0,L=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,X=(d=t.createdAt)!==null&&d!==void 0?d:void 0,ee=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:Q,emailVerified:le,isAnonymous:Ae,providerData:Y,stsTokenManager:w}=t;te(Q&&w,e,"internal-error");const m=Sr.fromJSON(this.name,w);te(typeof Q=="string",e,"internal-error"),cn(g,e.name),cn(E,e.name),te(typeof le=="boolean",e,"internal-error"),te(typeof Ae=="boolean",e,"internal-error"),cn(S,e.name),cn(M,e.name),cn(F,e.name),cn(L,e.name),cn(X,e.name),cn(ee,e.name);const v=new Gt({uid:Q,auth:e,email:E,emailVerified:le,displayName:g,isAnonymous:Ae,photoURL:M,phoneNumber:S,tenantId:F,stsTokenManager:m,createdAt:X,lastLoginAt:ee});return Y&&Array.isArray(Y)&&(v.providerData=Y.map(I=>Object.assign({},I))),L&&(v._redirectEventId=L),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new Sr;s.updateFromServerResponse(t);const i=new Gt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Zi(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Wp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Sr;l.updateFromIdToken(r);const u=new Gt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ja(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=new Map;function Qt(n){Zt(n instanceof Function,"Expected a class definition");let e=Uh.get(n);return e?(Zt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Uh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Gp.type="NONE";const $h=Gp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(n,e,t){return`firebase:${n}:${e}:${t}`}class Pr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Mi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Mi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Pr(Qt($h),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Qt($h);const a=Mi(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const f=await d._get(a);if(f){const g=Gt._fromJSON(e,f);d!==i&&(l=g),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Pr(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Pr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zp(e))return"Blackberry";if(eg(e))return"Webos";if(cc(e))return"Safari";if((e.includes("chrome/")||Jp(e))&&!e.includes("edge/"))return"Chrome";if(Yp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qp(n=ze()){return/firefox\//i.test(n)}function cc(n=ze()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jp(n=ze()){return/crios\//i.test(n)}function Xp(n=ze()){return/iemobile/i.test(n)}function Yp(n=ze()){return/android/i.test(n)}function Zp(n=ze()){return/blackberry/i.test(n)}function eg(n=ze()){return/webos/i.test(n)}function ko(n=ze()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function M0(n=ze()){var e;return ko(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function x0(){return wv()&&document.documentMode===10}function tg(n=ze()){return ko(n)||Yp(n)||eg(n)||Zp(n)||/windows phone/i.test(n)||Xp(n)}function L0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(n,e=[]){let t;switch(n){case"Browser":t=Bh(ze());break;case"Worker":t=`${Bh(ze())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Br}/${r}`}/**
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
 */class F0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function U0(n,e={}){return Kr(n,"GET","/v2/passwordPolicy",ac(n,e))}/**
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
 */const $0=6;class B0{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:$0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jh(this),this.idTokenSubscription=new jh(this),this.beforeStateQueue=new F0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Pr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Kp(this,{idToken:e}),r=await Gt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Kt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kt(this.app))return Promise.reject(er(this));const t=e?Ke(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kt(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kt(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await U0(this),t=new B0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Us("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await V0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qt(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await Pr.create(this,[Qt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ng(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&y0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Do(n){return Ke(n)}class jh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dv(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function q0(n){uc=n}function H0(n){return uc.loadJS(n)}function z0(){return uc.gapiScript}function K0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(n,e){const t=Il(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ji(i,e??{}))return s;$t(s,"already-initialized")}return t.initialize({options:e})}function G0(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Qt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Q0(n,e,t){const r=Do(n);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=rg(e),{host:a,port:l}=J0(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),X0()}function rg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function J0(n){const e=rg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:qh(a)}}}function qh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function X0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,t){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(n,e){return b0(n,"POST","/v1/accounts:signInWithIdp",ac(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="http://localhost";class ur extends sg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$t("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=rc(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new ur(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Cr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Cr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Cr(e,t)}buildRequest(){const e={requestUri:Y0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$s(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends hc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Qs{constructor(){super("facebook.com")}static credential(e){return ur._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Qs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ur._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Nt.credential(t,r)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Qs{constructor(){super("github.com")}static credential(e){return ur._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Qs{constructor(){super("twitter.com")}static credential(e,t){return ur._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return pn.credential(t,r)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Gt._fromIdTokenResponse(e,r,s),a=Hh(r);return new $r({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Hh(r);return new $r({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Hh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends tn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,eo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new eo(e,t,r,s)}}function ig(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?eo._fromErrorAndOperation(n,i,e,r):i})}async function Z0(n,e,t=!1){const r=await Ls(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return $r._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(n,e,t=!1){const{auth:r}=n;if(Kt(r.app))return Promise.reject(er(r));const s="reauthenticate";try{const i=await Ls(n,ig(r,s,e,n),t);te(i.idToken,r,"internal-error");const a=lc(i.idToken);te(a,r,"internal-error");const{sub:l}=a;return te(n.uid===l,r,"user-mismatch"),$r._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(n,e,t=!1){if(Kt(n.app))return Promise.reject(er(n));const r="signIn",s=await ig(n,r,e),i=await $r._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function nA(n,e,t,r){return Ke(n).onIdTokenChanged(e,t,r)}function rA(n,e,t){return Ke(n).beforeAuthStateChanged(e,t)}function sA(n){return Ke(n).signOut()}const to="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(to,"1"),this.storage.removeItem(to),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(){const n=ze();return cc(n)||ko(n)}const oA=1e3,aA=10;class ag extends og{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iA()&&L0(),this.fallbackToPolling=tg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);x0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,aA):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},oA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ag.type="LOCAL";const lA=ag;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg extends og{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}lg.type="SESSION";const cg=lg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Oo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,i)),u=await cA(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=dc("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const E=g;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(E.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return window}function hA(n){Ft().location.href=n}/**
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
 */function ug(){return typeof Ft().WorkerGlobalScope<"u"&&typeof Ft().importScripts=="function"}async function dA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function pA(){return ug()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="firebaseLocalStorageDb",gA=1,no="firebaseLocalStorage",dg="fbase_key";class Js{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function No(n,e){return n.transaction([no],e?"readwrite":"readonly").objectStore(no)}function mA(){const n=indexedDB.deleteDatabase(hg);return new Js(n).toPromise()}function Xa(){const n=indexedDB.open(hg,gA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(no,{keyPath:dg})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(no)?e(r):(r.close(),await mA(),e(await Xa()))})})}async function zh(n,e,t){const r=No(n,!0).put({[dg]:e,value:t});return new Js(r).toPromise()}async function _A(n,e){const t=No(n,!1).get(e),r=await new Js(t).toPromise();return r===void 0?null:r.value}function Kh(n,e){const t=No(n,!0).delete(e);return new Js(t).toPromise()}const yA=800,vA=3;class fg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>vA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ug()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oo._getInstance(pA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await dA(),!this.activeServiceWorker)return;this.sender=new uA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xa();return await zh(e,to,"1"),await Kh(e,to),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>zh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>_A(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Kh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=No(s,!1).getAll();return new Js(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fg.type="LOCAL";const EA=fg;new Gs(3e4,6e4);/**
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
 */function pg(n,e){return e?Qt(e):(te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc extends sg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Cr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Cr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function IA(n){return tA(n.auth,new fc(n),n.bypassAuthState)}function TA(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),eA(t,new fc(n),n.bypassAuthState)}async function wA(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),Z0(t,new fc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IA;case"linkViaPopup":case"linkViaRedirect":return wA;case"reauthViaPopup":case"reauthViaRedirect":return TA;default:$t(this.auth,"internal-error")}}resolve(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=new Gs(2e3,1e4);async function bA(n,e,t){if(Kt(n.app))return Promise.reject(St(n,"operation-not-supported-in-this-environment"));const r=Do(n);v0(n,e,hc);const s=pg(r,t);return new Gn(r,"signInViaPopup",e,s).executeNotNull()}class Gn extends gg{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Gn.currentPopupAction&&Gn.currentPopupAction.cancel(),Gn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const e=dc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AA.get())};e()}}Gn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="pendingRedirect",xi=new Map;class SA extends gg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=xi.get(this.auth._key());if(!e){try{const r=await PA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}xi.set(this.auth._key(),e)}return this.bypassAuthState||xi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PA(n,e){const t=DA(e),r=kA(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function CA(n,e){xi.set(n._key(),e)}function kA(n){return Qt(n._redirectPersistence)}function DA(n){return Mi(RA,n.config.apiKey,n.name)}async function OA(n,e,t=!1){if(Kt(n.app))return Promise.reject(er(n));const r=Do(n),s=pg(r,e),a=await new SA(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=10*60*1e3;class VA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!mg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(St(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wh(e))}saveEventToCache(e){this.cachedEventUids.add(Wh(e)),this.lastProcessedEventTime=Date.now()}}function Wh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function mg({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mg(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xA(n,e={}){return Kr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FA=/^https?/;async function UA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await xA(n);for(const t of e)try{if($A(t))return}catch{}$t(n,"unauthorized-domain")}function $A(n){const e=Qa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!FA.test(t))return!1;if(LA.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const BA=new Gs(3e4,6e4);function Gh(){const n=Ft().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function jA(n){return new Promise((e,t)=>{var r,s,i;function a(){Gh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gh(),t(St(n,"network-request-failed"))},timeout:BA.get()})}if(!((s=(r=Ft().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ft().gapi)===null||i===void 0)&&i.load)a();else{const l=K0("iframefcb");return Ft()[l]=()=>{gapi.load?a():t(St(n,"network-request-failed"))},H0(`${z0()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Li=null,e})}let Li=null;function qA(n){return Li=Li||jA(n),Li}/**
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
 */const HA=new Gs(5e3,15e3),zA="__/auth/iframe",KA="emulator/auth/iframe",WA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QA(n){const e=n.config;te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?oc(e,KA):`https://${n.config.authDomain}/${zA}`,r={apiKey:e.apiKey,appName:n.name,v:Br},s=GA.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${$s(r).slice(1)}`}async function JA(n){const e=await qA(n),t=Ft().gapi;return te(t,n,"internal-error"),e.open({where:document.body,url:QA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=St(n,"network-request-failed"),l=Ft().setTimeout(()=>{i(a)},HA.get());function u(){Ft().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const XA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YA=500,ZA=600,eb="_blank",tb="http://localhost";class Qh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nb(n,e,t,r=YA,s=ZA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},XA),{width:r.toString(),height:s.toString(),top:i,left:a}),d=ze().toLowerCase();t&&(l=Jp(d)?eb:t),Qp(d)&&(e=e||tb,u.scrollbars="yes");const f=Object.entries(u).reduce((E,[S,M])=>`${E}${S}=${M},`,"");if(M0(d)&&l!=="_self")return rb(e||"",l),new Qh(null);const g=window.open(e||"",l,f);te(g,n,"popup-blocked");try{g.focus()}catch{}return new Qh(g)}function rb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const sb="__/auth/handler",ib="emulator/auth/handler",ob=encodeURIComponent("fac");async function Jh(n,e,t,r,s,i){te(n.config.authDomain,n,"auth-domain-config-required"),te(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Br,eventId:s};if(e instanceof hc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",kv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof Qs){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),d=u?`#${ob}=${encodeURIComponent(u)}`:"";return`${ab(n)}?${$s(l).slice(1)}${d}`}function ab({config:n}){return n.emulator?oc(n,ib):`https://${n.authDomain}/${sb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="webStorageSupport";class lb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cg,this._completeRedirectFn=OA,this._overrideRedirectResult=CA}async _openPopup(e,t,r,s){var i;Zt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Jh(e,t,r,Qa(),s);return nb(e,a,dc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Jh(e,t,r,Qa(),s);return hA(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Zt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await JA(e),r=new VA(e);return t.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ya,{type:ya},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ya];a!==void 0&&t(!!a),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=UA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return tg()||cc()||ko()}}const cb=lb;var Xh="@firebase/auth",Yh="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function db(n){Or(new sr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ng(n)},d=new j0(r,s,i,u);return G0(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Or(new sr("auth-internal",e=>{const t=Do(e.getProvider("auth").getImmediate());return(r=>new ub(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(Xh,Yh,hb(n)),En(Xh,Yh,"esm2017")}/**
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
 */const fb=5*60,pb=df("authIdTokenMaxAge")||fb;let Zh=null;const gb=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>pb)return;const s=t==null?void 0:t.token;Zh!==s&&(Zh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function mb(n=mf()){const e=Il(n,"auth");if(e.isInitialized())return e.getImmediate();const t=W0(n,{popupRedirectResolver:cb,persistence:[EA,lA,cg]}),r=df("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=gb(i.toString());rA(t,a,()=>a(t.currentUser)),nA(t,l=>a(l))}}const s=uf("auth");return s&&Q0(t,`http://${s}`),t}function _b(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}q0({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=St("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",_b().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});db("Browser");const yb={key:1},vb={apiKey:"AIzaSyA7QOFfxtcX5_86-pwGKyDwoV0QFNQqpJE",authDomain:"auth-vue-firevbase.firebaseapp.com",projectId:"auth-vue-firevbase",storageBucket:"auth-vue-firevbase.appspot.com",messagingSenderId:"853679707197",appId:"1:853679707197:web:5f0084be8ba5fa2eb4c654",measurementId:"G-0D23SZXQE9"},_g=gf(vb),ed=mb(_g),yg=Sw(_g),Eb={data(){return{user:null}},methods:{googleSignin(){console.log("stage 1");const n=new Nt;bA(ed,n).then(e=>{Nt.credentialFromResult(e).accessToken,this.user=e.user,localStorage.setItem("user",JSON.stringify(this.user)),console.log("user: ",this.user),console.log("Username: ",this.user.displayName)}).catch(e=>{const t=e.code;e.message,console.log(e),console.log(t),console.log(t)})},googleSignout(){const n=this.user;console.log(n.uid);const e=Kn(yg,"users",n.uid);$w(e,{online:!1}),sA(ed).then(()=>{console.log("Sign-out successful."),this.user=null,localStorage.removeItem("user")}).catch(t=>{console.log("Error"),console.log(t)})}},mounted(){this.user=JSON.parse(localStorage.getItem("user"))},components:{SignIn:sf,SignOut:of}},Ib=Object.assign(Eb,{__name:"App",setup(n){return(e,t)=>e.user?(ae(),ue("div",yb,[et(p0,{class:"dark:text-white",db:bd(yg),user:e.user,onLogOut:t[1]||(t[1]=()=>e.googleSignout())},null,8,["db","user"])])):(ae(),ml(sf,{key:0,onResponse:t[0]||(t[0]=r=>e.googleSignin())}))}});dy(Ib).mount("#app");
